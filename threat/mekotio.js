var threatdata = {
    "name": "Mekotio",
    "alias": "Mekotio, Metamorfo, Casbaneiro",
    "category": "Malware",
    "type": "Banking trojan, Reconnaissance, Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2022-05-11",
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
            "last_update": "2023-11-10 19:18:04",
            "tags": [
                "payload",
                "ARG",
                "Mekotio",
                "Malvertising",
                "brazil",
                "banker",
                "Loaders",
                "loader",
                "geo",
                "BRA",
                "AutoHotKey",
                "c2",
                "CHL",
                "payloads",
                "C2",
                "mekotio",
                "MSI",
                "LATAM"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "nightscoutsergi.mooo.com",
                        "timestamp": "2023-11-10 19:18:04"
                    },
                    {
                        "value": "01invoicefull234.dnsdojo.com",
                        "timestamp": "2023-11-10 19:18:03"
                    },
                    {
                        "value": "advertenciactc2023.dnsdojo.com",
                        "timestamp": "2023-11-10 19:18:02"
                    },
                    {
                        "value": "adjuntodocumento3224.from-mt.com",
                        "timestamp": "2023-11-10 19:18:01"
                    },
                    {
                        "value": "01advertenciactc2023.dnsdojo.com",
                        "timestamp": "2023-11-10 19:18:01"
                    },
                    {
                        "value": "citaadju23nta.likes-pie.com",
                        "timestamp": "2023-11-10 19:18:00"
                    },
                    {
                        "value": "advertenciactc2023.selfip.com",
                        "timestamp": "2023-11-10 19:17:59"
                    },
                    {
                        "value": "comprobantepagoectonico.selfip.com",
                        "timestamp": "2023-11-10 19:17:59"
                    },
                    {
                        "value": "jetmailx.ddnsguru.com",
                        "timestamp": "2023-11-10 19:17:56"
                    },
                    {
                        "value": "maypainer.loseyourip.com",
                        "timestamp": "2023-11-10 19:17:56"
                    },
                    {
                        "value": "myinfo2.giize.com",
                        "timestamp": "2023-11-10 19:17:54"
                    },
                    {
                        "value": "mysystem2102account.dnsalias.com",
                        "timestamp": "2023-11-10 19:17:54"
                    },
                    {
                        "value": "advertenciact.from-wy.com",
                        "timestamp": "2023-11-10 19:17:49"
                    },
                    {
                        "value": "advertenciactc2023.from-wy.com",
                        "timestamp": "2023-11-10 19:17:49"
                    },
                    {
                        "value": "gamesstartf.xyz",
                        "timestamp": "2023-10-28 14:29:35"
                    },
                    {
                        "value": "nuevo2gameslop.xyz",
                        "timestamp": "2023-10-28 14:29:35"
                    },
                    {
                        "value": "nuevoconceti.xyz",
                        "timestamp": "2023-10-28 14:29:32"
                    },
                    {
                        "value": "repicdominic.xyz",
                        "timestamp": "2023-10-28 14:29:31"
                    },
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
                        "value": "34.74.162.235:8007",
                        "timestamp": "2023-11-10 19:17:54"
                    },
                    {
                        "value": "146.0.79.23:11224",
                        "timestamp": "2023-10-28 14:29:36"
                    },
                    {
                        "value": "146.0.79.25:11223",
                        "timestamp": "2023-10-28 14:29:34"
                    },
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
                        "value": "http://228.115.68.34.bc.googleusercontent.com/EMKT_CURSO_775-5693/",
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
    "last_ioc_update": "2023-11-10 19:18:04",
    "file_name": "mekotio",
    "analysis": null,
    "articles": [
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
            "data_url": "https://twitter.com/hpsecurity/status/1509185858146082816",
            "date": "2022-03-30",
            "organization": "Twitter (@hpsecurity)",
            "author": "HP Wolf Security",
            "title": "Tweet on recent Mekotio Banker campaign",
            "categories": [
                "Mekotio"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/11/11/html-smuggling-surges-highly-evasive-loader-technique-increasingly-used-in-banking-malware-targeted-attacks/",
            "date": "2021-11-11",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "HTML smuggling surges: Highly evasive loader technique increasingly used in banking malware, targeted attacks",
            "categories": [
                "AsyncRAT",
                "Mekotio",
                "NjRAT"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/mekotio-banker-returns-with-improved-stealth-and-ancient-encryption/",
            "date": "2021-11-03",
            "organization": "Check Point Research",
            "author": "Arie Olshtein",
            "title": "Mekotio Banker Returns with Improved Stealth and Ancient Encryption",
            "categories": [
                "Mekotio"
            ]
        },
        {
            "data_url": "https://twitter.com/MsftSecIntel/status/1418706916922986504",
            "date": "2021-07-24",
            "organization": "Twitter (@MsftSecIntel)",
            "author": "Microsoft Security Intelligence",
            "title": "Tweet on attackers increasingly using HTML smuggling in phishing and other email campaigns to deliver Casbaneiro",
            "categories": [
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://therecord.media/spain-arrests-16-for-distributing-the-mekotio-and-grandoreiro-banking-trojans/",
            "date": "2021-07-14",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Spain arrests 16 for working with the Mekotio and Grandoreiro malware gangs",
            "categories": [
                "Grandoreiro",
                "Mekotio"
            ]
        },
        {
            "data_url": "http://www.interior.gob.es/prensa/noticias/-/asset_publisher/GHU8Ap6ztgsg/content/id/13552853",
            "date": "2021-07-14",
            "organization": "Guardia Civil",
            "author": "Guardia Civil",
            "title": "The Civil Guard dismantles an important network dedicated to committing scams through the Internet",
            "categories": [
                "Grandoreiro",
                "Mekotio"
            ]
        },
        {
            "data_url": "https://cofense.com/blog/autohotkey-banking-trojan/",
            "date": "2021-03-11",
            "organization": "Cofense",
            "author": "Elmer Hernandez",
            "title": "AutoHotKey Leveraged by Metamorfo/Mekotio Banking Trojan",
            "categories": [
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/economic-growth-digital-inclusion-specialized-crime-financial-cyber-fraud-in-latam",
            "date": "2021-02-22",
            "organization": "AdvIntel",
            "author": "Beatriz Pimenta Klein",
            "title": "Economic Growth, Digital Inclusion, & Specialized Crime: Financial Cyber Fraud in LATAM",
            "categories": [
                "BRATA",
                "Mekotio",
                "Metamorfo",
                "Ploutus ATM",
                "VictoryGate"
            ]
        },
        {
            "data_url": "https://www.blueliv.com/cyber-security-and-cyber-threat-intelligence-blog-blueliv/rooty-dolphin-uses-mekotio-to-target-bank-clients-in-south-america-and-europe/",
            "date": "2020-09-30",
            "organization": "Blueliv",
            "author": "Carlos Rubio",
            "title": "Rooty Dolphin uses Mekotio to target bank clients in South America and Europe",
            "categories": [
                "Mekotio"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/08/13/mekotio-these-arent-the-security-updates-youre-looking-for/",
            "date": "2020-08-13",
            "organization": "",
            "author": "ESET Research",
            "title": "Mekotio: These aren\u2019t the security updates you\u2019re looking for\u2026",
            "categories": [
                "Mekotio"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/333/Bitdefender-PR-Whitepaper-Metamorfo-creat4500-en-EN-GenericUse.pdf",
            "date": "2020-06-04",
            "organization": "Bitdefender",
            "author": "Janos Gergo Szeles",
            "title": "Loading DLLs for illicit profit. A story about a Metamorfo distribution campaign",
            "categories": [
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/navigating-cybersecurity-during-a-pandemic-latest-malware-and-threat-actors",
            "date": "2020-04-01",
            "organization": "Cisco",
            "author": "Shyam Sundar Ramaswami",
            "title": "Navigating Cybersecurity During a Pandemic: Latest Malware and Threat Actors",
            "categories": [
                "Azorult",
                "CloudEyE",
                "Formbook",
                "KPOT Stealer",
                "Metamorfo",
                "Nanocore RAT",
                "NetWire RC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://github.com/jeFF0Falltrades/IoCs/blob/master/Broadbased/metamorfo.md",
            "date": "2020-02-11",
            "organization": "Github (jeFF0Falltrades)",
            "author": "Jeff Archer",
            "title": "Metamorfo (aka Casbaneiro)",
            "categories": [
                "Metamorfo",
                "Unidentified 072 (Metamorfo Loader)"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2019/12/B2019-Soucek-Hornak-DemystifyingBankingTrojansFromLatinAmerica.pdf",
            "date": "2019-12-06",
            "organization": "Botconf",
            "author": "Juraj Hor\u0148\u00e1k",
            "title": "Demystifying banking trojans from Latin America",
            "categories": [
                "Astaroth",
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/10/03/casbaneiro-trojan-dangerou",
            "date": "2019-10-03",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Casbaneiro: Dangerous cooking with a secret ingredient",
            "categories": [
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://medium.com/@chenerlich/the-avast-abuser-metamorfo-banking-malware-hides-by-abusing-avast-executable-ac9b8b392767",
            "date": "2019-07-16",
            "organization": "enSilo",
            "author": "Chen Erlich",
            "title": "The Avast Abuser: Metamorfo Banking Malware Hides By Abusing Avast Executable",
            "categories": [
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/11/metamorfo-brazilian-campaigns.html",
            "date": "2018-11-08",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "Metamorfo Banking Trojan Keeps Its Sights on Brazil",
            "categories": [
                "Metamorfo"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/04/metamorfo-campaign-targeting-brazilian-users.html",
            "date": "2018-04-24",
            "organization": "FireEye",
            "author": "Edson Sierra",
            "title": "Metamorfo Campaigns Targeting Brazilian Users",
            "categories": [
                "Metamorfo"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "metamorfo",
            "procedure_code": "s0455",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0455",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "metamorfo has been delivered to victims via emails with malicious html attachments.[145][146]"
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
                    "procedure_description": "metamorfo has used cmd.exe /c to execute files.[217]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "metamorfo has used vbs code on victims\u2019 systems.[86]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "metamorfo includes payloads written in javascript.[50]"
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
                    "procedure_description": "metamorfo has used native winapi calls.[121][122]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1129",
                    "technique_link": "https://attack.mitre.org/techniques/T1129",
                    "technique_name": "shared modules",
                    "technique_description": "adversaries may execute malicious payloads via loading shared modules. the windows module loader can be instructed to load dlls from arbitrary local paths and arbitrary universal naming convention (unc) network paths. this functionality resides in ntdll.dll and is part of the windows native api which is called from functions like createprocess, loadlibrary, etc. of the win32 api.",
                    "procedure_description": "metamorfo had used autoit to load and execute the dll payload.[14]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "metamorfo requires the user to double-click the executable to run the malicious hta file or to download a malicious installer.[144][145]"
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
                    "procedure_description": "metamorfo has configured persistence to the registry ket hkcu\\software\\microsoft\\windows\\currentversion\\run, spotify =% appdata%\\spotify\\spotify.exe and used .lnk files in the startup folder to achieve persistence.[159][160][161][162]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "metamorfo has side-loaded its malicious dll file.[40][41][42]"
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
                    "procedure_description": "metamorfo has configured persistence to the registry ket hkcu\\software\\microsoft\\windows\\currentversion\\run, spotify =% appdata%\\spotify\\spotify.exe and used .lnk files in the startup folder to achieve persistence.[159][160][161][162]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "metamorfo has side-loaded its malicious dll file.[40][41][42]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "metamorfo has injected a malicious dll into the windows media player process (wmplayer.exe).[47]"
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
                    "procedure_description": "upon execution, metamorfo has unzipped itself after being downloaded to the system and has performed string decryption.[146][147][148]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/003",
                    "technique_name": "hide artifacts : hidden window",
                    "technique_description": "adversaries may use hidden windows to conceal malicious activity from the plain sight of users. in some cases, windows that would typically be displayed when an application carries out an operation can be hidden. this may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks.",
                    "procedure_description": "metamorfo has hidden its gui using the showwindow() winapi call.[30]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "metamorfo has side-loaded its malicious dll file.[40][41][42]"
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
                    "procedure_description": "metamorfo has a function to kill processes associated with defenses and can prevent certain processes from launching.[59][60]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070",
                    "technique_link": "https://attack.mitre.org/techniques/T1070",
                    "technique_name": "indicator removal",
                    "technique_description": "adversaries may delete or modify artifacts generated within systems to remove evidence of their presence or hinder defenses. various artifacts may be created by an adversary or something that can be attributed to an adversary\u2019s actions. typically these artifacts are used as defensive indicators related to monitored events, such as strings from downloaded files, logs that are generated from user actions, and other data analyzed by defenders. location, format, and type of artifact (such as command or login history) are often specific to each platform.",
                    "procedure_description": "metamorfo has a command to delete a registry key it uses, \\software\\microsoft\\internet explorer\\notes.[13]"
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
                    "procedure_description": "metamorfo has deleted itself from the system after execution.[147][148]"
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
                    "procedure_description": "metamorfo has disguised an msi file as the adobe acrobat reader installer and has masqueraded payloads as onedrive, whatsapp, or spotify, for example.[98][99]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "metamorfo has written process names to the registry, disabled ie browser features, deleted registry keys, and changed the extendeduihovertime key.[91][92][93][94]"
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
                    "procedure_description": "metamorfo has encrypted payloads and strings.[211][212]"
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
                    "procedure_description": "metamorfo has used vmprotect to pack and protect files.[58]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "metamorfo has injected a malicious dll into the windows media player process (wmplayer.exe).[47]"
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
                    "procedure_description": "metamorfo has digitally signed executables using avast software certificates.[51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "metamorfo has used mshta.exe to execute a hta payload.[25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "metamorfo has used msiexec.exe to automatically execute files.[16][17]"
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
                    "procedure_description": "metamorfo has embedded a \"vmdetect.exe\" executable to identify virtual machines at the beginning of execution.[17]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "metamorfo has a command to launch a keylogger and capture keystrokes on the victim\u2019s machine.[115][116]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "metamorfo has displayed fake forms on top of banking sites to intercept credentials from victims.[12]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "metamorfo can enumerate all windows on the victim\u2019s machine.[19][20]"
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
                    "procedure_description": "metamorfo has searched the program files directories for specific folders and has searched for strings related to its mutexes.[195][196][197]"
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
                    "procedure_description": "metamorfo has performed process name checks and has monitored applications.[171]"
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
                    "procedure_description": "metamorfo has searched the compromised system for banking applications.[17][18]"
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
                    "procedure_description": "metamorfo collects a list of installed antivirus software from the victim\u2019s system.[61][62]"
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
                    "procedure_description": "metamorfo has collected the hostname and operating system version from the compromised host.[223][224][225]"
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
                    "procedure_description": "metamorfo has collected the username from the victim's machine.[113]"
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
                    "procedure_description": "metamorfo uses javascript to get the system time.[50]"
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
                    "procedure_description": "metamorfo has embedded a \"vmdetect.exe\" executable to identify virtual machines at the beginning of execution.[17]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "metamorfo has automatically collected mouse clicks, continuous screenshots on the machine, and set timers to collect the contents of the clipboard and website browsing.[25]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "metamorfo has a function to hijack data from the clipboard by monitoring the contents of the clipboard and replacing the cryptocurrency wallet with the attacker's.[35][36]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "metamorfo has a command to launch a keylogger and capture keystrokes on the victim\u2019s machine.[115][116]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/002",
                    "technique_name": "input capture : gui input capture",
                    "technique_description": "adversaries may mimic common operating system gui components to prompt users for credentials with a seemingly legitimate prompt. when programs are executed that need additional privileges than are present in the current user context, it is common for the operating system to prompt the user for proper credentials to authorize the elevated privileges for the task (ex: bypass user account control).",
                    "procedure_description": "metamorfo has displayed fake forms on top of banking sites to intercept credentials from victims.[12]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "metamorfo can collect screenshots of the victim\u2019s machine.[106][107]"
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
                    "procedure_description": "metamorfo has used http for c2.[206][207]"
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
                    "procedure_description": "metamorfo has encrypted c2 commands with aes-256.[89]"
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
                    "procedure_description": "metamorfo's c2 communication has been encrypted using openssl.[35]"
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
                    "procedure_description": "metamorfo has used msi files to download additional files to execute.[286][287][288][289]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "metamorfo has used raw tcp for c2.[37]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "metamorfo has communicated with hosts over raw tcp on port 9999.[24]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "metamorfo has used youtube to store and hide c&c server domains.[11]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/003",
                    "technique_name": "web service : one-way communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to a compromised system without receiving return output over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems may opt to send the output from those commands back over a different c2 channel, including to another distinct web service. alternatively, compromised systems may return no output at all in cases where adversaries want to send instructions to systems and do not want a response.",
                    "procedure_description": "metamorfo has downloaded a zip file for execution on the system.[4][5][6]"
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
                    "procedure_description": "metamorfo can send the data it collects to the c2 server.[86]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1565.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1565/002",
                    "technique_name": "data manipulation : transmitted data manipulation",
                    "technique_description": "adversaries may alter data en route to storage or other systems in order to manipulate external outcomes or hide activity, thus threatening the integrity of the data. by manipulating transmitted data, adversaries may attempt to affect a business process, organizational understanding, and decision making.",
                    "procedure_description": "metamorfo has a function that can watch the contents of the system clipboard for valid bitcoin addresses, which it then overwrites with the attacker's address.[5][6]"
                }
            ]
        }
    ]
};