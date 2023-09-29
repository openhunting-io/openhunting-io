var threatdata = {
    "name": "AZORult",
    "alias": "AZORult, PuffStealer, Rultazo",
    "category": "Malware",
    "type": "Info stealer, Credential stealer, Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "AZORult",
        "names": [
            {
                "name": "AZORult"
            },
            {
                "name": "PuffStealer"
            },
            {
                "name": "Rultazo"
            }
        ],
        "description": "(Kaspersky) The AZORult Trojan is one of the most commonly bought and sold stealers in Russian forums. Despite the relatively high price tag ($100), buyers like AZORult for its broad functionality (for example, the use of .bit domains as C&C servers to ensure owner anonymity and to make it difficult to block the C&C server), as well as its high performance. Many comment leavers recommend it.\n\nAZORult is a Trojan stealer that collects various data on infected computers and sends it to the C&C server, including browser history, login credentials, cookies, files from folders as specified by the C&C server (for example, all TXT files from the Desktop folder), cryptowallet files, etc.; the malware can also be used as a loader to download other malware. Kaspersky Lab products detect the stealer as Trojan-PSW.Win32.Azorult. Our statistics show that since the start of 2019, users in Russia and India are the most targeted.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Credential stealer",
            "Downloader"
        ],
        "information": [
            "https://securelist.com/azorult-analysis-history/89922/",
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-analyzing-azorult-infostealer-malware.html",
            "https://blog.minerva-labs.com/puffstealer-evasion-in-a-cloak-of-multiple-layers",
            "https://blog.minerva-labs.com/azorult-now-as-a-signed-google-update",
            "https://www.proofpoint.com/us/threat-insight/post/new-version-azorult-stealer-improves-loading-features-spreads-alongside",
            "https://www.blueliv.com/blog-news/research/azorult-crydbrox-stops-sells-malware-credential-stealer/",
            "https://research.checkpoint.com/the-emergence-of-the-new-azorult-3-3/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0344/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.azorult"
        ],
        "uuid": "ce88f834-afbf-4d8b-8ca6-43b7fde7bdf2",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Azorult",
            "malware_alias": "PuffStealer,Rultazo",
            "malware": "win.azorult",
            "last_update": "2023-09-26 13:36:11",
            "tags": [
                "Azorult",
                "ViriBack",
                "known threat",
                "AZORult C2",
                "exe",
                "malspam",
                "c2",
                "active",
                "opendir",
                "azorult",
                "AZORult",
                "Trojan",
                "panel"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://185.28.39.18:7777/asiamandarin.buzz/deval/index.php",
                        "timestamp": "2023-09-18 03:25:13"
                    },
                    {
                        "value": "http://ruiw.shop/RL341/index.php",
                        "timestamp": "2023-09-18 02:15:15"
                    },
                    {
                        "value": "http://lrvsd.shop/MOP341/index.php",
                        "timestamp": "2023-09-15 14:28:52"
                    },
                    {
                        "value": "http://46.183.220.70/bag/Panel/index.php",
                        "timestamp": "2023-09-14 14:05:21"
                    },
                    {
                        "value": "http://185.29.11.60/roth3/Panel/index.php",
                        "timestamp": "2023-09-14 11:15:19"
                    },
                    {
                        "value": "http://185.28.39.17:7777/asiamandarin.buzz/deval/index.php",
                        "timestamp": "2023-09-12 07:50:04"
                    },
                    {
                        "value": "http://m2ch.shop/PL341/index.php",
                        "timestamp": "2023-09-11 09:10:30"
                    },
                    {
                        "value": "http://hoswell.shop/HS341/index.php",
                        "timestamp": "2023-09-11 08:50:27"
                    },
                    {
                        "value": "http://br3dq.shop/PL341/index.php",
                        "timestamp": "2023-09-07 23:55:37"
                    },
                    {
                        "value": "http://lqr1.shop/LQ341/index.php",
                        "timestamp": "2023-09-05 08:30:26"
                    },
                    {
                        "value": "http://mixz.shop/MI341/index.php",
                        "timestamp": "2023-09-04 00:50:17"
                    },
                    {
                        "value": "http://plateaufoods.com.au/new/image/index.php",
                        "timestamp": "2023-08-28 00:55:38"
                    },
                    {
                        "value": "http://m1chs.shop/MSB01/index.php",
                        "timestamp": "2023-08-22 07:10:17"
                    },
                    {
                        "value": "http://46.183.223.7/roth/Panel/index.php",
                        "timestamp": "2023-08-14 14:25:12"
                    },
                    {
                        "value": "http://csbo1.shop/MSB01/index.php",
                        "timestamp": "2023-08-14 01:20:15"
                    },
                    {
                        "value": "http://198.98.54.161/panel/index.php",
                        "timestamp": "2023-08-08 08:40:08"
                    },
                    {
                        "value": "http://dbx09.shop/XOP34/index.php",
                        "timestamp": "2023-08-01 05:55:24"
                    },
                    {
                        "value": "http://doble9.shop/DL341/index.php",
                        "timestamp": "2023-07-28 07:10:25"
                    },
                    {
                        "value": "http://mkya2.shop/Mk1ay/index.php",
                        "timestamp": "2023-07-25 18:30:34"
                    },
                    {
                        "value": "http://ble333n.shop/RTU341/index.php",
                        "timestamp": "2023-07-24 09:40:25"
                    },
                    {
                        "value": "http://hmbl1.shop/Hm341/index.php",
                        "timestamp": "2023-07-24 08:35:26"
                    },
                    {
                        "value": "http://141.98.6.72/index.php",
                        "timestamp": "2023-07-24 05:40:15"
                    },
                    {
                        "value": "http://mk1ay.shop/Mk1ay/index.php",
                        "timestamp": "2023-07-21 05:10:19"
                    },
                    {
                        "value": "http://mchas.shop/PL341/index.php",
                        "timestamp": "2023-07-21 00:05:19"
                    },
                    {
                        "value": "http://mlch1.shop/Mlch1/index.php",
                        "timestamp": "2023-07-20 10:07:18"
                    },
                    {
                        "value": "http://dbxt2.shop/CM341/index.php",
                        "timestamp": "2023-07-19 13:35:26"
                    },
                    {
                        "value": "http://kngppdp.shop/HT341/index.php",
                        "timestamp": "2023-07-19 06:35:07"
                    },
                    {
                        "value": "http://cmaz4.shop/CMAZ4/index.php",
                        "timestamp": "2023-07-18 09:40:23"
                    },
                    {
                        "value": "http://mcaz3.shop/MCAZ3/index.php",
                        "timestamp": "2023-07-18 06:25:20"
                    },
                    {
                        "value": "http://185.221.67.7/index.php",
                        "timestamp": "2023-07-17 15:40:15"
                    },
                    {
                        "value": "http://b1ll2.shop/B1ll2/index.php",
                        "timestamp": "2023-07-17 11:05:10"
                    },
                    {
                        "value": "http://bll1l.shop/Bll1l/index.php",
                        "timestamp": "2023-07-17 00:25:17"
                    },
                    {
                        "value": "http://blss8.shop/URT341/index.php",
                        "timestamp": "2023-07-13 23:30:37"
                    },
                    {
                        "value": "http://csbo1.shop/CB341/index.php",
                        "timestamp": "2023-07-13 06:25:27"
                    },
                    {
                        "value": "http://mcoaz.shop/DXO341/index.php",
                        "timestamp": "2023-07-13 06:00:25"
                    },
                    {
                        "value": "http://185.29.8.42/bagwell/Panel/index.php",
                        "timestamp": "2023-07-08 10:00:07"
                    },
                    {
                        "value": "http://46.183.221.76/rothschild/Panel/index.php",
                        "timestamp": "2023-07-08 09:50:06"
                    },
                    {
                        "value": "http://109.206.242.32/index.php",
                        "timestamp": "2023-07-03 09:14:25"
                    },
                    {
                        "value": "https://app.any.run/tasks/a637f396-0add-42b5-804e-05c22b147791/",
                        "timestamp": "2023-07-02 16:00:14"
                    },
                    {
                        "value": "http://cyc199.000webhostapp.com/FTP/index.php",
                        "timestamp": "2023-07-02 08:58:49"
                    },
                    {
                        "value": "http://kngppdp.shop/Dbl3/index.php",
                        "timestamp": "2023-06-22 06:15:11"
                    },
                    {
                        "value": "http://sweatiest-clerk.000webhostapp.com/index.php",
                        "timestamp": "2023-06-21 23:15:15"
                    },
                    {
                        "value": "http://bll3fdg.shop/Bll3/index.php",
                        "timestamp": "2023-06-19 16:13:09"
                    },
                    {
                        "value": "http://dblxs.shop/Bll1/index.php",
                        "timestamp": "2023-06-08 20:40:14"
                    },
                    {
                        "value": "http://bllsl4.shop/DBO3/index.php",
                        "timestamp": "2023-06-08 14:16:17"
                    },
                    {
                        "value": "http://lazo1t.shop/MICH2/index.php",
                        "timestamp": "2023-06-07 19:20:13"
                    },
                    {
                        "value": "http://dou3ble.shop/Dbl3/index.php",
                        "timestamp": "2023-06-07 09:35:08"
                    },
                    {
                        "value": "http://falling.ug/index.php",
                        "timestamp": "2023-06-06 14:00:57"
                    },
                    {
                        "value": "http://pcwizard.net/yz/mann/index.php",
                        "timestamp": "2023-06-01 09:45:14"
                    },
                    {
                        "value": "http://193.42.32.216/wiseman/index.php",
                        "timestamp": "2023-05-17 10:35:07"
                    },
                    {
                        "value": "http://80.82.69.184/stat.php",
                        "timestamp": "2023-05-16 15:35:49"
                    },
                    {
                        "value": "http://dblg023.shop/PL341/index.php",
                        "timestamp": "2023-05-16 15:35:49"
                    },
                    {
                        "value": "http://bllsl3.shop/dbazo/index.php",
                        "timestamp": "2023-05-10 13:10:13"
                    },
                    {
                        "value": "http://valong.ug/index.php",
                        "timestamp": "2023-05-08 16:25:19"
                    },
                    {
                        "value": "http://cpinfo.sustainable-development-partners.com/index.php",
                        "timestamp": "2023-05-07 14:05:24"
                    },
                    {
                        "value": "http://gkonekt.shop/PL341/index.php",
                        "timestamp": "2023-05-16 15:35:50"
                    },
                    {
                        "value": "http://lazo1t.shop/lazo1t/index.php",
                        "timestamp": "2023-05-02 20:15:24"
                    },
                    {
                        "value": "http://kng4.shop/kng4/index.php",
                        "timestamp": "2023-05-02 19:05:21"
                    },
                    {
                        "value": "http://51.15.202.182/1/index.php",
                        "timestamp": "2023-05-01 15:50:18"
                    },
                    {
                        "value": "http://171.22.30.164/papi/index.php",
                        "timestamp": "2023-05-01 06:10:12"
                    },
                    {
                        "value": "http://muhosransk.site/annabel/index.php",
                        "timestamp": "2023-04-26 15:45:17"
                    },
                    {
                        "value": "http://madagaskar.site/rihanna/index.php",
                        "timestamp": "2023-04-25 15:50:41"
                    },
                    {
                        "value": "http://icanda.ac.ug/index.php",
                        "timestamp": "2023-04-21 14:00:21"
                    },
                    {
                        "value": "http://azla3e.shop/dbkl/index.php",
                        "timestamp": "2023-04-19 06:00:48"
                    },
                    {
                        "value": "http://45.88.66.207/purelog/Panel/",
                        "timestamp": "2023-04-18 11:33:44"
                    },
                    {
                        "value": "http://45.88.66.207/purelog/Panel/index.php",
                        "timestamp": "2023-04-18 08:25:24"
                    },
                    {
                        "value": "http://171.22.30.164/smith/index.php",
                        "timestamp": "2023-04-12 08:11:32"
                    },
                    {
                        "value": "http://dblg023.shop/bill1/index.php",
                        "timestamp": "2023-04-11 12:00:18"
                    },
                    {
                        "value": "http://45.88.66.207/newone/index.php",
                        "timestamp": "2023-04-11 09:00:22"
                    },
                    {
                        "value": "http://171.22.30.147/abbey/index.php",
                        "timestamp": "2023-04-11 08:55:14"
                    },
                    {
                        "value": "http://bll5e.shop/dbkl/index.php",
                        "timestamp": "2023-04-10 13:30:09"
                    },
                    {
                        "value": "http://45.88.66.207/oxza/index.php",
                        "timestamp": "2023-04-06 09:00:40"
                    },
                    {
                        "value": "http://141.98.6.162/office/index.php",
                        "timestamp": "2023-04-04 08:01:21"
                    },
                    {
                        "value": "http://85.31.45.29/Godblessings/index.php",
                        "timestamp": "2023-03-27 03:55:54"
                    },
                    {
                        "value": "http://hhs2.000webhostapp.com/index.php",
                        "timestamp": "2023-03-26 17:20:42"
                    },
                    {
                        "value": "http://f0355889.xsph.ru/Panel/index.php",
                        "timestamp": "2023-03-25 13:20:25"
                    },
                    {
                        "value": "http://34.217.22.124/index.php",
                        "timestamp": "2023-03-23 14:50:23"
                    },
                    {
                        "value": "http://logit88.shop/L324/index.php",
                        "timestamp": "2023-03-22 19:05:18"
                    },
                    {
                        "value": "http://193.42.33.252/index.php",
                        "timestamp": "2023-03-21 09:45:31"
                    },
                    {
                        "value": "http://turkie.ac.ug/index.php",
                        "timestamp": "2023-03-16 16:25:27"
                    },
                    {
                        "value": "http://85.31.45.29/goddid/index.php",
                        "timestamp": "2023-03-14 07:50:25"
                    },
                    {
                        "value": "http://85.31.45.29/myoffice/index.php",
                        "timestamp": "2023-03-14 04:45:17"
                    },
                    {
                        "value": "http://85.31.45.29/office/index.php",
                        "timestamp": "2023-03-13 07:20:07"
                    },
                    {
                        "value": "http://171.22.30.164/standright/index.php",
                        "timestamp": "2023-03-12 13:50:21"
                    },
                    {
                        "value": "http://85.31.45.29/ongod/index.php",
                        "timestamp": "2023-03-12 00:55:17"
                    },
                    {
                        "value": "http://46.183.222.115/Roth2/Panel/index.php",
                        "timestamp": "2023-03-08 21:10:07"
                    },
                    {
                        "value": "http://64.52.171.230/index.php",
                        "timestamp": "2023-03-02 11:25:05"
                    },
                    {
                        "value": "http://46.183.222.115/Roth1/Panel/index.php",
                        "timestamp": "2023-03-01 19:05:07"
                    },
                    {
                        "value": "http://nghfh.com/em/index.php",
                        "timestamp": "2023-02-24 13:40:13"
                    },
                    {
                        "value": "http://209.208.65.177/index.php",
                        "timestamp": "2023-02-24 00:40:20"
                    },
                    {
                        "value": "http://bllsl2.shop/bll/index.php",
                        "timestamp": "2023-02-23 12:10:21"
                    },
                    {
                        "value": "http://46.183.220.111/roth1/Panel/index.php",
                        "timestamp": "2023-02-22 11:10:06"
                    },
                    {
                        "value": "http://51.15.219.86/1/index.php",
                        "timestamp": "2023-02-22 07:01:18"
                    },
                    {
                        "value": "http://185.225.73.49/office/index.php",
                        "timestamp": "2023-02-20 00:25:13"
                    },
                    {
                        "value": "http://46.183.220.111/roth2/Panel/index.php",
                        "timestamp": "2023-02-18 08:00:06"
                    },
                    {
                        "value": "http://arthur.ac.ug/index.php",
                        "timestamp": "2023-02-05 09:15:16"
                    },
                    {
                        "value": "http://fran.ac.ug/index.php",
                        "timestamp": "2023-02-04 21:40:13"
                    },
                    {
                        "value": "http://176.10.119.115/7yhnm434/panel/admin.php",
                        "timestamp": "2023-01-08 13:35:12"
                    },
                    {
                        "value": "http://nanaa.tech/index.php",
                        "timestamp": "2022-12-07 11:55:07"
                    },
                    {
                        "value": "http://tuscano.ug/index.php",
                        "timestamp": "2022-11-30 09:30:12"
                    },
                    {
                        "value": "http://billi.webhop.me/a/index.php",
                        "timestamp": "2022-11-30 09:30:10"
                    },
                    {
                        "value": "http://balaborka.com/index.php",
                        "timestamp": "2022-11-30 09:25:08"
                    },
                    {
                        "value": "https://discaredforftp.000webhostapp.com/",
                        "timestamp": "2022-11-29 15:15:18"
                    },
                    {
                        "value": "http://waldo.ac.ug/index.php",
                        "timestamp": "2022-11-26 16:15:31"
                    },
                    {
                        "value": "http://194.55.186.10/fredo/index.php",
                        "timestamp": "2022-11-23 13:05:33"
                    },
                    {
                        "value": "http://51.15.229.127/1/index.php",
                        "timestamp": "2022-11-07 03:50:14"
                    },
                    {
                        "value": "http://mzaky.com/wp-content./index.php",
                        "timestamp": "2022-11-04 20:15:35"
                    },
                    {
                        "value": "http://gab0r1.shop/PL341/index.php",
                        "timestamp": "2022-11-01 12:16:04"
                    },
                    {
                        "value": "http://bllxyz1.shop/blxyz1/index.php",
                        "timestamp": "2022-10-26 16:25:38"
                    },
                    {
                        "value": "http://bll4t1t2.shop/bl4t1t2/index.php",
                        "timestamp": "2022-10-26 13:40:37"
                    },
                    {
                        "value": "http://bll2xyz.shop/bl2xyz/index.php",
                        "timestamp": "2022-10-26 13:30:31"
                    },
                    {
                        "value": "http://antrakt.site/index.php",
                        "timestamp": "2022-10-26 00:15:47"
                    },
                    {
                        "value": "http://cripslayerx.com/PL341/PL341/",
                        "timestamp": "2022-10-22 08:10:42"
                    },
                    {
                        "value": "http://bl4t1t2.shop/bl4t1t2/index.php",
                        "timestamp": "2022-10-20 13:00:12"
                    },
                    {
                        "value": "http://bl3t1t2.shop/bl3t1t2/index.php",
                        "timestamp": "2022-10-19 19:16:38"
                    },
                    {
                        "value": "http://blxyz1.shop/blxyz1/index.php",
                        "timestamp": "2022-10-19 18:15:36"
                    },
                    {
                        "value": "http://bl2xyz.shop/bl2xyz/index.php",
                        "timestamp": "2022-10-19 14:26:15"
                    },
                    {
                        "value": "http://host1735935.hostland.pro/index.php",
                        "timestamp": "2022-10-16 19:36:08"
                    },
                    {
                        "value": "http://l3i.shop/leig/index.php",
                        "timestamp": "2022-10-14 10:25:41"
                    },
                    {
                        "value": "http://huzcihna.shop/PL341/index.php",
                        "timestamp": "2022-10-10 02:16:08"
                    },
                    {
                        "value": "http://ble3ds2.shop/PL341/index.php",
                        "timestamp": "2022-10-09 09:50:20"
                    },
                    {
                        "value": "http://spursg.shop/spursg/index.php",
                        "timestamp": "2022-10-07 12:05:53"
                    },
                    {
                        "value": "http://maripos.ac.ug/index.php",
                        "timestamp": "2022-10-06 06:36:02"
                    },
                    {
                        "value": "http://leig.shop/leig/index.php",
                        "timestamp": "2022-10-06 06:20:47"
                    },
                    {
                        "value": "http://blsrsr.shop/PL341/index.php",
                        "timestamp": "2022-10-05 07:20:13"
                    },
                    {
                        "value": "http://141.98.6.75/dike/index.php",
                        "timestamp": "2022-10-13 14:56:20"
                    },
                    {
                        "value": "http://gw1naz.shop/PL341/index.php",
                        "timestamp": "2022-09-29 20:31:46"
                    },
                    {
                        "value": "http://cinho.shop/PL341/index.php",
                        "timestamp": "2022-09-29 20:10:16"
                    },
                    {
                        "value": "http://cihno.shop/PL341/index.php",
                        "timestamp": "2022-09-28 22:50:27"
                    },
                    {
                        "value": "http://kngppdp.shop/PL341/index.php",
                        "timestamp": "2022-09-28 16:37:13"
                    },
                    {
                        "value": "http://ble33n.shop/PL341/index.php",
                        "timestamp": "2022-09-26 03:15:41"
                    },
                    {
                        "value": "http://blsrs.shop/PL341/index.php",
                        "timestamp": "2022-09-24 07:56:08"
                    },
                    {
                        "value": "http://kngpdrp.shop/PL341/index.php",
                        "timestamp": "2022-09-24 07:56:08"
                    },
                    {
                        "value": "http://ichgh.com/mk/index.php",
                        "timestamp": "2022-09-22 15:25:17"
                    },
                    {
                        "value": "http://bl3ds2.shop/PL341/index.php",
                        "timestamp": "2022-09-22 15:15:15"
                    },
                    {
                        "value": "http://gwinaz.pro/PL341/index.php",
                        "timestamp": "2022-09-22 14:16:12"
                    },
                    {
                        "value": "http://huizechina.co/PL341/index.php",
                        "timestamp": "2022-09-22 10:30:18"
                    },
                    {
                        "value": "http://itomail.ug/index.php",
                        "timestamp": "2022-09-16 19:17:03"
                    },
                    {
                        "value": "http://167.71.90.81/index.php",
                        "timestamp": "2022-09-16 19:16:29"
                    },
                    {
                        "value": "http://85.31.46.24/cxzx/index.php",
                        "timestamp": "2022-09-14 00:05:45"
                    },
                    {
                        "value": "http://185.29.9.47/aristo/Panel/index.php",
                        "timestamp": "2022-09-13 12:40:39"
                    },
                    {
                        "value": "http://85.31.46.24/suax/index.php",
                        "timestamp": "2022-09-13 10:30:26"
                    },
                    {
                        "value": "http://wewilltoptheearth.top/index.php",
                        "timestamp": "2022-08-14 06:50:24"
                    },
                    {
                        "value": "http://google.com/d8w75px/index.php",
                        "timestamp": "2022-08-12 20:20:48"
                    },
                    {
                        "value": "http://google.com/twitch/fk32nOPxf/index.php",
                        "timestamp": "2022-08-12 07:11:10"
                    },
                    {
                        "value": "http://109.248.144.228/aristo/index.php",
                        "timestamp": "2022-08-11 13:45:40"
                    },
                    {
                        "value": "http://157.230.46.114/roth/index.php",
                        "timestamp": "2022-08-11 12:55:33"
                    },
                    {
                        "value": "http://localuyd.beget.tech/index.php",
                        "timestamp": "2022-08-10 11:10:23"
                    },
                    {
                        "value": "http://178.140.137.201/twitchyoutube/fk32nOPxf/index.php",
                        "timestamp": "2022-08-08 14:00:11"
                    },
                    {
                        "value": "http://109.248.150.151/roth/index.php",
                        "timestamp": "2022-08-02 13:35:07"
                    },
                    {
                        "value": "http://doub1e.shop/PL341/index.php",
                        "timestamp": "2022-08-02 05:50:52"
                    },
                    {
                        "value": "http://5.161.134.83/index.php",
                        "timestamp": "2022-07-28 07:45:09"
                    },
                    {
                        "value": "http://208.67.105.161/kendrick/index.php",
                        "timestamp": "2022-07-21 13:05:07"
                    },
                    {
                        "value": "http://208.67.104.152/purelogs/index.php",
                        "timestamp": "2022-07-19 07:40:44"
                    },
                    {
                        "value": "http://andersonlegalltn.com/PL341/index.php",
                        "timestamp": "2022-07-18 20:50:15"
                    },
                    {
                        "value": "http://212.192.246.7//index.php",
                        "timestamp": "2022-07-14 16:00:35"
                    },
                    {
                        "value": "http://2.56.57.50/purelogs/index.php",
                        "timestamp": "2022-07-13 06:05:20"
                    },
                    {
                        "value": "http://do3ble.shop/PL341/index.php",
                        "timestamp": "2022-07-11 12:25:19"
                    },
                    {
                        "value": "http://goldrushaw.ac.ug/index.php",
                        "timestamp": "2022-07-11 02:55:12"
                    },
                    {
                        "value": "http://62.197.136.176/kendrick/index.php",
                        "timestamp": "2022-07-01 19:51:14"
                    },
                    {
                        "value": "http://pafospanel.zzz.com.ua/index.php",
                        "timestamp": "2022-06-29 17:11:45"
                    },
                    {
                        "value": "http://rtt.kl.com.ua/index.php",
                        "timestamp": "2022-06-24 14:38:20"
                    },
                    {
                        "value": "http://85.202.169.21/sweet/index.php",
                        "timestamp": "2022-06-24 08:03:30"
                    },
                    {
                        "value": "http://hostfiles.net/index.php",
                        "timestamp": "2022-06-19 20:41:19"
                    },
                    {
                        "value": "http://phila.ac.ug/index.php",
                        "timestamp": "2022-06-19 17:06:06"
                    },
                    {
                        "value": "http://45.133.1.48/index.php",
                        "timestamp": "2022-06-12 20:56:01"
                    },
                    {
                        "value": "http://84.38.129.36//index.php",
                        "timestamp": "2022-06-02 10:47:39"
                    },
                    {
                        "value": "http://194.31.98.112/index.php",
                        "timestamp": "2022-06-02 02:52:15"
                    },
                    {
                        "value": "http://45.133.1.20/izu/index.php",
                        "timestamp": "2022-05-31 01:51:03"
                    },
                    {
                        "value": "http://f0673097.xsph.ru/index.php",
                        "timestamp": "2022-05-29 17:00:57"
                    },
                    {
                        "value": "http://underdohg.ac.ug/index.php",
                        "timestamp": "2022-05-28 14:10:59"
                    },
                    {
                        "value": "http://bwealth1.xyz/index.php",
                        "timestamp": "2022-05-25 06:27:30"
                    },
                    {
                        "value": "http://46.183.223.118/iyk/Panel/index.php",
                        "timestamp": "2022-05-20 07:26:18"
                    },
                    {
                        "value": "http://crevisoft.net/images/backgrounds/ob/index.php",
                        "timestamp": "2022-05-19 22:07:18"
                    },
                    {
                        "value": "http://46.183.223.116/rothchild/Panel/index.php",
                        "timestamp": "2022-05-19 08:17:02"
                    },
                    {
                        "value": "http://joker9999y.temp.swtest.ru/index.php",
                        "timestamp": "2022-05-18 16:31:18"
                    },
                    {
                        "value": "http://aziri.xyz/index.php",
                        "timestamp": "2022-05-17 14:19:28"
                    },
                    {
                        "value": "http://46.183.223.118/chido/Panel/index.php",
                        "timestamp": "2022-05-17 09:19:36"
                    },
                    {
                        "value": "http://valhalla42.000webhostapp.com/testcode/index.php",
                        "timestamp": "2022-05-12 23:46:39"
                    },
                    {
                        "value": "https://www.ausvanlines.com.au/cloudflare/index.php",
                        "timestamp": "2022-05-10 05:52:49"
                    },
                    {
                        "value": "http://194.31.98.183/index.php",
                        "timestamp": "2022-05-09 14:06:27"
                    },
                    {
                        "value": "http://85.202.169.147/index.php",
                        "timestamp": "2022-05-09 08:00:54"
                    },
                    {
                        "value": "http://5gw4d.xyz/PL341/index.php",
                        "timestamp": "2022-05-05 09:31:23"
                    },
                    {
                        "value": "http://5.161.106.206/index.php",
                        "timestamp": "2022-05-04 05:10:50"
                    },
                    {
                        "value": "http://5.161.82.171/index.php",
                        "timestamp": "2022-05-02 01:35:49"
                    },
                    {
                        "value": "http://4infall.zzz.com.ua/index.php",
                        "timestamp": "2022-04-30 00:10:17"
                    },
                    {
                        "value": "http://212.192.241.190/index.php",
                        "timestamp": "2022-04-27 13:41:10"
                    },
                    {
                        "value": "http://37.0.11.56/razor/index.php",
                        "timestamp": "2022-04-20 11:06:26"
                    },
                    {
                        "value": "http://84.38.133.52/aristo/Panel/index.php",
                        "timestamp": "2022-04-20 00:20:46"
                    },
                    {
                        "value": "http://rockphil.ac.ug/index.php",
                        "timestamp": "2022-04-16 16:55:52"
                    },
                    {
                        "value": "http://e4v5sa.xyz/PL341/index.php",
                        "timestamp": "2022-04-15 05:31:16"
                    },
                    {
                        "value": "http://136.144.41.124/razor/index.php",
                        "timestamp": "2022-04-14 10:36:58"
                    },
                    {
                        "value": "http://62.197.136.186/ugonna/index.php",
                        "timestamp": "2022-04-13 23:56:30"
                    },
                    {
                        "value": "http://46.183.223.116/dublin/Panel/index.php",
                        "timestamp": "2022-04-11 11:41:19"
                    },
                    {
                        "value": "http://185.29.8.14/rothchild/Panel/index.php",
                        "timestamp": "2022-04-11 03:37:04"
                    },
                    {
                        "value": "http://main.protechsource.net/index.php",
                        "timestamp": "2022-04-09 20:30:44"
                    },
                    {
                        "value": "http://hansol1.zzz.com.ua/index.php",
                        "timestamp": "2022-04-03 05:41:01"
                    },
                    {
                        "value": "http://84.38.129.126/dublin2/Panel/index.php",
                        "timestamp": "2022-03-31 19:27:34"
                    },
                    {
                        "value": "http://adreylinkm.temp.swtest.ru/index.php",
                        "timestamp": "2022-03-31 10:30:36"
                    },
                    {
                        "value": "http://178.79.155.150/index.php",
                        "timestamp": "2022-03-30 02:37:47"
                    },
                    {
                        "value": "http://185.29.8.100/aristo/Panel/index.php",
                        "timestamp": "2022-03-29 07:22:51"
                    },
                    {
                        "value": "http://bl1we4t.xyz/index.php",
                        "timestamp": "2022-03-28 09:51:45"
                    },
                    {
                        "value": "http://62.197.136.186/kendrick/index.php",
                        "timestamp": "2022-03-27 20:15:21"
                    },
                    {
                        "value": "http://charisma.ac.ug/index.php",
                        "timestamp": "2022-03-25 15:42:09"
                    },
                    {
                        "value": "http://185.29.10.106/Panel/index.php",
                        "timestamp": "2022-03-24 23:01:57"
                    },
                    {
                        "value": "http://84.38.129.126/Panel/index.php",
                        "timestamp": "2022-03-22 19:30:41"
                    },
                    {
                        "value": "http://185.29.9.113/Panel/index.php",
                        "timestamp": "2022-03-21 11:26:49"
                    },
                    {
                        "value": "http://185.29.8.100/Panel/index.php",
                        "timestamp": "2022-03-21 08:26:32"
                    },
                    {
                        "value": "http://185.92.73.185/index.php",
                        "timestamp": "2022-03-19 18:46:06"
                    },
                    {
                        "value": "http://62.197.136.120/purelogs/index.php",
                        "timestamp": "2022-03-18 07:56:08"
                    },
                    {
                        "value": "http://mideastclinicsea.us/micr05oft-0n1ine/0a8005f5594bd67041f88c6196192646/a5bfc9e07964f8dddeb95fc584cd965d/df877f3865752637daa540ea9cbc474f/webmai1pr0tected/8efd23a3fe0ec74453bdd0fadb91b0e3/PL341/index.php",
                        "timestamp": "2022-03-15 06:51:39"
                    },
                    {
                        "value": "http://51.15.62.59/AED77D05-A028-477C-B013-04F33F1385C3/index.php",
                        "timestamp": "2022-03-15 02:36:27"
                    },
                    {
                        "value": "http://85.202.169.121/mann/index.php",
                        "timestamp": "2022-03-14 20:05:05"
                    },
                    {
                        "value": "http://89.43.107.198/mpom/index.php",
                        "timestamp": "2022-03-13 19:21:15"
                    },
                    {
                        "value": "http://host.org/index.php",
                        "timestamp": "2022-03-13 13:00:24"
                    },
                    {
                        "value": "http://2.56.59.31/purelogs/index.php",
                        "timestamp": "2022-03-08 16:59:19"
                    },
                    {
                        "value": "http://167.71.75.96/mpom/index.php",
                        "timestamp": "2022-03-08 04:05:45"
                    },
                    {
                        "value": "http://2.56.59.31/myown/index.php",
                        "timestamp": "2022-03-07 00:50:44"
                    },
                    {
                        "value": "http://45.79.88.208/index.php",
                        "timestamp": "2022-05-09 03:35:48"
                    },
                    {
                        "value": "http://23.146.242.85/index.php",
                        "timestamp": "2022-03-04 19:31:01"
                    },
                    {
                        "value": "http://logger.cfd/swi341/index.php",
                        "timestamp": "2022-03-04 00:41:44"
                    },
                    {
                        "value": "http://whija2.xyz/index.php",
                        "timestamp": "2022-05-09 03:35:24"
                    },
                    {
                        "value": "http://siemens-energy.cam/PL341/index.php",
                        "timestamp": "2022-05-09 03:35:00"
                    },
                    {
                        "value": "http://clamprite.ga/azo01/index.php",
                        "timestamp": "2022-02-26 08:35:34"
                    },
                    {
                        "value": "http://31.210.20.196/index.php",
                        "timestamp": "2022-04-15 14:41:22"
                    },
                    {
                        "value": "http://nnpcoil.buzz/kendrick/index.php",
                        "timestamp": "2022-02-22 11:21:49"
                    },
                    {
                        "value": "http://nnpcoil.buzz/kendrick/panel/index.php",
                        "timestamp": "2022-04-15 14:40:54"
                    },
                    {
                        "value": "http://sw4g.xyz/PL341/index.php",
                        "timestamp": "2022-02-17 17:06:28"
                    },
                    {
                        "value": "http://bwealth221.xyz/index.php",
                        "timestamp": "2022-02-16 10:40:54"
                    },
                    {
                        "value": "http://swi54.xyz/swi341/index.php",
                        "timestamp": "2022-02-15 08:56:08"
                    },
                    {
                        "value": "http://kizitox.cf/kendrickzx.exe",
                        "timestamp": "2022-02-17 10:06:55"
                    },
                    {
                        "value": "http://australiadish.bar/kendrick/index.php",
                        "timestamp": "2022-02-14 16:09:18"
                    },
                    {
                        "value": "http://australiadish.bar/kendrick/index.php",
                        "timestamp": "2022-02-09 15:25:58"
                    },
                    {
                        "value": "http://2.58.149.120/owes/index.php",
                        "timestamp": "2022-02-08 03:22:05"
                    },
                    {
                        "value": "http://luffich.ru/index.php",
                        "timestamp": "2022-02-01 21:41:28"
                    },
                    {
                        "value": "http://rubberdesign-nl.cam/swi02/index.php",
                        "timestamp": "2022-02-01 12:30:43"
                    },
                    {
                        "value": "http://31.210.20.167/cake/index.php",
                        "timestamp": "2022-01-31 08:30:58"
                    },
                    {
                        "value": "http://zeell.xyz/PL341/index.php",
                        "timestamp": "2022-01-31 07:41:41"
                    },
                    {
                        "value": "http://vietchao-vn.cam/swi01/index.php",
                        "timestamp": "2022-01-28 06:55:57"
                    },
                    {
                        "value": "http://sw1.kl.com.ua/index.php",
                        "timestamp": "2022-01-26 17:16:18"
                    },
                    {
                        "value": "http://surestlogs.xyz/swi03/index.php",
                        "timestamp": "2022-01-25 15:21:16"
                    },
                    {
                        "value": "http://212.192.246.12/index.php",
                        "timestamp": "2022-01-25 10:26:19"
                    },
                    {
                        "value": "http://2.56.59.36/index.phphp",
                        "timestamp": "2022-01-25 10:26:13"
                    },
                    {
                        "value": "http://kingtexs-com.xyz/az2/index.php",
                        "timestamp": "2022-01-25 10:11:09"
                    },
                    {
                        "value": "http://sparoid-oxide.000webhostapp.com/index.php",
                        "timestamp": "2022-01-24 21:41:47"
                    },
                    {
                        "value": "http://52.25.126.192/index.php",
                        "timestamp": "2022-01-24 11:06:25"
                    },
                    {
                        "value": "http://xakfor.net/index.php",
                        "timestamp": "2022-01-23 14:31:17"
                    },
                    {
                        "value": "http://swi01.xyz/swi01/index.php",
                        "timestamp": "2022-01-20 08:32:47"
                    },
                    {
                        "value": "http://caixa-sign.tvconnectbrasil.com.br/Bvt0/index.php",
                        "timestamp": "2022-01-19 06:21:38"
                    },
                    {
                        "value": "http://rgcmgroup.com/abo/index.php",
                        "timestamp": "2022-01-18 14:37:21"
                    },
                    {
                        "value": "http://archosk.xyz/PL341/index.php",
                        "timestamp": "2022-01-16 23:51:17"
                    },
                    {
                        "value": "http://adreylinkm.temp.swtest.ru/panel/adnim.php",
                        "timestamp": "2022-01-14 15:47:16"
                    },
                    {
                        "value": "http://rodavivanoticias.com.br/Bvt0/index.php",
                        "timestamp": "2022-01-11 08:57:04"
                    },
                    {
                        "value": "http://jasaseobe.my.id/index.php",
                        "timestamp": "2022-01-08 11:05:43"
                    },
                    {
                        "value": "http://underdohag.ac.ug/index.php",
                        "timestamp": "2022-01-07 13:26:13"
                    },
                    {
                        "value": "http://2.58.149.59//index.php",
                        "timestamp": "2022-01-04 14:05:48"
                    },
                    {
                        "value": "http://193.151.89.76/panel/index.php",
                        "timestamp": "2021-12-30 21:20:49"
                    },
                    {
                        "value": "http://update.fhack.pw/index.php",
                        "timestamp": "2021-12-21 16:02:02"
                    },
                    {
                        "value": "http://kinotoday.ru/index.php",
                        "timestamp": "2021-12-21 01:46:48"
                    },
                    {
                        "value": "http://185.29.11.112/rothchildnew/Panel/index.php",
                        "timestamp": "2021-12-19 20:11:02"
                    },
                    {
                        "value": "https://globaltradersoption.com/Vup0/index.php",
                        "timestamp": "2021-12-13 15:16:29"
                    },
                    {
                        "value": "http://pretorian.ac.ug/index.php",
                        "timestamp": "2021-12-10 17:31:43"
                    },
                    {
                        "value": "http://185.29.8.30/rothchild/Panel/index.php",
                        "timestamp": "2021-12-10 14:02:03"
                    },
                    {
                        "value": "http://37.0.10.115/az2/index.php",
                        "timestamp": "2021-12-09 07:41:32"
                    },
                    {
                        "value": "http://elvincom.com/Nmp09/index.php",
                        "timestamp": "2021-12-09 07:16:31"
                    },
                    {
                        "value": "http://perocute.com/lang/terms/index.php",
                        "timestamp": "2021-12-06 09:26:04"
                    },
                    {
                        "value": "http://sparrowxx.xyz/az2/index.php",
                        "timestamp": "2021-12-03 10:01:07"
                    },
                    {
                        "value": "http://fmgt11.xyz/PL341/index.php",
                        "timestamp": "2021-11-29 09:20:54"
                    },
                    {
                        "value": "http://23012002.com/index.php",
                        "timestamp": "2021-11-24 11:06:32"
                    },
                    {
                        "value": "http://navanaweldings.xyz/az/index.php",
                        "timestamp": "2021-11-23 01:21:51"
                    },
                    {
                        "value": "http://nnpcgruops.com/peace/index.php",
                        "timestamp": "2021-11-20 18:00:55"
                    },
                    {
                        "value": "http://drossmnfg.com/stallion/index.php",
                        "timestamp": "2021-11-20 09:01:17"
                    },
                    {
                        "value": "http://navanaweldings.xyz/az1/index.php",
                        "timestamp": "2021-11-20 08:06:02"
                    },
                    {
                        "value": "http://51.38.178.155/index.php",
                        "timestamp": "2021-11-18 22:07:07"
                    },
                    {
                        "value": "http://66.70.218.54/index.php",
                        "timestamp": "2021-11-17 06:52:02"
                    },
                    {
                        "value": "http://auxinity.000webhostapp.com/index.php",
                        "timestamp": "2021-11-14 22:41:06"
                    },
                    {
                        "value": "http://185.79.156.23/1u-T3/index.php",
                        "timestamp": "2021-11-14 19:16:00"
                    },
                    {
                        "value": "http://smtress.zzz.com.ua/index.php",
                        "timestamp": "2021-11-14 07:57:41"
                    },
                    {
                        "value": "http://allods-blood.space/ricarda/index.php",
                        "timestamp": "2021-11-13 22:11:18"
                    },
                    {
                        "value": "http://bonanzacrek.com/odogwu/index.php",
                        "timestamp": "2021-11-09 15:30:54"
                    },
                    {
                        "value": "http://45.144.225.103/xsaz/index.php",
                        "timestamp": "2021-11-09 12:07:48"
                    },
                    {
                        "value": "http://45.133.1.191/xsaz/index.php",
                        "timestamp": "2021-11-03 09:10:58"
                    },
                    {
                        "value": "http://colonna.ug/index.php",
                        "timestamp": "2021-11-03 02:15:48"
                    },
                    {
                        "value": "http://squerad.com/jun/index.php",
                        "timestamp": "2021-11-03 02:15:28"
                    },
                    {
                        "value": "http://212.192.241.165/PL341/index.php",
                        "timestamp": "2021-11-02 10:35:25"
                    },
                    {
                        "value": "http://squerad.com/frank/index.php",
                        "timestamp": "2021-11-01 14:15:41"
                    },
                    {
                        "value": "http://37.0.8.215/index.phphp",
                        "timestamp": "2021-11-01 10:16:24"
                    },
                    {
                        "value": "http://185.142.236.220/azur/index.php",
                        "timestamp": "2021-10-29 17:07:48"
                    },
                    {
                        "value": "http://45.133.1.13/xsaz/index.php",
                        "timestamp": "2021-10-27 10:46:25"
                    },
                    {
                        "value": "http://212.193.30.228/PL341/index.php",
                        "timestamp": "2021-10-26 10:36:25"
                    },
                    {
                        "value": "http://artediussh.com/wp/ws/index.php",
                        "timestamp": "2021-10-26 00:16:10"
                    },
                    {
                        "value": "http://212.192.241.149/index.php",
                        "timestamp": "2021-10-25 19:50:48"
                    },
                    {
                        "value": "http://37.0.10.118/xsaz/index.php",
                        "timestamp": "2021-10-25 13:40:44"
                    },
                    {
                        "value": "http://21slg.xyz/PL341/index.php",
                        "timestamp": "2021-10-20 06:40:42"
                    },
                    {
                        "value": "http://51.15.247.8/64803B71-DDC3-42B4-8230-0E3D067859EB/index.php",
                        "timestamp": "2021-10-17 07:10:26"
                    },
                    {
                        "value": "http://139.59.36.90/index.php",
                        "timestamp": "2021-10-07 15:56:54"
                    },
                    {
                        "value": "http://casabayshops.co/index.php",
                        "timestamp": "2021-10-06 21:25:35"
                    },
                    {
                        "value": "http://212.193.30.181/index.php",
                        "timestamp": "2021-10-05 05:31:07"
                    },
                    {
                        "value": "http://google.com/index.phphp",
                        "timestamp": "2021-10-04 17:56:45"
                    },
                    {
                        "value": "http://www.11n.us/robin/index.php",
                        "timestamp": "2021-09-30 01:01:13"
                    },
                    {
                        "value": "http://37.0.8.36/oxxs/index.php",
                        "timestamp": "2021-09-29 13:00:34"
                    },
                    {
                        "value": "http://admin.svapofit.com/azs/index.php",
                        "timestamp": "2021-09-27 22:47:33"
                    },
                    {
                        "value": "http://37.0.8.14/index.php",
                        "timestamp": "2021-09-27 05:07:43"
                    },
                    {
                        "value": "http://165.227.220.7/index.php",
                        "timestamp": "2021-09-23 14:05:29"
                    },
                    {
                        "value": "http://159.65.165.243/index.php",
                        "timestamp": "2021-09-22 12:36:10"
                    },
                    {
                        "value": "http://216.128.151.72/index.php",
                        "timestamp": "2021-09-22 12:00:56"
                    },
                    {
                        "value": "http://212.192.241.112/index.php",
                        "timestamp": "2021-09-19 15:01:20"
                    },
                    {
                        "value": "http://136.144.41.251/oxxs/index.php",
                        "timestamp": "2021-09-17 18:33:36"
                    },
                    {
                        "value": "http://136.144.41.34/index.php",
                        "timestamp": "2021-09-17 11:41:08"
                    },
                    {
                        "value": "http://fortillinco.com/raeymnbvcxz/index.php",
                        "timestamp": "2021-09-17 10:55:38"
                    },
                    {
                        "value": "http://31.210.20.16/panel1/index.php",
                        "timestamp": "2021-09-15 04:31:05"
                    },
                    {
                        "value": "http://198.71.63.209/index.php",
                        "timestamp": "2021-09-14 18:16:05"
                    },
                    {
                        "value": "http://193.247.144.123/index.php",
                        "timestamp": "2021-09-14 10:56:18"
                    },
                    {
                        "value": "http://drossmnfg.com/rult/index.php",
                        "timestamp": "2021-09-14 04:26:11"
                    },
                    {
                        "value": "http://smdglo.xyz/creep/index.php",
                        "timestamp": "2021-09-13 04:55:31"
                    },
                    {
                        "value": "http://193.247.144.115/index.php",
                        "timestamp": "2021-09-10 08:25:38"
                    },
                    {
                        "value": "http://163.172.136.230/2749DEEA-F999-4396-B643-7728A16DD7DC/index.php",
                        "timestamp": "2021-09-08 22:55:45"
                    },
                    {
                        "value": "http://smdglo.xyz/panel1/index.php",
                        "timestamp": "2021-09-08 14:17:00"
                    },
                    {
                        "value": "http://rungame.fun/filomena/index.php",
                        "timestamp": "2021-09-04 07:40:45"
                    },
                    {
                        "value": "http://mazoyer.ac.ug/index.php",
                        "timestamp": "2021-09-02 15:11:11"
                    },
                    {
                        "value": "http://azobotupdatestea.duckdns.org/en/FTP/index.php",
                        "timestamp": "2021-09-01 23:21:36"
                    },
                    {
                        "value": "http://37.0.11.174/PL341/index.php",
                        "timestamp": "2021-09-01 12:30:47"
                    },
                    {
                        "value": "http://ziz.zzz.com.ua/index.php",
                        "timestamp": "2021-09-01 10:00:47"
                    },
                    {
                        "value": "http://petcf.com/az/index.php",
                        "timestamp": "2021-08-31 19:00:42"
                    },
                    {
                        "value": "https://updserv.ga/Panel/index.php",
                        "timestamp": "2021-08-31 08:31:26"
                    },
                    {
                        "value": "https://nagles.com.au/wp/xl/index.php",
                        "timestamp": "2021-08-30 08:25:21"
                    },
                    {
                        "value": "http://durov.website/gayathri/index.php",
                        "timestamp": "2021-08-26 09:21:38"
                    },
                    {
                        "value": "http://u1219246ucr.ha004.t.justns.ru/index.php",
                        "timestamp": "2021-08-23 14:35:58"
                    },
                    {
                        "value": "http://37.0.10.179/PL341/index.php",
                        "timestamp": "2021-08-23 10:35:39"
                    },
                    {
                        "value": "http://208.167.239.179/index.php",
                        "timestamp": "2021-08-23 05:50:27"
                    },
                    {
                        "value": "http://212.192.246.176/PL341/index.php",
                        "timestamp": "2021-08-21 22:21:06"
                    },
                    {
                        "value": "http://212.192.246.242/rut/index.php",
                        "timestamp": "2021-08-20 09:00:29"
                    },
                    {
                        "value": "http://37.0.10.210/PL341/index.php",
                        "timestamp": "2021-08-19 12:21:47"
                    },
                    {
                        "value": "http://gordons.ac.ug/index.php",
                        "timestamp": "2021-08-19 06:01:41"
                    },
                    {
                        "value": "http://cwownola.org/AqwE/index.php",
                        "timestamp": "2021-08-18 10:00:43"
                    },
                    {
                        "value": "http://gordonas.ac.ug/index.php",
                        "timestamp": "2021-08-18 06:50:54"
                    },
                    {
                        "value": "http://netmansoft.com/JjhbeD52pkODZbHD/index.php",
                        "timestamp": "2021-08-16 16:11:12"
                    },
                    {
                        "value": "http://myproskxa.ac.ug/index.php",
                        "timestamp": "2021-08-16 12:01:11"
                    },
                    {
                        "value": "http://212.192.246.93/PL341/index.php",
                        "timestamp": "2021-08-16 11:45:59"
                    },
                    {
                        "value": "http://workharder.club/index.php",
                        "timestamp": "2021-08-15 17:51:39"
                    },
                    {
                        "value": "http://savacons.com/wp-az/index.php",
                        "timestamp": "2021-08-13 07:58:10"
                    },
                    {
                        "value": "http://systemwebanalytycs.com/index.php",
                        "timestamp": "2021-08-12 13:06:13"
                    },
                    {
                        "value": "http://finlzzm.com/index.php",
                        "timestamp": "2021-08-12 06:32:30"
                    },
                    {
                        "value": "http://203.159.80.211/owe/index.php",
                        "timestamp": "2021-08-11 12:31:03"
                    },
                    {
                        "value": "http://203.159.80.136/nx/index.php",
                        "timestamp": "2021-08-11 10:40:52"
                    },
                    {
                        "value": "http://45.77.87.250/index.php",
                        "timestamp": "2021-08-11 07:05:57"
                    },
                    {
                        "value": "http://37.0.10.102/rut/index.php",
                        "timestamp": "2021-08-10 08:40:28"
                    },
                    {
                        "value": "http://carolinascarpelini.com.br/set/node/index.php",
                        "timestamp": "2021-08-05 13:45:36"
                    },
                    {
                        "value": "https://suspam.com/index.php",
                        "timestamp": "2021-08-05 04:02:59"
                    },
                    {
                        "value": "http://www.epcdiagnostic.com/wp-content/rem/cach/index.php",
                        "timestamp": "2021-08-04 06:24:14"
                    },
                    {
                        "value": "http://37.0.10.99/PL341/index.php",
                        "timestamp": "2021-08-04 05:31:25"
                    },
                    {
                        "value": "http://193.247.144.18/index.php",
                        "timestamp": "2021-08-03 16:21:31"
                    },
                    {
                        "value": "http://193.247.144.107/index.php",
                        "timestamp": "2021-08-03 10:16:13"
                    },
                    {
                        "value": "http://203.159.80.118/PL341/index.php",
                        "timestamp": "2021-08-02 05:30:19"
                    },
                    {
                        "value": "http://203.159.80.93/PL341/index.php",
                        "timestamp": "2021-08-02 05:20:33"
                    },
                    {
                        "value": "http://grekos.site/concordia/index.php",
                        "timestamp": "2021-07-31 04:26:32"
                    },
                    {
                        "value": "http://37.0.8.169/index.php",
                        "timestamp": "2021-07-30 18:05:46"
                    },
                    {
                        "value": "http://203.159.80.182/index.php",
                        "timestamp": "2021-07-29 13:42:34"
                    },
                    {
                        "value": "http://45.77.188.26/index.php",
                        "timestamp": "2021-07-29 11:30:35"
                    },
                    {
                        "value": "http://treasurerauditor.com/temp/oka/index.php",
                        "timestamp": "2021-07-29 10:48:41"
                    },
                    {
                        "value": "http://spreadgoodfiles.xyz/XcvU/index.php",
                        "timestamp": "2021-07-29 09:55:42"
                    },
                    {
                        "value": "http://xxfetch.duckdns.org/index.php",
                        "timestamp": "2021-07-28 16:00:29"
                    },
                    {
                        "value": "http://193.247.144.166/index.php",
                        "timestamp": "2021-07-28 11:25:25"
                    },
                    {
                        "value": "http://195.133.40.5/index.php",
                        "timestamp": "2021-07-28 07:50:36"
                    },
                    {
                        "value": "http://37.0.10.25/index.php",
                        "timestamp": "2021-07-26 14:45:46"
                    },
                    {
                        "value": "http://37.0.8.80/index.php",
                        "timestamp": "2021-07-26 13:08:05"
                    },
                    {
                        "value": "http://outreach.zone/young/32/index.php",
                        "timestamp": "2021-07-25 22:25:29"
                    },
                    {
                        "value": "http://danielmi.ac.ug/index.php",
                        "timestamp": "2021-07-23 11:21:36"
                    },
                    {
                        "value": "http://itthonfiatalon.hu/temp/reo/index.php",
                        "timestamp": "2021-07-22 11:54:51"
                    },
                    {
                        "value": "http://soapstampingmachines.com/slider/data1/index.php",
                        "timestamp": "2021-07-21 02:20:53"
                    },
                    {
                        "value": "http://xtream-ui.tk/bvLOI/index.php",
                        "timestamp": "2021-07-20 14:41:34"
                    },
                    {
                        "value": "http://185.189.151.50/7yhnm434/index.php",
                        "timestamp": "2021-07-19 09:55:52"
                    },
                    {
                        "value": "http://betterlate.onlinewebshop.net/index.php",
                        "timestamp": "2021-07-19 09:05:45"
                    },
                    {
                        "value": "http://cskbtr.atspace.co.uk/my_profile/res/",
                        "timestamp": "2021-07-18 15:30:59"
                    },
                    {
                        "value": "http://birthday-fact.cf/wg/PL341/index.php",
                        "timestamp": "2021-07-16 12:08:46"
                    },
                    {
                        "value": "http://kylestephensphd.com/eXtYu/index.php",
                        "timestamp": "2021-07-16 04:55:56"
                    },
                    {
                        "value": "http://136.144.41.135/xox/index.php",
                        "timestamp": "2021-07-15 09:56:14"
                    },
                    {
                        "value": "http://gojekpromo.com/stealingdata/index.php",
                        "timestamp": "2021-07-14 11:41:26"
                    },
                    {
                        "value": "http://104.168.153.39/Panel/index.php",
                        "timestamp": "2021-07-14 09:11:04"
                    },
                    {
                        "value": "http://51.15.231.96/4/3AFDF4A3-33B5-4028-B8B8-E66616F1CBA7/index.php",
                        "timestamp": "2021-07-13 11:17:08"
                    },
                    {
                        "value": "http://188.68.208.172/p/index.php",
                        "timestamp": "2021-07-13 10:07:27"
                    },
                    {
                        "value": "http://37.0.11.128/index.php",
                        "timestamp": "2021-07-13 10:02:36"
                    },
                    {
                        "value": "http://47.251.26.10/index.php",
                        "timestamp": "2021-07-12 05:30:07"
                    },
                    {
                        "value": "http://blackserwer.3d.tc/index.php",
                        "timestamp": "2021-07-10 12:35:54"
                    },
                    {
                        "value": "http://erolasa.ac.ug/index.php",
                        "timestamp": "2021-07-08 12:26:04"
                    },
                    {
                        "value": "http://46.183.221.10/og/Panel/index.php",
                        "timestamp": "2021-07-06 06:05:54"
                    },
                    {
                        "value": "http://e-pandemi-hemen-basvuru.xyz/index.php",
                        "timestamp": "2021-07-05 21:25:43"
                    },
                    {
                        "value": "http://2.56.59.45/index.php",
                        "timestamp": "2021-07-05 06:36:24"
                    },
                    {
                        "value": "http://kristinka.org/index.php",
                        "timestamp": "2021-07-04 21:10:37"
                    },
                    {
                        "value": "http://51.68.125.34/index.php",
                        "timestamp": "2021-07-03 19:31:07"
                    },
                    {
                        "value": "http://46.183.221.10/roth/Panel/index.php",
                        "timestamp": "2021-07-03 07:50:40"
                    },
                    {
                        "value": "http://195.133.40.191/PL341/index.php",
                        "timestamp": "2021-07-02 14:40:37"
                    },
                    {
                        "value": "http://46.183.221.10/ocha/Panel/index.php",
                        "timestamp": "2021-07-01 10:25:42"
                    },
                    {
                        "value": "http://lizzzqua.ac.ug/index.php",
                        "timestamp": "2021-06-30 13:51:24"
                    },
                    {
                        "value": "http://54.215.194.254/index.php",
                        "timestamp": "2021-06-29 17:06:04"
                    },
                    {
                        "value": "http://babaiko.site/emeka/index.php",
                        "timestamp": "2021-06-28 20:15:41"
                    },
                    {
                        "value": "http://37.0.11.198/index.php",
                        "timestamp": "2021-06-28 12:05:33"
                    },
                    {
                        "value": "http://23.229.29.56/index.php",
                        "timestamp": "2021-06-26 09:45:31"
                    },
                    {
                        "value": "https://livdecor.pt/work/Panel/index.php",
                        "timestamp": "2021-06-24 19:26:55"
                    },
                    {
                        "value": "http://livdecor.pt/work/Panel/index.php",
                        "timestamp": "2021-06-24 19:21:25"
                    },
                    {
                        "value": "http://212.192.241.203/orss/index.php",
                        "timestamp": "2021-06-24 12:37:10"
                    },
                    {
                        "value": "http://2.56.59.196/index.php",
                        "timestamp": "2021-06-24 12:16:26"
                    },
                    {
                        "value": "http://195.133.40.176/index.php",
                        "timestamp": "2021-06-23 00:26:27"
                    },
                    {
                        "value": "http://evadex.duckdns.org/index.php",
                        "timestamp": "2021-06-22 11:26:12"
                    },
                    {
                        "value": "http://smkn1cilegon.sch.id/huPI/index.php",
                        "timestamp": "2021-06-22 06:50:53"
                    },
                    {
                        "value": "http://hise.us/chekwa/index.php",
                        "timestamp": "2021-06-20 12:45:31"
                    },
                    {
                        "value": "http://houseluxury-re.ch/toskulo/PL341/index.php",
                        "timestamp": "2021-06-19 16:46:19"
                    },
                    {
                        "value": "http://cc97560.tmweb.ru/index.php",
                        "timestamp": "2021-06-16 18:15:21"
                    },
                    {
                        "value": "http://www.houseluxury-re.ch/budop/PL341/index.php",
                        "timestamp": "2021-06-16 09:37:11"
                    },
                    {
                        "value": "http://houseluxury-re.ch/PL341/index.php",
                        "timestamp": "2021-06-15 13:12:40"
                    },
                    {
                        "value": "http://smkn1cilegon.sch.id/cgi-bn/PLcv/index.php",
                        "timestamp": "2021-06-15 02:11:49"
                    },
                    {
                        "value": "http://136.144.41.23/index.php",
                        "timestamp": "2021-06-14 23:56:37"
                    },
                    {
                        "value": "http://31.42.191.50/index.php",
                        "timestamp": "2021-06-14 09:25:25"
                    },
                    {
                        "value": "https://preciousgoodness117.000webhostapp.com/PL341/index.php",
                        "timestamp": "2021-06-13 15:55:24"
                    },
                    {
                        "value": "https://hakimkoke.000webhostapp.com/PL341/index.php",
                        "timestamp": "2021-06-13 15:45:21"
                    },
                    {
                        "value": "http://80.85.136.155/mia/index.php",
                        "timestamp": "2021-06-13 13:50:27"
                    },
                    {
                        "value": "http://51.75.30.200/index.php",
                        "timestamp": "2021-06-12 14:55:41"
                    },
                    {
                        "value": "http://j3493273.myjino.ru/index.php",
                        "timestamp": "2021-06-09 20:36:17"
                    },
                    {
                        "value": "http://f0528671.xsph.ru/index.php",
                        "timestamp": "2021-06-08 07:04:19"
                    },
                    {
                        "value": "http://203.159.80.40/PL341/index.php",
                        "timestamp": "2021-06-07 09:06:56"
                    },
                    {
                        "value": "http://smkn1cilegon.sch.id/Vbcx/index.php",
                        "timestamp": "2021-06-07 05:55:34"
                    },
                    {
                        "value": "http://185.212.128.68/newpan/index.php",
                        "timestamp": "2021-06-07 05:41:38"
                    },
                    {
                        "value": "http://45.180.172.235/PL341/index.php",
                        "timestamp": "2021-06-02 17:28:00"
                    },
                    {
                        "value": "http://lexusbiscuit.com/VB8uI/index.php",
                        "timestamp": "2021-06-01 12:12:21"
                    },
                    {
                        "value": "http://ppdb.smkn1cilegon.sch.id/huPl/index.php",
                        "timestamp": "2021-05-31 12:01:03"
                    },
                    {
                        "value": "http://gdelogiblya.000webhostapp.com/index.php",
                        "timestamp": "2021-05-29 17:15:19"
                    },
                    {
                        "value": "http://kdkg.h1n.ru/index.php",
                        "timestamp": "2021-05-27 18:50:22"
                    },
                    {
                        "value": "http://195.133.40.62/index.php",
                        "timestamp": "2021-05-26 16:58:27"
                    },
                    {
                        "value": "http://www.bengalcement.com.bd/AxPu/index.php",
                        "timestamp": "2021-05-26 13:00:24"
                    },
                    {
                        "value": "http://203.159.80.31/PL341/index.php",
                        "timestamp": "2021-05-26 13:00:16"
                    },
                    {
                        "value": "http://cardrob.zzz.com.ua/",
                        "timestamp": "2021-05-25 18:32:00"
                    },
                    {
                        "value": "http://185.63.191.220/index.php",
                        "timestamp": "2021-05-25 18:30:17"
                    },
                    {
                        "value": "http://frannn.duckdns.org/index.php",
                        "timestamp": "2021-05-24 09:46:16"
                    },
                    {
                        "value": "http://31.210.21.252/index.php",
                        "timestamp": "2021-05-24 07:51:10"
                    },
                    {
                        "value": "http://176.57.68.60/azo/mia/index.php",
                        "timestamp": "2021-05-23 23:30:39"
                    },
                    {
                        "value": "http://akinseltv.com/mkdmc/index.php",
                        "timestamp": "2021-05-22 21:25:32"
                    },
                    {
                        "value": "http://31.210.20.76/index.php",
                        "timestamp": "2021-05-22 05:45:28"
                    },
                    {
                        "value": "http://31.210.20.160/index.php",
                        "timestamp": "2021-05-21 02:25:10"
                    },
                    {
                        "value": "http://45.133.1.5/aza/index.php",
                        "timestamp": "2021-05-19 03:10:39"
                    },
                    {
                        "value": "http://wingermany.duckdns.org/index.php",
                        "timestamp": "2021-05-18 15:15:22"
                    },
                    {
                        "value": "http://panakva.com/panel/index.php",
                        "timestamp": "2021-05-16 14:55:15"
                    },
                    {
                        "value": "http://ngoagency.org/wp-content/temp/se/index.php",
                        "timestamp": "2021-05-15 18:25:38"
                    },
                    {
                        "value": "http://allods-games.site/kateryna/index.php",
                        "timestamp": "2021-05-12 04:30:33"
                    },
                    {
                        "value": "http://host1714380.hostland.pro/index.php",
                        "timestamp": "2021-05-11 08:15:52"
                    },
                    {
                        "value": "http://ahsanulalam.buet.ac.bd/bvyukiu/index.php",
                        "timestamp": "2021-05-11 08:15:27"
                    },
                    {
                        "value": "http://joemoore.dx.am/index.php",
                        "timestamp": "2021-05-07 16:11:15"
                    },
                    {
                        "value": "http://makethebestservice.com/vp/index.php",
                        "timestamp": "2021-05-07 03:16:16"
                    },
                    {
                        "value": "http://31.210.21.194/index.php",
                        "timestamp": "2021-05-05 10:05:25"
                    },
                    {
                        "value": "http://holohololo.000webhostapp.com/index.php",
                        "timestamp": "2021-05-04 12:36:32"
                    },
                    {
                        "value": "http://macakslcaq.ug/index.php",
                        "timestamp": "2021-04-30 14:41:31"
                    },
                    {
                        "value": "http://31.210.21.203/3.4/index.php",
                        "timestamp": "2021-04-30 11:50:54"
                    },
                    {
                        "value": "http://203.159.80.91/index.php",
                        "timestamp": "2021-04-30 10:15:48"
                    },
                    {
                        "value": "http://voda.bit/a/index.php",
                        "timestamp": "2021-04-29 12:30:51"
                    },
                    {
                        "value": "http://fesfesfsefes.000webhostapp.com/index.php",
                        "timestamp": "2021-04-29 09:36:39"
                    },
                    {
                        "value": "http://13.233.97.208/index.php",
                        "timestamp": "2021-04-28 05:20:56"
                    },
                    {
                        "value": "http://allods-down.site/yumi/index.php",
                        "timestamp": "2021-04-26 12:21:23"
                    },
                    {
                        "value": "http://31.210.21.39/3.4.1/index.php",
                        "timestamp": "2021-04-26 08:36:33"
                    },
                    {
                        "value": "http://frnr.duckdns.org/index.php",
                        "timestamp": "2021-04-26 08:21:15"
                    },
                    {
                        "value": "http://casterbadger.online/FR131/index.php",
                        "timestamp": "2021-04-25 14:25:10"
                    },
                    {
                        "value": "http://casterbadger.online/PL341/index.php",
                        "timestamp": "2021-04-23 19:26:09"
                    },
                    {
                        "value": "http://cryptofaze.com/index.php",
                        "timestamp": "2021-04-23 12:30:50"
                    },
                    {
                        "value": "http://smkn1cilegon.sch.id/MnAew/index.php",
                        "timestamp": "2021-04-23 07:40:53"
                    },
                    {
                        "value": "http://104.238.137.224/index.php",
                        "timestamp": "2021-04-22 00:01:22"
                    },
                    {
                        "value": "http://149.248.35.254/index.php",
                        "timestamp": "2021-04-21 19:51:09"
                    },
                    {
                        "value": "http://31.210.20.121/index.php",
                        "timestamp": "2021-04-21 08:41:49"
                    },
                    {
                        "value": "http://45.144.225.131/index.php",
                        "timestamp": "2021-04-20 18:00:23"
                    },
                    {
                        "value": "http://144.202.83.182/index.php",
                        "timestamp": "2021-04-20 07:50:20"
                    },
                    {
                        "value": "http://pysik.club/index.phphp",
                        "timestamp": "2021-04-19 22:05:29"
                    },
                    {
                        "value": "http://aka-mining.com/PL341/index.php",
                        "timestamp": "2021-04-18 18:10:21"
                    },
                    {
                        "value": "http://173.230.150.192/index.php",
                        "timestamp": "2021-04-18 02:50:09"
                    },
                    {
                        "value": "http://www.11n.us/j2/index.php",
                        "timestamp": "2021-04-17 08:25:31"
                    },
                    {
                        "value": "http://buterin-vitalik.fun/filomena/index.php",
                        "timestamp": "2021-04-17 02:05:28"
                    },
                    {
                        "value": "http://fineco-bank.co.uk/panel/index.php",
                        "timestamp": "2021-04-17 00:25:42"
                    },
                    {
                        "value": "http://0x21.in/_az/",
                        "timestamp": "2021-04-16 16:10:17"
                    },
                    {
                        "value": "http://92.63.192.57/index.php",
                        "timestamp": "2021-04-16 12:25:24"
                    },
                    {
                        "value": "http://149.28.226.192/index.php",
                        "timestamp": "2021-04-15 17:00:05"
                    },
                    {
                        "value": "http://cupazo.co.in/TyBmo/index.php",
                        "timestamp": "2021-04-13 23:35:17"
                    },
                    {
                        "value": "http://45.76.21.114/index.php",
                        "timestamp": "2021-04-12 10:00:34"
                    },
                    {
                        "value": "http://kbinsure-preview.ml/AZORult/index.php",
                        "timestamp": "2021-04-09 08:40:22"
                    },
                    {
                        "value": "http://mbstechnology.redirectme.net/index.php",
                        "timestamp": "2021-04-09 07:00:17"
                    },
                    {
                        "value": "http://45.56.119.148/index.php",
                        "timestamp": "2021-04-08 00:45:40"
                    },
                    {
                        "value": "http://milax.ml/damiano/index.php",
                        "timestamp": "2021-04-07 23:45:38"
                    },
                    {
                        "value": "https://sterline.lt/lokk/32/index.php",
                        "timestamp": "2021-04-07 06:10:09"
                    },
                    {
                        "value": "http://alfawood.us/mkdgs/index.php",
                        "timestamp": "2021-04-07 06:10:05"
                    },
                    {
                        "value": "http://108.61.161.76/index.php",
                        "timestamp": "2021-04-07 06:00:06"
                    },
                    {
                        "value": "http://a0528438.xsph.ru/index.php",
                        "timestamp": "2021-04-05 21:00:11"
                    },
                    {
                        "value": "http://winipose.duckdns.org/index.php",
                        "timestamp": "2021-04-04 10:15:28"
                    },
                    {
                        "value": "http://0x21.in:8000/_az/",
                        "timestamp": "2021-04-04 05:45:17"
                    },
                    {
                        "value": "http://f0528018.xsph.ru/index.php",
                        "timestamp": "2021-04-04 04:55:09"
                    },
                    {
                        "value": "http://staging.onyxa.pl/XyuTr/index.php",
                        "timestamp": "2021-04-01 08:22:55"
                    },
                    {
                        "value": "http://alfawood.us/xsclk/index.php",
                        "timestamp": "2021-04-01 00:31:15"
                    },
                    {
                        "value": "http://74.208.130.238/index.php",
                        "timestamp": "2021-03-31 02:12:07"
                    },
                    {
                        "value": "http://moreirawag.ac.ug/index.php",
                        "timestamp": "2021-03-30 11:21:21"
                    },
                    {
                        "value": "http://novacekjac.temp.swtest.ru/index.php",
                        "timestamp": "2021-03-30 03:55:38"
                    },
                    {
                        "value": "http://93.95.97.67/max/index.php",
                        "timestamp": "2021-03-26 18:42:07"
                    },
                    {
                        "value": "http://privatecyber.site/index.php",
                        "timestamp": "2021-03-25 18:30:53"
                    },
                    {
                        "value": "http://techregistrationapp.xyz/111/index.php",
                        "timestamp": "2021-03-25 12:56:20"
                    },
                    {
                        "value": "http://lontor-tv.tk/max/index.php",
                        "timestamp": "2021-03-25 10:00:20"
                    },
                    {
                        "value": "http://solsex.duckdns.org/index.php",
                        "timestamp": "2021-03-25 09:22:19"
                    },
                    {
                        "value": "http://dyndyn.duckdns.org/index.php",
                        "timestamp": "2021-03-23 08:18:27"
                    },
                    {
                        "value": "http://ezman123123.000webhostapp.com/index.php",
                        "timestamp": "2021-03-23 08:18:25"
                    },
                    {
                        "value": "http://norep-layamazoon.wootraining.certificacion.cl/XcYuk/index.php",
                        "timestamp": "2021-03-23 08:17:42"
                    },
                    {
                        "value": "http://bengalcement.com.bd/AxPu/index.php",
                        "timestamp": "2021-03-22 16:54:10"
                    },
                    {
                        "value": "http://weilde.at/klein/index.php",
                        "timestamp": "2021-03-22 07:40:45"
                    },
                    {
                        "value": "http://lexusbiscuit.com/OiuBn/index.php",
                        "timestamp": "2021-03-20 12:55:07"
                    },
                    {
                        "value": "http://45.85.90.188/az1/wuvc/index.php",
                        "timestamp": "2021-03-16 11:30:07"
                    },
                    {
                        "value": "http://lexusgx.tk/prosper/index.php",
                        "timestamp": "2021-03-16 10:30:15"
                    },
                    {
                        "value": "http://45.76.27.130/index.php",
                        "timestamp": "2021-03-16 10:30:07"
                    },
                    {
                        "value": "http://validation.wootraining.certificacion.cl/BvCu/index.php",
                        "timestamp": "2021-03-11 08:15:45"
                    },
                    {
                        "value": "http://18.157.168.193/index.php",
                        "timestamp": "2021-03-08 15:10:09"
                    },
                    {
                        "value": "http://74.208.151.219/index.php",
                        "timestamp": "2021-03-08 14:32:32"
                    },
                    {
                        "value": "http://elovisboy.com/PL341/index.php",
                        "timestamp": "2021-03-06 06:55:09"
                    },
                    {
                        "value": "http://pa-magelang.go.id/FTP/index.php",
                        "timestamp": "2021-03-03 07:45:23"
                    },
                    {
                        "value": "http://18.197.52.125/index.php",
                        "timestamp": "2021-02-23 08:10:07"
                    },
                    {
                        "value": "http://66.175.232.221/index.php",
                        "timestamp": "2021-02-23 08:05:06"
                    },
                    {
                        "value": "http://74.208.88.51/index.php",
                        "timestamp": "2021-02-22 13:50:08"
                    },
                    {
                        "value": "http://198.251.65.112/index.php",
                        "timestamp": "2021-02-22 11:10:07"
                    },
                    {
                        "value": "http://45.153.203.81/azone/index.php",
                        "timestamp": "2021-02-22 07:35:06"
                    },
                    {
                        "value": "http://198.71.50.125/index.php",
                        "timestamp": "2021-02-21 18:20:07"
                    },
                    {
                        "value": "http://kvaka.li/1210776429.php",
                        "timestamp": "2021-02-18 18:45:21"
                    },
                    {
                        "value": "http://37.46.150.24/azone/index.php",
                        "timestamp": "2021-02-18 07:45:06"
                    },
                    {
                        "value": "http://bengallpg.com/ghsjdfbfhf/index.php",
                        "timestamp": "2021-02-12 23:00:12"
                    },
                    {
                        "value": "http://smdbaba.monster/index.php",
                        "timestamp": "2021-02-10 14:30:21"
                    },
                    {
                        "value": "http://farie-europa.com/PL341/index.php",
                        "timestamp": "2021-02-09 19:05:10"
                    },
                    {
                        "value": "http://45.137.117.222/Panel/index.php",
                        "timestamp": "2021-02-09 13:20:09"
                    },
                    {
                        "value": "http://37.46.150.191/good/index.php",
                        "timestamp": "2021-02-08 12:30:07"
                    },
                    {
                        "value": "http://josebrazuca-44072.portmap.host:44072/index.php",
                        "timestamp": "2021-02-07 07:25:06"
                    },
                    {
                        "value": "https://drsbake.com/js/t2/index.php",
                        "timestamp": "2021-02-03 18:50:25"
                    },
                    {
                        "value": "http://62.151.180.76/index.php",
                        "timestamp": "2021-02-02 14:25:07"
                    },
                    {
                        "value": "http://74.208.108.87/index.php",
                        "timestamp": "2021-02-02 09:15:09"
                    },
                    {
                        "value": "http://216.250.126.108/index.php",
                        "timestamp": "2021-02-02 09:15:08"
                    },
                    {
                        "value": "http://129.146.140.127/index.php",
                        "timestamp": "2021-02-02 07:15:06"
                    },
                    {
                        "value": "http://45.63.54.115/index.php",
                        "timestamp": "2021-02-01 19:05:08"
                    },
                    {
                        "value": "http://168.119.251.131/index.php",
                        "timestamp": "2021-02-01 19:05:07"
                    },
                    {
                        "value": "http://13.127.215.254/index.php",
                        "timestamp": "2021-02-01 19:05:06"
                    },
                    {
                        "value": "http://62.151.180.105/index.php",
                        "timestamp": "2021-02-01 14:45:06"
                    },
                    {
                        "value": "http://74.208.252.67/index.php",
                        "timestamp": "2021-02-01 12:20:06"
                    },
                    {
                        "value": "http://bopheloclub.org/europ/index.php",
                        "timestamp": "2021-01-31 09:55:07"
                    },
                    {
                        "value": "http://82.165.119.177/index.php",
                        "timestamp": "2021-01-28 16:00:09"
                    },
                    {
                        "value": "http://168.119.250.13/index.php",
                        "timestamp": "2021-01-28 14:55:06"
                    },
                    {
                        "value": "http://70.35.203.53/index.php",
                        "timestamp": "2021-01-26 12:45:07"
                    },
                    {
                        "value": "http://45.76.167.250/index.php",
                        "timestamp": "2021-01-25 19:15:06"
                    },
                    {
                        "value": "https://mymedpasstraining.com/wp/a/index.php",
                        "timestamp": "2021-01-19 12:05:24"
                    },
                    {
                        "value": "http://193.239.147.212/azone/index.php",
                        "timestamp": "2021-01-19 07:50:06"
                    },
                    {
                        "value": "http://45.137.22.102/index.php",
                        "timestamp": "2021-01-18 18:30:09"
                    },
                    {
                        "value": "http://main.kebleflooring.co.uk/index.php",
                        "timestamp": "2021-01-18 15:45:31"
                    },
                    {
                        "value": "http://66.228.39.174/index.php",
                        "timestamp": "2021-01-18 09:50:09"
                    },
                    {
                        "value": "http://139.162.75.17/index.php",
                        "timestamp": "2021-01-18 08:00:07"
                    },
                    {
                        "value": "http://al-ifah.com/PL341/index.php",
                        "timestamp": "2021-01-15 07:15:08"
                    },
                    {
                        "value": "http://pdr-acn.com/PL341/index.php",
                        "timestamp": "2021-01-13 07:45:22"
                    },
                    {
                        "value": "http://itrad3r.com/24cd/index.php",
                        "timestamp": "2021-01-12 18:10:23"
                    },
                    {
                        "value": "http://al-ifah.com/PL342/index.php",
                        "timestamp": "2021-01-11 12:55:07"
                    },
                    {
                        "value": "http://blkgrupdoom.info/scgn/index.php",
                        "timestamp": "2021-01-06 16:15:08"
                    },
                    {
                        "value": "http://wjnigh.myzen.co.uk/azo2/PL341/index.php",
                        "timestamp": "2021-01-04 07:40:32"
                    },
                    {
                        "value": "http://destrong.xyz/des/index.php",
                        "timestamp": "2020-12-17 09:25:07"
                    },
                    {
                        "value": "http://195.245.112.115/index.php",
                        "timestamp": "2022-06-01 22:43:36"
                    },
                    {
                        "value": "http://paratuseventos.cl/doc/nov16/index.php",
                        "timestamp": "2020-12-17 06:57:57"
                    },
                    {
                        "value": "http://18.184.52.107/index.php",
                        "timestamp": "2020-12-16 09:07:21"
                    },
                    {
                        "value": "http://favfav.xyz/fav/index.php",
                        "timestamp": "2020-12-15 16:51:28"
                    },
                    {
                        "value": "http://rogatech.gq/endy/index.php",
                        "timestamp": "2020-12-15 16:03:34"
                    },
                    {
                        "value": "http://45.79.153.245/index.php",
                        "timestamp": "2020-12-15 15:59:53"
                    },
                    {
                        "value": "http://158.101.17.239/index.php",
                        "timestamp": "2020-12-15 15:58:41"
                    }
                ],
                "ip:port": [
                    {
                        "value": "46.183.220.70:80",
                        "timestamp": "2023-09-26 13:36:08"
                    },
                    {
                        "value": "185.29.11.60:80",
                        "timestamp": "2023-09-26 13:36:08"
                    },
                    {
                        "value": "198.98.54.161:80",
                        "timestamp": "2023-08-30 23:48:11"
                    },
                    {
                        "value": "185.29.8.42:80",
                        "timestamp": "2023-08-07 23:48:16"
                    },
                    {
                        "value": "194.31.98.112:80",
                        "timestamp": "2022-06-02 02:52:17"
                    },
                    {
                        "value": "85.202.169.121:80",
                        "timestamp": "2022-03-14 20:05:03"
                    },
                    {
                        "value": "66.151.174.10:443",
                        "timestamp": "2021-08-05 04:01:55"
                    }
                ],
                "domain": [
                    {
                        "value": "www.mixz.shop",
                        "timestamp": "2023-09-26 13:36:11"
                    },
                    {
                        "value": "oldhorse.info",
                        "timestamp": "2023-07-02 08:57:41"
                    },
                    {
                        "value": "icanda.ac.ug",
                        "timestamp": "2023-04-15 06:46:18"
                    },
                    {
                        "value": "transal.ac.ug",
                        "timestamp": "2023-04-15 06:46:18"
                    },
                    {
                        "value": "suspam.com",
                        "timestamp": "2021-08-05 04:02:24"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "720bf6ad89bcfc3ab9ff461b572c2a34",
                        "timestamp": "2022-10-10 14:53:38"
                    },
                    {
                        "value": "C7F6D53661D5A8A9428BCE65A5798BAF",
                        "timestamp": "2022-09-27 19:34:23"
                    },
                    {
                        "value": "30bd4415b8698b02c6e39bd8f5343115",
                        "timestamp": "2022-08-08 21:46:50"
                    },
                    {
                        "value": "e0b96fab2fd0e0ccf4c67e7af0b31add",
                        "timestamp": "2021-10-25 16:05:08"
                    },
                    {
                        "value": "70ded05d874a95b1b3027c1e97b16287",
                        "timestamp": "2021-08-20 11:28:05"
                    },
                    {
                        "value": "164076414dd3be991ebc9d4d17101296",
                        "timestamp": "2021-07-30 16:31:21"
                    },
                    {
                        "value": "a5ce2653f5f74c7ba7901f79cf9932a5",
                        "timestamp": "2021-07-30 16:30:10"
                    },
                    {
                        "value": "bd9e5d5843fa83ecfd17a430b7314320",
                        "timestamp": "2021-07-03 21:34:23"
                    },
                    {
                        "value": "fdeff7b57d4be10e818d15cc03a32b24",
                        "timestamp": "2021-06-10 13:49:00"
                    },
                    {
                        "value": "497f83eb7c9601a7501a12c6a2d23842",
                        "timestamp": "2021-06-10 13:49:00"
                    },
                    {
                        "value": "2bdd55d368125b72136a39db1870bf5f",
                        "timestamp": "2021-03-25 15:30:12"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "00560a50e280b40c594bd2b6a7b2997e267df56293cdfbee9d802d545cbf61bf",
                        "timestamp": "2022-01-18 06:45:45"
                    },
                    {
                        "value": "4166d0e0b5adc0558a58722e20f0e77bdecfe25097239dcb21c4757631d0f5b9",
                        "timestamp": "2022-01-18 06:45:42"
                    },
                    {
                        "value": "1032f45da46e60c23dacd53f9bd8bc08446a771d9d3e998d0fa5310cfd3fbc5a",
                        "timestamp": "2022-01-18 06:45:39"
                    },
                    {
                        "value": "2a2ad82e6929d1bdd6ab3cde2f791cff3aae68f2e550271d3ebb53d7ddbe4e9b",
                        "timestamp": "2022-01-18 06:45:34"
                    },
                    {
                        "value": "51748bb356a713a6f8197b4f7ad7145d57c9d367e4ee92b28e8f311803301909",
                        "timestamp": "2021-12-15 13:15:35"
                    },
                    {
                        "value": "f29d59ceac2360ab6b5727973c27f67b9ccf9833f2ae01a4c3c3f761ff584f2e",
                        "timestamp": "2021-12-15 13:15:33"
                    },
                    {
                        "value": "ed58ffee46a583c177c792b56c9fc20ccd9509d125f2e3fc90c4f48de7e2c2a1",
                        "timestamp": "2021-12-15 13:15:31"
                    },
                    {
                        "value": "0c26c4bc2912317d4e104beae3e4315f7042531fa1f044ebd3da11dea4f6d974",
                        "timestamp": "2021-12-15 13:15:29"
                    },
                    {
                        "value": "d1a9da7e08c53635de16aeec63d3aaf9c6b1a062511cd850463ed66a20062360",
                        "timestamp": "2021-12-10 15:15:34"
                    },
                    {
                        "value": "3dc57dcb56f96be6067cb54322ec97aea1724c1ec8084ae7f8b1a71d140352a0",
                        "timestamp": "2021-12-10 15:15:33"
                    },
                    {
                        "value": "843757ba8b2492c592af46e8709bbc9ccbc041e09468384da6ed0c1db4a67acc",
                        "timestamp": "2021-12-10 15:15:31"
                    },
                    {
                        "value": "82e74a8a20f836a06042a1358d3b2a546513ab7439a0d5d6ea450fc229d1987e",
                        "timestamp": "2021-12-10 15:15:31"
                    },
                    {
                        "value": "7cf027733963c03bb834e4b78c0a7675023a2a1140c2ecafb7920d25e8796adb",
                        "timestamp": "2021-12-10 15:15:31"
                    },
                    {
                        "value": "99bb57010a6d85f2619de3a07eb984e0e28972c9e8cf0433d908c92e76f317c4",
                        "timestamp": "2021-12-10 15:15:29"
                    },
                    {
                        "value": "2cbccb76adf567a82d9d6fcbf7a6c02bce157e1870df149af7391b20b9fdc672",
                        "timestamp": "2021-12-10 15:15:28"
                    },
                    {
                        "value": "308a15dabdc4ce6b96dd54954a351d304f1fcb59e8c93221ba1c412bcdfd1c44",
                        "timestamp": "2021-12-10 15:15:27"
                    },
                    {
                        "value": "6d50833895b2e3eb9d6f879a6436660127c270b6a516cda0253e56a3d8b7fba0",
                        "timestamp": "2021-12-10 14:30:28"
                    },
                    {
                        "value": "ad19b8b44f57a865cdbca6c894eb109f9f2938d1971b39c12f1767263a7fdbef",
                        "timestamp": "2021-12-10 14:30:27"
                    },
                    {
                        "value": "a52f51511be77831be36bbb9eda43155c57ea2fb1653dfb25fb31972e2250e44",
                        "timestamp": "2021-12-10 14:30:26"
                    },
                    {
                        "value": "e21841343a1c7c4fef6fdb074428316618b2a42b8b6f0bd0f3ab2bb6ad5c0055",
                        "timestamp": "2021-12-10 14:30:24"
                    },
                    {
                        "value": "52096d0caa1615d72bb961b6c7503c430627b2a9a9873efb3da51cd5c55caf89",
                        "timestamp": "2021-11-23 08:00:30"
                    },
                    {
                        "value": "435518c98d1ac5f0b256a693d47902c9550822b38ea04fd6de2b9b64628f409b",
                        "timestamp": "2021-11-23 08:00:29"
                    },
                    {
                        "value": "527bc619bfdbd447a7e313221afe4df5eddb7ffed812d8f57c63bdeb76728198",
                        "timestamp": "2021-11-23 08:00:27"
                    },
                    {
                        "value": "4677d27b0e471a364003c422370bd983debebedf4b6a04f5b76be423471fdde7",
                        "timestamp": "2021-11-23 08:00:26"
                    },
                    {
                        "value": "8185bb58f4a49dc3a96da380986f7d387b8b223605c898f458d6d9b66355b9ee",
                        "timestamp": "2021-11-20 09:15:34"
                    },
                    {
                        "value": "b929fbc3ba7bf90367acf79167bb928bce45b50c257d67df3a89a076340f3f85",
                        "timestamp": "2021-11-20 09:15:32"
                    },
                    {
                        "value": "28c495032494011c1b70b68ce584a929841ba9ba0d22a83e4084e886f6db2721",
                        "timestamp": "2021-11-20 09:15:31"
                    },
                    {
                        "value": "8c404d12a512df9b290f58bba07df8c44ba7a64be99a3e64a1c57c350d4b4872",
                        "timestamp": "2021-11-20 09:15:30"
                    },
                    {
                        "value": "3b282cd60bc0c9689b4a68d2013f986e3534190042c8359be580db7004803118",
                        "timestamp": "2021-10-29 03:15:44"
                    },
                    {
                        "value": "2778e5c8e94981206b305108d42ac9c9d7be5f36eaf94cab2483120e9d3d3696",
                        "timestamp": "2021-10-29 03:15:43"
                    },
                    {
                        "value": "69f64ca4b22180560648691c2d52cfe11b253bb403663f8e92f25e0f76308dbb",
                        "timestamp": "2021-10-29 03:15:41"
                    },
                    {
                        "value": "b4edff6003f9f9c93ab200311c08c1798898da7787ddbfe48a9333646aa1b432",
                        "timestamp": "2021-10-27 23:58:28"
                    },
                    {
                        "value": "aac10de776b17f3ca3aeb885077a2d102f8bd07ae71ffd49e818cabb6a88173a",
                        "timestamp": "2021-10-27 23:58:27"
                    },
                    {
                        "value": "c553f64d683535877671acafb34597f4d27fb02afa7725620c72143a7bb42097",
                        "timestamp": "2021-10-26 19:14:16"
                    },
                    {
                        "value": "12753e984aa4edc41ac1d88b8d945f38b0f6cf423228a6bae4d458ca026d9f38",
                        "timestamp": "2021-10-26 19:14:16"
                    },
                    {
                        "value": "46a0aee0584478368d7d0f5d07941508bfab7756d3ce0f8d4317096b62c111cd",
                        "timestamp": "2021-10-25 16:03:56"
                    },
                    {
                        "value": "f3be725453067dd4fd33c93d841f8bc707334cad295708f36319294405066346",
                        "timestamp": "2021-10-29 03:15:42"
                    },
                    {
                        "value": "95d91febc45d03c1ee477c127bcbd332cd6fbce1e91105004af723594e6f0199",
                        "timestamp": "2021-10-23 00:32:54"
                    },
                    {
                        "value": "473b2f6c5dd078673de5cdf099c1c983a826537d0a6cca0e35f79af7eee471a0",
                        "timestamp": "2021-10-22 02:15:27"
                    },
                    {
                        "value": "3b8b57a0fa99b4d29b259e3641e967cbc84a314891273b56ce5bdeba30e49601",
                        "timestamp": "2021-10-22 02:15:27"
                    },
                    {
                        "value": "d88640b60a99a39f22a11731d0fc886fd2c9fdfb094f42886e6ba419025e69ec",
                        "timestamp": "2021-10-23 00:32:55"
                    },
                    {
                        "value": "92e2cc7980fc342c59860a0e6a16c73f10ee3b0caac53530121e89448933d305",
                        "timestamp": "2021-10-22 02:15:26"
                    },
                    {
                        "value": "bbabc0cb29dc697735ab4b2d4285e9bb608f992393b734b7b20d4a4ba42a75ce",
                        "timestamp": "2021-10-08 11:45:31"
                    },
                    {
                        "value": "352a416f0f48684c2694968f3752d11a98ba54b7e7739d2f91d1b49782954b07",
                        "timestamp": "2021-10-08 11:45:30"
                    },
                    {
                        "value": "e31587908889029f73855cd422d13232ae6653b59c2d1c4fb36c19118ab0cbf5",
                        "timestamp": "2021-10-08 11:45:28"
                    },
                    {
                        "value": "7a36a5c16a07ad12405d679edab62feb15ccbe0c33770b3c02af3d7678041c06",
                        "timestamp": "2021-10-08 11:45:27"
                    },
                    {
                        "value": "394c61c695af669dcfe4d3dcf73de5099ed8e7fea036dd25f45ff6d234f9547a",
                        "timestamp": "2021-10-03 08:45:31"
                    },
                    {
                        "value": "c23f6fca54db5b24cdfa147ace4444b4bbe9872a864716141f9a06854abe536e",
                        "timestamp": "2021-10-03 08:45:30"
                    },
                    {
                        "value": "558eb17bfb782279ad486d1907362e12ef80a24f78b20ccce7ed2175bc295fb5",
                        "timestamp": "2021-10-03 08:45:29"
                    },
                    {
                        "value": "fc9711175cc7f08d0da83e99973adab75b553a2af541bf0ff28f4214d5aeaf66",
                        "timestamp": "2021-10-03 08:45:29"
                    },
                    {
                        "value": "59fd177d8ed9ec3a4d49921b01a4735f1570b30fce0ea4da72ba08ab3c71c33f",
                        "timestamp": "2021-09-29 14:37:02"
                    },
                    {
                        "value": "2d7fcb87c1ac2786c319720a857328d19e7ac523396992b445fec60de47919df",
                        "timestamp": "2021-09-18 13:15:35"
                    },
                    {
                        "value": "184ecc60db3bab9b036b18fba43e4be4c83d5c969c410570398f5f70d6494207",
                        "timestamp": "2021-09-18 13:15:34"
                    },
                    {
                        "value": "5f338e06c2abb1445863f4a54471450f5c5d125fb17ed7a9e2b6621244c11923",
                        "timestamp": "2021-09-18 13:15:33"
                    },
                    {
                        "value": "2a36a5c71d0aacce228bbcd98583bdf09fd7bf08bce21d098f62a2eeb72ff38f",
                        "timestamp": "2021-09-18 13:15:33"
                    },
                    {
                        "value": "3741262cdeb955637773e8bd3523fd293bdaca536a526d49c904d059fb050ec4",
                        "timestamp": "2021-09-17 15:35:11"
                    },
                    {
                        "value": "42caa5a2e19134770914b3b33dffaceaae03a44fc52babd8abc250d7d7696945",
                        "timestamp": "2021-09-14 14:15:28"
                    },
                    {
                        "value": "7b8ffb495d71939d9dfb9b4f4b0bd9bd9d3fad675aa487e2b20129c33f877c50",
                        "timestamp": "2021-09-14 14:15:26"
                    },
                    {
                        "value": "41b54701209099a9517ae3dd625850f09eeae072268cbab7169f81cc7e2bc19c",
                        "timestamp": "2021-09-14 14:15:25"
                    },
                    {
                        "value": "b0409e5acf0d927f046c33befc48b2653ad0ee098e2d4a5764eb9af8126e539f",
                        "timestamp": "2021-09-14 14:15:24"
                    },
                    {
                        "value": "07c88db437007f63707266efdc16363c6ddc6def76cdef5e35674f3e9283e3df",
                        "timestamp": "2021-09-14 09:00:29"
                    },
                    {
                        "value": "7828eade1f971b44b11666e8f0b78ed47c70b3e228a7463bceaa249d88081411",
                        "timestamp": "2021-09-14 09:00:28"
                    },
                    {
                        "value": "1112236271fd4663eb7e5fe15cb696ef25c458227b1ca2ba1852ca8330bad17b",
                        "timestamp": "2021-09-14 09:00:27"
                    },
                    {
                        "value": "c7a0f781fe7a433f00f5b2949f3e36847bf66acdeed739309462106b2fa21df5",
                        "timestamp": "2021-09-14 09:00:26"
                    },
                    {
                        "value": "b44d518f7e7d28584657a0071834456f6d5a5b963eac1ed72da7c70916a43239",
                        "timestamp": "2021-09-11 11:45:31"
                    },
                    {
                        "value": "04cf90592acf1f6033ba299b18ef8a7c8b1ab6f356d6bb9ff33b44743fe2c787",
                        "timestamp": "2021-09-11 11:45:31"
                    },
                    {
                        "value": "6950e762e655de299bce3dd06e0d7c70496e962ff41752b5741142dbedfcfba7",
                        "timestamp": "2021-09-11 11:45:30"
                    },
                    {
                        "value": "822fbf405e2ffff77f8c3ad451e345f62fc476a6c678038c5b214badbed83c17",
                        "timestamp": "2021-09-11 11:45:30"
                    },
                    {
                        "value": "23f6bfa174f455b2f1a02f0b7ae403101a0a48fedd70bf18b2c75a04efa18531",
                        "timestamp": "2021-09-10 11:45:29"
                    },
                    {
                        "value": "ec086893dff54d9537b282d571fa7abce5e0608008021f069b493830b59aa1f5",
                        "timestamp": "2021-09-10 11:45:28"
                    },
                    {
                        "value": "53cef512d300b7cc8e28bf5961ae20ef91423f51c3d196997a356ec5ea432eed",
                        "timestamp": "2021-09-10 11:45:28"
                    },
                    {
                        "value": "abefceafcf523eefa54d0dcbf7911bd1d1e4245d223ed43297a862b3d0d78a90",
                        "timestamp": "2021-09-10 11:45:27"
                    },
                    {
                        "value": "757bf6e3803b114551566b24ce20a675c86f8db50afbef0966a82dd7f987c960",
                        "timestamp": "2021-09-02 19:15:25"
                    },
                    {
                        "value": "b594ae37dfb90a402bda0803680b455ababcc67e1add26f3c3f8f192d97dbe2a",
                        "timestamp": "2021-09-02 19:15:24"
                    },
                    {
                        "value": "93ddf61c1aa7c0b867ffbd579b9febdeed4b027d14f8b86d62f7da493706731c",
                        "timestamp": "2021-09-02 19:15:24"
                    },
                    {
                        "value": "aaeaf69dc4dd105e8e2d637a9336af389b7c3d5175421d80fabd5c91be86b665",
                        "timestamp": "2021-09-02 19:15:23"
                    },
                    {
                        "value": "fabbc81d596aa7c10665f1052bd54998d92eb88f1ae6a9c625d10d11574a2940",
                        "timestamp": "2021-09-01 23:31:00"
                    },
                    {
                        "value": "9d4a0a8ffa11fc953750c07bd6997bcd23871fe277f65b4113e197b779aa24f0",
                        "timestamp": "2021-09-01 23:30:45"
                    },
                    {
                        "value": "f32ff08f86b3070c299fb7eb2425b7e19cdad9545ea6f6e6a38bd33b8c04478d",
                        "timestamp": "2021-09-01 23:30:38"
                    },
                    {
                        "value": "fa40dc2c8055f953099d7d354ba97fbf3a5f3aa501ce95cb8cefa810b80ea5d4",
                        "timestamp": "2021-09-01 23:30:31"
                    },
                    {
                        "value": "8a820fde18a110966a32716f5ebc4ca9a991bce2e08a58620f266d5372575bcd",
                        "timestamp": "2021-08-25 00:00:36"
                    },
                    {
                        "value": "547bf6d6ed5ae181513ed653109514c73e5f50c3ea3a094bcd382fbd3c4b4bb0",
                        "timestamp": "2021-08-25 00:00:35"
                    },
                    {
                        "value": "e6bd46f02b26c3670dbe7af7baa83411c793f7765994bf40ada869a81a4d340a",
                        "timestamp": "2021-08-25 00:00:35"
                    },
                    {
                        "value": "d0b7a458e09fd14ae8476200bd5acf2fc93ea0e2fea357079a88df80e720c23d",
                        "timestamp": "2021-08-25 00:00:34"
                    },
                    {
                        "value": "abd6c1f331de27aff1e2bbc3e79856aa66e13f36ea2f0fc3cd81b914b4779077",
                        "timestamp": "2021-08-05 04:07:21"
                    },
                    {
                        "value": "871c62959e739a3796291f18a156d73f6cb16092f86e4e33a28dec191977e8ae",
                        "timestamp": "2021-07-23 12:30:32"
                    },
                    {
                        "value": "1d2ad0e9b26a1e83ea43e5c17658df821c78bf4044aa0c6d71d01452584a67b4",
                        "timestamp": "2021-07-23 12:30:31"
                    },
                    {
                        "value": "d49479f1e5b04736f8bab7ff79f8cd3574234fa244b1f414b74b1fd91f87d1fb",
                        "timestamp": "2021-07-23 12:30:31"
                    },
                    {
                        "value": "40cd463ec941b66e1f65ea9e1e9ca7ab0c0211ebc38ea7250eaa3a9012c61cf9",
                        "timestamp": "2021-07-23 12:30:31"
                    },
                    {
                        "value": "2cc476342cd37570d78bd78d54801ae2387f21d4624b27dafac4f04e580f0dbe",
                        "timestamp": "2021-07-23 12:00:34"
                    },
                    {
                        "value": "b4d5e62d37b4736fbdcb99cedde24db4901cfea27562e9bd354f719c9c89604c",
                        "timestamp": "2021-07-23 12:00:33"
                    },
                    {
                        "value": "f2ff73ab9c4381b09334cc5a279c5254d10fcd9b1edb5e39e1dd47ac60d85ad6",
                        "timestamp": "2021-07-23 12:00:33"
                    },
                    {
                        "value": "e1225c9a0753400f6a9f12263a6a56b7e2946fbe5cb48efdcd30bc3a4a81ba18",
                        "timestamp": "2021-07-23 12:00:32"
                    },
                    {
                        "value": "c5db907c35fb4f5c61325e4c1ed3baadb8957f7d53f4a41d9388dcf19177d5f7",
                        "timestamp": "2021-07-20 14:30:36"
                    },
                    {
                        "value": "9fe0e51e9faabf3d24e8a9e28df633380bd7c8f8d1b9affa92efd5422fb84b4f",
                        "timestamp": "2021-07-20 14:30:35"
                    },
                    {
                        "value": "8672fe9021578c3fecd467f214c6610a6fa3edc60f56a55fd4e4aded8518bdfb",
                        "timestamp": "2021-07-20 14:30:35"
                    },
                    {
                        "value": "32d8b8a96f27bf6dff52401327d6486d98e8ab30cef755ef6e76f123c013a27f",
                        "timestamp": "2021-07-20 14:30:35"
                    },
                    {
                        "value": "18274ec06e2d387acb6203eae3ca8acca4a79429e1029e1f86a3deb52acd4fb6",
                        "timestamp": "2021-07-12 06:00:29"
                    },
                    {
                        "value": "f84c720f53987a622ec2bd9ba8a07eb7cffe3c0a5dec7c09bd143f5737ecb37d",
                        "timestamp": "2021-07-12 06:00:29"
                    },
                    {
                        "value": "d2a935fd437b8d8895d9bae5f6eb098e0b44a7a0771f65493d23c6b433dc3e58",
                        "timestamp": "2021-07-12 06:00:28"
                    },
                    {
                        "value": "71c1cd2393e2299fc3f4176c998027da5a1e5fa312d497cc143cdb0006a02c0a",
                        "timestamp": "2021-07-12 06:00:28"
                    },
                    {
                        "value": "3447f1fc0beebcb07ea6ad6bc36049262e4274c93519bbfd1aad71699f4d5208",
                        "timestamp": "2021-07-12 06:00:27"
                    },
                    {
                        "value": "bfabca4f85e2741a8261d288f37a72ca122cc7d470496a27841f50bea84d3344",
                        "timestamp": "2021-07-12 06:00:27"
                    },
                    {
                        "value": "eee89a6f558bf84c37ccda6bb962ae6d5ecb38593ed61e3541d1ffc49e9ba8bb",
                        "timestamp": "2021-07-12 06:00:26"
                    },
                    {
                        "value": "84bb598f573a16b4eddbf50e61527dc29010ec0ead97b32e05b230b8daa82365",
                        "timestamp": "2021-07-12 06:00:26"
                    },
                    {
                        "value": "7601ff4361bb278d79e729a7346f126c809921027845e3aa35a0470467bd8d02",
                        "timestamp": "2021-07-05 22:00:29"
                    },
                    {
                        "value": "a91b451b4693f1b28634773f1ae368ef6051d124b93de7fd601e5e7e54333263",
                        "timestamp": "2021-07-05 22:00:28"
                    },
                    {
                        "value": "6c425856b3f8debfaf45bceacc60ad6c8c0aa638bd60bc20c44f5b19fa90117d",
                        "timestamp": "2021-07-05 22:00:28"
                    },
                    {
                        "value": "21043997e3afe2d69585b37937e627ae521a9d63e8e2eb30a5d86b877c8b2c84",
                        "timestamp": "2021-07-05 22:00:28"
                    },
                    {
                        "value": "fc924b8211821ca81f3848fda60e744e4dbf59c2fae116939b136cec3b3210f3",
                        "timestamp": "2021-06-28 12:30:30"
                    },
                    {
                        "value": "63224d20821cc45d3a2d0287a3ea30a43049b0724cdfb5720f1323b0099f8628",
                        "timestamp": "2021-06-28 12:30:29"
                    },
                    {
                        "value": "74f108a1e08fa3ebc3ff8e54f4950e5fa1e75a6e4a9a9968e226b31064fe8d2b",
                        "timestamp": "2021-06-28 12:30:29"
                    },
                    {
                        "value": "dde3a0acb5af6979e3f72ed3642625189521667da37534f8b60394fe02be5e97",
                        "timestamp": "2021-06-28 12:30:29"
                    },
                    {
                        "value": "c84d0af37cd32231c801b761e3546c82f44a980e9109c7c58d232310bf8df4a4",
                        "timestamp": "2021-06-24 12:30:30"
                    },
                    {
                        "value": "1264dc6b90e105f4043adcef29bfaf50686a8b4f1c2b0d29772a1d440382ff39",
                        "timestamp": "2021-06-24 12:30:29"
                    },
                    {
                        "value": "f5ec6e4d6a32b6dbc9fc056852f72a292b3623ad0a9e0cff665fb8a52dd7db11",
                        "timestamp": "2021-06-24 12:30:28"
                    },
                    {
                        "value": "7124d39ff6581badebf4f2714f66ad9ec85528217f489e6e83922bc75a6ba271",
                        "timestamp": "2021-06-24 12:30:28"
                    },
                    {
                        "value": "fdc178b4e3d9df68795dd93f12b1539f9cb7d6a4f40dd6452c2582779bb454ed",
                        "timestamp": "2021-06-22 13:00:24"
                    },
                    {
                        "value": "56fc8d3bac7eea819fdae0251685172d20034ede428098dd214a7f7252736294",
                        "timestamp": "2021-06-22 13:00:23"
                    },
                    {
                        "value": "62b1dad1c2595eeaeffbe7872d2610af98aba92b21164b1229538d140260ef6d",
                        "timestamp": "2021-06-22 13:00:22"
                    },
                    {
                        "value": "15db416a09f4be6cadb834a176679e1748fbb2599e29536caa7b615a7bcc2534",
                        "timestamp": "2021-06-22 13:00:21"
                    },
                    {
                        "value": "d43a9c39eb83b58fabc2a3d58ad0b47dc3f6642b3aa68dd4922905a66a4c4cb5",
                        "timestamp": "2021-06-14 00:00:34"
                    },
                    {
                        "value": "cd1fdb46f601a331366d5a5a9def0d60c0f930e6b0a89addc9e22b6842812b78",
                        "timestamp": "2021-06-14 00:00:33"
                    },
                    {
                        "value": "75c94c9f20c939f24dca1bfba3af53a011f0b91761139b082689d0298d73acf9",
                        "timestamp": "2021-06-14 00:00:33"
                    },
                    {
                        "value": "bfdf1359660fc571be49f2c882be39231d57414da2ad4d7b56af0351206f7216",
                        "timestamp": "2021-06-14 00:00:33"
                    },
                    {
                        "value": "fde2d10bc5f97744c05b146a4581f4f283041cedc61069af12f63f8a43290ee1",
                        "timestamp": "2021-05-29 21:30:30"
                    },
                    {
                        "value": "0e5f3ed9b67e670219a1f7bbb887b3fe0c1caca3155b49165fd728df02cb6f73",
                        "timestamp": "2021-05-29 21:30:30"
                    },
                    {
                        "value": "d9c72ce612e12173d9c2c9be2ba17d5d61d4110f724ec7b36336467eaf8f00fd",
                        "timestamp": "2021-05-29 21:30:30"
                    },
                    {
                        "value": "12e2e6d7c16b2bb27a1ccee8c2abc711decfd97a7b6c7a7981950544b4a1a5c1",
                        "timestamp": "2021-05-29 21:30:30"
                    },
                    {
                        "value": "fee418041d28861c7b1335f745efc041547e947e672aed9ff43858bb7440f701",
                        "timestamp": "2021-05-25 20:30:31"
                    },
                    {
                        "value": "92119fa7d486ff13377ece3f0877b735491ec935518ae8fdde40da30448e2ca3",
                        "timestamp": "2021-05-25 20:30:31"
                    },
                    {
                        "value": "782514ddc7b9f820da66838bf8560a7450ea746376da10ef6c06072a778f6a43",
                        "timestamp": "2021-05-25 20:30:31"
                    },
                    {
                        "value": "e0f750c932553961771bcfd87c3e2b18a7456f4712ecfe989d5fd0f676310806",
                        "timestamp": "2021-05-25 20:30:31"
                    },
                    {
                        "value": "80630626a742868947fe13b10085218667996181b51b1e3396d405ffd72d1503",
                        "timestamp": "2021-05-19 03:30:30"
                    },
                    {
                        "value": "8bd37fb5e5642a87b3cba8e7265632be3b44cb4ecf35d64c17825ef7a76de35e",
                        "timestamp": "2021-05-19 03:30:30"
                    },
                    {
                        "value": "d66f53bacd8caf94c61cbbab6e3d8dfa38b021be0459b1acdb31f7edf283b418",
                        "timestamp": "2021-05-19 03:30:30"
                    },
                    {
                        "value": "65e770f2264eca4c8dd55b99d91bf716137e49f75024bdc25e61ee53f55bcf2d",
                        "timestamp": "2021-05-19 03:30:29"
                    },
                    {
                        "value": "ba2b3a1d522b5d28d752f0d190fdc488592fb4bf156940432cc18c371efe1b54",
                        "timestamp": "2021-05-11 09:30:28"
                    },
                    {
                        "value": "8782a1ee66ae4ae02564eb47ed656f57777a924d21da5037aaa8afd6ca7ea511",
                        "timestamp": "2021-05-11 09:30:28"
                    },
                    {
                        "value": "e9049430085d3e8011de55d62f7d37781f09d4bd4591deca56d541071706086e",
                        "timestamp": "2021-05-11 09:30:28"
                    },
                    {
                        "value": "6049c21287620b9ebc1db5980c2c383ac7a5b57119cbf757a54bb5ba27645eb4",
                        "timestamp": "2021-05-11 09:30:28"
                    },
                    {
                        "value": "7f6ae023c3103bef36c98e0e2c8343777f9fb77b806290aa16e9c26721f62a9b",
                        "timestamp": "2021-04-28 14:00:26"
                    },
                    {
                        "value": "2c2011aa0c1a4f43832077975229ef2e4355c8ded2d325259f712c1c69c2c753",
                        "timestamp": "2021-04-28 14:00:26"
                    },
                    {
                        "value": "89957f203fda93c39ff56e0f80b615df42bf4ed87fd0488c07581e4e3a14bb05",
                        "timestamp": "2021-04-28 14:00:26"
                    },
                    {
                        "value": "a54ce34309c6f8184d8a051367a276ff3c10de7a0bbbea666956d96891ad6654",
                        "timestamp": "2021-04-28 14:00:26"
                    },
                    {
                        "value": "c7ce97bf28191b9f81871421f7f6fea0c86fca516d3e8706e16c0f07e9e7ed5b",
                        "timestamp": "2021-04-22 12:00:33"
                    },
                    {
                        "value": "d6bce670eedb3e82eaceb6ec24f159f3e8f805b42a2ff61c688edb686e0ff490",
                        "timestamp": "2021-04-22 12:00:33"
                    },
                    {
                        "value": "59ce85f7fb0c978fd4b266a422501474f7026ab70fbefce4261b414c96daea2c",
                        "timestamp": "2021-04-22 12:00:33"
                    },
                    {
                        "value": "f9fe8c62e7382cd9b7b1a500ba6265eb14c66f16a0c1a0fac7b1b4f809f2269f",
                        "timestamp": "2021-04-22 12:00:33"
                    },
                    {
                        "value": "280e568ab2d4b3c7c0861df01b14b2f0e3416cb67177bbacf6e1efbd3c12bf3e",
                        "timestamp": "2021-04-16 16:30:34"
                    },
                    {
                        "value": "3da9ae18ae301bced449aab90b47ea48b18b8e14a359628e4682586db849d03f",
                        "timestamp": "2021-04-16 16:30:34"
                    },
                    {
                        "value": "2a36e5bce02b9dbbaa4f25d868150caeb99ab42e452c6340360d688e29b18bdb",
                        "timestamp": "2021-04-16 16:30:34"
                    },
                    {
                        "value": "ecee61767c88bd40b652d35c7c9ca372c8020620887fc2a8cfa43d0dd9c1b038",
                        "timestamp": "2021-04-16 16:30:34"
                    },
                    {
                        "value": "2084b62c05ac13dfa48fde86f237473d35f3f169c030b829ceb49f3005b6451c",
                        "timestamp": "2021-04-14 09:32:37"
                    },
                    {
                        "value": "a4dfeae8fde1e6fa800c9a7b3074bda27f0be7a090f30b99615ff2a6ae1dcc46",
                        "timestamp": "2021-04-14 09:32:37"
                    },
                    {
                        "value": "c6971c3516ab280c7c6985ccc94062547116fcd3a7593fc84704030169c16e59",
                        "timestamp": "2021-04-14 09:32:37"
                    },
                    {
                        "value": "d5a7b27699a473bee566a2bfa88086565d67c4b0d582a839e449368d6fb4e0b5",
                        "timestamp": "2021-04-14 09:32:37"
                    },
                    {
                        "value": "9aee92df3530cb75fb37ffe332199dc0a61718a010d34fc48dbbe16fdd1b3154",
                        "timestamp": "2021-04-07 13:35:05"
                    },
                    {
                        "value": "f25528c7b818c788f0979ca27b3697f3d8b7cf3cb607fa443d374888a0b52208",
                        "timestamp": "2021-03-25 10:30:33"
                    },
                    {
                        "value": "a6007add3989a77400e4ab9120f7b80b54c70a3df5908f4ea3f1f4d37eab0bcc",
                        "timestamp": "2021-03-25 10:30:33"
                    },
                    {
                        "value": "52a0451136f10436c0c03139d900855a141880389ca57e9a1472a01dc28c2c47",
                        "timestamp": "2021-03-25 10:30:33"
                    },
                    {
                        "value": "75057e98634605cba07fd6df66647bbc4e2eec59dca9513fa9107bbab1b9eaf4",
                        "timestamp": "2021-03-25 10:30:33"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "ba910050f8b760703634cc7799ab3e1ee4206795",
                        "timestamp": "2021-10-25 16:04:37"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-26 13:36:11",
    "mitre": [
        {
            "procedure_name": "azorult",
            "procedure_code": "s0344",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0344",
            "techniques": [
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "azorult can call wtsqueryusertoken and createprocessasuser to start a new process with local system privileges.[3]"
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
                    "procedure_description": "azorult can decrypt the payload into memory, create a new suspended process of itself, then inject a decrypted payload to the new process and resume new process execution.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/002",
                    "technique_name": "access token manipulation : create process with token",
                    "technique_description": "adversaries may create a new process with an existing token to escalate privileges and bypass access controls. processes can be created with the token and resulting security context of another user using features such as createprocesswithtokenw and runas.",
                    "procedure_description": "azorult can call wtsqueryusertoken and createprocessasuser to start a new process with local system privileges.[3]"
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
                    "procedure_description": "azorult uses an xor key to decrypt content and uses base64 to decode the c2 address.[20][21]"
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
                    "procedure_description": "azorult can delete files from victim machines.[19]"
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
                    "procedure_description": "azorult can decrypt the payload into memory, create a new suspended process of itself, then inject a decrypted payload to the new process and resume new process execution.[6]"
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
                    "procedure_description": "azorult can steal credentials from the victim's browser.[12]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "azorult can steal credentials in files belonging to common software such as skype, telegram, and steam.[11]"
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
                    "procedure_description": "azorult can recursively search for files in folders and collects files from the desktop with certain extensions.[28]"
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
                    "procedure_description": "azorult can collect a list of running processes by calling createtoolhelp32snapshot.[19][20]"
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
                    "procedure_description": "azorult can check for installed software on the system under the registry key software\\microsoft\\windows\\currentversion\\uninstall.[7]"
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
                    "procedure_description": "azorult can collect the machine information, system architecture, the os version, computer name, windows product name, the number of cpu cores, video card information, and the system language.[37][38]"
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
                    "procedure_description": "azorult can collect host ip information from the victim\u2019s machine.[26]"
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
                    "procedure_description": "azorult can collect the username from the victim\u2019s machine.[19]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "azorult can collect the time zone information from the system.[10][11]"
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
                    "procedure_description": "azorult can capture screenshots of the victim\u2019s machines.[18]"
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
                    "procedure_description": "azorult can encrypt c2 traffic using xor.[6][7]"
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
                    "procedure_description": "azorult can download and execute additional files. azorult has also downloaded a ransomware payload called hermes.[44][45]"
                }
            ]
        }
    ],
    "file_name": "azorult",
    "analysis": null,
    "articles": []
};