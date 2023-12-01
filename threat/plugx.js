var threatdata = {
    "name": "PlugX",
    "alias": "PlugX, Destroy RAT, DestroyRAT, Korplug, Sogu, Kaba, Xamtrav, Agent.dhwf, RedDelta, TIGERPLUG, Thoper, TVT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2023-09-07",
    "all_data": {
        "tool": "PlugX",
        "names": [
            {
                "name": "PlugX"
            },
            {
                "name": "Destroy RAT"
            },
            {
                "name": "DestroyRAT"
            },
            {
                "name": "Korplug"
            },
            {
                "name": "Sogu"
            },
            {
                "name": "Kaba"
            },
            {
                "name": "Xamtrav"
            },
            {
                "name": "Agent.dhwf"
            },
            {
                "name": "RedDelta"
            },
            {
                "name": "TIGERPLUG"
            },
            {
                "name": "Thoper"
            },
            {
                "name": "TVT"
            }
        ],
        "description": "(US-CERT) PLUGX is a sophisticated Remote Access Tool (RAT) operating since approximately 2012. Although there are now many variants of this RAT in existence today, there are still characteristics common to most variants.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA17-117A",
            "https://threatrecon.nshc.net/2019/03/19/sectorm04-targeting-singapore-custom-malware-analysis/",
            "http://blog.jpcert.or.jp/2015/01/analysis-of-a-r-ff05.html",
            "http://blog.jpcert.or.jp/2017/02/plugx-poison-iv-919a.html",
            "http://blog.jpcert.or.jp/.s/2017/04/redleaves---malware-based-on-open-source-rat.html",
            "https://countuponsecurity.com/2018/02/04/malware-analysis-plugx/",
            "https://circl.lu/assets/files/tr-12/tr-12-circl-plugx-analysis-v1.pdf",
            "https://www.rsa.com/content/dam/pdfs/2-2017/kingslayer-a-supply-chain-attack.pdf",
            "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf",
            "http://blog.airbuscybersecurity.com/post/2014/01/plugx-some-uncovered-points.html",
            "https://community.rsa.com/thread/185439",
            "https://researchcenter.paloaltonetworks.com/2017/06/unit42-paranoid-plugx/",
            "https://www.lac.co.jp/lacwatch/people/20171218_001445.html",
            "https://countuponsecurity.com/2018/05/09/malware-analysis-plugx-part-2/",
            "https://securelist.com/time-of-death-connected-medicine/84315/",
            "https://www.arbornetworks.com/blog/asert/wp-content/uploads/2016/01/ASERT-Threat-Intelligence-Brief-2015-08-Uncovering-the-Seven-Point-Dagger.pdf",
            "https://blog.malwarebytes.com/threat-analysis/2016/08/unpacking-the-spyware-disguised-as-antivirus/",
            "https://www.sophos.com/en-us/medialibrary/pdfs/technical%20papers/plugx-thenextgeneration.pdf",
            "https://www.cybereason.com/blog/threat-analysis-report-plugx-rat-loader-evolution",
            "https://unit42.paloaltonetworks.com/plugx-variants-in-usbs/",
            "https://asec.ahnlab.com/en/49097/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0013/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.plugx"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:plugx"
        ],
        "uuid": "20865c5a-3bb0-413b-b59b-9a994303a9c9",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--be1f6941-f0c4-44cf-8af5-b3a41fa43b25",
        "last_updated": "2023-01-26T18:28:33.621Z",
        "pb_file": "plugx-malware.json",
        "title": "PLUGX MALWARE",
        "industries": [],
        "regions": [],
        "malwares": []
    },
    "ioc_data": [
        {
            "malware_printable": "PlugX",
            "malware_alias": "Destroy RAT,Kaba,Korplug,Sogu,TIGERPLUG,RedDelta",
            "malware": "win.plugx",
            "last_update": "2023-11-29 06:21:38",
            "tags": [
                "mustangpanda",
                "MustangPanda",
                "APT",
                "C2",
                "PlugX",
                "plugx",
                "apt"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "216.83.41.113:53",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "13.115.194.155:443",
                        "timestamp": "2023-11-29 06:21:32"
                    },
                    {
                        "value": "23.224.239.44:8080",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "35.77.99.82:443",
                        "timestamp": "2023-11-29 06:21:32"
                    },
                    {
                        "value": "43.229.112.204:65000",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "13.115.194.155:80",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "13.115.129.191:80",
                        "timestamp": "2023-11-29 06:21:32"
                    },
                    {
                        "value": "13.229.238.49:53",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "23.225.71.115:443",
                        "timestamp": "2023-11-29 06:21:23"
                    },
                    {
                        "value": "43.153.162.95:80",
                        "timestamp": "2023-11-20 07:18:37"
                    },
                    {
                        "value": "5.255.88.185:53",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "13.115.194.155:8080",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "217.197.160.235:8080",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "103.45.68.125:80",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "118.193.35.61:8443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "35.77.99.82:80",
                        "timestamp": "2023-11-16 06:19:40"
                    },
                    {
                        "value": "45.74.6.203:80",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "45.74.6.168:8443",
                        "timestamp": "2023-11-20 07:18:31"
                    },
                    {
                        "value": "45.74.6.203:21",
                        "timestamp": "2023-11-20 07:18:31"
                    },
                    {
                        "value": "216.83.41.111:53",
                        "timestamp": "2023-11-16 06:19:38"
                    },
                    {
                        "value": "34.92.30.54:80",
                        "timestamp": "2023-11-16 06:19:37"
                    },
                    {
                        "value": "13.115.129.191:443",
                        "timestamp": "2023-11-29 06:21:28"
                    },
                    {
                        "value": "47.117.177.231:21",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "154.204.24.245:65000",
                        "timestamp": "2023-11-29 06:21:29"
                    },
                    {
                        "value": "35.77.99.82:8080",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "194.37.97.132:21",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "34.92.77.165:80",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "70.34.198.203:443",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "14.161.32.142:8443",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "43.155.95.97:443",
                        "timestamp": "2023-11-29 06:21:33"
                    },
                    {
                        "value": "195.133.11.98:8080",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "149.28.130.206:53",
                        "timestamp": "2023-11-29 06:21:29"
                    },
                    {
                        "value": "23.225.71.115:8000",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "34.92.30.54:80",
                        "timestamp": "2023-11-08 12:48:19"
                    },
                    {
                        "value": "43.132.173.7:443",
                        "timestamp": "2023-11-29 06:21:25"
                    },
                    {
                        "value": "185.189.241.208:443",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "45.74.6.9:443",
                        "timestamp": "2023-11-08 12:48:16"
                    },
                    {
                        "value": "47.117.177.231:443",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "65.20.107.216:8080",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "154.211.14.156:443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "38.54.23.192:443",
                        "timestamp": "2023-11-08 12:48:14"
                    },
                    {
                        "value": "43.229.112.205:65000",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "118.69.111.118:8080",
                        "timestamp": "2023-11-29 06:21:35"
                    },
                    {
                        "value": "23.225.71.115:8080",
                        "timestamp": "2023-11-20 07:18:33"
                    },
                    {
                        "value": "118.99.29.173:65000",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "13.229.238.49:80",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "43.229.112.202:65000",
                        "timestamp": "2023-11-29 06:21:33"
                    },
                    {
                        "value": "38.47.116.103:53",
                        "timestamp": "2023-11-29 06:21:38"
                    },
                    {
                        "value": "185.189.241.208:80",
                        "timestamp": "2023-11-29 06:21:29"
                    },
                    {
                        "value": "103.135.33.254:443",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "43.136.245.27:80",
                        "timestamp": "2023-11-08 11:02:53"
                    },
                    {
                        "value": "45.76.219.71:80",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "78.141.208.113:8080",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "13.229.238.49:443",
                        "timestamp": "2023-11-29 06:21:28"
                    },
                    {
                        "value": "185.189.241.155:80",
                        "timestamp": "2023-11-29 06:21:33"
                    },
                    {
                        "value": "47.242.189.104:443",
                        "timestamp": "2023-11-08 11:02:53"
                    },
                    {
                        "value": "18.163.46.232:53",
                        "timestamp": "2023-11-29 06:21:28"
                    },
                    {
                        "value": "101.36.106.114:12345",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "20.2.65.28:443",
                        "timestamp": "2023-11-08 11:02:53"
                    },
                    {
                        "value": "156.234.169.19:53",
                        "timestamp": "2023-11-20 07:18:42"
                    },
                    {
                        "value": "18.163.46.232:80",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "43.229.112.206:65000",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "38.47.220.85:12345",
                        "timestamp": "2023-11-08 11:02:53"
                    },
                    {
                        "value": "18.163.46.232:443",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "47.242.189.104:8080",
                        "timestamp": "2023-11-08 11:02:51"
                    },
                    {
                        "value": "8.130.46.30:443",
                        "timestamp": "2023-11-16 04:43:47"
                    },
                    {
                        "value": "154.204.24.246:65000",
                        "timestamp": "2023-11-29 06:21:28"
                    },
                    {
                        "value": "45.74.6.240:21",
                        "timestamp": "2023-11-08 11:02:52"
                    },
                    {
                        "value": "185.189.241.155:443",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "45.32.148.180:443",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "119.29.225.72:8080",
                        "timestamp": "2023-11-08 11:02:54"
                    },
                    {
                        "value": "8.212.149.44:80",
                        "timestamp": "2023-11-08 11:02:54"
                    },
                    {
                        "value": "154.204.24.242:65000",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "112.121.187.182:12345",
                        "timestamp": "2023-11-08 11:02:54"
                    },
                    {
                        "value": "149.104.22.138:8080",
                        "timestamp": "2023-11-08 11:02:54"
                    },
                    {
                        "value": "34.92.30.54:80",
                        "timestamp": "2023-11-06 07:25:33"
                    },
                    {
                        "value": "113.160.186.153:8080",
                        "timestamp": "2023-11-08 11:02:54"
                    },
                    {
                        "value": "156.234.211.149:80",
                        "timestamp": "2023-11-29 06:21:38"
                    },
                    {
                        "value": "43.231.113.62:443",
                        "timestamp": "2023-11-08 11:02:48"
                    },
                    {
                        "value": "149.104.22.138:21",
                        "timestamp": "2023-11-06 07:25:03"
                    },
                    {
                        "value": "80.240.28.192:80",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "47.242.189.104:80",
                        "timestamp": "2023-11-08 11:02:56"
                    },
                    {
                        "value": "172.111.233.249:8443",
                        "timestamp": "2023-11-06 07:25:00"
                    },
                    {
                        "value": "107.173.63.250:53",
                        "timestamp": "2023-11-06 07:24:59"
                    },
                    {
                        "value": "101.36.106.114:8443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "103.192.226.100:8000",
                        "timestamp": "2023-10-30 05:27:57"
                    },
                    {
                        "value": "103.192.226.100:8080",
                        "timestamp": "2023-10-30 05:27:57"
                    },
                    {
                        "value": "103.56.53.106:110",
                        "timestamp": "2023-10-30 05:27:56"
                    },
                    {
                        "value": "103.56.53.106:443",
                        "timestamp": "2023-10-30 05:27:56"
                    },
                    {
                        "value": "103.56.53.106:5938",
                        "timestamp": "2023-10-30 05:27:56"
                    },
                    {
                        "value": "103.56.53.106:80",
                        "timestamp": "2023-10-30 05:27:55"
                    },
                    {
                        "value": "45.134.83.41:443",
                        "timestamp": "2023-10-30 05:27:55"
                    },
                    {
                        "value": "45.134.83.41:80",
                        "timestamp": "2023-10-30 05:27:55"
                    },
                    {
                        "value": "45.134.83.41:8080",
                        "timestamp": "2023-10-30 05:27:55"
                    },
                    {
                        "value": "45.142.166.112:110",
                        "timestamp": "2023-10-30 05:27:54"
                    },
                    {
                        "value": "45.142.166.112:443",
                        "timestamp": "2023-10-30 05:27:54"
                    },
                    {
                        "value": "45.251.240.55:443",
                        "timestamp": "2023-10-30 05:27:53"
                    },
                    {
                        "value": "45.251.240.55:8000",
                        "timestamp": "2023-10-30 05:27:52"
                    },
                    {
                        "value": "45.251.240.55:8080",
                        "timestamp": "2023-10-30 05:27:52"
                    },
                    {
                        "value": "103.192.226.100:5938",
                        "timestamp": "2023-10-30 05:27:50"
                    },
                    {
                        "value": "103.192.226.100:80",
                        "timestamp": "2023-10-30 05:27:50"
                    },
                    {
                        "value": "103.192.226.100:110",
                        "timestamp": "2023-10-30 05:27:41"
                    },
                    {
                        "value": "14.161.4.152:443",
                        "timestamp": "2023-10-26 07:40:05"
                    },
                    {
                        "value": "216.238.115.148:443",
                        "timestamp": "2023-10-26 07:40:04"
                    },
                    {
                        "value": "104.208.73.38:443",
                        "timestamp": "2023-10-26 07:40:04"
                    },
                    {
                        "value": "143.92.56.71:443",
                        "timestamp": "2023-10-26 07:40:04"
                    },
                    {
                        "value": "172.111.245.162:443",
                        "timestamp": "2023-10-26 07:40:03"
                    },
                    {
                        "value": "8.212.149.44:443",
                        "timestamp": "2023-10-26 07:40:03"
                    },
                    {
                        "value": "45.32.100.40:443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "172.111.244.178:443",
                        "timestamp": "2023-10-26 07:40:01"
                    },
                    {
                        "value": "167.179.98.155:443",
                        "timestamp": "2023-10-26 07:40:00"
                    },
                    {
                        "value": "13.229.153.26:443",
                        "timestamp": "2023-10-26 07:39:58"
                    },
                    {
                        "value": "124.220.78.199:443",
                        "timestamp": "2023-10-26 07:39:57"
                    },
                    {
                        "value": "38.47.220.85:443",
                        "timestamp": "2023-10-26 07:39:57"
                    },
                    {
                        "value": "143.92.60.75:443",
                        "timestamp": "2023-10-26 07:39:56"
                    },
                    {
                        "value": "143.92.60.77:443",
                        "timestamp": "2023-10-26 07:39:56"
                    },
                    {
                        "value": "45.74.6.228:443",
                        "timestamp": "2023-10-26 07:39:55"
                    },
                    {
                        "value": "80.240.28.192:443",
                        "timestamp": "2023-10-26 07:39:55"
                    },
                    {
                        "value": "143.92.60.54:443",
                        "timestamp": "2023-10-26 07:39:55"
                    },
                    {
                        "value": "20.214.1.160:443",
                        "timestamp": "2023-10-26 07:39:54"
                    },
                    {
                        "value": "217.197.160.235:443",
                        "timestamp": "2023-11-29 06:21:37"
                    },
                    {
                        "value": "172.111.233.204:443",
                        "timestamp": "2023-10-26 07:39:54"
                    },
                    {
                        "value": "208.72.153.162:443",
                        "timestamp": "2023-11-16 04:43:48"
                    },
                    {
                        "value": "202.162.108.48:443",
                        "timestamp": "2023-11-29 06:21:23"
                    },
                    {
                        "value": "109.94.209.44:443",
                        "timestamp": "2023-10-26 07:39:52"
                    },
                    {
                        "value": "103.45.68.125:443",
                        "timestamp": "2023-10-26 07:39:51"
                    },
                    {
                        "value": "45.74.6.253:443",
                        "timestamp": "2023-10-26 07:39:50"
                    },
                    {
                        "value": "45.74.6.245:443",
                        "timestamp": "2023-10-26 07:39:49"
                    },
                    {
                        "value": "185.135.77.239:443",
                        "timestamp": "2023-11-08 11:02:56"
                    },
                    {
                        "value": "107.175.69.184:443",
                        "timestamp": "2023-10-26 07:39:47"
                    },
                    {
                        "value": "107.155.56.134:443",
                        "timestamp": "2023-10-26 07:39:46"
                    },
                    {
                        "value": "45.74.6.197:443",
                        "timestamp": "2023-10-26 07:39:45"
                    },
                    {
                        "value": "45.86.163.230:443",
                        "timestamp": "2023-10-26 07:39:45"
                    },
                    {
                        "value": "45.32.39.15:443",
                        "timestamp": "2023-10-26 07:39:45"
                    },
                    {
                        "value": "27.102.106.146:443",
                        "timestamp": "2023-10-26 07:39:44"
                    },
                    {
                        "value": "27.102.106.153:443",
                        "timestamp": "2023-10-26 07:39:43"
                    },
                    {
                        "value": "103.135.33.250:443",
                        "timestamp": "2023-11-29 06:21:29"
                    },
                    {
                        "value": "159.65.157.64:443",
                        "timestamp": "2023-10-26 07:39:40"
                    },
                    {
                        "value": "156.234.211.149:443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "112.213.125.75:443",
                        "timestamp": "2023-11-29 06:21:36"
                    },
                    {
                        "value": "124.223.102.72:443",
                        "timestamp": "2023-10-26 07:39:39"
                    },
                    {
                        "value": "154.26.153.129:443",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "103.106.202.163:443",
                        "timestamp": "2023-10-26 07:39:38"
                    },
                    {
                        "value": "103.169.90.98:443",
                        "timestamp": "2023-10-26 07:39:38"
                    },
                    {
                        "value": "103.106.202.158:443",
                        "timestamp": "2023-10-26 07:39:37"
                    },
                    {
                        "value": "110.50.48.222:443",
                        "timestamp": "2023-10-26 07:39:36"
                    },
                    {
                        "value": "47.57.118.245:443",
                        "timestamp": "2023-10-26 07:39:36"
                    },
                    {
                        "value": "118.99.29.173:443",
                        "timestamp": "2023-10-26 07:39:35"
                    },
                    {
                        "value": "103.135.33.252:443",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "103.135.33.251:443",
                        "timestamp": "2023-11-29 06:21:22"
                    },
                    {
                        "value": "107.148.0.190:443",
                        "timestamp": "2023-10-26 07:39:30"
                    },
                    {
                        "value": "43.242.34.12:443",
                        "timestamp": "2023-10-26 07:39:29"
                    },
                    {
                        "value": "43.242.34.30:443",
                        "timestamp": "2023-10-26 07:39:29"
                    },
                    {
                        "value": "45.74.6.122:443",
                        "timestamp": "2023-10-26 07:39:29"
                    },
                    {
                        "value": "45.74.41.38:443",
                        "timestamp": "2023-10-26 07:39:28"
                    },
                    {
                        "value": "103.68.193.225:443",
                        "timestamp": "2023-10-26 07:39:28"
                    },
                    {
                        "value": "141.164.37.94:443",
                        "timestamp": "2023-10-26 07:39:27"
                    },
                    {
                        "value": "45.74.6.163:443",
                        "timestamp": "2023-10-26 07:39:27"
                    },
                    {
                        "value": "45.74.6.24:443",
                        "timestamp": "2023-10-26 07:39:27"
                    },
                    {
                        "value": "38.60.254.243:443",
                        "timestamp": "2023-10-26 07:39:26"
                    },
                    {
                        "value": "45.77.174.174:443",
                        "timestamp": "2023-10-26 07:39:26"
                    },
                    {
                        "value": "154.19.70.222:443",
                        "timestamp": "2023-10-26 07:39:25"
                    },
                    {
                        "value": "103.94.76.135:443",
                        "timestamp": "2023-10-26 07:39:25"
                    },
                    {
                        "value": "103.94.76.115:443",
                        "timestamp": "2023-10-26 07:39:24"
                    },
                    {
                        "value": "38.54.79.103:443",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "38.47.221.162:443",
                        "timestamp": "2023-10-26 07:39:23"
                    },
                    {
                        "value": "103.56.55.153:443",
                        "timestamp": "2023-11-29 06:21:38"
                    },
                    {
                        "value": "103.254.73.21:443",
                        "timestamp": "2023-10-26 07:39:19"
                    },
                    {
                        "value": "143.92.60.76:443",
                        "timestamp": "2023-10-26 07:39:19"
                    },
                    {
                        "value": "103.254.73.20:443",
                        "timestamp": "2023-10-26 07:39:18"
                    },
                    {
                        "value": "103.254.73.22:443",
                        "timestamp": "2023-10-26 07:39:17"
                    },
                    {
                        "value": "45.32.103.109:443",
                        "timestamp": "2023-10-26 07:39:17"
                    },
                    {
                        "value": "45.77.43.75:443",
                        "timestamp": "2023-10-26 07:39:16"
                    },
                    {
                        "value": "139.180.212.205:443",
                        "timestamp": "2023-10-26 07:39:16"
                    },
                    {
                        "value": "206.189.80.15:443",
                        "timestamp": "2023-10-26 07:39:15"
                    },
                    {
                        "value": "207.148.118.170:443",
                        "timestamp": "2023-10-26 07:39:14"
                    },
                    {
                        "value": "104.233.173.53:443",
                        "timestamp": "2023-10-26 07:39:09"
                    },
                    {
                        "value": "158.247.213.215:443",
                        "timestamp": "2023-10-26 07:39:08"
                    },
                    {
                        "value": "103.244.3.107:443",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "45.76.219.71:443",
                        "timestamp": "2023-10-26 07:39:07"
                    },
                    {
                        "value": "16.162.44.42:443",
                        "timestamp": "2023-10-26 07:39:06"
                    },
                    {
                        "value": "23.224.239.44:443",
                        "timestamp": "2023-10-26 07:39:04"
                    },
                    {
                        "value": "104.233.161.173:443",
                        "timestamp": "2023-10-26 07:39:03"
                    },
                    {
                        "value": "149.104.22.138:443",
                        "timestamp": "2023-10-26 07:39:03"
                    },
                    {
                        "value": "180.235.137.85:443",
                        "timestamp": "2023-10-26 06:35:54"
                    },
                    {
                        "value": "27.102.106.153:80",
                        "timestamp": "2023-10-25 07:59:48"
                    },
                    {
                        "value": "209.250.241.189:443",
                        "timestamp": "2023-10-26 06:36:00"
                    },
                    {
                        "value": "23.224.239.44:8000",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "54.249.142.61:53",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "143.92.60.54:8088",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "180.178.42.37:65000",
                        "timestamp": "2023-10-25 07:59:46"
                    },
                    {
                        "value": "54.250.239.189:80",
                        "timestamp": "2023-10-25 07:13:09"
                    },
                    {
                        "value": "154.204.24.243:65000",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "112.121.187.181:443",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "38.47.220.85:8000",
                        "timestamp": "2023-11-08 11:02:54"
                    },
                    {
                        "value": "185.101.139.99:80",
                        "timestamp": "2023-10-25 07:59:43"
                    },
                    {
                        "value": "3.112.45.157:53",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "143.92.52.133:12345",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "112.121.187.178:12345",
                        "timestamp": "2023-11-29 06:21:37"
                    },
                    {
                        "value": "103.244.3.109:80",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "110.50.48.222:8443",
                        "timestamp": "2023-10-25 07:59:41"
                    },
                    {
                        "value": "103.244.3.109:8443",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "38.54.40.60:443",
                        "timestamp": "2023-11-29 06:21:22"
                    },
                    {
                        "value": "45.148.120.142:443",
                        "timestamp": "2023-11-08 11:02:56"
                    },
                    {
                        "value": "34.92.30.54:80",
                        "timestamp": "2023-10-25 07:59:39"
                    },
                    {
                        "value": "103.135.33.253:443",
                        "timestamp": "2023-11-29 06:21:35"
                    },
                    {
                        "value": "143.92.60.75:8088",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "103.244.3.109:443",
                        "timestamp": "2023-11-29 06:21:25"
                    },
                    {
                        "value": "108.61.163.91:80",
                        "timestamp": "2023-11-29 06:21:33"
                    },
                    {
                        "value": "143.92.52.137:12345",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "23.224.239.44:12345",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "112.121.187.180:443",
                        "timestamp": "2023-11-29 06:21:37"
                    },
                    {
                        "value": "112.121.187.179:443",
                        "timestamp": "2023-11-29 06:21:35"
                    },
                    {
                        "value": "103.244.3.107:8443",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "47.57.118.245:8443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "112.121.187.182:443",
                        "timestamp": "2023-11-29 06:21:35"
                    },
                    {
                        "value": "112.121.187.178:443",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "47.57.118.245:53",
                        "timestamp": "2023-11-20 07:18:36"
                    },
                    {
                        "value": "152.32.211.67:53",
                        "timestamp": "2023-11-29 06:21:23"
                    },
                    {
                        "value": "104.233.173.53:80",
                        "timestamp": "2023-11-16 04:43:47"
                    },
                    {
                        "value": "43.135.1.200:21",
                        "timestamp": "2023-11-08 11:02:56"
                    },
                    {
                        "value": "103.244.3.107:80",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "104.233.160.81:443",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "143.92.60.77:8088",
                        "timestamp": "2023-11-29 06:21:32"
                    },
                    {
                        "value": "45.77.157.245:53",
                        "timestamp": "2023-11-20 07:18:36"
                    },
                    {
                        "value": "143.92.52.133:53",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "38.47.123.94:53",
                        "timestamp": "2023-10-25 07:59:20"
                    },
                    {
                        "value": "45.76.213.19:53",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "8.218.234.216:53",
                        "timestamp": "2023-11-20 07:18:35"
                    },
                    {
                        "value": "202.182.115.238:53",
                        "timestamp": "2023-10-25 07:59:18"
                    },
                    {
                        "value": "8.218.191.58:53",
                        "timestamp": "2023-10-25 07:59:18"
                    },
                    {
                        "value": "104.233.160.81:53",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "45.63.41.197:443",
                        "timestamp": "2023-11-08 11:02:55"
                    },
                    {
                        "value": "185.135.77.199:443",
                        "timestamp": "2023-11-08 11:02:57"
                    },
                    {
                        "value": "112.213.125.75:80",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "104.233.173.53:53",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "158.247.213.215:8443",
                        "timestamp": "2023-10-25 07:59:14"
                    },
                    {
                        "value": "185.239.87.173:443",
                        "timestamp": "2023-10-26 06:35:58"
                    },
                    {
                        "value": "27.102.118.76:446",
                        "timestamp": "2023-10-25 07:59:13"
                    },
                    {
                        "value": "185.101.139.99:443",
                        "timestamp": "2023-10-26 06:35:55"
                    },
                    {
                        "value": "172.111.244.164:21",
                        "timestamp": "2023-10-25 07:59:12"
                    },
                    {
                        "value": "109.123.230.56:8080",
                        "timestamp": "2023-11-20 07:18:34"
                    },
                    {
                        "value": "167.172.76.129:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "167.172.76.129:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "210.68.108.46:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "149.28.130.206:443",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "154.31.172.86:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "154.39.239.155:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "154.39.239.205:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "139.84.171.4:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "45.134.82.191:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "45.142.166.65:443",
                        "timestamp": "2023-10-26 06:36:08"
                    },
                    {
                        "value": "54.249.142.61:443",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "114.29.254.201:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "124.223.102.72:8080",
                        "timestamp": "2023-11-08 11:02:48"
                    },
                    {
                        "value": "128.14.227.104:8080",
                        "timestamp": "2023-04-12 07:02:51"
                    },
                    {
                        "value": "139.180.215.111:8080",
                        "timestamp": "2023-04-12 07:02:51"
                    },
                    {
                        "value": "152.32.164.67:8080",
                        "timestamp": "2023-04-12 07:02:51"
                    },
                    {
                        "value": "152.32.211.67:8080",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "156.247.10.118:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "158.247.222.2:8080",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "180.235.137.85:8080",
                        "timestamp": "2023-04-18 06:24:53"
                    },
                    {
                        "value": "185.243.41.247:8080",
                        "timestamp": "2023-04-18 06:24:53"
                    },
                    {
                        "value": "103.194.187.148:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "103.194.187.149:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "106.55.60.126:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "107.150.124.43:8080",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "107.155.55.15:8080",
                        "timestamp": "2023-10-13 07:21:04"
                    },
                    {
                        "value": "107.155.56.134:8080",
                        "timestamp": "2023-11-08 11:02:50"
                    },
                    {
                        "value": "112.196.204.141:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "112.196.204.151:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "114.29.254.17:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "114.29.254.94:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "114.29.254.126:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "3.112.45.157:8080",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "8.218.37.29:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "8.218.191.58:8080",
                        "timestamp": "2023-11-08 11:02:49"
                    },
                    {
                        "value": "18.179.5.105:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "45.77.172.61:8080",
                        "timestamp": "2023-04-12 07:02:49"
                    },
                    {
                        "value": "54.250.239.189:8080",
                        "timestamp": "2023-10-25 07:13:12"
                    },
                    {
                        "value": "85.206.160.121:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "87.121.52.23:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "103.27.109.130:8080",
                        "timestamp": "2023-04-12 07:02:49"
                    },
                    {
                        "value": "103.186.214.216:8080",
                        "timestamp": "2023-04-12 07:02:49"
                    },
                    {
                        "value": "206.119.75.253:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "139.84.138.129:443",
                        "timestamp": "2023-04-12 07:01:04"
                    },
                    {
                        "value": "154.91.84.128:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "167.179.109.96:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "139.84.137.183:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "109.123.230.56:443",
                        "timestamp": "2023-11-20 07:18:41"
                    },
                    {
                        "value": "112.196.204.141:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "103.218.243.167:443",
                        "timestamp": "2023-11-29 06:21:23"
                    },
                    {
                        "value": "104.199.159.226:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "107.155.55.15:443",
                        "timestamp": "2023-11-08 11:02:49"
                    },
                    {
                        "value": "107.173.63.250:443",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "103.127.124.226:443",
                        "timestamp": "2023-04-12 07:01:00"
                    },
                    {
                        "value": "103.186.214.216:443",
                        "timestamp": "2023-04-12 07:01:00"
                    },
                    {
                        "value": "61.238.103.170:443",
                        "timestamp": "2023-04-12 07:00:59"
                    },
                    {
                        "value": "92.223.85.90:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.27.109.130:443",
                        "timestamp": "2023-04-12 07:00:59"
                    },
                    {
                        "value": "45.77.172.61:443",
                        "timestamp": "2023-04-12 07:00:58"
                    },
                    {
                        "value": "45.77.177.209:443",
                        "timestamp": "2023-04-12 07:00:58"
                    },
                    {
                        "value": "61.238.103.165:443",
                        "timestamp": "2023-11-09 16:25:41"
                    },
                    {
                        "value": "34.150.33.252:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "35.229.246.12:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "43.255.28.190:443",
                        "timestamp": "2023-11-29 06:21:25"
                    },
                    {
                        "value": "45.32.119.152:443",
                        "timestamp": "2023-10-26 06:36:03"
                    },
                    {
                        "value": "45.76.80.13:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "8.217.48.154:443",
                        "timestamp": "2023-04-18 06:03:02"
                    },
                    {
                        "value": "207.148.105.154:443",
                        "timestamp": "2023-04-12 07:01:05"
                    },
                    {
                        "value": "172.93.167.211:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "172.93.167.227:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "185.243.41.247:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "193.22.152.56:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "198.13.36.205:443",
                        "timestamp": "2023-10-26 06:35:56"
                    },
                    {
                        "value": "207.148.97.160:443",
                        "timestamp": "2023-10-26 06:35:49"
                    },
                    {
                        "value": "149.28.25.119:443",
                        "timestamp": "2023-10-26 06:35:50"
                    },
                    {
                        "value": "150.129.52.95:443",
                        "timestamp": "2023-04-03 10:15:40"
                    },
                    {
                        "value": "152.32.164.67:443",
                        "timestamp": "2023-04-03 10:15:40"
                    },
                    {
                        "value": "152.32.211.67:443",
                        "timestamp": "2023-11-29 06:21:33"
                    },
                    {
                        "value": "156.247.10.118:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "158.247.222.2:443",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "158.247.238.22:443",
                        "timestamp": "2023-04-03 10:15:40"
                    },
                    {
                        "value": "114.29.254.94:443",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "114.29.254.126:443",
                        "timestamp": "2023-11-29 06:21:29"
                    },
                    {
                        "value": "114.29.254.201:443",
                        "timestamp": "2023-11-29 06:21:34"
                    },
                    {
                        "value": "128.14.227.104:443",
                        "timestamp": "2023-04-03 10:15:39"
                    },
                    {
                        "value": "139.84.167.181:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "139.180.215.111:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "112.196.204.151:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "112.213.109.32:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "112.213.109.35:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "112.213.109.47:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "114.29.254.17:443",
                        "timestamp": "2023-11-29 06:21:31"
                    },
                    {
                        "value": "103.194.187.149:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "106.55.60.126:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "107.148.14.49:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "107.150.124.43:443",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "108.61.163.91:443",
                        "timestamp": "2023-11-29 06:21:29"
                    },
                    {
                        "value": "103.140.238.92:443",
                        "timestamp": "2023-04-03 10:15:36"
                    },
                    {
                        "value": "103.149.48.56:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.149.48.57:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.194.187.147:443",
                        "timestamp": "2023-04-03 10:15:36"
                    },
                    {
                        "value": "103.194.187.148:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.86.44.198:443",
                        "timestamp": "2023-04-03 10:15:35"
                    },
                    {
                        "value": "103.94.76.158:443",
                        "timestamp": "2023-11-20 07:18:39"
                    },
                    {
                        "value": "103.94.76.169:443",
                        "timestamp": "2023-11-20 07:18:29"
                    },
                    {
                        "value": "103.94.76.183:443",
                        "timestamp": "2023-11-20 07:18:30"
                    },
                    {
                        "value": "103.113.11.78:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "72.18.215.38:443",
                        "timestamp": "2023-11-29 06:21:30"
                    },
                    {
                        "value": "87.121.52.23:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "92.38.132.128:443",
                        "timestamp": "2023-04-03 10:15:34"
                    },
                    {
                        "value": "101.200.59.103:443",
                        "timestamp": "2023-04-03 10:15:34"
                    },
                    {
                        "value": "103.27.108.158:443",
                        "timestamp": "2023-04-12 07:00:59"
                    },
                    {
                        "value": "54.250.239.189:443",
                        "timestamp": "2023-10-26 06:35:48"
                    },
                    {
                        "value": "63.141.237.100:443",
                        "timestamp": "2023-11-29 06:21:26"
                    },
                    {
                        "value": "63.141.237.208:443",
                        "timestamp": "2023-11-29 06:21:27"
                    },
                    {
                        "value": "64.44.184.105:443",
                        "timestamp": "2023-11-29 06:21:24"
                    },
                    {
                        "value": "65.20.112.193:443",
                        "timestamp": "2023-04-03 10:15:33"
                    },
                    {
                        "value": "43.255.28.201:443",
                        "timestamp": "2023-04-12 07:00:57"
                    },
                    {
                        "value": "45.32.34.154:443",
                        "timestamp": "2023-04-03 10:15:32"
                    },
                    {
                        "value": "45.87.43.60:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "45.120.55.154:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "45.120.55.162:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "18.179.5.105:443",
                        "timestamp": "2023-04-18 06:03:02"
                    },
                    {
                        "value": "34.92.30.54:443",
                        "timestamp": "2023-11-29 06:21:32"
                    },
                    {
                        "value": "34.96.231.241:443",
                        "timestamp": "2023-04-03 10:15:31"
                    },
                    {
                        "value": "38.54.76.128:443",
                        "timestamp": "2023-04-03 10:15:31"
                    },
                    {
                        "value": "43.154.29.157:443",
                        "timestamp": "2023-10-26 06:35:55"
                    },
                    {
                        "value": "43.248.133.54:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "8.218.37.29:443",
                        "timestamp": "2023-04-18 06:03:02"
                    },
                    {
                        "value": "8.218.191.58:443",
                        "timestamp": "2023-11-08 11:02:49"
                    },
                    {
                        "value": "8.218.201.52:443",
                        "timestamp": "2023-04-03 10:15:30"
                    },
                    {
                        "value": "8.218.242.93:443",
                        "timestamp": "2023-04-03 10:15:30"
                    },
                    {
                        "value": "3.112.45.157:443",
                        "timestamp": "2023-11-29 06:21:25"
                    },
                    {
                        "value": "5.255.88.185:443",
                        "timestamp": "2023-11-29 06:21:32"
                    },
                    {
                        "value": "103.164.203.164:443",
                        "timestamp": "2023-03-14 06:56:40"
                    },
                    {
                        "value": "45.64.184.248:443",
                        "timestamp": "2023-03-14 06:56:40"
                    },
                    {
                        "value": "195.211.97.117:443",
                        "timestamp": "2023-01-09 08:36:18"
                    },
                    {
                        "value": "217.12.206.116:443",
                        "timestamp": "2023-01-04 07:36:09"
                    },
                    {
                        "value": "207.148.103.108:53",
                        "timestamp": "2022-08-23 17:21:28"
                    },
                    {
                        "value": "207.148.103.108:443",
                        "timestamp": "2022-08-23 17:21:28"
                    }
                ],
                "domain": [
                    {
                        "value": "www.quochoice.com",
                        "timestamp": "2023-10-30 05:27:49"
                    },
                    {
                        "value": "www.systeminfor.com",
                        "timestamp": "2023-10-30 05:27:49"
                    },
                    {
                        "value": "rainydaysweb.com",
                        "timestamp": "2023-10-30 05:27:48"
                    },
                    {
                        "value": "www.manager2013.com",
                        "timestamp": "2023-10-30 05:27:41"
                    },
                    {
                        "value": "www.apple-net.com",
                        "timestamp": "2023-10-30 05:27:40"
                    },
                    {
                        "value": "detail.misecure.com",
                        "timestamp": "2023-10-30 05:27:38"
                    },
                    {
                        "value": "hdviet.tv-vn.com",
                        "timestamp": "2023-10-30 05:27:38"
                    },
                    {
                        "value": "www.a-white.vn",
                        "timestamp": "2023-10-26 07:39:14"
                    },
                    {
                        "value": "cahayashop.shop",
                        "timestamp": "2023-10-26 07:39:01"
                    },
                    {
                        "value": "google-inc.ltd",
                        "timestamp": "2023-10-26 07:39:01"
                    },
                    {
                        "value": "img.cdn.jsdblog.com",
                        "timestamp": "2023-10-26 07:39:00"
                    },
                    {
                        "value": "public.liveonlin.com",
                        "timestamp": "2023-10-26 07:39:00"
                    },
                    {
                        "value": "npgsql.liveonlin.com",
                        "timestamp": "2023-10-26 07:39:00"
                    },
                    {
                        "value": "cctv.liveonlin.com",
                        "timestamp": "2023-10-26 07:38:59"
                    },
                    {
                        "value": "main.liveonlin.com",
                        "timestamp": "2023-10-26 07:38:59"
                    },
                    {
                        "value": "tech.liveonlin.com",
                        "timestamp": "2023-10-26 07:38:58"
                    },
                    {
                        "value": "americafirst3d.com",
                        "timestamp": "2023-10-26 07:38:58"
                    },
                    {
                        "value": "webmail.psd2.info.87-121-52-23.cprapid.com",
                        "timestamp": "2023-10-26 07:38:58"
                    },
                    {
                        "value": "cdn.imango.ink",
                        "timestamp": "2023-10-26 07:38:57"
                    },
                    {
                        "value": "api.imango.ink",
                        "timestamp": "2023-10-26 07:38:57"
                    },
                    {
                        "value": "webdisk.psd2.info.87-121-52-23.cprapid.com",
                        "timestamp": "2023-10-26 07:38:57"
                    },
                    {
                        "value": "windows-sns2.dns-microsoft.com",
                        "timestamp": "2023-10-26 07:38:56"
                    },
                    {
                        "value": "miscrosofts.gq",
                        "timestamp": "2022-08-25 12:12:51"
                    },
                    {
                        "value": "windows.defender.miscrosofts.gq",
                        "timestamp": "2022-08-25 12:12:51"
                    },
                    {
                        "value": "tcp.wy01.com",
                        "timestamp": "2022-08-23 17:20:55"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "e832281f64504e3dce46860b605116a9",
                        "timestamp": "2023-02-22 17:18:49"
                    },
                    {
                        "value": "c285eaea0fe441f550479f7ef85a3dd0",
                        "timestamp": "2022-06-23 07:48:50"
                    },
                    {
                        "value": "74668e84ee38695216ef737f389dc55c",
                        "timestamp": "2022-03-07 11:27:36"
                    },
                    {
                        "value": "da5b7184153b459c23593f58caa7193a",
                        "timestamp": "2021-12-18 17:02:07"
                    },
                    {
                        "value": "9669044e803380188b590d60c39e9aeb",
                        "timestamp": "2021-12-18 17:02:07"
                    },
                    {
                        "value": "f1f48360f95e1b43e9fba0fec5a2afb8",
                        "timestamp": "2021-03-15 12:44:09"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "30cd088702cb8c32879c1f56fa6e2e3ec9c070992331ac6f0b96c6b405bdb90a",
                        "timestamp": "2022-08-23 20:13:41"
                    },
                    {
                        "value": "87ec9b5cb7f8dbdf5ea89cade8ab71b3303acff94b119c22bc2cc8c18a4e4260",
                        "timestamp": "2022-08-11 16:37:26"
                    },
                    {
                        "value": "e99ce4fc9697335549cab26717d75abbaf75895c3cd0e77a844769fe9674e3bc",
                        "timestamp": "2022-07-01 11:48:29"
                    },
                    {
                        "value": "c9f7248e64b531031822e3cda468bf52fcfe169ad15d7d8ddf379cb27ad8b63b",
                        "timestamp": "2022-07-01 11:48:26"
                    },
                    {
                        "value": "bee9c438aced1fb1ca7402ef8665ebe42cab6f5167204933eaa07b11d44641bb",
                        "timestamp": "2022-03-08 13:40:13"
                    },
                    {
                        "value": "6e6bfcbc22644d060670718dea2c5a7d860edc55cf8bd6100e277e53a8b0fc92",
                        "timestamp": "2022-02-21 06:28:16"
                    },
                    {
                        "value": "9857e40be1fb5b9b6db93dc03f96f6b3ff0ffab85af7944dddcac0e37775ab02",
                        "timestamp": "2022-02-21 06:28:16"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-29 06:21:38",
    "file_name": "plugx",
    "articles": [
        {
            "data_url": "https://blog.sekoia.io/my-teas-not-cold-an-overview-of-china-cyber-threat/",
            "date": "2023-09-07",
            "organization": "Sekoia",
            "author": "Jamila B.",
            "title": "My Tea\u2019s not cold. An overview of China\u2019s cyber threat",
            "categories": [
                "Melofee",
                "PingPull",
                "SoWaT",
                "Sword2033",
                "MgBot",
                "MQsTTang",
                "PlugX",
                "TONESHELL"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/carderbee-software-supply-chain-certificate-abuse",
            "date": "2023-08-22",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Carderbee: APT Group use Legit Software in Supply Chain Attack Targeting Orgs in Hong Kong",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0808.pdf",
            "date": "2023-08-07",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "RedHotel: A Prolific, Chinese State-Sponsored Group Operating at a Global Scale",
            "categories": [
                "Winnti",
                "Brute Ratel C4",
                "Cobalt Strike",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Spyder"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/blog/infected-usb-steal-secrets",
            "date": "2023-07-11",
            "organization": "Mandiant",
            "author": "Rommel Joven",
            "title": "The Spies Who Loved You: Infected USB Drives to Steal Secrets",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/chinese-threat-actors-targeting-europe-in-smugx-campaign/",
            "date": "2023-07-03",
            "organization": "Check Point Research",
            "author": "Checkpoint Research",
            "title": "Chinese Threat Actors Targeting Europe in SmugX Campaign",
            "categories": [
                "PlugX",
                "SmugX"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/lancefly-merdoor-zxshell-custom-backdoor",
            "date": "2023-05-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Lancefly: Group Uses Custom Backdoor to Target Orgs in Government, Aviation, Other Sectors",
            "categories": [
                "Merdoor",
                "PlugX",
                "ShadowPad",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://lab52.io/blog/new-mustang-pandas-campaing-against-australia/",
            "date": "2023-05-03",
            "organization": "Lab52",
            "author": "Lab52",
            "title": "New Mustang Panda\u2019s campaing against Australia",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://mandiant.widen.net/s/pkffwrbjlz/m-trends-2023",
            "date": "2023-04-18",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "M-Trends 2023",
            "categories": [
                "QUIETEXIT",
                "AppleJeus",
                "Black Basta",
                "BlackCat",
                "CaddyWiper",
                "Cobalt Strike",
                "Dharma",
                "HermeticWiper",
                "Hive",
                "INDUSTROYER2",
                "Ladon",
                "LockBit",
                "Meterpreter",
                "PartyTicket",
                "PlugX",
                "QakBot",
                "REvil",
                "Royal Ransom",
                "SystemBC",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0330.pdf",
            "date": "2023-03-30",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "With KEYPLUG, China\u2019s RedGolf Spies On, Steals From Wide Field of Targets",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "PlugX"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/49097/",
            "date": "2023-03-09",
            "organization": "ASEC",
            "author": "Sanseo",
            "title": "PlugX Malware Being Distributed via Vulnerability Exploitation",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2023/03/09/border-hopping-plugx-usb-worm/",
            "date": "2023-03-09",
            "organization": "Sophos",
            "author": "Gabor Szappanos",
            "title": "A border-hopping PlugX USB worm takes its act on the road",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/23/b/investigating-the-plugx-trojan-disguised-as-a-legitimate-windows.html",
            "date": "2023-02-24",
            "organization": "Trend Micro",
            "author": "Buddy Tancio",
            "title": "Investigating the PlugX Trojan Disguised as a Legitimate Windows Debugger Tool",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://blog.eclecticiq.com/mustang-panda-apt-group-uses-european-commission-themed-lure-to-deliver-plugx-malware",
            "date": "2023-02-02",
            "organization": "EclecticIQ",
            "author": "EclecticIQ Threat Research Team",
            "title": "Mustang Panda APT Group Uses European Commission-Themed Lure to Deliver PlugX Malware",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2023/pdf/JSAC2023_2_LT4.pdf",
            "date": "2023-01-26",
            "organization": "TEAMT5",
            "author": "Still Hsu",
            "title": "Brief History of MustangPanda and its PlugX Evolution",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/plugx-variants-in-usbs/",
            "date": "2023-01-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Mike Harbison",
            "title": "Chinese PlugX Malware Hidden in Your USB Devices?",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://kienmanowar.wordpress.com/2023/01/09/quicknote-another-nice-plugx-sample/",
            "date": "2023-01-09",
            "organization": "kienmanowar Blog",
            "author": "m4n0w4r",
            "title": "[QuickNote] Another nice PlugX\u00a0sample",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://kienmanowar.wordpress.com/2022/12/27/diving-into-a-plugx-sample-of-mustang-panda-group/",
            "date": "2022-12-27",
            "organization": "kienmanowar Blog",
            "author": "m4n0w4r",
            "title": "Diving into a PlugX sample of Mustang Panda\u00a0group",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-1223.pdf",
            "date": "2022-12-22",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "RedDelta Targets European Government Organizations and Continues to Iterate Custom PlugX Variant",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/12/mustang-panda-uses-the-russian-ukrainian-war-to-attack-europe-and-asia-pacific-targets",
            "date": "2022-12-06",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Mustang Panda Uses the Russian-Ukrainian War to Attack Europe and Asia Pacific Targets",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/threatintel/apt-treasure-trove-avast-suspects-chinese-apt-group-mustang-panda-is-collecting-data-from-burmese-government-agencies-and-opposition-groups/",
            "date": "2022-12-02",
            "organization": "Avast Decoded",
            "author": "Threat Intelligence Team",
            "title": "Hitching a ride with Mustang Panda",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://engineers.ffri.jp/entry/2022/11/30/141346",
            "date": "2022-11-30",
            "organization": "FFRI Security",
            "author": "Matsumoto",
            "title": "Evolution of the PlugX loader",
            "categories": [
                "PlugX",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/10/mustang-panda-abuses-legitimate-apps-to-target-myanmar-based-victims",
            "date": "2022-10-06",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Mustang Panda Abuses Legitimate Apps to Target Myanmar Based Victims",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/witchetty-steganography-espionage",
            "date": "2022-09-29",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Witchetty: Group Uses Updated Toolset in Attacks on Governments in Middle East",
            "categories": [
                "CHINACHOPPER",
                "Lookback",
                "MimiKatz",
                "PlugX",
                "Unidentified 096 (Keylogger)",
                "x4"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unsigned-dlls/",
            "date": "2022-09-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Daniela Shalev",
            "title": "Hunting for Unsigned DLLs to Find APTs",
            "categories": [
                "PlugX",
                "Raspberry Robin",
                "Roshtyak"
            ]
        },
        {
            "data_url": "https://secjoes-reports.s3.eu-central-1.amazonaws.com/Dissecting+PlugX+to+Extract+Its+Crown+Jewels.pdf",
            "date": "2022-09-14",
            "organization": "Security Joes",
            "author": "Felipe Duarte",
            "title": "Dissecting PlugX to Extract Its Crown Jewels",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/espionage-asia-governments",
            "date": "2022-09-13",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "New Wave of Espionage Activity Targets Asian Governments",
            "categories": [
                "MimiKatz",
                "PlugX",
                "Quasar RAT",
                "ShadowPad",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/m4now4r/Presentations/main/MustangPanda%20-%20Enemy%20at%20the%20gate_final.pdf",
            "date": "2022-09-09",
            "organization": "Github (m4now4r)",
            "author": "m4n0w4r",
            "title": "\u201cMustang Panda\u201d \u2013 Enemy at the gate",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-analysis-report-plugx-rat-loader-evolution",
            "date": "2022-09-08",
            "organization": "Cybereason",
            "author": "Kotaro Ogino",
            "title": "Threat Analysis Report: PlugX RAT Loader Evolution",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/bronze-president-targets-government-officials",
            "date": "2022-09-08",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "BRONZE PRESIDENT Targets Government Officials",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/shallowtaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Shallow Taurus",
            "categories": [
                "FormerFirstRAT",
                "IsSpace",
                "NewCT",
                "PlugX",
                "Poison Ivy",
                "Tidepool",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=E2_DTQJjDYc",
            "date": "2022-07-18",
            "organization": "YouTube (Security Joes)",
            "author": "Felipe Duarte",
            "title": "PlugX DLL Side-Loading Technique",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/publications/reports/2022/06/27/attacks-on-industrial-control-systems-using-shadowpad/",
            "date": "2022-06-27",
            "organization": "Kaspersky ICS CERT",
            "author": "Artem Snegirev",
            "title": "Attacks on industrial control systems using ShadowPad",
            "categories": [
                "Cobalt Strike",
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader",
            "date": "2022-06-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "BRONZE STARLIGHT Ransomware Operations Use HUI Loader",
            "categories": [
                "ATOMSILO",
                "Cobalt Strike",
                "HUI Loader",
                "LockFile",
                "NightSky",
                "Pandora",
                "PlugX",
                "Quasar RAT",
                "Rook",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-berberoka.pdf",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Operation Earth Berberoka",
            "categories": [
                "reptile",
                "oRAT",
                "Ghost RAT",
                "PlugX",
                "pupy",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2022/05/re027-china-based-apt-mustang-panda-might-have-still-continued-their-attack-activities-against-organizations-in-Vietnam.html",
            "date": "2022-05-20",
            "organization": "VinCSS",
            "author": "m4n0w4r",
            "title": "[RE027] China-based APT Mustang Panda might have still continued their attack activities against organizations in Vietnam",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/space-pirates-tools-and-connections/",
            "date": "2022-05-17",
            "organization": "Positive Technologies",
            "author": "Positive Technologies",
            "title": "Space Pirates: analyzing the tools and connections of a new hacker group",
            "categories": [
                "FormerFirstRAT",
                "PlugX",
                "Poison Ivy",
                "Rovnix",
                "ShadowPad",
                "Zupdax"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/ja/2022/05/HUILoader.html",
            "date": "2022-05-16",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Analysis of HUI Loader",
            "categories": [
                "HUI Loader",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/Asia-22/Thursday-Materials/AS-22-LeonSilvia-NextGenPlugXShadowPad.pdf",
            "date": "2022-05-12",
            "organization": "TEAMT5",
            "author": "Leon Chang",
            "title": "The Next Gen PlugX/ShadowPad? A Dive into the Emerging China-Nexus Modular Trojan, Pangolin8RAT (slides)",
            "categories": [
                "KEYPLUG",
                "Cobalt Strike",
                "CROSSWALK",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "SLIME29",
                "TianWu"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/05/mustang-panda-targets-europe.html",
            "date": "2022-05-05",
            "organization": "Cisco Talos",
            "author": "Jung soo An",
            "title": "Mustang Panda deploys a new wave of malware targeting Europe",
            "categories": [
                "Cobalt Strike",
                "Meterpreter",
                "PlugX",
                "Unidentified 094"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/moshen-dragons-triad-and-error-approach-abusing-security-software-to-sideload-plugx-and-shadowpad/",
            "date": "2022-05-02",
            "organization": "Sentinel LABS",
            "author": "Joey Chen",
            "title": "Moshen Dragon\u2019s Triad-and-Error Approach | Abusing Security Software to Sideload PlugX and ShadowPad",
            "categories": [
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://www.darkreading.com/threat-intelligence/chinese-apt-bronze-president-spy-campaign-russian-military",
            "date": "2022-04-28",
            "organization": "DARKReading",
            "author": "Jai Vijayan",
            "title": "Chinese APT Bronze President Mounts Spy Campaign on Russian Military",
            "categories": [
                "PlugX",
                "MUSTANG PANDA"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-annex-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect (Annex)",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "PlugX",
                "RokRAT",
                "Inception Framework",
                "Red Menshen"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/d/new-apt-group-earth-berberoka-targets-gambling-websites-with-old.html",
            "date": "2022-04-27",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "New APT Group Earth Berberoka Targets Gambling Websites With Old and New Malware",
            "categories": [
                "HelloBot",
                "AsyncRAT",
                "Ghost RAT",
                "HelloBot",
                "PlugX",
                "Quasar RAT",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2022/05/Botconf2022-40-LunghiHorejsi.pdf",
            "date": "2022-04-27",
            "organization": "Trendmicro",
            "author": "Daniel Lunghi",
            "title": "Operation Gambling Puppet",
            "categories": [
                "reptile",
                "oRAT",
                "AsyncRAT",
                "Cobalt Strike",
                "DCRat",
                "Ghost RAT",
                "PlugX",
                "Quasar RAT",
                "Trochilus RAT",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/txt/earth-berberoka-windows-iocs-2.txt",
            "date": "2022-04-27",
            "organization": "Trendmicro",
            "author": "Trendmicro",
            "title": "IOCs for Earth Berberoka - Windows",
            "categories": [
                "AsyncRAT",
                "Cobalt Strike",
                "PlugX",
                "Quasar RAT",
                "Earth Berberoka"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/bronze-president-targets-russian-speakers-with-updated-plugx",
            "date": "2022-04-27",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "BRONZE PRESIDENT Targets Russian Speakers with Updated PlugX",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://redalert.nshc.net/2022/04/14/hacking-activity-of-sectorb-group-in-2021/",
            "date": "2022-04-14",
            "organization": "NSHC RedAlert Labs",
            "author": "NSHC Threatrecon Team",
            "title": "Hacking activity of SectorB Group in 2021 Chinese government supported hacking group SectorB",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://maxkersten.nl/binary-analysis-course/analysis-scripts/ghidra-script-to-handle-stack-strings/",
            "date": "2022-04-12",
            "organization": "Max Kersten's Blog",
            "author": "Max Kersten",
            "title": "Ghidra script to handle stack strings",
            "categories": [
                "CaddyWiper",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/plugx-a-talisman-to-behold.html",
            "date": "2022-03-28",
            "organization": "Trellix",
            "author": "Max Kersten",
            "title": "PlugX: A Talisman to Behold",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/fr/2022/03/25/mustang-pandas-hodur-nouveau-korplug/",
            "date": "2022-03-25",
            "organization": "ESET Research",
            "author": "Alexandre C\u00f4t\u00e9 Cyr",
            "title": "Mustang Panda's Hodur: Old stuff, new variant of Korplug",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://threatpost.com/chinese-apt-combines-fresh-hodur-rat-with-complex-anti-detection/179084/",
            "date": "2022-03-24",
            "organization": "Threat Post",
            "author": "Nate Nelson",
            "title": "Chinese APT Combines Fresh Hodur RAT with Complex Anti-Detection",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-mustang-panda-hacking-campaign-targets-diplomats-isps/",
            "date": "2022-03-23",
            "organization": "BleepingComputer",
            "author": "Bill Toulas",
            "title": "New Mustang Panda hacking campaign targets diplomats, ISPs",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/03/23/mustang-panda-hodur-old-tricks-new-korplug-variant/",
            "date": "2022-03-23",
            "organization": "ESET Research",
            "author": "Alexandre C\u00f4t\u00e9 Cyr",
            "title": "Mustang Panda\u2019s Hodur: Old tricks, new Korplug variant",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/good-bad-and-web-bug-ta416-increases-operational-tempo-against-european",
            "date": "2022-03-07",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "The Good, the Bad, and the Web Bug: TA416 Increases Operational Tempo Against European Governments as Conflict in Ukraine Escalates",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.uscc.gov/sites/default/files/2022-02/Adam_Kozy_Testimony.pdf",
            "date": "2022-02-17",
            "organization": "SinaCyber",
            "author": "Adam Kozy",
            "title": "Testimony before the U.S.-China Economic and Security Review Commission Hearing on \u201cChina\u2019s Cyber Capabilities: Warfare, Espionage, and Implications for the United States\u201d",
            "categories": [
                "PlugX",
                "APT26",
                "APT41"
            ]
        },
        {
            "data_url": "https://cyberandramen.net/2022/01/06/a-gulp-of-plugx/",
            "date": "2022-01-06",
            "organization": "Cyber And Ramen blog",
            "author": "Mike R",
            "title": "A \u201cGULP\u201d of PlugX",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/12/eset_jumping_the_air_gap_wp.pdf",
            "date": "2021-12-01",
            "organization": "ESET Research",
            "author": "Alexis Dorais-Joncas",
            "title": "Jumping the air gap: 15 years of nation\u2011state effort",
            "categories": [
                "Agent.BTZ",
                "Fanny",
                "Flame",
                "Gauss",
                "PlugX",
                "Ramsay",
                "Retro",
                "Stuxnet",
                "USBCulprit",
                "USBferry"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/cybersecurity-threat-spotlight-blackmatter-lockbit-thor",
            "date": "2021-11-18",
            "organization": "Cisco",
            "author": "Josh Pyorre",
            "title": "BlackMatter, LockBit, and THOR",
            "categories": [
                "BlackMatter",
                "LockBit",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=r1zAVX_HnJg",
            "date": "2021-11-04",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Yi-Jhen Hsieh",
            "title": "ShadowPad: the masterpiece of privately sold malware in Chinese espionage",
            "categories": [
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://www.nortonlifelock.com/sites/default/files/2021-10/OPERATION%20EXORCIST%20White%20Paper.pdf",
            "date": "2021-10-18",
            "organization": "NortonLifeLock",
            "author": "Norton Labs",
            "title": "Operation Exorcist - 7 Years of Targeted Attacks against the Roman Catholic Church",
            "categories": [
                "NewBounce",
                "PlugX",
                "Zupdax"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-apt-groups-target-afghan-telecommunications-firm/",
            "date": "2021-09-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "4 Chinese APT Groups Identified Targeting Mail Server of Afghan Telecommunications Firm Roshan",
            "categories": [
                "PlugX",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/enterprise/mcafee-enterprise-atr/operation-harvest-a-deep-dive-into-a-long-term-campaign/",
            "date": "2021-09-14",
            "organization": "McAfee",
            "author": "Christiaan Beek",
            "title": "Operation \u2018Harvest\u2019: A Deep Dive into a Long-term Campaign",
            "categories": [
                "MimiKatz",
                "PlugX",
                "Winnti"
            ]
        },
        {
            "data_url": "https://therecord.media/indonesian-intelligence-agency-compromised-in-suspected-chinese-hack/",
            "date": "2021-09-10",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Indonesian intelligence agency compromised in suspected Chinese hack",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=IRh6R8o1Q7U",
            "date": "2021-09-01",
            "organization": "YouTube (Hack In The Box Security Conference)",
            "author": "Yi-Jhen Hsieh",
            "title": "SHADOWPAD: Chinese Espionage Malware-as-a-Service",
            "categories": [
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=6SDdUVejR2w",
            "date": "2021-09-01",
            "organization": "YouTube (Black Hat)",
            "author": "Aragorn Tseng",
            "title": "Mem2Img: Memory-Resident Malware Detection via Convolution Neural Network",
            "categories": [
                "Cobalt Strike",
                "PlugX",
                "Waterbear"
            ]
        },
        {
            "data_url": "https://conference.hitb.org/hitbsecconf2021sin/materials/D1T1%20-%20%20ShadowPad%20-%20A%20Masterpiece%20of%20Privately%20Sold%20Malware%20in%20Chinese%20Espionage%20-%20Yi-Jhen%20Hsieh%20&%20Joey%20Chen.pdf",
            "date": "2021-08-23",
            "organization": "SentinelOne",
            "author": "Yi-Jhen Hsieh",
            "title": "ShadowPad: the Masterpiece of Privately Sold Malware  in Chinese Espionage",
            "categories": [
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/thor-plugx-variant/",
            "date": "2021-07-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Mike Harbison",
            "title": "THOR: Previously Unseen PlugX Variant Deployed During Microsoft Exchange Server Attacks by PKPLUG Group",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/blog/labs/luminousmoth-plugx-file-exfiltration-and-persistence-revisited",
            "date": "2021-07-21",
            "organization": "Bitdefender",
            "author": "Bogdan Botezatu",
            "title": "LuminousMoth \u2013 PlugX, File Exfiltration and Persistence Revisited",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0616.pdf",
            "date": "2021-06-16",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Threat Activity Group RedFoxtrot Linked to China\u2019s PLA Unit 69010;  Targets Bordering Asian Countries",
            "categories": [
                "Icefog",
                "PcShare",
                "PlugX",
                "Poison Ivy",
                "QuickHeal",
                "DAGGER PANDA"
            ]
        },
        {
            "data_url": "https://blog.xorhex.com/blog/reddeltaplugxchangeup/",
            "date": "2021-06-02",
            "organization": "xorhex blog",
            "author": "Twitter (@xorhex)",
            "title": "RedDelta PlugX Undergoing Changes and Overlapping Again with Mustang Panda PlugX Infrastructure",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://twitter.com/xorhex/status/1399906601562165249?s=20",
            "date": "2021-06-02",
            "organization": "Twitter (@xorhex)",
            "author": "Xorhex",
            "title": "Tweet on new variant of PlugX from RedDelta Group",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://blog.xorhex.com/blog/mustangpandaplugx-2/",
            "date": "2021-05-27",
            "organization": "xorhex blog",
            "author": "Twitter (@xorhex)",
            "title": "Mustang Panda PlugX - Reused Mutex and Folder Found in the Extracted Config",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://blog.xorhex.com/blog/mustangpandaplugx-1/",
            "date": "2021-05-17",
            "organization": "xorhex blog",
            "author": "Twitter (@xorhex)",
            "title": "Mustang Panda PlugX - 45.251.240.55 Pivot",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/asia-21/Friday-Handouts/as-21-Tseng-Mem2Img-Memory-Resident-Malware-Detection-via-Convolution-Neural-Network.pdf",
            "date": "2021-05-07",
            "organization": "TEAMT5",
            "author": "Aragorn Tseng",
            "title": "Mem2Img: Memory-Resident Malware Detection via Convolution Neural Network",
            "categories": [
                "Cobalt Strike",
                "PlugX",
                "Waterbear"
            ]
        },
        {
            "data_url": "https://therecord.media/redecho-group-parks-domains-after-public-exposure/",
            "date": "2021-03-29",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "RedEcho group parks domains after public exposure",
            "categories": [
                "PlugX",
                "ShadowPad",
                "RedEcho"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-group-calypso-exploiting-microsoft-exchange/",
            "date": "2021-03-25",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Suspected Chinese Group Calypso APT Exploiting Vulnerable Microsoft Exchange Servers",
            "categories": [
                "Meterpreter",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/china-linked-ta428-threat-group",
            "date": "2021-03-17",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-linked TA428 Continues to Target Russia and Mongolia IT Companies",
            "categories": [
                "PlugX",
                "Poison Ivy",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0228.pdf",
            "date": "2021-02-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-Linked Group RedEcho Targets the Indian Power Sector Amid Heightened Border Tensions",
            "categories": [
                "Icefog",
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/redecho-targeting-indian-power-sector/",
            "date": "2021-02-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-linked Group RedEcho Targets the Indian Power Sector Amid Heightened Border Tensions",
            "categories": [
                "PlugX",
                "ShadowPad",
                "RedEcho"
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
            "data_url": "https://www.trendmicro.com/en_us/research/21/a/xdr-investigation-uncovers-plugx-unique-technique-in-apt-attack.html",
            "date": "2021-01-20",
            "organization": "Trend Micro",
            "author": "Gilbert Sison",
            "title": "XDR investigation uncovers PlugX, unique technique in APT attack",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/yt0ng/cracking_softcell/main/Cracking_SOFTCLL_TLP_WHITE.pdf",
            "date": "2021-01-15",
            "organization": "Swisscom",
            "author": "Markus Neis",
            "title": "Cracking a Soft Cell is Harder Than You Think",
            "categories": [
                "Ghost RAT",
                "MimiKatz",
                "PlugX",
                "Poison Ivy",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/",
            "date": "2021-01-14",
            "organization": "PTSecurity",
            "author": "PT ESC Threat Intelligence",
            "title": "Higaisa or Winnti? APT41 backdoors, old and new",
            "categories": [
                "Cobalt Strike",
                "CROSSWALK",
                "FunnySwitch",
                "PlugX",
                "ShadowPad"
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
            "data_url": "https://www.bleepingcomputer.com/news/security/chinas-apt-hackers-move-to-ransomware-attacks/",
            "date": "2021-01-04",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "China's APT hackers move to ransomware attacks",
            "categories": [
                "Clambling",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/china-cyber-attacks-the-current-threat-landscape",
            "date": "2020-12-24",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "China cyber attacks: the current threat landscape",
            "categories": [
                "PLEAD",
                "TSCookie",
                "FlowCloud",
                "Lookback",
                "PLEAD",
                "PlugX",
                "Quasar RAT",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop",
            "date": "2020-12-10",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "Operation StealthyTrident: corporate software under attack",
            "categories": [
                "HyperBro",
                "PlugX",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/12/10/luckymouse-ta428-compromise-able-desktop/",
            "date": "2020-12-10",
            "organization": "ESET Research",
            "author": "Mathieu Tartare",
            "title": "Operation StealthyTrident: corporate software under attack",
            "categories": [
                "HyperBro",
                "PlugX",
                "ShadowPad",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia/",
            "date": "2020-12-09",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Targeting Governmental Agencies in East Asia",
            "categories": [
                "Albaniiutas",
                "HyperBro",
                "PlugX",
                "PolPo",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/apt-group-targeting-governmental-agencies-in-east-asia",
            "date": "2020-12-09",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "APT Group Targeting Governmental Agencies in East Asia",
            "categories": [
                "Albaniiutas",
                "HyperBro",
                "PlugX",
                "Tmanger",
                "TA428"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/ta416-goes-ground-and-returns-golang-plugx-malware-loader",
            "date": "2020-11-23",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Research Team",
            "title": "TA416 Goes to Ground and Returns with a Golang PlugX Malware Loader",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/k/weaponizing-open-source-software-for-targeted-attacks.html",
            "date": "2020-11-20",
            "organization": "Trend Micro",
            "author": "Abraham Camba",
            "title": "Weaponizing Open Source Software for Targeted Attacks",
            "categories": [
                "LaZagne",
                "Defray",
                "PlugX"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/11/04/a-new-apt-uses-dll-side-loads-to-killlsomeone/",
            "date": "2020-11-04",
            "organization": "Sophos",
            "author": "Gabor Szappanos",
            "title": "A new APT uses DLL side-loads to \u201cKilllSomeOne\u201d",
            "categories": [
                "KilllSomeOne",
                "PlugX"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q3-2020/99204/",
            "date": "2020-11-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q3 2020",
            "categories": [
                "WellMail",
                "EVILNUM",
                "Janicab",
                "Poet RAT",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "Crimson RAT",
                "CROSSWALK",
                "Dtrack",
                "LODEINFO",
                "MoriAgent",
                "Okrum",
                "PlugX",
                "poisonplug",
                "Rover",
                "ShadowPad",
                "SoreFang",
                "Winnti"
            ]
        },
        {
            "data_url": "https://st.drweb.com/static/new-www/news/2020/october/Study_of_the_ShadowPad_APT_backdoor_and_its_relation_to_PlugX_en.pdf",
            "date": "2020-10-27",
            "organization": "Dr.Web",
            "author": "Dr.Web",
            "title": "Study of the ShadowPad APT backdoor and its relation to PlugX",
            "categories": [
                "Ghost RAT",
                "PlugX",
                "ShadowPad"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/apt41-indictments-china-espionage",
            "date": "2020-09-18",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "APT41: Indictments Put Chinese Espionage Group in the Spotlight",
            "categories": [
                "CROSSWALK",
                "PlugX",
                "poisonplug",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-0915.pdf",
            "date": "2020-09-15",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Back Despite Disruption: RedDelta Resumes Operations",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://threatconnect.com/blog/research-roundup-activity-on-previously-identified-apt33-domains/",
            "date": "2020-09-11",
            "organization": "ThreatConnect",
            "author": "ThreatConnect Research Team",
            "title": "Research Roundup: Activity on Previously Identified APT33 Domains",
            "categories": [
                "Emotet",
                "PlugX",
                "APT33"
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
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-0728.pdf",
            "date": "2020-07-29",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Chinese State-sponsored Group RedDelta Targets the Vatican and Catholic Organizations",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.nttsecurity.com/docs/librariesprovider3/default-document-library/craftypanda-analysis-report",
            "date": "2020-07-28",
            "organization": "NTT",
            "author": "NTT Security",
            "title": "CraftyPanda \u6a19\u7684\u578b\u653b\u6483\u89e3\u6790\u30ec\u30dd\u30fc\u30c8",
            "categories": [
                "Ghost RAT",
                "PlugX"
            ]
        },
        {
            "data_url": "https://risky.biz/whatiswinnti/",
            "date": "2020-07-20",
            "organization": "Risky.biz",
            "author": "Daniel Gordon",
            "title": "What even is Winnti?",
            "categories": [
                "CCleaner Backdoor",
                "Ghost RAT",
                "PlugX",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://or10nlabs.tech/reverse-engineering-the-new-mustang-panda-plugx-downloader/",
            "date": "2020-07-20",
            "organization": "or10nlabs",
            "author": "oR10n",
            "title": "Reverse Engineering the New Mustang Panda PlugX Downloader",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://st.drweb.com/static/new-www/news/2020/july/Study_of_the_APT_attacks_on_state_institutions_in_Kazakhstan_and_Kyrgyzstan_en.pdf",
            "date": "2020-07-20",
            "organization": "Dr.Web",
            "author": "Dr.Web",
            "title": "Study of the APT attacks on state institutions in Kazakhstan and Kyrgyzstan",
            "categories": [
                "Microcin",
                "Mirage",
                "PlugX",
                "WhiteBird"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/chinese-state-hackers-target-hong-kong-catholic-church/",
            "date": "2020-07-15",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "Chinese state hackers target Hong Kong Catholic Church",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://or10nlabs.tech/reverse-engineering-the-mustang-panda-plugx-rat-extracting-the-config/",
            "date": "2020-07-05",
            "organization": "or10nlabs",
            "author": "oR10n",
            "title": "Reverse Engineering the Mustang Panda PlugX RAT \u2013 Extracting the Config",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.contextis.com/en/blog/dll-search-order-hijacking",
            "date": "2020-07-01",
            "organization": "Contextis",
            "author": "Lampros Noutsos",
            "title": "DLL Search Order Hijacking",
            "categories": [
                "Cobalt Strike",
                "PlugX"
            ]
        },
        {
            "data_url": "https://securelist.com/cycldek-bridging-the-air-gap/97157/",
            "date": "2020-06-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Cycldek: Bridging the (air) gap",
            "categories": [
                "8.t Dropper",
                "NewCore RAT",
                "PlugX",
                "USBCulprit",
                "GOBLIN PANDA",
                "Hellsing"
            ]
        },
        {
            "data_url": "https://lab52.io/blog/mustang-panda-recent-activity-dll-sideloading-trojans-with-temporal-c2-servers/",
            "date": "2020-06-02",
            "organization": "Lab52",
            "author": "Jagaimo Kawaii",
            "title": "Mustang Panda Recent Activity: Dll-Sideloading trojans with temporal C2 servers",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://or10nlabs.tech/reverse-engineering-the-mustang-panda-plugx-loader",
            "date": "2020-05-24",
            "organization": "or10nlabs",
            "author": "oR10n",
            "title": "Reverse Engineering the Mustang Panda PlugX Loader",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://twitter.com/stvemillertime/status/1261263000960450562",
            "date": "2020-05-15",
            "organization": "Twitter (@stvemillertime)",
            "author": "Steve Miller",
            "title": "Tweet on SOGU development timeline, including TIGERPLUG IOCs",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://lab52.io/blog/the-energy-reserves-in-the-eastern-mediterranean-sea-and-a-malicious-campaign-of-apt10-against-turkey/",
            "date": "2020-05-14",
            "organization": "Lab52",
            "author": "Dex",
            "title": "The energy reserves in the Eastern Mediterranean Sea and a malicious campaign of APT10 against Turkey",
            "categories": [
                "Cobalt Strike",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://blog.viettelcybersecurity.com/p1-chien-dich-cua-nhom-apt-trung-quoc-goblin-panda-tan-cong-vao-viet-nam-loi-dung-dai-dich-covid-19/",
            "date": "2020-05-01",
            "organization": "Viettel Cybersecurity",
            "author": "Cyberthreat",
            "title": "Chi\u1ebfn d\u1ecbch c\u1ee7a nh\u00f3m APT Trung Qu\u1ed1c Goblin Panda t\u1ea5n c\u00f4ng v\u00e0o Vi\u1ec7t Nam l\u1ee3i d\u1ee5ng \u0111\u1ea1i d\u1ecbch Covid-19 (ph\u1ea7n 1)",
            "categories": [
                "NewCore RAT",
                "PlugX"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/03/re012-phan-tich-ma-doc-loi-dung-dich-COVID-19-de-phat-tan-gia-mao-chi-thi-cua-thu-tuong-Nguyen-Xuan-Phuc-phan2.html",
            "date": "2020-03-19",
            "organization": "VinCSS",
            "author": "m4n0w4r",
            "title": "Ph\u00e2n t\u00edch m\u00e3 \u0111\u1ed9c l\u1ee3i d\u1ee5ng d\u1ecbch Covid-19 \u0111\u1ec3 ph\u00e1t t\u00e1n gi\u1ea3 m\u1ea1o \u201cCh\u1ec9 th\u1ecb c\u1ee7a th\u1ee7 t\u01b0\u1edbng Nguy\u1ec5n Xu\u00e2n Ph\u00fac\u201d - Ph\u1ea7n 2",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/03/re012-phan-tich-ma-doc-loi-dung-dich-COVID-19-de-phat-tan-gia-mao-chi-thi-cua-thu-tuong-Nguyen-Xuan-Phuc.html",
            "date": "2020-03-10",
            "organization": "VinCSS",
            "author": "m4n0w4r",
            "title": "[RE012] Ph\u00e2n t\u00edch m\u00e3 \u0111\u1ed9c l\u1ee3i d\u1ee5ng d\u1ecbch Covid-19 \u0111\u1ec3 ph\u00e1t t\u00e1n gi\u1ea3 m\u1ea1o \u201cCh\u1ec9 th\u1ecb c\u1ee7a th\u1ee7 t\u01b0\u1edbng Nguy\u1ec5n Xu\u00e2n Ph\u00fac\u201d - Ph\u1ea7n 1",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/03/vb2019-paper-pulling-pkplug-adversary-playbook-long-standing-espionage-activity-chinese-nation-state-adversary/",
            "date": "2020-03-02",
            "organization": "Virus Bulletin",
            "author": "Alex Hinchliffe",
            "title": "Pulling the PKPLUG: the adversary playbook for the long-standing espionage activity of a Chinese nation-state adversary",
            "categories": [
                "HenBox",
                "Farseer",
                "PlugX",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://adeo.com.tr/wp-content/uploads/2020/02/APT10_Report.pdf",
            "date": "2020-02-21",
            "organization": "ADEO DFIR",
            "author": "ADEO DFIR",
            "title": "APT10 Threat Analysis Report",
            "categories": [
                "CHINACHOPPER",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/operation-drbcontrol-uncovering-a-cyberespionage-campaign-targeting-gambling-companies-in-southeast-asia",
            "date": "2020-02-18",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Uncovering DRBControl: Inside the Cyberespionage Campaign Targeting Gambling Operations",
            "categories": [
                "Cobalt Strike",
                "HyperBro",
                "PlugX",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "http://www.talent-jump.com/article/2020/02/17/CLAMBLING-A-New-Backdoor-Base-On-Dropbox-en/",
            "date": "2020-02-17",
            "organization": "Talent-Jump Technologies",
            "author": "Theo Chen",
            "title": "CLAMBLING - A New Backdoor Base On Dropbox",
            "categories": [
                "HyperBro",
                "PlugX"
            ]
        },
        {
            "data_url": "https://insights.oem.avira.com/new-wave-of-plugx-targets-hong-kong/",
            "date": "2020-01-31",
            "organization": "Avira",
            "author": "Shahab Hamzeloofard",
            "title": "New wave of PlugX targets Hong Kong",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=C_TmANnbS2k",
            "date": "2020-01-31",
            "organization": "YouTube (Context Information Security)",
            "author": "Contextis",
            "title": "New AVIVORE threat group \u2013 how they operate and managing the risk",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://pylos.co/wp-content/uploads/2020/02/Threat-Intelligence-and-the-Limits-of-Malware-Analysis.pdf",
            "date": "2020-01",
            "organization": "Dragos",
            "author": "Joe Slowik",
            "title": "Threat Intelligence and the Limits of Malware Analysis",
            "categories": [
                "Exaramel",
                "Exaramel",
                "Industroyer",
                "Lookback",
                "NjRAT",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-olive",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE OLIVE",
            "categories": [
                "ANGRYREBEL",
                "PlugX",
                "APT22"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-president",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE PRESIDENT",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "PlugX",
                "MUSTANG PANDA"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-riverside",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE RIVERSIDE",
            "categories": [
                "Anel",
                "ChChes",
                "Cobalt Strike",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT",
                "RedLeaves",
                "APT10"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-union",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE UNION",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "Enfal",
                "Ghost RAT",
                "HttpBrowser",
                "HyperBro",
                "owaauth",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT27"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-overbrook",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE OVERBROOK",
            "categories": [
                "Aveo",
                "DDKONG",
                "IsSpace",
                "PLAINTEE",
                "PlugX",
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-woodland",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE WOODLAND",
            "categories": [
                "PlugX",
                "Zeus",
                "Roaming Tiger"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-atlas",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE ATLAS",
            "categories": [
                "Speculoos",
                "Winnti",
                "ACEHASH",
                "CCleaner Backdoor",
                "CHINACHOPPER",
                "Empire Downloader",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-firestone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE FIRESTONE",
            "categories": [
                "9002 RAT",
                "Derusbi",
                "Empire Downloader",
                "PlugX",
                "Poison Ivy",
                "APT19"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-keystone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE KEYSTONE",
            "categories": [
                "9002 RAT",
                "BLACKCOFFEE",
                "DeputyDog",
                "Derusbi",
                "HiKit",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-express",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE EXPRESS",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "IsSpace",
                "NewCT",
                "PlugX",
                "smac",
                "APT26"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/bronze-president-targets-ngos",
            "date": "2019-12-29",
            "organization": "Secureworks",
            "author": "CTU Research Team",
            "title": "BRONZE PRESIDENT Targets NGOs",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://silascutler.blogspot.com/2019/11/fresh-plugx-october-2019.html",
            "date": "2019-11-16",
            "organization": "Silas Cutler's Blog",
            "author": "Silas Cutler",
            "title": "Fresh PlugX October 2019",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/05/vb2019-paper-apt-cases-exploiting-vulnerabilities-regionspecific-software/",
            "date": "2019-11-11",
            "organization": "Virus Bulletin",
            "author": "Shusei Tomonaga",
            "title": "APT cases exploiting vulnerabilities in region\u2011specific software",
            "categories": [
                "NodeRAT",
                "Emdivi",
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/calypso-apt-2019/",
            "date": "2019-10-31",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "Calypso APT: new group attacking state institutions",
            "categories": [
                "BYEBY",
                "FlyingDutchman",
                "Hussar",
                "PlugX"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20191214125833/https://contextis.com/media/downloads/AVIVORE_An_overview.pdf",
            "date": "2019-10-22",
            "organization": "Contextis",
            "author": "Contextis",
            "title": "AVIVORE - An overview of Tools, Techniques and Procedures (Whitepaper)",
            "categories": [
                "PlugX",
                "Avivore"
            ]
        },
        {
            "data_url": "https://www.computerweekly.com/news/252471769/New-threat-group-behind-Airbus-cyber-attacks-claim-researchers",
            "date": "2019-10-03",
            "organization": "ComputerWeekly",
            "author": "Alex Scroxton",
            "title": "New threat group behind Airbus cyber attacks, claim researchers",
            "categories": [
                "PlugX",
                "Avivore"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/pkplug_chinese_cyber_espionage_group_attacking_asia/",
            "date": "2019-10-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Alex Hinchliffe",
            "title": "PKPLUG: Chinese Cyber Espionage Group Attacking Asia",
            "categories": [
                "HenBox",
                "Farseer",
                "PlugX"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0096",
            "date": "2019-09-23",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "APT41",
            "categories": [
                "Derusbi",
                "MESSAGETAP",
                "Winnti",
                "ASPXSpy",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "MimiKatz",
                "NjRAT",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "ZXShell",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=qEwBGGgWgOM",
            "date": "2019-06-19",
            "organization": "YouTube (44CON Information Security Conference)",
            "author": "Kevin O\u2019Reilly",
            "title": "The Malware CAPE: Automated Extraction of Configuration and Payloads from Sophisticated Malware",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://speakerdeck.com/ashley920/into-the-fog-the-return-of-icefog-apt",
            "date": "2019-06-03",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Into the Fog - The Return of ICEFOG APT",
            "categories": [
                "Icefog",
                "PlugX",
                "Sarhust"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/uncovering-new-activity-by-apt-",
            "date": "2019-05-24",
            "organization": "Fortinet",
            "author": "Ben Hunter",
            "title": "Uncovering new Activity by APT10",
            "categories": [
                "PlugX",
                "Quasar RAT"
            ]
        },
        {
            "data_url": "https://threatrecon.nshc.net/2019/03/19/sectorm04-targeting-singapore-custom-malware-analysis/",
            "date": "2019-03-19",
            "organization": "NSHC",
            "author": "ThreatRecon Team",
            "title": "SectorM04 Targeting Singapore \u2013 An Analysis",
            "categories": [
                "PlugX",
                "Termite"
            ]
        },
        {
            "data_url": "https://www.cyber.gov.au/sites/default/files/2019-03/msp_investigation_report.pdf",
            "date": "2018-12-14",
            "organization": "Australian Cyber Security Centre",
            "author": "ASD",
            "title": "Investigationreport: Compromise of an Australian companyvia their Managed Service Provider",
            "categories": [
                "PlugX",
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://countuponsecurity.com/2018/05/09/malware-analysis-plugx-part-2/",
            "date": "2018-05-09",
            "organization": "COUNT UPON SECURITY",
            "author": "Luis Rocha",
            "title": "Malware Analysis - PlugX - Part 2",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://securelist.com/time-of-death-connected-medicine/84315/",
            "date": "2018-03-13",
            "organization": "Kaspersky Labs",
            "author": "Denis Makrushin",
            "title": "Time of death? A therapeutic postmortem of connected medicine",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://countuponsecurity.com/2018/02/04/malware-analysis-plugx/",
            "date": "2018-02-04",
            "organization": "COUNT UPON SECURITY",
            "author": "Luis Rocha",
            "title": "MALWARE ANALYSIS \u2013 PLUGX",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.lac.co.jp/lacwatch/people/20171218_001445.html",
            "date": "2017-12-18",
            "organization": "LAC",
            "author": "Yoshihiro Ishikawa",
            "title": "Relationship between PlugX and attacker group \"DragonOK\"",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/06/unit42-paranoid-plugx/",
            "date": "2017-06-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tom Lancaster",
            "title": "Paranoid PlugX",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0001/",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Axiom",
            "categories": [
                "Derusbi",
                "9002 RAT",
                "BLACKCOFFEE",
                "Derusbi",
                "Ghost RAT",
                "HiKit",
                "PlugX",
                "ZXShell",
                "APT17"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/alerts/TA17-117A",
            "date": "2017-04-27",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (TA17-117A): Intrusions Affecting Multiple Victims Across Multiple Sectors",
            "categories": [
                "PlugX",
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2017/04/redleaves---malware-based-on-open-source-rat.html",
            "date": "2017-04-03",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "RedLeaves - Malware Based on Open Source RAT",
            "categories": [
                "PlugX",
                "RedLeaves",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf",
            "date": "2017-04",
            "organization": "PricewaterhouseCoopers",
            "author": "PricewaterhouseCoopers",
            "title": "Operation Cloud Hopper: Technical Annex",
            "categories": [
                "ChChes",
                "PlugX",
                "Quasar RAT",
                "RedLeaves",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "http://blog.jpcert.or.jp/2017/02/plugx-poison-iv-919a.html",
            "date": "2017-02-21",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "PlugX + Poison Ivy = PlugIvy? - PlugX Integrating Poison Ivy\u2019s Code",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.rsa.com/content/dam/pdfs/2-2017/kingslayer-a-supply-chain-attack.pdf",
            "date": "2017-02-13",
            "organization": "RSA",
            "author": "RSA Research",
            "title": "KINGSLAYER \u2013 A SUPPLY CHAIN ATTACK",
            "categories": [
                "CodeKey",
                "PlugX"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2016/08/unpacking-the-spyware-disguised-as-antivirus/",
            "date": "2016-08-25",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Unpacking the spyware disguised as antivirus",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/security_report_20160613.pdf",
            "date": "2016-06-13",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Survey of the actual situation of the large-scale cyber spy activity that hit Japan | 1st edition",
            "categories": [
                "Emdivi",
                "PlugX"
            ]
        },
        {
            "data_url": "https://community.rsa.com/thread/185439",
            "date": "2016-01-22",
            "organization": "RSA Link",
            "author": "Norton Santos",
            "title": "PlugX APT Malware",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://app.box.com/s/z1uanuv1vn3vw5iket1r6bqrmlra0gpn",
            "date": "2015-08",
            "organization": "Arbor Networks",
            "author": "ASERT Team",
            "title": "Uncovering the Seven Pointed Dagger",
            "categories": [
                "9002 RAT",
                "EvilGrab",
                "PlugX",
                "Trochilus RAT",
                "APT9"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200509171721/https://raw.githubusercontent.com/fdiskyou/threat-INTel/master/2015/GlobalThreatIntelReport.pdf",
            "date": "2015-02-06",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "CrowdStrike Global Threat Intel Report 2014",
            "categories": [
                "BlackPOS",
                "CryptoLocker",
                "Derusbi",
                "Elise",
                "Enfal",
                "EvilGrab",
                "Gameover P2P",
                "HttpBrowser",
                "Medusa",
                "Mirage",
                "Naikon",
                "NetTraveler",
                "pirpi",
                "PlugX",
                "Poison Ivy",
                "Sakula RAT",
                "Sinowal",
                "sykipot",
                "taidoor"
            ]
        },
        {
            "data_url": "http://blog.jpcert.or.jp/2015/01/analysis-of-a-r-ff05.html",
            "date": "2015-01-29",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Analysis of a Recent PlugX Variant - \u201cP2P PlugX\u201d",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.sophos.com/en-us/medialibrary/pdfs/technical%20papers/plugx-thenextgeneration.pdf",
            "date": "2014-06-27",
            "organization": "SophosLabs",
            "author": "Gabor Szappanos",
            "title": "PlugX - The Next Generation",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2014/06/clandestine-fox-part-deux.html",
            "date": "2014-06-10",
            "organization": "FireEye",
            "author": "Mike Scott",
            "title": "Clandestine Fox, Part Deux",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "http://blog.airbuscybersecurity.com/post/2014/01/plugx-some-uncovered-points.html",
            "date": "2014-01-06",
            "organization": "Airbus",
            "author": "Fabien Perigaud",
            "title": "PlugX: some uncovered points",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://circl.lu/assets/files/tr-12/tr-12-circl-plugx-analysis-v1.pdf",
            "date": "2013-03-29",
            "organization": "Computer Incident Response Center Luxembourg",
            "author": "CIRCL",
            "title": "Analysis Report (TLP:WHITE) Analysis of a PlugX variant (PlugX version 7.0)",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200424035112/https://go.contextis.com/rs/140-OCV-459/images/White%20Paper_PlugX%20-%20Payload%20Extraction.pdf",
            "date": "2013-03-26",
            "organization": "Contextis",
            "author": "Kevin O\u2019Reilly",
            "title": "PlugX\u2013Payload Extraction",
            "categories": [
                "PlugX"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210925164035/https://blog.trendmicro.com/trendlabs-security-intelligence/bkdr_rarstone-new-rat-to-watch-out-for/",
            "date": "2013-02-27",
            "organization": "Trend Micro",
            "author": "Abraham Camba",
            "title": "BKDR_RARSTONE: New RAT to Watch Out For",
            "categories": [
                "PlugX",
                "Naikon"
            ]
        },
        {
            "data_url": "https://tracker.h3x.eu/info/290",
            "date": "2012-02-10",
            "organization": "tracker.h3x.eu",
            "author": "Malware Corpus Tracker",
            "title": "Info for Family: plugx",
            "categories": [
                "PlugX"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "plugx",
            "procedure_code": "s0013",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0013",
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
                    "procedure_description": "plugx allows actors to spawn a reverse shell on a victim.[162][262]"
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
                    "procedure_description": "plugx can use the windows api functions getprocaddress, loadlibrary, and createprocess to execute another process.[136][137]"
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
                    "procedure_description": "plugx adds run key entries in the registry to establish persistence.[194][56][195]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "plugx can be added as a service to establish persistence. plugx also has a module to change service configurations as well as start, control, and delete services.[89][90][91][92][93]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "plugx has the ability to use dll search order hijacking for installation on targeted systems.[28]"
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
                    "procedure_description": "plugx has used dll side-loading to evade anti-virus.[4][27][51][36][52][17][53]"
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
                    "procedure_description": "plugx adds run key entries in the registry to establish persistence.[194][56][195]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "plugx can be added as a service to establish persistence. plugx also has a module to change service configurations as well as start, control, and delete services.[89][90][91][92][93]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "plugx has the ability to use dll search order hijacking for installation on targeted systems.[28]"
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
                    "procedure_description": "plugx has used dll side-loading to evade anti-virus.[4][27][51][36][52][17][53]"
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
                    "procedure_description": "plugx decompresses and decrypts itself using the microsoft api call rtldecompressbuffer.[172][53][173]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "plugx can modify the characteristics of folders to hide them from the compromised user.[38]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "plugx has the ability to use dll search order hijacking for installation on targeted systems.[28]"
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
                    "procedure_description": "plugx has used dll side-loading to evade anti-virus.[4][27][51][36][52][17][53]"
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
                    "procedure_description": "in one instance, menupass added plugx as a service with a display name of \"corel writing tools utility.\"[55]"
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
                    "procedure_description": "plugx has been disguised as legitimate adobe and potplayer files.[123]"
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
                    "procedure_description": "plugx has a module to create, delete, or modify registry keys.[118]"
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
                    "procedure_description": "plugx can use api hashing and modify the names of strings to evade detection.[78][225]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1127.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1127/001",
                    "technique_name": "trusted developer utilities proxy execution : msbuild",
                    "technique_description": "adversaries may use msbuild to proxy execution of code through a trusted windows utility. msbuild.exe (microsoft build engine) is a software build platform used by visual studio. it handles xml formatted project files that define requirements for loading and building various platforms and configurations.",
                    "procedure_description": "a version of plugx loads as shellcode within a .net framework project using msbuild.exe, presumably to bypass application control techniques.[6]"
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
                    "procedure_description": "plugx checks if vmware tools is running in the background by searching for any process named \"vmtoolsd\".[40]"
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
                    "procedure_description": "plugx has a module for capturing keystrokes per process including window titles.[133]"
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
                    "procedure_description": "plugx has a module to enumerate drives and find files recursively.[230][231]"
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
                    "procedure_description": "plugx has a module to enumerate network shares.[43]"
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
                    "procedure_description": "plugx has a module to list the processes running on a machine.[198]"
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
                    "procedure_description": "plugx can enumerate and query for information contained within the windows registry.[67][68]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "plugx has a module for enumerating tcp and udp network connections and associated processes using the netstat command.[63]"
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
                    "procedure_description": "plugx checks if vmware tools is running in the background by searching for any process named \"vmtoolsd\".[40]"
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
                    "procedure_description": "plugx has a module for capturing keystrokes per process including window titles.[133]"
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
                    "procedure_description": "plugx allows the operator to capture screenshots.[120]"
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
                    "procedure_description": "plugx can be configured to use http for command and control.[159][247]"
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
                    "procedure_description": "plugx can be configured to use dns for command and control.[32]"
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
                    "procedure_description": "plugx can use rc4 encryption in c2 communications.[107]"
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
                    "procedure_description": "plugx has a module to download and execute files on the compromised machine.[347][348]"
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
                    "procedure_description": "plugx can be configured to use raw tcp or udp for command and control.[53]"
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
                    "procedure_description": "plugx uses pastebin to store c2 addresses.[16]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};