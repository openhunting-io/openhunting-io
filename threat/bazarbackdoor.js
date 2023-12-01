var threatdata = {
    "name": "BazarBackdoor",
    "alias": "BazarBackdoor, BazarLoader, BEERBOT, BazarCall, KEGTAP, Team9Backdoor, bazaloader",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2023-02-03",
    "all_data": {
        "tool": "BazarBackdoor",
        "names": [
            {
                "name": "BazarBackdoor"
            },
            {
                "name": "BazarLoader"
            },
            {
                "name": "BEERBOT"
            },
            {
                "name": "BazarCall"
            },
            {
                "name": "KEGTAP"
            },
            {
                "name": "Team9Backdoor"
            },
            {
                "name": "bazaloader"
            }
        ],
        "description": "(BleepingComputer) After a victim launches the downloaded file, the loader will sleep for a short period of time and then connect to command and control servers to check-in and download the backdoor payload.\nTo get the address of the command and control servers, BazarLoader will use the Emercoin decentralized DNS resolution service to resolve various hostnames that use the 'bazar' domain. The 'bazar' domain can only be utilized on Emercoin's DNS servers, and as it is decentralized, it makes it difficult, if not impossible, for law enforcement to seize the hostname.\n\nAfter the payload is downloaded, it will be filelessly injected into the C:\\Windows\\system32\\svchost.exe process. Security researcher Vitali Kremez told BleepingComputer that this is done using the Process Hollowing and Process Doppelg\u00e4nging techniques.\n\nAfter a period of time, both Kremez and James have told BleepingComputer that the backdoor will download and execute the {{Cobalt Strike}} penetration testing and post-exploitation toolkit on the victim's machine.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/bazarbackdoor-trickbot-gang-s-new-stealthy-network-hacking-malware/",
            "https://www.cybereason.com/blog/a-bazar-of-tricks-following-team9s-development-cycles",
            "https://cofense.com/the-ryuk-threat-why-bazarbackdoor-matters-most/",
            "https://www.advanced-intel.com/post/anatomy-of-attack-inside-bazarbackdoor-to-ryuk-ransomware-one-group-via-cobalt-strike",
            "https://cofense.com/blog/bazarbackdoor-stealthy-infiltration",
            "https://www.bleepingcomputer.com/news/security/trickbots-bazarbackdoor-malware-is-now-coded-in-nim-to-evade-antivirus/",
            "https://www.fortinet.com/blog/threat-research/new-bazar-trojan-variant-is-being-spread-in-recent-phishing-campaign-part-I",
            "https://www.fortinet.com/blog/threat-research/new-bazar-trojan-variant-is-being-spread-in-recent-phishing-campaign-part-II",
            "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-006.pdf",
            "https://thedfirreport.com/2021/03/08/bazar-drops-the-anchor/",
            "https://news.sophos.com/en-us/2021/04/15/bazarloader/",
            "https://unit42.paloaltonetworks.com/bazarloader-malware/",
            "http://www.intel471.com/blog/cobalt-strike-cybercriminals-trickbot-qbot-hancitor",
            "https://www.intezer.com/blog/malware-analysis/wrapping-up-a-year-of-infamous-bazar-campaigns/",
            "https://beta.darkreading.com/attacks-breaches/microsoft-tracks-new-bazacall-malware-campaign",
            "https://cofense.com/blog/nested-files-evade-segs/",
            "https://cyware.com/news/bazarbackdoor-uses-new-obfuscation-tricks-to-challenge-security-369b4c0b",
            "https://www.bleepingcomputer.com/news/security/fake-dmca-and-ddos-complaints-lead-to-bazaloader-malware/",
            "https://unit42.paloaltonetworks.com/bazarloader-network-reconnaissance/",
            "https://news.sophos.com/en-us/2021/11/11/bazarloader-call-me-back-attack-abuses-windows-10-apps-mechanism/",
            "https://www.trendmicro.com/en_us/research/21/k/bazarloader-adds-compromised-installers-iso-to-arrival-delivery-vectors.html",
            "https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/",
            "https://www.bleepingcomputer.com/news/security/malicious-csv-text-files-used-to-install-bazarbackdoor-malware/",
            "https://abnormalsecurity.com/blog/bazarloader-contact-form",
            "https://unit42.paloaltonetworks.com/bazarloader-anti-analysis-techniques/",
            "https://www.advintel.io/post/bazarcall-advisory-the-essential-guide-to-call-back-phishing-attacks-that-revolutionized-the-data",
            "https://www.trellix.com/en-us/about/newsroom/stories/research/evolution-of-bazarcall-social-engineering-tactics.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bazarbackdoor"
        ],
        "uuid": "45260893-fa7b-4738-aecd-7d6ad6cc1577",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BazarBackdoor",
            "malware_alias": "BEERBOT,KEGTAP,Team9Backdoor,bazaloader,bazarloader",
            "malware": "win.bazarbackdoor",
            "last_update": "2023-11-17 15:33:39",
            "tags": [
                "dll",
                "signed",
                "exe",
                "bazarloader",
                "bazaloader",
                "fud",
                "iso",
                "ta551",
                "BazarCall",
                "bazarbackoor",
                "malware",
                "bazarbackdoor",
                "openfield",
                "Shathak",
                "TA571",
                "password-dt2601",
                "BazarBackdoor",
                "Bazarbackdoor",
                "Bazarloader",
                "BazaLoader",
                "BazarLoader",
                "bazaloder",
                "BazaBackdoor",
                "Shatak",
                "bazarcall",
                "baarloader",
                "geofenced",
                "pw-dt2100",
                "xll",
                "password-DT3101",
                "TA551"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "5.252.177.62:443",
                        "timestamp": "2022-03-16 14:05:12"
                    },
                    {
                        "value": "45.131.66.226:443",
                        "timestamp": "2022-02-25 17:37:25"
                    },
                    {
                        "value": "23.254.211.173:443",
                        "timestamp": "2022-02-25 17:37:25"
                    },
                    {
                        "value": "94.140.114.105:443",
                        "timestamp": "2022-02-25 17:37:25"
                    },
                    {
                        "value": "137.74.104.103:443",
                        "timestamp": "2022-03-03 14:59:06"
                    },
                    {
                        "value": "80.92.204.176:443",
                        "timestamp": "2022-02-20 19:54:56"
                    },
                    {
                        "value": "5.2.67.108:443",
                        "timestamp": "2022-03-22 17:34:16"
                    },
                    {
                        "value": "185.83.91.229:443",
                        "timestamp": "2022-02-15 05:29:26"
                    },
                    {
                        "value": "103.208.86.105:443",
                        "timestamp": "2022-02-12 09:16:43"
                    },
                    {
                        "value": "5.2.70.80:443",
                        "timestamp": "2022-02-12 03:26:55"
                    },
                    {
                        "value": "103.208.86.112:443",
                        "timestamp": "2022-02-12 05:35:17"
                    },
                    {
                        "value": "103.208.86.211:443",
                        "timestamp": "2022-02-12 05:35:17"
                    },
                    {
                        "value": "103.208.86.234:443",
                        "timestamp": "2022-02-12 05:35:17"
                    },
                    {
                        "value": "103.208.86.235:443",
                        "timestamp": "2022-02-12 05:35:16"
                    },
                    {
                        "value": "103.208.86.205:443",
                        "timestamp": "2022-02-12 05:35:16"
                    },
                    {
                        "value": "194.76.227.98:443",
                        "timestamp": "2022-02-12 09:44:55"
                    },
                    {
                        "value": "45.14.226.234:443",
                        "timestamp": "2022-02-11 13:58:37"
                    },
                    {
                        "value": "23.160.193.223:443",
                        "timestamp": "2022-02-09 01:06:16"
                    },
                    {
                        "value": "45.41.204.158:443",
                        "timestamp": "2022-02-09 01:25:10"
                    },
                    {
                        "value": "192.119.162.97:443",
                        "timestamp": "2022-02-26 12:55:20"
                    },
                    {
                        "value": "198.252.108.16:443",
                        "timestamp": "2022-02-08 22:16:16"
                    },
                    {
                        "value": "80.71.158.142:443",
                        "timestamp": "2022-02-08 14:58:29"
                    },
                    {
                        "value": "84.32.188.13:443",
                        "timestamp": "2022-02-08 14:58:29"
                    },
                    {
                        "value": "5.182.207.28:443",
                        "timestamp": "2022-02-08 14:58:29"
                    },
                    {
                        "value": "80.71.158.42:443",
                        "timestamp": "2022-02-07 14:03:58"
                    },
                    {
                        "value": "103.124.107.111:443",
                        "timestamp": "2022-02-07 07:29:28"
                    },
                    {
                        "value": "185.158.251.101:443",
                        "timestamp": "2022-03-04 06:04:10"
                    },
                    {
                        "value": "194.38.20.12:443",
                        "timestamp": "2022-02-20 03:14:48"
                    },
                    {
                        "value": "45.41.204.156:443",
                        "timestamp": "2022-02-09 01:25:07"
                    },
                    {
                        "value": "109.230.199.106:443",
                        "timestamp": "2022-03-04 06:04:09"
                    },
                    {
                        "value": "194.76.227.89:443",
                        "timestamp": "2022-03-04 06:04:10"
                    },
                    {
                        "value": "23.160.193.62:443",
                        "timestamp": "2022-02-04 11:09:00"
                    },
                    {
                        "value": "45.41.204.153:443",
                        "timestamp": "2022-02-04 11:09:00"
                    },
                    {
                        "value": "5.34.179.33:443",
                        "timestamp": "2022-02-04 08:17:13"
                    },
                    {
                        "value": "94.140.114.254:443",
                        "timestamp": "2022-02-05 15:42:18"
                    },
                    {
                        "value": "104.200.67.231:443",
                        "timestamp": "2022-02-04 08:17:13"
                    },
                    {
                        "value": "139.28.235.26:443",
                        "timestamp": "2022-02-08 19:56:23"
                    },
                    {
                        "value": "94.158.245.34:443",
                        "timestamp": "2022-02-03 09:10:24"
                    },
                    {
                        "value": "5.2.78.37:443",
                        "timestamp": "2022-02-02 00:17:01"
                    },
                    {
                        "value": "23.160.193.24:443",
                        "timestamp": "2022-02-01 23:13:06"
                    },
                    {
                        "value": "45.41.204.137:443",
                        "timestamp": "2022-02-02 03:06:07"
                    },
                    {
                        "value": "45.89.127.63:443",
                        "timestamp": "2022-02-03 09:10:24"
                    },
                    {
                        "value": "80.71.158.110:443",
                        "timestamp": "2022-02-03 09:10:24"
                    },
                    {
                        "value": "185.38.185.13:443",
                        "timestamp": "2022-02-03 09:10:24"
                    },
                    {
                        "value": "104.168.48.120:443",
                        "timestamp": "2022-02-01 10:43:21"
                    },
                    {
                        "value": "185.99.132.67:443",
                        "timestamp": "2022-02-01 10:43:21"
                    },
                    {
                        "value": "185.14.31.205:443",
                        "timestamp": "2022-02-01 10:43:21"
                    },
                    {
                        "value": "23.160.193.217:443",
                        "timestamp": "2022-02-11 13:58:37"
                    },
                    {
                        "value": "185.99.132.248:443",
                        "timestamp": "2022-02-11 13:58:38"
                    },
                    {
                        "value": "185.163.45.201:443",
                        "timestamp": "2022-02-12 14:03:53"
                    },
                    {
                        "value": "194.38.20.33:443",
                        "timestamp": "2022-02-13 03:13:52"
                    },
                    {
                        "value": "194.40.243.33:443",
                        "timestamp": "2022-02-16 03:13:51"
                    },
                    {
                        "value": "194.180.174.138:443",
                        "timestamp": "2022-02-16 15:52:11"
                    },
                    {
                        "value": "5.39.63.98:443",
                        "timestamp": "2022-02-17 05:45:07"
                    },
                    {
                        "value": "45.14.226.23:443",
                        "timestamp": "2022-02-15 15:33:07"
                    },
                    {
                        "value": "144.217.50.254:443",
                        "timestamp": "2022-02-20 04:14:48"
                    },
                    {
                        "value": "146.19.253.90:443",
                        "timestamp": "2022-01-31 04:16:09"
                    },
                    {
                        "value": "185.163.45.173:443",
                        "timestamp": "2022-02-07 14:03:55"
                    },
                    {
                        "value": "94.158.245.232:443",
                        "timestamp": "2022-01-27 20:56:56"
                    },
                    {
                        "value": "172.96.189.86:443",
                        "timestamp": "2022-01-30 22:45:20"
                    },
                    {
                        "value": "185.99.132.109:443",
                        "timestamp": "2022-01-27 21:34:48"
                    },
                    {
                        "value": "186.73.40.224:443",
                        "timestamp": "2022-02-05 11:42:49"
                    },
                    {
                        "value": "194.40.243.76:443",
                        "timestamp": "2022-01-30 11:51:06"
                    },
                    {
                        "value": "23.160.193.12:443",
                        "timestamp": "2022-01-28 06:33:02"
                    },
                    {
                        "value": "23.160.193.16:443",
                        "timestamp": "2022-01-28 06:30:09"
                    },
                    {
                        "value": "23.160.193.38:443",
                        "timestamp": "2022-01-30 11:51:05"
                    },
                    {
                        "value": "45.41.204.151:443",
                        "timestamp": "2022-01-27 04:44:38"
                    },
                    {
                        "value": "87.120.8.202:443",
                        "timestamp": "2022-01-27 04:44:38"
                    },
                    {
                        "value": "91.92.109.65:443",
                        "timestamp": "2022-01-27 04:44:38"
                    },
                    {
                        "value": "80.71.158.109:443",
                        "timestamp": "2022-01-27 15:05:54"
                    },
                    {
                        "value": "94.140.115.130:443",
                        "timestamp": "2022-01-27 04:44:39"
                    },
                    {
                        "value": "103.114.163.175:443",
                        "timestamp": "2022-01-27 04:44:39"
                    },
                    {
                        "value": "87.120.37.114:443",
                        "timestamp": "2022-01-26 21:26:16"
                    },
                    {
                        "value": "5.181.156.53:443",
                        "timestamp": "2022-01-30 14:01:16"
                    },
                    {
                        "value": "104.143.94.101:80",
                        "timestamp": "2022-01-25 08:17:59"
                    },
                    {
                        "value": "194.147.115.133:443",
                        "timestamp": "2022-01-22 14:28:06"
                    },
                    {
                        "value": "103.208.86.245:443",
                        "timestamp": "2022-01-22 23:51:46"
                    },
                    {
                        "value": "194.15.113.155:443",
                        "timestamp": "2022-01-29 01:46:18"
                    },
                    {
                        "value": "104.143.94.101:443",
                        "timestamp": "2022-01-22 01:04:02"
                    },
                    {
                        "value": "91.201.202.219:443",
                        "timestamp": "2022-02-05 08:18:57"
                    },
                    {
                        "value": "185.99.132.121:443",
                        "timestamp": "2022-01-26 14:30:21"
                    },
                    {
                        "value": "185.183.96.244:443",
                        "timestamp": "2022-02-06 18:34:26"
                    },
                    {
                        "value": "188.127.235.177:443",
                        "timestamp": "2022-02-18 03:14:58"
                    },
                    {
                        "value": "87.120.37.173:443",
                        "timestamp": "2022-01-21 15:01:59"
                    },
                    {
                        "value": "87.121.52.79:443",
                        "timestamp": "2022-01-21 15:01:59"
                    },
                    {
                        "value": "148.163.42.213:443",
                        "timestamp": "2022-01-22 14:28:06"
                    },
                    {
                        "value": "162.55.32.153:443",
                        "timestamp": "2022-01-24 05:45:36"
                    },
                    {
                        "value": "23.160.193.221:443",
                        "timestamp": "2022-07-03 20:43:40"
                    },
                    {
                        "value": "31.13.195.87:443",
                        "timestamp": "2022-01-21 15:01:58"
                    },
                    {
                        "value": "31.13.195.90:443",
                        "timestamp": "2022-01-21 15:01:58"
                    },
                    {
                        "value": "62.86.87.126:443",
                        "timestamp": "2022-01-21 15:01:58"
                    },
                    {
                        "value": "80.71.158.106:443",
                        "timestamp": "2022-02-17 03:11:08"
                    },
                    {
                        "value": "23.160.193.190:443",
                        "timestamp": "2022-02-28 13:01:17"
                    },
                    {
                        "value": "188.127.251.106:443",
                        "timestamp": "2022-02-05 08:18:56"
                    },
                    {
                        "value": "194.38.20.11:443",
                        "timestamp": "2022-01-21 14:59:28"
                    },
                    {
                        "value": "194.38.20.30:443",
                        "timestamp": "2022-02-05 08:18:56"
                    },
                    {
                        "value": "194.147.115.132:443",
                        "timestamp": "2022-02-05 08:18:57"
                    },
                    {
                        "value": "94.140.113.53:443",
                        "timestamp": "2022-01-26 14:30:20"
                    },
                    {
                        "value": "142.11.237.178:443",
                        "timestamp": "2022-02-10 14:04:07"
                    },
                    {
                        "value": "144.217.50.242:443",
                        "timestamp": "2022-02-13 04:55:54"
                    },
                    {
                        "value": "185.163.45.95:443",
                        "timestamp": "2022-01-26 14:30:21"
                    },
                    {
                        "value": "5.181.80.177:443",
                        "timestamp": "2022-02-14 11:54:50"
                    },
                    {
                        "value": "5.181.156.203:443",
                        "timestamp": "2022-01-21 14:59:26"
                    },
                    {
                        "value": "23.160.193.119:443",
                        "timestamp": "2022-01-30 13:00:56"
                    },
                    {
                        "value": "80.71.158.22:443",
                        "timestamp": "2022-01-26 14:30:18"
                    },
                    {
                        "value": "5.39.63.103:443",
                        "timestamp": "2022-02-14 14:56:04"
                    },
                    {
                        "value": "185.163.45.132:443",
                        "timestamp": "2022-01-29 14:03:08"
                    },
                    {
                        "value": "194.147.115.7:443",
                        "timestamp": "2022-01-16 13:51:43"
                    },
                    {
                        "value": "87.120.254.154:443",
                        "timestamp": "2022-01-16 22:25:33"
                    },
                    {
                        "value": "87.121.52.231:443",
                        "timestamp": "2022-07-03 19:56:51"
                    },
                    {
                        "value": "45.41.204.150:443",
                        "timestamp": "2022-01-29 22:54:02"
                    },
                    {
                        "value": "148.163.42.203:443",
                        "timestamp": "2022-01-16 13:51:42"
                    },
                    {
                        "value": "193.169.86.84:443",
                        "timestamp": "2022-01-13 14:23:30"
                    },
                    {
                        "value": "94.140.115.3:443",
                        "timestamp": "2023-01-06 20:40:35"
                    },
                    {
                        "value": "5.181.80.108:443",
                        "timestamp": "2022-01-12 23:14:29"
                    },
                    {
                        "value": "45.15.131.126:443",
                        "timestamp": "2022-01-24 18:15:45"
                    },
                    {
                        "value": "103.208.86.228:443",
                        "timestamp": "2022-01-08 19:04:56"
                    },
                    {
                        "value": "103.208.86.233:443",
                        "timestamp": "2022-02-10 19:35:09"
                    },
                    {
                        "value": "103.208.86.221:443",
                        "timestamp": "2022-01-01 04:10:29"
                    },
                    {
                        "value": "5.135.255.247:443",
                        "timestamp": "2021-12-27 14:04:28"
                    },
                    {
                        "value": "91.201.202.216:443",
                        "timestamp": "2021-12-27 22:56:52"
                    },
                    {
                        "value": "103.124.107.109:443",
                        "timestamp": "2023-02-15 22:21:45"
                    },
                    {
                        "value": "192.119.93.26:443",
                        "timestamp": "2022-01-21 14:03:13"
                    },
                    {
                        "value": "91.92.109.147:443",
                        "timestamp": "2021-12-27 14:04:28"
                    },
                    {
                        "value": "91.92.109.172:443",
                        "timestamp": "2021-12-27 14:04:28"
                    },
                    {
                        "value": "103.208.86.171:443",
                        "timestamp": "2021-12-25 13:11:20"
                    },
                    {
                        "value": "103.208.86.173:443",
                        "timestamp": "2021-12-25 13:11:20"
                    },
                    {
                        "value": "103.208.86.174:443",
                        "timestamp": "2021-12-25 13:11:20"
                    },
                    {
                        "value": "103.208.86.165:443",
                        "timestamp": "2021-12-25 13:11:19"
                    },
                    {
                        "value": "5.181.80.16:443",
                        "timestamp": "2021-12-25 13:09:11"
                    },
                    {
                        "value": "5.181.156.16:443",
                        "timestamp": "2022-01-21 14:03:12"
                    },
                    {
                        "value": "31.13.195.107:443",
                        "timestamp": "2021-12-26 15:37:22"
                    },
                    {
                        "value": "31.13.195.133:443",
                        "timestamp": "2021-12-26 15:37:21"
                    },
                    {
                        "value": "87.120.8.185:443",
                        "timestamp": "2021-12-26 15:37:22"
                    },
                    {
                        "value": "94.140.114.201:443",
                        "timestamp": "2022-01-22 14:02:27"
                    },
                    {
                        "value": "31.13.195.140:443",
                        "timestamp": "2021-12-23 16:50:29"
                    },
                    {
                        "value": "103.208.86.139:443",
                        "timestamp": "2022-04-07 14:13:30"
                    },
                    {
                        "value": "103.208.86.141:443",
                        "timestamp": "2021-12-22 13:39:29"
                    },
                    {
                        "value": "87.120.254.119:443",
                        "timestamp": "2021-12-22 12:37:58"
                    },
                    {
                        "value": "87.121.52.61:443",
                        "timestamp": "2021-12-22 12:37:58"
                    },
                    {
                        "value": "91.92.109.66:443",
                        "timestamp": "2021-12-22 12:37:58"
                    },
                    {
                        "value": "103.208.86.148:443",
                        "timestamp": "2021-12-22 19:39:24"
                    },
                    {
                        "value": "103.208.86.176:443",
                        "timestamp": "2021-12-22 19:43:11"
                    },
                    {
                        "value": "103.208.86.177:443",
                        "timestamp": "2021-12-22 19:43:12"
                    },
                    {
                        "value": "103.208.86.179:443",
                        "timestamp": "2022-01-26 02:58:54"
                    },
                    {
                        "value": "103.208.86.151:443",
                        "timestamp": "2021-12-22 19:34:09"
                    },
                    {
                        "value": "103.208.86.182:443",
                        "timestamp": "2021-12-22 19:34:09"
                    },
                    {
                        "value": "87.120.8.168:443",
                        "timestamp": "2021-12-21 14:47:20"
                    },
                    {
                        "value": "91.92.109.52:443",
                        "timestamp": "2021-12-21 13:52:48"
                    },
                    {
                        "value": "91.92.109.54:443",
                        "timestamp": "2021-12-21 13:52:48"
                    },
                    {
                        "value": "87.120.254.135:443",
                        "timestamp": "2021-12-21 13:52:47"
                    },
                    {
                        "value": "87.121.52.13:443",
                        "timestamp": "2021-12-21 13:52:47"
                    },
                    {
                        "value": "31.13.195.187:443",
                        "timestamp": "2021-12-21 13:52:46"
                    },
                    {
                        "value": "45.148.123.47:443",
                        "timestamp": "2021-12-20 15:47:17"
                    },
                    {
                        "value": "87.120.8.69:443",
                        "timestamp": "2021-12-20 15:47:17"
                    },
                    {
                        "value": "31.13.195.126:443",
                        "timestamp": "2021-12-21 13:52:46"
                    },
                    {
                        "value": "87.121.52.177:443",
                        "timestamp": "2021-12-20 15:47:18"
                    },
                    {
                        "value": "87.120.8.91:443",
                        "timestamp": "2021-12-20 15:47:17"
                    },
                    {
                        "value": "194.29.101.118:443",
                        "timestamp": "2021-12-23 16:10:04"
                    },
                    {
                        "value": "87.120.254.198:443",
                        "timestamp": "2021-12-16 09:28:47"
                    },
                    {
                        "value": "31.13.195.188:443",
                        "timestamp": "2021-12-16 09:28:46"
                    },
                    {
                        "value": "94.140.113.0:443",
                        "timestamp": "2021-12-16 15:53:00"
                    },
                    {
                        "value": "103.124.106.174:443",
                        "timestamp": "2021-12-21 14:35:38"
                    },
                    {
                        "value": "31.13.195.189:443",
                        "timestamp": "2021-12-16 09:28:46"
                    },
                    {
                        "value": "87.120.8.99:443",
                        "timestamp": "2021-12-15 22:12:49"
                    },
                    {
                        "value": "194.15.112.35:443",
                        "timestamp": "2021-12-21 13:57:55"
                    },
                    {
                        "value": "94.140.112.185:443",
                        "timestamp": "2021-12-14 15:57:10"
                    },
                    {
                        "value": "147.189.143.13:443",
                        "timestamp": "2021-12-16 01:18:05"
                    },
                    {
                        "value": "185.183.98.39:443",
                        "timestamp": "2021-12-21 03:12:16"
                    },
                    {
                        "value": "87.120.8.129:443",
                        "timestamp": "2022-01-26 21:26:12"
                    },
                    {
                        "value": "87.120.8.163:443",
                        "timestamp": "2022-01-26 21:26:13"
                    },
                    {
                        "value": "91.92.109.141:443",
                        "timestamp": "2022-01-26 21:26:12"
                    },
                    {
                        "value": "87.120.254.112:443",
                        "timestamp": "2021-12-15 21:57:13"
                    },
                    {
                        "value": "87.121.52.248:443",
                        "timestamp": "2021-12-15 22:12:46"
                    },
                    {
                        "value": "87.120.8.198:443",
                        "timestamp": "2022-01-26 21:26:12"
                    },
                    {
                        "value": "87.120.8.248:443",
                        "timestamp": "2022-01-27 04:44:38"
                    },
                    {
                        "value": "87.120.8.179:443",
                        "timestamp": "2022-01-26 21:26:11"
                    },
                    {
                        "value": "87.120.254.21:443",
                        "timestamp": "2022-01-27 04:44:38"
                    },
                    {
                        "value": "87.120.254.33:443",
                        "timestamp": "2022-01-26 21:30:10"
                    },
                    {
                        "value": "87.120.254.75:443",
                        "timestamp": "2021-12-15 22:12:44"
                    },
                    {
                        "value": "87.121.52.124:443",
                        "timestamp": "2021-12-15 22:12:45"
                    },
                    {
                        "value": "87.120.37.179:443",
                        "timestamp": "2021-12-15 21:57:10"
                    },
                    {
                        "value": "31.13.195.125:443",
                        "timestamp": "2022-01-26 21:26:11"
                    },
                    {
                        "value": "87.120.8.87:443",
                        "timestamp": "2021-12-15 21:57:09"
                    },
                    {
                        "value": "31.13.195.85:443",
                        "timestamp": "2021-12-15 21:57:08"
                    },
                    {
                        "value": "87.120.37.76:443",
                        "timestamp": "2021-12-15 21:57:09"
                    },
                    {
                        "value": "162.33.177.154:443",
                        "timestamp": "2021-12-09 19:41:12"
                    },
                    {
                        "value": "31.13.195.71:443",
                        "timestamp": "2021-12-15 21:57:08"
                    },
                    {
                        "value": "87.120.37.37:443",
                        "timestamp": "2021-12-08 12:08:34"
                    },
                    {
                        "value": "87.121.52.195:443",
                        "timestamp": "2021-12-15 22:00:00"
                    },
                    {
                        "value": "162.33.178.33:443",
                        "timestamp": "2021-12-09 13:25:07"
                    },
                    {
                        "value": "162.33.179.47:443",
                        "timestamp": "2021-12-08 20:26:31"
                    },
                    {
                        "value": "195.123.222.45:443",
                        "timestamp": "2021-12-08 11:24:18"
                    },
                    {
                        "value": "212.8.251.19:443",
                        "timestamp": "2021-12-08 11:24:18"
                    },
                    {
                        "value": "192.144.39.33:443",
                        "timestamp": "2021-12-08 11:24:17"
                    },
                    {
                        "value": "85.237.217.241:443",
                        "timestamp": "2021-12-08 11:24:17"
                    },
                    {
                        "value": "87.120.8.46:443",
                        "timestamp": "2021-12-15 22:00:01"
                    },
                    {
                        "value": "87.120.37.71:443",
                        "timestamp": "2021-12-15 22:00:00"
                    },
                    {
                        "value": "87.120.37.64:443",
                        "timestamp": "2021-12-15 21:59:59"
                    },
                    {
                        "value": "83.138.53.138:443",
                        "timestamp": "2021-12-07 20:32:02"
                    },
                    {
                        "value": "198.252.108.68:443",
                        "timestamp": "2021-12-08 11:41:00"
                    },
                    {
                        "value": "23.160.193.91:443",
                        "timestamp": "2021-12-04 09:57:38"
                    },
                    {
                        "value": "45.138.51.223:443",
                        "timestamp": "2021-12-08 11:24:17"
                    },
                    {
                        "value": "162.33.177.179:443",
                        "timestamp": "2021-12-04 19:12:14"
                    },
                    {
                        "value": "162.33.179.216:443",
                        "timestamp": "2021-12-03 16:26:50"
                    },
                    {
                        "value": "162.33.178.97:443",
                        "timestamp": "2021-12-03 22:51:38"
                    },
                    {
                        "value": "162.33.177.216:443",
                        "timestamp": "2021-12-03 16:39:05"
                    },
                    {
                        "value": "162.33.178.148:443",
                        "timestamp": "2021-12-03 16:39:05"
                    },
                    {
                        "value": "162.33.179.50:443",
                        "timestamp": "2021-12-03 16:39:05"
                    },
                    {
                        "value": "162.33.178.45:443",
                        "timestamp": "2021-12-03 09:57:36"
                    },
                    {
                        "value": "162.33.179.158:443",
                        "timestamp": "2021-12-03 09:57:36"
                    },
                    {
                        "value": "162.33.177.69:443",
                        "timestamp": "2021-12-02 18:42:29"
                    },
                    {
                        "value": "162.33.177.194:443",
                        "timestamp": "2021-12-02 18:42:29"
                    },
                    {
                        "value": "162.33.177.196:443",
                        "timestamp": "2021-12-02 18:42:30"
                    },
                    {
                        "value": "162.33.178.35:443",
                        "timestamp": "2021-12-02 18:42:31"
                    },
                    {
                        "value": "162.33.179.8:443",
                        "timestamp": "2021-12-02 11:03:55"
                    },
                    {
                        "value": "162.33.179.166:443",
                        "timestamp": "2021-12-02 11:03:55"
                    },
                    {
                        "value": "8.209.92.187:443",
                        "timestamp": "2021-12-02 11:03:54"
                    },
                    {
                        "value": "162.33.177.229:443",
                        "timestamp": "2021-11-29 23:42:21"
                    },
                    {
                        "value": "162.33.178.49:443",
                        "timestamp": "2021-11-29 23:42:22"
                    },
                    {
                        "value": "195.123.233.35:443",
                        "timestamp": "2021-11-29 15:28:56"
                    },
                    {
                        "value": "107.181.187.66:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "162.33.177.217:443",
                        "timestamp": "2021-11-29 00:23:53"
                    },
                    {
                        "value": "162.33.178.20:443",
                        "timestamp": "2021-11-29 00:23:53"
                    },
                    {
                        "value": "162.33.178.129:443",
                        "timestamp": "2021-11-28 10:12:33"
                    },
                    {
                        "value": "162.33.179.67:443",
                        "timestamp": "2023-07-05 13:04:54"
                    },
                    {
                        "value": "162.33.179.245:443",
                        "timestamp": "2021-11-28 14:53:57"
                    },
                    {
                        "value": "162.33.178.12:443",
                        "timestamp": "2021-11-27 23:19:19"
                    },
                    {
                        "value": "162.33.179.171:443",
                        "timestamp": "2021-11-26 13:01:59"
                    },
                    {
                        "value": "162.33.178.147:443",
                        "timestamp": "2021-11-25 12:29:13"
                    },
                    {
                        "value": "162.33.177.88:443",
                        "timestamp": "2021-11-25 23:49:05"
                    },
                    {
                        "value": "162.33.179.53:443",
                        "timestamp": "2021-11-25 23:49:05"
                    },
                    {
                        "value": "45.61.136.243:443",
                        "timestamp": "2021-11-24 09:51:53"
                    },
                    {
                        "value": "45.61.136.128:443",
                        "timestamp": "2021-11-25 23:29:56"
                    },
                    {
                        "value": "162.33.179.237:443",
                        "timestamp": "2021-11-25 23:34:53"
                    },
                    {
                        "value": "162.33.179.240:443",
                        "timestamp": "2023-09-21 15:33:37"
                    },
                    {
                        "value": "162.33.179.99:443",
                        "timestamp": "2021-11-25 23:43:36"
                    },
                    {
                        "value": "162.33.179.96:443",
                        "timestamp": "2021-11-25 23:43:35"
                    },
                    {
                        "value": "162.33.178.248:443",
                        "timestamp": "2021-11-25 23:47:25"
                    },
                    {
                        "value": "162.33.179.144:443",
                        "timestamp": "2021-11-25 23:29:35"
                    },
                    {
                        "value": "162.33.177.90:443",
                        "timestamp": "2021-11-25 23:29:34"
                    },
                    {
                        "value": "162.33.179.213:443",
                        "timestamp": "2021-11-25 23:29:34"
                    },
                    {
                        "value": "162.33.179.16:443",
                        "timestamp": "2021-11-25 23:29:33"
                    },
                    {
                        "value": "162.33.178.153:443",
                        "timestamp": "2021-11-25 23:43:35"
                    },
                    {
                        "value": "162.33.178.139:443",
                        "timestamp": "2021-11-25 23:39:06"
                    },
                    {
                        "value": "162.33.177.219:443",
                        "timestamp": "2021-11-25 23:39:06"
                    },
                    {
                        "value": "162.33.179.253:443",
                        "timestamp": "2021-11-25 23:29:35"
                    },
                    {
                        "value": "162.33.177.123:443",
                        "timestamp": "2021-11-25 23:29:34"
                    },
                    {
                        "value": "162.33.179.71:443",
                        "timestamp": "2021-11-25 23:39:05"
                    },
                    {
                        "value": "162.33.178.65:443",
                        "timestamp": "2021-11-25 23:29:33"
                    },
                    {
                        "value": "162.33.179.12:443",
                        "timestamp": "2021-11-25 23:29:34"
                    },
                    {
                        "value": "162.33.178.118:443",
                        "timestamp": "2021-11-16 13:34:16"
                    },
                    {
                        "value": "162.33.177.158:443",
                        "timestamp": "2021-11-25 23:34:52"
                    },
                    {
                        "value": "162.33.178.16:443",
                        "timestamp": "2021-11-15 14:08:05"
                    },
                    {
                        "value": "162.33.179.237:443",
                        "timestamp": "2021-11-15 14:08:05"
                    },
                    {
                        "value": "130.82.171.10:443",
                        "timestamp": "2021-11-14 16:12:34"
                    },
                    {
                        "value": "162.33.177.74:443",
                        "timestamp": "2021-11-14 16:12:34"
                    },
                    {
                        "value": "162.33.178.237:443",
                        "timestamp": "2021-11-25 17:40:12"
                    },
                    {
                        "value": "206.188.196.201:443",
                        "timestamp": "2023-11-17 15:33:39"
                    },
                    {
                        "value": "162.33.178.111:443",
                        "timestamp": "2021-11-12 19:07:04"
                    },
                    {
                        "value": "162.33.179.44:443",
                        "timestamp": "2021-11-12 19:07:04"
                    },
                    {
                        "value": "172.105.103.81:443",
                        "timestamp": "2021-11-12 19:07:04"
                    },
                    {
                        "value": "162.33.179.46:443",
                        "timestamp": "2021-11-12 19:07:04"
                    },
                    {
                        "value": "162.33.177.120:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.177.152:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.177.178:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.7:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.26:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.34:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.71:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.128:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.131:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.137:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.179:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.215:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.220:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.178.246:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.2:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.11:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.49:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.85:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.108:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.176:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.201:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.206:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.179.210:443",
                        "timestamp": "2021-11-11 16:17:33"
                    },
                    {
                        "value": "162.33.177.119:443",
                        "timestamp": "2021-11-11 16:17:32"
                    },
                    {
                        "value": "162.33.177.70:443",
                        "timestamp": "2021-11-10 16:37:01"
                    },
                    {
                        "value": "162.33.177.109:443",
                        "timestamp": "2021-11-10 16:37:01"
                    },
                    {
                        "value": "162.33.177.136:443",
                        "timestamp": "2021-11-10 16:37:01"
                    },
                    {
                        "value": "162.33.178.30:443",
                        "timestamp": "2021-12-06 17:56:38"
                    },
                    {
                        "value": "162.33.178.172:443",
                        "timestamp": "2023-07-04 20:40:20"
                    },
                    {
                        "value": "162.33.179.28:443",
                        "timestamp": "2021-11-10 16:37:01"
                    },
                    {
                        "value": "162.33.179.64:443",
                        "timestamp": "2023-04-21 20:40:12"
                    },
                    {
                        "value": "45.79.38.25:443",
                        "timestamp": "2021-12-08 12:08:34"
                    },
                    {
                        "value": "162.33.178.121:443",
                        "timestamp": "2021-11-25 23:24:05"
                    },
                    {
                        "value": "162.33.178.246:443",
                        "timestamp": "2021-11-25 23:24:08"
                    },
                    {
                        "value": "162.33.177.25:443",
                        "timestamp": "2021-11-25 23:24:08"
                    },
                    {
                        "value": "162.33.178.119:443",
                        "timestamp": "2021-11-25 23:24:09"
                    },
                    {
                        "value": "162.33.178.185:443",
                        "timestamp": "2021-11-10 06:17:22"
                    },
                    {
                        "value": "162.33.177.151:443",
                        "timestamp": "2021-11-10 06:17:21"
                    },
                    {
                        "value": "162.33.178.19:443",
                        "timestamp": "2021-11-10 06:17:21"
                    },
                    {
                        "value": "162.33.178.179:443",
                        "timestamp": "2021-11-25 23:38:57"
                    },
                    {
                        "value": "149.28.98.49:443",
                        "timestamp": "2021-11-26 18:08:54"
                    },
                    {
                        "value": "162.33.177.178:443",
                        "timestamp": "2021-12-02 12:17:42"
                    },
                    {
                        "value": "162.33.177.152:443",
                        "timestamp": "2021-12-02 12:17:41"
                    },
                    {
                        "value": "162.33.179.2:443",
                        "timestamp": "2021-12-03 09:57:37"
                    },
                    {
                        "value": "162.33.178.131:443",
                        "timestamp": "2021-12-02 12:17:42"
                    },
                    {
                        "value": "162.33.179.210:443",
                        "timestamp": "2021-11-25 23:38:57"
                    },
                    {
                        "value": "45.63.108.27:443",
                        "timestamp": "2021-11-26 18:08:54"
                    },
                    {
                        "value": "162.33.177.13:443",
                        "timestamp": "2021-11-09 12:14:39"
                    },
                    {
                        "value": "162.33.179.185:443",
                        "timestamp": "2021-11-08 13:09:31"
                    },
                    {
                        "value": "162.33.177.228:443",
                        "timestamp": "2021-11-08 13:09:31"
                    },
                    {
                        "value": "162.33.179.149:443",
                        "timestamp": "2021-11-08 13:09:31"
                    },
                    {
                        "value": "87.120.254.111:443",
                        "timestamp": "2021-11-08 13:09:31"
                    },
                    {
                        "value": "87.120.254.96:443",
                        "timestamp": "2021-11-08 13:09:31"
                    },
                    {
                        "value": "87.120.8.112:443",
                        "timestamp": "2021-11-08 13:09:31"
                    },
                    {
                        "value": "162.33.178.106:443",
                        "timestamp": "2023-02-03 23:48:36"
                    },
                    {
                        "value": "162.33.179.149:443",
                        "timestamp": "2021-11-07 07:01:38"
                    },
                    {
                        "value": "162.33.178.145:443",
                        "timestamp": "2021-11-07 04:06:48"
                    },
                    {
                        "value": "87.120.37.122:443",
                        "timestamp": "2021-12-07 17:24:04"
                    },
                    {
                        "value": "87.120.8.170:443",
                        "timestamp": "2021-12-07 17:24:05"
                    },
                    {
                        "value": "31.13.195.152:443",
                        "timestamp": "2021-12-05 17:23:38"
                    },
                    {
                        "value": "91.92.109.62:443",
                        "timestamp": "2021-11-07 04:06:48"
                    },
                    {
                        "value": "162.33.179.114:443",
                        "timestamp": "2021-11-07 04:06:47"
                    },
                    {
                        "value": "162.33.177.124:443",
                        "timestamp": "2021-11-07 04:06:47"
                    },
                    {
                        "value": "162.33.179.45:443",
                        "timestamp": "2021-11-07 04:06:47"
                    },
                    {
                        "value": "164.90.183.223:443",
                        "timestamp": "2021-11-24 10:23:11"
                    },
                    {
                        "value": "165.232.78.45:443",
                        "timestamp": "2021-11-24 10:23:11"
                    },
                    {
                        "value": "164.90.229.209:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "161.35.66.76:443",
                        "timestamp": "2021-11-06 08:13:10"
                    },
                    {
                        "value": "159.89.6.29:443",
                        "timestamp": "2021-11-24 10:23:11"
                    },
                    {
                        "value": "164.90.215.29:443",
                        "timestamp": "2021-11-24 10:23:11"
                    },
                    {
                        "value": "165.232.68.221:443",
                        "timestamp": "2021-11-24 10:23:11"
                    },
                    {
                        "value": "134.122.64.170:443",
                        "timestamp": "2021-11-24 16:05:46"
                    },
                    {
                        "value": "45.77.185.151:443",
                        "timestamp": "2021-11-06 08:08:30"
                    },
                    {
                        "value": "63.251.235.76:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "87.120.8.101:443",
                        "timestamp": "2021-12-07 17:24:04"
                    },
                    {
                        "value": "91.92.109.14:443",
                        "timestamp": "2021-12-01 17:27:46"
                    },
                    {
                        "value": "87.120.8.188:443",
                        "timestamp": "2021-11-06 08:08:32"
                    },
                    {
                        "value": "87.120.8.112:443",
                        "timestamp": "2021-12-07 17:24:04"
                    },
                    {
                        "value": "31.13.195.115:443",
                        "timestamp": "2021-11-06 08:08:30"
                    },
                    {
                        "value": "31.13.195.40:443",
                        "timestamp": "2021-11-06 08:08:30"
                    },
                    {
                        "value": "87.120.254.96:443",
                        "timestamp": "2021-12-07 17:24:03"
                    },
                    {
                        "value": "87.120.8.177:443",
                        "timestamp": "2021-12-07 17:24:03"
                    },
                    {
                        "value": "87.120.8.241:443",
                        "timestamp": "2021-12-07 17:24:04"
                    },
                    {
                        "value": "87.120.8.171:443",
                        "timestamp": "2021-12-07 17:24:04"
                    },
                    {
                        "value": "87.121.52.190:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "87.121.52.187:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "162.33.178.251:443",
                        "timestamp": "2021-11-10 06:17:22"
                    },
                    {
                        "value": "162.33.179.121:443",
                        "timestamp": "2021-11-06 08:08:41"
                    },
                    {
                        "value": "162.33.179.150:443",
                        "timestamp": "2021-11-06 08:08:41"
                    },
                    {
                        "value": "162.33.179.196:443",
                        "timestamp": "2021-11-06 08:08:42"
                    },
                    {
                        "value": "162.33.179.203:443",
                        "timestamp": "2021-11-07 04:06:48"
                    },
                    {
                        "value": "162.33.178.117:443",
                        "timestamp": "2021-11-06 08:08:40"
                    },
                    {
                        "value": "162.33.178.199:443",
                        "timestamp": "2021-11-06 08:08:40"
                    },
                    {
                        "value": "162.33.178.200:443",
                        "timestamp": "2021-11-06 08:08:40"
                    },
                    {
                        "value": "162.33.179.219:443",
                        "timestamp": "2021-11-06 08:08:42"
                    },
                    {
                        "value": "87.120.8.61:443",
                        "timestamp": "2021-12-08 12:08:34"
                    },
                    {
                        "value": "162.33.178.61:443",
                        "timestamp": "2021-11-06 08:08:39"
                    },
                    {
                        "value": "87.121.52.173:443",
                        "timestamp": "2021-12-05 17:23:34"
                    },
                    {
                        "value": "31.13.195.13:443",
                        "timestamp": "2021-12-05 17:23:34"
                    },
                    {
                        "value": "87.120.37.214:443",
                        "timestamp": "2021-12-08 11:40:57"
                    },
                    {
                        "value": "185.158.249.238:443",
                        "timestamp": "2021-11-25 21:41:33"
                    },
                    {
                        "value": "170.130.55.98:443",
                        "timestamp": "2022-03-02 06:04:55"
                    },
                    {
                        "value": "87.120.254.252:443",
                        "timestamp": "2023-02-20 14:20:51"
                    },
                    {
                        "value": "87.120.254.6:443",
                        "timestamp": "2021-12-01 17:27:43"
                    },
                    {
                        "value": "91.92.109.189:443",
                        "timestamp": "2021-12-05 17:21:35"
                    },
                    {
                        "value": "91.92.109.19:443",
                        "timestamp": "2021-11-06 08:08:34"
                    },
                    {
                        "value": "87.121.52.192:443",
                        "timestamp": "2021-11-28 17:28:10"
                    },
                    {
                        "value": "87.120.37.183:443",
                        "timestamp": "2021-12-01 17:27:41"
                    },
                    {
                        "value": "91.92.109.185:443",
                        "timestamp": "2021-11-06 08:08:35"
                    },
                    {
                        "value": "87.120.254.158:443",
                        "timestamp": "2021-12-01 17:27:41"
                    },
                    {
                        "value": "87.120.254.234:443",
                        "timestamp": "2021-12-01 17:27:42"
                    },
                    {
                        "value": "31.13.195.144:443",
                        "timestamp": "2021-11-06 08:08:30"
                    },
                    {
                        "value": "31.13.195.129:443",
                        "timestamp": "2021-12-01 17:27:39"
                    },
                    {
                        "value": "87.120.254.67:443",
                        "timestamp": "2021-11-28 17:28:09"
                    },
                    {
                        "value": "87.121.52.230:443",
                        "timestamp": "2021-12-01 17:27:38"
                    },
                    {
                        "value": "87.121.52.247:443",
                        "timestamp": "2021-12-01 17:27:40"
                    },
                    {
                        "value": "87.120.37.77:443",
                        "timestamp": "2021-12-01 17:27:38"
                    },
                    {
                        "value": "87.120.8.245:443",
                        "timestamp": "2021-12-01 17:27:39"
                    },
                    {
                        "value": "31.13.195.32:443",
                        "timestamp": "2021-12-05 17:21:36"
                    },
                    {
                        "value": "87.120.254.51:443",
                        "timestamp": "2021-12-01 17:27:37"
                    },
                    {
                        "value": "87.120.254.178:443",
                        "timestamp": "2021-12-01 17:27:37"
                    },
                    {
                        "value": "31.13.195.145:443",
                        "timestamp": "2021-12-05 17:29:28"
                    },
                    {
                        "value": "91.92.109.10:443",
                        "timestamp": "2021-12-05 17:29:28"
                    },
                    {
                        "value": "87.120.37.231:443",
                        "timestamp": "2021-12-05 17:29:28"
                    },
                    {
                        "value": "91.92.109.73:443",
                        "timestamp": "2021-12-05 17:29:29"
                    },
                    {
                        "value": "91.92.109.136:443",
                        "timestamp": "2021-12-05 17:21:34"
                    },
                    {
                        "value": "31.13.195.108:443",
                        "timestamp": "2021-12-05 17:21:34"
                    },
                    {
                        "value": "91.92.109.138:443",
                        "timestamp": "2021-12-05 17:21:33"
                    },
                    {
                        "value": "87.120.8.109:443",
                        "timestamp": "2021-12-05 17:21:34"
                    },
                    {
                        "value": "91.92.109.169:443",
                        "timestamp": "2021-11-28 17:28:07"
                    },
                    {
                        "value": "31.13.195.26:443",
                        "timestamp": "2021-11-06 08:08:30"
                    },
                    {
                        "value": "91.92.109.170:443",
                        "timestamp": "2021-11-28 17:28:07"
                    },
                    {
                        "value": "164.90.239.161:443",
                        "timestamp": "2021-11-24 17:21:42"
                    },
                    {
                        "value": "164.90.215.60:443",
                        "timestamp": "2021-11-24 17:21:42"
                    },
                    {
                        "value": "64.227.116.94:443",
                        "timestamp": "2021-11-24 17:21:42"
                    },
                    {
                        "value": "159.223.21.94:443",
                        "timestamp": "2021-11-24 17:21:41"
                    },
                    {
                        "value": "185.117.75.123:443",
                        "timestamp": "2021-11-06 08:08:44"
                    },
                    {
                        "value": "164.90.213.227:443",
                        "timestamp": "2021-11-24 17:21:41"
                    },
                    {
                        "value": "165.232.68.221:443",
                        "timestamp": "2021-10-28 11:56:34"
                    },
                    {
                        "value": "164.90.215.29:443",
                        "timestamp": "2021-10-28 11:56:34"
                    },
                    {
                        "value": "134.122.64.170:443",
                        "timestamp": "2021-10-28 11:56:34"
                    },
                    {
                        "value": "134.122.76.75:443",
                        "timestamp": "2021-11-24 17:21:41"
                    },
                    {
                        "value": "164.90.213.219:443",
                        "timestamp": "2021-11-24 17:21:41"
                    },
                    {
                        "value": "164.90.175.226:443",
                        "timestamp": "2021-11-24 17:21:40"
                    },
                    {
                        "value": "164.90.219.254:443",
                        "timestamp": "2021-11-24 17:21:40"
                    },
                    {
                        "value": "206.81.27.39:443",
                        "timestamp": "2021-11-24 17:21:40"
                    },
                    {
                        "value": "164.90.235.239:443",
                        "timestamp": "2021-11-24 17:21:39"
                    },
                    {
                        "value": "165.232.78.100:443",
                        "timestamp": "2021-11-24 17:21:40"
                    },
                    {
                        "value": "64.227.122.248:443",
                        "timestamp": "2021-11-24 17:21:40"
                    },
                    {
                        "value": "206.189.49.239:443",
                        "timestamp": "2021-11-06 08:08:44"
                    },
                    {
                        "value": "164.90.221.57:443",
                        "timestamp": "2021-11-24 17:21:39"
                    },
                    {
                        "value": "139.177.207.16:443",
                        "timestamp": "2021-11-06 08:08:37"
                    },
                    {
                        "value": "162.33.178.39:443",
                        "timestamp": "2021-12-08 12:08:36"
                    },
                    {
                        "value": "162.33.177.130:443",
                        "timestamp": "2021-12-08 12:08:36"
                    },
                    {
                        "value": "162.33.179.189:443",
                        "timestamp": "2021-11-06 08:08:41"
                    },
                    {
                        "value": "91.92.109.180:443",
                        "timestamp": "2021-11-06 08:08:35"
                    },
                    {
                        "value": "162.33.178.27:443",
                        "timestamp": "2021-12-08 12:08:36"
                    },
                    {
                        "value": "162.33.177.23:443",
                        "timestamp": "2021-11-06 08:08:38"
                    },
                    {
                        "value": "119.148.4.122:443",
                        "timestamp": "2021-11-06 08:08:36"
                    },
                    {
                        "value": "162.33.178.204:443",
                        "timestamp": "2021-11-06 08:08:40"
                    },
                    {
                        "value": "103.208.86.61:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "159.223.23.2:443",
                        "timestamp": "2021-11-06 08:08:37"
                    },
                    {
                        "value": "159.223.27.224:443",
                        "timestamp": "2021-11-06 08:08:38"
                    },
                    {
                        "value": "192.99.255.47:443",
                        "timestamp": "2021-11-06 08:08:44"
                    },
                    {
                        "value": "164.90.187.203:443",
                        "timestamp": "2021-11-24 17:21:39"
                    },
                    {
                        "value": "164.90.187.241:443",
                        "timestamp": "2021-11-24 17:21:39"
                    },
                    {
                        "value": "164.90.187.209:443",
                        "timestamp": "2021-11-24 17:21:39"
                    },
                    {
                        "value": "46.101.200.191:443",
                        "timestamp": "2021-11-24 17:21:38"
                    },
                    {
                        "value": "46.101.160.136:443",
                        "timestamp": "2021-11-24 17:21:38"
                    },
                    {
                        "value": "114.4.246.18:443",
                        "timestamp": "2021-11-06 08:08:36"
                    },
                    {
                        "value": "103.208.86.67:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "103.208.86.62:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "164.90.187.236:443",
                        "timestamp": "2021-11-24 17:21:37"
                    },
                    {
                        "value": "164.90.187.244:443",
                        "timestamp": "2021-11-24 17:21:37"
                    },
                    {
                        "value": "164.90.191.46:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "159.223.17.212:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "134.122.76.178:443",
                        "timestamp": "2021-11-24 17:21:38"
                    },
                    {
                        "value": "159.223.27.255:443",
                        "timestamp": "2021-11-06 08:08:38"
                    },
                    {
                        "value": "134.122.76.123:443",
                        "timestamp": "2021-11-24 17:21:38"
                    },
                    {
                        "value": "66.42.103.186:443",
                        "timestamp": "2021-11-06 08:08:31"
                    },
                    {
                        "value": "164.90.187.171:443",
                        "timestamp": "2021-11-24 17:21:37"
                    },
                    {
                        "value": "27.123.255.182:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "103.208.86.65:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "159.223.30.253:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "46.101.144.128:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "103.208.86.63:443",
                        "timestamp": "2021-12-08 12:08:35"
                    },
                    {
                        "value": "159.223.23.1:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "159.223.31.75:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "113.160.16.142:443",
                        "timestamp": "2021-11-06 08:13:08"
                    },
                    {
                        "value": "165.227.162.47:443",
                        "timestamp": "2021-11-24 17:21:37"
                    },
                    {
                        "value": "68.183.67.170:443",
                        "timestamp": "2021-11-06 08:13:07"
                    },
                    {
                        "value": "195.149.87.32:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "5.181.80.22:443",
                        "timestamp": "2021-11-06 08:13:05"
                    },
                    {
                        "value": "5.181.156.67:443",
                        "timestamp": "2021-11-06 08:13:05"
                    },
                    {
                        "value": "45.80.184.53:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "194.15.112.173:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "139.28.235.116:443",
                        "timestamp": "2021-11-06 08:13:08"
                    },
                    {
                        "value": "51.89.128.193:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "165.232.66.86:443",
                        "timestamp": "2021-11-06 08:13:13"
                    },
                    {
                        "value": "64.227.118.34:443",
                        "timestamp": "2021-11-24 17:21:37"
                    },
                    {
                        "value": "45.95.186.118:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "5.255.97.237:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "206.81.29.232:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "89.41.182.21:443",
                        "timestamp": "2021-11-06 08:13:07"
                    },
                    {
                        "value": "5.255.97.236:443",
                        "timestamp": "2021-12-08 12:08:34"
                    },
                    {
                        "value": "5.255.97.234:443",
                        "timestamp": "2021-12-08 12:08:34"
                    },
                    {
                        "value": "195.133.192.126:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "5.255.97.235:443",
                        "timestamp": "2021-12-08 12:08:34"
                    },
                    {
                        "value": "164.90.211.10:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "46.101.243.72:443",
                        "timestamp": "2021-11-06 08:13:06"
                    },
                    {
                        "value": "207.154.232.124:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "165.232.70.72:443",
                        "timestamp": "2021-11-06 08:13:13"
                    },
                    {
                        "value": "185.217.95.199:443",
                        "timestamp": "2021-11-06 08:13:13"
                    },
                    {
                        "value": "165.232.65.245:443",
                        "timestamp": "2021-11-24 17:21:36"
                    },
                    {
                        "value": "161.35.70.100:443",
                        "timestamp": "2021-11-24 17:21:36"
                    },
                    {
                        "value": "134.122.88.142:443",
                        "timestamp": "2021-11-24 17:21:36"
                    },
                    {
                        "value": "164.90.211.12:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "164.90.211.53:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "164.90.229.166:443",
                        "timestamp": "2021-11-24 17:21:36"
                    },
                    {
                        "value": "161.35.223.199:443",
                        "timestamp": "2021-11-24 17:21:36"
                    },
                    {
                        "value": "167.99.242.155:443",
                        "timestamp": "2021-11-06 08:13:13"
                    },
                    {
                        "value": "206.81.23.138:443",
                        "timestamp": "2021-11-24 17:21:35"
                    },
                    {
                        "value": "68.183.65.211:443",
                        "timestamp": "2021-11-24 17:21:36"
                    },
                    {
                        "value": "167.172.160.45:443",
                        "timestamp": "2021-11-24 17:21:35"
                    },
                    {
                        "value": "46.101.158.148:443",
                        "timestamp": "2021-11-24 17:21:34"
                    },
                    {
                        "value": "64.225.98.197:443",
                        "timestamp": "2021-11-06 08:13:07"
                    },
                    {
                        "value": "134.209.240.181:443",
                        "timestamp": "2021-11-24 17:21:34"
                    },
                    {
                        "value": "161.35.195.78:443",
                        "timestamp": "2021-11-06 08:13:10"
                    },
                    {
                        "value": "164.90.174.188:443",
                        "timestamp": "2021-11-06 08:13:10"
                    },
                    {
                        "value": "164.90.237.7:443",
                        "timestamp": "2021-11-24 17:21:35"
                    },
                    {
                        "value": "165.22.83.25:443",
                        "timestamp": "2021-11-24 17:21:35"
                    },
                    {
                        "value": "167.172.101.84:443",
                        "timestamp": "2021-11-24 17:21:35"
                    },
                    {
                        "value": "142.93.99.249:443",
                        "timestamp": "2021-11-24 17:21:34"
                    },
                    {
                        "value": "64.227.114.0:443",
                        "timestamp": "2021-11-24 17:21:34"
                    },
                    {
                        "value": "64.225.98.255:443",
                        "timestamp": "2021-11-06 08:13:07"
                    },
                    {
                        "value": "167.172.165.125:443",
                        "timestamp": "2021-11-24 17:21:34"
                    },
                    {
                        "value": "68.183.69.194:443",
                        "timestamp": "2021-11-06 08:13:07"
                    },
                    {
                        "value": "164.90.166.155:443",
                        "timestamp": "2021-11-06 08:13:10"
                    },
                    {
                        "value": "161.35.205.250:443",
                        "timestamp": "2021-11-06 08:13:10"
                    },
                    {
                        "value": "87.121.52.9:443",
                        "timestamp": "2021-11-06 08:13:07"
                    },
                    {
                        "value": "213.59.119.200:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "164.90.223.38:443",
                        "timestamp": "2021-11-24 17:21:33"
                    },
                    {
                        "value": "104.248.16.136:443",
                        "timestamp": "2021-11-24 17:21:33"
                    },
                    {
                        "value": "164.90.223.13:443",
                        "timestamp": "2021-11-24 17:21:33"
                    },
                    {
                        "value": "164.90.223.1:443",
                        "timestamp": "2021-11-24 17:21:33"
                    },
                    {
                        "value": "167.99.243.36:443",
                        "timestamp": "2021-11-24 17:21:33"
                    },
                    {
                        "value": "194.135.33.142:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "164.90.236.133:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "195.133.192.89:443",
                        "timestamp": "2021-11-06 08:13:14"
                    },
                    {
                        "value": "207.154.241.38:443",
                        "timestamp": "2021-11-24 17:21:32"
                    },
                    {
                        "value": "5.181.80.141:443",
                        "timestamp": "2021-11-06 08:13:05"
                    },
                    {
                        "value": "5.183.78.108:443",
                        "timestamp": "2021-11-06 08:13:05"
                    },
                    {
                        "value": "138.68.74.234:443",
                        "timestamp": "2021-11-06 08:13:08"
                    },
                    {
                        "value": "161.35.25.202:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "164.90.226.22:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "164.90.226.23:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "164.90.226.25:443",
                        "timestamp": "2021-11-06 08:13:11"
                    },
                    {
                        "value": "164.90.226.27:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "164.90.226.28:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "164.90.226.30:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "164.90.226.29:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "164.90.226.31:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "161.35.19.83:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "164.90.226.32:443",
                        "timestamp": "2021-11-06 08:13:12"
                    },
                    {
                        "value": "138.124.183.132:443",
                        "timestamp": "2021-11-06 08:13:08"
                    },
                    {
                        "value": "207.154.229.94:443",
                        "timestamp": "2021-11-06 08:16:36"
                    },
                    {
                        "value": "207.154.244.115:443",
                        "timestamp": "2021-11-06 08:16:36"
                    },
                    {
                        "value": "213.59.119.217:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "194.15.113.151:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.15.113.160:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.62.167.100:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.76.227.21:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.135.33.96:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.135.33.114:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.135.33.119:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "194.135.33.147:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "194.135.33.179:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "194.180.174.49:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "195.123.221.228:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "195.149.87.46:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "198.244.180.69:443",
                        "timestamp": "2021-11-06 08:15:00"
                    },
                    {
                        "value": "172.83.155.147:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "172.83.155.173:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "172.83.155.186:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "172.83.155.218:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "172.83.155.231:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "176.62.188.65:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "178.23.190.206:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "178.128.165.179:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "185.163.45.140:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "188.166.13.100:443",
                        "timestamp": "2021-11-06 08:16:36"
                    },
                    {
                        "value": "188.166.32.223:443",
                        "timestamp": "2021-11-06 08:16:36"
                    },
                    {
                        "value": "188.166.99.175:443",
                        "timestamp": "2021-11-06 08:16:36"
                    },
                    {
                        "value": "194.15.112.71:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.15.112.159:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "194.15.113.148:443",
                        "timestamp": "2021-11-06 08:14:59"
                    },
                    {
                        "value": "167.172.102.214:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.172.103.195:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.172.104.86:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.172.106.21:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.172.106.137:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "167.172.106.204:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "167.172.108.158:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "167.172.108.213:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "167.172.110.154:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "167.172.110.210:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "167.172.172.113:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "167.172.186.69:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "172.83.154.74:443",
                        "timestamp": "2021-11-06 08:14:58"
                    },
                    {
                        "value": "172.83.155.144:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "167.71.8.93:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.71.8.178:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.71.11.125:443",
                        "timestamp": "2022-06-07 15:41:42"
                    },
                    {
                        "value": "167.71.15.206:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.71.74.10:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "167.99.204.169:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "167.99.211.97:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "167.99.240.197:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "167.172.37.2:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "167.172.37.20:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "167.172.37.33:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "167.172.42.125:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "164.90.198.87:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.90:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.93:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "164.90.198.94:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "165.22.199.17:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "165.22.199.77:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "165.22.203.149:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "165.22.203.213:443",
                        "timestamp": "2021-11-06 08:14:57"
                    },
                    {
                        "value": "165.227.131.219:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "165.227.133.242:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "165.227.136.95:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "165.227.147.141:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "165.227.232.39:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "165.227.232.96:443",
                        "timestamp": "2021-11-06 08:16:34"
                    },
                    {
                        "value": "161.35.147.110:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.147.199:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.147.241:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.147.242:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "161.35.149.106:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "161.35.152.48:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.152.204:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.155.18:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.155.92:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.57:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.61:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.77:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.79:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "164.90.198.80:443",
                        "timestamp": "2021-11-06 08:16:33"
                    },
                    {
                        "value": "161.35.69.97:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.69.106:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.69.134:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.69.139:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.69.209:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.69.224:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.77.21:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.77.48:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "161.35.95.83:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.95.158:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.95.166:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.144.15:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.144.74:443",
                        "timestamp": "2021-11-06 08:14:56"
                    },
                    {
                        "value": "161.35.147.41:443",
                        "timestamp": "2021-11-06 08:16:32"
                    },
                    {
                        "value": "149.3.170.160:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "157.230.121.131:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "159.65.18.134:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "159.65.20.230:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "159.65.127.51:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "159.65.204.222:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "159.89.27.167:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "161.35.17.114:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "161.35.18.18:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "161.35.19.72:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "161.35.27.53:443",
                        "timestamp": "2021-11-06 08:13:09"
                    },
                    {
                        "value": "161.35.29.127:443",
                        "timestamp": "2021-11-06 08:13:10"
                    },
                    {
                        "value": "161.35.69.91:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "134.122.62.33:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "134.209.91.22:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "134.255.254.76:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "138.68.176.231:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "138.68.188.12:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "138.68.188.20:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "139.28.235.92:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "139.28.235.130:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "141.94.176.110:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "141.136.0.208:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "141.136.0.219:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "141.136.0.244:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "142.93.104.141:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "142.93.128.204:443",
                        "timestamp": "2021-11-06 08:14:55"
                    },
                    {
                        "value": "104.248.18.107:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.30.5:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.161.28:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.164.94:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.166.170:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.170.50:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.170.182:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.174.225:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "104.248.175.208:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "107.173.192.166:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "134.122.48.8:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "134.122.48.16:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "134.122.48.133:443",
                        "timestamp": "2021-11-06 08:16:31"
                    },
                    {
                        "value": "89.41.182.116:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "89.41.182.134:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "89.41.182.139:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "91.216.61.72:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "94.140.112.9:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "94.140.112.22:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "94.140.114.84:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "94.140.115.98:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "94.140.115.104:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "94.158.245.100:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "102.129.218.87:443",
                        "timestamp": "2021-11-06 08:14:54"
                    },
                    {
                        "value": "64.227.73.32:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.73.80:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.75.136:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.75.195:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.77.21:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.77.91:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "64.227.77.160:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.78.70:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "64.227.79.47:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "68.183.14.255:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "68.183.67.197:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "83.143.104.174:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "89.41.182.71:443",
                        "timestamp": "2021-11-06 08:14:53"
                    },
                    {
                        "value": "64.225.105.222:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.225.106.4:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.225.108.199:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.225.110.48:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.227.65.21:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.227.65.60:443",
                        "timestamp": "2021-12-15 12:22:51"
                    },
                    {
                        "value": "64.227.65.82:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.227.66.10:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.227.68.7:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.227.69.92:443",
                        "timestamp": "2021-12-15 12:22:51"
                    },
                    {
                        "value": "64.227.72.14:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.72.58:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "64.227.72.83:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.227.73.19:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "45.89.106.210:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "46.101.23.183:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.225.65.20:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.67.59:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.67.166:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.68.0:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.71.82:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.225.71.185:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.71.198:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.79.44:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.225.102.174:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "64.225.105.20:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "64.225.105.147:443",
                        "timestamp": "2021-11-06 08:16:28"
                    },
                    {
                        "value": "5.181.80.166:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "45.14.226.182:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "45.42.201.123:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "45.89.106.80:443",
                        "timestamp": "2021-11-06 08:14:52"
                    },
                    {
                        "value": "64.225.71.166:443",
                        "timestamp": "2021-11-06 08:16:27"
                    },
                    {
                        "value": "94.140.114.61:443",
                        "timestamp": "2021-11-06 08:16:29"
                    },
                    {
                        "value": "94.158.245.52:443",
                        "timestamp": "2021-11-06 08:16:30"
                    },
                    {
                        "value": "167.172.37.9:443",
                        "timestamp": "2021-11-06 08:16:35"
                    },
                    {
                        "value": "139.28.235.249:443",
                        "timestamp": "2021-08-25 18:24:04"
                    },
                    {
                        "value": "207.154.236.187:443",
                        "timestamp": "2021-11-06 08:16:36"
                    },
                    {
                        "value": "3.89.160.167:443",
                        "timestamp": "2021-03-26 06:33:18"
                    },
                    {
                        "value": "185.212.47.104:443",
                        "timestamp": "2021-03-26 06:32:36"
                    },
                    {
                        "value": "185.189.151.108:443",
                        "timestamp": "2021-03-26 06:32:35"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "ca46a62df211f9e079646e64a3035cd0846c206b5c870d78b6d80b5560542758",
                        "timestamp": "2022-02-01 23:15:28"
                    },
                    {
                        "value": "db854b2b60a1cfc7c2b9e530c37a025ba4770a6173b93cc8bbf4966cfcd8cefc",
                        "timestamp": "2022-02-01 23:15:27"
                    },
                    {
                        "value": "c80411e5365ceb2b130a6edda69d5bdd9ded5e4df5113d523d9e3a350bf34f4d",
                        "timestamp": "2022-02-01 23:15:27"
                    },
                    {
                        "value": "cf53b4386f5efb01cd84a8aa13f240b83ce152e8984233fa3ea440f01dcc0131",
                        "timestamp": "2022-02-01 23:15:26"
                    },
                    {
                        "value": "bf9af9aa5e8ce3392e956b81385e800d9dfb5a45bcb1a638f6168f245d51dd08",
                        "timestamp": "2021-12-22 11:45:37"
                    },
                    {
                        "value": "bcde8cc7afa18238ecc08833bb2b60a0cbdac2d117a31d4b3e926ddcc20f0293",
                        "timestamp": "2021-12-22 11:45:37"
                    },
                    {
                        "value": "ebe586ceab281f435de097821879c4e4ca01902f3e23e83b6c1b6ea9f6237195",
                        "timestamp": "2021-12-22 11:45:35"
                    },
                    {
                        "value": "83dff2c585c7b092f5c67ff7dcedbaac7699bc26d0b4dce7eba4379770f1b74b",
                        "timestamp": "2021-12-22 11:45:35"
                    },
                    {
                        "value": "4883c8f935d8c8397ffb003f72e4e515501820ebd37ca079c478ba5b7ed7b3d4",
                        "timestamp": "2021-12-22 11:45:33"
                    },
                    {
                        "value": "96b4ae93f697a2887a9c6f0b03b4b853a1ab099eace0ee8519aa2f3e237abe78",
                        "timestamp": "2021-12-22 11:45:33"
                    },
                    {
                        "value": "8323b041e6d80d401329e76951ff41bdf30073011cf061765dc0a812b5bccfe1",
                        "timestamp": "2021-12-22 11:45:32"
                    },
                    {
                        "value": "bc3586d197f6e480d7a4f30c273f5f5a04e8d0c36c2febc24f5fd1edc0f1a99f",
                        "timestamp": "2021-12-22 11:45:31"
                    },
                    {
                        "value": "bc37950b02e745f4abd3fcc10a98154cf9b87dfebb2f6f98f351a2212b65a6b1",
                        "timestamp": "2021-12-18 08:15:46"
                    },
                    {
                        "value": "214687a5d174c156e9eb9c70f9c3996078a588f628b9d1d03da930a0617d2c48",
                        "timestamp": "2021-12-18 08:15:45"
                    },
                    {
                        "value": "e35c69fa5d52a1295092a91cb40fb471065619521830af3e5410107536aab19d",
                        "timestamp": "2021-12-18 08:15:44"
                    },
                    {
                        "value": "98ee1f2258c8cd317faa79ecf82078857f66bbbadef2b6a664cd6bca7c68195a",
                        "timestamp": "2021-12-18 08:15:44"
                    },
                    {
                        "value": "ad30423f97f16e9b3a4fa589c069a33beb37e1dddc25d45f189f74f2ed6070ec",
                        "timestamp": "2021-12-18 08:15:43"
                    },
                    {
                        "value": "97846ca62ffbac16afd4ab5cd5abfbce405ccebe5e6a86ee2d6aed87660410ba",
                        "timestamp": "2021-12-18 08:15:42"
                    },
                    {
                        "value": "87d84be094444c1391a02061ab75beb5227c1f6e22c8a92502b124b9f50a2df2",
                        "timestamp": "2021-12-18 08:15:42"
                    },
                    {
                        "value": "a8f23aa1f7842d8229fe27e9c8be82ef59aaf4829dec489e963034bf744934be",
                        "timestamp": "2021-12-18 08:15:40"
                    },
                    {
                        "value": "192a735902b1fba95b376ef8bf6478f4119dc5fde3111e4a37100884ff548af2",
                        "timestamp": "2021-12-18 08:15:40"
                    },
                    {
                        "value": "c78ff48c90b51d1ac5af5d735049ff2977f8e1bc852e4a1ff5f17ea7a11ac0c4",
                        "timestamp": "2021-12-18 08:15:39"
                    },
                    {
                        "value": "63e937774424d76298755427b96f2c4056f236407ea412764844f3e9cdfc8eac",
                        "timestamp": "2021-12-18 08:15:38"
                    },
                    {
                        "value": "bd897b933617680b7ec6fb5ef77fd8f03a3ac2804fba3601231cb29dcca95f7e",
                        "timestamp": "2021-12-18 08:15:38"
                    },
                    {
                        "value": "7a677ea634b0d6941db49601de73929992c92add11bb05d06d184cb39ae4e247",
                        "timestamp": "2021-12-15 10:59:21"
                    },
                    {
                        "value": "752c45a146b9aeeacdf5dc26f03a05b6ddc8f7b788b363698bd9b4e9dcadf22e",
                        "timestamp": "2021-12-14 00:48:50"
                    },
                    {
                        "value": "df9b0956f7c6fae82c190f73bc70039d019acff0ce302928e9b66b599e8bde75",
                        "timestamp": "2021-12-14 00:48:49"
                    },
                    {
                        "value": "0e412a3579154b025a22360faf38aac50ddb3b02d1b71e0293588f341306593a",
                        "timestamp": "2021-10-22 04:28:42"
                    },
                    {
                        "value": "e31898f207733cf33a6f951d8337d6cd303334a9df95956686657e3f13436ae8",
                        "timestamp": "2021-10-13 11:45:06"
                    },
                    {
                        "value": "9d383698670cab8de1c21cbf9a8d3f2c33e624c1b5c63e039232d4a632cd181c",
                        "timestamp": "2021-10-06 08:44:13"
                    },
                    {
                        "value": "9dced628a1f8c9a3730dcb431e13823055d2c181f3171a9e020f1b90bfba3781",
                        "timestamp": "2021-10-06 08:44:13"
                    },
                    {
                        "value": "274d58301bc0d659563a18a3509923258e0b1849cee99338be3a6019f9cfbc03",
                        "timestamp": "2021-10-06 08:44:13"
                    },
                    {
                        "value": "e9343b4e22db0f869c9af10a6e3ae35a1d84f9da8546d4973990f4828a3fd583",
                        "timestamp": "2021-10-06 08:44:12"
                    },
                    {
                        "value": "72322a8878b2f8df066d2f3b1d6bc53d8dd53a6287c3e65281a6eb5d74bffee0",
                        "timestamp": "2021-09-13 15:48:36"
                    },
                    {
                        "value": "8e4c165eb5f1072f84dfd76fd4966e455eaeb0df3a14d20559253d2ebabf7114",
                        "timestamp": "2021-08-27 08:17:07"
                    },
                    {
                        "value": "627219a8c4acc280da7a247fe4a6eb5f10e38a0f96bb31e11b6b22d0e616cc0e",
                        "timestamp": "2021-08-27 08:17:08"
                    },
                    {
                        "value": "d21908a90b44f440d80bb728ffc0893746df936aefd7440fcba447bf8f523184",
                        "timestamp": "2021-08-05 19:33:45"
                    },
                    {
                        "value": "a66f69b2c2320fa2bb4b6ab429dd318903db14a56418acc54ecffac8c9592afe",
                        "timestamp": "2021-08-02 13:45:17"
                    },
                    {
                        "value": "aee116011409a5bec7d356bd8f704df0a361fb029bf20178d49e02607798d9a1",
                        "timestamp": "2021-07-27 14:49:52"
                    },
                    {
                        "value": "1a54dd6aee27d1d9ba7f7f363e137bd5134989a5b2a350d3dab0299bee6755b8",
                        "timestamp": "2021-07-26 15:59:32"
                    }
                ],
                "url": [
                    {
                        "value": "https://194.40.243.33/service/client",
                        "timestamp": "2022-01-31 20:07:21"
                    },
                    {
                        "value": "https://45.14.226.23/service/client",
                        "timestamp": "2022-01-31 15:48:07"
                    },
                    {
                        "value": "https://185.99.132.248/service/client",
                        "timestamp": "2022-01-31 15:41:18"
                    },
                    {
                        "value": "https://23.160.193.217/service/client",
                        "timestamp": "2022-01-31 15:41:18"
                    },
                    {
                        "value": "https://91.92.109.65/docs/en-us/news",
                        "timestamp": "2022-01-26 22:29:44"
                    },
                    {
                        "value": "https://186.73.40.224/docs/en-us/news",
                        "timestamp": "2022-01-26 22:29:44"
                    },
                    {
                        "value": "https://87.120.8.202/docs/en-us/news",
                        "timestamp": "2022-01-26 22:29:44"
                    },
                    {
                        "value": "https://87.120.8.248/docs/en-us/news",
                        "timestamp": "2022-01-26 22:29:44"
                    },
                    {
                        "value": "https://87.120.254.21/docs/en-us/news",
                        "timestamp": "2022-01-26 22:29:44"
                    },
                    {
                        "value": "https://103.114.163.175/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:23"
                    },
                    {
                        "value": "https://172.96.189.86/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:23"
                    },
                    {
                        "value": "https://94.140.115.130/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:23"
                    },
                    {
                        "value": "https://23.160.193.38/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:22"
                    },
                    {
                        "value": "https://186.73.40.224/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:22"
                    },
                    {
                        "value": "https://194.40.243.76/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:22"
                    },
                    {
                        "value": "https://23.160.193.16/spade389/untidy01",
                        "timestamp": "2022-01-26 22:28:22"
                    },
                    {
                        "value": "https://186.73.40.224/oil/rubber",
                        "timestamp": "2022-01-26 22:27:18"
                    },
                    {
                        "value": "https://45.41.204.151/client/maintenance",
                        "timestamp": "2022-01-26 17:57:33"
                    },
                    {
                        "value": "https://23.160.193.12/client/maintenance",
                        "timestamp": "2022-01-26 17:57:33"
                    },
                    {
                        "value": "https://185.99.132.109/client/maintenance",
                        "timestamp": "2022-01-26 17:57:33"
                    },
                    {
                        "value": "https://87.120.8.198/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://87.120.8.179/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://94.140.115.130/oil/rubber",
                        "timestamp": "2022-01-26 22:27:18"
                    },
                    {
                        "value": "https://142.11.237.178/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://185.183.96.244/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://103.114.163.175/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://87.120.37.114/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://87.120.254.33/oil/rubber",
                        "timestamp": "2022-01-26 22:27:17"
                    },
                    {
                        "value": "https://91.92.109.141/docs/en-us/statistics",
                        "timestamp": "2022-01-25 16:27:05"
                    },
                    {
                        "value": "http://pgd-primskovo.si/premiernote.php",
                        "timestamp": "2022-01-25 08:17:02"
                    },
                    {
                        "value": "https://asseddiq.com/rocket.pdf",
                        "timestamp": "2022-01-25 08:17:02"
                    },
                    {
                        "value": "https://194.15.113.155/social/research",
                        "timestamp": "2022-01-23 03:01:43"
                    },
                    {
                        "value": "https://80.71.158.106/social/research",
                        "timestamp": "2022-01-23 03:01:43"
                    },
                    {
                        "value": "https://80.71.158.22/social/data",
                        "timestamp": "2022-01-21 20:31:28"
                    },
                    {
                        "value": "https://23.160.193.119/social/data",
                        "timestamp": "2022-01-21 20:31:27"
                    },
                    {
                        "value": "https://185.99.132.121/holiday/nation376",
                        "timestamp": "2022-01-21 20:25:27"
                    },
                    {
                        "value": "https://94.140.113.53/holiday/nation376",
                        "timestamp": "2022-01-21 20:25:27"
                    },
                    {
                        "value": "https://185.163.45.95/holiday/nation376",
                        "timestamp": "2022-01-21 20:25:27"
                    },
                    {
                        "value": "https://5.39.63.103/holiday/nation376",
                        "timestamp": "2022-01-21 20:25:27"
                    },
                    {
                        "value": "https://144.217.50.242/holiday/nation376",
                        "timestamp": "2022-01-21 20:25:26"
                    },
                    {
                        "value": "https://185.99.132.121/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://142.11.237.178/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://185.183.96.244/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://87.121.52.79/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://87.120.37.173/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://23.160.193.190/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://31.13.195.87/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:11"
                    },
                    {
                        "value": "https://31.13.195.90/increase87/dentist",
                        "timestamp": "2022-01-20 23:11:10"
                    },
                    {
                        "value": "https://185.99.132.121/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:35"
                    },
                    {
                        "value": "https://23.160.193.190/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:35"
                    },
                    {
                        "value": "https://142.11.237.178/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:35"
                    },
                    {
                        "value": "https://185.183.96.244/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:35"
                    },
                    {
                        "value": "https://148.163.42.213/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:34"
                    },
                    {
                        "value": "https://188.127.235.177/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:34"
                    },
                    {
                        "value": "https://23.160.193.221/couple/overjoyed99",
                        "timestamp": "2022-01-20 23:09:34"
                    },
                    {
                        "value": "https://80.71.158.106/lab/research/info",
                        "timestamp": "2022-01-20 23:09:34"
                    },
                    {
                        "value": "https://62.86.87.126/lab/research/info",
                        "timestamp": "2022-01-20 23:09:34"
                    },
                    {
                        "value": "https://162.55.32.153/lab/research/info",
                        "timestamp": "2022-01-20 23:09:33"
                    },
                    {
                        "value": "https://194.15.113.155/lab/research/info",
                        "timestamp": "2022-01-20 23:09:33"
                    },
                    {
                        "value": "https://104.143.94.101/lab/research/info",
                        "timestamp": "2022-01-20 23:09:33"
                    },
                    {
                        "value": "https://194.38.20.30/story/novel",
                        "timestamp": "2022-01-18 17:23:01"
                    },
                    {
                        "value": "https://188.127.251.106/story/novel",
                        "timestamp": "2022-01-18 17:23:01"
                    },
                    {
                        "value": "https://91.201.202.219/story/novel",
                        "timestamp": "2022-01-18 17:23:00"
                    },
                    {
                        "value": "https://194.147.115.132/story/novel",
                        "timestamp": "2022-01-18 17:23:00"
                    },
                    {
                        "value": "https://45.15.131.126/promotion/update",
                        "timestamp": "2022-01-12 20:28:29"
                    },
                    {
                        "value": "https://193.169.86.84/promotion/update",
                        "timestamp": "2022-01-12 20:28:29"
                    },
                    {
                        "value": "https://45.41.204.150/promotion/update",
                        "timestamp": "2022-01-12 20:28:29"
                    },
                    {
                        "value": "https://148.163.42.203/promotion/update",
                        "timestamp": "2022-01-12 20:28:28"
                    },
                    {
                        "value": "https://185.99.133.67/absent0/offensive",
                        "timestamp": "2022-01-11 23:18:35"
                    },
                    {
                        "value": "https://91.201.202.138/absent0/offensive",
                        "timestamp": "2022-01-11 23:18:35"
                    },
                    {
                        "value": "https://5.255.103.36/absent0/offensive",
                        "timestamp": "2022-01-11 23:18:35"
                    },
                    {
                        "value": "https://188.127.249.22/absent0/offensive",
                        "timestamp": "2022-01-11 23:18:34"
                    },
                    {
                        "value": "https://5.181.156.16/obliged/suspense64",
                        "timestamp": "2021-12-28 23:09:12"
                    },
                    {
                        "value": "https://103.124.107.109/obliged/suspense64",
                        "timestamp": "2021-12-28 23:09:12"
                    },
                    {
                        "value": "https://185.117.73.184/obliged/suspense64",
                        "timestamp": "2021-12-28 23:09:12"
                    },
                    {
                        "value": "https://91.201.202.216/obliged/suspense64",
                        "timestamp": "2021-12-28 23:09:12"
                    },
                    {
                        "value": "https://103.208.86.173/abandon8/8reduced",
                        "timestamp": "2021-12-24 01:15:53"
                    },
                    {
                        "value": "https://103.208.86.165/abandon8/8reduced",
                        "timestamp": "2021-12-24 01:15:53"
                    },
                    {
                        "value": "https://103.208.86.171/abandon8/8reduced",
                        "timestamp": "2021-12-24 01:15:53"
                    },
                    {
                        "value": "https://103.208.86.174/abandon8/8reduced",
                        "timestamp": "2021-12-24 01:15:53"
                    },
                    {
                        "value": "https://103.208.86.182/smell/spice",
                        "timestamp": "2021-12-22 16:33:47"
                    },
                    {
                        "value": "https://103.208.86.179/smell/spice",
                        "timestamp": "2021-12-22 16:33:47"
                    },
                    {
                        "value": "https://103.208.86.176/smell/spice",
                        "timestamp": "2021-12-22 16:33:47"
                    },
                    {
                        "value": "https://103.208.86.177/smell/spice",
                        "timestamp": "2021-12-22 16:33:47"
                    },
                    {
                        "value": "https://87.120.8.168/class/dialog",
                        "timestamp": "2021-12-20 21:15:09"
                    },
                    {
                        "value": "https://87.120.254.243/class/dialog",
                        "timestamp": "2021-12-20 21:15:09"
                    },
                    {
                        "value": "https://87.120.254.97/class/dialog",
                        "timestamp": "2021-12-20 21:15:09"
                    },
                    {
                        "value": "https://87.120.254.135/class/dialog",
                        "timestamp": "2021-12-20 21:15:08"
                    },
                    {
                        "value": "https://vyw8jw.sn.files.1drv.com/y4mbbL2mYH31MYtoqw_VJXFbRJrOchiL0nJquq-YQCls331yN9BGESBucdcaA239_30KJ6VFTs4TiKVyFHLkwXw0KOdeHQV6aCqtnrJDJ7srrxZ-YBcqsYE916ojK23-o5K5IN2upZAr6WBZ_f4UtiDPwov_56gSLXX-4aa2oFRWaIOTqZAdupIytcCb7tgwILzh2rviQ7QR6aWgYWe5PSkGA/new-documents-2031.iso",
                        "timestamp": "2021-12-15 03:26:09"
                    },
                    {
                        "value": "https://vyw8jw.sn.files.1drv.com/y4mGf_H9oLvymuaM24JYSYJV4vVgB-Z0fBA9J490WhOI7hNyRsgu7V6VvFSw3ADLBFvrE7Lfu83miibmNYDWOrYf6TzlXwSDNod4EFJl3M2rn_2cLrrMPOMerFlDpIRt3I7W0XYBlqeKBJutwZ66ffZe9dq-hgE6eD1kK2PrmofvrYNmmwtAutSqvLrDP4Kvc3Cya-bNkNKgibR7gs_eH5oRA/new-documents-2031.iso",
                        "timestamp": "2021-12-15 03:26:09"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=e7aaa29659c7f169&resid=e7aaa29659c7f169!123&authkey=ak0f_xd2nfm8esa",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=EAC5D213D352E78B&resid=EAC5D213D352E78B!108&authkey=AMo8LUVqbrx-tNI",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://uhaqwg.sn.files.1drv.com/y4m6XaSFMZzRQ0-xcKsdkGW4_M51EgFWP4pMMOf1hYqRnX7SUU0tH1-SuCXUZLHnGMD1nuTWGZu6ImRdIgWSEAr8ymJv712XguTIyTRuY0k0EseTockoLHoM3ZKhFv-C9NpReIkt73LT6T0c3I5Q3Vv0myQaYY52hmGjvkMznxGs_3fiiEjawyz-25-REbt31yvEZ1ZcpemdoSzs5DrNkEhQg/new-documents-1045.iso",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://uhaqwg.sn.files.1drv.com/y4mFyz37K2ztycMZyshzma-6wwf-Vz176rDnN3Y4y_rz2sLjxo5zAxFssgNBpHx48nifWGXM2yTfBMTx_Fn_PpcOpE2nBkFm-lpKwwYBEjOyIu-Opaa-aUY9wEfwKHE0syIOdVj7vjU1q19I50MocgU6SN211Z03KesiLjkiUOzj5WIlP3TTpqO-OQnyOepB5RHElESYJCuCZ_1-ZrOMtAfCg/new-documents-1045.iso",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=c151c0d830bd44b2&resid=c151c0d830bd44b2!124&authkey=akcxs1qwzywwm20",
                        "timestamp": "2021-12-15 03:26:07"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=D8954BA761D9E8FF&resid=D8954BA761D9E8FF!134&authkey=ALjXM6fo9AV9H1w",
                        "timestamp": "2021-12-15 03:26:07"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=daab7f233631e23f&resid=daab7f233631e23f!122&authkey=akknlrvimyxpqfg",
                        "timestamp": "2021-12-15 03:26:07"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=e7aaa29659c7f169&resid=e7aaa29659c7f169!114&authkey=ahpulyqx7ravntc",
                        "timestamp": "2021-12-15 03:26:07"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=59320D32491608CC&resid=59320D32491608CC!174&authkey=ABm5FMKoaj2Z0z0",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=62a3b431f7ed0691&resid=62a3b431f7ed0691!110&authkey=aermix60lao2geg",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=89D80CB961239CAB&resid=89D80CB961239CAB!171&authkey=AOe6f29CEzjsnRc",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=9244786F0CC2F04B&resid=9244786F0CC2F04B!116&authkey=AMx-gVES6rDkkyQ",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=94d4e8eeee34db1a&resid=94d4e8eeee34db1a!113&authkey=amerrwohdhszhv8",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=18d3a724735f9007&resid=18d3a724735f9007!114&authkey=anf2ojlujlk5z8c",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=1aa21d04705af6a3&resid=1aa21d04705af6a3!131&authkey=accqumaz8ek_ce0",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=7f3ae95a01a3ec00&resid=7f3ae95a01a3ec00!113&authkey=adrzcpvhbhcbuvg",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=abb25432d6dbe270&resid=abb25432d6dbe270!109&authkey=anrs2eokjk3wwlm",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=abb25432d6dbe270&resid=abb25432d6dbe270!136&authkey=apxc4due2pjvyts",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=daab7f233631e23f&resid=daab7f233631e23f!118&authkey=aek_cjol6x8vohw",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=f8cd1d07cb307783&resid=f8cd1d07cb307783!115&authkey=ahumhfpdeudz5po",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=f8cd1d07cb307783&resid=f8cd1d07cb307783!116&authkey=agwvugecyh3nwyo",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=f8cd1d07cb307783&resid=f8cd1d07cb307783!120&authkey=apodaeyrvuhfisw",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!122&authkey=ANs-Z83yeOBSF0w",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!161&authkey=ACZ5Cwd9xkEaUTA",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!192&authkey=ABahQTGxAb2i8JU",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!198&authkey=AG69CPz4Pg1Nz-0",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=18d3a724735f9007&resid=18d3a724735f9007!110&authkey=adbj55bndecmuhc",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=1aa21d04705af6a3&resid=1aa21d04705af6a3!138&authkey=ajhxaea5vyoju_g",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!118&authkey=apdmqo3lzrenjmu",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!131&authkey=adfyewyjiimoras",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!132&authkey=ahdakyxjsowraug",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!147&authkey=amxysb6n0jqprjm",
                        "timestamp": "2021-12-15 03:26:03"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!128&authkey=AJ6zkpBNE14LYoI",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!139&authkey=ACBnvFyIaWGiEkQ",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!149&authkey=AP2rpN10Qi4DtPI",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!158&authkey=AOcCAXDm5JhnnHk",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!171&authkey=ALdCr0mjFhrrB34",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!182&authkey=AE0H03DPDFDHKjA",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!183&authkey=AKxkMTK-Pn-eimo",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!185&authkey=AEOZqMdYKAWbL0c",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!188&authkey=AC310Bp8G6sh10E",
                        "timestamp": "2021-12-15 03:26:02"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!107&authkey=AFq-N5hqlB47R3A",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!109&authkey=ADrhbsFmgcGLDmg",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!111&authkey=AEJ02ERu1n1eV-I",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!113&authkey=AAo0I71pdJuYeEY",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!115&authkey=AJ8hIy8TNVZ50UY",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!118&authkey=ALwPC9xYEh0g_bg",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!123&authkey=AKuNrmVCc_RBWtc",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=15D8A1653EFD50B1&resid=15D8A1653EFD50B1!127&authkey=ABRBGfuY7x5fLC0",
                        "timestamp": "2021-12-15 03:26:01"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=ABB25432D6DBE270&resid=ABB25432D6DBE270!109&authkey=ANrs2eokJk3wwlM",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=ABB25432D6DBE270&resid=ABB25432D6DBE270!136&authkey=APXc4dUE2pJvyTs",
                        "timestamp": "2021-12-15 03:26:07"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=DAAB7F233631E23F&resid=DAAB7F233631E23F!118&authkey=AEk_CJOl6X8Vohw",
                        "timestamp": "2021-12-15 03:26:07"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=F8CD1D07CB307783&resid=F8CD1D07CB307783!115&authkey=AHuMhFpDEuDZ5Po",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=F8CD1D07CB307783&resid=F8CD1D07CB307783!116&authkey=AGwVUgecYH3nwYo",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=F8CD1D07CB307783&resid=F8CD1D07CB307783!120&authkey=APOdAeyRvuHfisw",
                        "timestamp": "2021-12-15 03:26:08"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=18D3A724735F9007&resid=18D3A724735F9007!110&authkey=ADBJ55bndECmuHc",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=1aa21d04705af6a3&resid=1aa21d04705af6a3!138&authkey=ajhxaea5vyoju_g",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!118&authkey=apdmqo3lzrenjmu",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!131&authkey=adfyewyjiimoras",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=307c0d213627ff56&resid=307c0d213627ff56!132&authkey=ahdakyxjsowraug",
                        "timestamp": "2021-12-15 03:26:05"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=307C0D213627FF56&resid=307C0D213627FF56%21147&authkey=AMXysB6N0jQPrjM",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=7F3AE95A01A3EC00&resid=7F3AE95A01A3EC00!113&authkey=ADrzcPvhBHCbuvg",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "https://onedrive.live.com/download?cid=94d4e8eeee34db1a&resid=94d4e8eeee34db1a!108&authkey=ac3eloqw78gine4",
                        "timestamp": "2021-12-15 03:26:06"
                    },
                    {
                        "value": "http://onedrive.live.com/download?cid=94d4e8eeee34db1a&resid=94d4e8eeee34db1a!108&authkey=ac3eloqw78gine4",
                        "timestamp": "2021-12-15 03:26:04"
                    },
                    {
                        "value": "https://162.33.178.121/events/trending",
                        "timestamp": "2021-11-10 15:18:55"
                    },
                    {
                        "value": "https://162.33.177.25/events/trending",
                        "timestamp": "2021-11-10 15:18:55"
                    },
                    {
                        "value": "https://162.33.178.131/main/issue/en-us/text",
                        "timestamp": "2021-11-09 17:08:57"
                    },
                    {
                        "value": "https://162.33.179.2/main/issue/en-us/text",
                        "timestamp": "2021-11-09 17:08:57"
                    },
                    {
                        "value": "https://162.33.177.152/main/issue/en-us/text",
                        "timestamp": "2021-11-09 17:08:57"
                    },
                    {
                        "value": "https://87.120.254.96/en-us/issue/run",
                        "timestamp": "2021-11-05 15:38:31"
                    },
                    {
                        "value": "https://87.120.8.241/en-us/issue/run",
                        "timestamp": "2021-11-05 15:38:31"
                    },
                    {
                        "value": "https://87.120.8.112/en-us/issue/run",
                        "timestamp": "2021-11-05 15:38:31"
                    },
                    {
                        "value": "https://63.251.235.76/en-us/issue/run",
                        "timestamp": "2021-11-05 15:38:30"
                    },
                    {
                        "value": "https://87.120.8.101/en-us/issue/run",
                        "timestamp": "2021-11-05 15:38:30"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94gj49gdnn40.html?id=307493052029656066",
                        "timestamp": "2021-10-28 01:52:23"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/2kmn49vnn4mv8.html?id=416592690748484427",
                        "timestamp": "2021-10-28 01:52:23"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/40fk49vnb489.html?id=594768675074256633",
                        "timestamp": "2021-10-28 01:52:23"
                    },
                    {
                        "value": "http://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/40fk49vnb489.html?id=691622058493487179",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94jvn4vbn4i.html?id=543923174810802759",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/0342nvn3vi9i9i3n.html?fileid=441476661589431322",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/034jvn49vn5.html?sid=467599943285088777",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "http://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94jvn4vbn4i.html?id=543923174810802759",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/2kmn49vnn4mv8.html?mediaid=363438093994622662",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94jnn3vn3k03434n.html?id=449299792420721",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94nbvk49vb49fg.html?mediaid=513932233427704393",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94nbvk49vb49fg.html?mediaid=890582434051396269",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/034jvn49vn5.html?mediaid=198281930416882077",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/2kmn49vnn4mv8.html?mediaid=77268573709488786",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94jvn4vbn4i.html?s=588975081176134945",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94jnn3vn3k03434n.html?fileid=078354331177173548",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94gj49gdnn40.html?sid=461214929177162816",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/403kvn3v39n4.html?mediaid=089632764671207899",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/94nbvk49vb49fg.html?mediaid=282137813157242679",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/0342nvn3vi9i9i3n.html?sid=598529786050920509",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/40fk49vnb489.html?sid=685165936217698944",
                        "timestamp": "2021-10-28 01:52:22"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/84nnvk49vbn39.html?mediaid=80889739858064118",
                        "timestamp": "2021-10-28 01:52:21"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/2kmn49vnn4mv8.html",
                        "timestamp": "2021-10-28 01:52:21"
                    },
                    {
                        "value": "https://storage.googleapis.com/storage-e898f.appspot.com/drive/public/0/folders/d/0342nvn3vi9i9i3n.html",
                        "timestamp": "2021-10-28 01:52:21"
                    },
                    {
                        "value": "https://164.90.226.27/feed/news/actual/last",
                        "timestamp": "2021-09-29 18:45:51"
                    },
                    {
                        "value": "https://164.90.236.133/feed/news/actual/last",
                        "timestamp": "2021-09-29 18:45:51"
                    },
                    {
                        "value": "https://161.35.18.18/feed/news/actual/last",
                        "timestamp": "2021-09-29 18:45:50"
                    },
                    {
                        "value": "https://164.90.226.23/feed/news/actual/last",
                        "timestamp": "2021-09-29 18:45:50"
                    },
                    {
                        "value": "https://164.90.226.25/feed/news/actual/last",
                        "timestamp": "2021-09-29 18:45:50"
                    },
                    {
                        "value": "https://165.22.203.149/engine/web/issue",
                        "timestamp": "2021-09-20 20:10:32"
                    },
                    {
                        "value": "https://165.22.203.213/engine/web/issue",
                        "timestamp": "2021-09-20 20:10:32"
                    },
                    {
                        "value": "https://167.172.106.21/engine/web/issue",
                        "timestamp": "2021-09-20 20:10:32"
                    },
                    {
                        "value": "https://167.172.106.137/engine/web/issue",
                        "timestamp": "2021-09-20 20:10:32"
                    },
                    {
                        "value": "https://167.172.110.210/engine/web/issue",
                        "timestamp": "2021-09-20 20:10:32"
                    },
                    {
                        "value": "https://64.225.71.166/root/tasks/run/handle",
                        "timestamp": "2021-09-10 18:39:18"
                    },
                    {
                        "value": "https://64.225.106.4/root/tasks/run/handle",
                        "timestamp": "2021-09-10 17:48:48"
                    },
                    {
                        "value": "https://167.172.186.69/root/tasks/run/handle",
                        "timestamp": "2021-09-10 17:48:48"
                    },
                    {
                        "value": "https://45.89.106.210/root/tasks/run/handle",
                        "timestamp": "2021-09-10 17:46:01"
                    },
                    {
                        "value": "https://94.140.114.61/root/tasks/run/handle",
                        "timestamp": "2021-09-10 15:22:58"
                    },
                    {
                        "value": "https://167.172.37.9/root/tasks/run/handle",
                        "timestamp": "2021-09-10 15:12:50"
                    },
                    {
                        "value": "https://94.158.245.52/root/tasks/run/handle",
                        "timestamp": "2021-09-10 15:12:50"
                    },
                    {
                        "value": "https://64.225.110.48/stock/out/update",
                        "timestamp": "2021-08-31 16:27:56"
                    },
                    {
                        "value": "https://64.227.72.14/main/issue/invoke",
                        "timestamp": "2021-08-30 16:24:02"
                    },
                    {
                        "value": "https://167.172.37.33/main/issue/invoke",
                        "timestamp": "2021-08-30 16:24:02"
                    },
                    {
                        "value": "https://64.225.71.198/main/issue/invoke",
                        "timestamp": "2021-08-30 16:22:25"
                    },
                    {
                        "value": "https://167.172.37.20/main/issue/invoke",
                        "timestamp": "2021-08-30 16:22:25"
                    },
                    {
                        "value": "https://207.154.236.187/out/stable/issue/invoke",
                        "timestamp": "2021-08-25 18:22:45"
                    },
                    {
                        "value": "https://139.28.235.249/out/stable/issue/invoke",
                        "timestamp": "2021-08-25 18:22:45"
                    },
                    {
                        "value": "http://facility.nfooz.com/terd.exe",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://dm517.com/wp-content/plugins/apikey/terd.exe",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://out2.xyz/campo/o/u",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://54.185.172.76/terd.exe",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://facility.nfooz.com/ster.exe",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://dm517.com/wp-content/plugins/apikey/ster.exe",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://54.185.172.76/ster.exe",
                        "timestamp": "2021-05-06 23:33:48"
                    },
                    {
                        "value": "http://noise1.xyz/campo/n/s",
                        "timestamp": "2021-05-05 17:42:20"
                    },
                    {
                        "value": "http://noise1.xyz/uploads/files/rest.exe",
                        "timestamp": "2021-05-05 17:42:20"
                    },
                    {
                        "value": "http://176.111.174.59/uploads/files/teret.exe",
                        "timestamp": "2021-05-04 23:11:26"
                    },
                    {
                        "value": "http://176.111.174.59/campo/go/go",
                        "timestamp": "2021-05-04 23:11:26"
                    },
                    {
                        "value": "http://176.111.174.59/uploads/files/krerb.exe",
                        "timestamp": "2021-05-04 23:11:26"
                    },
                    {
                        "value": "https://bluecartservice.com/request.php",
                        "timestamp": "2021-03-26 06:29:59"
                    },
                    {
                        "value": "https://icartservice.org/request.php",
                        "timestamp": "2021-03-26 06:29:59"
                    },
                    {
                        "value": "https://imedservice.org/request.php",
                        "timestamp": "2021-03-26 06:29:59"
                    },
                    {
                        "value": "https://imerservice.net/request.php",
                        "timestamp": "2021-03-26 06:29:59"
                    },
                    {
                        "value": "https://merservice.org/request.php",
                        "timestamp": "2021-03-26 06:29:59"
                    },
                    {
                        "value": "http://aras.iuc.ac/wp-content/plugins/wordpress-seo/css/dist/gerte523d.exe",
                        "timestamp": "2021-03-24 16:48:00"
                    },
                    {
                        "value": "http://aras.iuc.ac/wp-content/plugins/wordpress-seo/css/dist/aza5ert2.exe",
                        "timestamp": "2021-03-24 16:47:59"
                    },
                    {
                        "value": "http://aras.iuc.ac/wp-content/plugins/wordpress-seo/css/dist/fer2.exe",
                        "timestamp": "2021-03-24 16:47:59"
                    },
                    {
                        "value": "http://aras.iuc.ac/wp-content/plugins/wordpress-seo/css/dist/az1.exe",
                        "timestamp": "2021-03-24 16:47:59"
                    },
                    {
                        "value": "http://aras.iuc.ac/wp-content/plugins/wordpress-seo/css/dist/far1.exe",
                        "timestamp": "2021-03-24 16:47:59"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "d311e6788e90e8d357ae73c32c966384",
                        "timestamp": "2022-01-19 23:48:34"
                    },
                    {
                        "value": "7521276d74ff97a29c0a9cbb239c7fa9",
                        "timestamp": "2022-01-18 23:15:43"
                    },
                    {
                        "value": "cfa09b98bf52b8280cd3c4f17b276f59",
                        "timestamp": "2022-01-18 23:15:43"
                    },
                    {
                        "value": "4932b7fa81a500c5050ccf3a945077e3",
                        "timestamp": "2021-10-10 12:38:09"
                    },
                    {
                        "value": "032694cfee1c05e1b2aa8fcf842a3539",
                        "timestamp": "2021-10-10 12:38:09"
                    },
                    {
                        "value": "8f216511aa115a119ee15a10d067e8f2",
                        "timestamp": "2021-07-30 16:32:08"
                    },
                    {
                        "value": "3d483689f373a12f6f9607079b9cebb9",
                        "timestamp": "2021-07-13 03:46:16"
                    },
                    {
                        "value": "bcda9eed7688400b654b88e4f0bdb3f0",
                        "timestamp": "2021-07-13 03:46:16"
                    },
                    {
                        "value": "52a8527e0d7cd86b1d04ccc80eb6595e",
                        "timestamp": "2021-07-13 03:46:16"
                    },
                    {
                        "value": "06118d290e54e106d0571234946c2e0d",
                        "timestamp": "2021-07-13 03:46:16"
                    },
                    {
                        "value": "a2514fac953de1e31ece31471716c852",
                        "timestamp": "2021-05-19 22:31:11"
                    },
                    {
                        "value": "91ee2afefdf066eae3aead061a8075ed",
                        "timestamp": "2021-03-26 06:33:53"
                    },
                    {
                        "value": "256bd88292afefc1a17a96970ff6bbfe",
                        "timestamp": "2021-03-26 06:33:53"
                    },
                    {
                        "value": "5e61a7988375efe18897ff264b7c81b8",
                        "timestamp": "2021-03-26 06:33:53"
                    },
                    {
                        "value": "75fabcbbb10bb8f5e518f3fe39f4833d",
                        "timestamp": "2021-03-26 06:31:59"
                    },
                    {
                        "value": "9f95caa013fecdebef5934e9291a1419",
                        "timestamp": "2021-03-26 06:31:59"
                    },
                    {
                        "value": "06ff51c4f8f08ffd5d002fdc60c7e20d",
                        "timestamp": "2021-03-26 06:31:59"
                    },
                    {
                        "value": "8f124c70da0662e24291511479162932",
                        "timestamp": "2021-03-26 06:31:59"
                    },
                    {
                        "value": "61968c8debeae1e415a485c0b4d79b46",
                        "timestamp": "2021-03-24 16:48:45"
                    },
                    {
                        "value": "3b84c135e3b4a99a90333e48eb81f8c2",
                        "timestamp": "2021-03-24 16:48:45"
                    },
                    {
                        "value": "c270e01d22df1cf517f86b5e4750b312",
                        "timestamp": "2021-03-24 16:48:45"
                    },
                    {
                        "value": "98aca6c94ef680b24885d1462ccc36af",
                        "timestamp": "2021-03-24 16:48:45"
                    },
                    {
                        "value": "5ab10b180aca215ff3af5ec0e0e00b87",
                        "timestamp": "2021-03-23 11:27:11"
                    },
                    {
                        "value": "4cf6fb8514073319e7759b4f66d13f08",
                        "timestamp": "2021-03-22 22:13:46"
                    },
                    {
                        "value": "8586d6e894f67e2a18b10e6256d5b598",
                        "timestamp": "2021-03-22 14:05:06"
                    },
                    {
                        "value": "3b741d6798735efdae2d18c80716ee4b",
                        "timestamp": "2021-03-20 16:50:23"
                    },
                    {
                        "value": "1759c59d56048c47ad1869fe6d42f9f2",
                        "timestamp": "2021-03-19 23:31:56"
                    }
                ],
                "domain": [
                    {
                        "value": "reddew28c.bazar",
                        "timestamp": "2021-12-24 17:56:08"
                    },
                    {
                        "value": "bluehail.bazar",
                        "timestamp": "2021-12-24 17:56:08"
                    },
                    {
                        "value": "whitestorm9p.bazar",
                        "timestamp": "2021-12-24 17:56:08"
                    },
                    {
                        "value": "sheltondepositg.com",
                        "timestamp": "2021-11-15 11:27:40"
                    },
                    {
                        "value": "regretmanagement2016b.com",
                        "timestamp": "2021-11-15 11:27:40"
                    },
                    {
                        "value": "tribegloverd.com",
                        "timestamp": "2021-11-15 11:27:39"
                    },
                    {
                        "value": "cnriyou.com",
                        "timestamp": "2021-11-09 15:27:07"
                    },
                    {
                        "value": "candabare.com",
                        "timestamp": "2021-11-09 15:27:07"
                    },
                    {
                        "value": "baramanamc.com",
                        "timestamp": "2021-11-09 15:27:07"
                    },
                    {
                        "value": "marty-klia.com",
                        "timestamp": "2021-11-09 15:27:06"
                    },
                    {
                        "value": "korty-bav.com",
                        "timestamp": "2021-11-09 15:27:06"
                    },
                    {
                        "value": "kloi-area.com",
                        "timestamp": "2021-11-09 15:27:06"
                    },
                    {
                        "value": "eartymanacaty.com",
                        "timestamp": "2021-11-09 15:27:06"
                    },
                    {
                        "value": "damnrtyu.com",
                        "timestamp": "2021-11-09 15:27:06"
                    },
                    {
                        "value": "jaratymanr.com",
                        "timestamp": "2021-11-08 14:00:50"
                    },
                    {
                        "value": "jptymana.com",
                        "timestamp": "2021-11-08 14:00:50"
                    },
                    {
                        "value": "lolalvatan.com",
                        "timestamp": "2021-11-08 14:00:50"
                    },
                    {
                        "value": "naratymena.com",
                        "timestamp": "2021-11-08 14:00:50"
                    },
                    {
                        "value": "falomana.com",
                        "timestamp": "2021-11-08 14:00:50"
                    },
                    {
                        "value": "schwartzidentifyg.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "sawakeg.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "mcphersonscang.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "insaneico2013b.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "espinozastingg.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "covermillsd.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "antiquefund1998b.com",
                        "timestamp": "2021-11-06 08:18:15"
                    },
                    {
                        "value": "gakosafd.com",
                        "timestamp": "2021-11-05 17:30:49"
                    },
                    {
                        "value": "gasdfasdf.com",
                        "timestamp": "2021-11-05 17:30:49"
                    },
                    {
                        "value": "holarty.com",
                        "timestamp": "2021-11-05 17:30:49"
                    },
                    {
                        "value": "wilcoxspendg.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "asldjram.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "dfgerta.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "gahsdagf.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "hastrama.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "holygomar.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "jasdefag.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "jasdfoa.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "jorast.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "jorpaf.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "karatyvac.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "kartyabm.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "kortynab.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "toyboaramn.com",
                        "timestamp": "2021-11-05 06:45:42"
                    },
                    {
                        "value": "danielsaudits.com",
                        "timestamp": "2021-11-05 06:45:41"
                    },
                    {
                        "value": "drakeauntg.com",
                        "timestamp": "2021-11-05 06:45:41"
                    },
                    {
                        "value": "glowstorage2001b.com",
                        "timestamp": "2021-11-05 06:45:41"
                    },
                    {
                        "value": "makestantond.com",
                        "timestamp": "2021-11-05 06:45:41"
                    },
                    {
                        "value": "michaelgardenings.com",
                        "timestamp": "2021-11-05 06:45:41"
                    },
                    {
                        "value": "regularcallahand.com",
                        "timestamp": "2021-11-05 06:45:41"
                    },
                    {
                        "value": "hamiltontrialg.com",
                        "timestamp": "2021-10-22 18:19:10"
                    },
                    {
                        "value": "gainesslushg.com",
                        "timestamp": "2021-10-22 18:19:10"
                    },
                    {
                        "value": "burnsbuddyg.com",
                        "timestamp": "2021-10-22 18:19:10"
                    },
                    {
                        "value": "perfectbernald.com",
                        "timestamp": "2021-10-15 14:36:51"
                    },
                    {
                        "value": "measuremanagement2001b.com",
                        "timestamp": "2021-10-15 14:36:51"
                    },
                    {
                        "value": "inheritmontesd.com",
                        "timestamp": "2021-10-15 14:36:51"
                    },
                    {
                        "value": "herringpurityg.com",
                        "timestamp": "2021-10-15 14:36:51"
                    },
                    {
                        "value": "harringtonsavingss.com",
                        "timestamp": "2021-10-15 14:36:51"
                    },
                    {
                        "value": "avromatka.space",
                        "timestamp": "2021-10-14 18:21:09"
                    },
                    {
                        "value": "tokensantanad.com",
                        "timestamp": "2021-10-14 05:25:45"
                    },
                    {
                        "value": "bobersok.top",
                        "timestamp": "2021-10-14 05:25:04"
                    },
                    {
                        "value": "floresballg.com",
                        "timestamp": "2021-10-14 05:24:12"
                    },
                    {
                        "value": "glasshollowayd.com",
                        "timestamp": "2021-10-14 05:24:12"
                    },
                    {
                        "value": "gregorydentistg.com",
                        "timestamp": "2021-10-14 05:24:12"
                    },
                    {
                        "value": "macdonaldjaguarg.com",
                        "timestamp": "2021-10-14 05:24:12"
                    },
                    {
                        "value": "vystarcu.space",
                        "timestamp": "2021-10-13 05:36:43"
                    },
                    {
                        "value": "zorofob.space",
                        "timestamp": "2021-10-13 05:36:43"
                    },
                    {
                        "value": "bigabo.space",
                        "timestamp": "2021-10-12 06:10:57"
                    },
                    {
                        "value": "connectbentleyd.com",
                        "timestamp": "2021-09-11 06:07:42"
                    },
                    {
                        "value": "illnessconnerd.com",
                        "timestamp": "2021-09-11 06:07:00"
                    },
                    {
                        "value": "drakeluckyg.com",
                        "timestamp": "2021-09-11 06:07:00"
                    },
                    {
                        "value": "gilbertplasticg.com",
                        "timestamp": "2021-09-11 06:07:00"
                    },
                    {
                        "value": "mabiorex.space",
                        "timestamp": "2021-09-08 05:52:40"
                    },
                    {
                        "value": "beltmorgand.com",
                        "timestamp": "2021-09-01 15:38:59"
                    },
                    {
                        "value": "parkstrustg.com",
                        "timestamp": "2021-09-01 12:29:12"
                    },
                    {
                        "value": "presenthollandd.com",
                        "timestamp": "2021-09-01 12:29:12"
                    },
                    {
                        "value": "flameaudit2016b.com",
                        "timestamp": "2021-09-01 12:29:12"
                    },
                    {
                        "value": "penaltyoutsourcing2012b.com",
                        "timestamp": "2021-09-01 12:29:12"
                    },
                    {
                        "value": "ayerspitchg.com",
                        "timestamp": "2021-09-01 12:29:12"
                    },
                    {
                        "value": "mcleanbounceg.com",
                        "timestamp": "2021-09-01 12:29:12"
                    },
                    {
                        "value": "francopublicg.com",
                        "timestamp": "2021-08-31 12:25:45"
                    },
                    {
                        "value": "hudsonborrowg.com",
                        "timestamp": "2021-08-31 12:25:45"
                    },
                    {
                        "value": "librarycoin2006b.com",
                        "timestamp": "2021-08-31 12:25:45"
                    },
                    {
                        "value": "marinjourneyg.com",
                        "timestamp": "2021-08-31 12:25:45"
                    },
                    {
                        "value": "onlineshepardd.com",
                        "timestamp": "2021-08-31 12:25:45"
                    },
                    {
                        "value": "summersdishg.com",
                        "timestamp": "2021-08-31 12:25:45"
                    },
                    {
                        "value": "brookscargos.com",
                        "timestamp": "2021-08-31 12:25:44"
                    },
                    {
                        "value": "chandlerdustg.com",
                        "timestamp": "2021-08-31 12:25:44"
                    },
                    {
                        "value": "hudsonborrowg.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "brookscargos.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "onlineshepardd.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "summersdishg.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "francopublicg.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "marinjourneyg.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "librarycoin2006b.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "chandlerdustg.com",
                        "timestamp": "2021-08-31 11:13:00"
                    },
                    {
                        "value": "ecologycraft1998b.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "hornhartmand.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "creekpipes2009b.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "poolgloverd.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "dyernoiseg.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "parkfinishg.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "chargehalld.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "mixestate2007b.com",
                        "timestamp": "2021-08-30 08:11:23"
                    },
                    {
                        "value": "dyernoiseg.com",
                        "timestamp": "2021-08-27 18:15:31"
                    },
                    {
                        "value": "parkfinishg.com",
                        "timestamp": "2021-08-27 18:15:30"
                    },
                    {
                        "value": "poolgloverd.com",
                        "timestamp": "2021-08-27 17:44:53"
                    },
                    {
                        "value": "stevensondilemmag.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "ramoscaptaing.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "ladderadamsd.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "punchtrujillod.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "larsendisorderg.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "kennedyamountg.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "laterpost2016b.com",
                        "timestamp": "2021-08-27 11:25:58"
                    },
                    {
                        "value": "soccerassets2007b.com",
                        "timestamp": "2021-08-27 11:25:57"
                    },
                    {
                        "value": "cookassetss.com",
                        "timestamp": "2021-08-26 10:19:47"
                    },
                    {
                        "value": "topproperty1998b.com",
                        "timestamp": "2021-08-26 10:19:47"
                    },
                    {
                        "value": "mixoil2005b.com",
                        "timestamp": "2021-08-26 10:19:46"
                    },
                    {
                        "value": "reedleaveg.com",
                        "timestamp": "2021-08-26 10:19:46"
                    },
                    {
                        "value": "lamboils.com",
                        "timestamp": "2021-08-26 10:19:46"
                    },
                    {
                        "value": "santiagomortgages.com",
                        "timestamp": "2021-08-26 10:19:46"
                    },
                    {
                        "value": "miraclerentals2007b.com",
                        "timestamp": "2021-08-26 10:19:46"
                    },
                    {
                        "value": "rosemayerd.com",
                        "timestamp": "2021-08-26 10:19:46"
                    },
                    {
                        "value": "topproperty1998b.com",
                        "timestamp": "2021-08-25 18:21:42"
                    },
                    {
                        "value": "drinkcrypto2020b.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "loudgas2016b.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "naturestantond.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "gilesawakeg.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "scoutpalmerd.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "leblanctaxis.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "stricklandspeakg.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "delgadologisticss.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "masseyeffortg.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "combinefoods2019b.com",
                        "timestamp": "2021-08-23 07:52:10"
                    },
                    {
                        "value": "sunalvarezd.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "cousinrentals2000b.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "bestranchg.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "operarentals2006b.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "praisegravesd.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "tapiaoutsourcings.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "thumbstorage1998b.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "spotservices2015b.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "muchmurillod.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "checkrosasd.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "maynardchickeng.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "barronlogicg.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "allisonshyg.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "burkeaudits.com",
                        "timestamp": "2021-08-23 07:52:09"
                    },
                    {
                        "value": "vagenor.space",
                        "timestamp": "2021-08-15 06:33:15"
                    },
                    {
                        "value": "sprayvillad.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "jumpwashingtond.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "camachovioling.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "menucraft2004b.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "knightmortgage2r.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "adjustoil2020b.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "carpetoil2005b.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "millscruelg.com",
                        "timestamp": "2021-08-03 11:58:56"
                    },
                    {
                        "value": "prepearcooking.us",
                        "timestamp": "2021-06-26 06:42:49"
                    },
                    {
                        "value": "prepearfood.us",
                        "timestamp": "2021-06-26 06:42:49"
                    },
                    {
                        "value": "prepearinc.us",
                        "timestamp": "2021-06-26 06:33:19"
                    },
                    {
                        "value": "prepearink.us",
                        "timestamp": "2021-06-26 06:33:19"
                    },
                    {
                        "value": "finesse.ink",
                        "timestamp": "2021-06-26 06:33:19"
                    },
                    {
                        "value": "whynt.xyz",
                        "timestamp": "2021-03-26 06:34:59"
                    },
                    {
                        "value": "bluecartservice.com",
                        "timestamp": "2021-03-26 06:31:26"
                    },
                    {
                        "value": "edurock.org",
                        "timestamp": "2021-03-26 06:31:26"
                    },
                    {
                        "value": "icartservice.org",
                        "timestamp": "2021-03-26 06:31:26"
                    },
                    {
                        "value": "imedservice.org",
                        "timestamp": "2021-03-26 06:31:26"
                    },
                    {
                        "value": "imerservice.net",
                        "timestamp": "2021-03-26 06:31:26"
                    },
                    {
                        "value": "merservice.org",
                        "timestamp": "2021-03-26 06:31:26"
                    },
                    {
                        "value": "lokoloppo1.com",
                        "timestamp": "2021-03-26 06:30:38"
                    },
                    {
                        "value": "lokoloppo2.com",
                        "timestamp": "2021-03-26 06:30:38"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-17 15:33:39",
    "file_name": "bazarbackdoor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=pIXl79IPkLI",
            "date": "2023-02-03",
            "organization": "Mandiant",
            "author": "Kimberly Goody",
            "title": "Float Like a Butterfly Sting Like a Bee",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/luna-moth-callback-phishing/",
            "date": "2022-11-21",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kristopher Russo",
            "title": "Threat Assessment: Luna Moth Callback Phishing Campaign",
            "categories": [
                "BazarBackdoor",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/research/evolution-of-bazarcall-social-engineering-tactics.html",
            "date": "2022-10-06",
            "organization": "Trellix",
            "author": "Daksh Kapur",
            "title": "Evolution of BazarCall Social Engineering Tactics",
            "categories": [
                "BazarBackdoor",
                "BazarCall"
            ]
        },
        {
            "data_url": "https://malwarebookreports.com/a-look-back-at-bazarloaders-dga/",
            "date": "2022-08-06",
            "organization": "MalwareBookReports",
            "author": "muzi",
            "title": "A LOOK BACK AT BAZARLOADER\u2019S DGA",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/bumblebee-malware-projector-libra/",
            "date": "2022-08-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "Flight of the Bumblebee: Email Lures and File Sharing Services Lead to Malware",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/api-hammering-malware-families/",
            "date": "2022-06-24",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Mark Lim",
            "title": "There Is More Than One Way to Sleep: Dive Deep Into the Implementations of API Hammering by Various Malware Families",
            "categories": [
                "BazarBackdoor",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-of-lnk-shortcut-files-malware/",
            "date": "2022-06-21",
            "organization": "McAfee",
            "author": "Lakshya Mathur",
            "title": "Rise of LNK (Shortcut files) Malware",
            "categories": [
                "BazarBackdoor",
                "Emotet",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://attackiq.com/2022/06/15/attack-graph-emulating-the-conti-ransomware-teams-behaviors/",
            "date": "2022-06-15",
            "organization": "AttackIQ",
            "author": "Jackson Wells",
            "title": "Attack Graph Emulating the Conti Ransomware Team\u2019s Behaviors",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/06/12/malware-pers-7.html",
            "date": "2022-06-12",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 7. Winlogon. Simple C++ example.",
            "categories": [
                "BazarBackdoor",
                "Gazer",
                "TurlaRPC",
                "Turla SilentMoon"
            ]
        },
        {
            "data_url": "https://www.0ffset.net/reverse-engineering/analysing-the-main-bazarloader/",
            "date": "2022-05-27",
            "organization": "0ffset Blog",
            "author": "Chuong Dong",
            "title": "BAZARLOADER: Analysing The Main Loader",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/",
            "date": "2022-05-09",
            "organization": "Microsoft Security",
            "author": "Microsoft Threat Intelligence Center",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "Griffon",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Gozi",
                "LockBit",
                "Pandora",
                "Rook",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2022/04/29/adventures-in-the-land-of-bumblebee-a-new-malicious-loader/",
            "date": "2022-04-29",
            "organization": "NCC Group",
            "author": "Mike Stokkel",
            "title": "Adventures in the land of BumbleBee \u2013 a new malicious loader",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Conti"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/bazarloader-anti-analysis-techniques/",
            "date": "2022-04-25",
            "organization": "paloalto Networks Unit 42",
            "author": "Mark Lim",
            "title": "Defeating BazarLoader Anti-Analysis Techniques",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.0ffset.net/reverse-engineering/bazarloader-iso-file-infection/",
            "date": "2022-04-19",
            "organization": "0ffset Blog",
            "author": "Chuong Dong",
            "title": "BAZARLOADER: Unpacking An ISO File Infection",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/enter-karakurt-data-extortion-arm-of-prolific-ransomware-group",
            "date": "2022-04-18",
            "organization": "AdvIntel",
            "author": "Vitali Kremez",
            "title": "Enter KaraKurt: Data Extortion Arm of Prolific Ransomware Group",
            "categories": [
                "AvosLocker",
                "BazarBackdoor",
                "BlackByte",
                "BlackCat",
                "Cobalt Strike",
                "HelloKitty",
                "Hive"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/04/lessons-from-conti-leaks.html",
            "date": "2022-04-17",
            "organization": "BushidoToken Blog",
            "author": "BushidoToken",
            "title": "Lessons from the Conti Leaks",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Emotet",
                "IcedID",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/karakurt-revealed-as-data-extortion-arm-of-conti-cybercrime-syndicate/",
            "date": "2022-04-15",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Karakurt revealed as data extortion arm of Conti cybercrime syndicate",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-leaks-ransomware-development",
            "date": "2022-04-05",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Move fast and commit crimes: Conti\u2019s development teams mirror corporate tech",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blog.prevailion.com/wizard-spider-continues-to-confound-4298370f6903",
            "date": "2022-03-30",
            "organization": "Prevailion",
            "author": "Prevailion",
            "title": "Wizard Spider continues to confound",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Emotet"
            ]
        },
        {
            "data_url": "https://resource.redcanary.com/rs/003-YRU-314/images/2022_ThreatDetectionReport_RedCanary.pdf",
            "date": "2022-03-22",
            "organization": "Red Canary",
            "author": "Red Canary",
            "title": "2022 Threat Detection Report",
            "categories": [
                "FAKEUPDATES",
                "Silver Sparrow",
                "BazarBackdoor",
                "Cobalt Strike",
                "GootKit",
                "Yellow Cockatoo RAT"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/conti-affiliate-exposed-new-domain-names-ip-addresses-and-email-addresses-uncovered-by-esentire",
            "date": "2022-03-21",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Conti Affiliate Exposed: New Domain Names, IP Addresses and Email Addresses Uncovered",
            "categories": [
                "HelloKitty",
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "FiveHands",
                "HelloKitty",
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/exposing-initial-access-broker-ties-conti/",
            "date": "2022-03-17",
            "organization": "Google",
            "author": "Vladislav Stolyarov",
            "title": "Exposing initial access broker with ties to Conti",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/exposing-initial-access-broker-ties-conti",
            "date": "2022-03-17",
            "organization": "Google",
            "author": "Vladislav Stolyarov",
            "title": "Exposing initial access broker with ties to Conti",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Conti",
                "EXOTIC LILY"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/rpt/rpt-navigating-new-frontiers-trend-micro-2021-annual-cybersecurity-report.pdf",
            "date": "2022-03-17",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Navigating New Frontiers Trend Micro 2021 Annual Cybersecurity Report",
            "categories": [
                "REvil",
                "BazarBackdoor",
                "Buer",
                "IcedID",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/corporate-website-contact-forms-used-to-spread-bazarbackdoor-malware/",
            "date": "2022-03-10",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Corporate website contact forms used to spread BazarBackdoor malware",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://abnormalsecurity.com/blog/bazarloader-contact-form",
            "date": "2022-03-09",
            "organization": "Abnormal",
            "author": "Belem Regalado",
            "title": "BazarLoader Actors Initiate Contact via Website Contact Forms",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/cisa-updates-conti-ransomware-alert-with-nearly-100-domain-names/",
            "date": "2022-03-09",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "CISA updates Conti ransomware alert with nearly 100 domain names",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/c/cyberattacks-are-prominent-in-the-russia-ukraine-conflict.html",
            "date": "2022-03-03",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Cyberattacks are Prominent in the Russia-Ukraine Conflict",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "Emotet",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://experience.mandiant.com/trending-evil/p/1",
            "date": "2022-02-26",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "TRENDING EVIL Q1 2022",
            "categories": [
                "KEYPLUG",
                "FAKEUPDATES",
                "GootLoader",
                "BazarBackdoor",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.cyberscoop.com/trickbot-shutdown-conti-emotet/",
            "date": "2022-02-25",
            "organization": "CyberScoop",
            "author": "Joe Warminsky",
            "title": "TrickBot malware suddenly got quiet, researchers say, but it's hardly the end for its operators",
            "categories": [
                "BazarBackdoor",
                "Emotet",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/02/notorious-trickbot-malware-gang-shuts.html",
            "date": "2022-02-24",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Notorious TrickBot Malware Gang Shuts Down its Botnet Infrastructure",
            "categories": [
                "BazarBackdoor",
                "Emotet",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/02/trickbot-gang-likely-shifting.html",
            "date": "2022-02-24",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "TrickBot Gang Likely Shifting Operations to Switch to New Malware",
            "categories": [
                "BazarBackdoor",
                "Emotet",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://kienmanowar.wordpress.com/2022/02/24/quicknote-techniques-for-decrypting-bazarloader-strings/",
            "date": "2022-02-24",
            "organization": "kienmanowar Blog",
            "author": "m4n0w4r",
            "title": "[QuickNote] Techniques for decrypting BazarLoader strings",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://elis531989.medium.com/highway-to-conti-analysis-of-bazarloader-26368765689d",
            "date": "2022-02-16",
            "organization": "Medium elis531989",
            "author": "Eli Salem",
            "title": "Highway to Conti: Analysis of Bazarloader",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/trickbot-gang-template-based-metaprogramming-bazar-malware/",
            "date": "2022-02-02",
            "organization": "IBM",
            "author": "Kevin Henson",
            "title": "TrickBot Gang Uses Template-Based Metaprogramming in Bazar Malware",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://forensicitguy.github.io/bazariso-analysis-advpack/",
            "date": "2022-01-22",
            "organization": "forensicitguy",
            "author": "Tony Lambert",
            "title": "BazarISO Analysis - Loading with Advpack.dll",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0118.pdf",
            "date": "2022-01-18",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "2021 Adversary Infrastructure Report",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Dridex",
                "IcedID",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://malwarebookreports.com/bazarloader-back-from-holiday-break/",
            "date": "2022-01-15",
            "organization": "MalwareBookReports",
            "author": "muzi",
            "title": "BazarLoader - Back from Holiday Break",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/malicious-csv-text-files-used-to-install-bazarbackdoor-malware/",
            "date": "2022-01-02",
            "organization": "BleepingComputer",
            "author": "Lawrence Abrams",
            "title": "Malicious CSV text files used to install BazarBackdoor malware",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/12/13/diavol-ransomware/",
            "date": "2021-12-13",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Diavol Ransomware",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Diavol"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/yanluowang-ransomware-attacks-continue",
            "date": "2021-11-30",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "Yanluowang: Further Insights on New Ransomware Threat",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "FiveHands"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/",
            "date": "2021-11-29",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "CONTInuing the Bazar Ransomware Story",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/k/bazarloader-adds-compromised-installers-iso-to-arrival-delivery-vectors.html",
            "date": "2021-11-23",
            "organization": "Trend Micro",
            "author": "Ian Kenefick",
            "title": "BazarLoader Adds Compromised Installers, ISO to Arrival and Delivery Vectors",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://pcsxcetrasupport3.wordpress.com/2021/11/16/excel-4-macro-code-obfuscation/",
            "date": "2021-11-16",
            "organization": "PC's Xcetra Support",
            "author": "David Ledbetter",
            "title": "Excel 4 macro code obfuscation",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/11/11/bazarloader-call-me-back-attack-abuses-windows-10-apps-mechanism/",
            "date": "2021-11-11",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "BazarLoader \u2018call me back\u2019 attack abuses Windows 10 Apps mechanism",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://twitter.com/Unit42_Intel/status/1458113934024757256",
            "date": "2021-11-05",
            "organization": "Twitter (@Unit42_Intel)",
            "author": "Unit 42",
            "title": "Tweet on TA551 (Shathak) BazarLoader infection with CobaltStrike and DarkVNC drops",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/bazarloader-network-reconnaissance/",
            "date": "2021-10-18",
            "organization": "paloalto Netoworks: Unit42",
            "author": "Brad Duncan",
            "title": "Case Study: From BazarLoader to Network Reconnaissance",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/trickbot-gang-doubles-down-enterprise-infection/",
            "date": "2021-10-13",
            "organization": "IBM",
            "author": "Ole Villadsen",
            "title": "Trickbot Rising \u2014 Gang Doubles Down on Infection Efforts to Amass Network Footholds",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/new-trickbot-and-bazarloader-campaigns-use-multiple-delivery-vectors",
            "date": "2021-10-08",
            "organization": "Zscaler",
            "author": "Tarun Dewan",
            "title": "New Trickbot and BazarLoader campaigns use multiple delivery vectorsi",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/fin12-ransomware-intrusion-actor-pursuing-healthcare-targets",
            "date": "2021-10-07",
            "organization": "Mandiant",
            "author": "Joshua Shilko",
            "title": "FIN12: The Prolific Ransomware Intrusion Threat Actor That Has Aggressively Pursued Healthcare Targets",
            "categories": [
                "BazarBackdoor",
                "GRIMAGENT",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/10/04/bazarloader-and-the-conti-leaks/",
            "date": "2021-10-04",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "BazarLoader and the Conti Leaks",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/10/threat-hunting-in-large-datasets-by.html",
            "date": "2021-10-04",
            "organization": "Cisco",
            "author": "Tiago Pereira",
            "title": "Threat hunting in large datasets by clustering security events",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/four-popular-defensive-evasion-techniques-in-2021/",
            "date": "2021-09-17",
            "organization": "CrowdStrike",
            "author": "Falcon OverWatch Team",
            "title": "Falcon OverWatch Hunts Down Adversaries Where They Hide",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/09/13/bazarloader-to-conti-ransomware-in-32-hours/",
            "date": "2021-09-13",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "BazarLoader to Conti Ransomware in 32 Hours",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/04/simple-malware-av-evasion.html",
            "date": "2021-09-04",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 1",
            "categories": [
                "4h_rat",
                "Azorult",
                "BADCALL",
                "BadNews",
                "BazarBackdoor",
                "Cardinal RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://johannesbader.ch/blog/a-bazarloader-dga-that-breaks-during-summer-months/",
            "date": "2021-08-09",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "A BazarLoader DGA that Breaks Down in the Summer",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/08/01/bazarcall-to-conti-ransomware-via-trickbot-and-cobalt-strike/",
            "date": "2021-08-01",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "BazarCall to Conti Ransomware via Trickbot and Cobalt Strike",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://twitter.com/Unit42_Intel/status/1421117403644186629?s=20",
            "date": "2021-07-30",
            "organization": "Twitter (@Unit42_Intel)",
            "author": "Unit 42",
            "title": "Tweet on BazarLoader infection leading to cobaltstrike and Powershell script file for PrintNightmare vulnerability",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/decrypting-bazarloader-strings-with-a-unicorn-15d2585272a9",
            "date": "2021-07-30",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Decrypting BazarLoader strings with a Unicorn",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2021/07/29/bazacall-phony-call-centers-lead-to-exfiltration-and-ransomware/",
            "date": "2021-07-29",
            "organization": "Microsoft",
            "author": "Microsoft Defender Threat Intelligence",
            "title": "BazaCall: Phony call centers lead to exfiltration and ransomware",
            "categories": [
                "BazarBackdoor",
                "BazarCall"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/07/29/bazacall-phony-call-centers-lead-to-exfiltration-and-ransomware/",
            "date": "2021-07-29",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "BazaCall: Phony call centers lead to exfiltration and ransomware",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/bazarbackdoor-sneaks-in-through-nested-rar-and-zip-archives/",
            "date": "2021-07-14",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "BazarBackdoor sneaks in through nested RAR and ZIP archives",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/first-step-initial-access-leads-ransomware",
            "date": "2021-06-16",
            "organization": "Proofpoint",
            "author": "Selena Larson",
            "title": "The First Step: Initial Access Leads to Ransomware",
            "categories": [
                "BazarBackdoor",
                "Egregor",
                "IcedID",
                "Maze",
                "QakBot",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/bazarloader-malware/",
            "date": "2021-05-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "BazarCall: Call Centers Help Spread BazarLoader Malware",
            "categories": [
                "BazarBackdoor",
                "campoloader"
            ]
        },
        {
            "data_url": "https://www.intel471.com/blog/Cobalt-strike-cybercriminals-trickbot-qbot-hancitor",
            "date": "2021-05-19",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Look how many cybercriminals love Cobalt Strike",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Hancitor",
                "QakBot",
                "SmokeLoader",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://mal-eats.net/en/2021/05/11/campo_new_attack_campaign_targeting_japan/",
            "date": "2021-05-11",
            "organization": "Mal-Eats",
            "author": "mal_eats",
            "title": "Campo, a New Attack Campaign Targeting Japan",
            "categories": [
                "AnchorDNS",
                "BazarBackdoor",
                "campoloader",
                "Cobalt Strike",
                "Phobos",
                "Snifula",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://mal-eats.net/2021/05/10/campo_new_attack_campaign_targeting_japan/",
            "date": "2021-05-10",
            "organization": "Mal-Eats",
            "author": "mal_eats",
            "title": "Overview of Campo, a new attack campaign targeting Japan",
            "categories": [
                "AnchorDNS",
                "BazarBackdoor",
                "Cobalt Strike",
                "ISFB",
                "Phobos",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/04/15/bazarloader-deploys-a-pair-of-novel-spam-vectors",
            "date": "2021-04-15",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "BazarLoader deploys a pair of novel spam vectors",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/27308",
            "date": "2021-04-14",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Brad Duncan",
            "title": "April 2021 Forensic Quiz: Answers and Analysis",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/d/a-spike-in-bazarcall-and-icedid-activity.html",
            "date": "2021-04-12",
            "organization": "Trend Micro",
            "author": "Raphael Centeno",
            "title": "A Spike in BazarCall and IcedID Activity Detected in March",
            "categories": [
                "BazarBackdoor",
                "IcedID"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/ettersilent-maldoc-builder-macro-trickbot-qbot/",
            "date": "2021-04-06",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "EtterSilent: the underground\u2019s new favorite maldoc builder",
            "categories": [
                "BazarBackdoor",
                "ISFB",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=uAkeXCYcl4Y",
            "date": "2021-03-30",
            "organization": "YouTube ( malware-traffic-analysis.net)",
            "author": "Brad Duncan",
            "title": "2021-03-29 BazaCall (BazarCall) Example",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://fr3d.hk/blog/campo-loader-simple-but-effective",
            "date": "2021-03-30",
            "organization": "FR3D.HK",
            "author": "Fred HK",
            "title": "Campo Loader - Simple but effective",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-bb-2021-threat-report.pdf",
            "date": "2021-03-21",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "2021 Threat Report",
            "categories": [
                "Bashlite",
                "FritzFrog",
                "IPStorm",
                "Mirai",
                "Tsunami",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "EvilQuest",
                "Manuscrypt",
                "Astaroth",
                "BazarBackdoor",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "FinFisher RAT",
                "Kwampirs",
                "MimiKatz",
                "NjRAT",
                "Ryuk",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/03/08/bazar-drops-the-anchor/",
            "date": "2021-03-08",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Bazar Drops the Anchor",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/nimar-loader-4f61c090c49e",
            "date": "2021-03-01",
            "organization": "Medium walmartglobaltech",
            "author": "Joshua Platt",
            "title": "Nimar Loader",
            "categories": [
                "BazarBackdoor",
                "BazarNimrod",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210305181115/https://cisoclub.ru/doc/otchet-kompanii-group-ib-ransomware-uncovered-2020-2021/?bp-attachment=group-ib_ransomware_uncovered_2020-2021.pdf",
            "date": "2021-03",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Ransomware Uncovered 2020/2021",
            "categories": [
                "RansomEXX",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "IcedID",
                "Maze",
                "PwndLocker",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-006.pdf",
            "date": "2021-02-25",
            "organization": "ANSSI",
            "author": "CERT-FR",
            "title": "Ryuk Ransomware",
            "categories": [
                "BazarBackdoor",
                "Buer",
                "Conti",
                "Emotet",
                "Ryuk",
                "TrickBot"
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
            "data_url": "https://www.fortinet.com/blog/threat-research/new-bazar-trojan-variant-is-being-spread-in-recent-phishing-campaign-part-II",
            "date": "2021-02-12",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "New Bazar Trojan Variant is Being Spread in Recent Phishing Campaign \u2013 Part II",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/new-bazar-trojan-variant-is-being-spread-in-recent-phishing-campaign-part-I",
            "date": "2021-02-12",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "New Bazar Trojan Variant is Being Spread in Recent Phishing Campaign \u2013 Part I",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/baza-valentines-day",
            "date": "2021-02-11",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Research Team",
            "title": "A Baza Valentine\u2019s Day",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://cofense.com/blog/bazarbackdoor-stealthy-infiltration",
            "date": "2021-02-09",
            "organization": "Cofense",
            "author": "Zachary Bailey",
            "title": "BazarBackdoor\u2019s Stealthy Infiltration Evades Multiple SEGs",
            "categories": [
                "BazarBackdoor"
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
            "data_url": "https://www.gosecure.net/blog/2021/02/01/bazarloader-mocks-researchers-in-december-2020-malspam-campaign/",
            "date": "2021-02-01",
            "organization": "GoSecure",
            "author": "Lilly Chalupowski",
            "title": "BazarLoader Mocks Researchers in December 2020 Malspam Campaign",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/01/31/bazar-no-ryuk/",
            "date": "2021-01-31",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Bazar, No Ryuk?",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/threat-research/bazarloaders-elaborate-flower-shop-lure/",
            "date": "2021-01-28",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "BazarLoader\u2019s Elaborate Flower Shop Lure",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://storage.pardot.com/652283/16118467480sqebwq7/MSP_Security_Summit___John_Hammond_Huntress___Analyzing_Ryuk.pdf",
            "date": "2021-01-28",
            "organization": "Huntress Labs",
            "author": "John Hammond",
            "title": "Analyzing Ryuk Another Link in the Cyber Attack Chain",
            "categories": [
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://johannesbader.ch/blog/yet-another-bazarloader-dga/",
            "date": "2021-01-23",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "Yet Another Bazar Loader DGA",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/slamming-the-backdoor-on-bazarloader",
            "date": "2021-01-12",
            "organization": "Minerva Labs",
            "author": "MinervaLabs",
            "title": "Slamming The Backdoor On BazarLoader",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs.-conti-ransomware",
            "date": "2021-01-12",
            "organization": "Cybereason",
            "author": "Lior Rochberger",
            "title": "Cybereason vs. Conti Ransomware",
            "categories": [
                "BazarBackdoor",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/tracking-a-trickbot-related-ransomware-incident",
            "date": "2021-01-06",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Holiday Bazar: Tracking a TrickBot-Related Ransomware Incident",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://johannesbader.ch/blog/next-version-of-the-bazarloader-dga/",
            "date": "2020-12-16",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "Next Version of the Bazar Loader DGA",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs.-ryuk-ransomware",
            "date": "2020-12-10",
            "organization": "Cybereason",
            "author": "Joakim Kandefelt",
            "title": "Cybereason vs. Ryuk Ransomware",
            "categories": [
                "BazarBackdoor",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/the-malware-that-usually-installs-ransomware-and-you-need-to-remove-right-away/",
            "date": "2020-11-20",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "The malware that usually installs ransomware and you need to remove right away",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "FriedEx",
                "MegaCortex",
                "Phorpiex",
                "PwndLocker",
                "QakBot",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://public.intel471.com/blog/trickbot-update-november-2020-bazar-loader-microsoft/",
            "date": "2020-11-10",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Trickbot down, but is it out?",
            "categories": [
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.area1security.com/blog/trickbot-spear-phishing-drops-bazar-buer-malware/",
            "date": "2020-11-09",
            "organization": "Area 1",
            "author": "Threat Research Team",
            "title": "Phishing Campaign Threatens Job Security, Drops Bazar and Buer Malware",
            "categories": [
                "BazarBackdoor",
                "Buer"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/anatomy-of-attack-inside-bazarbackdoor-to-ryuk-ransomware-one-group-via-cobalt-strike",
            "date": "2020-11-06",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Anatomy of Attack: Inside BazarBackdoor to Ryuk Ransomware \"one\" Group via Cobalt Strike",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/11/05/ryuk-speed-run-2-hours-to-ransom/",
            "date": "2020-11-05",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ryuk Speed Run, 2 Hours to Ransom",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.scythe.io/library/threatthursday-ryuk",
            "date": "2020-11-05",
            "organization": "SCYTHE",
            "author": "Jorge Orchilles",
            "title": "#ThreatThursday - Ryuk",
            "categories": [
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/networkvirtualization/2020/11/trick-or-threat-ryuk-ransomware-targets-the-health-care-industry.html/",
            "date": "2020-11-04",
            "organization": "VMRay",
            "author": "Giovanni Vigna",
            "title": "Trick or Threat: Ryuk ransomware targets the health care industry",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cofense.com/the-ryuk-threat-why-bazarbackdoor-matters-most/",
            "date": "2020-10-30",
            "organization": "Cofense",
            "author": "The Cofense Intelligence Team",
            "title": "The Ryuk Threat: Why BazarBackdoor Matters Most",
            "categories": [
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://github.com/ThreatConnect-Inc/research-team/blob/master/IOCs/WizardSpider-UNC1878-Ryuk.csv",
            "date": "2020-10-30",
            "organization": "Github (ThreatConnect-Inc)",
            "author": "ThreatConnect",
            "title": "UNC 1878 Indicators from Threatconnect",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://twitter.com/anthomsec/status/1321865315513520128",
            "date": "2020-10-29",
            "organization": "Twitter (@anthomsec)",
            "author": "Andrew Thompson",
            "title": "Tweet on UNC1878 activity",
            "categories": [
                "BazarBackdoor",
                "Ryuk",
                "TrickBot",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/ryuk-ransomware/",
            "date": "2020-10-29",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brittany Barbehenn",
            "title": "Threat Assessment: Ryuk Ransomware and Trickbot Targeting U.S. Healthcare and Public Health Sector",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/10/kegtap-and-singlemalt-with-a-ransomware-chaser.html",
            "date": "2020-10-28",
            "organization": "FireEye",
            "author": "Kimberly Goody",
            "title": "Unhappy Hour Special: KEGTAP and SINGLEMALT With a Ransomware Chaser",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk",
                "UNC1878"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/sites/default/files/publications/AA20-302A_Ransomware%20_Activity_Targeting_the_Healthcare_and_Public_Health_Sector.pdf",
            "date": "2020-10-28",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA20-302A: Ransomware Activity Targeting the Healthcare and Public Health Sector",
            "categories": [
                "AnchorDNS",
                "Anchor",
                "BazarBackdoor",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/10/18/ryuk-in-5-hours/",
            "date": "2020-10-18",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ryuk in 5 Hours",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/wizard-spider-adversary-update/",
            "date": "2020-10-16",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "WIZARD SPIDER Update: Resilient, Reactive and Resolute",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/threat-research/bazarloader-campaign-with-fake-termination-emails/",
            "date": "2020-10-13",
            "organization": "Hornetsecurity",
            "author": "Security Lab",
            "title": "BazarLoader Campaign with Fake Termination Emails",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/front-door-into-bazarbackdoor-stealthy-cybercrime-weapon",
            "date": "2020-10-12",
            "organization": "Advanced Intelligence",
            "author": "Roman Marshanski",
            "title": "\"Front Door\" into BazarBackdoor: Stealthy Cybercrime Weapon",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2020/10/08/ryuks-return/",
            "date": "2020-10-08",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Ryuk\u2019s Return",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.hhs.gov/sites/default/files/bazarloader.pdf",
            "date": "2020-10-02",
            "organization": "Health Sector Cybersecurity Coordination Center (HC3)",
            "author": "Health Sector Cybersecurity Coordination Center (HC3)",
            "title": "Report 202010021600: Recent Bazarloader Use in Ransomware Campaigns",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/research/spear-phishing-campaign-delivers-buer-and-bazar-malware",
            "date": "2020-09-29",
            "organization": "Zscaler",
            "author": "Mohd Sadique",
            "title": "Spear Phishing Campaign Delivers Buer and Bazar Malware",
            "categories": [
                "BazarBackdoor",
                "Buer"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/a-bazar-of-tricks-following-team9s-development-cycles",
            "date": "2020-07-16",
            "organization": "Cybereason",
            "author": "Daniel Frank",
            "title": "A Bazar of Tricks: Following Team9\u2019s Development Cycles",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/hubfs/A%20Bazar%20of%20Tricks%20Following%20Team9%E2%80%99s%20Development%20Cycles%20IOCs.pdf",
            "date": "2020-07-16",
            "organization": "Cybereason",
            "author": "Daniel Frank",
            "title": "A Bazar of Tricks: Following Team9\u2019s Development Cycles (IOCs)",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://johannesbader.ch/blog/the-buggy-dga-of-bazarbackdoor/",
            "date": "2020-07-15",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "The Defective Domain Generation Algorithm of BazarBackdoor",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://johannesbader.ch/blog/the-dga-of-bazarbackdoor/",
            "date": "2020-07-14",
            "organization": "Johannes Bader's Blog",
            "author": "Johannes Bader",
            "title": "The Domain Generation Algorithm of BazarBackdoor",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2020/06/02/in-depth-analysis-of-the-new-team9-malware-family/",
            "date": "2020-06-02",
            "organization": "Fox-IT",
            "author": "Nikolaos Pantazopoulos",
            "title": "In-depth analysis of the new Team9 malware family",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2020/06/02/in-depth-analysis-of-the-new-team9-malware-family/",
            "date": "2020-06-02",
            "organization": "NCC Group",
            "author": "Nikolaos Pantazopoulos",
            "title": "In-depth analysis of the new Team9 malware family",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://cybersecurity.att.com/blogs/labs-research/trickbot-bazarloader-in-depth",
            "date": "2020-05-19",
            "organization": "AlienLabs",
            "author": "Ofer Caspi",
            "title": "TrickBot BazarLoader In-Depth",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/hk-en/security/news/cybercrime-and-digital-threats/group-behind-trickbot-spreads-fileless-bazarbackdoor",
            "date": "2020-04-27",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Group Behind TrickBot Spreads Fileless BazarBackdoor",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/bazarbackdoor-trickbot-gang-s-new-stealthy-network-hacking-malware/",
            "date": "2020-04-24",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "BazarBackdoor: TrickBot gang\u2019s new stealthy network-hacking malware",
            "categories": [
                "BazarBackdoor"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2020/04/lets-learn-trickbot-bazarbackdoor.html",
            "date": "2020-04-24",
            "organization": "",
            "author": "Vitali Kremez",
            "title": "TrickBot \"BazarBackdoor\" Process Hollowing Injection Primer",
            "categories": [
                "BazarBackdoor"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bazar",
            "procedure_code": "s0534",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0534",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "bazar has been spread via emails with embedded malicious links.[24][25][26]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "bazar can execute a powershell script received from c2.[31][32]"
                },
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
                    "procedure_description": "bazar can launch cmd.exe to perform reconnaissance commands.[41][42]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "bazar can use various apis to allocate memory and facilitate code execution/injection.[33]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "bazar can create a scheduled task for persistence.[27][28]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "bazar can gain execution after a user clicks on a malicious link to decoy landing pages hosted on google docs.[15][16][17]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "bazar can execute a wmi query to gather information about the installed antivirus engine.[13][14]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1197",
                    "technique_link": "https://attack.mitre.org/techniques/T1197",
                    "technique_name": "bits jobs",
                    "technique_description": "adversaries may abuse bits jobs to persistently execute code and perform various background tasks. windows background intelligent transfer service (bits) is a low-bandwidth, asynchronous file transfer mechanism exposed through component object model (com). bits is commonly used by updaters, messengers, and other applications preferred to operate in the background (using available idle bandwidth) without interrupting other networked applications. file transfer tasks are implemented as bits jobs, which contain a queue of one or more file operations.",
                    "procedure_description": "bazar has been downloaded via windows bits functionality.[11]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "bazar can create or add files to registry run keys to establish persistence.[42][43]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/004",
                    "technique_name": "boot or logon autostart execution : winlogon helper dll",
                    "technique_description": "adversaries may abuse features of winlogon to execute dlls and/or executables when a user logs in. winlogon.exe is a windows component responsible for actions at logon/logoff as well as the secure attention sequence (sas) triggered by ctrl-alt-delete. registry entries in hklm\\software[\\wow6432node\\]\\microsoft\\windows nt\\currentversion\\winlogon\\ and hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon\\ are used to manage additional helper programs and functionalities that support winlogon.",
                    "procedure_description": "bazar can use winlogon helper dll to establish persistence.[2]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "bazar can establish persistence by writing shortcuts to the windows startup folder.[6][7]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "bazar can create a scheduled task for persistence.[27][28]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "bazar can create or add files to registry run keys to establish persistence.[42][43]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/004",
                    "technique_name": "boot or logon autostart execution : winlogon helper dll",
                    "technique_description": "adversaries may abuse features of winlogon to execute dlls and/or executables when a user logs in. winlogon.exe is a windows component responsible for actions at logon/logoff as well as the secure attention sequence (sas) triggered by ctrl-alt-delete. registry entries in hklm\\software[\\wow6432node\\]\\microsoft\\windows nt\\currentversion\\winlogon\\ and hkcu\\software\\microsoft\\windows nt\\currentversion\\winlogon\\ are used to manage additional helper programs and functionalities that support winlogon.",
                    "procedure_description": "bazar can use winlogon helper dll to establish persistence.[2]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "bazar can establish persistence by writing shortcuts to the windows startup folder.[6][7]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "bazar can inject code through calling virtualallocexnuma.[10]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "bazar can inject into a target process including svchost, explorer, and cmd using process hollowing.[12][13]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.013",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/013",
                    "technique_name": "process injection : process doppelg\u00e4nging",
                    "technique_description": "adversaries may inject malicious code into process via process doppelg\u00e4nging in order to evade process-based defenses as well as possibly elevate privileges. process doppelg\u00e4nging is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "bazar can inject into a target process using process doppelg\u00e4nging.[5][6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "bazar can create a scheduled task for persistence.[27][28]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1197",
                    "technique_link": "https://attack.mitre.org/techniques/T1197",
                    "technique_name": "bits jobs",
                    "technique_description": "adversaries may abuse bits jobs to persistently execute code and perform various background tasks. windows background intelligent transfer service (bits) is a low-bandwidth, asynchronous file transfer mechanism exposed through component object model (com). bits is commonly used by updaters, messengers, and other applications preferred to operate in the background (using available idle bandwidth) without interrupting other networked applications. file transfer tasks are implemented as bits jobs, which contain a queue of one or more file operations.",
                    "procedure_description": "bazar has been downloaded via windows bits functionality.[11]"
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
                    "procedure_description": "bazar can decrypt downloaded payloads. bazar also resolves strings and other artifacts at runtime.[29][30]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "bazar has manually loaded ntdll from disk in order to identity and remove api hooks set by security products.[15]"
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
                    "procedure_description": "bazar can delete its loader using a batch file in the windows temporary folder.[25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/009",
                    "technique_name": "indicator removal : clear persistence",
                    "technique_description": "adversaries may clear artifacts associated with previously established persistence on a host system to remove evidence of their activity. this may involve various actions, such as removing services, deleting executables, modify registry, plist file modification, or other methods of cleanup to prevent defenders from collecting evidence of their persistent presence. adversaries may also delete accounts previously created to maintain persistence (i.e. create account).",
                    "procedure_description": "bazar's loader can delete scheduled tasks created by a previous instance of the malware.[3]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "bazar can create a task named to appear benign.[10]"
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
                    "procedure_description": "the bazar loader has named malicious shortcuts \"adobe\" and mimicked communications software.[21][22][23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/007",
                    "technique_name": "masquerading : double file extension",
                    "technique_description": "adversaries may abuse a double extension in the filename as a means of masquerading the true file type. a file name may include a secondary file type extension that may cause only the first extension to be displayed (ex: file.txt.exe may render in some views as just file.txt). however, the second extension is the true file type that determines how the file is opened and executed. the real file extension may be hidden by the operating system in the file browser (ex: explorer.exe), as well as in any software configured using or similar to the system\u2019s policies.",
                    "procedure_description": "the bazar loader has used dual-extension executable files such as previewreport.doc.exe.[3]"
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
                    "procedure_description": "bazar has used xor, rsa2, and rc4 encrypted files.[46][47][48]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "bazar has a variant with a packed payload.[17][18]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/007",
                    "technique_name": "obfuscated files or information : dynamic api resolution",
                    "technique_description": "adversaries may obfuscate then dynamically resolve api functions called by their malware in order to conceal malicious functionalities and impair defensive analysis. malware commonly uses various native api functions provided by the os to perform various tasks such as those involving processes, files, and other system artifacts.",
                    "procedure_description": "bazar can hash then resolve api calls at runtime.[6][7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "bazar can inject code through calling virtualallocexnuma.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "bazar can inject into a target process including svchost, explorer, and cmd using process hollowing.[12][13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.013",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/013",
                    "technique_name": "process injection : process doppelg\u00e4nging",
                    "technique_description": "adversaries may inject malicious code into process via process doppelg\u00e4nging in order to evade process-based defenses as well as possibly elevate privileges. process doppelg\u00e4nging is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "bazar can inject into a target process using process doppelg\u00e4nging.[5][6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "bazar has been signed with fake certificates including those appearing to be from vb corporate pty. ltd.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "bazar can attempt to overload sandbox analysis by sending 1550 calls to printf.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "bazar can use a timer to delay execution of core functionality.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "bazar can identify administrator accounts on an infected host.[7]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "bazar has the ability to identify domain administrator accounts.[7][8]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1482",
                    "technique_link": "https://attack.mitre.org/techniques/T1482",
                    "technique_name": "domain trust discovery",
                    "technique_description": "adversaries may attempt to gather information on domain trust relationships that may be used to identify lateral movement opportunities in windows multi-domain/forest environments. domain trusts provide a mechanism for a domain to allow access to resources based on the authentication procedures of another domain. domain trusts allow the users of the trusted domain to access resources in the trusting domain. the information discovered may help the adversary conduct sid-history injection, pass the ticket, and kerberoasting. domain trusts can be enumerated using the dsenumeratedomaintrusts() win32 api call, .net methods, and ldap. the windows utility nltest is known to be used by adversaries to enumerate domain trusts.",
                    "procedure_description": "bazar can use nltest tools to obtain information about the domain.[9][10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bazar can enumerate the victim's desktop.[40][41]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "bazar can enumerate shared drives on the domain.[14]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bazar can identity the current process on a compromised host.[29]"
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
                    "procedure_description": "bazar can query windows\\currentversion\\uninstall for installed applications.[11][12]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "bazar can enumerate remote systems using  net view.[17]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518",
                    "technique_link": "https://attack.mitre.org/techniques/T1518",
                    "technique_name": "software discovery",
                    "technique_description": "adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. adversaries may use the information from software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bazar can query the registry for installed applications.[1]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bazar can identify the installed antivirus engine.[11]"
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
                    "procedure_description": "bazar can fingerprint architecture, computer name, and os version on the compromised host. bazar can also check if the russian language is installed on the infected machine and terminate if it is found.[51][52]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "bazar can perform a check to ensure that the operating system's keyboard and language settings are not set to russian.[7]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "bazar can collect the ip address and netbios name of an infected machine.[33]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bazar can identify the username of the infected user.[22]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "bazar can collect the time on the compromised host.[12][13]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "bazar can attempt to overload sandbox analysis by sending 1550 calls to printf.[4]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "bazar can use a timer to delay execution of core functionality.[9]"
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
                    "procedure_description": "bazar can retrieve information from the infected machine.[25]"
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
                    "procedure_description": "bazar can use http and https over ports 80 and 443 in c2 communications.[33][34][35]"
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
                    "procedure_description": "bazar can implement dga using the current date as a seed variable.[11]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "bazar can send c2 communications with xor encryption.[12]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "bazar can use tls in c2 communications.[4]"
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
                    "procedure_description": "bazar has the ability to use an alternative c2 server if the primary server fails.[4]"
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
                    "procedure_description": "bazar can download and deploy additional payloads, including ransomware and post-exploitation frameworks such as cobalt strike.[58][59][60][61]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1104",
                    "technique_link": "https://attack.mitre.org/techniques/T1104",
                    "technique_name": "multi-stage channels",
                    "technique_description": "adversaries may create multiple stages for command and control that are employed under different conditions or for certain functions. use of multiple stages may obfuscate the command and control channel to make detection more difficult.",
                    "procedure_description": "the bazar loader is used to download and execute the bazar backdoor.[4][5]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "bazar downloads have been hosted on google docs.[2][3]"
                }
            ]
        }
    ]
};