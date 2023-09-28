var threatdata = {
    "name": "PlugX",
    "alias": "PlugX, Destroy RAT, DestroyRAT, Korplug, Sogu, Kaba, Xamtrav, Agent.dhwf, RedDelta, TIGERPLUG, Thoper, TVT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2023-04-25",
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
            "last_update": "2023-04-18 06:24:53",
            "tags": [
                "PlugX",
                "APT",
                "apt",
                "mustangpanda",
                "C2",
                "MustangPanda",
                "plugx"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "109.123.230.56:8080",
                        "timestamp": "2023-04-18 06:24:52"
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
                        "timestamp": "2023-04-18 06:03:06"
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
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "54.249.142.61:443",
                        "timestamp": "2023-04-18 06:03:03"
                    },
                    {
                        "value": "114.29.254.201:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "124.223.102.72:8080",
                        "timestamp": "2023-04-18 06:24:52"
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
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "156.247.10.118:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "158.247.222.2:8080",
                        "timestamp": "2023-04-18 06:24:52"
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
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "107.155.55.15:8080",
                        "timestamp": "2023-04-12 07:02:50"
                    },
                    {
                        "value": "107.155.56.134:8080",
                        "timestamp": "2023-04-18 06:24:52"
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
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "8.218.37.29:8080",
                        "timestamp": "2023-04-18 06:24:52"
                    },
                    {
                        "value": "8.218.191.58:8080",
                        "timestamp": "2023-04-18 06:24:52"
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
                        "timestamp": "2023-04-18 06:24:52"
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
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "112.196.204.141:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "103.218.243.167:443",
                        "timestamp": "2023-04-12 07:01:01"
                    },
                    {
                        "value": "104.199.159.226:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "107.155.55.15:443",
                        "timestamp": "2023-04-12 07:01:01"
                    },
                    {
                        "value": "107.173.63.250:443",
                        "timestamp": "2023-04-18 06:03:05"
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
                        "timestamp": "2023-04-18 06:03:04"
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
                        "timestamp": "2023-04-12 07:00:57"
                    },
                    {
                        "value": "45.32.119.152:443",
                        "timestamp": "2023-04-12 07:00:57"
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
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "207.148.97.160:443",
                        "timestamp": "2023-04-18 06:03:07"
                    },
                    {
                        "value": "149.28.25.119:443",
                        "timestamp": "2023-04-18 06:03:06"
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
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "156.247.10.118:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "158.247.222.2:443",
                        "timestamp": "2023-04-18 06:03:06"
                    },
                    {
                        "value": "158.247.238.22:443",
                        "timestamp": "2023-04-03 10:15:40"
                    },
                    {
                        "value": "114.29.254.94:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "114.29.254.126:443",
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "114.29.254.201:443",
                        "timestamp": "2023-04-18 06:03:05"
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
                        "timestamp": "2023-04-18 06:03:05"
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
                        "timestamp": "2023-04-18 06:03:05"
                    },
                    {
                        "value": "108.61.163.91:443",
                        "timestamp": "2023-04-18 06:03:05"
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
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.94.76.169:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.94.76.183:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "103.113.11.78:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "72.18.215.38:443",
                        "timestamp": "2023-04-18 06:03:04"
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
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "63.141.237.100:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "63.141.237.208:443",
                        "timestamp": "2023-04-18 06:03:04"
                    },
                    {
                        "value": "64.44.184.105:443",
                        "timestamp": "2023-04-18 06:03:04"
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
                        "timestamp": "2023-04-18 06:03:03"
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
                        "timestamp": "2023-04-18 06:03:03"
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
                        "timestamp": "2023-04-18 06:03:02"
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
                        "timestamp": "2023-04-12 07:00:56"
                    },
                    {
                        "value": "5.255.88.185:443",
                        "timestamp": "2023-04-18 06:03:02"
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
                "domain": [
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
    "last_ioc_update": "2023-04-18 06:24:53",
    "mitre": [],
    "file_name": "plugx"
};