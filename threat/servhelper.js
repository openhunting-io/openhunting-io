var threatdata = {
    "name": "ServHelper",
    "alias": "ServHelper",
    "category": "Malware",
    "type": "Backdoor, Credential stealer, Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "ServHelper",
        "names": [
            {
                "name": "ServHelper"
            }
        ],
        "description": "ServHelper is written in Delphi and according to ProofPoint best classified as a backdoor.\n\nProofPoint noticed two distinct variant - 'tunnel' and 'downloader' (citation):\n'The 'tunnel' variant has more features and focuses on setting up reverse SSH tunnels to allow the threat actor to access the infected host via Remote Desktop Protocol (RDP). Once ServHelper establishes remote desktop access, the malware contains functionality for the threat actor to 'hijack' legitimate user accounts or their web browser profiles and use them as they see fit. The 'downloader' variant is stripped of the tunneling and hijacking functionality and is used as a basic downloader.'",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505",
            "https://e.cyberint.com/hubfs/Report%20Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors%20Tools/CyberInt_Legit%20Remote%20Access%20Tools%20Turn%20Into%20Threat%20Actors'%20Tools_Report.pdf",
            "https://www.deepinstinct.com/2019/04/02/new-servhelper-variant-employs-excel-4-0-macro-to-drop-signed-payload/",
            "https://ti.360.net/blog/articles/excel-4.0-macro-utilized-by-ta505-to-target-financial-institutions-recently-en/",
            "https://www.cybereason.com/blog/threat-actor-ta505-targets-financial-enterprises-using-lolbins-and-a-new-backdoor-malware"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0382/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.servhelper"
        ],
        "uuid": "8e84ad65-ea4e-40a0-9598-e3a8402c012c",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ServHelper",
            "malware_alias": null,
            "malware": "win.servhelper",
            "last_update": "2021-12-18 08:10:07",
            "tags": [
                "servhelper",
                "ServHelpe",
                "ServHelper"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "sbbsats5d5asdv3.xyz",
                        "timestamp": "2021-12-12 12:12:44"
                    },
                    {
                        "value": "z7gzv6sw6ui9.xyz",
                        "timestamp": "2021-12-12 12:12:44"
                    },
                    {
                        "value": "nacuasujciiwi3.xyz",
                        "timestamp": "2021-12-06 06:34:35"
                    },
                    {
                        "value": "hsuahiysautcr.xyz",
                        "timestamp": "2021-11-26 10:11:05"
                    },
                    {
                        "value": "kasisausnasaysar.xyz",
                        "timestamp": "2021-12-18 08:10:07"
                    },
                    {
                        "value": "asdyyauscuauusc.xyz",
                        "timestamp": "2021-12-06 06:34:35"
                    },
                    {
                        "value": "osdnvnauurt.xyz",
                        "timestamp": "2021-10-31 07:03:28"
                    },
                    {
                        "value": "aosdnvnauurt.xyz",
                        "timestamp": "2021-10-27 10:02:43"
                    },
                    {
                        "value": "zdov9v88e83jfa.xyz",
                        "timestamp": "2021-10-31 07:03:28"
                    },
                    {
                        "value": "saudjyyvv663.xyz",
                        "timestamp": "2021-09-29 15:39:40"
                    },
                    {
                        "value": "iasfugibz9x.xyz",
                        "timestamp": "2021-09-24 06:47:36"
                    },
                    {
                        "value": "zuvujvhuaif.xyz",
                        "timestamp": "2021-09-22 06:20:54"
                    },
                    {
                        "value": "whereihjeu3.xyz",
                        "timestamp": "2021-08-16 06:50:30"
                    },
                    {
                        "value": "hitnaiguat.xyz",
                        "timestamp": "2021-08-14 07:15:33"
                    },
                    {
                        "value": "sadiviai9d9asd.xyz",
                        "timestamp": "2021-08-11 07:38:00"
                    },
                    {
                        "value": "potuybze.xyz",
                        "timestamp": "2021-07-19 06:28:53"
                    },
                    {
                        "value": "asdidjvjvaias.xyz",
                        "timestamp": "2021-07-16 07:43:25"
                    },
                    {
                        "value": "afggaiir3a.xyz",
                        "timestamp": "2021-07-13 06:26:22"
                    },
                    {
                        "value": "afspfigjeb.cn",
                        "timestamp": "2021-07-09 18:32:45"
                    },
                    {
                        "value": "soajfvhv235ua.xyz",
                        "timestamp": "2021-07-16 07:43:25"
                    },
                    {
                        "value": "afditnzurh.xyz",
                        "timestamp": "2021-07-05 06:25:46"
                    },
                    {
                        "value": "kbpsorjbus6.pw",
                        "timestamp": "2021-07-05 06:25:12"
                    },
                    {
                        "value": "pgf5ga4g4b.cn",
                        "timestamp": "2021-07-02 05:29:46"
                    },
                    {
                        "value": "enroter1984.cn",
                        "timestamp": "2021-06-28 05:33:32"
                    },
                    {
                        "value": "neboley.cn",
                        "timestamp": "2021-06-28 05:33:32"
                    },
                    {
                        "value": "asdjausg.cn",
                        "timestamp": "2021-05-23 06:33:42"
                    },
                    {
                        "value": "afsifufufgg42.cn",
                        "timestamp": "2021-04-06 15:26:45"
                    },
                    {
                        "value": "afsibibia3.xyz",
                        "timestamp": "2021-04-03 06:20:33"
                    },
                    {
                        "value": "jfiisnvvz.xyz",
                        "timestamp": "2021-03-31 07:25:46"
                    },
                    {
                        "value": "igibhbyehvyga.xyz",
                        "timestamp": "2021-03-29 07:57:21"
                    },
                    {
                        "value": "jfuag3.cn",
                        "timestamp": "2021-03-27 15:39:52"
                    },
                    {
                        "value": "novacation.cn",
                        "timestamp": "2021-03-22 20:22:31"
                    },
                    {
                        "value": "wheredoyougo.cn",
                        "timestamp": "2021-03-22 20:22:31"
                    },
                    {
                        "value": "syvgevyhz.cn",
                        "timestamp": "2021-03-16 19:10:25"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "65f47cd450bd96cba40e838cb0355638a1d43b3ac51d3d6e97a469d5425a7874",
                        "timestamp": "2021-12-05 02:45:38"
                    },
                    {
                        "value": "5c48fce985e7b875be1a88334fa98f4db5611117bd39959e2e5980f0b3e8094d",
                        "timestamp": "2021-12-05 02:45:37"
                    },
                    {
                        "value": "0ee089365adfe14f05cf599a6f74aecba426ad0270eb3ddff135c99b1c5c0a48",
                        "timestamp": "2021-12-05 02:45:36"
                    },
                    {
                        "value": "7a521b89bee36ec9231a5cdff5b79132335843fb10be72c1b1426ef4c3935e4a",
                        "timestamp": "2021-12-05 02:45:35"
                    },
                    {
                        "value": "8082bfe8a9f63854d6317cf6ddc0c18c54140ee5d179a96bfe9900c90d994518",
                        "timestamp": "2021-10-26 17:15:27"
                    },
                    {
                        "value": "84c41dc018689fcb2fc4240f1e0267a5ee82232e3bcd541f5f5bed4139cfcd55",
                        "timestamp": "2021-10-26 17:15:26"
                    },
                    {
                        "value": "d74b6c6a24a192266f78de7209ac83d43add79818bf28d367b51813465dac6db",
                        "timestamp": "2021-10-26 17:15:25"
                    },
                    {
                        "value": "dcbce5bc929785a63efb6d9180a479c33fcf882e39b4d0f0b581713b193f38cf",
                        "timestamp": "2021-10-26 17:15:24"
                    },
                    {
                        "value": "53882829be84aba37e9a3e3367301b7800ba1aac3007af62d6620fcc170f4f7b",
                        "timestamp": "2021-09-18 02:00:59"
                    },
                    {
                        "value": "3342d9e46d1b50083fa7da9e8f72d578b10e0cced3dca29b2e5bf9dc219349da",
                        "timestamp": "2021-09-18 02:00:59"
                    },
                    {
                        "value": "be5543ea72f61dd230233cc9a875bd2b0e1dd68d9addc8d12bbb09dd97730ff4",
                        "timestamp": "2021-09-18 02:00:58"
                    },
                    {
                        "value": "10675ecac736bf3fa5175330ef22d3f1e252a698072c58cba3de0a208e751fb2",
                        "timestamp": "2021-09-18 02:00:57"
                    },
                    {
                        "value": "177d6aab26c15ecf87f29f92ad0eaff355d195de1c0ef17d9cb9b7483c288934",
                        "timestamp": "2021-07-21 19:00:49"
                    },
                    {
                        "value": "6c4aab4c3bd1ba8f77a781d70ecbc1b4c7dfd9d3c7ad60158fb8d35d1d4246e2",
                        "timestamp": "2021-07-21 19:00:48"
                    },
                    {
                        "value": "f519d4517271e01ea6807890fcbc1573e64844b6a8105aa7c3462ea65bb3c7fe",
                        "timestamp": "2021-07-21 19:00:48"
                    },
                    {
                        "value": "a45ce871e292ee5d5effccb273909abb62773ad8cb308f90726e8820ecca76d6",
                        "timestamp": "2021-07-21 19:00:47"
                    },
                    {
                        "value": "e5f0bc80d04cac1456c2b4c572d352efd5b6717a262141508fe6919c8e3bb5a3",
                        "timestamp": "2021-07-21 19:00:40"
                    },
                    {
                        "value": "42d3aa6d8f6d7c2f4ed5c4a0d0b3b160bbcf1964d82c0f095026f7c75e110c14",
                        "timestamp": "2021-07-21 19:00:39"
                    },
                    {
                        "value": "555f654fb51e632ba2cf49b865b6de5f5772ffba0229d73021a1c6a6f65dab08",
                        "timestamp": "2021-07-21 19:00:38"
                    },
                    {
                        "value": "f25560518e8bebbc0abdde4c0241833e432ad4c56f934bb18067c1abf7305959",
                        "timestamp": "2021-07-21 19:00:37"
                    },
                    {
                        "value": "10d971c860d4f8ad93b86f47fbc0cd285897769dd60bb68dea4377bb6e7d6f1f",
                        "timestamp": "2021-07-09 19:00:43"
                    },
                    {
                        "value": "2c563c0ca6aadef9b039b1e542329bec04c9915f433e6b27026cf08db52aceb6",
                        "timestamp": "2021-07-09 19:00:43"
                    },
                    {
                        "value": "08a75beea96e15a6bc2e838cf0649ef0e3be100b819d4513b816778f18903c12",
                        "timestamp": "2021-07-09 19:00:43"
                    },
                    {
                        "value": "1409acb6dd320620a038e8571fa1bfdbbdc659f240a5a17d1db2c8af530ae548",
                        "timestamp": "2021-07-09 19:00:42"
                    }
                ],
                "ip:port": [
                    {
                        "value": "185.163.45.248:443",
                        "timestamp": "2021-09-29 15:40:02"
                    },
                    {
                        "value": "194.180.174.56:443",
                        "timestamp": "2021-08-14 07:16:12"
                    },
                    {
                        "value": "194.180.174.20:443",
                        "timestamp": "2021-08-11 07:37:38"
                    },
                    {
                        "value": "185.163.47.254:443",
                        "timestamp": "2021-07-19 06:28:35"
                    },
                    {
                        "value": "185.163.45.90:443",
                        "timestamp": "2021-07-16 07:43:52"
                    },
                    {
                        "value": "185.163.47.171:443",
                        "timestamp": "2021-07-13 06:26:56"
                    },
                    {
                        "value": "185.163.45.87:443",
                        "timestamp": "2021-06-28 05:32:50"
                    },
                    {
                        "value": "103.113.159.7:443",
                        "timestamp": "2021-05-23 06:33:58"
                    },
                    {
                        "value": "140.82.57.172:443",
                        "timestamp": "2021-04-03 06:20:06"
                    },
                    {
                        "value": "45.77.122.108:443",
                        "timestamp": "2021-03-31 07:26:14"
                    },
                    {
                        "value": "5.181.156.79:443",
                        "timestamp": "2021-03-27 15:40:23"
                    },
                    {
                        "value": "185.225.19.253:443",
                        "timestamp": "2021-03-16 19:30:59"
                    },
                    {
                        "value": "5.181.156.250:443",
                        "timestamp": "2021-03-16 19:10:54"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-12-18 08:10:07",
    "mitre": [],
    "file_name": "servhelper",
    "analysis": null
};