var threatdata = {
    "name": "Bisonal",
    "alias": "Bisonal, Korlia",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration, Downloader",
    "modified": "2020-08-14",
    "all_data": {
        "tool": "Bisonal",
        "names": [
            {
                "name": "Bisonal"
            },
            {
                "name": "Korlia"
            }
        ],
        "description": "(Palo Alto) In early May, Unit 42 discovered an attack campaign against at least one defense company in Russia and one unidentified organization in South Korea delivering a variant of Bisonal malware. While not previously publicly documented, the variant has been in the wild since at least 2014. There are three primary differences between it and older Bisonal malware including a different cipher and encryption for C2 communication, and a large rewrite of the code for both network communication and maintaining persistence. To date, we have only collected 14 samples of this variant, indicating it may be sparingly used. The adversary behind these attacks lured the targets into launching the Microsoft Windows executable malware by masquerading it as a PDF file (using a fake PDF icon) and reusing publicly available data for the decoy PDF file\u2019s contents.\n\nAttacks using Bisonal have been blogged about in the past. In 2013, both COSEINC and FireEye revealed attacks using Bisonal against Japanese organizations. In October 2017, AhnLab published a report called \u201cOperation Bitter Biscuit,\u201d an attack campaign against South Korea, Japan, India and Russia using Bisonal and its successors, Bioazih and Dexbia. We believe it is likely these tools are being used by one group of attackers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-bisonal-malware-used-attacks-russia-south-korea/",
            "https://camal.coseinc.com/publish/2013Bisonal.pdf",
            "https://www.rsaconference.com/writable/presentations/file_upload/cle-t04_final_v1.pdf",
            "https://blog.talosintelligence.com/2020/03/bisonal-10-years-of-play.html",
            "https://securitykitten.github.io/2014/11/25/curious-korlia.html",
            "https://securelist.com/cactuspete-apt-groups-updated-bisonal-backdoor/97962/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0268/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.korlia"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:bisonal"
        ],
        "uuid": "c23db213-667e-48ca-ae9f-c19c503762ef",
        "last-card-change": "2020-08-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Bisonal",
            "malware_alias": null,
            "malware": "win.bisonal",
            "last_update": "2023-09-20 07:36:22",
            "tags": [
                "TAG-74",
                "APT"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "kybook.viewdns.net",
                        "timestamp": "2023-09-20 07:36:22"
                    },
                    {
                        "value": "leader.gotdns.ch",
                        "timestamp": "2023-09-20 07:35:56"
                    },
                    {
                        "value": "likms.hopto.org",
                        "timestamp": "2023-09-20 07:35:56"
                    },
                    {
                        "value": "logindaums.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:55"
                    },
                    {
                        "value": "loginsdaum.viewdns.net",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "mafolog.serveminecraft.net",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "mailplug.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "minjoo2.servehttp.com",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "mintaek.bounceme.net",
                        "timestamp": "2023-09-20 07:35:53"
                    },
                    {
                        "value": "munjanara.servehttp.com",
                        "timestamp": "2023-09-20 07:35:52"
                    },
                    {
                        "value": "pattern.webhop.me",
                        "timestamp": "2023-09-20 07:35:52"
                    },
                    {
                        "value": "necgo.serveblog.net",
                        "timestamp": "2023-09-20 07:35:50"
                    },
                    {
                        "value": "pixoneer.myvnc.com",
                        "timestamp": "2023-09-20 07:35:50"
                    },
                    {
                        "value": "plomacy.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:50"
                    },
                    {
                        "value": "proeso.servehttp.com",
                        "timestamp": "2023-09-20 07:35:49"
                    },
                    {
                        "value": "prparty.webhop.me",
                        "timestamp": "2023-09-20 07:35:48"
                    },
                    {
                        "value": "puacgo1.servemp3.com",
                        "timestamp": "2023-09-20 07:35:48"
                    },
                    {
                        "value": "saevit.servebeer.com",
                        "timestamp": "2023-09-20 07:35:47"
                    },
                    {
                        "value": "safety.viewdns.net",
                        "timestamp": "2023-09-20 07:35:47"
                    },
                    {
                        "value": "samgiblue.servegame.com",
                        "timestamp": "2023-09-20 07:35:46"
                    },
                    {
                        "value": "sarang.serveminecraft.net",
                        "timestamp": "2023-09-20 07:35:45"
                    },
                    {
                        "value": "satreci.bounceme.net",
                        "timestamp": "2023-09-20 07:35:45"
                    },
                    {
                        "value": "sejonglog.hopto.org",
                        "timestamp": "2023-09-20 07:35:45"
                    },
                    {
                        "value": "signga.redirectme.net",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "skparty.myonlineportal.org",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "steering.viewdns.net",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "stjpmsko.serveblog.net",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "themiujoo.viewdns.net",
                        "timestamp": "2023-09-20 07:35:43"
                    },
                    {
                        "value": "surveymonkey.myddns.me",
                        "timestamp": "2023-09-20 07:35:42"
                    },
                    {
                        "value": "tsuago.servehalflife.com",
                        "timestamp": "2023-09-20 07:35:42"
                    },
                    {
                        "value": "tsuagos.servehalflife.com",
                        "timestamp": "2023-09-20 07:35:42"
                    },
                    {
                        "value": "unipedu.servebeer.com",
                        "timestamp": "2023-09-20 07:35:41"
                    },
                    {
                        "value": "visdpaka.servemp3.com",
                        "timestamp": "2023-09-20 07:35:41"
                    },
                    {
                        "value": "visual.webhop.me",
                        "timestamp": "2023-09-20 07:35:40"
                    },
                    {
                        "value": "wwl1764.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:40"
                    },
                    {
                        "value": "anrnet.servegame.com",
                        "timestamp": "2023-09-20 07:35:37"
                    },
                    {
                        "value": "alleyk.onthewifi.com",
                        "timestamp": "2023-09-20 07:35:36"
                    },
                    {
                        "value": "asheepa.sytes.net",
                        "timestamp": "2023-09-20 07:35:36"
                    },
                    {
                        "value": "attachdaum.servecounterstrike.com",
                        "timestamp": "2023-09-20 07:35:35"
                    },
                    {
                        "value": "attachmaildaum.serveblog.net",
                        "timestamp": "2023-09-20 07:35:35"
                    },
                    {
                        "value": "attachmaildaum.servecounterstrike.com",
                        "timestamp": "2023-09-20 07:35:34"
                    },
                    {
                        "value": "bizmeka.viewdns.net",
                        "timestamp": "2023-09-20 07:35:34"
                    },
                    {
                        "value": "bucketnec.bounceme.net",
                        "timestamp": "2023-09-20 07:35:34"
                    },
                    {
                        "value": "eduin21.zapto.org",
                        "timestamp": "2023-09-20 07:34:46"
                    },
                    {
                        "value": "chsoun.serveftp.com",
                        "timestamp": "2023-09-20 07:34:45"
                    },
                    {
                        "value": "ckstar.zapto.org",
                        "timestamp": "2023-09-20 07:34:45"
                    },
                    {
                        "value": "daecheol.myvnc.com",
                        "timestamp": "2023-09-20 07:34:44"
                    },
                    {
                        "value": "eburim.viewdns.net",
                        "timestamp": "2023-09-20 07:34:43"
                    },
                    {
                        "value": "elecinfonec.servehalflife.com",
                        "timestamp": "2023-09-20 07:34:43"
                    },
                    {
                        "value": "foodlab.hopto.org",
                        "timestamp": "2023-09-20 07:34:43"
                    },
                    {
                        "value": "finance.my-homeip.com",
                        "timestamp": "2023-09-20 07:34:42"
                    },
                    {
                        "value": "formsgle.freedynamicdns.net",
                        "timestamp": "2023-09-20 07:34:42"
                    },
                    {
                        "value": "formsgle.freedynamicdns.org",
                        "timestamp": "2023-09-20 07:34:41"
                    },
                    {
                        "value": "fresh.servepics.com",
                        "timestamp": "2023-09-20 07:34:41"
                    },
                    {
                        "value": "global.freedynamicdns.net",
                        "timestamp": "2023-09-20 07:34:40"
                    },
                    {
                        "value": "global.freedynamicdns.org",
                        "timestamp": "2023-09-20 07:34:40"
                    },
                    {
                        "value": "hairouni.serveblog.net",
                        "timestamp": "2023-09-20 07:34:39"
                    },
                    {
                        "value": "hamonsoft.serveblog.net",
                        "timestamp": "2023-09-20 07:34:39"
                    },
                    {
                        "value": "hanseo1.hopto.org",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "harvest.my-homeip.net",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "hometax.onthewifi.com",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "hwarang.myddns.me",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "jaminss.viewdns.net",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "janara.freedynamicdns.org",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "jeoash.servemp3.com",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "jstreco.myftp.biz",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "kanager.bounceme.net",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "kcgselect.servehalflife.com",
                        "timestamp": "2023-09-20 07:34:32"
                    },
                    {
                        "value": "kjmacgk.ddnsking.com",
                        "timestamp": "2023-09-20 07:34:32"
                    },
                    {
                        "value": "kookmina.servecounterstrike.com",
                        "timestamp": "2023-09-20 07:34:32"
                    },
                    {
                        "value": "ksd22.myddns.me",
                        "timestamp": "2023-09-20 07:34:30"
                    },
                    {
                        "value": "kumohhic.viewdns.net",
                        "timestamp": "2023-09-20 07:34:30"
                    }
                ]
            }
        },
        {
            "malware_printable": "Korlia",
            "malware_alias": "Bisonal",
            "malware": "win.korlia",
            "last_update": "2021-03-11 08:22:12",
            "tags": [],
            "ioc": {
                "ip:port": [
                    {
                        "value": "158.247.214.154:80",
                        "timestamp": "2021-03-11 08:22:12"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-20 07:36:22",
    "mitre": [],
    "file_name": "bisonal",
    "analysis": null
};