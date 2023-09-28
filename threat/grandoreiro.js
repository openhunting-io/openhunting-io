var threatdata = {
    "name": "Grandoreiro",
    "alias": "Grandoreiro",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2022-12-30",
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
            "last_update": "2023-06-19 12:27:15",
            "tags": [
                "ViriBack",
                "BRA",
                "LatentBot",
                "banker",
                "geo",
                "Grandoreiro",
                "brazil"
            ],
            "ioc": {
                "ip:port": [
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
                "domain": [
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
    "last_ioc_update": "2023-06-19 12:27:15",
    "mitre": [],
    "file_name": "grandoreiro",
    "analysis": null
};