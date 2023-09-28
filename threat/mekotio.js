var threatdata = {
    "name": "Mekotio",
    "alias": "Mekotio, Metamorfo, Casbaneiro",
    "category": "Malware",
    "type": "Banking trojan, Reconnaissance, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2021-11-04",
    "all_data": {
        "tool": "Mekotio",
        "names": [
            {
                "name": "Mekotio"
            },
            {
                "name": "Metamorfo"
            },
            {
                "name": "Casbaneiro"
            }
        ],
        "description": "(ESET) As is common for most Latin American banking trojans, Mekotio has several typical backdoor capabilities. It can take screenshots, manipulate windows, simulate mouse and keyboard actions, restart the machine, restrict access to various banking websites and update itself. Some variants are also able to steal bitcoins by replacing a bitcoin wallet in the clipboard and to exfiltrate credentials stored by the Google Chrome browser. Interestingly, one command is apparently intended to cripple the victim\u2019s machine by trying to remove all files and folders in C:\\Windows tree.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/08/13/mekotio-these-arent-the-security-updates-youre-looking-for/",
            "https://cofense.com/blog/autohotkey-banking-trojan/",
            "https://www.blueliv.com/cyber-security-and-cyber-threat-intelligence-blog-blueliv/rooty-dolphin-uses-mekotio-to-target-bank-clients-in-south-america-and-europe/",
            "https://www.welivesecurity.com/2019/10/03/casbaneiro-trojan-dangerous-cooking/",
            "https://research.checkpoint.com/2021/mekotio-banker-returns-with-improved-stealth-and-ancient-encryption/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mekotio"
        ],
        "uuid": "a5c752a8-eefc-4ed1-9520-0e0ae67fa892",
        "last-card-change": "2021-11-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Mekotio",
            "malware_alias": null,
            "malware": "win.mekotio",
            "last_update": "2023-09-24 07:04:20",
            "tags": [
                "MSI",
                "BRA",
                "Malvertising",
                "loader",
                "ARG",
                "payloads",
                "AutoHotKey",
                "c2",
                "banker",
                "CHL",
                "mekotio",
                "Loaders",
                "LATAM",
                "geo",
                "Mekotio",
                "C2",
                "payload",
                "brazil"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "servgameslupi.hopto.org",
                        "timestamp": "2023-09-24 07:04:20"
                    },
                    {
                        "value": "citacionadjunta2.from-oh.com",
                        "timestamp": "2023-09-24 07:04:16"
                    },
                    {
                        "value": "comprobante20234.isa-geek.com",
                        "timestamp": "2023-09-24 07:04:13"
                    },
                    {
                        "value": "citacionadjunta2.from-oh.com",
                        "timestamp": "2023-09-19 11:59:23"
                    },
                    {
                        "value": "mbvcmv-qfsbndl4da-tl.a.run.app",
                        "timestamp": "2023-09-19 11:59:22"
                    },
                    {
                        "value": "zettafull2023.3utilities.com",
                        "timestamp": "2023-07-13 06:04:35"
                    },
                    {
                        "value": "catrinavc.shop",
                        "timestamp": "2023-07-05 12:59:20"
                    },
                    {
                        "value": "nuevogomelove.webredirect.org",
                        "timestamp": "2023-07-05 12:58:40"
                    },
                    {
                        "value": "3wwzkd3svxhctsiylan.zapto.org",
                        "timestamp": "2023-05-12 17:17:46"
                    },
                    {
                        "value": "gamespursigmers.giize.com",
                        "timestamp": "2023-05-12 17:17:46"
                    },
                    {
                        "value": "bazuca2022.ddns.net",
                        "timestamp": "2023-05-12 17:17:46"
                    },
                    {
                        "value": "zapaosnester.com",
                        "timestamp": "2023-05-12 17:17:46"
                    },
                    {
                        "value": "horaplus.gleeze.com",
                        "timestamp": "2023-05-12 17:17:46"
                    },
                    {
                        "value": "filejurere23.hopto.org",
                        "timestamp": "2023-05-12 17:17:45"
                    },
                    {
                        "value": "primeiradoano.servebeer.com",
                        "timestamp": "2023-05-12 17:17:45"
                    },
                    {
                        "value": "tornesgmalopwej1.servemp3.com",
                        "timestamp": "2023-04-28 14:15:02"
                    },
                    {
                        "value": "novachance.giize.com",
                        "timestamp": "2023-04-28 14:15:01"
                    },
                    {
                        "value": "corp73p5dao.com.de",
                        "timestamp": "2023-04-04 06:09:16"
                    },
                    {
                        "value": "honranova.giize.com",
                        "timestamp": "2023-02-09 08:07:10"
                    },
                    {
                        "value": "nelore.gleeze.com",
                        "timestamp": "2023-02-09 08:07:10"
                    },
                    {
                        "value": "sendonly.fatura-vivo-combr.online",
                        "timestamp": "2023-02-09 08:07:10"
                    },
                    {
                        "value": "fatura-vivo-combr.online",
                        "timestamp": "2023-02-09 08:07:10"
                    },
                    {
                        "value": "yagoeallanaadegaltda.sellsyourhome.org",
                        "timestamp": "2021-08-19 20:06:10"
                    }
                ],
                "ip:port": [
                    {
                        "value": "31.192.107.193:7321",
                        "timestamp": "2023-09-24 07:04:19"
                    },
                    {
                        "value": "31.192.107.193:7575",
                        "timestamp": "2023-09-24 07:04:17"
                    },
                    {
                        "value": "72.167.133.152:8081",
                        "timestamp": "2023-09-23 15:30:10"
                    },
                    {
                        "value": "20.244.39.91:7373",
                        "timestamp": "2023-09-19 11:59:21"
                    },
                    {
                        "value": "172.86.70.241:6566",
                        "timestamp": "2023-08-07 09:18:58"
                    },
                    {
                        "value": "172.86.70.241:6255",
                        "timestamp": "2023-08-07 09:18:56"
                    },
                    {
                        "value": "185.101.93.63:6829",
                        "timestamp": "2023-08-06 08:43:17"
                    },
                    {
                        "value": "20.38.37.160:8005",
                        "timestamp": "2023-08-06 08:43:17"
                    },
                    {
                        "value": "139.144.212.143:7957",
                        "timestamp": "2023-08-06 08:43:17"
                    },
                    {
                        "value": "15.228.16.45:3081",
                        "timestamp": "2023-08-06 08:43:16"
                    },
                    {
                        "value": "45.66.249.14:5678",
                        "timestamp": "2023-08-06 08:43:16"
                    },
                    {
                        "value": "158.69.110.219:9002",
                        "timestamp": "2023-07-05 12:59:55"
                    },
                    {
                        "value": "137.135.127.65:5603",
                        "timestamp": "2023-07-05 12:59:55"
                    },
                    {
                        "value": "37.120.222.88:7890",
                        "timestamp": "2023-06-22 12:35:34"
                    },
                    {
                        "value": "167.114.4.172:9001",
                        "timestamp": "2023-05-20 07:09:55"
                    },
                    {
                        "value": "18.118.78.11:3081",
                        "timestamp": "2023-05-20 07:09:55"
                    },
                    {
                        "value": "20.121.119.89:5050",
                        "timestamp": "2023-05-20 07:09:55"
                    },
                    {
                        "value": "18.223.102.186:9988",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "181.41.200.72:0902",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "102.37.146.123:8899",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "188.191.106.171:9999",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "38.54.57.153:7890",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "45.143.223.193:7890",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "50.114.32.234:9002",
                        "timestamp": "2023-05-12 19:03:10"
                    },
                    {
                        "value": "15.228.13.156:9995",
                        "timestamp": "2023-05-12 19:03:09"
                    },
                    {
                        "value": "20.25.181.202:5050",
                        "timestamp": "2023-05-12 19:02:16"
                    },
                    {
                        "value": "103.145.13.111:8890",
                        "timestamp": "2023-05-20 07:09:55"
                    },
                    {
                        "value": "52.67.134.119:3081",
                        "timestamp": "2023-05-12 19:02:15"
                    },
                    {
                        "value": "18.231.161.239:6488",
                        "timestamp": "2023-05-12 19:02:15"
                    },
                    {
                        "value": "24.152.36.75:9001",
                        "timestamp": "2023-05-12 19:02:16"
                    },
                    {
                        "value": "15.228.13.156:9995",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "18.223.102.186:9988",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "181.41.200.72:0902",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "102.37.146.123:8899",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "188.191.106.171:9999",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "38.54.57.153:7890",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "45.143.223.193:7890",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "50.114.32.234:9002",
                        "timestamp": "2023-05-12 17:15:41"
                    },
                    {
                        "value": "20.239.166.4:4050",
                        "timestamp": "2023-05-08 09:20:53"
                    },
                    {
                        "value": "37.228.132.123:7956",
                        "timestamp": "2023-05-12 19:02:16"
                    },
                    {
                        "value": "4.240.84.251:4040",
                        "timestamp": "2023-05-08 09:20:53"
                    },
                    {
                        "value": "78.47.145.94:7070",
                        "timestamp": "2023-05-12 19:02:16"
                    },
                    {
                        "value": "185.225.74.100:8847",
                        "timestamp": "2023-05-08 09:20:53"
                    },
                    {
                        "value": "185.101.94.126:7956",
                        "timestamp": "2023-04-28 14:14:24"
                    },
                    {
                        "value": "20.5.65.48:4040",
                        "timestamp": "2023-04-28 14:14:24"
                    },
                    {
                        "value": "185.101.94.22:9992",
                        "timestamp": "2023-04-28 14:13:13"
                    },
                    {
                        "value": "51.120.247.2:8899",
                        "timestamp": "2023-04-28 14:13:13"
                    },
                    {
                        "value": "45.35.6.2:9001",
                        "timestamp": "2023-04-04 06:09:50"
                    },
                    {
                        "value": "185.101.93.192:9997",
                        "timestamp": "2023-03-08 20:38:36"
                    },
                    {
                        "value": "23.102.91.186:80",
                        "timestamp": "2023-03-08 20:38:05"
                    },
                    {
                        "value": "15.229.26.142:10003",
                        "timestamp": "2023-02-17 10:59:19"
                    },
                    {
                        "value": "185.101.94.149:10004",
                        "timestamp": "2023-02-17 10:59:19"
                    },
                    {
                        "value": "102.37.152.149:3040",
                        "timestamp": "2023-02-16 19:03:20"
                    },
                    {
                        "value": "185.101.94.149:10004",
                        "timestamp": "2023-02-16 19:02:56"
                    },
                    {
                        "value": "15.229.26.142:10003",
                        "timestamp": "2023-02-16 19:02:55"
                    },
                    {
                        "value": "102.37.155.46:10002",
                        "timestamp": "2023-02-16 19:02:55"
                    },
                    {
                        "value": "37.228.132.206:4823",
                        "timestamp": "2023-02-09 08:07:55"
                    },
                    {
                        "value": "37.228.132.206:8847",
                        "timestamp": "2023-02-08 13:27:53"
                    },
                    {
                        "value": "80.85.139.45:10200",
                        "timestamp": "2023-02-08 13:27:24"
                    },
                    {
                        "value": "102.37.155.46:10002",
                        "timestamp": "2023-02-17 10:59:19"
                    },
                    {
                        "value": "45.81.224.52:10100",
                        "timestamp": "2023-02-08 13:27:23"
                    },
                    {
                        "value": "64.44.101.158:10100",
                        "timestamp": "2023-02-08 13:27:23"
                    },
                    {
                        "value": "185.101.93.102:4823",
                        "timestamp": "2023-01-24 07:32:14"
                    },
                    {
                        "value": "185.101.93.178:80",
                        "timestamp": "2023-01-24 07:31:26"
                    },
                    {
                        "value": "185.101.93.170:80",
                        "timestamp": "2023-01-24 07:31:26"
                    },
                    {
                        "value": "80.89.239.12:2325",
                        "timestamp": "2023-01-24 07:29:40"
                    },
                    {
                        "value": "185.101.92.25:8090",
                        "timestamp": "2023-01-24 07:29:40"
                    },
                    {
                        "value": "15.228.46.182:5050",
                        "timestamp": "2023-01-19 15:44:02"
                    },
                    {
                        "value": "185.101.93.181:4682",
                        "timestamp": "2023-01-10 17:58:21"
                    },
                    {
                        "value": "172.174.70.30:7779",
                        "timestamp": "2023-01-10 17:58:20"
                    },
                    {
                        "value": "185.101.93.102:5892",
                        "timestamp": "2023-01-10 17:58:20"
                    },
                    {
                        "value": "107.158.94.13:3020",
                        "timestamp": "2023-01-06 09:50:20"
                    },
                    {
                        "value": "185.101.93.95:2030",
                        "timestamp": "2022-12-03 07:19:18"
                    },
                    {
                        "value": "37.228.132.205:2380",
                        "timestamp": "2022-12-03 07:19:18"
                    },
                    {
                        "value": "185.101.93.170:7090",
                        "timestamp": "2022-12-03 07:19:18"
                    },
                    {
                        "value": "185.101.93.138:7779",
                        "timestamp": "2022-12-03 07:19:17"
                    },
                    {
                        "value": "37.228.132.207:7779",
                        "timestamp": "2022-12-03 07:19:17"
                    }
                ],
                "url": [
                    {
                        "value": "http://34.176.182.245",
                        "timestamp": "2023-09-19 11:59:22"
                    },
                    {
                        "value": "http://nuevogomelove.webredirect.org/googledocs.txt",
                        "timestamp": "2023-07-05 12:58:26"
                    },
                    {
                        "value": "http://37.228.132.199/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-05-12 19:03:59"
                    },
                    {
                        "value": "http://55.188.176.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-05-12 19:03:58"
                    },
                    {
                        "value": "http://172.247.176.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-05-12 19:03:58"
                    },
                    {
                        "value": "http://101.150.176.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-05-12 19:03:57"
                    },
                    {
                        "value": "http://115.167.176.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-05-12 19:03:57"
                    },
                    {
                        "value": "http://147.102.176.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-05-12 19:03:56"
                    },
                    {
                        "value": "https://5.corp73p5dao.com.de/acbdge/",
                        "timestamp": "2023-04-04 06:09:02"
                    },
                    {
                        "value": "http://162.160.226.35.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:08"
                    },
                    {
                        "value": "http://newhonra.westeurope.cloudapp.azure.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:08"
                    },
                    {
                        "value": "http://86.212.211.130.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:08"
                    },
                    {
                        "value": "http://237.93.70.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:07"
                    },
                    {
                        "value": "http://83.211.95.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:07"
                    },
                    {
                        "value": "http://92.62.170.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:07"
                    },
                    {
                        "value": "http://228.115.68.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:06"
                    },
                    {
                        "value": "http://92.62.170.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:06"
                    },
                    {
                        "value": "http://66.113.69.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
                        "timestamp": "2023-02-16 19:02:06"
                    },
                    {
                        "value": "http://37.228.132.199",
                        "timestamp": "2023-02-08 12:42:05"
                    },
                    {
                        "value": "http://37.228.132.207",
                        "timestamp": "2023-02-08 12:42:04"
                    },
                    {
                        "value": "http://37.228.132.205",
                        "timestamp": "2023-02-08 12:42:04"
                    },
                    {
                        "value": "http://185.101.94.186",
                        "timestamp": "2023-02-08 12:42:03"
                    },
                    {
                        "value": "http://185.250.205.88",
                        "timestamp": "2023-02-08 12:42:01"
                    },
                    {
                        "value": "http://185.101.93.95",
                        "timestamp": "2023-02-08 12:42:01"
                    },
                    {
                        "value": "http://37.228.132.91",
                        "timestamp": "2023-02-08 12:42:01"
                    },
                    {
                        "value": "http://185.101.92.9",
                        "timestamp": "2023-02-08 12:42:00"
                    },
                    {
                        "value": "http://37.228.132.153",
                        "timestamp": "2023-02-08 12:42:00"
                    },
                    {
                        "value": "http://66.113.69.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-02-08 12:41:59"
                    },
                    {
                        "value": "http://34.29.127.135/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-02-08 12:41:59"
                    },
                    {
                        "value": "http://35.226.160.162/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-02-08 12:41:59"
                    },
                    {
                        "value": "http://202.3.66.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-02-08 12:41:58"
                    },
                    {
                        "value": "http://228.115.68.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-02-08 12:41:58"
                    },
                    {
                        "value": "https://sysofficereconsiderar.com/download/?win_exe",
                        "timestamp": "2023-01-13 14:08:18"
                    },
                    {
                        "value": "http://185.101.93.178/es/downloads/?win_exe",
                        "timestamp": "2023-01-13 14:08:18"
                    },
                    {
                        "value": "http://45.87.3.238/",
                        "timestamp": "2023-01-10 17:58:52"
                    },
                    {
                        "value": "http://37.228.132.207/",
                        "timestamp": "2023-01-10 17:58:51"
                    },
                    {
                        "value": "http://37.228.132.40/",
                        "timestamp": "2023-01-10 17:58:51"
                    },
                    {
                        "value": "http://37.228.132.91/",
                        "timestamp": "2023-01-10 17:58:51"
                    },
                    {
                        "value": "http://185.101.93.95/",
                        "timestamp": "2023-01-10 17:58:50"
                    },
                    {
                        "value": "http://37.228.132.153/",
                        "timestamp": "2023-01-10 17:58:50"
                    },
                    {
                        "value": "http://37.228.132.205/",
                        "timestamp": "2023-01-10 17:58:50"
                    },
                    {
                        "value": "http://185.101.93.138/",
                        "timestamp": "2023-01-10 17:58:49"
                    },
                    {
                        "value": "http://185.101.93.170/",
                        "timestamp": "2023-01-10 17:58:49"
                    },
                    {
                        "value": "http://185.101.94.186/",
                        "timestamp": "2023-01-10 17:58:48"
                    },
                    {
                        "value": "http://65.157.226.35.bc.googleusercontent.com/EMKT_CURSO_775-5693/47940.024663/",
                        "timestamp": "2023-01-10 17:57:02"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "b7677c08dc583df86dfcead29b605a04aa3c2444bce43d0e786ff831ed76ef40",
                        "timestamp": "2023-05-11 19:04:34"
                    },
                    {
                        "value": "d11af53ffe7b9dd49489487d389942a1782aa0fb10315bbe3d23eb4f377b4a32",
                        "timestamp": "2023-05-11 19:04:34"
                    },
                    {
                        "value": "de87c8713fac002b0b0a0f9b02c4e3ebcccf65282a22f5ab5912a9da00f35c2a",
                        "timestamp": "2023-05-11 19:04:34"
                    },
                    {
                        "value": "ef3d267a35457e1b16d484465b12b0f8eab2a414f9f2eedc3a1c42c4e7242a3a",
                        "timestamp": "2023-05-11 19:04:34"
                    },
                    {
                        "value": "c39a930dd8dc426e178053efdab1c3a3a058642ba2567260ec7c94931f94de82",
                        "timestamp": "2022-10-31 21:04:31"
                    },
                    {
                        "value": "3242e0a736ef8ac90430a9f272ff30a81e2afc146fcb84a25c6e56e8192791e4",
                        "timestamp": "2022-10-31 21:04:31"
                    },
                    {
                        "value": "63c5aa3e26fdc571f328f9c8a5e2c518b6f0611110270eb4b224ee99dfe0c416",
                        "timestamp": "2022-06-24 17:54:09"
                    },
                    {
                        "value": "db9c0fd3a144ea0a24d8d65841ae94f7336ed420428dd455ed4b27ac081949c5",
                        "timestamp": "2022-06-24 17:54:06"
                    },
                    {
                        "value": "cc080c6336299f2f333f466e7450e946bca7009b5be6cbac04e289b40c07ccaa",
                        "timestamp": "2022-03-18 20:08:31"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "27dfcb787199ee5750e34935c33b7704",
                        "timestamp": "2022-09-24 20:04:21"
                    },
                    {
                        "value": "5b3ce8888cb6dba3ad257fa76d400236",
                        "timestamp": "2022-09-24 20:04:21"
                    },
                    {
                        "value": "79ee481bad647ff7330d05141668a414",
                        "timestamp": "2022-09-23 20:07:36"
                    },
                    {
                        "value": "f9df0aabdb16b018537c514a112d4ec4",
                        "timestamp": "2022-09-23 20:07:36"
                    },
                    {
                        "value": "752a100cdb2198487e6026c3fffbecc2",
                        "timestamp": "2022-09-23 20:07:36"
                    },
                    {
                        "value": "75bff580312462f9723b88e9dd307307",
                        "timestamp": "2022-09-23 20:07:36"
                    },
                    {
                        "value": "0777d02ed4a7a6301bac5102e4569256",
                        "timestamp": "2022-07-03 01:32:11"
                    },
                    {
                        "value": "88f4b004e8a52be2bb68b83f9b95c660",
                        "timestamp": "2022-07-03 01:32:11"
                    },
                    {
                        "value": "cb0e540176159268be4986459091576a",
                        "timestamp": "2022-06-28 09:41:21"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-24 07:04:20",
    "mitre": [],
    "file_name": "mekotio",
    "analysis": null
};