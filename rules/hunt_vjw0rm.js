const rule = {
    "id": "6290c377-ecc8-4e3c-b288-5886f5b91d01",
    "info": {
        "name": "Rules Detect Vjw0rm",
        "author": "Openhunting",
        "date": "2023-01-10",
        "modified": "2023-09-28 09:30:22",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Vjw0rm",
        "tags": [
            "vjworm",
            "Vjw0rm",
            "vjw0rm",
            "VjW0rm",
            "WSHRAT",
            "Nanocore",
            "c2",
            "N-W0rm",
            "Houdini"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "81a272a9c9ecebbf3c3643bb4a2588ee",
                        "9005a39c203e068daa077fe244e2608d36852dbef6f6ce8b28cc5cc015b89b1b",
                        "dbd9fa524d604f5176c0a630dc6a33ad882a4ad924f32d0d8e926b2282830b4d",
                        "4d55c5d9ddf1974f62bbf88a693348bc81ceb8a2b7348b8f71c94455497f90de"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "185.245.182.241",
                        "5.135.43.179",
                        "purecry54.duckdns.org:7779",
                        "myjs5690.duckdns.org:5690",
                        "13.77.222.211:7822",
                        "45.155.165.70",
                        "ourvjworm.duckdns.org:7974",
                        "jswormltd.duckdns.org:1921",
                        "79.134.225.100",
                        "103.149.13.61",
                        "htoday476.duckdns.org",
                        "194.5.98.16",
                        "gameserver-789.duia.ro:6677",
                        "tahoo.linkpc.net:777",
                        "mill.hopto.org:7974",
                        "40.85.86.188:37313",
                        "109.248.144.246",
                        "194.5.98.249",
                        "51.13.84.207:4392",
                        "198.23.251.103:3030",
                        "103.47.144.105",
                        "zeegod.duckdns.org:9998",
                        "103.167.91.9:7825",
                        "ecolo.duckdns.org:26008",
                        "195.133.18.127",
                        "8903.duckdns.org:7004",
                        "185.225.73.194",
                        "37.120.137.227:29563",
                        "1982js.duckdns.org:1982",
                        "185.157.162.187:60140",
                        "8903.duckdns.org:7003",
                        "8723yuoistzkk.xyz",
                        "gg1592661.duckdns.org:7924",
                        "jdfodl45.duckdns.org",
                        "45.137.22.166",
                        "194.5.97.156:7657",
                        "141.98.6.215",
                        "20.194.23.12:6012",
                        "45.81.39.90",
                        "107.175.50.207",
                        "marshjohn989.duckdns.org:7920",
                        "185.222.57.147:1989",
                        "198.12.123.17:2402",
                        "8723yuoistzkk.xyz:8723",
                        "193.233.177.235",
                        "198.12.123.17:9406",
                        "185.216.71.62:52054",
                        "103.47.144.15",
                        "37.0.10.5:8020",
                        "81.161.229.224",
                        "213.226.123.172",
                        "alukoren.duckdns.org:9144",
                        "84.38.133.111",
                        "hwprocessing.duckdns.org:9933",
                        "185.81.158.167:8708",
                        "79.134.225.11",
                        "37.0.8.115",
                        "20.69.234.242:2911",
                        "185.81.158.167:8706",
                        "185.157.162.187:63006",
                        "1994time.duckdns.org:1994",
                        "newar21.duckdns.org:2445",
                        "79.134.225.117:7654",
                        "45.138.16.233:1985",
                        "loadcash.duckdns.org:7779",
                        "javaslinns.duia.ro:62104",
                        "64.42.179.67",
                        "103.212.81.158",
                        "2.59.254.205",
                        "185.157.162.75:7974",
                        "jsgrouplimited.duckdns.org:9614",
                        "185.24.233.19:1122",
                        "84.38.134.101",
                        "168.63.41.26:6250",
                        "3000js.duckdns.org:3000",
                        "webtool.publicvm.com:7776",
                        "194.147.140.4",
                        "loadcash.duckdns.org:7778",
                        "91.192.100.8",
                        "185.29.9.30",
                        "104.144.64.172",
                        "192.3.193.58",
                        "moneymoment.duckdns.org:8834",
                        "molharcharatba.xyz:8104",
                        "185.140.53.200:4286",
                        "serv01.nerdpol.ovh:7501",
                        "pattihickey.duckdns.org:8030",
                        "193.169.253.204",
                        "javaslinns.duia.ro:1333",
                        "vijaney.shipnotifica.com:3822",
                        "185.157.162.75:2223",
                        "40.121.49.138:8023",
                        "185.81.157.210:3681",
                        "spdxx.ddns.net:5050",
                        "mt4860068.duckdns.org:7321",
                        "wenotgivingup.duckdns.org:7992",
                        "wotousfrcool.xyz:8704",
                        "192.227.128.163",
                        "wormtoday.duckdns.org",
                        "103.47.144.71",
                        "kraldeli.linkpc.net:3",
                        "52.235.18.18:30281",
                        "kral.linkpc.net:2",
                        "kingshakes1.linkpc.net:6161",
                        "wodmainenew.xyz:8720",
                        "zeegod.duckdns.org:9004",
                        "ghnas79.duckdns.org",
                        "194.147.140.230:10101",
                        "mchristopherr83.duckdns.org:7922",
                        "20.41.98.11:52019",
                        "btime1624.duckdns.org:7923",
                        "20.63.35.138:2156",
                        "194.37.97.161",
                        "198.23.212.140:63006",
                        "dwal-vesj.duckdns.org:29563",
                        "13.92.159.78:6430",
                        "172.93.220.135",
                        "157.90.203.168:60921",
                        "52.231.26.149:6903",
                        "cloride01.duckdns.org:2008",
                        "31.210.20.129",
                        "invoice-update.myiphost.com:1177",
                        "20.194.23.12:5901",
                        "gameserver-789.duia.ro:6789",
                        "mikeleejs.duckdns.org:2190",
                        "37.0.10.222:7992",
                        "109.206.243.106",
                        "dwal-vesj.duckdns.org:6322",
                        "52.188.147.221:5622",
                        "212.193.30.230:6505",
                        "zeegod.duckdns.org:9001",
                        "80.76.51.88:4780",
                        "79.110.62.151",
                        "95.214.27.6",
                        "40.121.108.109:1996",
                        "jdfodl45.duckdns.org:9032",
                        "hopdhosjd.duckdns.org:9035",
                        "40.121.49.138:8024",
                        "194.5.98.75:4532",
                        "javaplug.publicvm.com:333",
                        "185.81.157.187:9093",
                        "travcharles.duia.ro:5098",
                        "biznetworks.ddns.net:2345",
                        "54.252.142.240",
                        "103.151.125.57:8094",
                        "185.246.221.12",
                        "134.19.179.235",
                        "kathyaboth.duia.ro:6534",
                        "vj5566.duckdns.org:5566",
                        "194.5.97.3",
                        "45.81.233.69",
                        "lopemoney8.duckdns.org",
                        "141.255.159.61",
                        "185.29.8.44",
                        "18.222.96.210",
                        "103.47.144.60",
                        "37.0.14.204",
                        "russolouis49.duckdns.org:7903",
                        "favour123.duckdns.org:1978",
                        "13.92.159.78:6431",
                        "198.12.123.17:6040",
                        "mikemons767.duckdns.org:8023",
                        "severdops.ddns.net:5050",
                        "194.180.48.65",
                        "185.81.157.33:5734",
                        "66.42.86.53:9090",
                        "109.206.243.197",
                        "45.77.146.176",
                        "vjme.worlpointer.com:4286",
                        "opmejf.duckdns.org",
                        "194.156.90.26:8012",
                        "109.206.241.50",
                        "ailsakwaoukeil.xyz:6663",
                        "newstokora.xyz:8799",
                        "vjmworks.ddns.net:4040",
                        "kraldeli.linkpc.net:1",
                        "104.238.179.23:6050",
                        "23.101.205.83",
                        "fresh01.ddns.net:2256",
                        "194.5.98.71",
                        "moneykope4.duckdns.org",
                        "185.29.10.48",
                        "212.193.30.230:7975",
                        "79.134.225.72:7974",
                        "franmhort.duia.ro:8152",
                        "185.81.157.7:3313",
                        "harold.jetos.com:3609",
                        "185.216.71.251:7575",
                        "154.127.53.228:1111",
                        "198.12.123.17:7402",
                        "antgobec.duckdns.org:7971",
                        "103.167.91.9:8031",
                        "20.199.188.102:60032",
                        "demon666.duckdns.org:9011",
                        "franmhort.duia.ro:8154",
                        "46.1.54.174:77",
                        "109.248.150.138",
                        "3.24.145.55",
                        "45.147.228.151:37312",
                        "37.0.14.201",
                        "sundayjs7250.duckdns.org",
                        "2.56.57.84",
                        "192.99.255.74",
                        "103.167.91.9:8021",
                        "45.133.1.89:7777",
                        "45.139.105.174:6605",
                        "52.188.147.221:5621",
                        "45.88.67.229",
                        "kingspy.mywire.org:797",
                        "66.165.246.88:1155",
                        "warrr.duckdns.org:9997",
                        "103.14.154.235",
                        "103.47.144.22",
                        "45.139.105.174:7575",
                        "dbmne20.duckdns.org:8832",
                        "20.93.1.24:60923",
                        "wormtoday.duckdns.org:5058",
                        "172.241.27.108:1188",
                        "194.31.98.31",
                        "103.47.144.226",
                        "janda.publicvm.com:1005",
                        "decebermoney.duckdns.org:8022",
                        "tdeasy.duckdns.org:6128",
                        "37.139.128.51",
                        "198.12.123.17:8902",
                        "103.167.91.9:8022",
                        "37.0.14.195",
                        "wordz54.duckdns.org:9010",
                        "185.81.157.172:6558",
                        "185.157.162.115:7974",
                        "severdops.ddns.net:1216",
                        "aqhariabdullah763.ddns.net:3462",
                        "araz50.servehttp.com:5865",
                        "autojreiella.duia.ro:62104",
                        "zeegod.duckdns.org:9003",
                        "66.154.102.135:9401",
                        "38.132.119.150:2211",
                        "nyantime66.duckdns.org",
                        "103.47.144.67",
                        "whiteking.giize.com:6565",
                        "40.117.139.198:7974",
                        "brianrt027.nerdpol.ovh:5200",
                        "nyanmoney02.duckdns.org",
                        "202.55.132.213:1993",
                        "grace2020.home-webserver.de:3774",
                        "192.3.76.12:7974",
                        "54.93.36.95",
                        "3.134.115.127:51078",
                        "37.120.141.147",
                        "hopdhosjd.duckdns.org",
                        "moneyworm6.duckdns.org:1996",
                        "7250js.duckdns.org:7250",
                        "193.56.29.150:5555",
                        "104.168.7.110:7974",
                        "kingshakes.ddns.net:6161",
                        "103.147.185.192:1991",
                        "185.140.53.139:6010",
                        "ffy643dfxvtesdyekyg.ddns.net:7070",
                        "45.141.237.3",
                        "103.125.190.88:4089",
                        "185.140.53.236:6754",
                        "7900js.duckdns.org:7900",
                        "vjworks.ddns.net:7070",
                        "185.81.157.136:3681",
                        "92.222.212.78",
                        "194.5.98.48:4459",
                        "52.231.103.159:5901",
                        "js1994.duckdns.org:4093",
                        "woservicewindows10update.xyz:8703",
                        "y6gsh.duckdns.org",
                        "109.206.243.241",
                        "myroyailrubin2019.duia.ro:7974",
                        "180.214.239.36:1992",
                        "jw9428875.duckdns.org:1991",
                        "57.128.45.1",
                        "5.253.114.102",
                        "13.77.222.211:7820",
                        "12345h.duckdns.org:3030",
                        "204.95.99.109",
                        "stayup.sytes.net:1430",
                        "66.154.102.135:9909",
                        "domaineweb.publicvm.com:1002",
                        "185.29.10.126",
                        "legendtime09.duckdns.org",
                        "shizzlenjworm.duckdns.org:1605",
                        "37.0.14.211",
                        "franmhort.duia.ro",
                        "103.186.66.210",
                        "harold.ns01.info:3606",
                        "lecuy.org:41420",
                        "20.203.136.95:50933",
                        "192.227.128.163:7070",
                        "18.192.43.230",
                        "kiomanito.freemyip.com",
                        "129.204.138.203:7974",
                        "156.96.151.230",
                        "185.140.53.69:4532",
                        "103.47.144.84",
                        "eagle0233ye.duckdns.org:6734",
                        "blackid-42311.portmap.host:7974",
                        "194.5.98.75:5742",
                        "fresh02.ddns.net:2245",
                        "141.98.10.75",
                        "rosenberth.duckdns.org:5633",
                        "79.134.225.36:10101",
                        "103.147.185.192:7974",
                        "185.157.162.75:7070",
                        "webdate.publicvm.com:1007",
                        "travcharles.duia.ro",
                        "138.91.49.153:51118",
                        "103.47.144.47",
                        "vj7974.duckdns.org:7974",
                        "172.111.230.241",
                        "40.71.91.165:1993",
                        "harold.ns01.info:1602",
                        "46.183.220.121",
                        "31.210.20.32:7777",
                        "193.233.191.96",
                        "6200js.duckdns.org:6200",
                        "103.47.144.196",
                        "212.193.30.230",
                        "chongmei33.publicvm.com:7974",
                        "40.127.139.164:61483",
                        "213.226.123.160",
                        "utcsvc.linkpc.net:8082",
                        "37.120.141.190",
                        "40.121.108.109:1995",
                        "bethhavens.duia.ro:62104",
                        "dingspread.duckdns.org:6130"
                    ]
                }
            ]
        }
    ]
};