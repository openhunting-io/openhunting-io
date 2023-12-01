var threatdata = {
    "name": "Grandoreiro",
    "alias": "Grandoreiro",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2023-10-23",
    "all_data": {
        "tool": "Grandoreiro",
        "names": [
            {
                "name": "Grandoreiro"
            }
        ],
        "description": "(segurancainformatica) Grandoreiro is a Latin American banking trojan targeting Brazil, Mexico, Spain, Peru, and has now extended to Portugal.\n\nCybercriminals attempt to compromise computers to generate revenue by exfiltrating information from victims\u2019 devices, typically banking-related information. During April and May 2020, a new Grandoreiro variant was identified. This piece of malware includes improvements in the way it is operating. The threat has been disseminating via malscam campaigns, as in the past, and the name of the victim is used as a part of the malicious attachment name, as shown below.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://seguranca-informatica.pt/the-updated-grandoreiro-malware-equipped-with-latenbot-c2-features-in-q2-2020-now-extended-to-portuguese-banks/",
            "https://www.welivesecurity.com/2020/04/28/grandoreiro-how-engorged-can-exe-get/",
            "https://www.welivesecurity.com/wp-content/uploads/2020/07/ESET_Threat_Report_Q22020.pdf",
            "https://securelist.com/the-tetrade-brazilian-banking-malware/97779/",
            "https://www.zscaler.com/blogs/security-research/grandoreiro-banking-trojan-new-ttps-targeting-various-industry-verticals"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0531/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.grandoreiro"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:grandoreiro"
        ],
        "uuid": "c4ec465b-e68f-49d7-ae46-de7f308d7723",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Grandoreiro",
            "malware_alias": null,
            "malware": "win.grandoreiro",
            "last_update": "2023-11-21 08:47:09",
            "tags": [
                "ViriBack",
                "brazil",
                "banker",
                "geo",
                "BRA",
                "Grandoreiro",
                "LatentBot"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "jghskd9kfx7.brazilsouth.cloudapp.azure.com",
                        "timestamp": "2023-11-21 08:47:09"
                    },
                    {
                        "value": "remember-and.forgot.her.name",
                        "timestamp": "2023-11-04 19:32:32"
                    },
                    {
                        "value": "wiwi.from-wi.com",
                        "timestamp": "2023-06-19 12:26:48"
                    },
                    {
                        "value": "jtvkerimftpckpf.dvrdns.org",
                        "timestamp": "2023-06-19 12:25:46"
                    },
                    {
                        "value": "hjmretmcbbhtpckpf.collegefan.org",
                        "timestamp": "2023-06-19 12:25:46"
                    },
                    {
                        "value": "bkcjtkgckvgtpckpf.collegefan.org",
                        "timestamp": "2023-06-19 12:25:46"
                    },
                    {
                        "value": "mfpretejcvptpckpf.collegefan.org",
                        "timestamp": "2023-06-19 12:25:46"
                    },
                    {
                        "value": "bjvjtmfgrettpckpf.collegefan.org",
                        "timestamp": "2023-06-19 12:25:46"
                    },
                    {
                        "value": "acqgbbmsmebbaaqag.ditchyourip.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "ljemebcsmckbaaqag.ditchyourip.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "ggamebecababaaqag.ditchyourip.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "kqagbqsaqbsbaaqag.ditchyourip.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "sgbmebgakasbaaqag.ditchyourip.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "gbzqemkbmbaaqag.dyndns-remote.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "bbagmkabgbaaqag.dyndns-remote.com",
                        "timestamp": "2023-06-19 12:25:45"
                    },
                    {
                        "value": "gojojomjwemjajoag.myeffect.net",
                        "timestamp": "2023-06-19 12:21:01"
                    },
                    {
                        "value": "topgearagainsix.uksouth.cloudapp.azure.com",
                        "timestamp": "2023-03-29 18:40:31"
                    },
                    {
                        "value": "restauranterota152.brazilsouth.cloudapp.azure.com",
                        "timestamp": "2023-03-29 18:40:31"
                    },
                    {
                        "value": "wea86.joaomiguelcunha.one",
                        "timestamp": "2022-11-23 14:29:50"
                    },
                    {
                        "value": "lwat8.guilhermeduarte.xyz",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "yniusj.pauloramos.mom",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "w6oacr.fernandocosta.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "waa9.guilhermeduarte.xyz",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "p1iocr.luizotaviomoraes.mom",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "miousj.davilucassilveira.mom",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "yneia4.davizuccapires.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "wsueew.fernandocosta.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "e7oexr.vitorhugodaluz.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "a8eiwb.ryandacunha.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "hcaee6.davizuccapires.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "wea36.davialmeida.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "hwajp.davilucassilveira.mom",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "wart.fernandocosta.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "puaejd.enzogabrielpereira.xyz",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "djuuup.daviluccadapaz.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "0fuuyo.enzogabrielpereira.xyz",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "wat3.pauloramos.mom",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "waea.kaiquenascimento.one",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "u2iifr.guilhermeduarte.xyz",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "ewaes8.ryandacunha.pics",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "fjaer.davilucasmoreira.xyz",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "wata.davizuccapires.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "dguaiu.lorenzocardoso.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "wea82.kaiquenascimento.one",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "37eiwb.thomassilveira.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "u5oaer.thomassilveira.cfd",
                        "timestamp": "2022-11-23 14:29:49"
                    },
                    {
                        "value": "5foaer.lorenzocardoso.cfd",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "r6uedr.joaomiguelcunha.one",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "mbawr.luizotaviomoraes.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "h4ii2d.fernandocosta.pics",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "wat8.enzogabrielpereira.xyz",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "49uubr.davilucasmoreira.xyz",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "waa7.thomassilveira.cfd",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "t4ouer.davilucasmoreira.xyz",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "9haier.kaiquenascimento.one",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "wteoyh.davilucassilveira.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "6suaer.ryandacunha.pics",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "jbawr.rafaeldarosa.xyz",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "raipb.emanuellopes.one",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "4kaaer.lorenzocardoso.cfd",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "wa91.thomassilveira.cfd",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "fvaaee.davialmeida.pics",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "nooar2.rodrigomonteiro.one",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "wat3.davilucasmoreira.xyz",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "wa37.luizotaviomoraes.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "vmaee.noahdaconceicao.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "pha3j.noahdaconceicao.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "4daaer.emanuellopes.one",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "39eikc.rodrigomonteiro.one",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "dkaew.rafaeldarosa.xyz",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "r9ou7j.ryandacunha.pics",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "pyaivm.davilucassilveira.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "eta5f.davizuccapires.cfd",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "4yiu7f.pauloramos.mom",
                        "timestamp": "2022-11-23 14:29:48"
                    },
                    {
                        "value": "dwaeqf.pauloramos.mom",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "96iirn.daviluccadapaz.cfd",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "9ja9k.rafaeldarosa.xyz",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "0guuua.vitorhugodaluz.pics",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "65iov4.luizotaviomoraes.mom",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "95iir4.emanuellopes.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "96iit4.vitorhugodaluz.pics",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "niuajc.vitorhugodaluz.pics",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "eoiar6.noahdaconceicao.mom",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "5haiwe.emanuellopes.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "nhaee.noahdaconceicao.mom",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "51oocm.davialmeida.pics",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "nwadi.rafaeldarosa.xyz",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "t8io7f.lorenzocardoso.cfd",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "rtaefe.joaomiguelcunha.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "waet.kaiquenascimento.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "beai3f.rodrigomonteiro.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "wraa2d.guilhermeduarte.xyz",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "dkawt.joaomiguelcunha.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "bwagi.daviluccadapaz.cfd",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "cmii1s.rodrigomonteiro.one",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "c4eiw7.thomassilveira.cfd",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "a8eekt.davialmeida.pics",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "wata.daviluccadapaz.cfd",
                        "timestamp": "2022-11-23 14:29:47"
                    },
                    {
                        "value": "lz-v2.dynalias.com",
                        "timestamp": "2021-08-10 18:27:42"
                    },
                    {
                        "value": "ximbocadaparafuseta.com",
                        "timestamp": "2021-08-10 18:27:42"
                    }
                ],
                "ip:port": [
                    {
                        "value": "18.230.74.51:4318",
                        "timestamp": "2023-11-04 19:32:33"
                    },
                    {
                        "value": "18.230.74.51:4899",
                        "timestamp": "2023-11-04 19:32:32"
                    },
                    {
                        "value": "15.228.57.146:30722",
                        "timestamp": "2023-06-19 12:27:15"
                    },
                    {
                        "value": "15.229.47.198:9719",
                        "timestamp": "2023-06-19 12:25:03"
                    },
                    {
                        "value": "18.231.154.55:56590",
                        "timestamp": "2023-06-19 12:25:03"
                    },
                    {
                        "value": "15.228.233.242:9719",
                        "timestamp": "2023-06-19 12:21:37"
                    },
                    {
                        "value": "51.77.193.20:80",
                        "timestamp": "2023-02-27 23:48:20"
                    },
                    {
                        "value": "185.191.228.227:80",
                        "timestamp": "2023-01-01 23:48:16"
                    },
                    {
                        "value": "192.95.6.196:80",
                        "timestamp": "2023-01-01 23:48:16"
                    },
                    {
                        "value": "172.96.137.108:54242",
                        "timestamp": "2021-04-16 13:29:42"
                    }
                ],
                "url": [
                    {
                        "value": "https://nfeconsumidor.s3.ir-thr-at1.arvanstorage.ir/Nfe-Faturada19042023exp.html",
                        "timestamp": "2023-04-20 08:14:04"
                    },
                    {
                        "value": "https://nfefaturada19042023.s3.ir-thr-at1.arvanstorage.ir/NF-emitir.pdf.htm",
                        "timestamp": "2023-04-20 08:14:03"
                    },
                    {
                        "value": "https://topgearagainsix.uksouth.cloudapp.azure.com/tampler/marcador.php",
                        "timestamp": "2023-03-29 18:39:53"
                    },
                    {
                        "value": "http://fac-conectorfiscal.servebeer.com/fac/",
                        "timestamp": "2022-12-01 00:17:35"
                    },
                    {
                        "value": "https://c8n5v0m1-y8c29n5-t73n919.s3.amazonaws.com/N0s01ns.html",
                        "timestamp": "2022-06-21 10:50:03"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "62b4caf7036c0d416e660c3a693ce7eb47e82d4330786ecd833631d5f38b4a9a",
                        "timestamp": "2022-01-07 22:05:18"
                    },
                    {
                        "value": "a16c5b5e9d59ae6a194ed138e709d1e0f931bb1b3f6525e4b8c227711cb7c46d",
                        "timestamp": "2022-01-07 22:05:18"
                    },
                    {
                        "value": "9b976aba7e845b4741472a0bd39094e65ee4010d303974daee55c67568721427",
                        "timestamp": "2021-04-16 13:31:58"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-21 08:47:09",
    "file_name": "grandoreiro",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/copacabana-barcelona-cross-continental-threat-brazilian-banking-malware",
            "date": "2023-10-23",
            "organization": "Proofpoint",
            "author": "Jared Peck",
            "title": "From Copacabana to Barcelona: The Cross-Continental Threat of Brazilian Banking Malware",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://www.metabaseq.com/grandoreiro-banking-malware-deciphering-the-dga/",
            "date": "2023-01-13",
            "organization": "Metabase Q",
            "author": "Leonardo Beltran",
            "title": "Grandoreiro banking malware: deciphering the DGA",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/grandoreiro-banking-trojan-new-ttps-targeting-various-industry-verticals",
            "date": "2022-08-18",
            "organization": "Zscaler",
            "author": "Niraj Shivtarkar",
            "title": "Grandoreiro Banking Trojan with New TTPs Targeting Various Industry Verticals",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://www.incibe.es/sites/default/files/contenidos/estudios/doc/incibe-cert_study_grandoreiro_analysis_2022_v1.pdf",
            "date": "2022-06-02",
            "organization": "INCIBE-CERT",
            "author": "INCIBE",
            "title": "Grandoreiro analysis study",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/grandoreiro-banking-malware-resurfaces-for-tax-season",
            "date": "2022-05-26",
            "organization": "Trustwave",
            "author": "Bernard Bautista",
            "title": "Grandoreiro Banking Malware Resurfaces for Tax Season",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://therecord.media/spain-arrests-16-for-distributing-the-mekotio-and-grandoreiro-banking-trojans/",
            "date": "2021-07-14",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Spain arrests 16 for working with the Mekotio and Grandoreiro malware gangs",
            "categories": [
                "Grandoreiro",
                "Mekotio"
            ]
        },
        {
            "data_url": "http://www.interior.gob.es/prensa/noticias/-/asset_publisher/GHU8Ap6ztgsg/content/id/13552853",
            "date": "2021-07-14",
            "organization": "Guardia Civil",
            "author": "Guardia Civil",
            "title": "The Civil Guard dismantles an important network dedicated to committing scams through the Internet",
            "categories": [
                "Grandoreiro",
                "Mekotio"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2020/07/ESET_Threat_Report_Q22020.pdf",
            "date": "2020-07-29",
            "organization": "ESET Research",
            "author": "welivesecurity",
            "title": "THREAT REPORT Q2 2020",
            "categories": [
                "DEFENSOR ID",
                "HiddenAd",
                "Bundlore",
                "Pirrit",
                "Agent.BTZ",
                "Cerber",
                "ClipBanker",
                "CROSSWALK",
                "Cryptowall",
                "CTB Locker",
                "DanaBot",
                "Dharma",
                "Formbook",
                "Gandcrab",
                "Grandoreiro",
                "Houdini",
                "ISFB",
                "LockBit",
                "Locky",
                "Mailto",
                "Maze",
                "Microcin",
                "Nemty",
                "NjRAT",
                "Phobos",
                "PlugX",
                "Pony",
                "REvil",
                "Socelars",
                "STOP",
                "Tinba",
                "TrickBot",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://securelist.com/the-tetrade-brazilian-banking-malware/97779/",
            "date": "2020-07-14",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "The Tetrade: Brazilian banking malware goes global",
            "categories": [
                "Astaroth",
                "Grandoreiro",
                "Melcoz"
            ]
        },
        {
            "data_url": "https://seguranca-informatica.pt/the-updated-grandoreiro-malware-equipped-with-latenbot-c2-features-in-q2-2020-now-extended-to-portuguese-banks",
            "date": "2020-05-26",
            "organization": "Seguranca Informatica",
            "author": "Pedro Tavares",
            "title": "The updated Grandoreiro Malware equipped with latenbot-C2 features in Q2 2020 now extended to Portuguese banks",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/04/28/grandoreiro-how-engorged-can-exe-get/",
            "date": "2020-04-28",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Grandoreiro: How engorged can an EXE get?",
            "categories": [
                "Grandoreiro"
            ]
        },
        {
            "data_url": "https://blueliv.com/resources/reports/MiniReport-Blueliv-Bancos-ESP-LAT.pdf",
            "date": "2019-11-20",
            "organization": "Blueliv",
            "author": "Blueliv Team",
            "title": "Malware Campaign Targeting LATAM & Spanish Banks",
            "categories": [
                "Grandoreiro"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "grandoreiro",
            "procedure_code": "s0531",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0531",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "grandoreiro has used compromised websites and google ads to bait victims into downloading its installer.[29][30]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "grandoreiro has been spread via malicious links embedded in e-mails.[54][55]"
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
                    "procedure_description": "grandoreiro can use vbscript to execute malicious code.[15][62]"
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
                    "procedure_description": "grandoreiro can execute through the winexec api.[85]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "grandoreiro has used malicious links to gain execution on victim machines.[41][42]"
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
                    "procedure_description": "grandoreiro has infected victims via malicious attachments.[104]"
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
                    "procedure_description": "grandoreiro can use run keys and create link files in the startup folder for persistence.[108][109]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "grandoreiro can write or modify browser shortcuts to enable launching of malicious browser extensions.[15]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1176",
                    "technique_link": "https://attack.mitre.org/techniques/T1176",
                    "technique_name": "browser extensions",
                    "technique_description": "adversaries may abuse internet browser extensions to establish persistent access to victim systems. browser extensions or plugins are small programs that can add functionality and customize aspects of internet browsers. they can be installed directly or through a browser's app store and generally have access and permissions to everything that the browser can access.",
                    "procedure_description": "grandoreiro can use malicious browser extensions to steal cookies and other user information.[12]"
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
                    "procedure_description": "grandoreiro can bypass uac by registering as the default handler for .msc files.[34]"
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
                    "procedure_description": "grandoreiro can use run keys and create link files in the startup folder for persistence.[108][109]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "grandoreiro can write or modify browser shortcuts to enable launching of malicious browser extensions.[15]"
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
                    "procedure_description": "grandoreiro can bypass uac by registering as the default handler for .msc files.[34]"
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
                    "procedure_description": "grandoreiro can decrypt its encrypted internal strings.[101]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1222.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1222/001",
                    "technique_name": "file and directory permissions modification : windows file and directory permissions modification",
                    "technique_description": "adversaries may modify file or directory permissions/attributes to evade access control lists (acls) and access protected files. file and directory permissions are commonly managed by acls configured by the file or directory owner, or users with the appropriate permissions. file and directory acl implementations vary by platform, but generally explicitly designate which users or groups can perform which actions (read, write, execute, etc.).",
                    "procedure_description": "grandoreiro can modify the binary acl to prevent security tools from running.[8]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "grandoreiro can hook apis, kill processes, break file system paths, and change acls to prevent security tools from running.[39]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "grandoreiro can block the deibold warsaw gas tecnologia security tool at the firewall level.[12]"
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
                    "procedure_description": "grandoreiro can delete .lnk files created in the startup folder.[88]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "grandoreiro has named malicious browser extensions and update files to appear legitimate.[67][68]"
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
                    "procedure_description": "grandoreiro can modify the registry to store its configuration at hkcu\\software\\ under frequently changing names including %username% and tooltech-rm.[65]"
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
                    "procedure_description": "the grandoreiro payload has been delivered encrypted with a custom xor-based algorithm and also as a base64-encoded zip file.[39][140][140]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "grandoreiro has added bmp images to the resources section of its portable executable (pe) file increasing each binary to at least 300mb in size.[21]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/011",
                    "technique_name": "obfuscated files or information : fileless storage",
                    "technique_description": "adversaries may store data in \"fileless\" formats to conceal malicious activity from defenses. fileless storage can be broadly defined as any format other than a file. common examples of non-volatile fileless storage include the windows registry, event logs, or wmi repository.",
                    "procedure_description": "grandoreiro can store its configuration in the registry at hkcu\\software\\ under frequently changing names including %username% and tooltech-rm.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "grandoreiro can use msi files to execute dlls.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "grandoreiro can detect vmware via its i/o port and virtual pc via the vpcext instruction.[25]"
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
                    "procedure_description": "grandoreiro can steal cookie data and credentials from google chrome.[28][29]"
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
                    "procedure_description": "grandoreiro can log keystrokes on the victim's machine.[74]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1539",
                    "technique_link": "https://attack.mitre.org/techniques/T1539",
                    "technique_name": "steal web session cookie",
                    "technique_description": "an adversary may steal web application or service session cookies and use them to gain access to web applications or internet services as an authenticated user without needing credentials. web applications and services often use session cookies as an authentication token after a user has authenticated to a website.",
                    "procedure_description": "grandoreiro can steal the victim's cookies to use for duplicating the active session from another device.[11]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/003",
                    "technique_name": "account discovery : email account",
                    "technique_description": "adversaries may attempt to get a listing of email addresses and accounts. adversaries may try to dump exchange address lists such as global address lists (gals).",
                    "procedure_description": "grandoreiro can parse outlook .pst files to extract e-mail addresses.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "grandoreiro can identify installed security tools based on window names.[2]"
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
                    "procedure_description": "grandoreiro can identify installed security tools based on process names.[117]"
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
                    "procedure_description": "grandoreiro can list installed security products including the trusteer and diebold warsaw gas tecnologia online banking protections.[49][49]"
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
                    "procedure_description": "grandoreiro can collect the computer name and os version from a compromised host.[148]"
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
                    "procedure_description": "grandoreiro can determine the ip and physical location of the compromised host via ipinfo.[94]"
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
                    "procedure_description": "grandoreiro can collect the username from the victim's machine.[75]"
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
                    "procedure_description": "grandoreiro can determine the time on the victim machine via ipinfo.[39]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "grandoreiro can detect vmware via its i/o port and virtual pc via the vpcext instruction.[25]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1185",
                    "technique_link": "https://attack.mitre.org/techniques/T1185",
                    "technique_name": "browser session hijacking",
                    "technique_description": "adversaries may take advantage of security vulnerabilities and inherent functionality in browser software to change content, modify user-behaviors, and intercept information as part of various browser session hijacking techniques.",
                    "procedure_description": "grandoreiro can monitor browser activity for online banking actions and display full-screen overlay images to block user access to the intended site or present additional data fields.[11][12][13]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "grandoreiro can capture clipboard data from a compromised host.[24]"
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
                    "procedure_description": "grandoreiro can log keystrokes on the victim's machine.[74]"
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
                    "procedure_description": "grandoreiro has the ability to use http in c2 communications.[145][146]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "grandoreiro can use a dga for hiding c2 addresses, including use of an algorithm with a user-specific key that changes daily.[19][20]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "grandoreiro can use ssl in c2 communication.[24]"
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
                    "procedure_description": "grandoreiro can download its second stage from a hardcoded url within the loader's code.[203][204]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "grandoreiro can obtain c2 information from google docs.[2]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "grandoreiro can utilize web services including google sites to send and receive c2 data.[29][30]"
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
                    "procedure_description": "grandoreiro can send data it retrieves to the c2 server.[54]"
                }
            ]
        }
    ]
};