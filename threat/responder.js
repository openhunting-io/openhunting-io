var threatdata = {
    "name": "Responder",
    "alias": "Responder, SpiderLabs Responder",
    "category": "Tools",
    "type": "Poisoning",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Responder",
        "names": [
            {
                "name": "Responder"
            },
            {
                "name": "SpiderLabs Responder"
            }
        ],
        "description": "Responder is an open source tool used for LLMNR, NBT-NS and MDNS poisoning, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication.",
        "category": "Tools",
        "type": [
            "Poisoning"
        ],
        "information": [
            "https://github.com/SpiderLabs/Responder"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0174/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/py.responder"
        ],
        "uuid": "c1c43f6e-c49e-464e-90c4-1eb0d1d36c14",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Responder",
            "malware_alias": "SpiderLabs Responder",
            "malware": "py.responder",
            "last_update": "2023-12-01 06:51:03",
            "tags": [
                "GOOGLE-FIBER",
                "GLOBALCOMPASS",
                "LUCID-AS-AP LUCIDACLOUD LIMITED",
                "SITEHOST-AS-AP SiteHost New Zealand",
                "OVH",
                "DATA-CHEAP-AS",
                "ALGAR TELECOM SA",
                "S4N-AS",
                "CONTABO",
                "SURFNET-NL SURFnet The Netherlands",
                "TISCALI-",
                "TVALMANSA-ASN",
                "NICEIT",
                "STARK-INDUSTRIES",
                "ACCESS2IT Access2.IT Network",
                "FIBER-64",
                "INTERNAP-BLOCK-4",
                "GOOGLE-CLOUD-PLATFORM",
                "HS",
                "BCI",
                "GOOGLE-2",
                "AS-COLOCROSSING",
                "DAINTERNATIONALGROUP",
                "DataKeepers",
                "ASN-TELSTRA Telstra Corporation Ltd",
                "EGIHOSTING",
                "INCOGNET",
                "PAGM-AS",
                "IGRA-SERVICE-AS",
                "TENCENT-NET-AP Shenzhen Tencent Computer Systems Company Limited",
                "BHN-33363",
                "TENCENT-NET-AP-CN Tencent Building Kejizhongyi Avenue",
                "LEASEWEB-NL-AMS-01 Netherlands",
                "TRANSIP-AS Amsterdam the Netherlands",
                "VK-AS",
                "ADMAN-AS",
                "PONYNET",
                "TELIA-LIETUVA",
                "NAVISITE-EAST-2",
                "CYGATEGROUP",
                "VERSATEL",
                "CMNET-GUANGDONG-AP China Mobile communications corporation",
                "AMC",
                "NET23-AS",
                "SINGTEL-FIBRE Singtel Fibre Broadband",
                "RIT-ASN",
                "UUNET",
                "ROUTERHOSTING",
                "Online SAS",
                "COMBAHTON combahton GmbH",
                "SERVERIUS-USERS-AS",
                "TRANSTELCO-INC",
                "ESERVER-",
                "PROXAD",
                "GET-NO GET Norway",
                "ALEXHOST",
                "FIRSTBYTE-AS",
                "IST-AS",
                "SN-2006",
                "VDSINA-AS",
                "HRINGDU-AS",
                "SPECTRAIP SpectraIP B.V.",
                "BANDWIDTH-AS",
                "SHOCK-1",
                "PEGTECHINC-AP-01",
                "W1N",
                "AMAZON-02",
                "AKAMAI-AP Akamai Technologies Inc.",
                "VELIANET-AS velia.net Internetdienste GmbH",
                "ITGRAD",
                "UPCLOUDUSA",
                "ABSTRACT",
                "VODAFONE-CZ-AS",
                "XNNET",
                "SELECTEL",
                "UNIKL",
                "HZ-EU-AS",
                "AMAZON-AES",
                "BELPAK-AS BELPAK",
                "TE-AS TE-AS",
                "NETERRA-AS",
                "AS_DELIS",
                "MTS-CLOUD-A",
                "WINDSTREAM",
                "DEFENDE",
                "M247",
                "FORTIS-AS Hosting services",
                "AMAZON EXPANSION",
                "CAPITA-AS",
                "AS-CHOOPA",
                "MASTER-AS Czech Republic  www.master.cz",
                "INT-NETWORK",
                "FASTWEB",
                "CCCV-AS Chaos Computer Club Veranstaltungsgesellschaft mbH",
                "GREENCLOUD",
                "ISP-SOLUTIONS-AS Geneva Switzerland",
                "HOSTKEY-RU-AS",
                "BMSL-2-ARIN",
                "VDSINA-NL",
                "HETZNER-CLOUD2-AS",
                "CITTEL CJSC City Telecom",
                "DEDIPATH-LLC",
                "MVPS www.mvps.net",
                "RAPID7",
                "YANDEXCLOUD",
                "CHELYABINSK-SIGNAL-AS",
                "HETZNER-CLOUD3-AS",
                "HURRICANE",
                "VYVE-BROADBAND",
                "LEASEWEB-USA-LAX",
                "ATT-INTERNET4",
                "ELISA-AS Helsinki Finland",
                "PLI-AS",
                "MITI2000",
                "HETZNER-AS",
                "CPS",
                "MEVSPACE",
                "Administracion Nacional de Telecomunicaciones",
                "UNITEDSOLUTIONS",
                "CLDIN-NL Your.Online",
                "Responder",
                "DATAHOP Datahop - Six Degrees",
                "FHSU",
                "EVEA-CLOUD",
                "PSKZ-ALA",
                "MTW-AS",
                "ALIBABA-CN-NET Alibaba US Technology Co. Ltd.",
                "AKAMAI-LINODE-AP Akamai Connected Cloud",
                "COMCAST-7922",
                "DIGITALOCEAN-ASN",
                "AEZA-AS",
                "COLOCALL Internet Data Center ColoCALL",
                "XTOM-AS-JP xTom",
                "AS6758",
                "FIRST-SERVER-EUROPE",
                "ORACLE-BMC-31898",
                "ASN-QUADRANET-GLOBAL",
                "IMAQLIQ iqdata.center",
                "BATTERFLYAIMEDIA-AS",
                "DPI-ASN-01",
                "SNEL",
                "AS-HOSTINGER",
                "TWC-20001-PACWEST",
                "MICROSOFT-CORP-MSN-AS-BLOCK",
                "SCALAXY-AS",
                "WORLDSTREAM",
                "MULTA-ASN1",
                "ASBAXET",
                "BINCNET",
                "BN-AS Belarussian data communication service provider.",
                "NTL",
                "NJEDGE-NET",
                "AS-REG",
                "VISTEC-AS Wiesbaden Germany",
                "NDCTPL-IN NxtGen Datacenter & Cloud Technologies Pvt. Ltd.",
                "NAMECHEAP-NET",
                "UPCLOUD",
                "CNSERVERS",
                "-Reserved AS-",
                "FIORD-AS IP-transit operator in Europe",
                "COGENT-174",
                "GODADDY-SXB",
                "BLNWX",
                "SERVINGA-EE",
                "SERBIA-BROADBAND-AS Serbia BroadBand-Srpske Kablovske mreze d.o.o.",
                "RAMNODE",
                "UCLOUD-HK-AS-AP UCLOUD INFORMATION TECHNOLOGY HK LIMITED",
                "UNMANAGED-DEDICATED-SERVERS"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "170.64.164.161:445",
                        "timestamp": "2023-12-01 06:51:03"
                    },
                    {
                        "value": "193.57.139.54:445",
                        "timestamp": "2023-11-30 18:48:50"
                    },
                    {
                        "value": "31.28.170.72:445",
                        "timestamp": "2023-11-30 18:48:45"
                    },
                    {
                        "value": "3.16.54.238:445",
                        "timestamp": "2023-11-30 06:53:42"
                    },
                    {
                        "value": "18.236.110.124:445",
                        "timestamp": "2023-11-29 18:50:45"
                    },
                    {
                        "value": "104.236.2.176:445",
                        "timestamp": "2023-11-29 06:48:46"
                    },
                    {
                        "value": "3.89.114.203:445",
                        "timestamp": "2023-11-29 06:48:42"
                    },
                    {
                        "value": "145.0.6.14:443",
                        "timestamp": "2023-11-29 06:48:33"
                    },
                    {
                        "value": "34.220.23.89:445",
                        "timestamp": "2023-11-28 06:48:47"
                    },
                    {
                        "value": "15.223.13.149:443",
                        "timestamp": "2023-11-28 06:48:35"
                    },
                    {
                        "value": "134.209.244.69:445",
                        "timestamp": "2023-11-25 06:48:32"
                    },
                    {
                        "value": "35.160.176.170:445",
                        "timestamp": "2023-11-24 06:48:49"
                    },
                    {
                        "value": "170.64.194.59:445",
                        "timestamp": "2023-11-26 18:48:57"
                    },
                    {
                        "value": "165.227.45.0:445",
                        "timestamp": "2023-11-24 06:48:37"
                    },
                    {
                        "value": "161.35.194.138:445",
                        "timestamp": "2023-11-23 18:49:14"
                    },
                    {
                        "value": "165.227.141.167:445",
                        "timestamp": "2023-11-22 18:49:50"
                    },
                    {
                        "value": "161.35.162.219:445",
                        "timestamp": "2023-11-22 18:49:43"
                    },
                    {
                        "value": "54.245.165.170:445",
                        "timestamp": "2023-11-22 06:49:14"
                    },
                    {
                        "value": "20.77.132.128:445",
                        "timestamp": "2023-11-21 18:48:37"
                    },
                    {
                        "value": "46.101.85.199:445",
                        "timestamp": "2023-11-21 18:48:32"
                    },
                    {
                        "value": "13.36.11.243:445",
                        "timestamp": "2023-11-21 18:48:32"
                    },
                    {
                        "value": "51.20.80.52:445",
                        "timestamp": "2023-11-21 18:48:28"
                    },
                    {
                        "value": "109.72.93.55:445",
                        "timestamp": "2023-11-21 18:48:19"
                    },
                    {
                        "value": "5.39.249.226:445",
                        "timestamp": "2023-11-21 18:48:15"
                    },
                    {
                        "value": "147.182.146.29:445",
                        "timestamp": "2023-11-20 18:48:31"
                    },
                    {
                        "value": "34.124.220.218:445",
                        "timestamp": "2023-11-18 18:49:18"
                    },
                    {
                        "value": "136.40.23.26:445",
                        "timestamp": "2023-11-18 18:49:15"
                    },
                    {
                        "value": "167.172.232.177:445",
                        "timestamp": "2023-11-18 18:49:08"
                    },
                    {
                        "value": "34.245.72.161:445",
                        "timestamp": "2023-11-18 18:48:58"
                    },
                    {
                        "value": "178.239.168.153:445",
                        "timestamp": "2023-11-18 18:48:48"
                    },
                    {
                        "value": "144.172.79.129:445",
                        "timestamp": "2023-11-17 18:48:33"
                    },
                    {
                        "value": "91.193.18.110:445",
                        "timestamp": "2023-11-17 06:48:49"
                    },
                    {
                        "value": "3.10.217.178:445",
                        "timestamp": "2023-11-17 06:48:46"
                    },
                    {
                        "value": "31.13.195.53:445",
                        "timestamp": "2023-11-17 06:48:38"
                    },
                    {
                        "value": "35.167.121.116:445",
                        "timestamp": "2023-11-16 18:49:03"
                    },
                    {
                        "value": "94.237.44.137:445",
                        "timestamp": "2023-11-16 18:48:53"
                    },
                    {
                        "value": "66.228.60.73:445",
                        "timestamp": "2023-11-16 18:48:44"
                    },
                    {
                        "value": "91.134.141.245:445",
                        "timestamp": "2023-11-15 18:48:29"
                    },
                    {
                        "value": "49.12.245.198:445",
                        "timestamp": "2023-11-15 18:48:24"
                    },
                    {
                        "value": "24.199.115.140:445",
                        "timestamp": "2023-11-15 06:48:46"
                    },
                    {
                        "value": "54.186.60.102:445",
                        "timestamp": "2023-11-15 06:48:42"
                    },
                    {
                        "value": "3.97.232.186:445",
                        "timestamp": "2023-11-15 06:48:38"
                    },
                    {
                        "value": "34.81.238.204:445",
                        "timestamp": "2023-11-15 06:48:33"
                    },
                    {
                        "value": "51.255.45.227:445",
                        "timestamp": "2023-11-14 06:48:50"
                    },
                    {
                        "value": "40.122.50.119:445",
                        "timestamp": "2023-11-14 06:48:44"
                    },
                    {
                        "value": "46.240.140.66:445",
                        "timestamp": "2023-11-13 18:48:12"
                    },
                    {
                        "value": "68.183.220.190:445",
                        "timestamp": "2023-11-13 18:48:06"
                    },
                    {
                        "value": "64.227.34.214:445",
                        "timestamp": "2023-11-13 06:48:13"
                    },
                    {
                        "value": "54.202.205.155:445",
                        "timestamp": "2023-11-12 18:48:28"
                    },
                    {
                        "value": "157.230.112.79:445",
                        "timestamp": "2023-11-11 06:48:22"
                    },
                    {
                        "value": "54.210.116.98:445",
                        "timestamp": "2023-11-11 06:48:17"
                    },
                    {
                        "value": "20.212.52.184:445",
                        "timestamp": "2023-11-11 06:48:12"
                    },
                    {
                        "value": "139.144.16.233:445",
                        "timestamp": "2023-11-10 06:48:32"
                    },
                    {
                        "value": "89.22.173.93:445",
                        "timestamp": "2023-11-10 06:48:29"
                    },
                    {
                        "value": "37.97.228.227:445",
                        "timestamp": "2023-11-09 18:48:22"
                    },
                    {
                        "value": "34.204.9.79:445",
                        "timestamp": "2023-11-09 18:48:18"
                    },
                    {
                        "value": "20.119.98.226:445",
                        "timestamp": "2023-11-09 06:48:30"
                    },
                    {
                        "value": "138.197.202.47:445",
                        "timestamp": "2023-11-08 18:48:51"
                    },
                    {
                        "value": "49.12.207.253:445",
                        "timestamp": "2023-11-08 18:48:42"
                    },
                    {
                        "value": "23.137.248.37:445",
                        "timestamp": "2023-11-08 06:49:08"
                    },
                    {
                        "value": "34.151.215.152:445",
                        "timestamp": "2023-11-08 06:49:00"
                    },
                    {
                        "value": "35.93.4.222:445",
                        "timestamp": "2023-11-08 06:48:53"
                    },
                    {
                        "value": "45.9.148.192:445",
                        "timestamp": "2023-11-07 18:49:37"
                    },
                    {
                        "value": "94.237.24.72:445",
                        "timestamp": "2023-11-07 06:48:22"
                    },
                    {
                        "value": "5.61.58.44:445",
                        "timestamp": "2023-11-06 18:48:18"
                    },
                    {
                        "value": "198.46.188.120:445",
                        "timestamp": "2023-11-06 18:48:11"
                    },
                    {
                        "value": "45.9.148.206:445",
                        "timestamp": "2023-11-06 18:48:08"
                    },
                    {
                        "value": "54.171.28.181:445",
                        "timestamp": "2023-11-05 18:48:22"
                    },
                    {
                        "value": "35.88.175.159:445",
                        "timestamp": "2023-11-05 18:48:18"
                    },
                    {
                        "value": "138.68.148.102:445",
                        "timestamp": "2023-11-05 06:48:08"
                    },
                    {
                        "value": "3.144.150.19:445",
                        "timestamp": "2023-11-03 18:50:56"
                    },
                    {
                        "value": "172.86.96.200:445",
                        "timestamp": "2023-11-02 18:48:20"
                    },
                    {
                        "value": "52.15.189.183:445",
                        "timestamp": "2023-11-02 18:48:14"
                    },
                    {
                        "value": "149.28.187.247:445",
                        "timestamp": "2023-11-01 18:48:22"
                    },
                    {
                        "value": "147.182.251.155:445",
                        "timestamp": "2023-10-31 18:49:02"
                    },
                    {
                        "value": "52.12.216.60:445",
                        "timestamp": "2023-10-30 18:48:55"
                    },
                    {
                        "value": "140.82.35.207:445",
                        "timestamp": "2023-10-29 06:48:35"
                    },
                    {
                        "value": "18.194.188.180:445",
                        "timestamp": "2023-10-26 18:48:53"
                    },
                    {
                        "value": "18.143.48.192:445",
                        "timestamp": "2023-10-25 18:48:55"
                    },
                    {
                        "value": "20.127.6.88:445",
                        "timestamp": "2023-10-25 06:49:30"
                    },
                    {
                        "value": "120.138.18.160:445",
                        "timestamp": "2023-10-25 06:49:22"
                    },
                    {
                        "value": "137.184.96.87:445",
                        "timestamp": "2023-10-24 06:48:59"
                    },
                    {
                        "value": "172.96.137.114:445",
                        "timestamp": "2023-11-25 18:48:26"
                    },
                    {
                        "value": "194.163.135.129:445",
                        "timestamp": "2023-10-23 18:48:54"
                    },
                    {
                        "value": "66.29.147.104:445",
                        "timestamp": "2023-10-23 06:48:35"
                    },
                    {
                        "value": "66.29.147.128:445",
                        "timestamp": "2023-10-22 06:48:27"
                    },
                    {
                        "value": "54.186.125.59:445",
                        "timestamp": "2023-10-21 18:48:36"
                    },
                    {
                        "value": "45.92.156.93:445",
                        "timestamp": "2023-10-21 18:48:32"
                    },
                    {
                        "value": "20.250.100.179:445",
                        "timestamp": "2023-10-21 18:48:25"
                    },
                    {
                        "value": "103.113.70.248:445",
                        "timestamp": "2023-10-20 18:49:15"
                    },
                    {
                        "value": "80.249.81.117:445",
                        "timestamp": "2023-10-20 18:49:12"
                    },
                    {
                        "value": "35.181.1.12:445",
                        "timestamp": "2023-10-20 18:49:08"
                    },
                    {
                        "value": "118.193.72.148:445",
                        "timestamp": "2023-10-20 18:48:59"
                    },
                    {
                        "value": "54.172.90.61:445",
                        "timestamp": "2023-10-20 06:49:10"
                    },
                    {
                        "value": "138.68.162.36:445",
                        "timestamp": "2023-10-20 06:49:06"
                    },
                    {
                        "value": "18.116.62.123:445",
                        "timestamp": "2023-10-19 18:49:00"
                    },
                    {
                        "value": "159.223.13.132:445",
                        "timestamp": "2023-10-17 18:48:13"
                    },
                    {
                        "value": "87.254.230.24:445",
                        "timestamp": "2023-10-16 18:50:16"
                    },
                    {
                        "value": "45.77.25.42:445",
                        "timestamp": "2023-10-16 18:50:11"
                    },
                    {
                        "value": "52.24.78.22:445",
                        "timestamp": "2023-10-15 06:48:14"
                    },
                    {
                        "value": "20.106.112.43:80",
                        "timestamp": "2023-10-15 06:48:10"
                    },
                    {
                        "value": "52.10.198.76:445",
                        "timestamp": "2023-10-14 18:48:30"
                    },
                    {
                        "value": "192.169.7.120:445",
                        "timestamp": "2023-10-14 18:48:21"
                    },
                    {
                        "value": "54.202.240.205:445",
                        "timestamp": "2023-10-14 06:48:46"
                    },
                    {
                        "value": "18.221.13.155:445",
                        "timestamp": "2023-10-13 18:48:20"
                    },
                    {
                        "value": "15.236.208.20:445",
                        "timestamp": "2023-10-13 18:48:14"
                    },
                    {
                        "value": "206.189.28.240:445",
                        "timestamp": "2023-10-12 18:48:52"
                    },
                    {
                        "value": "15.237.120.188:445",
                        "timestamp": "2023-10-12 18:48:49"
                    },
                    {
                        "value": "13.49.69.138:445",
                        "timestamp": "2023-10-12 06:48:48"
                    },
                    {
                        "value": "4.197.70.9:445",
                        "timestamp": "2023-10-12 06:48:32"
                    },
                    {
                        "value": "158.255.213.74:445",
                        "timestamp": "2023-10-11 06:48:39"
                    },
                    {
                        "value": "52.212.253.75:445",
                        "timestamp": "2023-10-10 18:48:42"
                    },
                    {
                        "value": "167.172.40.16:445",
                        "timestamp": "2023-10-10 18:48:38"
                    },
                    {
                        "value": "18.188.146.198:445",
                        "timestamp": "2023-10-10 06:49:10"
                    },
                    {
                        "value": "100.25.177.115:445",
                        "timestamp": "2023-10-09 18:49:18"
                    },
                    {
                        "value": "161.97.70.216:445",
                        "timestamp": "2023-10-09 18:49:13"
                    },
                    {
                        "value": "13.236.50.126:445",
                        "timestamp": "2023-10-09 06:49:09"
                    },
                    {
                        "value": "83.243.182.77:445",
                        "timestamp": "2023-10-08 18:48:49"
                    },
                    {
                        "value": "108.60.140.40:445",
                        "timestamp": "2023-10-08 06:48:40"
                    },
                    {
                        "value": "82.147.84.72:445",
                        "timestamp": "2023-10-07 18:48:33"
                    },
                    {
                        "value": "74.235.124.126:445",
                        "timestamp": "2023-10-07 06:48:39"
                    },
                    {
                        "value": "44.212.57.147:445",
                        "timestamp": "2023-10-06 18:48:57"
                    },
                    {
                        "value": "167.235.149.241:445",
                        "timestamp": "2023-10-06 18:48:54"
                    },
                    {
                        "value": "216.238.81.194:80",
                        "timestamp": "2023-10-05 18:48:33"
                    },
                    {
                        "value": "45.32.38.10:445",
                        "timestamp": "2023-10-05 06:49:13"
                    },
                    {
                        "value": "185.183.33.148:80",
                        "timestamp": "2023-10-04 06:48:53"
                    },
                    {
                        "value": "164.92.184.99:445",
                        "timestamp": "2023-10-03 18:48:42"
                    },
                    {
                        "value": "18.217.247.197:445",
                        "timestamp": "2023-10-03 06:49:25"
                    },
                    {
                        "value": "3.249.165.43:445",
                        "timestamp": "2023-10-03 06:49:22"
                    },
                    {
                        "value": "35.88.74.16:445",
                        "timestamp": "2023-10-01 18:48:30"
                    },
                    {
                        "value": "185.183.33.148:443",
                        "timestamp": "2023-10-01 18:48:22"
                    },
                    {
                        "value": "13.59.8.92:445",
                        "timestamp": "2023-09-30 06:49:06"
                    },
                    {
                        "value": "89.246.175.139:445",
                        "timestamp": "2023-09-29 18:49:08"
                    },
                    {
                        "value": "201.174.21.202:445",
                        "timestamp": "2023-09-29 06:49:08"
                    },
                    {
                        "value": "104.248.82.194:445",
                        "timestamp": "2023-09-29 06:49:05"
                    },
                    {
                        "value": "92.243.64.44:445",
                        "timestamp": "2023-09-29 06:49:02"
                    },
                    {
                        "value": "3.250.85.71:445",
                        "timestamp": "2023-09-28 06:49:28"
                    },
                    {
                        "value": "137.184.232.71:80",
                        "timestamp": "2023-09-27 18:49:36"
                    },
                    {
                        "value": "54.78.31.229:445",
                        "timestamp": "2023-09-27 06:49:13"
                    },
                    {
                        "value": "167.172.68.48:445",
                        "timestamp": "2023-09-26 18:50:07"
                    },
                    {
                        "value": "13.58.96.172:445",
                        "timestamp": "2023-09-26 18:49:52"
                    },
                    {
                        "value": "104.214.231.190:445",
                        "timestamp": "2023-09-26 18:49:49"
                    },
                    {
                        "value": "13.39.125.197:445",
                        "timestamp": "2023-09-26 18:49:45"
                    },
                    {
                        "value": "165.232.108.62:445",
                        "timestamp": "2023-09-25 18:49:33"
                    },
                    {
                        "value": "3.253.126.198:445",
                        "timestamp": "2023-09-25 18:49:28"
                    },
                    {
                        "value": "34.254.92.89:445",
                        "timestamp": "2023-09-25 06:51:00"
                    },
                    {
                        "value": "54.229.70.32:445",
                        "timestamp": "2023-09-24 18:48:38"
                    },
                    {
                        "value": "18.224.23.33:445",
                        "timestamp": "2023-09-22 18:49:05"
                    },
                    {
                        "value": "18.203.66.157:443",
                        "timestamp": "2023-09-22 18:49:01"
                    },
                    {
                        "value": "54.171.200.92:5985",
                        "timestamp": "2023-09-22 18:48:55"
                    },
                    {
                        "value": "137.184.125.135:80",
                        "timestamp": "2023-09-22 06:48:59"
                    },
                    {
                        "value": "18.222.127.73:445",
                        "timestamp": "2023-09-22 06:48:42"
                    },
                    {
                        "value": "45.33.113.57:445",
                        "timestamp": "2023-09-21 18:50:42"
                    },
                    {
                        "value": "89.185.233.204:80",
                        "timestamp": "2023-09-21 18:49:54"
                    },
                    {
                        "value": "89.185.233.204:443",
                        "timestamp": "2023-09-21 18:49:54"
                    },
                    {
                        "value": "20.49.161.31:443",
                        "timestamp": "2023-09-21 18:49:36"
                    },
                    {
                        "value": "20.49.161.31:80",
                        "timestamp": "2023-09-21 18:49:35"
                    },
                    {
                        "value": "20.49.161.31:5985",
                        "timestamp": "2023-09-21 18:49:34"
                    },
                    {
                        "value": "178.170.221.54:445",
                        "timestamp": "2023-09-21 18:49:32"
                    },
                    {
                        "value": "178.170.221.54:5986",
                        "timestamp": "2023-09-21 18:49:31"
                    },
                    {
                        "value": "172.105.20.107:445",
                        "timestamp": "2023-09-21 18:49:30"
                    },
                    {
                        "value": "172.105.20.107:80",
                        "timestamp": "2023-09-21 18:49:29"
                    },
                    {
                        "value": "3.10.119.204:445",
                        "timestamp": "2023-09-21 18:49:17"
                    },
                    {
                        "value": "3.10.119.204:443",
                        "timestamp": "2023-09-21 18:49:17"
                    },
                    {
                        "value": "178.170.221.54:5985",
                        "timestamp": "2023-09-21 06:49:46"
                    },
                    {
                        "value": "178.170.221.54:443",
                        "timestamp": "2023-09-21 06:49:45"
                    },
                    {
                        "value": "172.105.20.107:5985",
                        "timestamp": "2023-09-21 06:49:40"
                    },
                    {
                        "value": "172.105.20.107:443",
                        "timestamp": "2023-09-21 06:49:39"
                    },
                    {
                        "value": "139.162.203.245:80",
                        "timestamp": "2023-09-21 06:49:33"
                    },
                    {
                        "value": "18.223.99.152:445",
                        "timestamp": "2023-09-20 18:51:28"
                    },
                    {
                        "value": "51.222.210.33:445",
                        "timestamp": "2023-09-20 18:51:23"
                    },
                    {
                        "value": "193.36.15.198:80",
                        "timestamp": "2023-09-20 18:51:12"
                    },
                    {
                        "value": "38.180.74.55:5985",
                        "timestamp": "2023-09-20 18:50:58"
                    },
                    {
                        "value": "38.180.74.55:443",
                        "timestamp": "2023-09-20 18:50:57"
                    },
                    {
                        "value": "38.180.74.55:80",
                        "timestamp": "2023-09-20 18:50:56"
                    },
                    {
                        "value": "51.91.192.245:445",
                        "timestamp": "2023-09-19 18:50:19"
                    },
                    {
                        "value": "54.215.195.254:80",
                        "timestamp": "2023-09-19 06:50:05"
                    },
                    {
                        "value": "82.209.203.58:5985",
                        "timestamp": "2023-09-19 06:50:00"
                    },
                    {
                        "value": "109.248.6.224:80",
                        "timestamp": "2023-09-19 06:49:54"
                    },
                    {
                        "value": "109.248.6.224:445",
                        "timestamp": "2023-09-19 06:49:53"
                    },
                    {
                        "value": "109.248.6.224:5985",
                        "timestamp": "2023-09-19 06:49:52"
                    },
                    {
                        "value": "109.248.6.224:443",
                        "timestamp": "2023-09-19 06:49:51"
                    },
                    {
                        "value": "38.180.74.55:445",
                        "timestamp": "2023-09-19 18:50:23"
                    },
                    {
                        "value": "94.237.58.198:5985",
                        "timestamp": "2023-09-18 18:49:58"
                    },
                    {
                        "value": "194.68.26.244:445",
                        "timestamp": "2023-09-17 18:49:15"
                    },
                    {
                        "value": "194.68.26.244:80",
                        "timestamp": "2023-09-17 18:49:14"
                    },
                    {
                        "value": "185.33.13.189:445",
                        "timestamp": "2023-09-15 18:49:52"
                    },
                    {
                        "value": "167.71.130.5:80",
                        "timestamp": "2023-10-25 19:34:58"
                    },
                    {
                        "value": "188.116.36.102:443",
                        "timestamp": "2023-09-15 18:49:35"
                    },
                    {
                        "value": "158.160.16.61:445",
                        "timestamp": "2023-09-15 18:49:28"
                    },
                    {
                        "value": "170.64.196.87:445",
                        "timestamp": "2023-09-14 18:49:35"
                    },
                    {
                        "value": "80.90.181.129:5985",
                        "timestamp": "2023-09-14 18:49:28"
                    },
                    {
                        "value": "80.90.181.129:443",
                        "timestamp": "2023-09-14 18:49:27"
                    },
                    {
                        "value": "89.117.53.115:445",
                        "timestamp": "2023-09-14 18:49:12"
                    },
                    {
                        "value": "142.93.239.226:445",
                        "timestamp": "2023-09-14 06:51:31"
                    },
                    {
                        "value": "162.221.25.38:445",
                        "timestamp": "2023-09-14 06:51:01"
                    },
                    {
                        "value": "158.160.16.61:443",
                        "timestamp": "2023-09-13 18:51:49"
                    },
                    {
                        "value": "158.160.16.61:5986",
                        "timestamp": "2023-09-13 18:51:48"
                    },
                    {
                        "value": "162.221.25.38:80",
                        "timestamp": "2023-09-13 18:51:41"
                    },
                    {
                        "value": "89.117.53.115:5985",
                        "timestamp": "2023-09-13 18:51:37"
                    },
                    {
                        "value": "38.242.21.30:80",
                        "timestamp": "2023-09-13 18:51:33"
                    },
                    {
                        "value": "44.195.147.254:80",
                        "timestamp": "2023-09-17 06:49:20"
                    },
                    {
                        "value": "104.200.16.74:443",
                        "timestamp": "2023-09-13 06:49:29"
                    },
                    {
                        "value": "94.102.59.188:445",
                        "timestamp": "2023-09-13 06:49:26"
                    },
                    {
                        "value": "20.218.135.30:445",
                        "timestamp": "2023-09-12 18:49:26"
                    },
                    {
                        "value": "18.236.65.63:445",
                        "timestamp": "2023-09-12 18:49:23"
                    },
                    {
                        "value": "89.103.125.204:445",
                        "timestamp": "2023-09-12 18:48:56"
                    },
                    {
                        "value": "89.103.125.204:8080",
                        "timestamp": "2023-09-12 18:48:56"
                    },
                    {
                        "value": "185.195.24.162:445",
                        "timestamp": "2023-09-12 06:51:36"
                    },
                    {
                        "value": "3.144.230.147:445",
                        "timestamp": "2023-09-12 06:51:31"
                    },
                    {
                        "value": "94.102.59.188:80",
                        "timestamp": "2023-09-12 06:51:24"
                    },
                    {
                        "value": "94.102.59.188:443",
                        "timestamp": "2023-09-12 06:51:24"
                    },
                    {
                        "value": "94.102.59.188:5985",
                        "timestamp": "2023-09-12 06:51:23"
                    },
                    {
                        "value": "92.205.183.181:80",
                        "timestamp": "2023-09-12 06:51:15"
                    },
                    {
                        "value": "38.180.26.172:80",
                        "timestamp": "2023-09-12 06:51:08"
                    },
                    {
                        "value": "38.180.26.172:445",
                        "timestamp": "2023-09-12 06:51:07"
                    },
                    {
                        "value": "38.180.26.172:5986",
                        "timestamp": "2023-09-12 06:51:06"
                    },
                    {
                        "value": "38.180.26.172:5985",
                        "timestamp": "2023-09-12 06:51:05"
                    },
                    {
                        "value": "38.180.26.172:443",
                        "timestamp": "2023-09-12 06:51:04"
                    },
                    {
                        "value": "44.195.147.254:445",
                        "timestamp": "2023-09-12 06:50:56"
                    },
                    {
                        "value": "44.195.147.254:443",
                        "timestamp": "2023-09-12 06:50:56"
                    },
                    {
                        "value": "185.162.235.233:445",
                        "timestamp": "2023-09-12 06:50:48"
                    },
                    {
                        "value": "104.131.9.22:80",
                        "timestamp": "2023-09-12 06:50:41"
                    },
                    {
                        "value": "104.131.9.22:445",
                        "timestamp": "2023-09-12 06:50:40"
                    },
                    {
                        "value": "45.153.231.136:8080",
                        "timestamp": "2023-09-11 18:51:02"
                    },
                    {
                        "value": "185.162.235.233:80",
                        "timestamp": "2023-09-11 18:50:58"
                    },
                    {
                        "value": "185.162.235.233:443",
                        "timestamp": "2023-09-11 18:50:57"
                    },
                    {
                        "value": "34.245.235.157:443",
                        "timestamp": "2023-09-11 18:50:52"
                    },
                    {
                        "value": "52.213.56.33:5986",
                        "timestamp": "2023-09-11 18:50:45"
                    },
                    {
                        "value": "18.117.150.53:80",
                        "timestamp": "2023-09-11 18:50:42"
                    },
                    {
                        "value": "3.249.217.223:5985",
                        "timestamp": "2023-09-11 18:50:39"
                    },
                    {
                        "value": "18.204.142.71:445",
                        "timestamp": "2023-09-11 18:50:34"
                    },
                    {
                        "value": "188.165.185.107:445",
                        "timestamp": "2023-09-08 06:50:21"
                    },
                    {
                        "value": "165.154.221.149:445",
                        "timestamp": "2023-09-08 06:50:16"
                    },
                    {
                        "value": "13.90.242.103:80",
                        "timestamp": "2023-09-08 06:50:07"
                    },
                    {
                        "value": "3.216.91.201:443",
                        "timestamp": "2023-09-08 06:50:00"
                    },
                    {
                        "value": "89.96.196.150:445",
                        "timestamp": "2023-09-08 06:49:50"
                    },
                    {
                        "value": "63.34.170.255:5986",
                        "timestamp": "2023-09-07 18:50:40"
                    },
                    {
                        "value": "18.184.92.206:445",
                        "timestamp": "2023-09-07 18:50:20"
                    },
                    {
                        "value": "18.184.92.206:80",
                        "timestamp": "2023-09-07 18:50:19"
                    },
                    {
                        "value": "209.51.171.194:445",
                        "timestamp": "2023-09-07 18:50:16"
                    },
                    {
                        "value": "18.184.92.206:443",
                        "timestamp": "2023-09-07 06:49:32"
                    },
                    {
                        "value": "18.218.161.182:445",
                        "timestamp": "2023-09-06 18:55:06"
                    },
                    {
                        "value": "54.194.129.38:445",
                        "timestamp": "2023-09-06 18:54:58"
                    },
                    {
                        "value": "3.141.41.197:445",
                        "timestamp": "2023-09-06 18:54:54"
                    },
                    {
                        "value": "157.245.22.50:443",
                        "timestamp": "2023-09-06 18:54:45"
                    },
                    {
                        "value": "35.178.178.143:80",
                        "timestamp": "2023-09-06 06:50:03"
                    },
                    {
                        "value": "45.152.85.12:80",
                        "timestamp": "2023-09-06 06:49:54"
                    },
                    {
                        "value": "75.119.142.33:443",
                        "timestamp": "2023-09-06 06:49:50"
                    },
                    {
                        "value": "159.65.193.223:443",
                        "timestamp": "2023-09-05 18:50:24"
                    },
                    {
                        "value": "89.96.196.150:8080",
                        "timestamp": "2023-09-05 18:50:20"
                    },
                    {
                        "value": "45.152.85.12:5985",
                        "timestamp": "2023-09-05 18:50:17"
                    },
                    {
                        "value": "95.179.185.77:443",
                        "timestamp": "2023-09-05 18:50:13"
                    },
                    {
                        "value": "52.215.189.181:443",
                        "timestamp": "2023-09-05 18:50:07"
                    },
                    {
                        "value": "149.28.176.160:445",
                        "timestamp": "2023-09-05 06:49:46"
                    },
                    {
                        "value": "165.232.41.18:445",
                        "timestamp": "2023-09-05 06:49:40"
                    },
                    {
                        "value": "46.101.82.153:80",
                        "timestamp": "2023-09-04 18:49:29"
                    },
                    {
                        "value": "206.71.148.109:5985",
                        "timestamp": "2023-09-04 18:49:23"
                    },
                    {
                        "value": "5.161.227.219:5985",
                        "timestamp": "2023-09-04 06:50:42"
                    },
                    {
                        "value": "5.161.227.219:443",
                        "timestamp": "2023-09-04 06:50:41"
                    },
                    {
                        "value": "143.110.239.243:443",
                        "timestamp": "2023-09-04 06:50:33"
                    },
                    {
                        "value": "104.207.155.133:80",
                        "timestamp": "2023-09-04 06:50:29"
                    },
                    {
                        "value": "158.101.172.180:80",
                        "timestamp": "2023-09-03 18:49:33"
                    },
                    {
                        "value": "54.235.25.159:5986",
                        "timestamp": "2023-09-03 18:49:22"
                    },
                    {
                        "value": "179.43.142.90:80",
                        "timestamp": "2023-09-03 06:49:30"
                    },
                    {
                        "value": "18.202.77.193:5985",
                        "timestamp": "2023-09-03 06:49:23"
                    },
                    {
                        "value": "206.71.148.109:445",
                        "timestamp": "2023-09-03 06:49:17"
                    },
                    {
                        "value": "206.71.148.109:443",
                        "timestamp": "2023-09-03 06:49:16"
                    },
                    {
                        "value": "185.238.248.67:5985",
                        "timestamp": "2023-09-03 06:49:15"
                    },
                    {
                        "value": "167.71.245.181:445",
                        "timestamp": "2023-09-03 06:48:59"
                    },
                    {
                        "value": "167.71.245.181:80",
                        "timestamp": "2023-09-02 18:49:29"
                    },
                    {
                        "value": "216.66.50.250:443",
                        "timestamp": "2023-09-02 18:49:21"
                    },
                    {
                        "value": "206.71.148.109:80",
                        "timestamp": "2023-09-02 18:49:17"
                    },
                    {
                        "value": "18.203.232.101:5985",
                        "timestamp": "2023-09-01 18:49:15"
                    },
                    {
                        "value": "138.197.129.43:443",
                        "timestamp": "2023-09-01 18:49:11"
                    },
                    {
                        "value": "164.90.192.165:5985",
                        "timestamp": "2023-09-01 18:49:05"
                    },
                    {
                        "value": "54.235.25.159:445",
                        "timestamp": "2023-09-01 18:48:56"
                    },
                    {
                        "value": "185.238.248.67:443",
                        "timestamp": "2023-09-01 06:48:52"
                    },
                    {
                        "value": "185.238.248.67:445",
                        "timestamp": "2023-09-01 06:48:51"
                    },
                    {
                        "value": "185.238.248.67:80",
                        "timestamp": "2023-09-01 06:48:51"
                    },
                    {
                        "value": "64.225.16.14:5986",
                        "timestamp": "2023-09-01 06:48:50"
                    },
                    {
                        "value": "54.235.25.159:443",
                        "timestamp": "2023-08-31 18:49:51"
                    },
                    {
                        "value": "54.235.25.159:80",
                        "timestamp": "2023-08-31 18:49:50"
                    },
                    {
                        "value": "13.90.242.103:443",
                        "timestamp": "2023-08-31 18:49:39"
                    },
                    {
                        "value": "171.33.246.87:80",
                        "timestamp": "2023-08-31 18:49:36"
                    },
                    {
                        "value": "158.160.68.42:443",
                        "timestamp": "2023-08-31 18:49:35"
                    },
                    {
                        "value": "50.173.136.70:445",
                        "timestamp": "2023-08-30 18:49:48"
                    },
                    {
                        "value": "50.173.136.89:445",
                        "timestamp": "2023-08-30 18:49:42"
                    },
                    {
                        "value": "99.20.25.218:5986",
                        "timestamp": "2023-08-30 18:49:41"
                    },
                    {
                        "value": "206.189.204.236:80",
                        "timestamp": "2023-08-30 18:49:34"
                    },
                    {
                        "value": "206.189.204.236:443",
                        "timestamp": "2023-08-30 18:49:34"
                    },
                    {
                        "value": "193.46.254.201:80",
                        "timestamp": "2023-08-30 18:49:31"
                    },
                    {
                        "value": "52.232.66.211:5985",
                        "timestamp": "2023-08-30 18:49:28"
                    },
                    {
                        "value": "54.235.25.159:5985",
                        "timestamp": "2023-08-30 18:49:25"
                    },
                    {
                        "value": "188.165.172.200:443",
                        "timestamp": "2023-08-30 18:49:19"
                    },
                    {
                        "value": "76.80.45.197:5985",
                        "timestamp": "2023-08-30 06:49:41"
                    },
                    {
                        "value": "76.80.45.197:443",
                        "timestamp": "2023-08-30 06:49:40"
                    },
                    {
                        "value": "149.28.176.160:8080",
                        "timestamp": "2023-08-30 06:49:34"
                    },
                    {
                        "value": "179.43.142.90:443",
                        "timestamp": "2023-08-30 06:49:31"
                    },
                    {
                        "value": "188.93.210.12:445",
                        "timestamp": "2023-08-30 06:49:28"
                    },
                    {
                        "value": "18.189.170.215:443",
                        "timestamp": "2023-08-30 06:49:17"
                    },
                    {
                        "value": "18.189.170.215:445",
                        "timestamp": "2023-08-30 06:49:17"
                    },
                    {
                        "value": "18.189.170.215:80",
                        "timestamp": "2023-08-30 06:49:16"
                    },
                    {
                        "value": "95.215.8.182:445",
                        "timestamp": "2023-08-29 18:49:27"
                    },
                    {
                        "value": "99.20.25.218:5985",
                        "timestamp": "2023-08-29 18:49:26"
                    },
                    {
                        "value": "188.93.210.12:5985",
                        "timestamp": "2023-08-29 18:49:19"
                    },
                    {
                        "value": "188.93.210.12:443",
                        "timestamp": "2023-08-29 18:49:18"
                    },
                    {
                        "value": "188.93.210.12:80",
                        "timestamp": "2023-08-29 18:49:17"
                    },
                    {
                        "value": "138.68.131.112:80",
                        "timestamp": "2023-08-29 18:49:16"
                    },
                    {
                        "value": "78.128.113.130:80",
                        "timestamp": "2023-08-29 18:49:10"
                    },
                    {
                        "value": "34.254.66.161:443",
                        "timestamp": "2023-08-29 18:49:05"
                    },
                    {
                        "value": "159.223.244.75:5985",
                        "timestamp": "2023-08-29 18:48:58"
                    },
                    {
                        "value": "159.223.244.75:80",
                        "timestamp": "2023-08-29 18:48:57"
                    },
                    {
                        "value": "207.127.27.17:80",
                        "timestamp": "2023-08-29 06:49:15"
                    },
                    {
                        "value": "120.138.18.160:443",
                        "timestamp": "2023-08-29 06:49:12"
                    },
                    {
                        "value": "193.46.254.201:443",
                        "timestamp": "2023-08-29 06:49:10"
                    },
                    {
                        "value": "3.252.35.178:5985",
                        "timestamp": "2023-08-28 18:49:19"
                    },
                    {
                        "value": "138.68.131.112:443",
                        "timestamp": "2023-08-28 18:49:13"
                    },
                    {
                        "value": "20.229.106.61:80",
                        "timestamp": "2023-08-28 18:49:10"
                    },
                    {
                        "value": "52.63.54.1:80",
                        "timestamp": "2023-08-30 18:49:41"
                    },
                    {
                        "value": "159.223.244.75:443",
                        "timestamp": "2023-08-28 18:48:57"
                    },
                    {
                        "value": "159.223.244.75:445",
                        "timestamp": "2023-08-28 18:48:56"
                    },
                    {
                        "value": "3.141.100.76:80",
                        "timestamp": "2023-08-28 06:48:51"
                    },
                    {
                        "value": "47.251.56.204:80",
                        "timestamp": "2023-08-27 18:49:05"
                    },
                    {
                        "value": "178.128.159.180:443",
                        "timestamp": "2023-08-26 06:48:59"
                    },
                    {
                        "value": "158.160.16.61:80",
                        "timestamp": "2023-08-25 18:49:19"
                    },
                    {
                        "value": "146.190.30.180:443",
                        "timestamp": "2023-08-25 18:49:03"
                    },
                    {
                        "value": "52.63.54.1:443",
                        "timestamp": "2023-08-25 06:49:34"
                    },
                    {
                        "value": "142.234.157.66:80",
                        "timestamp": "2023-08-24 18:49:10"
                    },
                    {
                        "value": "142.234.157.66:443",
                        "timestamp": "2023-08-24 18:49:10"
                    },
                    {
                        "value": "158.160.16.61:5985",
                        "timestamp": "2023-08-24 18:49:06"
                    },
                    {
                        "value": "94.231.205.74:80",
                        "timestamp": "2023-08-24 18:48:59"
                    },
                    {
                        "value": "64.225.16.14:5985",
                        "timestamp": "2023-08-24 18:48:46"
                    },
                    {
                        "value": "159.203.78.46:5985",
                        "timestamp": "2023-08-24 18:48:45"
                    },
                    {
                        "value": "64.225.79.75:445",
                        "timestamp": "2023-08-24 06:49:38"
                    },
                    {
                        "value": "45.55.68.230:80",
                        "timestamp": "2023-08-24 06:49:24"
                    },
                    {
                        "value": "87.239.108.174:5986",
                        "timestamp": "2023-08-24 06:49:19"
                    },
                    {
                        "value": "18.188.0.172:443",
                        "timestamp": "2023-08-24 06:49:16"
                    },
                    {
                        "value": "159.203.78.46:80",
                        "timestamp": "2023-08-24 06:49:07"
                    },
                    {
                        "value": "159.203.78.46:443",
                        "timestamp": "2023-08-24 06:49:06"
                    },
                    {
                        "value": "159.203.78.46:445",
                        "timestamp": "2023-08-24 06:49:06"
                    },
                    {
                        "value": "185.62.57.120:445",
                        "timestamp": "2023-08-23 18:49:21"
                    },
                    {
                        "value": "94.237.56.83:443",
                        "timestamp": "2023-08-23 18:49:16"
                    },
                    {
                        "value": "3.85.247.12:80",
                        "timestamp": "2023-08-23 18:49:15"
                    },
                    {
                        "value": "64.225.16.14:445",
                        "timestamp": "2023-08-23 18:48:57"
                    },
                    {
                        "value": "146.190.163.231:445",
                        "timestamp": "2023-08-23 06:49:43"
                    },
                    {
                        "value": "3.144.162.158:445",
                        "timestamp": "2023-08-23 06:49:37"
                    },
                    {
                        "value": "178.20.43.41:445",
                        "timestamp": "2023-08-23 06:49:35"
                    },
                    {
                        "value": "3.85.247.12:443",
                        "timestamp": "2023-08-23 06:49:32"
                    },
                    {
                        "value": "64.225.16.14:443",
                        "timestamp": "2023-08-23 06:49:27"
                    },
                    {
                        "value": "64.225.16.14:80",
                        "timestamp": "2023-08-23 06:49:26"
                    },
                    {
                        "value": "192.169.6.162:80",
                        "timestamp": "2023-08-23 06:49:22"
                    },
                    {
                        "value": "64.95.58.116:5985",
                        "timestamp": "2023-08-23 06:49:15"
                    },
                    {
                        "value": "3.141.100.76:443",
                        "timestamp": "2023-08-23 06:49:11"
                    },
                    {
                        "value": "104.200.72.212:443",
                        "timestamp": "2023-08-23 06:49:07"
                    },
                    {
                        "value": "54.154.116.15:443",
                        "timestamp": "2023-08-22 18:52:45"
                    },
                    {
                        "value": "54.202.161.131:443",
                        "timestamp": "2023-08-22 18:52:40"
                    },
                    {
                        "value": "91.153.61.172:5985",
                        "timestamp": "2023-08-22 18:52:27"
                    },
                    {
                        "value": "91.153.61.172:80",
                        "timestamp": "2023-08-22 18:52:26"
                    },
                    {
                        "value": "91.153.61.172:445",
                        "timestamp": "2023-08-22 18:52:25"
                    },
                    {
                        "value": "34.239.254.99:445",
                        "timestamp": "2023-08-22 06:51:55"
                    },
                    {
                        "value": "91.153.61.172:443",
                        "timestamp": "2023-08-22 06:51:44"
                    },
                    {
                        "value": "45.153.231.136:443",
                        "timestamp": "2023-08-22 06:51:38"
                    },
                    {
                        "value": "101.43.185.225:80",
                        "timestamp": "2023-08-22 06:51:31"
                    },
                    {
                        "value": "45.32.252.66:445",
                        "timestamp": "2023-08-22 06:51:18"
                    },
                    {
                        "value": "52.242.127.108:445",
                        "timestamp": "2023-08-21 18:51:26"
                    },
                    {
                        "value": "45.32.252.66:5985",
                        "timestamp": "2023-08-21 18:51:18"
                    },
                    {
                        "value": "45.32.252.66:80",
                        "timestamp": "2023-08-21 18:51:17"
                    },
                    {
                        "value": "20.125.105.211:80",
                        "timestamp": "2023-08-21 06:52:08"
                    },
                    {
                        "value": "12.215.33.182:5985",
                        "timestamp": "2023-08-20 06:51:17"
                    },
                    {
                        "value": "3.250.180.210:443",
                        "timestamp": "2023-08-20 06:51:06"
                    },
                    {
                        "value": "12.215.33.182:443",
                        "timestamp": "2023-08-19 18:51:45"
                    },
                    {
                        "value": "68.183.48.144:443",
                        "timestamp": "2023-08-18 06:53:22"
                    },
                    {
                        "value": "20.171.239.247:80",
                        "timestamp": "2023-08-18 06:53:11"
                    },
                    {
                        "value": "170.64.153.127:5985",
                        "timestamp": "2023-08-18 06:53:08"
                    },
                    {
                        "value": "167.71.162.248:5986",
                        "timestamp": "2023-08-18 06:53:05"
                    },
                    {
                        "value": "87.239.108.174:80",
                        "timestamp": "2023-08-18 06:52:59"
                    },
                    {
                        "value": "87.239.108.174:445",
                        "timestamp": "2023-08-18 06:52:58"
                    },
                    {
                        "value": "87.239.108.174:5985",
                        "timestamp": "2023-08-18 06:52:57"
                    },
                    {
                        "value": "87.239.108.174:443",
                        "timestamp": "2023-08-17 18:51:56"
                    },
                    {
                        "value": "137.184.95.140:443",
                        "timestamp": "2023-08-17 18:51:50"
                    },
                    {
                        "value": "137.184.95.140:80",
                        "timestamp": "2023-08-17 18:51:49"
                    },
                    {
                        "value": "167.71.162.248:80",
                        "timestamp": "2023-08-17 18:51:33"
                    },
                    {
                        "value": "167.71.162.248:445",
                        "timestamp": "2023-08-17 18:51:32"
                    },
                    {
                        "value": "167.71.162.248:5985",
                        "timestamp": "2023-08-17 18:51:30"
                    },
                    {
                        "value": "108.11.193.244:445",
                        "timestamp": "2023-08-17 06:52:02"
                    },
                    {
                        "value": "3.17.157.166:445",
                        "timestamp": "2023-08-17 06:51:52"
                    },
                    {
                        "value": "167.71.105.253:5985",
                        "timestamp": "2023-08-17 06:51:47"
                    },
                    {
                        "value": "167.71.162.248:443",
                        "timestamp": "2023-08-17 06:51:37"
                    },
                    {
                        "value": "34.200.246.53:445",
                        "timestamp": "2023-08-16 18:52:36"
                    },
                    {
                        "value": "151.216.222.60:5985",
                        "timestamp": "2023-08-16 18:52:24"
                    },
                    {
                        "value": "15.200.170.168:443",
                        "timestamp": "2023-08-16 18:52:03"
                    },
                    {
                        "value": "138.68.176.126:445",
                        "timestamp": "2023-08-16 06:51:27"
                    },
                    {
                        "value": "157.230.18.228:5985",
                        "timestamp": "2023-08-16 06:51:09"
                    },
                    {
                        "value": "3.144.141.97:445",
                        "timestamp": "2023-08-15 18:51:31"
                    },
                    {
                        "value": "37.139.20.46:443",
                        "timestamp": "2023-08-15 18:51:15"
                    },
                    {
                        "value": "143.198.93.21:445",
                        "timestamp": "2023-08-15 06:52:00"
                    },
                    {
                        "value": "52.39.134.246:443",
                        "timestamp": "2023-08-15 06:51:47"
                    },
                    {
                        "value": "52.39.134.246:80",
                        "timestamp": "2023-08-15 06:51:46"
                    },
                    {
                        "value": "209.51.171.194:443",
                        "timestamp": "2023-08-15 06:51:40"
                    },
                    {
                        "value": "209.51.171.194:80",
                        "timestamp": "2023-08-15 06:51:39"
                    },
                    {
                        "value": "18.203.66.192:5986",
                        "timestamp": "2023-08-15 06:51:31"
                    },
                    {
                        "value": "18.117.230.23:445",
                        "timestamp": "2023-08-14 06:52:09"
                    },
                    {
                        "value": "46.137.19.86:445",
                        "timestamp": "2023-08-13 18:51:07"
                    },
                    {
                        "value": "63.35.209.111:443",
                        "timestamp": "2023-08-13 06:52:03"
                    },
                    {
                        "value": "20.204.156.0:443",
                        "timestamp": "2023-08-12 18:52:00"
                    },
                    {
                        "value": "18.209.87.127:443",
                        "timestamp": "2023-08-12 06:52:33"
                    },
                    {
                        "value": "36.139.7.145:80",
                        "timestamp": "2023-08-12 06:52:29"
                    },
                    {
                        "value": "15.200.170.168:5986",
                        "timestamp": "2023-08-12 06:52:14"
                    },
                    {
                        "value": "15.200.170.168:5985",
                        "timestamp": "2023-08-12 06:52:13"
                    },
                    {
                        "value": "141.164.54.106:445",
                        "timestamp": "2023-08-11 18:55:29"
                    },
                    {
                        "value": "137.184.225.245:443",
                        "timestamp": "2023-08-11 18:55:08"
                    },
                    {
                        "value": "15.200.170.168:445",
                        "timestamp": "2023-08-11 18:54:36"
                    },
                    {
                        "value": "15.200.170.168:80",
                        "timestamp": "2023-08-11 18:54:34"
                    },
                    {
                        "value": "51.75.91.172:445",
                        "timestamp": "2023-08-11 18:54:29"
                    },
                    {
                        "value": "51.75.91.172:5985",
                        "timestamp": "2023-08-11 18:54:28"
                    },
                    {
                        "value": "104.194.222.50:445",
                        "timestamp": "2023-08-11 18:54:22"
                    },
                    {
                        "value": "52.61.243.196:443",
                        "timestamp": "2023-08-11 18:54:15"
                    },
                    {
                        "value": "52.61.243.196:80",
                        "timestamp": "2023-08-11 18:54:14"
                    },
                    {
                        "value": "52.61.243.196:445",
                        "timestamp": "2023-08-11 18:54:13"
                    },
                    {
                        "value": "51.75.91.172:443",
                        "timestamp": "2023-08-09 18:51:58"
                    },
                    {
                        "value": "185.225.75.198:5985",
                        "timestamp": "2023-08-09 18:51:42"
                    },
                    {
                        "value": "104.194.222.50:5985",
                        "timestamp": "2023-08-09 06:52:46"
                    },
                    {
                        "value": "3.250.135.63:443",
                        "timestamp": "2023-08-09 06:52:39"
                    },
                    {
                        "value": "51.75.91.172:80",
                        "timestamp": "2023-08-09 06:52:36"
                    },
                    {
                        "value": "185.225.75.198:5986",
                        "timestamp": "2023-08-09 06:52:33"
                    },
                    {
                        "value": "210.16.65.178:5985",
                        "timestamp": "2023-08-09 06:52:27"
                    },
                    {
                        "value": "210.16.65.178:80",
                        "timestamp": "2023-08-09 06:52:26"
                    },
                    {
                        "value": "210.16.65.178:443",
                        "timestamp": "2023-08-09 06:52:26"
                    },
                    {
                        "value": "210.16.65.178:445",
                        "timestamp": "2023-08-09 06:52:25"
                    },
                    {
                        "value": "80.77.25.147:5985",
                        "timestamp": "2023-08-08 18:51:29"
                    },
                    {
                        "value": "165.232.41.18:5985",
                        "timestamp": "2023-08-08 18:51:24"
                    },
                    {
                        "value": "3.135.207.47:445",
                        "timestamp": "2023-08-08 06:50:30"
                    },
                    {
                        "value": "165.227.76.192:443",
                        "timestamp": "2023-08-08 06:50:19"
                    },
                    {
                        "value": "165.227.76.192:80",
                        "timestamp": "2023-08-08 06:50:18"
                    },
                    {
                        "value": "167.114.199.74:80",
                        "timestamp": "2023-08-08 06:50:03"
                    },
                    {
                        "value": "144.21.38.200:5985",
                        "timestamp": "2023-08-08 06:50:01"
                    },
                    {
                        "value": "36.139.7.145:443",
                        "timestamp": "2023-08-07 18:50:25"
                    },
                    {
                        "value": "144.21.38.200:445",
                        "timestamp": "2023-08-07 18:50:12"
                    },
                    {
                        "value": "144.21.38.200:443",
                        "timestamp": "2023-08-07 18:50:10"
                    },
                    {
                        "value": "144.21.38.200:80",
                        "timestamp": "2023-08-07 18:50:08"
                    },
                    {
                        "value": "185.225.75.198:443",
                        "timestamp": "2023-08-07 06:49:30"
                    },
                    {
                        "value": "185.225.75.198:80",
                        "timestamp": "2023-08-07 06:49:29"
                    },
                    {
                        "value": "185.225.75.198:445",
                        "timestamp": "2023-08-07 06:49:28"
                    },
                    {
                        "value": "51.138.178.152:445",
                        "timestamp": "2023-08-05 06:50:26"
                    },
                    {
                        "value": "3.250.81.251:443",
                        "timestamp": "2023-08-05 06:50:12"
                    },
                    {
                        "value": "13.127.51.101:445",
                        "timestamp": "2023-08-04 18:50:26"
                    },
                    {
                        "value": "54.171.182.212:445",
                        "timestamp": "2023-08-04 18:50:19"
                    },
                    {
                        "value": "88.99.87.77:443",
                        "timestamp": "2023-08-04 06:49:30"
                    },
                    {
                        "value": "34.255.136.190:445",
                        "timestamp": "2023-08-03 18:49:58"
                    },
                    {
                        "value": "20.248.170.105:445",
                        "timestamp": "2023-08-03 18:49:52"
                    },
                    {
                        "value": "34.244.225.146:5985",
                        "timestamp": "2023-08-03 18:49:39"
                    },
                    {
                        "value": "88.99.87.77:5986",
                        "timestamp": "2023-08-03 18:49:27"
                    },
                    {
                        "value": "3.104.43.231:443",
                        "timestamp": "2023-08-03 06:49:45"
                    },
                    {
                        "value": "45.79.190.124:443",
                        "timestamp": "2023-08-03 06:49:40"
                    },
                    {
                        "value": "167.99.114.6:443",
                        "timestamp": "2023-08-03 06:49:32"
                    },
                    {
                        "value": "167.99.114.6:5985",
                        "timestamp": "2023-08-03 06:49:32"
                    },
                    {
                        "value": "167.99.114.6:80",
                        "timestamp": "2023-08-03 06:49:31"
                    },
                    {
                        "value": "167.99.114.6:445",
                        "timestamp": "2023-08-03 06:49:30"
                    },
                    {
                        "value": "142.93.190.214:445",
                        "timestamp": "2023-08-03 06:49:21"
                    },
                    {
                        "value": "142.93.190.214:80",
                        "timestamp": "2023-08-03 06:49:20"
                    },
                    {
                        "value": "142.93.190.214:5985",
                        "timestamp": "2023-08-03 06:49:20"
                    },
                    {
                        "value": "88.99.87.77:445",
                        "timestamp": "2023-08-03 06:49:19"
                    },
                    {
                        "value": "54.74.121.3:445",
                        "timestamp": "2023-08-02 18:50:40"
                    },
                    {
                        "value": "34.132.176.70:443",
                        "timestamp": "2023-08-02 18:50:24"
                    },
                    {
                        "value": "88.99.87.77:5985",
                        "timestamp": "2023-08-02 18:50:17"
                    },
                    {
                        "value": "88.99.87.77:80",
                        "timestamp": "2023-09-22 18:48:59"
                    },
                    {
                        "value": "3.88.28.39:445",
                        "timestamp": "2023-08-02 06:50:48"
                    },
                    {
                        "value": "67.207.92.254:443",
                        "timestamp": "2023-08-02 06:50:40"
                    },
                    {
                        "value": "97.101.28.237:5985",
                        "timestamp": "2023-08-02 06:50:28"
                    },
                    {
                        "value": "97.101.28.237:445",
                        "timestamp": "2023-08-02 06:50:28"
                    },
                    {
                        "value": "45.55.131.52:443",
                        "timestamp": "2023-08-01 18:49:15"
                    },
                    {
                        "value": "45.55.131.52:80",
                        "timestamp": "2023-08-01 18:49:14"
                    },
                    {
                        "value": "3.144.141.97:443",
                        "timestamp": "2023-08-01 06:48:48"
                    },
                    {
                        "value": "170.64.129.207:80",
                        "timestamp": "2023-07-31 18:48:38"
                    },
                    {
                        "value": "170.64.129.207:445",
                        "timestamp": "2023-07-31 18:48:37"
                    },
                    {
                        "value": "170.64.129.207:443",
                        "timestamp": "2023-07-31 06:51:57"
                    },
                    {
                        "value": "35.153.31.255:443",
                        "timestamp": "2023-07-30 18:49:11"
                    },
                    {
                        "value": "185.14.58.59:445",
                        "timestamp": "2023-07-29 18:51:00"
                    },
                    {
                        "value": "144.91.109.211:445",
                        "timestamp": "2023-07-29 18:51:00"
                    },
                    {
                        "value": "185.14.58.59:80",
                        "timestamp": "2023-07-29 18:50:59"
                    },
                    {
                        "value": "144.91.109.211:5985",
                        "timestamp": "2023-07-29 06:52:44"
                    },
                    {
                        "value": "146.190.30.180:80",
                        "timestamp": "2023-07-29 06:51:54"
                    },
                    {
                        "value": "146.190.30.180:445",
                        "timestamp": "2023-07-29 06:51:53"
                    },
                    {
                        "value": "146.190.30.180:5985",
                        "timestamp": "2023-07-29 06:51:52"
                    },
                    {
                        "value": "185.14.58.59:443",
                        "timestamp": "2023-07-30 06:51:34"
                    },
                    {
                        "value": "89.207.88.72:445",
                        "timestamp": "2023-07-28 18:50:36"
                    },
                    {
                        "value": "89.207.88.72:443",
                        "timestamp": "2023-07-28 06:49:18"
                    },
                    {
                        "value": "86.107.197.31:5985",
                        "timestamp": "2023-07-27 18:49:01"
                    },
                    {
                        "value": "89.207.88.72:5986",
                        "timestamp": "2023-07-27 18:48:57"
                    },
                    {
                        "value": "104.248.6.54:80",
                        "timestamp": "2023-07-27 06:49:00"
                    },
                    {
                        "value": "104.248.6.54:445",
                        "timestamp": "2023-07-27 06:48:59"
                    },
                    {
                        "value": "139.59.169.53:80",
                        "timestamp": "2023-07-26 18:49:17"
                    },
                    {
                        "value": "94.34.69.41:80",
                        "timestamp": "2023-08-04 18:50:07"
                    },
                    {
                        "value": "143.110.238.47:443",
                        "timestamp": "2023-07-26 18:49:08"
                    },
                    {
                        "value": "159.65.86.149:80",
                        "timestamp": "2023-07-26 18:49:03"
                    },
                    {
                        "value": "144.91.86.133:443",
                        "timestamp": "2023-07-26 18:48:54"
                    },
                    {
                        "value": "144.91.86.133:5985",
                        "timestamp": "2023-07-26 18:48:54"
                    },
                    {
                        "value": "144.91.86.133:80",
                        "timestamp": "2023-07-26 18:48:53"
                    },
                    {
                        "value": "144.91.86.133:445",
                        "timestamp": "2023-07-26 18:48:52"
                    },
                    {
                        "value": "198.211.103.135:5986",
                        "timestamp": "2023-07-26 18:48:48"
                    },
                    {
                        "value": "162.55.182.201:445",
                        "timestamp": "2023-07-26 06:49:40"
                    },
                    {
                        "value": "18.117.230.23:5985",
                        "timestamp": "2023-07-26 06:49:36"
                    },
                    {
                        "value": "18.221.8.108:5985",
                        "timestamp": "2023-07-26 06:49:31"
                    },
                    {
                        "value": "18.190.105.56:443",
                        "timestamp": "2023-07-26 06:49:28"
                    },
                    {
                        "value": "198.98.53.100:443",
                        "timestamp": "2023-07-26 06:49:21"
                    },
                    {
                        "value": "94.34.22.106:80",
                        "timestamp": "2023-07-26 06:49:17"
                    },
                    {
                        "value": "167.71.164.74:445",
                        "timestamp": "2023-07-26 06:49:07"
                    },
                    {
                        "value": "167.71.164.74:80",
                        "timestamp": "2023-07-26 06:49:06"
                    },
                    {
                        "value": "167.71.27.110:445",
                        "timestamp": "2023-07-25 18:49:38"
                    },
                    {
                        "value": "18.117.230.23:443",
                        "timestamp": "2023-07-25 18:49:26"
                    },
                    {
                        "value": "18.117.230.23:80",
                        "timestamp": "2023-07-25 18:49:25"
                    },
                    {
                        "value": "3.140.83.98:5985",
                        "timestamp": "2023-07-25 18:49:22"
                    },
                    {
                        "value": "44.206.141.197:443",
                        "timestamp": "2023-07-25 18:49:18"
                    },
                    {
                        "value": "18.217.220.11:5985",
                        "timestamp": "2023-07-25 18:49:11"
                    },
                    {
                        "value": "38.107.146.136:443",
                        "timestamp": "2023-07-25 18:48:50"
                    },
                    {
                        "value": "38.107.146.136:445",
                        "timestamp": "2023-07-25 18:48:50"
                    },
                    {
                        "value": "38.107.146.136:80",
                        "timestamp": "2023-07-25 18:48:49"
                    },
                    {
                        "value": "104.225.129.100:443",
                        "timestamp": "2023-07-25 06:49:01"
                    },
                    {
                        "value": "92.222.82.133:443",
                        "timestamp": "2023-07-25 06:48:56"
                    },
                    {
                        "value": "13.59.76.247:443",
                        "timestamp": "2023-07-24 18:48:30"
                    },
                    {
                        "value": "3.143.46.79:5985",
                        "timestamp": "2023-07-24 18:48:26"
                    },
                    {
                        "value": "104.225.129.100:80",
                        "timestamp": "2023-07-24 18:48:24"
                    },
                    {
                        "value": "34.245.228.37:443",
                        "timestamp": "2023-07-24 18:48:17"
                    },
                    {
                        "value": "91.107.237.229:5986",
                        "timestamp": "2023-07-24 18:48:12"
                    },
                    {
                        "value": "3.139.254.8:5985",
                        "timestamp": "2023-07-24 06:48:54"
                    },
                    {
                        "value": "13.59.76.247:5985",
                        "timestamp": "2023-07-24 06:48:48"
                    },
                    {
                        "value": "3.250.73.156:445",
                        "timestamp": "2023-07-23 18:48:36"
                    },
                    {
                        "value": "65.109.9.51:445",
                        "timestamp": "2023-07-23 18:48:29"
                    },
                    {
                        "value": "45.152.66.95:443",
                        "timestamp": "2023-07-23 06:48:13"
                    },
                    {
                        "value": "3.140.57.4:443",
                        "timestamp": "2023-07-22 18:48:12"
                    },
                    {
                        "value": "195.2.67.79:5986",
                        "timestamp": "2023-07-22 18:48:06"
                    },
                    {
                        "value": "91.107.237.229:5985",
                        "timestamp": "2023-07-22 18:47:59"
                    },
                    {
                        "value": "91.107.237.229:80",
                        "timestamp": "2023-07-22 06:48:31"
                    },
                    {
                        "value": "217.69.9.193:5985",
                        "timestamp": "2023-07-22 06:48:23"
                    },
                    {
                        "value": "91.107.237.229:445",
                        "timestamp": "2023-07-21 18:49:14"
                    },
                    {
                        "value": "66.109.142.164:5986",
                        "timestamp": "2023-07-21 18:48:58"
                    },
                    {
                        "value": "217.69.9.193:445",
                        "timestamp": "2023-07-21 06:49:22"
                    },
                    {
                        "value": "3.101.47.74:80",
                        "timestamp": "2023-07-21 06:49:12"
                    },
                    {
                        "value": "195.2.67.79:5985",
                        "timestamp": "2023-07-21 06:48:58"
                    },
                    {
                        "value": "195.2.67.79:443",
                        "timestamp": "2023-07-21 06:48:57"
                    },
                    {
                        "value": "167.99.124.140:445",
                        "timestamp": "2023-07-20 18:48:26"
                    },
                    {
                        "value": "167.99.124.140:80",
                        "timestamp": "2023-07-20 18:48:25"
                    },
                    {
                        "value": "195.2.67.79:445",
                        "timestamp": "2023-07-20 18:48:15"
                    },
                    {
                        "value": "195.2.67.79:80",
                        "timestamp": "2023-07-20 18:48:14"
                    },
                    {
                        "value": "209.97.156.169:445",
                        "timestamp": "2023-07-20 06:51:33"
                    },
                    {
                        "value": "79.137.199.98:5985",
                        "timestamp": "2023-07-20 06:51:30"
                    },
                    {
                        "value": "79.137.199.98:80",
                        "timestamp": "2023-07-20 06:51:28"
                    },
                    {
                        "value": "18.222.127.73:443",
                        "timestamp": "2023-07-20 06:51:25"
                    },
                    {
                        "value": "18.222.127.73:80",
                        "timestamp": "2023-07-20 06:51:24"
                    },
                    {
                        "value": "165.227.216.142:80",
                        "timestamp": "2023-07-20 06:51:21"
                    },
                    {
                        "value": "20.242.52.93:443",
                        "timestamp": "2023-07-20 06:51:13"
                    },
                    {
                        "value": "167.99.124.140:5985",
                        "timestamp": "2023-07-20 06:51:07"
                    },
                    {
                        "value": "82.203.66.252:80",
                        "timestamp": "2023-07-20 06:51:04"
                    },
                    {
                        "value": "94.34.39.95:80",
                        "timestamp": "2023-07-26 06:49:33"
                    },
                    {
                        "value": "51.91.102.222:80",
                        "timestamp": "2023-07-20 06:50:54"
                    },
                    {
                        "value": "51.91.102.222:443",
                        "timestamp": "2023-07-20 06:50:54"
                    },
                    {
                        "value": "51.91.102.222:445",
                        "timestamp": "2023-07-20 06:50:53"
                    },
                    {
                        "value": "51.91.102.222:5985",
                        "timestamp": "2023-07-20 06:50:52"
                    },
                    {
                        "value": "34.132.176.70:445",
                        "timestamp": "2023-07-20 06:50:47"
                    },
                    {
                        "value": "34.132.176.70:5985",
                        "timestamp": "2023-07-20 06:50:46"
                    },
                    {
                        "value": "34.132.176.70:5986",
                        "timestamp": "2023-07-20 06:50:46"
                    },
                    {
                        "value": "63.250.41.138:5986",
                        "timestamp": "2023-07-20 06:50:40"
                    },
                    {
                        "value": "63.250.41.138:5985",
                        "timestamp": "2023-07-20 06:50:39"
                    },
                    {
                        "value": "63.250.41.138:80",
                        "timestamp": "2023-07-20 06:50:38"
                    },
                    {
                        "value": "63.250.41.138:445",
                        "timestamp": "2023-07-20 06:50:37"
                    },
                    {
                        "value": "193.42.39.50:80",
                        "timestamp": "2023-07-20 06:50:29"
                    },
                    {
                        "value": "193.42.39.50:5985",
                        "timestamp": "2023-07-20 06:50:29"
                    },
                    {
                        "value": "193.42.39.50:445",
                        "timestamp": "2023-07-20 06:50:28"
                    },
                    {
                        "value": "206.189.96.108:445",
                        "timestamp": "2023-07-20 06:50:22"
                    },
                    {
                        "value": "206.189.96.108:5985",
                        "timestamp": "2023-07-20 06:50:21"
                    },
                    {
                        "value": "206.189.96.108:80",
                        "timestamp": "2023-07-20 06:50:20"
                    },
                    {
                        "value": "188.166.11.107:5986",
                        "timestamp": "2023-07-17 18:49:39"
                    },
                    {
                        "value": "3.18.216.192:5985",
                        "timestamp": "2023-07-17 06:49:58"
                    },
                    {
                        "value": "79.137.199.98:443",
                        "timestamp": "2023-07-17 06:49:53"
                    },
                    {
                        "value": "18.118.134.58:445",
                        "timestamp": "2023-07-16 18:50:37"
                    },
                    {
                        "value": "3.135.83.21:80",
                        "timestamp": "2023-07-16 18:50:30"
                    },
                    {
                        "value": "3.130.196.221:5986",
                        "timestamp": "2023-07-16 18:50:28"
                    },
                    {
                        "value": "3.132.94.5:80",
                        "timestamp": "2023-07-16 18:50:21"
                    },
                    {
                        "value": "3.131.231.5:5985",
                        "timestamp": "2023-07-16 18:50:14"
                    },
                    {
                        "value": "3.139.196.148:5986",
                        "timestamp": "2023-07-16 18:50:11"
                    },
                    {
                        "value": "18.191.16.224:443",
                        "timestamp": "2023-07-16 18:50:07"
                    },
                    {
                        "value": "3.131.44.28:5985",
                        "timestamp": "2023-07-16 18:50:02"
                    },
                    {
                        "value": "94.34.35.44:80",
                        "timestamp": "2023-07-20 18:48:35"
                    },
                    {
                        "value": "35.183.112.212:443",
                        "timestamp": "2023-07-16 06:48:53"
                    },
                    {
                        "value": "172.86.76.246:443",
                        "timestamp": "2023-07-16 06:48:47"
                    },
                    {
                        "value": "45.79.46.240:445",
                        "timestamp": "2023-07-15 18:49:06"
                    },
                    {
                        "value": "188.166.11.107:445",
                        "timestamp": "2023-07-15 18:48:43"
                    },
                    {
                        "value": "188.166.11.107:80",
                        "timestamp": "2023-07-15 18:48:43"
                    },
                    {
                        "value": "188.166.11.107:5985",
                        "timestamp": "2023-07-15 18:48:42"
                    },
                    {
                        "value": "188.166.11.107:443",
                        "timestamp": "2023-07-15 18:48:41"
                    },
                    {
                        "value": "18.221.8.178:443",
                        "timestamp": "2023-07-14 18:49:05"
                    },
                    {
                        "value": "20.66.12.220:445",
                        "timestamp": "2023-07-14 06:49:23"
                    },
                    {
                        "value": "34.254.99.129:445",
                        "timestamp": "2023-07-14 06:49:00"
                    },
                    {
                        "value": "34.254.99.129:443",
                        "timestamp": "2023-07-14 06:49:00"
                    },
                    {
                        "value": "3.13.105.185:445",
                        "timestamp": "2023-07-13 18:49:27"
                    },
                    {
                        "value": "206.188.197.123:5985",
                        "timestamp": "2023-07-13 18:49:18"
                    },
                    {
                        "value": "206.188.197.123:5986",
                        "timestamp": "2023-07-13 18:49:18"
                    },
                    {
                        "value": "206.188.197.123:443",
                        "timestamp": "2023-07-13 18:49:17"
                    },
                    {
                        "value": "206.188.197.123:80",
                        "timestamp": "2023-07-13 18:49:16"
                    },
                    {
                        "value": "3.253.165.48:443",
                        "timestamp": "2023-07-13 18:49:04"
                    },
                    {
                        "value": "20.49.161.31:445",
                        "timestamp": "2023-07-13 06:51:50"
                    },
                    {
                        "value": "51.136.18.109:445",
                        "timestamp": "2023-07-13 06:51:32"
                    },
                    {
                        "value": "51.136.18.109:443",
                        "timestamp": "2023-07-12 18:49:23"
                    },
                    {
                        "value": "51.136.18.109:80",
                        "timestamp": "2023-07-12 18:49:22"
                    },
                    {
                        "value": "18.204.143.31:5985",
                        "timestamp": "2023-07-12 18:49:19"
                    },
                    {
                        "value": "18.204.143.31:443",
                        "timestamp": "2023-07-12 18:49:18"
                    },
                    {
                        "value": "54.84.64.28:443",
                        "timestamp": "2023-07-12 18:49:10"
                    },
                    {
                        "value": "54.84.64.28:5985",
                        "timestamp": "2023-07-12 18:49:10"
                    },
                    {
                        "value": "3.129.141.104:5985",
                        "timestamp": "2023-07-12 18:49:01"
                    },
                    {
                        "value": "194.113.74.9:5985",
                        "timestamp": "2023-07-12 18:48:58"
                    },
                    {
                        "value": "51.250.15.242:80",
                        "timestamp": "2023-07-12 18:48:54"
                    },
                    {
                        "value": "194.113.72.148:5985",
                        "timestamp": "2023-07-12 18:48:52"
                    },
                    {
                        "value": "109.120.182.2:5986",
                        "timestamp": "2023-07-12 18:48:49"
                    },
                    {
                        "value": "54.221.74.208:445",
                        "timestamp": "2023-07-12 06:50:21"
                    },
                    {
                        "value": "34.88.222.181:80",
                        "timestamp": "2023-07-12 06:50:16"
                    },
                    {
                        "value": "3.132.29.83:80",
                        "timestamp": "2023-07-12 06:50:13"
                    },
                    {
                        "value": "149.102.158.245:443",
                        "timestamp": "2023-07-12 06:50:08"
                    },
                    {
                        "value": "168.75.77.20:80",
                        "timestamp": "2023-07-12 06:50:03"
                    },
                    {
                        "value": "3.249.44.94:443",
                        "timestamp": "2023-07-12 06:49:58"
                    },
                    {
                        "value": "94.34.135.188:80",
                        "timestamp": "2023-07-12 06:49:55"
                    },
                    {
                        "value": "34.252.59.180:445",
                        "timestamp": "2023-07-11 18:48:42"
                    },
                    {
                        "value": "52.233.69.141:80",
                        "timestamp": "2023-07-11 18:48:39"
                    },
                    {
                        "value": "3.128.194.55:80",
                        "timestamp": "2023-07-11 18:48:33"
                    },
                    {
                        "value": "3.128.194.55:5986",
                        "timestamp": "2023-07-11 18:48:32"
                    },
                    {
                        "value": "3.128.194.55:5985",
                        "timestamp": "2023-07-11 18:48:31"
                    },
                    {
                        "value": "52.156.24.108:80",
                        "timestamp": "2023-07-11 18:48:15"
                    },
                    {
                        "value": "185.62.58.178:445",
                        "timestamp": "2023-07-11 18:48:07"
                    },
                    {
                        "value": "185.62.58.178:80",
                        "timestamp": "2023-07-11 18:48:06"
                    },
                    {
                        "value": "185.62.58.178:443",
                        "timestamp": "2023-07-11 18:48:06"
                    },
                    {
                        "value": "3.132.237.169:80",
                        "timestamp": "2023-07-11 06:49:13"
                    },
                    {
                        "value": "3.132.237.169:445",
                        "timestamp": "2023-07-11 06:49:12"
                    },
                    {
                        "value": "154.53.37.105:445",
                        "timestamp": "2023-07-10 18:48:51"
                    },
                    {
                        "value": "52.156.24.108:445",
                        "timestamp": "2023-07-10 18:48:48"
                    },
                    {
                        "value": "45.77.63.93:443",
                        "timestamp": "2023-07-10 18:48:37"
                    },
                    {
                        "value": "18.223.65.54:5986",
                        "timestamp": "2023-07-10 06:50:12"
                    },
                    {
                        "value": "18.223.65.54:80",
                        "timestamp": "2023-07-10 06:50:11"
                    },
                    {
                        "value": "94.34.138.108:80",
                        "timestamp": "2023-07-09 18:48:24"
                    },
                    {
                        "value": "3.142.101.254:443",
                        "timestamp": "2023-07-09 18:48:22"
                    },
                    {
                        "value": "206.189.95.62:80",
                        "timestamp": "2023-07-09 06:48:49"
                    },
                    {
                        "value": "104.238.60.31:445",
                        "timestamp": "2023-07-09 06:48:44"
                    },
                    {
                        "value": "104.238.190.138:80",
                        "timestamp": "2023-07-08 18:50:12"
                    },
                    {
                        "value": "104.238.60.31:5986",
                        "timestamp": "2023-07-08 06:49:07"
                    },
                    {
                        "value": "3.20.119.106:5985",
                        "timestamp": "2023-07-08 06:49:01"
                    },
                    {
                        "value": "163.172.234.8:80",
                        "timestamp": "2023-07-08 06:48:56"
                    },
                    {
                        "value": "163.172.234.8:443",
                        "timestamp": "2023-11-26 12:19:21"
                    },
                    {
                        "value": "104.238.190.138:5985",
                        "timestamp": "2023-07-08 06:48:53"
                    },
                    {
                        "value": "3.20.75.110:443",
                        "timestamp": "2023-07-08 06:48:48"
                    },
                    {
                        "value": "137.184.40.73:445",
                        "timestamp": "2023-07-07 18:48:44"
                    },
                    {
                        "value": "3.15.47.174:5985",
                        "timestamp": "2023-07-07 18:48:30"
                    },
                    {
                        "value": "51.38.185.204:445",
                        "timestamp": "2023-07-07 06:49:40"
                    },
                    {
                        "value": "3.131.218.223:5986",
                        "timestamp": "2023-07-07 06:49:29"
                    },
                    {
                        "value": "3.131.218.223:443",
                        "timestamp": "2023-07-07 06:49:28"
                    },
                    {
                        "value": "3.131.218.223:5985",
                        "timestamp": "2023-07-07 06:49:28"
                    },
                    {
                        "value": "3.129.81.0:443",
                        "timestamp": "2023-07-07 06:49:21"
                    },
                    {
                        "value": "34.88.222.181:443",
                        "timestamp": "2023-07-07 06:49:16"
                    },
                    {
                        "value": "34.88.222.181:5985",
                        "timestamp": "2023-07-07 06:49:15"
                    },
                    {
                        "value": "91.134.141.245:5985",
                        "timestamp": "2023-07-07 06:49:12"
                    },
                    {
                        "value": "35.207.206.133:80",
                        "timestamp": "2023-07-07 06:49:04"
                    },
                    {
                        "value": "35.207.206.133:445",
                        "timestamp": "2023-07-07 06:49:03"
                    },
                    {
                        "value": "193.42.39.254:80",
                        "timestamp": "2023-07-07 06:48:58"
                    },
                    {
                        "value": "193.42.39.254:5985",
                        "timestamp": "2023-07-06 18:49:00"
                    },
                    {
                        "value": "193.42.39.254:445",
                        "timestamp": "2023-07-06 18:48:59"
                    },
                    {
                        "value": "3.143.166.127:5985",
                        "timestamp": "2023-07-06 06:48:52"
                    },
                    {
                        "value": "104.238.60.31:5985",
                        "timestamp": "2023-07-05 18:48:26"
                    },
                    {
                        "value": "167.114.115.246:445",
                        "timestamp": "2023-07-05 06:49:15"
                    },
                    {
                        "value": "104.238.60.31:443",
                        "timestamp": "2023-07-05 06:49:09"
                    },
                    {
                        "value": "104.238.60.31:80",
                        "timestamp": "2023-07-05 06:49:08"
                    },
                    {
                        "value": "165.22.57.138:80",
                        "timestamp": "2023-07-05 06:49:00"
                    },
                    {
                        "value": "165.22.57.138:443",
                        "timestamp": "2023-07-05 06:49:00"
                    },
                    {
                        "value": "46.44.62.227:5985",
                        "timestamp": "2023-07-05 06:48:56"
                    },
                    {
                        "value": "78.57.231.58:80",
                        "timestamp": "2023-07-05 06:48:53"
                    },
                    {
                        "value": "51.104.206.207:445",
                        "timestamp": "2023-07-04 18:50:42"
                    },
                    {
                        "value": "52.214.15.177:5985",
                        "timestamp": "2023-07-04 18:50:34"
                    },
                    {
                        "value": "52.214.15.177:443",
                        "timestamp": "2023-07-04 18:50:33"
                    },
                    {
                        "value": "163.172.232.20:445",
                        "timestamp": "2023-07-04 18:50:25"
                    },
                    {
                        "value": "20.223.231.108:443",
                        "timestamp": "2023-07-04 18:50:13"
                    },
                    {
                        "value": "20.199.126.16:445",
                        "timestamp": "2023-07-04 06:49:28"
                    },
                    {
                        "value": "163.172.232.20:5985",
                        "timestamp": "2023-07-04 06:49:27"
                    },
                    {
                        "value": "3.138.212.37:5985",
                        "timestamp": "2023-07-04 06:49:21"
                    },
                    {
                        "value": "3.138.212.37:80",
                        "timestamp": "2023-07-04 06:49:20"
                    },
                    {
                        "value": "174.138.88.77:5986",
                        "timestamp": "2023-07-04 06:49:15"
                    },
                    {
                        "value": "163.172.232.20:80",
                        "timestamp": "2023-07-03 18:48:49"
                    },
                    {
                        "value": "194.87.236.17:443",
                        "timestamp": "2023-07-03 18:48:48"
                    },
                    {
                        "value": "34.240.177.115:80",
                        "timestamp": "2023-07-03 18:48:41"
                    },
                    {
                        "value": "52.14.45.109:445",
                        "timestamp": "2023-07-03 06:49:39"
                    },
                    {
                        "value": "18.190.55.0:443",
                        "timestamp": "2023-07-03 06:49:29"
                    },
                    {
                        "value": "18.190.55.0:5986",
                        "timestamp": "2023-07-03 06:49:29"
                    },
                    {
                        "value": "54.74.80.81:443",
                        "timestamp": "2023-07-03 06:49:20"
                    },
                    {
                        "value": "3.16.18.205:443",
                        "timestamp": "2023-07-03 06:49:16"
                    },
                    {
                        "value": "3.13.133.182:80",
                        "timestamp": "2023-07-02 18:49:11"
                    },
                    {
                        "value": "3.21.148.106:80",
                        "timestamp": "2023-07-02 18:49:05"
                    },
                    {
                        "value": "3.21.148.106:5985",
                        "timestamp": "2023-07-02 18:49:05"
                    },
                    {
                        "value": "18.190.70.155:80",
                        "timestamp": "2023-07-02 18:49:01"
                    },
                    {
                        "value": "84.222.45.254:443",
                        "timestamp": "2023-07-02 18:48:56"
                    },
                    {
                        "value": "84.222.45.254:80",
                        "timestamp": "2023-07-02 18:48:55"
                    },
                    {
                        "value": "3.13.133.182:5985",
                        "timestamp": "2023-07-02 06:48:44"
                    },
                    {
                        "value": "13.59.226.24:443",
                        "timestamp": "2023-07-02 06:48:41"
                    },
                    {
                        "value": "13.59.226.24:80",
                        "timestamp": "2023-07-02 06:48:40"
                    },
                    {
                        "value": "18.116.0.119:80",
                        "timestamp": "2023-07-02 06:48:21"
                    },
                    {
                        "value": "3.14.171.147:445",
                        "timestamp": "2023-07-01 18:49:37"
                    },
                    {
                        "value": "18.116.0.119:445",
                        "timestamp": "2023-07-01 18:49:29"
                    },
                    {
                        "value": "3.137.106.230:443",
                        "timestamp": "2023-07-01 18:49:25"
                    },
                    {
                        "value": "3.20.179.134:5985",
                        "timestamp": "2023-07-01 18:49:20"
                    },
                    {
                        "value": "18.221.36.131:443",
                        "timestamp": "2023-07-01 18:49:18"
                    },
                    {
                        "value": "139.177.193.144:5985",
                        "timestamp": "2023-07-01 18:49:13"
                    },
                    {
                        "value": "139.177.193.144:80",
                        "timestamp": "2023-07-01 18:49:12"
                    },
                    {
                        "value": "20.223.231.108:445",
                        "timestamp": "2023-07-01 18:48:56"
                    },
                    {
                        "value": "3.22.216.255:445",
                        "timestamp": "2023-07-01 06:48:58"
                    },
                    {
                        "value": "3.137.106.230:80",
                        "timestamp": "2023-07-01 06:48:54"
                    },
                    {
                        "value": "62.10.74.218:80",
                        "timestamp": "2023-07-01 06:48:47"
                    },
                    {
                        "value": "62.10.74.218:443",
                        "timestamp": "2023-07-01 06:48:47"
                    },
                    {
                        "value": "172.190.188.163:5986",
                        "timestamp": "2023-07-01 06:48:36"
                    },
                    {
                        "value": "78.128.99.215:5985",
                        "timestamp": "2023-06-30 18:49:13"
                    },
                    {
                        "value": "63.35.187.119:443",
                        "timestamp": "2023-06-30 18:49:03"
                    },
                    {
                        "value": "20.223.231.108:80",
                        "timestamp": "2023-06-30 18:49:00"
                    },
                    {
                        "value": "174.138.88.77:5985",
                        "timestamp": "2023-06-30 18:48:54"
                    },
                    {
                        "value": "35.192.152.195:445",
                        "timestamp": "2023-06-30 06:49:57"
                    },
                    {
                        "value": "35.192.152.195:443",
                        "timestamp": "2023-06-30 06:49:56"
                    },
                    {
                        "value": "35.192.152.195:80",
                        "timestamp": "2023-06-30 06:49:55"
                    },
                    {
                        "value": "174.138.88.77:445",
                        "timestamp": "2023-06-30 06:49:54"
                    },
                    {
                        "value": "216.66.50.242:80",
                        "timestamp": "2023-06-30 06:49:49"
                    },
                    {
                        "value": "216.66.50.242:445",
                        "timestamp": "2023-06-30 06:49:48"
                    },
                    {
                        "value": "38.64.65.8:5986",
                        "timestamp": "2023-06-29 18:49:58"
                    },
                    {
                        "value": "34.170.8.133:443",
                        "timestamp": "2023-06-29 18:49:55"
                    },
                    {
                        "value": "3.13.245.246:443",
                        "timestamp": "2023-06-29 18:49:48"
                    },
                    {
                        "value": "18.191.220.246:445",
                        "timestamp": "2023-06-29 18:49:38"
                    },
                    {
                        "value": "18.191.220.246:80",
                        "timestamp": "2023-06-29 18:49:37"
                    },
                    {
                        "value": "52.210.38.225:445",
                        "timestamp": "2023-06-29 06:50:08"
                    },
                    {
                        "value": "174.138.88.77:443",
                        "timestamp": "2023-06-29 06:49:57"
                    },
                    {
                        "value": "174.138.88.77:80",
                        "timestamp": "2023-06-29 06:49:56"
                    },
                    {
                        "value": "3.129.240.162:5985",
                        "timestamp": "2023-06-29 06:49:53"
                    },
                    {
                        "value": "3.129.240.162:443",
                        "timestamp": "2023-06-29 06:49:52"
                    },
                    {
                        "value": "159.65.188.55:443",
                        "timestamp": "2023-06-29 06:49:47"
                    },
                    {
                        "value": "159.65.188.55:80",
                        "timestamp": "2023-06-29 06:49:46"
                    },
                    {
                        "value": "209.38.225.79:443",
                        "timestamp": "2023-06-29 06:49:34"
                    },
                    {
                        "value": "18.236.83.77:445",
                        "timestamp": "2023-06-28 18:49:38"
                    },
                    {
                        "value": "54.194.26.52:445",
                        "timestamp": "2023-06-28 18:49:35"
                    },
                    {
                        "value": "144.126.152.51:5985",
                        "timestamp": "2023-06-28 18:49:29"
                    },
                    {
                        "value": "185.163.48.111:443",
                        "timestamp": "2023-06-28 18:49:23"
                    },
                    {
                        "value": "163.172.232.20:443",
                        "timestamp": "2023-06-28 18:49:21"
                    },
                    {
                        "value": "185.200.221.16:80",
                        "timestamp": "2023-06-28 18:49:14"
                    },
                    {
                        "value": "193.108.4.76:443",
                        "timestamp": "2023-06-28 06:49:09"
                    },
                    {
                        "value": "34.132.176.70:80",
                        "timestamp": "2023-06-28 06:49:05"
                    },
                    {
                        "value": "77.87.189.34:443",
                        "timestamp": "2023-06-28 06:49:01"
                    },
                    {
                        "value": "67.204.14.215:445",
                        "timestamp": "2023-06-28 06:48:52"
                    },
                    {
                        "value": "67.204.14.215:443",
                        "timestamp": "2023-06-28 06:48:51"
                    },
                    {
                        "value": "67.204.14.215:80",
                        "timestamp": "2023-06-28 06:48:50"
                    },
                    {
                        "value": "172.86.70.31:445",
                        "timestamp": "2023-06-28 06:48:45"
                    },
                    {
                        "value": "209.38.225.79:445",
                        "timestamp": "2023-06-27 18:48:19"
                    },
                    {
                        "value": "209.38.225.79:5985",
                        "timestamp": "2023-06-27 18:48:18"
                    },
                    {
                        "value": "209.38.225.79:80",
                        "timestamp": "2023-06-27 18:48:17"
                    },
                    {
                        "value": "157.230.122.150:5985",
                        "timestamp": "2023-06-27 06:50:00"
                    },
                    {
                        "value": "138.197.2.107:5985",
                        "timestamp": "2023-06-27 06:49:57"
                    },
                    {
                        "value": "138.197.2.107:80",
                        "timestamp": "2023-06-27 06:49:56"
                    },
                    {
                        "value": "13.211.145.235:5985",
                        "timestamp": "2023-06-27 06:49:52"
                    },
                    {
                        "value": "13.211.145.235:443",
                        "timestamp": "2023-06-27 06:49:51"
                    },
                    {
                        "value": "172.86.70.31:443",
                        "timestamp": "2023-06-27 06:49:44"
                    },
                    {
                        "value": "207.246.106.194:5986",
                        "timestamp": "2023-06-27 06:49:37"
                    },
                    {
                        "value": "140.99.170.9:5985",
                        "timestamp": "2023-06-27 06:49:18"
                    },
                    {
                        "value": "140.99.170.9:80",
                        "timestamp": "2023-06-27 06:49:17"
                    },
                    {
                        "value": "140.99.170.9:445",
                        "timestamp": "2023-06-27 06:49:16"
                    },
                    {
                        "value": "140.99.170.9:5986",
                        "timestamp": "2023-06-27 06:49:15"
                    },
                    {
                        "value": "13.211.145.235:445",
                        "timestamp": "2023-06-25 18:48:42"
                    },
                    {
                        "value": "52.54.249.74:80",
                        "timestamp": "2023-06-25 18:48:36"
                    },
                    {
                        "value": "64.73.162.11:5986",
                        "timestamp": "2023-06-25 18:48:23"
                    },
                    {
                        "value": "34.247.178.39:445",
                        "timestamp": "2023-06-25 18:48:17"
                    },
                    {
                        "value": "146.70.106.86:80",
                        "timestamp": "2023-06-25 06:48:32"
                    },
                    {
                        "value": "138.68.114.167:445",
                        "timestamp": "2023-06-25 06:48:17"
                    },
                    {
                        "value": "138.68.114.167:5985",
                        "timestamp": "2023-06-24 18:50:48"
                    },
                    {
                        "value": "34.247.178.39:5985",
                        "timestamp": "2023-06-24 18:50:42"
                    },
                    {
                        "value": "207.246.106.194:5985",
                        "timestamp": "2023-08-19 06:51:07"
                    },
                    {
                        "value": "207.246.106.194:80",
                        "timestamp": "2023-06-24 18:50:36"
                    },
                    {
                        "value": "18.219.194.184:443",
                        "timestamp": "2023-06-24 06:48:59"
                    },
                    {
                        "value": "52.54.249.74:443",
                        "timestamp": "2023-06-24 06:48:56"
                    },
                    {
                        "value": "146.70.106.86:443",
                        "timestamp": "2023-06-24 06:48:52"
                    },
                    {
                        "value": "102.67.140.187:445",
                        "timestamp": "2023-06-23 18:49:27"
                    },
                    {
                        "value": "176.124.198.40:80",
                        "timestamp": "2023-06-23 18:49:21"
                    },
                    {
                        "value": "193.233.133.63:80",
                        "timestamp": "2023-06-23 18:49:14"
                    },
                    {
                        "value": "167.99.113.2:80",
                        "timestamp": "2023-06-23 18:49:07"
                    },
                    {
                        "value": "207.246.106.194:445",
                        "timestamp": "2023-07-29 18:50:57"
                    },
                    {
                        "value": "193.36.15.249:445",
                        "timestamp": "2023-06-23 18:48:54"
                    },
                    {
                        "value": "193.36.15.249:443",
                        "timestamp": "2023-06-23 18:48:54"
                    },
                    {
                        "value": "165.22.79.82:445",
                        "timestamp": "2023-06-23 06:50:04"
                    },
                    {
                        "value": "207.246.106.194:443",
                        "timestamp": "2023-06-23 06:49:58"
                    },
                    {
                        "value": "20.114.233.45:443",
                        "timestamp": "2023-06-26 06:48:18"
                    },
                    {
                        "value": "209.38.206.59:5985",
                        "timestamp": "2023-06-23 06:49:48"
                    },
                    {
                        "value": "146.190.177.246:445",
                        "timestamp": "2023-06-23 06:49:47"
                    },
                    {
                        "value": "193.233.133.63:5985",
                        "timestamp": "2023-06-23 06:49:41"
                    },
                    {
                        "value": "193.233.133.63:445",
                        "timestamp": "2023-06-23 06:49:41"
                    },
                    {
                        "value": "193.233.133.63:443",
                        "timestamp": "2023-06-23 06:49:40"
                    },
                    {
                        "value": "167.99.113.2:443",
                        "timestamp": "2023-06-23 06:49:28"
                    },
                    {
                        "value": "45.138.74.77:445",
                        "timestamp": "2023-06-23 06:49:22"
                    },
                    {
                        "value": "45.138.74.77:443",
                        "timestamp": "2023-06-23 06:49:21"
                    },
                    {
                        "value": "45.138.74.77:80",
                        "timestamp": "2023-06-23 06:49:20"
                    },
                    {
                        "value": "4.236.181.211:445",
                        "timestamp": "2023-06-22 18:50:50"
                    },
                    {
                        "value": "216.120.203.74:80",
                        "timestamp": "2023-06-22 18:50:41"
                    },
                    {
                        "value": "146.190.177.246:443",
                        "timestamp": "2023-06-22 18:50:36"
                    },
                    {
                        "value": "146.190.177.246:80",
                        "timestamp": "2023-06-22 18:50:35"
                    },
                    {
                        "value": "146.190.177.246:5985",
                        "timestamp": "2023-06-22 18:50:34"
                    },
                    {
                        "value": "176.124.198.40:443",
                        "timestamp": "2023-06-22 18:50:32"
                    },
                    {
                        "value": "46.101.85.199:5985",
                        "timestamp": "2023-06-22 18:50:26"
                    },
                    {
                        "value": "12.181.120.250:443",
                        "timestamp": "2023-06-22 18:50:20"
                    },
                    {
                        "value": "18.223.139.17:443",
                        "timestamp": "2023-06-22 18:50:17"
                    },
                    {
                        "value": "172.190.188.163:443",
                        "timestamp": "2023-06-22 18:50:06"
                    },
                    {
                        "value": "172.190.188.163:5985",
                        "timestamp": "2023-06-22 18:50:04"
                    },
                    {
                        "value": "209.38.206.59:443",
                        "timestamp": "2023-06-22 18:49:56"
                    },
                    {
                        "value": "209.38.206.59:445",
                        "timestamp": "2023-06-22 18:49:55"
                    },
                    {
                        "value": "209.38.206.59:80",
                        "timestamp": "2023-06-22 18:49:55"
                    },
                    {
                        "value": "165.227.96.221:443",
                        "timestamp": "2023-06-22 18:49:50"
                    },
                    {
                        "value": "165.227.96.221:80",
                        "timestamp": "2023-06-22 18:49:49"
                    },
                    {
                        "value": "165.227.96.221:445",
                        "timestamp": "2023-06-22 18:49:48"
                    },
                    {
                        "value": "18.118.140.42:443",
                        "timestamp": "2023-06-22 18:49:46"
                    },
                    {
                        "value": "34.125.68.109:445",
                        "timestamp": "2023-06-21 18:49:25"
                    },
                    {
                        "value": "54.216.35.66:445",
                        "timestamp": "2023-06-21 18:49:20"
                    },
                    {
                        "value": "54.78.36.15:445",
                        "timestamp": "2023-06-21 18:49:17"
                    },
                    {
                        "value": "20.89.239.154:445",
                        "timestamp": "2023-06-21 18:49:15"
                    },
                    {
                        "value": "18.119.148.147:443",
                        "timestamp": "2023-06-21 18:49:08"
                    },
                    {
                        "value": "216.120.203.74:443",
                        "timestamp": "2023-06-21 18:49:03"
                    },
                    {
                        "value": "13.211.145.235:80",
                        "timestamp": "2023-06-21 18:48:57"
                    },
                    {
                        "value": "172.190.188.163:445",
                        "timestamp": "2023-06-21 18:48:50"
                    },
                    {
                        "value": "172.190.188.163:80",
                        "timestamp": "2023-06-21 18:48:49"
                    },
                    {
                        "value": "174.138.56.197:5985",
                        "timestamp": "2023-06-21 18:48:43"
                    },
                    {
                        "value": "174.138.56.197:445",
                        "timestamp": "2023-06-21 18:48:42"
                    },
                    {
                        "value": "174.138.56.197:80",
                        "timestamp": "2023-06-21 18:48:42"
                    },
                    {
                        "value": "81.29.134.165:445",
                        "timestamp": "2023-06-20 18:49:20"
                    },
                    {
                        "value": "138.197.171.97:5985",
                        "timestamp": "2023-06-20 18:49:12"
                    },
                    {
                        "value": "138.197.171.97:80",
                        "timestamp": "2023-06-20 18:49:11"
                    },
                    {
                        "value": "18.190.16.172:443",
                        "timestamp": "2023-06-20 18:49:07"
                    },
                    {
                        "value": "91.198.77.129:443",
                        "timestamp": "2023-06-20 18:49:01"
                    },
                    {
                        "value": "64.226.126.5:5985",
                        "timestamp": "2023-06-20 18:48:58"
                    },
                    {
                        "value": "199.44.220.88:443",
                        "timestamp": "2023-06-20 18:48:54"
                    },
                    {
                        "value": "18.188.83.124:5985",
                        "timestamp": "2023-06-20 18:48:50"
                    },
                    {
                        "value": "165.232.154.39:80",
                        "timestamp": "2023-06-19 18:50:32"
                    },
                    {
                        "value": "3.12.70.77:5985",
                        "timestamp": "2023-06-19 18:50:27"
                    },
                    {
                        "value": "3.12.70.77:5986",
                        "timestamp": "2023-06-19 18:50:27"
                    },
                    {
                        "value": "3.12.70.77:443",
                        "timestamp": "2023-06-19 18:50:26"
                    },
                    {
                        "value": "3.137.67.123:443",
                        "timestamp": "2023-06-19 18:50:21"
                    },
                    {
                        "value": "18.189.207.77:80",
                        "timestamp": "2023-06-19 18:50:18"
                    },
                    {
                        "value": "3.143.53.4:5985",
                        "timestamp": "2023-06-19 18:50:13"
                    },
                    {
                        "value": "3.143.53.4:443",
                        "timestamp": "2023-06-19 18:50:12"
                    },
                    {
                        "value": "54.74.103.235:443",
                        "timestamp": "2023-06-19 18:50:08"
                    },
                    {
                        "value": "52.14.231.198:443",
                        "timestamp": "2023-06-19 18:50:03"
                    },
                    {
                        "value": "3.128.252.159:5985",
                        "timestamp": "2023-06-19 18:50:00"
                    },
                    {
                        "value": "3.134.130.179:443",
                        "timestamp": "2023-06-19 18:49:57"
                    },
                    {
                        "value": "3.22.49.14:5986",
                        "timestamp": "2023-06-19 18:49:51"
                    },
                    {
                        "value": "192.52.167.199:5986",
                        "timestamp": "2023-06-19 18:49:49"
                    },
                    {
                        "value": "63.35.181.86:445",
                        "timestamp": "2023-06-17 18:49:20"
                    },
                    {
                        "value": "35.179.16.154:443",
                        "timestamp": "2023-06-17 18:49:13"
                    },
                    {
                        "value": "35.179.16.154:80",
                        "timestamp": "2023-06-17 18:49:12"
                    },
                    {
                        "value": "139.177.189.73:443",
                        "timestamp": "2023-06-17 18:49:09"
                    },
                    {
                        "value": "80.85.156.184:5985",
                        "timestamp": "2023-06-17 18:49:06"
                    },
                    {
                        "value": "80.85.156.184:80",
                        "timestamp": "2023-06-17 18:49:05"
                    },
                    {
                        "value": "13.59.198.138:80",
                        "timestamp": "2023-06-17 18:49:01"
                    },
                    {
                        "value": "5.78.75.82:5985",
                        "timestamp": "2023-06-17 18:48:55"
                    },
                    {
                        "value": "64.226.68.20:5986",
                        "timestamp": "2023-06-17 18:48:51"
                    },
                    {
                        "value": "64.226.68.20:80",
                        "timestamp": "2023-06-17 18:48:50"
                    },
                    {
                        "value": "64.226.68.20:5985",
                        "timestamp": "2023-06-17 18:48:50"
                    },
                    {
                        "value": "107.175.172.171:443",
                        "timestamp": "2023-06-17 18:48:43"
                    },
                    {
                        "value": "107.175.172.171:5985",
                        "timestamp": "2023-06-17 18:48:43"
                    },
                    {
                        "value": "107.175.172.171:80",
                        "timestamp": "2023-06-17 18:48:42"
                    },
                    {
                        "value": "107.175.172.171:445",
                        "timestamp": "2023-06-17 18:48:41"
                    },
                    {
                        "value": "68.183.52.177:445",
                        "timestamp": "2023-06-17 18:48:36"
                    },
                    {
                        "value": "63.32.112.45:443",
                        "timestamp": "2023-06-17 18:48:34"
                    },
                    {
                        "value": "18.217.73.143:445",
                        "timestamp": "2023-06-17 06:48:41"
                    },
                    {
                        "value": "172.104.149.134:445",
                        "timestamp": "2023-06-17 06:48:37"
                    },
                    {
                        "value": "68.183.52.177:80",
                        "timestamp": "2023-06-17 06:48:32"
                    },
                    {
                        "value": "213.227.155.115:5985",
                        "timestamp": "2023-06-17 06:48:31"
                    },
                    {
                        "value": "213.227.155.115:80",
                        "timestamp": "2023-06-17 06:48:30"
                    },
                    {
                        "value": "3.20.119.241:5986",
                        "timestamp": "2023-06-17 06:48:27"
                    },
                    {
                        "value": "190.12.102.167:5985",
                        "timestamp": "2023-06-17 06:48:25"
                    },
                    {
                        "value": "3.133.158.78:443",
                        "timestamp": "2023-06-17 06:48:22"
                    },
                    {
                        "value": "159.65.193.223:445",
                        "timestamp": "2023-06-17 06:48:15"
                    },
                    {
                        "value": "159.65.193.223:5986",
                        "timestamp": "2023-06-17 06:48:14"
                    },
                    {
                        "value": "159.65.193.223:5985",
                        "timestamp": "2023-06-17 06:48:13"
                    },
                    {
                        "value": "217.182.253.107:80",
                        "timestamp": "2023-06-17 06:48:06"
                    },
                    {
                        "value": "217.182.253.107:5985",
                        "timestamp": "2023-06-17 06:48:05"
                    },
                    {
                        "value": "217.182.253.107:445",
                        "timestamp": "2023-06-17 06:48:05"
                    },
                    {
                        "value": "217.182.253.107:443",
                        "timestamp": "2023-06-17 06:48:04"
                    },
                    {
                        "value": "18.204.142.71:5985",
                        "timestamp": "2023-06-15 18:49:57"
                    },
                    {
                        "value": "68.183.52.177:5985",
                        "timestamp": "2023-06-15 18:49:53"
                    },
                    {
                        "value": "63.32.112.45:445",
                        "timestamp": "2023-06-15 18:49:44"
                    },
                    {
                        "value": "18.117.104.228:445",
                        "timestamp": "2023-06-14 18:49:43"
                    },
                    {
                        "value": "167.99.113.2:445",
                        "timestamp": "2023-06-14 18:49:40"
                    },
                    {
                        "value": "18.221.160.80:5985",
                        "timestamp": "2023-06-14 18:49:37"
                    },
                    {
                        "value": "38.64.65.8:5985",
                        "timestamp": "2023-06-14 18:49:32"
                    },
                    {
                        "value": "63.32.112.45:80",
                        "timestamp": "2023-06-14 18:49:27"
                    },
                    {
                        "value": "35.171.153.152:443",
                        "timestamp": "2023-06-14 18:49:24"
                    },
                    {
                        "value": "20.13.154.2:445",
                        "timestamp": "2023-06-13 18:49:37"
                    },
                    {
                        "value": "18.221.160.80:5986",
                        "timestamp": "2023-06-13 18:49:29"
                    },
                    {
                        "value": "18.221.160.80:80",
                        "timestamp": "2023-06-13 18:49:28"
                    },
                    {
                        "value": "165.232.154.39:443",
                        "timestamp": "2023-06-13 18:49:25"
                    },
                    {
                        "value": "159.65.130.138:445",
                        "timestamp": "2023-06-12 18:49:15"
                    },
                    {
                        "value": "3.19.132.170:5986",
                        "timestamp": "2023-06-12 18:49:13"
                    },
                    {
                        "value": "54.229.180.175:5985",
                        "timestamp": "2023-06-12 18:49:08"
                    },
                    {
                        "value": "45.137.117.144:80",
                        "timestamp": "2023-06-12 18:49:05"
                    },
                    {
                        "value": "3.121.141.12:443",
                        "timestamp": "2023-06-11 16:52:43"
                    },
                    {
                        "value": "3.19.132.170:5985",
                        "timestamp": "2023-06-11 16:52:39"
                    },
                    {
                        "value": "3.19.132.170:443",
                        "timestamp": "2023-06-11 16:52:38"
                    },
                    {
                        "value": "50.220.18.251:445",
                        "timestamp": "2023-06-11 16:52:24"
                    },
                    {
                        "value": "50.220.18.251:80",
                        "timestamp": "2023-06-11 16:52:23"
                    },
                    {
                        "value": "161.35.110.235:445",
                        "timestamp": "2023-06-10 18:49:20"
                    },
                    {
                        "value": "13.58.85.225:445",
                        "timestamp": "2023-06-10 18:49:17"
                    },
                    {
                        "value": "52.3.246.29:445",
                        "timestamp": "2023-06-10 18:49:12"
                    },
                    {
                        "value": "168.235.67.214:445",
                        "timestamp": "2023-06-10 18:49:07"
                    },
                    {
                        "value": "3.121.141.12:80",
                        "timestamp": "2023-06-10 18:49:02"
                    },
                    {
                        "value": "190.12.102.167:80",
                        "timestamp": "2023-06-10 18:48:58"
                    },
                    {
                        "value": "18.143.148.26:443",
                        "timestamp": "2023-06-10 18:48:55"
                    },
                    {
                        "value": "69.61.107.214:445",
                        "timestamp": "2023-06-10 18:48:44"
                    },
                    {
                        "value": "200.40.79.11:445",
                        "timestamp": "2023-06-09 18:49:14"
                    },
                    {
                        "value": "3.12.70.100:5985",
                        "timestamp": "2023-06-09 18:49:09"
                    },
                    {
                        "value": "3.12.70.100:443",
                        "timestamp": "2023-06-09 18:49:08"
                    },
                    {
                        "value": "3.134.198.51:5985",
                        "timestamp": "2023-06-09 18:49:04"
                    },
                    {
                        "value": "3.134.198.51:443",
                        "timestamp": "2023-06-09 18:49:03"
                    },
                    {
                        "value": "69.61.107.214:443",
                        "timestamp": "2023-06-09 18:48:57"
                    },
                    {
                        "value": "52.14.219.131:5985",
                        "timestamp": "2023-06-09 18:48:55"
                    },
                    {
                        "value": "109.248.6.246:445",
                        "timestamp": "2023-06-09 18:48:46"
                    },
                    {
                        "value": "109.248.6.246:5985",
                        "timestamp": "2023-06-09 18:48:45"
                    },
                    {
                        "value": "109.248.6.246:443",
                        "timestamp": "2023-06-09 18:48:44"
                    },
                    {
                        "value": "209.38.212.41:445",
                        "timestamp": "2023-06-08 18:49:21"
                    },
                    {
                        "value": "18.222.81.233:445",
                        "timestamp": "2023-06-08 18:49:16"
                    },
                    {
                        "value": "45.33.105.239:445",
                        "timestamp": "2023-06-08 18:49:13"
                    },
                    {
                        "value": "13.59.98.191:445",
                        "timestamp": "2023-06-08 18:49:08"
                    },
                    {
                        "value": "95.214.55.202:443",
                        "timestamp": "2023-06-08 18:49:03"
                    },
                    {
                        "value": "3.21.214.24:443",
                        "timestamp": "2023-06-08 18:48:59"
                    },
                    {
                        "value": "3.141.110.210:443",
                        "timestamp": "2023-06-08 18:48:55"
                    },
                    {
                        "value": "18.118.140.42:80",
                        "timestamp": "2023-06-08 18:48:41"
                    },
                    {
                        "value": "134.209.83.148:80",
                        "timestamp": "2023-06-08 18:48:36"
                    },
                    {
                        "value": "134.209.83.148:445",
                        "timestamp": "2023-06-08 18:48:35"
                    },
                    {
                        "value": "18.118.140.42:445",
                        "timestamp": "2023-06-07 18:52:18"
                    },
                    {
                        "value": "46.137.38.121:445",
                        "timestamp": "2023-06-07 18:52:15"
                    },
                    {
                        "value": "51.83.249.137:445",
                        "timestamp": "2023-06-07 18:52:09"
                    },
                    {
                        "value": "3.132.230.8:5985",
                        "timestamp": "2023-06-07 18:52:02"
                    },
                    {
                        "value": "3.132.230.8:80",
                        "timestamp": "2023-06-07 18:52:01"
                    },
                    {
                        "value": "188.166.41.114:80",
                        "timestamp": "2023-06-07 18:51:58"
                    },
                    {
                        "value": "95.214.55.202:80",
                        "timestamp": "2023-06-07 18:51:54"
                    },
                    {
                        "value": "54.216.99.131:443",
                        "timestamp": "2023-06-07 18:51:51"
                    },
                    {
                        "value": "62.182.159.155:80",
                        "timestamp": "2023-06-07 18:51:50"
                    },
                    {
                        "value": "3.128.165.237:443",
                        "timestamp": "2023-06-07 18:51:45"
                    },
                    {
                        "value": "143.198.105.12:80",
                        "timestamp": "2023-06-07 18:51:42"
                    },
                    {
                        "value": "88.119.171.155:5985",
                        "timestamp": "2023-06-07 18:51:39"
                    },
                    {
                        "value": "64.226.68.20:445",
                        "timestamp": "2023-06-06 18:49:59"
                    },
                    {
                        "value": "167.99.113.2:5985",
                        "timestamp": "2023-06-06 18:49:51"
                    },
                    {
                        "value": "12.181.65.210:80",
                        "timestamp": "2023-06-06 18:49:47"
                    },
                    {
                        "value": "194.37.97.138:443",
                        "timestamp": "2023-06-06 18:49:33"
                    },
                    {
                        "value": "3.131.227.105:5986",
                        "timestamp": "2023-06-05 18:49:17"
                    },
                    {
                        "value": "62.10.74.27:80",
                        "timestamp": "2023-06-28 06:49:04"
                    },
                    {
                        "value": "18.119.78.203:443",
                        "timestamp": "2023-06-05 18:48:51"
                    },
                    {
                        "value": "18.119.78.203:445",
                        "timestamp": "2023-06-05 18:48:50"
                    },
                    {
                        "value": "3.131.227.105:443",
                        "timestamp": "2023-06-04 18:49:17"
                    },
                    {
                        "value": "139.162.138.252:443",
                        "timestamp": "2023-06-04 18:49:11"
                    },
                    {
                        "value": "139.162.138.252:5985",
                        "timestamp": "2023-06-04 18:49:11"
                    },
                    {
                        "value": "104.194.222.50:80",
                        "timestamp": "2023-06-04 18:49:07"
                    },
                    {
                        "value": "159.203.143.27:5986",
                        "timestamp": "2023-06-04 18:48:51"
                    },
                    {
                        "value": "159.203.143.27:443",
                        "timestamp": "2023-06-04 18:48:50"
                    },
                    {
                        "value": "120.138.26.178:80",
                        "timestamp": "2023-06-04 18:48:42"
                    },
                    {
                        "value": "120.138.26.178:445",
                        "timestamp": "2023-06-03 18:49:30"
                    },
                    {
                        "value": "44.203.207.207:445",
                        "timestamp": "2023-06-03 18:49:26"
                    },
                    {
                        "value": "66.225.35.229:443",
                        "timestamp": "2023-06-03 18:49:20"
                    },
                    {
                        "value": "66.225.35.229:80",
                        "timestamp": "2023-06-03 18:49:19"
                    },
                    {
                        "value": "24.112.21.157:80",
                        "timestamp": "2023-06-03 18:49:18"
                    },
                    {
                        "value": "128.199.35.229:445",
                        "timestamp": "2023-06-03 18:48:58"
                    },
                    {
                        "value": "128.199.35.229:5985",
                        "timestamp": "2023-06-03 18:48:57"
                    },
                    {
                        "value": "3.250.59.127:445",
                        "timestamp": "2023-06-02 18:49:26"
                    },
                    {
                        "value": "18.202.28.86:443",
                        "timestamp": "2023-06-02 18:49:19"
                    },
                    {
                        "value": "37.139.20.46:80",
                        "timestamp": "2023-06-02 18:49:16"
                    },
                    {
                        "value": "131.246.5.26:5985",
                        "timestamp": "2023-06-02 18:49:09"
                    },
                    {
                        "value": "3.138.120.116:80",
                        "timestamp": "2023-06-02 18:48:46"
                    },
                    {
                        "value": "109.250.181.60:445",
                        "timestamp": "2023-06-01 18:50:22"
                    },
                    {
                        "value": "91.245.253.74:445",
                        "timestamp": "2023-11-28 06:48:44"
                    },
                    {
                        "value": "3.138.120.116:445",
                        "timestamp": "2023-06-01 18:50:15"
                    },
                    {
                        "value": "149.28.176.160:5985",
                        "timestamp": "2023-06-01 18:50:05"
                    },
                    {
                        "value": "134.122.68.71:445",
                        "timestamp": "2023-06-01 18:49:55"
                    },
                    {
                        "value": "134.122.68.71:5986",
                        "timestamp": "2023-06-01 18:49:54"
                    },
                    {
                        "value": "134.122.68.71:80",
                        "timestamp": "2023-06-01 18:49:53"
                    },
                    {
                        "value": "134.122.68.71:443",
                        "timestamp": "2023-06-01 18:49:53"
                    },
                    {
                        "value": "192.52.167.199:443",
                        "timestamp": "2023-06-01 18:49:42"
                    },
                    {
                        "value": "192.52.167.199:80",
                        "timestamp": "2023-06-26 06:48:13"
                    },
                    {
                        "value": "24.112.21.157:445",
                        "timestamp": "2023-05-31 18:49:54"
                    },
                    {
                        "value": "209.222.17.15:445",
                        "timestamp": "2023-05-31 18:49:49"
                    },
                    {
                        "value": "43.159.46.228:443",
                        "timestamp": "2023-05-31 18:49:42"
                    },
                    {
                        "value": "193.149.185.71:5985",
                        "timestamp": "2023-05-31 18:49:32"
                    },
                    {
                        "value": "194.37.97.138:5985",
                        "timestamp": "2023-05-31 18:49:28"
                    },
                    {
                        "value": "194.37.97.138:445",
                        "timestamp": "2023-05-31 18:49:28"
                    },
                    {
                        "value": "192.52.167.199:5985",
                        "timestamp": "2023-05-31 18:49:21"
                    },
                    {
                        "value": "192.52.167.199:445",
                        "timestamp": "2023-05-31 18:49:21"
                    },
                    {
                        "value": "51.91.255.96:445",
                        "timestamp": "2023-05-30 18:50:06"
                    },
                    {
                        "value": "194.37.97.138:80",
                        "timestamp": "2023-05-30 18:49:57"
                    },
                    {
                        "value": "193.149.185.71:443",
                        "timestamp": "2023-05-30 18:49:41"
                    },
                    {
                        "value": "193.149.185.71:80",
                        "timestamp": "2023-05-30 18:49:40"
                    },
                    {
                        "value": "178.79.164.166:445",
                        "timestamp": "2023-05-30 18:49:33"
                    },
                    {
                        "value": "178.79.164.166:5985",
                        "timestamp": "2023-05-30 18:49:32"
                    },
                    {
                        "value": "193.149.185.71:445",
                        "timestamp": "2023-05-29 18:49:36"
                    },
                    {
                        "value": "82.65.153.201:445",
                        "timestamp": "2023-05-29 18:49:30"
                    },
                    {
                        "value": "213.32.72.95:5986",
                        "timestamp": "2023-05-29 18:49:10"
                    },
                    {
                        "value": "139.162.185.21:5986",
                        "timestamp": "2023-05-29 18:49:05"
                    },
                    {
                        "value": "78.47.126.26:445",
                        "timestamp": "2023-05-28 18:49:01"
                    },
                    {
                        "value": "103.179.98.83:5985",
                        "timestamp": "2023-05-28 18:48:55"
                    },
                    {
                        "value": "213.32.72.95:445",
                        "timestamp": "2023-05-28 18:48:52"
                    },
                    {
                        "value": "198.211.103.135:445",
                        "timestamp": "2023-05-28 18:48:46"
                    },
                    {
                        "value": "198.211.103.135:5985",
                        "timestamp": "2023-05-28 18:48:45"
                    },
                    {
                        "value": "198.211.103.135:80",
                        "timestamp": "2023-05-28 18:48:44"
                    },
                    {
                        "value": "139.162.185.21:5985",
                        "timestamp": "2023-05-28 18:48:36"
                    },
                    {
                        "value": "139.162.185.21:445",
                        "timestamp": "2023-05-28 18:48:36"
                    },
                    {
                        "value": "45.33.66.128:445",
                        "timestamp": "2023-05-27 18:49:11"
                    },
                    {
                        "value": "78.47.126.26:5985",
                        "timestamp": "2023-05-27 18:49:05"
                    },
                    {
                        "value": "159.89.136.178:443",
                        "timestamp": "2023-05-27 18:49:05"
                    },
                    {
                        "value": "213.32.72.95:80",
                        "timestamp": "2023-05-27 18:49:00"
                    },
                    {
                        "value": "213.32.72.95:5985",
                        "timestamp": "2023-05-27 18:49:00"
                    },
                    {
                        "value": "78.128.99.215:80",
                        "timestamp": "2023-05-27 18:48:57"
                    },
                    {
                        "value": "143.198.11.108:445",
                        "timestamp": "2023-05-26 18:49:35"
                    },
                    {
                        "value": "157.245.118.196:443",
                        "timestamp": "2023-05-26 18:49:29"
                    },
                    {
                        "value": "78.47.126.26:80",
                        "timestamp": "2023-05-26 18:49:26"
                    },
                    {
                        "value": "88.218.194.37:443",
                        "timestamp": "2023-05-26 18:49:20"
                    },
                    {
                        "value": "194.67.103.231:80",
                        "timestamp": "2023-05-26 18:49:12"
                    },
                    {
                        "value": "109.248.6.221:443",
                        "timestamp": "2023-05-26 18:49:04"
                    },
                    {
                        "value": "103.179.98.83:80",
                        "timestamp": "2023-05-26 18:48:58"
                    },
                    {
                        "value": "159.203.143.27:5985",
                        "timestamp": "2023-05-26 18:48:51"
                    },
                    {
                        "value": "159.203.143.27:80",
                        "timestamp": "2023-05-26 18:48:50"
                    },
                    {
                        "value": "159.203.143.27:445",
                        "timestamp": "2023-05-26 18:48:49"
                    },
                    {
                        "value": "45.135.135.132:5985",
                        "timestamp": "2023-05-26 18:48:46"
                    },
                    {
                        "value": "185.224.129.221:445",
                        "timestamp": "2023-05-25 18:51:04"
                    },
                    {
                        "value": "44.204.136.58:445",
                        "timestamp": "2023-05-25 18:50:57"
                    },
                    {
                        "value": "3.12.113.100:445",
                        "timestamp": "2023-05-25 18:50:54"
                    },
                    {
                        "value": "109.250.180.168:445",
                        "timestamp": "2023-05-25 18:50:51"
                    },
                    {
                        "value": "45.135.135.132:445",
                        "timestamp": "2023-05-25 18:50:47"
                    },
                    {
                        "value": "103.56.55.109:80",
                        "timestamp": "2023-05-25 18:50:42"
                    },
                    {
                        "value": "20.74.179.106:443",
                        "timestamp": "2023-05-25 18:50:39"
                    },
                    {
                        "value": "51.255.5.104:5985",
                        "timestamp": "2023-05-25 18:50:35"
                    },
                    {
                        "value": "198.199.108.132:80",
                        "timestamp": "2023-05-25 18:50:32"
                    },
                    {
                        "value": "104.131.3.28:445",
                        "timestamp": "2023-05-25 18:50:21"
                    },
                    {
                        "value": "104.131.3.28:5985",
                        "timestamp": "2023-05-25 18:50:20"
                    },
                    {
                        "value": "104.131.3.28:5986",
                        "timestamp": "2023-05-25 18:50:20"
                    },
                    {
                        "value": "109.248.6.221:445",
                        "timestamp": "2023-05-25 18:50:16"
                    },
                    {
                        "value": "103.179.98.83:445",
                        "timestamp": "2023-05-25 18:50:08"
                    },
                    {
                        "value": "103.179.98.83:443",
                        "timestamp": "2023-05-25 18:50:07"
                    },
                    {
                        "value": "165.227.191.106:445",
                        "timestamp": "2023-05-24 18:52:17"
                    },
                    {
                        "value": "157.245.118.196:5985",
                        "timestamp": "2023-05-24 18:52:09"
                    },
                    {
                        "value": "157.245.118.196:80",
                        "timestamp": "2023-05-24 18:52:09"
                    },
                    {
                        "value": "109.248.6.221:5985",
                        "timestamp": "2023-05-24 18:52:05"
                    },
                    {
                        "value": "109.248.6.221:80",
                        "timestamp": "2023-05-24 18:52:04"
                    },
                    {
                        "value": "20.49.161.22:80",
                        "timestamp": "2023-05-24 18:52:02"
                    },
                    {
                        "value": "52.148.136.164:80",
                        "timestamp": "2023-05-24 18:51:56"
                    },
                    {
                        "value": "54.74.113.22:5985",
                        "timestamp": "2023-05-24 18:51:54"
                    },
                    {
                        "value": "201.174.115.4:443",
                        "timestamp": "2023-05-24 18:51:51"
                    },
                    {
                        "value": "134.210.3.102:80",
                        "timestamp": "2023-05-23 18:49:15"
                    },
                    {
                        "value": "170.64.152.14:445",
                        "timestamp": "2023-05-22 18:49:49"
                    },
                    {
                        "value": "52.237.219.78:445",
                        "timestamp": "2023-05-22 18:49:46"
                    },
                    {
                        "value": "128.199.149.75:445",
                        "timestamp": "2023-05-22 18:49:42"
                    },
                    {
                        "value": "185.225.70.149:80",
                        "timestamp": "2023-05-22 18:49:39"
                    },
                    {
                        "value": "134.210.3.102:443",
                        "timestamp": "2023-05-21 18:49:43"
                    },
                    {
                        "value": "137.184.24.157:80",
                        "timestamp": "2023-05-21 18:49:39"
                    },
                    {
                        "value": "94.34.46.13:80",
                        "timestamp": "2023-06-06 06:48:32"
                    },
                    {
                        "value": "165.22.36.210:445",
                        "timestamp": "2023-05-21 18:49:17"
                    },
                    {
                        "value": "165.22.36.210:5985",
                        "timestamp": "2023-05-21 18:49:16"
                    },
                    {
                        "value": "89.17.153.8:445",
                        "timestamp": "2023-05-20 18:50:05"
                    },
                    {
                        "value": "139.162.138.252:445",
                        "timestamp": "2023-05-20 18:50:01"
                    },
                    {
                        "value": "138.68.172.182:443",
                        "timestamp": "2023-05-20 18:49:51"
                    },
                    {
                        "value": "3.218.78.81:80",
                        "timestamp": "2023-05-20 18:49:45"
                    },
                    {
                        "value": "45.95.202.23:5985",
                        "timestamp": "2023-05-20 18:49:31"
                    },
                    {
                        "value": "18.189.1.24:445",
                        "timestamp": "2023-05-19 18:49:41"
                    },
                    {
                        "value": "45.95.202.23:445",
                        "timestamp": "2023-05-19 18:49:37"
                    },
                    {
                        "value": "135.125.190.193:443",
                        "timestamp": "2023-05-19 18:49:31"
                    },
                    {
                        "value": "135.125.190.193:80",
                        "timestamp": "2023-05-19 18:49:30"
                    },
                    {
                        "value": "193.46.199.253:5986",
                        "timestamp": "2023-05-19 18:49:27"
                    },
                    {
                        "value": "20.232.138.101:80",
                        "timestamp": "2023-05-19 18:49:26"
                    },
                    {
                        "value": "65.108.196.151:5985",
                        "timestamp": "2023-05-19 18:49:22"
                    },
                    {
                        "value": "203.41.157.231:80",
                        "timestamp": "2023-05-18 18:49:49"
                    },
                    {
                        "value": "193.142.30.29:445",
                        "timestamp": "2023-07-21 06:49:27"
                    },
                    {
                        "value": "143.198.0.217:445",
                        "timestamp": "2023-05-18 18:49:32"
                    },
                    {
                        "value": "143.198.0.217:5985",
                        "timestamp": "2023-05-18 18:49:31"
                    },
                    {
                        "value": "143.198.0.217:443",
                        "timestamp": "2023-05-18 18:49:30"
                    },
                    {
                        "value": "64.227.99.90:5985",
                        "timestamp": "2023-05-18 18:49:22"
                    },
                    {
                        "value": "34.107.117.33:5986",
                        "timestamp": "2023-05-18 18:49:06"
                    },
                    {
                        "value": "34.107.117.33:445",
                        "timestamp": "2023-05-18 18:49:06"
                    },
                    {
                        "value": "34.107.117.33:5985",
                        "timestamp": "2023-05-18 18:49:05"
                    },
                    {
                        "value": "34.107.117.33:80",
                        "timestamp": "2023-05-18 18:49:04"
                    },
                    {
                        "value": "34.107.117.33:443",
                        "timestamp": "2023-05-18 18:49:04"
                    },
                    {
                        "value": "20.232.138.101:443",
                        "timestamp": "2023-05-18 18:49:01"
                    },
                    {
                        "value": "3.249.212.201:5986",
                        "timestamp": "2023-05-18 18:48:54"
                    },
                    {
                        "value": "192.241.193.93:5985",
                        "timestamp": "2023-05-17 18:49:12"
                    },
                    {
                        "value": "192.241.193.93:445",
                        "timestamp": "2023-05-17 18:49:11"
                    },
                    {
                        "value": "143.198.0.217:80",
                        "timestamp": "2023-05-17 18:49:04"
                    },
                    {
                        "value": "134.209.28.104:5985",
                        "timestamp": "2023-05-17 18:49:01"
                    },
                    {
                        "value": "89.29.128.9:80",
                        "timestamp": "2023-05-17 18:48:54"
                    },
                    {
                        "value": "46.101.201.97:445",
                        "timestamp": "2023-05-17 18:48:48"
                    },
                    {
                        "value": "34.89.32.20:445",
                        "timestamp": "2023-05-17 18:48:43"
                    },
                    {
                        "value": "20.51.172.81:445",
                        "timestamp": "2023-05-17 18:48:39"
                    },
                    {
                        "value": "15.222.6.75:80",
                        "timestamp": "2023-05-17 18:48:35"
                    },
                    {
                        "value": "13.87.92.152:443",
                        "timestamp": "2023-05-17 18:48:32"
                    },
                    {
                        "value": "3.252.219.5:5985",
                        "timestamp": "2023-05-17 18:48:28"
                    },
                    {
                        "value": "192.241.193.93:443",
                        "timestamp": "2023-05-16 18:49:24"
                    },
                    {
                        "value": "192.241.193.93:80",
                        "timestamp": "2023-05-16 18:49:23"
                    },
                    {
                        "value": "165.22.47.224:443",
                        "timestamp": "2023-05-15 18:49:39"
                    },
                    {
                        "value": "34.247.180.46:443",
                        "timestamp": "2023-05-15 18:49:20"
                    },
                    {
                        "value": "3.249.151.135:5985",
                        "timestamp": "2023-05-15 18:49:13"
                    },
                    {
                        "value": "213.227.155.89:5986",
                        "timestamp": "2023-05-14 18:49:36"
                    },
                    {
                        "value": "63.33.70.163:443",
                        "timestamp": "2023-05-14 18:49:13"
                    },
                    {
                        "value": "52.176.39.204:80",
                        "timestamp": "2023-05-14 18:49:11"
                    },
                    {
                        "value": "3.253.111.92:443",
                        "timestamp": "2023-05-14 18:48:55"
                    },
                    {
                        "value": "213.227.155.89:5985",
                        "timestamp": "2023-05-13 18:51:19"
                    },
                    {
                        "value": "213.227.155.89:443",
                        "timestamp": "2023-05-13 18:51:18"
                    },
                    {
                        "value": "213.227.155.89:80",
                        "timestamp": "2023-05-13 18:51:17"
                    },
                    {
                        "value": "185.225.70.149:5985",
                        "timestamp": "2023-05-13 18:51:13"
                    },
                    {
                        "value": "165.227.112.99:443",
                        "timestamp": "2023-05-13 18:51:01"
                    },
                    {
                        "value": "165.22.47.224:5985",
                        "timestamp": "2023-05-13 18:51:00"
                    },
                    {
                        "value": "109.120.182.2:5985",
                        "timestamp": "2023-05-13 18:50:51"
                    },
                    {
                        "value": "52.176.39.204:445",
                        "timestamp": "2023-05-13 18:50:39"
                    },
                    {
                        "value": "52.176.39.204:443",
                        "timestamp": "2023-05-13 18:50:38"
                    },
                    {
                        "value": "34.244.155.135:5985",
                        "timestamp": "2023-05-13 18:50:29"
                    },
                    {
                        "value": "18.222.116.178:445",
                        "timestamp": "2023-05-13 18:50:23"
                    },
                    {
                        "value": "18.133.125.105:80",
                        "timestamp": "2023-05-13 18:50:18"
                    },
                    {
                        "value": "176.97.73.54:5986",
                        "timestamp": "2023-05-12 18:50:03"
                    },
                    {
                        "value": "165.227.112.99:5985",
                        "timestamp": "2023-05-12 18:49:55"
                    },
                    {
                        "value": "165.227.112.99:80",
                        "timestamp": "2023-05-12 18:49:54"
                    },
                    {
                        "value": "165.227.112.99:445",
                        "timestamp": "2023-05-12 18:49:53"
                    },
                    {
                        "value": "165.22.47.224:80",
                        "timestamp": "2023-05-12 18:49:49"
                    },
                    {
                        "value": "165.22.47.224:445",
                        "timestamp": "2023-05-12 18:49:48"
                    },
                    {
                        "value": "157.230.217.169:80",
                        "timestamp": "2023-05-12 18:49:46"
                    },
                    {
                        "value": "146.70.35.153:80",
                        "timestamp": "2023-05-12 18:49:43"
                    },
                    {
                        "value": "138.197.40.125:80",
                        "timestamp": "2023-05-12 18:49:42"
                    },
                    {
                        "value": "109.120.182.2:80",
                        "timestamp": "2023-05-12 18:49:34"
                    },
                    {
                        "value": "109.120.182.2:443",
                        "timestamp": "2023-05-12 18:49:34"
                    },
                    {
                        "value": "109.120.182.2:445",
                        "timestamp": "2023-05-12 18:49:33"
                    },
                    {
                        "value": "45.33.73.196:80",
                        "timestamp": "2023-05-12 18:49:19"
                    },
                    {
                        "value": "45.33.73.196:5985",
                        "timestamp": "2023-05-12 18:49:19"
                    },
                    {
                        "value": "45.33.73.196:445",
                        "timestamp": "2023-05-12 18:49:18"
                    },
                    {
                        "value": "34.254.63.103:5985",
                        "timestamp": "2023-05-12 18:49:14"
                    },
                    {
                        "value": "18.189.124.58:443",
                        "timestamp": "2023-05-12 18:49:08"
                    },
                    {
                        "value": "172.104.239.242:80",
                        "timestamp": "2023-05-11 18:49:57"
                    },
                    {
                        "value": "138.197.40.125:5985",
                        "timestamp": "2023-05-11 18:49:53"
                    },
                    {
                        "value": "134.209.175.249:443",
                        "timestamp": "2023-05-11 18:49:48"
                    },
                    {
                        "value": "134.209.175.249:80",
                        "timestamp": "2023-05-11 18:49:47"
                    },
                    {
                        "value": "54.194.154.122:5986",
                        "timestamp": "2023-05-11 18:49:37"
                    },
                    {
                        "value": "46.161.52.181:443",
                        "timestamp": "2023-05-11 18:49:33"
                    },
                    {
                        "value": "167.71.252.5:445",
                        "timestamp": "2023-05-10 18:49:17"
                    },
                    {
                        "value": "167.71.252.5:443",
                        "timestamp": "2023-05-10 18:49:16"
                    },
                    {
                        "value": "167.71.252.5:5985",
                        "timestamp": "2023-05-10 18:49:16"
                    },
                    {
                        "value": "138.197.40.125:445",
                        "timestamp": "2023-05-10 18:49:09"
                    },
                    {
                        "value": "138.197.40.125:443",
                        "timestamp": "2023-05-10 18:49:08"
                    },
                    {
                        "value": "94.131.12.133:445",
                        "timestamp": "2023-05-10 18:49:01"
                    },
                    {
                        "value": "94.131.12.133:443",
                        "timestamp": "2023-05-10 18:49:01"
                    },
                    {
                        "value": "34.242.230.191:443",
                        "timestamp": "2023-05-10 18:48:49"
                    },
                    {
                        "value": "34.31.119.155:443",
                        "timestamp": "2023-05-10 18:48:46"
                    },
                    {
                        "value": "13.37.231.184:443",
                        "timestamp": "2023-05-10 18:48:40"
                    },
                    {
                        "value": "3.249.161.113:445",
                        "timestamp": "2023-05-10 18:48:37"
                    },
                    {
                        "value": "142.93.242.149:5985",
                        "timestamp": "2023-05-09 18:49:13"
                    },
                    {
                        "value": "3.65.94.188:443",
                        "timestamp": "2023-05-09 18:48:55"
                    },
                    {
                        "value": "172.96.137.149:443",
                        "timestamp": "2023-05-08 18:48:58"
                    },
                    {
                        "value": "146.71.79.148:80",
                        "timestamp": "2023-05-08 18:48:55"
                    },
                    {
                        "value": "98.117.29.23:445",
                        "timestamp": "2023-05-08 18:48:51"
                    },
                    {
                        "value": "98.117.29.23:5985",
                        "timestamp": "2023-05-08 18:48:50"
                    },
                    {
                        "value": "98.117.29.23:5986",
                        "timestamp": "2023-05-08 18:48:50"
                    },
                    {
                        "value": "86.3.50.68:80",
                        "timestamp": "2023-05-13 09:25:28"
                    },
                    {
                        "value": "45.137.117.144:443",
                        "timestamp": "2023-05-08 18:48:40"
                    },
                    {
                        "value": "193.105.134.244:445",
                        "timestamp": "2023-05-07 18:48:59"
                    },
                    {
                        "value": "86.3.50.68:443",
                        "timestamp": "2023-05-07 18:48:46"
                    },
                    {
                        "value": "34.241.117.155:443",
                        "timestamp": "2023-05-07 18:48:36"
                    },
                    {
                        "value": "207.106.237.59:443",
                        "timestamp": "2023-05-06 18:49:16"
                    },
                    {
                        "value": "172.96.137.149:5985",
                        "timestamp": "2023-05-06 18:49:08"
                    },
                    {
                        "value": "172.96.137.149:80",
                        "timestamp": "2023-05-06 18:49:07"
                    },
                    {
                        "value": "172.96.137.149:445",
                        "timestamp": "2023-05-06 18:49:06"
                    },
                    {
                        "value": "138.197.186.95:80",
                        "timestamp": "2023-05-06 18:49:00"
                    },
                    {
                        "value": "98.117.29.23:443",
                        "timestamp": "2023-05-06 18:48:54"
                    },
                    {
                        "value": "92.204.160.126:5985",
                        "timestamp": "2023-05-06 18:48:53"
                    },
                    {
                        "value": "64.227.37.134:5986",
                        "timestamp": "2023-05-06 18:48:50"
                    },
                    {
                        "value": "45.56.66.73:445",
                        "timestamp": "2023-05-06 18:48:41"
                    },
                    {
                        "value": "38.32.80.165:5985",
                        "timestamp": "2023-05-06 18:48:38"
                    },
                    {
                        "value": "20.204.3.168:443",
                        "timestamp": "2023-05-06 18:48:34"
                    },
                    {
                        "value": "18.218.44.20:5986",
                        "timestamp": "2023-05-06 18:48:31"
                    },
                    {
                        "value": "3.249.18.59:5985",
                        "timestamp": "2023-05-06 18:48:27"
                    },
                    {
                        "value": "178.128.207.34:5985",
                        "timestamp": "2023-05-05 12:11:08"
                    },
                    {
                        "value": "52.22.139.253:445",
                        "timestamp": "2023-05-05 12:10:51"
                    },
                    {
                        "value": "34.204.1.224:445",
                        "timestamp": "2023-05-05 12:10:46"
                    },
                    {
                        "value": "20.92.142.158:5985",
                        "timestamp": "2023-05-05 12:10:40"
                    },
                    {
                        "value": "20.92.142.158:443",
                        "timestamp": "2023-05-05 12:10:39"
                    },
                    {
                        "value": "18.196.231.230:445",
                        "timestamp": "2023-05-05 12:10:31"
                    },
                    {
                        "value": "18.196.231.230:80",
                        "timestamp": "2023-05-05 12:10:30"
                    },
                    {
                        "value": "147.182.152.233:445",
                        "timestamp": "2023-05-04 18:49:47"
                    },
                    {
                        "value": "120.138.18.160:80",
                        "timestamp": "2023-05-04 18:49:41"
                    },
                    {
                        "value": "54.205.140.17:5985",
                        "timestamp": "2023-05-04 18:49:30"
                    },
                    {
                        "value": "35.180.123.217:443",
                        "timestamp": "2023-05-04 18:49:24"
                    },
                    {
                        "value": "35.180.123.217:80",
                        "timestamp": "2023-05-04 18:49:23"
                    },
                    {
                        "value": "20.225.61.98:443",
                        "timestamp": "2023-05-04 18:49:19"
                    },
                    {
                        "value": "20.225.61.98:80",
                        "timestamp": "2023-05-04 18:49:18"
                    },
                    {
                        "value": "207.244.237.10:80",
                        "timestamp": "2023-05-03 18:48:53"
                    },
                    {
                        "value": "185.193.125.146:5985",
                        "timestamp": "2023-05-03 18:48:49"
                    },
                    {
                        "value": "38.123.247.211:443",
                        "timestamp": "2023-05-03 18:48:29"
                    },
                    {
                        "value": "170.64.168.228:443",
                        "timestamp": "2023-05-02 18:48:51"
                    },
                    {
                        "value": "170.64.168.228:80",
                        "timestamp": "2023-05-02 18:48:50"
                    },
                    {
                        "value": "170.64.168.228:445",
                        "timestamp": "2023-05-02 18:48:49"
                    },
                    {
                        "value": "23.239.17.231:443",
                        "timestamp": "2023-05-02 18:48:30"
                    },
                    {
                        "value": "23.239.17.231:445",
                        "timestamp": "2023-05-02 18:48:29"
                    },
                    {
                        "value": "23.239.17.231:80",
                        "timestamp": "2023-05-02 18:48:29"
                    },
                    {
                        "value": "167.71.168.208:445",
                        "timestamp": "2023-05-01 18:48:51"
                    },
                    {
                        "value": "98.70.2.57:80",
                        "timestamp": "2023-05-02 06:47:56"
                    },
                    {
                        "value": "170.64.168.1:445",
                        "timestamp": "2023-04-30 18:48:40"
                    },
                    {
                        "value": "170.64.168.228:5985",
                        "timestamp": "2023-04-30 18:48:40"
                    },
                    {
                        "value": "170.64.168.1:80",
                        "timestamp": "2023-04-30 18:48:39"
                    },
                    {
                        "value": "35.180.238.137:443",
                        "timestamp": "2023-04-30 18:48:20"
                    },
                    {
                        "value": "185.227.82.72:443",
                        "timestamp": "2023-04-29 18:51:18"
                    },
                    {
                        "value": "170.64.168.1:443",
                        "timestamp": "2023-04-29 18:51:09"
                    },
                    {
                        "value": "170.64.168.1:5985",
                        "timestamp": "2023-04-29 18:51:09"
                    },
                    {
                        "value": "167.71.168.208:80",
                        "timestamp": "2023-04-29 18:51:04"
                    },
                    {
                        "value": "45.33.39.117:443",
                        "timestamp": "2023-04-29 18:50:43"
                    },
                    {
                        "value": "216.238.111.216:445",
                        "timestamp": "2023-04-28 18:49:09"
                    },
                    {
                        "value": "178.62.3.164:443",
                        "timestamp": "2023-04-28 18:49:03"
                    },
                    {
                        "value": "167.99.191.228:445",
                        "timestamp": "2023-04-28 18:48:55"
                    },
                    {
                        "value": "167.71.168.208:5985",
                        "timestamp": "2023-04-28 18:48:51"
                    },
                    {
                        "value": "161.35.122.12:445",
                        "timestamp": "2023-04-28 18:48:49"
                    },
                    {
                        "value": "146.71.79.148:443",
                        "timestamp": "2023-04-28 18:48:43"
                    },
                    {
                        "value": "94.103.81.107:445",
                        "timestamp": "2023-04-28 18:48:36"
                    },
                    {
                        "value": "54.194.243.187:5985",
                        "timestamp": "2023-04-28 18:48:27"
                    },
                    {
                        "value": "45.33.39.117:445",
                        "timestamp": "2023-04-28 18:48:21"
                    },
                    {
                        "value": "34.247.174.193:445",
                        "timestamp": "2023-04-28 18:48:17"
                    },
                    {
                        "value": "216.238.111.216:443",
                        "timestamp": "2023-04-28 06:49:41"
                    },
                    {
                        "value": "196.219.55.74:5985",
                        "timestamp": "2023-04-28 06:49:39"
                    },
                    {
                        "value": "178.62.3.164:80",
                        "timestamp": "2023-04-28 06:49:35"
                    },
                    {
                        "value": "167.99.191.228:5985",
                        "timestamp": "2023-04-28 06:49:28"
                    },
                    {
                        "value": "161.35.122.12:443",
                        "timestamp": "2023-04-28 06:49:23"
                    },
                    {
                        "value": "161.35.122.12:80",
                        "timestamp": "2023-04-28 06:49:22"
                    },
                    {
                        "value": "64.227.37.134:5985",
                        "timestamp": "2023-04-28 06:49:06"
                    },
                    {
                        "value": "52.143.142.21:445",
                        "timestamp": "2023-04-28 06:48:55"
                    },
                    {
                        "value": "52.143.142.21:443",
                        "timestamp": "2023-04-28 06:48:54"
                    },
                    {
                        "value": "52.143.142.21:80",
                        "timestamp": "2023-04-28 06:48:53"
                    },
                    {
                        "value": "44.202.111.183:443",
                        "timestamp": "2023-04-28 06:48:49"
                    },
                    {
                        "value": "34.252.16.250:5986",
                        "timestamp": "2023-04-28 06:48:45"
                    },
                    {
                        "value": "18.190.119.137:445",
                        "timestamp": "2023-04-28 06:48:38"
                    },
                    {
                        "value": "18.190.119.137:80",
                        "timestamp": "2023-04-28 06:48:37"
                    },
                    {
                        "value": "3.140.197.153:445",
                        "timestamp": "2023-04-28 06:48:33"
                    },
                    {
                        "value": "176.97.73.54:445",
                        "timestamp": "2023-04-26 18:54:32"
                    },
                    {
                        "value": "146.71.79.148:5985",
                        "timestamp": "2023-04-26 18:54:23"
                    },
                    {
                        "value": "146.71.79.148:445",
                        "timestamp": "2023-04-26 18:54:22"
                    },
                    {
                        "value": "94.34.157.201:80",
                        "timestamp": "2023-04-26 18:54:14"
                    },
                    {
                        "value": "64.227.37.134:80",
                        "timestamp": "2023-04-26 18:54:04"
                    },
                    {
                        "value": "64.227.37.134:443",
                        "timestamp": "2023-04-26 18:54:04"
                    },
                    {
                        "value": "64.227.37.134:445",
                        "timestamp": "2023-04-26 18:54:03"
                    },
                    {
                        "value": "54.74.116.114:5985",
                        "timestamp": "2023-04-26 18:53:54"
                    },
                    {
                        "value": "52.9.8.91:445",
                        "timestamp": "2023-04-26 18:53:49"
                    },
                    {
                        "value": "52.9.8.91:443",
                        "timestamp": "2023-04-26 18:53:49"
                    },
                    {
                        "value": "40.118.62.149:445",
                        "timestamp": "2023-04-26 18:53:46"
                    },
                    {
                        "value": "18.220.53.56:443",
                        "timestamp": "2023-04-26 18:53:39"
                    },
                    {
                        "value": "18.220.53.56:80",
                        "timestamp": "2023-04-26 18:53:38"
                    },
                    {
                        "value": "3.253.101.91:5985",
                        "timestamp": "2023-04-26 18:53:29"
                    },
                    {
                        "value": "216.238.108.203:445",
                        "timestamp": "2023-04-25 18:52:53"
                    },
                    {
                        "value": "213.232.235.37:445",
                        "timestamp": "2023-04-25 18:52:52"
                    },
                    {
                        "value": "196.219.55.74:445",
                        "timestamp": "2023-04-25 18:52:50"
                    },
                    {
                        "value": "189.38.106.100:445",
                        "timestamp": "2023-04-25 18:52:49"
                    },
                    {
                        "value": "188.124.41.34:445",
                        "timestamp": "2023-04-25 18:52:48"
                    },
                    {
                        "value": "185.227.82.72:445",
                        "timestamp": "2023-04-25 18:52:47"
                    },
                    {
                        "value": "176.97.73.54:80",
                        "timestamp": "2023-04-25 18:52:46"
                    },
                    {
                        "value": "174.138.72.74:445",
                        "timestamp": "2023-04-25 18:52:44"
                    },
                    {
                        "value": "172.105.122.176:445",
                        "timestamp": "2023-04-25 18:52:43"
                    },
                    {
                        "value": "172.96.137.139:445",
                        "timestamp": "2023-04-25 18:52:41"
                    },
                    {
                        "value": "172.96.137.14:445",
                        "timestamp": "2023-04-25 18:52:40"
                    },
                    {
                        "value": "167.172.26.52:445",
                        "timestamp": "2023-04-25 18:52:38"
                    },
                    {
                        "value": "165.22.40.22:445",
                        "timestamp": "2023-04-25 18:52:37"
                    },
                    {
                        "value": "157.245.113.142:445",
                        "timestamp": "2023-04-25 18:52:35"
                    },
                    {
                        "value": "159.223.76.66:445",
                        "timestamp": "2023-04-25 18:52:35"
                    },
                    {
                        "value": "143.198.62.76:445",
                        "timestamp": "2023-04-25 18:52:33"
                    },
                    {
                        "value": "135.125.236.143:445",
                        "timestamp": "2023-04-25 18:52:31"
                    },
                    {
                        "value": "134.122.91.68:445",
                        "timestamp": "2023-04-25 18:52:30"
                    },
                    {
                        "value": "130.61.236.166:445",
                        "timestamp": "2023-05-05 12:40:36"
                    },
                    {
                        "value": "128.106.194.222:445",
                        "timestamp": "2023-07-04 18:50:48"
                    },
                    {
                        "value": "104.237.11.5:445",
                        "timestamp": "2023-04-25 18:52:26"
                    },
                    {
                        "value": "94.177.123.109:445",
                        "timestamp": "2023-04-25 18:52:25"
                    },
                    {
                        "value": "92.204.160.126:445",
                        "timestamp": "2023-04-25 18:52:24"
                    },
                    {
                        "value": "86.105.227.103:445",
                        "timestamp": "2023-07-01 18:48:54"
                    },
                    {
                        "value": "80.85.155.43:445",
                        "timestamp": "2023-04-25 18:52:22"
                    },
                    {
                        "value": "67.204.14.215:5985",
                        "timestamp": "2023-09-04 18:49:15"
                    },
                    {
                        "value": "66.109.142.164:445",
                        "timestamp": "2023-04-25 18:52:19"
                    },
                    {
                        "value": "64.227.34.214:443",
                        "timestamp": "2023-04-25 18:52:17"
                    },
                    {
                        "value": "64.227.34.214:5986",
                        "timestamp": "2023-04-25 18:52:17"
                    },
                    {
                        "value": "64.226.100.189:445",
                        "timestamp": "2023-04-27 06:47:48"
                    },
                    {
                        "value": "64.73.162.11:445",
                        "timestamp": "2023-04-25 18:52:15"
                    },
                    {
                        "value": "54.163.149.166:445",
                        "timestamp": "2023-07-12 06:49:43"
                    },
                    {
                        "value": "45.56.121.8:445",
                        "timestamp": "2023-04-25 18:52:11"
                    },
                    {
                        "value": "35.246.116.51:445",
                        "timestamp": "2023-04-25 18:52:10"
                    },
                    {
                        "value": "35.246.23.156:445",
                        "timestamp": "2023-04-25 18:52:08"
                    },
                    {
                        "value": "35.242.163.216:445",
                        "timestamp": "2023-04-25 18:52:07"
                    },
                    {
                        "value": "20.221.250.187:445",
                        "timestamp": "2023-04-25 18:52:06"
                    },
                    {
                        "value": "20.203.214.18:445",
                        "timestamp": "2023-04-25 18:52:05"
                    },
                    {
                        "value": "18.218.44.20:445",
                        "timestamp": "2023-04-25 18:52:02"
                    },
                    {
                        "value": "18.188.231.17:445",
                        "timestamp": "2023-04-25 18:52:01"
                    },
                    {
                        "value": "18.188.0.172:445",
                        "timestamp": "2023-04-25 18:52:00"
                    },
                    {
                        "value": "15.184.211.28:445",
                        "timestamp": "2023-04-25 18:51:58"
                    },
                    {
                        "value": "13.37.231.184:445",
                        "timestamp": "2023-04-25 18:51:56"
                    },
                    {
                        "value": "8.219.195.188:445",
                        "timestamp": "2023-04-25 18:51:55"
                    },
                    {
                        "value": "3.144.4.92:445",
                        "timestamp": "2023-04-25 18:51:54"
                    },
                    {
                        "value": "209.114.125.120:5986",
                        "timestamp": "2023-04-24 18:48:56"
                    },
                    {
                        "value": "176.97.73.54:443",
                        "timestamp": "2023-04-24 18:48:53"
                    },
                    {
                        "value": "167.172.44.218:443",
                        "timestamp": "2023-04-24 18:48:50"
                    },
                    {
                        "value": "167.172.26.52:80",
                        "timestamp": "2023-04-24 18:48:48"
                    },
                    {
                        "value": "129.21.35.238:80",
                        "timestamp": "2023-04-24 18:48:44"
                    },
                    {
                        "value": "107.148.131.107:80",
                        "timestamp": "2023-04-24 18:48:42"
                    },
                    {
                        "value": "64.73.162.11:443",
                        "timestamp": "2023-04-24 18:48:37"
                    },
                    {
                        "value": "54.163.53.159:443",
                        "timestamp": "2023-04-24 18:48:34"
                    },
                    {
                        "value": "50.207.70.160:443",
                        "timestamp": "2023-04-24 18:48:33"
                    },
                    {
                        "value": "20.14.18.67:80",
                        "timestamp": "2023-08-18 06:53:15"
                    },
                    {
                        "value": "13.50.105.97:80",
                        "timestamp": "2023-04-24 18:48:26"
                    },
                    {
                        "value": "5.45.118.168:1235",
                        "timestamp": "2023-04-24 18:48:23"
                    },
                    {
                        "value": "216.238.108.203:80",
                        "timestamp": "2023-04-24 15:28:21"
                    },
                    {
                        "value": "213.232.235.37:5985",
                        "timestamp": "2023-04-24 15:28:18"
                    },
                    {
                        "value": "209.114.125.120:5985",
                        "timestamp": "2023-04-24 15:28:15"
                    },
                    {
                        "value": "189.38.106.100:5985",
                        "timestamp": "2023-04-24 15:28:12"
                    },
                    {
                        "value": "189.38.106.100:80",
                        "timestamp": "2023-04-24 15:28:11"
                    },
                    {
                        "value": "185.227.82.72:80",
                        "timestamp": "2023-04-24 15:28:09"
                    },
                    {
                        "value": "176.97.73.54:5985",
                        "timestamp": "2023-04-24 15:28:06"
                    },
                    {
                        "value": "173.82.120.231:443",
                        "timestamp": "2023-04-24 15:28:03"
                    },
                    {
                        "value": "172.105.122.176:5985",
                        "timestamp": "2023-04-24 15:28:00"
                    },
                    {
                        "value": "172.105.122.176:80",
                        "timestamp": "2023-04-24 15:27:59"
                    },
                    {
                        "value": "172.96.137.139:5985",
                        "timestamp": "2023-04-24 15:27:55"
                    },
                    {
                        "value": "172.96.137.139:80",
                        "timestamp": "2023-04-24 15:27:54"
                    },
                    {
                        "value": "172.96.137.139:443",
                        "timestamp": "2023-04-24 15:27:54"
                    },
                    {
                        "value": "172.96.137.14:5985",
                        "timestamp": "2023-04-24 15:27:49"
                    },
                    {
                        "value": "172.96.137.14:443",
                        "timestamp": "2023-04-24 15:27:48"
                    },
                    {
                        "value": "172.96.137.14:80",
                        "timestamp": "2023-04-24 15:27:47"
                    },
                    {
                        "value": "167.172.26.52:5985",
                        "timestamp": "2023-04-24 15:27:44"
                    },
                    {
                        "value": "167.172.26.52:443",
                        "timestamp": "2023-04-24 15:27:43"
                    },
                    {
                        "value": "165.22.40.22:5985",
                        "timestamp": "2023-04-24 15:27:40"
                    },
                    {
                        "value": "165.22.40.22:80",
                        "timestamp": "2023-04-24 15:27:39"
                    },
                    {
                        "value": "157.245.113.142:5985",
                        "timestamp": "2023-04-24 15:27:36"
                    },
                    {
                        "value": "157.245.113.142:80",
                        "timestamp": "2023-04-24 15:27:35"
                    },
                    {
                        "value": "146.190.223.51:5985",
                        "timestamp": "2023-04-24 15:27:32"
                    },
                    {
                        "value": "146.190.223.51:80",
                        "timestamp": "2023-04-24 15:27:31"
                    },
                    {
                        "value": "143.198.62.76:5985",
                        "timestamp": "2023-04-24 15:27:28"
                    },
                    {
                        "value": "143.198.62.76:80",
                        "timestamp": "2023-04-24 15:27:27"
                    },
                    {
                        "value": "137.184.91.206:80",
                        "timestamp": "2023-04-24 15:27:25"
                    },
                    {
                        "value": "135.125.236.143:80",
                        "timestamp": "2023-04-24 15:27:21"
                    },
                    {
                        "value": "135.125.236.143:5985",
                        "timestamp": "2023-04-24 15:27:21"
                    },
                    {
                        "value": "134.122.91.68:80",
                        "timestamp": "2023-04-24 15:27:17"
                    },
                    {
                        "value": "134.122.91.68:5985",
                        "timestamp": "2023-04-24 15:27:17"
                    },
                    {
                        "value": "104.237.11.5:80",
                        "timestamp": "2023-04-24 15:27:14"
                    },
                    {
                        "value": "94.177.123.109:80",
                        "timestamp": "2023-05-05 12:40:33"
                    },
                    {
                        "value": "94.34.158.234:80",
                        "timestamp": "2023-04-24 15:27:09"
                    },
                    {
                        "value": "92.204.160.126:443",
                        "timestamp": "2023-04-24 15:27:06"
                    },
                    {
                        "value": "92.204.160.126:80",
                        "timestamp": "2023-04-24 15:27:05"
                    },
                    {
                        "value": "86.105.227.103:443",
                        "timestamp": "2023-04-24 15:27:01"
                    },
                    {
                        "value": "86.105.227.103:80",
                        "timestamp": "2023-04-24 15:27:00"
                    },
                    {
                        "value": "80.85.155.43:80",
                        "timestamp": "2023-04-24 15:26:55"
                    },
                    {
                        "value": "80.85.155.43:443",
                        "timestamp": "2023-04-24 15:26:55"
                    },
                    {
                        "value": "66.109.142.164:5985",
                        "timestamp": "2023-04-24 15:26:51"
                    },
                    {
                        "value": "66.109.142.164:80",
                        "timestamp": "2023-04-24 15:26:50"
                    },
                    {
                        "value": "64.227.34.214:5985",
                        "timestamp": "2023-04-24 15:26:46"
                    },
                    {
                        "value": "64.227.34.214:80",
                        "timestamp": "2023-04-24 15:26:45"
                    },
                    {
                        "value": "64.226.100.189:5985",
                        "timestamp": "2023-04-24 15:26:42"
                    },
                    {
                        "value": "64.226.100.189:80",
                        "timestamp": "2023-04-24 15:26:41"
                    },
                    {
                        "value": "64.73.162.11:80",
                        "timestamp": "2023-04-24 15:26:37"
                    },
                    {
                        "value": "64.73.162.11:5985",
                        "timestamp": "2023-04-24 15:26:37"
                    },
                    {
                        "value": "54.228.112.215:443",
                        "timestamp": "2023-04-24 15:26:34"
                    },
                    {
                        "value": "54.163.149.166:80",
                        "timestamp": "2023-04-24 15:26:31"
                    },
                    {
                        "value": "52.58.17.125:2080",
                        "timestamp": "2023-07-18 18:49:50"
                    },
                    {
                        "value": "52.58.17.125:2443",
                        "timestamp": "2023-04-24 15:26:28"
                    },
                    {
                        "value": "45.56.121.8:5985",
                        "timestamp": "2023-04-30 06:47:56"
                    },
                    {
                        "value": "34.201.16.153:443",
                        "timestamp": "2023-04-24 15:26:23"
                    },
                    {
                        "value": "20.221.250.187:80",
                        "timestamp": "2023-04-24 15:26:20"
                    },
                    {
                        "value": "20.203.214.18:443",
                        "timestamp": "2023-04-24 15:26:17"
                    },
                    {
                        "value": "20.203.214.18:80",
                        "timestamp": "2023-04-24 15:26:16"
                    },
                    {
                        "value": "20.123.192.253:80",
                        "timestamp": "2023-04-24 15:26:14"
                    },
                    {
                        "value": "18.218.44.20:5985",
                        "timestamp": "2023-04-24 15:26:10"
                    },
                    {
                        "value": "18.218.44.20:443",
                        "timestamp": "2023-04-24 15:26:09"
                    },
                    {
                        "value": "18.218.44.20:80",
                        "timestamp": "2023-04-24 15:26:08"
                    },
                    {
                        "value": "18.208.213.147:5985",
                        "timestamp": "2023-04-24 15:26:04"
                    },
                    {
                        "value": "18.208.213.147:443",
                        "timestamp": "2023-04-24 15:26:03"
                    },
                    {
                        "value": "18.208.213.147:80",
                        "timestamp": "2023-04-24 15:26:02"
                    },
                    {
                        "value": "18.188.231.17:80",
                        "timestamp": "2023-04-24 15:26:00"
                    },
                    {
                        "value": "18.188.0.172:80",
                        "timestamp": "2023-04-24 15:25:57"
                    },
                    {
                        "value": "8.219.195.188:80",
                        "timestamp": "2023-04-24 15:25:55"
                    },
                    {
                        "value": "3.10.155.160:80",
                        "timestamp": "2023-04-24 15:25:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-12-01 06:51:03",
    "file_name": "responder",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://yoroi.company/research/shadows-from-the-past-threaten-italian-enterprises/",
            "date": "2020-11-30",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Shadows From The Past Threaten Italian Enterprises",
            "categories": [
                "Rekoobe",
                "LaZagne",
                "Responder",
                "MimiKatz",
                "win.rekoobe"
            ]
        },
        {
            "data_url": "https://github.com/lgandx/Responder",
            "date": "2020-08-19",
            "organization": "Github (lgandx)",
            "author": "Laurent Gaffie",
            "title": "Responder/MultiRelay",
            "categories": [
                "Responder"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "responder",
            "procedure_code": "s0174",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0174",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "responder is used to poison name services to gather hashes and credentials from systems within a local network.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "responder captures hashes and credentials that are sent to the system after the name services have been poisoned.[26]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1040",
                    "technique_link": "https://attack.mitre.org/techniques/T1040",
                    "technique_name": "network sniffing",
                    "technique_description": "adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network. network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. an adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.",
                    "procedure_description": "responder captures hashes and credentials that are sent to the system after the name services have been poisoned.[26]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1557.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1557/001",
                    "technique_name": "adversary-in-the-middle : llmnr/nbt-ns poisoning and smb relay",
                    "technique_description": "by responding to llmnr/nbt-ns network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. this activity may be used to collect or relay authentication materials.",
                    "procedure_description": "responder is used to poison name services to gather hashes and credentials from systems within a local network.[7]"
                }
            ]
        }
    ]
};