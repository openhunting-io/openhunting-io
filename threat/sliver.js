var threatdata = {
    "name": "Sliver",
    "alias": "Sliver",
    "category": "Tools",
    "type": "Vulnerability scanner",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "Sliver",
        "names": [
            {
                "name": "Sliver"
            }
        ],
        "description": "Sliver is an open source, cross-platform adversary simulation/red team platform, it can be used by organizations of all sizes to perform security testing. Sliver's implants support C2 over Mutual TLS (mTLS), WireGuard, HTTP(S), and DNS. Implants are dynamically compiled with unique X.509 certificates signed by a per-instance certificate authority generated when you first run the binary.",
        "category": "Tools",
        "type": [
            "Vulnerability scanner"
        ],
        "information": [
            "https://github.com/BishopFox/sliver/tree/6c02971b54831884d30407b632a379947dd289ad",
            "https://www.cybereason.com/blog/sliver-c2-leveraged-by-many-threat-actors",
            "https://asec.ahnlab.com/en/47088/",
            "https://asec.ahnlab.com/en/55652/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0633/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sliver"
        ],
        "uuid": "45579150-0bcf-4941-9e69-3326d4181e54",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Sliver",
            "malware_alias": null,
            "malware": "win.sliver",
            "last_update": "2023-09-26 10:46:33",
            "tags": [
                "CHINATELECOM-JIANGSU-WUXI-INTERNATIONAL-IDC Jiangsu Wuxi International IDC network",
                "CLOUDIE-AS-AP Cloudie Limited",
                "Sliver",
                "ASN-QUADRANET-GLOBAL",
                "TRANSIP-AS Amsterdam the Netherlands",
                "HWCSNET Huawei Cloud Service data center",
                "DIGITALOCEAN-ASN",
                "sliver",
                "XNNET",
                "M247",
                "PONYNET",
                "CLOUDBACKBONE",
                "CHINANET-IDC-BJ-AP IDC China Telecommunications Corporation",
                "EDGECENTERLLC",
                "KRAUD-AS",
                "AS-COLOCROSSING",
                "VDSINA-AS",
                "ORACLE-BMC-31898",
                "MICROSOFT-CORP-MSN-AS-BLOCK",
                "SMARTAPE",
                "TENCENT-NET-AP Shenzhen Tencent Computer Systems Company Limited",
                "BTHOSTER",
                "AS_DELIS",
                "LITESERVER",
                "GIR-AS",
                "IPTELECOM-AS-AP IPTELECOM Global",
                "ESTNOC-GLOBAL",
                "GOOGLE-2",
                "ALEXHOST",
                "LEASEWEB-USA-MIA",
                "CHINANET-JIANGSU-PROVINCE-IDC AS Number for CHINANET jiangsu province backbone",
                "AS-REG",
                "VH-GLOBAL VH Global Limited",
                "CHANGWAY-AS",
                "CHERRYSERVERS1-AS",
                "RETNNET-AS",
                "GREENFLOID-AS",
                "FLYSERVERS-ASN",
                "COMBAHTON combahton GmbH",
                "AS-GLOBALTELEHOST",
                "UUNET",
                "ASBAXETN",
                "TENCENT-NET-AP-CN Tencent Building Kejizhongyi Avenue",
                "AS-CHOOPA",
                "ROGERS-COMMUNICATIONS",
                "OWL-AS-AP Owl Limited",
                "NEXEON",
                "MIRHOSTING",
                "ATLANTIC-NET-1",
                "STARK-INDUSTRIES",
                "AS40676",
                "ARTNET",
                "DEDIPATH-LLC",
                "UNMANAGED-DEDICATED-SERVERS",
                "GIGABIT-MY Gigabit Hosting Sdn Bhd",
                "UCLOUD-HK-AS-AP UCLOUD INFORMATION TECHNOLOGY HK LIMITED",
                "HVC-AS",
                "AKAMAI-AP Akamai Technologies Inc.",
                "BLNWX",
                "ASRELINK",
                "NETSEC-HK Netsec Limited",
                "NFORCE",
                "CHINANET-BACKBONE No.31Jin-rong Street",
                "MULTA-ASN1",
                "PEG-SV",
                "TOPWAY-AS-AP TOPWAY GLOBAL LIMITED",
                "***************************************",
                "AS-HOSTINGER",
                "SHOCK-1",
                "NET23-AS",
                "GOOGLE-CLOUD-PLATFORM",
                "TWC-11351-NORTHEAST",
                "NCRYPTD",
                "PEGTECHINC",
                "SERVERFIELD-AS Serverfield Co. Ltd.",
                "INFIUM",
                "AMAZON-AES",
                "CNSERVERS",
                "BCPL-SG BGPNET Global ASN",
                "NICEIT",
                "HWCLOUDS-AS-AP HUAWEI CLOUDS",
                "MTW-AS",
                "ALIBABA-CN-NET Hangzhou Alibaba Advertising Co.Ltd.",
                "GODADDY-SXB",
                "RU-JSCIOT",
                "BELCLOUD",
                "SERVINGA-UK",
                "IT7NET",
                "AKAMAI-LINODE-AP Akamai Connected Cloud",
                "Online SAS",
                "MIVOCLOUD",
                "WZCOM-",
                "SOLLUTIUM-NL",
                "CONTABO",
                "AS-26496-GO-DADDY-COM-LLC",
                "THE-1984-AS",
                "VELIANET-AS velia.net Internetdienste GmbH",
                "VPSNET-AS",
                "ALIBABA-CN-NET Alibaba US Technology Co. Ltd.",
                "IST-AS",
                "AMAZON-02",
                "ZAPPIE-HOST-AS Zappie Host",
                "ABSTRACT",
                "HOSTMAZE HOSTMAZE",
                "PUFFERFISH-STUDIOS",
                "CITISCLOUD-AS-AP CITIS CLOUD GROUP LIMITED",
                "MOACKCOLTD-AS-AP MOACK.Co.LTD",
                "SPECTRAIP SpectraIP B.V.",
                "INC-PARTNERS-365",
                "DEDICATED",
                "LEASEWEB-USA-PHX",
                "OVH",
                "ASBAXET",
                "DTAG Internet service provider operations",
                "HETZNER-AS"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "154.53.35.50:2376",
                        "timestamp": "2023-09-26 10:46:33"
                    },
                    {
                        "value": "34.69.252.38:8083",
                        "timestamp": "2023-09-26 10:46:32"
                    },
                    {
                        "value": "44.214.190.129:8083",
                        "timestamp": "2023-09-26 10:46:32"
                    },
                    {
                        "value": "34.77.164.25:443",
                        "timestamp": "2023-09-26 10:46:32"
                    },
                    {
                        "value": "145.239.85.234:2376",
                        "timestamp": "2023-09-26 10:46:31"
                    },
                    {
                        "value": "54.227.170.33:8083",
                        "timestamp": "2023-09-26 04:46:29"
                    },
                    {
                        "value": "52.56.38.0:443",
                        "timestamp": "2023-09-26 04:46:19"
                    },
                    {
                        "value": "34.126.163.54:2376",
                        "timestamp": "2023-09-26 04:46:18"
                    },
                    {
                        "value": "35.238.243.118:8083",
                        "timestamp": "2023-09-26 04:46:18"
                    },
                    {
                        "value": "34.126.74.251:2376",
                        "timestamp": "2023-09-26 04:45:37"
                    },
                    {
                        "value": "34.95.37.163:2376",
                        "timestamp": "2023-09-26 04:45:37"
                    },
                    {
                        "value": "31.172.83.48:2376",
                        "timestamp": "2023-09-25 18:20:40"
                    },
                    {
                        "value": "52.86.72.243:8083",
                        "timestamp": "2023-09-25 18:20:39"
                    },
                    {
                        "value": "18.176.32.89:2376",
                        "timestamp": "2023-09-25 18:20:38"
                    },
                    {
                        "value": "3.75.222.122:2376",
                        "timestamp": "2023-09-25 18:20:38"
                    },
                    {
                        "value": "35.168.213.32:8083",
                        "timestamp": "2023-09-25 18:20:37"
                    },
                    {
                        "value": "31.147.205.87:8081",
                        "timestamp": "2023-09-25 18:20:36"
                    },
                    {
                        "value": "3.79.95.174:2376",
                        "timestamp": "2023-09-25 09:06:11"
                    },
                    {
                        "value": "52.56.159.3:2376",
                        "timestamp": "2023-09-25 05:17:26"
                    },
                    {
                        "value": "176.31.21.120:2376",
                        "timestamp": "2023-09-25 05:16:58"
                    },
                    {
                        "value": "54.198.73.201:8083",
                        "timestamp": "2023-09-25 05:16:47"
                    },
                    {
                        "value": "45.9.150.109:8888",
                        "timestamp": "2023-09-24 18:45:43"
                    },
                    {
                        "value": "52.4.122.136:2376",
                        "timestamp": "2023-09-24 16:08:35"
                    },
                    {
                        "value": "88.218.224.182:8443",
                        "timestamp": "2023-09-24 16:08:34"
                    },
                    {
                        "value": "88.218.224.182:443",
                        "timestamp": "2023-09-24 16:08:34"
                    },
                    {
                        "value": "34.71.72.45:8083",
                        "timestamp": "2023-09-24 09:46:30"
                    },
                    {
                        "value": "18.219.46.104:443",
                        "timestamp": "2023-09-24 08:46:46"
                    },
                    {
                        "value": "35.216.181.214:2376",
                        "timestamp": "2023-09-24 07:04:46"
                    },
                    {
                        "value": "35.232.164.7:8083",
                        "timestamp": "2023-09-24 07:04:46"
                    },
                    {
                        "value": "65.21.123.66:2376",
                        "timestamp": "2023-09-24 07:04:45"
                    },
                    {
                        "value": "13.91.106.22:8083",
                        "timestamp": "2023-09-24 07:04:45"
                    },
                    {
                        "value": "35.247.3.222:443",
                        "timestamp": "2023-09-24 07:04:45"
                    },
                    {
                        "value": "167.235.244.179:2376",
                        "timestamp": "2023-09-24 07:04:44"
                    },
                    {
                        "value": "121.5.59.64:443",
                        "timestamp": "2023-09-24 07:04:44"
                    },
                    {
                        "value": "5.78.102.166:2376",
                        "timestamp": "2023-09-24 07:04:43"
                    },
                    {
                        "value": "113.4.19.28:2376",
                        "timestamp": "2023-09-24 07:04:42"
                    },
                    {
                        "value": "54.185.36.34:8083",
                        "timestamp": "2023-09-24 07:04:42"
                    },
                    {
                        "value": "3.33.238.117:8083",
                        "timestamp": "2023-09-24 07:04:41"
                    },
                    {
                        "value": "129.80.81.64:2376",
                        "timestamp": "2023-09-24 07:04:39"
                    },
                    {
                        "value": "35.203.17.14:2376",
                        "timestamp": "2023-09-24 07:04:39"
                    },
                    {
                        "value": "3.88.34.220:2376",
                        "timestamp": "2023-09-24 07:04:39"
                    },
                    {
                        "value": "34.90.195.133:2376",
                        "timestamp": "2023-09-24 07:04:38"
                    },
                    {
                        "value": "35.222.116.63:8083",
                        "timestamp": "2023-09-24 07:04:38"
                    },
                    {
                        "value": "3.232.215.227:8083",
                        "timestamp": "2023-09-24 07:04:38"
                    },
                    {
                        "value": "34.143.209.90:2376",
                        "timestamp": "2023-09-24 07:04:37"
                    },
                    {
                        "value": "3.32.156.37:2376",
                        "timestamp": "2023-09-24 07:04:36"
                    },
                    {
                        "value": "34.143.153.255:2376",
                        "timestamp": "2023-09-24 07:04:36"
                    },
                    {
                        "value": "5.161.206.45:2376",
                        "timestamp": "2023-09-24 07:04:35"
                    },
                    {
                        "value": "162.55.173.180:2376",
                        "timestamp": "2023-09-24 07:04:35"
                    },
                    {
                        "value": "69.64.160.107:443",
                        "timestamp": "2023-09-24 07:04:35"
                    },
                    {
                        "value": "80.240.21.102:2376",
                        "timestamp": "2023-09-24 07:04:32"
                    },
                    {
                        "value": "51.195.252.147:443",
                        "timestamp": "2023-09-24 07:04:31"
                    },
                    {
                        "value": "104.197.117.123:443",
                        "timestamp": "2023-09-24 07:04:31"
                    },
                    {
                        "value": "13.52.234.113:443",
                        "timestamp": "2023-09-24 07:04:30"
                    },
                    {
                        "value": "116.203.193.154:443",
                        "timestamp": "2023-09-24 07:04:29"
                    },
                    {
                        "value": "104.198.157.56:8083",
                        "timestamp": "2023-09-24 07:04:29"
                    },
                    {
                        "value": "159.75.222.179:2376",
                        "timestamp": "2023-09-24 07:04:29"
                    },
                    {
                        "value": "81.92.234.5:443",
                        "timestamp": "2023-09-24 07:04:28"
                    },
                    {
                        "value": "20.121.237.146:443",
                        "timestamp": "2023-09-24 07:04:28"
                    },
                    {
                        "value": "35.240.180.169:2376",
                        "timestamp": "2023-09-24 07:04:27"
                    },
                    {
                        "value": "185.142.184.201:2376",
                        "timestamp": "2023-09-24 07:04:26"
                    },
                    {
                        "value": "178.128.236.145:2376",
                        "timestamp": "2023-09-24 07:03:48"
                    },
                    {
                        "value": "116.203.205.230:443",
                        "timestamp": "2023-09-24 07:03:47"
                    },
                    {
                        "value": "185.164.172.245:26668",
                        "timestamp": "2023-09-22 06:45:54"
                    },
                    {
                        "value": "185.164.172.245:8888",
                        "timestamp": "2023-09-22 06:45:53"
                    },
                    {
                        "value": "43.133.231.48:45887",
                        "timestamp": "2023-09-22 06:45:42"
                    },
                    {
                        "value": "43.133.231.48:80",
                        "timestamp": "2023-09-22 06:45:41"
                    },
                    {
                        "value": "114.118.5.136:50051",
                        "timestamp": "2023-09-22 06:45:29"
                    },
                    {
                        "value": "114.118.5.136:9443",
                        "timestamp": "2023-09-22 06:45:29"
                    },
                    {
                        "value": "118.184.186.182:42937",
                        "timestamp": "2023-09-22 06:45:25"
                    },
                    {
                        "value": "45.63.7.212:8888",
                        "timestamp": "2023-09-22 05:57:56"
                    },
                    {
                        "value": "62.109.24.105:8888",
                        "timestamp": "2023-09-21 18:45:33"
                    },
                    {
                        "value": "62.109.24.105:31337",
                        "timestamp": "2023-09-21 18:45:32"
                    },
                    {
                        "value": "13.245.183.173:8999",
                        "timestamp": "2023-09-21 18:45:11"
                    },
                    {
                        "value": "137.184.96.202:8085",
                        "timestamp": "2023-09-21 11:26:27"
                    },
                    {
                        "value": "137.184.96.202:8086",
                        "timestamp": "2023-09-21 11:26:27"
                    },
                    {
                        "value": "137.184.96.202:8080",
                        "timestamp": "2023-09-21 11:26:25"
                    },
                    {
                        "value": "137.184.96.202:80",
                        "timestamp": "2023-09-21 11:26:24"
                    },
                    {
                        "value": "158.247.238.231:20000",
                        "timestamp": "2023-09-20 18:45:29"
                    },
                    {
                        "value": "114.55.58.137:59317",
                        "timestamp": "2023-09-20 06:46:04"
                    },
                    {
                        "value": "193.233.48.200:8888",
                        "timestamp": "2023-09-20 06:45:43"
                    },
                    {
                        "value": "193.233.48.200:9090",
                        "timestamp": "2023-09-20 06:45:42"
                    },
                    {
                        "value": "118.25.142.205:6553",
                        "timestamp": "2023-09-19 18:45:47"
                    },
                    {
                        "value": "158.247.216.215:8888",
                        "timestamp": "2023-09-19 06:45:19"
                    },
                    {
                        "value": "158.247.216.215:31337",
                        "timestamp": "2023-09-19 06:45:17"
                    },
                    {
                        "value": "138.68.123.125:10770",
                        "timestamp": "2023-09-16 18:45:54"
                    },
                    {
                        "value": "52.74.242.200:8882",
                        "timestamp": "2023-09-16 18:45:15"
                    },
                    {
                        "value": "217.182.170.11:8888",
                        "timestamp": "2023-09-16 18:45:29"
                    },
                    {
                        "value": "217.182.170.11:31337",
                        "timestamp": "2023-09-12 18:45:41"
                    },
                    {
                        "value": "206.188.197.227:38090",
                        "timestamp": "2023-09-12 06:45:14"
                    },
                    {
                        "value": "118.193.37.157:31337",
                        "timestamp": "2023-09-07 18:45:44"
                    },
                    {
                        "value": "172.233.240.65:8888",
                        "timestamp": "2023-09-07 18:45:11"
                    },
                    {
                        "value": "172.233.240.65:31337",
                        "timestamp": "2023-09-07 18:45:09"
                    },
                    {
                        "value": "43.230.161.37:1521",
                        "timestamp": "2023-09-06 06:45:27"
                    },
                    {
                        "value": "43.230.161.37:55556",
                        "timestamp": "2023-09-06 06:45:26"
                    },
                    {
                        "value": "81.161.229.45:31337",
                        "timestamp": "2023-09-05 18:45:22"
                    },
                    {
                        "value": "81.161.229.45:8888",
                        "timestamp": "2023-09-05 18:45:21"
                    },
                    {
                        "value": "146.56.198.25:31337",
                        "timestamp": "2023-09-03 18:45:19"
                    },
                    {
                        "value": "146.56.198.25:8888",
                        "timestamp": "2023-09-03 18:45:18"
                    },
                    {
                        "value": "188.127.227.207:31337",
                        "timestamp": "2023-09-03 06:45:40"
                    },
                    {
                        "value": "188.127.227.207:8888",
                        "timestamp": "2023-09-03 06:45:39"
                    },
                    {
                        "value": "15.237.24.169:42000",
                        "timestamp": "2023-09-02 18:45:33"
                    },
                    {
                        "value": "152.89.170.203:5050",
                        "timestamp": "2023-08-31 06:35:04"
                    },
                    {
                        "value": "176.123.1.132:8088",
                        "timestamp": "2023-08-31 06:30:54"
                    },
                    {
                        "value": "119.45.20.55:443",
                        "timestamp": "2023-08-30 06:45:26"
                    },
                    {
                        "value": "119.45.20.55:31337",
                        "timestamp": "2023-08-30 06:45:25"
                    },
                    {
                        "value": "60.204.140.244:8888",
                        "timestamp": "2023-08-29 06:45:14"
                    },
                    {
                        "value": "60.204.140.244:31337",
                        "timestamp": "2023-08-29 06:45:13"
                    },
                    {
                        "value": "35.232.112.155:31337",
                        "timestamp": "2023-08-27 18:45:44"
                    },
                    {
                        "value": "35.232.112.155:8888",
                        "timestamp": "2023-08-27 18:45:44"
                    },
                    {
                        "value": "141.164.53.170:20000",
                        "timestamp": "2023-08-26 06:45:38"
                    },
                    {
                        "value": "72.142.102.161:443",
                        "timestamp": "2023-08-25 06:45:59"
                    },
                    {
                        "value": "23.83.133.53:31337",
                        "timestamp": "2023-08-25 06:45:27"
                    },
                    {
                        "value": "23.83.133.53:8888",
                        "timestamp": "2023-08-25 06:45:26"
                    },
                    {
                        "value": "51.255.5.104:8888",
                        "timestamp": "2023-08-24 06:45:26"
                    },
                    {
                        "value": "51.255.5.104:31337",
                        "timestamp": "2023-08-24 06:45:25"
                    },
                    {
                        "value": "58.87.87.59:31337",
                        "timestamp": "2023-08-23 06:45:43"
                    },
                    {
                        "value": "58.87.87.59:8888",
                        "timestamp": "2023-08-23 06:45:42"
                    },
                    {
                        "value": "92.118.39.25:80",
                        "timestamp": "2023-08-23 06:45:40"
                    },
                    {
                        "value": "137.175.12.38:55566",
                        "timestamp": "2023-08-21 18:45:49"
                    },
                    {
                        "value": "97.74.80.232:31337",
                        "timestamp": "2023-08-21 18:45:34"
                    },
                    {
                        "value": "185.225.70.191:8888",
                        "timestamp": "2023-08-21 06:46:21"
                    },
                    {
                        "value": "185.225.70.191:31337",
                        "timestamp": "2023-08-21 06:46:20"
                    },
                    {
                        "value": "176.123.1.144:8888",
                        "timestamp": "2023-08-21 06:45:13"
                    },
                    {
                        "value": "176.123.1.144:31337",
                        "timestamp": "2023-08-21 06:45:12"
                    },
                    {
                        "value": "98.11.237.48:31337",
                        "timestamp": "2023-08-19 18:46:11"
                    },
                    {
                        "value": "98.11.237.48:8888",
                        "timestamp": "2023-08-19 18:46:10"
                    },
                    {
                        "value": "137.175.12.37:55566",
                        "timestamp": "2023-08-19 18:46:07"
                    },
                    {
                        "value": "45.42.200.237:8443",
                        "timestamp": "2023-08-19 18:45:51"
                    },
                    {
                        "value": "45.42.200.237:31337",
                        "timestamp": "2023-08-19 18:45:50"
                    },
                    {
                        "value": "170.178.211.195:31337",
                        "timestamp": "2023-08-19 18:45:39"
                    },
                    {
                        "value": "135.181.195.133:8888",
                        "timestamp": "2023-08-17 06:45:40"
                    },
                    {
                        "value": "135.181.195.133:31337",
                        "timestamp": "2023-08-17 06:45:39"
                    },
                    {
                        "value": "194.26.135.223:31337",
                        "timestamp": "2023-08-16 18:46:21"
                    },
                    {
                        "value": "194.26.135.223:443",
                        "timestamp": "2023-08-16 18:46:20"
                    },
                    {
                        "value": "139.224.204.116:9019",
                        "timestamp": "2023-08-16 18:45:37"
                    },
                    {
                        "value": "139.224.204.116:1723",
                        "timestamp": "2023-08-16 18:45:36"
                    },
                    {
                        "value": "51.91.79.105:31337",
                        "timestamp": "2023-08-16 06:45:38"
                    },
                    {
                        "value": "51.91.79.105:8888",
                        "timestamp": "2023-08-16 06:45:37"
                    },
                    {
                        "value": "34.172.52.13:8888",
                        "timestamp": "2023-08-15 18:45:51"
                    },
                    {
                        "value": "34.172.52.13:31337",
                        "timestamp": "2023-08-15 18:45:49"
                    },
                    {
                        "value": "114.118.5.138:8443",
                        "timestamp": "2023-09-04 06:45:28"
                    },
                    {
                        "value": "5.255.120.28:80",
                        "timestamp": "2023-08-14 06:45:47"
                    },
                    {
                        "value": "8.213.132.159:443",
                        "timestamp": "2023-08-13 18:45:12"
                    },
                    {
                        "value": "8.213.132.159:7777",
                        "timestamp": "2023-08-13 18:45:10"
                    },
                    {
                        "value": "104.225.129.137:31337",
                        "timestamp": "2023-08-13 06:45:52"
                    },
                    {
                        "value": "104.225.129.137:443",
                        "timestamp": "2023-08-13 06:45:52"
                    },
                    {
                        "value": "35.185.58.57:31337",
                        "timestamp": "2023-08-12 18:45:44"
                    },
                    {
                        "value": "35.185.58.57:8888",
                        "timestamp": "2023-08-12 18:45:43"
                    },
                    {
                        "value": "147.189.131.188:31337",
                        "timestamp": "2023-08-12 06:45:48"
                    },
                    {
                        "value": "147.189.131.188:8888",
                        "timestamp": "2023-08-12 06:45:47"
                    },
                    {
                        "value": "194.87.236.17:31337",
                        "timestamp": "2023-08-29 18:45:18"
                    },
                    {
                        "value": "194.87.236.17:8888",
                        "timestamp": "2023-08-11 18:46:10"
                    },
                    {
                        "value": "118.107.46.133:31337",
                        "timestamp": "2023-08-11 18:45:46"
                    },
                    {
                        "value": "118.107.46.133:8888",
                        "timestamp": "2023-08-11 18:45:45"
                    },
                    {
                        "value": "118.107.46.131:8888",
                        "timestamp": "2023-08-11 18:45:39"
                    },
                    {
                        "value": "118.107.46.131:31337",
                        "timestamp": "2023-08-11 18:45:37"
                    },
                    {
                        "value": "100.36.21.114:8888",
                        "timestamp": "2023-08-11 18:45:29"
                    },
                    {
                        "value": "100.36.21.114:31337",
                        "timestamp": "2023-08-11 18:45:28"
                    },
                    {
                        "value": "118.107.46.132:8888",
                        "timestamp": "2023-08-11 18:45:15"
                    },
                    {
                        "value": "118.107.46.132:31337",
                        "timestamp": "2023-08-11 18:45:13"
                    },
                    {
                        "value": "45.76.110.190:9090",
                        "timestamp": "2023-08-09 18:45:46"
                    },
                    {
                        "value": "101.200.62.94:9000",
                        "timestamp": "2023-08-09 18:45:18"
                    },
                    {
                        "value": "3.91.200.115:8443",
                        "timestamp": "2023-08-09 06:45:24"
                    },
                    {
                        "value": "3.91.200.115:443",
                        "timestamp": "2023-08-09 06:45:24"
                    },
                    {
                        "value": "1.14.65.206:8888",
                        "timestamp": "2023-08-09 06:45:16"
                    },
                    {
                        "value": "1.14.65.206:31337",
                        "timestamp": "2023-08-09 06:45:15"
                    },
                    {
                        "value": "54.238.83.76:3306",
                        "timestamp": "2023-08-07 18:45:29"
                    },
                    {
                        "value": "54.238.83.76:443",
                        "timestamp": "2023-08-07 18:45:28"
                    },
                    {
                        "value": "23.234.200.38:31337",
                        "timestamp": "2023-08-06 18:45:49"
                    },
                    {
                        "value": "51.91.100.41:31337",
                        "timestamp": "2023-08-05 18:45:38"
                    },
                    {
                        "value": "51.91.100.41:8443",
                        "timestamp": "2023-08-05 18:45:37"
                    },
                    {
                        "value": "23.234.200.38:1443",
                        "timestamp": "2023-08-05 18:45:18"
                    },
                    {
                        "value": "170.178.211.195:12555",
                        "timestamp": "2023-08-04 18:45:29"
                    },
                    {
                        "value": "35.212.172.98:8888",
                        "timestamp": "2023-08-01 18:45:46"
                    },
                    {
                        "value": "35.212.172.98:31337",
                        "timestamp": "2023-08-01 18:45:45"
                    },
                    {
                        "value": "108.166.206.202:21229",
                        "timestamp": "2023-08-01 18:45:40"
                    },
                    {
                        "value": "47.94.113.86:8888",
                        "timestamp": "2023-08-01 18:45:31"
                    },
                    {
                        "value": "47.94.113.86:31337",
                        "timestamp": "2023-08-01 18:45:31"
                    },
                    {
                        "value": "91.202.4.10:443",
                        "timestamp": "2023-08-01 18:45:21"
                    },
                    {
                        "value": "91.202.4.10:57302",
                        "timestamp": "2023-08-01 18:45:20"
                    },
                    {
                        "value": "91.142.73.118:50543",
                        "timestamp": "2023-07-31 18:45:37"
                    },
                    {
                        "value": "91.142.73.118:443",
                        "timestamp": "2023-07-31 18:45:37"
                    },
                    {
                        "value": "47.242.51.151:8888",
                        "timestamp": "2023-07-31 06:45:47"
                    },
                    {
                        "value": "47.242.51.151:31337",
                        "timestamp": "2023-07-31 06:45:46"
                    },
                    {
                        "value": "172.105.125.49:80",
                        "timestamp": "2023-09-11 18:45:41"
                    },
                    {
                        "value": "172.105.125.49:21",
                        "timestamp": "2023-07-29 06:45:47"
                    },
                    {
                        "value": "92.118.39.25:8888",
                        "timestamp": "2023-07-29 06:45:26"
                    },
                    {
                        "value": "92.118.39.25:443",
                        "timestamp": "2023-07-27 18:45:45"
                    },
                    {
                        "value": "92.118.39.25:53",
                        "timestamp": "2023-07-27 18:45:44"
                    },
                    {
                        "value": "92.118.39.25:31337",
                        "timestamp": "2023-07-27 18:45:43"
                    },
                    {
                        "value": "60.204.185.123:443",
                        "timestamp": "2023-07-27 18:45:18"
                    },
                    {
                        "value": "60.204.185.123:3389",
                        "timestamp": "2023-07-27 18:45:17"
                    },
                    {
                        "value": "159.223.168.25:31337",
                        "timestamp": "2023-07-26 18:45:50"
                    },
                    {
                        "value": "159.223.168.25:8888",
                        "timestamp": "2023-07-26 18:45:49"
                    },
                    {
                        "value": "159.223.168.25:443",
                        "timestamp": "2023-07-26 18:45:48"
                    },
                    {
                        "value": "167.172.228.48:8888",
                        "timestamp": "2023-07-29 18:45:47"
                    },
                    {
                        "value": "167.172.228.48:31337",
                        "timestamp": "2023-07-26 06:45:45"
                    },
                    {
                        "value": "114.55.58.137:31212",
                        "timestamp": "2023-07-25 18:45:50"
                    },
                    {
                        "value": "114.55.58.137:35487",
                        "timestamp": "2023-07-25 18:45:49"
                    },
                    {
                        "value": "43.153.101.130:443",
                        "timestamp": "2023-07-25 06:46:09"
                    },
                    {
                        "value": "43.153.101.130:31337",
                        "timestamp": "2023-07-25 06:46:08"
                    },
                    {
                        "value": "206.81.5.204:8888",
                        "timestamp": "2023-07-25 06:45:55"
                    },
                    {
                        "value": "206.81.5.204:31337",
                        "timestamp": "2023-07-25 06:45:54"
                    },
                    {
                        "value": "206.81.5.204:443",
                        "timestamp": "2023-07-25 06:45:54"
                    },
                    {
                        "value": "206.189.143.81:8888",
                        "timestamp": "2023-07-25 06:45:17"
                    },
                    {
                        "value": "206.189.143.81:31337",
                        "timestamp": "2023-07-25 06:45:15"
                    },
                    {
                        "value": "5.255.120.28:8080",
                        "timestamp": "2023-07-24 18:45:43"
                    },
                    {
                        "value": "5.255.120.28:31337",
                        "timestamp": "2023-07-24 18:45:42"
                    },
                    {
                        "value": "170.178.195.189:23333",
                        "timestamp": "2023-07-24 06:45:26"
                    },
                    {
                        "value": "194.26.135.116:31337",
                        "timestamp": "2023-07-23 06:45:12"
                    },
                    {
                        "value": "194.26.135.116:443",
                        "timestamp": "2023-07-23 06:45:10"
                    },
                    {
                        "value": "149.28.157.116:55555",
                        "timestamp": "2023-07-22 06:45:19"
                    },
                    {
                        "value": "124.222.166.93:8443",
                        "timestamp": "2023-07-21 06:45:37"
                    },
                    {
                        "value": "5.75.238.234:8888",
                        "timestamp": "2023-07-17 06:45:56"
                    },
                    {
                        "value": "5.75.238.234:31337",
                        "timestamp": "2023-07-17 06:45:55"
                    },
                    {
                        "value": "45.61.137.200:45984",
                        "timestamp": "2023-07-17 06:45:28"
                    },
                    {
                        "value": "45.61.137.200:31337",
                        "timestamp": "2023-07-17 06:45:27"
                    },
                    {
                        "value": "139.99.3.237:2020",
                        "timestamp": "2023-07-16 18:45:49"
                    },
                    {
                        "value": "167.99.191.228:21",
                        "timestamp": "2023-07-16 18:45:39"
                    },
                    {
                        "value": "138.197.36.34:123",
                        "timestamp": "2023-07-16 18:45:39"
                    },
                    {
                        "value": "165.227.204.151:31337",
                        "timestamp": "2023-07-16 06:45:55"
                    },
                    {
                        "value": "165.227.204.151:53",
                        "timestamp": "2023-07-16 06:45:54"
                    },
                    {
                        "value": "47.94.169.63:31337",
                        "timestamp": "2023-07-16 06:45:27"
                    },
                    {
                        "value": "47.94.169.63:9999",
                        "timestamp": "2023-07-16 06:45:26"
                    },
                    {
                        "value": "47.94.169.63:8888",
                        "timestamp": "2023-07-16 06:45:25"
                    },
                    {
                        "value": "170.187.152.186:8888",
                        "timestamp": "2023-07-14 18:45:13"
                    },
                    {
                        "value": "170.187.152.186:31337",
                        "timestamp": "2023-07-14 18:45:11"
                    },
                    {
                        "value": "137.175.12.37:31337",
                        "timestamp": "2023-08-20 18:46:14"
                    },
                    {
                        "value": "137.175.12.37:8888",
                        "timestamp": "2023-07-14 06:45:52"
                    },
                    {
                        "value": "45.88.66.59:31337",
                        "timestamp": "2023-07-14 06:45:19"
                    },
                    {
                        "value": "45.88.66.59:8888",
                        "timestamp": "2023-07-14 06:45:18"
                    },
                    {
                        "value": "195.123.240.41:31337",
                        "timestamp": "2023-07-13 18:45:33"
                    },
                    {
                        "value": "195.123.240.41:8888",
                        "timestamp": "2023-07-13 18:45:33"
                    },
                    {
                        "value": "139.99.3.237:443",
                        "timestamp": "2023-07-11 06:45:49"
                    },
                    {
                        "value": "45.56.113.227:8888",
                        "timestamp": "2023-07-10 06:45:49"
                    },
                    {
                        "value": "45.56.113.227:8000",
                        "timestamp": "2023-07-10 06:45:48"
                    },
                    {
                        "value": "45.56.113.227:31337",
                        "timestamp": "2023-07-10 06:45:47"
                    },
                    {
                        "value": "120.24.42.20:53",
                        "timestamp": "2023-07-10 06:45:42"
                    },
                    {
                        "value": "165.227.230.18:53",
                        "timestamp": "2023-07-10 06:45:28"
                    },
                    {
                        "value": "157.230.6.223:443",
                        "timestamp": "2023-07-09 06:45:55"
                    },
                    {
                        "value": "157.230.6.223:8888",
                        "timestamp": "2023-07-09 06:45:54"
                    },
                    {
                        "value": "157.230.6.223:31337",
                        "timestamp": "2023-07-09 06:45:53"
                    },
                    {
                        "value": "175.41.187.111:31337",
                        "timestamp": "2023-07-09 06:45:38"
                    },
                    {
                        "value": "175.41.187.111:8888",
                        "timestamp": "2023-07-09 06:45:38"
                    },
                    {
                        "value": "45.129.14.69:443",
                        "timestamp": "2023-07-09 06:45:30"
                    },
                    {
                        "value": "45.129.14.69:31337",
                        "timestamp": "2023-07-09 06:45:30"
                    },
                    {
                        "value": "123.249.88.252:9443",
                        "timestamp": "2023-07-08 06:45:42"
                    },
                    {
                        "value": "123.249.88.252:31337",
                        "timestamp": "2023-07-08 06:45:41"
                    },
                    {
                        "value": "172.105.125.49:8888",
                        "timestamp": "2023-07-08 06:45:22"
                    },
                    {
                        "value": "172.105.125.49:22",
                        "timestamp": "2023-07-08 06:45:21"
                    },
                    {
                        "value": "172.105.125.49:31337",
                        "timestamp": "2023-07-08 06:45:20"
                    },
                    {
                        "value": "3.142.79.130:8888",
                        "timestamp": "2023-07-08 06:45:14"
                    },
                    {
                        "value": "175.178.107.105:443",
                        "timestamp": "2023-07-07 06:45:57"
                    },
                    {
                        "value": "175.178.107.105:31337",
                        "timestamp": "2023-07-07 06:45:56"
                    },
                    {
                        "value": "139.99.3.237:31337",
                        "timestamp": "2023-07-07 06:45:44"
                    },
                    {
                        "value": "139.99.3.237:8888",
                        "timestamp": "2023-07-07 06:45:44"
                    },
                    {
                        "value": "137.175.12.38:31337",
                        "timestamp": "2023-07-06 18:45:41"
                    },
                    {
                        "value": "137.175.12.38:8888",
                        "timestamp": "2023-07-06 18:45:41"
                    },
                    {
                        "value": "216.127.186.202:8888",
                        "timestamp": "2023-07-06 18:45:35"
                    },
                    {
                        "value": "216.127.186.202:18443",
                        "timestamp": "2023-07-06 18:45:34"
                    },
                    {
                        "value": "159.75.154.130:443",
                        "timestamp": "2023-07-06 06:45:59"
                    },
                    {
                        "value": "188.127.227.216:443",
                        "timestamp": "2023-07-06 06:45:29"
                    },
                    {
                        "value": "188.127.227.216:8080",
                        "timestamp": "2023-07-06 06:45:28"
                    },
                    {
                        "value": "116.62.139.1:8000",
                        "timestamp": "2023-07-05 06:45:50"
                    },
                    {
                        "value": "116.62.139.1:31337",
                        "timestamp": "2023-07-05 06:45:49"
                    },
                    {
                        "value": "134.122.121.18:31337",
                        "timestamp": "2023-07-05 06:45:33"
                    },
                    {
                        "value": "134.122.121.18:443",
                        "timestamp": "2023-07-05 06:45:32"
                    },
                    {
                        "value": "134.122.121.18:8888",
                        "timestamp": "2023-07-05 06:45:31"
                    },
                    {
                        "value": "170.178.195.189:20000",
                        "timestamp": "2023-07-03 06:45:31"
                    },
                    {
                        "value": "64.227.108.134:8888",
                        "timestamp": "2023-06-29 18:45:40"
                    },
                    {
                        "value": "64.227.108.134:31337",
                        "timestamp": "2023-06-29 18:45:40"
                    },
                    {
                        "value": "82.156.227.47:31337",
                        "timestamp": "2023-06-29 06:45:33"
                    },
                    {
                        "value": "82.156.227.47:8888",
                        "timestamp": "2023-06-29 06:45:32"
                    },
                    {
                        "value": "194.67.67.118:8888",
                        "timestamp": "2023-06-28 18:45:21"
                    },
                    {
                        "value": "194.67.67.118:31337",
                        "timestamp": "2023-06-28 18:45:19"
                    },
                    {
                        "value": "85.217.144.22:8888",
                        "timestamp": "2023-06-28 06:45:37"
                    },
                    {
                        "value": "85.217.144.22:31337",
                        "timestamp": "2023-06-28 06:45:36"
                    },
                    {
                        "value": "158.51.123.137:8888",
                        "timestamp": "2023-06-27 06:45:41"
                    },
                    {
                        "value": "158.51.123.137:31337",
                        "timestamp": "2023-06-27 06:45:41"
                    },
                    {
                        "value": "116.203.203.130:8888",
                        "timestamp": "2023-06-27 06:45:19"
                    },
                    {
                        "value": "208.117.83.103:8888",
                        "timestamp": "2023-06-25 06:45:25"
                    },
                    {
                        "value": "208.117.83.103:31337",
                        "timestamp": "2023-06-23 18:45:27"
                    },
                    {
                        "value": "208.117.83.103:5000",
                        "timestamp": "2023-06-23 18:45:26"
                    },
                    {
                        "value": "114.118.5.138:9443",
                        "timestamp": "2023-06-23 06:45:39"
                    },
                    {
                        "value": "185.39.204.47:8888",
                        "timestamp": "2023-06-22 18:45:52"
                    },
                    {
                        "value": "185.39.204.47:31337",
                        "timestamp": "2023-06-22 18:45:51"
                    },
                    {
                        "value": "159.89.106.178:8080",
                        "timestamp": "2023-06-22 18:45:40"
                    },
                    {
                        "value": "143.110.237.32:31337",
                        "timestamp": "2023-06-21 18:45:41"
                    },
                    {
                        "value": "143.110.237.32:8888",
                        "timestamp": "2023-06-21 18:45:40"
                    },
                    {
                        "value": "95.214.27.241:31337",
                        "timestamp": "2023-06-20 18:45:33"
                    },
                    {
                        "value": "95.214.27.241:8888",
                        "timestamp": "2023-06-20 18:45:32"
                    },
                    {
                        "value": "143.198.40.42:31337",
                        "timestamp": "2023-06-20 18:45:11"
                    },
                    {
                        "value": "143.198.40.42:443",
                        "timestamp": "2023-06-20 18:45:09"
                    },
                    {
                        "value": "101.37.91.112:31337",
                        "timestamp": "2023-06-20 06:45:34"
                    },
                    {
                        "value": "52.70.185.38:8080",
                        "timestamp": "2023-06-19 18:45:48"
                    },
                    {
                        "value": "101.37.91.112:8888",
                        "timestamp": "2023-06-19 18:45:30"
                    },
                    {
                        "value": "140.82.6.222:80",
                        "timestamp": "2023-06-19 18:45:27"
                    },
                    {
                        "value": "101.35.234.201:8888",
                        "timestamp": "2023-06-19 18:45:25"
                    },
                    {
                        "value": "119.45.206.25:31337",
                        "timestamp": "2023-06-16 19:00:42"
                    },
                    {
                        "value": "123.57.39.29:8443",
                        "timestamp": "2023-06-16 19:00:33"
                    },
                    {
                        "value": "123.57.39.29:31337",
                        "timestamp": "2023-06-16 19:00:32"
                    },
                    {
                        "value": "194.87.68.191:443",
                        "timestamp": "2023-06-16 19:00:13"
                    },
                    {
                        "value": "45.152.114.93:31337",
                        "timestamp": "2023-06-15 18:45:47"
                    },
                    {
                        "value": "45.152.114.93:10443",
                        "timestamp": "2023-06-15 18:45:46"
                    },
                    {
                        "value": "159.223.189.221:31337",
                        "timestamp": "2023-06-15 18:45:29"
                    },
                    {
                        "value": "159.223.189.221:8888",
                        "timestamp": "2023-06-15 18:45:28"
                    },
                    {
                        "value": "101.35.234.201:3306",
                        "timestamp": "2023-06-15 18:45:23"
                    },
                    {
                        "value": "101.35.234.201:31337",
                        "timestamp": "2023-06-15 18:45:22"
                    },
                    {
                        "value": "114.118.5.135:9443",
                        "timestamp": "2023-06-14 18:45:32"
                    },
                    {
                        "value": "114.118.5.135:50051",
                        "timestamp": "2023-06-14 18:45:31"
                    },
                    {
                        "value": "198.98.52.184:9010",
                        "timestamp": "2023-06-14 18:45:18"
                    },
                    {
                        "value": "119.45.206.25:443",
                        "timestamp": "2023-06-12 18:45:50"
                    },
                    {
                        "value": "118.195.164.144:443",
                        "timestamp": "2023-06-12 18:45:45"
                    },
                    {
                        "value": "45.81.39.39:91",
                        "timestamp": "2023-06-27 18:45:26"
                    },
                    {
                        "value": "85.204.116.80:8888",
                        "timestamp": "2023-06-11 16:49:23"
                    },
                    {
                        "value": "85.204.116.80:31337",
                        "timestamp": "2023-06-11 16:49:22"
                    },
                    {
                        "value": "3.101.117.8:31337",
                        "timestamp": "2023-06-10 18:45:14"
                    },
                    {
                        "value": "3.101.117.8:8888",
                        "timestamp": "2023-06-10 18:45:12"
                    },
                    {
                        "value": "216.127.186.202:443",
                        "timestamp": "2023-06-05 18:45:37"
                    },
                    {
                        "value": "216.127.186.202:31337",
                        "timestamp": "2023-06-05 18:45:36"
                    },
                    {
                        "value": "198.98.52.184:31337",
                        "timestamp": "2023-06-04 18:45:27"
                    },
                    {
                        "value": "198.98.52.184:9011",
                        "timestamp": "2023-06-04 18:45:26"
                    },
                    {
                        "value": "88.119.174.210:38922",
                        "timestamp": "2023-06-02 18:45:45"
                    },
                    {
                        "value": "194.87.68.191:80",
                        "timestamp": "2023-06-02 18:45:19"
                    },
                    {
                        "value": "194.87.68.191:31337",
                        "timestamp": "2023-06-02 18:45:18"
                    },
                    {
                        "value": "88.119.174.210:31337",
                        "timestamp": "2023-06-01 18:45:49"
                    },
                    {
                        "value": "88.119.174.210:443",
                        "timestamp": "2023-06-01 18:45:48"
                    },
                    {
                        "value": "185.34.52.140:31337",
                        "timestamp": "2023-06-01 18:45:23"
                    },
                    {
                        "value": "185.34.52.140:8888",
                        "timestamp": "2023-06-01 18:45:23"
                    },
                    {
                        "value": "185.186.245.34:8443",
                        "timestamp": "2023-05-31 18:45:46"
                    },
                    {
                        "value": "147.78.47.233:8888",
                        "timestamp": "2023-05-31 18:45:20"
                    },
                    {
                        "value": "3.18.103.195:8443",
                        "timestamp": "2023-05-31 18:45:15"
                    },
                    {
                        "value": "103.87.10.156:3308",
                        "timestamp": "2023-05-31 18:45:11"
                    },
                    {
                        "value": "119.45.121.239:31337",
                        "timestamp": "2023-05-30 18:45:28"
                    },
                    {
                        "value": "119.45.121.239:443",
                        "timestamp": "2023-05-30 18:45:27"
                    },
                    {
                        "value": "198.211.109.235:31337",
                        "timestamp": "2023-05-28 18:45:33"
                    },
                    {
                        "value": "198.211.109.235:8888",
                        "timestamp": "2023-05-28 18:45:32"
                    },
                    {
                        "value": "194.26.135.89:8888",
                        "timestamp": "2023-05-28 18:45:10"
                    },
                    {
                        "value": "194.26.135.89:31337",
                        "timestamp": "2023-05-28 18:45:08"
                    },
                    {
                        "value": "38.55.97.95:443",
                        "timestamp": "2023-05-27 18:45:29"
                    },
                    {
                        "value": "119.91.77.189:1234",
                        "timestamp": "2023-05-27 18:45:05"
                    },
                    {
                        "value": "45.142.166.93:41823",
                        "timestamp": "2023-05-26 18:45:39"
                    },
                    {
                        "value": "46.29.160.10:8443",
                        "timestamp": "2023-05-26 18:45:19"
                    },
                    {
                        "value": "85.10.135.126:31337",
                        "timestamp": "2023-05-26 10:58:56"
                    },
                    {
                        "value": "185.193.127.208:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "159.223.113.166:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "104.234.147.42:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "192.248.176.111:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "185.154.52.186:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "194.233.169.252:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "107.148.149.89:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "167.99.191.228:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "129.211.212.174:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "104.251.212.135:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "84.248.198.231:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "161.35.99.1:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "1.13.174.161:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "212.118.54.51:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "37.187.123.146:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "3.80.71.248:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "46.249.100.15:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "13.238.218.206:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "89.163.219.56:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "159.223.53.246:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "62.182.84.234:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "18.163.80.92:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "158.160.20.71:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "167.114.115.246:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "45.81.243.45:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "154.40.45.38:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "80.78.23.172:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "158.160.0.160:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "20.58.167.202:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "82.66.159.119:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "101.42.166.216:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "1.13.180.253:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "188.166.218.66:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "173.254.204.68:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "34.105.151.117:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "195.123.225.29:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "139.180.213.133:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "192.3.161.110:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "152.67.26.76:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "51.91.103.116:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "182.16.40.115:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "212.83.158.17:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "164.90.149.21:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "43.137.17.156:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "129.159.135.74:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "165.22.188.207:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "20.227.28.202:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "3.92.41.116:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "198.244.135.226:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "165.227.47.240:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "159.223.182.9:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "185.254.37.216:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "157.245.202.4:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "5.188.34.63:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "62.113.119.105:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "45.77.177.30:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "182.16.40.118:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "82.139.253.28:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "172.81.123.204:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "140.82.34.250:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "147.78.47.233:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "192.210.179.148:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "67.205.157.109:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "192.227.194.137:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "43.156.59.135:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "54.209.86.218:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "150.158.142.12:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "152.67.1.187:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "106.14.219.117:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "3.70.227.81:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "138.197.36.34:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "89.147.110.79:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "42.194.137.196:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "139.144.24.48:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "143.198.144.239:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "34.150.49.203:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "134.122.133.131:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "198.244.135.229:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "146.190.13.16:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "74.120.172.209:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "212.129.36.58:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "43.142.109.133:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "84.201.179.148:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "62.210.70.184:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "217.182.76.45:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "104.238.60.2:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "134.122.133.135:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "45.148.120.192:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "212.129.36.61:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "212.129.36.59:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "45.153.129.38:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "13.56.236.146:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "54.180.156.74:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "64.226.109.209:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "68.183.30.174:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "139.162.143.123:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "159.8.96.5:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "107.174.68.34:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "103.106.190.183:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "69.164.202.214:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "103.176.145.162:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "162.33.177.23:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "116.203.203.130:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "159.65.112.137:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "34.171.81.60:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "129.151.160.94:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "8.218.204.19:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "146.70.79.54:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "168.100.11.70:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "173.212.239.43:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "198.244.135.232:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "38.55.97.95:3306",
                        "timestamp": "2023-05-25 18:45:39"
                    },
                    {
                        "value": "158.247.217.247:55555",
                        "timestamp": "2023-05-25 18:45:13"
                    },
                    {
                        "value": "81.19.141.14:31337",
                        "timestamp": "2023-05-24 18:45:35"
                    },
                    {
                        "value": "81.19.141.14:8888",
                        "timestamp": "2023-09-06 18:45:19"
                    },
                    {
                        "value": "134.209.26.96:32443",
                        "timestamp": "2023-05-21 18:45:23"
                    },
                    {
                        "value": "103.56.19.196:8443",
                        "timestamp": "2023-05-20 18:45:44"
                    },
                    {
                        "value": "103.56.19.196:58853",
                        "timestamp": "2023-05-20 18:45:43"
                    },
                    {
                        "value": "95.170.68.91:443",
                        "timestamp": "2023-05-20 18:45:41"
                    },
                    {
                        "value": "95.164.46.194:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "95.164.46.194:8888",
                        "timestamp": "2023-05-20 18:45:26"
                    },
                    {
                        "value": "5.252.176.26:443",
                        "timestamp": "2023-05-20 18:45:17"
                    },
                    {
                        "value": "5.252.176.26:31337",
                        "timestamp": "2023-07-26 18:45:37"
                    },
                    {
                        "value": "101.35.172.163:38080",
                        "timestamp": "2023-05-19 18:45:26"
                    },
                    {
                        "value": "101.35.172.163:8888",
                        "timestamp": "2023-09-04 06:45:52"
                    },
                    {
                        "value": "144.126.211.191:443",
                        "timestamp": "2023-05-19 18:45:09"
                    },
                    {
                        "value": "143.110.240.214:8880",
                        "timestamp": "2023-05-18 18:45:36"
                    },
                    {
                        "value": "143.110.240.214:17960",
                        "timestamp": "2023-05-18 18:45:35"
                    },
                    {
                        "value": "95.170.68.91:8082",
                        "timestamp": "2023-05-16 18:45:28"
                    },
                    {
                        "value": "95.170.68.91:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "4.240.86.147:8888",
                        "timestamp": "2023-05-16 18:45:07"
                    },
                    {
                        "value": "4.240.86.147:31337",
                        "timestamp": "2023-05-16 18:45:05"
                    },
                    {
                        "value": "120.24.42.20:8888",
                        "timestamp": "2023-05-13 18:45:45"
                    },
                    {
                        "value": "120.24.42.20:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "37.27.17.204:31337",
                        "timestamp": "2023-05-13 18:45:16"
                    },
                    {
                        "value": "37.27.17.204:8888",
                        "timestamp": "2023-05-13 18:45:14"
                    },
                    {
                        "value": "185.99.133.148:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "185.99.133.148:8888",
                        "timestamp": "2023-05-12 18:45:37"
                    },
                    {
                        "value": "173.82.58.62:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "173.82.58.62:8888",
                        "timestamp": "2023-05-11 18:45:42"
                    },
                    {
                        "value": "54.152.37.54:31337",
                        "timestamp": "2023-05-11 18:45:17"
                    },
                    {
                        "value": "54.152.37.54:8888",
                        "timestamp": "2023-05-11 18:45:16"
                    },
                    {
                        "value": "162.33.177.203:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "162.33.177.203:8888",
                        "timestamp": "2023-05-09 18:45:37"
                    },
                    {
                        "value": "114.118.5.138:50051",
                        "timestamp": "2023-05-09 18:45:24"
                    },
                    {
                        "value": "111.68.7.122:8888",
                        "timestamp": "2023-05-08 18:45:25"
                    },
                    {
                        "value": "111.68.7.122:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "174.138.7.112:8888",
                        "timestamp": "2023-05-05 11:57:29"
                    },
                    {
                        "value": "141.164.45.81:8888",
                        "timestamp": "2023-05-05 11:57:17"
                    },
                    {
                        "value": "141.164.45.81:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "43.248.136.99:31337",
                        "timestamp": "2023-07-09 18:45:14"
                    },
                    {
                        "value": "43.248.136.99:443",
                        "timestamp": "2023-05-05 11:56:53"
                    },
                    {
                        "value": "31.41.44.19:31337",
                        "timestamp": "2023-05-05 11:56:46"
                    },
                    {
                        "value": "31.41.44.19:443",
                        "timestamp": "2023-05-05 11:56:45"
                    },
                    {
                        "value": "185.77.96.155:31337",
                        "timestamp": "2023-05-04 18:45:56"
                    },
                    {
                        "value": "185.77.96.155:8888",
                        "timestamp": "2023-05-04 18:45:55"
                    },
                    {
                        "value": "141.164.50.44:8888",
                        "timestamp": "2023-05-04 18:45:46"
                    },
                    {
                        "value": "141.164.50.44:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "139.224.50.7:31337",
                        "timestamp": "2023-05-04 18:45:39"
                    },
                    {
                        "value": "139.224.50.7:443",
                        "timestamp": "2023-05-04 18:45:38"
                    },
                    {
                        "value": "139.224.50.7:8443",
                        "timestamp": "2023-05-04 18:45:38"
                    },
                    {
                        "value": "111.68.7.123:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "111.68.7.123:8888",
                        "timestamp": "2023-05-04 18:45:25"
                    },
                    {
                        "value": "97.107.134.18:31337",
                        "timestamp": "2023-05-03 18:45:25"
                    },
                    {
                        "value": "97.107.134.18:8888",
                        "timestamp": "2023-05-03 18:45:24"
                    },
                    {
                        "value": "138.68.107.45:8888",
                        "timestamp": "2023-05-02 18:45:35"
                    },
                    {
                        "value": "138.68.107.45:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "85.208.136.119:1242",
                        "timestamp": "2023-05-02 18:45:27"
                    },
                    {
                        "value": "54.255.40.113:8882",
                        "timestamp": "2023-05-02 18:45:22"
                    },
                    {
                        "value": "45.61.136.196:8182",
                        "timestamp": "2023-05-02 18:45:13"
                    },
                    {
                        "value": "167.71.194.21:31337",
                        "timestamp": "2023-04-30 18:45:33"
                    },
                    {
                        "value": "167.71.194.21:8888",
                        "timestamp": "2023-04-30 18:45:33"
                    },
                    {
                        "value": "195.80.148.103:8888",
                        "timestamp": "2023-06-29 18:45:31"
                    },
                    {
                        "value": "195.80.148.103:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "188.166.165.134:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "188.166.165.134:8888",
                        "timestamp": "2023-05-19 06:45:07"
                    },
                    {
                        "value": "222.208.209.46:8888",
                        "timestamp": "2023-04-24 18:45:42"
                    },
                    {
                        "value": "222.208.209.46:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "138.68.123.125:8888",
                        "timestamp": "2023-04-24 18:45:29"
                    },
                    {
                        "value": "101.35.253.83:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "101.35.253.83:8888",
                        "timestamp": "2023-04-23 18:45:27"
                    },
                    {
                        "value": "20.118.135.66:63073",
                        "timestamp": "2023-04-23 18:45:10"
                    },
                    {
                        "value": "20.118.135.66:8888",
                        "timestamp": "2023-04-23 18:45:08"
                    },
                    {
                        "value": "43.138.196.138:8888",
                        "timestamp": "2023-04-22 18:45:13"
                    },
                    {
                        "value": "43.138.196.138:8000",
                        "timestamp": "2023-04-22 18:45:12"
                    },
                    {
                        "value": "124.71.84.65:8899",
                        "timestamp": "2023-04-22 06:45:34"
                    },
                    {
                        "value": "5.255.114.206:60443",
                        "timestamp": "2023-04-22 06:45:11"
                    },
                    {
                        "value": "5.255.114.206:8443",
                        "timestamp": "2023-04-22 06:45:09"
                    },
                    {
                        "value": "117.50.177.140:8888",
                        "timestamp": "2023-04-19 18:45:30"
                    },
                    {
                        "value": "45.134.83.252:8888",
                        "timestamp": "2023-04-19 18:45:17"
                    },
                    {
                        "value": "45.134.83.252:31337",
                        "timestamp": "2023-04-19 18:45:16"
                    },
                    {
                        "value": "8.217.54.75:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "8.217.54.75:8888",
                        "timestamp": "2023-04-19 06:45:08"
                    },
                    {
                        "value": "8.218.200.114:1234",
                        "timestamp": "2023-04-17 18:45:27"
                    },
                    {
                        "value": "8.212.148.49:8888",
                        "timestamp": "2023-04-17 18:45:23"
                    },
                    {
                        "value": "8.212.148.49:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "3.134.102.71:8888",
                        "timestamp": "2023-04-17 18:45:18"
                    },
                    {
                        "value": "3.134.102.71:31337",
                        "timestamp": "2023-05-26 10:58:56"
                    },
                    {
                        "value": "143.198.68.62:8888",
                        "timestamp": "2023-04-17 09:26:18"
                    },
                    {
                        "value": "129.211.212.112:31337",
                        "timestamp": "2023-04-15 18:45:29"
                    },
                    {
                        "value": "129.211.212.112:443",
                        "timestamp": "2023-04-15 18:45:28"
                    },
                    {
                        "value": "46.29.160.10:53",
                        "timestamp": "2023-04-15 18:45:16"
                    },
                    {
                        "value": "134.209.26.96:31443",
                        "timestamp": "2023-04-14 18:45:30"
                    },
                    {
                        "value": "92.205.29.124:1234",
                        "timestamp": "2023-04-14 18:45:22"
                    },
                    {
                        "value": "43.133.22.89:80",
                        "timestamp": "2023-04-14 18:45:11"
                    },
                    {
                        "value": "134.209.122.158:8888",
                        "timestamp": "2023-04-13 18:45:27"
                    },
                    {
                        "value": "134.209.122.158:31337",
                        "timestamp": "2023-04-13 18:45:26"
                    },
                    {
                        "value": "144.22.230.36:3000",
                        "timestamp": "2023-04-09 14:33:25"
                    },
                    {
                        "value": "172.245.92.226:8888",
                        "timestamp": "2023-04-08 06:45:38"
                    },
                    {
                        "value": "172.245.92.226:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "14.1.29.189:8443",
                        "timestamp": "2023-04-07 06:45:10"
                    },
                    {
                        "value": "8.218.200.114:31337",
                        "timestamp": "2023-04-07 06:45:07"
                    },
                    {
                        "value": "45.9.150.109:3677",
                        "timestamp": "2023-04-06 18:45:20"
                    },
                    {
                        "value": "14.1.29.189:31337",
                        "timestamp": "2023-04-06 18:45:11"
                    },
                    {
                        "value": "8.218.200.114:12345",
                        "timestamp": "2023-04-06 18:45:07"
                    },
                    {
                        "value": "222.208.210.47:8888",
                        "timestamp": "2023-04-05 06:45:48"
                    },
                    {
                        "value": "144.126.211.191:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "45.227.255.185:8888",
                        "timestamp": "2023-04-05 06:45:16"
                    },
                    {
                        "value": "222.208.210.47:31337",
                        "timestamp": "2023-04-04 18:46:07"
                    },
                    {
                        "value": "144.126.211.191:8888",
                        "timestamp": "2023-04-04 18:45:51"
                    },
                    {
                        "value": "45.227.255.185:31337",
                        "timestamp": "2023-04-04 18:45:28"
                    },
                    {
                        "value": "34.221.238.130:7777",
                        "timestamp": "2023-04-03 18:45:08"
                    },
                    {
                        "value": "222.208.209.13:31337",
                        "timestamp": "2023-04-03 06:45:45"
                    },
                    {
                        "value": "222.208.209.13:8888",
                        "timestamp": "2023-04-02 18:50:14"
                    },
                    {
                        "value": "62.210.124.105:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "45.227.255.225:31337",
                        "timestamp": "2023-04-02 06:45:14"
                    },
                    {
                        "value": "62.210.124.105:8888",
                        "timestamp": "2023-06-03 06:45:33"
                    },
                    {
                        "value": "45.227.255.225:8888",
                        "timestamp": "2023-04-01 18:46:06"
                    },
                    {
                        "value": "173.82.135.18:8443",
                        "timestamp": "2023-03-31 18:47:35"
                    },
                    {
                        "value": "80.78.22.106:8888",
                        "timestamp": "2023-03-31 18:46:27"
                    },
                    {
                        "value": "150.158.184.129:443",
                        "timestamp": "2023-03-30 18:47:56"
                    },
                    {
                        "value": "92.205.29.124:8888",
                        "timestamp": "2023-03-30 18:46:54"
                    },
                    {
                        "value": "46.148.26.88:8888",
                        "timestamp": "2023-03-29 18:46:09"
                    },
                    {
                        "value": "45.227.255.217:8888",
                        "timestamp": "2023-03-29 18:46:00"
                    },
                    {
                        "value": "95.216.192.109:8888",
                        "timestamp": "2023-03-28 18:48:28"
                    },
                    {
                        "value": "95.216.192.109:31337",
                        "timestamp": "2023-03-28 18:48:25"
                    },
                    {
                        "value": "193.29.13.203:8888",
                        "timestamp": "2023-03-27 18:49:43"
                    },
                    {
                        "value": "157.245.96.88:9088",
                        "timestamp": "2023-03-27 18:48:36"
                    },
                    {
                        "value": "157.245.96.88:17961",
                        "timestamp": "2023-03-27 18:48:34"
                    },
                    {
                        "value": "134.209.65.138:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "134.209.65.138:445",
                        "timestamp": "2023-03-27 18:47:25"
                    },
                    {
                        "value": "54.165.231.50:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "54.165.231.50:8888",
                        "timestamp": "2023-03-27 18:46:29"
                    },
                    {
                        "value": "43.207.147.229:443",
                        "timestamp": "2023-03-27 18:45:52"
                    },
                    {
                        "value": "89.116.234.48:8888",
                        "timestamp": "2023-03-25 18:47:20"
                    },
                    {
                        "value": "45.227.255.223:8888",
                        "timestamp": "2023-03-25 18:46:33"
                    },
                    {
                        "value": "124.71.84.65:8889",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "43.207.147.229:3306",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "162.33.177.38:54712",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "47.242.23.161:43831",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "84.32.248.95:32883",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "89.38.128.51:42448",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "146.70.104.167:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "185.128.106.245:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "185.130.45.94:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "185.203.119.47:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "185.254.198.147:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "188.127.237.167:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "188.166.161.123:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "192.3.128.185:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "192.241.128.7:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "193.29.13.203:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "194.163.133.23:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "195.123.225.18:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "198.27.76.162:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "198.46.215.53:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "198.211.48.141:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "206.189.192.120:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "206.189.252.100:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "212.53.167.167:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "213.52.128.52:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "213.189.201.88:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "168.138.93.130:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "170.64.177.221:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "170.130.55.160:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "170.187.207.103:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "171.22.30.222:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "172.86.120.245:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "172.86.121.214:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "172.96.192.52:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "173.199.71.71:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "174.138.7.112:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "178.128.144.124:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "178.128.229.91:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "179.43.154.251:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "179.60.150.147:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "182.61.145.9:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "185.73.124.16:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "185.81.68.180:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "185.82.218.214:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "146.190.160.18:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "147.182.170.15:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "148.66.57.50:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "148.66.57.51:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "149.81.74.205:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "149.81.74.206:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "149.81.74.207:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "149.81.87.18:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "151.80.106.50:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "152.89.218.235:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "154.202.59.96:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "155.138.229.198:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "158.247.213.192:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "159.65.202.74:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "159.89.106.178:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "159.203.99.10:31337",
                        "timestamp": "2023-05-26 10:58:56"
                    },
                    {
                        "value": "164.90.132.211:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "164.92.101.3:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "165.227.99.110:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "165.227.176.139:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "167.71.2.28:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "167.99.17.196:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "167.172.83.4:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "168.63.40.231:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "121.199.166.58:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "122.147.252.103:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "128.199.227.227:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "132.145.153.214:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "134.209.204.95:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "135.125.236.177:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "137.184.57.89:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "137.184.86.247:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "138.68.99.223:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "138.68.123.125:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "138.197.186.34:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "138.197.224.55:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "139.99.122.227:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "139.144.19.169:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "139.144.46.164:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "139.162.155.164:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "139.177.146.102:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "140.238.221.59:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "144.34.250.208:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "144.126.249.150:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "145.239.197.144:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "146.19.80.25:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "146.59.237.220:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "146.190.128.88:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "89.44.9.148:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "89.116.234.48:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "91.234.199.4:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "92.205.29.124:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "101.33.248.33:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.15.105.29:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.35.151.195:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.35.151.222:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.56.19.196:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.85.110.13:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.140.187.122:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "103.234.72.156:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "104.168.142.135:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "104.198.153.240:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "104.236.186.248:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "104.243.20.216:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "106.15.170.198:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "107.150.119.144:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "108.61.127.105:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "109.248.6.249:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "114.55.58.137:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "117.50.177.140:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "121.5.112.42:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "45.9.150.109:31337",
                        "timestamp": "2023-09-03 18:45:48"
                    },
                    {
                        "value": "45.14.224.102:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "45.56.114.203:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "45.61.137.59:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "45.77.41.35:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "45.79.125.241:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "45.153.231.136:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "45.227.255.217:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "45.227.255.223:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "46.29.160.10:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "46.148.26.88:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "46.246.93.104:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "47.57.0.78:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "49.12.3.231:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "54.65.51.181:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "54.91.1.255:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "57.128.11.250:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "62.3.58.81:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "63.250.54.32:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "64.227.18.206:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "65.109.134.211:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "67.205.184.220:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "68.183.42.154:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "76.74.127.144:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "76.74.127.145:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "79.136.1.87:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "81.200.149.183:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "85.217.144.191:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "85.239.54.16:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "88.99.46.167:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "5.199.173.106:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "5.199.174.230:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "8.219.200.180:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "13.236.149.120:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "18.140.228.104:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "18.159.62.29:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "18.234.7.23:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.83.127.233:31337",
                        "timestamp": "2023-05-26 10:58:50"
                    },
                    {
                        "value": "23.94.131.51:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.94.200.202:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.105.193.194:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "23.234.199.141:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "34.176.0.227:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "35.180.135.137:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "35.225.60.206:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "35.236.117.76:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "35.240.171.140:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "37.48.120.35:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "38.55.24.35:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "39.98.48.67:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "44.202.249.7:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "45.8.157.45:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "45.9.148.252:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "3.8.115.155:31337",
                        "timestamp": "2023-03-25 14:32:44"
                    },
                    {
                        "value": "3.128.135.199:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "3.130.73.232:31337",
                        "timestamp": "2023-03-25 14:32:44"
                    },
                    {
                        "value": "3.142.79.130:31337",
                        "timestamp": "2023-03-25 14:32:44"
                    },
                    {
                        "value": "5.178.2.76:31337",
                        "timestamp": "2023-03-25 14:32:44"
                    },
                    {
                        "value": "5.199.168.209:31337",
                        "timestamp": "2023-03-25 14:32:44"
                    },
                    {
                        "value": "149.28.90.162:443",
                        "timestamp": "2023-07-30 09:48:53"
                    },
                    {
                        "value": "149.28.90.162:1443",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "140.238.226.66:8888",
                        "timestamp": "2023-03-23 18:48:15"
                    },
                    {
                        "value": "140.238.226.66:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "34.221.238.130:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "34.221.238.130:8888",
                        "timestamp": "2023-03-23 18:45:46"
                    },
                    {
                        "value": "150.158.27.149:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "217.6.46.91:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "216.127.175.18:31337",
                        "timestamp": "2023-05-26 10:58:56"
                    },
                    {
                        "value": "216.127.175.18:8888",
                        "timestamp": "2023-03-22 18:48:54"
                    },
                    {
                        "value": "150.158.27.149:8888",
                        "timestamp": "2023-03-22 18:47:56"
                    },
                    {
                        "value": "101.43.156.89:9999",
                        "timestamp": "2023-03-20 18:47:05"
                    },
                    {
                        "value": "150.158.184.129:9999",
                        "timestamp": "2023-03-18 06:45:30"
                    },
                    {
                        "value": "150.158.184.129:8888",
                        "timestamp": "2023-03-17 18:47:43"
                    },
                    {
                        "value": "92.204.160.119:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "92.204.160.119:443",
                        "timestamp": "2023-03-17 18:46:33"
                    },
                    {
                        "value": "67.205.151.119:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "67.205.151.119:8888",
                        "timestamp": "2023-03-17 18:46:19"
                    },
                    {
                        "value": "164.92.161.89:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "150.158.184.129:3389",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "45.89.234.23:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "45.89.234.23:8888",
                        "timestamp": "2023-03-17 06:45:17"
                    },
                    {
                        "value": "37.28.157.7:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "37.28.157.7:443",
                        "timestamp": "2023-03-17 06:45:11"
                    },
                    {
                        "value": "35.72.242.198:443",
                        "timestamp": "2023-03-15 18:46:21"
                    },
                    {
                        "value": "35.72.242.198:3306",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "3.237.92.13:8888",
                        "timestamp": "2023-03-14 18:45:08"
                    },
                    {
                        "value": "3.237.92.13:31337",
                        "timestamp": "2023-03-14 18:45:07"
                    },
                    {
                        "value": "103.124.104.80:3131",
                        "timestamp": "2023-03-13 18:46:36"
                    },
                    {
                        "value": "37.10.71.215:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "37.10.71.215:443",
                        "timestamp": "2023-06-25 18:45:37"
                    },
                    {
                        "value": "3.104.54.39:8888",
                        "timestamp": "2023-03-12 18:45:15"
                    },
                    {
                        "value": "3.104.54.39:31337",
                        "timestamp": "2023-03-12 18:45:14"
                    },
                    {
                        "value": "222.208.209.148:31337",
                        "timestamp": "2023-03-10 18:48:23"
                    },
                    {
                        "value": "222.208.209.148:8888",
                        "timestamp": "2023-03-10 18:48:22"
                    },
                    {
                        "value": "45.77.120.140:54327",
                        "timestamp": "2023-03-08 18:45:18"
                    },
                    {
                        "value": "45.77.120.140:31337",
                        "timestamp": "2023-03-08 18:45:17"
                    },
                    {
                        "value": "43.137.3.222:31337",
                        "timestamp": "2023-03-08 06:45:30"
                    },
                    {
                        "value": "162.33.177.72:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "162.33.177.72:8888",
                        "timestamp": "2023-03-07 18:49:17"
                    },
                    {
                        "value": "149.248.8.148:13443",
                        "timestamp": "2023-03-07 18:48:57"
                    },
                    {
                        "value": "142.93.136.194:6443",
                        "timestamp": "2023-03-07 18:48:36"
                    },
                    {
                        "value": "43.137.3.222:8888",
                        "timestamp": "2023-03-07 18:46:21"
                    },
                    {
                        "value": "20.61.4.19:3000",
                        "timestamp": "2023-03-07 18:45:38"
                    },
                    {
                        "value": "13.115.21.133:443",
                        "timestamp": "2023-03-07 18:45:27"
                    },
                    {
                        "value": "13.115.21.133:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "194.87.68.68:80",
                        "timestamp": "2023-03-06 18:48:28"
                    },
                    {
                        "value": "194.87.68.68:25",
                        "timestamp": "2023-03-06 18:48:27"
                    },
                    {
                        "value": "134.122.24.31:8888",
                        "timestamp": "2023-03-05 18:47:02"
                    },
                    {
                        "value": "134.122.24.31:31337",
                        "timestamp": "2023-03-05 18:47:01"
                    },
                    {
                        "value": "34.162.188.150:31337",
                        "timestamp": "2023-03-05 18:45:42"
                    },
                    {
                        "value": "34.162.188.150:8443",
                        "timestamp": "2023-03-05 18:45:39"
                    },
                    {
                        "value": "64.44.102.212:443",
                        "timestamp": "2023-03-04 06:40:33"
                    },
                    {
                        "value": "194.87.68.68:8080",
                        "timestamp": "2023-03-03 18:49:03"
                    },
                    {
                        "value": "104.224.176.67:31337",
                        "timestamp": "2023-03-03 06:45:26"
                    },
                    {
                        "value": "104.224.176.67:8888",
                        "timestamp": "2023-03-03 06:45:26"
                    },
                    {
                        "value": "80.78.22.106:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "80.78.22.106:443",
                        "timestamp": "2023-03-03 06:45:18"
                    },
                    {
                        "value": "208.123.119.232:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "208.123.119.232:8888",
                        "timestamp": "2023-03-01 18:48:13"
                    },
                    {
                        "value": "103.103.128.167:31337",
                        "timestamp": "2023-03-01 18:46:45"
                    },
                    {
                        "value": "103.103.128.167:8888",
                        "timestamp": "2023-03-01 18:46:43"
                    },
                    {
                        "value": "194.87.46.13:8888",
                        "timestamp": "2023-02-28 18:47:27"
                    },
                    {
                        "value": "194.87.46.13:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "35.180.5.225:8443",
                        "timestamp": "2023-02-28 18:45:44"
                    },
                    {
                        "value": "35.180.5.225:31337",
                        "timestamp": "2023-02-28 18:45:43"
                    },
                    {
                        "value": "192.9.132.63:4422",
                        "timestamp": "2023-02-27 18:48:28"
                    },
                    {
                        "value": "165.22.178.225:8888",
                        "timestamp": "2023-02-27 18:47:56"
                    },
                    {
                        "value": "165.22.178.225:31337",
                        "timestamp": "2023-02-27 18:47:54"
                    },
                    {
                        "value": "193.149.185.51:8888",
                        "timestamp": "2023-02-26 18:48:30"
                    },
                    {
                        "value": "193.149.185.51:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "49.232.136.115:8090",
                        "timestamp": "2023-02-26 18:46:19"
                    },
                    {
                        "value": "44.211.101.170:10003",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "51.15.252.225:8888",
                        "timestamp": "2023-02-25 18:46:17"
                    },
                    {
                        "value": "51.15.252.225:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "144.34.180.27:443",
                        "timestamp": "2023-02-23 18:45:42"
                    },
                    {
                        "value": "144.34.180.27:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "65.21.180.80:8888",
                        "timestamp": "2023-08-30 18:45:11"
                    },
                    {
                        "value": "65.21.180.80:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "167.179.108.215:31337",
                        "timestamp": "2023-02-22 18:46:12"
                    },
                    {
                        "value": "167.179.108.215:8888",
                        "timestamp": "2023-02-22 18:46:11"
                    },
                    {
                        "value": "147.182.137.225:31337",
                        "timestamp": "2023-02-22 18:46:02"
                    },
                    {
                        "value": "147.182.137.225:8888",
                        "timestamp": "2023-02-22 18:46:01"
                    },
                    {
                        "value": "144.22.135.107:80",
                        "timestamp": "2023-02-22 18:45:57"
                    },
                    {
                        "value": "144.22.135.107:443",
                        "timestamp": "2023-02-22 18:45:56"
                    },
                    {
                        "value": "20.248.225.130:8888",
                        "timestamp": "2023-02-21 18:45:11"
                    },
                    {
                        "value": "20.248.225.130:31337",
                        "timestamp": "2023-02-21 18:45:10"
                    },
                    {
                        "value": "101.43.156.89:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "188.166.27.178:8888",
                        "timestamp": "2023-02-19 18:47:46"
                    },
                    {
                        "value": "188.166.27.178:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "139.177.203.214:8888",
                        "timestamp": "2023-02-19 18:46:45"
                    },
                    {
                        "value": "139.177.203.214:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "101.43.156.89:8888",
                        "timestamp": "2023-02-19 18:46:08"
                    },
                    {
                        "value": "154.38.161.223:443",
                        "timestamp": "2023-02-19 08:23:55"
                    },
                    {
                        "value": "136.244.95.237:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "136.244.95.237:8888",
                        "timestamp": "2023-02-19 06:45:23"
                    },
                    {
                        "value": "107.189.1.156:8888",
                        "timestamp": "2023-02-19 06:45:19"
                    },
                    {
                        "value": "194.135.17.3:8888",
                        "timestamp": "2023-02-17 18:48:51"
                    },
                    {
                        "value": "103.124.104.77:3131",
                        "timestamp": "2023-02-17 18:46:52"
                    },
                    {
                        "value": "172.86.75.56:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "172.86.75.56:8888",
                        "timestamp": "2023-02-15 18:46:38"
                    },
                    {
                        "value": "194.135.17.3:31337",
                        "timestamp": "2023-02-13 18:48:06"
                    },
                    {
                        "value": "194.135.17.3:443",
                        "timestamp": "2023-02-13 18:48:05"
                    },
                    {
                        "value": "149.127.231.12:80",
                        "timestamp": "2023-02-12 18:47:23"
                    },
                    {
                        "value": "149.127.231.12:1080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "64.44.102.212:8443",
                        "timestamp": "2023-02-12 18:46:05"
                    },
                    {
                        "value": "143.244.185.237:443",
                        "timestamp": "2023-02-11 18:47:50"
                    },
                    {
                        "value": "143.244.185.237:31337",
                        "timestamp": "2023-02-11 18:47:49"
                    },
                    {
                        "value": "34.201.98.138:8888",
                        "timestamp": "2023-07-25 06:45:37"
                    },
                    {
                        "value": "34.201.98.138:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "191.101.78.79:5432",
                        "timestamp": "2023-02-07 18:49:17"
                    },
                    {
                        "value": "191.101.78.79:31337",
                        "timestamp": "2023-02-07 18:49:16"
                    },
                    {
                        "value": "116.203.179.171:31337",
                        "timestamp": "2023-02-07 18:47:39"
                    },
                    {
                        "value": "116.203.179.171:443",
                        "timestamp": "2023-02-07 18:47:37"
                    },
                    {
                        "value": "107.189.1.156:7325",
                        "timestamp": "2023-02-07 18:47:26"
                    },
                    {
                        "value": "107.189.1.156:31337",
                        "timestamp": "2023-02-07 18:47:25"
                    },
                    {
                        "value": "45.8.146.160:8080",
                        "timestamp": "2023-02-07 18:46:01"
                    },
                    {
                        "value": "45.8.146.160:31337",
                        "timestamp": "2023-02-07 18:45:58"
                    },
                    {
                        "value": "143.110.252.93:8888",
                        "timestamp": "2023-02-06 18:45:26"
                    },
                    {
                        "value": "143.110.252.93:31337",
                        "timestamp": "2023-02-06 18:45:26"
                    },
                    {
                        "value": "194.87.218.16:8888",
                        "timestamp": "2023-02-02 18:47:55"
                    },
                    {
                        "value": "194.87.218.16:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "52.40.129.127:8080",
                        "timestamp": "2023-02-02 06:45:20"
                    },
                    {
                        "value": "52.40.129.127:31337",
                        "timestamp": "2023-02-02 06:45:19"
                    },
                    {
                        "value": "3.238.195.247:8888",
                        "timestamp": "2023-02-01 06:45:09"
                    },
                    {
                        "value": "3.238.195.247:31337",
                        "timestamp": "2023-03-25 14:32:44"
                    },
                    {
                        "value": "52.53.230.115:8888",
                        "timestamp": "2023-01-31 06:45:22"
                    },
                    {
                        "value": "54.197.29.26:443",
                        "timestamp": "2023-01-31 06:45:22"
                    },
                    {
                        "value": "52.53.230.115:31337",
                        "timestamp": "2023-01-31 06:45:21"
                    },
                    {
                        "value": "139.177.196.67:8888",
                        "timestamp": "2023-07-25 06:45:31"
                    },
                    {
                        "value": "139.177.196.67:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "46.101.179.149:8888",
                        "timestamp": "2023-01-29 06:45:19"
                    },
                    {
                        "value": "46.101.179.149:31337",
                        "timestamp": "2023-05-26 10:58:55"
                    },
                    {
                        "value": "46.21.159.189:8888",
                        "timestamp": "2023-01-29 06:45:17"
                    },
                    {
                        "value": "46.21.159.189:443",
                        "timestamp": "2023-01-29 06:45:16"
                    },
                    {
                        "value": "43.133.22.89:3306",
                        "timestamp": "2023-01-28 06:45:19"
                    },
                    {
                        "value": "43.133.22.89:45887",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "1.13.17.105:8443",
                        "timestamp": "2023-01-28 06:45:08"
                    },
                    {
                        "value": "118.25.158.13:80",
                        "timestamp": "2023-01-27 18:45:44"
                    },
                    {
                        "value": "118.25.22.185:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "114.132.197.186:8888",
                        "timestamp": "2023-01-27 18:45:42"
                    },
                    {
                        "value": "1.13.17.105:443",
                        "timestamp": "2023-01-27 18:45:09"
                    },
                    {
                        "value": "208.64.230.6:33338",
                        "timestamp": "2023-01-27 13:51:02"
                    },
                    {
                        "value": "208.64.230.6:8585",
                        "timestamp": "2023-01-27 13:51:01"
                    },
                    {
                        "value": "198.211.15.57:9002",
                        "timestamp": "2023-01-27 13:50:58"
                    },
                    {
                        "value": "198.211.15.57:9001",
                        "timestamp": "2023-01-27 13:50:57"
                    },
                    {
                        "value": "198.211.15.57:9000",
                        "timestamp": "2023-01-27 13:50:56"
                    },
                    {
                        "value": "198.211.15.57:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "195.245.239.108:31337",
                        "timestamp": "2023-01-27 13:50:53"
                    },
                    {
                        "value": "195.245.239.108:443",
                        "timestamp": "2023-01-27 13:50:52"
                    },
                    {
                        "value": "195.245.239.108:1443",
                        "timestamp": "2023-01-27 13:50:51"
                    },
                    {
                        "value": "193.178.147.164:8080",
                        "timestamp": "2023-01-27 13:50:48"
                    },
                    {
                        "value": "192.241.154.94:8888",
                        "timestamp": "2023-01-27 13:50:46"
                    },
                    {
                        "value": "192.241.154.94:31337",
                        "timestamp": "2023-01-27 13:50:44"
                    },
                    {
                        "value": "192.227.194.106:8888",
                        "timestamp": "2023-01-27 13:50:42"
                    },
                    {
                        "value": "192.227.194.106:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "192.169.6.122:8891",
                        "timestamp": "2023-01-27 13:50:38"
                    },
                    {
                        "value": "192.169.6.122:8889",
                        "timestamp": "2023-01-27 13:50:36"
                    },
                    {
                        "value": "192.169.6.122:8888",
                        "timestamp": "2023-01-27 13:50:35"
                    },
                    {
                        "value": "192.169.6.122:31337",
                        "timestamp": "2023-01-27 13:50:34"
                    },
                    {
                        "value": "190.92.243.156:8443",
                        "timestamp": "2023-01-27 13:50:31"
                    },
                    {
                        "value": "190.92.243.156:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "188.166.81.141:31337",
                        "timestamp": "2023-03-25 14:32:51"
                    },
                    {
                        "value": "185.150.119.7:4443",
                        "timestamp": "2023-01-27 13:50:22"
                    },
                    {
                        "value": "185.150.119.7:31337",
                        "timestamp": "2023-01-27 13:50:20"
                    },
                    {
                        "value": "185.141.61.185:8888",
                        "timestamp": "2023-01-27 13:50:17"
                    },
                    {
                        "value": "185.141.61.185:31337",
                        "timestamp": "2023-01-27 13:50:15"
                    },
                    {
                        "value": "185.25.51.144:8888",
                        "timestamp": "2023-01-27 13:50:12"
                    },
                    {
                        "value": "185.25.51.144:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "184.73.118.20:8888",
                        "timestamp": "2023-01-27 13:50:05"
                    },
                    {
                        "value": "184.73.118.20:31337",
                        "timestamp": "2023-01-27 13:50:02"
                    },
                    {
                        "value": "178.62.47.29:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "178.62.47.29:4443",
                        "timestamp": "2023-01-27 13:49:57"
                    },
                    {
                        "value": "173.82.192.38:8888",
                        "timestamp": "2023-01-27 13:49:54"
                    },
                    {
                        "value": "173.82.192.38:31337",
                        "timestamp": "2023-01-27 13:49:53"
                    },
                    {
                        "value": "173.82.135.18:8888",
                        "timestamp": "2023-01-27 13:49:50"
                    },
                    {
                        "value": "173.82.135.18:31337",
                        "timestamp": "2023-03-25 14:32:50"
                    },
                    {
                        "value": "173.82.135.18:443",
                        "timestamp": "2023-01-27 13:49:47"
                    },
                    {
                        "value": "172.104.238.198:56437",
                        "timestamp": "2023-01-27 13:49:44"
                    },
                    {
                        "value": "167.71.108.217:8888",
                        "timestamp": "2023-01-27 13:49:42"
                    },
                    {
                        "value": "167.71.108.217:31337",
                        "timestamp": "2023-01-27 13:49:40"
                    },
                    {
                        "value": "165.227.231.125:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "165.227.230.18:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "165.227.230.18:443",
                        "timestamp": "2023-01-27 13:49:32"
                    },
                    {
                        "value": "164.92.255.219:443",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "164.92.255.219:8080",
                        "timestamp": "2023-01-27 13:49:27"
                    },
                    {
                        "value": "161.35.214.132:443",
                        "timestamp": "2023-01-27 13:49:22"
                    },
                    {
                        "value": "161.35.214.132:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "159.65.62.90:8889",
                        "timestamp": "2023-01-27 13:49:17"
                    },
                    {
                        "value": "159.65.62.90:8888",
                        "timestamp": "2023-01-27 13:49:16"
                    },
                    {
                        "value": "159.65.62.90:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "154.38.161.223:8888",
                        "timestamp": "2023-02-19 08:23:55"
                    },
                    {
                        "value": "154.38.161.223:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "154.3.8.48:443",
                        "timestamp": "2023-01-27 13:49:07"
                    },
                    {
                        "value": "154.3.8.48:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "151.115.60.162:31337",
                        "timestamp": "2023-03-25 14:32:49"
                    },
                    {
                        "value": "151.115.60.162:9191",
                        "timestamp": "2023-01-27 13:48:59"
                    },
                    {
                        "value": "149.56.132.95:8888",
                        "timestamp": "2023-01-27 13:48:57"
                    },
                    {
                        "value": "149.56.132.95:31337",
                        "timestamp": "2023-01-27 13:48:55"
                    },
                    {
                        "value": "149.56.132.95:443",
                        "timestamp": "2023-01-27 13:48:53"
                    },
                    {
                        "value": "144.34.160.57:8888",
                        "timestamp": "2023-01-27 13:48:50"
                    },
                    {
                        "value": "144.34.160.57:31337",
                        "timestamp": "2023-01-27 13:48:49"
                    },
                    {
                        "value": "143.110.155.198:8888",
                        "timestamp": "2023-01-27 13:48:46"
                    },
                    {
                        "value": "143.110.155.198:31337",
                        "timestamp": "2023-03-25 14:32:48"
                    },
                    {
                        "value": "142.93.136.194:8443",
                        "timestamp": "2023-01-27 13:48:42"
                    },
                    {
                        "value": "142.93.136.194:4443",
                        "timestamp": "2023-01-27 13:48:41"
                    },
                    {
                        "value": "142.93.136.194:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "141.193.159.146:8888",
                        "timestamp": "2023-01-27 13:48:37"
                    },
                    {
                        "value": "141.193.159.146:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "139.224.254.195:32032",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "139.224.254.195:443",
                        "timestamp": "2023-01-27 13:48:30"
                    },
                    {
                        "value": "139.144.27.201:8888",
                        "timestamp": "2023-01-27 13:48:27"
                    },
                    {
                        "value": "139.144.27.201:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "138.68.149.85:443",
                        "timestamp": "2023-01-27 13:48:23"
                    },
                    {
                        "value": "138.68.149.85:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "138.68.99.116:31337",
                        "timestamp": "2023-05-26 10:58:54"
                    },
                    {
                        "value": "138.68.99.116:443",
                        "timestamp": "2023-01-27 13:48:17"
                    },
                    {
                        "value": "134.255.218.232:8888",
                        "timestamp": "2023-01-27 13:48:14"
                    },
                    {
                        "value": "134.255.218.232:31337",
                        "timestamp": "2023-01-27 13:48:13"
                    },
                    {
                        "value": "134.209.26.96:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "134.209.26.96:10443",
                        "timestamp": "2023-01-27 13:48:09"
                    },
                    {
                        "value": "128.199.38.50:443",
                        "timestamp": "2023-01-27 13:48:05"
                    },
                    {
                        "value": "128.199.38.50:8080",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "121.199.2.153:37725",
                        "timestamp": "2023-01-27 13:48:00"
                    },
                    {
                        "value": "121.199.2.153:443",
                        "timestamp": "2023-01-27 13:47:59"
                    },
                    {
                        "value": "118.193.37.157:8888",
                        "timestamp": "2023-01-27 13:47:56"
                    },
                    {
                        "value": "118.193.37.157:9999",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "118.25.158.13:31337",
                        "timestamp": "2023-01-27 13:47:52"
                    },
                    {
                        "value": "118.25.22.185:8888",
                        "timestamp": "2023-01-27 13:47:50"
                    },
                    {
                        "value": "114.132.197.186:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "110.173.59.147:8888",
                        "timestamp": "2023-01-27 13:47:44"
                    },
                    {
                        "value": "110.173.59.147:31337",
                        "timestamp": "2023-07-15 18:45:13"
                    },
                    {
                        "value": "110.173.59.146:8888",
                        "timestamp": "2023-01-27 13:47:40"
                    },
                    {
                        "value": "110.173.59.146:31337",
                        "timestamp": "2023-05-26 10:58:52"
                    },
                    {
                        "value": "107.174.78.227:31337",
                        "timestamp": "2023-03-25 14:32:47"
                    },
                    {
                        "value": "107.174.78.227:8080",
                        "timestamp": "2023-01-27 13:47:34"
                    },
                    {
                        "value": "101.36.121.133:8888",
                        "timestamp": "2023-01-27 13:47:31"
                    },
                    {
                        "value": "101.36.121.133:31337",
                        "timestamp": "2023-01-27 13:47:29"
                    },
                    {
                        "value": "93.95.229.168:8888",
                        "timestamp": "2023-01-27 13:47:25"
                    },
                    {
                        "value": "93.95.229.168:443",
                        "timestamp": "2023-07-07 06:45:33"
                    },
                    {
                        "value": "93.95.229.168:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "92.223.65.169:443",
                        "timestamp": "2023-01-27 13:47:18"
                    },
                    {
                        "value": "92.223.65.169:31337",
                        "timestamp": "2023-01-27 13:47:16"
                    },
                    {
                        "value": "91.240.202.179:31337",
                        "timestamp": "2023-01-27 13:47:14"
                    },
                    {
                        "value": "91.240.202.179:443",
                        "timestamp": "2023-01-27 13:47:12"
                    },
                    {
                        "value": "89.147.111.80:8888",
                        "timestamp": "2023-01-27 13:47:08"
                    },
                    {
                        "value": "89.147.111.80:31337",
                        "timestamp": "2023-01-27 13:47:07"
                    },
                    {
                        "value": "82.157.142.84:13137",
                        "timestamp": "2023-08-03 06:45:33"
                    },
                    {
                        "value": "77.91.73.143:8888",
                        "timestamp": "2023-07-02 06:45:09"
                    },
                    {
                        "value": "77.91.73.143:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "68.183.207.200:8888",
                        "timestamp": "2023-01-27 13:46:57"
                    },
                    {
                        "value": "68.183.207.200:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "67.205.175.21:31337",
                        "timestamp": "2023-01-27 13:46:52"
                    },
                    {
                        "value": "67.205.175.21:8888",
                        "timestamp": "2023-01-27 13:46:50"
                    },
                    {
                        "value": "66.42.87.133:8888",
                        "timestamp": "2023-01-27 13:46:46"
                    },
                    {
                        "value": "66.42.87.133:31337",
                        "timestamp": "2023-01-27 13:46:44"
                    },
                    {
                        "value": "65.108.250.5:8448",
                        "timestamp": "2023-03-25 14:50:48"
                    },
                    {
                        "value": "64.44.102.212:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "64.44.102.212:8888",
                        "timestamp": "2023-01-27 13:46:35"
                    },
                    {
                        "value": "64.44.102.190:8888",
                        "timestamp": "2023-01-27 13:46:32"
                    },
                    {
                        "value": "64.44.102.190:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "51.178.81.117:8888",
                        "timestamp": "2023-01-27 13:46:28"
                    },
                    {
                        "value": "51.178.81.117:31337",
                        "timestamp": "2023-05-26 10:58:48"
                    },
                    {
                        "value": "51.81.201.194:31337",
                        "timestamp": "2023-05-26 10:58:49"
                    },
                    {
                        "value": "51.81.201.194:8888",
                        "timestamp": "2023-01-27 13:46:21"
                    },
                    {
                        "value": "49.232.0.5:31337",
                        "timestamp": "2023-01-27 13:46:18"
                    },
                    {
                        "value": "46.21.153.155:31337",
                        "timestamp": "2023-05-26 10:58:45"
                    },
                    {
                        "value": "46.21.153.155:8443",
                        "timestamp": "2023-01-27 13:46:15"
                    },
                    {
                        "value": "45.154.14.194:31337",
                        "timestamp": "2023-01-27 13:46:12"
                    },
                    {
                        "value": "45.154.14.194:443",
                        "timestamp": "2023-01-27 13:46:11"
                    },
                    {
                        "value": "45.120.52.149:8888",
                        "timestamp": "2023-01-27 13:46:05"
                    },
                    {
                        "value": "45.120.52.149:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "45.120.52.106:8888",
                        "timestamp": "2023-01-27 13:46:00"
                    },
                    {
                        "value": "45.120.52.106:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "45.87.43.114:443",
                        "timestamp": "2023-01-27 13:45:56"
                    },
                    {
                        "value": "45.87.43.114:31337",
                        "timestamp": "2023-01-27 13:45:54"
                    },
                    {
                        "value": "45.77.221.80:8888",
                        "timestamp": "2023-01-27 13:45:52"
                    },
                    {
                        "value": "45.77.221.80:31337",
                        "timestamp": "2023-05-26 10:58:53"
                    },
                    {
                        "value": "45.32.233.220:8888",
                        "timestamp": "2023-01-27 13:45:48"
                    },
                    {
                        "value": "45.32.233.220:31337",
                        "timestamp": "2023-03-25 14:32:46"
                    },
                    {
                        "value": "45.9.148.212:31337",
                        "timestamp": "2023-01-27 13:45:43"
                    },
                    {
                        "value": "45.9.148.212:8888",
                        "timestamp": "2023-01-27 13:45:42"
                    },
                    {
                        "value": "45.9.148.64:5443",
                        "timestamp": "2023-01-27 13:45:38"
                    },
                    {
                        "value": "45.9.148.64:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "37.120.238.184:88",
                        "timestamp": "2023-01-27 13:45:32"
                    },
                    {
                        "value": "37.120.238.184:80",
                        "timestamp": "2023-01-27 13:45:31"
                    },
                    {
                        "value": "37.120.238.184:31337",
                        "timestamp": "2023-05-26 10:58:47"
                    },
                    {
                        "value": "23.239.30.17:8888",
                        "timestamp": "2023-01-27 13:45:26"
                    },
                    {
                        "value": "23.239.30.17:31337",
                        "timestamp": "2023-01-27 13:45:24"
                    },
                    {
                        "value": "23.224.135.142:8888",
                        "timestamp": "2023-01-27 13:45:21"
                    },
                    {
                        "value": "23.224.135.142:443",
                        "timestamp": "2023-01-27 13:45:19"
                    },
                    {
                        "value": "23.224.135.142:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.224.135.141:8888",
                        "timestamp": "2023-01-27 13:45:15"
                    },
                    {
                        "value": "23.224.135.141:443",
                        "timestamp": "2023-01-27 13:45:13"
                    },
                    {
                        "value": "23.224.135.141:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.224.135.140:8888",
                        "timestamp": "2023-01-27 13:45:07"
                    },
                    {
                        "value": "23.224.135.140:443",
                        "timestamp": "2023-01-27 13:45:04"
                    },
                    {
                        "value": "23.224.135.140:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.224.135.139:8888",
                        "timestamp": "2023-01-27 13:44:59"
                    },
                    {
                        "value": "23.224.135.139:443",
                        "timestamp": "2023-01-27 13:44:58"
                    },
                    {
                        "value": "23.224.135.139:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.224.135.138:8888",
                        "timestamp": "2023-01-27 13:44:51"
                    },
                    {
                        "value": "23.224.135.138:443",
                        "timestamp": "2023-01-27 13:44:49"
                    },
                    {
                        "value": "23.224.135.138:31337",
                        "timestamp": "2023-03-25 14:32:45"
                    },
                    {
                        "value": "23.95.44.80:8888",
                        "timestamp": "2023-01-27 13:44:45"
                    },
                    {
                        "value": "23.95.44.80:31337",
                        "timestamp": "2023-01-27 13:44:44"
                    },
                    {
                        "value": "23.82.141.146:8888",
                        "timestamp": "2023-01-27 13:44:41"
                    },
                    {
                        "value": "23.82.141.146:31337",
                        "timestamp": "2023-05-26 10:58:51"
                    },
                    {
                        "value": "20.61.4.19:4001",
                        "timestamp": "2023-01-27 13:44:36"
                    },
                    {
                        "value": "20.61.4.19:5000",
                        "timestamp": "2023-01-27 13:44:34"
                    },
                    {
                        "value": "20.61.4.19:4000",
                        "timestamp": "2023-01-27 13:44:33"
                    },
                    {
                        "value": "5.199.173.134:5443",
                        "timestamp": "2023-01-27 13:44:28"
                    },
                    {
                        "value": "5.199.173.134:31337",
                        "timestamp": "2023-01-27 13:44:26"
                    },
                    {
                        "value": "3.235.153.136:31337",
                        "timestamp": "2023-05-26 10:58:46"
                    },
                    {
                        "value": "3.85.22.130:8888",
                        "timestamp": "2023-01-27 13:44:20"
                    },
                    {
                        "value": "3.85.22.130:31337",
                        "timestamp": "2023-01-27 13:44:19"
                    },
                    {
                        "value": "1.13.17.105:31337",
                        "timestamp": "2023-01-27 13:44:15"
                    },
                    {
                        "value": "13.48.204.226:8082",
                        "timestamp": "2022-12-17 07:48:08"
                    },
                    {
                        "value": "172.105.222.100:8888",
                        "timestamp": "2022-09-04 16:32:52"
                    },
                    {
                        "value": "161.35.62.227:8443",
                        "timestamp": "2022-08-31 06:17:50"
                    },
                    {
                        "value": "165.227.231.125:443",
                        "timestamp": "2022-08-31 06:17:50"
                    },
                    {
                        "value": "178.18.247.95:443",
                        "timestamp": "2022-08-31 06:17:50"
                    },
                    {
                        "value": "185.25.51.144:443",
                        "timestamp": "2022-08-31 06:17:50"
                    },
                    {
                        "value": "198.58.103.64:443",
                        "timestamp": "2022-08-31 06:17:50"
                    },
                    {
                        "value": "209.141.45.215:443",
                        "timestamp": "2022-08-31 06:17:50"
                    },
                    {
                        "value": "146.190.14.192:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "149.28.63.25:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "150.136.62.139:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "158.69.102.4:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "158.101.5.57:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "159.223.14.39:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "159.223.201.125:443",
                        "timestamp": "2022-08-31 06:17:49"
                    },
                    {
                        "value": "106.14.30.199:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "106.15.78.194:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "107.20.113.175:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "134.209.101.218:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "137.184.202.213:9091",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "139.224.100.44:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "139.224.164.117:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "146.70.79.97:443",
                        "timestamp": "2022-08-31 06:17:48"
                    },
                    {
                        "value": "65.20.69.26:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "66.228.61.51:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "72.14.178.145:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "78.47.126.26:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "79.137.39.211:9090",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "101.132.125.34:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "101.133.174.70:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "104.131.35.176:443",
                        "timestamp": "2022-08-31 06:17:47"
                    },
                    {
                        "value": "47.116.9.252:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "47.242.117.160:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "47.242.122.35:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "51.15.57.83:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "51.15.228.209:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "54.151.62.116:8888",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "54.206.116.39:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "54.226.199.146:443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "64.227.122.163:8443",
                        "timestamp": "2022-08-31 06:17:46"
                    },
                    {
                        "value": "45.9.150.132:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "45.76.162.76:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "46.148.26.88:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "47.102.85.249:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "47.103.118.103:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "47.103.149.221:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "47.116.7.129:443",
                        "timestamp": "2022-08-31 06:17:45"
                    },
                    {
                        "value": "20.123.75.93:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "23.19.227.106:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "34.136.159.101:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "34.212.32.244:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "34.221.238.130:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "35.167.111.43:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "37.235.49.25:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "43.154.223.31:443",
                        "timestamp": "2022-08-31 06:17:44"
                    },
                    {
                        "value": "3.82.226.95:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "3.93.154.104:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "3.235.153.136:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "8.218.149.214:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "13.49.46.31:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "13.229.251.52:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "20.1.134.133:443",
                        "timestamp": "2022-08-31 06:17:43"
                    },
                    {
                        "value": "3.68.73.20:443",
                        "timestamp": "2022-08-31 06:17:42"
                    }
                ],
                "domain": [
                    {
                        "value": "microsoftapi.net",
                        "timestamp": "2023-09-21 11:26:25"
                    },
                    {
                        "value": "diagnostics.microsoftapi.net",
                        "timestamp": "2023-09-21 11:26:23"
                    },
                    {
                        "value": "pezimap.com",
                        "timestamp": "2023-03-04 06:40:14"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "e751803775085cf2328cb58bad171d03",
                        "timestamp": "2023-04-17 09:36:56"
                    },
                    {
                        "value": "837ccc654d9625be3eeee0df0093fbcb",
                        "timestamp": "2023-04-17 09:36:56"
                    },
                    {
                        "value": "41b8d74e06e7620e2010767bd1871db0",
                        "timestamp": "2023-04-17 09:36:56"
                    },
                    {
                        "value": "a1ceb50afec0e342a37e0985ccc1a9c1",
                        "timestamp": "2023-04-17 09:36:56"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-26 10:46:33",
    "mitre": [],
    "file_name": "sliver",
    "analysis": null
};