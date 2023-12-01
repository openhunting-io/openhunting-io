var threatdata = {
    "name": "Raspberry Robin",
    "alias": "Raspberry Robin, RaspberryRobin, LINK_MSIEXEC, QNAP-Worm",
    "category": "Malware",
    "type": "Backdoor, Worm",
    "modified": "2023-09-07",
    "all_data": {
        "tool": "Raspberry Robin",
        "names": [
            {
                "name": "Raspberry Robin"
            },
            {
                "name": "RaspberryRobin"
            },
            {
                "name": "LINK_MSIEXEC"
            },
            {
                "name": "QNAP-Worm"
            }
        ],
        "description": "(Red Canary) \u201cRaspberry Robin\u201d is Red Canary\u2019s name for a cluster of activity we first observed in September 2021 involving a worm that is often installed via USB drive. This activity cluster relies on msiexec.exe to call out to its infrastructure, often compromised QNAP devices, using HTTP requests that contain a victim\u2019s user and device names. We also observed Raspberry Robin use TOR exit nodes as additional command and control (C2) infrastructure.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Worm"
        ],
        "information": [
            "https://redcanary.com/blog/raspberry-robin/",
            "https://blogs.cisco.com/security/raspberry-robin-highly-evasive-worm-spreads-over-external-disks",
            "https://securityintelligence.com/posts/raspberry-robin-worm-dridex-malware/",
            "https://www.bleepingcomputer.com/news/security/microsoft-links-raspberry-robin-malware-to-evil-corp-attacks/",
            "https://www.microsoft.com/en-us/security/blog/2022/10/27/raspberry-robin-worm-part-of-larger-ecosystem-facilitating-pre-ransomware-activity/",
            "https://www.trendmicro.com/en_us/research/22/l/raspberry-robin-malware-targets-telecom-governments.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.raspberry_robin"
        ],
        "uuid": "aa33ee5c-7411-475f-a356-21664c8411e1",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Raspberry Robin",
            "malware_alias": "RaspberryRobin,QNAP-Worm,LINK_MSIEXEC",
            "malware": "win.raspberry_robin",
            "last_update": "2023-10-17 10:23:13",
            "tags": [
                "raspberryrobin",
                "DEV-0651",
                "QNAP",
                "USB",
                "LNK",
                "Worm",
                "RaspberryRobin"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "82.124.243.57:8081",
                        "timestamp": "2023-10-17 10:23:13"
                    },
                    {
                        "value": "2.11.150.174:8081",
                        "timestamp": "2023-10-17 10:23:12"
                    },
                    {
                        "value": "86.146.133.44:8080",
                        "timestamp": "2023-10-07 14:30:41"
                    },
                    {
                        "value": "86.146.133.125:8080",
                        "timestamp": "2023-10-07 14:30:41"
                    },
                    {
                        "value": "61.69.195.109:8080",
                        "timestamp": "2023-10-07 14:30:40"
                    },
                    {
                        "value": "79.27.61.23:8080",
                        "timestamp": "2023-10-07 14:30:40"
                    },
                    {
                        "value": "86.101.164.105:8080",
                        "timestamp": "2023-10-07 14:30:40"
                    },
                    {
                        "value": "220.135.222.186:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "58.177.98.79:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "94.10.67.162:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "118.167.131.52:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "118.167.144.103:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "218.221.150.148:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "61.68.74.170:8080",
                        "timestamp": "2023-01-11 06:59:28"
                    },
                    {
                        "value": "85.56.236.45:8080",
                        "timestamp": "2022-12-06 04:45:59"
                    },
                    {
                        "value": "125.191.5.20:8080",
                        "timestamp": "2022-09-02 11:54:22"
                    },
                    {
                        "value": "79.21.111.16:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "79.26.16.93:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "79.46.2.104:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "82.53.94.232:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "82.125.202.251:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "84.3.114.216:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "89.14.204.241:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "94.5.200.190:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "94.11.86.46:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "101.109.242.88:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "101.109.242.118:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "119.237.136.30:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "121.171.184.22:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "122.213.27.148:8080",
                        "timestamp": "2022-09-02 11:54:21"
                    },
                    {
                        "value": "1.163.239.22:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "1.175.74.58:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "1.175.125.217:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "1.175.137.191:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "1.175.153.226:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "31.17.3.210:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "58.136.1.101:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "58.136.239.28:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "61.244.156.107:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "67.171.80.255:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "70.124.238.72:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "77.183.5.151:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "77.191.244.198:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "78.55.212.34:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "79.19.192.68:8080",
                        "timestamp": "2022-09-02 11:54:20"
                    },
                    {
                        "value": "179.60.150.120:8080",
                        "timestamp": "2022-09-02 11:54:19"
                    }
                ],
                "domain": [
                    {
                        "value": "6qo.at",
                        "timestamp": "2023-06-01 19:07:07"
                    },
                    {
                        "value": "5z.pm",
                        "timestamp": "2023-04-16 08:51:22"
                    },
                    {
                        "value": "u0.nz",
                        "timestamp": "2023-04-16 08:51:22"
                    },
                    {
                        "value": "7k.rs",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "3y.nu",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "6c.nz",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "3p.ms",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "q0.wf",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "2i.wf",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "0p.rs",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "3z.nu",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "4n.wf",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "h6.re",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "g4.nu",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "2t.wf",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "a0.pm",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "6t.pm",
                        "timestamp": "2023-04-16 08:51:21"
                    },
                    {
                        "value": "naskk.myqnapcloud.com",
                        "timestamp": "2023-04-15 06:54:17"
                    },
                    {
                        "value": "fgcz.net",
                        "timestamp": "2023-06-01 19:07:07"
                    },
                    {
                        "value": "nzm.one",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "oj8.eu",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "omzk.org",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "p3.ms",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "p9.tel",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "pjz.one",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "q2.rs",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "qmpo.art",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "r0.pm",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "r4e.pl",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "r6.nz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "ri7.biz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "rx3.xyz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "s8.cx",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "skqv.eu",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "t7.nz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "tz6.org",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "u0.pm",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "ue2.eu",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "uoej.net",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "uqw.futbol",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "uz3.me",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "v0.cx",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "vn6.co",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "w4.wf",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "w6.nz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "wak.rocks",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "xjam.hk",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "xz4.biz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "y3x.biz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "yuiw.xyz",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "z7s.org",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "zbs.is",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "zk.qa",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "zk4.me",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "zk5.co",
                        "timestamp": "2022-09-06 07:24:01"
                    },
                    {
                        "value": "k5j.one",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "k5m.co",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "k5x.xyz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "k6c.org",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "k6j.me",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "k6j.pw",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "kglo.link",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "kj1.xyz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "kjaj.top",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "kr4.xyz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "krrz.pm",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "l5k.xyz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "l9b.org",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "lgf.pw",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "lwip.re",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "m0.wf",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "m5n.biz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "mirw.wf",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "mn1.biz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "mwgq.net",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "mz3.biz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "mzjc.is",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "n3.wf",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "n5.ms",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "n54.me",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "n5k.me",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "nt3.xyz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "nz4.xyz",
                        "timestamp": "2022-09-06 07:24:00"
                    },
                    {
                        "value": "b9.pm",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "bpyo.in",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "c0.wf",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "c4z.pl",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "c7.ic",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "c7.lc",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "dj2.biz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "doem.re",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "e9.wf",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "egso.net",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "ej3.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "ejk.bz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "euya.cn",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "f0.tel",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "fxb.tw",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "fz.ms",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "g4.tel",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "g4.wf",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "glnj.nl",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "gz3.nl",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "i49.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "i4x.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "i6n.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "iz.gy",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j1n.me",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j2.gy",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j4r.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j4z.co",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j4z.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j5m.biz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j5n.xyz",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j68.info",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "j8.si",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "jjl.one",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "jzm.pw",
                        "timestamp": "2022-09-06 07:23:59"
                    },
                    {
                        "value": "1k4.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "2j4.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "2yd.eu",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "3e.pm",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "3h.wf",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "3h1.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4j1.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4j5.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4k1.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4kx.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4m.wf",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4q.pm",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4s3.me",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "4w.rs",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "5j8.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "5jb.me",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "5kj.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "5kx.me",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "5qw.pw",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "5s.pm",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "66j.me",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "6id.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "6j2.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "6w.re",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "6wr9.com",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "6xj.xyz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "6y.re",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "7yfb.com",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "8t.pm",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "aij.hk",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "as3.biz",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "b3vv.com",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "b8x.org",
                        "timestamp": "2022-09-06 07:23:58"
                    },
                    {
                        "value": "0dz.me",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "0e.si",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "0t.yt",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "0v.wf",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "0w.pm",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "0x9.biz",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "13j.me",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "1h3.me",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "1j.pm",
                        "timestamp": "2022-09-06 07:23:57"
                    },
                    {
                        "value": "1j4.xyz",
                        "timestamp": "2022-09-06 07:23:57"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "3329ad32799c142d6cd5e7f6a1dff755",
                        "timestamp": "2023-04-15 06:53:09"
                    },
                    {
                        "value": "d1993684f055e9cfd964d35952f570f8",
                        "timestamp": "2023-04-15 06:53:09"
                    },
                    {
                        "value": "b7d6f079a6b084c1c8293ab4cd54b585",
                        "timestamp": "2023-04-15 06:53:09"
                    },
                    {
                        "value": "131243c786a2efed6e7f35dabfef4be8",
                        "timestamp": "2023-04-15 06:53:09"
                    },
                    {
                        "value": "f5e6ffec3c33e9c84e11d6101d181c4e",
                        "timestamp": "2023-04-15 06:53:09"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "c8ff8a9793a99c0f6ac19a1a3bdcf6b34862a6e38a4130c7e1390752a20579a9",
                        "timestamp": "2023-01-26 16:24:50"
                    },
                    {
                        "value": "a30dd8721d4a3a4925ed825a21e8186efe32db0b8471947368dac0eef1f85efd",
                        "timestamp": "2023-01-26 16:24:53"
                    },
                    {
                        "value": "e74cf1c88298d16af252c0ef6ce81fdbff4adae0226d5f962de4744016f1fcb6",
                        "timestamp": "2023-01-23 11:53:52"
                    },
                    {
                        "value": "253b88c1f8938affd796b5fe0738c4c8171cf39dc17d32aceed1456ea4bee0ad",
                        "timestamp": "2022-09-02 11:36:47"
                    },
                    {
                        "value": "a482e13d1fbd3b6b305a6a73b9d2d8632b58d756736cfd08d38a758ec00606ca",
                        "timestamp": "2022-09-02 11:36:47"
                    },
                    {
                        "value": "8fc5d90692749e690dacaf0564b419aca6ec8015b835ddeba0a14a1fa9b30633",
                        "timestamp": "2022-09-02 11:36:47"
                    },
                    {
                        "value": "1eb48fce25c89f9a7e90ef0dfd395b5fdd9535765a647599b0e0fd7dfde48b02",
                        "timestamp": "2022-09-02 11:36:47"
                    },
                    {
                        "value": "717b23df402315ce0788352a7e4c8b61e25163e5cd0a523bd61128991f361aa3",
                        "timestamp": "2022-09-02 11:36:47"
                    },
                    {
                        "value": "c39ba83fb6f6caa313801fb254fb64de4e0df64ea6edaa0702ec7d1347b5fd38",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "076fef803408e653fbd5641e9f5a680da3f534c55d1029f3ba8d4689e43de601",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "8e269abd3c6fe8bbe6351f7e731716df739db4895feafba7778f5b31960d97b3",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "9ce8eb379cc9a2f0ae11859880b18c7ec343270035a6c01b37c045d51c50face",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "4d8787ef65b0e2729ac4ef8d00d66c397ca09694a4e5472130ed45ca9c4aa8e1",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "bdf4a67918249dc3477bbe1a47a74176922480ac5c5e73710d07cf6f904bedb6",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "8f11dae7b19967c59a566063b42e6f787a260159f1066b6333a3ee02e258cdfc",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "dfca77c93631f5f28d253a16e2a678bb7ec31f76eab6372236f3a6182e5c4214",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "bb303c2d9012a9d89ac6c00048b92ee506b3e81538698502c060b144c9371b21",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "f2aa687f5fb052c2265e9e1acc959f60b1af036a7724521d811b82f09fc8349b",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "e455a74b85be6bd26557fe3dcc3eeaf85e0ee64dcbbbadf28e2b9da5632f921c",
                        "timestamp": "2022-09-02 11:36:44"
                    },
                    {
                        "value": "b80e8b7dc4fb11f035b465acf16bdf4c950272774f53521210907cc4056ffb96",
                        "timestamp": "2022-09-02 11:36:44"
                    },
                    {
                        "value": "aa5eea31237867d9a3a65a1eafec3efb4c00a75fc917277168682af1462801b8",
                        "timestamp": "2022-09-02 11:36:44"
                    },
                    {
                        "value": "fd162d6dcdb5d135099ab9a45cea11ab57277bf214a84cde7aec425cd3ca87e3",
                        "timestamp": "2022-09-02 11:36:44"
                    },
                    {
                        "value": "77ae3f47aef1cca9ff5092843c937bc380f045acf4566d1d1895df185770169b",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "35e7bf4fe22fe9d7adbe51e95ea4d2d7302ff3bf6a9b46bd663521031d23f5e1",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "27bd56bf6ddd9d87eb4bb2c1bf4b03932fcfe6a7c295e60ace78cc75a99ea48d",
                        "timestamp": "2022-09-02 11:36:43"
                    },
                    {
                        "value": "ff600b48ef4f27441dcbfb377195a17fbfa8f3ac707378a1a0e2739ec86fb2ed",
                        "timestamp": "2022-09-02 11:36:43"
                    },
                    {
                        "value": "7440caa335e40b476c6434e1b7201ad969ed6d2841a123eed59fbf3c924e1be4",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "e1ca135b9c925a9b05ccd0c610f79288e2939ba0f452261d41d636e01927b9a7",
                        "timestamp": "2022-09-02 11:36:44"
                    },
                    {
                        "value": "7b58bf90ee3c6bcb87d0751cdbf7d333949d8d4b07ddba1d3c9a7c72f93040f1",
                        "timestamp": "2022-09-02 11:36:43"
                    },
                    {
                        "value": "01d13023055420ee95f79cafeee9e78f1579de3cbaab4a29227d28b16421be65",
                        "timestamp": "2022-09-02 11:36:43"
                    },
                    {
                        "value": "49e51b5d6c0e030f2688759c9495fab9533b368122dc7a3369fbac208ee8b630",
                        "timestamp": "2022-09-02 11:36:46"
                    },
                    {
                        "value": "2c10b80dc69e531b618aa3553ee9079989468a03d4be5b3cea9421d9b082411b",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "23b808a462f1f4172cbb6a77dbbdf257f6abb4cbef652c651bc204af0b2e6b14",
                        "timestamp": "2022-09-02 11:36:47"
                    },
                    {
                        "value": "faa63e99ba00f8a6ca9c917d637cf00615394216bbf12cb40638a2cd88a69204",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "e00a6bd1a9f4b47a7d7caeaa8a5c0210506338f369c16078d852a24d907d6088",
                        "timestamp": "2022-09-02 11:36:41"
                    },
                    {
                        "value": "70e2c193de153a89cc834b5404d4c1135058dfd92f9a4dd592f97db6ed27fa65",
                        "timestamp": "2022-09-02 11:36:43"
                    },
                    {
                        "value": "0d25743cdd5bb3b64ba87821caabc2c2990edff5d09c5a259917436fb995154c",
                        "timestamp": "2022-09-02 11:36:41"
                    },
                    {
                        "value": "ada0b05b322ca036484955974b5a2e5093f5de6ffd904b39fef9d0f155f31c62",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "87eca6d43c76d34e7662d7cacc378009643c236ef2109cf8e25e838fd0e4bb39",
                        "timestamp": "2022-09-02 11:36:41"
                    },
                    {
                        "value": "fcf26ed52c680c38f05d4f3815ef0a5e4eac75a937015ba1d2c8c8b0692daec3",
                        "timestamp": "2022-09-02 11:36:45"
                    },
                    {
                        "value": "ab7cfcefcd7440c9894fb3b9ff2639d17d00f265b60d43f181ffd24b0911f659",
                        "timestamp": "2022-09-02 11:36:44"
                    },
                    {
                        "value": "7be13446f9e63a6ae8aab7b31a1452503b9204e37511d65798b0d67d59c541fa",
                        "timestamp": "2022-09-02 11:36:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-17 10:23:13",
    "file_name": "raspberry_robin",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.huntress.com/blog/evolution-of-usb-borne-malware-raspberry-robin",
            "date": "2023-09-07",
            "organization": "Huntress Labs",
            "author": "Harlan Carvey",
            "title": "Evolution of USB-Borne Malware, Raspberry Robin",
            "categories": [
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/raspberry-robin-anti-evasion-how-to-exploit-analysis/",
            "date": "2023-04-18",
            "organization": "Check Point Research",
            "author": "Shavit Yosef",
            "title": "Raspberry Robin: Anti-Evasion How-To & Exploit Analysis",
            "categories": [
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/raspberry-robin-anti-evasion-how-to-exploit-analysis",
            "date": "2023-04-18",
            "organization": "Checkpoint",
            "author": "Shavit Yosef",
            "title": "Raspberry Robin: Anti-Evasion How-To & Exploit Analysis",
            "categories": [
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://www.securityjoes.com/post/raspberry-robin-detected-itw-targeting-insurance-financial-institutes-in-europe",
            "date": "2023-01-03",
            "organization": "Security Joes",
            "author": "SecurityJoes",
            "title": "Raspberry Robin Detected ITW Targeting Insurance & Financial Institutes In Europe",
            "categories": [
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/fr_fr/research/22/l/raspberry-robin-malware-targets-telecom-governments.html",
            "date": "2022-12-20",
            "organization": "Trend Micro",
            "author": "Christopher Daniel So",
            "title": "Raspberry Robin Malware Targets Telecom, Governments",
            "categories": [
                "Raspberry Robin",
                "Roshtyak"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/breaking-the-silence-recent-truebot-activity/",
            "date": "2022-12-08",
            "organization": "Cisco Talos",
            "author": "Tiago Pereira",
            "title": "Breaking the silence - Recent Truebot activity",
            "categories": [
                "Clop",
                "Cobalt Strike",
                "FlawedGrace",
                "Raspberry Robin",
                "Silence",
                "Teleport"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/microsoft-links-raspberry-robin-worm-to-clop-ransomware-attacks/",
            "date": "2022-10-27",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Microsoft links Raspberry Robin worm to Clop ransomware attacks",
            "categories": [
                "Clop",
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2022/10/27/raspberry-robin-worm-part-of-larger-ecosystem-facilitating-pre-ransomware-activity/",
            "date": "2022-10-27",
            "organization": "Microsoft",
            "author": "Microsoft Security Threat Intelligence",
            "title": "Raspberry Robin worm part of larger ecosystem facilitating pre-ransomware activity",
            "categories": [
                "FAKEUPDATES",
                "BumbleBee",
                "Fauppod",
                "PhotoLoader",
                "Raspberry Robin",
                "Roshtyak"
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
            "data_url": "https://decoded.avast.io/janvojtesek/raspberry-robins-roshtyak-a-little-lesson-in-trickery/",
            "date": "2022-09-22",
            "organization": "Avast",
            "author": "Jan Vojt\u011b\u0161ek",
            "title": "Raspberry Robin\u2019s Roshtyak: A Little Lesson in Trickery",
            "categories": [
                "Raspberry Robin",
                "Roshtyak"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/raspberry-robin-worm-dridex-malware/",
            "date": "2022-09-01",
            "organization": "IBM",
            "author": "Kevin Henson",
            "title": "Raspberry Robin and Dridex: Two Birds of a Feather",
            "categories": [
                "Dridex",
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://blogs.cisco.com/security/raspberry-robin-highly-evasive-worm-spreads-over-external-disks",
            "date": "2022-08-09",
            "organization": "Cisco",
            "author": "Onur Mustafa Erdogan",
            "title": "Raspberry Robin: Highly Evasive Worm Spreads over External Disks",
            "categories": [
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/07/microsoft-links-raspberry-robin-usb.html?_m=3n%2e009a%2e2800%2ejp0ao0cjb8%2e1shm",
            "date": "2022-07-30",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Microsoft Links Raspberry Robin USB Worm to Russian Evil Corp Hackers",
            "categories": [
                "FAKEUPDATES",
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-alert-raspberry-robin-worm-abuses-windows-installer-and-qnap-devices",
            "date": "2022-07-07",
            "organization": "Cybereason",
            "author": "Lo\u00efc Castel",
            "title": "THREAT ALERT: Raspberry Robin Worm Abuses Windows Installer and QNAP Devices",
            "categories": [
                "Raspberry Robin"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/raspberry-robin/",
            "date": "2022-05-05",
            "organization": "Red Canary",
            "author": "Lauren Podber",
            "title": "Raspberry Robin gets the worm early",
            "categories": [
                "Raspberry Robin"
            ]
        }
    ],
    "mitre": []
};