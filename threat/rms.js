var threatdata = {
    "name": "RMS",
    "alias": "RMS, Remote Manipulator System, Gussdoor",
    "category": "Tools",
    "type": "Backdoor, Info stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "RMS",
        "names": [
            {
                "name": "RMS"
            },
            {
                "name": "Remote Manipulator System"
            },
            {
                "name": "Gussdoor"
            }
        ],
        "description": "CyberInt states that Remote Manipulator System (RMS) is a legitimate tool developed by Russian organization TektonIT and has been observed in campaigns conducted by TA505 as well as numerous smaller campaigns likely attributable to other, disparate, threat actors. In addition to the availability of commercial licenses, the tool is free for non-commercial use and supports the remote administration of both Microsoft Windows and Android devices.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://rmansys.ru/remote-access/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rms"
        ],
        "uuid": "6b263aa0-475c-413f-b618-ed55c6546690",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RMS",
            "malware_alias": "Gussdoor,Remote Manipulator System,RuRAT",
            "malware": "win.rms",
            "last_update": "2023-09-25 17:50:12",
            "tags": [
                "RMS",
                "RemoteManipulator"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "217.12.206.218:5655",
                        "timestamp": "2023-09-25 17:50:12"
                    },
                    {
                        "value": "77.161.25.182:5655",
                        "timestamp": "2023-07-28 09:25:28"
                    },
                    {
                        "value": "216.158.232.18:443",
                        "timestamp": "2023-07-21 13:00:21"
                    },
                    {
                        "value": "51.83.171.208:5655",
                        "timestamp": "2023-05-31 09:40:27"
                    },
                    {
                        "value": "91.191.236.61:5655",
                        "timestamp": "2023-05-21 18:25:21"
                    },
                    {
                        "value": "66.23.226.254:443",
                        "timestamp": "2023-05-18 19:41:37"
                    },
                    {
                        "value": "128.204.191.131:5565",
                        "timestamp": "2023-05-09 16:10:21"
                    },
                    {
                        "value": "89.32.229.110:5655",
                        "timestamp": "2023-02-20 02:55:16"
                    },
                    {
                        "value": "91.230.210.144:777",
                        "timestamp": "2023-02-11 19:30:23"
                    },
                    {
                        "value": "106.250.166.45:5700",
                        "timestamp": "2023-02-06 18:40:41"
                    },
                    {
                        "value": "52.208.217.243:5655",
                        "timestamp": "2023-02-05 19:20:20"
                    },
                    {
                        "value": "185.106.123.200:5655",
                        "timestamp": "2023-01-29 12:15:10"
                    },
                    {
                        "value": "94.142.128.2:5655",
                        "timestamp": "2022-12-30 20:05:19"
                    },
                    {
                        "value": "106.250.166.45:5683",
                        "timestamp": "2022-12-29 13:55:39"
                    },
                    {
                        "value": "82.146.153.37:56550",
                        "timestamp": "2022-12-06 15:40:16"
                    },
                    {
                        "value": "89.46.65.213:5655",
                        "timestamp": "2022-11-21 06:00:19"
                    },
                    {
                        "value": "151.252.111.45:5655",
                        "timestamp": "2022-11-09 04:15:25"
                    },
                    {
                        "value": "156.67.192.70:443",
                        "timestamp": "2022-10-25 22:45:43"
                    },
                    {
                        "value": "86.109.201.118:443",
                        "timestamp": "2022-10-10 23:06:03"
                    },
                    {
                        "value": "51.83.171.223:5655",
                        "timestamp": "2022-10-04 12:45:48"
                    },
                    {
                        "value": "192.70.196.65:5655",
                        "timestamp": "2022-09-19 23:25:41"
                    },
                    {
                        "value": "37.58.60.5:5655",
                        "timestamp": "2022-08-29 22:18:40"
                    },
                    {
                        "value": "80.89.239.149:5655",
                        "timestamp": "2022-08-18 04:21:09"
                    },
                    {
                        "value": "194.132.81.201:5655",
                        "timestamp": "2022-08-07 23:22:20"
                    },
                    {
                        "value": "80.95.202.4:5655",
                        "timestamp": "2022-07-14 18:15:34"
                    },
                    {
                        "value": "185.163.117.35:5655",
                        "timestamp": "2022-06-26 17:30:57"
                    },
                    {
                        "value": "95.143.15.215:5655",
                        "timestamp": "2022-05-17 12:09:36"
                    },
                    {
                        "value": "45.144.30.30:5655",
                        "timestamp": "2022-05-14 23:13:04"
                    },
                    {
                        "value": "77.223.124.212:5655",
                        "timestamp": "2022-05-14 20:08:09"
                    },
                    {
                        "value": "194.226.128.207:5655",
                        "timestamp": "2022-04-27 00:01:29"
                    },
                    {
                        "value": "185.82.202.138:5655",
                        "timestamp": "2022-04-20 09:11:07"
                    },
                    {
                        "value": "77.223.124.211:5655",
                        "timestamp": "2022-03-14 19:26:37"
                    },
                    {
                        "value": "194.190.103.33:5655",
                        "timestamp": "2022-03-09 10:56:28"
                    },
                    {
                        "value": "66.23.226.254:5655",
                        "timestamp": "2022-02-20 11:36:00"
                    },
                    {
                        "value": "85.143.112.188:5655",
                        "timestamp": "2022-02-08 01:51:37"
                    },
                    {
                        "value": "77.247.243.43:5655",
                        "timestamp": "2021-12-28 00:56:18"
                    },
                    {
                        "value": "5.133.65.53:5655",
                        "timestamp": "2021-12-27 15:21:13"
                    },
                    {
                        "value": "152.168.39.243:5655",
                        "timestamp": "2021-12-20 03:56:00"
                    },
                    {
                        "value": "87.75.248.145:5655",
                        "timestamp": "2021-11-28 01:05:33"
                    },
                    {
                        "value": "95.213.205.83:5655",
                        "timestamp": "2021-11-22 21:16:59"
                    },
                    {
                        "value": "109.234.156.179:5655",
                        "timestamp": "2021-11-20 00:01:46"
                    },
                    {
                        "value": "216.158.232.18:5655",
                        "timestamp": "2021-11-13 19:20:12"
                    },
                    {
                        "value": "95.213.205.82:5655",
                        "timestamp": "2021-11-07 16:31:47"
                    },
                    {
                        "value": "50.240.232.117:5655",
                        "timestamp": "2021-10-17 07:10:29"
                    },
                    {
                        "value": "194.212.26.172:5656",
                        "timestamp": "2021-09-26 23:02:12"
                    },
                    {
                        "value": "83.69.2.130:1812",
                        "timestamp": "2021-09-12 18:25:16"
                    },
                    {
                        "value": "66.208.244.253:5655",
                        "timestamp": "2021-08-26 17:53:03"
                    },
                    {
                        "value": "182.93.93.132:5655",
                        "timestamp": "2021-08-11 18:06:17"
                    },
                    {
                        "value": "209.66.104.126:5655",
                        "timestamp": "2021-08-03 00:10:56"
                    },
                    {
                        "value": "196.40.180.218:5655",
                        "timestamp": "2021-08-02 22:56:11"
                    },
                    {
                        "value": "109.195.195.159:5655",
                        "timestamp": "2021-07-30 22:11:09"
                    },
                    {
                        "value": "65.0.5.240:5655",
                        "timestamp": "2021-07-23 20:45:52"
                    },
                    {
                        "value": "185.251.25.64:5655",
                        "timestamp": "2021-07-20 01:01:18"
                    },
                    {
                        "value": "45.82.71.172:5655",
                        "timestamp": "2021-07-16 12:45:38"
                    },
                    {
                        "value": "85.192.165.221:80",
                        "timestamp": "2021-07-15 09:06:20"
                    },
                    {
                        "value": "77.223.124.210:5655",
                        "timestamp": "2021-07-06 20:21:25"
                    },
                    {
                        "value": "185.175.44.167:563",
                        "timestamp": "2021-06-23 22:16:47"
                    },
                    {
                        "value": "96.85.25.29:5655",
                        "timestamp": "2021-06-23 13:05:55"
                    },
                    {
                        "value": "87.103.195.248:5655",
                        "timestamp": "2021-05-28 19:45:11"
                    },
                    {
                        "value": "83.220.53.151:5655",
                        "timestamp": "2021-05-11 08:10:37"
                    },
                    {
                        "value": "54.188.107.146:5655",
                        "timestamp": "2021-05-03 21:46:01"
                    },
                    {
                        "value": "112.220.118.66:5655",
                        "timestamp": "2021-04-26 15:56:43"
                    },
                    {
                        "value": "43.255.175.215:443",
                        "timestamp": "2021-04-16 03:25:48"
                    },
                    {
                        "value": "194.87.186.40:5655",
                        "timestamp": "2021-04-10 20:35:16"
                    },
                    {
                        "value": "194.169.163.42:5655",
                        "timestamp": "2021-04-08 06:50:32"
                    },
                    {
                        "value": "195.154.84.75:5655",
                        "timestamp": "2021-03-28 21:26:11"
                    },
                    {
                        "value": "109.234.156.178:5655",
                        "timestamp": "2021-03-26 07:02:01"
                    },
                    {
                        "value": "185.175.44.167:5655",
                        "timestamp": "2021-03-26 07:02:00"
                    },
                    {
                        "value": "195.2.76.196:5655",
                        "timestamp": "2021-03-23 08:17:30"
                    },
                    {
                        "value": "213.252.246.63:5655",
                        "timestamp": "2021-03-13 08:16:21"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-25 17:50:12",
    "mitre": [],
    "file_name": "rms",
    "analysis": null
};