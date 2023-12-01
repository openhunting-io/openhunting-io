var threatdata = {
    "name": "Vjw0rm",
    "alias": "Vjw0rm, Vengeance Justice Worm",
    "category": "Malware",
    "type": "Backdoor, Worm, Info stealer, DDoS",
    "modified": "2023-01-10",
    "all_data": {
        "tool": "Vjw0rm",
        "names": [
            {
                "name": "Vjw0rm"
            },
            {
                "name": "Vengeance Justice Worm"
            }
        ],
        "description": "(Cofense) It\u2019s called the Vengeance Justice Worm (Vjw0rm), but think of it as the Leatherman tool of malware. Vjw0rm wreaks havoc in highly versatile ways: information theft, denial of service (DoS) attacks, and self-propagation to name a few. CofenseTM has spotted this hybrid threat\u2014a cross between a worm and a remote access trojan (RAT)\u2014in a recent phishing campaign dangling a banking lure.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Worm",
            "Info stealer",
            "DDoS"
        ],
        "information": [
            "https://cofense.com/vjw0rm-malware-heres-watch/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vjw0rm"
        ],
        "uuid": "30a0a6e9-ec3a-4b4b-ac8c-c17dc87cf025",
        "last-card-change": "2022-09-12",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Vjw0rm",
            "malware_alias": null,
            "malware": "win.vjw0rm",
            "last_update": "2023-11-24 09:00:34",
            "tags": [
                "VjW0rm",
                "WSHRAT",
                "vjworm",
                "Nanocore",
                "N-W0rm",
                "c2",
                "Houdini",
                "Vjw0rm",
                "vjw0rm"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "91.92.242.192:6390",
                        "timestamp": "2023-11-24 09:00:34"
                    },
                    {
                        "value": "194.147.140.138:1604",
                        "timestamp": "2023-10-27 11:20:19"
                    },
                    {
                        "value": "156.96.44.166:3609",
                        "timestamp": "2023-10-23 12:50:43"
                    },
                    {
                        "value": "81.161.229.224:1604",
                        "timestamp": "2023-10-03 08:10:27"
                    },
                    {
                        "value": "81.161.229.224:3609",
                        "timestamp": "2023-09-28 09:30:22"
                    },
                    {
                        "value": "95.214.27.6:6350",
                        "timestamp": "2023-09-27 04:35:39"
                    },
                    {
                        "value": "95.214.27.6:6380",
                        "timestamp": "2023-09-26 02:25:20"
                    },
                    {
                        "value": "2.59.254.205:9072",
                        "timestamp": "2023-09-15 13:30:30"
                    },
                    {
                        "value": "2.59.254.205:9071",
                        "timestamp": "2023-09-13 16:55:10"
                    },
                    {
                        "value": "79.110.62.151:1604",
                        "timestamp": "2023-09-12 20:45:08"
                    },
                    {
                        "value": "185.225.73.194:3609",
                        "timestamp": "2023-08-10 14:10:19"
                    },
                    {
                        "value": "103.47.144.15:7045",
                        "timestamp": "2023-08-10 12:40:23"
                    },
                    {
                        "value": "37.120.141.147:9031",
                        "timestamp": "2023-08-01 06:58:24"
                    },
                    {
                        "value": "37.120.141.190:9032",
                        "timestamp": "2023-08-01 06:58:24"
                    },
                    {
                        "value": "194.37.97.161:4078",
                        "timestamp": "2023-07-26 13:06:44"
                    },
                    {
                        "value": "45.81.39.90:3609",
                        "timestamp": "2023-07-12 11:40:21"
                    },
                    {
                        "value": "103.212.81.158:5303",
                        "timestamp": "2023-06-16 05:45:19"
                    },
                    {
                        "value": "141.98.6.215:1604",
                        "timestamp": "2023-05-18 13:50:27"
                    },
                    {
                        "value": "141.98.6.215:3609",
                        "timestamp": "2023-05-16 08:05:18"
                    },
                    {
                        "value": "103.47.144.71:7045",
                        "timestamp": "2023-04-18 07:55:22"
                    },
                    {
                        "value": "45.88.67.229:1604",
                        "timestamp": "2023-04-11 13:10:19"
                    },
                    {
                        "value": "103.47.144.67:7045",
                        "timestamp": "2023-04-05 06:30:32"
                    },
                    {
                        "value": "45.88.67.229:3609",
                        "timestamp": "2023-03-31 13:15:16"
                    },
                    {
                        "value": "103.47.144.226:7045",
                        "timestamp": "2023-03-31 05:45:17"
                    },
                    {
                        "value": "185.29.9.30:3369",
                        "timestamp": "2023-03-31 00:20:37"
                    },
                    {
                        "value": "103.47.144.84:7045",
                        "timestamp": "2023-03-29 05:55:28"
                    },
                    {
                        "value": "103.47.144.196:7045",
                        "timestamp": "2023-03-27 13:15:41"
                    },
                    {
                        "value": "103.47.144.22:7045",
                        "timestamp": "2023-03-22 06:30:25"
                    },
                    {
                        "value": "141.98.10.75:8000",
                        "timestamp": "2023-03-21 04:05:21"
                    },
                    {
                        "value": "103.47.144.105:7045",
                        "timestamp": "2023-02-20 12:00:38"
                    },
                    {
                        "value": "103.47.144.60:7045",
                        "timestamp": "2023-02-18 12:28:18"
                    },
                    {
                        "value": "103.47.144.47:7045",
                        "timestamp": "2023-02-17 15:40:18"
                    },
                    {
                        "value": "192.3.193.58:23015",
                        "timestamp": "2023-01-26 18:15:35"
                    },
                    {
                        "value": "194.5.98.71:23015",
                        "timestamp": "2023-01-24 16:40:33"
                    },
                    {
                        "value": "5.253.114.102:50125",
                        "timestamp": "2023-01-24 14:10:36"
                    },
                    {
                        "value": "45.81.233.69:3369",
                        "timestamp": "2022-12-07 06:55:12"
                    },
                    {
                        "value": "109.206.243.197:1988",
                        "timestamp": "2022-11-25 07:35:19"
                    },
                    {
                        "value": "185.246.221.12:3609",
                        "timestamp": "2022-11-24 09:45:25"
                    },
                    {
                        "value": "194.180.48.65:3369",
                        "timestamp": "2022-11-24 09:40:23"
                    },
                    {
                        "value": "104.144.64.172:9202",
                        "timestamp": "2022-11-23 06:20:31"
                    },
                    {
                        "value": "37.139.128.51:21234",
                        "timestamp": "2022-11-22 08:20:23"
                    },
                    {
                        "value": "134.19.179.235:21234",
                        "timestamp": "2022-11-17 17:55:32"
                    },
                    {
                        "value": "192.99.255.74:5000",
                        "timestamp": "2022-11-16 08:40:21"
                    },
                    {
                        "value": "5.135.43.179:7227",
                        "timestamp": "2022-11-14 01:20:27"
                    },
                    {
                        "value": "185.245.182.241:8000",
                        "timestamp": "2022-11-11 23:00:36"
                    },
                    {
                        "value": "109.206.243.106:3609",
                        "timestamp": "2022-11-11 06:50:25"
                    },
                    {
                        "value": "79.134.225.100:2556",
                        "timestamp": "2022-11-09 14:18:21"
                    },
                    {
                        "value": "172.93.220.135:2048",
                        "timestamp": "2022-11-09 10:43:06"
                    },
                    {
                        "value": "109.206.243.241:1991",
                        "timestamp": "2022-11-07 06:50:35"
                    },
                    {
                        "value": "172.93.220.135:2084",
                        "timestamp": "2022-11-01 08:15:56"
                    },
                    {
                        "value": "46.183.220.121:1988",
                        "timestamp": "2022-10-31 17:15:22"
                    },
                    {
                        "value": "84.38.133.111:3369",
                        "timestamp": "2022-10-31 08:00:16"
                    },
                    {
                        "value": "213.226.123.172:1705",
                        "timestamp": "2022-10-26 06:55:38"
                    },
                    {
                        "value": "109.206.243.106:1604",
                        "timestamp": "2022-10-25 13:51:05"
                    },
                    {
                        "value": "213.226.123.160:1702",
                        "timestamp": "2022-10-25 02:26:25"
                    },
                    {
                        "value": "185.29.10.48:3369",
                        "timestamp": "2022-10-24 16:50:49"
                    },
                    {
                        "value": "109.206.243.106:6424",
                        "timestamp": "2022-10-24 12:08:09"
                    },
                    {
                        "value": "109.248.144.246:1988",
                        "timestamp": "2022-10-21 13:00:38"
                    },
                    {
                        "value": "57.128.45.1:8000",
                        "timestamp": "2022-10-20 08:10:55"
                    },
                    {
                        "value": "103.14.154.235:4040",
                        "timestamp": "2022-10-19 07:10:29"
                    },
                    {
                        "value": "84.38.134.101:4488",
                        "timestamp": "2022-10-18 06:31:12"
                    },
                    {
                        "value": "45.137.22.166:1604",
                        "timestamp": "2022-10-17 04:50:22"
                    },
                    {
                        "value": "193.169.253.204:5200",
                        "timestamp": "2022-10-16 19:05:24"
                    },
                    {
                        "value": "212.193.30.230:6505",
                        "timestamp": "2022-10-14 05:21:52"
                    },
                    {
                        "value": "37.0.14.195:3030",
                        "timestamp": "2022-10-11 10:50:04"
                    },
                    {
                        "value": "109.206.241.50:24150",
                        "timestamp": "2022-10-11 06:36:42"
                    },
                    {
                        "value": "79.134.225.11:2256",
                        "timestamp": "2022-10-11 05:50:37"
                    },
                    {
                        "value": "23.101.205.83:6894",
                        "timestamp": "2022-10-10 06:56:19"
                    },
                    {
                        "value": "141.255.159.61:5555",
                        "timestamp": "2022-10-07 20:55:54"
                    },
                    {
                        "value": "45.155.165.70:4000",
                        "timestamp": "2022-10-05 06:50:35"
                    },
                    {
                        "value": "92.222.212.78:8256",
                        "timestamp": "2022-10-04 12:10:35"
                    },
                    {
                        "value": "185.29.10.126:6697",
                        "timestamp": "2022-09-30 08:26:16"
                    },
                    {
                        "value": "37.0.14.201:4142",
                        "timestamp": "2022-09-29 20:31:53"
                    },
                    {
                        "value": "109.248.150.138:2022",
                        "timestamp": "2022-09-29 20:31:06"
                    },
                    {
                        "value": "185.29.8.44:1988",
                        "timestamp": "2022-09-29 20:30:49"
                    },
                    {
                        "value": "64.42.179.67:8256",
                        "timestamp": "2022-09-25 16:30:51"
                    },
                    {
                        "value": "37.0.14.204:1979",
                        "timestamp": "2022-09-23 22:45:45"
                    },
                    {
                        "value": "107.175.50.207:2014",
                        "timestamp": "2022-09-23 02:50:38"
                    },
                    {
                        "value": "37.0.14.211:2888",
                        "timestamp": "2022-09-21 13:12:45"
                    },
                    {
                        "value": "204.95.99.109:82",
                        "timestamp": "2022-08-19 15:05:56"
                    },
                    {
                        "value": "194.5.98.249:2256",
                        "timestamp": "2022-08-16 12:10:32"
                    },
                    {
                        "value": "194.147.140.4:6161",
                        "timestamp": "2022-07-27 14:44:07"
                    },
                    {
                        "value": "18.192.43.230:26042",
                        "timestamp": "2022-07-27 09:35:40"
                    },
                    {
                        "value": "54.252.142.240:25993",
                        "timestamp": "2022-07-27 09:35:40"
                    },
                    {
                        "value": "3.24.145.55:25993",
                        "timestamp": "2022-07-27 09:30:47"
                    },
                    {
                        "value": "54.93.36.95:26042",
                        "timestamp": "2022-07-27 09:20:39"
                    },
                    {
                        "value": "103.186.66.210:2256",
                        "timestamp": "2022-07-23 05:10:17"
                    },
                    {
                        "value": "192.227.128.163:7070",
                        "timestamp": "2022-07-22 15:12:34"
                    },
                    {
                        "value": "91.192.100.8:8154",
                        "timestamp": "2022-07-22 15:12:34"
                    },
                    {
                        "value": "193.233.177.235:9999",
                        "timestamp": "2022-07-20 23:50:29"
                    },
                    {
                        "value": "31.210.20.129:9004",
                        "timestamp": "2022-07-14 23:35:45"
                    },
                    {
                        "value": "172.111.230.241:4154",
                        "timestamp": "2022-07-05 22:00:35"
                    },
                    {
                        "value": "2.56.57.84:4875",
                        "timestamp": "2022-07-04 18:00:16"
                    },
                    {
                        "value": "37.0.8.115:8992",
                        "timestamp": "2022-06-28 20:23:05"
                    },
                    {
                        "value": "45.141.237.3:3030",
                        "timestamp": "2022-06-28 07:17:58"
                    },
                    {
                        "value": "103.149.13.61:7777",
                        "timestamp": "2022-06-24 17:13:31"
                    },
                    {
                        "value": "194.31.98.31:2540",
                        "timestamp": "2022-06-20 09:52:58"
                    },
                    {
                        "value": "193.233.191.96:3030",
                        "timestamp": "2022-06-20 07:52:53"
                    },
                    {
                        "value": "156.96.151.230:5000",
                        "timestamp": "2022-06-19 20:01:26"
                    },
                    {
                        "value": "194.5.97.3:8152",
                        "timestamp": "2022-06-16 15:15:11"
                    },
                    {
                        "value": "37.120.141.147:9032",
                        "timestamp": "2023-08-01 06:55:31"
                    },
                    {
                        "value": "45.77.146.176:5630",
                        "timestamp": "2022-01-21 18:00:38"
                    },
                    {
                        "value": "18.222.96.210:29563",
                        "timestamp": "2021-12-13 17:22:13"
                    },
                    {
                        "value": "194.5.98.16:7974",
                        "timestamp": "2021-12-13 17:22:13"
                    },
                    {
                        "value": "195.133.18.127:7779",
                        "timestamp": "2021-11-02 21:06:17"
                    }
                ],
                "url": [
                    {
                        "value": "http://172.245.244.118:7070/Vre",
                        "timestamp": "2023-10-21 10:35:58"
                    },
                    {
                        "value": "http://jemyy.theworkpc.com:5401/Vre",
                        "timestamp": "2023-10-09 04:40:25"
                    },
                    {
                        "value": "http://jsgrouplimited.duckdns.org:9614/Vre",
                        "timestamp": "2023-08-04 21:26:30"
                    },
                    {
                        "value": "http://vj5566.duckdns.org:5566/Vre",
                        "timestamp": "2023-05-14 01:45:29"
                    },
                    {
                        "value": "http://vj7974.duckdns.org:7974/Vre",
                        "timestamp": "2023-05-14 00:25:19"
                    },
                    {
                        "value": "http://198.12.123.17:8902/Vre",
                        "timestamp": "2023-04-06 18:40:17"
                    },
                    {
                        "value": "http://198.12.123.17:2402/Vre",
                        "timestamp": "2023-04-05 05:50:46"
                    },
                    {
                        "value": "http://198.12.123.17:7402/Vre",
                        "timestamp": "2023-04-03 23:50:24"
                    },
                    {
                        "value": "http://ourvjworm.duckdns.org:7974/Vre",
                        "timestamp": "2023-03-08 06:30:32"
                    },
                    {
                        "value": "http://198.12.123.17:6040/Vre",
                        "timestamp": "2023-02-28 23:50:20"
                    },
                    {
                        "value": "http://66.154.102.135:9909/Vre",
                        "timestamp": "2023-02-27 21:11:04"
                    },
                    {
                        "value": "http://66.154.102.135:9401/Vre",
                        "timestamp": "2023-02-16 13:55:20"
                    },
                    {
                        "value": "http://mikemons767.duckdns.org:8023/Vre",
                        "timestamp": "2023-02-16 11:05:27"
                    },
                    {
                        "value": "http://198.12.123.17:9406/Vre",
                        "timestamp": "2023-02-14 19:18:07"
                    },
                    {
                        "value": "http://wenotgivingup.duckdns.org:7992/Vre",
                        "timestamp": "2023-02-07 00:05:34"
                    },
                    {
                        "value": "http://38.132.119.150:2211/Vre",
                        "timestamp": "2023-01-16 15:40:28"
                    },
                    {
                        "value": "http://45.139.105.174:7575/Vre",
                        "timestamp": "2022-11-22 07:40:18"
                    },
                    {
                        "value": "http://demon666.duckdns.org:9011/Vre",
                        "timestamp": "2022-11-07 14:26:07"
                    },
                    {
                        "value": "http://212.193.30.230:6505/Vre",
                        "timestamp": "2022-11-01 08:55:54"
                    },
                    {
                        "value": "http://harold.ns01.info:3606/Vre",
                        "timestamp": "2022-11-01 08:45:52"
                    },
                    {
                        "value": "http://newar21.duckdns.org:2445/Vre",
                        "timestamp": "2022-10-31 19:25:25"
                    },
                    {
                        "value": "http://wordz54.duckdns.org:9010/Vre",
                        "timestamp": "2022-10-29 13:55:16"
                    },
                    {
                        "value": "http://45.139.105.174:6605/Vre",
                        "timestamp": "2022-10-19 09:05:46"
                    },
                    {
                        "value": "http://kraldeli.linkpc.net:3/Vre",
                        "timestamp": "2022-10-15 13:10:42"
                    },
                    {
                        "value": "http://129.204.138.203:7974/Vre",
                        "timestamp": "2022-10-12 13:17:21"
                    },
                    {
                        "value": "http://185.216.71.62:52054/Vre",
                        "timestamp": "2022-10-11 10:00:48"
                    },
                    {
                        "value": "http://whiteking.giize.com:6565/Vre",
                        "timestamp": "2022-10-10 09:10:33"
                    },
                    {
                        "value": "http://185.222.57.147:1989/Vre",
                        "timestamp": "2022-10-10 09:05:30"
                    },
                    {
                        "value": "http://185.157.162.115:7974/Vre",
                        "timestamp": "2022-10-10 05:50:29"
                    },
                    {
                        "value": "http://kingshakes.ddns.net:6161/Vre",
                        "timestamp": "2022-09-30 13:52:33"
                    },
                    {
                        "value": "http://185.157.162.75:7974/Vre",
                        "timestamp": "2022-09-28 22:50:44"
                    },
                    {
                        "value": "http://mill.hopto.org:7974/Vre",
                        "timestamp": "2022-09-21 14:58:31"
                    },
                    {
                        "value": "http://alukoren.duckdns.org:9144/Vre",
                        "timestamp": "2022-09-21 02:20:31"
                    },
                    {
                        "value": "http://185.216.71.251:7575/Vre",
                        "timestamp": "2022-09-14 12:55:23"
                    },
                    {
                        "value": "http://212.193.30.230:7975/Vre",
                        "timestamp": "2022-09-06 06:25:48"
                    },
                    {
                        "value": "http://194.5.98.48:4459/Vre",
                        "timestamp": "2022-09-01 14:30:39"
                    },
                    {
                        "value": "http://80.76.51.88:4780/Vre",
                        "timestamp": "2022-08-30 16:32:37"
                    },
                    {
                        "value": "http://favour123.duckdns.org:1978/Vre",
                        "timestamp": "2022-08-29 11:16:10"
                    },
                    {
                        "value": "http://kraldeli.linkpc.net:1/Vre",
                        "timestamp": "2022-08-26 06:50:38"
                    },
                    {
                        "value": "http://185.157.162.75:2223/Vre",
                        "timestamp": "2022-08-23 01:55:35"
                    },
                    {
                        "value": "http://mt4860068.duckdns.org:7321/Vre",
                        "timestamp": "2022-07-28 14:00:40"
                    },
                    {
                        "value": "http://185.157.162.75:7070/Vre",
                        "timestamp": "2022-07-28 06:45:40"
                    },
                    {
                        "value": "http://kingshakes1.linkpc.net:6161",
                        "timestamp": "2022-07-27 14:44:02"
                    },
                    {
                        "value": "http://kingshakes1.linkpc.net:6161/Vre",
                        "timestamp": "2022-07-27 14:44:02"
                    },
                    {
                        "value": "http://185.157.162.187:63006/Vre",
                        "timestamp": "2022-07-23 01:20:08"
                    },
                    {
                        "value": "http://franmhort.duia.ro:8154/Vre",
                        "timestamp": "2022-07-22 15:12:32"
                    },
                    {
                        "value": "http://192.227.128.163:7070",
                        "timestamp": "2022-07-22 15:12:32"
                    },
                    {
                        "value": "http://franmhort.duia.ro:8154",
                        "timestamp": "2022-07-22 15:12:31"
                    },
                    {
                        "value": "http://198.23.212.140:63006/Vre",
                        "timestamp": "2022-07-21 04:05:38"
                    },
                    {
                        "value": "http://fresh01.ddns.net:2256/Vre",
                        "timestamp": "2022-07-20 22:50:30"
                    },
                    {
                        "value": "http://185.157.162.187:60140/Vre",
                        "timestamp": "2022-07-20 18:25:19"
                    },
                    {
                        "value": "http://fresh02.ddns.net:2245/Vre",
                        "timestamp": "2022-07-20 11:45:20"
                    },
                    {
                        "value": "http://hwprocessing.duckdns.org:9933/Vre",
                        "timestamp": "2022-07-08 16:30:59"
                    },
                    {
                        "value": "http://biznetworks.ddns.net:2345/Vre",
                        "timestamp": "2022-07-07 07:15:15"
                    },
                    {
                        "value": "http://zeegod.duckdns.org:9004/Vre",
                        "timestamp": "2022-06-27 12:03:54"
                    },
                    {
                        "value": "http://185.81.157.33:5734/Vre",
                        "timestamp": "2022-06-25 03:37:01"
                    },
                    {
                        "value": "http://vjmworks.ddns.net:4040/Vre",
                        "timestamp": "2022-06-23 06:14:06"
                    },
                    {
                        "value": "http://45.138.16.233:1985/Vre",
                        "timestamp": "2022-06-21 02:14:03"
                    },
                    {
                        "value": "https://franmhort.duia.ro",
                        "timestamp": "2022-06-20 07:51:57"
                    },
                    {
                        "value": "http://araz50.servehttp.com:5865/Vre",
                        "timestamp": "2022-06-20 00:57:32"
                    },
                    {
                        "value": "http://104.168.7.110:7974/Vre",
                        "timestamp": "2022-06-16 03:17:02"
                    },
                    {
                        "value": "http://franmhort.duia.ro:8152/Vre",
                        "timestamp": "2022-06-13 03:48:48"
                    },
                    {
                        "value": "http://franmhort.duia.ro:8152",
                        "timestamp": "2022-06-13 03:48:48"
                    },
                    {
                        "value": "http://vjworks.ddns.net:7070/Vre",
                        "timestamp": "2022-06-13 02:06:15"
                    },
                    {
                        "value": "http://192.3.76.12:7974/Vre",
                        "timestamp": "2022-06-12 05:53:37"
                    },
                    {
                        "value": "http://kral.linkpc.net:2/Vre",
                        "timestamp": "2022-06-01 00:38:41"
                    },
                    {
                        "value": "http://travcharles.duia.ro:5098/Vre",
                        "timestamp": "2022-05-19 07:46:28"
                    },
                    {
                        "value": "http://zeegod.duckdns.org:9003/Vre",
                        "timestamp": "2022-05-17 21:08:08"
                    },
                    {
                        "value": "http://37.0.10.222:7992/Vre",
                        "timestamp": "2022-05-17 21:03:38"
                    },
                    {
                        "value": "http://brianrt027.nerdpol.ovh:5200/Vre",
                        "timestamp": "2022-05-17 13:45:12"
                    },
                    {
                        "value": "http://blackid-42311.portmap.host:7974/Vre",
                        "timestamp": "2022-05-16 12:21:07"
                    },
                    {
                        "value": "http://janda.publicvm.com:1005/Vre",
                        "timestamp": "2022-05-11 23:01:38"
                    },
                    {
                        "value": "http://185.81.157.136:3681/Vre",
                        "timestamp": "2022-05-11 21:26:46"
                    },
                    {
                        "value": "http://severdops.ddns.net:5050/Vre",
                        "timestamp": "2022-05-11 16:56:00"
                    },
                    {
                        "value": "https://travcharles.duia.ro",
                        "timestamp": "2022-05-10 16:01:33"
                    },
                    {
                        "value": "http://194.147.140.230:10101/Vre",
                        "timestamp": "2022-05-10 11:07:11"
                    },
                    {
                        "value": "http://185.81.157.210:3681/Vre",
                        "timestamp": "2022-05-10 05:11:29"
                    },
                    {
                        "value": "http://antgobec.duckdns.org:7971/Vre",
                        "timestamp": "2022-04-06 13:26:18"
                    },
                    {
                        "value": "http://185.81.157.172:6558/Vre",
                        "timestamp": "2022-03-30 05:18:17"
                    },
                    {
                        "value": "http://kiomanito.freemyip.com/Vre",
                        "timestamp": "2022-03-19 19:06:04"
                    },
                    {
                        "value": "http://shizzlenjworm.duckdns.org:1605/Vre",
                        "timestamp": "2022-03-18 19:11:02"
                    },
                    {
                        "value": "http://kathyaboth.duia.ro:6534/Vre",
                        "timestamp": "2022-03-14 15:16:39"
                    },
                    {
                        "value": "http://zeegod.duckdns.org:9001/Vre",
                        "timestamp": "2022-03-13 16:35:37"
                    },
                    {
                        "value": "http://tahoo.linkpc.net:777/Vre",
                        "timestamp": "2022-03-10 17:26:47"
                    },
                    {
                        "value": "http://javaplug.publicvm.com:333/Vre",
                        "timestamp": "2022-03-10 13:16:13"
                    },
                    {
                        "value": "http://invoice-update.myiphost.com:1177/Vre",
                        "timestamp": "2022-02-22 10:16:11"
                    },
                    {
                        "value": "http://ffy643dfxvtesdyekyg.ddns.net:7070/Vre",
                        "timestamp": "2022-02-15 21:21:03"
                    },
                    {
                        "value": "http://wormtoday.duckdns.org:5058/Vre",
                        "timestamp": "2022-02-08 01:51:23"
                    },
                    {
                        "value": "http://hopdhosjd.duckdns.org:9035/Vre",
                        "timestamp": "2022-01-28 15:31:12"
                    },
                    {
                        "value": "http://jdfodl45.duckdns.org:9032/Vre",
                        "timestamp": "2022-01-27 18:06:34"
                    },
                    {
                        "value": "http://jdfodl45.duckdns.org:9032",
                        "timestamp": "2022-01-27 18:06:34"
                    },
                    {
                        "value": "http://moneyworm6.duckdns.org:1996/Vre",
                        "timestamp": "2022-01-25 15:11:24"
                    },
                    {
                        "value": "http://webdate.publicvm.com:1007/Vre",
                        "timestamp": "2022-01-21 23:36:13"
                    },
                    {
                        "value": "http://rosenberth.duckdns.org:5633/Vre",
                        "timestamp": "2022-01-21 16:07:14"
                    },
                    {
                        "value": "http://172.241.27.108:1188/Vre",
                        "timestamp": "2022-01-18 18:16:58"
                    },
                    {
                        "value": "http://warrr.duckdns.org:9997/Vre",
                        "timestamp": "2022-01-12 21:31:37"
                    },
                    {
                        "value": "http://185.24.233.19:1122/Vre",
                        "timestamp": "2022-01-10 16:01:14"
                    },
                    {
                        "value": "http://ecolo.duckdns.org:26008/Vre",
                        "timestamp": "2021-12-22 17:51:29"
                    },
                    {
                        "value": "http://eagle0233ye.duckdns.org:6734/Vre",
                        "timestamp": "2021-12-21 14:36:30"
                    },
                    {
                        "value": "http://66.165.246.88:1155/Vre",
                        "timestamp": "2021-12-20 16:07:32"
                    },
                    {
                        "value": "http://12345h.duckdns.org:3030/Vre",
                        "timestamp": "2021-12-17 17:11:16"
                    },
                    {
                        "value": "http://decebermoney.duckdns.org:8022/Vre",
                        "timestamp": "2021-12-13 20:09:20"
                    },
                    {
                        "value": "http://dwal-vesj.duckdns.org:29563/Vre",
                        "timestamp": "2021-12-13 17:22:38"
                    },
                    {
                        "value": "http://dwal-vesj.duckdns.org:29563",
                        "timestamp": "2021-12-13 17:22:38"
                    },
                    {
                        "value": "http://myroyailrubin2019.duia.ro:7974/Vre",
                        "timestamp": "2021-12-13 17:22:38"
                    },
                    {
                        "value": "http://myroyailrubin2019.duia.ro:7974",
                        "timestamp": "2021-12-13 17:22:38"
                    },
                    {
                        "value": "http://zeegod.duckdns.org:9998/Vre",
                        "timestamp": "2021-12-07 01:32:26"
                    },
                    {
                        "value": "http://marshjohn989.duckdns.org:7920/Vre",
                        "timestamp": "2021-12-06 16:57:03"
                    },
                    {
                        "value": "http://3000js.duckdns.org:3000/Vre",
                        "timestamp": "2021-12-06 03:50:58"
                    },
                    {
                        "value": "http://russolouis49.duckdns.org:7903/Vre",
                        "timestamp": "2021-12-03 16:11:48"
                    },
                    {
                        "value": "http://dwal-vesj.duckdns.org:6322/Vre",
                        "timestamp": "2021-12-03 12:06:12"
                    },
                    {
                        "value": "http://mikeleejs.duckdns.org:2190/Vre",
                        "timestamp": "2021-12-03 09:50:15"
                    },
                    {
                        "value": "http://37.0.10.5:8020/Vre",
                        "timestamp": "2021-11-30 14:49:06"
                    },
                    {
                        "value": "http://37.120.137.227:29563/Vre",
                        "timestamp": "2021-11-30 06:26:49"
                    },
                    {
                        "value": "http://spdxx.ddns.net:5050/Vre",
                        "timestamp": "2021-11-30 06:26:43"
                    },
                    {
                        "value": "http://13.92.159.78:6431/Vre",
                        "timestamp": "2021-11-19 17:22:52"
                    },
                    {
                        "value": "http://13.92.159.78:6431",
                        "timestamp": "2021-11-19 17:22:52"
                    },
                    {
                        "value": "http://javaslinns.duia.ro:62104/Vre",
                        "timestamp": "2021-11-18 14:56:55"
                    },
                    {
                        "value": "http://3.134.115.127:51078/Vre",
                        "timestamp": "2021-11-18 14:56:48"
                    },
                    {
                        "value": "http://jw9428875.duckdns.org:1991/Vre",
                        "timestamp": "2021-11-18 13:46:12"
                    },
                    {
                        "value": "http://js1994.duckdns.org:4093/Vre",
                        "timestamp": "2021-11-18 13:46:09"
                    },
                    {
                        "value": "http://javaslinns.duia.ro:1333/Vre",
                        "timestamp": "2021-11-18 13:46:05"
                    },
                    {
                        "value": "http://aqhariabdullah763.ddns.net:3462/Vre",
                        "timestamp": "2021-11-18 08:25:58"
                    },
                    {
                        "value": "http://severdops.ddns.net:1216/Vre",
                        "timestamp": "2021-11-17 18:01:44"
                    },
                    {
                        "value": "http://13.92.159.78:6430",
                        "timestamp": "2021-11-15 21:59:14"
                    },
                    {
                        "value": "http://7900js.duckdns.org:7900/Vre",
                        "timestamp": "2021-11-15 21:06:11"
                    },
                    {
                        "value": "http://13.92.159.78:6430/Vre",
                        "timestamp": "2021-11-15 21:59:14"
                    },
                    {
                        "value": "http://cloride01.duckdns.org:2008/Vre",
                        "timestamp": "2021-11-13 22:11:13"
                    },
                    {
                        "value": "http://harold.jetos.com:3609/Vre",
                        "timestamp": "2021-11-12 16:35:58"
                    },
                    {
                        "value": "http://moneymoment.duckdns.org:8834",
                        "timestamp": "2021-11-11 16:12:26"
                    },
                    {
                        "value": "http://moneymoment.duckdns.org:8834/Vre",
                        "timestamp": "2021-11-11 16:12:26"
                    },
                    {
                        "value": "http://dbmne20.duckdns.org:8832",
                        "timestamp": "2021-11-08 17:19:30"
                    },
                    {
                        "value": "http://7250js.duckdns.org:7250/Vre",
                        "timestamp": "2021-11-06 12:46:38"
                    },
                    {
                        "value": "http://194.156.90.26:8012",
                        "timestamp": "2021-11-05 17:47:41"
                    },
                    {
                        "value": "http://194.156.90.26:8012/Vre",
                        "timestamp": "2021-11-05 17:47:41"
                    },
                    {
                        "value": "http://purecry54.duckdns.org:7779",
                        "timestamp": "2021-11-02 21:05:55"
                    },
                    {
                        "value": "http://purecry54.duckdns.org:7779/Vre",
                        "timestamp": "2021-11-02 21:05:55"
                    },
                    {
                        "value": "http://tdeasy.duckdns.org:6128",
                        "timestamp": "2021-10-29 14:53:00"
                    },
                    {
                        "value": "http://tdeasy.duckdns.org:6128/Vre",
                        "timestamp": "2021-10-29 14:53:00"
                    },
                    {
                        "value": "http://loadcash.duckdns.org:7778",
                        "timestamp": "2021-10-28 21:36:04"
                    },
                    {
                        "value": "http://loadcash.duckdns.org:7778/Vre",
                        "timestamp": "2021-10-28 21:36:04"
                    },
                    {
                        "value": "http://dingspread.duckdns.org:6130",
                        "timestamp": "2021-10-28 14:57:48"
                    },
                    {
                        "value": "http://dingspread.duckdns.org:6130/Vre",
                        "timestamp": "2021-10-28 13:18:06"
                    },
                    {
                        "value": "http://jswormltd.duckdns.org:1921/Vre",
                        "timestamp": "2021-10-27 12:11:00"
                    },
                    {
                        "value": "http://6200js.duckdns.org:6200/Vre",
                        "timestamp": "2021-10-25 19:51:32"
                    },
                    {
                        "value": "http://gg1592661.duckdns.org:7924/Vre",
                        "timestamp": "2021-10-21 15:47:11"
                    },
                    {
                        "value": "http://gg1592661.duckdns.org:7924",
                        "timestamp": "2021-10-21 15:47:10"
                    },
                    {
                        "value": "http://gameserver-789.duia.ro:6789/Vre",
                        "timestamp": "2021-10-28 21:36:04"
                    },
                    {
                        "value": "http://loadcash.duckdns.org:7779",
                        "timestamp": "2021-10-21 00:56:25"
                    },
                    {
                        "value": "http://loadcash.duckdns.org:7779/Vre",
                        "timestamp": "2021-10-21 00:56:25"
                    },
                    {
                        "value": "http://gameserver-789.duia.ro:6789",
                        "timestamp": "2021-10-28 21:36:04"
                    },
                    {
                        "value": "http://btime1624.duckdns.org:7923",
                        "timestamp": "2021-10-18 15:16:49"
                    },
                    {
                        "value": "http://btime1624.duckdns.org:7923/Vre",
                        "timestamp": "2021-10-18 15:16:49"
                    },
                    {
                        "value": "http://mchristopherr83.duckdns.org:7922",
                        "timestamp": "2021-10-12 21:47:53"
                    },
                    {
                        "value": "http://mchristopherr83.duckdns.org:7922/Vre",
                        "timestamp": "2021-10-12 21:47:53"
                    },
                    {
                        "value": "http://103.167.91.9:8031/Vre",
                        "timestamp": "2021-10-07 14:21:35"
                    },
                    {
                        "value": "http://myjs5690.duckdns.org:5690/Vre",
                        "timestamp": "2021-10-05 16:22:32"
                    },
                    {
                        "value": "http://pattihickey.duckdns.org:8030/Vre",
                        "timestamp": "2021-10-05 14:43:08"
                    },
                    {
                        "value": "http://45.133.1.89:7777/Vre",
                        "timestamp": "2021-09-24 16:15:40"
                    },
                    {
                        "value": "http://40.121.49.138:8024/Vre",
                        "timestamp": "2021-09-24 18:59:07"
                    },
                    {
                        "value": "http://31.210.20.32:7777/Vre",
                        "timestamp": "2021-09-20 14:01:04"
                    },
                    {
                        "value": "http://40.121.49.138:8023/Vre",
                        "timestamp": "2021-09-22 01:08:31"
                    },
                    {
                        "value": "http://vjme.worlpointer.com:4286/Vre",
                        "timestamp": "2021-09-13 15:50:51"
                    },
                    {
                        "value": "http://185.140.53.200:4286/Vre",
                        "timestamp": "2021-09-11 07:51:24"
                    },
                    {
                        "value": "http://154.127.53.228:1111/Vre",
                        "timestamp": "2021-09-07 12:46:17"
                    },
                    {
                        "value": "http://193.56.29.150:5555/Vre",
                        "timestamp": "2021-09-06 22:11:32"
                    },
                    {
                        "value": "http://vijaney.shipnotifica.com:3822/Vre",
                        "timestamp": "2021-09-03 03:00:57"
                    },
                    {
                        "value": "http://185.140.53.69:4532/Vre",
                        "timestamp": "2021-09-03 02:06:26"
                    },
                    {
                        "value": "http://185.140.53.236:6754/Vre",
                        "timestamp": "2021-09-02 03:07:06"
                    },
                    {
                        "value": "http://gameserver-789.duia.ro:6677/Vre",
                        "timestamp": "2021-09-01 22:46:39"
                    },
                    {
                        "value": "http://194.5.97.156:7657/Vre",
                        "timestamp": "2021-08-31 19:00:14"
                    },
                    {
                        "value": "http://194.5.98.75:5742/Vre",
                        "timestamp": "2021-08-30 00:01:50"
                    },
                    {
                        "value": "http://103.147.185.192:1991/Vre",
                        "timestamp": "2021-08-27 16:30:39"
                    },
                    {
                        "value": "http://194.5.98.75:4532/Vre",
                        "timestamp": "2021-08-26 16:22:18"
                    },
                    {
                        "value": "http://serv01.nerdpol.ovh:7501/Vre",
                        "timestamp": "2021-08-24 18:22:10"
                    },
                    {
                        "value": "http://103.167.91.9:8022/Vre",
                        "timestamp": "2021-08-23 16:50:37"
                    },
                    {
                        "value": "http://grace2020.home-webserver.de:3774/Vre",
                        "timestamp": "2021-08-23 07:40:37"
                    },
                    {
                        "value": "http://79.134.225.36:10101/Vre",
                        "timestamp": "2021-08-19 12:31:30"
                    },
                    {
                        "value": "http://79.134.225.117:7654/Vre",
                        "timestamp": "2021-08-18 18:20:44"
                    },
                    {
                        "value": "http://harold.ns01.info:1602/Vre",
                        "timestamp": "2021-08-11 12:35:46"
                    },
                    {
                        "value": "http://103.167.91.9:8021/Vre",
                        "timestamp": "2021-08-11 06:20:32"
                    },
                    {
                        "value": "http://bethhavens.duia.ro:62104/Vre",
                        "timestamp": "2021-08-03 05:20:58"
                    },
                    {
                        "value": "http://79.134.225.72:7974/Vre",
                        "timestamp": "2021-08-03 05:20:55"
                    },
                    {
                        "value": "http://utcsvc.linkpc.net:8082/Vre",
                        "timestamp": "2021-08-02 04:45:26"
                    },
                    {
                        "value": "http://chongmei33.publicvm.com:7974/Vre",
                        "timestamp": "2021-07-29 19:16:06"
                    },
                    {
                        "value": "http://autojreiella.duia.ro:62104/Vre",
                        "timestamp": "2021-07-29 11:00:35"
                    },
                    {
                        "value": "http://202.55.132.213:1993/Vre",
                        "timestamp": "2021-07-28 10:20:23"
                    },
                    {
                        "value": "http://185.81.157.7:3313/Vre",
                        "timestamp": "2021-07-23 15:41:12"
                    },
                    {
                        "value": "http://185.81.157.187:9093/Vre",
                        "timestamp": "2021-07-22 23:26:00"
                    },
                    {
                        "value": "http://103.167.91.9:7825/Vre",
                        "timestamp": "2021-07-22 17:11:31"
                    },
                    {
                        "value": "http://45.147.228.151:37312/Vre",
                        "timestamp": "2021-07-21 19:46:01"
                    },
                    {
                        "value": "http://180.214.239.36:1992/Vre",
                        "timestamp": "2021-07-19 21:05:44"
                    },
                    {
                        "value": "http://13.77.222.211:7822/Vre",
                        "timestamp": "2021-07-09 17:45:50"
                    },
                    {
                        "value": "http://20.203.136.95:50933/Vre",
                        "timestamp": "2021-07-08 19:06:42"
                    },
                    {
                        "value": "http://13.77.222.211:7820/Vre",
                        "timestamp": "2021-07-06 17:36:46"
                    },
                    {
                        "value": "http://52.235.18.18:30281/Vre",
                        "timestamp": "2021-07-05 16:16:15"
                    },
                    {
                        "value": "http://157.90.203.168:60921/Vre",
                        "timestamp": "2021-07-02 22:45:41"
                    },
                    {
                        "value": "http://20.63.35.138:2156/Vre",
                        "timestamp": "2021-07-01 15:51:01"
                    },
                    {
                        "value": "http://kingspy.mywire.org:797/Vre",
                        "timestamp": "2021-07-01 03:11:23"
                    },
                    {
                        "value": "http://52.188.147.221:5622/Vre",
                        "timestamp": "2021-06-30 15:56:27"
                    },
                    {
                        "value": "http://domaineweb.publicvm.com:1002/Vre",
                        "timestamp": "2021-06-29 19:16:03"
                    },
                    {
                        "value": "http://ailsakwaoukeil.xyz:6663/Vre",
                        "timestamp": "2021-06-23 15:41:25"
                    },
                    {
                        "value": "http://52.188.147.221:5621/Vre",
                        "timestamp": "2021-06-21 14:31:04"
                    },
                    {
                        "value": "http://52.231.26.149:6903/Vre",
                        "timestamp": "2021-06-18 15:01:04"
                    },
                    {
                        "value": "http://newstokora.xyz:8799/Vre",
                        "timestamp": "2021-06-18 05:16:08"
                    },
                    {
                        "value": "http://40.117.139.198:7974/Vre",
                        "timestamp": "2021-06-09 15:21:01"
                    },
                    {
                        "value": "http://20.41.98.11:52019/Vre",
                        "timestamp": "2021-06-08 07:03:39"
                    },
                    {
                        "value": "http://8723yuoistzkk.xyz:8723/Vre",
                        "timestamp": "2021-06-07 05:40:16"
                    },
                    {
                        "value": "http://wodmainenew.xyz:8720/Vre",
                        "timestamp": "2021-05-22 05:45:06"
                    },
                    {
                        "value": "http://51.13.84.207:4392/Vre",
                        "timestamp": "2021-05-20 11:10:39"
                    },
                    {
                        "value": "http://8903.duckdns.org:7004/Vre",
                        "timestamp": "2021-05-14 23:21:11"
                    },
                    {
                        "value": "http://103.147.185.192:7974/Vre",
                        "timestamp": "2021-05-13 10:25:19"
                    },
                    {
                        "value": "http://40.85.86.188:37313/Vre",
                        "timestamp": "2021-05-07 14:46:50"
                    },
                    {
                        "value": "http://8903.duckdns.org:7003/Vre",
                        "timestamp": "2021-05-06 21:21:16"
                    },
                    {
                        "value": "http://20.69.234.242:2911/Vre",
                        "timestamp": "2021-05-03 14:05:53"
                    },
                    {
                        "value": "http://185.81.158.167:8708/Vre",
                        "timestamp": "2021-04-28 23:16:42"
                    },
                    {
                        "value": "http://20.93.1.24:60923/Vre",
                        "timestamp": "2021-04-27 17:00:50"
                    },
                    {
                        "value": "http://185.81.158.167:8706/Vre",
                        "timestamp": "2021-04-21 03:20:43"
                    },
                    {
                        "value": "http://molharcharatba.xyz:8104/Vre",
                        "timestamp": "2021-04-19 08:20:19"
                    },
                    {
                        "value": "http://wotousfrcool.xyz:8704/Vre",
                        "timestamp": "2021-04-18 20:45:16"
                    },
                    {
                        "value": "http://46.1.54.174:77/Vre",
                        "timestamp": "2021-04-18 08:00:18"
                    },
                    {
                        "value": "http://40.121.108.109:1996/Vre",
                        "timestamp": "2021-04-17 11:05:25"
                    },
                    {
                        "value": "http://20.199.188.102:60032/Vre",
                        "timestamp": "2021-04-16 18:28:33"
                    },
                    {
                        "value": "http://52.231.103.159:5901/Vre",
                        "timestamp": "2021-04-15 17:52:01"
                    },
                    {
                        "value": "http://103.151.125.57:8094/Vre",
                        "timestamp": "2021-04-15 17:51:47"
                    },
                    {
                        "value": "http://1982js.duckdns.org:1982/Vre",
                        "timestamp": "2021-08-16 18:23:11"
                    },
                    {
                        "value": "http://stayup.sytes.net:1430/Vre",
                        "timestamp": "2021-04-15 17:51:30"
                    },
                    {
                        "value": "http://40.121.108.109:1995/Vre",
                        "timestamp": "2021-04-13 15:55:12"
                    },
                    {
                        "value": "http://woservicewindows10update.xyz:8703/Vre",
                        "timestamp": "2021-04-12 14:10:38"
                    },
                    {
                        "value": "http://168.63.41.26:6250/Vre",
                        "timestamp": "2021-04-12 13:55:29"
                    },
                    {
                        "value": "http://103.125.190.88:4089/Vre",
                        "timestamp": "2021-04-12 12:20:32"
                    },
                    {
                        "value": "http://40.127.139.164:61483/Vre",
                        "timestamp": "2021-04-02 14:10:55"
                    },
                    {
                        "value": "http://185.140.53.139:6010/Vre",
                        "timestamp": "2021-04-01 16:32:34"
                    },
                    {
                        "value": "http://20.194.23.12:6012/Vre",
                        "timestamp": "2021-03-31 15:10:47"
                    },
                    {
                        "value": "http://138.91.49.153:51118/Vre",
                        "timestamp": "2021-03-30 14:21:20"
                    },
                    {
                        "value": "http://198.23.251.103:3030/Vre",
                        "timestamp": "2021-03-29 18:10:53"
                    },
                    {
                        "value": "http://1994time.duckdns.org:1994/Vre",
                        "timestamp": "2021-03-29 15:10:52"
                    },
                    {
                        "value": "http://66.42.86.53:9090/Vre",
                        "timestamp": "2021-03-26 18:16:05"
                    },
                    {
                        "value": "http://20.194.23.12:5901/Vre",
                        "timestamp": "2021-03-26 17:05:39"
                    },
                    {
                        "value": "http://40.71.91.165:1993/Vre",
                        "timestamp": "2021-03-26 13:00:24"
                    },
                    {
                        "value": "http://webtool.publicvm.com:7776/Vre",
                        "timestamp": "2021-03-25 10:12:15"
                    },
                    {
                        "value": "http://104.238.179.23:6050/Vre",
                        "timestamp": "2021-03-24 17:41:43"
                    },
                    {
                        "value": "http://lecuy.org:41420/Vre",
                        "timestamp": "2021-03-24 07:52:09"
                    }
                ],
                "domain": [
                    {
                        "value": "sundayjs7250.duckdns.org",
                        "timestamp": "2023-08-28 13:20:50"
                    },
                    {
                        "value": "ghnas79.duckdns.org",
                        "timestamp": "2023-08-01 06:58:28"
                    },
                    {
                        "value": "hopdhosjd.duckdns.org",
                        "timestamp": "2023-08-01 06:58:28"
                    },
                    {
                        "value": "htoday476.duckdns.org",
                        "timestamp": "2023-09-10 21:57:42"
                    },
                    {
                        "value": "jdfodl45.duckdns.org",
                        "timestamp": "2023-08-01 06:58:27"
                    },
                    {
                        "value": "legendtime09.duckdns.org",
                        "timestamp": "2023-08-01 06:58:27"
                    },
                    {
                        "value": "moneykope4.duckdns.org",
                        "timestamp": "2023-08-01 06:58:27"
                    },
                    {
                        "value": "lopemoney8.duckdns.org",
                        "timestamp": "2023-08-01 06:58:26"
                    },
                    {
                        "value": "nyanmoney02.duckdns.org",
                        "timestamp": "2023-08-01 06:58:26"
                    },
                    {
                        "value": "nyantime66.duckdns.org",
                        "timestamp": "2023-08-01 06:58:26"
                    },
                    {
                        "value": "opmejf.duckdns.org",
                        "timestamp": "2023-08-01 06:58:25"
                    },
                    {
                        "value": "franmhort.duia.ro",
                        "timestamp": "2023-09-10 21:57:36"
                    },
                    {
                        "value": "wormtoday.duckdns.org",
                        "timestamp": "2022-02-07 17:05:15"
                    },
                    {
                        "value": "y6gsh.duckdns.org",
                        "timestamp": "2022-01-21 18:00:36"
                    },
                    {
                        "value": "8723yuoistzkk.xyz",
                        "timestamp": "2021-06-06 15:35:56"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "9005a39c203e068daa077fe244e2608d36852dbef6f6ce8b28cc5cc015b89b1b",
                        "timestamp": "2023-01-17 14:59:13"
                    },
                    {
                        "value": "4d55c5d9ddf1974f62bbf88a693348bc81ceb8a2b7348b8f71c94455497f90de",
                        "timestamp": "2022-10-24 12:33:21"
                    },
                    {
                        "value": "dbd9fa524d604f5176c0a630dc6a33ad882a4ad924f32d0d8e926b2282830b4d",
                        "timestamp": "2022-10-22 12:30:53"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "81a272a9c9ecebbf3c3643bb4a2588ee",
                        "timestamp": "2022-09-01 07:20:47"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-24 09:00:34",
    "file_name": "vjw0rm",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://resources.securityscorecard.com/research/acasestudyofVjw0rm#page=1",
            "date": "2023-01-10",
            "organization": "SecurityScorecard",
            "author": "Vlad Pasca",
            "title": "How to Analyze JavaScript Malware \u2013 A Case Study of Vjw0rm",
            "categories": [
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2022%20Q3%20Botnet%20Threat%20Update.pdf",
            "date": "2022-10-13",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q3 2022",
            "categories": [
                "FluBot",
                "Arkei Stealer",
                "AsyncRAT",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "Emotet",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "QakBot",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Socelars",
                "Tofsee",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/reservations-requested-ta558-targets-hospitality-and-travel",
            "date": "2022-08-18",
            "organization": "Proofpoint",
            "author": "Joe Wise",
            "title": "Reservations Requested: TA558 Targets Hospitality and Travel",
            "categories": [
                "AsyncRAT",
                "Loda",
                "NjRAT",
                "Ozone RAT",
                "Revenge RAT",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/wp-content/uploads/2022/05/HP-Wolf-Security-Threat-Insights-Report-Q1-2022.pdf",
            "date": "2022-05-11",
            "organization": "HP",
            "author": "HP Wolf Security",
            "title": "Threat Insights Report Q1 - 2022",
            "categories": [
                "AsyncRAT",
                "Emotet",
                "Mekotio",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/24759ad2",
            "date": "2021-12-13",
            "organization": "RiskIQ",
            "author": "Jordan Herman",
            "title": "RiskIQ: Connections between Nanocore, Netwire, and AsyncRAT and Vjw0rm dynamic DNS C2 infrastructure",
            "categories": [
                "AsyncRAT",
                "Nanocore RAT",
                "NetWire RC",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://twitter.com/tccontre18/status/1461386178528264204",
            "date": "2021-11-18",
            "organization": "Twitter (@tccontre18)",
            "author": "Br3akp0int",
            "title": "Tweet on how to decrypt 4 layers of encryption & obfuscation of vjw0rm",
            "categories": [
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/blog/understanding-the-windows-javascript-threat-landscape",
            "date": "2021-11-04",
            "organization": "Deep instinct",
            "author": "Shaul Vilkomir-Preisman",
            "title": "Understanding the Windows JavaScript Threat Landscape",
            "categories": [
                "STRRAT",
                "Griffon",
                "BlackByte",
                "Houdini",
                "Vjw0rm",
                "FIN7"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/wp-content/uploads/2021/10/HP-Wolf-Security-Threat-Insights-Report-Q3-2021.pdf",
            "date": "2021-10",
            "organization": "HP",
            "author": "HP Wolf Security",
            "title": "Threat Insights  Report Q3 - 2021",
            "categories": [
                "STRRAT",
                "CloudEyE",
                "NetWire RC",
                "Remcos",
                "TrickBot",
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://lifars.com/wp-content/uploads/2021/09/Vjw0rm-.pdf",
            "date": "2021-09-02",
            "organization": "LIFARS",
            "author": "Vlad Pasca",
            "title": "Vjw0rm Worm/RAT",
            "categories": [
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://bazaar.abuse.ch/browse/signature/Vjw0rm/",
            "date": "2021-03-21",
            "organization": "abuse.ch",
            "author": "abuse.ch",
            "title": "Vjw0rm malware samples",
            "categories": [
                "Vjw0rm"
            ]
        },
        {
            "data_url": "https://appriver.com/resources/blog/november-2020/vjw0rm-back-new-tactics",
            "date": "2020-11",
            "organization": "AppRiver",
            "author": "Chris Lee",
            "title": "Vjw0rm Is Back With New Tactics",
            "categories": [
                "Vjw0rm"
            ]
        }
    ],
    "mitre": []
};