var threatdata = {
    "name": "LokiBot",
    "alias": "LokiBot, Loki, LokiPWS, Loki.Rat, ForeIT",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Info stealer, Credential stealer, Loader",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "LokiBot",
        "names": [
            {
                "name": "LokiBot"
            },
            {
                "name": "Loki"
            },
            {
                "name": "LokiPWS"
            },
            {
                "name": "Loki.Rat"
            },
            {
                "name": "ForeIT"
            }
        ],
        "description": "(Accenture) Loki Bot is a resident loader, and password and cryptocurrency wallet stealer. Loki Bot captures passwords from browsers, as well as e-mail, FTP, SSH and poker clients.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer",
            "Loader"
        ],
        "information": [
            "https://www.accenture.com/_acnmedia/pdf-107/accenture-security-cyber.pdf",
            "https://www.threatfabric.com/blogs/lokibot_the_first_hybrid_android_malware.html",
            "https://isc.sans.edu/diary/24372",
            "https://github.com/R3MRUM/loki-parse",
            "http://www.malware-traffic-analysis.net/2017/06/12/index.html",
            "https://www.lastline.com/blog/password-stealing-malware-loki-bot/",
            "https://blog.fortinet.com/2017/05/17/new-loki-variant-being-spread-via-pdf-file",
            "http://blog.fernandodominguez.me/lokis-antis-analysis/",
            "https://phishme.com/loki-bot-malware/",
            "https://researchcenter.paloaltonetworks.com/2018/08/unit42-gorgon-group-slithering-nation-state-cybercrime/",
            "https://r3mrum.wordpress.com/2017/05/07/loki-bot-atrifacts/",
            "https://securelist.com/loki-bot-stealing-corporate-passwords/87595/",
            "https://cysinfo.com/nefarious-macro-malware-drops-loki-bot-across-gcc-countries/",
            "https://github.com/d00rt/hijacked_lokibot_version/blob/master/doc/LokiBot_hijacked_2018.pdf",
            "https://www.sans.org/reading-room/whitepapers/malicious/loki-bot-information-stealer-keylogger-more-37850",
            "https://us-cert.cisa.gov/ncas/alerts/aa20-266a",
            "https://blog.talosintelligence.com/2021/01/a-deep-dive-into-lokibot-infection-chain.html",
            "https://www.trendmicro.com/en_us/research/21/h/new-campaign-sees-lokibot-delivered-via-multiple-methods.html",
            "https://www.fortinet.com/blog/threat-research/lokibot-targets-microsoft-office-document-using-vulnerabilities-and-macros"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0447/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.lokibot",
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.loki",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lokipws"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:LokiBot"
        ],
        "uuid": "f37100e9-04b8-40ff-a39c-fe1d24a814cc",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "LokiBot",
            "malware_alias": null,
            "malware": "apk.lokibot",
            "last_update": "2023-09-11 08:51:44",
            "tags": [
                "Lokibot",
                "exe",
                "panel",
                "reverse",
                "c2",
                "upsidown",
                "lokibot"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "https://collins.solariseng.icu/_errorpages/collins/five/PvqDq929BSx_A_D_M1n_a.php",
                        "timestamp": "2023-09-11 08:51:44"
                    },
                    {
                        "value": "http://vmopahtqdf84hfvsqepalcbcch63gdyvah.ml/BN5/fre.php",
                        "timestamp": "2022-07-30 05:40:35"
                    },
                    {
                        "value": "http://192.3.122.162/50/vbc.exe",
                        "timestamp": "2022-07-30 05:40:03"
                    },
                    {
                        "value": "http://103.99.0.198/clouddoc/.wininit.exe",
                        "timestamp": "2022-05-08 23:05:34"
                    },
                    {
                        "value": "http://107.174.138.181/113/vbc.exe",
                        "timestamp": "2022-04-25 10:30:14"
                    },
                    {
                        "value": "http://192.227.168.151/568/vbc.exe",
                        "timestamp": "2022-04-24 15:11:29"
                    },
                    {
                        "value": "http://2.58.149.41/mezx.exe",
                        "timestamp": "2022-04-21 13:09:22"
                    },
                    {
                        "value": "http://107.172.13.149/chief/babaman.exe",
                        "timestamp": "2022-04-15 16:13:10"
                    },
                    {
                        "value": "https://terrazzaitaliana.mx/hrt/Kkoymf_Ivkeekfe.bmp",
                        "timestamp": "2022-04-15 10:03:26"
                    },
                    {
                        "value": "http://198.12.81.20/loaderb/LOADERB.exe",
                        "timestamp": "2022-04-08 10:04:47"
                    },
                    {
                        "value": "http://75.127.1.237/200/vbc.exe",
                        "timestamp": "2022-04-07 19:09:38"
                    },
                    {
                        "value": "http://75.127.1.237/56/vbc.exe",
                        "timestamp": "2022-04-07 14:11:03"
                    },
                    {
                        "value": "http://192.3.247.131/56/vbc.exe",
                        "timestamp": "2022-04-07 08:42:46"
                    },
                    {
                        "value": "http://198.12.127.228/720space/.win32.exe",
                        "timestamp": "2022-04-07 08:15:08"
                    },
                    {
                        "value": "http://107.172.93.13/save365/.csrss.exe",
                        "timestamp": "2022-04-06 08:49:47"
                    },
                    {
                        "value": "http://2.56.57.36/79/vbc.exe",
                        "timestamp": "2022-04-05 13:28:12"
                    },
                    {
                        "value": "http://192.3.247.131/110/vbc.exe",
                        "timestamp": "2022-04-05 13:20:51"
                    },
                    {
                        "value": "http://62.197.136.176/auzsin/five/fre.php",
                        "timestamp": "2022-04-05 09:05:44"
                    },
                    {
                        "value": "http://198.12.81.20/vloader/VLOADER.exe",
                        "timestamp": "2022-04-05 09:04:31"
                    },
                    {
                        "value": "http://198.12.127.228/365cloud/.win32.exe",
                        "timestamp": "2022-04-05 13:58:42"
                    },
                    {
                        "value": "http://192.3.247.131/001/vbc.exe",
                        "timestamp": "2022-04-04 09:00:46"
                    },
                    {
                        "value": "http://103.207.37.129/savetocloud/csrss.exe",
                        "timestamp": "2022-04-01 15:35:56"
                    },
                    {
                        "value": "http://sempersim.su/ge22/fre.php",
                        "timestamp": "2022-04-01 15:34:48"
                    },
                    {
                        "value": "http://62.197.136.186/oluwa/five/fre.php",
                        "timestamp": "2022-03-30 15:33:00"
                    },
                    {
                        "value": "http://192.227.196.135/770/vbc.exe",
                        "timestamp": "2022-03-24 10:35:03"
                    },
                    {
                        "value": "http://furnaceshst.net/gd21/fre.php",
                        "timestamp": "2022-03-22 11:44:49"
                    },
                    {
                        "value": "http://84.38.129.31/cloud__to_drive/.win32.exe",
                        "timestamp": "2022-03-22 11:44:49"
                    },
                    {
                        "value": "http://107.172.76.135/21/vbc.exe",
                        "timestamp": "2022-03-16 21:07:17"
                    },
                    {
                        "value": "http://qtd8gcdoplav737wretjqmaiy.gq/Kent2/fre.php",
                        "timestamp": "2022-03-08 12:31:42"
                    },
                    {
                        "value": "http://192.3.247.134/65/vbc.exe",
                        "timestamp": "2022-03-07 11:58:04"
                    },
                    {
                        "value": "http://hstfurnaces.net/gd12/fre.php",
                        "timestamp": "2022-03-07 11:40:35"
                    },
                    {
                        "value": "http://kbfvzoboss.bid/alien/fre.php",
                        "timestamp": "2022-04-06 22:59:45"
                    },
                    {
                        "value": "http://alphastand.trade/alien/fre.php",
                        "timestamp": "2022-04-06 22:53:58"
                    },
                    {
                        "value": "http://alphastand.win/alien/fre.php",
                        "timestamp": "2022-04-06 23:01:44"
                    },
                    {
                        "value": "http://103.167.92.21/cloud_save/.wininit.exe",
                        "timestamp": "2022-03-01 00:35:35"
                    },
                    {
                        "value": "http://198.12.127.206/666/vbc.exe",
                        "timestamp": "2022-03-01 00:26:50"
                    },
                    {
                        "value": "http://34.235.167.148/b2/scan_02.exe",
                        "timestamp": "2022-02-24 09:18:24"
                    },
                    {
                        "value": "http://104.168.32.66/365cloud/.csrss.exe",
                        "timestamp": "2022-02-24 08:43:39"
                    },
                    {
                        "value": "http://103.167.92.21/_spaceX2__/.wininit.exe",
                        "timestamp": "2022-02-22 09:15:49"
                    },
                    {
                        "value": "http://198.46.132.195/_spaceX2__/.win32.exe",
                        "timestamp": "2022-02-22 08:57:35"
                    },
                    {
                        "value": "http://103.167.92.21/spaceX/.wininit.exe",
                        "timestamp": "2022-02-21 17:19:24"
                    },
                    {
                        "value": "http://107.173.219.30/__space_X/.win32.exe",
                        "timestamp": "2022-02-21 09:30:15"
                    },
                    {
                        "value": "http://192.210.149.230/bazz/masta.exe",
                        "timestamp": "2022-02-22 09:15:49"
                    },
                    {
                        "value": "http://35.174.242.105/a1/scan_01.exe",
                        "timestamp": "2022-02-15 12:00:07"
                    },
                    {
                        "value": "http://250b48d798957fbf33b77ae8a74a45ca.gq/Ausin2/fre.php",
                        "timestamp": "2022-02-15 11:58:39"
                    },
                    {
                        "value": "http://46.183.223.105/445/vbc.exe",
                        "timestamp": "2022-02-15 09:02:17"
                    },
                    {
                        "value": "https://cdn.discordapp.com/attachments/940176829648617492/942793845941362719/Lzrhejlv.log",
                        "timestamp": "2022-02-14 15:30:05"
                    },
                    {
                        "value": "http://192.227.129.60/399/vbc.exe",
                        "timestamp": "2022-02-14 08:37:30"
                    },
                    {
                        "value": "http://103.167.92.21/365Cloud/.wininit.exe",
                        "timestamp": "2022-02-07 01:06:48"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "12295d5a38c339ffb5333989765b54fc6f23cf45a3715a8c9871ab3a76ff7d82",
                        "timestamp": "2022-11-25 09:27:54"
                    },
                    {
                        "value": "af754d0cf141c78ce0cfc8d684094f32a770f5adada219e582a2532adca77495",
                        "timestamp": "2022-08-31 04:52:04"
                    },
                    {
                        "value": "a67ece8b830cc3bacf013d519769cd8076b8476388f8b63d3edc7e1b70e4e9a0",
                        "timestamp": "2022-08-26 12:38:10"
                    },
                    {
                        "value": "a93db3b4c7f824b420586ea6eed9292662b4bb2067bd4cef2f9f468f93f61aff",
                        "timestamp": "2022-08-17 05:49:53"
                    },
                    {
                        "value": "909488a73426acc0a0d932471e63f6df1fdab2100aaa882e5c96ca5a8ab179c1",
                        "timestamp": "2022-07-30 05:43:13"
                    },
                    {
                        "value": "e3757e5dcade9b1556384eb659720de9439b393fc5be30c8c17c4ba83dbafa30",
                        "timestamp": "2022-07-30 05:43:13"
                    },
                    {
                        "value": "2b655f55abba7cb6d8f508e5058e64a29e65a41e28f20dbe4a421e90e2045fbc",
                        "timestamp": "2022-07-30 05:43:13"
                    },
                    {
                        "value": "59c7f93c0bc240bc4e2a6a88846414f07fd44b90956d3bc8e58597318b92f8a9",
                        "timestamp": "2022-02-09 23:02:13"
                    },
                    {
                        "value": "585f3659f2950353d67a07b4c1846035aba67034e7401e924cc54305f3bedef3",
                        "timestamp": "2022-02-09 23:02:12"
                    },
                    {
                        "value": "53f9e9aa91c6707ae8207d64c0a3fe2273b9ed05fa9905e90b709fa20baf8e94",
                        "timestamp": "2022-02-09 23:02:11"
                    },
                    {
                        "value": "5426a7cc337c8315e0ff629ad3e6d9d415be2e1ec1c62fdd90bbae91250eebdb",
                        "timestamp": "2022-02-09 23:02:11"
                    },
                    {
                        "value": "5314b691617c4509abb1b6f23a3192429de10736dca39fcf3bfddf0aaa0e53df",
                        "timestamp": "2022-02-09 23:02:10"
                    },
                    {
                        "value": "52e6074788d1445147baafb2d2d238e95cdfbabf5d02ab9967fd6f34d1c7d321",
                        "timestamp": "2022-02-09 23:02:09"
                    },
                    {
                        "value": "51530d6352af87e10db2f455b806a2fc81b82d26658df8d46067d6dc44201bec",
                        "timestamp": "2022-02-09 23:02:08"
                    },
                    {
                        "value": "50ffede006fa0b6466cdebc716193338627b2a1a82d74ae7d25f51637df5182c",
                        "timestamp": "2022-02-09 23:02:07"
                    },
                    {
                        "value": "4fc51ffa4ffdd7fb41a61feb2fb29a9300462200800e704221b43119ef9000ce",
                        "timestamp": "2022-02-09 23:02:06"
                    },
                    {
                        "value": "4f59cbea145eb8e6b34ca7ad48574555458d8f9740e624d83dea7fb6468aa4ca",
                        "timestamp": "2022-02-09 23:02:05"
                    },
                    {
                        "value": "4eb165d0adad5be9d9a4470eb3760a991c4ae1ae52ee2fe349851d1b50aaff53",
                        "timestamp": "2022-02-09 23:02:04"
                    },
                    {
                        "value": "4addd5a441cfda7a6c0617a3c30ab28d924f1d2a38a9438be3c31821612f1ab4",
                        "timestamp": "2022-02-09 23:02:03"
                    },
                    {
                        "value": "4daac039a01adc8c15e8f6570de2cdce8480f77c9974c297218031b5c0b9bc8b",
                        "timestamp": "2022-02-09 23:02:03"
                    },
                    {
                        "value": "49461f857b3a532059d1bc18f4899e774581ff9d072d3dfd3581c32cb00de4c5",
                        "timestamp": "2022-02-09 23:02:02"
                    },
                    {
                        "value": "48b595428b2e25e856d4fdd098da82bc1f00f6590318bd68120a61bf67f13cb1",
                        "timestamp": "2022-02-09 23:02:01"
                    },
                    {
                        "value": "47c215677a13caee9b79a643e0df5d08534ffad00d4db4e38c9f6b7211dde089",
                        "timestamp": "2022-02-09 23:02:00"
                    },
                    {
                        "value": "481ef8217d421c2f236d0846229e3c9884cb373530d93a00c8f30b83319c2824",
                        "timestamp": "2022-02-09 23:02:00"
                    },
                    {
                        "value": "471ad4b40498feebfe9547fdb57b031b6263b1f7379001e64dcf5da97c9c30a0",
                        "timestamp": "2022-02-09 23:01:59"
                    },
                    {
                        "value": "46eae87f5c946bf2dd23b1d0c7754de74a8a4780e8503230ef16aa6169342da9",
                        "timestamp": "2022-02-09 23:01:58"
                    },
                    {
                        "value": "45cd9640bb1c1b60c0cd7d0ee549cee6c3dcbaf0355f83b372dc1552acb10465",
                        "timestamp": "2022-02-09 23:01:57"
                    },
                    {
                        "value": "46c1e795439ea1890c5617fb2234cff51ce6785e5b07b2acfc89ddeb86e34a39",
                        "timestamp": "2022-02-09 23:01:57"
                    },
                    {
                        "value": "41b950eff036f965790fd619b0fefefc2541ecb26fbee3f13fa69c53785a78fe",
                        "timestamp": "2022-02-09 23:01:56"
                    },
                    {
                        "value": "4118da509f4aace1799d5880924a4101d8ed8ee746e0a03a7f47f3cec76eaf58",
                        "timestamp": "2022-02-09 23:01:55"
                    },
                    {
                        "value": "3ae077efe069fd25f059be4432bfb1d599d1e66d9b995890fdd333ab6115e930",
                        "timestamp": "2022-02-09 23:01:54"
                    },
                    {
                        "value": "3fcbf0a0d8ab22f5762ebf4855165c1258b57462119eb5549e7b74edcc2ce1ad",
                        "timestamp": "2022-02-09 23:01:54"
                    },
                    {
                        "value": "3a2ffd78111d04ce8986e867c0ed71f258e814b302868faa887fa6138cfb8827",
                        "timestamp": "2022-02-09 23:01:53"
                    },
                    {
                        "value": "0c20e66bcbb28f8bb3d4e74edc7556309550858d45ccf83dd6a846f43f2a68ef",
                        "timestamp": "2022-02-09 23:01:52"
                    },
                    {
                        "value": "38bd955481b41bf192cb4127ba8c8862e795cf418a86cbfa17dad8c08cb6274f",
                        "timestamp": "2022-02-09 23:01:52"
                    },
                    {
                        "value": "356882c330b281597c0510cdc952f7b689bb2ede2af2868524d978cbb252a7a4",
                        "timestamp": "2022-02-09 23:01:51"
                    },
                    {
                        "value": "355b58ec78627d48f3f9ac33a989bfcffa6c81cd9015acb53c024bc7c9681165",
                        "timestamp": "2022-02-09 23:01:50"
                    },
                    {
                        "value": "33f2129c8657c063741d79a7f10b09a608e722b29dbda1f32ac6e5cc790a8400",
                        "timestamp": "2022-02-09 23:01:49"
                    },
                    {
                        "value": "32fdb53c59a0e537733564b848254971303c5c2b895aa3680da15dc50c142f53",
                        "timestamp": "2022-02-09 23:01:48"
                    },
                    {
                        "value": "323da47888e2b8e090a19ba139ed1b4f6c1b2bd649e05b358a23aa88b607f3dd",
                        "timestamp": "2022-02-09 23:01:47"
                    },
                    {
                        "value": "310109e3b708c413160510f908f5ff048d7a0ad3645aca86cd86eba3a55fb017",
                        "timestamp": "2022-02-09 23:01:46"
                    },
                    {
                        "value": "2f3376b143361d7e47b287b1408a18398c729c8c2b5636a8fe23f9f60d78921a",
                        "timestamp": "2022-02-09 23:01:45"
                    },
                    {
                        "value": "3056e351e7f9636a77d54c0e149e510a5e357484d2fb0b4659cb7b590e9b75b5",
                        "timestamp": "2022-02-09 23:01:45"
                    },
                    {
                        "value": "2ba260d53db88ea6ae79af42f97eaa2e22c5fcb0f3e788057ef6e5dc40cd3060",
                        "timestamp": "2022-02-09 23:01:44"
                    },
                    {
                        "value": "29c4e0b4e6625c3fcc0fdbb48ba3424aa9ad7314609fbf7dec4bbb2487bbbf6f",
                        "timestamp": "2022-02-09 23:01:43"
                    },
                    {
                        "value": "2682405489622c6af884c41b4a90092432283088d56945987e8dac667e2f9344",
                        "timestamp": "2022-02-09 23:01:42"
                    },
                    {
                        "value": "2977200abc4edbe125bca5a6f2fefb53b08a36bfa97e3562f421c4200adcb042",
                        "timestamp": "2022-02-09 23:01:42"
                    },
                    {
                        "value": "239c4df0ebe75e480da8c14c6146709597239d6fdf9be7b7cbbfb1e7e67c8cbe",
                        "timestamp": "2022-02-09 23:01:41"
                    },
                    {
                        "value": "2346feb8b69f4d17bac41f58ba38e609c83fc7512813595d78f44d2184f04901",
                        "timestamp": "2022-02-09 23:01:40"
                    },
                    {
                        "value": "068cd80ed7545f2ea2e6f4fb06f986ca6a65d360d4c316ce9dfa95ffd72f2fd0",
                        "timestamp": "2022-02-09 23:01:39"
                    },
                    {
                        "value": "208ba7287f91179d9af3500566e12627e83fd388c9c4e6c2d1559a99af2ab990",
                        "timestamp": "2022-02-09 23:01:38"
                    },
                    {
                        "value": "21283c32dac6cf6cab3a19a9a1ae4c0917c3a281977df13643afc06f584cdc0a",
                        "timestamp": "2022-02-09 23:01:38"
                    },
                    {
                        "value": "1e2d7784878746800a4d32257a8a024fc5c714f69dcca6cc785d93cd506cf1a0",
                        "timestamp": "2022-02-09 23:01:37"
                    },
                    {
                        "value": "1e178e38013d8e2f7f8f96548492d93d76c9a214a9ea00b01c6c0c3252c91aff",
                        "timestamp": "2022-02-09 23:01:36"
                    },
                    {
                        "value": "1df13e542926b52c19358d15146ea0ffa168c7bcc058dc86b3b06a0390f9fd3d",
                        "timestamp": "2022-02-09 23:01:35"
                    },
                    {
                        "value": "1db568f6ff72a35878d8772fa11e25a64d2b38447580fba8bdbee9c1b946a621",
                        "timestamp": "2022-02-09 23:01:34"
                    },
                    {
                        "value": "1bb8852c2f8f20cb1b80a61bbda5ebd241559e4c9992b8c2948ca5800151643b",
                        "timestamp": "2022-02-09 23:01:33"
                    },
                    {
                        "value": "1ad080a37ca0a61554b0bcd84f19ab817120bcddbe8e8d9f93760117993f2086",
                        "timestamp": "2022-02-09 23:01:32"
                    },
                    {
                        "value": "163a6013af923c1decda88bc247fa068f9732af6eae67dc65b7d6a05a1a866f7",
                        "timestamp": "2022-02-09 23:01:31"
                    },
                    {
                        "value": "18f5870e37a3ea690c842a8493ffcf264768440797ef9193751de32ec5d000de",
                        "timestamp": "2022-02-09 23:01:31"
                    },
                    {
                        "value": "16343c5716551924f285ac2ff7fdb52bb91edb7e6689c55eb5ee8eb6baad2598",
                        "timestamp": "2022-02-09 23:01:30"
                    },
                    {
                        "value": "153f17cbbd0faca13b6d5fc1bb946971f4e7f1e210fe525eff586e8de2f0b39a",
                        "timestamp": "2022-02-09 23:01:29"
                    },
                    {
                        "value": "153aaa243cd731e9130db3e89d6610f1f2d9855556083eb7a4aaf7204a757324",
                        "timestamp": "2022-02-09 23:01:28"
                    },
                    {
                        "value": "149194b3a5aeb47900252f7fbda6ad093a1c7cc8fe918a1ef3e604deeaf434b8",
                        "timestamp": "2022-02-09 23:01:27"
                    },
                    {
                        "value": "0e909e51c33ba307e3765f0570374eb2f70b11e2db2e755f08ce18e30573108c",
                        "timestamp": "2022-02-09 23:01:26"
                    },
                    {
                        "value": "0d14b55d37d3cbe6c18e27623d3680f471a4360d6e8d8e7e434abeef7952f7e1",
                        "timestamp": "2022-02-09 23:01:25"
                    },
                    {
                        "value": "0a372b8ba55ed703e2b364286be85854f38c31072b61886691b1ef043d94dfce",
                        "timestamp": "2022-02-09 23:01:24"
                    },
                    {
                        "value": "0883dc71fcfa4a3d9128807b88ee9855caec8e47aede64484e7319cce8ef72c1",
                        "timestamp": "2022-02-09 23:01:23"
                    },
                    {
                        "value": "06cc5cee02434885bfd951cc2d259b2e4482d0976d44394e100a62e991dd8aaa",
                        "timestamp": "2022-02-09 23:01:21"
                    },
                    {
                        "value": "068b5967c8901d4f7900792a99b2b68ce9e7a1afb59bd54fa6f1521b66abe5dd",
                        "timestamp": "2022-02-09 23:01:20"
                    },
                    {
                        "value": "062f5a11341a56fd496afb8913d90d5663dda4220ce4785a3f29e05d2864c193",
                        "timestamp": "2022-02-09 23:01:18"
                    },
                    {
                        "value": "0550fd2a760749aa08d478cd9781df59376b46f31f44eb4f1df1c0bec2ca3494",
                        "timestamp": "2022-02-09 23:01:17"
                    },
                    {
                        "value": "0390d39b72c4f58bff836be0c6600981e22da1f8120a8c31b8ed604f73406d68",
                        "timestamp": "2022-02-09 23:01:15"
                    },
                    {
                        "value": "02f32e1de80478f00716ef795255c679c8aaaf59ee9695728c7fd4af48442145",
                        "timestamp": "2022-02-09 23:01:14"
                    },
                    {
                        "value": "02ed1dcfad15fc23f5bac610517e9ec27d4a9611296276cf3f626925edacbd52",
                        "timestamp": "2022-02-09 23:01:12"
                    },
                    {
                        "value": "0159364dc4a13deea8595d019b3c1e44ca100690b3d7f2df7d79cfd86d4b36ce",
                        "timestamp": "2022-02-09 23:01:11"
                    },
                    {
                        "value": "004638ed3033f7ecca0f2bb41342870be0416332c0f8a31c7948c429678fe455",
                        "timestamp": "2022-02-09 23:01:10"
                    },
                    {
                        "value": "cf3d0cfeac368b24e5c3bd1286e02e94c073d9468a4b37fff97ad5a0c82f57c7",
                        "timestamp": "2022-02-09 23:01:09"
                    },
                    {
                        "value": "c1040895515f5e908812f52bd9eea004303961f4e53c1c887583ff152d5bfd3f",
                        "timestamp": "2022-02-09 23:00:57"
                    },
                    {
                        "value": "e7fb27d7d89ae0ad8c00bee050bb53970a501985f306466ab34fa545d7b3fa97",
                        "timestamp": "2022-02-09 23:00:48"
                    },
                    {
                        "value": "20e7a6550c29fbb3eebd0905011654a9889979f01391fff4710121a79bbb4423",
                        "timestamp": "2022-02-09 23:00:50"
                    },
                    {
                        "value": "c5fc4b85610131a73ed687423dfb23363d187e19a3fa9d7a2f2b8d73478e085b",
                        "timestamp": "2022-02-09 23:00:53"
                    },
                    {
                        "value": "dec44075aecbe3a36660f6fabce5b7893101922b5e17181d62fccbe84050b235",
                        "timestamp": "2022-02-09 23:00:55"
                    },
                    {
                        "value": "433bbd895d20c467d50a6d9909eab21c1698ba1ff876a95abb912dbd7a10a253",
                        "timestamp": "2022-02-09 23:00:58"
                    },
                    {
                        "value": "8148fc9d17a2422127b7d14596a5cfa5c87a6ee6c2da4d9f4c92b9c2962b6ed7",
                        "timestamp": "2022-02-09 23:01:01"
                    },
                    {
                        "value": "13947b2724583f8c59baaaf703ab547b83b5781d54b16b991b1cd0841ef6b52b",
                        "timestamp": "2022-02-09 23:01:05"
                    },
                    {
                        "value": "8f9a0b7230034eeb043874da6566de2a31a481a1a3391282d6f81ec58a1015ac",
                        "timestamp": "2022-02-09 23:00:35"
                    },
                    {
                        "value": "7422f13cd723397895b7526dc413d2af4201dd4fb0e9ed88608e868a9aefbf48",
                        "timestamp": "2022-02-09 23:00:34"
                    },
                    {
                        "value": "fecf75a5f40b24ba3e1735d5876157158bc40c41ea1c5bd7ff355d28d803cb9b",
                        "timestamp": "2022-02-09 23:00:31"
                    },
                    {
                        "value": "fd470f431c88c222e2ce08d65f9c470d3427ff0bc4087b8dfaf1e243d2585abb",
                        "timestamp": "2022-02-09 23:00:30"
                    },
                    {
                        "value": "f764afebbb47fcc610cc9ad1277606ee9acac6366ee457dfdc7f6db01a04a906",
                        "timestamp": "2022-02-09 23:00:29"
                    },
                    {
                        "value": "976e03483246291d571e075172fa00e3f9a7e314b90670e1ac42a3f59dce2977",
                        "timestamp": "2022-02-09 23:00:28"
                    },
                    {
                        "value": "ad5eb0975aa81acaaf450606af105b2cbdf7c8fe677082c3e634152feb35a385",
                        "timestamp": "2022-02-09 23:00:27"
                    },
                    {
                        "value": "d1ffe078dc5da51cb4109d1babea6a227c4cf5a74005ea119d69ad1e783a9faf",
                        "timestamp": "2022-02-09 23:00:26"
                    },
                    {
                        "value": "ac9473fc32bfd8701451f28a10cdb1e64263f881525ddc00f659b8a9986b635b",
                        "timestamp": "2022-02-09 23:00:25"
                    },
                    {
                        "value": "7fa9a68ebb774823c4bfb06e79ba0bf4c66992625aba6d100ad86d4daf7afff6",
                        "timestamp": "2022-02-09 23:00:24"
                    },
                    {
                        "value": "bd86670a4b4a751197724f8619ebba0c5ba377ce568e90fd9b1b928b0f16278d",
                        "timestamp": "2022-02-09 23:00:23"
                    },
                    {
                        "value": "aa6cb5ea791de8592082627065ffb1f9b670031570da9d4ca14fe866c24dcf4d",
                        "timestamp": "2022-02-09 23:00:22"
                    },
                    {
                        "value": "809d0dcc9b6bff6d294fb64bda68f0fa82dad21d41651fc4147efd35695f7c61",
                        "timestamp": "2022-02-09 03:10:30"
                    },
                    {
                        "value": "b980fdf339f2549912234f386a538d85d7a26c8a3bb2d30a38f929a833f59d84",
                        "timestamp": "2022-02-09 03:10:29"
                    },
                    {
                        "value": "74902d0f1ae81526f7a59a3beca82ff30039d925c6c7e20237f7e1cf9c8a0f15",
                        "timestamp": "2022-02-09 03:10:28"
                    },
                    {
                        "value": "ec95412b5bc1885334270c4ac2b665827ed76cddff39129d8d23420a7b52c699",
                        "timestamp": "2022-02-09 03:10:26"
                    },
                    {
                        "value": "ec5d55e5684df8942bc8a6339be557008edff97b9d01866f80e811f22d89eaca",
                        "timestamp": "2022-02-09 03:10:25"
                    },
                    {
                        "value": "b5d23578f18094cbdf595cd40af84b17fcf619ed5ad9d66429e398d559a9a7c9",
                        "timestamp": "2022-02-09 03:10:24"
                    },
                    {
                        "value": "c7d33e532eacedff5cdbe7cab0bcca7416cb9161e1fd703894bfc5907ffee038",
                        "timestamp": "2022-02-09 03:10:23"
                    },
                    {
                        "value": "c792dc0ad8d9ea94c23887b8ff7b9846b6962ae753967cbd6cdd6ecb0640a66b",
                        "timestamp": "2022-02-09 03:10:22"
                    },
                    {
                        "value": "4f1709bcf1c4e2d3b6123a5007c3965a04baa3116b9422fd8cd8dc26e348dce6",
                        "timestamp": "2022-02-09 03:10:21"
                    },
                    {
                        "value": "a405aeb0d276dbc07ebef2be07064ae195f89bf4220e40668da72f97d85df69d",
                        "timestamp": "2022-02-09 03:10:20"
                    },
                    {
                        "value": "a3f453eb628be4f656db29ff51f04a106a2dcd5accae4c4efd18a11133147d16",
                        "timestamp": "2022-02-09 03:10:18"
                    },
                    {
                        "value": "b300883e190fd15fc05d0c38250072d221bce0a8d4198a24569f8982a65ac415",
                        "timestamp": "2022-02-09 03:10:17"
                    },
                    {
                        "value": "c475083d64254f5afb9e1160de1470355daa5968dee32028b44946c89573a333",
                        "timestamp": "2022-02-09 03:10:16"
                    },
                    {
                        "value": "c450e3bb1893f5dec7252719e60d50b161cb2794f5cd64e1e20824ccec192383",
                        "timestamp": "2022-02-09 03:10:15"
                    },
                    {
                        "value": "6ae2f9fb4dcd1445ec98c24e92fbd6534c919f766e1ddb6220bfd5524f5f5710",
                        "timestamp": "2022-02-09 03:10:14"
                    },
                    {
                        "value": "e4e49728e232694ecd86f97e0ce42ec4b1f9db823ccf072a1790a501be42e2f5",
                        "timestamp": "2022-02-09 03:10:13"
                    },
                    {
                        "value": "c12c211cb7fb30cb0706e90acedba5c42d3589db5145e1a5d6adf9ee62a9e3f7",
                        "timestamp": "2022-02-09 03:10:12"
                    },
                    {
                        "value": "aed5cb66a654c92bfc010a2101a34b982e1fd832cbdea47900cf8282bd569f2f",
                        "timestamp": "2022-02-09 03:10:10"
                    },
                    {
                        "value": "4962cfb568aa9d6eeb77cf412373bf2ac889256382014d050e8c8d477f5a2744",
                        "timestamp": "2022-02-09 03:10:08"
                    },
                    {
                        "value": "ae7bb919687a04851856a3517c0496dbae28f8761f5bf4d75459722b5682ff80",
                        "timestamp": "2022-02-09 03:10:06"
                    },
                    {
                        "value": "96d7e30956d2d3f0f9bf801dd07fff04257f05c926919df6a461922ecf7b8e3d",
                        "timestamp": "2022-02-09 03:08:10"
                    },
                    {
                        "value": "e283cf23ba781cabeeb0fe032b8da8931c7e7260544846ba19adbc57fb6c4079",
                        "timestamp": "2022-02-09 03:08:09"
                    },
                    {
                        "value": "65a56f97578967ac9329dc4cf475c595a9075a451370ca8d7b7a30f5316d1dda",
                        "timestamp": "2022-02-09 03:08:08"
                    },
                    {
                        "value": "2a719849b886b57c6a40db34f3634dafba7ce70b8d5bb3c1525659045ff68075",
                        "timestamp": "2022-02-09 03:08:07"
                    },
                    {
                        "value": "e0bd3abe86848025e8974448991e092550a0a59104d1f4279bef827193b33c05",
                        "timestamp": "2022-02-09 03:08:06"
                    },
                    {
                        "value": "8f81bd964ce4893315ef208f611f266e07b5d35e5aae57d94796b210a4b47dea",
                        "timestamp": "2022-02-09 03:08:06"
                    },
                    {
                        "value": "e027e73c669d75c03155f57d9456a7d5e0e2b06df4cbebf3a7d63421d8f465c5",
                        "timestamp": "2022-02-09 03:08:05"
                    },
                    {
                        "value": "55fcfb9488c770cb3be31a37ce4745806abd760fb9ad62464fb841030f3ce13e",
                        "timestamp": "2022-02-09 03:08:04"
                    },
                    {
                        "value": "51a128d9eff6154b67abdd15737e419639b76b182f68019204e98fb830fe6d32",
                        "timestamp": "2022-02-09 03:08:03"
                    },
                    {
                        "value": "1ad305535a681901d7a91c96dbc52c875465f52ca03bebd3a197b6309d55669c",
                        "timestamp": "2022-02-09 03:08:02"
                    },
                    {
                        "value": "dbdef5a7ecfe21b330a3bf96f7e37a09235ee8939829857d71d7de801fa668db",
                        "timestamp": "2022-02-09 03:08:02"
                    },
                    {
                        "value": "1a543da4976bbae7703cc566fe0ce46d71b4c4b56e72189a920ec347f87b6428",
                        "timestamp": "2022-02-09 03:08:01"
                    },
                    {
                        "value": "0924cc477a4fc3d18372da1b47fc3f976ba1cecb9744e931f611617440f3ccd3",
                        "timestamp": "2022-02-09 03:08:00"
                    },
                    {
                        "value": "d9f3a0916c4654ccf56ea308f87625a6e4c8c16103d0e03052cefcb3b027d9ab",
                        "timestamp": "2022-02-09 03:08:00"
                    },
                    {
                        "value": "ffc8e190e502d8224db9d18f6598fd2be331cdb3acd1264c525e43232631947e",
                        "timestamp": "2022-02-09 03:07:59"
                    },
                    {
                        "value": "fa3dbb4fb19382d96ce3f633bccd399b4e99d007321a0c58ec11b80948117b72",
                        "timestamp": "2022-02-09 03:07:58"
                    },
                    {
                        "value": "a39d4b2cc90b3e64fad5352caf45bf3b376749b2e799f2191cbd40d733db0583",
                        "timestamp": "2022-02-09 03:07:57"
                    },
                    {
                        "value": "c7d75844dfb37e1a6ff3bf2392d76970abf6535839514877d8dc5e847dcc8cc1",
                        "timestamp": "2022-02-09 03:07:56"
                    },
                    {
                        "value": "d9c043de55bafb7aba07942d6de18a86edfe7c52f87ce7a8c852068014a73ab2",
                        "timestamp": "2022-02-09 03:07:51"
                    },
                    {
                        "value": "069555ffa6b89d6cad01978f13a53c1b4b9476d2f7df11c1662fbd2554f5805c",
                        "timestamp": "2022-02-09 03:07:51"
                    },
                    {
                        "value": "e1502521ffeee00023e9b6711c48e49e43dc85b111f75f4735e2a78a3245eccd",
                        "timestamp": "2022-02-09 03:07:50"
                    },
                    {
                        "value": "01da6a29fba3ba014fe35afa266390b9cb173aac520cbed7ffb4473b504f8544",
                        "timestamp": "2022-02-09 03:07:49"
                    },
                    {
                        "value": "232882718be66e2081075e4e62a1486fcc0187a03e9c51824378d558d044398a",
                        "timestamp": "2022-02-09 03:07:48"
                    },
                    {
                        "value": "926056a29c47928981d8d6bd0a7bde9b37949b51dbce55dd807e52781c5f11aa",
                        "timestamp": "2022-02-09 03:07:47"
                    },
                    {
                        "value": "cd91470ac009105cbf0026c1b942b5e554024b2af93035ea80b71cc00c23022a",
                        "timestamp": "2022-02-09 03:05:39"
                    },
                    {
                        "value": "7f458de5790be6b95ceb2b286c319306d8c3abfd75308a20491875418a17ae09",
                        "timestamp": "2022-02-09 03:05:34"
                    },
                    {
                        "value": "5391d69bb4f0b4d861c3a0c4f03f22a0f426a2dac85a86a79d717fcb8ab62379",
                        "timestamp": "2022-02-09 03:05:33"
                    },
                    {
                        "value": "28b1903599e108124061a4fba6ca11d6d0ed873fdb24a08be036c3ade6752eef",
                        "timestamp": "2022-02-09 03:05:32"
                    },
                    {
                        "value": "273f76dd11ae19e78fd6849e1c93478639c2f887089994428c277567622373c7",
                        "timestamp": "2022-02-09 03:05:31"
                    },
                    {
                        "value": "d2bfff4427cf46d6d8b08bba3074da2e1c75206fdac41d199c6f8499b34255de",
                        "timestamp": "2022-02-09 03:05:30"
                    },
                    {
                        "value": "a6d56b228028c24f5ccdc6cda9fa47305db56caf559ff164fd3fd16a8843599a",
                        "timestamp": "2022-02-09 03:05:28"
                    },
                    {
                        "value": "fc83816ebd724575ae4fb69fae7fc454c3e58ef6761e76827ad5ec962d3612fa",
                        "timestamp": "2022-02-09 03:05:27"
                    },
                    {
                        "value": "d0b07cb32ab3399e83bcc7fd1c507320bff028bb6bfed253ec807767de44780a",
                        "timestamp": "2022-02-09 03:05:25"
                    },
                    {
                        "value": "76a307b2f87ad603d8821c448bd97fe145064f1360fcb377c42c4ef85e7078c2",
                        "timestamp": "2022-02-09 03:05:24"
                    },
                    {
                        "value": "221ea3a99b2c4bc873841e95a5da42cedc53849ff9278e345160857aa68f2079",
                        "timestamp": "2022-02-09 03:05:23"
                    },
                    {
                        "value": "a2d5f6c7b6eca7687a2a19790b2dd51cdbfcb2e0a6b206331ee97d7029bfe647",
                        "timestamp": "2022-02-09 03:05:22"
                    },
                    {
                        "value": "cbe00a8689bbf72364666341d09ebc7e0d40302a04a6ceca0305834fb7d5a345",
                        "timestamp": "2022-02-09 03:05:21"
                    },
                    {
                        "value": "a052adecf1d257ebb7e99ace172086279e8232a69eff5f1e67eeb7d7cbc253f6",
                        "timestamp": "2022-02-09 03:05:20"
                    },
                    {
                        "value": "ca9a89b2f466cc3af03c35b397144f74529d0cce7a4dc11893709676cdaf0fd9",
                        "timestamp": "2022-02-09 03:05:19"
                    },
                    {
                        "value": "ca5ce2b230611406627778b4819ea3953a892bce067c5529a3ed2980c82ab343",
                        "timestamp": "2022-02-09 03:05:18"
                    },
                    {
                        "value": "759ee67ce231db7cbb77533ac413963acb6b5d6bc86e4a0f381de85c84c5749e",
                        "timestamp": "2022-02-09 03:05:17"
                    },
                    {
                        "value": "c99614661dc6df0f91014380ad63f353672e384b51d66d86889f8ca7b45376e3",
                        "timestamp": "2022-02-09 03:05:14"
                    },
                    {
                        "value": "9ae1e7655343ada92529b8f479e046ae89c1c5b69020c3be23af5e05ef4b6751",
                        "timestamp": "2022-02-09 03:05:12"
                    },
                    {
                        "value": "4619df28b591cedae63a12015facbf569ac5b77aa98f52ddff61d728822ed992",
                        "timestamp": "2022-02-09 03:05:04"
                    },
                    {
                        "value": "172dd30973ca76e6558803011d610e83d4f2f66a79b04533c636aec32b065036",
                        "timestamp": "2022-02-09 03:03:14"
                    },
                    {
                        "value": "c07ca74a1b709e356e13db5fe37bd6d8db0d41f4b164d6f98273dc225e7d396a",
                        "timestamp": "2022-02-09 03:03:13"
                    },
                    {
                        "value": "948139c9738f041c4385e75cd113901d3eadbee68bc6feedb23f5c9277980fc5",
                        "timestamp": "2022-02-09 03:03:12"
                    },
                    {
                        "value": "9598cc20d8bf478d2e825693c03ba57ee2d46e82238d726947403d8f60bb4552",
                        "timestamp": "2022-02-09 03:03:12"
                    },
                    {
                        "value": "3e32346bf488924f661137378e6033d8197807505dbc55169cf4164ffc6bacaf",
                        "timestamp": "2022-02-09 03:03:11"
                    },
                    {
                        "value": "bc33270f7affb342c69f3ac752b73257071e99a3925ccd8e6ae9a289416df437",
                        "timestamp": "2022-02-09 03:03:10"
                    },
                    {
                        "value": "672abb491dba3988e2926733d194860e6d4fef5685d6ee4b0e067a0e6e9e415f",
                        "timestamp": "2022-02-09 03:03:09"
                    },
                    {
                        "value": "6629f4a09565426055236459cc29aeadc9e88148eb8b5f7c3297e2a95d2772df",
                        "timestamp": "2022-02-09 03:03:08"
                    },
                    {
                        "value": "b9b337f43b17949ac8dda68e3a1360419b0dea292cbf3f2e99ffaeb2d83b719b",
                        "timestamp": "2022-02-09 03:03:07"
                    },
                    {
                        "value": "b9f3dc4102e2a98851745533da3f1fa1a1605913e96e0cb2738c6a1f19668b80",
                        "timestamp": "2022-02-09 03:03:07"
                    },
                    {
                        "value": "b892e6e479a1093108043ac0c5a55f87aa891b8a67ef6181e76e853f2b4cd4e6",
                        "timestamp": "2022-02-09 03:03:06"
                    },
                    {
                        "value": "b716ebdbe1fc336fb934f879c1d0966c8aa61ac16d52edf1bc687f9bd1d2dfde",
                        "timestamp": "2022-02-09 03:03:05"
                    },
                    {
                        "value": "07a26f469e222b66894128e4885d2b4e141cc42be76ef30127ca03bb7a62f70f",
                        "timestamp": "2022-02-09 03:03:04"
                    },
                    {
                        "value": "b23c32dbe4951890a458ca3ce7b07f09bac52cb70e8cb0425877a6d36d357f6d",
                        "timestamp": "2022-02-09 03:03:03"
                    },
                    {
                        "value": "06fb9d2df0c073e5c3a32909460eddd99bd291227621184fd9bdb53aefeae22c",
                        "timestamp": "2022-02-09 03:03:02"
                    },
                    {
                        "value": "2c135f203bc7c7a55add95cc6f057975d5caa7161ed5d0585f35472ab144ea4f",
                        "timestamp": "2022-02-09 03:03:01"
                    },
                    {
                        "value": "0613fa77c8b62ae3d036c83b8ffafc46ad2ad37db4f783ab1638cdb783a60bef",
                        "timestamp": "2022-02-09 03:03:01"
                    },
                    {
                        "value": "2ea27c1e47b0e4bd55b1f58b21b98fa0d09a978a8bc2b05266f10e988a5284dc",
                        "timestamp": "2022-02-09 03:03:00"
                    },
                    {
                        "value": "82a6665c8ff2263cc87628b7bceb1010ceeec2109cabcde3cca48b490f9a5ce2",
                        "timestamp": "2022-02-09 03:02:59"
                    },
                    {
                        "value": "021e48713e030e3ed2c2f0da655bec025141c6628a7630e8c25be738b541f22d",
                        "timestamp": "2022-02-09 03:02:58"
                    },
                    {
                        "value": "d40362bc4a6a51f0719632c8238cb812ee651d25425a94c1b22509387228baa6",
                        "timestamp": "2022-02-09 03:02:57"
                    },
                    {
                        "value": "551d06d6f4aa4a45e7e9f5788691b7238f24c1625fd345d27e74ef504d32bd36",
                        "timestamp": "2022-02-09 03:02:56"
                    },
                    {
                        "value": "a278d0b2aad4a1ba604161bf13238544e77e23da322f4a52f575f8e5b95229ea",
                        "timestamp": "2022-02-09 03:01:32"
                    },
                    {
                        "value": "9d43b4beb0815f0de65c523ba2ffc71f4497f8aef879aceaac646146c15cf179",
                        "timestamp": "2022-02-09 03:01:32"
                    },
                    {
                        "value": "1c95694b6bc0fbea6732eabd65e602c73413c6e36857791fc5d8f01c9e8c10ae",
                        "timestamp": "2022-02-09 03:01:31"
                    },
                    {
                        "value": "fd04f12c8a061596e35c561b4d6c157b359d59283392b19af13280e15c5102e7",
                        "timestamp": "2022-02-09 03:01:30"
                    },
                    {
                        "value": "a139e4c67e55eb4a87158f8d1c63f22ab8c5b2ce9a330a6ec84fbb4385bb19b7",
                        "timestamp": "2022-02-09 03:01:29"
                    },
                    {
                        "value": "33581705a7968699dc6ccb25decda4ade74191c4b1edd4363631e36d922f17be",
                        "timestamp": "2022-02-09 03:01:28"
                    },
                    {
                        "value": "94e1a23b8e90cdb1f997fa80bea358193cb0c5c2b2fc6f54a3137cdc604846f5",
                        "timestamp": "2022-02-09 03:01:25"
                    },
                    {
                        "value": "eab9fbffb011f0acbbed9032c2f11bf6252fc6d5b7dce607223f64c24aa43470",
                        "timestamp": "2022-02-09 03:01:24"
                    },
                    {
                        "value": "e7d49fbede45a4fa0e9e3107c1f08c55c23ac6e1f648cf62a54b9491c45e4293",
                        "timestamp": "2022-02-09 03:01:23"
                    },
                    {
                        "value": "f3495f0adf003d127cd7c3ff28dbc1b88f3776ebf379b4f4cbe7e44ecd690620",
                        "timestamp": "2022-02-09 03:01:22"
                    },
                    {
                        "value": "c41264da7b425a18800febf92233bd5009c34d604ca3f3ba1ad3853f1b77948c",
                        "timestamp": "2022-02-09 03:01:19"
                    },
                    {
                        "value": "60babc2401d599558b2eb901ab162c87ca59bda068bfee2561dfb1ec4aba0b2a",
                        "timestamp": "2022-02-09 03:01:19"
                    },
                    {
                        "value": "81f99f98f1565cfa79e94c92a5998be7fba4d096a18d53c34218faa6172d3beb",
                        "timestamp": "2022-02-09 03:01:18"
                    },
                    {
                        "value": "fe0b73d427e83436cc018544881cc7ab76b6084cc5ccd561f3652c661b60a5b6",
                        "timestamp": "2022-02-09 03:01:17"
                    },
                    {
                        "value": "87b4a205c27d8ffaecb7e687ace76ed76394ae98d22a2a8be17f532d917c236e",
                        "timestamp": "2022-02-09 03:01:16"
                    },
                    {
                        "value": "1aab9260ecb3ef6b3d07882eff498982f5146fb73a61ff77f8ea0dfbfb02cde7",
                        "timestamp": "2022-02-09 03:01:15"
                    },
                    {
                        "value": "0d4b7a493ffb322f46927f4d290740e9157c549cdb50db1ce746065332ed317c",
                        "timestamp": "2022-02-09 03:01:14"
                    },
                    {
                        "value": "8ece27b40d3ac040e7edc609fb5f895512543e1756f06050041bd936bff82958",
                        "timestamp": "2022-02-09 03:01:12"
                    },
                    {
                        "value": "391652986ed547047fba6a0b5c07f409eda5377cf5850f6e3ff52459c20a6200",
                        "timestamp": "2022-02-09 03:01:11"
                    },
                    {
                        "value": "878702b9fa51d353b5d7ca62f6e94ee21f5375fe2bd565244e27148e816ad594",
                        "timestamp": "2022-02-09 03:01:10"
                    },
                    {
                        "value": "7a03b50a7e61d6b9a6a18b3ffc18bff1f86627062e9cee004638d9acec13bbfb",
                        "timestamp": "2022-02-09 03:01:09"
                    },
                    {
                        "value": "4ff933b4cad3a9f231d1c38bf20a27400efae812d493970abf73a74cc6d146f4",
                        "timestamp": "2022-02-09 03:01:06"
                    },
                    {
                        "value": "6425751c7a3b305639aba07c8456bae2010137cc0575c336d3c26955ca1ff297",
                        "timestamp": "2022-02-09 03:01:05"
                    },
                    {
                        "value": "1aef916f96fdb2c9555e15304cb671cc25a48e5118d6f001a0e574a420a949a0",
                        "timestamp": "2022-02-09 03:01:04"
                    },
                    {
                        "value": "f9050759b2c3ac4b1c722fbcd7a64f88241e5456d63d6cec0d56907c056742cf",
                        "timestamp": "2022-02-09 03:01:04"
                    },
                    {
                        "value": "189983348fd14c49c7a9e6cfb3177926fbf84defe004f0a2d2326b5b79cfd6ab",
                        "timestamp": "2022-02-09 03:01:03"
                    },
                    {
                        "value": "0a2fac9fc8fd93fe68eacb0a52f09825f8124ce15a85de7f2ffaec558fad44d7",
                        "timestamp": "2022-02-09 03:01:02"
                    },
                    {
                        "value": "6fbf32b25cfdfda1534b9f51dc51fee326db170e01156c858edf7997a9621ad8",
                        "timestamp": "2022-02-09 03:01:01"
                    },
                    {
                        "value": "7f53e1dfaa8419792030ae5e1ca147667f60f09f9998641c054d85ff29c8c087",
                        "timestamp": "2022-02-09 03:01:00"
                    },
                    {
                        "value": "3626c60d9b551c24ab20b5f50d9bfe90b3681c3a0953e45d41af6e44cc5ef6fc",
                        "timestamp": "2022-02-09 03:00:59"
                    },
                    {
                        "value": "fb85e201dbba6886ab6d4a87c7e6ce3042c9a4b68d6d7a57d2047179c331007b",
                        "timestamp": "2022-02-09 03:00:58"
                    },
                    {
                        "value": "c0a34205dcdb437a5fc7221134ba0ff9708ea90c89734e4654388b2cc830e45d",
                        "timestamp": "2022-02-09 03:00:27"
                    },
                    {
                        "value": "37abfa331d62655654f577dc525a697c7bb75be9128067a83d88ef55e0bb66bd",
                        "timestamp": "2022-02-09 03:00:26"
                    },
                    {
                        "value": "0fc6387b8941d4f41910df31f2623ba6159f450cc763e9e101dd9e1f98f0bc12",
                        "timestamp": "2022-02-09 03:00:25"
                    },
                    {
                        "value": "80218640da480afb74802fc5d62b4f2c8fda66c3c70c944f60210e4e8cb58453",
                        "timestamp": "2022-02-09 03:00:24"
                    },
                    {
                        "value": "41785b5421a1f0add3f9966c281f69c83ee3f073cedd7563543276ec13c7f590",
                        "timestamp": "2022-02-09 03:00:23"
                    },
                    {
                        "value": "76e8218761750cc402628595b31c58ae19196258371e0e374f21b2cab527baca",
                        "timestamp": "2022-02-09 03:00:21"
                    },
                    {
                        "value": "2ed68e65e59325316e73d90be1a07071aff3f7e1431bd2fed94d06c1bd887fc2",
                        "timestamp": "2022-02-09 03:00:20"
                    },
                    {
                        "value": "4f4e2371c3a52e1ed316343e2bdec94a832793794c820da4be035e865fd15931",
                        "timestamp": "2022-02-09 03:00:19"
                    },
                    {
                        "value": "02123a89ddac869b20148825d4d486598c910a71b300937f4b461cdab90f960b",
                        "timestamp": "2022-02-09 03:00:18"
                    },
                    {
                        "value": "8485b407940d3662927cfe874877b32c166cf558d83401615a80054dceb26117",
                        "timestamp": "2022-02-09 03:00:17"
                    },
                    {
                        "value": "cc455bbac9ab070aa72fb73ea9dea1215cae08f8d14fb45b9f86468e27a3a20b",
                        "timestamp": "2022-02-09 03:00:16"
                    },
                    {
                        "value": "63a7acbc60dff309956eb78c12fdfef1e5898b3fdb3e3be6545da5c6fd782728",
                        "timestamp": "2022-02-09 03:00:15"
                    },
                    {
                        "value": "8a36ec119c1f6870ade43837bec677c14077b957fedb26bb20d88a0a850e3444",
                        "timestamp": "2022-02-09 03:00:14"
                    },
                    {
                        "value": "fead146c4267759f40ec41430d0301132b154f387b5ca74aea75a399c547fcaf",
                        "timestamp": "2022-02-09 03:00:13"
                    },
                    {
                        "value": "311007ccff02625b6edc2ca496a44d80be07fc096510073a68437029d5e30a03",
                        "timestamp": "2022-02-09 03:00:11"
                    },
                    {
                        "value": "8b572609409c48feef95d7607e771c514bc14fecc559e625e5b53c6c22b81f68",
                        "timestamp": "2022-02-09 03:00:09"
                    },
                    {
                        "value": "808b4e6b52ebca188dda8500017f9f8e6e0e8451434695b973ad0309d586202d",
                        "timestamp": "2022-02-09 03:00:06"
                    },
                    {
                        "value": "0df4dc8ae347545bffa537520df0a614d2a996f0021e4b7ced78995da8330797",
                        "timestamp": "2022-02-09 03:00:03"
                    },
                    {
                        "value": "d7b7ea1e24d4a72a17eebddcd34a189a40c8a75a4e427e57055584ad960b2eda",
                        "timestamp": "2022-02-09 03:00:01"
                    },
                    {
                        "value": "f969a9b46492c7755e34f34fb30acd47c2a1ff5ac054e099d60af761f983eda2",
                        "timestamp": "2022-02-09 03:00:00"
                    },
                    {
                        "value": "51f3daecbaaaabc039cbc60dbb3f6ec2e2be67d5987c224fcfc781a3d4de569c",
                        "timestamp": "2022-02-09 02:59:59"
                    },
                    {
                        "value": "2098dfed9589697b9c46197b9e4bd977c9711f35c7e2a43220fe1e50842b97bc",
                        "timestamp": "2022-02-08 07:30:29"
                    },
                    {
                        "value": "09be7801c1d01256f48f6c72beb080dc5947487b3e54260a2d5b16ad127e5091",
                        "timestamp": "2022-02-09 03:01:26"
                    },
                    {
                        "value": "35ab29f2d5e9a8c1f9601de00496dcd212d47f95d635d25cfca83b20d8e4545a",
                        "timestamp": "2022-02-09 03:01:12"
                    },
                    {
                        "value": "81b54a63fc9008280a57400b5b1680e7cd6325d0bee95f9b90ab9e057bab0e29",
                        "timestamp": "2022-02-08 07:30:26"
                    },
                    {
                        "value": "8cbdb0b0b50c751c0ba582b066c2a91148f941c2a932d7a7f11613b992ee5f76",
                        "timestamp": "2022-02-09 03:01:20"
                    },
                    {
                        "value": "c6f9b9b435a7856de84f7ad6a5209aee6512106f5a6b3bee32604d34cf3dff15",
                        "timestamp": "2022-02-09 03:01:07"
                    },
                    {
                        "value": "5c622e7613929c7ca76a503f08811df36daa204475d86fbaa77f4b02f18bfc45",
                        "timestamp": "2022-02-08 01:45:31"
                    },
                    {
                        "value": "d722f74a04f89e8f3af8e4cb5a43aeca14d07eee0e0c8f868040d5eb4baaffd9",
                        "timestamp": "2022-02-09 03:05:28"
                    },
                    {
                        "value": "0489ff6bfd5b164c01e89b67c1e69e6460d421927a15f5ae282090a031e8ad9e",
                        "timestamp": "2022-02-07 23:15:24"
                    },
                    {
                        "value": "b0b9194c5ba9457b323e0d234ad479a6ac877e4fae04d6c470bac7814c37576a",
                        "timestamp": "2022-02-09 03:05:37"
                    },
                    {
                        "value": "a21d66d5edd8ee101c33ccfbd13caaab839253abcde24e07ca897c2f3db40d78",
                        "timestamp": "2022-02-07 23:15:23"
                    },
                    {
                        "value": "a6e3287ba3c06b13560879f823c9e22d31e7f7585431efc40bcb0de7ca1f1322",
                        "timestamp": "2022-02-07 23:15:22"
                    },
                    {
                        "value": "d0a562ca584c4f7801c075a62cb6daa15bac1cd47a16e82c796f2d84c9c4ac62",
                        "timestamp": "2022-02-09 03:05:35"
                    },
                    {
                        "value": "1757f44695efc8be345368e22fc2a2bebad5e0db50d7060479bf0314365a25c6",
                        "timestamp": "2022-02-07 13:30:31"
                    },
                    {
                        "value": "dc13b89a6def01565bd55641862443034024d8d4bc94c41a9d7b84b8bc3a41ce",
                        "timestamp": "2022-02-07 13:30:30"
                    },
                    {
                        "value": "94edd3d0a5f1df1e374f48ef4bf60338c9d2d3507c235970f2ed38f0f92deebe",
                        "timestamp": "2022-02-09 03:07:52"
                    },
                    {
                        "value": "a9cda51b1e5f9fcb8e8dcb50e369b72c01ee9f00ae083f5968007f302a027dfa",
                        "timestamp": "2022-02-07 09:15:30"
                    },
                    {
                        "value": "491743ec3c6f54eee455832d71611e44c2e9ee18552e4e5d366ad3beec1da5f3",
                        "timestamp": "2022-02-07 09:15:29"
                    },
                    {
                        "value": "ee3f4daeb7c1c9a9aba13bb844a50039eb0986139128b80b0454a6519ac3f92a",
                        "timestamp": "2022-02-09 03:07:54"
                    },
                    {
                        "value": "452e66265a75230a38464c3851031b5396f38aa57c453491b86638f30133097f",
                        "timestamp": "2022-02-07 09:15:27"
                    },
                    {
                        "value": "cdc7a28f5bfae148bc0317f4bc0614df9744614a79c758d29f4f154f73712063",
                        "timestamp": "2022-02-09 23:00:41"
                    },
                    {
                        "value": "379ecfb132dd5fe9bbfa2d8f9ae84b40304c99a971b41197cc58069e6649e159",
                        "timestamp": "2022-02-03 04:30:27"
                    },
                    {
                        "value": "fa21a91e13ad6cef6ee73cde00d467833a3e1b59df266a2c286169197846dfd4",
                        "timestamp": "2022-02-03 04:30:26"
                    },
                    {
                        "value": "10a47ddd856a4ff1b62a8a53946c3648f4a7ccb06852c876dd3e88e1f389225e",
                        "timestamp": "2022-02-03 04:30:25"
                    },
                    {
                        "value": "ceded796db606e22aa713d8c120ae04869b7ffb491f42071877c7f3a0997963a",
                        "timestamp": "2022-02-02 17:45:26"
                    },
                    {
                        "value": "559a23b0ca541708f6f351d7d9fc0a1dcba07eca30d7179a50315bfbfbdf453b",
                        "timestamp": "2022-02-02 17:45:26"
                    },
                    {
                        "value": "119ea437cb5ae694422179aebea531e920d15cf25e00c46a24525ec62217878f",
                        "timestamp": "2022-02-02 17:45:25"
                    },
                    {
                        "value": "af76d21fba78a5d8231d2287f5871550b86910060f7428929fc2e4154d2f6bbe",
                        "timestamp": "2022-02-02 17:45:24"
                    },
                    {
                        "value": "97abde0ddb5b910f8fa45bcc1aec6ffda61ca0556b6c9ee7e175e51f9191db70",
                        "timestamp": "2022-02-01 13:45:30"
                    },
                    {
                        "value": "b7410552d5966bde6f3d202716677fdd1564387d1487c867d931293b96945c39",
                        "timestamp": "2022-02-01 13:45:29"
                    },
                    {
                        "value": "996a3191638df508632e48ed4a12eea2331addfbbb7556881219d67bfec13ba2",
                        "timestamp": "2022-02-01 13:45:27"
                    },
                    {
                        "value": "e396a39a8305b5815cbf04ed134d2eb49299d4cadf62e993e16b13a82870c4dc",
                        "timestamp": "2022-02-01 13:45:26"
                    },
                    {
                        "value": "688fbd4d6a6aea8c239a6d2d3d29a1798086b8a12a36596cad794f59f4eb25dc",
                        "timestamp": "2022-02-01 10:30:35"
                    },
                    {
                        "value": "c477fc432c558525f41b0a89c17154db0c9d9c984648d6076b0de853746909a2",
                        "timestamp": "2022-02-01 10:30:34"
                    },
                    {
                        "value": "9b40a78db58015040c6667b852d1593ba05eaaab8d124efcc984b12298fac314",
                        "timestamp": "2022-02-01 10:30:30"
                    },
                    {
                        "value": "01961cdaca303d4a01d8710389ba26d1f6b399bdc66b6edd36ed1c5660ac3dca",
                        "timestamp": "2022-02-01 10:30:29"
                    },
                    {
                        "value": "2f51361ffe7dc60a4088469a27e570f22cf655e87720d26626b4e257492739e9",
                        "timestamp": "2022-01-29 10:45:33"
                    },
                    {
                        "value": "edbdde920fd486b2b2639fda7348368cafda3b1fb7e508a9d4d9aa0703f81470",
                        "timestamp": "2022-01-29 10:45:33"
                    },
                    {
                        "value": "f36a543cfcddf76b99df925bf70b22d560792d1059387e00bfe782bffd6e8a2b",
                        "timestamp": "2022-01-29 10:45:32"
                    },
                    {
                        "value": "3bd7753cf4e9a1e7393344f24d83b7d5d963b5596f946d896cc9887529db215f",
                        "timestamp": "2022-01-29 10:45:31"
                    },
                    {
                        "value": "a4b28a6cf39efa971b06efd364726fdf7725ed7e1a86e2a2d86674fe5b642463",
                        "timestamp": "2022-01-27 18:45:25"
                    },
                    {
                        "value": "cb18ec40faf80b006fd0d3aadc4b83381a0c39c92744c455c2b77d7ed51a0f41",
                        "timestamp": "2022-01-27 18:45:25"
                    },
                    {
                        "value": "e098de78c5e66b02e950da2667922fb24c4485e26bb48b064faddc9f162bd1c9",
                        "timestamp": "2022-01-27 18:45:24"
                    },
                    {
                        "value": "f6119ea77e18fd62378b94a3108163b369e765da297497f7f214f9d0dc8d26f9",
                        "timestamp": "2022-01-27 18:45:23"
                    },
                    {
                        "value": "8e4dbc13b4d9de464b73f598ddc787d871571b85bd069c4bf13522fa1b1df892",
                        "timestamp": "2022-01-27 16:00:27"
                    },
                    {
                        "value": "2a6d83000aeecac2566e970e0dd21b62779cc32cf7261e9bf9276de5b96a79d1",
                        "timestamp": "2022-01-27 16:00:26"
                    },
                    {
                        "value": "903981fc6275f49fb416fbe06e4bdeb0a75b8289c316b768d7a54c6a42736800",
                        "timestamp": "2022-01-27 16:00:26"
                    },
                    {
                        "value": "1a784053c2c8be4fa2077e27e1474357d3c7f47c5cc822de12227a2c07748ab6",
                        "timestamp": "2022-01-27 16:00:25"
                    },
                    {
                        "value": "350688d79f628976cc64f4ef4315d7c87802d219679614f02682f10b92aa0651",
                        "timestamp": "2022-01-27 13:30:33"
                    },
                    {
                        "value": "f729ef4773c5f86ab1f3913df03fdbaaf4ee0df12b493e55cc49edba546bf16a",
                        "timestamp": "2022-01-27 13:30:32"
                    },
                    {
                        "value": "6c1e42d82a5ca24652648534ff7d00a5d0bfc307d4fcf0b6d1a2e656b7418867",
                        "timestamp": "2022-01-27 13:30:32"
                    },
                    {
                        "value": "7eba58136282484386fc69526fe5ead87a86d69f806ebc4e221e0879f895bfe4",
                        "timestamp": "2022-01-27 13:30:31"
                    },
                    {
                        "value": "833165744abc9fbfb3c0218e390eccb5dd9456bdbd65c6082fe1c3bb8f1a79cc",
                        "timestamp": "2022-01-26 15:30:31"
                    },
                    {
                        "value": "4315658e0a16bb96e94c4d34286622ec056c77fd677909cc4c0fb49dd478357e",
                        "timestamp": "2022-01-26 15:30:29"
                    },
                    {
                        "value": "d7111ee837aa260812a1fdf5ff6dafcb24e1d86bc9e4524db4f7dedf654ee4c3",
                        "timestamp": "2022-01-26 15:30:28"
                    },
                    {
                        "value": "01ebae401037d72616863932389d59d66d76e46a1b0fb65732c62f370f7a9838",
                        "timestamp": "2022-01-26 15:30:26"
                    },
                    {
                        "value": "7d56d8659445f8b67eee6479a3a9fe368c2aa2f8c2589fcd42496089d763cf3b",
                        "timestamp": "2022-01-25 10:45:26"
                    },
                    {
                        "value": "d095f19dcf8fefada3b643f7d79fd6ea4d9ae7edfb1658d0808b55f7fbad8f52",
                        "timestamp": "2022-01-25 10:45:25"
                    },
                    {
                        "value": "669cbaf863c1884d819bf663114e4e2839d4c27a33cc4479df91b70c62fbbb6b",
                        "timestamp": "2022-01-25 10:45:24"
                    },
                    {
                        "value": "3225813cbbc9973479f51c3ecdd6273b4892714757988a84d3f26cf9a9b8986f",
                        "timestamp": "2022-01-25 10:45:24"
                    },
                    {
                        "value": "3fce7479f98bc8c34a4fa1a0bb55d162a39121a458a0f49d768ec1f215d689c6",
                        "timestamp": "2022-01-25 09:30:25"
                    },
                    {
                        "value": "edddab090284f2bd22d4a30b9bbe352af5c0c357f72ab3d27154fdabf9fee51c",
                        "timestamp": "2022-01-25 09:30:25"
                    },
                    {
                        "value": "75f9ad2030967731a6e1722ea705b3a6eecd6189002646bac0eade4fd85ca4eb",
                        "timestamp": "2022-01-25 09:30:24"
                    },
                    {
                        "value": "7693a7f9092aeaa07efdd546e161292a50dc75f10f9dee46eab2893b49551604",
                        "timestamp": "2022-01-25 09:30:23"
                    },
                    {
                        "value": "dab7ab7eb49e234ff176d99f19706984aeabab597c2315e72d03b4c2289fbb95",
                        "timestamp": "2022-01-25 08:15:23"
                    },
                    {
                        "value": "67074859bf41fe817d62a27ca226aace7be421bdc76b6331d1c68dc18edb5023",
                        "timestamp": "2022-01-25 08:15:23"
                    },
                    {
                        "value": "3b7afdfc9a260a39d494ce04b95b8c15099a41696b9b910924e64d60132b1bcb",
                        "timestamp": "2022-01-25 08:15:22"
                    },
                    {
                        "value": "c7efd4197f59bb8d17b17773be0acd323dc02633b89764508e01378473d59197",
                        "timestamp": "2022-01-25 08:15:22"
                    },
                    {
                        "value": "0813580b17b76931726c3fd32a95a460eaf327f89c786117346a1f8ead1b270e",
                        "timestamp": "2022-01-24 14:15:32"
                    },
                    {
                        "value": "b6e8013ddf10f21517ed41bf21b57f37f82872adc052bf94ee2592d24fdb98af",
                        "timestamp": "2022-01-24 14:15:31"
                    },
                    {
                        "value": "d5f80e9387db18edbf4d102bbdb0fc8e9234674c9ccfd7e198f348c4be55e8bf",
                        "timestamp": "2022-01-24 14:15:29"
                    },
                    {
                        "value": "9b36fb58e33c10eeedee9591e5f6b1ba828a95cd21b2ec26cf603511b0b268e7",
                        "timestamp": "2022-01-24 14:15:28"
                    },
                    {
                        "value": "52a787e0c8d4921f3d27ab1a8c8a63021c8887aad0e0d803148fa24797d0c276",
                        "timestamp": "2022-01-24 07:45:33"
                    },
                    {
                        "value": "6649210336fcd67dfcf7796b9c5e81a7dafdcbaeed509b83e5313cd967de2ef0",
                        "timestamp": "2022-01-24 07:45:31"
                    },
                    {
                        "value": "1fd4ef8cbf4668005c04b14f37bc1cc45cc02c95a131f8e766e8a9292f053095",
                        "timestamp": "2022-01-24 07:45:29"
                    },
                    {
                        "value": "cc3aa875dfa50f91683398005b200c8b64e992553450a9c9d58023e5e6eeb44b",
                        "timestamp": "2022-01-24 07:45:28"
                    },
                    {
                        "value": "07ee89d7e9f665215c8cb4bb5290b358fe59d33231b7ede4a3cb415afb928054",
                        "timestamp": "2022-01-24 06:45:34"
                    },
                    {
                        "value": "d94c57f4fa051801cc6c995afc1b4a8364000d01d1b2f6176861fe4587b8b27b",
                        "timestamp": "2022-01-24 06:45:33"
                    },
                    {
                        "value": "95a201d4b2f0ec4ccdd5c4e1a9c905c36cdcf07bdddf46d9d4cf71f79036c49b",
                        "timestamp": "2022-01-24 06:45:32"
                    },
                    {
                        "value": "7a0a852b98b6ab642c2c3017510db837d52091d3ad495d4a69db6e7bc172c0e0",
                        "timestamp": "2022-01-24 06:45:30"
                    },
                    {
                        "value": "184dc6b6ce6b74a783d1f3cd67d85a4a36fb9ff237667af69936b1f836e47232",
                        "timestamp": "2022-01-19 14:15:32"
                    },
                    {
                        "value": "184dc6b6ce6b74a783d1f3cd67d85a4a36fb9ff237667af69936b1f836e47232",
                        "timestamp": "2022-01-19 14:15:32"
                    },
                    {
                        "value": "fe728b121fdf29e40350bcd8ae74b0b64d6d61bcdec64c01c51f4a03a6dca410",
                        "timestamp": "2022-01-19 14:15:31"
                    },
                    {
                        "value": "ea90f66929bc81e41f4ae8247e6d41afa289cd082ec62f013b6be04836fd8a83",
                        "timestamp": "2022-01-19 14:15:30"
                    },
                    {
                        "value": "fe728b121fdf29e40350bcd8ae74b0b64d6d61bcdec64c01c51f4a03a6dca410",
                        "timestamp": "2022-01-19 14:15:30"
                    },
                    {
                        "value": "db0a24e14c3fe78e46ad58a0a387e261c15049a39a7c7443b5b77492d07c5c3e",
                        "timestamp": "2022-01-19 14:15:29"
                    },
                    {
                        "value": "ea90f66929bc81e41f4ae8247e6d41afa289cd082ec62f013b6be04836fd8a83",
                        "timestamp": "2022-01-19 14:15:29"
                    },
                    {
                        "value": "db0a24e14c3fe78e46ad58a0a387e261c15049a39a7c7443b5b77492d07c5c3e",
                        "timestamp": "2022-01-19 14:15:28"
                    },
                    {
                        "value": "3fd33934fa41a62cdf46b4ca4ae5f3b2d5dc467a4f2c80045d3e69ae75cf4fda",
                        "timestamp": "2022-01-19 11:30:42"
                    },
                    {
                        "value": "5f5aa3a489b011ee46d3c845d8910c970d3beeea3cc4bd978e17e3890e7cce84",
                        "timestamp": "2022-01-19 11:30:39"
                    },
                    {
                        "value": "0af01b01fbca099f6b9dd63453f0073cc4a199f51ea47975808a9742cc1d3c6c",
                        "timestamp": "2022-01-19 11:30:34"
                    },
                    {
                        "value": "2c50debfbad6fe040d9b4aed2696a7b4896ed4f5857f96f04ebc62b95e0dbb1b",
                        "timestamp": "2022-01-19 11:30:29"
                    },
                    {
                        "value": "3e527c4d9d5d35e53ba2fc878b85c885a3f75a2fdd4f76efc407a7326219570d",
                        "timestamp": "2022-01-19 02:07:18"
                    },
                    {
                        "value": "84a258502341850cc85c99d790e56d9c547269911b58b0efec2e1588b7ceaf7c",
                        "timestamp": "2022-01-19 02:07:19"
                    },
                    {
                        "value": "fb14a5a064b165c664f7bc926a71395162ced1443210a329bbd49ce9c913aa74",
                        "timestamp": "2022-01-19 02:07:24"
                    },
                    {
                        "value": "d552f35307e9ce4ea735c7fdddb4bf737463daa68b19b8e02f19a45b3339b928",
                        "timestamp": "2022-01-19 02:07:22"
                    },
                    {
                        "value": "f8e7d5c5f599f420f3538eee570333d16564a453bfc5b69ae1fa7952c63e016e",
                        "timestamp": "2022-01-18 13:15:26"
                    },
                    {
                        "value": "b39b089fba72dcf9a1730b773ee82f48bb91ff4cb0e258594242494b0489af3c",
                        "timestamp": "2022-01-17 23:41:39"
                    },
                    {
                        "value": "aef2f0f4aeccd2ec0055a17bd1bbc8d405494aff66eaca5c76c4f83ff1cab713",
                        "timestamp": "2022-01-17 08:30:34"
                    },
                    {
                        "value": "7218c94691a6d69887f816cd92e30530698611c4f94e1f50eeb239f2bd3eeb3a",
                        "timestamp": "2022-01-17 08:30:32"
                    },
                    {
                        "value": "c3589a0288c0d81b8536069bb3aff326885739133a114a49dc50b7a0015a773b",
                        "timestamp": "2022-01-17 08:30:31"
                    },
                    {
                        "value": "34c73b45a213c0818ff15da43291aae7119069dbb7ecbc48bdfb04f9c7afb2a6",
                        "timestamp": "2022-01-17 08:30:29"
                    },
                    {
                        "value": "ed5dd750b015972fad51710f5d8df085ad2a5ba634766f317509aebc4c941aab",
                        "timestamp": "2022-01-17 08:15:32"
                    },
                    {
                        "value": "f167006496b7896a1e356dab7f75a4f0b68c1b15f99182bfaa0bf7a0e67d9f7f",
                        "timestamp": "2022-01-17 08:15:31"
                    },
                    {
                        "value": "1c0ebffff17cb0bc33637a04d6cf313cc22a4652fca74c29a74a3a2eb1aaca94",
                        "timestamp": "2022-01-17 08:15:30"
                    },
                    {
                        "value": "5068b78eb3bc654def466f25584df4410b45e5b99ebebd2e0b76086f1052ded1",
                        "timestamp": "2022-01-17 08:15:28"
                    },
                    {
                        "value": "d8722ea25b272799308ed667084a5080de6cce80ca8820c2685bf631aacbf8cf",
                        "timestamp": "2022-01-17 08:00:34"
                    },
                    {
                        "value": "e37844e22d1b83ad1595c2a344f0ee67de0e239b011384c6f74ff6439247b3dc",
                        "timestamp": "2022-01-17 08:00:32"
                    },
                    {
                        "value": "cc6182bda073b48f2132a2e598805bec9c93349f0153873d4c774fed92cb0bd1",
                        "timestamp": "2022-01-17 08:00:30"
                    },
                    {
                        "value": "506911844116e6b2545b049bbe75abbcc93822050231f9701b3c9be9100a89d2",
                        "timestamp": "2022-01-17 08:00:29"
                    },
                    {
                        "value": "eaad0fe6a049dd65cfe9d8d720b88a706b43e7512391d19e5cb8254f5b814d11",
                        "timestamp": "2022-01-15 09:30:29"
                    },
                    {
                        "value": "67f2ac673104bb3b17acde4dc66186d0481c142c9683db3e20c3eceb03b61baf",
                        "timestamp": "2022-01-15 09:30:28"
                    },
                    {
                        "value": "804cbcd95ad730b6256c954369e79f2c07dc432886d8da78490a1a9aed7f89c7",
                        "timestamp": "2022-01-15 09:30:26"
                    },
                    {
                        "value": "d549da9a1c1c1e21a1a02aa9151f605d5222438a39db1956318451401b4459e8",
                        "timestamp": "2022-01-15 09:30:25"
                    },
                    {
                        "value": "428181d7903c358f27f2607b8caf6468eaae1bff1a0b7747904db042cbc2cafd",
                        "timestamp": "2022-01-14 10:00:35"
                    },
                    {
                        "value": "87d380f12b61ff49af7680e3dd4cb7c0415be71811a565fa4736c6430e629974",
                        "timestamp": "2022-01-14 10:00:33"
                    },
                    {
                        "value": "881d216bda06fbcd5809ba113ee4574fb5d464dbe464e8627b52973c08dba5a3",
                        "timestamp": "2022-01-14 10:00:30"
                    },
                    {
                        "value": "9cb252d017b68a7906e842f51e5c9ba737567a6a85ba14666aa54c5c1b93ebb6",
                        "timestamp": "2022-01-14 10:00:28"
                    },
                    {
                        "value": "a13a93b385339555c7eaed52bde057334dd71992c1c9a5630e07a5f1dbf57087",
                        "timestamp": "2022-01-13 15:45:28"
                    },
                    {
                        "value": "e4b2e2599c891fada2431ceb21208462d222b6c3e3145a3b5eeabd41dc859598",
                        "timestamp": "2022-01-13 15:45:27"
                    },
                    {
                        "value": "1cdf3ccedd5b809baacb7a16b2bcdc6887fb238c4626cc8100ba4da9acff28d1",
                        "timestamp": "2022-01-13 15:45:26"
                    },
                    {
                        "value": "908170ce5c95a5c04a41e16be0e1445db7f3c056e920b1045c7246c2be427fd4",
                        "timestamp": "2022-01-13 15:45:24"
                    },
                    {
                        "value": "7790d5ffd42031c3ff83ca8e52631b69961d464ddac77a61394a6b14b77f4f0b",
                        "timestamp": "2022-01-13 15:00:43"
                    },
                    {
                        "value": "fdb88bdd898c3ac5007a304e11e0277ff10554ddeaff6c65bb0f031b58f0c423",
                        "timestamp": "2022-01-13 15:00:40"
                    },
                    {
                        "value": "7ed182a665beea7032bcc3e81fec285b7bba7caefba66112a667c93d227f0c33",
                        "timestamp": "2022-01-13 15:00:37"
                    },
                    {
                        "value": "7e8e3ec75b23fdc72afab38bdec1bae1e417bd7c7f09258812998c6904ec35f9",
                        "timestamp": "2022-01-13 15:00:32"
                    },
                    {
                        "value": "01ffea837e005f3c1b390c12f27e05fc1ef557dabd672ffa40682f26f069234c",
                        "timestamp": "2022-01-12 21:00:37"
                    },
                    {
                        "value": "c9ee02ec395cc10874ff870e3d1081e623d94cd8844582d6b6b3feffa976536c",
                        "timestamp": "2022-01-12 21:00:35"
                    },
                    {
                        "value": "965de97271f1f38f4a967f5301237a77b00fb891065a96b9eb2fcc1702e4a512",
                        "timestamp": "2022-01-12 21:00:32"
                    },
                    {
                        "value": "2adef6ca0568e8e886b9dee3d5ce2b9cefbcfb0dabc901f05efc81bfd633c9c2",
                        "timestamp": "2022-01-12 21:00:29"
                    },
                    {
                        "value": "3ed48959f718691c6c915222ce6fdb43adbfa637684e953a5a7558aae4c9cd68",
                        "timestamp": "2022-01-12 09:30:33"
                    },
                    {
                        "value": "98cf279974aa3cb680c2bd58758188f59795ce3f4ef4120947065c2276e22905",
                        "timestamp": "2022-01-12 09:30:32"
                    },
                    {
                        "value": "137cad3c9a1c30d8cc18fab2b64e1e31fb77e4556bc9e91418ac6debed34ccf9",
                        "timestamp": "2022-01-12 09:30:31"
                    },
                    {
                        "value": "12284cecf0579f21d5bd0550368103e18bccffddeb7cd05eb9de2b1fc71b3b73",
                        "timestamp": "2022-01-12 09:30:28"
                    },
                    {
                        "value": "718fa55bcfeef47bc5afe5377041c2ac87fbf56ec5e5e296f5646658badea109",
                        "timestamp": "2022-01-11 09:15:29"
                    },
                    {
                        "value": "6dc9ea6010db80c181ef2fea7d9009e05e15432bb3b4fdcc4075c13d98c97885",
                        "timestamp": "2022-01-11 09:15:29"
                    },
                    {
                        "value": "2614450acbe1bafe01cc458ff0221ce9819551af7a593cccb2d64d8ffc9bc346",
                        "timestamp": "2022-01-11 09:15:28"
                    },
                    {
                        "value": "f3177216f1ab22df46df294b1ef046bfadf80f40b9f343bc51b872965a896217",
                        "timestamp": "2022-01-11 09:15:27"
                    },
                    {
                        "value": "4cf7f006022cccca7b765957465998822214527c91437690c8f3d7c21cb7e2a1",
                        "timestamp": "2022-01-11 07:46:17"
                    },
                    {
                        "value": "25d4899163cbc2e03d3aac12c292f05ac3ed86267a3d98a3cbe17d8671590879",
                        "timestamp": "2022-01-11 07:46:11"
                    },
                    {
                        "value": "db2d5d67682843c056ec0325891a34cf42276c7d22a9641aae9740bc9ab1ec85",
                        "timestamp": "2022-01-11 07:45:57"
                    },
                    {
                        "value": "a67cc47030a67a9f6bad704da80c629cf270eedf3aee309e0cb0a1ef30f7a50b",
                        "timestamp": "2022-01-11 07:45:41"
                    },
                    {
                        "value": "ebcfc53df10283d3c19c3764f609cd5b8848ca146985f4044112d88d1455deb2",
                        "timestamp": "2022-01-10 15:30:30"
                    },
                    {
                        "value": "c9cbc27d84a1393c82d70022936262a495c5d87849d4f0bfab1b49cdcb09ac67",
                        "timestamp": "2022-01-10 15:30:29"
                    },
                    {
                        "value": "e721a98aba7fce7a6af5f381e018db614aa9b114e620213d5118b807d643ba38",
                        "timestamp": "2022-01-10 15:30:28"
                    },
                    {
                        "value": "ccc9bdb7d6fe705821245e9400b591aa0246bb1698fb680554c5c2b991ed1777",
                        "timestamp": "2022-01-10 15:30:26"
                    },
                    {
                        "value": "040cd65e51c5a7de2a9098d4989399ddbbffe7b4c2b5a2f9fe2243d17b2ebe72",
                        "timestamp": "2022-01-10 12:00:33"
                    },
                    {
                        "value": "a15aa89da9f5f87dad62333dca4d34358a10dc939ba64479d01a46675276bbac",
                        "timestamp": "2022-01-10 12:00:31"
                    },
                    {
                        "value": "8dac00305d1ec605a6a3c6ef3305a0b7fff955f7862f6d965906ab8d0d3607f5",
                        "timestamp": "2022-01-10 12:00:29"
                    },
                    {
                        "value": "14d3336545db199242d74284d1406f8f27c65de93d827dfa578f45f91621983e",
                        "timestamp": "2022-01-10 12:00:27"
                    },
                    {
                        "value": "c228223038b18f6fb031327a9471e502a5cf40d4b3cf87e6ded9cc3fdd9964ff",
                        "timestamp": "2022-01-10 09:30:33"
                    },
                    {
                        "value": "7e55c342443eccb76465cc36aa7b9a8cf3e4eaeea183685bb0565f6d46745411",
                        "timestamp": "2022-01-10 09:30:31"
                    },
                    {
                        "value": "16cd4a163cda21b2501d650ab0c0a4fce57f2d7845bdd42268a27d6bfbab282d",
                        "timestamp": "2022-01-10 09:30:30"
                    },
                    {
                        "value": "6d7c3090846a9b2c49370bc771aba3bce06900206e4cebf868de1da018d03656",
                        "timestamp": "2022-01-10 09:30:28"
                    },
                    {
                        "value": "b81b502e281bc0b2350909e4d3bc2f0695ca1113d44785780225c2d4e0244ff8",
                        "timestamp": "2022-01-03 12:45:34"
                    },
                    {
                        "value": "b5be3d4d448de23c66143bba58f00e3bb3384854f772d67f006665c520b6020c",
                        "timestamp": "2022-01-03 12:45:32"
                    },
                    {
                        "value": "9ef9b5b300f811052a2e8509085729ba236eb6df5fd719ee66b64a464b724fbb",
                        "timestamp": "2022-01-03 12:45:29"
                    },
                    {
                        "value": "c00acdb96f514d116753a05bc91fd543f0d20cf48895b206ebaa87981e638725",
                        "timestamp": "2022-01-03 12:45:27"
                    },
                    {
                        "value": "bbb3350855bc3e267c9c4ec7c1a7d54d7bd9f6c12a43ef56fa70f37df970bfc1",
                        "timestamp": "2021-12-23 05:45:27"
                    },
                    {
                        "value": "ff78da4db7f99d4e5fe6aed52ead944b329194ff456f35e6ccac6d216bc30acc",
                        "timestamp": "2021-12-23 05:45:25"
                    },
                    {
                        "value": "3acf1c3891674deba2cc20866002989512479c5e16154e8fbea0a068d9e4d970",
                        "timestamp": "2021-12-23 05:45:24"
                    },
                    {
                        "value": "aa1b5869c5293e9cd506a88c75e2410e593021c784615319f6f027ef7c7ff34a",
                        "timestamp": "2021-12-23 05:45:23"
                    },
                    {
                        "value": "dc09196b9b8c17379a18088ed99e2a4c4c9862caab7ae92f5c3bd3ac235d042b",
                        "timestamp": "2021-12-22 16:45:33"
                    },
                    {
                        "value": "514e4130c907379cb37409bc601a566e7dc23b1267f379f16d84ee6dd54cedff",
                        "timestamp": "2021-12-22 16:45:31"
                    },
                    {
                        "value": "6a03dd032b8dba7ac5d4a2fdb65b0108bab37102f21c761e1b4df1ce8c46782c",
                        "timestamp": "2021-12-22 16:45:29"
                    },
                    {
                        "value": "6399161322980907155fc176a3fbb34342e74656aebbb3f1f1dc3c21ceec7f4f",
                        "timestamp": "2021-12-22 16:45:26"
                    },
                    {
                        "value": "fe165074893f4e00ab4d7e835c98190e6f01751c964b1ef72240b5fb783b1267",
                        "timestamp": "2021-12-18 20:07:55"
                    },
                    {
                        "value": "fed21233449898cf24af01a24a9e552fa1c3f3684a4cc1411ae9240d1af5991b",
                        "timestamp": "2021-12-18 20:07:55"
                    },
                    {
                        "value": "eafb06c29b8894d02be209fc0b4192785f999041a42036e2b2463a5d09576ed9",
                        "timestamp": "2021-12-18 20:07:53"
                    },
                    {
                        "value": "ddedd1eb01aa4a575922cf3ffb033cc8f5829db70dd713d33cc1ebf4a6347d29",
                        "timestamp": "2021-12-18 20:07:52"
                    },
                    {
                        "value": "eac48bd4fd05338ee4fcc2c1865a06ddc1202efcefe7275f116f6fd65038e128",
                        "timestamp": "2021-12-18 20:07:52"
                    },
                    {
                        "value": "d9817c00aa2cd8feb54b093b989c197cc7dd25ca1f1fb9dc1be52c34d0d91c4c",
                        "timestamp": "2021-12-18 20:07:49"
                    },
                    {
                        "value": "db6f40085b92bef5a00af77dd0e4b7b0c51433d347d035e87f8a255dc12b4e41",
                        "timestamp": "2021-12-18 20:07:49"
                    },
                    {
                        "value": "d58bd22ab960017dd07c9efd5c4da79760a02a14efbc86c74e393c2682a85058",
                        "timestamp": "2021-12-18 20:07:48"
                    },
                    {
                        "value": "d7b00e8e318a35d084b8460c81c7f5cff8a6e05c62587c500964c969b790054d",
                        "timestamp": "2021-12-18 20:07:48"
                    },
                    {
                        "value": "d1680fd04612168f6c47216fba1a21d3f576884941513ca45ea44c5cc12f5c28",
                        "timestamp": "2021-12-18 20:07:47"
                    },
                    {
                        "value": "cf9ffb47912e851445f0909fd224cb4c59a09b447f2e537e030f999143555675",
                        "timestamp": "2021-12-18 20:07:45"
                    },
                    {
                        "value": "cab6b859ddfcade1a195b50b3250214a7ec90f3a9e8b61affb344d578040d4c2",
                        "timestamp": "2021-12-18 20:07:44"
                    },
                    {
                        "value": "cf5ad7f0cf2c90201ad374d43e9b7f3f28d3c12e56cc1cadae242ee3452ddbc6",
                        "timestamp": "2021-12-18 20:07:44"
                    },
                    {
                        "value": "c69e9081b1ecaa8b60fb92b72ca5fb49c669a525e4cac10803cbe04cdf23ceac",
                        "timestamp": "2021-12-18 20:07:43"
                    },
                    {
                        "value": "c5cb3be3063cf7ed4cf4385f8f0a0e6c8cc931190ba4d95ed2c0a1bf4722afdc",
                        "timestamp": "2021-12-18 20:07:42"
                    },
                    {
                        "value": "c5e30ba7109f8c474152f1a64dabe02e801f5ddc8313390954e1bbb5e04ce772",
                        "timestamp": "2021-12-18 20:07:42"
                    },
                    {
                        "value": "c1f1638b9cc92fcf80d52a33da1e5f71adb193616358bb9b3349f69d203c8bed",
                        "timestamp": "2021-12-18 20:07:41"
                    },
                    {
                        "value": "c1d2c68c54f57ca6bbb2ecc96f25ec3c0808c3e0194c31e6cafea5900ccbc762",
                        "timestamp": "2021-12-18 20:07:40"
                    },
                    {
                        "value": "c1d9b04bca7264c76a2eae6357f6a2fc931237f374db992a926db9dd714b85c5",
                        "timestamp": "2021-12-18 20:07:40"
                    },
                    {
                        "value": "bb727e3ccf2cad49fa431905c08dd6c9f52e880a8d290b8f0c4842f1ac50ce1e",
                        "timestamp": "2021-12-18 20:07:39"
                    },
                    {
                        "value": "bbab7d11f8109b09907ddf192487cac5431c363e020ec31360f40a89638e17e4",
                        "timestamp": "2021-12-18 20:07:39"
                    },
                    {
                        "value": "b65b34a54593add5ada0cc781f370a27c19af92ff0f2621b1539efd90a001cde",
                        "timestamp": "2021-12-18 20:07:38"
                    },
                    {
                        "value": "b83f53f67a2b2fa4d2abf6a0ce7b75542685661deaac9aeb2159f5e25977e10e",
                        "timestamp": "2021-12-18 20:07:38"
                    },
                    {
                        "value": "a799478da5b669b4c059c92eb832098df4c20bbf3767eb6d047261e896b7ce90",
                        "timestamp": "2021-12-18 20:07:37"
                    },
                    {
                        "value": "a1cee0df58300326bec2bf75f99722214645e64f1b486b789adfc11149d06b76",
                        "timestamp": "2021-12-18 20:07:36"
                    },
                    {
                        "value": "a358f9eb5bcd5300fa83d2080d4ec9f1996b5fedbc5b6f63a4d95738c8d99704",
                        "timestamp": "2021-12-18 20:07:36"
                    },
                    {
                        "value": "9622cd6636f0a62b0169c0adea23178cd6203a85ad3146028849713b8c128ef4",
                        "timestamp": "2021-12-18 20:07:35"
                    },
                    {
                        "value": "95e9065c107af5694662b5876912efca5c2f07b578feba2f993d4f98cd2ddf52",
                        "timestamp": "2021-12-18 20:07:34"
                    },
                    {
                        "value": "9068ee310ee68c36cdd12fd65ec52e56f00be47036c6accf6b46a0817971a2ad",
                        "timestamp": "2021-12-18 20:07:32"
                    },
                    {
                        "value": "9094f698d425e87cb12f49850c9eea6108428487af986333eb4bc50b86de187c",
                        "timestamp": "2021-12-18 20:07:32"
                    },
                    {
                        "value": "83c0d7b14131684d2a71fb69258daeeb299788c6a6e44ac07a5680d63ab023ec",
                        "timestamp": "2021-12-18 20:07:31"
                    },
                    {
                        "value": "895a3f8a366ed73ca1cab8ef49582ada6382880654ab28e95b2902cde46e3726",
                        "timestamp": "2021-12-18 20:07:31"
                    },
                    {
                        "value": "7c34a42f15d45cdb43971aa15f888e01484e661c605258293865c0aef367d9f5",
                        "timestamp": "2021-12-18 20:07:30"
                    },
                    {
                        "value": "7532843070bc15b8f344e854f792fd7238819519a9c6bd048030a3575bc2c891",
                        "timestamp": "2021-12-18 20:07:29"
                    },
                    {
                        "value": "6c532072afc3da7dbda6935748db1822fa21a6e6ec59bdc55e06292e453c5726",
                        "timestamp": "2021-12-18 20:07:27"
                    },
                    {
                        "value": "5a00c69b3acbacaa3837bdd2f30ac534eb872da62d8a325007277793e1fbaeee",
                        "timestamp": "2021-12-18 20:07:24"
                    },
                    {
                        "value": "5f106061b9499fde088abe74621a0bad77854f997fcbd731d8527aaf37379b6d",
                        "timestamp": "2021-12-18 20:07:24"
                    },
                    {
                        "value": "599464ea222d3dcfb52b46f2c59c87c68c0ffd81f22f1cf5f1c9b0c4ae2ea22a",
                        "timestamp": "2021-12-18 20:07:23"
                    },
                    {
                        "value": "58d629a9be2cca504f1ddf4ed0022fb4eff0e4daf6569a13d432084d7b272b94",
                        "timestamp": "2021-12-18 20:07:22"
                    },
                    {
                        "value": "59365d6f6ac64815147cf32f96babc5a6ff402ad0385564c1ea4e2703c8db788",
                        "timestamp": "2021-12-18 20:07:22"
                    },
                    {
                        "value": "55c148940848d1a9547627faa5d91e0fa1b367607fc5a33d1cdbb266c920fb34",
                        "timestamp": "2021-12-18 20:07:21"
                    },
                    {
                        "value": "549339c559964c23f25b72c7160858295bc4b5451110f8e4fb5d64e7328911f3",
                        "timestamp": "2021-12-18 20:07:20"
                    },
                    {
                        "value": "4e5daccda1624bc3412f03c4876f1254f57fe07fcbfe730e5a25b4c50a29c34f",
                        "timestamp": "2021-12-18 20:07:19"
                    },
                    {
                        "value": "496f4fa25bb7ab2632fb95b1f85c03b6c89a1546d221db29d4512dd75fad62e3",
                        "timestamp": "2021-12-18 20:07:18"
                    },
                    {
                        "value": "3df3b989eee8bec7d4f9f65e865335e311bd578308cf3b53c0acc5af48bc073e",
                        "timestamp": "2021-12-18 20:07:17"
                    },
                    {
                        "value": "34bbcedd23565539c07f2dae6dab4ce7ad92ac34557ad481d64d79f329f49776",
                        "timestamp": "2021-12-18 20:07:16"
                    },
                    {
                        "value": "31d8d2f77238b76a14df9abb0e36e353b2eecf2209468ec7a958fc7072c1700a",
                        "timestamp": "2021-12-18 20:07:12"
                    },
                    {
                        "value": "24198e6120171960649f2ea10d3a4d13291040c62f140fb33d5f527970788700",
                        "timestamp": "2021-12-18 20:07:10"
                    },
                    {
                        "value": "233d30fc567199f5cda64e5c18091c5d9ae329b32aa8e4be23c0edb534a9b49c",
                        "timestamp": "2021-12-18 20:07:09"
                    },
                    {
                        "value": "1f0573284ea83d62476e97156074ba2a7a1f046e21cbe82244234725999e1bbf",
                        "timestamp": "2021-12-18 20:07:08"
                    },
                    {
                        "value": "12e3736cdbc5f8fdfd9d4b02d19dafb58f3c9990964ee589eb4f18aaf3f75ef2",
                        "timestamp": "2021-12-18 20:07:05"
                    },
                    {
                        "value": "09f0847ad19e4165be682c96712cd389331613577f92b1bcb61a401ebff796de",
                        "timestamp": "2021-12-18 20:07:03"
                    },
                    {
                        "value": "06f79ffcfd99529684e39c3cf6b07219f9ddd6b76952af83bc96adc7aecf442b",
                        "timestamp": "2021-12-18 20:07:02"
                    },
                    {
                        "value": "0300502f1a1664d90992dd340006df7c7852a2c33121e7ee95192ee0b0209fab",
                        "timestamp": "2021-12-18 20:07:01"
                    },
                    {
                        "value": "b14df7e61bbbe9158b2851136d18c942b22629df86ccf9d25a0522da43eee9a2",
                        "timestamp": "2021-12-18 20:07:00"
                    },
                    {
                        "value": "68d5f38cf9d5f63d9d59335905a5576ff8820fd26d3d4844641fcb6ab9e56170",
                        "timestamp": "2021-12-18 20:06:58"
                    },
                    {
                        "value": "8c6c641775d3ba8e0eae9b87da749bbf011ceaae1e4d80465e17e77ffcac7c2f",
                        "timestamp": "2021-12-18 20:06:58"
                    },
                    {
                        "value": "44d0cf2a33b1d54e4f78404b7fc2b41f6ea4801aa3cc6650e757c8e6100f18a5",
                        "timestamp": "2021-12-18 20:06:53"
                    },
                    {
                        "value": "40ff5e22f928f47defb8c81c6c141103cdbf82d3faa6ff136f8d88c969b38dad",
                        "timestamp": "2021-12-18 20:06:52"
                    },
                    {
                        "value": "5263010ddf4f0f3d560f51784aca0616e6d3453da0b1b7d904239a7e61c4c35a",
                        "timestamp": "2021-12-17 10:00:34"
                    },
                    {
                        "value": "024f39768406b572ac762e43ada581d3984bfbb75fdfd62c757a7b721edc5533",
                        "timestamp": "2021-12-17 10:00:31"
                    },
                    {
                        "value": "cf78fa206cf686d1431efa889d4b2c7d60395a92834131d2c043074082842411",
                        "timestamp": "2021-12-17 10:00:29"
                    },
                    {
                        "value": "81a2a0560cb2a3f3f30d8a3ee5b0e3a5ecc906f52c998dc392f00e9e9c4ada3a",
                        "timestamp": "2021-12-17 10:00:27"
                    },
                    {
                        "value": "17974ec4d43329e8153d9cc9781dd415853e18705663ce0c6f40a4373f38e502",
                        "timestamp": "2021-12-15 12:18:08"
                    },
                    {
                        "value": "1a7558815754b8ef4544a9afbba9af71bf419664bde8af9505ca7b312cc58f0c",
                        "timestamp": "2021-12-14 21:00:31"
                    },
                    {
                        "value": "8ed1c215ff3b6376e8bd6caa9b67b8b63b9545d0895c6d3d221bcded292cf4c3",
                        "timestamp": "2021-12-14 21:00:29"
                    },
                    {
                        "value": "4d37e0f158ac2c13fe2b6e0b17167e6171aa5721cd04e423fcf81ce82fe1208c",
                        "timestamp": "2021-12-14 21:00:27"
                    },
                    {
                        "value": "67a8a96b422ff70fdbcbcdc73f9868d1ae4481ef3a017e073afbd65e5ed54c40",
                        "timestamp": "2021-12-14 21:00:26"
                    },
                    {
                        "value": "c724c174e2581b4178368c3290e0cb71a2c87ede2a9e8228733507ff90b18ddf",
                        "timestamp": "2021-12-14 20:45:29"
                    },
                    {
                        "value": "11c493f071a37154525990bacd3c84efcdd751719ea82786a36a7503911a4d95",
                        "timestamp": "2021-12-14 20:45:28"
                    },
                    {
                        "value": "7c47af2cb3f897d3701c450e1d07f176186e633a41b3e962a2de7d56631144d0",
                        "timestamp": "2021-12-14 20:45:27"
                    },
                    {
                        "value": "f81515cab1236a81c4816226870b8609a31640badd83cbfb33c6eb252b7f52be",
                        "timestamp": "2021-12-14 20:45:26"
                    },
                    {
                        "value": "524f4bee46fc825847c3ca6ff14b3d457e3a3d3629ab3b9489b6716c275976a8",
                        "timestamp": "2021-12-14 15:30:27"
                    },
                    {
                        "value": "0e4bb734d0a33b7aec004bf9ce7cd6ac9b397ef3bd14764a78a6bd89b7cf192a",
                        "timestamp": "2021-12-14 15:30:26"
                    },
                    {
                        "value": "4a96a7f5faf99592bc2910c416dc7d1e37e47b1a38cf7e4f31ebe14956fb5c61",
                        "timestamp": "2021-12-14 15:30:25"
                    },
                    {
                        "value": "686a4da886d771e51589d9833a440a2e54066dd95e688569dd3f89827fb89f91",
                        "timestamp": "2021-12-14 15:30:24"
                    },
                    {
                        "value": "5d45340abc85f29cda964422fb1aef8c2db382c611428f1ac5269bcd1d2a43c6",
                        "timestamp": "2021-12-13 13:45:28"
                    },
                    {
                        "value": "ddf76c4f45352c73bf4a8ed9e90d8b5b4b768eb1a4ad7e211e62e3e8b9d6c405",
                        "timestamp": "2021-12-13 13:45:27"
                    },
                    {
                        "value": "30e3bb352efd26f26f06e328a399fabbc9a92075123d06316fd57feb54ca083e",
                        "timestamp": "2021-12-13 13:45:25"
                    },
                    {
                        "value": "8fe42856624d188e3d87069a55eb56dc1aa42a798bf283d7b8ed55d4bb373bd9",
                        "timestamp": "2021-12-13 13:45:24"
                    },
                    {
                        "value": "5f4f3915167ace66e331b59cb9b8774cbeca725de173d6ada724d83bebf638ce",
                        "timestamp": "2021-12-11 02:15:27"
                    },
                    {
                        "value": "faaa858188b945fb78db843189fa2018c2e0e5d18031c5dc86c28ad5d425c0b9",
                        "timestamp": "2021-12-11 02:15:26"
                    },
                    {
                        "value": "4687fba791246d45216358ee2d0e47d9c62048a413f94f4e05c5273d8db6df5d",
                        "timestamp": "2021-12-11 02:15:25"
                    },
                    {
                        "value": "e9d4e1d940cf91ae1ac6f55671522ff489b3d330239758b2d5f9c2cd62d481b4",
                        "timestamp": "2021-12-11 02:15:25"
                    },
                    {
                        "value": "90edcea96c2e51a783328247bfc85dcbef2819da21918d20904d6464fd5a316c",
                        "timestamp": "2021-12-10 11:00:39"
                    },
                    {
                        "value": "7fc37999a4673259836bbbf8247d84b51f7dfe95400766dc0aa15fda48fb74ed",
                        "timestamp": "2021-12-10 11:00:37"
                    },
                    {
                        "value": "0ed8c9fc44e5ec6ebed7f608b9e035b7e75c765abca07f66203b30b74a36dc4a",
                        "timestamp": "2021-12-11 00:50:18"
                    },
                    {
                        "value": "3b8c6beea26f75eb2bf0df025ffd886e2969c2035a4726dac95fd9ee2c528d45",
                        "timestamp": "2021-12-10 11:00:30"
                    },
                    {
                        "value": "cf05c45bd2958ec348c478bf47f1b841625fac71ea6a671f93af815efb11ddc1",
                        "timestamp": "2021-12-09 17:45:31"
                    },
                    {
                        "value": "348591c788c82b45acd472c5e00a3a919ebfb02b9b71402ed9c33fe08d577f44",
                        "timestamp": "2021-12-09 17:45:30"
                    },
                    {
                        "value": "ce436b0c872329b10cee18860347ba76a1954d8518cac2199f4e22ab9454e658",
                        "timestamp": "2021-12-09 17:45:29"
                    },
                    {
                        "value": "670a0e1eb6d2c10ae1da872a5a8c81cd5bcb45b8266c5ba92c5c929db594fd3c",
                        "timestamp": "2021-12-09 17:45:28"
                    },
                    {
                        "value": "67d6fa1f7b3bdbd6cf84b82aa47ce0cc24bf9cdede193a3e4546aa26a074c2da",
                        "timestamp": "2021-12-09 06:03:02"
                    },
                    {
                        "value": "e54eb7ce893ea0a8a67f8158bc067fa86edb3324c4733c3f7b8daaaaec314052",
                        "timestamp": "2021-12-09 06:03:01"
                    },
                    {
                        "value": "fe4162f4e2c9c52fe56a94d37b5c88eb68f8a066dde33893fee8d0f1b840064c",
                        "timestamp": "2021-12-09 06:03:00"
                    },
                    {
                        "value": "7d85c4e26c39b223013cb26f0f6595c260b5f11bca46bff7193cf9c51febe690",
                        "timestamp": "2021-12-09 06:03:00"
                    },
                    {
                        "value": "07ed6b199d92341762391c3e40e3e66d3ac9558d2faa694ce81e7f3b204b2df8",
                        "timestamp": "2021-12-08 17:45:36"
                    },
                    {
                        "value": "0f45002980ff784c720d20c170c6e6f61fd3e3ec4fce2a21e6c8a7b46bb7a7f7",
                        "timestamp": "2021-12-08 17:45:35"
                    },
                    {
                        "value": "72306b4a1a1c40e92f71e050879a5cd8cfcdaa249ef3314ab8b13320f7e36d72",
                        "timestamp": "2021-12-08 17:45:34"
                    },
                    {
                        "value": "67eeedad4684edb316db440c95474347c4289d9866cd77eb775579a1e0ff3d03",
                        "timestamp": "2021-12-08 17:45:29"
                    },
                    {
                        "value": "0747b267340f296d0c2f3859e70434e3e2576ca662b01ee79bcf2e396ba5928f",
                        "timestamp": "2021-12-07 18:45:32"
                    },
                    {
                        "value": "dede15df8197f63010fb726983f691182461b5471f4309becde787714693db50",
                        "timestamp": "2021-12-07 18:45:30"
                    },
                    {
                        "value": "0caa902c368a65916d2fadd10fa10e4d924af64f4e3c17732ceb7142f2b4ec7b",
                        "timestamp": "2021-12-07 18:35:47"
                    },
                    {
                        "value": "4416b3d0dd3d1d8566cfb279b45c4f1ec653de8f5a133f9e85e755693eb88d8b",
                        "timestamp": "2021-12-07 18:35:43"
                    },
                    {
                        "value": "6f899ae59c184d9e9b9798e1304999fc2004c4e3c04f2d33c0fda1ef5f2fd939",
                        "timestamp": "2021-12-07 18:35:41"
                    },
                    {
                        "value": "b8cd18156e15e6dd1eae62d6472152d015309799c98a8ac1fa4a2e7ab81eb49e",
                        "timestamp": "2021-12-07 18:35:39"
                    },
                    {
                        "value": "e7629c10d98b4f80232ed640a2232269bcd8a727b78f3c01dfc86a058ddffe8c",
                        "timestamp": "2021-12-07 18:35:38"
                    },
                    {
                        "value": "b28ba5ece1551484bd5b28fbf7e701d03a4cf7969839b98aca47bbb4d6a0b09e",
                        "timestamp": "2021-12-07 18:35:36"
                    },
                    {
                        "value": "f09b7be17b300230181650fd4ca21dea1c6949c794f8ffb132de526f70f8d58d",
                        "timestamp": "2021-12-07 18:35:34"
                    },
                    {
                        "value": "a32c6199248e24889f6e4a50c1eb512401090850d491726af56dee3218520a88",
                        "timestamp": "2021-12-07 18:35:33"
                    },
                    {
                        "value": "72d66b77bf74040c75ccbe723b24ea56d0a6ac0cef16bcd68a68a054c04b67b9",
                        "timestamp": "2021-12-07 18:35:32"
                    },
                    {
                        "value": "98a582cea388113fa13c1797c7f9ff1c36bdc00fc25bda839373087ca6b35345",
                        "timestamp": "2021-12-07 18:35:31"
                    },
                    {
                        "value": "9d449c058dcdaae63205924da47742565c4ffc5f18af27b02be22914a9348b0c",
                        "timestamp": "2021-12-07 18:35:30"
                    },
                    {
                        "value": "be717325cbf988c88b050631a33e592f6e050b4568234e978af095536a6cb7e0",
                        "timestamp": "2021-12-07 18:35:28"
                    },
                    {
                        "value": "4c2041e94f665d78b253cf9f56eaf702e08954f9cafd847867471ebf012af94c",
                        "timestamp": "2021-12-07 18:35:27"
                    },
                    {
                        "value": "b52ad386acad7d59ad61fe318733a2b5ad3d9a07eafc17ab0a77c7fe2d8ded8a",
                        "timestamp": "2021-12-07 18:35:26"
                    },
                    {
                        "value": "c3b1ac882119ac598f2040eff35c37f17673d080bde463037e153df714b60c77",
                        "timestamp": "2021-12-07 18:45:26"
                    },
                    {
                        "value": "7a94391eeeee3c5bc742105a4944345d8d3c0c616d002b00a77bf8b48eabdd1e",
                        "timestamp": "2021-12-07 18:35:23"
                    },
                    {
                        "value": "738bde0957d2c108d8c3c965e09a5f31ef9a35014d7b3c2756a7f92f88a6553b",
                        "timestamp": "2021-12-07 18:35:22"
                    },
                    {
                        "value": "3240c6a8e8bcd54b5648d946e7733ed64e1797930c44bb9067f562a46cc43594",
                        "timestamp": "2021-12-07 18:45:33"
                    },
                    {
                        "value": "1da487dcf49ac5e7f76e0cf453f80975a35c74689d39135f7758440054035772",
                        "timestamp": "2021-12-07 18:35:10"
                    },
                    {
                        "value": "92850b0540932a668f679582c98d67aca4149d45bcad96dc393078b954b4a622",
                        "timestamp": "2021-12-18 20:06:59"
                    },
                    {
                        "value": "5a3e05cc8140c58c6ae54ef96b726368210f5e1635d1fb4902161db57ff174ec",
                        "timestamp": "2021-12-18 20:06:55"
                    },
                    {
                        "value": "5a34fe215cbc5f45a4f9faab0b57dcac5ce695d1d298f8899e22baf363d39dc6",
                        "timestamp": "2021-12-18 20:06:54"
                    },
                    {
                        "value": "69247f818f2e77020bc2f01597b63b96959e65b06c90989b993fd31c8795ee09",
                        "timestamp": "2021-12-07 18:34:57"
                    },
                    {
                        "value": "779fab5e3826ba8165c00507f22d08a0a81dd321d36b3426190565d87c1ffe6b",
                        "timestamp": "2021-12-07 18:35:13"
                    },
                    {
                        "value": "650906c59a17fc343cc1ecdee10567c37b48063d3a476f76da261befa0667da7",
                        "timestamp": "2021-12-18 20:06:57"
                    },
                    {
                        "value": "c004cf20f130b80a6a52e8999ed94795d1fd9f8ae35ccda173bcb2cbeccf3888",
                        "timestamp": "2021-12-07 18:35:44"
                    },
                    {
                        "value": "e2032fcba67c92e56311c427dee4b14f5774adaa95ae9d7990e5e0dc19157afa",
                        "timestamp": "2021-12-07 12:15:54"
                    },
                    {
                        "value": "4f68d7352e104d5eac36c27fd94ebd352aae06cc335f363df2f9de78933ed92d",
                        "timestamp": "2021-12-18 20:06:53"
                    },
                    {
                        "value": "94ce17c9c372fa3b45d1a0791b4eae3b851938c019acb583d5d72d33a68303eb",
                        "timestamp": "2021-12-03 11:15:29"
                    },
                    {
                        "value": "269ba4d010f5ca07dd2353a905c93a54be10125d02d82a5e52cc34f5d259ef81",
                        "timestamp": "2021-12-03 11:15:27"
                    },
                    {
                        "value": "6b6139f189a8cb239541abbe0778bc53030371cfe990f995e26d17f78ef72a40",
                        "timestamp": "2021-12-03 11:15:26"
                    },
                    {
                        "value": "d6ddcc67e004e49f484209302dad449869b270a57ec597da4ad3c4a72ed261eb",
                        "timestamp": "2021-12-03 11:15:25"
                    },
                    {
                        "value": "e7177244e16656b6f747d201f85084411e6553e5763abc35146b43669e402dc6",
                        "timestamp": "2021-12-02 13:20:35"
                    },
                    {
                        "value": "9bd68785e552867b6a4da95e213ffe8bd22f6aa17d845476e115591b15034b71",
                        "timestamp": "2021-12-01 22:03:22"
                    },
                    {
                        "value": "2327df8853c7f67ab43cda8c3f0494f148f74682aecaa685fd932bcc2b4df5a1",
                        "timestamp": "2021-12-01 22:03:21"
                    },
                    {
                        "value": "8ccaaec9345c5c598bcbe15e6c526aa6637474164ff65fa3d376f5435ea6c1d0",
                        "timestamp": "2021-12-01 22:03:19"
                    },
                    {
                        "value": "fee0780cf99da7110b447206c6ab6a3edd658fc2c004c876b22d8194594265f4",
                        "timestamp": "2021-12-01 22:03:16"
                    },
                    {
                        "value": "fea006e31556601c71abe482c85deb5a5d2bec8c06f98389388c14fefd7d173b",
                        "timestamp": "2021-12-01 22:03:11"
                    },
                    {
                        "value": "2b4a20c7ac0f31d680f8f86f10d31381040715e16cd9f605429d65957a917c4c",
                        "timestamp": "2021-12-01 22:03:08"
                    },
                    {
                        "value": "edf67a7d8fa56386362b64c7d4d6ba008a4c9f9ff18a723976367825611d3431",
                        "timestamp": "2021-12-01 22:03:06"
                    },
                    {
                        "value": "ac3178afda976f1bf3e9f95dc051df3fd78944dab6bf03e29fa44fe4f8bdd5d6",
                        "timestamp": "2021-12-01 22:03:03"
                    },
                    {
                        "value": "aa046cc9b64f22a6ee1cd457b22853c088093b815ecaa255b45f3b5ccc6f0971",
                        "timestamp": "2021-11-30 09:44:12"
                    },
                    {
                        "value": "4436cc09ee4f300bc4cf535203780d70be70944869114e94afca4a59e3923c58",
                        "timestamp": "2021-11-30 09:30:34"
                    },
                    {
                        "value": "1affdf0d092cd813aa7e357370cbdd5f6f578c481fb0dc3c0e7d9191bd53fb00",
                        "timestamp": "2021-11-30 09:30:32"
                    },
                    {
                        "value": "e3a04f56354b8f46d50a34c0552aba944f9abf0d9bf06c227854ef91c6eb5032",
                        "timestamp": "2021-11-30 09:44:53"
                    },
                    {
                        "value": "a5895392d48e05c2a02adc3f8a0888055de3a8256b70b27f2e149b4c0fb3381e",
                        "timestamp": "2021-11-30 09:30:28"
                    },
                    {
                        "value": "df59bc80a105bcc98613c3ce0b6635f69359a99ba44865db21d46a3fb8cbfff7",
                        "timestamp": "2021-11-30 09:02:03"
                    },
                    {
                        "value": "b67267c35e4699546a2c0f2f99e1a8ec5bd2d635e5806a6acf34ba55f8b6081b",
                        "timestamp": "2021-11-30 07:30:26"
                    },
                    {
                        "value": "99876ba3443f83eb1570141b55c44a1be4685d10fd329dc15f5439bfdb4c5419",
                        "timestamp": "2021-11-30 07:30:25"
                    },
                    {
                        "value": "ddb3a1e2cbe935cacee9efb5dcf77e0bc7cbde8a58a8310ad6d348688e27247f",
                        "timestamp": "2021-11-30 07:30:24"
                    },
                    {
                        "value": "a336b2bf26db4ce727321b48aada37c5840e9388744661382fb6450212fba2d0",
                        "timestamp": "2021-11-30 07:30:23"
                    },
                    {
                        "value": "2a628a99aff46211c226faea2cf29fefdccc5f524465dc67257c835c9794011d",
                        "timestamp": "2021-11-30 07:15:37"
                    },
                    {
                        "value": "d592315754aa7d11a26533fdd92dc893072f45c75bdbc2775d2c06ca0aae43cc",
                        "timestamp": "2021-11-30 07:15:35"
                    },
                    {
                        "value": "db8dc990c4e78e7bbac6b3ee362f26ec7ec515423cc980c86e2bd980c023ccc3",
                        "timestamp": "2021-11-30 07:15:34"
                    },
                    {
                        "value": "5793601069fdaf8e8e7495f97d8c121cdad3fc1a7ba2ac7039fd19c656e7e714",
                        "timestamp": "2021-11-30 07:15:32"
                    },
                    {
                        "value": "9b9796e541263dc94be2a133cc4aff4667296fdf5fab863957d02ef35611973a",
                        "timestamp": "2021-11-29 21:45:14"
                    },
                    {
                        "value": "780d72b9fcb56f2bfa564e631b3a61f0e018620e0dc884535cf5cb22d6c94eea",
                        "timestamp": "2021-11-29 21:15:28"
                    },
                    {
                        "value": "92ccdfb2303bca4944359f8dec842b4e19749c707c63a2820539ad0fd7f44a52",
                        "timestamp": "2021-11-29 21:15:28"
                    },
                    {
                        "value": "22fc0946695a60b4b2012323f1f5a90b0f99d12f72b5776a0f0295806b452055",
                        "timestamp": "2021-11-29 21:15:27"
                    },
                    {
                        "value": "f7b1983dafcc04cbab52578c95858ab4f35eb7fea85a904f90521329f911c501",
                        "timestamp": "2021-11-29 21:15:27"
                    },
                    {
                        "value": "dc55cead6c292d044844c4c8891f506877a7cd864ac1fc3e89d81a0ba80afcf4",
                        "timestamp": "2021-11-29 20:30:37"
                    },
                    {
                        "value": "9b8536b7f71936b6c588b63ef3bae603c78ffa0a7e14f70033b84829e4da7cc7",
                        "timestamp": "2021-11-29 20:30:34"
                    },
                    {
                        "value": "35702f4e6d00fb88d4aee3dce2e6fb0e1156b4c7003e700f02cb659f01c5f1c4",
                        "timestamp": "2021-11-29 20:30:31"
                    },
                    {
                        "value": "e683510182034e8ff94482f0fdbf3916526f0f8e0b5f04dd0e850d5e8b67acf1",
                        "timestamp": "2021-11-29 20:30:28"
                    },
                    {
                        "value": "3b8225288fdc8ac12caffc3392c573455290c8cc284768121da24b0791e0749d",
                        "timestamp": "2021-11-28 23:52:29"
                    },
                    {
                        "value": "6f0ec20d6afd60bd532b7b103ca528b1c21b800b567aa2b8b1e8ad73cd2fcf01",
                        "timestamp": "2021-11-28 23:52:28"
                    },
                    {
                        "value": "db24fa5284e70cdd29bad1f902a2e6ab5e844b4cf671e9e0b8010aed24bc053d",
                        "timestamp": "2021-11-26 14:30:29"
                    },
                    {
                        "value": "b95578373645b409450377344317326c32347f191990d6d4440a7d79f1a200b8",
                        "timestamp": "2021-11-26 14:30:28"
                    },
                    {
                        "value": "05205fc1ac3bef97ae1a49d2f549569804af5d494f56e07f7627aa08f2a832f2",
                        "timestamp": "2021-11-26 14:30:27"
                    },
                    {
                        "value": "a95a03ef0117977e4e3d13a659999f3faf5fbec7a89493fed68d4cd4ef067a09",
                        "timestamp": "2021-11-26 14:30:27"
                    },
                    {
                        "value": "f3cc9372673211d1d6bdf137318f2711394206d4203a0cd653d86d36bf9cc7e7",
                        "timestamp": "2021-11-26 10:45:29"
                    },
                    {
                        "value": "d202b6f3eca803ada7e264d934aa555efaba68f45f664d5c8bd900117e559109",
                        "timestamp": "2021-11-26 10:45:28"
                    },
                    {
                        "value": "d92fd45dcd547e25cb46f131cce5468605c3437ddf58285658316d4fc1ecd48b",
                        "timestamp": "2021-11-26 10:45:27"
                    },
                    {
                        "value": "310668fe6a834a45659f29113ce50840aab880aaf9d6a0de3e2d6af8d32ab993",
                        "timestamp": "2021-11-26 10:45:26"
                    },
                    {
                        "value": "84ebc64b48ecea825050c7691c86a0c05902f87727ee35988819a6d07af111bd",
                        "timestamp": "2021-11-26 08:00:30"
                    },
                    {
                        "value": "fc932edc74e0cec73a1ebaf76be991b01574ec7591d20fe7a00d39dda01d8732",
                        "timestamp": "2021-11-26 08:00:29"
                    },
                    {
                        "value": "cf4260593a246eb5f1755d21002607acbd8db387c86426bf61191f966e72b74a",
                        "timestamp": "2021-11-26 08:00:28"
                    },
                    {
                        "value": "7f3b4116ae98dab19f087d3dac4e6a03a0b41b70eeaccdcf07a27af5df0cedaf",
                        "timestamp": "2021-11-26 08:00:26"
                    },
                    {
                        "value": "2113d243731d6b89c3cb212e24799e44be136e8833ce305e91f131872dfa9422",
                        "timestamp": "2021-11-26 01:15:29"
                    },
                    {
                        "value": "9db56c918447502d168030dece3ce05d6bf37191352e6a57e3e22a6ecebf16eb",
                        "timestamp": "2021-11-26 01:15:28"
                    },
                    {
                        "value": "5728b421b86b62b773e5d25eea6d9d3e9ae4a2158159b00ff7ece7e567f8ceeb",
                        "timestamp": "2021-11-26 01:15:27"
                    },
                    {
                        "value": "f87ff365a8070248f8ecb46d763b46859f94bf9fd75a1ebd128b58c62a4805f3",
                        "timestamp": "2021-11-26 01:15:26"
                    },
                    {
                        "value": "6d6c6ec45350ce1d0cc329c1d4ad0226d428a8fb35379e5a7c467bdef06f5b92",
                        "timestamp": "2021-11-25 21:45:26"
                    },
                    {
                        "value": "b27beeb2f6477b98304c9ef1101cef75e801dde719ef8d08daf221775eb88c94",
                        "timestamp": "2021-11-25 21:45:25"
                    },
                    {
                        "value": "8c147a5bd09e0f816a25ea03a96b19b6f1160de57141fcae731a600a00392eda",
                        "timestamp": "2021-11-25 21:45:25"
                    },
                    {
                        "value": "bc2af05412ed224d06e28d93177170be064f5a255cc85c549453a94d2051581e",
                        "timestamp": "2021-11-25 21:45:24"
                    },
                    {
                        "value": "eebd5bc9a1a023424efe415961d7ca647b154b55117648e744a67fb15407b831",
                        "timestamp": "2021-11-25 09:45:28"
                    },
                    {
                        "value": "949d911ef54a1c977e3c7084d6dbf22c87e9757f6a850afa7f73c5dd32b174ef",
                        "timestamp": "2021-11-25 09:45:27"
                    },
                    {
                        "value": "ca32bc643d6cb0545546b7fb9a74858bd213fca1f7cfdcecb01d837ad940ef5f",
                        "timestamp": "2021-11-25 09:45:26"
                    },
                    {
                        "value": "d0ac8819e7e6949064b5012d24f92d84e85ac358ec3b1e58a72a5da2e671647a",
                        "timestamp": "2021-11-25 09:45:25"
                    },
                    {
                        "value": "41ae32ed68efaddc6356bad1b122b05a07cfc63395f5dcfd59b978c5addf66bf",
                        "timestamp": "2021-11-24 17:15:32"
                    },
                    {
                        "value": "20f6b3ec82a38812ac8132027109063550531fbc95a410198a15259282737753",
                        "timestamp": "2021-11-24 17:15:31"
                    },
                    {
                        "value": "0eecd143d84fde7775035d32a7b7cfdce6a909f5aee9908b93d8d4a942da44a0",
                        "timestamp": "2021-11-24 17:15:30"
                    },
                    {
                        "value": "7f2ced588ac07402425508d372bcc0dc0884c7b783c8ec5c610643ea37ddb423",
                        "timestamp": "2021-11-24 17:15:28"
                    },
                    {
                        "value": "7c909771fccc47bcaeb55ea3e86fa1fae9e2f996afeb791ea41e9007b16c6d8c",
                        "timestamp": "2021-11-24 09:46:39"
                    },
                    {
                        "value": "fd816884b0a66be4b63948dac741bf763525df6be98a730340c3eea331cf5d88",
                        "timestamp": "2021-11-24 09:00:26"
                    },
                    {
                        "value": "9c40d7dc255dd9fd8cf2a22635c1330d2ae253ece77056fc79e1a0a2d4388d1e",
                        "timestamp": "2021-11-24 09:00:25"
                    },
                    {
                        "value": "85de6f370af00f194d403e6bfbe1cd7770d7d5c980125b63f3a2c33d620872fc",
                        "timestamp": "2021-11-24 09:00:24"
                    },
                    {
                        "value": "46f103cd2d5aad169b4cf0d6668a3d0ddc2c2bc6aef0606e64a5f8f1eadd836a",
                        "timestamp": "2021-11-22 10:05:21"
                    },
                    {
                        "value": "461c50ee2ec33b751db85f56cd984d3c46be64d78f96b3f9c9bf122112b6d76f",
                        "timestamp": "2021-11-22 09:30:31"
                    },
                    {
                        "value": "d8d278f4a44c07360f2b2b8ca65f0af0c5756fcf5d288ac137e7cafefa593789",
                        "timestamp": "2021-11-22 09:30:29"
                    },
                    {
                        "value": "0d46ac8b17c4bc98d50c1becbd4d4638cabdff4ae4b8c0d5b1acafea0523ebf3",
                        "timestamp": "2021-11-22 09:30:28"
                    },
                    {
                        "value": "ca6cfc8d0f2c1de3c3a538c61012f3f3a3a17ddfc032be914b008963ccd47217",
                        "timestamp": "2021-11-22 09:30:26"
                    },
                    {
                        "value": "dd5c4335594b77493bc8960293af89aecce0c3ff6e66bdddd13d239f29929b2d",
                        "timestamp": "2021-11-22 07:30:26"
                    },
                    {
                        "value": "d2de8e1d2b9cfc75e071ce959713aba45f14ebf73f8b2f61ef4d1020681f875e",
                        "timestamp": "2021-11-22 07:30:24"
                    },
                    {
                        "value": "d999f46f1666fc9d35ddb306b628a3f4894592aa1c38e508cf50bc6880291f6d",
                        "timestamp": "2021-11-22 07:30:23"
                    },
                    {
                        "value": "1423514b1c09a5d9121296624d597674c97f772bc2891d1b29acff3272579ec9",
                        "timestamp": "2021-11-22 07:30:23"
                    },
                    {
                        "value": "6774298f4fa71c6fcaddf6365a27181452b84c3593d1c61042f4f6f0a8311613",
                        "timestamp": "2021-11-19 17:30:28"
                    },
                    {
                        "value": "6b33f787876c09059a6f7c1180adae5c94d1ef128e9943a55cb1641097fc9814",
                        "timestamp": "2021-11-19 17:30:27"
                    },
                    {
                        "value": "764b72027f1ed990081601e6735def5d6ef244118d7dbb143a595d64e457c398",
                        "timestamp": "2021-11-19 17:30:26"
                    },
                    {
                        "value": "a0925bb61a05bf3aa386b0225534468caa83f4a3d9e2bdcd9e9355bf8482c07c",
                        "timestamp": "2021-11-19 17:30:26"
                    },
                    {
                        "value": "07dfb5f2d54d7532eca86707fa42b5da3cd3161c0d4e83c09c37dfff4a65da8b",
                        "timestamp": "2021-11-19 08:45:33"
                    },
                    {
                        "value": "e5925e75a6b368e063ef545d000deef826be29189a1da0a8ead6c5182a08c21e",
                        "timestamp": "2021-11-19 08:45:32"
                    },
                    {
                        "value": "e2841a6f84d6926101ed523ac08ee75af448129a8d3a9b7094b96cc73582d137",
                        "timestamp": "2021-11-19 08:45:32"
                    },
                    {
                        "value": "3e4396d0df9c02bd23eecaec82cf742196a7556cabd2689bd4eaf2dfc8701613",
                        "timestamp": "2021-11-19 08:45:31"
                    },
                    {
                        "value": "e4e38869dc3d9e91a807329886934367cd516e5cafc25a180e897fa914b779e9",
                        "timestamp": "2021-11-19 08:45:31"
                    },
                    {
                        "value": "7956fe6ab3efb78855e1bb53565c7a238fc6a73e97471254a820df0f4b0a5096",
                        "timestamp": "2021-11-19 08:45:30"
                    },
                    {
                        "value": "c8bee93fde2129ad5ed2ede5906ddff1495bf6e5675d45b57362595373032600",
                        "timestamp": "2021-11-19 08:45:30"
                    },
                    {
                        "value": "9be3ced4c0fe069028e76d61897bbfb06b8c3516fe8e50a789e1ee2f193bbb40",
                        "timestamp": "2021-11-19 08:45:29"
                    },
                    {
                        "value": "2895d107db3956c0ca188f1e58901660883272ad920a9d081d88eedd3b205041",
                        "timestamp": "2021-11-18 10:00:30"
                    },
                    {
                        "value": "ab68f87fc5564284daae2095d68adb3b03c0fe767180f9881b8cd4303ee74a38",
                        "timestamp": "2021-11-18 10:00:29"
                    },
                    {
                        "value": "eab6abe516b5d73ff76f7620c8af1b79c4f14e503ae4383884bb984c44e8e371",
                        "timestamp": "2021-11-18 10:00:28"
                    },
                    {
                        "value": "f9c2b747839352721a0e7c4bdcc41e32c3682f0adf9e0f6d9253f4573280093f",
                        "timestamp": "2021-11-18 10:00:27"
                    },
                    {
                        "value": "8b4f071b863556e898a3b9acdc5b48def36b37f6fdb992dd8277c850e9d1a29d",
                        "timestamp": "2021-11-17 18:45:30"
                    },
                    {
                        "value": "3802d1b1db3b7f301142d8d4cf0d4a0e3873dc1a1e7efe931c0486b3c4207293",
                        "timestamp": "2021-11-17 18:45:28"
                    },
                    {
                        "value": "b0ac786f3ba508c9a157fad04c1b4feb5519f531331e2ba4c15c6d057d916c0c",
                        "timestamp": "2021-11-17 18:45:27"
                    },
                    {
                        "value": "09813cfe6f031d3757781e6fc710ac868e6548122e93b487c8f752fb3e9761d6",
                        "timestamp": "2021-11-17 18:45:26"
                    },
                    {
                        "value": "4300c5c7c86391e07b90a0137a174eb49dcbc0d4b348bfe240c6be6dd2515845",
                        "timestamp": "2021-11-17 15:00:30"
                    },
                    {
                        "value": "cd71efc0af57c249f4513561ad775773eacbd62a0f663ba43fc760340c4c5fbd",
                        "timestamp": "2021-11-17 15:00:29"
                    },
                    {
                        "value": "5efd52d4a4b4f1c6f8edd170a940d8a17747478ce458fb6f30b0d7494a4a39cc",
                        "timestamp": "2021-11-17 15:00:28"
                    },
                    {
                        "value": "fb27d91e176a2ff0f0c1ebe3eb8ba385b2b956d5db5aa076d092ad4dc429affa",
                        "timestamp": "2021-11-17 15:00:27"
                    },
                    {
                        "value": "0a0dbf03e4d10a022b9e8f94b62d77d604b33674401ed05dd3406ce2705208e2",
                        "timestamp": "2021-11-17 03:00:30"
                    },
                    {
                        "value": "4843e3a89d1c70c576bf26d91cf7bf82e97e9fade802d6b98c74354ed7eafd48",
                        "timestamp": "2021-11-17 03:00:29"
                    },
                    {
                        "value": "1b12ef08e271b2c971fcfb39af153179d01acda7fd2f3220ccd33b942c62c28e",
                        "timestamp": "2021-11-17 03:00:28"
                    },
                    {
                        "value": "4b2188efef8232ed57ceb0bdb1e444576ed01c26015a7bbf18bae3b7991cd9e6",
                        "timestamp": "2021-11-17 03:00:28"
                    },
                    {
                        "value": "58e39a194455f30f62bc0200b4e4f2803e8775398302b2aaa818abbbcd26e12a",
                        "timestamp": "2021-11-17 00:15:28"
                    },
                    {
                        "value": "38b96f29978b98e1b9e0da40e96f84b9e41c490ba39ddb62f40ed6d2edd08790",
                        "timestamp": "2021-11-17 00:15:28"
                    },
                    {
                        "value": "e952e271cbfce79e8846ca1f1b94057026521a9a883103ca2705f1e239f559e1",
                        "timestamp": "2021-11-17 00:15:27"
                    },
                    {
                        "value": "27a4f353a9a69e6ba36eb461e8eaa25c4bf68f05793b77675bb999e30b490a35",
                        "timestamp": "2021-11-17 00:15:26"
                    },
                    {
                        "value": "baa7a0fc43efac46f018eea0d3affe838754c5d375a1f3e9924a849c9d4b6ebc",
                        "timestamp": "2021-11-16 15:45:29"
                    },
                    {
                        "value": "21e23b7acfab89ad8a0bd4a5634e75e870aace01b2e9bb16c4e7df79278efd4b",
                        "timestamp": "2021-11-16 15:45:28"
                    },
                    {
                        "value": "533e9d52235e41fda730e78a52c559f81c01fd06604da6c6ebf00b00c2c66bef",
                        "timestamp": "2021-11-16 15:45:27"
                    },
                    {
                        "value": "de9ab08bbddbbaebbdf68b21371e5f4cf440201fe5c4af4ba9241562112ad716",
                        "timestamp": "2021-11-16 15:45:27"
                    },
                    {
                        "value": "a7ed14d496ea665fadcbbf3a00008ba2cbdde40120211b67ef6038ccbf09ca3a",
                        "timestamp": "2021-11-15 13:00:31"
                    },
                    {
                        "value": "c32d8b75e9e01e488119587fa36d69c17d70d054b34583e5458f0a3d31bbb665",
                        "timestamp": "2021-11-15 13:00:30"
                    },
                    {
                        "value": "0a39cd71c6cccbd6a67de78b06406c93d32ac562932c5861f09017b5311bf2cf",
                        "timestamp": "2021-11-15 13:00:29"
                    },
                    {
                        "value": "57a3770aef71aa320b61fafbf19924e67c0e73657f325140e64a518f7b913439",
                        "timestamp": "2021-11-15 13:00:29"
                    },
                    {
                        "value": "a7038cc8b363d78c6662b1a79c51c7ea11dd8756a3cd9a34831165c44ed0e6f6",
                        "timestamp": "2021-11-15 09:15:30"
                    },
                    {
                        "value": "037a4ae072c70cade6ca101962abd2ebf156642b04a43a182ad39868397a5fae",
                        "timestamp": "2021-11-15 09:15:29"
                    },
                    {
                        "value": "b0160508123d4f8ea5950552a8aa096002bbcaa26ddb32f4afb4e4604aa23210",
                        "timestamp": "2021-11-15 09:15:28"
                    },
                    {
                        "value": "c6030629e95fca38d4916ce79c7ef1424675cd8403d0e88b36b647df612c33f3",
                        "timestamp": "2021-11-15 09:15:27"
                    },
                    {
                        "value": "0ea0df4d2bf5d5bfb229abf712347f11e4da47ffbfb039d210da65eb96e7c995",
                        "timestamp": "2021-11-15 08:45:38"
                    },
                    {
                        "value": "1554fb26ce3e501ac4fafe4f57db77d493334200847c160d58aa03a76479c49d",
                        "timestamp": "2021-11-15 08:45:36"
                    },
                    {
                        "value": "8f078b6adb5d5de6e69c93fe637b12365743254fe3d516b711e5f33cbac2bf23",
                        "timestamp": "2021-11-15 08:45:34"
                    },
                    {
                        "value": "0acbc590ce3db762b9c014cd006ec2c46aa61d8827b7739c53a204177d032cc8",
                        "timestamp": "2021-11-15 08:45:32"
                    },
                    {
                        "value": "dde2244a4759f76b11dbfa35941344e152f190ebed0775a66b80b8b23db850ab",
                        "timestamp": "2021-11-13 10:00:29"
                    },
                    {
                        "value": "3ed2e0272eddce486bda433f831557aa7044b679d4aee17dd9ce6a80175a6ef1",
                        "timestamp": "2021-11-13 10:00:28"
                    },
                    {
                        "value": "2756fc2a48cefac30493287ee3c78d299e71724df0560956e4728ea2a0dd3908",
                        "timestamp": "2021-11-13 10:00:27"
                    },
                    {
                        "value": "26eac4b61ee19be82debaf5aa6a9380eae4aa0ee77efc80b6299ec6873292672",
                        "timestamp": "2021-11-13 10:00:27"
                    },
                    {
                        "value": "96eb82bff6d02e775205d2bd64787d589c946b26548378a5d49bd9e77fb2d804",
                        "timestamp": "2021-11-12 09:15:27"
                    },
                    {
                        "value": "85efd858652dec83f1bfaf82f5e033cace49b684f0832729b4de168f5ccf03fc",
                        "timestamp": "2021-11-12 09:15:26"
                    },
                    {
                        "value": "0279f8fbe333f613d0db1a19e3f53a54424afdcf890fdb1166678ee26ebfeda5",
                        "timestamp": "2021-11-12 09:15:26"
                    },
                    {
                        "value": "8970b759dc880a54e6098f4270779baedb3af8ff663745a3fc09f9ab472f65bb",
                        "timestamp": "2021-11-12 09:15:25"
                    },
                    {
                        "value": "e63479a0c152601dfcdd03283c55143ec6f04967ffbe37e769e9451b2f593de4",
                        "timestamp": "2021-11-11 17:45:23"
                    },
                    {
                        "value": "170efd5512d91085e7bd6337a37b2651909d11e8cd002c9cb1ff8172d5831d81",
                        "timestamp": "2021-11-11 17:45:23"
                    },
                    {
                        "value": "2d4eeb0fb9afd1e0fddac2a306950a50fb518b51d500e2bf3e7303af66548ccb",
                        "timestamp": "2021-11-11 17:45:22"
                    },
                    {
                        "value": "07acaa3b3daa02b7553fec44fa3a8de8fbe2f438204bda2aba8c4a2a92c7b6bc",
                        "timestamp": "2021-11-11 17:45:22"
                    },
                    {
                        "value": "60378449c0f122f0b5adc1d0e15dec370efa6ce37000ee0fd1b778a4f6b6d14e",
                        "timestamp": "2021-11-11 04:45:29"
                    },
                    {
                        "value": "63b3a7ba0a4323a0d4757115eb0091f3d388ed0391f75493c43a6cd61fa7f39e",
                        "timestamp": "2021-11-11 04:45:28"
                    },
                    {
                        "value": "104972542be4efb37c49ad919817d7526cc427900f3c9feffc64c1928b84070c",
                        "timestamp": "2021-11-11 04:45:28"
                    },
                    {
                        "value": "32abae823ad6df8ac153abfc4eee158b8750d3eee9faea221e01155534ffa4dc",
                        "timestamp": "2021-11-11 04:45:27"
                    },
                    {
                        "value": "7b12e253b0bf89ef0535a8dc539361954c67511bcdbc709060c0b1e6ed539cb6",
                        "timestamp": "2021-11-09 19:45:24"
                    },
                    {
                        "value": "6d4d7f0e25d01f8660c57b24b86593ef40335210a284fac848ba2fd9087acb50",
                        "timestamp": "2021-11-09 19:45:23"
                    },
                    {
                        "value": "a1c923af00ed853b5c48ef1866704372aec34b6f1047d02ae030506b3e1e5085",
                        "timestamp": "2021-11-09 19:45:23"
                    },
                    {
                        "value": "dfc87994a289a1526f89608715c9c4ed5aa2a8fc721096c40ca8563486a319db",
                        "timestamp": "2021-11-09 19:45:22"
                    },
                    {
                        "value": "dfd507a747aa49b13351f35e97dde23519e56fb017dc2c5c0b60c1923511763e",
                        "timestamp": "2021-11-09 17:54:12"
                    },
                    {
                        "value": "539f6410171f92623154718afebeba9c63f846c0f65fdd4ddc1fb3187aba170b",
                        "timestamp": "2021-11-09 12:00:38"
                    },
                    {
                        "value": "ee01efe5bc64a5e50dc0c495edea7d102d8f851bbe4f37f3ed91279c2e1fd2a5",
                        "timestamp": "2021-11-09 12:00:37"
                    },
                    {
                        "value": "e7ebe018096b82c972551742442fc4097c04f4d60e3313914660563e89bb16fa",
                        "timestamp": "2021-11-09 12:00:37"
                    },
                    {
                        "value": "a28729214322b6d5f62ab95648edd82c57a584c22ec19190169ba5a49f56c2d1",
                        "timestamp": "2021-11-09 12:00:36"
                    },
                    {
                        "value": "9a31d2ee1eacc5cec9a03080380a46a1fa22c663e828bc1726c2022f4fa62ce3",
                        "timestamp": "2021-11-08 14:06:09"
                    },
                    {
                        "value": "3d5acc18944b6a2e9a36eb9771cb0a290dc5f9caad7795be7609ed5aec40877b",
                        "timestamp": "2021-11-08 05:00:28"
                    },
                    {
                        "value": "b9ee13f8e2fbb76cb0627e872250a2f5a5c22be3c31fc0ec09a05b7d853063fd",
                        "timestamp": "2021-11-08 05:00:27"
                    },
                    {
                        "value": "420da2204f46e6c43996f8aa419cc28c6129bf8de1b539a49705ca5b8dd1c79f",
                        "timestamp": "2021-11-08 05:00:26"
                    },
                    {
                        "value": "707c5da4497aff8f3bb9aead9409d3a92cb3842163f565e0d120912abbfcf74c",
                        "timestamp": "2021-11-08 05:00:24"
                    },
                    {
                        "value": "c6aedeaa3b652c9cc4a8183e460dfec5df3623333144c5ed0d7b37de999415d1",
                        "timestamp": "2021-11-05 08:58:32"
                    },
                    {
                        "value": "4262601fe98a393143cbed49859ade74132bfc80c2cdd71c38460fde7badbc95",
                        "timestamp": "2021-11-04 06:30:29"
                    },
                    {
                        "value": "9997ee6face3e805fc2f99af529e0c864b3635f7ae04f565baab538153fed6a5",
                        "timestamp": "2021-11-04 06:30:28"
                    },
                    {
                        "value": "6b4b4496dcc45b637d9c1a00003a15939c83e809cb7a1a27d60f8f5faf3ce051",
                        "timestamp": "2021-11-04 06:30:27"
                    },
                    {
                        "value": "f9aec04b30a892af53b42e42214917bf02813ea650aa432f8061c474169b6576",
                        "timestamp": "2021-11-04 06:30:27"
                    },
                    {
                        "value": "83eecd1c25d7c48c8672e6fd50f4a7acbb6f21a9f0697593cb6dcd0acb9ce2a2",
                        "timestamp": "2021-11-04 06:00:25"
                    },
                    {
                        "value": "b57476f8602fd92d2606e016f44d958dc35e67b6f7d234d867fa61ff73f0a37b",
                        "timestamp": "2021-11-04 06:00:24"
                    },
                    {
                        "value": "61556fdb67a4e33e19760d850f0982ee5ccf8b472992b7487f5fd1cccf928e79",
                        "timestamp": "2021-11-04 06:00:23"
                    },
                    {
                        "value": "8c6ca14a641899e3a93974f9247b1fd15be0b094f35f35054a25e4f979bc9dfb",
                        "timestamp": "2021-11-04 06:00:22"
                    },
                    {
                        "value": "15f34d963b592231f45edc59f1d1f2f3de0d81bed2a8bd06bdcd05abe6403aa1",
                        "timestamp": "2021-11-03 23:45:27"
                    },
                    {
                        "value": "fa96070efd7b2eb92a14d382b871438fb12fbdbaf4738b56616e55ce84fb9513",
                        "timestamp": "2021-11-03 23:45:26"
                    },
                    {
                        "value": "36d71d0e328a42aeb4f6aa4a5de78d97687eeaa527f5be086e2e006762190518",
                        "timestamp": "2021-11-03 23:45:25"
                    },
                    {
                        "value": "9635706b51fa3a9dbd9d30f2ca76a0eaff082a3109382587aeb1779b178035fd",
                        "timestamp": "2021-11-03 23:45:24"
                    },
                    {
                        "value": "0f75097df8311ffa38e5e8bfbd26400d7eed8989ac238362028811125dbafc52",
                        "timestamp": "2021-11-03 23:15:31"
                    },
                    {
                        "value": "773a8f06e04d7d08c8b3d91a20fe33fce36ee863c4e7719a9c04665496d4848e",
                        "timestamp": "2021-11-03 23:15:30"
                    },
                    {
                        "value": "14ef6034fcd18cd5067102e04cb7c2263cf6dbafbca85b90916d0cb6619af728",
                        "timestamp": "2021-11-03 23:15:29"
                    },
                    {
                        "value": "57342c01a9b9aa799928677f9f97f07f819b18bac8f865d47a0826baadf0148e",
                        "timestamp": "2021-11-03 23:15:28"
                    },
                    {
                        "value": "576a31887ea4c7744b478fc2afcbcdd95e9d6daf71cf5836eb2fd9e3f5292d8a",
                        "timestamp": "2021-11-03 16:45:24"
                    },
                    {
                        "value": "29ccfd244ce86d83bc3c39b3b2de1484e284ece26df89f7e18492d642b7ae6e5",
                        "timestamp": "2021-11-03 16:45:24"
                    },
                    {
                        "value": "3ea6b264f188f2206dfdb837c6c5c367c3b89dcc97c6116aee99ec7caaf99e35",
                        "timestamp": "2021-11-03 16:45:23"
                    },
                    {
                        "value": "eb8fff9b0cff05eb2686ff2e2f5ebcfb353787e7a5ef50ae4e47adac01027675",
                        "timestamp": "2021-11-03 16:45:22"
                    },
                    {
                        "value": "50e9d4e1f8f808ed8f4145654ee91ffb8b32a722c4b32f012a522d971e48f1e7",
                        "timestamp": "2021-11-03 09:00:28"
                    },
                    {
                        "value": "c535edfc3c3a0b7421903298329a5931db817c5d3cc395bbf257724b9060cb3b",
                        "timestamp": "2021-11-03 09:00:28"
                    },
                    {
                        "value": "d9e92535d5c9c9dd3a2879f6f87940c80a7c80820298ad369922783130dfcb6d",
                        "timestamp": "2021-11-03 09:00:27"
                    },
                    {
                        "value": "e410c079cadbe1e3aaa9157b82ed157248cd1a3858d1cda374774a0d6243a255",
                        "timestamp": "2021-11-03 09:00:27"
                    },
                    {
                        "value": "cc8bfe349de78a57dc3f2c3747a82922a4bb3cf94e4f94b7e682b22ca6b286fa",
                        "timestamp": "2021-11-03 07:07:38"
                    },
                    {
                        "value": "70d511307feea8b9dc8d691fc00dba829e2e88aa1d4b13c62a77aa2062625754",
                        "timestamp": "2021-11-02 20:30:30"
                    },
                    {
                        "value": "3c0c81da2bf8ab68ce917e48365343043e29a597a0b19cd24b952fc1cab94249",
                        "timestamp": "2021-11-02 20:30:29"
                    },
                    {
                        "value": "4c7ba2b301084348ee190c82566847e77bc7a81f7eea01a79f1c705d9306b836",
                        "timestamp": "2021-11-02 20:30:28"
                    },
                    {
                        "value": "64ffb73a1276e203228435365263f1f53ce13722454ac08f092533b02c05104e",
                        "timestamp": "2021-11-02 20:30:27"
                    },
                    {
                        "value": "4c047f9c8a8473bcbff15aefd90d2aeb51ba99fb457e5d27085c3a691e0e6195",
                        "timestamp": "2021-11-02 18:45:26"
                    },
                    {
                        "value": "5ab6fc0dd5404244ea5484b7204781f349011ab410750d892c1f559c29bb03f2",
                        "timestamp": "2021-11-02 18:45:26"
                    },
                    {
                        "value": "720e364cf77e526bf94a506071959bfeb0ec67fa12ff0cc88fcd0f1ffaf1b6c5",
                        "timestamp": "2021-11-02 18:45:25"
                    },
                    {
                        "value": "a73b4788c72396be0eedb1c42f6eec1f7b918b75ca1b5c1f70c9601f3cdfdf4a",
                        "timestamp": "2021-11-02 18:45:25"
                    },
                    {
                        "value": "9e3411ef227b5b73ec4cf4f5f2e7349f70a78de9bc1ed5972073bea2f28a9516",
                        "timestamp": "2021-11-02 13:45:23"
                    },
                    {
                        "value": "510c344992f0069329a87b106a9bdd7ba66686b188098c767b2478422908693a",
                        "timestamp": "2021-11-02 13:45:23"
                    },
                    {
                        "value": "a55d231e81eb430f86101e25411d6191c495e33262033cb29fad173580d062db",
                        "timestamp": "2021-11-02 13:45:22"
                    },
                    {
                        "value": "df7bd2c90ea6f49bfc10b72bd88b7d2e99469098ba29e1e7a294d97c46cd30b2",
                        "timestamp": "2021-11-02 13:45:22"
                    },
                    {
                        "value": "2d25626b7fb64b8d9dede90e95cbd2ee0375b3d0f9e44c95951722f4d193b3af",
                        "timestamp": "2021-11-02 10:45:27"
                    },
                    {
                        "value": "12c21ab50e08cf3517c8c09be4597f0bc0dda3c6790dbc19e540f2d6f0272ae8",
                        "timestamp": "2021-11-02 10:45:26"
                    },
                    {
                        "value": "640b2fc25f0798e4d0e6920e0cb1ffa2da0a3844687de25f461030487cc04250",
                        "timestamp": "2021-11-02 10:45:26"
                    },
                    {
                        "value": "7cbdd3ce9d9808f9e0997ef7c360378031e30c842ab403bc15ca6c1661ddb97f",
                        "timestamp": "2021-11-02 10:45:25"
                    },
                    {
                        "value": "86e0b7bdb51db95ec92a028c203e99b016984598e19da90d4f6241835a3d0df3",
                        "timestamp": "2021-10-30 03:45:37"
                    },
                    {
                        "value": "7de5671bdcf7f7037d7270ecf05dd09a0a747a2037a2917ac6789ff8d7456420",
                        "timestamp": "2021-10-30 03:45:36"
                    },
                    {
                        "value": "f53dc97b91a6942d8e2d94427056b28fdd9c01cde939029dcb3843d6b7ae129f",
                        "timestamp": "2021-10-30 03:45:35"
                    },
                    {
                        "value": "33c97812fd30b72a51e613a13d32bf2ca9efa9c226876aad3c4bd1cb2b759855",
                        "timestamp": "2021-10-30 03:45:34"
                    },
                    {
                        "value": "2dcf0021a91922036238631a297e61478eb547bea606cd787ad8f74ad993f11e",
                        "timestamp": "2021-10-28 20:52:21"
                    },
                    {
                        "value": "be24b30c4cb19b197fb44ea2883dfc535e9b76124bc3c64be34e2817feb7234e",
                        "timestamp": "2021-10-27 13:30:35"
                    },
                    {
                        "value": "32ea86ae7c64e3d8f59ef3390d7c320b173ab245d65836b894ddd1f14adb5004",
                        "timestamp": "2021-10-27 13:30:34"
                    },
                    {
                        "value": "5bac5d7e95692cad146f8d19b9807f6d07fc525ac18e0e364c75ec42da37c93c",
                        "timestamp": "2021-10-27 13:30:32"
                    },
                    {
                        "value": "924320f4a5287ec979bfcef7da18516a83de05b30f7e242d6ebb15b480df6cfe",
                        "timestamp": "2021-10-27 13:30:31"
                    },
                    {
                        "value": "63302fc8ec38235750576f3a3c2e0566cd3392074d0a56aeb466e5c8611aeabd",
                        "timestamp": "2021-10-26 16:00:28"
                    },
                    {
                        "value": "b9035003381ac2e0d2878fbfcbf9c87ead27bcfe2b4f2346a0d63cb39e12ce5d",
                        "timestamp": "2021-10-26 16:00:28"
                    },
                    {
                        "value": "a000b23522b61426cc40661c7a0d46b2e897d95c010f9496bbcd848576d64dc2",
                        "timestamp": "2021-10-26 16:00:27"
                    },
                    {
                        "value": "eac4f37afa8f288129ae9279dd82d7c80c2e2d7fabc7c1a933de7e9c2c44c521",
                        "timestamp": "2021-10-26 16:00:26"
                    },
                    {
                        "value": "c6895cbe493f431175d2fb1cded0169f8b3c9383dd604b879dca30938077ddcf",
                        "timestamp": "2021-10-25 13:00:35"
                    },
                    {
                        "value": "00ad9c596b2af402b7d77a1b6d1c81337f76c3d4e4af1e429fafbdf6a8530ff7",
                        "timestamp": "2021-10-25 13:00:35"
                    },
                    {
                        "value": "ada7f77a832890a8744352be5a7aecfd8453bc053a75f1330e66d2a433c30c95",
                        "timestamp": "2021-10-25 13:00:34"
                    },
                    {
                        "value": "3be414f054546d9a5ce2e5a9470cccbc19a3f4751553e3b083f0c497151fe130",
                        "timestamp": "2021-10-25 13:00:33"
                    },
                    {
                        "value": "c2853161b03051757ee439842cf28a6526872c9898183a21deeb7fca109e4ff6",
                        "timestamp": "2021-10-25 07:30:28"
                    },
                    {
                        "value": "72de2d15c3b649b0d1f328c48295452584bd16bc947c2a33382c0db253d37842",
                        "timestamp": "2021-10-25 07:30:27"
                    },
                    {
                        "value": "56c19e2e628b52c856c87a84e8bd57ddda5f5003c0632382f1d313be307b4cde",
                        "timestamp": "2021-10-25 07:30:27"
                    },
                    {
                        "value": "9ac61964bd31a465c9928724dd45a69c4080dc8f49a786905f3582a104787774",
                        "timestamp": "2021-10-25 07:30:26"
                    },
                    {
                        "value": "f6ac542852beb59ae8f01a9290d359cc0b5487c8926264b29398bba0ce73c474",
                        "timestamp": "2021-10-24 15:48:07"
                    },
                    {
                        "value": "a404a5137331f33c5398664ca84996ade49d3849403dc9037f74a5d5311a332a",
                        "timestamp": "2021-10-24 15:48:07"
                    },
                    {
                        "value": "0fa8577fe39341b7a5ee9c4fcb1e1b1cdef037fe71fcda4b03da5317f86b41d7",
                        "timestamp": "2021-10-24 15:48:07"
                    },
                    {
                        "value": "95024452dbbb0413a87d7c64632f7ae988057eb19fb374b1c6acb7e84e1d1cb8",
                        "timestamp": "2021-10-24 15:48:06"
                    },
                    {
                        "value": "1ca84618d7bdd56ff4c7f1748601f1de735026d411010cebb343d7f2b568a1b6",
                        "timestamp": "2021-10-22 15:29:31"
                    },
                    {
                        "value": "9bf0f78fa64d25010eb89742498b27a79322c02dcb3434f7adff45ced72a6437",
                        "timestamp": "2021-10-22 06:45:28"
                    },
                    {
                        "value": "d94cfec2bb6b443a9feb8f28a5160030473209d66742fe1a62d4442bd1d2e47a",
                        "timestamp": "2021-10-22 06:45:28"
                    },
                    {
                        "value": "463688d6dfb7d1afcb6e3b13110542de17dd81cd271a79beb55d2916b5563c4c",
                        "timestamp": "2021-10-22 06:45:27"
                    },
                    {
                        "value": "4c40223d99d54b6cba2c1ef01c43b15717714d3c0f214102926469e12da319a5",
                        "timestamp": "2021-10-22 06:45:27"
                    },
                    {
                        "value": "5d14d6480c4d20dd420d598d6e7f503b7e714ce9d21d56cc73a2f2dbcb1100af",
                        "timestamp": "2021-10-21 10:30:27"
                    },
                    {
                        "value": "f151cb8d01bd600340425aed959eff4e663db50941ccba81bee3d94f5ae4e486",
                        "timestamp": "2021-10-21 10:30:26"
                    },
                    {
                        "value": "fb7858cc3360d06a5a3895a721249409755e3c49542f5358899997c367ce9cd1",
                        "timestamp": "2021-10-21 10:30:25"
                    },
                    {
                        "value": "0c2e690572d7a0a66dfaff96486f73d456b34c5a7e37cfacc74fceaff4db9c62",
                        "timestamp": "2021-10-21 10:30:25"
                    },
                    {
                        "value": "eff9d989e2932646711ebd2992af5cf1afec61b9bd73a7208bd723af4f808df5",
                        "timestamp": "2021-10-21 09:21:19"
                    },
                    {
                        "value": "ed5e8ff7e2e5e830e2265ab6d76a5889a656444e157237426c0504a21a517471",
                        "timestamp": "2021-10-20 23:15:25"
                    },
                    {
                        "value": "225094389cc0b17be12db3ac35a84f89e63f1563c999ca25d36980624571d529",
                        "timestamp": "2021-10-20 23:15:24"
                    },
                    {
                        "value": "30fb7d881b1f708426e4208143437a6751f817015a87c9b36d60b9f7a4e82dc9",
                        "timestamp": "2021-10-20 23:15:24"
                    },
                    {
                        "value": "fb4a012c8d3f41dbdef2ecfece205cc69dfd4e302f4679bae346d634313b8cb7",
                        "timestamp": "2021-10-20 23:15:23"
                    },
                    {
                        "value": "6bd0b45db89b19fa45014bdecd4c7def8c2949cacef542544e8fc2b00ae8912f",
                        "timestamp": "2021-10-20 18:45:40"
                    },
                    {
                        "value": "060328088adbd34490920ce6790bec65956a0b5c3bd974294cf32277d8a39d6f",
                        "timestamp": "2021-10-19 17:30:26"
                    },
                    {
                        "value": "a3f50eb98afaf1fa3611be5e129012a443fb0f7e248e8d1e2c2e395d69c4fae1",
                        "timestamp": "2021-10-19 17:30:26"
                    },
                    {
                        "value": "cca26baaa5fda68034cf93a1075ab828f249f8daab0a58b96f7ab3f0ef7f6e0a",
                        "timestamp": "2021-10-19 17:30:26"
                    },
                    {
                        "value": "6aa904bd3d5de52d81d0be6cf0bd37c6b7987b1f17dd86439362aa57514cb133",
                        "timestamp": "2021-10-19 17:30:25"
                    },
                    {
                        "value": "d2c6f340f3de10a5b1ff6e5866f0f4757c0486b0bf7c664d9e697f1e44c64f8e",
                        "timestamp": "2021-10-19 15:00:32"
                    },
                    {
                        "value": "0bab94e43836296b8f55c1f4ca681674f269dcc448b5030118e334429b6565ef",
                        "timestamp": "2021-10-19 15:00:32"
                    },
                    {
                        "value": "deb99e377238d822f514a0e3f141d0ca0d4f5ddf141b00cb23f417310ff9ab20",
                        "timestamp": "2021-10-19 15:00:31"
                    },
                    {
                        "value": "8da08ea632573932d4efe8aa32de62d583564247925f0ea85789d99d427e08b5",
                        "timestamp": "2021-10-19 15:00:31"
                    },
                    {
                        "value": "fdec4f55cde88d88655a58c99ed75bc2218430a32c29062a258ecf7932e548d6",
                        "timestamp": "2021-10-19 08:45:24"
                    },
                    {
                        "value": "b49944bf2df14285060625c0c83a93397ac2a8e7f896592881f0c7207d00d4a3",
                        "timestamp": "2021-10-19 08:45:23"
                    },
                    {
                        "value": "4f28f8460abcaaf087c8f7ac3980916768846e60a096763429bc66bed1e62f57",
                        "timestamp": "2021-10-19 08:45:23"
                    },
                    {
                        "value": "be881776d5b641749f3581e555076ca05ec433f5396b9fefcf6870325c74fce2",
                        "timestamp": "2021-10-19 08:45:22"
                    },
                    {
                        "value": "b5a2b6aebad90fb28863e05de244624fec7e80064b3c26ac1318e5371002b5af",
                        "timestamp": "2021-10-18 12:45:30"
                    },
                    {
                        "value": "69e8a7c05d1c336f32d92faffc8835c10074c2a9aa3e1a58dfeb1862c93a95d7",
                        "timestamp": "2021-10-18 12:45:29"
                    },
                    {
                        "value": "4ed734e9759f4c0f6da12c3863ac192a5ccfd0493b5cb4a045c7466791bbd154",
                        "timestamp": "2021-10-18 12:45:28"
                    },
                    {
                        "value": "736c1a6260210e721fbfc85800db502d17f2b495ab2d0bf856d19034ef176e16",
                        "timestamp": "2021-10-18 12:45:28"
                    },
                    {
                        "value": "638b7a24c7fa7fd0a3198c814de97b3c37b9477e8d349bac98672afc7d8f8954",
                        "timestamp": "2021-10-18 11:49:58"
                    },
                    {
                        "value": "29cff196e48423e10129a6be25d16112758d6d4650b32df02911d18331dd1bd5",
                        "timestamp": "2021-10-14 12:41:51"
                    },
                    {
                        "value": "0f7b1d33d44c2df099ebcac2627f07269bdadc33182d867a8de06dd0e8991536",
                        "timestamp": "2021-10-14 08:00:25"
                    },
                    {
                        "value": "a3237b31acd5448e7082cf28eb83ba819added0c2053c938cb603652aeecf177",
                        "timestamp": "2021-10-14 08:00:24"
                    },
                    {
                        "value": "b87ecdb8035fa8b5ce87570d757265182a9f49122a02e77dc7f414816cf4b511",
                        "timestamp": "2021-10-14 08:00:24"
                    },
                    {
                        "value": "1bd6ca0da8962970e264b56a8d713424cdd6fb905768867f4454218f3c84d7be",
                        "timestamp": "2021-12-18 20:07:06"
                    },
                    {
                        "value": "711d41ba139f51e91bbb8f691f91e55655a0ad5a40f61a6bfebd9fe3d1ae2e37",
                        "timestamp": "2021-12-18 20:07:27"
                    },
                    {
                        "value": "1fdc9ecfa8bddd5c3d7b77913cec4dba53263dac5b8f35cde40e920a58f2deca",
                        "timestamp": "2021-10-13 13:15:38"
                    },
                    {
                        "value": "6daf7523616fc65196b69824ee771e33484bdd20c29179ccaa9a7a98a807adda",
                        "timestamp": "2021-10-13 13:15:38"
                    },
                    {
                        "value": "90aea5afb79d4a06dd87604c0e77067079fe149ba7d9c6db2308b64d7ad4d641",
                        "timestamp": "2021-12-18 20:07:33"
                    },
                    {
                        "value": "6276ef565aebf223533b10f56f770550ff8bffdfba2799d4e9c379000d6fe44d",
                        "timestamp": "2021-12-18 20:07:25"
                    },
                    {
                        "value": "0a5dc3b6669cf31e8536c59fe1315918eb4ecfd87998445e2eeb8fed64bd2f2c",
                        "timestamp": "2021-12-18 20:07:04"
                    },
                    {
                        "value": "f228ebe1b6d660825c71c76528486d30fe68858362b0bab96a203b4eba670c35",
                        "timestamp": "2021-12-18 20:07:53"
                    },
                    {
                        "value": "05679e77d92c8be217fb1e34cfaa8dc0254a98c9cd35ce0b0bbab31426daff1f",
                        "timestamp": "2021-12-18 20:07:01"
                    },
                    {
                        "value": "dcc7b6b824c07b079f1d424548def94042ab0372cc0d6c7dd0ad4f45bc6a4535",
                        "timestamp": "2021-12-18 20:07:50"
                    },
                    {
                        "value": "0055fab035e9d26b72bb550b88eba4972f56d3885c0b013a83286bdeb7496de1",
                        "timestamp": "2021-10-12 09:41:00"
                    },
                    {
                        "value": "5dd7b62b7bac3ff2db5df02169ead01a88e1fef495e77437ad60c1e79487068d",
                        "timestamp": "2021-10-11 21:45:27"
                    },
                    {
                        "value": "3306d732905da031d4527182b57362de5ba93899f8b4f0296bdd6741a48e7047",
                        "timestamp": "2021-12-18 20:07:13"
                    },
                    {
                        "value": "cff55c3302dbfd081577580324fe23e04f0f096eacebe79e92cfcff0fe949231",
                        "timestamp": "2021-12-18 20:07:45"
                    },
                    {
                        "value": "2dd759d0c46f6474f6716fd1aab8ede4444d8e267660c95d87b7f53b2c2da8bd",
                        "timestamp": "2021-10-11 21:45:26"
                    },
                    {
                        "value": "50d4fe108644485286a9bd25677d766c48a9089f9e75a994c392153584944dc3",
                        "timestamp": "2021-12-18 20:07:19"
                    },
                    {
                        "value": "21bc338e655f19ef20d652eb43f1deba909265087687e3a1e8ee2185b2b38118",
                        "timestamp": "2021-10-08 05:45:33"
                    },
                    {
                        "value": "78a0715871efd92e83a6538bd479ae4ad347107e6adfb20cf655e61181585d96",
                        "timestamp": "2021-10-08 05:45:32"
                    },
                    {
                        "value": "c10441e9b77edf0be69022461fca3a9ebb988c5abc05ad45bd90da7f8cf49f99",
                        "timestamp": "2021-10-08 05:45:31"
                    },
                    {
                        "value": "21ea698ba202d9ea7d207a47c6c6675cef1d73e09449218156ccec5907fcaf73",
                        "timestamp": "2021-10-08 05:45:30"
                    },
                    {
                        "value": "5782ad3b09b191b0f06273cf23021c32207986760dd36d2d8c7da83bcd1778a3",
                        "timestamp": "2021-10-07 20:00:26"
                    },
                    {
                        "value": "437252ce5e183e89ff25e5634c411583de24829219901bf884f762351c8b6ec2",
                        "timestamp": "2021-10-07 20:00:25"
                    },
                    {
                        "value": "35a1292dcbbe0e8db0893318e876fefbceb3559abe32144604c5ff66ba4dbf18",
                        "timestamp": "2021-10-07 20:00:25"
                    },
                    {
                        "value": "a37f1e884d45563e28ed15d8c3e0304f269bea18a36c389dfac0a28363ee2c1e",
                        "timestamp": "2021-10-07 20:00:24"
                    },
                    {
                        "value": "75b2831d387a27b3ecfda6be6ff0523de50ec86e6ac3e7a2ce302690570b7d18",
                        "timestamp": "2021-10-07 10:12:00"
                    },
                    {
                        "value": "b2527c2b5ff50072d71885cf172014369ff357b0cbc57d711cdce75991153f94",
                        "timestamp": "2021-10-07 08:15:28"
                    },
                    {
                        "value": "13404bd37fb5ffbe300e5875febb1934d03344f4c6e7dbc0d2dc2def3253ef34",
                        "timestamp": "2021-10-07 08:15:27"
                    },
                    {
                        "value": "b117319cd3bbe3eab062a66df59a9ee1629b18d9e17f160f3326c01709843604",
                        "timestamp": "2021-10-07 08:15:27"
                    },
                    {
                        "value": "d185732b8bb8690a03f8aaddad2a2222caeca398fa8d55dac47081ce4a184c19",
                        "timestamp": "2021-10-07 08:15:26"
                    },
                    {
                        "value": "2f1a64acf84ab441cca368254435346dfcb308a24e3111b47e4d7775ec838514",
                        "timestamp": "2021-10-07 05:00:28"
                    },
                    {
                        "value": "6a887a1b904688bb019fe4f056d2e0c395c8f19b86f558b4e4dadfff06ee11ef",
                        "timestamp": "2021-10-07 05:00:28"
                    },
                    {
                        "value": "aa8fb54ad61a9a478bb55a7613ff67b61186c83a6f5ac3d71cfc8697afeedd97",
                        "timestamp": "2021-10-07 05:00:27"
                    },
                    {
                        "value": "dae98216e9afdf607fef6103da482bda1b6f7fb6ee9731e94fd96f61a4a0931c",
                        "timestamp": "2021-10-07 05:00:27"
                    },
                    {
                        "value": "2D36B262E2FD8C0BC77499C4AFE6FDC0C7EF6F6EE8EC36FD4AB168B3F2493B89",
                        "timestamp": "2021-10-07 04:50:59"
                    },
                    {
                        "value": "087b1ca9e2c4626d5b7b0002a456339ea0bf95007bc2b4ac9540ba493fb89bb2",
                        "timestamp": "2021-10-04 20:30:54"
                    },
                    {
                        "value": "e3efaf72472faf918f7ff2a430db45cf5ffc2eb595e1b96d4dc403603b0acced",
                        "timestamp": "2021-10-04 20:30:52"
                    },
                    {
                        "value": "7cf4902a674dd38dd699992bd6664ebe5130fe93daffd14965bbcf6afea47569",
                        "timestamp": "2021-10-04 20:30:51"
                    },
                    {
                        "value": "081284ebf71edf74989bf099d886dbaba27f2460d2ac40b2b67be290731a5dce",
                        "timestamp": "2021-10-04 20:30:50"
                    },
                    {
                        "value": "4fe846bba1dc6830bde9724ec6046cdac76fdd5db7e885b6356ee4e6d3e3b495",
                        "timestamp": "2021-10-04 06:00:30"
                    },
                    {
                        "value": "df48104c58d57b4c37724ffc8d5dd9c438f9e88e894aa3b72d9ba205b10fe160",
                        "timestamp": "2021-10-04 06:00:29"
                    },
                    {
                        "value": "02db73297a77899969a286f7d05336a834f2e8f6fff564bdf84d14979959e99a",
                        "timestamp": "2021-10-04 06:00:29"
                    },
                    {
                        "value": "784f22f31bacf9e57c6162d31282e75fde015c4a74f6b126a9255c4a38be8a38",
                        "timestamp": "2021-10-04 06:00:28"
                    },
                    {
                        "value": "D5D1D8FC15B682E36F5D2EC316C962DDE92CA9D3181D2CC6AA7C8175E13E710D",
                        "timestamp": "2021-10-01 08:25:53"
                    },
                    {
                        "value": "a07487a2bdd1f4888e04e88234235f08eeecdf5f421e8f2e84170d291595418e",
                        "timestamp": "2021-10-01 06:45:29"
                    },
                    {
                        "value": "fa7cd604ad7fbe5ecf7b74dd1f5e817927ef730d4021a87b4a93ec9b9ea938e0",
                        "timestamp": "2021-10-01 06:45:28"
                    },
                    {
                        "value": "bb73906e429192837cfef95b17a7cff6eeb2cea4afc9f125f709f1ad6e8c2f24",
                        "timestamp": "2021-10-01 06:45:28"
                    },
                    {
                        "value": "137db6baaee41625a255900d2e76eb3c42575398bf06b92e2a0ef50a40305cc1",
                        "timestamp": "2021-10-01 06:45:27"
                    },
                    {
                        "value": "76aaa0acbc3c365b80abe3d161876c2d6ef8a0411feb4992bb858f150e5b06f0",
                        "timestamp": "2021-09-30 00:15:34"
                    },
                    {
                        "value": "05bd5d3db45020e2f51c15c3f19b13fb3bef610f1e9d614f4bc8a4650c6ea814",
                        "timestamp": "2021-09-30 00:15:33"
                    },
                    {
                        "value": "f0d689b112dd834c1e4daa0ac6cd032fab83177aa37168b24da9904512fa4800",
                        "timestamp": "2021-09-30 00:15:33"
                    },
                    {
                        "value": "0420f187d39d024210e090074cfabae0860af897bd4612328a459e11c3113365",
                        "timestamp": "2021-09-30 00:15:32"
                    },
                    {
                        "value": "7f9ac16c70ee0d867dcc32603ba9baf287059ff07e7bb5179910110729549c8f",
                        "timestamp": "2021-09-29 12:03:20"
                    },
                    {
                        "value": "96c895b752c154eec83f2aed6f6f8d2247345d1b94d51735f522ec41c4e6f2c6",
                        "timestamp": "2021-09-29 02:15:34"
                    },
                    {
                        "value": "8305bef41a7a9faf5f8c82efb0546111ed8fc48fe6fe67eef5035f84ab142223",
                        "timestamp": "2021-09-29 02:15:33"
                    },
                    {
                        "value": "241982725a6cb6b4a40cd3ead5810621b3532f43310c802c0dcb1561aa7060d3",
                        "timestamp": "2021-09-29 02:15:33"
                    },
                    {
                        "value": "5d859d6d8b37521eca429f7886ba611e86f9ebffda5cbe2afe8a31dd2ba12e23",
                        "timestamp": "2021-09-29 02:15:32"
                    },
                    {
                        "value": "fcc3c145feb6edd172f0b71b649f2b6ca1271b77d46684ab847cc721a88120ed",
                        "timestamp": "2021-09-28 06:30:33"
                    },
                    {
                        "value": "305ed78ee634d43f795b60c6937857f6ccf3090f26e752a9bd524c2dd0ed76ec",
                        "timestamp": "2021-09-28 06:30:33"
                    },
                    {
                        "value": "a4345b31634094a183f6f268c1ed8481d29be7a21ddacff1032dd73270048326",
                        "timestamp": "2021-09-28 06:30:32"
                    },
                    {
                        "value": "4629a682d57a35a8419f032f7ad4921df246a1ce79a9a0ba617b93c2abc85662",
                        "timestamp": "2021-09-28 06:30:31"
                    },
                    {
                        "value": "342519229448344321b64bcb63a3c567643bd4cadaf2cd483a5249333dee336b",
                        "timestamp": "2021-09-28 05:15:29"
                    },
                    {
                        "value": "26726a1e321ed1e0f39b676a56b38eb41641f734aa05e0a9669c6144b53ee191",
                        "timestamp": "2021-09-28 05:15:28"
                    },
                    {
                        "value": "b69454f012d76acbc3e95b7dc6dd22ad1e3a78945e853badd19dc8f71f378103",
                        "timestamp": "2021-09-28 05:15:28"
                    },
                    {
                        "value": "80d4ea554c930fb96f0f5d0449ca53ad4fd0e0d8da06e5a19cf3bf58c3a0a5c4",
                        "timestamp": "2021-09-28 05:15:27"
                    },
                    {
                        "value": "8680641d5644828bf4ed6bb714bf7fc8a018748e912b56745875e471e136c953",
                        "timestamp": "2021-09-28 05:00:28"
                    },
                    {
                        "value": "e4c1c0121487f83b014b8c81bbaf03db0b7f49584a268a5e67ca64ba6e64676f",
                        "timestamp": "2021-09-28 05:00:28"
                    },
                    {
                        "value": "f521183fa7ccb905075d25c49698aa71564729ec4486b837386ea0eaacb6931d",
                        "timestamp": "2021-09-28 05:00:27"
                    },
                    {
                        "value": "ff065393dfae33f0aa4ca15ae0c7e43a41551a6e231b79ff6493b9d5abb987d5",
                        "timestamp": "2021-09-28 05:00:27"
                    },
                    {
                        "value": "cde2e10365fb2d2a695b32bdf0fb5d148f958faf0b5d7c5c67207b56bb1eed6f",
                        "timestamp": "2021-09-26 16:15:34"
                    },
                    {
                        "value": "59d178be1e411f4a487ec04ed9c216f4c4f0701adfcd28c561492ac55c625fba",
                        "timestamp": "2021-09-26 16:15:34"
                    },
                    {
                        "value": "5fb0021b164e920e366aaae3159aa0466f83121efaf4f78dc09798e6a23b9f70",
                        "timestamp": "2021-09-26 16:15:33"
                    },
                    {
                        "value": "2b14cb504c7eb9136b576677fca2605c1412119ad41f450e099cad85ecb8350a",
                        "timestamp": "2021-09-26 16:15:32"
                    },
                    {
                        "value": "f3a4066957aa05b6cf139ed82a5648a92107bcc310acf20c6a8130b4ec114900",
                        "timestamp": "2021-09-24 12:30:29"
                    },
                    {
                        "value": "9d244ce232bd2b5d26c9ce094fed10396725688393046ff812a9df1fe420a5af",
                        "timestamp": "2021-09-24 12:30:28"
                    },
                    {
                        "value": "abbb80ae27238fdc36b89e42bf264e4815c1e1a8a8134eb710b41e228dc42ac2",
                        "timestamp": "2021-09-24 12:30:27"
                    },
                    {
                        "value": "3688507e327d12440bfd1a5eb2c5bfb86591d002879b695ec07f89c79d70b4b0",
                        "timestamp": "2021-09-24 12:30:27"
                    },
                    {
                        "value": "7a2190146b5218f87ffeece553cee8b341b66989f41afcf67b81471b7fbf7929",
                        "timestamp": "2021-09-24 07:30:33"
                    },
                    {
                        "value": "ae382b9ce84e81ee06ec0ffbf44d609f445cf778885b048d093a20825252f1ec",
                        "timestamp": "2021-09-24 07:30:32"
                    },
                    {
                        "value": "6cad27da43d9637e51e2dfe2209ef58d7269528a457d7fc611531ec6a0b1bb04",
                        "timestamp": "2021-09-24 07:30:31"
                    },
                    {
                        "value": "0b13a9905fc2c3748330b0c85959974e80fdadd3fbe87f09c3daeaca89f912ca",
                        "timestamp": "2021-09-24 07:30:31"
                    },
                    {
                        "value": "069f993ef7b6a04a49e0310436248c1d6ab6ae6b581fdbb806b82d01dcff9338",
                        "timestamp": "2021-09-23 21:30:30"
                    },
                    {
                        "value": "3fea41e52b822f5ca5919c10e7410c955c22e1e5b5af1d0b3e06768e33a650cc",
                        "timestamp": "2021-09-23 21:30:29"
                    },
                    {
                        "value": "4d566be76db8dde4b26fc6647932d65750edfb47b46d909ec4d4ef3c6e12dadb",
                        "timestamp": "2021-09-23 21:30:28"
                    },
                    {
                        "value": "ec3f2fdf975bb28883bbc08c93553f85ba0fbe6b19c184183a40ec4f3172b37f",
                        "timestamp": "2021-09-23 21:30:27"
                    },
                    {
                        "value": "705ed1e1f8bad8d0a099a90f3e4d782ce65bf336f2360137edf5ed03527ce9e9",
                        "timestamp": "2021-09-23 08:00:25"
                    },
                    {
                        "value": "1a6e9dbfa0e567ff1394b22aa6811b640cf8a9e5c85b534f5d1c6ed974c7fc98",
                        "timestamp": "2021-09-23 08:00:24"
                    },
                    {
                        "value": "d6fead86887be95625ca5a251a8a2fff20ea0ed3885d23e40494c6d73be60e0f",
                        "timestamp": "2021-09-23 08:00:23"
                    },
                    {
                        "value": "009d0fecfa5e3179c055a458b1e65441fbeee525334d11d7c049f1995cd5703c",
                        "timestamp": "2021-09-23 08:00:23"
                    },
                    {
                        "value": "6e7eebabcb0db7c5f981e6ad8096ff9470f04331e1acd8fbb876eeaa442b4cec",
                        "timestamp": "2021-09-23 00:00:30"
                    },
                    {
                        "value": "3e139cfc7cd85be516a7598cb955e9e526c0d8d992ec6eb5a56728521ca91a53",
                        "timestamp": "2021-09-23 00:00:29"
                    },
                    {
                        "value": "1d4c724b46ac8be97b795e8e364fc8043331d9ad858c912f30aac0bb80b3baf4",
                        "timestamp": "2021-09-23 00:00:29"
                    },
                    {
                        "value": "ef1f9e70ceb68ca87c8e72ff9b10683171049eab50b20770091bcbb2121d7bab",
                        "timestamp": "2021-09-23 00:00:28"
                    },
                    {
                        "value": "3857abf6be6830e42669f6d3eac0c50b53e9a21be28ce4bd1a4627b95dfe4f82",
                        "timestamp": "2021-09-22 12:45:24"
                    },
                    {
                        "value": "0299cf0c73ab95b9504ae3f1e17b4f4674fa09d5257fdc13de8766c9a2215ea3",
                        "timestamp": "2021-09-22 12:45:24"
                    },
                    {
                        "value": "d4000f335f53b65bd47476d6367d470df6a8f345b7f4b0750bbba73abaed5942",
                        "timestamp": "2021-09-22 12:45:23"
                    },
                    {
                        "value": "bff66b0d35ac7703c7d92c4cc0423c5e65ba2ef6040cd576864f76ad701cf7e4",
                        "timestamp": "2021-09-22 12:45:22"
                    },
                    {
                        "value": "ed354c01cf8f6b7b40708f768da51a0b81b0fd838d15982e497a16ee4cdc6145",
                        "timestamp": "2021-09-22 06:45:34"
                    },
                    {
                        "value": "d43cd307bf48505b33150202c0e787fcf79af09be0389558f5461d2a2ef64f2b",
                        "timestamp": "2021-09-22 06:45:33"
                    },
                    {
                        "value": "9ee2d9fa81f867c19beae4747b32d276f5b09e325759babb78f39336f5ae23a7",
                        "timestamp": "2021-09-22 06:45:33"
                    },
                    {
                        "value": "d8d1ebdb241277b39607ea8d4c63853c25b6523a3a88d720373a0f9efd03a686",
                        "timestamp": "2021-09-22 06:45:32"
                    },
                    {
                        "value": "7731ab5ab0fd35dad5a328b0bf6fee7d68a36fae9b3fd7429d22f351f2a6c398",
                        "timestamp": "2021-09-22 06:00:33"
                    },
                    {
                        "value": "e4b322d86c20dbd5d5baf50d8dd333e81f5712e7ebe25c3987f4809b0daaf874",
                        "timestamp": "2021-09-22 06:00:32"
                    },
                    {
                        "value": "da8fe88abc527b1e3256cbfab3f8f1554c641b951564d11e270cdc456f89c581",
                        "timestamp": "2021-09-22 06:00:31"
                    },
                    {
                        "value": "6923f0061817032bb4bf5e8be6686e7b2481680e1fce7f85516fbba0939a603d",
                        "timestamp": "2021-09-22 06:00:30"
                    },
                    {
                        "value": "a40f59bec757f313d8f82568f3c1b3bef8eb990f35a1ec6a8c83021f343497ee",
                        "timestamp": "2021-09-21 12:30:29"
                    },
                    {
                        "value": "f821c874dab9b173d30b4c76d168c28d90ef53c34c07c878712b1a63d1687130",
                        "timestamp": "2021-09-21 12:30:29"
                    },
                    {
                        "value": "e5a12cf4cce9ec8ee1d09275355384486d66ea924e5ea38ef879fa6a2e31cafb",
                        "timestamp": "2021-09-21 12:30:28"
                    },
                    {
                        "value": "66cda39efb0c3e252c5dfb44e5e07e3ada14875958f7eba8625a05c6d610c4e3",
                        "timestamp": "2021-09-21 12:30:27"
                    },
                    {
                        "value": "74a0e30d9a47daaba3c323aeb4e5390cd8e7ceff06bf68a2c875b804bcaa0cab",
                        "timestamp": "2021-09-20 17:49:43"
                    },
                    {
                        "value": "0bc69197000c40965767e7f086b9bacfc44f7fc53f516f0ef2578b231fc4adfb",
                        "timestamp": "2021-09-20 15:15:27"
                    },
                    {
                        "value": "a0febefab34217e2a73d5384b4ad546d5eed266a57eae8953ffd73696b98427d",
                        "timestamp": "2021-09-20 15:15:26"
                    },
                    {
                        "value": "241ecbb05ed11496a8f8fd06c1cc5ae530fbbfa5f24a7174f8ea946f14d823a6",
                        "timestamp": "2021-09-20 15:15:26"
                    },
                    {
                        "value": "12021fc0d383f24539b8565bb873b36cd84e16ad126588336300a5039bf85093",
                        "timestamp": "2021-09-20 15:15:25"
                    },
                    {
                        "value": "0dc6ac9a0255d8c726ea77ff4a7298ecc14552790389259c841e9da27c46e540",
                        "timestamp": "2021-09-20 12:30:29"
                    },
                    {
                        "value": "8a88211f7dc2c10cdbdc9b2c024c7ab7584f4a87594861b0c701549e3129314d",
                        "timestamp": "2021-09-20 12:30:28"
                    },
                    {
                        "value": "6c94aaedade1edd06fe15389c0ce3f005af3ebb0fee2b8977def98c79a77e4f9",
                        "timestamp": "2021-09-20 12:30:27"
                    },
                    {
                        "value": "3d7ff7b5c3895822950678253ac0465c62854af18802895bfd193ff6df0d0572",
                        "timestamp": "2021-09-20 16:28:52"
                    },
                    {
                        "value": "2ee8e4211b1058608bc165bda66fe8e8109aa14770f6a4085c3bc1c84ad386a8",
                        "timestamp": "2021-09-20 06:45:30"
                    },
                    {
                        "value": "be5a3df82cfa97d785eecf56f2c6f822f657d65e7f5b78ea913ccf96e6f109d9",
                        "timestamp": "2021-09-20 06:45:30"
                    },
                    {
                        "value": "84fcfd1c71d437667fd51eb8409202b796155e57b40d57bfbedeb4dea9024dde",
                        "timestamp": "2021-09-20 06:45:29"
                    },
                    {
                        "value": "867c8b90e259423404956a0d8d3cdc7234f9e28c3760c8fa9819a83f16049e77",
                        "timestamp": "2021-09-20 06:45:28"
                    },
                    {
                        "value": "38c0acb3236f4329c4005dbe56bd989f5f64d87c324dfbf33e73ad6ddac5b544",
                        "timestamp": "2021-09-20 05:15:30"
                    },
                    {
                        "value": "7cd6d59439d525ccf002e777f2118121cd494a5a6d5de8710298344beaeb6c72",
                        "timestamp": "2021-09-20 05:15:30"
                    },
                    {
                        "value": "90f93b1a2d9db42cfdf15a43969eca6828c11a1ed9a1c0358bdbabf0de88e739",
                        "timestamp": "2021-09-20 05:15:29"
                    },
                    {
                        "value": "42fde8773b329b1b25eef934047627c9107dc68fc74d4efff962f2f5178fb8ac",
                        "timestamp": "2021-09-20 05:15:29"
                    },
                    {
                        "value": "aaddc5b6f3999b258fad49349d7d73889d23d2fd83c7798ae0f403b29ae14dc8",
                        "timestamp": "2021-09-18 02:00:44"
                    },
                    {
                        "value": "2573a32e3edf74ed6132fa3f8cec9645ea2032b9b0df6f640385898666fe415f",
                        "timestamp": "2021-09-18 02:00:43"
                    },
                    {
                        "value": "1ad4669baf4e29c2fad52c228b8a8cba9360b5bc129b1780aee603a4c207e670",
                        "timestamp": "2021-09-18 02:00:42"
                    },
                    {
                        "value": "44967746090838e26a87a838de319dfdef45ea71992a633e83c482fdc2abfc7a",
                        "timestamp": "2021-09-18 02:00:40"
                    },
                    {
                        "value": "ed67d2958f942f4beca20ac7ac8067f5af0196500af45b596d8e241d81d5f782",
                        "timestamp": "2021-09-16 15:45:24"
                    },
                    {
                        "value": "5cb7c3eaf9d64f5f34c530b50786571ddb8884f7abf6690774c419bea9eeba54",
                        "timestamp": "2021-09-16 15:45:24"
                    },
                    {
                        "value": "ac80fe510f117a1ed1ab2664deea2e3c7421dfdc96d2a9f8b0bf6fa57f0e5085",
                        "timestamp": "2021-09-16 15:45:23"
                    },
                    {
                        "value": "a105b485a43cdc606e7a040fb26e557fbd302be0b5f1b865bade788b5cfd0866",
                        "timestamp": "2021-09-16 15:45:22"
                    },
                    {
                        "value": "8e8611d4f594d003a87db801b69a0c132114fea33aca39c7fcc8a18cb17d1985",
                        "timestamp": "2021-09-16 12:45:30"
                    },
                    {
                        "value": "84f60195801751c19bd18124c2ee2c36c894135c3f9e0f36fe01910ddf90ba7b",
                        "timestamp": "2021-09-16 12:45:29"
                    },
                    {
                        "value": "d1ad9e3f121122403fc66c234aa21cab45b74556a641c3c62d418c2306754c44",
                        "timestamp": "2021-09-16 12:45:28"
                    },
                    {
                        "value": "72bf0c4750c07ec89ffe7a93644889b4e4c6674eaaca4f94528156fb152c94a4",
                        "timestamp": "2021-09-16 12:45:27"
                    },
                    {
                        "value": "863a19222eecc560657e64d720a5b64a28e972a7ea5a7983c98343694ffe284d",
                        "timestamp": "2021-09-15 19:00:27"
                    },
                    {
                        "value": "3797bd6301393aaca22859ec444383cbaa7560e268bce575fc999a3d00ab029e",
                        "timestamp": "2021-09-15 19:00:26"
                    },
                    {
                        "value": "751a3906ac87fa9b3fad2661ee0a9ae6c5f2d2553c67f02a9c92e8bd1151d910",
                        "timestamp": "2021-09-15 19:00:26"
                    },
                    {
                        "value": "e43c10d4048ea441d0300a609969cf005f9b442dd531fe557448262462b1f100",
                        "timestamp": "2021-09-15 19:00:25"
                    },
                    {
                        "value": "f4f1ae05a1dc2e89a8c43f0c1cb61b1e09c72529ee73bc9c925fc2beafd70451",
                        "timestamp": "2021-09-15 09:15:26"
                    },
                    {
                        "value": "166543f99127d82efa2829143331ca504973fd66a19c7149aa6a0ab5f4ab7641",
                        "timestamp": "2021-09-15 09:15:26"
                    },
                    {
                        "value": "eb8c2f29514100dee9a1aa577df9ad524c17da2ed4f88571d864902e8dfdb66d",
                        "timestamp": "2021-09-15 09:15:25"
                    },
                    {
                        "value": "f7779138c2d68743ff5bd030a27a76dd76e94c0fd3cc921c046a150f074757fc",
                        "timestamp": "2021-09-15 09:15:25"
                    },
                    {
                        "value": "f485d1a65ccf9f857baa49725d337c15e8aa34515b85c8ef59a72afad7b85249",
                        "timestamp": "2021-09-14 10:00:32"
                    },
                    {
                        "value": "1a4273438fcdf1ffe3c41cbd853b85785ce39f266d71f34214f8ff69df0f2b75",
                        "timestamp": "2021-09-14 10:00:31"
                    },
                    {
                        "value": "e0980c46b4f0dc328c9d75e2f7e7995824d4ddc576168dee83a99161fedb23c4",
                        "timestamp": "2021-09-14 10:00:30"
                    },
                    {
                        "value": "7bc13c6b1b2d366a92c075d090e1976a033a6c5e79b202a2932227eb72ed46be",
                        "timestamp": "2021-09-14 10:00:29"
                    },
                    {
                        "value": "282371a6cd19af1c0b076d80d1a34e0b5920427cfa998bc34f68c6d6d2601c08",
                        "timestamp": "2021-09-14 05:45:39"
                    },
                    {
                        "value": "a6fe1b5f0136250eee45dc63e29358b762d19bc8e25cf9fa2a99fbf4bf608a18",
                        "timestamp": "2021-09-14 05:45:37"
                    },
                    {
                        "value": "30cac5dddc6d9c235c35ae552ec995845eb34d82f9fdb74af722f193d8f53fcb",
                        "timestamp": "2021-09-14 05:45:30"
                    },
                    {
                        "value": "a80c692dc3c824411267ec2e5f079254026f5a4bdb369ed844bdebf1cdd60918",
                        "timestamp": "2021-09-14 05:45:34"
                    },
                    {
                        "value": "29521bc285319b7a55780037bf10b15a53ffb3bd21d2ee2ebc84aa2e3fa3c22b",
                        "timestamp": "2021-09-13 14:04:18"
                    },
                    {
                        "value": "7b864567ce2527e7dee91118c1bbf6bd1855ca15588c3a743fe535574345b451",
                        "timestamp": "2021-09-13 14:04:17"
                    },
                    {
                        "value": "828aaae260ba9d173a8afc3ae9983859129208e52995d204336b67df5453e699",
                        "timestamp": "2021-09-13 14:04:16"
                    },
                    {
                        "value": "707235a5bde8a7784c8cdb386198d7220e0f3d361b9c1a9704fddb810d92869a",
                        "timestamp": "2021-09-13 14:04:15"
                    },
                    {
                        "value": "84f191b2ff509d5d28f97a37614feb83b167656650e74a6d233677f4c1914c35",
                        "timestamp": "2021-09-09 16:00:42"
                    },
                    {
                        "value": "8744b1bba11ed42a3e422599468f9d7aa117bf7264875591a82ebbf1dc4dbffa",
                        "timestamp": "2021-09-09 16:00:38"
                    },
                    {
                        "value": "dfc761bd651db9fbcf544787fa5b982e93949fda88c7362f34c101f8446a32ec",
                        "timestamp": "2021-09-09 16:00:37"
                    },
                    {
                        "value": "dc018adc3a81607a1d72de3c92b941318e903bc1b71697414a8d7941d67fe26d",
                        "timestamp": "2021-09-09 16:00:36"
                    },
                    {
                        "value": "1fa896714cc8999f0595beee612dc138788d1cec3a067f418f68fe210407a080",
                        "timestamp": "2021-09-06 23:45:38"
                    },
                    {
                        "value": "74e4c154a3b85c7c9af0544019a5ec8c202f5748066450e7f00ef32335587f43",
                        "timestamp": "2021-09-06 23:45:36"
                    },
                    {
                        "value": "75337961d0cb03942bdfef8dab9337fca7193021ad99bfe73b860b9387b584ee",
                        "timestamp": "2021-09-06 23:45:34"
                    },
                    {
                        "value": "22869ec3024d826830c5f4dfacd4fa8937d8c4a2d25faaa715efd55b5059d6c3",
                        "timestamp": "2021-09-06 23:45:32"
                    },
                    {
                        "value": "dfa3ed0fe27098420adccbb584105619f46da4982d570ce7a2ca49e4a22b2e8a",
                        "timestamp": "2021-09-06 22:30:31"
                    },
                    {
                        "value": "5b952001fe9d7fd172015cc171244646aa1324e0a769b6ad635dab8b08b9cff2",
                        "timestamp": "2021-09-06 22:30:30"
                    },
                    {
                        "value": "9df1ad20fad23d0c7fb43b748e524c70e5a92bdd07d3c9286c986d58eec9139b",
                        "timestamp": "2021-09-06 22:30:29"
                    },
                    {
                        "value": "1395a50888b4c73f21c6b5a00af040111af037ec72d49bf6d18609d053be2f82",
                        "timestamp": "2021-09-06 22:30:29"
                    },
                    {
                        "value": "5268980cea792f915b0a8dee3d29af26a64fb385dbc8f050665c488c221a664c",
                        "timestamp": "2021-09-03 08:15:28"
                    },
                    {
                        "value": "3a27b565034a5fadc76d214a3ae967342a572badd6c499434870d3aba8541244",
                        "timestamp": "2021-09-03 08:15:28"
                    },
                    {
                        "value": "370add1a25657073c5c661aab24d05b02d47eaf1008e935e0c826da601d14492",
                        "timestamp": "2021-09-03 08:15:27"
                    },
                    {
                        "value": "7009e2ada6aa88b407f4b21e4b07e1b6dd93e46d1c3361c22105f356a22d1d95",
                        "timestamp": "2021-09-03 08:15:27"
                    },
                    {
                        "value": "1675fb76302c10aa0fe1f2f538357e39aeaba6c7162921c3e6c9a4cd3ebedd60",
                        "timestamp": "2021-09-02 06:15:33"
                    },
                    {
                        "value": "d3fd153f051fd2090c889ce52bc78b88ab908fbd4c842f32829fabb1ad310b51",
                        "timestamp": "2021-09-02 06:15:33"
                    },
                    {
                        "value": "18a0f81301bf191cb94219522948580bb2036c5025e3a723fdd6fe353d840b01",
                        "timestamp": "2021-09-02 06:15:32"
                    },
                    {
                        "value": "ecbba16d63acb71bbf1498a52c42d8afe95fe6166c45898acc7d4eb66d26ca70",
                        "timestamp": "2021-09-02 06:15:31"
                    },
                    {
                        "value": "25090850b697f62e5653403538224825541b1a9a1cbc347700e18c9dfb1d67c7",
                        "timestamp": "2021-08-31 09:00:28"
                    },
                    {
                        "value": "f8efdc806be878faaf8c96d42603f505f207f034106779d8a1a356d1eab253d6",
                        "timestamp": "2021-08-31 09:00:28"
                    },
                    {
                        "value": "295a2b49624e25f2bda364955227cdfb704462029876ac0d81e806ef22935d97",
                        "timestamp": "2021-08-31 09:00:27"
                    },
                    {
                        "value": "7d74d929a0162fa652089cbeda4fe7855b94108d698285d42891de4cdb32f6b7",
                        "timestamp": "2021-08-31 09:00:27"
                    },
                    {
                        "value": "8083fc125756be5ccebc8b837ffd80063f42696159291e0df941c28f03170b07",
                        "timestamp": "2021-08-27 08:30:29"
                    },
                    {
                        "value": "8344690f025846a5a0dcf5d6012a94cddcfe48ffcc06fa6d566bb4ef149e6716",
                        "timestamp": "2021-08-27 08:30:28"
                    },
                    {
                        "value": "b31f473c5c33e25d01786c0db1c65579306a25a580f4a9c440e9175e6c609d99",
                        "timestamp": "2021-08-27 08:30:28"
                    },
                    {
                        "value": "182e812e513e525d23ce63ce6f1446001b8156c9b37e97806ecbfb3c14693bc4",
                        "timestamp": "2021-08-27 08:30:27"
                    },
                    {
                        "value": "7cbd1f707a71b401a6e8289377d63cb56a5f4371838168c754878d9369ac68c3",
                        "timestamp": "2021-08-26 11:15:32"
                    },
                    {
                        "value": "c842634e5f05eaad1fed90d73f86d5c0a1ebd2f812ff8c97245816f0c1cf391a",
                        "timestamp": "2021-08-26 11:15:32"
                    },
                    {
                        "value": "7e49a457f3f772777fe36df11859897a3b60651987411fe73a1eb8adb07c6714",
                        "timestamp": "2021-08-26 11:15:31"
                    },
                    {
                        "value": "151cd5f57687e63ea29bb6aa4520e80390bb44ddc031f6ccb837c50c0afa8bb0",
                        "timestamp": "2021-08-26 11:15:31"
                    },
                    {
                        "value": "a00a7835e6acdbc782d3398a0d6a98c510e675be815fc21b04e668dd3de13928",
                        "timestamp": "2021-08-26 07:45:41"
                    },
                    {
                        "value": "3b35cc7972803156b3d8606c8567c2243f6197c97605dfa1a43601ff53e380ca",
                        "timestamp": "2021-08-26 07:45:38"
                    },
                    {
                        "value": "462dd37d9e52f8db2f4c9db3596d3c976556097767220fe379159449e56308f2",
                        "timestamp": "2021-08-26 07:45:36"
                    },
                    {
                        "value": "c98a42f6e9e5f2e0e12f69c4ce7022265b7db271369ddb2ebff3348c0434d3cf",
                        "timestamp": "2021-08-26 07:45:34"
                    },
                    {
                        "value": "a7a1a43d30f2cb7ee32934670de804b7a2c2961e2ef950339438eab91b1e438b",
                        "timestamp": "2021-08-26 06:15:32"
                    },
                    {
                        "value": "243dee23b179d34c88b6494be767a9cafcb36a57ffeef9f21ebbd463d1220b24",
                        "timestamp": "2021-08-26 06:15:31"
                    },
                    {
                        "value": "b131c130c9917ef24174f6978118c4df1bc5df6f495c971ac17731793169882e",
                        "timestamp": "2021-08-26 06:15:31"
                    },
                    {
                        "value": "60697f7c17c442322eea32ac41ee4d4e152e61fcff29079f4522cfa8de122c71",
                        "timestamp": "2021-08-26 06:15:31"
                    },
                    {
                        "value": "37fc32834534585e428b56470b36be2b234b9813bf6d82cea9c1446fd72bc50c",
                        "timestamp": "2021-08-25 13:00:32"
                    },
                    {
                        "value": "310865fb85de92745ce769785539d1196ec72f62810b42a12942b1997be69016",
                        "timestamp": "2021-08-25 13:00:31"
                    },
                    {
                        "value": "ee9d88a0586627e8550c28c26077f2094ae2a941be8ed5d67b76ec9bc0841d0c",
                        "timestamp": "2021-08-25 13:00:30"
                    },
                    {
                        "value": "a4bbac6b142c63da7c64937cc5beda93009b5be72481e98d514d62ee29801b12",
                        "timestamp": "2021-08-25 13:00:29"
                    },
                    {
                        "value": "793957d8deb9a28270f9e1d2ebce7285f2dd0398d27e86f5177eadd4e45b980e",
                        "timestamp": "2021-08-25 06:15:39"
                    },
                    {
                        "value": "3e36150936202506d3d8f59cf9ac7810dc1b3b0f7383e9dd9706cecb3fdaf060",
                        "timestamp": "2021-08-25 06:15:38"
                    },
                    {
                        "value": "88d340b5f4e128ee71446adff5b002ef8017bb5f919f7e170ecd4fc10566b8c9",
                        "timestamp": "2021-08-25 06:15:37"
                    },
                    {
                        "value": "ac692db84e9fe307a419ade7fcc68a11388b585699f67b095268966d013ac7c8",
                        "timestamp": "2021-08-25 06:15:36"
                    },
                    {
                        "value": "adcb5db1f09d2457682e3efed798b70fa73a6e56fe875b0e13e4dd0ab243cbb3",
                        "timestamp": "2021-08-24 08:50:58"
                    },
                    {
                        "value": "6a669a5b74625b718574d4e2f917c32c5eb15f250fdf8b2e72c626f1bc2dcea2",
                        "timestamp": "2021-08-24 08:50:56"
                    },
                    {
                        "value": "ab6cb0b8add55b66b105add3ef5d745f037be2e21c28f5e0e989b3b078cb6fa3",
                        "timestamp": "2021-08-24 08:50:54"
                    },
                    {
                        "value": "b893fe04a4f68ba4860d1887ea2d6f41881858d49a6b6159eea8013da3b4fb8e",
                        "timestamp": "2021-08-24 08:50:53"
                    },
                    {
                        "value": "b55dd9bdd573092e72d25ada88b5c7e221c63f28efcc979590b069584a7d4f63",
                        "timestamp": "2021-08-23 12:15:31"
                    },
                    {
                        "value": "c3982c6d30809bfb88cc1e1e6446aca39512be2ded5cfd55b3d308ef06607b08",
                        "timestamp": "2021-08-23 12:15:31"
                    },
                    {
                        "value": "fd708cf2f58044a66a00e47660dc6777a73940db8e94167e2a3f0647bfba8b0a",
                        "timestamp": "2021-08-23 12:15:30"
                    },
                    {
                        "value": "1d6fd54291eed895054d2c88063cadac20c03b9a806b6eaec65d8a5e20af560e",
                        "timestamp": "2021-08-23 12:15:30"
                    },
                    {
                        "value": "467db49e07d592f97847aeb59d6b8c34df885c77ae573b1d149d0c055d861bbc",
                        "timestamp": "2021-08-23 08:30:33"
                    },
                    {
                        "value": "672bfd2ee1ff418a1d0a969c4a8e548a359a389f31c12a720feb7b821975f8a5",
                        "timestamp": "2021-08-23 08:30:32"
                    },
                    {
                        "value": "eb69ca37765ec29d60e59f5cc79d32f422ca9a7c99b92fd54b649158b32441e7",
                        "timestamp": "2021-08-23 08:30:32"
                    },
                    {
                        "value": "e7f436bdb5efd5b5162c1c7310e5cec3b35cc110a5a7a9bc0c2d5a595df39df0",
                        "timestamp": "2021-08-23 08:30:31"
                    },
                    {
                        "value": "61420ff49b04a21fc486981bbb45a45b7ffd91b52e3a1e172ee25222d868febe",
                        "timestamp": "2021-08-23 02:15:30"
                    },
                    {
                        "value": "be76239da7234a7e43d56d819e0558d91bdc872aef6e08db9f612ca30355bb9b",
                        "timestamp": "2021-08-23 02:15:29"
                    },
                    {
                        "value": "ef997b7055ed1aa79887efffcba919a656d0d927d2a61957ff8306c708403abf",
                        "timestamp": "2021-08-23 02:15:29"
                    },
                    {
                        "value": "5472b936bf1bff3eb96ccf9f9426b55ddd3a31973991c970438bef00e034e430",
                        "timestamp": "2021-08-23 02:15:28"
                    },
                    {
                        "value": "852db9a27bdd0ec63f248b85cb371f95c8ad8018e01c93f2257b6738e7d8083f",
                        "timestamp": "2021-08-19 20:00:35"
                    },
                    {
                        "value": "4c1ff62f3b954a76ff2107ec2d4ec6cb3f2d05cee012f7137d8fa9f51e1fb2c7",
                        "timestamp": "2021-08-19 20:00:35"
                    },
                    {
                        "value": "9bdcb8eed0ddc7b700e3ac1ded641d2f5f703ea3cdfedc5eaad228f01cbb94d6",
                        "timestamp": "2021-08-19 20:00:34"
                    },
                    {
                        "value": "a47932785e3607195ef26727a7229e40e50c53e7e754f899a69adc1c6653d9db",
                        "timestamp": "2021-08-19 20:00:34"
                    },
                    {
                        "value": "f7fd768a7be1cdd8db784634dcca84b932be1a2ce7a03127d448722af13ea57a",
                        "timestamp": "2021-08-17 07:00:24"
                    },
                    {
                        "value": "b372ba907ad4c120ac6ddd86e8de1821d19dffef023bd32c18359bcf82326842",
                        "timestamp": "2021-08-17 07:00:24"
                    },
                    {
                        "value": "c56bc83a9e77b9ee422f659aaebab96027d0e5c57dce023a0f5939a96964d620",
                        "timestamp": "2021-08-17 07:00:24"
                    },
                    {
                        "value": "18cd73a838afa7eaedf424631d6a079f2ffe83c8d400d129656cad2fa6260567",
                        "timestamp": "2021-08-17 07:00:23"
                    },
                    {
                        "value": "8a4b01e5cfe645937ad304b5f8aae756ef320541143f2149bcc6e16d1e92183f",
                        "timestamp": "2021-07-30 06:30:47"
                    },
                    {
                        "value": "3dd8e57608751941804d5f1f0df50bcd1b1903a066686d1546ebdca4b38f0d6a",
                        "timestamp": "2021-07-30 06:30:39"
                    },
                    {
                        "value": "f70bb08ecbd6548a7a3a52a0a2a151e87af472b185dd1adaa718a87a340e777b",
                        "timestamp": "2021-07-30 06:30:31"
                    },
                    {
                        "value": "7213e683d974ed27c90dea93b40caa5c497ca4ab9834e159adb69f7be5d2081e",
                        "timestamp": "2021-07-30 06:30:27"
                    },
                    {
                        "value": "b43f61f0ce7cc012f811460ae0c1483e90c6f5936a6c9033bdb9a14212879e42",
                        "timestamp": "2021-07-29 12:00:36"
                    },
                    {
                        "value": "0293d5dfdc4a137166aebb05f2c1b7b4819846032b6c1cd6431f83b4f282cf88",
                        "timestamp": "2021-07-29 12:00:36"
                    },
                    {
                        "value": "799472ff2ede6b91288e967a805661d7ce186ca8ef7756c4bad3ed548e7c28b7",
                        "timestamp": "2021-07-29 12:00:35"
                    },
                    {
                        "value": "4ad1b97726ab2997e005315ac60899acf31c96458d3c5c4137f2999d9fbabc83",
                        "timestamp": "2021-07-29 12:00:35"
                    },
                    {
                        "value": "7d55dd6276dbd0f3d731d667f2938d2ebc192d50e227f79714e33471f2bbebd7",
                        "timestamp": "2021-07-29 06:30:51"
                    },
                    {
                        "value": "0e4f0d2e0d90b452f22fc886ba7a35ffe11f2645360161a19230562689d43dba",
                        "timestamp": "2021-07-29 06:30:49"
                    },
                    {
                        "value": "10f675a780a5814df0a79b673213a2ed2989816a517797df5656551b0819789c",
                        "timestamp": "2021-07-29 06:30:40"
                    },
                    {
                        "value": "b90e3f203d5736096b41b710e1fa0ab10f26025e84e4fcf1e4bc760a0306ed72",
                        "timestamp": "2021-07-29 06:30:31"
                    },
                    {
                        "value": "c9f200f2d880906c47c6a9c36a16b7a42851e62b27d531f7066651b6932a7aa6",
                        "timestamp": "2021-07-27 18:04:43"
                    },
                    {
                        "value": "2706cd9c8993267a695a8580ff5987c821093bfea0de05b561a98ac020b373ee",
                        "timestamp": "2021-07-27 18:04:42"
                    },
                    {
                        "value": "516d471cabb6c44b6b5a507d703bddb0df5e06207529d5685595d616cbf0abe0",
                        "timestamp": "2021-07-27 18:04:42"
                    },
                    {
                        "value": "3435b7c4052136ed52bf8c743cda8875a563ea74847ca22f29e2cff38614bfde",
                        "timestamp": "2021-07-27 18:04:41"
                    },
                    {
                        "value": "61fc463e85fb2fa581c8d7ba3321992bfe69d28dc8ca06660875d8b9e9701ecc",
                        "timestamp": "2021-07-27 18:04:43"
                    },
                    {
                        "value": "e374b94a5e1d68a5825e47ae3ebaa7464600741d1c4bbcf548ca8652035c37c6",
                        "timestamp": "2021-07-27 18:04:44"
                    },
                    {
                        "value": "875ab4a8c0e8976f706fe0417ccfdf4d78bab6c845f4b3bb5a9e79414cf34c6d",
                        "timestamp": "2021-07-27 18:04:45"
                    },
                    {
                        "value": "235413e22a54a09ad31fae8f8a22a0cf4a443115cbb5dd9fe85a9a563ac1ebc3",
                        "timestamp": "2021-07-27 18:04:41"
                    },
                    {
                        "value": "58aa35af01b43dc0e414a64d596cb2416384e0b0085d0a6137676fc56dbc3c07",
                        "timestamp": "2021-07-23 14:00:26"
                    },
                    {
                        "value": "83a17c0e7b4f4c0f2009f8af74d3dfeceffd417b91716ffb904c940afc8ecfe4",
                        "timestamp": "2021-07-23 14:00:26"
                    },
                    {
                        "value": "de081f4b7951a41630e12380932e095de170eaef0cdcb9f18e284e937d3c5c94",
                        "timestamp": "2021-07-23 14:00:25"
                    },
                    {
                        "value": "37b0d05530bb2018cf665aa2305e0700b7342ea5e5dcf69ccf1dc981ef3fe229",
                        "timestamp": "2021-07-23 14:00:25"
                    },
                    {
                        "value": "7e0c5eb5f18d5313c39c806aeb2ee42b3ca22661c6c1aa2eb0fbead3948f6e26",
                        "timestamp": "2021-07-22 13:30:26"
                    },
                    {
                        "value": "a7f232fe18c7925e8fa49ff3b47298b59825661b033cf06b3ee7f429ef14522d",
                        "timestamp": "2021-07-22 13:30:25"
                    },
                    {
                        "value": "4a86a9218a1fa1f547c1062ebc164dee8fceacd11fd6c6c4330e5ef0eb425db9",
                        "timestamp": "2021-07-22 13:30:25"
                    },
                    {
                        "value": "06aa35f36b764b82b9c7d4a4786660fafac43f9053f585fceb508a479feda592",
                        "timestamp": "2021-07-22 13:30:24"
                    },
                    {
                        "value": "b97de627f21e9b429b51add91c260bf329e8df489e2f7b56d7f9b3e0dbbc315d",
                        "timestamp": "2021-03-16 07:00:30"
                    },
                    {
                        "value": "4ff76e59bdb163f4a63546a7533defa34faeaa22eab908dcc90b04548f41c8c6",
                        "timestamp": "2021-03-16 07:00:30"
                    },
                    {
                        "value": "de4f9d40ab7b0c522f0a9a74e9d0ec2f3d9550f44e4a0cde653b94132f8d580e",
                        "timestamp": "2021-03-16 07:00:30"
                    },
                    {
                        "value": "e741e062ddcdd05640d7653c3a3df171c8e95877ac787940ff55cc6fac4fb300",
                        "timestamp": "2021-03-16 07:00:30"
                    },
                    {
                        "value": "3ec809146f0ae254cd138c24f7cb5718cdc51cbd99a67c360b86a5020a12704f",
                        "timestamp": "2021-03-15 16:00:31"
                    },
                    {
                        "value": "0842e1d9070234550544900fb5bfede1ee4597f1087d38f285abd75aa14c85fe",
                        "timestamp": "2021-03-15 16:00:31"
                    },
                    {
                        "value": "af4d18f604793162eac9bc260e67eb46ebdcde2f93681a638c9f91c0d8011410",
                        "timestamp": "2021-03-15 16:00:31"
                    },
                    {
                        "value": "e21a7067931c2b2b5b58ec799a6932c8a3964c78e513f02abe5c3bcff4552e4f",
                        "timestamp": "2021-03-15 16:00:31"
                    },
                    {
                        "value": "b7bb35d04c43970a32711eb06080774b5b1d56260fe28b8f7c65206372943e7c",
                        "timestamp": "2021-03-15 09:30:24"
                    },
                    {
                        "value": "7756e8e90ef11ee396e11585517298b7930be6596b8de5dc92ac87a0f75222cb",
                        "timestamp": "2021-03-15 09:30:24"
                    },
                    {
                        "value": "eb90fe5132eaaf077721cd485f1a56692ef6f7f0e28b305a4ca0efe3d56fe4a4",
                        "timestamp": "2021-03-15 09:30:24"
                    },
                    {
                        "value": "cbd36ecbe74b167ba71470da24c3f16961e22f6f41c436c9d1d53fa81335e968",
                        "timestamp": "2021-03-15 09:30:24"
                    },
                    {
                        "value": "9f72b985a95fa68331dfd8b2ba1779493514dde66e345212254713e1efa4e7e9",
                        "timestamp": "2021-03-13 08:30:31"
                    },
                    {
                        "value": "e2c08d53b0cbd76b4868d109b57d96e86ac77d5e03b5dd92bbd6b479315563d0",
                        "timestamp": "2021-03-13 08:30:31"
                    },
                    {
                        "value": "9d11436281afddffffef2b40d3ee19bedf126bd446c0f207f1d306fc4bad5921",
                        "timestamp": "2021-03-13 08:30:31"
                    },
                    {
                        "value": "e06eb4b947f08b1c3f24cb0369411c78631ae0440c7071192a5055bc99318c8d",
                        "timestamp": "2021-03-13 08:30:31"
                    },
                    {
                        "value": "483d6ae983874e7a225f99747d490194256ace1b9ca6e0457dd871c70b4f83d1",
                        "timestamp": "2021-03-12 17:30:28"
                    },
                    {
                        "value": "e9e6188efc11359d75e75bf67c28b7579ddcb507ad10afea8c721d4e8bd5e470",
                        "timestamp": "2021-03-12 17:30:28"
                    },
                    {
                        "value": "79b51610c70ccb480311db495f9432470093356aa5e4bf7b491aaf9f4c3937ed",
                        "timestamp": "2021-03-12 17:30:28"
                    },
                    {
                        "value": "dff67ae0837d545f7f7f553f09ef3c1aa7dbe3674188cecda3e18e214a79b483",
                        "timestamp": "2021-03-12 17:30:28"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "8e5c6803b98d0d81becec2f2d8c7c57d",
                        "timestamp": "2022-10-13 05:37:36"
                    },
                    {
                        "value": "0a6210fbda7d6eca165ba77fe1b99bb4",
                        "timestamp": "2022-10-10 14:54:20"
                    },
                    {
                        "value": "3c50b035bd77aafe2475b2fe1007f51b",
                        "timestamp": "2022-10-10 14:53:28"
                    },
                    {
                        "value": "27a3dd7e545a5830cc1b372076bc3db9",
                        "timestamp": "2022-10-06 15:38:57"
                    },
                    {
                        "value": "36e57801689df3ff3a3eb74f8753c504",
                        "timestamp": "2022-10-06 15:38:33"
                    },
                    {
                        "value": "01b936cf783fe182a628c65e70dfebd9",
                        "timestamp": "2022-10-04 13:40:13"
                    },
                    {
                        "value": "d5364b02f515d184a7fd755eb055beaf",
                        "timestamp": "2022-10-03 14:23:13"
                    },
                    {
                        "value": "d91cfe1a42899f7ba97b820746184cb1",
                        "timestamp": "2022-09-22 18:16:43"
                    },
                    {
                        "value": "6f2ad08514a304c31b1a7ad3cd6b8892",
                        "timestamp": "2022-09-22 18:16:43"
                    },
                    {
                        "value": "22759e8dcb3a89d99e5b67d5c6cefcf5",
                        "timestamp": "2022-08-30 14:54:44"
                    },
                    {
                        "value": "467146189b752d313662f54226fccda2",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "d040c23617278eebbcc57a579deac005",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "614ff505dc58f051050d703e886a9f9b",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "6d3c6479498d829d55a98b0ad43a89d1",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "726f4f69d769d40cbb20c8781798ff06",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "b9dfbb9fb9d03e8c814b218feaba6885",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "cab217e06f7f89a2ba7004b703861814",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "cea2123ecdbc5b5cb2759109f214caca",
                        "timestamp": "2022-08-27 22:40:04"
                    },
                    {
                        "value": "1e77d655c90902f35e687c6e7e2fa68a",
                        "timestamp": "2022-07-29 15:46:35"
                    },
                    {
                        "value": "dc62bde30cf8bc9a996bd9074e6527d4",
                        "timestamp": "2022-07-29 09:57:02"
                    },
                    {
                        "value": "0c50198b43292a176b7120ced3d0b16e",
                        "timestamp": "2022-07-29 09:57:02"
                    },
                    {
                        "value": "f2e5565a7060c888099241daf96e1b62",
                        "timestamp": "2022-07-14 08:58:39"
                    },
                    {
                        "value": "5817ffd3d41462219e9ded5aaa7de82d",
                        "timestamp": "2022-07-14 08:58:39"
                    },
                    {
                        "value": "0612e8a9736120eb9e28cd50233d9448",
                        "timestamp": "2022-07-05 16:20:47"
                    },
                    {
                        "value": "cf95530bd376f170d370f4a0246cfebe",
                        "timestamp": "2022-07-04 13:27:31"
                    },
                    {
                        "value": "b01e430dc9eb12683afd208d80ef1056",
                        "timestamp": "2022-07-04 13:27:31"
                    },
                    {
                        "value": "4327c6d969852b4038c086bd88ecfbce",
                        "timestamp": "2022-06-29 10:47:48"
                    },
                    {
                        "value": "6e2fe9937e98dcb0a15bb7dd9d9a48aa",
                        "timestamp": "2022-01-19 02:04:43"
                    },
                    {
                        "value": "c467bc0aecc324a9f19d73d43397acdf",
                        "timestamp": "2022-01-19 02:04:43"
                    },
                    {
                        "value": "0045ad9d58f59b2b856a6102079a3c52",
                        "timestamp": "2022-01-19 02:04:43"
                    },
                    {
                        "value": "07ff6173347653f4a7c1fcb2551ef2d9",
                        "timestamp": "2022-01-19 02:04:43"
                    },
                    {
                        "value": "f179ba1e377bf8762fff1c082897612e",
                        "timestamp": "2022-01-19 02:04:43"
                    },
                    {
                        "value": "fb527ebc3cd84eb70acb6d6d1ddcc819",
                        "timestamp": "2022-01-19 02:04:43"
                    },
                    {
                        "value": "D5470C0DD2D848FEA0149855B4EE03D1",
                        "timestamp": "2021-11-16 11:04:49"
                    },
                    {
                        "value": "161ab0be12e9251be5a9190c7e92e5f2",
                        "timestamp": "2021-09-20 17:49:43"
                    },
                    {
                        "value": "FE2E03F43BA183428946E43F8D8471EC",
                        "timestamp": "2021-08-23 18:46:12"
                    },
                    {
                        "value": "21e6f4fefdf70039a9160ca04a388389",
                        "timestamp": "2021-07-30 16:31:58"
                    },
                    {
                        "value": "c3477d94caf7b8dc32f26afa5fc908fc",
                        "timestamp": "2021-03-13 05:35:12"
                    },
                    {
                        "value": "d7aea0c7068c378d517f1b398f1d6094",
                        "timestamp": "2021-03-12 18:12:12"
                    },
                    {
                        "value": "365abe2844d6e288acbc9ae29df07efe",
                        "timestamp": "2021-03-10 16:24:49"
                    },
                    {
                        "value": "c3260321a6cc95d3c81b7e3e36d432aa",
                        "timestamp": "2021-03-10 01:14:45"
                    },
                    {
                        "value": "5ba61b600d5e1ce329d067ff2358304d",
                        "timestamp": "2021-03-10 01:10:47"
                    },
                    {
                        "value": "eed4d178cbab3caba57826254934d69c",
                        "timestamp": "2021-03-10 00:59:57"
                    },
                    {
                        "value": "768aae6605e1952b11584ced4dc5a4e9",
                        "timestamp": "2021-03-09 16:57:41"
                    }
                ],
                "domain": [
                    {
                        "value": "lokaxz.xyz",
                        "timestamp": "2021-12-08 21:46:06"
                    },
                    {
                        "value": "lokich.xyz",
                        "timestamp": "2021-12-08 21:46:05"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-11 08:51:44",
    "file_name": "lokibot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/emotet-darkgate-lokibot-crimeware-report/110286/",
            "date": "2023-08-03",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "What\u2019s happening in the world of crimeware: Emotet, DarkGate and LokiBot",
            "categories": [
                "LokiBot",
                "DarkGate",
                "Emotet"
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/mal-document/lokibotpdf/",
            "date": "2022-07-25",
            "organization": "muha2xmad",
            "author": "Muhammad Hasan Ali",
            "title": "PDF Analysis of Lokibot malware",
            "categories": [
                "LokiBot"
            ]
        },
        {
            "data_url": "https://github.com/vc0RExor/Malware-Threat-Reports/blob/main/Lokibot/Machete-Weapons-Lokibot/Machete%20weapons-Lokibot_EN.pdf",
            "date": "2022-06-29",
            "organization": "Github (vc0RExor)",
            "author": "Aaron Jornet Sales",
            "title": "Machete Weapons Lokibot - A Malware Report",
            "categories": [
                "LokiBot"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/144cOnM6fxfuBeP0V2JQshp8C0Zlk_0kH/view",
            "date": "2021-06-10",
            "organization": "ZAYOTEM",
            "author": "Taha H\u0130CRET",
            "title": "LokiBot Technical Analysis Report",
            "categories": [
                "LokiBot"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/07/14/raticate-rats-as-service-with-commercial-crypter/?cmp=30728",
            "date": "2020-07-14",
            "organization": "SophosLabs Uncut",
            "author": "Markel Picado",
            "title": "RATicate upgrades \u201cRATs as a Service\u201d attacks with commercial \u201ccrypter\u201d",
            "categories": [
                "LokiBot",
                "BetaBot",
                "CloudEyE",
                "NetWire RC"
            ]
        },
        {
            "data_url": "https://yoroi.company/research/aggah-how-to-run-a-botnet-without-renting-a-server-for-more-than-a-year/",
            "date": "2020-01-27",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Aggah: How to run a botnet without renting a Server (for more than a year)",
            "categories": [
                "LokiBot",
                "Azorult"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/lokibot_the_first_hybrid_android_malware.html",
            "date": "2017-10",
            "organization": "Threat Fabric",
            "author": "Wesley Gahr",
            "title": "LokiBot - The first hybrid Android malware",
            "categories": [
                "LokiBot"
            ]
        },
        {
            "data_url": "http://blog.checkpoint.com/2017/03/10/preinstalled-malware-targeting-mobile-users/",
            "date": "2017-03-10",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "Preinstalled Malware Targeting Mobile Users",
            "categories": [
                "Loki"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "lokibot",
            "procedure_code": "s0447",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0447",
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
                    "procedure_description": "lokibot is delivered via a malicious xls attachment contained within a spearhpishing email.[137]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "lokibot has used powershell commands embedded inside batch scripts.[139]"
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
                    "procedure_description": "lokibot has used cmd /c commands embedded within batch scripts.[196]"
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
                    "procedure_description": "lokibot has used vbs scripts and xls macros for execution.[82]"
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
                    "procedure_description": "lokibot has used loadlibrary(), getprocaddress() and createremotethread() api functions to execute its shellcode.[112]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "lokibot's second stage dll has set a timer using \"timesetevent\" to schedule its next execution.[5]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "lokibot embedded the commands schtasks /run /tn \\microsoft\\windows\\diskcleanup\\silentcleanup /i inside a batch script.[95]"
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
                    "procedure_description": "lokibot has tricked recipients into enabling malicious macros by getting victims to click \"enable content\" in email attachments.[132][133]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "lokibot's second stage dll has set a timer using \"timesetevent\" to schedule its next execution.[5]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "lokibot embedded the commands schtasks /run /tn \\microsoft\\windows\\diskcleanup\\silentcleanup /i inside a batch script.[95]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "lokibot has utilized multiple techniques to bypass uac.[42]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "lokibot has used process hollowing to inject itself into legitimate windows process.[24][25]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "lokibot's second stage dll has set a timer using \"timesetevent\" to schedule its next execution.[5]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "lokibot embedded the commands schtasks /run /tn \\microsoft\\windows\\diskcleanup\\silentcleanup /i inside a batch script.[95]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "lokibot has utilized multiple techniques to bypass uac.[42]"
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
                    "procedure_description": "lokibot has decoded and decrypted its stages multiple times using hard-coded keys to deliver the final payload, and has decoded its server response hex string using xor.[136]"
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
                    "procedure_description": "lokibot has the ability to copy itself to a hidden file and directory.[27]"
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
                    "procedure_description": "lokibot will delete its dropped files after bypassing uac.[133]"
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
                    "procedure_description": "lokibot has modified the registry as part of its uac bypass process.[85]"
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
                    "procedure_description": "lokibot has obfuscated strings with base64 encoding.[199]"
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
                    "procedure_description": "lokibot has used several packing methods for obfuscation.[54]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/012",
                    "technique_name": "process injection : process hollowing",
                    "technique_description": "adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses. process hollowing is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "lokibot has used process hollowing to inject itself into legitimate windows process.[24][25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1620",
                    "technique_link": "https://attack.mitre.org/techniques/T1620",
                    "technique_name": "reflective code loading",
                    "technique_description": "adversaries may reflectively load code into a process in order to conceal the execution of malicious payloads. reflective loading involves allocating then executing payloads directly within the memory of the process, vice creating a thread or process backed by a file path on disk. reflectively loaded payloads may be compiled binaries, anonymous files (only present in ram), or just snubs of fileless executable code (ex: position-independent shellcode).",
                    "procedure_description": "lokibot has reflectively loaded the decoded dll into memory.[17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "lokibot has performed a time-based anti-debug check before downloading its third stage.[29]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "lokibot has stolen credentials from multiple applications and data sources including windows os credentials, email clients, ftp, and sftp clients.[14]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "lokibot has demonstrated the ability to steal credentials from multiple applications and data sources including safari and the chromium and mozilla firefox-based web browsers.[47]"
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
                    "procedure_description": "lokibot has the ability to capture input on the compromised host via keylogging.[100]"
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
                    "procedure_description": "lokibot can search for specific files on an infected host.[180]"
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
                    "procedure_description": "lokibot has the ability to discover the computer name and windows product name/version.[210]"
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
                    "procedure_description": "lokibot has the ability to discover the domain name of the infected host.[131]"
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
                    "procedure_description": "lokibot has the ability to discover the username on the infected host.[103]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "lokibot has performed a time-based anti-debug check before downloading its third stage.[29]"
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
                    "procedure_description": "lokibot has the ability to capture input on the compromised host via keylogging.[100]"
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
                    "procedure_description": "lokibot has used http for c2 communications.[189][190]"
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
                    "procedure_description": "lokibot downloaded several staged items onto the victim's machine.[266]"
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
                    "procedure_description": "lokibot has the ability to initiate contact with command and control (c2) to exfiltrate stolen data.[78]"
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