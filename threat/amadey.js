var threatdata = {
    "name": "Amadey",
    "alias": "Amadey",
    "category": "Malware",
    "type": "Reconnaissance, Dropper",
    "modified": "2023-11-19",
    "all_data": {
        "tool": "Amadey",
        "names": [
            {
                "name": "Amadey"
            }
        ],
        "description": "(Cylance) Amadey is a simple Trojan bot first discovered in October of 2018. It is primarily used for collecting information on a victim's environment, though it can also deliver other malware.\n\nA major infection vector for Amadey are exploit kits such as RigEK and Fallout EK. During our monitoring, we also observed this Trojan being delivered via AZORult Infostealer on February 23rd to March 1st, and April 18th to June 5th. The sample hash values were not changed frequently. Recently, TA505 used Amadey for their campaign in April 2019.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Dropper"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-amadey-bot.html",
            "https://krabsonsecurity.com/2019/02/13/analyzing-amadey-a-simple-native-malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1025/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.amadey"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:amadey"
        ],
        "uuid": "26428c47-8df5-4c3c-864f-5c526f5bbdfc",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Amadey",
            "malware_alias": null,
            "malware": "win.amadey",
            "last_update": "2023-12-01 17:36:15",
            "tags": [
                "exe",
                "ViaPrivateLoader",
                "currentandold",
                "viaprivateloader",
                "amadey",
                "historical",
                "Viaprivateloader",
                "botnet",
                "ClearFake",
                "Botnet",
                "Amdey",
                "viaSmokeLoader",
                "ViriBack",
                "fastflux",
                "panel",
                "connector",
                "c2",
                "ViaprivateLoader",
                "Amadey",
                "V4.12",
                "triage",
                "Loader",
                "opendir",
                "C2Panel",
                "C2"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://185.172.128.19/ghsdh39s/index.php",
                        "timestamp": "2023-11-29 17:55:37"
                    },
                    {
                        "value": "http://brodoyouevenlift.co.za/g9sdjScV2/Login.php",
                        "timestamp": "2023-11-21 07:32:43"
                    },
                    {
                        "value": "http://185.172.128.19/ghsdh39s/Login.php",
                        "timestamp": "2023-11-20 11:34:32"
                    },
                    {
                        "value": "http://0-9u210edu12j-dj-1.xyz/g9smksXla/Login.php",
                        "timestamp": "2023-11-20 09:04:15"
                    },
                    {
                        "value": "http://185.196.8.176/7jshasdS/Login.php",
                        "timestamp": "2023-11-20 09:04:14"
                    },
                    {
                        "value": "http://167.235.20.126/bjdm32DP/Login.php",
                        "timestamp": "2023-11-20 09:04:14"
                    },
                    {
                        "value": "http://193.42.33.7/mbSDvj3/Login.php",
                        "timestamp": "2023-11-20 09:04:13"
                    },
                    {
                        "value": "http://77.91.97.162/g93kdwj3S/Login.php",
                        "timestamp": "2023-11-20 09:04:13"
                    },
                    {
                        "value": "http://kbond2024.org/g9sdjScV2/Login.php",
                        "timestamp": "2023-11-20 09:04:12"
                    },
                    {
                        "value": "http://69.197.161.106/g9sdjScV2/Login.php",
                        "timestamp": "2023-11-20 07:37:27"
                    },
                    {
                        "value": "http://5.42.66.9/vsdjcn3khS/Login.php",
                        "timestamp": "2023-11-21 07:11:54"
                    },
                    {
                        "value": "http://atillapro.com/vsdjcn3khS/Login.php",
                        "timestamp": "2023-11-20 07:37:28"
                    },
                    {
                        "value": "http://shohetrc.com/forum/index.php",
                        "timestamp": "2023-11-15 06:39:57"
                    },
                    {
                        "value": "http://shohetrc.com/forum/Login.php",
                        "timestamp": "2023-11-15 06:39:57"
                    },
                    {
                        "value": "http://shohetrc.com/forum/index.php?scr=1",
                        "timestamp": "2023-11-15 06:39:56"
                    },
                    {
                        "value": "http://tceducn.com/forum/index.php",
                        "timestamp": "2023-11-15 06:39:55"
                    },
                    {
                        "value": "http://tceducn.com/forum/Login.php",
                        "timestamp": "2023-11-15 06:39:55"
                    },
                    {
                        "value": "http://shohetrc.com/forum/Plugins/clip64.dll",
                        "timestamp": "2023-11-15 06:39:55"
                    },
                    {
                        "value": "http://shohetrc.com/forum/Plugins/cred64.dll",
                        "timestamp": "2023-11-15 06:39:54"
                    },
                    {
                        "value": "http://185.172.128.100/u6vhSc3PPq/index.php",
                        "timestamp": "2023-11-30 16:16:03"
                    },
                    {
                        "value": "http://167.235.20.126/bjdm32DP/index.php",
                        "timestamp": "2023-11-02 18:11:26"
                    },
                    {
                        "value": "http://185.196.8.176/7jshasdS/index.php",
                        "timestamp": "2023-11-02 18:11:25"
                    },
                    {
                        "value": "http://193.42.33.7/mbSDvj3/index.php",
                        "timestamp": "2023-10-20 06:39:19"
                    },
                    {
                        "value": "http://85.209.11.199/b9djs2g/index.php",
                        "timestamp": "2023-10-15 07:50:19"
                    },
                    {
                        "value": "http://77.91.97.162/g93kdwj3S/index.php",
                        "timestamp": "2023-10-13 14:49:14"
                    },
                    {
                        "value": "http://cncdevelopment.org/b9djs2g/index.php",
                        "timestamp": "2023-10-07 06:32:51"
                    },
                    {
                        "value": "http://cncdevelopment.boo/b9djs2g/index.php",
                        "timestamp": "2023-10-04 02:00:30"
                    },
                    {
                        "value": "http://5.42.65.28/b9djs2g/index.php",
                        "timestamp": "2023-10-03 08:00:32"
                    },
                    {
                        "value": "http://77.91.124.1/theme/index.php",
                        "timestamp": "2023-10-17 14:22:49"
                    },
                    {
                        "value": "http://193.42.32.29/9bDc8sQ/index.php",
                        "timestamp": "2023-09-29 07:09:53"
                    },
                    {
                        "value": "http://95.141.41.12/n9kd3X/index.php",
                        "timestamp": "2023-09-28 04:00:22"
                    },
                    {
                        "value": "http://fesportal.com/forum/index.php",
                        "timestamp": "2023-09-22 11:45:19"
                    },
                    {
                        "value": "http://176.113.115.81/9kdmSxq/index.php",
                        "timestamp": "2023-09-21 14:38:21"
                    },
                    {
                        "value": "http://5.42.64.45/8bmeVwqx/index.php",
                        "timestamp": "2023-09-19 19:05:55"
                    },
                    {
                        "value": "http://185.215.113.35/bkd7djmsa/index.php",
                        "timestamp": "2023-09-13 19:33:07"
                    },
                    {
                        "value": "http://xyl.lat/2BfwEnWXSKj6KgTm/Login.php",
                        "timestamp": "2023-09-10 20:14:33"
                    },
                    {
                        "value": "http://77.91.68.52/mac/Login.php",
                        "timestamp": "2023-09-10 20:14:29"
                    },
                    {
                        "value": "http://77.91.68.78/help/Login.php",
                        "timestamp": "2023-09-10 20:14:28"
                    },
                    {
                        "value": "http://79.110.62.80/8bmeVwqx/Login.php",
                        "timestamp": "2023-09-10 20:14:27"
                    },
                    {
                        "value": "http://xyl.lat/2BfwEnWXSKj6KgTm/index.php",
                        "timestamp": "2023-09-10 20:14:03"
                    },
                    {
                        "value": "http://77.91.68.78/help/index.php",
                        "timestamp": "2023-09-10 20:13:58"
                    },
                    {
                        "value": "http://77.91.68.52/mac/index.php",
                        "timestamp": "2023-09-10 20:13:58"
                    },
                    {
                        "value": "http://79.110.62.80/8bmeVwqx/index.php",
                        "timestamp": "2023-09-10 20:13:57"
                    },
                    {
                        "value": "http://77.91.68.18/nice/Login.php",
                        "timestamp": "2023-09-10 20:14:27"
                    },
                    {
                        "value": "http://79.137.192.18/9bDc8sQ/Login.php",
                        "timestamp": "2023-09-10 20:14:32"
                    },
                    {
                        "value": "http://193.233.255.9/nasa/Login.php",
                        "timestamp": "2023-09-10 20:14:31"
                    },
                    {
                        "value": "http://5.42.64.33/vu3skClDn/Login.php",
                        "timestamp": "2023-09-10 20:14:26"
                    },
                    {
                        "value": "http://45.9.74.70/2BfwEn6KgTm/Login.php",
                        "timestamp": "2023-08-31 21:02:46"
                    },
                    {
                        "value": "http://5.42.64.33/vu3skClDn/index.php",
                        "timestamp": "2023-09-10 20:13:57"
                    },
                    {
                        "value": "http://45.9.74.5/b7djSDcPcZ/index.php",
                        "timestamp": "2023-08-30 08:21:56"
                    },
                    {
                        "value": "http://3.88/2BfwEn6KgTm/index.php",
                        "timestamp": "2023-08-14 02:00:25"
                    },
                    {
                        "value": "http://smz-llc.net/2BfwEnWXSKj6KgTm/index.php",
                        "timestamp": "2023-08-12 22:10:14"
                    },
                    {
                        "value": "http://77.91.68.18/nice/index.php",
                        "timestamp": "2023-09-10 20:13:57"
                    },
                    {
                        "value": "http://45.9.74.70/2BfwEn6KgTm/index.php",
                        "timestamp": "2023-08-31 21:03:21"
                    },
                    {
                        "value": "http://amaad100.com/gBcskbwWs/index.php",
                        "timestamp": "2023-08-09 17:11:26"
                    },
                    {
                        "value": "http://79.137.192.18/9bDc8sQ/index.php",
                        "timestamp": "2023-09-10 20:14:01"
                    },
                    {
                        "value": "http://77.91.68.61/rock/Login.php",
                        "timestamp": "2023-09-10 20:14:29"
                    },
                    {
                        "value": "http://45.9.74.166/b7djSDcPcZ/Login.php",
                        "timestamp": "2023-09-10 20:14:27"
                    },
                    {
                        "value": "http://45.9.74.182/b7djSDcPcZ/Login.php",
                        "timestamp": "2023-09-10 20:14:25"
                    },
                    {
                        "value": "http://45.9.74.141/b7djSDcPcZ/Login.php",
                        "timestamp": "2023-09-10 20:14:26"
                    },
                    {
                        "value": "http://104.248.239.160/g9dvhSk/Login.php",
                        "timestamp": "2023-08-03 19:52:14"
                    },
                    {
                        "value": "http://ocmtancmi2c4t.xyz/9bDc8sQ/Login.php",
                        "timestamp": "2023-09-10 20:14:32"
                    },
                    {
                        "value": "http://ocmtancmi2c4t.xyz/9bDc8sQ/index.php",
                        "timestamp": "2023-09-10 20:14:01"
                    },
                    {
                        "value": "http://193.233.255.9/nasa/index.php",
                        "timestamp": "2023-09-10 20:14:00"
                    },
                    {
                        "value": "http://45.9.74.182/b7djSDcPcZ/index.php",
                        "timestamp": "2023-09-20 18:35:40"
                    },
                    {
                        "value": "https://77.91.68.61/rock/index.php",
                        "timestamp": "2023-07-31 06:16:37"
                    },
                    {
                        "value": "https://5.42.92.67/norm/index.php",
                        "timestamp": "2023-07-31 06:16:32"
                    },
                    {
                        "value": "http://trapmusics.xyz/c2conf",
                        "timestamp": "2023-07-31 06:16:32"
                    },
                    {
                        "value": "http://trapmusics.xyz/c2sock",
                        "timestamp": "2023-07-31 06:16:31"
                    },
                    {
                        "value": "https://t.me/dastantim",
                        "timestamp": "2023-08-18 09:29:19"
                    },
                    {
                        "value": "http://49.13.60.242:12771/c7705ff59edcf8953f00dd53d4696a54",
                        "timestamp": "2023-07-31 06:16:31"
                    },
                    {
                        "value": "http://104.248.239.160/g9dvhSk/index.php",
                        "timestamp": "2023-08-03 19:52:54"
                    },
                    {
                        "value": "http://5.42.92.67/norm/index.php",
                        "timestamp": "2023-07-24 15:01:07"
                    },
                    {
                        "value": "http://77.91.68.61/rock/index.php",
                        "timestamp": "2023-09-10 20:13:58"
                    },
                    {
                        "value": "http://45.155.7.60/jango/index.php",
                        "timestamp": "2023-07-23 18:15:12"
                    },
                    {
                        "value": "http://45.9.74.141/b7djSDcPcZ/index.php",
                        "timestamp": "2023-09-10 20:13:56"
                    },
                    {
                        "value": "http://45.9.74.166/b7djSDcPcZ/index.php",
                        "timestamp": "2023-09-10 20:13:57"
                    },
                    {
                        "value": "http://87.121.47.63/laker/index.php",
                        "timestamp": "2023-07-19 21:11:14"
                    },
                    {
                        "value": "http://getupdate.click/8bmeVwqx/index.php",
                        "timestamp": "2023-08-31 21:03:20"
                    },
                    {
                        "value": "http://badurka5hippo73.top/9kdmSxq/index.php",
                        "timestamp": "2023-08-03 19:52:55"
                    },
                    {
                        "value": "http://77.91.124.5",
                        "timestamp": "2023-07-09 03:12:20"
                    },
                    {
                        "value": "http://45.9.74.80",
                        "timestamp": "2023-07-09 03:12:19"
                    },
                    {
                        "value": "http://5.42.65.80",
                        "timestamp": "2023-07-09 03:12:19"
                    },
                    {
                        "value": "http://77.91.68.70",
                        "timestamp": "2023-07-09 03:12:19"
                    },
                    {
                        "value": "http://45.9.74.164/b7djSDcPcZ/index.php",
                        "timestamp": "2023-09-10 20:14:01"
                    },
                    {
                        "value": "http://185.252.179.228/crocus/index.php",
                        "timestamp": "2023-07-07 18:05:51"
                    },
                    {
                        "value": "http://77.91.68.3/home/love/index.php",
                        "timestamp": "2023-08-31 21:03:24"
                    },
                    {
                        "value": "http://alterswager.org/8bmeVwqx/index.php",
                        "timestamp": "2023-07-01 16:45:15"
                    },
                    {
                        "value": "http://213.226.123.14/8bmeVwqx/index.php",
                        "timestamp": "2023-09-10 20:14:00"
                    },
                    {
                        "value": "http://asdasdwqrweerwfa.top/8vcWxwwx3/Login.php",
                        "timestamp": "2023-08-03 19:52:13"
                    },
                    {
                        "value": "http://109.206.241.33/9bDc8sQ/Login.php",
                        "timestamp": "2023-08-03 19:52:18"
                    },
                    {
                        "value": "http://77.91.68.63/doma/net/Login.php",
                        "timestamp": "2023-08-03 19:52:16"
                    },
                    {
                        "value": "http://myserveur855.cc/folder966/Login.php",
                        "timestamp": "2023-06-29 18:16:25"
                    },
                    {
                        "value": "http://62.182.156.152/so57Nst/Login.php",
                        "timestamp": "2023-09-10 20:14:25"
                    },
                    {
                        "value": "http://213.226.123.14/8bmeVwqx/Login.php",
                        "timestamp": "2023-09-10 20:14:31"
                    },
                    {
                        "value": "http://109.206.241.33/9bDc8sQ/index.php",
                        "timestamp": "2023-08-03 19:52:57"
                    },
                    {
                        "value": "http://myserveur855.cc/folder966/index.php",
                        "timestamp": "2023-06-29 18:16:34"
                    },
                    {
                        "value": "http://asdasdwqrweerwfa.top/8vcWxwwx3/index.php",
                        "timestamp": "2023-08-03 19:52:54"
                    },
                    {
                        "value": "http://77.91.68.63/doma/net/index.php",
                        "timestamp": "2023-08-03 19:52:56"
                    },
                    {
                        "value": "http://62.182.156.152/so57Nst/index.php",
                        "timestamp": "2023-09-10 20:13:56"
                    },
                    {
                        "value": "http://5.42.65.80/8bmeVwqx/Login.php",
                        "timestamp": "2023-09-10 20:14:32"
                    },
                    {
                        "value": "http://77.91.68.30/music/rock/Login.php",
                        "timestamp": "2023-08-03 19:52:18"
                    },
                    {
                        "value": "http://77.91.68.30/music/rock/index.php",
                        "timestamp": "2023-08-03 19:52:58"
                    },
                    {
                        "value": "http://5.42.65.80/8bmeVwqx/index.php",
                        "timestamp": "2023-09-10 20:14:02"
                    },
                    {
                        "value": "http://213.226.123.14/jd93d22Cb1/index.php",
                        "timestamp": "2023-09-10 20:14:00"
                    },
                    {
                        "value": "http://179.43.154.148/fjgD555c3/index.php",
                        "timestamp": "2023-09-10 20:13:58"
                    },
                    {
                        "value": "http://80.94.92.35/g9TTnd3bS/index.php",
                        "timestamp": "2023-06-08 22:27:34"
                    },
                    {
                        "value": "http://5.42.65.1/gj3C2sN30/Login.php",
                        "timestamp": "2023-06-08 22:26:20"
                    },
                    {
                        "value": "http://78.47.9.120/so57Nst/Login.php",
                        "timestamp": "2023-06-08 22:26:23"
                    },
                    {
                        "value": "http://77.91.68.62/wings/game/Login.php",
                        "timestamp": "2023-08-03 19:52:21"
                    },
                    {
                        "value": "http://78.47.9.120/so57Nst/index.php",
                        "timestamp": "2023-06-08 22:27:31"
                    },
                    {
                        "value": "http://5.42.65.1/gj3C2sN30/index.php",
                        "timestamp": "2023-06-15 22:58:30"
                    },
                    {
                        "value": "http://79.137.203.59/1nbj4D3c/Login.php",
                        "timestamp": "2023-05-25 23:45:36"
                    },
                    {
                        "value": "http://77.91.68.62/wings/game/index.php",
                        "timestamp": "2023-08-03 19:52:59"
                    },
                    {
                        "value": "http://95.214.26.53/J84hHFuefh2/Login.php",
                        "timestamp": "2023-08-03 19:52:12"
                    },
                    {
                        "value": "http://95.214.27.98/cronus/Login.php",
                        "timestamp": "2023-06-29 18:16:21"
                    },
                    {
                        "value": "http://95.214.26.53/J84hHFuefh2/index.php",
                        "timestamp": "2023-08-03 19:52:53"
                    },
                    {
                        "value": "http://95.214.27.98/cronus/index.php",
                        "timestamp": "2023-06-29 18:16:29"
                    },
                    {
                        "value": "http://79.137.203.59/3nbslScQ/Login.php",
                        "timestamp": "2023-05-25 23:45:36"
                    },
                    {
                        "value": "http://176.113.115.253/b8dmsSo/Login.php",
                        "timestamp": "2023-05-25 23:45:34"
                    },
                    {
                        "value": "http://31337.hk/b8dmsSo/Login.php",
                        "timestamp": "2023-05-25 23:45:33"
                    },
                    {
                        "value": "http://77.91.124.20/store/games/Login.php",
                        "timestamp": "2023-08-03 19:52:21"
                    },
                    {
                        "value": "http://176.113.115.253/b8dmsSo/index.php",
                        "timestamp": "2023-05-07 08:15:45"
                    },
                    {
                        "value": "http://31337.hk/b8dmsSo/index.php",
                        "timestamp": "2023-05-07 08:15:45"
                    },
                    {
                        "value": "http://chinataiw39e9i9ds.com/ve83dkas2m/Login.php",
                        "timestamp": "2023-05-06 04:22:32"
                    },
                    {
                        "value": "http://todaysingchina456.com/ve83dkas2m/index.php",
                        "timestamp": "2023-05-06 04:22:26"
                    },
                    {
                        "value": "http://193.233.20.4/t6r48nSa/Login.php",
                        "timestamp": "2023-05-06 04:22:37"
                    },
                    {
                        "value": "http://185.215.113.42/f83jd823S/Login.php",
                        "timestamp": "2023-05-06 04:22:38"
                    },
                    {
                        "value": "http://185.215.113.114/deliveryback/Login.php",
                        "timestamp": "2023-05-06 04:22:22"
                    },
                    {
                        "value": "http://62.204.41.17/8bdSvcD/Login.php",
                        "timestamp": "2023-05-06 04:22:48"
                    },
                    {
                        "value": "http://freepcgamee.com/g8kdkeXs2qL/Login.php",
                        "timestamp": "2023-06-29 18:16:21"
                    },
                    {
                        "value": "http://62.204.41.5/Bu58Ngs/Login.php",
                        "timestamp": "2023-05-06 04:22:07"
                    },
                    {
                        "value": "http://62.204.41.72/0bjdn2Z/Login.php",
                        "timestamp": "2023-05-06 04:22:10"
                    },
                    {
                        "value": "http://2.56.59.26/dima/Login.php",
                        "timestamp": "2023-05-06 04:22:53"
                    },
                    {
                        "value": "http://sigint.ws/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:23:07"
                    },
                    {
                        "value": "http://2.56.56.210/notAnoob/Login.php",
                        "timestamp": "2023-05-06 04:23:07"
                    },
                    {
                        "value": "http://193.56.146.174/g84kvj4jck/Login.php",
                        "timestamp": "2023-05-06 04:22:42"
                    },
                    {
                        "value": "http://185.215.113.33/hBF6ds2D/Login.php",
                        "timestamp": "2023-05-06 04:23:10"
                    },
                    {
                        "value": "http://190.123.44.138/Qbv2ff03/Login.php",
                        "timestamp": "2023-05-06 04:22:09"
                    },
                    {
                        "value": "http://vastyrannouse.at/pZ4CkbjsO5/Login.php",
                        "timestamp": "2023-05-06 04:22:50"
                    },
                    {
                        "value": "http://185.215.113.13/g4MbvE/Login.php",
                        "timestamp": "2023-05-06 04:22:08"
                    },
                    {
                        "value": "http://cloudreactions.xyz/g93kdm3SaQ/Login.php",
                        "timestamp": "2023-05-06 04:23:05"
                    },
                    {
                        "value": "http://dhisa8f9ah02hopasiaf.com/gg4mn3s/Login.php",
                        "timestamp": "2023-05-06 04:23:08"
                    },
                    {
                        "value": "http://chinataiw39e9i9ds.com/ve83dkas2m/index.php",
                        "timestamp": "2023-05-06 04:21:46"
                    },
                    {
                        "value": "http://pppproyectkz.icu/5kv4Pqi/Login.php",
                        "timestamp": "2023-05-06 04:22:13"
                    },
                    {
                        "value": "http://feralhendown.xyz/Hq13V2W/Login.php",
                        "timestamp": "2023-05-06 04:22:19"
                    },
                    {
                        "value": "http://systemupdate22.cf/d2VxjasuwS/Login.php",
                        "timestamp": "2023-05-06 04:22:14"
                    },
                    {
                        "value": "http://46.17.96.36/k8FppT/Login.php",
                        "timestamp": "2023-05-06 04:22:17"
                    },
                    {
                        "value": "http://185.73.39.231/g8kdkeXs2qL/Login.php",
                        "timestamp": "2023-05-06 04:22:17"
                    },
                    {
                        "value": "http://haleyqueenffff.xyz/Hq13V2W/Login.php",
                        "timestamp": "2023-05-06 04:23:01"
                    },
                    {
                        "value": "http://185.215.113.205/fjgD555c3/Login.php",
                        "timestamp": "2023-05-06 04:22:59"
                    },
                    {
                        "value": "http://authymysexy.info/5Lsq3FR/Login.php",
                        "timestamp": "2023-05-06 04:22:05"
                    },
                    {
                        "value": "http://185.215.113.35/d2VxjasuwS/Login.php",
                        "timestamp": "2023-05-06 04:23:04"
                    },
                    {
                        "value": "http://russk21.icu/rest/Login.php",
                        "timestamp": "2023-05-06 04:22:10"
                    },
                    {
                        "value": "http://62.204.41.79/tT7774433/Login.php",
                        "timestamp": "2023-05-06 04:22:34"
                    },
                    {
                        "value": "http://nestlehosts.xyz/so57Nst/Login.php",
                        "timestamp": "2023-05-06 04:22:49"
                    },
                    {
                        "value": "http://62.204.41.67/g8sjnd3xe/Login.php",
                        "timestamp": "2023-05-06 04:22:14"
                    },
                    {
                        "value": "http://37.220.87.85/so57Nst/Login.php",
                        "timestamp": "2023-05-06 04:23:02"
                    },
                    {
                        "value": "http://45.15.156.172/g0fMLjb8s/Login.php",
                        "timestamp": "2023-05-06 04:22:55"
                    },
                    {
                        "value": "http://77.73.134.45/fb73jc3/Login.php",
                        "timestamp": "2023-05-06 04:23:02"
                    },
                    {
                        "value": "http://todaysingchina456.com/ve83dkas2m/Login.php",
                        "timestamp": "2023-05-06 04:21:31"
                    },
                    {
                        "value": "http://31.41.244.15/Mb1sDv3/Login.php",
                        "timestamp": "2023-05-06 04:22:57"
                    },
                    {
                        "value": "http://185.215.113.53/bPwsAq2/Login.php",
                        "timestamp": "2023-05-06 04:22:13"
                    },
                    {
                        "value": "http://185.87.148.190/k0uTrd3d/Login.php",
                        "timestamp": "2023-05-06 04:22:56"
                    },
                    {
                        "value": "http://141.136.0.130/construction/Login.php",
                        "timestamp": "2023-05-06 04:22:17"
                    },
                    {
                        "value": "http://185.215.113.202/PmVc3sOf/Login.php",
                        "timestamp": "2023-05-06 04:22:12"
                    },
                    {
                        "value": "http://researchersgokick.rocks/7gjD0Vs3d/Login.php",
                        "timestamp": "2023-05-06 04:22:57"
                    },
                    {
                        "value": "http://5.182.4.47/k0uTrd3d/Login.php",
                        "timestamp": "2023-05-06 04:22:25"
                    },
                    {
                        "value": "http://asdaww.com/8vcWxwwx3/index.php",
                        "timestamp": "2023-05-06 04:22:58"
                    },
                    {
                        "value": "http://specialblue.wf/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-06 04:22:02"
                    },
                    {
                        "value": "http://185.215.113.79/g5FcvUgw/Login.php",
                        "timestamp": "2023-05-06 04:22:28"
                    },
                    {
                        "value": "http://62.204.41.32/8bmdh3Slb2/Login.php",
                        "timestamp": "2023-05-06 04:22:03"
                    },
                    {
                        "value": "http://185.215.113.118/hr4CsXqlF/Login.php",
                        "timestamp": "2023-05-06 04:23:04"
                    },
                    {
                        "value": "http://193.106.191.201/panelis/Login.php",
                        "timestamp": "2023-05-06 04:23:06"
                    },
                    {
                        "value": "http://rebreaksstonehen.at/pZ4CkbjsO5/Login.php",
                        "timestamp": "2023-05-06 04:22:04"
                    },
                    {
                        "value": "http://31.41.244.60/t0nvN3c4/Login.php",
                        "timestamp": "2023-05-06 04:22:07"
                    },
                    {
                        "value": "http://193.56.146.194/h49vlBP/Login.php",
                        "timestamp": "2023-05-06 04:22:31"
                    },
                    {
                        "value": "http://185.215.113.92/gg4mn3s/Login.php",
                        "timestamp": "2023-05-06 04:22:20"
                    },
                    {
                        "value": "http://77.73.134.52/0jVu73d/Login.php",
                        "timestamp": "2023-05-06 04:22:53"
                    },
                    {
                        "value": "http://193.233.20.25/buH5N004d/Login.php",
                        "timestamp": "2023-05-06 04:22:26"
                    },
                    {
                        "value": "http://62.204.41.79/U7vfDb3kg/Login.php",
                        "timestamp": "2023-05-06 04:22:58"
                    },
                    {
                        "value": "http://62.204.41.72/hn85jlUn/Login.php",
                        "timestamp": "2023-05-06 04:23:02"
                    },
                    {
                        "value": "http://193.42.33.74/8bdSvcD/Login.php",
                        "timestamp": "2023-05-06 04:22:17"
                    },
                    {
                        "value": "http://62.204.41.92/n9dks3s/Login.php",
                        "timestamp": "2023-05-06 04:22:16"
                    },
                    {
                        "value": "http://web.jsonpost.xyz/sj2vMs/Login.php",
                        "timestamp": "2023-05-06 04:23:04"
                    },
                    {
                        "value": "http://62.204.41.174/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:22:28"
                    },
                    {
                        "value": "http://77.73.134.65/o7VsjdSa2f/Login.php",
                        "timestamp": "2023-05-06 04:22:53"
                    },
                    {
                        "value": "http://62.204.41.92/so57Nst/Login.php",
                        "timestamp": "2023-05-06 04:22:56"
                    },
                    {
                        "value": "http://179.43.154.147/d2VxjasuwS/Login.php",
                        "timestamp": "2023-05-06 04:23:05"
                    },
                    {
                        "value": "http://kkskksnut.icu/5kv4Pqi/Login.php",
                        "timestamp": "2023-05-06 04:22:06"
                    },
                    {
                        "value": "http://900ama.com/gBcskbwWs/Login.php",
                        "timestamp": "2023-05-06 04:22:15"
                    },
                    {
                        "value": "http://saerwq.net/8vcWxwwx3/Login.php",
                        "timestamp": "2023-05-06 04:22:46"
                    },
                    {
                        "value": "http://194.58.103.2/main/Login.php",
                        "timestamp": "2023-05-06 04:23:09"
                    },
                    {
                        "value": "http://194.36.177.12/rkv4Pqi/Login.php",
                        "timestamp": "2023-05-06 04:22:21"
                    },
                    {
                        "value": "http://185.215.113.206/k8FppT/Login.php",
                        "timestamp": "2023-05-06 04:23:00"
                    },
                    {
                        "value": "http://uknovodom.ru/forum/Login.php",
                        "timestamp": "2023-05-06 04:22:18"
                    },
                    {
                        "value": "http://45.227.255.49/5Lsq3FR/Login.php",
                        "timestamp": "2023-05-06 04:22:17"
                    },
                    {
                        "value": "http://193.233.20.2/Bn89hku/Login.php",
                        "timestamp": "2023-05-06 04:22:36"
                    },
                    {
                        "value": "http://179.43.155.137/fjgD555c3/Login.php",
                        "timestamp": "2023-05-06 04:22:36"
                    },
                    {
                        "value": "http://185.215.113.57/1dEr2nYffd/Login.php",
                        "timestamp": "2023-05-06 04:22:10"
                    },
                    {
                        "value": "http://185.7.214.238/hBF6ds2D/Login.php",
                        "timestamp": "2023-05-06 04:22:55"
                    },
                    {
                        "value": "http://62.204.41.27/9djZdj09/Login.php",
                        "timestamp": "2023-05-06 04:23:03"
                    },
                    {
                        "value": "http://w.makemark.xyz/fkwdoXScn2/Login.php",
                        "timestamp": "2023-05-06 04:22:11"
                    },
                    {
                        "value": "http://62.204.41.89/8bcZfjw/Login.php",
                        "timestamp": "2023-05-06 04:22:15"
                    },
                    {
                        "value": "http://91.241.19.49/hBugs2D/Login.php",
                        "timestamp": "2023-05-06 04:23:09"
                    },
                    {
                        "value": "http://speeduppercolatorl.at/pZ4CkbjsO5/Login.php",
                        "timestamp": "2023-05-06 04:22:33"
                    },
                    {
                        "value": "http://hellomr.observer/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:23:04"
                    },
                    {
                        "value": "http://23.106.215.95/G9qpzLe/Login.php",
                        "timestamp": "2023-05-06 04:22:07"
                    },
                    {
                        "value": "http://marobast.ws/b3m2fVVs0/Login.php",
                        "timestamp": "2023-05-06 04:22:05"
                    },
                    {
                        "value": "http://94.140.115.70/construction/Login.php",
                        "timestamp": "2023-05-06 04:22:21"
                    },
                    {
                        "value": "http://210.16.67.250/f5OknW/Login.php",
                        "timestamp": "2023-05-06 04:22:13"
                    },
                    {
                        "value": "http://185.215.113.55/t5BnOoke2/Login.php",
                        "timestamp": "2023-05-06 04:22:22"
                    },
                    {
                        "value": "http://62.204.41.242/9vZbns/Login.php",
                        "timestamp": "2023-05-06 04:22:07"
                    },
                    {
                        "value": "http://ama529.ru/gBcskbwWs/Login.php",
                        "timestamp": "2023-05-06 04:22:37"
                    },
                    {
                        "value": "http://eu.eredirected.xyz/d2VxjasuwS/Login.php",
                        "timestamp": "2023-05-06 04:22:19"
                    },
                    {
                        "value": "http://185.215.113.67/4dcYcWsw3/Login.php",
                        "timestamp": "2023-05-06 04:22:04"
                    },
                    {
                        "value": "http://185.215.113.20/gb9fskvS/Login.php",
                        "timestamp": "2023-05-06 04:22:43"
                    },
                    {
                        "value": "http://77.73.134.66/0bjdn2Z/Login.php",
                        "timestamp": "2023-05-06 04:22:29"
                    },
                    {
                        "value": "http://77.73.134.66/o7Vsjd3a2f/Login.php",
                        "timestamp": "2023-05-06 04:22:29"
                    },
                    {
                        "value": "http://213.226.123.16/4dvHbs3/Login.php",
                        "timestamp": "2023-05-06 04:22:25"
                    },
                    {
                        "value": "http://sogoodnowtodaynow.com/Nmkn5d9Dn/Login.php",
                        "timestamp": "2023-05-06 04:22:06"
                    },
                    {
                        "value": "http://193.233.20.26/Do3m4Gor/Login.php",
                        "timestamp": "2023-05-06 04:22:59"
                    },
                    {
                        "value": "http://redteamminepool.ug/g4FvpsQ2/Login.php",
                        "timestamp": "2023-05-06 04:22:50"
                    },
                    {
                        "value": "http://freshjuss.com/f6vskbW/Login.php",
                        "timestamp": "2023-05-06 04:22:18"
                    },
                    {
                        "value": "https://193.56.146.194/h49vlBP/Login.php",
                        "timestamp": "2023-05-06 04:22:38"
                    },
                    {
                        "value": "http://185.215.113.74/4dcYcWsw3/Login.php",
                        "timestamp": "2023-05-06 04:22:32"
                    },
                    {
                        "value": "http://45.155.205.172/4dcYcWsw3/Login.php",
                        "timestamp": "2023-05-06 04:22:28"
                    },
                    {
                        "value": "http://guideanceers.com/g93kdm3SaQ/Login.php",
                        "timestamp": "2023-05-06 04:22:23"
                    },
                    {
                        "value": "http://78.153.144.60/v3S1dl2/Login.php",
                        "timestamp": "2023-05-06 04:22:37"
                    },
                    {
                        "value": "http://185.215.113.205/f9v33dkSXm/Login.php",
                        "timestamp": "2023-05-06 04:22:03"
                    },
                    {
                        "value": "http://193.56.146.29/f5OknW/Login.php",
                        "timestamp": "2023-05-06 04:22:02"
                    },
                    {
                        "value": "http://199.188.204.245/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:22:51"
                    },
                    {
                        "value": "http://loader.cyou/y5vblsjve3d/Login.php",
                        "timestamp": "2023-05-06 04:22:39"
                    },
                    {
                        "value": "http://62.204.41.252/nB8cWack3/Login.php",
                        "timestamp": "2023-05-06 04:22:09"
                    },
                    {
                        "value": "http://trustmanager.ug/k8FppT/Login.php",
                        "timestamp": "2023-05-06 04:22:57"
                    },
                    {
                        "value": "http://185.215.113.110/Gv93xs2Nz/Login.php",
                        "timestamp": "2023-05-06 04:22:31"
                    },
                    {
                        "value": "http://190.123.44.195/d2VxjasuwS/Login.php",
                        "timestamp": "2023-05-06 04:22:22"
                    },
                    {
                        "value": "http://62.204.41.4/Gol478Ns/Login.php",
                        "timestamp": "2023-05-06 04:22:13"
                    },
                    {
                        "value": "http://176.111.174.114/Hnq8vS/Login.php",
                        "timestamp": "2023-05-06 04:22:54"
                    },
                    {
                        "value": "http://test.com/subfolder/Login.php",
                        "timestamp": "2023-05-06 04:22:44"
                    },
                    {
                        "value": "http://185.215.113.25/f6vskbW/Login.php",
                        "timestamp": "2023-05-06 04:22:31"
                    },
                    {
                        "value": "http://xtkehjjerbk.icu/j7csltegf/Login.php",
                        "timestamp": "2023-05-06 04:22:22"
                    },
                    {
                        "value": "http://62.204.41.104/7gjD0Vs3d/Login.php",
                        "timestamp": "2023-05-06 04:23:05"
                    },
                    {
                        "value": "http://nftmatrixed.info/5Lsq3FR/Login.php",
                        "timestamp": "2023-05-06 04:22:05"
                    },
                    {
                        "value": "http://79.137.197.181/g93dLhG2/Login.php",
                        "timestamp": "2023-05-06 04:22:33"
                    },
                    {
                        "value": "http://pleasetake.pictures/7gjD0Vs3d/Login.php",
                        "timestamp": "2023-05-06 04:22:08"
                    },
                    {
                        "value": "http://wecrack.su/fkwdoXScn2/Login.php",
                        "timestamp": "2023-05-06 04:23:07"
                    },
                    {
                        "value": "http://185.215.113.47/k0uTrd3d/Login.php",
                        "timestamp": "2023-05-06 04:22:16"
                    },
                    {
                        "value": "http://193.106.191.184/p84Nls2/Login.php",
                        "timestamp": "2023-05-06 04:22:58"
                    },
                    {
                        "value": "http://193.56.146.243/h8V2cQlbd3/Login.php",
                        "timestamp": "2023-05-06 04:22:48"
                    },
                    {
                        "value": "http://62.204.41.165/g8sjnd3xe/Login.php",
                        "timestamp": "2023-05-06 04:22:50"
                    },
                    {
                        "value": "http://31.41.244.167/v7eWcjs/Login.php",
                        "timestamp": "2023-05-06 04:22:14"
                    },
                    {
                        "value": "http://bebraboysclub.hk/g8lvleE2z/Login.php",
                        "timestamp": "2023-05-06 04:22:47"
                    },
                    {
                        "value": "http://185.215.113.38/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:22:20"
                    },
                    {
                        "value": "http://nestlecareers.cf/so57Nst/Login.php",
                        "timestamp": "2023-05-06 04:22:35"
                    },
                    {
                        "value": "http://185.87.51.18/reps/Login.php",
                        "timestamp": "2023-05-06 04:22:59"
                    },
                    {
                        "value": "http://185.215.113.118/fkwdoXScn2/Login.php",
                        "timestamp": "2023-05-06 04:22:47"
                    },
                    {
                        "value": "http://92.38.184.216/4dcYcWsw3/Login.php",
                        "timestamp": "2023-05-06 04:22:50"
                    },
                    {
                        "value": "http://185.215.113.45/g4MbvE/Login.php",
                        "timestamp": "2023-05-06 04:22:25"
                    },
                    {
                        "value": "http://85.31.46.155/f84Nls2/Login.php",
                        "timestamp": "2023-05-06 04:22:40"
                    },
                    {
                        "value": "http://185.215.113.55/fsc3ssxaP/Login.php",
                        "timestamp": "2023-05-06 04:22:39"
                    },
                    {
                        "value": "http://185.215.113.64/hBugs2D/Login.php",
                        "timestamp": "2023-05-06 04:23:09"
                    },
                    {
                        "value": "http://194.26.29.220/pZ4CkbjsO5/Login.php",
                        "timestamp": "2023-05-06 04:22:34"
                    },
                    {
                        "value": "http://researchersgokick.rocks/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:23:06"
                    },
                    {
                        "value": "http://62.204.41.151/8vcWxwwx3/Login.php",
                        "timestamp": "2023-05-06 04:22:41"
                    },
                    {
                        "value": "http://94.140.115.230/construction/Login.php",
                        "timestamp": "2023-05-06 04:23:02"
                    },
                    {
                        "value": "http://193.56.146.218/images/IMG_489440/Login.php",
                        "timestamp": "2023-05-06 04:23:00"
                    },
                    {
                        "value": "http://amadtrackings.com/g9TTnd3bS/Login.php",
                        "timestamp": "2023-05-06 04:22:56"
                    },
                    {
                        "value": "http://guideanceers.com/rTnS24/Login.php",
                        "timestamp": "2023-05-06 04:23:10"
                    },
                    {
                        "value": "http://89.163.249.231/panel/Login.php",
                        "timestamp": "2023-05-06 04:22:46"
                    },
                    {
                        "value": "http://88.218.60.230/7vzZwkv2/Login.php",
                        "timestamp": "2023-05-06 04:22:41"
                    },
                    {
                        "value": "http://62.204.41.6/p9cWxH/Login.php",
                        "timestamp": "2023-05-06 04:22:48"
                    },
                    {
                        "value": "http://huteuhksr.icu/5kv4Pqi/Login.php",
                        "timestamp": "2023-05-06 04:22:07"
                    },
                    {
                        "value": "http://78.153.144.60/rSbFldr23/Login.php",
                        "timestamp": "2023-05-06 04:23:03"
                    },
                    {
                        "value": "http://31.41.244.17/hfk3vK9/Login.php",
                        "timestamp": "2023-05-06 04:22:24"
                    },
                    {
                        "value": "http://en.eredirected.xyz/xC0m3/Login.php",
                        "timestamp": "2023-05-06 04:22:20"
                    },
                    {
                        "value": "http://sunnsongs.com/f6vskbW/Login.php",
                        "timestamp": "2023-05-06 04:22:59"
                    },
                    {
                        "value": "http://umbrelladownload.uno/gp6GbqVce/Login.php",
                        "timestamp": "2023-05-06 04:22:48"
                    },
                    {
                        "value": "http://62.204.41.109/Nmkn5d9Dn/Login.php",
                        "timestamp": "2023-05-06 04:22:44"
                    },
                    {
                        "value": "http://62.204.41.117/nkg3skjvSaq2/Login.php",
                        "timestamp": "2023-05-06 04:22:19"
                    },
                    {
                        "value": "http://azd.at/forum/Login.php",
                        "timestamp": "2023-05-06 04:22:37"
                    },
                    {
                        "value": "http://teamfighttacticstools.info/5Lsq3FR/Login.php",
                        "timestamp": "2023-05-06 04:22:45"
                    },
                    {
                        "value": "http://haleyqueenfff.xyz/Hq13V2W/Login.php",
                        "timestamp": "2023-05-06 04:22:11"
                    },
                    {
                        "value": "http://185.215.113.38/fT5YhO/Login.php",
                        "timestamp": "2023-05-06 04:22:58"
                    },
                    {
                        "value": "http://css.tipinfolist.xyz/f5dkvdSbC/Login.php",
                        "timestamp": "2023-05-06 04:22:08"
                    },
                    {
                        "value": "http://depressionk1d.ug/k8FppT/Login.php",
                        "timestamp": "2023-05-06 04:22:02"
                    },
                    {
                        "value": "http://happyday9risce.com/gg4mn3s/Login.php",
                        "timestamp": "2023-05-06 04:22:05"
                    },
                    {
                        "value": "http://62.204.41.59/wordpress/console2/Login.php",
                        "timestamp": "2023-05-06 04:22:40"
                    },
                    {
                        "value": "http://eiqwejwqiejqwij.com/t0bmd843/Login.php",
                        "timestamp": "2023-05-06 04:22:53"
                    },
                    {
                        "value": "http://5.188.118.7/ppp3aZfj3nil/Login.php",
                        "timestamp": "2023-05-06 04:22:24"
                    },
                    {
                        "value": "http://31.41.244.200/games/category/Login.php",
                        "timestamp": "2023-05-06 04:22:49"
                    },
                    {
                        "value": "http://epifile.info/Ynv2otX/Login.php",
                        "timestamp": "2023-05-06 04:22:42"
                    },
                    {
                        "value": "http://pleasetake.pictures/f8dfksdj3/Login.php",
                        "timestamp": "2023-05-06 04:23:08"
                    },
                    {
                        "value": "http://185.215.113.101/gb9fskvS/Login.php",
                        "timestamp": "2023-05-06 04:22:04"
                    },
                    {
                        "value": "http://91.241.19.101/g7vcSfkbDs2/Login.php",
                        "timestamp": "2023-05-06 04:22:25"
                    },
                    {
                        "value": "http://xksldjf9sksdjfks.com/gg4mn3s/Login.php",
                        "timestamp": "2023-05-06 04:22:52"
                    },
                    {
                        "value": "http://purchatewow.xyz/g6Vce4s2S/Login.php",
                        "timestamp": "2023-05-06 04:22:52"
                    },
                    {
                        "value": "http://83.217.11.7/8vcWxwwx3/Login.php",
                        "timestamp": "2023-05-06 04:22:56"
                    },
                    {
                        "value": "http://ama.hostiko.link/n9kdjc3xSf/Login.php",
                        "timestamp": "2023-05-06 04:22:30"
                    },
                    {
                        "value": "http://155.94.128.40/iKns2W/Login.php",
                        "timestamp": "2023-05-06 04:22:36"
                    },
                    {
                        "value": "http://31.41.244.237/jg94cVd30f/Login.php",
                        "timestamp": "2023-05-06 04:22:52"
                    },
                    {
                        "value": "http://moscow13.at/rest/Login.php",
                        "timestamp": "2023-05-06 04:22:02"
                    },
                    {
                        "value": "http://185.215.113.47/f83jd823S/Login.php",
                        "timestamp": "2023-05-06 04:22:25"
                    },
                    {
                        "value": "http://185.215.113.35/d2VxjasuwS_old/Login.php",
                        "timestamp": "2023-05-06 04:22:57"
                    },
                    {
                        "value": "http://dssclientdownloadsprospect.com/nkg3skjvSaq2/Login.php",
                        "timestamp": "2023-05-06 04:23:08"
                    },
                    {
                        "value": "http://185.215.113.47/Gv93xs2Nz/Login.php",
                        "timestamp": "2023-05-06 04:22:09"
                    },
                    {
                        "value": "http://85.209.135.11/gjend7w/Login.php",
                        "timestamp": "2023-05-06 04:22:28"
                    },
                    {
                        "value": "http://176.113.115.201/3g4mn5s/Login.php",
                        "timestamp": "2023-05-06 04:22:11"
                    },
                    {
                        "value": "http://garts.at/forum/Login.php",
                        "timestamp": "2023-05-06 04:22:18"
                    },
                    {
                        "value": "http://81.19.135.247/Kn82d22zzU/Login.php",
                        "timestamp": "2023-05-06 04:22:12"
                    },
                    {
                        "value": "http://62.204.41.111/jb9sZZZbv7/Login.php",
                        "timestamp": "2023-05-06 04:22:14"
                    },
                    {
                        "value": "http://193.3.19.154/store/games/Login.php",
                        "timestamp": "2023-05-06 04:22:37"
                    },
                    {
                        "value": "http://79.137.203.19/6nd8ssa3/Login.php",
                        "timestamp": "2023-05-25 23:45:33"
                    },
                    {
                        "value": "http://tadogem.com/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-25 23:45:34"
                    },
                    {
                        "value": "http://31.41.244.146/u83mfdS2/Login.php",
                        "timestamp": "2023-09-10 20:14:30"
                    },
                    {
                        "value": "http://myserveur855.cc/8bmeVwqx/Login.php",
                        "timestamp": "2023-06-08 22:26:25"
                    },
                    {
                        "value": "http://79.137.203.59/3nbslScQ/index.php",
                        "timestamp": "2023-05-05 03:20:41"
                    },
                    {
                        "value": "http://77.91.124.20/store/games/index.php",
                        "timestamp": "2023-08-03 19:52:59"
                    },
                    {
                        "value": "http://tadogem.com/dF30Hn4m/index.php",
                        "timestamp": "2023-05-05 08:25:57"
                    },
                    {
                        "value": "http://31.41.244.146/u83mfdS2/index.php",
                        "timestamp": "2023-09-10 20:13:59"
                    },
                    {
                        "value": "http://myserveur855.cc/8bmeVwqx/index.php",
                        "timestamp": "2023-06-08 22:27:33"
                    },
                    {
                        "value": "http://193.3.19.154/store/games/index.php",
                        "timestamp": "2023-04-22 01:40:21"
                    },
                    {
                        "value": "http://193.201.9.240/live/games/Login.php",
                        "timestamp": "2023-05-06 04:22:19"
                    },
                    {
                        "value": "http://212.113.119.255/joomla/Login.php",
                        "timestamp": "2023-05-18 14:44:05"
                    },
                    {
                        "value": "http://specialblue.pm/dF30Hn4m/index.php",
                        "timestamp": "2023-04-20 23:18:25"
                    },
                    {
                        "value": "http://193.201.9.240/live/games/index.php",
                        "timestamp": "2023-04-18 14:40:28"
                    },
                    {
                        "value": "http://77.91.78.118/u83mfdS2/index.php",
                        "timestamp": "2023-06-01 20:59:59"
                    },
                    {
                        "value": "http://213.226.123.14/jd93d22Cb1/Login.php",
                        "timestamp": "2023-09-10 20:14:31"
                    },
                    {
                        "value": "http://ama.hostiko.com.ug/n9kdjc3xSf/Login.php",
                        "timestamp": "2023-05-25 23:45:33"
                    },
                    {
                        "value": "http://185.215.113.15/Lkb2dxj3/Login.php",
                        "timestamp": "2023-07-13 17:46:05"
                    },
                    {
                        "value": "http://185.215.113.204/f84Nls2/Login.php",
                        "timestamp": "2023-09-10 20:14:30"
                    },
                    {
                        "value": "http://45.15.156.208/jd9dd3Vw/Login.php",
                        "timestamp": "2023-09-10 20:14:31"
                    },
                    {
                        "value": "http://45.15.156.208/jd9dd3Vw/index.php",
                        "timestamp": "2023-09-10 20:14:00"
                    },
                    {
                        "value": "http://ama.hostiko.link/n9kdjc3xSf/index.php",
                        "timestamp": "2023-05-06 04:22:30"
                    },
                    {
                        "value": "http://ama.hostiko.com.ug/n9kdjc3xSf/index.php",
                        "timestamp": "2023-05-06 04:22:51"
                    },
                    {
                        "value": "http://88.218.60.230/Gb2dZz/Login.php",
                        "timestamp": "2023-05-25 23:45:34"
                    },
                    {
                        "value": "http://31.41.244.146/f5OknW/Login.php",
                        "timestamp": "2023-09-10 20:14:30"
                    },
                    {
                        "value": "http://77.91.124.207/plays/chapter/Login.php",
                        "timestamp": "2023-05-06 04:22:42"
                    },
                    {
                        "value": "http://193.233.20.29/games/category/Login.php",
                        "timestamp": "2023-05-06 04:22:28"
                    },
                    {
                        "value": "http://specialblue.pm/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-18 14:44:03"
                    },
                    {
                        "value": "http://77.73.134.27/n9kdjc3xSf/Login.php",
                        "timestamp": "2023-05-18 14:44:05"
                    },
                    {
                        "value": "http://185.215.113.204/Lkb2dxj3/Login.php",
                        "timestamp": "2023-09-10 20:14:32"
                    },
                    {
                        "value": "http://77.91.124.242/games/category/Login.php",
                        "timestamp": "2023-05-25 23:45:35"
                    },
                    {
                        "value": "http://rupeika.info/fjgD555c3/Login.php",
                        "timestamp": "2023-06-08 22:26:21"
                    },
                    {
                        "value": "http://77.91.78.118/0jVu73d/Login.php",
                        "timestamp": "2023-06-01 20:59:01"
                    },
                    {
                        "value": "http://78.46.242.112/so57Nst/Login.php",
                        "timestamp": "2023-06-08 22:26:27"
                    },
                    {
                        "value": "http://212.118.43.106/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-25 23:45:37"
                    },
                    {
                        "value": "http://77.91.78.118/u83mfdS2/Login.php",
                        "timestamp": "2023-06-01 20:58:56"
                    },
                    {
                        "value": "http://msupgrade.top/0bjdn2Z/Login.php",
                        "timestamp": "2023-05-25 23:45:36"
                    },
                    {
                        "value": "http://193.233.20.36/joomla/Login.php",
                        "timestamp": "2023-05-06 04:22:41"
                    },
                    {
                        "value": "http://94.142.138.182/0jVu73d/Login.php",
                        "timestamp": "2023-05-06 04:22:43"
                    },
                    {
                        "value": "http://5.75.139.35/so57Nst/Login.php",
                        "timestamp": "2023-06-08 22:26:27"
                    },
                    {
                        "value": "http://185.215.113.204/g9TTnd3bS/Login.php",
                        "timestamp": "2023-09-10 20:14:30"
                    },
                    {
                        "value": "http://193.201.9.43/plays/chapter/Login.php",
                        "timestamp": "2023-05-06 04:22:45"
                    },
                    {
                        "value": "http://77.91.78.17/0jVu73d/Login.php",
                        "timestamp": "2023-06-01 20:58:57"
                    },
                    {
                        "value": "http://80.66.79.86/joomla/Login.php",
                        "timestamp": "2023-05-06 04:23:01"
                    },
                    {
                        "value": "http://focustopbreed78d.com/ve83dkas2m/Login.php",
                        "timestamp": "2023-05-06 04:22:55"
                    },
                    {
                        "value": "http://80.66.79.86/joomla/index.php",
                        "timestamp": "2023-05-06 04:21:24"
                    },
                    {
                        "value": "http://193.201.9.43/plays/chapter/index.php",
                        "timestamp": "2023-04-11 13:40:21"
                    },
                    {
                        "value": "http://88.218.60.230/Gb2dZz/index.php",
                        "timestamp": "2023-05-06 04:19:47"
                    },
                    {
                        "value": "http://179.43.154.148/fjgD555c3/Login.php",
                        "timestamp": "2023-09-10 20:14:28"
                    },
                    {
                        "value": "http://77.73.134.15/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-06 04:22:23"
                    },
                    {
                        "value": "http://77.91.78.242/0bjdn2Z/Login.php",
                        "timestamp": "2023-05-25 23:45:32"
                    },
                    {
                        "value": "http://212.113.119.255/joomla/index.php",
                        "timestamp": "2023-04-22 21:06:22"
                    },
                    {
                        "value": "http://77.91.124.207/plays/chapter/index.php",
                        "timestamp": "2023-04-08 08:55:22"
                    },
                    {
                        "value": "http://77.73.134.27/n9kdjc3xSf/index.php",
                        "timestamp": "2023-05-06 04:23:00"
                    },
                    {
                        "value": "http://213.226.123.16/4dvHbs3/index.php",
                        "timestamp": "2023-04-07 18:10:17"
                    },
                    {
                        "value": "http://focustopbreed78d.com/ve83dkas2m/index.php",
                        "timestamp": "2023-05-06 04:22:31"
                    },
                    {
                        "value": "http://77.91.124.242/games/category/index.php",
                        "timestamp": "2023-04-04 17:31:02"
                    },
                    {
                        "value": "http://193.233.20.29/games/category/index.php",
                        "timestamp": "2023-05-06 04:20:47"
                    },
                    {
                        "value": "http://77.91.78.118/0jVu73d/index.php",
                        "timestamp": "2023-06-01 21:00:14"
                    },
                    {
                        "value": "http://193.233.20.36/joomla/index.php",
                        "timestamp": "2023-05-06 04:23:01"
                    },
                    {
                        "value": "http://62.204.41.87/joomla/Login.php",
                        "timestamp": "2023-05-06 04:22:40"
                    },
                    {
                        "value": "http://nestleservers.xyz/so57Nst/Login.php",
                        "timestamp": "2023-05-06 04:22:08"
                    },
                    {
                        "value": "http://85.31.45.199/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-06 04:22:22"
                    },
                    {
                        "value": "https://nestleservers.xyz/so57Nst/Login.php",
                        "timestamp": "2023-05-06 04:23:07"
                    },
                    {
                        "value": "http://sertvs.com/8vcWxwwx3/Login.php",
                        "timestamp": "2023-06-08 22:26:26"
                    },
                    {
                        "value": "https://31.41.244.200/games/category/Login.php",
                        "timestamp": "2023-05-06 04:22:27"
                    },
                    {
                        "value": "http://78.46.242.112/so57Nst/index.php",
                        "timestamp": "2023-06-08 22:27:34"
                    },
                    {
                        "value": "http://sertvs.com/8vcWxwwx3/index.php",
                        "timestamp": "2023-06-08 22:27:33"
                    },
                    {
                        "value": "http://88.218.60.230/7vzZwkv2/index.php",
                        "timestamp": "2023-05-06 04:22:42"
                    },
                    {
                        "value": "http://nestlecareers.cf/so57Nst/index.php",
                        "timestamp": "2023-05-06 04:22:51"
                    },
                    {
                        "value": "http://62.204.41.59/wordpress/console2/index.php",
                        "timestamp": "2023-03-17 09:30:38"
                    },
                    {
                        "value": "http://37.220.87.85/so57Nst/index.php",
                        "timestamp": "2023-03-15 15:00:29"
                    },
                    {
                        "value": "http://nestlehosts.xyz/so57Nst/index.php",
                        "timestamp": "2023-05-06 04:22:44"
                    },
                    {
                        "value": "http://nestleservers.xyz/so57Nst/index.php",
                        "timestamp": "2023-05-06 04:22:15"
                    },
                    {
                        "value": "http://85.31.45.199/dF30Hn4m/index.php",
                        "timestamp": "2023-03-12 10:05:17"
                    },
                    {
                        "value": "http://62.204.41.87/joomla/index.php",
                        "timestamp": "2023-05-06 04:22:55"
                    },
                    {
                        "value": "http://31.41.244.200/games/category/index.php",
                        "timestamp": "2023-05-06 04:23:05"
                    },
                    {
                        "value": "http://193.42.33.28/0bjdn2Z/Login.php",
                        "timestamp": "2023-05-06 04:22:52"
                    },
                    {
                        "value": "http://specialblue.in/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-18 14:44:06"
                    },
                    {
                        "value": "http://94.142.138.182/0jVu73d/index.php",
                        "timestamp": "2023-03-08 02:55:35"
                    },
                    {
                        "value": "http://77.91.78.17/0jVu73d/index.php",
                        "timestamp": "2023-06-01 21:00:00"
                    },
                    {
                        "value": "http://193.56.146.218/images/IMG_489440/index.php",
                        "timestamp": "2023-03-07 17:00:31"
                    },
                    {
                        "value": "http://specialblue.in/dF30Hn4m/index.php",
                        "timestamp": "2023-05-06 04:20:04"
                    },
                    {
                        "value": "http://23.106.215.95/G9qpzLe/index.php",
                        "timestamp": "2023-03-06 12:55:27"
                    },
                    {
                        "value": "http://212.118.43.106/dF30Hn4m/index.php",
                        "timestamp": "2023-03-03 21:45:21"
                    },
                    {
                        "value": "http://193.233.20.26/Do3m4Gor/index.php",
                        "timestamp": "2023-03-02 19:50:23"
                    },
                    {
                        "value": "http://77.73.134.52/0jVu73d/index.php",
                        "timestamp": "2023-03-02 19:10:20"
                    },
                    {
                        "value": "http://193.233.20.25/buH5N004d/index.php",
                        "timestamp": "2023-03-02 18:20:30"
                    },
                    {
                        "value": "http://193.42.33.28/0bjdn2Z/index.php",
                        "timestamp": "2023-02-24 13:30:24"
                    },
                    {
                        "value": "http://62.204.41.182/g9TTnd3bS/Login.php",
                        "timestamp": "2023-05-06 04:22:15"
                    },
                    {
                        "value": "http://62.204.41.13/gjend7w/Login.php",
                        "timestamp": "2023-05-06 04:22:21"
                    },
                    {
                        "value": "http://193.42.33.28/game0ver/Login.php",
                        "timestamp": "2023-05-06 04:22:14"
                    },
                    {
                        "value": "http://update.nodfirewalld.org/MvwWdj2/Login.php",
                        "timestamp": "2023-05-06 04:22:04"
                    },
                    {
                        "value": "http://77.73.133.72/hfk3vK9/Login.php",
                        "timestamp": "2023-05-06 04:22:45"
                    },
                    {
                        "value": "http://185.246.221.126/i4kvjd3xc/Login.php",
                        "timestamp": "2023-05-06 04:22:38"
                    },
                    {
                        "value": "http://1h3art.me/i4kvjd3xc/Login.php",
                        "timestamp": "2023-05-06 04:22:10"
                    },
                    {
                        "value": "http://github.gitextensions.org/MvwWdj2/Login.php",
                        "timestamp": "2023-05-06 04:22:48"
                    },
                    {
                        "value": "http://crmgloinx.com/0mYqX73dk3/Login.php",
                        "timestamp": "2023-05-06 04:23:03"
                    },
                    {
                        "value": "http://search.akamainet.org/h8V2cQlbd3/Login.php",
                        "timestamp": "2023-05-06 04:23:08"
                    },
                    {
                        "value": "http://193.42.33.43/fb73jc3/Login.php",
                        "timestamp": "2023-05-06 04:22:35"
                    },
                    {
                        "value": "http://62.204.41.25/3g4mn5s/Login.php",
                        "timestamp": "2023-05-06 04:22:59"
                    },
                    {
                        "value": "http://45.32.200.113/mBsjv2swweP/Login.php",
                        "timestamp": "2023-05-06 04:23:02"
                    },
                    {
                        "value": "http://45.66.230.123/g8kdkeXs2qL/Login.php",
                        "timestamp": "2023-05-06 04:23:04"
                    },
                    {
                        "value": "http://62.204.41.91/8kcnjd3da3/Login.php",
                        "timestamp": "2023-05-06 04:22:41"
                    },
                    {
                        "value": "http://maximumpushtodaynotnowbut.com/Nmkn5d9Dn/Login.php",
                        "timestamp": "2023-05-06 04:22:09"
                    },
                    {
                        "value": "http://79.137.192.6/u83mfdS2/Login.php",
                        "timestamp": "2023-05-06 04:22:16"
                    },
                    {
                        "value": "http://bitcoinpricealertexpert.com/8bmdh3Slb2/Login.php",
                        "timestamp": "2023-05-06 04:22:34"
                    },
                    {
                        "value": "http://uniswapdataprice.com/8bmdh3Slb2/Login.php",
                        "timestamp": "2023-05-06 04:23:09"
                    },
                    {
                        "value": "http://62.204.41.121/ZxhssZx/Login.php",
                        "timestamp": "2023-05-06 04:22:57"
                    },
                    {
                        "value": "http://80.94.92.35/g9TTnd3bS/Login.php",
                        "timestamp": "2023-06-08 22:26:27"
                    },
                    {
                        "value": "http://77.73.134.66/v7eWcjs/Login.php",
                        "timestamp": "2023-05-06 04:22:40"
                    },
                    {
                        "value": "http://185.174.137.152/jb9sZZZbv7/Login.php",
                        "timestamp": "2023-05-06 04:22:27"
                    },
                    {
                        "value": "http://62.204.41.88/9vdVVVjsw/Login.php",
                        "timestamp": "2023-05-06 04:22:29"
                    },
                    {
                        "value": "http://193.42.33.28/8bmdh3Slb2/Login.php",
                        "timestamp": "2023-05-06 04:23:10"
                    },
                    {
                        "value": "http://77.73.134.27/8bmdh3Slb2/Login.php",
                        "timestamp": "2023-05-06 04:22:35"
                    },
                    {
                        "value": "http://amazingtodaynotsaidhimherwhathe.com/Nmkn5d9Dn/Login.php",
                        "timestamp": "2023-05-06 04:22:35"
                    },
                    {
                        "value": "http://smkpro.to/0bjdn2Z/Login.php",
                        "timestamp": "2023-05-06 04:22:47"
                    },
                    {
                        "value": "http://coindexalerter.com/8bmdh3Slb2/Login.php",
                        "timestamp": "2023-05-06 04:22:44"
                    },
                    {
                        "value": "http://motiontodaynotgogoodnowok.com/Nmkn5d9Dn/Login.php",
                        "timestamp": "2023-05-06 04:22:31"
                    },
                    {
                        "value": "http://45.9.74.80/0bjdn2Z/Login.php",
                        "timestamp": "2023-09-10 20:14:26"
                    },
                    {
                        "value": "http://hellomr.observer/7gjD0Vs3d/Login.php",
                        "timestamp": "2023-05-06 04:22:30"
                    },
                    {
                        "value": "http://192.211.55.118/h9sk3jdSda/Login.php",
                        "timestamp": "2023-05-06 04:23:10"
                    },
                    {
                        "value": "http://193.233.20.15/dF30Hn4m/Login.php",
                        "timestamp": "2023-05-06 04:22:39"
                    },
                    {
                        "value": "http://193.233.20.14/BR54nmB3/Login.php",
                        "timestamp": "2023-05-06 04:22:16"
                    },
                    {
                        "value": "http://193.233.20.15/dF30Hn4m/index.php",
                        "timestamp": "2023-02-22 08:04:44"
                    },
                    {
                        "value": "http://193.233.20.14/BR54nmB3/index.php",
                        "timestamp": "2023-02-22 07:54:07"
                    },
                    {
                        "value": "http://77.73.134.66/0bjdn2Z/index.php",
                        "timestamp": "2023-02-13 10:40:26"
                    },
                    {
                        "value": "http://msupgrade.top/0bjdn2Z/index.php",
                        "timestamp": "2023-02-09 04:00:32"
                    },
                    {
                        "value": "http://45.9.74.80/0bjdn2Z/index.php",
                        "timestamp": "2023-09-10 20:13:56"
                    },
                    {
                        "value": "http://5.75.139.35/so57Nst/index.php",
                        "timestamp": "2023-06-08 22:27:34"
                    },
                    {
                        "value": "http://62.204.41.5/Bu58Ngs/index.php",
                        "timestamp": "2023-02-03 19:30:36"
                    },
                    {
                        "value": "http://62.204.41.4/Gol478Ns/index.php",
                        "timestamp": "2023-02-03 19:20:35"
                    },
                    {
                        "value": "http://185.215.113.204/g9TTnd3bS/index.php",
                        "timestamp": "2023-09-10 20:13:59"
                    },
                    {
                        "value": "http://193.233.20.4/t6r48nSa/index.php",
                        "timestamp": "2023-02-01 15:00:40"
                    },
                    {
                        "value": "http://193.233.20.2/Bn89hku/index.php",
                        "timestamp": "2023-02-01 12:15:27"
                    },
                    {
                        "value": "http://62.204.41.92/so57Nst/index.php",
                        "timestamp": "2023-02-01 09:15:22"
                    },
                    {
                        "value": "http://amazingtodaynotsaidhimherwhathe.com/Nmkn5d9Dn/index.php",
                        "timestamp": "2023-02-01 05:15:20"
                    },
                    {
                        "value": "http://62.204.41.72/hn85jlUn/index.php",
                        "timestamp": "2023-01-31 15:15:16"
                    },
                    {
                        "value": "http://62.204.41.92/n9dks3s/index.php",
                        "timestamp": "2023-01-30 18:10:20"
                    },
                    {
                        "value": "http://62.204.41.72/0bjdn2Z/index.php",
                        "timestamp": "2023-01-29 16:40:10"
                    },
                    {
                        "value": "http://185.174.137.152/jb9sZZZbv7/index.php",
                        "timestamp": "2023-01-28 07:30:30"
                    },
                    {
                        "value": "http://45.15.156.172/g0fMLjb8s/index.php",
                        "timestamp": "2023-01-27 16:35:34"
                    },
                    {
                        "value": "http://77.73.134.45/fb73jc3/index.php",
                        "timestamp": "2023-01-27 15:25:28"
                    },
                    {
                        "value": "http://62.204.41.89/8bcZfjw/index.php",
                        "timestamp": "2023-01-24 15:00:42"
                    },
                    {
                        "value": "http://83.217.11.7/8vcWxwwx3/index.php",
                        "timestamp": "2023-01-24 06:20:36"
                    },
                    {
                        "value": "http://62.204.41.88/9vdVVVjsw/index.php",
                        "timestamp": "2023-01-23 08:25:25"
                    },
                    {
                        "value": "http://62.233.51.173/jb9sZZZbv7/index.php",
                        "timestamp": "2023-01-23 04:52:20"
                    },
                    {
                        "value": "http://62.233.51.173/jb9sZZZbv7/Plugins/cred64.dll",
                        "timestamp": "2023-01-23 04:52:20"
                    },
                    {
                        "value": "http://62.233.51.173/jb9sZZZbv7/Plugins/clip64.dll",
                        "timestamp": "2023-01-23 04:52:20"
                    },
                    {
                        "value": "http://62.233.51.173/jb9sZZZbv7/Login.php",
                        "timestamp": "2023-05-06 04:22:21"
                    },
                    {
                        "value": "http://62.233.51.173/jb9sZZZbv7/index.php?scr=1",
                        "timestamp": "2023-01-23 04:52:19"
                    },
                    {
                        "value": "http://62.204.41.242/9vZbns/index.php",
                        "timestamp": "2023-01-22 22:40:26"
                    },
                    {
                        "value": "http://62.204.41.111/jb9sZZZbv7/index.php",
                        "timestamp": "2023-01-19 01:25:03"
                    },
                    {
                        "value": "http://62.204.41.27/9djZdj09/index.php",
                        "timestamp": "2023-01-16 03:31:26"
                    },
                    {
                        "value": "http://hellomr.observer/7gjD0Vs3d/index.php",
                        "timestamp": "2023-01-13 20:15:26"
                    },
                    {
                        "value": "http://pleasetake.pictures/7gjD0Vs3d/index.php",
                        "timestamp": "2023-01-13 20:10:26"
                    },
                    {
                        "value": "http://researchersgokick.rocks/7gjD0Vs3d/index.php",
                        "timestamp": "2023-01-13 20:05:25"
                    },
                    {
                        "value": "http://bitcoinpricealertexpert.com/8bmdh3Slb2/index.php",
                        "timestamp": "2023-01-12 14:45:34"
                    },
                    {
                        "value": "http://coindexalerter.com/8bmdh3Slb2/index.php",
                        "timestamp": "2023-01-12 14:40:31"
                    },
                    {
                        "value": "http://uniswapdataprice.com/8bmdh3Slb2/index.php",
                        "timestamp": "2023-01-12 14:35:35"
                    },
                    {
                        "value": "http://sogoodnowtodaynow.com/Nmkn5d9Dn/index.php",
                        "timestamp": "2023-01-12 10:30:26"
                    },
                    {
                        "value": "http://maximumpushtodaynotnowbut.com/Nmkn5d9Dn/index.php",
                        "timestamp": "2023-01-12 10:25:21"
                    },
                    {
                        "value": "http://motiontodaynotgogoodnowok.com/Nmkn5d9Dn/index.php",
                        "timestamp": "2023-01-12 10:20:22"
                    },
                    {
                        "value": "http://62.204.41.151/8vcWxwwx3/index.php",
                        "timestamp": "2023-01-09 14:35:33"
                    },
                    {
                        "value": "http://62.204.41.104/7gjD0Vs3d/index.php",
                        "timestamp": "2023-01-09 12:05:32"
                    },
                    {
                        "value": "http://freepcgamee.com/g8kdkeXs2qL/index.php",
                        "timestamp": "2023-06-29 18:16:30"
                    },
                    {
                        "value": "http://62.204.41.32/8bmdh3Slb2/index.php",
                        "timestamp": "2023-01-09 07:35:21"
                    },
                    {
                        "value": "http://77.73.134.27/8bmdh3Slb2/index.php",
                        "timestamp": "2023-05-06 04:21:07"
                    },
                    {
                        "value": "http://193.42.33.74/8bdSvcD/index.php",
                        "timestamp": "2023-01-06 17:10:29"
                    },
                    {
                        "value": "http://79.137.192.6/u83mfdS2/index.php",
                        "timestamp": "2023-01-06 14:55:20"
                    },
                    {
                        "value": "http://185.73.39.231/g8kdkeXs2qL/index.php",
                        "timestamp": "2023-01-05 14:40:39"
                    },
                    {
                        "value": "http://45.66.230.123/g8kdkeXs2qL/index.php",
                        "timestamp": "2023-01-05 07:50:32"
                    },
                    {
                        "value": "http://62.204.41.109/Nmkn5d9Dn/index.php",
                        "timestamp": "2022-12-30 19:45:20"
                    },
                    {
                        "value": "http://62.204.41.91/8kcnjd3da3/index.php",
                        "timestamp": "2023-01-09 21:39:51"
                    },
                    {
                        "value": "http://45.32.200.113/mBsjv2swweP/index.php",
                        "timestamp": "2022-12-30 00:20:26"
                    },
                    {
                        "value": "http://62.204.41.67/g8sjnd3xe/index.php",
                        "timestamp": "2022-12-28 15:50:10"
                    },
                    {
                        "value": "http://62.204.41.17/8bdSvcD/index.php",
                        "timestamp": "2022-12-27 19:35:14"
                    },
                    {
                        "value": "http://62.204.41.165/g8sjnd3xe/index.php",
                        "timestamp": "2022-12-25 18:20:19"
                    },
                    {
                        "value": "http://85.209.135.11/gjend7w/index.php",
                        "timestamp": "2022-12-24 17:15:04"
                    },
                    {
                        "value": "http://193.42.33.28/game0ver/index.php",
                        "timestamp": "2022-12-23 15:05:34"
                    },
                    {
                        "value": "http://62.204.41.182/g9TTnd3bS/index.php",
                        "timestamp": "2022-12-23 15:00:36"
                    },
                    {
                        "value": "http://amadtrackings.com/g9TTnd3bS/index.php",
                        "timestamp": "2022-12-21 16:50:13"
                    },
                    {
                        "value": "http://62.204.41.79/tT7774433/index.php",
                        "timestamp": "2022-12-19 14:10:16"
                    },
                    {
                        "value": "http://77.73.134.66/v7eWcjs/index.php",
                        "timestamp": "2023-01-03 22:05:29"
                    },
                    {
                        "value": "http://62.204.41.79/U7vfDb3kg/index.php",
                        "timestamp": "2022-12-19 13:50:14"
                    },
                    {
                        "value": "http://31.41.244.237/jg94cVd30f/index.php",
                        "timestamp": "2022-12-08 07:00:22"
                    },
                    {
                        "value": "http://62.204.41.6/p9cWxH/index.php",
                        "timestamp": "2022-12-03 14:25:17"
                    },
                    {
                        "value": "http://31.41.244.167/v7eWcjs/index.php",
                        "timestamp": "2022-12-01 16:30:30"
                    },
                    {
                        "value": "http://77.73.133.72/hfk3vK9/index.php",
                        "timestamp": "2022-11-29 11:40:25"
                    },
                    {
                        "value": "http://62.204.41.252/nB8cWack3/index.php",
                        "timestamp": "2022-11-28 20:00:19"
                    },
                    {
                        "value": "http://77.73.134.66/o7Vsjd3a2f/index.php",
                        "timestamp": "2022-11-28 11:05:12"
                    },
                    {
                        "value": "http://bebraboysclub.hk/g8lvleE2z/index.php",
                        "timestamp": "2022-11-27 23:35:19"
                    },
                    {
                        "value": "http://31.41.244.146/f5OknW/index.php",
                        "timestamp": "2023-09-10 20:13:59"
                    },
                    {
                        "value": "http://31.41.244.17/hfk3vK9/index.php",
                        "timestamp": "2022-11-25 18:35:19"
                    },
                    {
                        "value": "http://update.nodfirewalld.org/MvwWdj2/index.php",
                        "timestamp": "2022-11-25 11:25:20"
                    },
                    {
                        "value": "http://77.73.134.65/o7VsjdSa2f/index.php",
                        "timestamp": "2022-11-24 19:30:18"
                    },
                    {
                        "value": "http://1h3art.me/i4kvjd3xc/index.php",
                        "timestamp": "2022-11-24 13:40:21"
                    },
                    {
                        "value": "https://193.56.146.194/h49vlBP/index.php",
                        "timestamp": "2022-11-23 20:22:24"
                    },
                    {
                        "value": "http://185.246.221.126/i4kvjd3xc/index.php",
                        "timestamp": "2022-11-23 19:35:37"
                    },
                    {
                        "value": "http://crmgloinx.com/0mYqX73dk3/index.php",
                        "timestamp": "2022-11-14 14:05:36"
                    },
                    {
                        "value": "http://193.56.146.194/h49vlBP/index.php",
                        "timestamp": "2022-11-13 15:20:14"
                    },
                    {
                        "value": "http://193.56.146.174/g84kvj4jck/index.php",
                        "timestamp": "2022-11-09 18:54:10"
                    },
                    {
                        "value": "http://193.56.146.29/f5OknW/index.php",
                        "timestamp": "2022-11-09 02:00:26"
                    },
                    {
                        "value": "http://31.41.244.60/t0nvN3c4/index.php",
                        "timestamp": "2022-11-08 20:30:36"
                    },
                    {
                        "value": "http://researchersgokick.rocks/f8dfksdj3/index.php",
                        "timestamp": "2022-11-05 04:10:38"
                    },
                    {
                        "value": "http://pleasetake.pictures/f8dfksdj3/index.php",
                        "timestamp": "2022-11-05 04:05:35"
                    },
                    {
                        "value": "http://hellomr.observer/f8dfksdj3/index.php",
                        "timestamp": "2022-11-05 04:00:45"
                    },
                    {
                        "value": "http://193.56.146.243/h8V2cQlbd3/index.php",
                        "timestamp": "2022-11-04 13:15:34"
                    },
                    {
                        "value": "http://31.41.244.15/Mb1sDv3/index.php",
                        "timestamp": "2022-10-31 16:45:22"
                    },
                    {
                        "value": "http://185.215.113.114/deliveryback/index.php",
                        "timestamp": "2022-10-29 14:35:25"
                    },
                    {
                        "value": "http://62.204.41.25/3g4mn5s/index.php",
                        "timestamp": "2022-10-29 13:30:06"
                    },
                    {
                        "value": "http://79.137.197.181/g93dLhG2/index.php",
                        "timestamp": "2022-10-28 03:00:28"
                    },
                    {
                        "value": "http://176.113.115.201/3g4mn5s/index.php",
                        "timestamp": "2022-10-27 18:40:37"
                    },
                    {
                        "value": "http://github.gitextensions.org/MvwWdj2/index.php",
                        "timestamp": "2022-10-26 01:40:48"
                    },
                    {
                        "value": "http://78.153.144.60/v3S1dl2/index.php",
                        "timestamp": "2022-10-25 15:26:49"
                    },
                    {
                        "value": "http://78.153.144.60/rSbFldr23/index.php",
                        "timestamp": "2022-10-14 14:05:48"
                    },
                    {
                        "value": "http://85.31.46.155/f84Nls2/index.php",
                        "timestamp": "2022-10-13 14:00:35"
                    },
                    {
                        "value": "http://en.eredirected.xyz/xC0m3/index.php",
                        "timestamp": "2022-10-07 11:20:56"
                    },
                    {
                        "value": "http://en.xml-post.xyz/xC0m3/index.php",
                        "timestamp": "2022-10-07 11:11:01"
                    },
                    {
                        "value": "http://193.106.191.184/p84Nls2/Plugins/cred64.dll",
                        "timestamp": "2022-10-05 22:00:08"
                    },
                    {
                        "value": "http://193.106.191.184/p84Nls2/index.php",
                        "timestamp": "2022-10-05 22:00:06"
                    },
                    {
                        "value": "http://185.215.113.205/f9v33dkSXm/index.php",
                        "timestamp": "2022-10-04 15:40:39"
                    },
                    {
                        "value": "http://eiqwejwqiejqwij.com/t0bmd843/index.php",
                        "timestamp": "2022-10-03 19:23:09"
                    },
                    {
                        "value": "http://210.16.67.250/f5OknW/index.php",
                        "timestamp": "2022-09-25 06:30:55"
                    },
                    {
                        "value": "http://guideanceers.com/rTnS24/index.php",
                        "timestamp": "2022-09-17 03:10:44"
                    },
                    {
                        "value": "http://epifile.info/Ynv2otX/index.php",
                        "timestamp": "2022-08-27 15:15:39"
                    },
                    {
                        "value": "http://185.215.113.204/f84Nls2/index.php",
                        "timestamp": "2023-09-10 20:13:59"
                    },
                    {
                        "value": "http://azd.at/forum/index.php",
                        "timestamp": "2022-07-20 08:45:20"
                    },
                    {
                        "value": "http://62.204.41.117/nkg3skjvSaq2/index.php",
                        "timestamp": "2022-07-19 16:35:50"
                    },
                    {
                        "value": "http://cloudreactions.xyz/g93kdm3SaQ/index.php",
                        "timestamp": "2022-07-19 07:20:45"
                    },
                    {
                        "value": "http://guideanceers.com/g93kdm3SaQ/index.php",
                        "timestamp": "2022-07-19 07:20:45"
                    },
                    {
                        "value": "http://dssclientdownloadsprospect.com/nkg3skjvSaq2/index.php",
                        "timestamp": "2022-07-13 21:05:22"
                    },
                    {
                        "value": "http://russk21.icu/rest/index.php",
                        "timestamp": "2022-07-13 05:00:17"
                    },
                    {
                        "value": "http://moscow13.at/rest/index.php",
                        "timestamp": "2022-07-13 05:00:16"
                    },
                    {
                        "value": "http://81.19.135.247/Kn82d22zzU/index.php",
                        "timestamp": "2022-07-12 07:25:27"
                    },
                    {
                        "value": "http://teamfighttacticstools.info/5Lsq3FR/index.php",
                        "timestamp": "2022-07-08 07:20:37"
                    },
                    {
                        "value": "http://185.215.113.204/Lkb2dxj3/index.php",
                        "timestamp": "2023-09-10 20:14:02"
                    },
                    {
                        "value": "http://pppproyectkz.icu/5kv4Pqi/index.php",
                        "timestamp": "2022-06-19 11:45:51"
                    },
                    {
                        "value": "http://kkskksnut.icu/5kv4Pqi/index.php",
                        "timestamp": "2022-06-19 11:45:46"
                    },
                    {
                        "value": "http://huteuhksr.icu/5kv4Pqi/index.php",
                        "timestamp": "2022-06-19 11:45:37"
                    },
                    {
                        "value": "http://nftmatrixed.info/5Lsq3FR/index.php",
                        "timestamp": "2022-06-16 21:07:44"
                    },
                    {
                        "value": "http://authymysexy.info/5Lsq3FR/index.php",
                        "timestamp": "2022-06-16 21:07:35"
                    },
                    {
                        "value": "http://45.227.255.49/5Lsq3FR/index.php",
                        "timestamp": "2022-06-16 07:07:30"
                    },
                    {
                        "value": "http://179.43.155.137/fjgD555c3/index.php",
                        "timestamp": "2022-06-16 04:17:43"
                    },
                    {
                        "value": "http://rupeika.info/fjgD555c3/index.php",
                        "timestamp": "2023-06-08 22:27:29"
                    },
                    {
                        "value": "http://systemupdate22.cf/d2VxjasuwS/index.php",
                        "timestamp": "2022-06-11 16:32:13"
                    },
                    {
                        "value": "http://185.215.113.15/Lkb2dxj3/index.php",
                        "timestamp": "2023-07-13 17:43:19"
                    },
                    {
                        "value": "http://5.188.118.7/ppp3aZfj3nil/index.php",
                        "timestamp": "2022-06-06 19:36:47"
                    },
                    {
                        "value": "http://62.204.41.174/f8dfksdj3/index.php",
                        "timestamp": "2022-06-06 16:46:14"
                    },
                    {
                        "value": "http://185.215.113.92/gg4mn3s/index.php",
                        "timestamp": "2022-06-06 11:46:09"
                    },
                    {
                        "value": "http://marobast.ws/b3m2fVVs0/index.php",
                        "timestamp": "2022-06-04 12:36:27"
                    },
                    {
                        "value": "http://185.215.113.205/fjgD555c3/index.php",
                        "timestamp": "2022-06-03 22:35:29"
                    },
                    {
                        "value": "http://sigint.ws/f8dfksdj3/index.php",
                        "timestamp": "2022-06-01 23:51:48"
                    },
                    {
                        "value": "http://dhisa8f9ah02hopasiaf.com/gg4mn3s/index.php",
                        "timestamp": "2022-05-30 23:55:48"
                    },
                    {
                        "value": "http://xksldjf9sksdjfks.com/gg4mn3s/index.php",
                        "timestamp": "2023-05-06 04:21:51"
                    },
                    {
                        "value": "http://happyday9risce.com/gg4mn3s/index.php",
                        "timestamp": "2023-05-06 04:21:55"
                    },
                    {
                        "value": "http://185.215.113.35/d2VxjasuwS_old/index.php",
                        "timestamp": "2022-05-21 07:27:22"
                    },
                    {
                        "value": "http://199.188.204.245/f8dfksdj3/index.php",
                        "timestamp": "2022-05-17 16:36:05"
                    },
                    {
                        "value": "http://185.215.113.38/f8dfksdj3/index.php",
                        "timestamp": "2022-05-14 22:52:55"
                    },
                    {
                        "value": "http://garts.at/forum/index.php",
                        "timestamp": "2022-05-07 16:37:08"
                    },
                    {
                        "value": "http://uknovodom.ru/forum/index.php",
                        "timestamp": "2022-05-07 16:37:07"
                    },
                    {
                        "value": "http://loader.cyou/y5vblsjve3d/index.php",
                        "timestamp": "2022-05-06 14:56:40"
                    },
                    {
                        "value": "http://193.106.191.201/panelis/index.php",
                        "timestamp": "2022-05-04 10:46:48"
                    },
                    {
                        "value": "http://victory-collections.top/d2VxjasuwS/index.php",
                        "timestamp": "2022-05-04 07:21:24"
                    },
                    {
                        "value": "http://194.36.177.12/rkv4Pqi/index.php",
                        "timestamp": "2022-04-23 01:31:13"
                    },
                    {
                        "value": "http://190.123.44.195/d2VxjasuwS/index.php",
                        "timestamp": "2022-04-13 10:41:16"
                    },
                    {
                        "value": "http://179.43.154.147/d2VxjasuwS/index.php",
                        "timestamp": "2022-04-04 04:50:56"
                    },
                    {
                        "value": "http://190.123.44.138/Qbv2ff03/index.php",
                        "timestamp": "2022-04-03 02:05:50"
                    },
                    {
                        "value": "http://89.163.249.231/panel/index.php",
                        "timestamp": "2022-03-23 14:42:20"
                    },
                    {
                        "value": "http://wecrack.su/fkwdoXScn2/index.php",
                        "timestamp": "2022-03-04 16:41:01"
                    },
                    {
                        "value": "http://185.215.113.56/v7Dz2mmG/Login.php",
                        "timestamp": "2023-05-06 04:22:53"
                    },
                    {
                        "value": "http://185.215.113.55/fsc3ssxaP/index.php",
                        "timestamp": "2022-02-14 16:36:10"
                    },
                    {
                        "value": "http://185.87.148.190/k0uTrd3d/index.php",
                        "timestamp": "2022-02-08 18:31:17"
                    },
                    {
                        "value": "http://eu.eredirected.xyz/d2VxjasuwS/index.php",
                        "timestamp": "2022-02-06 20:16:18"
                    },
                    {
                        "value": "http://eu.xml-post.xyz/d2VxjasuwS/index.php",
                        "timestamp": "2022-02-06 20:16:17"
                    },
                    {
                        "value": "http://2.56.59.26/dima/index.php",
                        "timestamp": "2022-02-04 08:26:01"
                    },
                    {
                        "value": "http://5.182.4.47/k0uTrd3d/index.php",
                        "timestamp": "2022-01-29 13:01:53"
                    },
                    {
                        "value": "http://185.215.113.47/k0uTrd3d/index.php",
                        "timestamp": "2022-01-25 15:51:29"
                    },
                    {
                        "value": "http://web.jsonpost.xyz/sj2vMs/index.php",
                        "timestamp": "2022-01-19 17:52:38"
                    },
                    {
                        "value": "http://185.215.113.47/Gv93xs2Nz/index.php",
                        "timestamp": "2022-01-08 09:50:51"
                    },
                    {
                        "value": "http://185.215.113.47/f83jd823S/index.php",
                        "timestamp": "2021-12-31 13:20:34"
                    },
                    {
                        "value": "http://185.215.113.42/f83jd823S/index.php",
                        "timestamp": "2021-12-23 19:31:38"
                    },
                    {
                        "value": "http://2.56.56.210/notAnoob/index.php",
                        "timestamp": "2021-12-21 16:26:49"
                    },
                    {
                        "value": "http://185.215.113.110/Gv93xs2Nz/index.php",
                        "timestamp": "2021-12-14 08:36:53"
                    },
                    {
                        "value": "http://w.makemark.xyz/fkwdoXScn2/index.php",
                        "timestamp": "2021-12-03 16:31:06"
                    },
                    {
                        "value": "http://185.215.113.118/fkwdoXScn2/index.php",
                        "timestamp": "2021-11-30 18:45:42"
                    },
                    {
                        "value": "http://185.215.113.35/d2VxjasuwS/index.php",
                        "timestamp": "2021-11-30 09:48:01"
                    },
                    {
                        "value": "http://185.7.214.238/hBF6ds2D/index.php",
                        "timestamp": "2021-11-08 13:11:56"
                    },
                    {
                        "value": "http://185.215.113.45/g4MbvE/index.php",
                        "timestamp": "2021-10-01 21:26:36"
                    },
                    {
                        "value": "http://91.241.19.101/g7vcSfkbDs2/index.php",
                        "timestamp": "2021-09-30 21:41:04"
                    },
                    {
                        "value": "http://185.215.113.25/f6vskbW/index.php",
                        "timestamp": "2021-09-30 21:11:08"
                    },
                    {
                        "value": "http://185.215.113.33/hBF6ds2D/index.php",
                        "timestamp": "2021-09-28 23:11:12"
                    },
                    {
                        "value": "http://185.215.113.13/g4MbvE/index.php",
                        "timestamp": "2021-09-28 18:11:13"
                    },
                    {
                        "value": "http://sunnsongs.com/f6vskbW/index.php",
                        "timestamp": "2021-08-31 19:50:46"
                    },
                    {
                        "value": "http://freshjuss.com/f6vskbW/index.php",
                        "timestamp": "2021-08-31 19:50:45"
                    },
                    {
                        "value": "http://tech-unions.com/f6vskbW/index.php",
                        "timestamp": "2021-08-31 19:50:45"
                    },
                    {
                        "value": "http://redteamminepool.ug/g4FvpsQ2/index.php",
                        "timestamp": "2021-08-31 19:00:12"
                    },
                    {
                        "value": "http://css.tipinfolist.xyz/f5dkvdSbC/index.php",
                        "timestamp": "2021-08-29 23:01:20"
                    },
                    {
                        "value": "http://depressionk1d.ug/k8FppT/index.php",
                        "timestamp": "2021-08-28 22:20:59"
                    },
                    {
                        "value": "http://46.17.96.36/k8FppT/index.php",
                        "timestamp": "2021-08-28 22:00:58"
                    },
                    {
                        "value": "http://185.215.113.202/PmVc3sOf/index.php",
                        "timestamp": "2021-08-28 21:00:57"
                    },
                    {
                        "value": "http://heso-vpn.ug/k8FppT/index.php",
                        "timestamp": "2021-08-24 10:07:03"
                    },
                    {
                        "value": "http://trustmanager.ug/k8FppT/index.php",
                        "timestamp": "2021-08-23 00:00:55"
                    },
                    {
                        "value": "http://185.215.113.206/k8FppT/index.php",
                        "timestamp": "2021-08-18 20:25:59"
                    },
                    {
                        "value": "http://185.215.113.20/gb9fskvS/index.php",
                        "timestamp": "2021-08-14 08:21:41"
                    },
                    {
                        "value": "http://185.215.113.101/gb9fskvS/index.php",
                        "timestamp": "2021-08-12 04:42:34"
                    },
                    {
                        "value": "http://185.215.113.64/hBugs2D/index.php",
                        "timestamp": "2021-07-30 23:16:15"
                    },
                    {
                        "value": "http://91.241.19.49/hBugs2D/index.php",
                        "timestamp": "2021-07-24 13:50:55"
                    },
                    {
                        "value": "http://x-vpn.ug/hfV3vDtt/index.php",
                        "timestamp": "2021-07-18 11:05:30"
                    },
                    {
                        "value": "http://900ama.com/gBcskbwWs/index.php",
                        "timestamp": "2021-07-17 16:20:49"
                    },
                    {
                        "value": "http://ama529.ru/gBcskbwWs/index.php",
                        "timestamp": "2021-07-17 16:20:47"
                    },
                    {
                        "value": "http://purchatewow.xyz/g6Vce4s2S/index.php",
                        "timestamp": "2021-07-08 09:40:48"
                    },
                    {
                        "value": "http://185.87.51.18/reps/index.php",
                        "timestamp": "2021-07-05 04:20:52"
                    },
                    {
                        "value": "http://185.215.113.55/t5BnOoke2/index.php",
                        "timestamp": "2021-07-03 10:16:02"
                    },
                    {
                        "value": "http://185.215.113.79/g5FcvUgw/index.php",
                        "timestamp": "2021-07-02 14:25:38"
                    },
                    {
                        "value": "http://194.58.103.2/main/index.php",
                        "timestamp": "2021-06-28 02:40:32"
                    },
                    {
                        "value": "http://185.215.113.53/bPwsAq2/index.php",
                        "timestamp": "2021-06-26 17:55:40"
                    },
                    {
                        "value": "http://194.26.29.220/pZ4CkbjsO5/index.php",
                        "timestamp": "2021-06-18 00:43:20"
                    },
                    {
                        "value": "http://141.136.0.130/construction/index.php",
                        "timestamp": "2021-06-13 14:00:32"
                    },
                    {
                        "value": "http://94.140.115.70/construction/index.php",
                        "timestamp": "2021-06-13 12:10:22"
                    },
                    {
                        "value": "http://94.140.115.230/construction/index.php",
                        "timestamp": "2021-06-13 12:10:22"
                    },
                    {
                        "value": "http://185.215.113.38/fT5YhO/index.php",
                        "timestamp": "2021-05-29 12:10:32"
                    },
                    {
                        "value": "http://test.com/subfolder/index.php",
                        "timestamp": "2021-05-28 19:45:09"
                    },
                    {
                        "value": "http://185.215.113.57/1dEr2nYffd/index.php",
                        "timestamp": "2021-05-21 17:35:19"
                    },
                    {
                        "value": "http://185.215.113.118/hr4CsXqlF/index.php",
                        "timestamp": "2021-05-16 13:15:22"
                    },
                    {
                        "value": "http://92.38.184.216/4dcYcWsw3/index.php",
                        "timestamp": "2021-05-07 20:26:25"
                    },
                    {
                        "value": "http://45.155.205.172/4dcYcWsw3/index.php",
                        "timestamp": "2021-05-06 08:26:06"
                    },
                    {
                        "value": "http://176.111.174.114/Hnq8vS/index.php",
                        "timestamp": "2021-04-28 20:56:44"
                    },
                    {
                        "value": "http://185.215.113.74/4dcYcWsw3/index.php",
                        "timestamp": "2021-04-27 08:26:25"
                    },
                    {
                        "value": "http://155.94.128.40/iKns2W/index.php",
                        "timestamp": "2021-04-27 04:49:14"
                    },
                    {
                        "value": "http://185.215.113.67/4dcYcWsw3/index.php",
                        "timestamp": "2021-04-18 08:05:17"
                    },
                    {
                        "value": "http://cdn12-web-security.com/gf4EdsW/index.php",
                        "timestamp": "2021-04-14 02:05:18"
                    },
                    {
                        "value": "http://umbrelladownload.uno/gp6GbqVce/index.php",
                        "timestamp": "2021-04-12 20:00:31"
                    },
                    {
                        "value": "http://xtkehjjerbk.icu/j7csltegf/index.php",
                        "timestamp": "2021-03-28 21:25:35"
                    },
                    {
                        "value": "http://haleyqueenffff.xyz/Hq13V2W/index.php",
                        "timestamp": "2021-03-24 21:28:49"
                    },
                    {
                        "value": "http://feralhendown.xyz/Hq13V2W/index.php",
                        "timestamp": "2021-03-24 21:28:47"
                    },
                    {
                        "value": "http://haleyqueenfff.xyz/Hq13V2W/index.php",
                        "timestamp": "2021-03-24 21:28:44"
                    },
                    {
                        "value": "http://speeduppercolatorl.at/pZ4CkbjsO5/index.php",
                        "timestamp": "2021-01-20 17:48:37"
                    },
                    {
                        "value": "http://rebreaksstonehen.at/pZ4CkbjsO5/index.php",
                        "timestamp": "2021-01-20 17:48:37"
                    },
                    {
                        "value": "http://vastyrannouse.at/pZ4CkbjsO5/index.php",
                        "timestamp": "2021-01-20 17:48:37"
                    }
                ],
                "domain": [
                    {
                        "value": "panel.ceo-reputation.ru",
                        "timestamp": "2023-11-26 15:26:15"
                    },
                    {
                        "value": "ceo-reputation.ru",
                        "timestamp": "2023-11-26 15:26:14"
                    },
                    {
                        "value": "brodoyouevenlift.co.za",
                        "timestamp": "2023-12-01 17:36:06"
                    },
                    {
                        "value": "tceducn.com",
                        "timestamp": "2023-12-01 17:36:05"
                    },
                    {
                        "value": "shohetrc.com",
                        "timestamp": "2023-12-01 17:36:05"
                    },
                    {
                        "value": "atillapro.com",
                        "timestamp": "2023-12-01 17:36:05"
                    },
                    {
                        "value": "cncdevelopment.org",
                        "timestamp": "2023-11-07 23:48:16"
                    },
                    {
                        "value": "cncdevelopment.boo",
                        "timestamp": "2023-11-02 23:48:15"
                    },
                    {
                        "value": "xyl.lat",
                        "timestamp": "2023-10-09 23:48:14"
                    },
                    {
                        "value": "smz.sh",
                        "timestamp": "2023-08-14 06:07:26"
                    },
                    {
                        "value": "ocmtancmi2c4t.xyz",
                        "timestamp": "2023-09-01 23:48:10"
                    },
                    {
                        "value": "badurka5hippo73.top",
                        "timestamp": "2023-08-08 23:48:17"
                    },
                    {
                        "value": "asdasdwqrweerwfa.top",
                        "timestamp": "2023-07-14 23:48:10"
                    },
                    {
                        "value": "tadogem.com",
                        "timestamp": "2023-06-01 23:48:11"
                    },
                    {
                        "value": "haleyqueenffff.xyz",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "eu.xml-post.xyz",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "systemupdate22.cf",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "feralhendown.xyz",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "pppproyectkz.icu",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "chinataiw39e9i9ds.com",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "dhisa8f9ah02hopasiaf.com",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "cloudreactions.xyz",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "sigint.ws",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "crmgloinx.com",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "en.xml-post.xyz",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "web.jsonpost.xyz",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "search.akamainet.org",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "nestlehosts.xyz",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "specialblue.wf",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "asdaww.com",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "todaysingchina456.com",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "authymysexy.info",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "w.makemark.xyz",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "uknovodom.ru",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "x-vpn.ug",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "antispam-screen.com",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "saerwq.net",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "900ama.com",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "kkskksnut.icu",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "tech-unions.com",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "heso-vpn.ug",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "update.nodfirewalld.org",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "freshjuss.com",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "redteamminepool.ug",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "sogoodnowtodaynow.com",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "eu.eredirected.xyz",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "ama529.ru",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "marobast.ws",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "1h3art.me",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "guideanceers.com",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "victory-collections.top",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "researchersgokick.rocks",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "nestlecareers.cf",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "bebraboysclub.hk",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "wecrack.su",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "nftmatrixed.info",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "xtkehjjerbk.icu",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "trustmanager.ug",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "loader.cyou",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "haleyqueenfff.xyz",
                        "timestamp": "2023-04-26 18:30:01"
                    },
                    {
                        "value": "azd.at",
                        "timestamp": "2023-04-26 18:30:01"
                    },
                    {
                        "value": "umbrelladownload.uno",
                        "timestamp": "2023-08-01 17:59:00"
                    },
                    {
                        "value": "cdn12-web-security.com",
                        "timestamp": "2023-04-26 18:30:01"
                    },
                    {
                        "value": "sunnsongs.com",
                        "timestamp": "2023-04-26 18:30:01"
                    },
                    {
                        "value": "en.eredirected.xyz",
                        "timestamp": "2023-04-26 18:30:01"
                    },
                    {
                        "value": "huteuhksr.icu",
                        "timestamp": "2023-04-26 18:30:01"
                    },
                    {
                        "value": "garts.at",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "dssclientdownloadsprospect.com",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "moscow13.at",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "ama.hostiko.link",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "purchatewow.xyz",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "github.gitextensions.org",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "xksldjf9sksdjfks.com",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "epifile.info",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "eiqwejwqiejqwij.com",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "depressionk1d.ug",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "css.tipinfolist.xyz",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "teamfighttacticstools.info",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "rupeika.info",
                        "timestamp": "2023-05-22 23:48:13"
                    },
                    {
                        "value": "myserveur855.cc",
                        "timestamp": "2023-07-18 23:48:12"
                    },
                    {
                        "value": "specialblue.pm",
                        "timestamp": "2023-05-20 23:48:13"
                    },
                    {
                        "value": "ama.hostiko.com.ug",
                        "timestamp": "2023-05-12 23:48:13"
                    },
                    {
                        "value": "focustopbreed78d.com",
                        "timestamp": "2023-05-06 23:48:18"
                    },
                    {
                        "value": "sertvs.com",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "nestleservers.xyz",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "specialblue.in",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "smkpro.to",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "msupgrade.top",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "amazingtodaynotsaidhimherwhathe.com",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "hellomr.observer",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "motiontodaynotgogoodnowok.com",
                        "timestamp": "2023-04-26 18:30:04"
                    },
                    {
                        "value": "uniswapdataprice.com",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "coindexalerter.com",
                        "timestamp": "2023-04-26 18:30:03"
                    },
                    {
                        "value": "bitcoinpricealertexpert.com",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "maximumpushtodaynotnowbut.com",
                        "timestamp": "2023-04-26 18:30:05"
                    },
                    {
                        "value": "pleasetake.pictures",
                        "timestamp": "2023-04-26 18:30:00"
                    },
                    {
                        "value": "freepcgamee.com",
                        "timestamp": "2023-04-26 18:30:06"
                    },
                    {
                        "value": "file-manager-7946.com",
                        "timestamp": "2023-01-19 23:48:28"
                    },
                    {
                        "value": "amadtrackings.com",
                        "timestamp": "2023-04-26 18:30:02"
                    },
                    {
                        "value": "huxere.xyz",
                        "timestamp": "2020-12-28 17:09:16"
                    }
                ],
                "ip:port": [
                    {
                        "value": "185.172.128.100:80",
                        "timestamp": "2023-12-01 17:36:03"
                    },
                    {
                        "value": "69.197.161.106:80",
                        "timestamp": "2023-12-01 17:36:06"
                    },
                    {
                        "value": "185.172.128.19:80",
                        "timestamp": "2023-12-01 17:36:06"
                    },
                    {
                        "value": "5.42.66.9:80",
                        "timestamp": "2023-12-01 17:36:05"
                    },
                    {
                        "value": "185.196.8.176:80",
                        "timestamp": "2023-12-01 17:36:15"
                    },
                    {
                        "value": "167.235.20.126:80",
                        "timestamp": "2023-11-30 23:48:16"
                    },
                    {
                        "value": "193.42.33.7:80",
                        "timestamp": "2023-11-17 23:48:17"
                    },
                    {
                        "value": "85.209.11.199:80",
                        "timestamp": "2023-11-12 23:48:16"
                    },
                    {
                        "value": "77.91.97.162:80",
                        "timestamp": "2023-11-12 23:48:17"
                    },
                    {
                        "value": "5.42.65.28:80",
                        "timestamp": "2023-11-01 23:48:18"
                    },
                    {
                        "value": "77.91.124.1:80",
                        "timestamp": "2023-10-28 23:48:14"
                    },
                    {
                        "value": "193.42.32.29:80",
                        "timestamp": "2023-10-28 23:48:15"
                    },
                    {
                        "value": "95.141.41.12:80",
                        "timestamp": "2023-10-27 23:48:14"
                    },
                    {
                        "value": "77.91.68.52:80",
                        "timestamp": "2023-10-05 23:48:15"
                    },
                    {
                        "value": "176.113.115.81:80",
                        "timestamp": "2023-10-20 23:48:13"
                    },
                    {
                        "value": "5.42.64.45:80",
                        "timestamp": "2023-10-18 23:48:13"
                    },
                    {
                        "value": "77.91.68.78:80",
                        "timestamp": "2023-10-05 23:48:15"
                    },
                    {
                        "value": "79.110.62.80:80",
                        "timestamp": "2023-10-01 23:48:13"
                    },
                    {
                        "value": "5.42.64.33:80",
                        "timestamp": "2023-09-28 23:48:13"
                    },
                    {
                        "value": "77.91.68.18:80",
                        "timestamp": "2023-09-09 23:48:07"
                    },
                    {
                        "value": "79.137.192.18:80",
                        "timestamp": "2023-09-03 23:48:09"
                    },
                    {
                        "value": "193.233.255.9:80",
                        "timestamp": "2023-09-01 23:48:09"
                    },
                    {
                        "value": "45.9.74.182:80",
                        "timestamp": "2023-08-30 23:48:11"
                    },
                    {
                        "value": "5.42.92.67:80",
                        "timestamp": "2023-08-22 23:48:11"
                    },
                    {
                        "value": "77.91.68.61:80",
                        "timestamp": "2023-08-22 23:48:11"
                    },
                    {
                        "value": "45.155.7.60:80",
                        "timestamp": "2023-08-21 23:48:11"
                    },
                    {
                        "value": "45.9.74.141:80",
                        "timestamp": "2023-08-20 23:48:13"
                    },
                    {
                        "value": "87.121.47.63:80",
                        "timestamp": "2023-08-12 23:48:17"
                    },
                    {
                        "value": "45.9.74.164:80",
                        "timestamp": "2023-08-05 23:48:16"
                    },
                    {
                        "value": "185.252.179.228:80",
                        "timestamp": "2023-08-05 23:48:16"
                    },
                    {
                        "value": "77.91.68.3:80",
                        "timestamp": "2023-08-05 23:48:16"
                    },
                    {
                        "value": "109.206.241.33:80",
                        "timestamp": "2023-07-24 23:48:14"
                    },
                    {
                        "value": "77.91.68.63:80",
                        "timestamp": "2023-07-13 23:48:10"
                    },
                    {
                        "value": "62.182.156.152:80",
                        "timestamp": "2023-07-09 23:48:08"
                    },
                    {
                        "value": "77.91.68.30:80",
                        "timestamp": "2023-07-06 23:48:10"
                    },
                    {
                        "value": "5.42.65.80:80",
                        "timestamp": "2023-07-06 23:48:10"
                    },
                    {
                        "value": "78.47.9.120:80",
                        "timestamp": "2023-06-25 23:48:08"
                    },
                    {
                        "value": "5.42.65.1:80",
                        "timestamp": "2023-06-24 23:48:07"
                    },
                    {
                        "value": "77.91.68.62:80",
                        "timestamp": "2023-06-23 23:48:08"
                    },
                    {
                        "value": "95.214.26.53:80",
                        "timestamp": "2023-06-14 23:48:10"
                    },
                    {
                        "value": "176.113.115.253:80",
                        "timestamp": "2023-06-05 23:48:10"
                    },
                    {
                        "value": "79.137.203.59:80",
                        "timestamp": "2023-06-03 23:48:11"
                    },
                    {
                        "value": "77.91.124.20:80",
                        "timestamp": "2023-06-01 23:48:11"
                    },
                    {
                        "value": "31.41.244.200:443",
                        "timestamp": "2023-04-26 18:36:50"
                    },
                    {
                        "value": "79.137.203.19:80",
                        "timestamp": "2023-04-26 18:35:55"
                    },
                    {
                        "value": "185.73.39.231:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "46.17.96.36:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "185.215.113.13:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "190.123.44.138:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "185.215.113.33:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "193.56.146.174:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "2.56.56.210:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "2.56.59.26:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "185.215.113.114:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "185.215.113.42:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "31.41.244.60:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "193.106.191.201:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "185.215.113.79:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "5.182.4.47:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "185.215.113.202:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "141.136.0.130:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "185.87.148.190:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "31.41.244.15:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "45.227.255.49:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "194.36.177.12:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "194.58.103.2:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "185.215.113.56:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "179.43.154.147:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "77.73.134.65:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "62.204.41.174:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "185.215.113.92:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "193.56.146.194:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "193.42.33.43:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "185.215.113.67:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "210.16.67.250:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "94.140.115.70:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "23.106.215.95:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "91.241.19.49:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "185.7.214.238:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "185.215.113.57:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "179.43.155.137:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "190.123.44.195:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "185.215.113.110:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "199.188.204.245:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "185.215.113.205:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "45.155.205.172:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "185.215.113.74:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "77.73.134.15:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "185.215.113.20:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "92.38.184.216:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "185.87.51.18:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "185.215.113.118:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "62.204.41.25:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "193.56.146.243:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "79.137.197.181:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "185.215.113.25:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "176.111.174.114:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "78.153.144.60:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "185.246.221.126:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "89.163.249.231:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "94.140.115.230:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "194.26.29.220:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "185.215.113.64:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "85.31.46.155:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "185.215.113.55:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "185.215.113.45:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "185.215.113.35:80",
                        "timestamp": "2023-10-12 23:48:14"
                    },
                    {
                        "value": "155.94.128.40:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "91.241.19.101:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "185.215.113.101:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "5.188.118.7:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "185.215.113.38:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "62.204.41.117:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "31.41.244.17:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "81.19.135.247:80",
                        "timestamp": "2023-04-26 18:35:46"
                    },
                    {
                        "value": "176.113.115.201:80",
                        "timestamp": "2023-04-26 18:35:46"
                    },
                    {
                        "value": "185.215.113.47:80",
                        "timestamp": "2023-04-26 18:35:46"
                    },
                    {
                        "value": "31.41.244.146:80",
                        "timestamp": "2023-05-24 23:48:12"
                    },
                    {
                        "value": "77.91.78.242:80",
                        "timestamp": "2023-05-22 23:48:12"
                    },
                    {
                        "value": "179.43.154.148:80",
                        "timestamp": "2023-05-22 23:48:13"
                    },
                    {
                        "value": "193.3.19.154:80",
                        "timestamp": "2023-05-21 23:48:13"
                    },
                    {
                        "value": "193.201.9.240:80",
                        "timestamp": "2023-05-17 23:48:15"
                    },
                    {
                        "value": "193.201.9.43:80",
                        "timestamp": "2023-05-10 23:48:13"
                    },
                    {
                        "value": "212.113.119.255:80",
                        "timestamp": "2023-05-07 23:48:16"
                    },
                    {
                        "value": "77.91.124.207:80",
                        "timestamp": "2023-05-07 23:48:17"
                    },
                    {
                        "value": "213.226.123.16:80",
                        "timestamp": "2023-05-06 23:48:16"
                    },
                    {
                        "value": "77.91.124.242:80",
                        "timestamp": "2023-05-03 23:48:18"
                    },
                    {
                        "value": "193.233.20.29:80",
                        "timestamp": "2023-04-29 23:48:25"
                    },
                    {
                        "value": "77.91.78.118:80",
                        "timestamp": "2023-05-16 23:48:14"
                    },
                    {
                        "value": "193.233.20.36:80",
                        "timestamp": "2023-04-28 23:48:25"
                    },
                    {
                        "value": "213.226.123.14:80",
                        "timestamp": "2023-07-28 23:48:14"
                    },
                    {
                        "value": "78.46.242.112:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "88.218.60.230:80",
                        "timestamp": "2023-05-01 23:48:24"
                    },
                    {
                        "value": "62.204.41.59:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "49.12.117.51:80",
                        "timestamp": "2023-04-14 23:48:27"
                    },
                    {
                        "value": "37.220.87.85:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "85.31.45.199:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "62.204.41.87:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "31.41.244.200:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "94.142.138.182:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "193.56.146.218:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "212.118.43.106:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "193.233.20.26:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "77.73.134.52:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "193.233.20.25:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "192.211.55.118:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "193.233.20.15:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "193.233.20.14:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "91.215.85.194:80",
                        "timestamp": "2023-03-11 23:48:17"
                    },
                    {
                        "value": "62.204.41.4:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "62.204.41.5:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "193.233.20.4:80",
                        "timestamp": "2023-04-26 18:35:55"
                    },
                    {
                        "value": "5.75.139.35:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "193.233.20.2:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "62.204.41.92:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "62.204.41.72:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "185.174.137.152:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "62.204.41.89:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "83.217.11.7:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "62.204.41.88:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "62.233.51.173:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "62.204.41.242:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "62.204.41.111:80",
                        "timestamp": "2023-04-26 18:35:46"
                    },
                    {
                        "value": "45.15.156.216:80",
                        "timestamp": "2023-02-16 23:48:20"
                    },
                    {
                        "value": "62.204.41.121:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "62.204.41.27:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "185.215.113.204:80",
                        "timestamp": "2023-04-26 18:35:51"
                    },
                    {
                        "value": "62.204.41.151:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "62.204.41.32:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "62.204.41.104:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "79.137.192.6:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "193.42.33.74:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "45.66.230.123:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "62.204.41.109:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "62.204.41.91:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "45.32.200.113:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "62.204.41.67:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "62.204.41.17:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "77.73.133.72:80",
                        "timestamp": "2023-04-26 18:35:54"
                    },
                    {
                        "value": "62.204.41.252:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "31.41.244.158:80",
                        "timestamp": "2022-12-27 23:48:14"
                    },
                    {
                        "value": "31.41.244.167:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "62.204.41.6:80",
                        "timestamp": "2023-04-26 18:35:48"
                    },
                    {
                        "value": "31.41.244.237:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "62.204.41.158:80",
                        "timestamp": "2023-01-13 23:48:16"
                    },
                    {
                        "value": "85.209.135.109:80",
                        "timestamp": "2023-01-12 23:48:20"
                    },
                    {
                        "value": "62.204.41.13:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "85.209.135.11:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "77.73.133.124:80",
                        "timestamp": "2023-01-18 23:48:24"
                    },
                    {
                        "value": "62.204.41.79:80",
                        "timestamp": "2023-04-26 18:35:52"
                    },
                    {
                        "value": "193.42.33.28:80",
                        "timestamp": "2023-08-01 17:59:56"
                    },
                    {
                        "value": "77.73.134.66:80",
                        "timestamp": "2023-04-26 18:35:50"
                    },
                    {
                        "value": "62.204.41.182:80",
                        "timestamp": "2023-04-26 18:35:47"
                    },
                    {
                        "value": "62.204.41.165:80",
                        "timestamp": "2023-04-26 18:35:49"
                    },
                    {
                        "value": "77.73.134.42:80",
                        "timestamp": "2023-01-21 23:48:28"
                    },
                    {
                        "value": "77.73.134.45:80",
                        "timestamp": "2023-04-26 18:35:53"
                    },
                    {
                        "value": "193.56.146.194:443",
                        "timestamp": "2023-04-26 18:36:50"
                    },
                    {
                        "value": "193.106.191.184:80",
                        "timestamp": "2023-04-26 18:35:49"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "6a0dd8dc0e26ce057c4c84133b4edfa5559cbaf6e5de804c38ac820b28a799e6",
                        "timestamp": "2023-07-09 03:12:25"
                    },
                    {
                        "value": "e37df091ad55606c1b43993fc973c3ed7d4a810915377e0b28d269fb141d8289",
                        "timestamp": "2023-07-09 03:12:25"
                    },
                    {
                        "value": "05ed3e084c0c8fa450935b702e6132da4ea300a8995cb663d4e8a43d860d9b04",
                        "timestamp": "2023-07-09 03:12:24"
                    },
                    {
                        "value": "5e8128495dedd19903e4ab74beda2d13f98fcd86090fbbbbdd6e15b2f87a4caa",
                        "timestamp": "2023-07-09 03:12:24"
                    },
                    {
                        "value": "c932d528083a27ea1a17f68e5dc663a0067172c9f3af35904e4917c3e9b752a1",
                        "timestamp": "2023-07-09 03:12:23"
                    },
                    {
                        "value": "abd8284914e8bc1309c13903e7b41b1af552c80598982c9e8fbe35e88eda9315",
                        "timestamp": "2023-07-09 03:12:23"
                    },
                    {
                        "value": "17c0c801a134044314c80f5dba0ee3f751ea9f7629fef10796792add32a3eee3",
                        "timestamp": "2023-07-09 03:12:22"
                    },
                    {
                        "value": "9fb2817fe1508ac672701e6733dbbd930f6c87e641ea8686ed874ba25a86a451",
                        "timestamp": "2023-07-09 03:12:22"
                    },
                    {
                        "value": "0be27abe7b8402580c8ee84dc58a64b2bc9077e2d32634675fb723de04646620",
                        "timestamp": "2023-07-09 03:12:21"
                    },
                    {
                        "value": "35f99b4cfd8ac912c7b7488b84540f3a766dd3c5864ec0c0fd92496b9e80b399",
                        "timestamp": "2023-07-09 03:12:21"
                    },
                    {
                        "value": "1d8596310e2ea54b1bf5df1f82573c0a8af68ed4da1baf305bcfdeaf7cbf0061",
                        "timestamp": "2022-10-28 12:55:27"
                    },
                    {
                        "value": "0c37a9b1d5806908883b4e14e6c6b406c912b52851d44e19cb852d5f8eb9cd06",
                        "timestamp": "2022-02-07 13:15:33"
                    },
                    {
                        "value": "93bbc7e0f489125883985855949ed8a0929d44b5fea0c17db9113fff830793c9",
                        "timestamp": "2022-02-07 13:15:32"
                    },
                    {
                        "value": "d771fc8db50712dd97967103599ae96f54ef86d20a23c13f088e0f0470c01c96",
                        "timestamp": "2022-02-07 13:15:31"
                    },
                    {
                        "value": "95d0cfda144353ec8be8413cad6c3edf53ec382bc87a9f59adbb849cbbd09ed4",
                        "timestamp": "2022-02-07 13:15:30"
                    },
                    {
                        "value": "1c9df950dffde5433e1c2dd755fab0778b06a8fd10c9bec5a8b30ac5e852e2e4",
                        "timestamp": "2022-01-19 17:45:32"
                    },
                    {
                        "value": "4d05c9fcb2e7945af076a66f6457f5c4a4ef9c067a318954fdcd09c3cae41b92",
                        "timestamp": "2022-01-19 17:45:32"
                    },
                    {
                        "value": "73f11b90e0f6e6b22cd15355237c34a49be72a05091df6f22eff5cf4dfb0635d",
                        "timestamp": "2022-01-19 17:45:29"
                    },
                    {
                        "value": "8d6da5e1ec7b25e161f2c01983ebbfd64de706df2313cfb275952fe8cbaea051",
                        "timestamp": "2022-01-19 17:45:29"
                    },
                    {
                        "value": "7fdd45056d3c5228a40e6e9df42c04fbe47cf2f1b2ed2cd8a0837af5b805922e",
                        "timestamp": "2022-01-19 17:45:27"
                    },
                    {
                        "value": "31540c2e000ba23772a1d96fd756e65ece71d3303941facb033022c28e83a92e",
                        "timestamp": "2022-01-19 17:45:27"
                    },
                    {
                        "value": "87d32f6dd8b615f977adaeb05f1feb34985bb4c1f67f5ac375c7ff1253adf971",
                        "timestamp": "2022-01-19 17:45:25"
                    },
                    {
                        "value": "72991ad3350cec700680cb797c20441029219ed49ca96d1f9da97d80a0573622",
                        "timestamp": "2022-01-19 17:45:25"
                    },
                    {
                        "value": "1cdc472f08bc86830018711d971f1efc634d01f8a8635996d274388bc27953e7",
                        "timestamp": "2022-01-14 17:00:33"
                    },
                    {
                        "value": "9b58105b315bbd6a5af96e63f88dc59cdedef401324916ae48de270a021ec29d",
                        "timestamp": "2022-01-14 17:00:32"
                    },
                    {
                        "value": "3309dbe5abab38f952ca3a478531e9ff57a1ef4654f988c53dbc9e08da7ac9db",
                        "timestamp": "2022-01-14 17:00:30"
                    },
                    {
                        "value": "f2c5e8d5a5f0c2b5fbb3ac5361b1de3fa179baee1c863d62ac47fd3b5277ce4d",
                        "timestamp": "2022-01-14 17:00:27"
                    },
                    {
                        "value": "23abc535e7b9fe582b338c82884a2f0ea164a62d38132b9e205f87b1591fd243",
                        "timestamp": "2022-01-14 15:00:47"
                    },
                    {
                        "value": "45fa3b802a5d7e2c3687dbb1957e5cda1715b5d741f40d80d672bbf73d5d8b3e",
                        "timestamp": "2022-01-14 15:00:44"
                    },
                    {
                        "value": "1d91b2f83ced053a62d4ae0289ac87fdf7557f684c8c67f56529126186bb5ef4",
                        "timestamp": "2022-01-14 15:00:38"
                    },
                    {
                        "value": "b93b9b8c9bbc90a761f62b17adc1b6662de922acd463d7fc6af09869afdc29d4",
                        "timestamp": "2022-01-14 15:00:32"
                    },
                    {
                        "value": "07f9220fe1879a72e9570c31869a19b40ba97a990a9300198af5d016806499c0",
                        "timestamp": "2022-01-14 14:45:39"
                    },
                    {
                        "value": "2476273703617870ae392f166bc07d346596d23a159bf762fd5468844b70e33f",
                        "timestamp": "2022-01-14 14:45:35"
                    },
                    {
                        "value": "164149035d4a3d2edba76c0601f6f83e04d45d7c057d221130c57fc9b13fd5b5",
                        "timestamp": "2022-01-14 14:45:31"
                    },
                    {
                        "value": "93fddb1a745fec7ae8bc3a7f8d66ce73b1841998e9b0589790e924ff6efb6a05",
                        "timestamp": "2022-01-14 14:45:27"
                    },
                    {
                        "value": "e91644f9cffb58e260facf0cb5abd35f9b0da2e5129803a6d4e7b8802814d752",
                        "timestamp": "2022-01-14 11:45:34"
                    },
                    {
                        "value": "3bb8ef6eaec03c54c6c517000575ef943577ca0a71e61fd29257786991306133",
                        "timestamp": "2022-01-14 11:45:31"
                    },
                    {
                        "value": "e7587776adecf859e137e7af3da4b9b6fd9428e6f89cc48d3a63886d490baaca",
                        "timestamp": "2022-01-14 11:45:29"
                    },
                    {
                        "value": "aeed1bf32df36ad3ccc929987dbd30e2b1836c267223614d3648b3027e23e1fe",
                        "timestamp": "2022-01-14 11:45:27"
                    },
                    {
                        "value": "44e305db99461f07b7cff6648b50531771361a4dfafa69991527d3963eb88dd2",
                        "timestamp": "2022-01-14 10:15:44"
                    },
                    {
                        "value": "c8fe81088b2caa9df35d92a588fb266a145c95b81b5c66d5bfe181fa73b17d82",
                        "timestamp": "2022-01-14 10:15:44"
                    },
                    {
                        "value": "966557b6f228eda641e155a858f574654e431743311d83e4841013d63044a994",
                        "timestamp": "2022-01-14 10:15:42"
                    },
                    {
                        "value": "1be428f924402d7cc4586ca37a9e843c869b394f85085db5e4e85d150aa87e04",
                        "timestamp": "2022-01-14 10:15:41"
                    },
                    {
                        "value": "1cf27ab77a771ff942b1e2947856844fbab4991cf87aca618968445b5c5d706d",
                        "timestamp": "2022-01-14 10:15:39"
                    },
                    {
                        "value": "d6f20ad67b08f29828c05878f4381065d8634085129d70d637effae9e6226a1a",
                        "timestamp": "2022-01-14 10:15:39"
                    },
                    {
                        "value": "50bee5c11d3905157aa3aa461b9da69cc05c90d748330e98324cc36815610bc0",
                        "timestamp": "2022-01-14 10:15:34"
                    },
                    {
                        "value": "dd1f717452d1875bf3af9fde8d4ac06514ff9b05e58c579e6ad5f2b0a5f4d51f",
                        "timestamp": "2022-01-14 10:15:34"
                    },
                    {
                        "value": "6cb775a7c9b0cf8ba308029dc623e1de6d17cb2ab6b7ebbbd9c16bfcaa55efe8",
                        "timestamp": "2022-01-14 08:45:31"
                    },
                    {
                        "value": "5c037c7c1338cf54a9d1e81b74bb4ad003e1a254069a03499426ec1600a748d9",
                        "timestamp": "2022-01-14 08:45:30"
                    },
                    {
                        "value": "f85293eec1a9d86cdb45979a7a90265d9082148898d583b1baaf8c7ae3e1047a",
                        "timestamp": "2022-01-14 08:45:29"
                    },
                    {
                        "value": "e3af866c7760f95afa5352ec3845697a17354305f5797a69538bb637f8bbf4fe",
                        "timestamp": "2022-01-14 08:45:27"
                    },
                    {
                        "value": "5edfc7353c1aa6b23547357f576453b48059bb994824fd67002f13906000cf9d",
                        "timestamp": "2022-01-14 05:30:29"
                    },
                    {
                        "value": "35da284a91a4217dddc3207fe0b20ae37a2126e33c1b57c5fa65e2e14b72e9ba",
                        "timestamp": "2022-01-14 05:30:28"
                    },
                    {
                        "value": "4162cc11cc30f7db7c8a151252a7e63e78dd4c03c995e2ab6e225dc811b8fd48",
                        "timestamp": "2022-01-14 05:30:26"
                    },
                    {
                        "value": "e997341ab2422f5471f4c9f1df84f7a52e16fa38d64e6e0f4f94859cc234e2f8",
                        "timestamp": "2022-01-14 05:30:26"
                    },
                    {
                        "value": "012ce05f8263d161d4387749446cb3df3240fd33cf71dfb3f48dc4f4c9354298",
                        "timestamp": "2022-01-14 04:15:28"
                    },
                    {
                        "value": "8c0272f6d0136bb8adeb659d8de19a4be68a81fc018587275e045103fc01b49d",
                        "timestamp": "2022-01-14 04:15:27"
                    },
                    {
                        "value": "22cb98a4832824adc290e8a9541b50228f4f75fb1a8e621fd80d4d2be7ed73f9",
                        "timestamp": "2022-01-14 04:15:25"
                    },
                    {
                        "value": "b8bed0211974f32db2c385350fb62954f0b0f335bc592b51144027956524d674",
                        "timestamp": "2022-01-14 04:15:24"
                    },
                    {
                        "value": "20e82385431b5173d4848daf265a11cc2a0c27e9fc64c8020903b6057062d3f9",
                        "timestamp": "2022-01-12 22:30:29"
                    },
                    {
                        "value": "3c75f12b379f7f4fefc255164a61733caa06a7593b64178d290344cf9fc147b5",
                        "timestamp": "2022-01-12 22:30:28"
                    },
                    {
                        "value": "94e951c2dadbb10ab63cc052f55120244d13d445789384a53935231131533852",
                        "timestamp": "2022-01-12 23:23:17"
                    },
                    {
                        "value": "d3c86dfa0d5c1887b8274ca4fd7e36af4b7f0580febb4ecbef8b1f7268e00cc1",
                        "timestamp": "2022-01-12 22:30:26"
                    },
                    {
                        "value": "01c246ac531a536f3f294cdbb9ae1f7535de1ebc0004499d812572aad5836fca",
                        "timestamp": "2022-01-12 22:00:31"
                    },
                    {
                        "value": "845608ba8d0f6a49a3c0f8bbacbe332cc2916c29c4300706c2e8d7682fe4d188",
                        "timestamp": "2022-01-12 22:00:31"
                    },
                    {
                        "value": "2dff4e7386e7641bef193f34848bb314255543b4b8f56924706724a421882dfd",
                        "timestamp": "2022-01-12 22:00:29"
                    },
                    {
                        "value": "0a606d4568f08b65ae9a079e8af697ed97b9708a84d513ac1680409669080567",
                        "timestamp": "2022-01-12 23:23:31"
                    },
                    {
                        "value": "48c7a0f90aeb87e9ba5feb08b5bedbcb70aacf2632636f71a62e2ffdd551ec98",
                        "timestamp": "2022-01-12 22:00:27"
                    },
                    {
                        "value": "d8fd82d0beccf6ad1aad521ef2744909a6f29c927bba3017c4723ce84560fbca",
                        "timestamp": "2022-01-12 22:00:27"
                    },
                    {
                        "value": "92c47500746ee00b0500081dbf4c49cb678e43c7d58fbbf9976c08efa7a68e63",
                        "timestamp": "2022-01-12 22:00:26"
                    },
                    {
                        "value": "2f09b78d9553e76cfb5f37d3b95c328c0e27492a41b053870c4cd38fe34cc313",
                        "timestamp": "2022-01-12 22:00:26"
                    },
                    {
                        "value": "e71ddce6eb29c57d702d72b504da153847677f48fdccebb0a278c4ab5a308ccd",
                        "timestamp": "2022-01-12 13:30:28"
                    },
                    {
                        "value": "9373b23da09b4af4772e437447dd4151035c9f82eef60ca17e400cbf65aada89",
                        "timestamp": "2022-01-12 23:23:36"
                    },
                    {
                        "value": "3ae33e0ccef8500a3fa30825b52c72938592ecde5c75403b9a11285231cdb843",
                        "timestamp": "2022-01-12 13:30:26"
                    },
                    {
                        "value": "f4d4948b257b6e4dac5b3cdab1b50cd2ed1035d3584da8dc6482c0774445f26c",
                        "timestamp": "2022-01-12 23:23:50"
                    },
                    {
                        "value": "fe1d983cd7533e38c5b7437e66b7d8c7bf4af78c6a2a1058723aaf8c08bfee5a",
                        "timestamp": "2022-01-12 11:30:39"
                    },
                    {
                        "value": "2905a6122098cb3ab10d168f56f4eed9bdc1efd6c0fb1d24fdfeaeb7ad4b442c",
                        "timestamp": "2022-01-12 11:30:36"
                    },
                    {
                        "value": "30f6468d4d775a87d867ad5c26394ab75ce8c99c23f40ab26ca04def8b0114b7",
                        "timestamp": "2022-01-12 11:30:33"
                    },
                    {
                        "value": "84bc6b63f80e42d0dc6c1e5bfe5fcc1f26af45557bcefd3b614aea5f6b60b17a",
                        "timestamp": "2022-01-12 23:23:43"
                    },
                    {
                        "value": "e477ad45adeedd7b545594f8906a5764022b7adc0301e3e6b7c3780a7a23c449",
                        "timestamp": "2022-01-12 10:45:36"
                    },
                    {
                        "value": "3b2189565f10d12d8c838c88e733398873d19f1f2fcb1ac3fad1e0f76e7bb50f",
                        "timestamp": "2022-01-12 10:45:36"
                    },
                    {
                        "value": "aedcda0f39136db757df15cf63a4b98eee85fbc6d7be2a6fd5c06d075a602b84",
                        "timestamp": "2022-01-12 10:45:34"
                    },
                    {
                        "value": "1d0b527e58814eeddf092f24b647a6a14f6cfbe62e539d53c93c2b0214297c6a",
                        "timestamp": "2022-01-12 10:45:33"
                    },
                    {
                        "value": "fd3e58fdde3332f00a20398c2d346c36be3efae577458ddbc91558ba14cdc621",
                        "timestamp": "2022-01-12 23:23:52"
                    },
                    {
                        "value": "f96fb1160aaaa0b073ef0cdb061c85c7faf4efe018b18be19d21228c7455e489",
                        "timestamp": "2022-01-12 10:45:31"
                    },
                    {
                        "value": "03fafd53235a01c35c4fb70937ee5d0491884e71101e7815a1b478d4ef419049",
                        "timestamp": "2022-01-12 10:45:29"
                    },
                    {
                        "value": "b8cf48fef956a5e8a3d9c8f9441f420a1948ebd39b10a3e2a5d14f4e6480536e",
                        "timestamp": "2022-01-12 10:45:28"
                    },
                    {
                        "value": "e70a8d5fe537aa2f7bb4d014ee5c35a9c169adab64c4e034d9badd8e8641f26b",
                        "timestamp": "2022-01-08 10:30:34"
                    },
                    {
                        "value": "3b4e9d9fdb7262f1f62072f7f9b7d48086fcb39b3343b21ae7bfa8f633ee2166",
                        "timestamp": "2022-01-08 10:30:31"
                    },
                    {
                        "value": "9994926e8ebaab7cbf50589671822b015eaa6ab5e0a2a1e32fc87e57c1797870",
                        "timestamp": "2022-01-08 10:30:30"
                    },
                    {
                        "value": "de691a498bb5c85d5c8bcc67198508b3eaaeb604bab147d53b588f7e3c34f1ce",
                        "timestamp": "2022-01-08 10:30:27"
                    },
                    {
                        "value": "6792ef3136fd7c7c005d9318b57d40514856cdc21daf81614bffbfaa774f0d04",
                        "timestamp": "2021-12-24 16:45:34"
                    },
                    {
                        "value": "fd9df758b109ad226271791bbd507b9f058a7bad64c54d45486fc36df764cf12",
                        "timestamp": "2021-12-24 16:45:33"
                    },
                    {
                        "value": "6a2358641560c999e2bd62f43db87489bd954604c12d82060062a3f8c3cf76c4",
                        "timestamp": "2021-12-24 16:45:31"
                    },
                    {
                        "value": "d7504a3cb550ccc1d7a9bb8e8ee34b8c337e74777630066fb704312c51b39a93",
                        "timestamp": "2021-12-24 16:45:30"
                    },
                    {
                        "value": "b197ed2d66c9c1c4609fc56295f5c22be03a6222061e2f98c8c1b6cec3ef7540",
                        "timestamp": "2021-12-24 16:45:28"
                    },
                    {
                        "value": "f88f121311c1a759541839439bec0ebb5f8bd5b82af2ed33cf52ee4b0204bd76",
                        "timestamp": "2021-12-24 16:45:28"
                    },
                    {
                        "value": "fb1597f9fc57772ee0b2b9821238bf0bc1760e97ace5d88196693fc59940733c",
                        "timestamp": "2021-12-24 16:45:26"
                    },
                    {
                        "value": "3d9ebf871e9ada91551158af5078da769ca8bea4014afcd75472deb0d4beb538",
                        "timestamp": "2021-12-24 16:45:26"
                    },
                    {
                        "value": "f2ddf06d55373c1cbaa616480fc98ad325e8395f6c131582d267211ef69b68cf",
                        "timestamp": "2021-12-24 04:00:41"
                    },
                    {
                        "value": "e6e2ef0f47b7373c844f856058c23bd5465dd9f22ed073aff09bbb4fc145e2ea",
                        "timestamp": "2021-12-24 04:00:41"
                    },
                    {
                        "value": "d9b5a61a3bee8db0b75e83742db7708b3842f235ee3234ab8b35c24d6136b34a",
                        "timestamp": "2021-12-24 04:00:39"
                    },
                    {
                        "value": "26115bb4c01959e700d7f2fa3925522a238f6fc4053c03210ba3d0066e5d542a",
                        "timestamp": "2021-12-24 04:00:39"
                    },
                    {
                        "value": "36f39013f5d53ac5fedb997e2c2c6d07455a59f01234dbf3cfce15046c964205",
                        "timestamp": "2021-12-24 04:00:36"
                    },
                    {
                        "value": "e429e6a66da5bc155ae5a73ea2fb9d0b2a19d8356868a5a01398b7c6870c4c34",
                        "timestamp": "2021-12-24 04:00:35"
                    },
                    {
                        "value": "7dc29bfa7a2664abf9e9af517e5052df94d3c9c879c46180a1bdf14735cb9854",
                        "timestamp": "2021-12-24 04:00:32"
                    },
                    {
                        "value": "67903e33f989eeeffc38da6f4a1e510aa2078ffc058329b71d7af69ad26eda25",
                        "timestamp": "2021-12-24 04:00:32"
                    },
                    {
                        "value": "88d79aea727f654b8999097c5e2f9a1453079a4815917d30031fb549be2aea57",
                        "timestamp": "2021-12-24 03:00:33"
                    },
                    {
                        "value": "1bab2d998686c08c0e4aa550e56367bf40b3220a7ec8c957771e7c16301092fb",
                        "timestamp": "2021-12-24 03:00:32"
                    },
                    {
                        "value": "6944da4242df3b9ff6e34c418806972b8c641e437c9d8855cd998ca1735524dd",
                        "timestamp": "2021-12-24 03:00:32"
                    },
                    {
                        "value": "a087ab61806a092421b34e4b29026276ffd26b83b0dd60c5b04febf5741c5884",
                        "timestamp": "2021-12-24 03:00:30"
                    },
                    {
                        "value": "ccd22f3e8b7fb1efcc5597b7417c66a57a60bf72e27414b3dda9271d03d7fd81",
                        "timestamp": "2021-12-20 19:45:26"
                    },
                    {
                        "value": "cee5cdb363e871fde315f7d4ebf6f1e0d1e86be9ef42dc1f958b9aee8d16a995",
                        "timestamp": "2021-12-20 19:45:26"
                    },
                    {
                        "value": "bd5a15ce7b5a16bde1c0a182285da7d47d64e2b1542d57947a139d5bd0a31e70",
                        "timestamp": "2021-12-20 19:45:25"
                    },
                    {
                        "value": "bd30611f6322aef87e67bb24d53b4d12926d20b317b8d514201a8c442128e03b",
                        "timestamp": "2021-12-20 19:45:24"
                    },
                    {
                        "value": "380f42de8fbbe2e72c82673e5d704e619eb0174b9fa902a3771c68c1689e8935",
                        "timestamp": "2021-12-19 13:45:32"
                    },
                    {
                        "value": "c3f4cd7a0eb2ec7a58092667a85632db48c2617ff522183165b62a889fe8cbb9",
                        "timestamp": "2021-12-19 13:45:31"
                    },
                    {
                        "value": "bb989e3685cd1ced4ec755730dfda0839a34a58ac7b74e7319ba7c43f5ce74af",
                        "timestamp": "2021-12-19 13:45:31"
                    },
                    {
                        "value": "6960869ade53d02d2eb6c52826785aec6524c7be92c89f5dfbc83ac986b2b14b",
                        "timestamp": "2021-12-19 13:45:30"
                    },
                    {
                        "value": "90720bf54c8c2e9d0ad710bbc3520a24640e0661d82a5525afe6b1ab0690f07f",
                        "timestamp": "2021-12-19 13:45:30"
                    },
                    {
                        "value": "e2d8361ae362eefbb66c5449c87b6d3c9855dad5d8ba02c3cc1d2511b608d4fb",
                        "timestamp": "2021-12-19 13:45:29"
                    },
                    {
                        "value": "8d87dfac28e1956d136f9bc37cc3d5115009b79705ffd92b4fd27a8b3d2a039f",
                        "timestamp": "2021-12-19 13:45:28"
                    },
                    {
                        "value": "cb289feec3cd3d249675c49615692fa5b3b9a7ed70c044729c79f3f78a93e3c5",
                        "timestamp": "2021-12-19 13:45:28"
                    },
                    {
                        "value": "f08840f2037c7cd599e83edd98807da962291c0fd7ba615430a417dfbcc76135",
                        "timestamp": "2021-12-19 09:15:36"
                    },
                    {
                        "value": "96ce0c209bbb9146cd4f272115c92f42fb239e95ad76dc81bad03a7b16c5c507",
                        "timestamp": "2021-12-19 09:15:34"
                    },
                    {
                        "value": "e434b56e55424dc2cd61f7595bda66bb640be33c1eea3298522ee810f862b216",
                        "timestamp": "2021-12-19 09:15:32"
                    },
                    {
                        "value": "6f06dc78d8c3a807688264335ead5fef00be7a03273ac0cc6e033a82113f6abd",
                        "timestamp": "2021-12-19 09:15:30"
                    },
                    {
                        "value": "5251dfeab7cb6b997ad27eeea8a3489ea133eadf6b539305beddab4cdc442cd6",
                        "timestamp": "2021-12-19 05:00:41"
                    },
                    {
                        "value": "3797da35c19a46cec3aee8ed773b73c52e3bfd6ea0c0f09bd05e1262cdf1f0bc",
                        "timestamp": "2021-12-19 05:00:40"
                    },
                    {
                        "value": "db7a0cfceef0df1517d065cec274ffb1da8226b19b3dfea6563f7565eb09edd1",
                        "timestamp": "2021-12-19 05:00:39"
                    },
                    {
                        "value": "b508d2c8740b179e08e28912d12b070aa668ff443e4acb605421ce9539ae60f7",
                        "timestamp": "2021-12-19 05:00:38"
                    },
                    {
                        "value": "e9636d240ed3816fd3a750ec808fef6ca85cc42c4ac3ccc6104e831fa1c38749",
                        "timestamp": "2021-12-19 04:45:40"
                    },
                    {
                        "value": "281549f327a530e786e962b96f77904882a494e6685c6e67d8af8c7752a237c3",
                        "timestamp": "2021-12-19 04:45:38"
                    },
                    {
                        "value": "ffdc6f1b5689c39437190d476a1771bf1f6458680310fdc1b49846612e54d7fd",
                        "timestamp": "2021-12-19 04:45:37"
                    },
                    {
                        "value": "1f774484d7ef788b38431bf7b6cf895865e136ed921bc7c33383c77ce5df60d8",
                        "timestamp": "2021-12-19 04:45:35"
                    },
                    {
                        "value": "db6881120f733df89eb9663852ff94ffd481d7ca8e49e7dcf1dbe553d11f588d",
                        "timestamp": "2021-12-13 01:00:32"
                    },
                    {
                        "value": "fc60164d3da978e1140d70085a511d9862c946b6a02e9dc4202c8155de14b682",
                        "timestamp": "2021-12-13 01:00:31"
                    },
                    {
                        "value": "9712448b7d09842ce3f16d74fce76158d597aeeaf24380cc7cdcc3100ee75133",
                        "timestamp": "2021-12-13 01:00:31"
                    },
                    {
                        "value": "b559a0e8760639d14966520340c5519f4918ba738ff7a33473980f2428feba2f",
                        "timestamp": "2021-12-13 01:00:30"
                    },
                    {
                        "value": "710efc8d5268fdfff9d427617bc8d1d21ec86c5b4f65f5c1da437019bad07f65",
                        "timestamp": "2021-12-09 23:45:43"
                    },
                    {
                        "value": "3723a86dfdbf873b8712232e601a22c4aa49b49bf00dfe4ebfea00c8bb612158",
                        "timestamp": "2021-12-09 23:45:41"
                    },
                    {
                        "value": "98d84b98dead958dede5b2c56f4d894f0e9a7ffd8aa98cce2174714af18fb4c3",
                        "timestamp": "2021-12-09 23:45:39"
                    },
                    {
                        "value": "db210be059156d0abc48f085f283d0088b830ae641b3620e112c28dd8e6ed9a2",
                        "timestamp": "2021-12-09 23:45:38"
                    },
                    {
                        "value": "117660959b1039e85ab6eb42be1e0778f862f9d8225fe16cfb67d9c4db1529ca",
                        "timestamp": "2021-12-09 23:45:36"
                    },
                    {
                        "value": "ef4752fe7cdbc8df85396f050ca2ab9ad0e12018d4f21253252ee9931812a614",
                        "timestamp": "2021-12-09 23:45:36"
                    },
                    {
                        "value": "fc14ffd4c933443804e2f79468a66fd151436c88f996b72b06745c00e680d779",
                        "timestamp": "2021-12-09 23:45:34"
                    },
                    {
                        "value": "c6042a41a179c8c8a525a5fde7dd8617cbafa51ae5c19320bc661d86adc5465b",
                        "timestamp": "2021-12-09 23:45:34"
                    },
                    {
                        "value": "3b3ef5d20d7b2674b5404a2a06ce700a5732adc5ba17931fba26eca2c9354d9f",
                        "timestamp": "2021-12-09 23:45:32"
                    },
                    {
                        "value": "b205edef54b362615e9f6fda2a64d9528c96d1f3a5f663fe35f72b1320da5c99",
                        "timestamp": "2021-12-09 23:45:32"
                    },
                    {
                        "value": "e15eca7be72dec23df207af8366166fdd6e4bc2b878477c5aaaba5e2a9b4330d",
                        "timestamp": "2021-12-09 23:45:29"
                    },
                    {
                        "value": "1a74a0e67b6e95eeca51468e5aea93b8d907866e6360377f9a6c86e0befaef8a",
                        "timestamp": "2021-12-09 23:45:29"
                    },
                    {
                        "value": "e299b7093d803316c4e03377067b1c636477434bbc000002184cc2bb38b9ee87",
                        "timestamp": "2021-12-09 23:00:35"
                    },
                    {
                        "value": "f39e03dd21dbb037eec1550797b695b4ea71dd72a37402ec85bbc22d64cbb947",
                        "timestamp": "2021-12-09 23:00:33"
                    },
                    {
                        "value": "62632346fc96825d5af7112b979028fed4f8c735f2a625ec6705cf7e780cd97b",
                        "timestamp": "2021-12-09 23:00:31"
                    },
                    {
                        "value": "32f10a4fda7a8c6a0cf0037af10683098e974e8db13bc859ea47e4faa9e2c03b",
                        "timestamp": "2021-12-09 23:00:28"
                    },
                    {
                        "value": "509a789f79b85a58cee95827454306257f2552c81cc45d9a27fd9b1eef7c863e",
                        "timestamp": "2021-12-09 21:15:27"
                    },
                    {
                        "value": "6c4dece2078edddd34ad3a8851d38c3567c68d266870a9c54aa82c7d91560207",
                        "timestamp": "2021-12-09 21:15:27"
                    },
                    {
                        "value": "50a4ced4140a75dd92bc5ae840726aa33152582ee8cf389d0b4d8b9c8c8e206f",
                        "timestamp": "2021-12-09 21:15:26"
                    },
                    {
                        "value": "07991788e9e7c09040414d414934c1097979a242fb7d1b6b66cef91b2eea4c1f",
                        "timestamp": "2021-12-09 21:15:24"
                    },
                    {
                        "value": "8a55a056761f76c48027e1c2f7a4146f451d36908d84f83ef9b95051d35b9f44",
                        "timestamp": "2021-12-07 18:23:11"
                    },
                    {
                        "value": "757387e6946c157cc37f67cf0a0e94af671b4a4bd498291390d878cc04cfa790",
                        "timestamp": "2021-12-07 18:22:35"
                    },
                    {
                        "value": "014ad60fd2c294dd8fb63c022961e17df1ba74bb1209a64634112913edc44983",
                        "timestamp": "2021-12-07 11:30:58"
                    },
                    {
                        "value": "94f8655a5751dd58930359931db8e0f3cc0cfe5145eb140b2b8778d9063dd3f0",
                        "timestamp": "2021-12-07 11:30:57"
                    },
                    {
                        "value": "192602e7e46bd1a921c2312cdf2f8bb2d571aac70c22b0546be3d45df7692ff7",
                        "timestamp": "2021-12-07 04:30:28"
                    },
                    {
                        "value": "37a69c08e620bc15bedc0b2d3288a621c6ced511017433d3b8e2e5bb7e2155d6",
                        "timestamp": "2021-12-07 04:30:27"
                    },
                    {
                        "value": "18043164cd4ac2d77236cfb68b40ff466c6745d0d7647077ad8b161d84523995",
                        "timestamp": "2021-12-07 04:30:26"
                    },
                    {
                        "value": "bf5b55dd90d317000bdbdc2eb08bb3ce3c0263cac10aedb67d65f01fd39c95fd",
                        "timestamp": "2021-12-07 04:30:25"
                    },
                    {
                        "value": "4666b3a3039e2dc192d56d4ae00d1935e6b3749e05a7e6cc0342414cea8b546f",
                        "timestamp": "2021-12-07 02:45:34"
                    },
                    {
                        "value": "128e62e08fd48d591f2745f7584a88750b24a7d0dafbd4f8b39ae6ad21072c43",
                        "timestamp": "2021-12-07 02:45:33"
                    },
                    {
                        "value": "c8ee4f813016ec8b590b4e588817c16fa7e8cea9a1b0365254254a5b01d898f6",
                        "timestamp": "2021-12-07 02:45:31"
                    },
                    {
                        "value": "b27d56f626c48618d92a7c47b6e3621432f8210f6c0daaa06477afed3ad8923f",
                        "timestamp": "2021-12-07 02:45:30"
                    },
                    {
                        "value": "be1276ddd2a19ca33d89ee88f7e016716b1a989d2ead9148671796db9ff02dda",
                        "timestamp": "2021-12-04 10:15:40"
                    },
                    {
                        "value": "346b0d0d7a164f7c3ce46a246bdcaf5b8ff1c674a1d78541d02cab835c507947",
                        "timestamp": "2021-12-04 10:15:40"
                    },
                    {
                        "value": "4f75795df9a479ac3958ad0120c45a52846772767fd41685d94a66bdf8cda3e8",
                        "timestamp": "2021-12-04 10:15:39"
                    },
                    {
                        "value": "0b668d0ac89d5da1526be831f7b8c3f2af54c5dbc68c0c9ce886183ec518c051",
                        "timestamp": "2021-12-04 10:15:38"
                    },
                    {
                        "value": "9cd1d2966778231324af2e1a130634e3bbe816386d24fc50c3b538a022df2309",
                        "timestamp": "2021-12-04 10:15:36"
                    },
                    {
                        "value": "9c2b3a7c5abdcd9cfbafc27cddcdd4054cea214e15d3a1666cf407d2479a1f7e",
                        "timestamp": "2021-12-04 10:15:36"
                    },
                    {
                        "value": "ccdebe6b7d714001fcaffcb3fb7ed5751dfd23b764f041e90fd884149ea8994b",
                        "timestamp": "2021-12-04 10:15:34"
                    },
                    {
                        "value": "b3f1699b3093d1dae34efbef87c46fe5f7aea166bc53354e03302e1d7f5960ae",
                        "timestamp": "2021-12-04 10:15:33"
                    },
                    {
                        "value": "b0c53818b8f6bc8d654cece95065b63fb9e2161df763db0c4b5db61386535b97",
                        "timestamp": "2021-12-02 01:15:33"
                    },
                    {
                        "value": "b2480eed904e4058310d43f344e72ed5b59bb4d21b3291e4a19a087836af6131",
                        "timestamp": "2021-12-02 01:15:31"
                    },
                    {
                        "value": "7556175b377cfe5b37833e9b6fac77537795734ca45d392415d65f6f9700b739",
                        "timestamp": "2021-12-02 01:15:30"
                    },
                    {
                        "value": "0eed1017f4ab4c7870c86397ce7a946a94e63b69ec067bb337b2e7108327480b",
                        "timestamp": "2021-12-02 01:15:29"
                    },
                    {
                        "value": "4d249cc72c105eed117476e473d0eea672d72bc560a4e918c91f39220e119e9b",
                        "timestamp": "2021-12-02 01:15:28"
                    },
                    {
                        "value": "f7100a960178ce8ea4b3ca54340ab60211626b5384cb77c954fafc0608b286b9",
                        "timestamp": "2021-12-02 01:15:27"
                    },
                    {
                        "value": "bb162a452cff9d809fbf25c5079d89eb992d267ca9bc55e8a684adda6aaab752",
                        "timestamp": "2021-12-02 01:15:27"
                    },
                    {
                        "value": "250298a15ca5e40170a1feb8e639b12bbd591a448ebbfe5bc7574a1532596c46",
                        "timestamp": "2021-12-02 01:15:25"
                    },
                    {
                        "value": "9598a42fd97023e4de1fa70b2d5343f36e3ec509a740b1f17dddedd2d189a917",
                        "timestamp": "2021-12-01 22:03:00"
                    },
                    {
                        "value": "68b90031cf6d8870b5719281dbfd45c97db2b8b0e696ea5f997c8de57b54dd7f",
                        "timestamp": "2021-12-01 22:02:57"
                    },
                    {
                        "value": "df64338a90343f825fa5974e25994691e4c23583c6f9b4ce05b7da00a4a5a592",
                        "timestamp": "2021-12-01 22:02:56"
                    },
                    {
                        "value": "571643f0741f9f26094cd42879636d79a3a1b196ef560438a8f74877cfd106a4",
                        "timestamp": "2021-12-01 22:02:55"
                    },
                    {
                        "value": "68c8752d947c83bbbf1291676e0c0e192843b92c8abc17ed2722cf1cdb0175fe",
                        "timestamp": "2021-12-01 22:02:54"
                    },
                    {
                        "value": "3601f18238f48e931ae54a92d8fc208ae9ab8b2a75ed898c7712048abbc038b7",
                        "timestamp": "2021-12-01 22:02:53"
                    },
                    {
                        "value": "68a4a5059a69ae85ca2b89b7ed09e8e77d2b8d10e7d56d3137171be5482697da",
                        "timestamp": "2021-12-01 22:02:53"
                    },
                    {
                        "value": "1d1fc9d23aa14b4f484fb86c173c94084bc14a9f551747b6e06366649a229af5",
                        "timestamp": "2021-12-01 22:02:52"
                    },
                    {
                        "value": "c2d810f600468f91ed9331b4b869744109215b18839d4d93727509266fbf4965",
                        "timestamp": "2021-10-30 03:30:35"
                    },
                    {
                        "value": "b4d7eaf0f1d8e41010b0f31130fc977b88852d1a31243296b122acc6a255d027",
                        "timestamp": "2021-10-30 03:30:34"
                    },
                    {
                        "value": "9f1f637f5746983960594883af8120a45b73eef2bfc7750a502ee47ec97ed34b",
                        "timestamp": "2021-10-30 03:30:33"
                    },
                    {
                        "value": "df3c5225425e9dbf6ce583dcca5fdf255872a051214a520074c29a82edc2fa7f",
                        "timestamp": "2021-10-30 03:30:33"
                    },
                    {
                        "value": "355faa1b8f98124bfec75b6a2ef35483709124b81abcbb6784a3ae8657c05559",
                        "timestamp": "2021-10-29 21:30:32"
                    },
                    {
                        "value": "bd12cd27c1ce9f7c43ad069b21aca05d6510216d317371939b05429cdc850074",
                        "timestamp": "2021-10-29 21:30:31"
                    },
                    {
                        "value": "17bb183c9e8f262c2bd91228e788f4613279c795573b558c3981501ee02811ba",
                        "timestamp": "2021-10-29 21:30:30"
                    },
                    {
                        "value": "f9e631dd3b9e821e73e1303b23d478f0ecd685068a1b92a3d2158c4c459290bd",
                        "timestamp": "2021-10-29 21:30:30"
                    },
                    {
                        "value": "a811c4187d3965aaec46bc83dd0518e398412e9dfce8817cb03623e6afcdc4df",
                        "timestamp": "2021-10-29 19:15:30"
                    },
                    {
                        "value": "cfa7b4b4fc55791d6fe487f6945550af8b4e76b7642c417498ad519131c70e66",
                        "timestamp": "2021-10-29 19:15:29"
                    },
                    {
                        "value": "20725ee30e6dd4a06a4850bd364ef3dddbd3a0dfb8eda7ebe18eda719ce28383",
                        "timestamp": "2021-10-29 19:15:28"
                    },
                    {
                        "value": "3b7a0b9d932269850390271fe5e196d42175dc9d17c69e4764f00627c17e58d1",
                        "timestamp": "2021-10-29 19:15:27"
                    },
                    {
                        "value": "8920b1d5b8a3f73bb010cdd5014602e4d974f2d7ef3e63f25674be6b03a4b21e",
                        "timestamp": "2021-10-29 18:45:29"
                    },
                    {
                        "value": "d89b90bed3ca49a3110ab8abf95b27e42e87f31fa6427e32857f097da65c58ab",
                        "timestamp": "2021-10-29 18:45:28"
                    },
                    {
                        "value": "dfc50de58c6339e624b60a7e6d5bccc20297656cd80183379fac54f11b3e6f56",
                        "timestamp": "2021-10-29 18:45:27"
                    },
                    {
                        "value": "033247a6ba1cd0543f27857fb6743e16fdd2990cea1df3dce93e4031c8046d1a",
                        "timestamp": "2021-10-29 18:45:26"
                    },
                    {
                        "value": "8245ad87eea6a1f19f658adef8a30b9a512760d866b7075bbf205d7a54296234",
                        "timestamp": "2021-10-29 18:30:35"
                    },
                    {
                        "value": "812d78a50a8de210dbbce12fda210461770b8b928f8b3249de80ecb68055f61e",
                        "timestamp": "2021-10-29 18:30:34"
                    },
                    {
                        "value": "e3380dfdd6297ac134bb22c7c1603782f198a5b2164855bf66a95bae47ab472d",
                        "timestamp": "2021-10-29 18:30:34"
                    },
                    {
                        "value": "7eb03078f08f097b0eebc611ac1b3f6f443fac5abdfb8879175193aedf24d37b",
                        "timestamp": "2021-10-29 18:30:33"
                    },
                    {
                        "value": "807826439902361b977ad3bee1543028281dd3c770fc9f5cae22d6ad9d64040c",
                        "timestamp": "2021-10-28 15:30:58"
                    },
                    {
                        "value": "e24ffea81324b413a7c0a88944f9ab29b21eb654f18d19d2550ff03a641a03f2",
                        "timestamp": "2021-10-28 15:30:58"
                    },
                    {
                        "value": "cb8d611d3affda57cbf2989ca905e40a3e6f83a73b379f8dd40226f5922e29ca",
                        "timestamp": "2021-10-28 15:30:57"
                    },
                    {
                        "value": "aac7861a3beff9b0f769ecbf617ee8e4c44ff1bf077bbe266fc4fcfe5bf92703",
                        "timestamp": "2021-10-28 15:30:56"
                    },
                    {
                        "value": "1376f39af5a94cac87abe1e5a7628bd07f809cd9354e9be041a1d84b66ce07ec",
                        "timestamp": "2021-10-28 15:15:55"
                    },
                    {
                        "value": "396c019b85a69d08d25d4d9833e16d1c4885d45e650ecf3a04840c4a5827cea6",
                        "timestamp": "2021-10-28 15:15:54"
                    },
                    {
                        "value": "9c53ac5c4df5af245263ee0d01c159378b285911fe85e10b7669b9224570a5dd",
                        "timestamp": "2021-10-28 15:15:54"
                    },
                    {
                        "value": "fd4184b2cb4875c92b8b3fafea1cedf577cfb42c91dbf04b5e8c18a8ddeb385e",
                        "timestamp": "2021-10-28 15:15:53"
                    },
                    {
                        "value": "f8ee299b65b7ceb7ba4fbd5f278b6b7ed2e7638e47bdd3d423f3816e00be36ab",
                        "timestamp": "2021-10-28 11:30:27"
                    },
                    {
                        "value": "96ad89ff084cb88f1bd0bf8f104b744d9bf26157aa9f117851fdbfc2b20585c5",
                        "timestamp": "2021-10-28 11:30:26"
                    },
                    {
                        "value": "0eb418150a0eb83a63c7317021c86c3e108d46cc26cd81dfa9742bd81048528b",
                        "timestamp": "2021-10-28 11:30:25"
                    },
                    {
                        "value": "5d5aa3cac3c4da5cc59b50725ace09c310ee4531dff2a6ef53db573edd5bda6f",
                        "timestamp": "2021-10-28 11:30:25"
                    },
                    {
                        "value": "72691413d7d918f8064667bd71ac58a8e53244a137670353f66a727b5cc456d5",
                        "timestamp": "2021-10-25 21:00:27"
                    },
                    {
                        "value": "8b59d8f1ea4fb412eb2064b4243c6f2dcc4efd26b78e3eae92c9daf6f6a70b7b",
                        "timestamp": "2021-10-25 21:00:26"
                    },
                    {
                        "value": "63f81f8264b1f8339dd8f9d6403bcd6a36f4f84a88cc6318022654acc01a01de",
                        "timestamp": "2021-10-25 21:00:25"
                    },
                    {
                        "value": "ca763d1103d5ebac49227c2d3d872b6af4e87995c43e28413dfcbab60421bc4d",
                        "timestamp": "2021-10-25 21:00:25"
                    },
                    {
                        "value": "cb2b387be73bfa5c475812ee659bbd0ca28d5965459e789a4404971ab9d0f475",
                        "timestamp": "2021-09-30 22:15:31"
                    },
                    {
                        "value": "eb861c00b323f9ce68cd3a3616ba3fb16726c48ae8e3e997be011635b063255f",
                        "timestamp": "2021-09-30 22:15:31"
                    },
                    {
                        "value": "9beeb5317c5b0cdb9509cc44d0ef2969242f91ca803a7020d82c4f34ef81eb94",
                        "timestamp": "2021-09-30 22:15:30"
                    },
                    {
                        "value": "90a1610439ecb994b5319da18731d0fdcad2cbcde61472602b28e62e187596af",
                        "timestamp": "2021-09-30 22:15:29"
                    },
                    {
                        "value": "44e29e5cd002e8d4d4f13432847f38fa79a1667b5fdef9b9f316c3501f3bb480",
                        "timestamp": "2021-09-29 20:30:36"
                    },
                    {
                        "value": "1260d9363a7fde4d6a5196e4cf3a6027880d43f62b0bc798fbaf60664a19cf9b",
                        "timestamp": "2021-09-29 20:30:35"
                    },
                    {
                        "value": "538152a3c9f9473d34289f283d49ddac0a9f350fa5ea5b773bdae67dc2540a95",
                        "timestamp": "2021-09-29 20:30:34"
                    },
                    {
                        "value": "2d1fb22768db3209a6173ef7797b06491d8b8ea50896ded99bee0d69932fff0a",
                        "timestamp": "2021-09-29 20:30:34"
                    },
                    {
                        "value": "8cd8437429a62c8586f58046687af34d81b16d5b3b7bea3b30e15c51b6e4c40d",
                        "timestamp": "2021-09-29 06:00:26"
                    },
                    {
                        "value": "07635e09b07f448dae84a64557fbd6214ae2be52391ab67257fe53fb42fbb808",
                        "timestamp": "2021-09-29 06:00:26"
                    },
                    {
                        "value": "c5e41abe14036a3331b4bd9e3bb24be2424439a8030b8dfbe1a61a3da6482573",
                        "timestamp": "2021-09-29 06:00:25"
                    },
                    {
                        "value": "f5f9d1912e786c71c2d174f198266ad2566cdb7d3a3ac99923f7baec5ffba26e",
                        "timestamp": "2021-09-29 06:00:25"
                    },
                    {
                        "value": "c5e23e7b15649c2d49b797eba7d7b83c76d661603e1b4bde412185eac2b81982",
                        "timestamp": "2021-09-28 23:15:37"
                    },
                    {
                        "value": "d100e20b1a3508b4aed1b780dbf18456d101236252ebbeb523d37e06fe6e0bdf",
                        "timestamp": "2021-09-28 23:15:37"
                    },
                    {
                        "value": "d8a284e5c371dff9fc702a933d3b026793c78c0761409b1c6380c3d765223a40",
                        "timestamp": "2021-09-28 23:15:36"
                    },
                    {
                        "value": "665dc88a9cccd536d40ac75c3eb23de8d1d5e95aee504f0ce31f4b31db81d468",
                        "timestamp": "2021-09-28 23:15:35"
                    },
                    {
                        "value": "8e01a94d2adfe2ad30508d0d7520ce96c6af0f8c4688150685ec89718892df36",
                        "timestamp": "2021-09-14 10:45:26"
                    },
                    {
                        "value": "b6c17be1217d0c7690b20d1af1781be3212e6d8f22e42f6db816afab94ddb578",
                        "timestamp": "2021-09-14 10:45:25"
                    },
                    {
                        "value": "afaa11b12cc1099d4b34b55adc1c3c81a8eb15fc54a55932396b9c5c48f74a02",
                        "timestamp": "2021-09-14 10:45:24"
                    },
                    {
                        "value": "ff02d6252db9eadf3209d063f88f91e2f56e5a9314dc148cfa006c55be52a94f",
                        "timestamp": "2021-09-14 10:45:23"
                    },
                    {
                        "value": "a4e1e261305a4a3d1d297136709585c2d35d213b619df00550e130d6b339a9b6",
                        "timestamp": "2021-09-02 06:30:37"
                    },
                    {
                        "value": "ec6097c4fdbe0736e416b58be0a4dd042c46a9cf7eef997b3eb72384609cbca9",
                        "timestamp": "2021-09-02 06:30:37"
                    },
                    {
                        "value": "9f8d7e3b44c32ff75771c393dfe62445bba3e4ba71f46abddd30bc04411d1c18",
                        "timestamp": "2021-09-02 06:30:36"
                    },
                    {
                        "value": "61068eae718b84d4f7aa13a6ee241b82f2aff1df50ea1e282cc21dd63da9b6ad",
                        "timestamp": "2021-09-02 06:30:36"
                    },
                    {
                        "value": "c2e96510aea494637c03cf28729328fda3e5b35a7f8caebcbb61c3d059662b92",
                        "timestamp": "2021-08-30 19:30:33"
                    },
                    {
                        "value": "896cf72ed774ca49a761618b01c944fd5209163f549fed34c8a1bb1c56d65968",
                        "timestamp": "2021-08-30 19:30:33"
                    },
                    {
                        "value": "5001a149a78f550df482f8fc813bdce44acc58f3685885ddbf77a7b8c7d29ff1",
                        "timestamp": "2021-08-30 19:30:33"
                    },
                    {
                        "value": "2699a5b211ab5185c7ef711b1c5ac70b8f87307f275af55fd101d4af6c5035b0",
                        "timestamp": "2021-08-30 19:30:32"
                    },
                    {
                        "value": "ac16a832d3c4f995768338776119ae33b1bc98b4b526296dd4aee30875df4048",
                        "timestamp": "2021-08-30 13:45:31"
                    },
                    {
                        "value": "b57565bda77f674faee858ed5f3044217f813b60eea66cf1f74eaeda44c491e9",
                        "timestamp": "2021-08-30 13:45:30"
                    },
                    {
                        "value": "448abc3263c4e5614e08341ff43bf6ce74586704e3d22f30c9adb37d18970bf9",
                        "timestamp": "2021-08-30 13:45:29"
                    },
                    {
                        "value": "fc33e4d1677416655f286d09311ad94a0973ad3d3772ae1f419812149c633201",
                        "timestamp": "2021-08-30 13:45:29"
                    },
                    {
                        "value": "a86b2ff32083a16aec60b67de8ef56cff7f407ebf53d522045925d58360d9290",
                        "timestamp": "2021-08-30 08:15:31"
                    },
                    {
                        "value": "7ef786e13e1b563d70e7ea1be8f684ffc045552e0c3ef336183379c1f1749bf0",
                        "timestamp": "2021-08-30 08:15:30"
                    },
                    {
                        "value": "ff2ca9fb38b203bcb04d9e0a17392702f9401c4487b4623652cbae6371c1e00a",
                        "timestamp": "2021-08-30 08:15:30"
                    },
                    {
                        "value": "d8f45291f79a306cd0a1b29f32eaf460a570a21ebb1c5441260135e38df064d5",
                        "timestamp": "2021-08-30 08:15:29"
                    },
                    {
                        "value": "8341bd50fd0dbf0859d6c06159149ec1c268874f775dbe356514ad0a6f153416",
                        "timestamp": "2021-08-29 22:15:50"
                    },
                    {
                        "value": "d0b5930f4fa2a7e441fefb14cf1a3e3e09710bbeca84c848f2165622998f0409",
                        "timestamp": "2021-08-29 22:15:49"
                    },
                    {
                        "value": "a194f48fe6667798f39a391cb611b88aeba46e816d7a044c23f6875c8f258465",
                        "timestamp": "2021-08-29 22:15:49"
                    },
                    {
                        "value": "441e819c659c98850d8c9afe03bdf7f0626a3facbf6b13a4085c3a60fd6aa16c",
                        "timestamp": "2021-08-29 22:15:48"
                    },
                    {
                        "value": "b2b23ce90312c0223359a0676f587d7089616b987b8becb4935821ddd4863d07",
                        "timestamp": "2021-08-29 22:00:49"
                    },
                    {
                        "value": "76531f4b55bbce5bec8168ab2730a6db8aa39e6dbec6239ae4fb0d2a320a0df7",
                        "timestamp": "2021-08-29 22:00:48"
                    },
                    {
                        "value": "f5deb48df0324d5a7a5589e68f3fe022f7121adaba6242b79370828add6483dd",
                        "timestamp": "2021-08-29 22:00:48"
                    },
                    {
                        "value": "b80050a302c2b5b3697e8d05bb5c2ed80823b7d1c0fd4aaab7680fb3a48a3938",
                        "timestamp": "2021-08-29 22:00:47"
                    },
                    {
                        "value": "bd661447dea82aae5454a6ac903171ec6aa7a7aa84b4aa9ab684c517d959c2b9",
                        "timestamp": "2021-08-29 22:00:45"
                    },
                    {
                        "value": "cff537e4a1e866d2b159ba165511aafe2298aae94836b3165a2b42a1e7cf3de5",
                        "timestamp": "2021-08-29 22:00:44"
                    },
                    {
                        "value": "a92dbfd52b23a42020e4470ffa8b3dd1199acfad7a84dae298a047b904f31710",
                        "timestamp": "2021-08-29 22:00:44"
                    },
                    {
                        "value": "f6311d337efdc5c227febd1e8e36079b7cacf31aeebb5888aec2877bf3ee2f6a",
                        "timestamp": "2021-08-29 22:00:43"
                    },
                    {
                        "value": "db148eccfdeedddeca41eb2ac092db09e6c568b714e5f2d9b2560bf5b2551952",
                        "timestamp": "2021-08-29 20:45:41"
                    },
                    {
                        "value": "584c532790655a559ee84da2fd1e78fc6f1c462fa8cbbbfa078a71f0fb82baac",
                        "timestamp": "2021-08-29 20:45:41"
                    },
                    {
                        "value": "54d6373914f82ffa3742948c18b7c01a1239d91c29c977a6aaebf06513a71cee",
                        "timestamp": "2021-08-29 20:45:40"
                    },
                    {
                        "value": "8812bdd461d676c0c94fe7fe036f00ef89ba21fd4ad319861a38f4293827a127",
                        "timestamp": "2021-08-29 20:45:40"
                    },
                    {
                        "value": "0a3556b083ba2ccf0f5a37e24e4f9f566a4413b8b15a8067d8e53251b6fb6fb2",
                        "timestamp": "2021-08-29 19:30:39"
                    },
                    {
                        "value": "5fa8e4ab7070cbd43aa5bec05271f473e2bb674bc3019b3ab637ccbe584e75bc",
                        "timestamp": "2021-08-29 19:30:38"
                    },
                    {
                        "value": "4bd36b789602423d666b1479913bfbd5a32a8fcf20edb88ffad10ca4c1b90e38",
                        "timestamp": "2021-08-29 19:30:38"
                    },
                    {
                        "value": "defee7d59340525ac445ddacc6ce51a744043dd06601d5d94f16e163002c0890",
                        "timestamp": "2021-08-29 19:30:37"
                    },
                    {
                        "value": "1735c87e841c49c4ebd48dfae09a99ded4b072d904a265d6c1dcb8295c923145",
                        "timestamp": "2021-08-29 18:45:43"
                    },
                    {
                        "value": "ccf5459b5e233a04248467cc9e83bdc52fca12b3f093d8c8766af11c6cb351a0",
                        "timestamp": "2021-08-29 18:45:42"
                    },
                    {
                        "value": "96f8a3c0483dcd2723fcee7cd9ef8b6816661e29825c2d052657e83473da0653",
                        "timestamp": "2021-08-29 18:45:42"
                    },
                    {
                        "value": "a4f7f622e8685284b7f7058516bf5e224c7374018219ce9b87d1474ecab90f16",
                        "timestamp": "2021-08-29 18:45:41"
                    },
                    {
                        "value": "4df7b4094d45c57f52d78b39f953a51cc1e0f5fe7f19f739b39f17f09a1095a8",
                        "timestamp": "2021-08-28 23:00:52"
                    },
                    {
                        "value": "f500c5f2ef41c296869cef7d33ddb90449f8ebe703e7da2fc47726c7232ad10f",
                        "timestamp": "2021-08-28 23:00:52"
                    },
                    {
                        "value": "e90ba24b2c9d432993fd46a6d5008c4b6216e9c1db1a0f55dfeee0ceb1ecd712",
                        "timestamp": "2021-08-28 23:00:51"
                    },
                    {
                        "value": "fa1b0782ba561e7c093eae658614ce3f846cb6d57fd6454aea2246e141ec5242",
                        "timestamp": "2021-08-28 23:00:51"
                    },
                    {
                        "value": "b98a3bc2c67e51f9aaf3a5c75dfe552099c4c93086b5821494d1202201ae152d",
                        "timestamp": "2021-08-24 10:30:33"
                    },
                    {
                        "value": "ea676171b075a9382fbf7e8f8db12ab32b717bce2f0304958d4166c30b8831e0",
                        "timestamp": "2021-08-24 10:30:32"
                    },
                    {
                        "value": "572c9eb0fd660ca0385e9e85cc193b9b14847126f12d4de49e5990c16f0337ba",
                        "timestamp": "2021-08-24 10:30:32"
                    },
                    {
                        "value": "eadaf3f7c18b694c646b4e402388fb050e1188a3bb1b35367e62d214625fd06a",
                        "timestamp": "2021-08-24 10:30:31"
                    },
                    {
                        "value": "bafecb2ac5babb0d176722b04693d16b2345a9dc104573b21376ba6de29fb10f",
                        "timestamp": "2021-08-23 16:15:30"
                    },
                    {
                        "value": "226921e3bc7eaab8a476b393ff388103dc37e644ae410c4f5b5cc39e89f0b94b",
                        "timestamp": "2021-08-23 16:15:29"
                    },
                    {
                        "value": "d5ba57c3cd3f10ae9a818f119beb7581a9476ebc3251f26affe6c84938873f2a",
                        "timestamp": "2021-08-23 16:15:28"
                    },
                    {
                        "value": "e335beb935b38081fe344a7b68e9ce57e2103f9b04cf52b07eeee2c87f4b703b",
                        "timestamp": "2021-08-23 16:15:27"
                    },
                    {
                        "value": "871cb1560fe9f1d5a3ef8126d3ccd6e6a4678d7ce683a2fefaca28c217b684a2",
                        "timestamp": "2021-08-23 13:00:30"
                    },
                    {
                        "value": "73a03dfe6ff46aa1490f72f3b0e5f4886ffc5622d42acf4cc1ba0a706f6d04bd",
                        "timestamp": "2021-08-23 13:00:30"
                    },
                    {
                        "value": "f267c38c46d549c675acbbd6110fc9218b75fae795f0d6d96f4070d9b1173866",
                        "timestamp": "2021-08-23 13:00:29"
                    },
                    {
                        "value": "e0c69859dd0b972fe3b982924ad386eafdff569d49f3d285927edff317d9fa59",
                        "timestamp": "2021-08-23 13:00:29"
                    },
                    {
                        "value": "a8e530240a9a236bb845b0669be5152c7181cbc339e429afce602352740dc132",
                        "timestamp": "2021-08-23 10:00:35"
                    },
                    {
                        "value": "796d5fe3cd876abd58768649087f6d13060f19b2d05db4bf384d81af41317af2",
                        "timestamp": "2021-08-23 10:00:35"
                    },
                    {
                        "value": "bc48dc26e90b0a3c9a5d27433469e1e8937536933a30335c6ed266961b4f6bf9",
                        "timestamp": "2021-08-23 10:00:34"
                    },
                    {
                        "value": "360c061a7182082b34d86dd1bafabe6709102b52fe53f4ca357bfee053655d28",
                        "timestamp": "2021-08-23 10:00:34"
                    },
                    {
                        "value": "ae2ff88e2ad964e8dff6d14a2f183a1f4232020d678c0bc0e8043025f8d0f199",
                        "timestamp": "2021-08-23 06:30:31"
                    },
                    {
                        "value": "2986b153f303df1a988cd38960bfa289c0e329f51b7d45bc96de8e100ebd6449",
                        "timestamp": "2021-08-23 06:30:30"
                    },
                    {
                        "value": "0f5855a1d913aa4e43c39b76c1146f82ab68587b9d4843fcb45e78c1195f1cdb",
                        "timestamp": "2021-08-23 06:30:30"
                    },
                    {
                        "value": "9ecbf71bf0f2833437b61948eb635a404d5d835fadc13669ccc433bc6e9954c1",
                        "timestamp": "2021-08-23 06:30:29"
                    },
                    {
                        "value": "d8c3e8234a6a8de005a449a77e49ef5888645dfa5632ae9baff178e25ead31a3",
                        "timestamp": "2021-08-23 00:30:31"
                    },
                    {
                        "value": "3a45e96327700631693d230bbd9645588fde9f71c97f79fe57aedf62c1785f3b",
                        "timestamp": "2021-08-23 00:30:30"
                    },
                    {
                        "value": "e2f43ea5ea81b67dd888330c2a8f0790f7cbfe0065e612934c7c6f3f0f642bdf",
                        "timestamp": "2021-08-23 00:30:30"
                    },
                    {
                        "value": "156f593887f7c9fe2e4d888c88a3b895eed52c4795fe48db6ecc0696b54ffb49",
                        "timestamp": "2021-08-23 00:30:29"
                    },
                    {
                        "value": "ef3110c32598cce71686796503516b3dfd60590392991d5cce01dc9bb77e401f",
                        "timestamp": "2021-08-21 11:48:01"
                    },
                    {
                        "value": "05f2a5530c978ebaec2034ef6d4006b6c4a7d8fc38cb9050fb0aed955a391d79",
                        "timestamp": "2021-08-21 11:48:01"
                    },
                    {
                        "value": "93d9e351b653644e90b445c05b2ceeb1867dee267a9b50b0fe50c59989ea1a96",
                        "timestamp": "2021-08-21 11:48:00"
                    },
                    {
                        "value": "3af51acbfb38acd30eb0729958981e6f8fedd017d66f3bfbe7734baec0771df3",
                        "timestamp": "2021-08-21 11:48:00"
                    },
                    {
                        "value": "bfbb548566bc75f94c962158c80eb9efe67756481b20e6414df0e8a53d4b5617",
                        "timestamp": "2021-08-19 18:40:38"
                    },
                    {
                        "value": "79d3dc79c6a0ed7166a3a3c794d9ace731a5f81ed16414a2543a8f6e22a9466c",
                        "timestamp": "2021-08-19 18:40:37"
                    },
                    {
                        "value": "5c7f3fe22d1554c03155b9321538748fb2cfe50ee7f7a2ad168ccf7c5d8b7a65",
                        "timestamp": "2021-08-19 18:40:33"
                    },
                    {
                        "value": "863842faf56e4baa908875007919fae85b968d574453a72ccea51ef0c7b97342",
                        "timestamp": "2021-08-19 18:40:24"
                    },
                    {
                        "value": "21739a9f46d8fafe0dfff872e898ccc03ca2aa0c19398835e4452022ebc67778",
                        "timestamp": "2021-08-19 18:00:50"
                    },
                    {
                        "value": "f1741dbf298bf9fa3f22ce72a8648e82de66c775e6c2c7adb839e5628bb06637",
                        "timestamp": "2021-08-19 18:00:49"
                    },
                    {
                        "value": "5f29d0a0676c65adf00739e2160caaa3b2fb886cf5d0e4a9cb0db733fa19ae11",
                        "timestamp": "2021-08-19 18:00:48"
                    },
                    {
                        "value": "0e439b622658ab71228c7388ec456c7baf041046d7eff1a37bc9c02177c324ed",
                        "timestamp": "2021-08-19 18:00:36"
                    },
                    {
                        "value": "2f29d9be147b5e15c44251665f2a7befbfd789e149d50cc009e446fda7123db1",
                        "timestamp": "2021-08-19 17:00:35"
                    },
                    {
                        "value": "4b1304ead9aae8af61ce9dbf1cb9221c09c140c25bb4d452632c6fe081487e4c",
                        "timestamp": "2021-08-19 17:00:35"
                    },
                    {
                        "value": "23d94c5414f81f6736b4ddc3cdc26097fb66d839d00079aa1c87c40a7e726cf9",
                        "timestamp": "2021-08-19 17:00:35"
                    },
                    {
                        "value": "c60443835ec7a65835fd1df558ad51349645ff1c5848b2960483ccef7b31e11e",
                        "timestamp": "2021-08-19 17:00:34"
                    },
                    {
                        "value": "cd0533bf03f4c745412d8d4d6514ea0083de0293c0fafc9011979d88edb3fe57",
                        "timestamp": "2021-08-19 16:00:39"
                    },
                    {
                        "value": "adcf47719cc3a920071752b3564ca6dac1357bfbddac2d564881c80ccfb2dea0",
                        "timestamp": "2021-08-19 16:00:39"
                    },
                    {
                        "value": "300dacb4b2d8e80b33e03bfa5b15a1d6527b58de0c5719f5054b198041a7884b",
                        "timestamp": "2021-08-19 16:00:38"
                    },
                    {
                        "value": "fdf3ef0b3ac1d9ba9331e86fc8da42545d1fb69ceeca82c01ba176a835123d77",
                        "timestamp": "2021-08-19 16:00:38"
                    },
                    {
                        "value": "ffc8af4f8038096a6dc9e5ab5e9603462f32b27b39750583175cdd2140c15a88",
                        "timestamp": "2021-08-16 12:09:51"
                    },
                    {
                        "value": "4127aef9bfcaaa40f8098a6f5d78838c73fd0e8a1a9b5a2ca0922d46a66fe6fd",
                        "timestamp": "2021-08-16 12:09:51"
                    },
                    {
                        "value": "5dbaa9764f718173238384621fe6d19218f15c37089d95b002381a2077aa0fad",
                        "timestamp": "2021-07-23 23:01:03"
                    },
                    {
                        "value": "94c6f40a25f6a701fecd41cb58955e9f6cc9a6c5936d1f9be39955a10573bb60",
                        "timestamp": "2021-07-23 23:00:52"
                    },
                    {
                        "value": "553dc4c06cd2a8a13eebb90e6c2a9e7fc09a81858d7233199f0f03d2051bfb5f",
                        "timestamp": "2021-07-23 23:00:39"
                    },
                    {
                        "value": "3f709e0557c2959e98f136fafef99649b9d9133bafda66e909853e929d11f4ff",
                        "timestamp": "2021-07-23 23:00:31"
                    },
                    {
                        "value": "4194b8d83f6a72469c75a45c7fcfae079989a6883c9dd7dc124d800c57f6fe54",
                        "timestamp": "2021-07-18 17:30:33"
                    },
                    {
                        "value": "6bd20157eb146f12887ccb49fa09ac5b0c817983edc43ca1b665f17ad3ebfb25",
                        "timestamp": "2021-07-18 17:30:32"
                    },
                    {
                        "value": "4db35ea029c5e2d5073018bed89c24b0c4e54b831ff6d5ddf0e370b6289d3631",
                        "timestamp": "2021-07-18 17:30:32"
                    },
                    {
                        "value": "e0d2689187838a0ed1554907e3953e5f85e26b1a07da7dbb1477cbb5cc6689d6",
                        "timestamp": "2021-07-18 17:30:31"
                    },
                    {
                        "value": "2d495c79c56b525f230fbbb786d0b95ab3924dfcfc2ea3883882b257ab4263f3",
                        "timestamp": "2021-07-18 11:00:34"
                    },
                    {
                        "value": "a9f1fb265c7f7c554cd6ed69d919c43672e8119ae688c3f61a1ffab7d457cdfb",
                        "timestamp": "2021-07-18 11:00:34"
                    },
                    {
                        "value": "3fecba4ba5c6398cd9b2638f24625cae4f98b6315819b66cf247a6b8e1e8eda2",
                        "timestamp": "2021-07-18 11:00:33"
                    },
                    {
                        "value": "31422b061307e009869a40d0a36aeb3a19e20a45d80ef1ce245ad0bd7267af14",
                        "timestamp": "2021-07-18 11:00:33"
                    },
                    {
                        "value": "884a1949638e54c76eb0ee548d3a23b4ecf29aba47408564d379fb2dc6cdef92",
                        "timestamp": "2021-07-17 18:30:38"
                    },
                    {
                        "value": "a1b0074cbd56956cc94e6161361f8f7407075f2903d14d082c1006f411bec90a",
                        "timestamp": "2021-07-17 18:30:37"
                    },
                    {
                        "value": "8babde64a6d3b85c2c4315205ae58884ee01f6364477a777f09d5b9c3ceef2a6",
                        "timestamp": "2021-07-17 18:30:37"
                    },
                    {
                        "value": "7ac85575a5601ad9b71531eb84ada81207d07b29d8fe2e949d56222bd1594135",
                        "timestamp": "2021-07-17 18:30:36"
                    },
                    {
                        "value": "cfa44658173eb930058f3d9d584ca01dd6fe031f7606f84785bde0bf2331b13c",
                        "timestamp": "2021-07-05 06:30:30"
                    },
                    {
                        "value": "9989cfdd4f9b1c37cec7373607d42504ab88000cd382e2c479d623878c9630d2",
                        "timestamp": "2021-07-05 06:30:30"
                    },
                    {
                        "value": "1933726a919cc995c0c65b04278c945865a0c8abe0811702a9e35bf6c2dc1513",
                        "timestamp": "2021-07-05 06:30:29"
                    },
                    {
                        "value": "50980f7243ee469beb4013660e4facdab431e29a2de6646c004621144a6d8648",
                        "timestamp": "2021-07-05 06:30:29"
                    },
                    {
                        "value": "ab95f60e3b9a5ae697caf39684e4700ce5ce30bb1b4cd70c69e3a3f4d70057ab",
                        "timestamp": "2021-07-03 10:30:32"
                    },
                    {
                        "value": "fa07c8de6db23c1be2ee8da97c5621f7fc006469f84e2835195fc943de43d544",
                        "timestamp": "2021-07-03 10:30:32"
                    },
                    {
                        "value": "c206b1ee7cc6257e6e1f0f0ac468ca87feef0ff56dbf1428933e2e99c3898c35",
                        "timestamp": "2021-07-03 10:30:31"
                    },
                    {
                        "value": "b94a2a3b2f0f5de3a222f3efbcd52fac565f4d97069ec19fdcaeba676374558b",
                        "timestamp": "2021-07-03 10:30:31"
                    },
                    {
                        "value": "5ed5d0c108109f37d683bbfc81db522a2622269d9ef339b963cab3ca3974a517",
                        "timestamp": "2021-07-02 15:00:25"
                    },
                    {
                        "value": "64dafa5881bcefa4d85bab0264afdaaa21eab1efe27980485d6297432deb74e8",
                        "timestamp": "2021-07-02 15:00:25"
                    },
                    {
                        "value": "ab749e7cd59a78a07a9b31ecaac7ada27da490d97bbe62756c19baa96c64be07",
                        "timestamp": "2021-07-02 15:00:24"
                    },
                    {
                        "value": "28024ed87f6e08815fc91d00657dc29540cecc92e229584b37357357631420fb",
                        "timestamp": "2021-07-02 15:00:24"
                    },
                    {
                        "value": "87483d4bb3c1471ff52b52c8c1be35161f1bbbce07b1b8e321406849a01cdd59",
                        "timestamp": "2021-06-17 11:30:29"
                    },
                    {
                        "value": "2291c381b95d93e967ba019d4192b288192a0bdaab73e9e4e84c096ee4e155eb",
                        "timestamp": "2021-06-17 11:30:29"
                    },
                    {
                        "value": "1ea8f2d4d3d492c81196be4024509fdeaf8e8f0b8ae129f10339f1277d3c4ba5",
                        "timestamp": "2021-06-17 11:30:29"
                    },
                    {
                        "value": "5d548f5d5a914c06d66bee886ceba6c9b5b29388e531912f5fa13932347414c5",
                        "timestamp": "2021-06-17 11:30:28"
                    },
                    {
                        "value": "4047099fa48723c13197f32b1b1c4ca5c450231d1bf8b693df939eb16363f4b0",
                        "timestamp": "2021-06-13 14:30:30"
                    },
                    {
                        "value": "8671fdd17b267316b996ef4bfce2416f7709947499266205175160a68dc18565",
                        "timestamp": "2021-06-13 14:30:30"
                    },
                    {
                        "value": "70e80d25b4e643406dac611e08a23bfabae754731d533584101ffa7bb62bd273",
                        "timestamp": "2021-06-13 14:30:29"
                    },
                    {
                        "value": "8ad41cf1697af8378f02c7ef5abc51949261c1363f2aa07e4cd99fde6b869690",
                        "timestamp": "2021-06-13 14:30:29"
                    },
                    {
                        "value": "0e4427e2c10f64e94a41207a5425ba0ff45586c6e41717acf5e5f3c245483fc8",
                        "timestamp": "2021-06-13 13:00:31"
                    },
                    {
                        "value": "61b0bd1ab9b0a73d137969f4e4c85f8eacd33fb7c19a6ee49cc91817459c4fd4",
                        "timestamp": "2021-06-13 13:00:30"
                    },
                    {
                        "value": "2f91b8e2182acf4c87d87dba5a5f8b38daa57059025883251eedae6d64c8888e",
                        "timestamp": "2021-06-13 13:00:30"
                    },
                    {
                        "value": "87178907c9c47a383a2a08a30481dbc5345b6c85c48142a855900d9840e6b6da",
                        "timestamp": "2021-06-13 13:00:30"
                    },
                    {
                        "value": "d04ec4f0546f476d13d8ac05da68cd58c395c93e13c83eb8c5f44ed273064bb6",
                        "timestamp": "2021-05-29 20:00:30"
                    },
                    {
                        "value": "4b35e842ea095ce89d2511a42ff958635cd653d8d25c1b30de9a315c1de49144",
                        "timestamp": "2021-05-29 20:00:30"
                    },
                    {
                        "value": "1fc06bd9481962d392a251f6fcc139e265261611ce36aebdc3155c3446218ade",
                        "timestamp": "2021-05-29 20:00:30"
                    },
                    {
                        "value": "b232ce459cc455b83776f73ec9d933fd03fd6797f59ea2b36190ceb1d559637f",
                        "timestamp": "2021-05-29 20:00:30"
                    },
                    {
                        "value": "706ace133ec546df3aebe4ca0ca927ee1f3059e570cea2e8f6e98e77882f8745",
                        "timestamp": "2021-05-06 09:00:29"
                    },
                    {
                        "value": "3a7809920592be114483fe7f764f4ce9c48f6c7bc1ed578f7b8a5f2130488810",
                        "timestamp": "2021-05-06 09:00:29"
                    },
                    {
                        "value": "4b06edb1a0cc2eee860d84877f27185bd2ff944f4817600a57d8a235d2596be6",
                        "timestamp": "2021-05-06 09:00:28"
                    },
                    {
                        "value": "45681b9a449a519ce7f6e203ed6c8b183bc00e594dd603aa37a38aded60358c2",
                        "timestamp": "2021-05-06 09:00:28"
                    },
                    {
                        "value": "c14ea29de50a8295487fea090d9313dfff27bd3c30b67b82e5d2634dc30ce738",
                        "timestamp": "2021-05-01 10:54:59"
                    },
                    {
                        "value": "78322121578342e588375350f56edb5e0a6d4b889c6425814590afd1a967e650",
                        "timestamp": "2021-04-28 21:30:26"
                    },
                    {
                        "value": "76f6c712403a2f6213390ab2a72a82c98c9c48e1b1bde182aa5932bd02a06d43",
                        "timestamp": "2021-04-28 21:30:26"
                    },
                    {
                        "value": "b5a399c0ea40983abc68b828ccb14efde2db90c047bbfba9ae418317ce7f036d",
                        "timestamp": "2021-04-28 21:30:26"
                    },
                    {
                        "value": "43bdcdd2c6dda95363575bd475b28c3a2f80d16900177404ce8dc5981848890e",
                        "timestamp": "2021-04-28 21:30:26"
                    },
                    {
                        "value": "d60c34a516621348b92917e01675161a7d6c0b81ab30df97af8e9d659b119468",
                        "timestamp": "2021-04-27 07:30:27"
                    },
                    {
                        "value": "2b0cfb46b5c4981f267b7208192bf443a082920f2625ba09a7e929e743aa655a",
                        "timestamp": "2021-04-27 07:30:27"
                    },
                    {
                        "value": "a4c29bcbd40e822f69121a1c57b72181442b58f46d264e648db60ebe5cff5155",
                        "timestamp": "2021-04-27 07:30:27"
                    },
                    {
                        "value": "7788316d7c265de3857cd869311e3227bad84465e2ae93f95fa5eeada4bdddd0",
                        "timestamp": "2021-04-27 07:30:27"
                    },
                    {
                        "value": "37ad471d4b3ea1644bb111bacdf6306189214c900ee8882c3b85cab7d5a67351",
                        "timestamp": "2021-04-23 10:30:37"
                    },
                    {
                        "value": "27827f967263dcfbf641181a41616059460ae80143b8fab6e95c86d083165e01",
                        "timestamp": "2021-04-23 10:30:37"
                    },
                    {
                        "value": "e48b0bb45e5d14205b15df2c70e26464d1d34f45010da3dc03ff64da70173541",
                        "timestamp": "2021-04-23 10:30:37"
                    },
                    {
                        "value": "8dcff89d52aa29ca533980addb562e821fa2d5d0140e723ae28111d9d1b1f9b9",
                        "timestamp": "2021-04-23 10:30:37"
                    },
                    {
                        "value": "978d1d6690e83f0508a551f8b469159f3d6ac908e081a33f6c9b632e8ab5e433",
                        "timestamp": "2021-04-12 20:30:27"
                    },
                    {
                        "value": "2ca400a06037c9a9ea1e60c1cb577aad185efe8e184f6d44482c480b616d54d7",
                        "timestamp": "2021-04-12 20:30:27"
                    },
                    {
                        "value": "98d1aae2b75e1bc8086558b25489e6a808ecb1cbd361b2ddd9cc8c8ac6d7f03b",
                        "timestamp": "2021-04-12 20:30:27"
                    },
                    {
                        "value": "3d7809d9eeab2b8d49967222cbed7962af14643472238fa9da69b035604bf9fe",
                        "timestamp": "2021-04-12 20:30:27"
                    },
                    {
                        "value": "a4fc3473070e7f587dbfec7574d0ca62765d002cce206903a5762e68ef736945",
                        "timestamp": "2021-04-06 13:13:01"
                    },
                    {
                        "value": "7556cf0e493326eeb0c961024563f76ddc964c57c99cab9c882e076e519c8ac8",
                        "timestamp": "2021-04-06 13:13:01"
                    },
                    {
                        "value": "557eb468e44b426128aa36568545b94f72a8a027aa4034ebd49cd9c45ae18ce3",
                        "timestamp": "2021-04-06 13:13:01"
                    },
                    {
                        "value": "adf16f6cc8d86339b88db357b9ce7698b8ccecafa0ec6ed4bf301034298bf8a8",
                        "timestamp": "2021-03-24 22:00:38"
                    },
                    {
                        "value": "b59b2737fe83fe291994c4ef3fc66fe21ece2da3fdc93398c05776c5c5ae9165",
                        "timestamp": "2021-03-24 22:00:38"
                    },
                    {
                        "value": "1fd2fea9be9e340bbb29e0b3370bbcf698df3e4bd1ffcdb41778d79c6357fd1e",
                        "timestamp": "2021-03-24 22:00:38"
                    },
                    {
                        "value": "4697e396aed0f62c7299a15b42a6809a5f4ab95378a3a4bb07d5a0599646876d",
                        "timestamp": "2021-03-24 22:00:38"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "5e7b31ef4be668d9d7586d5d0e75a49b",
                        "timestamp": "2023-02-22 08:05:03"
                    },
                    {
                        "value": "2067fca42df57e725aa6e0d4fd851533",
                        "timestamp": "2023-02-22 07:54:23"
                    },
                    {
                        "value": "3bb17138f075edbb3c7ff1ae371378ea",
                        "timestamp": "2023-02-04 06:45:09"
                    },
                    {
                        "value": "1b43fc5f83167e3ed72de7461fb2eb30",
                        "timestamp": "2023-01-01 12:45:09"
                    },
                    {
                        "value": "875a57a33e01873ee9c566882252f2f9",
                        "timestamp": "2023-01-01 02:43:19"
                    },
                    {
                        "value": "bdcb6fd328b0c7e776bf5ed4dd3c0b6e",
                        "timestamp": "2022-11-25 06:01:37"
                    },
                    {
                        "value": "3b73a7836ad74f3935bbf484f0e52ad6",
                        "timestamp": "2022-11-25 00:05:30"
                    },
                    {
                        "value": "e56bdbd3bbf16c712fd3964d47a2284d",
                        "timestamp": "2022-11-17 00:02:31"
                    },
                    {
                        "value": "432c4e1f72cb160beceac60a75add7fc",
                        "timestamp": "2022-11-03 06:01:15"
                    },
                    {
                        "value": "f10db6d71da6f740bfe904a3186dc536",
                        "timestamp": "2021-07-03 19:11:00"
                    },
                    {
                        "value": "6ee6360780735d4be90b6eb64df15a56",
                        "timestamp": "2021-05-01 10:55:29"
                    },
                    {
                        "value": "49e8d6042f36db9172e722e34b38cb8d",
                        "timestamp": "2021-03-15 12:14:13"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "74b8352d724cf8757f646042cbc3e9339e09c193",
                        "timestamp": "2021-05-01 10:56:20"
                    }
                ],
                "sha3_384_hash": [
                    {
                        "value": "49429eceb323f9cb6c428873104047860205bc5a50c0cb91c3e74bf491f86af28e57ad9a864a471e19c9a3f773dd3d58",
                        "timestamp": "2021-05-01 10:55:56"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-12-01 17:36:15",
    "file_name": "amadey",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://embee-research.ghost.io/combining-pivot-points-to-identify-malware-infrastructure-redline-smokeloader-and-cobalt-strike/",
            "date": "2023-11-19",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "Combining Pivot Points to Identify Malware Infrastructure - Redline, Smokeloader and Cobalt Strike",
            "categories": [
                "Amadey",
                "Cobalt Strike",
                "RedLine Stealer",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://bitsight.com/blog/unveiling-socks5systemz-rise-new-proxy-service-privateloader-and-amadey",
            "date": "2023-11-02",
            "organization": "BitSight",
            "author": "BitSight",
            "title": "Unveiling Socks5Systemz: The Rise of a New Proxy Service via PrivateLoader and Amadey",
            "categories": [
                "Amadey",
                "PrivateLoader",
                "Socks5 Systemz"
            ]
        },
        {
            "data_url": "https://www.bitsight.com/blog/unveiling-socks5systemz-rise-new-proxy-service-privateloader-and-amadey",
            "date": "2023-11-02",
            "organization": "BitSight",
            "author": "BitSight",
            "title": "Unveiling Socks5Systemz: The Rise of a New Proxy Service via PrivateLoader and Amadey",
            "categories": [
                "Amadey",
                "PrivateLoader",
                "Socks5 Systemz"
            ]
        },
        {
            "data_url": "https://www.rapid7.com/blog/post/2023/08/31/fake-update-utilizes-new-idat-loader-to-execute-stealc-and-lumma-infostealers/",
            "date": "2023-08-31",
            "organization": "Rapid7 Labs",
            "author": "Natalie Zargarov",
            "title": "Fake Update Utilizes New IDAT Loader To Execute StealC and Lumma Infostealers",
            "categories": [
                "FAKEUPDATES",
                "Amadey",
                "IDAT Loader",
                "Lumma Stealer",
                "SectopRAT"
            ]
        },
        {
            "data_url": "https://github.com/muha2xmad/Python/blob/bdc7a711d5a775f8ae47b591f20fdd2e1360b77b/Amadey/amadey_config_extractor.ipynb",
            "date": "2023-08-10",
            "organization": "Github (muha2xmad)",
            "author": "Muhammad Hasan Ali",
            "title": "Amadey configuration extractor",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://github.com/muha2xmad/Python/blob/bdc7a711d5a775f8ae47b591f20fdd2e1360b77b/Amadey/amadey_string_decryptor.py",
            "date": "2023-08-10",
            "organization": "Github (muha2xmad)",
            "author": "Muhammad Hasan Ali",
            "title": "Amadey string decryptor",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/amadey-threat-analysis-and-detections.html",
            "date": "2023-07-25",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Amadey Threat Analysis and Detections",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://embee-research.ghost.io/shodan-censys-queries/",
            "date": "2023-06-08",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "Practical Queries for Identifying Malware Infrastructure: An informal page for storing Censys/Shodan queries",
            "categories": [
                "Amadey",
                "AsyncRAT",
                "Cobalt Strike",
                "QakBot",
                "Quasar RAT",
                "Sliver",
                "solarmarker"
            ]
        },
        {
            "data_url": "https://embee-research.ghost.io/amadey-bot-infrastructure/",
            "date": "2023-05-19",
            "organization": "Twitter (@embee_research)",
            "author": "Embee_research",
            "title": "Analysis of Amadey Bot Infrastructure Using Shodan",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/chain-reaction-rokrats-missing-link/",
            "date": "2023-05-01",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "Chain Reaction: RokRAT's Missing Link",
            "categories": [
                "Amadey",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q1%20Botnet%20Threat%20Update.pdf",
            "date": "2023-04-12",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q1 2023",
            "categories": [
                "FluBot",
                "Amadey",
                "AsyncRAT",
                "Aurora",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Emotet",
                "IcedID",
                "ISFB",
                "NjRAT",
                "QakBot",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Tofsee",
                "Vidar"
            ]
        },
        {
            "data_url": "https://embee-research.ghost.io/redline-stealer-basic-static-analysis-and-c2-extraction/",
            "date": "2023-04-10",
            "organization": "Twitter (@embee_research)",
            "author": "Matthew",
            "title": "Redline Stealer - Static Analysis and C2 Extraction",
            "categories": [
                "Amadey",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://thecyberexpress.com/amadey-botnet-back-via-phishing-sites/",
            "date": "2023-01-27",
            "organization": "cyble",
            "author": "The Cyber Express",
            "title": "Old Bot in New Bottle: Amadey Botnet Back in Action Via Phishing Sites",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2023/01/25/the-rise-of-amadey-bot-a-growing-concern-for-internet-security/",
            "date": "2023-01-25",
            "organization": "cyble",
            "author": "Cyble",
            "title": "The Rise of Amadey Bot: A Growing Concern for Internet Security",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/44504/",
            "date": "2022-12-22",
            "organization": "AhnLab",
            "author": "Sanseo",
            "title": "Nitol DDoS Malware Installing Amadey Bot",
            "categories": [
                "Amadey",
                "Nitol"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/41450/",
            "date": "2022-11-08",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "LockBit 3.0 Being Distributed via Amadey Bot",
            "categories": [
                "Amadey",
                "Gandcrab",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/seychelles-seychelles-on-the-c-2-shore",
            "date": "2022-09-29",
            "organization": "Team Cymru",
            "author": "S2 Research Team",
            "title": "Seychelles, Seychelles, on the C(2) Shore: An overview of a bulletproof hosting provider named ELITETEAM.",
            "categories": [
                "Amadey",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/07/smokeloader-malware-used-to-augment-amadey-infostealer",
            "date": "2022-07-29",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "SmokeLoader Malware Used to Augment Amadey Infostealer",
            "categories": [
                "Amadey",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/36634/",
            "date": "2022-07-21",
            "organization": "AhnLab",
            "author": "ASEC",
            "title": "Amadey Bot Being Distributed Through SmokeLoader",
            "categories": [
                "Amadey",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/05/dot-net-stubs-sowing-the-seeds-of-discord",
            "date": "2022-05-19",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": ".NET Stubs: Sowing the Seeds of Discord (PureCrypter)",
            "categories": [
                "Aberebot",
                "AbstractEmu",
                "AdoBot",
                "404 Keylogger",
                "Agent Tesla",
                "Amadey",
                "AsyncRAT",
                "Ave Maria",
                "BitRAT",
                "BluStealer",
                "Formbook",
                "LimeRAT",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "Orcus RAT",
                "Quasar RAT",
                "Raccoon",
                "RedLine Stealer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/04/20/malware-pers-1.html",
            "date": "2022-04-20",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 1. Registry run keys. C++ example.",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "BlackEnergy",
                "Cobian RAT",
                "COZYDUKE",
                "Emotet",
                "Empire Downloader",
                "Kimsuky"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/conti-leaks-examining-the-panama-papers-of-ransomware.html",
            "date": "2022-03-31",
            "organization": "Trellix",
            "author": "John Fokker",
            "title": "Conti Leaks: Examining the Panama Papers of Ransomware",
            "categories": [
                "LockBit",
                "Amadey",
                "Buer",
                "Conti",
                "IcedID",
                "LockBit",
                "Mailto",
                "Maze",
                "PhotoLoader",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/underminer-exploit-kit-the-more-you-check-the-more-evasive-you-become",
            "date": "2021-11-02",
            "organization": "Minerva",
            "author": "Natalie Zargarov",
            "title": "Underminer Exploit Kit: The More You Check The More Evasive You Become",
            "categories": [
                "Amadey",
                "Oski Stealer",
                "RedLine Stealer",
                "UnderminerEK"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2021/09/06/simple-malware-av-evasion-2.html",
            "date": "2021-09-06",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "AV engines evasion for C++ simple malware: part 2",
            "categories": [
                "Agent Tesla",
                "Amadey",
                "Anchor",
                "AnchorMTea",
                "Carbanak",
                "Carberp",
                "Cardinal RAT",
                "Felixroot",
                "Konni",
                "Loki Password Stealer (PWS)",
                "Maze"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/08/raccoon-and-amadey-install-servhelper.html",
            "date": "2021-08-12",
            "organization": "Cisco Talos",
            "author": "Vanja Svajcer",
            "title": "Signed MSI files, Raccoon and Amadey are used for installing ServHelper RAT",
            "categories": [
                "Amadey",
                "Raccoon",
                "ServHelper"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/amadey-stealer-plugin-adds-mikrotik-and-outlook-harvesting-518efe724ce4",
            "date": "2021-07-08",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Amadey stealer plugin adds Mikrotik and Outlook harvesting",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/paas-or-how-hackers-evade-antivirus-software/",
            "date": "2021-04-12",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "PaaS, or how hackers evade antivirus software",
            "categories": [
                "Amadey",
                "Bunitu",
                "Cerber",
                "Dridex",
                "ISFB",
                "KPOT Stealer",
                "Mailto",
                "Nemty",
                "Phobos",
                "Pony",
                "Predator The Thief",
                "QakBot",
                "Raccoon",
                "RTM",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/27264",
            "date": "2021-03-31",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Xavier Mertens",
            "title": "Quick Analysis of a Modular InfoStealer",
            "categories": [
                "Amadey"
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
            "data_url": "https://maxkersten.nl/binary-analysis-course/analysis-scripts/ghidra-script-to-decrypt-strings-in-amadey-1-09/",
            "date": "2021-02-09",
            "organization": "Max Kersten's Blog",
            "author": "Max Kersten",
            "title": "Ghidra script to decrypt strings in Amadey 1.09",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://www.anquanke.com/post/id/230116",
            "date": "2021-02-01",
            "organization": "Microstep Intelligence Bureau",
            "author": "Microstep online research response team",
            "title": "Analysis of the attack activity organized by Konni APT using the topic of North Korean epidemic materials as bait",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://medium.com/csis-techblog/gcleaner-garbage-provider-since-2019-2708e7c87a8a",
            "date": "2021-01-18",
            "organization": "Medium csis-techblog",
            "author": "Beno\u00eet Ancel",
            "title": "GCleaner \u2014 Garbage Provider Since 2019",
            "categories": [
                "Amadey",
                "Ficker Stealer",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "STOP"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-006.pdf",
            "date": "2020-06-22",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "\u00c9volution De Lactivit\u00e9 du Groupe Cybercriminel TA505",
            "categories": [
                "Amadey",
                "AndroMut",
                "Bart",
                "Clop",
                "Dridex",
                "FlawedGrace",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Jaff",
                "Locky",
                "Marap",
                "Philadephia Ransom",
                "QuantLoader",
                "Scarab Ransomware",
                "SDBbot",
                "ServHelper",
                "Silence",
                "tRat",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-s-box-of-chocolate-597672",
            "date": "2020-03-26",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "TA505's Box of Chocolate - On Hidden Gems packed with the TA505 Packer",
            "categories": [
                "Amadey",
                "Azorult",
                "Clop",
                "FlawedGrace",
                "Get2",
                "SDBbot",
                "Silence",
                "TinyMet",
                "TA505"
            ]
        },
        {
            "data_url": "https://www.fsec.or.kr/common/proc/fsec/bbs/163/fileDownLoad/2297.do",
            "date": "2020-02-28",
            "organization": "Financial Security Institute",
            "author": "Financial Security Institute",
            "title": "Profiling of TA505 Threat Group That Continues to Attack the Financial Sector",
            "categories": [
                "Amadey",
                "Clop",
                "FlawedAmmyy",
                "Rapid Ransom",
                "SDBbot",
                "TinyMet"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/the-hole-in-the-bucket-attackers-abuse-bitbucket-to-deliver-an-arsenal-of-malware",
            "date": "2020-02-05",
            "organization": "Cybereason",
            "author": "Lior Rochberger",
            "title": "The Hole in the Bucket: Attackers Abuse Bitbucket to Deliver an Arsenal of Malware",
            "categories": [
                "Amadey",
                "Azorult",
                "Predator The Thief",
                "STOP",
                "Vidar"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2020/01/threat-spotlight-amadey-bot",
            "date": "2020-01-08",
            "organization": "Blackberry",
            "author": "Masaki Kasuya",
            "title": "Threat Spotlight: Amadey Bot Targets Non-Russian Users",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2019/04/Analyzing-amadey.html",
            "date": "2019-04-27",
            "organization": "nao_sec",
            "author": "nao_sec",
            "title": "Analyzing Amadey",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://krabsonsecurity.com/2019/02/13/analyzing-amadey-a-simple-native-malware/",
            "date": "2019-02-13",
            "organization": "KrabsOnSecurity",
            "author": "Mr. Krabs",
            "title": "Analyzing Amadey \u2013 a simple native malware",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://twitter.com/0xffff0800/status/1062948406266642432",
            "date": "2018-11-14",
            "organization": "Twitter (@0xffff0800)",
            "author": "0xffff0800",
            "title": "Tweet on Amadey C2",
            "categories": [
                "Amadey"
            ]
        },
        {
            "data_url": "https://twitter.com/ViriBack/status/1062405363457118210",
            "date": "2018-11-13",
            "organization": "Twitter (@ViriBack)",
            "author": "Dee",
            "title": "Tweet on Amadey Malware",
            "categories": [
                "Amadey"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "amadey",
            "procedure_code": "s1025",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1025",
            "techniques": [
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
                    "procedure_description": "amadey has used a variety of windows api calls, including getcomputernamea, getusernamea, and createprocessa.[16]"
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
                    "procedure_description": "amadey has changed the startup folder to the one containing its executable by overwriting the registry keys.[10][11]"
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
                    "procedure_description": "amadey has changed the startup folder to the one containing its executable by overwriting the registry keys.[10][11]"
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
                    "procedure_description": "amadey has decoded antivirus name strings.[7]"
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
                    "procedure_description": "amadey has overwritten registry keys for persistence.[9]"
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
                    "procedure_description": "amadey has obfuscated strings such as antivirus vendor names, domains, files, and others.[13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/005",
                    "technique_name": "subvert trust controls : mark-of-the-web bypass",
                    "technique_description": "adversaries may abuse specific file formats to subvert mark-of-the-web (motw) controls. in windows, when files are downloaded from the internet, they are tagged with a hidden ntfs alternate data stream (ads) named zone.identifier with a specific value known as the motw. files that are tagged with motw are protected and cannot perform certain actions. for example, starting in ms office 10, if a ms office file has the motw, it will open in protected view. executables tagged with the motw will be processed by windows defender smartscreen that compares files with an allowlist of well-known executables. if the file is not known/trusted, smartscreen will prevent the execution and warn the user not to run it.",
                    "procedure_description": "amadey has modified the :zone.identifier in the ads area to zero.[5]"
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
                    "procedure_description": "amadey has searched for folders associated with antivirus software.[8]"
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
                    "procedure_description": "amadey has checked for a variety of antivirus products.[5][6]"
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
                    "procedure_description": "amadey has collected the computer name and os version from a compromised machine.[15][16]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614",
                    "technique_link": "https://attack.mitre.org/techniques/T1614",
                    "technique_name": "system location discovery",
                    "technique_description": "adversaries may gather information in an attempt to calculate the geographical location of a victim host. adversaries may use the information from system location discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "amadey does not run any tasks or install additional malware if the victim machine is based in russia.[7]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "amadey can identify the ip address of a victim machine.[11]"
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
                    "procedure_description": "amadey has collected the user name from a compromised host using getusernamea.[8]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "amadey can collect information from a compromised host.[3]"
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
                    "procedure_description": "amadey has used http for c2 communications.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/001",
                    "technique_name": "dynamic resolution : fast flux dns",
                    "technique_description": "adversaries may use fast flux dns to hide a command and control channel behind an array of rapidly changing ip addresses linked to a single domain resolution. this technique uses a fully qualified domain name, with multiple ip addresses assigned to it which are swapped with high frequency, using a combination of round robin ip addressing and short time-to-live (ttl) for a dns resource record.",
                    "procedure_description": "amadey has used fast flux dns for its c2.[4]"
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
                    "procedure_description": "amadey can download and execute files to further infect a host machine with additional malware.[9]"
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
                    "procedure_description": "amadey has sent victim data to its c2 servers.[2]"
                }
            ]
        }
    ]
};