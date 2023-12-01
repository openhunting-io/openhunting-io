var threatdata = {
    "name": "Formbook",
    "alias": "Formbook, win.xloader",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer, Credential stealer",
    "modified": "2023-07-06",
    "all_data": {
        "tool": "Formbook",
        "names": [
            {
                "name": "Formbook"
            },
            {
                "name": "win.xloader"
            }
        ],
        "description": "(FireEye) FormBook is a data stealer, but not a full-fledged banker (banking malware). It does not currently have any extensions or plug-ins. Its capabilities include:\n\n\u2022 Key logging\n\u2022 Clipboard monitoring\n\u2022 Grabbing HTTP/HTTPS/SPDY/HTTP2 forms and network requests\n\u2022 Grabbing passwords from browsers and email clients\n\u2022 Screenshots\n\nFormBook can receive the following remote commands from the C2 server:\n\n\u2022 Update bot on host system\n\u2022 Download and execute file\n\u2022 Remove bot from host system\n\u2022 Launch a command via ShellExecute\n\u2022 Clear browser cookies\n\u2022 Reboot system\n\u2022 Shutdown system\n\u2022 Collect passwords and create a screenshot\n\u2022 Download and unpack ZIP archive",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/10/formbook-malware-distribution-campaigns.html",
            "http://blog.inquest.net/blog/2018/06/22/a-look-at-formbook-stealer/",
            "https://www.peerlyst.com/posts/how-to-understand-formbook-a-new-malware-as-a-service-sudhendu",
            "http://cambuz.blogspot.de/2016/06/form-grabber-2016-cromeffoperathunderbi.html",
            "https://www.arbornetworks.com/blog/asert/formidable-formbook-form-grabber/",
            "https://thisissecurity.stormshield.com/2018/03/29/in-depth-formbook-malware-analysis-obfuscation-and-process-injection/",
            "http://www.vkremez.com/2018/01/lets-learn-dissecting-formbook.html",
            "https://www.virusbulletin.com/virusbulletin/2019/01/vb2018-paper-inside-formbook-infostealer/",
            "https://www.botconf.eu/wp-content/uploads/2018/12/2018-R-Jullian-In-depth-Formbook-Malware-Analysis.pdf",
            "https://www.peerlyst.com/posts/how-to-analyse-formbook-a-new-malware-as-a-service-sudhendu?trk=explore_page_resources_recent",
            "https://blog.talosintelligence.com/2018/06/my-little-formbook.html",
            "https://www.fortinet.com/blog/threat-research/deep-analysis-new-formbook-variant-delivered-phishing-campaign-part-I",
            "https://www.fortinet.com/blog/threat-research/deep-analysis-formbook-new-variant-delivered-phishing-campaign-part-ii",
            "https://www.fortinet.com/blog/threat-research/deep-analysis-formbook-new-variant-delivered-in-phishing-campaign-part-iii",
            "https://research.checkpoint.com/2021/top-prevalent-malware-with-a-thousand-campaigns-migrates-to-macos/",
            "https://www.trendmicro.com/en_us/research/21/i/formbook-adds-latest-office-365-0-day-vulnerability-cve-2021-404.html",
            "https://www.cyfirma.com/outofband/formbook-malware-technical-analysis/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.formbook"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:FormBook"
        ],
        "uuid": "31818036-6fd3-4bb1-8ce9-99105a83c6e5",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Formbook",
            "malware_alias": "win.xloader",
            "malware": "win.formbook",
            "last_update": "2023-11-08 16:17:01",
            "tags": [
                "exe",
                "BitRAT",
                "Xloader",
                "pzb5",
                "cloudflare",
                "US",
                "rtf",
                "Formbook",
                "8o3b",
                "xmrig",
                "dropped-by-GuLoader",
                "s0s2",
                "DMG",
                "malspam",
                "c2",
                "FormBook",
                "\u4e0d\u5be9\u30e1\u30fc\u30eb",
                "gh0n",
                "stealer",
                "TempleLoader",
                "Guloader",
                "xloader",
                "formbook",
                "nqs9",
                "opendir",
                "qugo"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "zang1.almashreaq.top",
                        "timestamp": "2023-11-08 16:17:01"
                    },
                    {
                        "value": "vrezvrez.com",
                        "timestamp": "2023-09-21 15:11:18"
                    },
                    {
                        "value": "ryandeby.com",
                        "timestamp": "2023-09-21 15:11:15"
                    },
                    {
                        "value": "alienzouks.com",
                        "timestamp": "2023-09-21 15:11:14"
                    },
                    {
                        "value": "globalaspect.life",
                        "timestamp": "2023-05-16 09:54:27"
                    },
                    {
                        "value": "primemart.life",
                        "timestamp": "2023-04-11 18:40:04"
                    },
                    {
                        "value": "anpaijia.website",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "carspace.club",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "ana-verie.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "kfoto.online",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "chrisandfrances.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "uniteddividinghands.net",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "4152.uk",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "jualan.email",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "90adbazi.xyz",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "diy-alice.co.uk",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "themetropolispta.africa",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "dart-z.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "amarresamorososperupactado.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "clintprow.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "barbershoploft.ru",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "grainespotager.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "downhomecoastal.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "asos-boost.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "goldenfestivals.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "activ8brace.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "grunge.mom",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "livingsouthshore.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "armormediia.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "liuyao168.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "mookaitejasper.co.uk",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "hewittstoneoutsourcing.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "bacteriophage.asia",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "awoflo.club",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "anzpapimi.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "jessicamorimando.com",
                        "timestamp": "2023-04-03 19:31:55"
                    },
                    {
                        "value": "car-leasing-54007.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "elboshari-tradeinvestment.info",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "5777757777.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "brequx.online",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "kjds11171.top",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "jgaytfiz3.xyz",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "guvenceoyunevi.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "ccpandashare.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "alineacustomhomes.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "bwoywonderkids.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "lazersec.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "gewirgq1uw.xyz",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "aimappq.info",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "grandcoeur2007.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "giuseppedematolasax.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "aus-anzhelp.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "celeratuslegal.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "fatimiyyaalawuyyatv.africa",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "1wwoio.top",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "tylersphotovideo.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "leahdig.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "asp150.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "modburyremembers.org.uk",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "norske-jenta.ru",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "choac-2023.info",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "622058.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "ghrevenues.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "bankoftama.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "aliciartiz.click",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "healthyliiving.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "kings-health.com",
                        "timestamp": "2023-04-03 19:31:54"
                    },
                    {
                        "value": "appskul.com",
                        "timestamp": "2023-04-03 19:31:53"
                    },
                    {
                        "value": "acasascbcenter.com",
                        "timestamp": "2023-04-03 19:31:53"
                    },
                    {
                        "value": "dististicks.com",
                        "timestamp": "2023-04-03 19:31:53"
                    },
                    {
                        "value": "ipsmagen.com",
                        "timestamp": "2023-04-03 19:31:53"
                    },
                    {
                        "value": "www.keprom.works",
                        "timestamp": "2023-01-31 20:54:57"
                    },
                    {
                        "value": "puiry.online",
                        "timestamp": "2023-01-20 18:58:44"
                    },
                    {
                        "value": "purchase614210.com",
                        "timestamp": "2022-06-25 14:23:07"
                    },
                    {
                        "value": "wojiayouxuan.com",
                        "timestamp": "2022-06-25 14:23:07"
                    },
                    {
                        "value": "glitzye.com",
                        "timestamp": "2022-06-25 14:23:06"
                    },
                    {
                        "value": "doca29.site",
                        "timestamp": "2022-06-25 14:23:06"
                    },
                    {
                        "value": "joselynbaezs.com",
                        "timestamp": "2022-06-25 14:23:06"
                    },
                    {
                        "value": "scramet.online",
                        "timestamp": "2022-05-23 17:18:01"
                    },
                    {
                        "value": "www.olenfex.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.ppc-listing.info",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.psm-gen.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.racevx.xyz",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.rangers3.xyz",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.ravexim3.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.resctub.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.ruvapy.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.searko.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.sencmil.info",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.senmec23.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.shegimx.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.smacey.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.solevux.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.solisdq.info",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.stevebana.xyz",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.surptalb.xyz",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.suxfi.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.tomrings.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.uyhams.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.yeasuc.com",
                        "timestamp": "2021-10-13 10:12:06"
                    },
                    {
                        "value": "www.jumtix.xyz",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.juxrams.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.kuppers.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.lownak.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.luisxe.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.magentnew.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.magentos6.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.magen-tracks.xyz",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.magenx2.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.magetu.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.maglex.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.mex33.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.midgex.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.mimik33.info",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.naigves.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.necght.xyz",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.nehyam.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.nelivo.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.nivxros.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.novergi.com",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.octoberx2.online",
                        "timestamp": "2021-10-13 10:12:05"
                    },
                    {
                        "value": "www.cia3mega.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.cinmax.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.commagx4.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.contex33.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.contex3.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.contorig2.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.cookies-x.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.cowbex.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.cunerier.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.curiget.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.curtex.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.danfrem.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.domvy.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.floryi.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.forenvid.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.freisaq.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.haxb33.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.haxings.online",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.iregentos.info",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.jam-nins.com",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.jumben.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.jumlasx.xyz",
                        "timestamp": "2021-10-13 10:12:04"
                    },
                    {
                        "value": "www.absasha.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.azerni.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.baincot.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.bakldx.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.best4x.online",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.bingent.info",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.blaxies3.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.blinbins.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.bonap56.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.bostonm.info",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.brateix.info",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.bunies3.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.byonf.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.calsury.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.carbeloy.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.casnop.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.chaing-list.xyz",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.chaytel.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "www.chekax.com",
                        "timestamp": "2021-10-13 10:12:03"
                    },
                    {
                        "value": "gentciu.com",
                        "timestamp": "2021-09-15 16:04:39"
                    },
                    {
                        "value": "blessedbrickinstallation.com",
                        "timestamp": "2021-07-07 15:23:04"
                    },
                    {
                        "value": "jam-nins.com",
                        "timestamp": "2021-06-26 06:38:54"
                    },
                    {
                        "value": "olenfex.com",
                        "timestamp": "2021-03-11 06:45:03"
                    },
                    {
                        "value": "octoberx2.online",
                        "timestamp": "2021-03-11 06:43:43"
                    },
                    {
                        "value": "www.christopherngai.com",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.dubainights.net",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.fountainhead410.com",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.hikayemedya.com",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.tgofilms.com",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.856380692.xyz",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.firstbirthdayphotoshoot.com",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.gym-gain.bid",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.basiclablife.com",
                        "timestamp": "2021-03-10 20:40:46"
                    },
                    {
                        "value": "www.fessuseyyesseee.com",
                        "timestamp": "2021-03-10 20:37:53"
                    },
                    {
                        "value": "www.squadzone.net",
                        "timestamp": "2021-03-10 20:37:53"
                    },
                    {
                        "value": "www.lillinx.com",
                        "timestamp": "2021-03-10 20:37:53"
                    },
                    {
                        "value": "www.joomlas123.info",
                        "timestamp": "2021-03-10 20:37:53"
                    },
                    {
                        "value": "www.glamotd.com",
                        "timestamp": "2021-03-10 20:37:53"
                    },
                    {
                        "value": "www.rizrvd.com",
                        "timestamp": "2021-03-10 20:34:53"
                    }
                ],
                "url": [
                    {
                        "value": "http://www.keprom.works/pzb5/",
                        "timestamp": "2023-01-31 20:55:00"
                    },
                    {
                        "value": "https://bigshottoken.io/wp-includes/css/lev/Shipping%20Documents.zip",
                        "timestamp": "2022-11-02 23:56:23"
                    },
                    {
                        "value": "https://cdn.discordapp.com/attachments/1022062208261308447/1023885859646353469/Image.cab",
                        "timestamp": "2022-09-26 15:02:34"
                    },
                    {
                        "value": "https://files.catbox.moe/brkhxt.zip",
                        "timestamp": "2022-09-21 14:32:50"
                    },
                    {
                        "value": "http://45.85.219.226/Dklkhaz.exe",
                        "timestamp": "2022-08-16 14:43:52"
                    },
                    {
                        "value": "http://103.114.106.120/document/vbc.exe",
                        "timestamp": "2022-08-16 12:31:24"
                    },
                    {
                        "value": "http://www.bojz168.com/dfu7/",
                        "timestamp": "2022-07-18 16:06:15"
                    },
                    {
                        "value": "http://192.3.110.133/44/vbc.exe",
                        "timestamp": "2022-07-13 08:31:26"
                    },
                    {
                        "value": "http://85.202.169.21/machalazx.exe",
                        "timestamp": "2022-06-27 12:42:41"
                    },
                    {
                        "value": "http://107.172.76.188/y/loy.exe",
                        "timestamp": "2022-06-24 11:57:35"
                    },
                    {
                        "value": "http://180.214.236.4/msoffice/vbc.exe",
                        "timestamp": "2022-06-22 10:56:24"
                    },
                    {
                        "value": "http://64.44.101.233/8282/vbc.exe",
                        "timestamp": "2022-06-01 18:57:32"
                    },
                    {
                        "value": "http://104.168.33.25/ss/ip.exe",
                        "timestamp": "2022-05-31 08:26:51"
                    },
                    {
                        "value": "http://107.175.212.60/ok/pay.exe",
                        "timestamp": "2022-05-30 07:45:15"
                    },
                    {
                        "value": "http://2.56.57.22/tsdfguhijk.txt",
                        "timestamp": "2022-05-27 17:42:26"
                    },
                    {
                        "value": "http://2.56.57.22/daveCrpted.jpg",
                        "timestamp": "2022-05-27 17:42:25"
                    },
                    {
                        "value": "http://20.106.232.4/dll/26-05-2022-StartUp.pdf",
                        "timestamp": "2022-05-27 17:42:25"
                    },
                    {
                        "value": "http://180.214.236.4/spacedata/vbc.exe",
                        "timestamp": "2022-05-25 12:00:20"
                    },
                    {
                        "value": "http://103.156.91.153/data2cloud/vbc.exe",
                        "timestamp": "2022-05-23 10:23:40"
                    },
                    {
                        "value": "http://104.168.33.25/tt/tv.exe",
                        "timestamp": "2022-05-20 12:31:27"
                    },
                    {
                        "value": "http://104.168.33.25/ss/vc.exe",
                        "timestamp": "2022-05-19 14:31:27"
                    },
                    {
                        "value": "http://103.156.91.153/__cloud2protect/vbc.exe",
                        "timestamp": "2022-05-19 14:25:29"
                    },
                    {
                        "value": "http://62.197.136.176/files/catzx.exe",
                        "timestamp": "2022-05-16 12:07:02"
                    },
                    {
                        "value": "http://192.3.152.135/paint/copy_load.exe",
                        "timestamp": "2022-05-13 12:16:52"
                    },
                    {
                        "value": "http://185.29.9.30/6969/vbc.exe",
                        "timestamp": "2022-05-12 17:37:23"
                    },
                    {
                        "value": "https://reviewhotline.co.za/mri/Receipt-936428-Copy.iso",
                        "timestamp": "2022-05-12 17:05:24"
                    },
                    {
                        "value": "http://107.175.218.31/cloudfile/smss.exe",
                        "timestamp": "2022-05-12 09:31:24"
                    },
                    {
                        "value": "http://103.156.91.153/__cloud_for_file/vbc.exe",
                        "timestamp": "2022-05-12 09:11:16"
                    },
                    {
                        "value": "http://192.3.152.135/nestle/berthing.exe",
                        "timestamp": "2022-05-11 09:23:01"
                    },
                    {
                        "value": "http://103.156.91.153/msdrive10/vbc.exe",
                        "timestamp": "2022-05-11 09:22:36"
                    },
                    {
                        "value": "http://46.4.198.55/10P/book.ps1",
                        "timestamp": "2022-05-10 15:32:14"
                    },
                    {
                        "value": "http://46.4.198.55/10P/Sursdepa.vbs",
                        "timestamp": "2022-05-10 15:32:14"
                    },
                    {
                        "value": "https://cdn.discordapp.com/attachments/972107891119128650/973468812643016714/Jjetdn_Ocxqkrdc.bmp",
                        "timestamp": "2022-05-10 10:26:03"
                    },
                    {
                        "value": "http://103.167.92.57/365space/vbc.exe",
                        "timestamp": "2022-05-10 09:44:55"
                    },
                    {
                        "value": "http://138.201.149.43/1Kaufvertrag682/ARKAISERIN.vbs",
                        "timestamp": "2022-05-09 14:40:59"
                    },
                    {
                        "value": "http://138.201.149.43/1Kaufvertrag682/",
                        "timestamp": "2022-05-09 14:40:58"
                    },
                    {
                        "value": "http://138.201.149.43/1Kaufvertrag682/as.ps1",
                        "timestamp": "2022-05-09 14:40:58"
                    },
                    {
                        "value": "https://cdn-102.bayfiles.com/Z68fx4eay1/c2caab48-1652043448/JO.jpg",
                        "timestamp": "2022-05-09 13:04:25"
                    },
                    {
                        "value": "http://198.46.199.168/550/vbc.exe",
                        "timestamp": "2022-05-09 09:41:36"
                    },
                    {
                        "value": "http://offtec.cf/h/Abyjifi_Vxetragp.png",
                        "timestamp": "2022-05-08 23:31:03"
                    },
                    {
                        "value": "http://107.175.218.12/m/fmv.exe",
                        "timestamp": "2022-05-08 23:27:31"
                    },
                    {
                        "value": "http://2.58.149.41/obizx.exe",
                        "timestamp": "2022-05-04 16:24:18"
                    },
                    {
                        "value": "http://103.138.108.96/datachecking/vbc.exe",
                        "timestamp": "2022-04-28 10:58:31"
                    },
                    {
                        "value": "http://103.167.92.57/docline/vbc.exe",
                        "timestamp": "2022-04-27 10:39:05"
                    },
                    {
                        "value": "http://103.167.92.57/airdrop/vbc.exe",
                        "timestamp": "2022-04-27 10:39:05"
                    },
                    {
                        "value": "http://103.151.123.228/datalog/vbc.exe",
                        "timestamp": "2022-04-25 17:01:15"
                    },
                    {
                        "value": "http://wellcalls.com/Sundry.exe",
                        "timestamp": "2022-04-21 18:10:33"
                    },
                    {
                        "value": "http://2.58.149.41/ashleyzx.exe",
                        "timestamp": "2022-04-05 14:56:55"
                    },
                    {
                        "value": "http://5.181.80.36/tUC25rLNbjpLKtg.exe",
                        "timestamp": "2022-02-21 18:05:23"
                    },
                    {
                        "value": "https://pixi-url.herokuapp.com/e744ab82dde4",
                        "timestamp": "2022-02-10 11:38:21"
                    },
                    {
                        "value": "http://107.173.229.134/document/invoice.doc",
                        "timestamp": "2022-02-10 11:38:21"
                    },
                    {
                        "value": "http://107.173.229.134/455/vbc.exe",
                        "timestamp": "2022-02-10 11:38:21"
                    },
                    {
                        "value": "http://peak-tv.tk/successzx.exe",
                        "timestamp": "2022-02-09 11:56:07"
                    },
                    {
                        "value": "http://www.axecotton.com/ob61/",
                        "timestamp": "2021-12-15 17:29:46"
                    },
                    {
                        "value": "http://www.paymentback.xyz/sn2a/",
                        "timestamp": "2021-11-18 19:20:25"
                    },
                    {
                        "value": "http://www.fahrzeug.media/znhk/",
                        "timestamp": "2021-11-17 21:42:10"
                    },
                    {
                        "value": "http://www.makheads.com/fl9w/",
                        "timestamp": "2021-11-15 22:24:52"
                    },
                    {
                        "value": "http://www.badgrowbags.com/wxx4/",
                        "timestamp": "2021-11-15 02:21:28"
                    },
                    {
                        "value": "http://www.celikkaya.xyz/og2w/",
                        "timestamp": "2021-11-11 15:57:15"
                    },
                    {
                        "value": "http://www.decorationnews.com/rgv6/",
                        "timestamp": "2021-11-11 15:14:30"
                    },
                    {
                        "value": "http://www.mtm1010.com/ot6b/",
                        "timestamp": "2021-11-10 01:07:50"
                    },
                    {
                        "value": "http://www.camimac.com/poni/",
                        "timestamp": "2021-11-08 21:48:24"
                    },
                    {
                        "value": "http://www.rubberyslouka.xyz/ns87/",
                        "timestamp": "2021-11-08 16:29:40"
                    },
                    {
                        "value": "http://www.rematedeldia.com/euv4/",
                        "timestamp": "2021-11-04 17:57:50"
                    },
                    {
                        "value": "http://www.dymetaverse.com/io66/",
                        "timestamp": "2021-11-04 16:48:40"
                    },
                    {
                        "value": "http://www.hosotructiep.online/bsz6/",
                        "timestamp": "2021-11-01 20:46:55"
                    },
                    {
                        "value": "http://www.chunhejingming.com/dnz9/",
                        "timestamp": "2021-10-30 06:28:06"
                    },
                    {
                        "value": "http://www.cursoukulelegospel.com/h0c4/",
                        "timestamp": "2021-10-30 00:49:37"
                    },
                    {
                        "value": "http://www.metanewsroom.net/ob7y/",
                        "timestamp": "2021-10-29 03:40:00"
                    },
                    {
                        "value": "http://www.masa88.com/u4an/",
                        "timestamp": "2021-10-28 22:37:32"
                    },
                    {
                        "value": "http://www.septemberstockevent200.com/ht08/",
                        "timestamp": "2021-10-26 13:45:00"
                    },
                    {
                        "value": "http://www.smgraphicdesign.com/hpin/",
                        "timestamp": "2021-10-26 05:40:05"
                    },
                    {
                        "value": "http://www.egyptian-museum.com/ga6b/",
                        "timestamp": "2021-10-26 01:58:19"
                    },
                    {
                        "value": "http://www.elianedefalco.com/dv9n/",
                        "timestamp": "2021-10-25 17:57:31"
                    },
                    {
                        "value": "http://www.metalzj.quest/ct6s/",
                        "timestamp": "2021-10-25 05:55:16"
                    },
                    {
                        "value": "http://www.wakecountyrealtyexpert.com/og2w/",
                        "timestamp": "2021-10-22 05:34:53"
                    },
                    {
                        "value": "http://www.visiblegrowthagency.com/qcrn/",
                        "timestamp": "2021-10-20 22:22:34"
                    },
                    {
                        "value": "http://www.ccnsv.net/cnp0/",
                        "timestamp": "2021-10-19 13:17:49"
                    },
                    {
                        "value": "http://www.formationrigging.com/bu5i/",
                        "timestamp": "2021-10-19 12:38:03"
                    },
                    {
                        "value": "http://www.oohlalamedspa.biz/n6be/",
                        "timestamp": "2021-10-19 05:05:46"
                    },
                    {
                        "value": "http://www.rwilogisticsandbrokerage.com/bs8f/",
                        "timestamp": "2021-10-19 01:19:24"
                    },
                    {
                        "value": "http://www.vulcanopresale.icu/mqi9/",
                        "timestamp": "2021-10-15 18:55:17"
                    },
                    {
                        "value": "http://www.anysignals.net/g53s/",
                        "timestamp": "2021-10-14 17:43:06"
                    },
                    {
                        "value": "http://www.puwuved.xyz/ey5a/",
                        "timestamp": "2021-10-14 15:38:16"
                    },
                    {
                        "value": "http://www.pochi-owarai.com/hr8n/",
                        "timestamp": "2021-10-12 17:36:50"
                    },
                    {
                        "value": "http://www.hottorchlighter.com/gnui/",
                        "timestamp": "2021-10-11 04:20:49"
                    },
                    {
                        "value": "http://www.art-space.xyz/c8te/",
                        "timestamp": "2021-10-11 03:57:27"
                    },
                    {
                        "value": "http://www.steepygrieta.quest/oqaa/",
                        "timestamp": "2021-10-10 19:02:38"
                    },
                    {
                        "value": "http://www.skuboauto.com/outr/",
                        "timestamp": "2021-10-07 16:26:39"
                    },
                    {
                        "value": "http://www.thethomasgrouphomes.com/huve/",
                        "timestamp": "2021-10-07 03:27:18"
                    },
                    {
                        "value": "http://www.awbnmnmammmamnre.top/n092/",
                        "timestamp": "2021-10-06 15:51:20"
                    },
                    {
                        "value": "http://www.logjed063.xyz/rf3t/",
                        "timestamp": "2021-10-05 22:41:25"
                    },
                    {
                        "value": "http://www.georgeinnhatherleigh.com/iaop/",
                        "timestamp": "2021-10-05 17:48:51"
                    },
                    {
                        "value": "http://www.abdomenatskch.online/p4qi/",
                        "timestamp": "2021-10-05 16:58:37"
                    },
                    {
                        "value": "http://www.gretsel.com/cxeo/",
                        "timestamp": "2021-10-04 14:02:10"
                    },
                    {
                        "value": "http://www.fis.photos/ef6c/",
                        "timestamp": "2021-10-03 02:11:27"
                    },
                    {
                        "value": "http://www.rheilea.com/b5ce/",
                        "timestamp": "2021-10-02 18:12:04"
                    },
                    {
                        "value": "http://www.gvlc0.club/vngb/",
                        "timestamp": "2021-10-01 16:59:27"
                    },
                    {
                        "value": "http://www.finetipster.com/pvxz/",
                        "timestamp": "2021-09-30 16:05:47"
                    },
                    {
                        "value": "http://www.sale-stihl.com/useb/",
                        "timestamp": "2021-09-29 19:19:05"
                    },
                    {
                        "value": "http://www.bofight.store/r95e/",
                        "timestamp": "2021-09-28 03:12:57"
                    },
                    {
                        "value": "http://www.262266.store/eqza/",
                        "timestamp": "2021-09-22 23:02:07"
                    },
                    {
                        "value": "http://www.027jia.net/ueuf/",
                        "timestamp": "2021-09-21 17:56:56"
                    },
                    {
                        "value": "http://www.setechserv.com/ig04/",
                        "timestamp": "2021-09-21 15:59:11"
                    },
                    {
                        "value": "http://www.barca4ever.net/u89u/",
                        "timestamp": "2021-09-21 15:43:31"
                    },
                    {
                        "value": "http://www.fasilitatortoefl.com/uytf/",
                        "timestamp": "2021-09-21 01:16:52"
                    },
                    {
                        "value": "http://www.pivotallogic.com/p5a0/",
                        "timestamp": "2021-09-20 16:00:02"
                    },
                    {
                        "value": "http://www.constructioncleanup.pro/vd9n/",
                        "timestamp": "2021-09-15 15:57:24"
                    },
                    {
                        "value": "http://www.breakaway.uk/gv6d/",
                        "timestamp": "2021-09-15 04:18:21"
                    },
                    {
                        "value": "http://www.corbvalperu.com/m8g0/",
                        "timestamp": "2021-09-14 16:55:09"
                    },
                    {
                        "value": "http://www.boygirlthing.com/by65/",
                        "timestamp": "2021-09-14 16:37:47"
                    },
                    {
                        "value": "http://www.bestdeals2020.store/bd2m/",
                        "timestamp": "2021-09-12 14:57:34"
                    },
                    {
                        "value": "http://www.yyygaming.com/bqt25/",
                        "timestamp": "2021-09-12 15:11:31"
                    },
                    {
                        "value": "http://www.jakesplacebarbers.com/3nop/",
                        "timestamp": "2021-09-11 02:41:24"
                    },
                    {
                        "value": "http://www.shreehariessential.com/vd9n/?EtL0wTb=UCLTXuCC+DLm+Dmyms7lPFgVUXMSl+GseSIkZmyGfzgLOtQ65KlXD2gDIsGUNYxoXq0S3w==&FBch=0nz4ANlPzTqdWJFP",
                        "timestamp": "2021-09-08 19:26:45"
                    },
                    {
                        "value": "http://www.theunwrappedcollective.com/vd9n/?EtL0wTb=ONhllmAM70DeCEpVtkJwEqZi1947v2NXLgUu4RgDZaB+ZwVYC5ZY9zCTpo6KEnKd2PB5pw==&FBch=0nz4ANlPzTqdWJFP",
                        "timestamp": "2021-09-08 19:26:45"
                    },
                    {
                        "value": "http://www.hempcbgpill.com/vd9n/?EtL0wTb=rPP11MuMzBWx7DoUeXdsOL9nx6VauvZBp8gxTcSeNjAkpZ1JgCF04n8P6fZ9hhAk8eB+Rg==&FBch=0nz4ANlPzTqdWJFP",
                        "timestamp": "2021-09-08 19:26:45"
                    },
                    {
                        "value": "http://www.sustainaset.com/cahn/",
                        "timestamp": "2021-09-08 03:33:59"
                    },
                    {
                        "value": "http://www.xn--marketingrevolucin-61b.com/b6cu/",
                        "timestamp": "2021-09-07 16:10:06"
                    },
                    {
                        "value": "http://www.suavit.com/ucze/",
                        "timestamp": "2021-09-07 15:55:15"
                    },
                    {
                        "value": "http://www.herningvejafd3.com/h2m4/",
                        "timestamp": "2021-09-03 01:31:37"
                    },
                    {
                        "value": "http://www.banjarafactory.com/cttb/",
                        "timestamp": "2021-09-02 16:15:10"
                    },
                    {
                        "value": "http://www.tfnwcs.com/cttb/",
                        "timestamp": "2021-09-02 16:15:10"
                    },
                    {
                        "value": "http://www.cesarbobadillagutierrez.com/cttb/",
                        "timestamp": "2021-09-02 16:15:10"
                    },
                    {
                        "value": "http://www.yes50book.com/cttb/",
                        "timestamp": "2021-09-02 16:15:10"
                    },
                    {
                        "value": "http://www.crandlecastingco.com/cttb/",
                        "timestamp": "2021-09-02 16:15:10"
                    },
                    {
                        "value": "http://www.jinmisadiq.com/bqt25/",
                        "timestamp": "2021-09-02 15:19:11"
                    },
                    {
                        "value": "http://www.ghostkitchen.asia/iaf8/",
                        "timestamp": "2021-09-01 15:47:09"
                    },
                    {
                        "value": "http://www.zahnimplantatangebotede.com/mxwf/",
                        "timestamp": "2021-09-01 15:29:32"
                    },
                    {
                        "value": "http://www.5201314.mobi/im8r/",
                        "timestamp": "2021-08-31 19:16:46"
                    },
                    {
                        "value": "http://www.pdam-lebak.com/i7dg/",
                        "timestamp": "2021-08-31 16:57:50"
                    },
                    {
                        "value": "http://www.gaigoilaocai.com/wufn/",
                        "timestamp": "2021-08-30 17:15:36"
                    },
                    {
                        "value": "http://www.99356a.com/u86g/",
                        "timestamp": "2021-08-29 03:19:42"
                    },
                    {
                        "value": "http://www.schoolphysician.com/9t6k/",
                        "timestamp": "2021-08-26 17:30:31"
                    },
                    {
                        "value": "http://www.forusasocialmedia.com/zz8m/",
                        "timestamp": "2021-08-25 03:02:32"
                    },
                    {
                        "value": "http://www.narrowpathwc.com/n8ba/",
                        "timestamp": "2021-08-23 18:59:24"
                    },
                    {
                        "value": "http://www.sanweilightng.com/bfup/",
                        "timestamp": "2021-08-22 01:29:19"
                    },
                    {
                        "value": "http://www.mobiessence.com/6mam/",
                        "timestamp": "2021-08-19 16:46:09"
                    },
                    {
                        "value": "http://www.secretcitytraiis.com/c20t/",
                        "timestamp": "2021-08-18 16:20:21"
                    },
                    {
                        "value": "http://www.furnitureizmir.com/earz/",
                        "timestamp": "2021-08-16 22:09:46"
                    },
                    {
                        "value": "http://18.184.26.60/www/dow.exe",
                        "timestamp": "2021-08-16 21:43:45"
                    },
                    {
                        "value": "http://www.playerucas.com/u8d3/",
                        "timestamp": "2021-08-16 18:38:06"
                    },
                    {
                        "value": "http://www.lapashawhite.com/p596/",
                        "timestamp": "2021-07-14 14:33:00"
                    },
                    {
                        "value": "https://cdn.discordapp.com/attachments/858793322087710753/864036203703304192/suma.vbs",
                        "timestamp": "2021-07-13 13:39:04"
                    },
                    {
                        "value": "http://www.homekeycap.com/pjje/",
                        "timestamp": "2021-07-13 13:38:22"
                    },
                    {
                        "value": "http://www.tiktokblueprints.com/ea9e/",
                        "timestamp": "2021-07-07 17:12:03"
                    },
                    {
                        "value": "http://www.blessedbrickinstallation.com/d7hs/",
                        "timestamp": "2021-07-07 15:21:30"
                    },
                    {
                        "value": "http://www.tjbc-bearing.com/u6bi/",
                        "timestamp": "2021-07-01 17:52:57"
                    },
                    {
                        "value": "http://103.140.250.43/fttp/.wininit.exe",
                        "timestamp": "2021-07-01 17:45:54"
                    },
                    {
                        "value": "http://212.192.241.203/xx/sm.exe",
                        "timestamp": "2021-06-30 20:30:46"
                    },
                    {
                        "value": "http://olenfex.com/mdi/",
                        "timestamp": "2021-03-11 06:45:28"
                    },
                    {
                        "value": "http://octoberx2.online/bw82/",
                        "timestamp": "2021-03-11 06:44:13"
                    },
                    {
                        "value": "http://www.agrisic.info/isb4/",
                        "timestamp": "2021-03-10 16:55:16"
                    },
                    {
                        "value": "http://www.fessuseyyesseee.com/mdi/",
                        "timestamp": "2021-03-10 10:03:36"
                    },
                    {
                        "value": "http://192.3.152.166/nino/unn.exe",
                        "timestamp": "2021-03-10 10:02:45"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "6bc791d983257b76515c375b150c5dcd130a1913c36e5efb206114f4366ab33b",
                        "timestamp": "2022-09-26 15:00:12"
                    },
                    {
                        "value": "99f7e07f84e40e362b58d7b84110898eda66ce1e6906b2e27f1e9a9cae90e548",
                        "timestamp": "2022-05-09 03:33:06"
                    },
                    {
                        "value": "cb4f0f68dacf3b0deddf62a86e6d8d4963ba941f6aadf2f874ece8ee3768ab54",
                        "timestamp": "2022-05-09 03:33:05"
                    },
                    {
                        "value": "61e2e3f95b2cfc4704e38670a4b28d00c130c6b27ee86846222ec36be243607d",
                        "timestamp": "2022-03-01 11:12:39"
                    },
                    {
                        "value": "6ed4597153654e9526d066d62bbf7cc0e7d7e0660049f9e3b826475d3fa71abe",
                        "timestamp": "2022-02-23 19:27:39"
                    },
                    {
                        "value": "e91707b058e3941c89903c5ab8d28aa559391bcb2b0e2ba6e7d6a4fe78299f55",
                        "timestamp": "2022-02-08 07:42:50"
                    },
                    {
                        "value": "c30e1e448c40d6cf6fae39ea6bb5874bdbb3607fa9f601a121dad5ca9645808e",
                        "timestamp": "2022-02-08 07:42:49"
                    },
                    {
                        "value": "4bcc31ae38fef39cda80bdd6c760bca53824a2bdb1585cac27fe14ddb6e5eb84",
                        "timestamp": "2022-02-08 07:42:47"
                    },
                    {
                        "value": "b521b8984fec5daf62e3d41d863b68be9c910373d6bd6042e34f5891323ddfc7",
                        "timestamp": "2022-02-08 07:42:46"
                    },
                    {
                        "value": "ff3f7736a06e89ae300270369d83b922423c8a840903b30a8a21365c4b0b0628",
                        "timestamp": "2022-02-08 07:22:47"
                    },
                    {
                        "value": "703f4546b4adc3e685275a9840bafac150717c3259f629f6bf9bd8e5d191ad46",
                        "timestamp": "2022-02-08 07:22:46"
                    },
                    {
                        "value": "acb28239c256d400e79f51a7f83036d19daa0d814d32dcf765d8ec9aa0293cea",
                        "timestamp": "2022-02-08 07:22:45"
                    },
                    {
                        "value": "21b91db474501b88af0986971dd4bbfe0e502a1b732c7e3ef327e361824ae763",
                        "timestamp": "2022-02-08 07:22:45"
                    },
                    {
                        "value": "4d1ac5962b58c0bf6386b85fc1c2029efb0c8d5ccf0054733795eec1ea8b3291",
                        "timestamp": "2022-02-08 01:42:48"
                    },
                    {
                        "value": "a3c386096f6c478045ba6190d68a6591322ec9d4e480b900d3e7ef88e1622751",
                        "timestamp": "2022-02-08 01:42:46"
                    },
                    {
                        "value": "53797f53f02c949ce5666472a46ceca6a98ad37a4f1324ce9147774d2ffab4ef",
                        "timestamp": "2022-02-08 01:42:45"
                    },
                    {
                        "value": "d5f77ba2b2ad58cfad5ae3111994ad0f889967e6d4f67ecb9cedf1b8f10a6149",
                        "timestamp": "2022-02-08 01:42:43"
                    },
                    {
                        "value": "968edfa40d425d4f0ff51c2bd5987b3e0277aecae4d1f12aaec51012fbf288b1",
                        "timestamp": "2022-02-07 18:02:48"
                    },
                    {
                        "value": "995bfeca2c198d85b1f29ac10e5dae3bd0138eaced3e69de2c12a34f8866115a",
                        "timestamp": "2022-02-07 18:02:47"
                    },
                    {
                        "value": "dc65156bfa6da463f9eb980c3a551ba0cd494b53a55b3a2e9b41c766ca3c011c",
                        "timestamp": "2022-02-07 18:02:46"
                    },
                    {
                        "value": "75c449399be2d092abf47491f6b8671cf4cbf34c9aa0337116f14f8309e4af64",
                        "timestamp": "2022-02-07 18:02:45"
                    },
                    {
                        "value": "2091f891762ce863eff69d1f9081a70a6d82f5e95a16e608930b192254c8f9ee",
                        "timestamp": "2022-02-07 17:22:44"
                    },
                    {
                        "value": "eb2bffccee22f505d1d018bfb58fd4fcbec2d381824d1f83e0690a97669aa85c",
                        "timestamp": "2022-02-07 17:22:43"
                    },
                    {
                        "value": "f777ad0feb1db2da7abb7c793515f7af49d06a7b4fc5904a9da436ccbd59ddc3",
                        "timestamp": "2022-02-07 17:22:42"
                    },
                    {
                        "value": "c74022f7a461fd9a303f76dd690fe29d8c5954558f4917f16e06f51f98511bc3",
                        "timestamp": "2022-02-07 17:22:41"
                    },
                    {
                        "value": "c0f665918f4ea75327960ddf58cf37e415a6bf6569a4c22aa6291fbac9d171ce",
                        "timestamp": "2022-02-07 12:42:48"
                    },
                    {
                        "value": "789edec7b85160f488e5a1fb4b235860c758b4f10f9d01d19ec7df91f99fed2e",
                        "timestamp": "2022-02-07 12:42:47"
                    },
                    {
                        "value": "7480e4ba962590b3f14f4516861bb1aa80ffa08223a944ee6599cfe3b4e89bce",
                        "timestamp": "2022-02-07 12:42:47"
                    },
                    {
                        "value": "8a737703171c09245ca625e413b362091c9adea0ba91c40a7d4953b2e4b336c0",
                        "timestamp": "2022-02-07 12:42:46"
                    },
                    {
                        "value": "2d7b1e8a949c0868ccd1ade3a14b91d11c8ae8b52e5631fb8b726759102cb021",
                        "timestamp": "2022-02-07 12:42:45"
                    },
                    {
                        "value": "79ca1b34f3a8c4bc2ffcee6fecc76ee5eb7abaac462a3dc71146f406760fe5a3",
                        "timestamp": "2022-02-07 12:42:44"
                    },
                    {
                        "value": "712d99f8fa44abad1c6e9395b8236c6a7a1247c767e51721445111a22568742c",
                        "timestamp": "2022-02-07 12:42:44"
                    },
                    {
                        "value": "587171651cad23936552519cd3eba52184b4fe64431fcf627dc71d831597e466",
                        "timestamp": "2022-02-07 12:42:43"
                    },
                    {
                        "value": "60ba049b8af0c51a8dfbc45cacedef4180000b7739c937d22d8cbd66d4c6a8a8",
                        "timestamp": "2022-02-07 09:42:44"
                    },
                    {
                        "value": "f16768c3348ef6a7bde4d734eb1f407fe577d709bca21b0526ded6065be7cc92",
                        "timestamp": "2022-02-07 09:42:43"
                    },
                    {
                        "value": "4d6852edf73457b9a9db48a0f0220f3514bfcfdc0bb11a03b8496cccf45cc671",
                        "timestamp": "2022-02-07 09:42:42"
                    },
                    {
                        "value": "0796f988781cb719539b602b2757c9b9f110a671be0a2d48e51e6c578ba717f4",
                        "timestamp": "2022-02-07 09:42:41"
                    },
                    {
                        "value": "47877c12eb724433f8324baf4d7a7424c89f25f0d7e1bb06d57425a7140181fa",
                        "timestamp": "2022-02-07 07:22:37"
                    },
                    {
                        "value": "d92480dba0931328c2c808ae67f0be25ce8eed46de25ad916d111245136254bd",
                        "timestamp": "2022-02-07 07:22:37"
                    },
                    {
                        "value": "362c4c42f184545e0c7abb1cb0e8166e1b251e221c6ca19d10352d5f9949acd3",
                        "timestamp": "2022-02-07 07:22:36"
                    },
                    {
                        "value": "b28bf0284c17773dc7c6b76672fe226983ca555562d9fcc037f6eaf714fa5d10",
                        "timestamp": "2022-02-07 07:22:35"
                    },
                    {
                        "value": "04a3618a3870d1058496cd8444af9a9564c8b59442e3e4d16e7357dbe6f05671",
                        "timestamp": "2022-02-07 07:22:34"
                    },
                    {
                        "value": "4c1916f66fa05e3ce6bfc378af5ca0afb182fc1f5b866e8f5b86eaf0c1300015",
                        "timestamp": "2022-02-07 07:22:34"
                    },
                    {
                        "value": "aaa9ef9e25cfdb43e85549e29b66aa65c43b4da094673a8077f6aac81993aa42",
                        "timestamp": "2022-02-07 07:22:33"
                    },
                    {
                        "value": "afaa616c00216064a72251860c5cac715e367bdd40683d93d14b0e832eaf23d8",
                        "timestamp": "2022-02-07 07:22:32"
                    },
                    {
                        "value": "e1983c6c6865b27bc8fc5b8e72382e7bcb999b7c819bb897a06d64873052d060",
                        "timestamp": "2022-02-03 00:03:07"
                    },
                    {
                        "value": "1b66db6f934b729f050c4d916bd3942e279224912b56d729f2b194a53b03d7f7",
                        "timestamp": "2022-02-03 00:03:07"
                    },
                    {
                        "value": "e7b8eebe1e9c9aab3d13e24032ff4f377dd5ac8864ecebf0b2f064736841a3d5",
                        "timestamp": "2022-02-03 00:03:06"
                    },
                    {
                        "value": "1d643afd68ef0234dab92fdab54dca34dbf55c1d8829c2aa0720a67f616225a6",
                        "timestamp": "2022-02-03 00:03:05"
                    },
                    {
                        "value": "d750b5eb0bd3c9b24c2505c127c2a1ab78fd3385a2157083fcabdbba45bef7ba",
                        "timestamp": "2022-02-02 17:02:52"
                    },
                    {
                        "value": "699d1a9099fe4399f26003b508e1025d06078177bbd16ac9eeb629983e9f73f8",
                        "timestamp": "2022-02-02 17:02:51"
                    },
                    {
                        "value": "0ce19f8378ae3660546d44ca7054e8ddf7a908cf8f745362b9154cd698d6378c",
                        "timestamp": "2022-02-02 17:02:50"
                    },
                    {
                        "value": "be3a99702beebca9f671b4e3fc4b85d09104210af9a78f24cbafd426bda4b16f",
                        "timestamp": "2022-02-02 17:02:49"
                    },
                    {
                        "value": "af8397a4811399d68d5b0680d11f2c9cb92993c047ac800e2db43d3252dbf549",
                        "timestamp": "2022-02-02 12:02:43"
                    },
                    {
                        "value": "d3fd1fa7a2e12c9fbd3a83f41f600a10ffba328e96a0bc74b0c28fcc2ed6ad0d",
                        "timestamp": "2022-02-02 12:02:42"
                    },
                    {
                        "value": "856279abaf4ef54e6fa834a0f9551ca3cb4c555fe2d36cfa16d9b09e96c87d5c",
                        "timestamp": "2022-02-02 12:02:42"
                    },
                    {
                        "value": "f9bdeb6a2b5c09963cca22d55a346d2cadc49f6c37b7ec1cb23ed09ac88584c0",
                        "timestamp": "2022-02-02 12:02:41"
                    },
                    {
                        "value": "4d25e79b7db347d10198a625578edde7ab13e8b1523de952777c6e466e478711",
                        "timestamp": "2022-02-01 18:42:45"
                    },
                    {
                        "value": "7c80b30b2d36e7ce8b65e2bde96ac2276b75c95db19961add75537ecf2777518",
                        "timestamp": "2022-02-01 18:42:44"
                    },
                    {
                        "value": "8da8ab7799160b2a841085ed3d908c91c45eb87a10717f088fb4a72a93a07713",
                        "timestamp": "2022-02-01 18:42:44"
                    },
                    {
                        "value": "8b39a768796d9d9a3aae87532ff45c850ad28ca70bafa7842a42059a88d78112",
                        "timestamp": "2022-02-01 18:42:43"
                    },
                    {
                        "value": "a0514e98fa1285a73ff1679ad67b3520477037af3f72e10254e18c872f3b7c38",
                        "timestamp": "2022-02-01 17:23:18"
                    },
                    {
                        "value": "9f91803c4e3752a77d13cb51ff7975fdc3b7f4aac1faa90cefefcd9c41b0c055",
                        "timestamp": "2022-02-01 17:23:13"
                    },
                    {
                        "value": "61731a8887ca50f031dca2672ede53eb0f066a93487877cd0c79e4721528cd3c",
                        "timestamp": "2022-02-01 17:23:04"
                    },
                    {
                        "value": "2e78cdf6c6b9c395801561d0d01452c34069c5584f4827e454d5ce951895c771",
                        "timestamp": "2022-02-01 17:22:49"
                    },
                    {
                        "value": "74d29246ce34814d9cfb6861abf061483f9eb5087181f345e68bc14a5d4287b1",
                        "timestamp": "2022-02-01 16:22:53"
                    },
                    {
                        "value": "6f3bd69e60302214c0b2ae5d9e25625e36c2c63afe3fa39c67fd6cacdb32af6b",
                        "timestamp": "2022-02-01 16:22:53"
                    },
                    {
                        "value": "86ccfd835f2127d63f24a80ff44cf4e4d3c49cd1375097f533a538bf2c1536b6",
                        "timestamp": "2022-02-01 16:22:52"
                    },
                    {
                        "value": "13ce54d053256ed33282cc8e8a47f9a3c83f9b96f4230df70a7b947c55c611f5",
                        "timestamp": "2022-02-01 16:22:46"
                    },
                    {
                        "value": "aa68f387970e674d4497264257518ada7c1ea49d0e6bd5f49d7fe5c487ed0188",
                        "timestamp": "2022-02-01 14:43:13"
                    },
                    {
                        "value": "09effc5108b5ca6e852a9712180ad493ad2e4aa5e3693056953583fbce18cf92",
                        "timestamp": "2022-02-01 14:43:04"
                    },
                    {
                        "value": "de69cf6903ef67081ae40034f5b5c571c2df2fc97606f59259dc6129fcf20c33",
                        "timestamp": "2022-02-01 14:42:54"
                    },
                    {
                        "value": "8f1e8a86b3c75dd7ab0e11c6510302afea79321e23cc623fe2d9296cf3a54b07",
                        "timestamp": "2022-02-01 14:42:50"
                    },
                    {
                        "value": "96de11fc0f948fc3039f297475ba8abfcedaa7a9718634359286fe49156cd216",
                        "timestamp": "2022-02-01 12:02:49"
                    },
                    {
                        "value": "4ced8b46159c097ac24165405cf8b2343778e223a3740b1d728f4b4787035921",
                        "timestamp": "2022-02-01 12:02:48"
                    },
                    {
                        "value": "0da36b7f7e4b44b640ab5769532fdd7599032ca2b1d6b57807ba48ad1fa76780",
                        "timestamp": "2022-02-01 12:02:48"
                    },
                    {
                        "value": "b68d522384bb5ca78df8a6909d81c8a75a1e237195d97409c8272d9633cbcee7",
                        "timestamp": "2022-02-01 12:02:47"
                    },
                    {
                        "value": "8d4812ac0977b16fb2f7864de52b4cf2c9640feb8d914dea737f453654aede2c",
                        "timestamp": "2022-02-01 10:42:49"
                    },
                    {
                        "value": "7f12a35a614ba6b56ee0caafa7bd6fdcd43a91a5d6907e228f9be287f70616a4",
                        "timestamp": "2022-02-01 10:42:48"
                    },
                    {
                        "value": "d3540cb3bccea479caf84d7bc86aae9534163c01ec057041563706b84f6148b4",
                        "timestamp": "2022-02-01 10:42:47"
                    },
                    {
                        "value": "12876a9ad6e0bd4cf0d4fd1edbc14eedf3bcc96bee95391bad387893bb07fa8c",
                        "timestamp": "2022-02-01 10:42:46"
                    },
                    {
                        "value": "7414410372a7ce429cdd8d7d501af59d3e7527266beb0e508247b79342a76fb2",
                        "timestamp": "2022-02-01 07:02:48"
                    },
                    {
                        "value": "9fc0d25cd146410f8a13320c9e9e294e07de58c005bc9eb8eede47315d1d0905",
                        "timestamp": "2022-02-01 07:02:47"
                    },
                    {
                        "value": "de805b36f48e1f6d511331d79d0151460f249330861f40e503f468092cbfb7db",
                        "timestamp": "2022-02-01 07:02:46"
                    },
                    {
                        "value": "14be7afa3c460ee73f833cf43c56cb3305699e0bde7ad48fc2c23022e9d4b577",
                        "timestamp": "2022-02-01 07:02:45"
                    },
                    {
                        "value": "ce06372d5e745b0e6862c978eec82d198a4f4443ac470f1d7463cd51f869dbcc",
                        "timestamp": "2022-01-31 18:43:00"
                    },
                    {
                        "value": "f71c4db005feff44aa068d5324442c82282bdd84051b6c059ae55cf251f98c12",
                        "timestamp": "2022-01-31 18:42:59"
                    },
                    {
                        "value": "d22129107a8e45e8ceb11ea395c1279d4617d37a5846841b35ae06c6c08e170c",
                        "timestamp": "2022-01-31 18:42:53"
                    },
                    {
                        "value": "afc032108ffa06971ed463b5f5e9c4b2d56eea8dbb474bb316b5c42f4f58cf26",
                        "timestamp": "2022-01-31 18:42:45"
                    },
                    {
                        "value": "09a3017025e9f38ce4318ff02e0365c98052c0dfd4f1b3f18986b18a68452bbc",
                        "timestamp": "2022-01-31 16:22:49"
                    },
                    {
                        "value": "2c2e482a7930bd93002a57be1711776d43a52b00bc9116d3d1ba112ebba9d8eb",
                        "timestamp": "2022-01-31 16:22:48"
                    },
                    {
                        "value": "0b4545838e8a848f0a54b02582f6d49494b3352dfd88d39d6ba2051c420270a6",
                        "timestamp": "2022-01-31 16:22:48"
                    },
                    {
                        "value": "5cc59944d1935948599d3c0c66682ca6a378c0e5b194552cbc4c030f1c6480ab",
                        "timestamp": "2022-01-31 16:22:47"
                    },
                    {
                        "value": "a5e2c0a39b518fb954827768a00971eb628c2c5ac62c2a199f0e62b5101f0d5f",
                        "timestamp": "2022-01-29 10:02:47"
                    },
                    {
                        "value": "b76cdf3f203937fdd5a57710faf9c4d78281f4b893e8caff17a5053bb741bffc",
                        "timestamp": "2022-01-29 10:02:47"
                    },
                    {
                        "value": "ec6636f70ab0c5c4a752505049efb9e4ebb856671e6c47fe0c869b9efdf254d7",
                        "timestamp": "2022-01-29 10:02:46"
                    },
                    {
                        "value": "4d2a5f508e4d6a54d71af82fcea978527cdd216423fb050457dfeb4db581178f",
                        "timestamp": "2022-01-29 10:02:45"
                    },
                    {
                        "value": "9af4d9ef8b2a850854ae23411d44d3603147c26898bca1010fd2f9b16f6d456e",
                        "timestamp": "2022-01-29 08:30:46"
                    },
                    {
                        "value": "d58c2537b808daad50e0922ad3fddb0ff6c254800c55e87a843a989fc04bdcb7",
                        "timestamp": "2022-01-29 08:30:45"
                    },
                    {
                        "value": "11d9365302786fe34113c070a9e6ed32a7209c8de10eb21ef8d4a8eeb1215d41",
                        "timestamp": "2022-01-29 08:30:44"
                    },
                    {
                        "value": "c9e510166ee89b61b67cc0646c60422e7f9c7d8c05101ecb2552d3eab87de758",
                        "timestamp": "2022-01-29 08:30:43"
                    },
                    {
                        "value": "d47bd2ff5d90d64d18485203e59a952e485a39f98e3d54258a578b13d9136ae7",
                        "timestamp": "2022-01-29 08:30:35"
                    },
                    {
                        "value": "527036f9e449de86dc23ca03f80ea7da2d0ee7d7752203bbfad4ffb9237a19a8",
                        "timestamp": "2022-01-29 08:30:33"
                    },
                    {
                        "value": "598452578751d1c75f6c6f945d814dbaa104fff2bfc3d37e125cddb0f434450f",
                        "timestamp": "2022-01-29 08:30:32"
                    },
                    {
                        "value": "074991cefc03a7683cb3c81e83c383010f45c130fdc6dafa13469bfffaf87867",
                        "timestamp": "2022-01-29 08:30:30"
                    },
                    {
                        "value": "eb9376b443334a202ad8a0e7a62d8fd9baa6b9e26e26f59a1e333889f911614c",
                        "timestamp": "2022-01-27 19:22:49"
                    },
                    {
                        "value": "6ddb29ddbdec50f59762b9243d0f90a445c028bd5be7f50ef73568327726267e",
                        "timestamp": "2022-01-27 19:22:49"
                    },
                    {
                        "value": "5c448e35a4d824dbda7327276b9600d3009c225a0a3f7c3512c357bd19d3dd3b",
                        "timestamp": "2022-01-27 19:22:48"
                    },
                    {
                        "value": "bd176d2e421040c6961295c15a390defd89bc98238e342df8dd4c4f6b5c9635e",
                        "timestamp": "2022-01-27 19:22:48"
                    },
                    {
                        "value": "92a63ebf358a3b9b4a6b0dfe68fecb20ae91e7eac78aa3c686566842ca5c72c7",
                        "timestamp": "2022-01-27 18:22:44"
                    },
                    {
                        "value": "8f02d379ce157b991e6997f5a651021ae84d2efbcab89ad72f1349b21cc71758",
                        "timestamp": "2022-01-27 18:22:44"
                    },
                    {
                        "value": "76206cfe9c2933e343b7650e368175a1a94b5f25927685e0b3fa5f317696e073",
                        "timestamp": "2022-01-27 18:22:43"
                    },
                    {
                        "value": "7bc209b35e0f0838c03f3a67be9e3f362a440ad2c8a3434dd52c4a16c4a72135",
                        "timestamp": "2022-01-27 18:22:42"
                    },
                    {
                        "value": "4a9316fabebef3467c9229c81238cbbb0bcf784c95de8e1c69b3e7d75ebc0916",
                        "timestamp": "2022-01-27 17:42:55"
                    },
                    {
                        "value": "662c7dc1c6b6fbc7cb4622876c0b0b2a42dba7081adede8a65182aef085f7082",
                        "timestamp": "2022-01-27 17:42:52"
                    },
                    {
                        "value": "c4771044788147e2c9acb052dfbf6d291400add558b59ad0e6d0c5f42f3ec3e1",
                        "timestamp": "2022-01-27 17:42:50"
                    },
                    {
                        "value": "68034624830b700c4170fed903aa8a21b2b7dcb506e3c189543750acd4b9ba7e",
                        "timestamp": "2022-01-27 17:42:49"
                    },
                    {
                        "value": "f5e1a753c6adb55fcc3eb64d7252f7c43ea1d4d5c33a63a5fa4373b3ca323f8c",
                        "timestamp": "2022-01-27 14:22:54"
                    },
                    {
                        "value": "ae89b5ad57da10b0c320c7ec489f66cd5e5888458d9dd8430d438df4a68456af",
                        "timestamp": "2022-01-27 14:22:53"
                    },
                    {
                        "value": "b133ef10c41b4dd470ba411a84c327394cdf7bc4f1277d3e7117aa13da5c05bc",
                        "timestamp": "2022-01-27 14:22:52"
                    },
                    {
                        "value": "33f5bb8c87e1444f5ef949d61dcce7e0c5e40ac07e6d446abd42f3d1ecb66a6c",
                        "timestamp": "2022-01-27 14:22:52"
                    },
                    {
                        "value": "f2039e028e6488f1cb0fd498c668b22e6f3bd3852f05ce5758a708ed1b0c0eef",
                        "timestamp": "2022-01-27 14:02:59"
                    },
                    {
                        "value": "32fea88907cbefd31749cedfc8b85d3775fca2f65b15594dde355624b3ad7cc8",
                        "timestamp": "2022-01-27 14:02:59"
                    },
                    {
                        "value": "db751d20fa3ae449c73167571724c5dc773161f33e095ef74fa23ca66cfa8129",
                        "timestamp": "2022-01-27 14:02:58"
                    },
                    {
                        "value": "3d28df7c5fa301b4e6d80f4bbc9dfa70bec762ca5ef085bcc8373b4b359b177f",
                        "timestamp": "2022-01-27 14:02:57"
                    },
                    {
                        "value": "ff2639b9a755825db79273efaee19801424f137219b101f232e428de9d8cbf56",
                        "timestamp": "2022-01-27 13:42:53"
                    },
                    {
                        "value": "f3ad56b193b11181634b44e6bff6e2e34cc171a86412cae53f19088596214f00",
                        "timestamp": "2022-01-27 13:42:52"
                    },
                    {
                        "value": "93d19d496e71478cf23769d45f29c123fcf591ba4c12771da2b7639bb7bb5e2e",
                        "timestamp": "2022-01-27 13:42:49"
                    },
                    {
                        "value": "01e537ab28cea013b9a08939057369aa9369e8ff009231cb95101dc24348bb2e",
                        "timestamp": "2022-01-27 13:42:46"
                    },
                    {
                        "value": "abbe483fde9751b2f0203712f8c70ccdb43dc71e0f77aa7cc1fa6c32f61f3f21",
                        "timestamp": "2022-01-27 12:02:51"
                    },
                    {
                        "value": "a8ffb883609ff6d5a39170b1061077440637b40fc0f5a9db98cd85a6f4f2a95d",
                        "timestamp": "2022-01-27 12:02:50"
                    },
                    {
                        "value": "0183d2fd44e215d6dc408bec45db9767a765767737b737032ff97e75adca46cd",
                        "timestamp": "2022-01-27 12:02:49"
                    },
                    {
                        "value": "5a04697834016e869389ef0d6a08656669cf5597fe0a6378a993250d311482e3",
                        "timestamp": "2022-01-27 12:02:49"
                    },
                    {
                        "value": "c30bd9bd22025f5f39fd0564fe08df9900030b256de3f8829f1d163596e6073c",
                        "timestamp": "2022-01-27 10:58:33"
                    },
                    {
                        "value": "0b029bca546eaf4a9548154e79c3e4c0c044bda2775264564da9e46eb9e97a50",
                        "timestamp": "2022-01-27 10:58:32"
                    },
                    {
                        "value": "a114e2333254d7650ad4b797d3b4238c36af33fea05065ecb3f561173c18f73c",
                        "timestamp": "2022-01-26 19:42:46"
                    },
                    {
                        "value": "811ec72790978744eb3367756a5be669217e6cd8acad47fac733a8c6d094db20",
                        "timestamp": "2022-01-26 19:42:45"
                    },
                    {
                        "value": "4102936b0b54529eb3be257a0ed5a222149bf146da96cd75b77e1dd2be614f9b",
                        "timestamp": "2022-01-26 19:42:44"
                    },
                    {
                        "value": "c744a4435d81489ef625898e53053f42e20ed3636aa379608b9f5f3553183e05",
                        "timestamp": "2022-01-26 19:42:44"
                    },
                    {
                        "value": "7a39f705b79a26591fa930c917ebf37ac8f0394017521970a45cb8c49c3bbb65",
                        "timestamp": "2022-01-26 16:02:53"
                    },
                    {
                        "value": "e60ef2dcb3f050e6c2a54a7b2236d0bb35bd590a22f1c9605ca466a591bdb6ea",
                        "timestamp": "2022-01-26 16:02:53"
                    },
                    {
                        "value": "b6203315eb28dd095e2ce7554303977ff5d18ab88250240f1548bc8020a2d669",
                        "timestamp": "2022-01-26 16:02:52"
                    },
                    {
                        "value": "6292e250399f2181937e4740f7e04ccaab0de0e293ca8f385cf86e55dce1fe2e",
                        "timestamp": "2022-01-26 16:02:52"
                    },
                    {
                        "value": "86f3ba2253c336b7d721ed8700c74d94db051db78dae9e54e7c3b0bf57ed4aba",
                        "timestamp": "2022-01-26 11:02:53"
                    },
                    {
                        "value": "c5aee60b133436eb2898a5ee22d8cc124d6f8716448114161097d62604083b34",
                        "timestamp": "2022-01-26 11:02:52"
                    },
                    {
                        "value": "ae0d62b6b0dd86dd84bd8b67de7dc40130139b8a3be6e5f4c5acea86142a5da3",
                        "timestamp": "2022-01-26 11:02:52"
                    },
                    {
                        "value": "01622d3e6d14184769fc2b052e32588b7bbd86f5a61e511f395db4695d7018a9",
                        "timestamp": "2022-01-26 11:02:51"
                    },
                    {
                        "value": "8180c59fa222cd987fdf35b63f49b85328446306a33b520161b11062fdcd24b1",
                        "timestamp": "2022-01-26 10:42:51"
                    },
                    {
                        "value": "ac4c5d621bacc0775fb7a9872bc58c7026ae43156acccc42305771366ea533e0",
                        "timestamp": "2022-01-26 10:42:50"
                    },
                    {
                        "value": "6e728d7a2e88ba45765fb4bbb1de4ddda1b3a402d5f31c04eddafe1962ab993c",
                        "timestamp": "2022-01-26 10:42:50"
                    },
                    {
                        "value": "50771a013c968d61b8e3111da3cb205f1d8878031c63bdbaaddaa87308a3e290",
                        "timestamp": "2022-01-26 10:42:49"
                    },
                    {
                        "value": "cfb1885ffc36b477e82c2f725fe625c38018760da2531d3a2024f0c24752997a",
                        "timestamp": "2022-01-26 09:42:49"
                    },
                    {
                        "value": "570b1e6e2a31aeea4ae5e06187e431299203a527a14a22e4ee97b4004073bd7c",
                        "timestamp": "2022-01-26 09:42:49"
                    },
                    {
                        "value": "7be38caafd74c51f9f934d9d30c635f9d87918467a30d7b1f1282808da06ab2d",
                        "timestamp": "2022-01-26 09:42:48"
                    },
                    {
                        "value": "a15b74d25c2013c3d1dbbd7a5be62cebe3dde89d2e07e355231fdb5b7635c027",
                        "timestamp": "2022-01-26 09:42:48"
                    },
                    {
                        "value": "5fabf5c9fcceb520d7023eaf53122959f42bdb4b1c82bc916baa4bbb94f787ae",
                        "timestamp": "2022-01-26 01:22:41"
                    },
                    {
                        "value": "5cdd172f465ceffd3bcf25b11515fb6cf382045856f18cf05da436353f672aa4",
                        "timestamp": "2022-01-26 01:22:40"
                    },
                    {
                        "value": "27b119bcaa4cbf8aa1724911fcf3e21917f0a4db830075cea3e5072fc525db32",
                        "timestamp": "2022-01-26 01:22:39"
                    },
                    {
                        "value": "6a6c0f968dfefb475330900ca877bb799c32f97b4434d40ffba226fee5f2ca48",
                        "timestamp": "2022-01-26 01:22:39"
                    },
                    {
                        "value": "9a02eb66227db973b5cdf911111ea2411b3c89b91c98dd50a20897c53a798842",
                        "timestamp": "2022-01-25 13:02:45"
                    },
                    {
                        "value": "415449c83114cacd65f0495a947ae3452b9349ad99cb38c055349165917193da",
                        "timestamp": "2022-01-25 13:02:45"
                    },
                    {
                        "value": "f972900994fc5165ba09a69ed8067feb97c15ed3bd9f722f96d175572eb34aca",
                        "timestamp": "2022-01-25 13:02:44"
                    },
                    {
                        "value": "7d23d3f437c0294e056b9ce99a95345de8af6c58b64eecbfd2fbb0fc417ab3e5",
                        "timestamp": "2022-01-25 13:02:44"
                    },
                    {
                        "value": "6b8adefddc7ac5359655c437171861840ef7c3bef013612da36ccdb90e032f73",
                        "timestamp": "2022-01-25 13:02:44"
                    },
                    {
                        "value": "6fb8df507c2542fad588d9da099a8ba4e601a2fa535534d9c50841692a7175eb",
                        "timestamp": "2022-01-25 13:02:43"
                    },
                    {
                        "value": "8479afbfb0bd8c48d55dddd526be652ff0d361bac0344108d6e6887b22f45a91",
                        "timestamp": "2022-01-25 13:02:43"
                    },
                    {
                        "value": "ee5dd80f9946c3b8221409e1aed242cd36a8188850718f89722b48404906275e",
                        "timestamp": "2022-01-25 13:02:43"
                    },
                    {
                        "value": "1b587db898aae14a32f29ec66e19f3218591ac5dadf1d7a6a3feb1425ad7f17a",
                        "timestamp": "2022-01-25 12:42:46"
                    },
                    {
                        "value": "a8d5e1d38de4f19b6e861c8f6f6f7061954ef9c132201984650a6f47fa1c0496",
                        "timestamp": "2022-01-25 12:42:46"
                    },
                    {
                        "value": "d8a9cdc29263ce68f08b4307637fe380dab9aa20bd7dde91d106169f47cd5f47",
                        "timestamp": "2022-01-25 12:42:45"
                    },
                    {
                        "value": "5351cbcbca365b731b5e37199981913d5d6d2fc87f934686730f14aa97e6b5a9",
                        "timestamp": "2022-01-25 12:42:45"
                    },
                    {
                        "value": "08fe866e85b6ecd9e1176df7b9c5053ed7e954695df5b3e05bba8ddd6ce59365",
                        "timestamp": "2022-01-25 11:42:47"
                    },
                    {
                        "value": "6eb896fa786a312263e79b3389ef68f38f5271a061b43eaa1d8ef3d29451e7c4",
                        "timestamp": "2022-01-25 11:42:46"
                    },
                    {
                        "value": "d2c9827978276132cc38a69bb87dbf7ab682d04d194271f460f3bd14d76f9c2c",
                        "timestamp": "2022-01-25 11:42:46"
                    },
                    {
                        "value": "84352ae07afe2a371532dfaf731561ab4f64f7d83306569ad672ee4c03088b81",
                        "timestamp": "2022-01-25 11:42:45"
                    },
                    {
                        "value": "1c3f48c41ff949d4c6b27d671146abb3f13be640843027a5ec33177bca81aef6",
                        "timestamp": "2022-01-25 11:22:49"
                    },
                    {
                        "value": "f69c67cbf4e8f7e6d0f9157de994b80e6eb0f7b251dcc461940d51659055640f",
                        "timestamp": "2022-01-25 11:22:48"
                    },
                    {
                        "value": "349ec453a7c0fc7e437529365248a850af367fb7cf9079c69f0dbeaa1091d0ec",
                        "timestamp": "2022-01-25 11:22:48"
                    },
                    {
                        "value": "a58fa4c9cd9960a9b7c8fbab4942b3d1f28035ce37b68b4835afa9e728cbdc0a",
                        "timestamp": "2022-01-25 11:22:47"
                    },
                    {
                        "value": "1a476b2f1749d55cb2299d364755aeb94cefa2538abc8ac06579aa5da3766449",
                        "timestamp": "2022-01-25 10:42:52"
                    },
                    {
                        "value": "b63c82c7ada645bc96da74ebd031970c0ee2e7a568c2929181c146144682b2c3",
                        "timestamp": "2022-01-25 10:42:52"
                    },
                    {
                        "value": "731b5cd4aa18acb39bcfbb690aa93ef24f374c96b4d61845a58781241bc0bdee",
                        "timestamp": "2022-01-25 10:42:51"
                    },
                    {
                        "value": "a1a30e548418e21e93fb4d3dfb9b39dcef638cc392636a20579cff7ea023ab66",
                        "timestamp": "2022-01-25 10:42:51"
                    },
                    {
                        "value": "09d7c64214ed6da7e522c268d0919c1917a6df9260796018751cb7d77489085e",
                        "timestamp": "2022-01-25 10:42:49"
                    },
                    {
                        "value": "02c848711be5356cc435b98837bdf0120cac86fdeaa5238793a3ab6300482147",
                        "timestamp": "2022-01-25 10:42:49"
                    },
                    {
                        "value": "e0b985ed9547d4799d352c98ed428c0ba78e3abfec8897ec406ea07f306cb982",
                        "timestamp": "2022-01-25 10:42:48"
                    },
                    {
                        "value": "2ef455592017e10cdda6c9a0378a35c232d90ad98d601ca2a1eccb64279fa97e",
                        "timestamp": "2022-01-25 10:42:48"
                    },
                    {
                        "value": "087b99ad356f223d93d3ecc23c1fa2cd098c56cbc689dc4d668bc50879305ff0",
                        "timestamp": "2022-01-25 06:02:40"
                    },
                    {
                        "value": "ed8cdc7ac6bd298ff701fdf431397139945869d8ddc79ca539e2a83be0fd36a2",
                        "timestamp": "2022-01-25 06:02:39"
                    },
                    {
                        "value": "0be58a33d1ccbb74ef24592d2d16009bd56638aef6c294af7793e57588e04ef6",
                        "timestamp": "2022-01-25 06:02:37"
                    },
                    {
                        "value": "63c99afae2dd2819ade8b3e2b1910297027898d44248ad4386385d40bed1427c",
                        "timestamp": "2022-01-25 06:02:36"
                    },
                    {
                        "value": "711f3855c0fe6398f1fdb5a870de829c005b60cd4c90bd8ecae5780b9427716f",
                        "timestamp": "2022-01-25 04:43:03"
                    },
                    {
                        "value": "c24ec2509ba3c7c849d34f88c3d9fbbabd57b6c09f2a2e1a9f7b3ebfa7288c04",
                        "timestamp": "2022-01-25 04:42:56"
                    },
                    {
                        "value": "5706c4155dd436309f0e4f90f7535785e9dc598161df6fa6bfebe00a9f7dc992",
                        "timestamp": "2022-01-25 04:42:49"
                    },
                    {
                        "value": "e5b5fcbc3e0ecd09c2f391373b1b889e2a3bec0c499b7eb479f969eddd8b2ca1",
                        "timestamp": "2022-01-25 04:42:45"
                    },
                    {
                        "value": "b83152fc7fc7aa9950add1de9c3d12e107e3b6eb481c1a368018ed26d3792cdc",
                        "timestamp": "2022-01-24 17:02:39"
                    },
                    {
                        "value": "959b7ce61e82bc7f837042b10627c2d87442d52a243eafa8b837419ec0174418",
                        "timestamp": "2022-01-24 17:02:38"
                    },
                    {
                        "value": "7f2a69c94ab6e8b1d0b77a06a04cf40af21aac11a7c3f142c5b6c9efba12fc7a",
                        "timestamp": "2022-01-24 17:02:36"
                    },
                    {
                        "value": "364e78bd8b804acabbee119466057af5c865bf5c2f6ad3c7342354b6978ed9fc",
                        "timestamp": "2022-01-24 17:02:35"
                    },
                    {
                        "value": "c652919676cc6f3ea808c6e1023de343d27ed8f72f4f1b94523c4ecfb09bf223",
                        "timestamp": "2022-01-24 15:02:47"
                    },
                    {
                        "value": "885a625b453299fe22af243c359d7a871450bcd7ac730144a22fbcf96c4e41a2",
                        "timestamp": "2022-01-24 15:02:45"
                    },
                    {
                        "value": "7b71276fecaec56cfd980d8dc4d17f73792567de14fd0554e80d0fb868c02b28",
                        "timestamp": "2022-01-24 15:02:44"
                    },
                    {
                        "value": "0afd047607e52ba3e4994fd71a66964ab2af835b661746cf12ab53368a40b7ad",
                        "timestamp": "2022-01-24 15:02:42"
                    },
                    {
                        "value": "6592902a9a90843a3a2658cef493cf8d309c6efecf1cadb2b26f457618471008",
                        "timestamp": "2022-01-24 07:02:42"
                    },
                    {
                        "value": "d4b8867d025ea344038dfac165d0c84b7d5d95ba866fee8002cfa3f2aaa68ddf",
                        "timestamp": "2022-01-24 07:02:42"
                    },
                    {
                        "value": "90b2a01d8b8561bd3c7dc95934320d8e59131b9e654f25d907ae2846e95fdb3b",
                        "timestamp": "2022-01-24 07:02:41"
                    },
                    {
                        "value": "081be32fe752d7e270c45f1d7a71889aa4452a590963da8dd75e3f26861ddba8",
                        "timestamp": "2022-01-24 07:02:40"
                    },
                    {
                        "value": "b96d8904afc128bf96f360fb2702b6eb0d4d70ae6cbf32e7e4bbdd90ff884a04",
                        "timestamp": "2022-01-24 07:02:39"
                    },
                    {
                        "value": "28a107f37e75bafd9fd49ac3ed8745d676d04d2bd5bfea8f926f04a2f393cd51",
                        "timestamp": "2022-01-24 07:02:38"
                    },
                    {
                        "value": "838646bc9841804d7671fb25b3fd5d3e67e91c1d341c7125ce63ad436ada5f26",
                        "timestamp": "2022-01-24 07:02:36"
                    },
                    {
                        "value": "fdbca30c6db5b5bc5e1a954ce387deec23d7b77ff249ec916bcabb0a5faeb783",
                        "timestamp": "2022-01-24 07:02:35"
                    },
                    {
                        "value": "723105ca94eef9a867bde9fcfe1fe8b86c42cd17d0bd3ee0c39c1fca324aa9dd",
                        "timestamp": "2022-01-24 03:42:41"
                    },
                    {
                        "value": "8e4ca12811ae20874923d590e85c6e0a4c591fa3dfe754cce7c47433b713b9c8",
                        "timestamp": "2022-01-24 03:42:40"
                    },
                    {
                        "value": "b0345a47cd68f91827d7b4eb8ab3c12cc73fa13690ceb78bb6912ead6c9062ed",
                        "timestamp": "2022-01-24 03:42:38"
                    },
                    {
                        "value": "2f7226553a30b70c6a343b5e036fbfb82949c42d9371294456239bbfed878e84",
                        "timestamp": "2022-01-24 03:42:35"
                    },
                    {
                        "value": "091beda14bcaac53625f006d1f77f6c8bfc07aa45174762057ae4d698a854e1b",
                        "timestamp": "2022-01-22 00:24:31"
                    },
                    {
                        "value": "ceff3e5d81586ce81d6e93178e30d16239827b4aefbe09a382e9f9fbf8635ebc",
                        "timestamp": "2022-01-22 00:24:30"
                    },
                    {
                        "value": "bbe645c9580d37f74350e17d80b68b6fa73fbeaee7c574320ff758d9c3cb7552",
                        "timestamp": "2022-01-22 00:24:29"
                    },
                    {
                        "value": "8f217856aa62be77c0d62ef04c57b61a9d177bf8422a01a9857d45bc0bba9584",
                        "timestamp": "2022-01-22 00:24:29"
                    },
                    {
                        "value": "2d40f472fa610ec9068b1bb4d057ca2293e2389fe7915acd2237b6df85e9b6b3",
                        "timestamp": "2022-01-21 19:22:41"
                    },
                    {
                        "value": "37ed1ba1aab413fbf59e196f9337f6295a1fbbf1540e76525b43725b1e0b012d",
                        "timestamp": "2022-01-21 19:22:40"
                    },
                    {
                        "value": "bfdff4ccf418088fbfc206b769c378e096240e2b0596998458afc393a2ffa077",
                        "timestamp": "2022-01-21 19:22:39"
                    },
                    {
                        "value": "3b491a15098bb2377baac5bb8e422cd093d0216ce73e3f4556b1c75eca409dce",
                        "timestamp": "2022-01-21 19:22:38"
                    },
                    {
                        "value": "d9d9a78770bcd89cf5a0875a3c099bd2be2f6460878aa6db722f3fcd2319f322",
                        "timestamp": "2022-01-21 18:42:54"
                    },
                    {
                        "value": "0d9eda70e207bce41603e1c9ae3780c39beea3aab6425d6b07ce4f71e8486594",
                        "timestamp": "2022-01-21 18:42:51"
                    },
                    {
                        "value": "e096ec2151b53c081e3c7a6e712c04632dc6173f5d2f9a9ad3981da8ce718ef7",
                        "timestamp": "2022-01-21 18:42:47"
                    },
                    {
                        "value": "76512cdca61e33b722c33be6ec17f76e9ceba49a242fc2574c3d46e25a476ea5",
                        "timestamp": "2022-01-21 18:42:42"
                    },
                    {
                        "value": "779f25a189bba69f1148574c67e29d96d0f60525858ba0529b2618f23e707dcd",
                        "timestamp": "2022-01-21 14:42:59"
                    },
                    {
                        "value": "f7e0300ec65c7437a7db2158953dc378d8d74b26289f74c74adbb1272df97b78",
                        "timestamp": "2022-01-21 14:42:56"
                    },
                    {
                        "value": "8e4da8766eb5ea763138244606bbdbafd4297a332988868411194d067724e24f",
                        "timestamp": "2022-01-21 14:42:54"
                    },
                    {
                        "value": "cfd1a77378decd68cd7a59307b77b93247bdd91e00de5111ecae6b5658c8665f",
                        "timestamp": "2022-01-21 14:42:49"
                    },
                    {
                        "value": "8e97286238a6f425d8a5d93352384cb7f297403353bf21ace3e83c053d3d3225",
                        "timestamp": "2022-01-21 12:22:42"
                    },
                    {
                        "value": "71bad0685e5b2447a8dcdc960ee2930ad5ec4910d5d449040fb52cb9754df2a2",
                        "timestamp": "2022-01-21 12:22:41"
                    },
                    {
                        "value": "c7eeea84c68c73b96a2bc816b9738ca8c9c2abe93f7705ec07f8d1205422d86e",
                        "timestamp": "2022-01-21 12:22:39"
                    },
                    {
                        "value": "a373282700b60a07e656c8aec000d77996d53e8591819099a812c9633f597af2",
                        "timestamp": "2022-01-21 12:22:38"
                    },
                    {
                        "value": "c5ba669697ae91226ac5792c63335ca8c7c33ee0d1431dc4b21c7d27b8a105a3",
                        "timestamp": "2022-01-21 00:03:42"
                    },
                    {
                        "value": "4d905d988ba707e76ad18d72f16b931c1868e3ad4be521bf6142d6b9acf5b28f",
                        "timestamp": "2022-01-21 00:03:41"
                    },
                    {
                        "value": "5683bdb2fc2b2f0bfd524ea328ead3cb7d405f888c54a96fe05dff6ee4d91bd7",
                        "timestamp": "2022-01-21 00:03:40"
                    },
                    {
                        "value": "da99d68a728c3a14d186c03c30b551914fe57073f231d334be7955131cb5f921",
                        "timestamp": "2022-01-21 00:03:40"
                    },
                    {
                        "value": "00a78edf157a3c87ad4b115c94882b77e110d51bd2bd4f59c41781b83620ed7e",
                        "timestamp": "2022-01-20 19:22:46"
                    },
                    {
                        "value": "9af120ade64328385a5befdc034680d48e8a9058d5581a21ea62ada6550ac1a9",
                        "timestamp": "2022-01-20 19:22:46"
                    },
                    {
                        "value": "66057851f8f534441fd89a161f2df30610f1c44554a209c67c09fee531f6a680",
                        "timestamp": "2022-01-20 19:22:45"
                    },
                    {
                        "value": "9f7ef9bbea2209a6fafb00ce6e0f0646d490101e8853015476b794bbf48304ba",
                        "timestamp": "2022-01-20 19:22:45"
                    },
                    {
                        "value": "5bb063ee2622e4f4e0d61535b8ddc6acd3e5674d4ef098bb4b595f1bb61b847e",
                        "timestamp": "2022-01-20 12:02:55"
                    },
                    {
                        "value": "c553442735f0cf507ae1db7e5beb9dfd91e6e26759ba4b064cb284a684ed8aa9",
                        "timestamp": "2022-01-20 12:02:53"
                    },
                    {
                        "value": "d621ac2b137b22e260d51f471e800d28a9f6affef1694b6d2ad3e4581526aa12",
                        "timestamp": "2022-01-20 12:02:50"
                    },
                    {
                        "value": "e8a69c4f115a7e507eed82909897c30ba7f84cd4fcdc9adcad6a16ecf0ca7f66",
                        "timestamp": "2022-01-20 12:02:47"
                    },
                    {
                        "value": "eace00923a15331adc6214d609b21328047a13ffdd4e14cc5e2e142241c156ad",
                        "timestamp": "2022-01-20 11:43:03"
                    },
                    {
                        "value": "ef99d64e0fba1adc021866b880b3b07c9ba523d9fda5766aa548304adaf97de5",
                        "timestamp": "2022-01-20 11:42:59"
                    },
                    {
                        "value": "a717f490985a13d9e685ccaa8024b582a09a0e972d02ff4803f832ae2d027f82",
                        "timestamp": "2022-01-20 11:42:53"
                    },
                    {
                        "value": "dd4d4174a3dc3aa9f5ebff021eb9e561b6e22197d84d4611c6bd83c6cf9ac875",
                        "timestamp": "2022-01-20 11:42:51"
                    },
                    {
                        "value": "2f2b20327889a4f434e5e41e6353596b0afc21d3221814d261c90f1c48cd7b9a",
                        "timestamp": "2022-01-19 19:02:56"
                    },
                    {
                        "value": "81098c0b1c20b6cbe9131fe9de6b51f40b0588d013b15d1bd1eb80d9e3377928",
                        "timestamp": "2022-01-19 19:02:55"
                    },
                    {
                        "value": "b4aa22bf2be1b4ee68eb9eb5af414b0c2a326347f170d1f6fc631851494a3857",
                        "timestamp": "2022-01-19 19:02:54"
                    },
                    {
                        "value": "8392408d685d10ddf024a7e4f47976e03a00fd787bd4ee0932766c4b9b278bc0",
                        "timestamp": "2022-01-19 19:02:53"
                    },
                    {
                        "value": "7764d6643b7098b7e248162f291b00cef219694804d753d280995edf6f43a610",
                        "timestamp": "2022-01-19 17:02:52"
                    },
                    {
                        "value": "495be7b55ddb42db06efc3e8639a6943018b72a64d2917c356250ee517804e1f",
                        "timestamp": "2022-01-19 17:02:52"
                    },
                    {
                        "value": "6f528979bc6c32c3da20d85aeb30ca1011a0c3e8709cf945130c9241ed1f0b73",
                        "timestamp": "2022-01-19 17:02:51"
                    },
                    {
                        "value": "08d4e5e9ae1c6ad7fafbb1a718c2da091c7b002201f1f35f86153a2d8caca57f",
                        "timestamp": "2022-01-19 17:02:50"
                    },
                    {
                        "value": "318ad7fcce3e3e5fd93f89e1a15f6675b7e7f4434fac676192d6f331acd41268",
                        "timestamp": "2022-01-19 16:42:58"
                    },
                    {
                        "value": "e9843d569f5bdca339208ffb80c5c0c9a92f20c85828d03b5cdfc9c37bbd598e",
                        "timestamp": "2022-01-19 16:42:56"
                    },
                    {
                        "value": "e121a37ec336594b9bad743c3d5a1a71c4134505f2ddd94bde7963ad89480ffc",
                        "timestamp": "2022-01-19 16:42:54"
                    },
                    {
                        "value": "8dc3a1ceea1235c988394ef6760796adfefd3f8886da40016b57c5f8d293b85a",
                        "timestamp": "2022-01-19 16:42:52"
                    },
                    {
                        "value": "4fac2fec37ba624d304fcb1740f7743144f8071aa9a01e2f0a491c4d59411472",
                        "timestamp": "2022-01-19 16:22:49"
                    },
                    {
                        "value": "98726c3f2754514f8cc061a34d0a1ed8de1088e8e4a6668cf1a0620ca73a89d1",
                        "timestamp": "2022-01-19 16:22:48"
                    },
                    {
                        "value": "10ff5c8bac827b012bc5b6f789e7c23913b662453cd0bcc7f3f5192260d7a950",
                        "timestamp": "2022-01-19 16:22:47"
                    },
                    {
                        "value": "325161475d78040b7747dede24421e11ccd705849e73752487fb51d9c0b5cda8",
                        "timestamp": "2022-01-19 16:22:46"
                    },
                    {
                        "value": "a96201c29365174913d169c6ef73cefcf1418bc2cce7ac0c910fadcaaa4183df",
                        "timestamp": "2022-01-19 14:43:03"
                    },
                    {
                        "value": "ddab06f6d679089fcbe372096c40a3a0f977629596a3328f54cf4f90db10a2e7",
                        "timestamp": "2022-01-19 14:43:01"
                    },
                    {
                        "value": "c71c5f372c64a0b25a8949ccf1cea29f9cca6d4aa7cf1ea9daa08f34bc1645a7",
                        "timestamp": "2022-01-19 14:42:59"
                    },
                    {
                        "value": "22633ca2e23a6d2353a4a2a4f87b02548fc9c9e92b4e482df9bae8e93c17b793",
                        "timestamp": "2022-01-19 14:42:55"
                    },
                    {
                        "value": "34d41d3f0bac06188163f6f6c4946d6ee0654e3406084b23e9d5e2c8ca9f65f1",
                        "timestamp": "2022-01-19 11:22:49"
                    },
                    {
                        "value": "e912182fd92da6a55c2130b42842864159e24d80ea37a885549c54f377cd7bed",
                        "timestamp": "2022-01-19 11:22:48"
                    },
                    {
                        "value": "ed445a9a5501b9614427e769eb199f9ce4a443d3577078f4b8a821e08e113cd5",
                        "timestamp": "2022-01-19 11:22:47"
                    },
                    {
                        "value": "4347405657fb7bd0556c371bc24640368f52d97791e07f14c79f324a1436d925",
                        "timestamp": "2022-01-19 11:22:45"
                    },
                    {
                        "value": "ca3273be721b393ac408f3b8c6fc347812c08dac8bdd07cf107a4f9ca39332b9",
                        "timestamp": "2022-01-19 07:43:00"
                    },
                    {
                        "value": "59b1f5cc85d4edc7bcd38811f27e9991a829e977cbadd58913670d434dfbfeff",
                        "timestamp": "2022-01-19 07:42:57"
                    },
                    {
                        "value": "ac0e8541f438cc238b024641a37a59ee853b4ec09601c335f4e9defc8fc090c4",
                        "timestamp": "2022-01-19 07:42:54"
                    },
                    {
                        "value": "ec0e331b9e87326fcfa9736905fc2fe7b05d9f83b3d64a14e973995feb7868b0",
                        "timestamp": "2022-01-19 07:42:50"
                    },
                    {
                        "value": "a8239fb45ccf5285584b6e873083c94bcb5836674b8f784744d3cb40690dab00",
                        "timestamp": "2022-01-18 21:43:04"
                    },
                    {
                        "value": "32029d71e2e78d2dcf5f339a868d7272977e45dc7921f00ad6e606281639adcd",
                        "timestamp": "2022-01-18 21:43:00"
                    },
                    {
                        "value": "241007c22f5fa5d8a6121762fb27181a2639cbc3727983a54d0ee6686f04cf52",
                        "timestamp": "2022-01-18 21:42:51"
                    },
                    {
                        "value": "514f598da2f891eb754e272b24aaa04d445481bc2129df701ba5b33c0067fc6b",
                        "timestamp": "2022-01-18 21:42:47"
                    },
                    {
                        "value": "669889ab48ccdbcae984241a72430a77a266343343e626106d89b6cf0a46af57",
                        "timestamp": "2022-01-18 20:02:58"
                    },
                    {
                        "value": "be61e642e55a561d8cfda2871673c66493b8072376d019a86b92f278502c38e9",
                        "timestamp": "2022-01-18 20:02:55"
                    },
                    {
                        "value": "63cac52c1c3bbdc873167d8d747200e611cb51a2a322004a32ce28894958fa83",
                        "timestamp": "2022-01-18 20:02:52"
                    },
                    {
                        "value": "770c04c7c3a53d584af17e38e8e3fe5767d431e26ca59b4dc20de71045354295",
                        "timestamp": "2022-01-18 20:02:49"
                    },
                    {
                        "value": "f37b0e6125b3425fc68e927ce64fca2c30ae3b6ab718acaee3c2f99209b6e8bd",
                        "timestamp": "2022-01-18 14:43:06"
                    },
                    {
                        "value": "f1d862bf1b4212f5b924c6d0d4d03b04299c2474464fb242acedaf00ef44087c",
                        "timestamp": "2022-01-18 14:43:01"
                    },
                    {
                        "value": "4e985458976378ce5866b7631c0bd0ecf259d246b3c9b7f6e12b144efcf855b8",
                        "timestamp": "2022-01-18 14:42:56"
                    },
                    {
                        "value": "6403d40c99b5036c9410e11c11872bdceb1955da70a17bdb979cac381d09cc74",
                        "timestamp": "2022-01-18 14:42:53"
                    },
                    {
                        "value": "bf6b928408267d968a0f16ee2d410213decd91f534d8ae8272d5d7ca5da845e7",
                        "timestamp": "2022-01-18 11:42:59"
                    },
                    {
                        "value": "cd3932d4db9fcac1b45dec936ab8e2b4e0fa3f5fc58abf418887962931000807",
                        "timestamp": "2022-01-18 11:42:57"
                    },
                    {
                        "value": "309e4250eb526deda994ab9ad5b58889e8f70d2c8f5883c16818e8918e99af25",
                        "timestamp": "2022-01-18 11:42:56"
                    },
                    {
                        "value": "719c2edea3c0aaa814d65c272598d8d64db5ac0d0cf0a9adb12fe7a0a1fc9f19",
                        "timestamp": "2022-01-18 11:42:54"
                    },
                    {
                        "value": "b0d65cf9bd6e65d3d8681b4366ceaa50cebea2895a960a2ea9972fe07a09d614",
                        "timestamp": "2022-01-18 09:22:50"
                    },
                    {
                        "value": "b38a7646dd872982e9059ed4a57d79ab8253419bb23cf622b86df536cd5d7dab",
                        "timestamp": "2022-01-18 09:22:50"
                    },
                    {
                        "value": "45df5a161e9e8dc9f9492a94852d70ddc5cac6d0d869cfbfadd1bc3852d3e0c9",
                        "timestamp": "2022-01-18 09:22:49"
                    },
                    {
                        "value": "deee934872825b1259e57720e89221e6c4681233f7bb047a8c38eac220e86773",
                        "timestamp": "2022-01-18 09:22:48"
                    },
                    {
                        "value": "2e6c1e04f6f08de897e180ebf20a7ee0c5dc54e1c4041580386e24f8fbf67658",
                        "timestamp": "2022-01-17 12:43:06"
                    },
                    {
                        "value": "ab31be3231db1bb632a2ab28623072f42fdd94a8ddf7d6dc89ce1d6c9c897b79",
                        "timestamp": "2022-01-17 12:43:02"
                    },
                    {
                        "value": "a7d0cff6a05994c0ae576fa842e44a101879317f62466923f1d96adee2c4a898",
                        "timestamp": "2022-01-17 12:42:58"
                    },
                    {
                        "value": "3f3d011a3815042e5896f5a9ab69fb1cd64d959b84b11ea69330b4d5b96c7bc7",
                        "timestamp": "2022-01-17 12:42:53"
                    },
                    {
                        "value": "2ecba366860a44b8d6e0fa4e238d02ca9728e77a2ecd6ddda25a29c8c1a9cabf",
                        "timestamp": "2022-01-17 09:22:59"
                    },
                    {
                        "value": "4f57f7b6be8f8dc0f6be70a8ef39183a886de3a0a0e8ceebfe594fab83232f50",
                        "timestamp": "2022-01-17 09:22:58"
                    },
                    {
                        "value": "501044b6e00c81f4cbf685b13f3c778d591f267eb10045612609aecb0edc2865",
                        "timestamp": "2022-01-17 09:22:56"
                    },
                    {
                        "value": "89eb51b781b5565e90d6486acf4fb46a30f9dc6dca03b889de0864ba7f07c3eb",
                        "timestamp": "2022-01-17 09:22:55"
                    },
                    {
                        "value": "f353d09bde413e8d9e59d303e46a1596b2a06958207fef3712854331f5755871",
                        "timestamp": "2022-01-17 09:02:52"
                    },
                    {
                        "value": "026114a9eb954287fc9b33852d61afb7bfcacf8ffde40595a74ae02f03e97d0c",
                        "timestamp": "2022-01-17 09:02:51"
                    },
                    {
                        "value": "cab5f50e805b3a36e0ea6cf84c40b4b90e372fcd2f3f1024664af5440282d496",
                        "timestamp": "2022-01-17 09:02:50"
                    },
                    {
                        "value": "3195ae86e77131c8198fe23706427b8a2b5c10d67e8e32f780b93610865a9bc6",
                        "timestamp": "2022-01-17 09:02:49"
                    },
                    {
                        "value": "33bb2954b5efd072d71b4d7bf79eb609e4143a01023c15f8239f3a93561052e0",
                        "timestamp": "2022-01-14 15:22:54"
                    },
                    {
                        "value": "feb40c343aa65f5f5c0a32443535effa22652067c576416857e4d7280ce85e11",
                        "timestamp": "2022-01-14 15:22:53"
                    },
                    {
                        "value": "bdaae5a1a9b92e3e85fa026ae9f6b375eda1eb75a31fa122b204418ff83fc36c",
                        "timestamp": "2022-01-14 15:22:52"
                    },
                    {
                        "value": "900e115c271f29c66454e91f168be012c2ae5d307c86b70e8d595e0bade388c6",
                        "timestamp": "2022-01-14 15:22:51"
                    },
                    {
                        "value": "0d072a60b433f330d2ba97d75eae7af07e9d75bc6ed5b1065287661d05e82ab6",
                        "timestamp": "2022-01-14 07:22:47"
                    },
                    {
                        "value": "9679f0e8f63974d80f953b8212b2668c27ec9762cdcf6acbfd4fdf4b6d189f23",
                        "timestamp": "2022-01-14 07:22:47"
                    },
                    {
                        "value": "097a53e95523a6627511ab11904ab7fba846da6e85ce5cb2dc4f8a6c577228a0",
                        "timestamp": "2022-01-14 07:22:46"
                    },
                    {
                        "value": "9e2502b3945f31482623e8e61dcb85b9ebb7d9a4244d9074fa289596c9da513e",
                        "timestamp": "2022-01-14 07:22:45"
                    },
                    {
                        "value": "7a1b294d8866b5dd6bb9cd19151f5a37b5a41ea4c642a48a2f3296d5577d99bb",
                        "timestamp": "2022-01-13 15:43:00"
                    },
                    {
                        "value": "a15402c5f869a1c02421742c27dd71c2448bb037d391a6bf130be06b2f976e2f",
                        "timestamp": "2022-01-13 15:42:58"
                    },
                    {
                        "value": "ea5194f25d75d5863c5021358599caeae25297a00662d8d55e0ac64694e20f73",
                        "timestamp": "2022-01-13 15:42:56"
                    },
                    {
                        "value": "a2350a5de6de03952d1a75a6135bc92690500e13854d481338bb07aa011bfcd5",
                        "timestamp": "2022-01-13 15:42:53"
                    },
                    {
                        "value": "6436f03253f8882a6b2b9db652501aa2745f3d52f7acb568c70425f46c628d95",
                        "timestamp": "2022-01-13 14:43:02"
                    },
                    {
                        "value": "5bd07db2eed6c7e67e3f3947b5336c6ba986cfbd03bd406c13eda1999a64fc70",
                        "timestamp": "2022-01-13 14:43:01"
                    },
                    {
                        "value": "4355119890ce1e2e2deaa11a30c3d7e604d6cef88b56a51b6b80a34014a972db",
                        "timestamp": "2022-01-13 14:42:58"
                    },
                    {
                        "value": "c4e0e2fd9fc5399619706e67a776832eeb09461874f035a75a7b8e047fb964a0",
                        "timestamp": "2022-01-13 14:42:56"
                    },
                    {
                        "value": "bbeafafcb06e564396566d2ef7bfa9121f1804f40265eeff542b3c124e73bec9",
                        "timestamp": "2022-01-13 14:02:56"
                    },
                    {
                        "value": "a3c1b0817789d0b691bcbfa175958d2b24ad98020ba776c11aadde1d89a964ba",
                        "timestamp": "2022-01-13 14:02:54"
                    },
                    {
                        "value": "44ca01b86305881371e5335ee24243da4d5e7d58c841f02838e2051cf2411af8",
                        "timestamp": "2022-01-13 14:02:52"
                    },
                    {
                        "value": "9fae8a9fba8705091a5c09a9d05996f0136d276f2178589948a37253ad27f6e7",
                        "timestamp": "2022-01-13 14:02:50"
                    },
                    {
                        "value": "d8ced1212879fd997e2ca8aa8ae3b96f564a187779761fcbeff70432b9ece75a",
                        "timestamp": "2022-01-13 12:42:58"
                    },
                    {
                        "value": "73d5dd18c76416b4e5b292395b7dc6b4c92a85ecb4dd19b8add36329531e9266",
                        "timestamp": "2022-01-13 12:42:56"
                    },
                    {
                        "value": "8a8c6d5a47ffd2a33c0046caf9b74a72057cdd946f5a572f2cdef62c1771908f",
                        "timestamp": "2022-01-13 12:42:54"
                    },
                    {
                        "value": "dc9756fc562910cb9b8c083e2a4ed7144968ebe3a264bd178c9209d505a8f9fa",
                        "timestamp": "2022-01-13 12:42:52"
                    },
                    {
                        "value": "2786c13da584648ab86c73ee8a3c1562a9d549cf796a887e4c29c4bdbd5beedd",
                        "timestamp": "2022-01-12 23:43:22"
                    },
                    {
                        "value": "aee39a9e8ad420d5a646b9c4814973ce2563e163b2edaf49caeed69de2a882ec",
                        "timestamp": "2022-01-12 23:43:19"
                    },
                    {
                        "value": "0c510fde61332c2e2aacbfa4d1b7b7c9163e135ff116b7a99191a076728566bf",
                        "timestamp": "2022-01-12 23:43:17"
                    },
                    {
                        "value": "790b3830f3296dc1a897694d2041dc988f06b1ef21643b439713a1b5c9ea674d",
                        "timestamp": "2022-01-12 23:43:14"
                    },
                    {
                        "value": "d67dff51d41111e44fe4dc61b5c741d7cae81e1397dbf55bdd3bd0dc144f342f",
                        "timestamp": "2022-01-12 13:23:02"
                    },
                    {
                        "value": "919687661767fc015c35137f2f48c318f2aba1d21d4e182b678f6920ce6bba39",
                        "timestamp": "2022-01-12 13:23:01"
                    },
                    {
                        "value": "dbd8cf37004f9d00071df320431b5a6c72a9eb1051200f600de7b67c8fe3d1d1",
                        "timestamp": "2022-01-12 13:23:01"
                    },
                    {
                        "value": "c3e318eafb968f401d5165bb17e765613339ce25e4e48e99ea734580fae06d84",
                        "timestamp": "2022-01-12 13:23:00"
                    },
                    {
                        "value": "7602dd51d81cac5ea4f9c90e326bcaf2c445bc4f43a382645a99a2a4b391b836",
                        "timestamp": "2022-01-12 12:02:57"
                    },
                    {
                        "value": "f0711e7499ee1ad5e52c7e11db0b6881eab2445f5f50e5fc90efba03a9bf299b",
                        "timestamp": "2022-01-12 12:02:56"
                    },
                    {
                        "value": "c1032fb7e139221701df1b8d8371d728249e7512d62ba85237c39cb2df559d5c",
                        "timestamp": "2022-01-12 12:02:55"
                    },
                    {
                        "value": "0a01299cae838e8920ce78f846e94890d3a08619316aacfe34f9deb0b364d69c",
                        "timestamp": "2022-01-12 12:02:53"
                    },
                    {
                        "value": "e6fc8bbf9d585429d28269af4f4626388f2451f57f714797dcdaee31f0b089f9",
                        "timestamp": "2022-01-12 09:43:16"
                    },
                    {
                        "value": "ef7a82234bc0a09983ef1f01f4947b3b16e896168ab7415110cbfa5a8c1a4126",
                        "timestamp": "2022-01-12 09:43:11"
                    },
                    {
                        "value": "df0902fb8cec602222442b5a8e680e1d934ab8d9475e7c73d1d07f5819f7ff3b",
                        "timestamp": "2022-01-12 09:43:09"
                    },
                    {
                        "value": "fea546d7310f4cc499ca90f5a6f4c79207e7470a3020d992368c688e7fc385ee",
                        "timestamp": "2022-01-12 09:43:06"
                    },
                    {
                        "value": "29046868e66b623c0915c11121bf42a65d90b981c79fe92f3fbc9d05f507887f",
                        "timestamp": "2022-01-12 02:13:57"
                    },
                    {
                        "value": "1f9d10ca75ecb3da82067b2f1dc2eb049483fa3977a0706ab75d4eac656554b8",
                        "timestamp": "2022-01-12 02:13:56"
                    },
                    {
                        "value": "123ff9f9a3f12261b2f1b201cf6c0c009b94ccab53d22f414113dc926f9eef63",
                        "timestamp": "2022-01-12 02:13:55"
                    },
                    {
                        "value": "4a93a6bd227984ccb5bfcfbdb0d2c2c9584efb85f215052aa1f664faac297867",
                        "timestamp": "2022-01-12 02:13:54"
                    },
                    {
                        "value": "17b88ff2c50e42a2005b94b228f0094c20e91fe85e664e6a360428e406bba7d2",
                        "timestamp": "2022-01-11 14:43:16"
                    },
                    {
                        "value": "cf2b471bac08d2dba0be75a9e235850be79fd9cccad613bb609e19cbfaba8e07",
                        "timestamp": "2022-01-11 14:43:13"
                    },
                    {
                        "value": "10aa7088156f972d7f44c8183c9b26c4ca290e5e1b92b59585a91b9946fb73e2",
                        "timestamp": "2022-01-11 14:43:10"
                    },
                    {
                        "value": "8cb844aa8603cdbfe0130141062ddc227f9bd79c5f92249cb74d2d3371f1b701",
                        "timestamp": "2022-01-11 14:43:06"
                    },
                    {
                        "value": "daf8772c9ec3be51800121c695f70edd58d19065e561bb796265a558be7f9e4f",
                        "timestamp": "2022-01-11 07:23:14"
                    },
                    {
                        "value": "fe2b4aaaf1ff3859448afe8a8d14fbc04c426476f0a1d73e898f09e5f1b7ee41",
                        "timestamp": "2022-01-11 07:23:13"
                    },
                    {
                        "value": "83f6940a0fadd38a9a73e859f46173631822ee985037994c6c55b328721d76bf",
                        "timestamp": "2022-01-11 07:23:12"
                    },
                    {
                        "value": "61835227257d103cd2caddf8dd545d78d0cdfe163b56543416f7be754a5b8dc3",
                        "timestamp": "2022-01-11 07:23:11"
                    },
                    {
                        "value": "18045e1a5b23d77163ad2021a1294fd5e5b4dbaf7a9e1e3fab34fe1da53d7e36",
                        "timestamp": "2022-01-10 16:03:21"
                    },
                    {
                        "value": "eb20fafc5d17db29e4821e91a15bdda62420e4677d1f14341f01cbc4abbe43b1",
                        "timestamp": "2022-01-10 16:03:21"
                    },
                    {
                        "value": "5f9bc09e4b5b782ff1b0cb564bd217b31c79e0ca253c136b7f5e4744460b2bb9",
                        "timestamp": "2022-01-10 16:03:20"
                    },
                    {
                        "value": "b96ca58283b93759b2ef06c895c498a453dac5bf2ab2ed72e8597846a9a39582",
                        "timestamp": "2022-01-10 16:03:19"
                    },
                    {
                        "value": "7cb0a06f7d34e3e89e90112768ff4a8c66897ea5a10a880c9aface1d544c3b2f",
                        "timestamp": "2022-01-10 16:03:18"
                    },
                    {
                        "value": "aa6f69331668bec56098b1692ed0656e085b622d2188850f407564e3b2a9f8dd",
                        "timestamp": "2022-01-10 16:03:18"
                    },
                    {
                        "value": "44ed69358c6ef98ffc0e4da5aee0692f74fd03b8a7ea7c5c3b08f427f32a45e5",
                        "timestamp": "2022-01-10 16:03:17"
                    },
                    {
                        "value": "3dceeaa794d1b8b67ba67c57820ba13f8078801c589747426b0562b5ebf411ca",
                        "timestamp": "2022-01-10 16:03:17"
                    },
                    {
                        "value": "56d2b2837e2856b61ad276a3b52151851a79e366c22c03652caf2ad2b50623db",
                        "timestamp": "2022-01-10 12:43:29"
                    },
                    {
                        "value": "a2246929d3ab4e43481e21bc6fcdf0cef7c999e37e627cf2b610914e519a3d2f",
                        "timestamp": "2022-01-10 12:43:28"
                    },
                    {
                        "value": "73c029fbd27d0c281ac91d030160bd9ba859ab57db73b5fd7011f470ab90fc8e",
                        "timestamp": "2022-01-10 12:43:27"
                    },
                    {
                        "value": "71b5cd3141bc4295b307e3a6c02716187e91daa67d502c86aa3e8de434ae14b8",
                        "timestamp": "2022-01-10 12:43:25"
                    },
                    {
                        "value": "40a298c96e7be4f585a294ae8453cae3ba5628702462d5101ea607963041c9ad",
                        "timestamp": "2022-01-07 13:43:15"
                    },
                    {
                        "value": "702d3030838e32a3a304f2765eea7f2a0dcf256890ee1614afd6508c3035d842",
                        "timestamp": "2022-01-07 13:43:13"
                    },
                    {
                        "value": "c78fe786be3f296ca7adaed195cb160e67065479e0a72fd08aeb6fc52ccf946b",
                        "timestamp": "2022-01-07 13:43:11"
                    },
                    {
                        "value": "43be4008732481434fc9a4f2bf3ceab8a9c467b0ea0acde7d701a82b3083396b",
                        "timestamp": "2022-01-07 13:43:09"
                    },
                    {
                        "value": "86d9f290badc30732592c1af4705f3dedb1516cf25a4ec01a44b64fad834c718",
                        "timestamp": "2022-01-06 18:43:07"
                    },
                    {
                        "value": "c18a83abec68952806eded1eab230d78eb4da3cc896d3b675d635b77a5446413",
                        "timestamp": "2022-01-06 18:43:04"
                    },
                    {
                        "value": "5c05ff860f7d421506e3e20e83b955a148ec9f4429313881d1c4f1bd22f58e3f",
                        "timestamp": "2022-01-06 18:43:02"
                    },
                    {
                        "value": "4cdb484aff91fc4c74a8f2750296212dd12af808fee3e01bf9b8d0feafbd8fc1",
                        "timestamp": "2022-01-06 18:43:00"
                    },
                    {
                        "value": "c28203b081d9065e95c9ff074afbdb8da0ab9e2971a1cc37841769312a1bd31e",
                        "timestamp": "2022-01-06 07:23:05"
                    },
                    {
                        "value": "b4d5b93e0fcadfdffbaa261a8992cf3c5f9d5f4f49cebe85963b09d2bbaa225c",
                        "timestamp": "2022-01-06 07:23:05"
                    },
                    {
                        "value": "8916ff8c659e74f4a3523cda054e5ed98209f84cb23f28c5857d670d5dc512e2",
                        "timestamp": "2022-01-06 07:23:04"
                    },
                    {
                        "value": "fcb8bd3b27beffa5255fbc8b485b038b321043eecd77fc21cf4798446c21a971",
                        "timestamp": "2022-01-06 07:23:04"
                    },
                    {
                        "value": "d3c3519e30e5c8d6485b91f7bd63529ef294c63b5da4f7d059fb4c22cd5c9d4d",
                        "timestamp": "2022-01-03 12:43:11"
                    },
                    {
                        "value": "fbfc9fa499af65c95ad6cdc5f2176d46ca7eddb6c553e383a65bb572cf00f0ab",
                        "timestamp": "2022-01-03 12:43:08"
                    },
                    {
                        "value": "33dd1be2efb1cb9cfaf01bdec2e362aca98d4d4f1f00d540fe0fe2b5a6d875d9",
                        "timestamp": "2022-01-03 12:43:06"
                    },
                    {
                        "value": "e7e96e3fcdf2d9539c750c66f509c8d9d8d9a68e0fa2d944464b4095df875fda",
                        "timestamp": "2022-01-03 12:43:02"
                    },
                    {
                        "value": "1b4166bc4be48d57923c47c94ce13634543a6c2c867eada23fb465de5aa60619",
                        "timestamp": "2021-12-27 07:19:55"
                    },
                    {
                        "value": "a62d86553ec0f680e0594d73717cfb95f2d4079ff1e9661a58041b0d841fabfe",
                        "timestamp": "2021-12-23 08:42:39"
                    },
                    {
                        "value": "9029cb23c3237afc1e63076ffba6a89ed9d4fec8df9606feebe68b2de092fa36",
                        "timestamp": "2021-12-23 08:42:38"
                    },
                    {
                        "value": "6d1ae3278059d592ae7c4426df9456553b8abfbc3bd90ce0f8d1792e94ae95c2",
                        "timestamp": "2021-12-23 08:42:37"
                    },
                    {
                        "value": "91671af7ddab77d6275fd701d5fbcce56df0819740adfcc3c142385c13a08737",
                        "timestamp": "2021-12-23 08:42:36"
                    },
                    {
                        "value": "a65e0c7aa04fbcc56fac5fec78b13d51f6c17fe0ba7f34a58a0529bd414048f2",
                        "timestamp": "2021-12-22 16:43:06"
                    },
                    {
                        "value": "3a3f084424de70e98db9debcbf1467a828e9b1e3272390bf319e8efe1f84c88a",
                        "timestamp": "2021-12-22 16:43:05"
                    },
                    {
                        "value": "8fd984dc2c6f5fa97f5916309f2994bfb8dd2a9284c7c777e05c47ab65615f95",
                        "timestamp": "2021-12-22 16:43:04"
                    },
                    {
                        "value": "ede263cc6ef7f43b42a8131c6e435aa8335057db50b3f4cfd1683636a7a2b37f",
                        "timestamp": "2021-12-22 16:43:02"
                    },
                    {
                        "value": "feba5b9098b9346bcee2a4ad9088cfe9e4a9103c73c533c328e24396f86d1049",
                        "timestamp": "2021-12-21 12:43:02"
                    },
                    {
                        "value": "c80813f3b441b2db332392c2c2665c5f7ed0a02f5c8b65d9f200cedc6efcec28",
                        "timestamp": "2021-12-21 12:43:01"
                    },
                    {
                        "value": "555d872259304d1fa5746efa21f6f0676e4bb1e35327724e0096da5d8f2d39ef",
                        "timestamp": "2021-12-21 12:43:00"
                    },
                    {
                        "value": "46caa8b91a66733341c27be9ff01660598bd632da937d366791f534791054ceb",
                        "timestamp": "2021-12-21 12:42:59"
                    },
                    {
                        "value": "83c0522ec3e0c84aa10a90d4ed524926fd03677c5a57c17b8540450f80fa3ae2",
                        "timestamp": "2021-12-21 12:22:52"
                    },
                    {
                        "value": "5f722446f2a031a1bcec33c3c64ba4cc70c48119f70748df71168083e21abb04",
                        "timestamp": "2021-12-21 12:22:52"
                    },
                    {
                        "value": "9153e0def0d933deb6dfe90701da2ad9b2d5c90a35cf02d4bd8d17764c38cc18",
                        "timestamp": "2021-12-21 12:22:51"
                    },
                    {
                        "value": "4f312c58533b2e7e9f1e3968c85e35067dba0a8b1111296c49992fd624a758db",
                        "timestamp": "2021-12-21 12:22:50"
                    },
                    {
                        "value": "1ff71739ee5ea294fcfe814b15edec39fab1abafd99066cee2e2b215bc58626b",
                        "timestamp": "2021-12-20 16:02:56"
                    },
                    {
                        "value": "b7a2b75852ec0ba3b1fd5c0130ba914a65af6873f3040fc1e38232f1ced538cf",
                        "timestamp": "2021-12-20 16:02:56"
                    },
                    {
                        "value": "897396a04a5125ee80a2d5717914e50e717c9e957bcdccad5d6531dec785fa88",
                        "timestamp": "2021-12-20 16:02:55"
                    },
                    {
                        "value": "d9563466b0112cc1d51196d5ea329e684cb3373f5fd75bdafec0210b3940b111",
                        "timestamp": "2021-12-20 16:02:55"
                    },
                    {
                        "value": "c260f3c548190ad93420471811c98aaa3b482a4362ebf6defbedb098386d4c0f",
                        "timestamp": "2021-12-20 12:42:56"
                    },
                    {
                        "value": "92e8db454d04c7e166173fcf438f08fe7301a0113b08f7d0711870fe917b9211",
                        "timestamp": "2021-12-20 12:42:55"
                    },
                    {
                        "value": "6a7753dba591a0f953c07a4e13ef1682c3839bcc380545a647da6e24bef41786",
                        "timestamp": "2021-12-20 12:42:53"
                    },
                    {
                        "value": "e4294ab8836773394cbef7929aa75a85fbf81400561f9da8501ae3b9dfc146f0",
                        "timestamp": "2021-12-20 12:42:52"
                    },
                    {
                        "value": "8385b60d14ff8415b84cb47cf5a054c10e00cd22a7fe391baea1a303e0a1228e",
                        "timestamp": "2021-12-20 12:02:56"
                    },
                    {
                        "value": "cb13b76515eda9a32e999b61c7e11e01de16ebeaf9ae6c503a1a0d238bc5bf37",
                        "timestamp": "2021-12-20 12:02:56"
                    },
                    {
                        "value": "ff29dca8bd27cb1812db7052789782c25c0bcf0494f6b391300a8c043bf55775",
                        "timestamp": "2021-12-20 12:02:55"
                    },
                    {
                        "value": "ae371c388cd7f047ae61f852158fc5de2c7f5ab2bdda4b211b9fd87c7b6272dc",
                        "timestamp": "2021-12-20 12:02:55"
                    },
                    {
                        "value": "db74e94028492d9ff99b4f01f2715057220d945c0c5c90ac7ee77ef3e8a68c02",
                        "timestamp": "2021-12-20 05:42:56"
                    },
                    {
                        "value": "826b9ddd308b1e1df1e1e9ec256b8a0c6e458e69ac98389d057cf2bf830221a0",
                        "timestamp": "2021-12-20 05:42:55"
                    },
                    {
                        "value": "729a24f2784fd7f9f02f9696e692f629370a150a1ed5e47b74efa2b0b5bafd72",
                        "timestamp": "2021-12-20 05:42:54"
                    },
                    {
                        "value": "61fb7705561971ce9616f09d26d326cee55407ed95464094ec529666beaa0b68",
                        "timestamp": "2021-12-20 05:42:53"
                    },
                    {
                        "value": "5cf30c00d7d4d16229204e0c969f26a1a0fa2f0067818d518a81d97123e277d9",
                        "timestamp": "2021-12-16 11:42:55"
                    },
                    {
                        "value": "440c33ae298e0f3909bbc8e1aaa7a681237105ee5c725d2a87b0fc7e08bb24bf",
                        "timestamp": "2021-12-16 11:42:54"
                    },
                    {
                        "value": "5bc7c416b8a3a003225a4427ec7d1824af457dadb326bfb277f3224b6ccc7707",
                        "timestamp": "2021-12-16 11:42:53"
                    },
                    {
                        "value": "429e0f20edcb3730de7f788cfd7cbe96a2320d7baee7c339e790a5906016c8f2",
                        "timestamp": "2021-12-16 11:42:52"
                    },
                    {
                        "value": "7fe0a610fcbcddb5d954efaf23d8d6c9eccf24b841b35ffa2956f4370ec106a6",
                        "timestamp": "2021-12-16 10:42:58"
                    },
                    {
                        "value": "0e3b4dc965f16d7ba990a4283385fa23fe9f34a80b002924b36619a6585124ac",
                        "timestamp": "2021-12-16 10:42:56"
                    },
                    {
                        "value": "23432b9dd88c4f25c734ec49c8961811ec7ea3655d99f84f74ec2c166966d328",
                        "timestamp": "2021-12-16 10:42:55"
                    },
                    {
                        "value": "bc83ad76bf99cf257e381272a7db0e07e7faac33aad6de6f2d12460e9022ff4a",
                        "timestamp": "2021-12-16 10:42:54"
                    },
                    {
                        "value": "6fafca0825dbdedf739d4f57ea1b09563eed9834a54f2998b712891baeef4839",
                        "timestamp": "2021-12-15 14:03:04"
                    },
                    {
                        "value": "47b60aa70fa7cd23cd1157224bf229245b2150a1c5e87cf26588ab5e595b667b",
                        "timestamp": "2021-12-15 14:03:02"
                    },
                    {
                        "value": "52b3b8d10c143dd7b6dfc186bf1e1e0e3c47c3f995dec4e1e4f5f569075d9a38",
                        "timestamp": "2021-12-15 14:03:00"
                    },
                    {
                        "value": "9a51dc85d2abbf3f21781fc5b5788a1d6ae37b699712b952e5bde286f1d07ca5",
                        "timestamp": "2021-12-15 14:02:58"
                    },
                    {
                        "value": "497ca74514404b8699709d6fd3e3ab89cbd5eeb8fb1a5dea69561297f6a5e09a",
                        "timestamp": "2021-12-15 13:22:53"
                    },
                    {
                        "value": "f6b9a5b9e77ce40233ca7a2db4afc41e7022721698f5a86964d302b3f6335570",
                        "timestamp": "2021-12-15 13:22:53"
                    },
                    {
                        "value": "9d542cbd5402390cff627ff88158b1aada6d9f00a8444fcfd321e91385e94f15",
                        "timestamp": "2021-12-15 13:22:52"
                    },
                    {
                        "value": "21c50130c0b5f8b735416ea6b7790e2c65f33404dfa0b9e73c1ea9721b15f59d",
                        "timestamp": "2021-12-15 13:22:52"
                    },
                    {
                        "value": "9101d18dd9518e024684e64b8164b34a62c2ed8d0340e9ec77ca7db13ae376c5",
                        "timestamp": "2021-12-15 11:22:56"
                    },
                    {
                        "value": "101477ca4a93dd39fc6c14ae5f278753bdd78a2eba5b30b63e8bcd2b9c49bab5",
                        "timestamp": "2021-12-15 11:22:55"
                    },
                    {
                        "value": "bda86194f1a3f58ec0ba9f1c5ab2b4cac5354bf842b4d6db935ece4715cbc5a1",
                        "timestamp": "2021-12-15 11:22:53"
                    },
                    {
                        "value": "b70c26b8d08a6a17aed3e8372c24281f0efbd185592143d48bfbb38281688990",
                        "timestamp": "2021-12-15 11:22:52"
                    },
                    {
                        "value": "a509c6fdeabc79d6672015fec0194be2ec231eab3e07aaf1eb0a51a02357f06c",
                        "timestamp": "2021-12-14 20:42:59"
                    },
                    {
                        "value": "8f454860eb8461e6febf3a1977cc7a53733dd72960fec1a41d17ab4e03af6f0d",
                        "timestamp": "2021-12-14 20:42:58"
                    },
                    {
                        "value": "8f1a3da6ca3720e07d30f1ab03e499ca5a2c8cc463eac1ae47e3991d7c9c8120",
                        "timestamp": "2021-12-14 20:42:56"
                    },
                    {
                        "value": "68e59df86d888e1dc47c060c3a871ee1b075a2b7aa21e6319f065e435bf6dff5",
                        "timestamp": "2021-12-14 20:42:54"
                    },
                    {
                        "value": "23cc653ccf677673adb0aef167fdc3e661a401eb9774bad371b7aac17e71e072",
                        "timestamp": "2021-12-14 18:22:59"
                    },
                    {
                        "value": "016e905f55c0665462f3966c14f64bde34bc5ce261a9667af8e51e5fbc76af77",
                        "timestamp": "2021-12-14 18:22:57"
                    },
                    {
                        "value": "522547a4781e5beee26ed47e1bec922903e1c7387ef57dd9d2c5a4d6e62abd42",
                        "timestamp": "2021-12-14 18:22:56"
                    },
                    {
                        "value": "2da5894ddf4a54f105d7a36e1e8940b00313b16ccaa74f270c542ed140247386",
                        "timestamp": "2021-12-14 18:22:55"
                    },
                    {
                        "value": "c2087ede8f3209dca89f1bf7e53ae06bc184d02273668e8541e7ca9a018ad8ba",
                        "timestamp": "2021-12-14 10:42:58"
                    },
                    {
                        "value": "2c8f4b4a178ea06cffe462e08ba5ddabb964cb715b9cdd4024c1b0f7bc7e78e6",
                        "timestamp": "2021-12-14 10:42:57"
                    },
                    {
                        "value": "dde5521f4b34414e6850fc869de027df46f3e4d5a1cb3cbb483c2900abe49c0d",
                        "timestamp": "2021-12-14 10:42:56"
                    },
                    {
                        "value": "b798e62f158ea638c3e7752dfcd939e7d4423ce9aa3a8b4e64d84714916e91ec",
                        "timestamp": "2021-12-14 10:42:54"
                    },
                    {
                        "value": "72d6c00c9f2fd5868669c7fc70042bf0f1c2a0892d1b8423ec8541ddfb44650f",
                        "timestamp": "2021-12-14 08:23:00"
                    },
                    {
                        "value": "fe349bac9f33b75d12f5921650633cd3eb6840cab1d6a9e8899c85c94cb90f20",
                        "timestamp": "2021-12-14 08:22:59"
                    },
                    {
                        "value": "0889541652d528aa5ac3a0d53cb44d60151a6005c870044012192d034ee3ea10",
                        "timestamp": "2021-12-14 08:22:58"
                    },
                    {
                        "value": "e139e7e12f7371609ac2069b8c043797fd06ea8230138b074a806b9014cf934d",
                        "timestamp": "2021-12-14 08:22:57"
                    },
                    {
                        "value": "bbf73878e7f9f3afaf18ae1f625aa3c965b11b8592a2ea033fd848c8a305ba10",
                        "timestamp": "2021-12-13 13:43:05"
                    },
                    {
                        "value": "b02b6cbcd855ba24e38b46c1bf1cc9744bde93bb931c55fa5ac98e595e15b347",
                        "timestamp": "2021-12-13 13:43:03"
                    },
                    {
                        "value": "d0c7cb4efaa9eef4a5bc97742f9607fc93d7fbf633e0e2e7b42b72950083e1d4",
                        "timestamp": "2021-12-13 13:43:00"
                    },
                    {
                        "value": "cf58d4385f81f977c243864573bafc608d6665611ad5c3c3dfa3fb5f33ec8a5a",
                        "timestamp": "2021-12-13 13:42:59"
                    },
                    {
                        "value": "85dca30464e5d239a82140c6611e7d9d2e4e8a7400c869c36c3c4999a0b221dc",
                        "timestamp": "2021-12-10 13:23:07"
                    },
                    {
                        "value": "0f1a0489b84ed6f3a910d6dfe2ece22fed9527038bf1260f95846273210b5dd2",
                        "timestamp": "2021-12-10 13:23:06"
                    },
                    {
                        "value": "b2884177a6d83d9446758100db490aab3b904a5d1bd154a287c315f92891cfac",
                        "timestamp": "2021-12-10 13:23:05"
                    },
                    {
                        "value": "5ab0d76fb15ffe7bc54d8b9fbde465bbf25154aef10e7b39a4facd9c2ca97ff0",
                        "timestamp": "2021-12-10 13:23:04"
                    },
                    {
                        "value": "e9a75d41a15087731bbbd0632818b307a9d43c33369a8b77d048ed665fdadf38",
                        "timestamp": "2021-12-10 12:43:20"
                    },
                    {
                        "value": "81041f66a1d5d0c814b9e6d01361ef58fdbb80be9b33f456eb3a90a3740e7e71",
                        "timestamp": "2021-12-10 12:43:18"
                    },
                    {
                        "value": "b13782a081582cd40a427da82c93035d3a59cd7dffea1e9b3f3821c55fde233c",
                        "timestamp": "2021-12-10 12:43:14"
                    },
                    {
                        "value": "b2672c7a374d959f6aa6a58f68077cd0b506b05832b632b3e05c6039644b9236",
                        "timestamp": "2021-12-10 12:43:11"
                    },
                    {
                        "value": "f6ec336ad7902fc73ca6256fc549d449e8a59daec2ece6053f68cdca3fc09011",
                        "timestamp": "2021-12-10 11:23:09"
                    },
                    {
                        "value": "27fc31505dbc8da778775ca436aba118b32f405fc5927251bde8e675f6d86c21",
                        "timestamp": "2021-12-10 11:23:08"
                    },
                    {
                        "value": "c56533378ab28c47d7cff589aa4eeaee5c437d47bf2258bbff19f29ec4a9f3c8",
                        "timestamp": "2021-12-10 11:23:07"
                    },
                    {
                        "value": "9e6246dd64c61523ddeda8739ad165b606bc4e79faba6c744a5bacd36da321e5",
                        "timestamp": "2021-12-10 11:23:06"
                    },
                    {
                        "value": "a2de25a6967a8ca50def37cf069646b7a523ed322e835b166981af90ae1e840b",
                        "timestamp": "2021-12-10 09:03:18"
                    },
                    {
                        "value": "0b3e0eaa47d910b34d946aa0b5eeb926f78a8c7820e2fe8941276e9a19ca6a16",
                        "timestamp": "2021-12-10 09:03:17"
                    },
                    {
                        "value": "11b9bbc9097d7b715e177ab57fd8669891dcc9241441036418a5f254d36f2edd",
                        "timestamp": "2021-12-10 09:03:16"
                    },
                    {
                        "value": "84f01d9761a5e76774cac6a3a21c50e3b653f725276d32ea3a10d7ec00e14c99",
                        "timestamp": "2021-12-10 09:03:16"
                    },
                    {
                        "value": "869a075f9809475dd6839987e3b1431a1fd437ad7879becd35e4f055b4a7f747",
                        "timestamp": "2021-12-10 08:43:17"
                    },
                    {
                        "value": "46ddb849a4116ca2d82284093122c096400a3bfb30264d01830b394231885873",
                        "timestamp": "2021-12-10 08:43:14"
                    },
                    {
                        "value": "aea82dc29f0c4463b5d09b61c695b488be9eb1b07e1868c1c4ef72523c853cd9",
                        "timestamp": "2021-12-10 08:43:11"
                    },
                    {
                        "value": "34fcac5d4cf2062249f369fda6ae1932ac41655890da91f02bc304afe3706e86",
                        "timestamp": "2021-12-10 08:43:09"
                    },
                    {
                        "value": "d8197d0487c0ee32a6bb005726754e4d56938132dffa8e3b985032a957bd57e9",
                        "timestamp": "2021-12-09 17:43:14"
                    },
                    {
                        "value": "c59080f52c17a26a96ca4c5aff0e0505a61c05cf78b36c31f2e7db7af160a9e3",
                        "timestamp": "2021-12-09 17:43:11"
                    },
                    {
                        "value": "ed040435995abe0661698cb93c3738dd371f608460fa6082845f559f9e5b42ed",
                        "timestamp": "2021-12-09 17:43:09"
                    },
                    {
                        "value": "153973d2cd26d5d2aff49d692bc9afa7e5b76e1e465db0aaab1299596f988674",
                        "timestamp": "2021-12-09 17:43:07"
                    },
                    {
                        "value": "261f6891f91c54e852b53fa480e333c2ab5f3ef675abee81e3632ff9c67defbc",
                        "timestamp": "2021-12-09 17:23:10"
                    },
                    {
                        "value": "013dcf7049eddbbde1a44b63f4d6ac04f30be79b7128846d8b8ed971475e7f48",
                        "timestamp": "2021-12-09 17:23:09"
                    },
                    {
                        "value": "239d8f19fdabf7c7759164fe43f586eed4209d86988543b70927aabafc640702",
                        "timestamp": "2021-12-09 17:23:08"
                    },
                    {
                        "value": "fcbc4e6755450f8411e653b1b26d724a1ed3c7533659f895cc512129788e43ec",
                        "timestamp": "2021-12-09 17:23:08"
                    },
                    {
                        "value": "99349931b602d6e17c3df06e0efc5a67d65379ba0e9efc43452a53531abcd04d",
                        "timestamp": "2021-12-09 15:23:10"
                    },
                    {
                        "value": "da4920077303172dccaf8ea8c05798485521adaba58adcc48615dd8142b3ec2d",
                        "timestamp": "2021-12-09 15:23:09"
                    },
                    {
                        "value": "d71a13961641be605fc131e18e4b3596229b1acd97168f88088c7e3d0da95f7b",
                        "timestamp": "2021-12-09 15:23:08"
                    },
                    {
                        "value": "e296b5047fdce5ec6a25a191b1a57c5fc8582305040fc7b3cadfd2dac6ee8c6f",
                        "timestamp": "2021-12-09 15:23:07"
                    },
                    {
                        "value": "8b512ad7068ec518ab8d38f8b37eaba6ac7d7dfe8c940cbe5da11d751f4eeb57",
                        "timestamp": "2021-12-09 10:03:19"
                    },
                    {
                        "value": "96881d674f8e6c8ff14c923bc5c64aad6bd57ff03f540d8bc75e956fcfd49f8d",
                        "timestamp": "2021-12-09 10:03:16"
                    },
                    {
                        "value": "76d5c3b57dff4dfc26790620144a3aaff165fbd2e4aeb6859c870e59732b44be",
                        "timestamp": "2021-12-09 10:03:14"
                    },
                    {
                        "value": "5e358d7efd59653da3b376bf85ad3657ca8fc74a41272da720e3eedfb4572f8a",
                        "timestamp": "2021-12-09 10:03:11"
                    },
                    {
                        "value": "84b10e9bdbf1fbfffcdd5363c37261f5b12ceb31b7cfb4804335e7969a756643",
                        "timestamp": "2021-12-09 09:03:13"
                    },
                    {
                        "value": "67784b75c77762be449b4a271f9afa04520817197749c84a82ca8d1942867163",
                        "timestamp": "2021-12-09 09:03:11"
                    },
                    {
                        "value": "8be6a49e7716bd0a8fb29e9a49ea8a3cedd5e6d1ade75d1024c529bcdc9ba31a",
                        "timestamp": "2021-12-09 09:03:11"
                    },
                    {
                        "value": "87c4a09709a7ba312539673bc4e85e4543d8e1ac4da43ce58adf8635f97f6207",
                        "timestamp": "2021-12-09 09:03:10"
                    },
                    {
                        "value": "9c433b8fa25047f84572f4c7192bd2741148b2cb5da1747bac3bf49e5dc6e0bd",
                        "timestamp": "2021-12-08 17:22:55"
                    },
                    {
                        "value": "f00c0f04ef631da780c92bd7249339579672e0898ed1ff05fa7617d2c182e682",
                        "timestamp": "2021-12-08 17:22:53"
                    },
                    {
                        "value": "7510ce89e5a0c161ba2fb80cdb60b0174a03910bbcba834cbd1b44a5662a3b8d",
                        "timestamp": "2021-12-08 17:22:53"
                    },
                    {
                        "value": "8590ed565f8e910b38ca91f89df8dc73bd6fec5eabb2b6964f70b4ad586f801e",
                        "timestamp": "2021-12-08 17:22:51"
                    },
                    {
                        "value": "3df75e26a0dd77355106186b5a94825e812eaa96d8a60308fbe10a8ebf56ceb7",
                        "timestamp": "2021-12-08 17:02:54"
                    },
                    {
                        "value": "43cec694b6b2894275243aec6b741480e52a4b7a84393a496876f4d1ab6d0630",
                        "timestamp": "2021-12-08 17:02:53"
                    },
                    {
                        "value": "399d8e9277b5f66e82967946935e260029d9920532a649c8cca7e637ef34e2f4",
                        "timestamp": "2021-12-08 17:02:52"
                    },
                    {
                        "value": "aa1ed7d67e7fa96b7e3178502fd95eb92bfd308d6d5ca48a14936d1f7d3a2a3d",
                        "timestamp": "2021-12-08 17:02:51"
                    },
                    {
                        "value": "feb1580ad2cafa137008087673e30951af8d9cb32b575933267153505e9d633f",
                        "timestamp": "2021-12-08 16:02:54"
                    },
                    {
                        "value": "436da418f3b01a9a647352db989c0a719e2de3299fb1c97d10f64c3373dab01a",
                        "timestamp": "2021-12-08 16:02:53"
                    },
                    {
                        "value": "31b466b750dfc24e479db06a9449944efb36ff26578d472afd92724fa5dfafd9",
                        "timestamp": "2021-12-08 16:02:52"
                    },
                    {
                        "value": "80c147306d69d56653d06bf36941c0d163ea66d17e295e1aa7c255626bdb78f7",
                        "timestamp": "2021-12-08 16:02:51"
                    },
                    {
                        "value": "d176de3884899e94f7c82f1ad0b21e9f305d3d5d7d753cc701a880e01d692cad",
                        "timestamp": "2021-12-08 10:42:55"
                    },
                    {
                        "value": "27b0d2e9f055e7130dc5996ad1807a1b098ed9871163a727b909f248a34035da",
                        "timestamp": "2021-12-08 10:42:54"
                    },
                    {
                        "value": "8a2a6b216395521669c364a3f7478688a495e007c1e547db45a94780e32663f9",
                        "timestamp": "2021-12-08 10:42:53"
                    },
                    {
                        "value": "a14084a3591c1293c9eae0c70b81fdac2247137712ff28a74144e3d1bc2b1d74",
                        "timestamp": "2021-12-08 10:42:52"
                    },
                    {
                        "value": "12a68e43315281f8ab066407b878342411ab7fa3433dacf9be79ff64b58e06f8",
                        "timestamp": "2021-12-08 07:22:49"
                    },
                    {
                        "value": "1409ef2f3a8f71bcac7c0e335380f5a804535dba5dca598429298a53aaec9e04",
                        "timestamp": "2021-12-08 07:22:48"
                    },
                    {
                        "value": "4f0f7112c76e453d7c86969cb806bb7b92b81bc5f6017da9ac46d57aad59e345",
                        "timestamp": "2021-12-08 07:22:47"
                    },
                    {
                        "value": "ce5ef050cbfe862b46edb70c1d3ee90b1fc3940ef93ee7fffe642589673d331b",
                        "timestamp": "2021-12-08 07:22:46"
                    },
                    {
                        "value": "49b71e95d42c23779235cac4b7be0c8a077178ad5c3ed6667a6910edbacde6b9",
                        "timestamp": "2021-12-07 18:43:21"
                    },
                    {
                        "value": "85f54661bb1d99a8e1c1666e7185d9fdc8695c3d480195e21071d0cf984b033f",
                        "timestamp": "2021-12-07 18:43:21"
                    },
                    {
                        "value": "02dc7bc928df0164f383586f18bc8287d1e15975c933cb965e048870b86728bb",
                        "timestamp": "2021-12-07 18:43:18"
                    },
                    {
                        "value": "f5f1c939d0716dccf4bc706e78195b3207dd19665a6eb7fb152bd35a55ad3345",
                        "timestamp": "2021-12-07 18:43:18"
                    },
                    {
                        "value": "61c229a29725832979abf316100993b98ffbb26b0c63ebefcebbe25e24b324d9",
                        "timestamp": "2021-12-07 18:43:14"
                    },
                    {
                        "value": "b887cde2507716d10f895ffad61e1bf5b43fc39d8d5587eab44c5099191a3b80",
                        "timestamp": "2021-12-07 18:43:14"
                    },
                    {
                        "value": "f3df0a22e5b8019a86a79a232bc3578929329ad0506378b8ccea37d99b1a6b25",
                        "timestamp": "2021-12-07 18:43:11"
                    },
                    {
                        "value": "a48338ad920df299184caed650b6105804c67269494766bdb8651f4d288b8a0b",
                        "timestamp": "2021-12-07 18:43:11"
                    },
                    {
                        "value": "ddae9e103982ab3a95b3095094152dca4f4b838dadc4c6128032b8e78f4d2059",
                        "timestamp": "2021-12-07 13:02:51"
                    },
                    {
                        "value": "a8026cedc6f508f5fb982c7bd33732418e056de7c82a3633f7f5bd68c6bace9d",
                        "timestamp": "2021-12-07 13:02:50"
                    },
                    {
                        "value": "734bf6dc37410e78255fb46135d5914666b39f17124efcfbc20fb005c54c75ee",
                        "timestamp": "2021-12-07 13:02:50"
                    },
                    {
                        "value": "01c8dd04b2d160ca088d446584738950222e99ade79d1bb87887313e7d93ac38",
                        "timestamp": "2021-12-07 13:02:49"
                    },
                    {
                        "value": "ffeca3430402f8d3862b9fbed99a0d376828de09665b4feee38b7231098d9171",
                        "timestamp": "2021-12-07 12:22:48"
                    },
                    {
                        "value": "e882234db612d0e57bed4b0ae32a2b0dfd70af4721257c5aadb27c9459252a8c",
                        "timestamp": "2021-12-07 12:22:47"
                    },
                    {
                        "value": "ac798ddbf796ef7c8d8359a35d4841b7edec35afd4f8251252f76c79a0ccd797",
                        "timestamp": "2021-12-07 12:22:46"
                    },
                    {
                        "value": "9f97b40ad86081aab18fa47bd1319234ab41f0b163e9bed99e70d11e56da3202",
                        "timestamp": "2021-12-07 12:22:45"
                    },
                    {
                        "value": "fd7d542aa6e922020e6fb15fc151be03a967ca01b09c75cd267302b873f1a79c",
                        "timestamp": "2021-12-06 18:02:46"
                    },
                    {
                        "value": "6d272d83fd8d27f2c5879a183ef48f944047efd9198fdec9cec10eb3d0ef6760",
                        "timestamp": "2021-12-06 18:02:45"
                    },
                    {
                        "value": "af2a8024939f13bee37b6d3a35aa5df93e2a6b11cede4bea19493c4d704b050f",
                        "timestamp": "2021-12-06 18:02:44"
                    },
                    {
                        "value": "c7a89255767729cc8f5dbd610779baac706af799ccbb1a4945c55a77632e671c",
                        "timestamp": "2021-12-06 18:02:43"
                    },
                    {
                        "value": "9d22cca0ae82cb205f826d7d2e0b034414e436f4a3d70023616d05ad452876ed",
                        "timestamp": "2021-12-06 15:42:46"
                    },
                    {
                        "value": "d58a433d169950695149f4270bf15c27d298d13e8a6f6280014bce5d37cd67aa",
                        "timestamp": "2021-12-06 15:42:45"
                    },
                    {
                        "value": "d2b976a493c6d3b694dba0e139cea1d4943c0176a807109a9ab045a6b23b75c1",
                        "timestamp": "2021-12-06 15:42:44"
                    },
                    {
                        "value": "6bb12880471e391c169e4f52380239e3efb6b7f28e8f7e9f4989b811a094e733",
                        "timestamp": "2021-12-06 15:42:43"
                    },
                    {
                        "value": "06590d9c81caf0a4855c2a31c7bbe55a4646ffcb24cb165278e0495b3cf8a250",
                        "timestamp": "2021-12-06 12:22:44"
                    },
                    {
                        "value": "b19fd4dfc771a8d5f623d780c5e3f184072a267c37ec9b9c04b77cc2c341d685",
                        "timestamp": "2021-12-06 12:22:43"
                    },
                    {
                        "value": "5f41c8e6da11a0b75eea8b9de304fe54da16779c6e1046c3c0bea59b1b695061",
                        "timestamp": "2021-12-06 12:22:43"
                    },
                    {
                        "value": "aa63c68f906bdefa1e0a20719f8f5523a5d154f2be10dfafb118c44f9c0a3b45",
                        "timestamp": "2021-12-06 12:22:42"
                    },
                    {
                        "value": "920b2a34a93f5add23dbc71393cda484518b2a23ced20e57864a069469999999",
                        "timestamp": "2021-12-06 07:22:39"
                    },
                    {
                        "value": "1cbfaa8a18eb1b6aca5e3e487fbf74b278473d8be3caf45242a67ff6a1f58856",
                        "timestamp": "2021-12-06 07:22:38"
                    },
                    {
                        "value": "a3209bf6cfd9b6286923251b6d5da80997c6b3a51ec3bfb922388ee5e8944ec4",
                        "timestamp": "2021-12-06 07:22:38"
                    },
                    {
                        "value": "ff9c2a9f30d1de620b3b32389ea8efd1f624113ec22ff7055a416539cac2afac",
                        "timestamp": "2021-12-06 07:22:37"
                    },
                    {
                        "value": "9cf80de6cc74464958ce2f91cf1495349af18a4d95c03bcacdd4083382317873",
                        "timestamp": "2021-12-05 11:02:41"
                    },
                    {
                        "value": "4e757493a7507b2a870e3cc1d07bdc6605e7068fab0aa4e8632b9d927f9ba9f1",
                        "timestamp": "2021-12-05 11:02:40"
                    },
                    {
                        "value": "5c8eca3e680e30f253020b862c8b750f0cdf8478a7dcfd2df7c8ec4603fdc4ba",
                        "timestamp": "2021-12-05 11:02:40"
                    },
                    {
                        "value": "0123fdb2e8de200e6fa07cd5c254771143b7d9fea4f6895077b4f609fc5ae1cf",
                        "timestamp": "2021-12-05 11:02:39"
                    },
                    {
                        "value": "b5c1923e55f2319f6b57db1540c3712daae19e35e093d6660604c409c713e12f",
                        "timestamp": "2021-12-04 07:42:45"
                    },
                    {
                        "value": "5e2725cfb942baec12b11f1cb28125c0b7bc09f01e046ef59944588d6ad39f6f",
                        "timestamp": "2021-12-04 07:42:44"
                    },
                    {
                        "value": "0dee3fc5262f56f55bf59177586a47c17e909ae8f692e74f40a5cc2a449fc04a",
                        "timestamp": "2021-12-04 07:42:43"
                    },
                    {
                        "value": "38f7d63d5239800b7c0406dca055ba9fa430ba0c68a961db0f50ea1385e0aa5b",
                        "timestamp": "2021-12-04 07:42:41"
                    },
                    {
                        "value": "4633812af6a11b10181e377f824f735a8e8066334a4b0f5550cfd9a327ad7d61",
                        "timestamp": "2021-12-03 16:42:52"
                    },
                    {
                        "value": "558470db798ec71e380a908adaf33e8d39850165e623bdb129196b79919f4248",
                        "timestamp": "2021-12-03 16:42:50"
                    },
                    {
                        "value": "b2b45fea810fad4fabb97a4f059cfff36af8c539d851ec18203f9ced802a1ea9",
                        "timestamp": "2021-12-03 16:42:47"
                    },
                    {
                        "value": "532bf5c905e0caff95381f331bcd8169e781efbeed41cb053c4f80950d3745f0",
                        "timestamp": "2021-12-03 16:42:44"
                    },
                    {
                        "value": "8f14202d038576081a716747d905248877b873edcec27a6406201d57b090ae8b",
                        "timestamp": "2021-12-03 14:42:40"
                    },
                    {
                        "value": "032bdf9b1b22e43f81c92f3ee451a4dafa82762632b26c67e19210fd42862329",
                        "timestamp": "2021-12-03 14:42:39"
                    },
                    {
                        "value": "100a38f41bd7479fffee98011672258611db629db410d4ef622dc2b87ba5b6fe",
                        "timestamp": "2021-12-03 14:42:38"
                    },
                    {
                        "value": "cf29c2ddc4f10b9b6beed8c3295509a55e632df5501d67901e69d6a3297a7abe",
                        "timestamp": "2021-12-03 14:42:38"
                    },
                    {
                        "value": "ed46525016a9afbd86fb3a54ecc70ca5133a9ecb38aa880ce3d41af00d558f8f",
                        "timestamp": "2021-12-03 13:42:46"
                    },
                    {
                        "value": "e9e3de1af787bfae5342ea8e05e72bf951c971d92c96ad0c30a59b77d9d8d5a1",
                        "timestamp": "2021-12-03 13:42:45"
                    },
                    {
                        "value": "50174628548bfdd4b7a9eb44a9ac50215d6999260e33bd20c1bbc6c85f68fc19",
                        "timestamp": "2021-12-03 13:42:43"
                    },
                    {
                        "value": "aee478abbe9fe7a1f46d5c3c65c644f702a12cf39ee7ca490c557bce0e18ae4e",
                        "timestamp": "2021-12-03 13:42:41"
                    },
                    {
                        "value": "c53cddfe8d33896266cbfaa5478e36d4181d5c5bbb273aa364dfb957c7c28d8d",
                        "timestamp": "2021-12-03 11:42:42"
                    },
                    {
                        "value": "83f6ae731d42e5b754955cc68e0289a7b30592e04121cbea6f51a90845c331dd",
                        "timestamp": "2021-12-03 11:42:41"
                    },
                    {
                        "value": "85197438716c6f11a14fcd2ef5250d978c6beb4d846666b98ca8f1e680526424",
                        "timestamp": "2021-12-03 11:42:40"
                    },
                    {
                        "value": "bc0610a54a30fc58be837946cc3b87488c401f7e21d821d49c9ca5bce98b31ec",
                        "timestamp": "2021-12-03 11:42:39"
                    },
                    {
                        "value": "302c46822b5ac032941a5f71818ea42dc414cba27bee30cd589c3427144dcc6c",
                        "timestamp": "2021-12-03 11:22:38"
                    },
                    {
                        "value": "188d40643c849fac35deb1920095c529abac54814096b0ae7425adf4e29daa5f",
                        "timestamp": "2021-12-03 11:22:38"
                    },
                    {
                        "value": "99ce2e68255b2f3b1ee1934af1eacd280a096adaedcaa2df1f03e8d9ee01e860",
                        "timestamp": "2021-12-03 11:22:37"
                    },
                    {
                        "value": "8f92430d41cbbaf0cedec9eec04101fe6b047532448110d4e4c9babb63a55cfc",
                        "timestamp": "2021-12-03 11:22:37"
                    },
                    {
                        "value": "3130b03eed2b3785be43c7f5872cbdded02c64ac2e688c06fbef6d5a4223fb11",
                        "timestamp": "2021-12-02 18:02:40"
                    },
                    {
                        "value": "b8aa3a9c721eae2745f1671b70869a8e3fe847a16e769d69c40727857ba54b44",
                        "timestamp": "2021-12-02 18:02:39"
                    },
                    {
                        "value": "9b47c684f0ae8b3b2477c0a4fd479d03f3f480e357ca1d5c6d5622e89f109093",
                        "timestamp": "2021-12-02 18:02:39"
                    },
                    {
                        "value": "7195589ba87f4b77bc10af665070180cf807ff7d2f8198743248edda2e85b6a5",
                        "timestamp": "2021-12-02 18:02:38"
                    },
                    {
                        "value": "b893967283a7085083cf7bba86c0b1ed15aad5783f45853d7213f1804246c07d",
                        "timestamp": "2021-12-02 17:42:41"
                    },
                    {
                        "value": "369a7416a65b62aa8a3cc7eb8efd2c2d8255b3d502931eb7abfdb359926cdaf4",
                        "timestamp": "2021-12-02 17:42:40"
                    },
                    {
                        "value": "6415f7f0881a81dea834b8b772a7382b495ac88f435c1768f884152a7b3c6ea0",
                        "timestamp": "2021-12-02 17:42:39"
                    },
                    {
                        "value": "21f3a226f96fb5c488c00616e3442bbee45dd14cc26ae8c5b2c16b15352c53b9",
                        "timestamp": "2021-12-02 17:42:38"
                    },
                    {
                        "value": "6d0482986787257ea4ea022d60abc428a2324a4fe514afd62ded81c58bed6269",
                        "timestamp": "2021-12-02 15:02:45"
                    },
                    {
                        "value": "c4848b83c54b47cf1a03254622c431c9c029545864473ec779dfc31e6bbbd8b4",
                        "timestamp": "2021-12-02 15:02:44"
                    },
                    {
                        "value": "6792d2a52b8c4607997ccfd1294b2419cb39adc202ced97bba25b6318eb4f45d",
                        "timestamp": "2021-12-02 15:02:42"
                    },
                    {
                        "value": "5711679832ca14467c62d275e991128c25ffc174f3a1539a46d51b724e1c9078",
                        "timestamp": "2021-12-02 15:02:41"
                    },
                    {
                        "value": "b13ec93e4289b68f8ca2393cc944add42fef7c7395ae2c5878d0a47185660c9e",
                        "timestamp": "2021-12-02 10:22:37"
                    },
                    {
                        "value": "6c66dbd46637e5481e2e1e16b42d72626fa594bb5b7912c1b253f539a9660daa",
                        "timestamp": "2021-12-02 10:22:37"
                    },
                    {
                        "value": "b6766af1afb815c61741089760278a15e9089ae7b14a3537faa4ca6e4ebfdffc",
                        "timestamp": "2021-12-02 10:22:36"
                    },
                    {
                        "value": "c1657f01ccef85f3f46740a96704bc5dccfb4cf8fc9ac09abcfd7aa6660448f7",
                        "timestamp": "2021-12-02 10:22:36"
                    },
                    {
                        "value": "9d65a3aef1fb1165626cd9110067713e8c662b625f4ee0e8d73c8feea9b19662",
                        "timestamp": "2021-12-02 02:45:29"
                    },
                    {
                        "value": "527ad8043ae71d33f976f91bbb2961b84cc75cb4a0430c90f47e22f55cf108a2",
                        "timestamp": "2021-12-02 02:45:28"
                    },
                    {
                        "value": "02fabb204ea0776ffed21312ba160de270cdc1b53fc3e24d88bb62e08d05db4d",
                        "timestamp": "2021-12-02 02:45:27"
                    },
                    {
                        "value": "dbe703a0b4d7694e0d05d6a1f5f8c8bbae4a8d6b5acba1238da5b2f523fa9565",
                        "timestamp": "2021-12-02 02:45:26"
                    },
                    {
                        "value": "1e1f3aa6446fe8b19f1ddc52e9cf13aaaf7adb38af4a365caee4df0b746e9b2d",
                        "timestamp": "2021-12-01 22:03:05"
                    },
                    {
                        "value": "cb8ff5cb06b594fa2af333c4f8ce6449fc15a72d3e2c0f943f6310f07ce2a8c3",
                        "timestamp": "2021-12-01 22:03:02"
                    },
                    {
                        "value": "d21022bd63fcadd063737a8fefe0552014c5f6e0d85d6354c0558db8510e8002",
                        "timestamp": "2021-12-01 22:03:00"
                    },
                    {
                        "value": "b04bbb925d5f966d67fbfe7bbd2531e8891b1eb275ef8140006bc48d10e66171",
                        "timestamp": "2021-12-01 22:02:57"
                    },
                    {
                        "value": "1223a7a56a6ab0504a7fbf3c6045665e4b2cb79a8d3dc451522d527088f26129",
                        "timestamp": "2021-12-01 09:42:48"
                    },
                    {
                        "value": "ccaadab59aca03e2473689d7c643f015716e643a48f68363325e99388ac947b6",
                        "timestamp": "2021-12-01 09:42:46"
                    },
                    {
                        "value": "08f350bf460ca4df025bcb3a5987a1486f5ed7d3ffbbe43e8bc054ed0ea71ad0",
                        "timestamp": "2021-12-01 09:42:45"
                    },
                    {
                        "value": "906926956a5dec6281707eca21dacdefee957090fe9347d87b9772347df5424d",
                        "timestamp": "2021-12-01 09:42:42"
                    },
                    {
                        "value": "90f9e8094fe8847f4b4521afafd5c5e59d4368ddc26a4f589730cd998520fd50",
                        "timestamp": "2021-12-01 07:22:39"
                    },
                    {
                        "value": "0c865a53298f5d03c554ba5983b079e267600b4f066b84abd13848e9201c1a0c",
                        "timestamp": "2021-12-01 07:22:38"
                    },
                    {
                        "value": "b783d9a583febd63bd4496a1a8458525acf7df7b093efb6c0da217a739762103",
                        "timestamp": "2021-12-01 07:22:37"
                    },
                    {
                        "value": "e1a600804c13e4bcb4d1b766421fb8b6e6a999d0d7eefc111e8961a20cec618a",
                        "timestamp": "2021-12-01 07:22:36"
                    },
                    {
                        "value": "62c032fb929d4947d1ac446d4e9635148edcd1039d52f2a46b62beb189f3ad33",
                        "timestamp": "2021-12-01 07:02:40"
                    },
                    {
                        "value": "a69de6f8ec1b82161a1b8911052edcdf55085522de9ff7084f43f099cbd6f05f",
                        "timestamp": "2021-12-01 07:02:39"
                    },
                    {
                        "value": "56130fa22eaf104636b113c55900aa383a39b3493fd0f47667b6d32fcff9efe7",
                        "timestamp": "2021-12-01 07:02:39"
                    },
                    {
                        "value": "cd53040ec21c86fa58a23ef8a844b96b05454800c6aabe0e9d5772e3ab07bce6",
                        "timestamp": "2021-12-01 07:02:38"
                    },
                    {
                        "value": "9f7de32a186b87d6d5512c134e0782b28dd680f5a7c14930de582737cc09952c",
                        "timestamp": "2021-11-30 11:22:42"
                    },
                    {
                        "value": "bfd4a8637437b3a249d519c01a3e219e6ad1728b505cf01b28109defbedd6a65",
                        "timestamp": "2021-11-30 11:22:40"
                    },
                    {
                        "value": "e29100d2ecddd199e9b4b40d094b36f7a67981393cf3f58cfacabf91e3dd7eed",
                        "timestamp": "2021-11-30 11:22:39"
                    },
                    {
                        "value": "b61861286af1c39f35d05587fb96139fef28ad4cb572c6f42dc3df7ae5f0850b",
                        "timestamp": "2021-11-30 11:22:37"
                    },
                    {
                        "value": "f7db2a327d21f6aaa9d222e32f5389e3020a334d2d372b1720f008f5dd86e685",
                        "timestamp": "2021-11-30 07:42:39"
                    },
                    {
                        "value": "2686f473fe5da84f006e169c030663eb661a79a3f6bf0e0ce024d9a3519b3efd",
                        "timestamp": "2021-11-30 07:42:38"
                    },
                    {
                        "value": "5c03e9a190c10fc716241dd573f72d9289e33903be7d5bd59a5a3053c3ca62eb",
                        "timestamp": "2021-11-30 07:42:36"
                    },
                    {
                        "value": "439ce652914b30dae16bef215fa6463970b0a5cb63d9235c317de579b8d5b40f",
                        "timestamp": "2021-11-30 07:42:35"
                    },
                    {
                        "value": "ede0725557e08c21c523681648ace4a5b9d7b3dcfc29f4cda7db92c80b61f038",
                        "timestamp": "2021-11-29 21:42:31"
                    },
                    {
                        "value": "4d8633e605e88f6bf2b23f513c03f08e48e517a0fd510b6a89087f9b7e3fcc16",
                        "timestamp": "2021-11-29 21:42:30"
                    },
                    {
                        "value": "0acd4a0a29c0a50b493657f923abff170056d69ce0b231ef6434c5d04c8ea368",
                        "timestamp": "2021-11-29 21:42:30"
                    },
                    {
                        "value": "b95d2239d2394313726e43955d2feb23fbcfd8e4d39e7f8d0831ea0d4bd97cf6",
                        "timestamp": "2021-11-29 21:42:29"
                    },
                    {
                        "value": "0872cfa80dd3430470e1c9f0289fb94ef75bd44713145cb85886090d59942bc9",
                        "timestamp": "2021-11-29 21:22:34"
                    },
                    {
                        "value": "992ba1b139e91db060bd5d50e486447e5b1b85f4629fd7be5baf83b33478860c",
                        "timestamp": "2021-11-29 21:22:34"
                    },
                    {
                        "value": "bdbd4864f211524a3c0eeb6e543cfbf795d1ec85d02977c2e1d44446803ec59c",
                        "timestamp": "2021-11-29 21:22:33"
                    },
                    {
                        "value": "5f4289ff9bf3502309a838838dae874fbd49322ef7233e2daab502412d6c9d24",
                        "timestamp": "2021-11-29 21:22:33"
                    },
                    {
                        "value": "5b3bb0f608bd9099e6e0d6dfc09cea354f25b1d97ab9d51328552b766122b108",
                        "timestamp": "2021-11-29 20:22:37"
                    },
                    {
                        "value": "e7910c73623913528e420bf6857dd44f1b179e544273ec3960b39dfeab0d132a",
                        "timestamp": "2021-11-29 20:22:36"
                    },
                    {
                        "value": "a8bcbf8e1c2e15bf8c2117c9a2fc2f8f08ba1f0b0f20a2da057090a8cbd056b4",
                        "timestamp": "2021-11-29 20:22:35"
                    },
                    {
                        "value": "cb0b173a5a913bb701d85e01b92c90faa77166a4f1cf58f0798313c021149be8",
                        "timestamp": "2021-11-29 20:22:35"
                    },
                    {
                        "value": "882d1b405632e01ab063253e2a0f647ff2587fe879e6b90e03b59226e36c8fe8",
                        "timestamp": "2021-11-29 20:02:41"
                    },
                    {
                        "value": "d7b8bf0586fce4959c56025ce1d0d4b7ca84a5b7f3d94645d0762ca522de89f6",
                        "timestamp": "2021-11-29 20:02:40"
                    },
                    {
                        "value": "7d1844147e478bee58b0c3a4789dd5084fd47807edccc924ff8c7438815b8d95",
                        "timestamp": "2021-11-29 20:02:39"
                    },
                    {
                        "value": "aa1ae8c111f7d3481d56d946025f7211b6be18e4f3ab7fa8eb03cf85080d29f9",
                        "timestamp": "2021-11-29 20:02:39"
                    },
                    {
                        "value": "4abb8e36aa5fded1bf28926b9e2b079367504d66aff162dedb480a1f90b71517",
                        "timestamp": "2021-11-29 19:22:39"
                    },
                    {
                        "value": "e4cf30157d28ca36665761832c38ad3812245f334d8be0d1a132a20defe00a4a",
                        "timestamp": "2021-11-29 19:22:38"
                    },
                    {
                        "value": "33dd7290dd0dd02b34235fda39f1d72c369e01aa13854e0c792c048302f2f094",
                        "timestamp": "2021-11-29 19:22:37"
                    },
                    {
                        "value": "6967bdb48b95df3cf797ec06e2f38f20932cca68f2ce8a6cb5b2ee3071826d09",
                        "timestamp": "2021-11-29 19:22:36"
                    },
                    {
                        "value": "be419f6e0ede90cd9a9c5bdfd6009869283a36daed8ca240d2d45fa045b10de9",
                        "timestamp": "2021-11-29 18:22:35"
                    },
                    {
                        "value": "2d086daa30c03800b673011e6ee10d5ccdfa56842f67188ac348e30ed5cc803c",
                        "timestamp": "2021-11-29 18:22:35"
                    },
                    {
                        "value": "6326d246f65e4bb492eace61e8862bd244fa79bea67f05719c4865165b157086",
                        "timestamp": "2021-11-29 18:22:34"
                    },
                    {
                        "value": "075bf2147577ab536e02a7ce2ae6aa67b7e2ced454113c77cd6808b2ad3af9e6",
                        "timestamp": "2021-11-29 18:22:34"
                    },
                    {
                        "value": "dce6ef9e8954c41f393ddca011e6cfa2c8d0db69ae1cc0e0e8fc6fbfa9ca5665",
                        "timestamp": "2021-11-29 17:02:41"
                    },
                    {
                        "value": "25dce07a08e1126404921a1c9cc4fc3fc06e6a8f4bbbc09d4c3fe4b24c9a4ddf",
                        "timestamp": "2021-11-29 17:02:39"
                    },
                    {
                        "value": "9c87ae78442d9bc2148c24b455e344deda13c70feacd75c4796ab9c91b18015f",
                        "timestamp": "2021-11-29 17:02:37"
                    },
                    {
                        "value": "dcbd6af8ffaab3793b6596ba5be294c1fe7061e85196a5f9007b5a2cbf3781b7",
                        "timestamp": "2021-11-29 17:02:36"
                    },
                    {
                        "value": "8ab0631733cbd75ee80236daf25af3a79d6c2471c2c5b3f354407f92101bea28",
                        "timestamp": "2021-11-29 11:22:36"
                    },
                    {
                        "value": "045c15ef3a76b61d487b30e3e554c77afbc4f3fc17078d3818b5392de608a92e",
                        "timestamp": "2021-11-29 11:22:36"
                    },
                    {
                        "value": "ea489e1772f588e3b3089767592958f2003d1024ef70cbb9507198c2e0a10c08",
                        "timestamp": "2021-11-29 11:22:35"
                    },
                    {
                        "value": "68a8d5c49d21c1a894f10832ac9f0ef99de223e6045f8ca553e2f3c63384f0fb",
                        "timestamp": "2021-11-29 11:22:35"
                    },
                    {
                        "value": "05e53ece9d0242cbf17466c6746fcad32c0b97f8dd1dbf07fda951802e9bdeba",
                        "timestamp": "2021-11-28 08:02:34"
                    },
                    {
                        "value": "7e1902c99be3570624c34b1a087ca24ed8d47430374b6a2366d0432cb3e2a423",
                        "timestamp": "2021-11-28 08:02:34"
                    },
                    {
                        "value": "c3403dd95c28632f97b85dacd9fcffb32e9b8cf938bb0f8133e228f8cf3d1dab",
                        "timestamp": "2021-11-28 08:02:33"
                    },
                    {
                        "value": "4eaf6f26864d0cebfa9e6ad1d125ad8da5ca15ad6220428f73b6015afe2962d0",
                        "timestamp": "2021-11-28 08:02:33"
                    },
                    {
                        "value": "34443c2f4cf165f96c3eaffb93f2a7b3628ebed8ed119b3ef2ad3e5dc450e0a0",
                        "timestamp": "2021-11-26 14:42:47"
                    },
                    {
                        "value": "156ff1309634f2cd6d47d474a2b4888cf8f91ce7ec35d7c2c997659facca8387",
                        "timestamp": "2021-11-26 14:42:45"
                    },
                    {
                        "value": "7d7a3f1a424354753df802473c2ba8ebbed31804881f44d5fdd2f162930e018a",
                        "timestamp": "2021-11-26 14:42:42"
                    },
                    {
                        "value": "3f329c3c43a80af4145116889d380b5022d7509b18a36143d3adf455d71ad02f",
                        "timestamp": "2021-11-26 14:42:39"
                    },
                    {
                        "value": "723dc2166ea5533bec9f92b7547c6dff553c63b2f421d7ae26feea0c780c167a",
                        "timestamp": "2021-11-26 11:22:39"
                    },
                    {
                        "value": "55cb62507ca0a059b4ccd73090352bc2ca8aef120a329787a3b635a679b6dff8",
                        "timestamp": "2021-11-26 11:22:39"
                    },
                    {
                        "value": "e086988213efbaa48945d6665b9ffcff1132409959067e5be41a15d58220ae33",
                        "timestamp": "2021-11-26 11:22:38"
                    },
                    {
                        "value": "4256d3266ded23add96845cf7de7a70c76767abb234adc963267a14b4f8a53ed",
                        "timestamp": "2021-11-26 11:22:38"
                    },
                    {
                        "value": "52df38c93e676b374e13217a6d3005cca39d5011c1f2724157d5eefa5b75a367",
                        "timestamp": "2021-11-25 19:02:44"
                    },
                    {
                        "value": "bc718bff5ffcce1bd19eaac73b5b0906dc563f36f5f79f356c9f2d5b27480360",
                        "timestamp": "2021-11-25 19:02:43"
                    },
                    {
                        "value": "57e5b81aa1d1c628dd849e005e32b19a3dc3af9e3f5797f5770aa2462d13b489",
                        "timestamp": "2021-11-25 19:02:42"
                    },
                    {
                        "value": "0c6d57557120decedc9a102794ea95bcaf64529eb1f18058e4df62c34b724988",
                        "timestamp": "2021-11-25 19:02:41"
                    },
                    {
                        "value": "4518c17e858eaae9a38cdf5953bd7d0cad3c3fd5fa2b9a5b84e0cad5e8ecfc5e",
                        "timestamp": "2021-11-25 18:22:51"
                    },
                    {
                        "value": "72aad5a5b5425ba55bab6210181c959f71f5d9b5c205a74398d369a3d2cf8bdb",
                        "timestamp": "2021-11-25 18:22:50"
                    },
                    {
                        "value": "e377025968d66dde5dce53f64430fc5a551e736a3334dcda357895f5e4a6f283",
                        "timestamp": "2021-11-25 18:22:49"
                    },
                    {
                        "value": "11f11581be6c740fb17878dc29aac2a0f72acf5b8b0cbafd1c04d21038e7a4ea",
                        "timestamp": "2021-11-25 18:22:48"
                    },
                    {
                        "value": "f9d7e3f9f64276befc4963065f99fe7e8021d831987a150006c8a1a3f5bb236d",
                        "timestamp": "2021-11-25 18:22:47"
                    },
                    {
                        "value": "3c1f5aea5bc4e6c5fe53393ab86acb26a1283e34c7e1b9e9470599b944b7cfe7",
                        "timestamp": "2021-11-25 18:22:47"
                    },
                    {
                        "value": "ff28ababb231cc1dec59dcfdd253a20693dd7e103a171bb86f131fa38dba27da",
                        "timestamp": "2021-11-25 18:22:45"
                    },
                    {
                        "value": "a9ba8137d635ef997c4d1388b7758157fa8ee4bfffcacc49bdf7c5dfe9003421",
                        "timestamp": "2021-11-25 18:22:44"
                    },
                    {
                        "value": "366ba12eff702279672f3f732300c1a17de532a41a7cd505401748dd5ae90a9b",
                        "timestamp": "2021-11-25 18:22:42"
                    },
                    {
                        "value": "4b50745e74fea6faa516b4d46b7c9fbe36fdae2301b76ec940635d033707a2c8",
                        "timestamp": "2021-11-25 18:22:41"
                    },
                    {
                        "value": "2a81e3d4e24096064b48f6e027444a37e9fadd9375dd5adcdd69aed75f847769",
                        "timestamp": "2021-11-25 18:22:40"
                    },
                    {
                        "value": "2f08f5b23a062671fba5957b98d05a728299bb1ae98695b9b5d36e75528ccab7",
                        "timestamp": "2021-11-25 18:22:39"
                    },
                    {
                        "value": "5efca817b0663dbb3c5466538b57ab9392b74531519aad8dad5f851826974586",
                        "timestamp": "2021-11-25 07:42:39"
                    },
                    {
                        "value": "1358d88e078f1c59b546256968179bf213928f1e6f4e7afa255681b2cd8f92a2",
                        "timestamp": "2021-11-25 07:42:38"
                    },
                    {
                        "value": "8165ac99e7dbfb2059308aaa1105ede0f191bb846d14dfd7ed709c3bcfb88510",
                        "timestamp": "2021-11-25 07:42:36"
                    },
                    {
                        "value": "38a6ff63eebe2530305c0335cab1c5dba984bcc1c7a63e35214a138f03520fe1",
                        "timestamp": "2021-11-25 07:42:35"
                    },
                    {
                        "value": "82d5d5ef76ff7a708df5ea9135cb18117428ad1cbdcaa938989a3559a6ff5b97",
                        "timestamp": "2021-11-25 07:22:35"
                    },
                    {
                        "value": "d25e2355256b06fb04571f2656fdaac532607f5d8a74f06abe91b20c8cc55fab",
                        "timestamp": "2021-11-25 07:22:35"
                    },
                    {
                        "value": "c799c95af3b129df8e983ef4ae69e40b8f7a7ba2c72ea7def2d006af59888e1c",
                        "timestamp": "2021-11-25 07:22:34"
                    },
                    {
                        "value": "7b6655cd79469df36d20578c9da0c7bb6dc8237f4fc6dcaaa20f5c5278ae4e81",
                        "timestamp": "2021-11-25 07:22:34"
                    },
                    {
                        "value": "781d0fdeff7439e972b026426b762e9d34efc71b73f5a6ef1730c6b1fed21167",
                        "timestamp": "2021-11-24 20:02:51"
                    },
                    {
                        "value": "b06f2e03a70d20a1ae154cc03df424f31bea79ba19c8305c6745d5059202765a",
                        "timestamp": "2021-11-24 20:02:50"
                    },
                    {
                        "value": "63dc653f41902f4c8f3b49f617b6d3033e8ee0110ba37832902bd98b810f1e74",
                        "timestamp": "2021-11-24 20:02:49"
                    },
                    {
                        "value": "6898def472a85a7988f644d93880b2ab11915ceecd04ee345b49b54589564fee",
                        "timestamp": "2021-11-24 20:02:47"
                    },
                    {
                        "value": "586e65df6337c02078f617bdcbad67cc055c79df2f1c57899789cec1d65a7939",
                        "timestamp": "2021-11-24 19:02:59"
                    },
                    {
                        "value": "8f4194dc5410e6f27aff3d6a7a4c112b36b893c79bce2afc967791229b7f7cdb",
                        "timestamp": "2021-11-24 19:02:58"
                    },
                    {
                        "value": "b42de5dea35e4771633b4063776640356f906a3f5dc3662f7d773209aef678a6",
                        "timestamp": "2021-11-24 19:02:58"
                    },
                    {
                        "value": "dbd234203f9ac1cf40f36bc0120dc2aba4d8fcbcff66e1dca68a7e0f0d882239",
                        "timestamp": "2021-11-24 19:02:58"
                    },
                    {
                        "value": "ed2f68ce6d715976cfad3c41991685f1a190713626aea55c454da90682aa7ccb",
                        "timestamp": "2021-11-24 19:02:57"
                    },
                    {
                        "value": "4c6f60ba070864a86dceaa5785b1dceb395cbe4667b9c539bc0675411b4e16a9",
                        "timestamp": "2021-11-24 19:02:57"
                    },
                    {
                        "value": "11f6520318927ff3c8c92f562fc90030117945c74bc02643701950545d9ecf71",
                        "timestamp": "2021-11-24 19:02:56"
                    },
                    {
                        "value": "1808831f8908649c01e5a868a37c605ffb64fa0e3c376410bb94c9b719e11301",
                        "timestamp": "2021-11-24 19:02:56"
                    },
                    {
                        "value": "f4ba4c7cfa06963a05eb720c098686c8296e799fcfe96c7f44ae1b9ef814c1da",
                        "timestamp": "2021-11-24 19:02:49"
                    },
                    {
                        "value": "a1a4cb146898a5606df65828792d1bdebce941e94ca8d65e70dd43579ca7289a",
                        "timestamp": "2021-11-24 19:02:49"
                    },
                    {
                        "value": "b52af14eb676f40ba504c6c97cc06a75fc266a4abb3da6feb923701bbd8d0f51",
                        "timestamp": "2021-11-24 19:02:48"
                    },
                    {
                        "value": "1a69fe204ddda820fb7a22f07d7acb46cdaf01d7c30ef967c93d546338b71ddd",
                        "timestamp": "2021-11-24 19:02:48"
                    },
                    {
                        "value": "11887f9b0e0d3219fafa09a754d466b9fa8c79447cb8f596fc6fcfb2b294c17e",
                        "timestamp": "2021-11-24 18:22:41"
                    },
                    {
                        "value": "78bf20a97887ceb674ba6bbda37884a412be37dd320416d2222142c12f7de517",
                        "timestamp": "2021-11-24 18:22:40"
                    },
                    {
                        "value": "8ecc67e648078fa01a53b0c20ffaa8896e0bd3cc1ce5baca9ff6ddd7cd41b266",
                        "timestamp": "2021-11-24 18:22:40"
                    },
                    {
                        "value": "87dcd1380abffec076ad63b428a3464e3e7296917c4c27d0ecca7ff09df0ae16",
                        "timestamp": "2021-11-24 18:22:39"
                    },
                    {
                        "value": "b315a3b92c9e75691b3c5f8d015d4bb932d49e0944d247c379d214ea65dec333",
                        "timestamp": "2021-11-24 12:42:34"
                    },
                    {
                        "value": "2e91bddd517857e241cbe3528a9f8f05d237334eb7e7fa7048e3435131e2e507",
                        "timestamp": "2021-11-24 12:42:34"
                    },
                    {
                        "value": "947be5a1e7130e8f8f334c3d6fc2e26ae09ed673dd1bc69526e8087fb91fe0ea",
                        "timestamp": "2021-11-24 12:42:33"
                    },
                    {
                        "value": "8e405b6451c62462b5df1a0490175f4b9712ee1b1ab25a52f7e3a1f736400439",
                        "timestamp": "2021-11-24 12:42:32"
                    },
                    {
                        "value": "452f57e00694eb56c29b6d4d39d5484a520fbd3a56729affa9e20626dfcd891a",
                        "timestamp": "2021-11-24 11:22:36"
                    },
                    {
                        "value": "161ea2ce7ae977eb230536f34fa96fd538c56469df5a908a5a56c33579faad03",
                        "timestamp": "2021-11-24 11:22:36"
                    },
                    {
                        "value": "7b105b4133dc546c68da0da12124062a8c8c075699a33cd2b8e5fcfe58d93c6f",
                        "timestamp": "2021-11-24 11:22:35"
                    },
                    {
                        "value": "aae96dcb20fcf3ddd0cc567226d44caa3c3f2fe41b778c186340fab126e228c7",
                        "timestamp": "2021-11-24 11:22:34"
                    },
                    {
                        "value": "856e1c83f34ed788e607571d7adad436f8d5992cf052d623287f89e9d63aebd2",
                        "timestamp": "2021-11-24 10:42:42"
                    },
                    {
                        "value": "0d08ccffd65049240f82fb622adff758d5fe21b5b468c0eb57a8e7504c09b8f8",
                        "timestamp": "2021-11-24 10:42:41"
                    },
                    {
                        "value": "8c2ac48e0bd066205c489cf5609818d547d037369f66c292ee1a5056f0c905b8",
                        "timestamp": "2021-11-24 10:42:40"
                    },
                    {
                        "value": "b2440e25e2ab9f4d4f5d98beb29de26aba5b540eb54003438a819556068f23bd",
                        "timestamp": "2021-11-24 10:42:38"
                    },
                    {
                        "value": "6139b0f3b5dd2fd5291edbcf9a4c082d21d4d5a424fb481030271230234f3751",
                        "timestamp": "2021-11-23 12:22:43"
                    },
                    {
                        "value": "dfb938333b6dbb62861831b5641728e8bfa444d4b820df6fb6dbce56f83ab42f",
                        "timestamp": "2021-11-23 12:22:42"
                    },
                    {
                        "value": "e8f60d870b9c6ecad9293db9fa8d0d5d1e8c46e6184ed239e61cb4c828b91ec9",
                        "timestamp": "2021-11-23 12:22:41"
                    },
                    {
                        "value": "172b6843a7e40f00ec861c944f8247207bc5ce4acc8c7fadac922313f141da1f",
                        "timestamp": "2021-11-23 12:22:39"
                    },
                    {
                        "value": "ceae18ab6ce271c2a6530479958c0ce5c5330988de8d93eefb7b4700ba22f22e",
                        "timestamp": "2021-11-23 12:02:44"
                    },
                    {
                        "value": "9ae803bb8f1f9bc8f05e15c973143710134382ff0322fa1ead4f66f7ce272e67",
                        "timestamp": "2021-11-23 12:02:43"
                    },
                    {
                        "value": "ee3b67b050b6b37261f79c9166f79dc6ee62d46457a2faa3d59644b3e95fb597",
                        "timestamp": "2021-11-23 12:02:43"
                    },
                    {
                        "value": "3546415efa309d5e90ca0be71d031ac458c6ca4c61ccfa221a07473d0baca386",
                        "timestamp": "2021-11-23 12:02:42"
                    },
                    {
                        "value": "058b1685e6110c6f1fbfeb709c042f53dd4223687ff86d3575b15ffad5d7eeaa",
                        "timestamp": "2021-11-23 11:42:43"
                    },
                    {
                        "value": "1bdc41058e53e885ccf81cf42ddac59733b6608f40719017dde98ac33ed8b8f5",
                        "timestamp": "2021-11-23 11:42:41"
                    },
                    {
                        "value": "1c89af7f7c4e9ace67f66b18e783e68ce6f07bcdde05e39a1d266f2bcbcb79e9",
                        "timestamp": "2021-11-23 11:42:39"
                    },
                    {
                        "value": "3ea99b633575d3aa1e7851b62c2e60e14933529643a5eed96244134a02db8702",
                        "timestamp": "2021-11-23 11:42:38"
                    },
                    {
                        "value": "49829c8f06699f17f9a533be8806af65ddb2d5c3f81752d47ce0fd431bc3ae71",
                        "timestamp": "2021-11-23 09:02:46"
                    },
                    {
                        "value": "2c9dc2a695c0577a255dee38eceadcbf70a2b3e6eab2ff4b2b937b951e4cf259",
                        "timestamp": "2021-11-23 09:02:45"
                    },
                    {
                        "value": "2c81bc76bb2b34fc085a6ff0beb19fda2b1e400ad67341f55185b8d8b7351643",
                        "timestamp": "2021-11-23 09:02:45"
                    },
                    {
                        "value": "04d583f5e12a75d174cd94b6c4599a5db274b7056a580e7a7ab9ded10d92f845",
                        "timestamp": "2021-11-23 09:02:44"
                    },
                    {
                        "value": "42db01df20fafaad1120d005b66fec5048d2c44089283d7a2a277c5fa96ff473",
                        "timestamp": "2021-11-23 08:42:39"
                    },
                    {
                        "value": "1183b3a9d994c115c78d3d865d5f320340293dbc365e9a6984428fcb033a145a",
                        "timestamp": "2021-11-23 08:42:38"
                    },
                    {
                        "value": "0823c84ccefe8238cfcf0e5d864d4a7547d624910c642e1b77fde7d301b3b00c",
                        "timestamp": "2021-11-23 08:42:37"
                    },
                    {
                        "value": "c167d638df3af5e38d81bdf55a225e2bff94645256ccf66f4206fc164a3855eb",
                        "timestamp": "2021-11-23 08:42:36"
                    },
                    {
                        "value": "839d28f4d38455750ddf9ddffdd57d0cc6ee009714f407a8698e65e96eb9fa71",
                        "timestamp": "2021-11-23 02:09:57"
                    },
                    {
                        "value": "8af8280ecf9055a93b3aa88539f675e4963a53a7d1eaecccad283693ed391d2e",
                        "timestamp": "2021-11-23 02:09:57"
                    },
                    {
                        "value": "80e59f851ebe525dec411182e51bf4abcb1488aa029dbe2d4192eba2bb40a7c4",
                        "timestamp": "2021-11-23 02:09:56"
                    },
                    {
                        "value": "d209a413388f6c0174e1af53bc3c23a31af10d8e74a5fc5259475f4abfbc844b",
                        "timestamp": "2021-11-23 02:09:56"
                    },
                    {
                        "value": "cd38d39b4c6d18daea46a3e3575261c2af083ec7090813842b7d5ac1140eb749",
                        "timestamp": "2021-11-22 19:02:42"
                    },
                    {
                        "value": "531e477298acbed7e2a5a4c0976174be67f353274ba100b432b886f9f6be29c4",
                        "timestamp": "2021-11-22 19:02:41"
                    },
                    {
                        "value": "bafb08f1a4ab6694e06d58b6c931cf08852860d6dba8646d38dd54a28b188065",
                        "timestamp": "2021-11-22 19:02:41"
                    },
                    {
                        "value": "051e369be211163b0adaa48b6cc1dc1ae712b420568b761f12e004fc69587335",
                        "timestamp": "2021-11-22 19:02:40"
                    },
                    {
                        "value": "f1767a23201e1d5d234ead79f84de4a76f789aaa83f920b8cf4e0783f125d17c",
                        "timestamp": "2021-11-22 17:22:38"
                    },
                    {
                        "value": "0ac18f91919eacc8ffe89777e29944711579a564cc67eec4da9416ad532608e7",
                        "timestamp": "2021-11-22 17:22:38"
                    },
                    {
                        "value": "1ef48260c572ba1840d2aca1ff3a7ad2f447254f1de0407fffd2416b8c92fbf0",
                        "timestamp": "2021-11-22 17:22:37"
                    },
                    {
                        "value": "30dd10cb06766dbd7a52a238ad693569ba4b459954ca8b250e1d8e490bd8b1fd",
                        "timestamp": "2021-11-22 17:22:36"
                    },
                    {
                        "value": "c58855ba574656b359604b27fb1fe6c71190226116ffaf01fbfd7e877afa90bc",
                        "timestamp": "2021-11-22 16:22:39"
                    },
                    {
                        "value": "a8c5b384b32f2a117fda2336ec2692bfc44e37a56327217454b63eb28ec0701b",
                        "timestamp": "2021-11-22 16:22:38"
                    },
                    {
                        "value": "22c24f925b1d70e1978f7a5acd9eddd8917d42681d0fc763639f568f93224e2d",
                        "timestamp": "2021-11-22 16:22:38"
                    },
                    {
                        "value": "b8f103b663f980247968edab3cff7dde2b2fda213f4e68e2f55a7f57cda86cd6",
                        "timestamp": "2021-11-22 16:22:37"
                    },
                    {
                        "value": "01e5a96fa67312daf3db1495eade1d17e6039fd43a8f58d902666eb4bd4d14d4",
                        "timestamp": "2021-11-22 15:22:43"
                    },
                    {
                        "value": "e54ce8ef555e324ecb93cfa62f109033e7128b463a60432996395a8d437eb873",
                        "timestamp": "2021-11-22 15:22:42"
                    },
                    {
                        "value": "59fb42d735c6db3ae72b267b23b4cc6c8b41807200508437423ebb09e1950ca0",
                        "timestamp": "2021-11-22 15:22:42"
                    },
                    {
                        "value": "cc0186b19c313e9f9495a26189ff1d676230ae69dd47494bc2770e2f38f15353",
                        "timestamp": "2021-11-22 15:22:41"
                    },
                    {
                        "value": "259c36b591f16a680dcfdad4bb69e5546c21a1b4a591403578b1f079b236c510",
                        "timestamp": "2021-11-22 12:42:38"
                    },
                    {
                        "value": "1e8f68637ad36aec6e7d06fe848c971cf3a569c0d79854be170965bc42577aff",
                        "timestamp": "2021-11-22 12:42:37"
                    },
                    {
                        "value": "2251012729455254b5e3b314e31e84c805df3e36e2cc8f3ec90e0f6fbb806d83",
                        "timestamp": "2021-11-22 12:42:36"
                    },
                    {
                        "value": "7d829fdb61d7208530dbd4c627c3d0641f5b394a80c3274a70d37eb0b791fb94",
                        "timestamp": "2021-11-22 12:42:35"
                    },
                    {
                        "value": "faeb2d3de5505ab361cd3b2ad5bcd604c34f2d23f79fc349204486f4183697bd",
                        "timestamp": "2021-11-22 12:02:40"
                    },
                    {
                        "value": "816bbf20018a63c1fb2ff5eeb7227d0085c8022410029b12e97510e1e67c67c5",
                        "timestamp": "2021-11-22 12:02:39"
                    },
                    {
                        "value": "0d4725774859e20e23da2ef4cea1196cb5f52f2fe02deed69e025d9272c5c77e",
                        "timestamp": "2021-11-22 12:02:39"
                    },
                    {
                        "value": "b394a6d51678dcaa97b30c39b6a5a530cdb28958329c7104cdba51f520cc503b",
                        "timestamp": "2021-11-22 12:02:39"
                    },
                    {
                        "value": "3cda9386827be0d3fbfb821193854fbfe3ed49ae224c1815cc6f8351cd1bbdd3",
                        "timestamp": "2021-11-22 12:02:39"
                    },
                    {
                        "value": "38fcdad1eb0896731f74445c04e80fd4075189b437fcde08e393a289938accfd",
                        "timestamp": "2021-11-22 12:02:38"
                    },
                    {
                        "value": "ffb5a8fc2db13c686687ee4c02b3170b081c155cae87afcf4188711722412bfe",
                        "timestamp": "2021-11-22 12:02:38"
                    },
                    {
                        "value": "3a6ba0e427cbc8428f15e8b347a9483fd11ad9aac6c65869c07665f76735f649",
                        "timestamp": "2021-11-22 12:02:37"
                    },
                    {
                        "value": "9bcafd023ee8060e5e47faa42a7868c53dc048ba94ffae683ed39cddfd9da853",
                        "timestamp": "2021-11-20 10:22:35"
                    },
                    {
                        "value": "839a9922ae174ac1515c12496c901fe8c5e64ecfd92532b37d31bb504c91d138",
                        "timestamp": "2021-11-20 10:22:35"
                    },
                    {
                        "value": "5a2d98fb6f9e09f3cd49a863aa1290935ef1c5d714aa3beede7ca587f147f281",
                        "timestamp": "2021-11-20 10:22:34"
                    },
                    {
                        "value": "fe7b92db5144edc5f64e1a7d5b3cdf1e1b3950afc0cf93b7774cc9f2a224a5f7",
                        "timestamp": "2021-11-20 10:22:34"
                    },
                    {
                        "value": "330be8f2569530c2608434a4da61d5b2ae2b3a9cd976f97e296cb7adf8eabfd7",
                        "timestamp": "2021-11-20 08:42:35"
                    },
                    {
                        "value": "f2f39b97cd5f9b752f78d1b8951836463c57d6a36c3e406b51449d094bd720bf",
                        "timestamp": "2021-11-20 08:42:34"
                    },
                    {
                        "value": "25d0f96b71b8f658d323fd6c0a0ed6051a03b5374324f56ee420fab8f5f5cf97",
                        "timestamp": "2021-11-20 08:42:34"
                    },
                    {
                        "value": "00f38651e028591175cc482289f6ceabfed9592b7176a24d8f00999ebb0bf996",
                        "timestamp": "2021-11-20 08:42:33"
                    },
                    {
                        "value": "e9b22923726374a0e4fce011a5ee0d88f234cd28e4c7c8a04a7a9d7fca070a5a",
                        "timestamp": "2021-11-19 23:22:56"
                    },
                    {
                        "value": "e8049445b6be88cf58f2aec1733c23392cb165ba66ec987d6693843939778fe4",
                        "timestamp": "2021-11-19 23:22:55"
                    },
                    {
                        "value": "45de0a47d8bee8de67d818ea239f0f9c934c3299be3c3faefacb9e1e4800078c",
                        "timestamp": "2021-11-19 23:22:55"
                    },
                    {
                        "value": "21f63065ffbb11ce35a93014d6a19b8758de80f173de5c1cd4ae6db2253e5b36",
                        "timestamp": "2021-11-19 23:22:54"
                    },
                    {
                        "value": "b6183b9530140a5219b295069a19b391ffd77b7d482aeadd4f729c049f44e4fa",
                        "timestamp": "2021-11-19 16:02:37"
                    },
                    {
                        "value": "5217b3fe46cd872a4c4da5099d4eb2d66c8f5278f5c355c68c9c88f891e66cae",
                        "timestamp": "2021-11-19 16:02:36"
                    },
                    {
                        "value": "47b3c7d88103ff95fa9a87b1b71e9ce815a745cc895394680b777590b98aac60",
                        "timestamp": "2021-11-19 16:02:36"
                    },
                    {
                        "value": "a7f726e928105e9a403b0e0791987917243676c38510538b6885c79a64408037",
                        "timestamp": "2021-11-19 16:02:35"
                    },
                    {
                        "value": "8f91ce368dd031b9c5dc26c22f2183a6dd132ad1d8cf08fb09f03bae0bbe2617",
                        "timestamp": "2021-11-19 13:42:37"
                    },
                    {
                        "value": "b25315f44d84ee9bc23603af18d197aa5bf93ebd6ca1232a4dedb43d5156067e",
                        "timestamp": "2021-11-19 13:42:36"
                    },
                    {
                        "value": "d39d9f946a58eeb9717a6ee7a2dc677dea16caa4b0350fb3076cec7a61aeb2b6",
                        "timestamp": "2021-11-19 13:42:35"
                    },
                    {
                        "value": "5d407049f81d3b75bf2d9eb7dc14662f533b1ca37d283e5ef50e001a7ac1f758",
                        "timestamp": "2021-11-19 13:42:34"
                    },
                    {
                        "value": "fd2a0d7069cb20517cf2fafcdc12a7d3bd253a3f15d3bd2a66794acdfa928ddf",
                        "timestamp": "2021-11-19 07:02:41"
                    },
                    {
                        "value": "2f07775ab256b6bd7dc726fdf62f96728f1b1c2f4b9696f633c81c3f4540f30d",
                        "timestamp": "2021-11-19 07:02:40"
                    },
                    {
                        "value": "43094826b48abcbf961c54b62bae3d2c477aa8a02f5ac96f9d11b40e4a71c10e",
                        "timestamp": "2021-11-19 07:02:39"
                    },
                    {
                        "value": "0c192374ba684e25b4e86887d8ed5168f0c01d606a666e24191f6416aca9123a",
                        "timestamp": "2021-11-19 07:02:38"
                    },
                    {
                        "value": "38b32b4b81d7a85de57efe5fbaff4dba63771277241d5ee645d3b841ea2b3526",
                        "timestamp": "2021-11-18 15:02:42"
                    },
                    {
                        "value": "6032964aa339af53c7217b719143a72cf3b5dd55315476ecb4e26a41bdd4736f",
                        "timestamp": "2021-11-18 15:02:41"
                    },
                    {
                        "value": "d143fa7a1b8d213e396406ba311f28050c1f7b2c038278d8a1a8a8fbdfddbe57",
                        "timestamp": "2021-11-18 15:02:40"
                    },
                    {
                        "value": "3cebc575fa5fce9db08567d37564d0f5cebb3bfca816a3121b27bd61307edff7",
                        "timestamp": "2021-11-18 15:02:39"
                    },
                    {
                        "value": "c3732a4c293740632956474cb15e9f25f77cd96b6a40366c137f29b5df1d819e",
                        "timestamp": "2021-11-18 11:02:43"
                    },
                    {
                        "value": "98794f254b3647e6e9f0c8e50beb7479b502f889e6fe6c9160bcf7b56b4f43a8",
                        "timestamp": "2021-11-18 11:02:43"
                    },
                    {
                        "value": "bc2323a8dbf4bbe8bf23261359fe3fdb786d78fd0da538e8541ad35edb3dbdbf",
                        "timestamp": "2021-11-18 11:02:42"
                    },
                    {
                        "value": "60ff626adc6a02e50f060f456b0b7f8a11577e923624b3fa8c009d758892439b",
                        "timestamp": "2021-11-18 11:02:41"
                    },
                    {
                        "value": "f8120dec2db4345903c6e613ec820ebd8fcc3ceebd2322663b5f86f25ed91fa7",
                        "timestamp": "2021-11-17 22:02:52"
                    },
                    {
                        "value": "52969c4afe1f510e6638b9a4018bcee213174bcc2be88f48b832188bd2b56e9b",
                        "timestamp": "2021-11-17 22:02:51"
                    },
                    {
                        "value": "2f6e89afd122fb052c5ad063bfe784b854157f9ff99af0a8aae4b7d19641ff61",
                        "timestamp": "2021-11-17 22:02:50"
                    },
                    {
                        "value": "2a8e3c217313095f5159adee7d90a5a2e0f1db12cb8977d9e073086ea0b62f21",
                        "timestamp": "2021-11-17 22:02:49"
                    },
                    {
                        "value": "fc69e6c5574428d1463b12e28954ffe967456b3cd133e5ff61f46972f1afa975",
                        "timestamp": "2021-11-17 19:22:43"
                    },
                    {
                        "value": "af8818f166c5e691323871d18976105764cf577792fadc4ca5559e80b8108bc9",
                        "timestamp": "2021-11-17 19:22:43"
                    },
                    {
                        "value": "6920659774cb5e8690a8fc63cba893f977cf05554931eb01f06795b75e9ab8c3",
                        "timestamp": "2021-11-17 19:22:42"
                    },
                    {
                        "value": "754a9c7607d3b754e5adab5f2a54a78d7596d2f73096bf4d529012e705cb1230",
                        "timestamp": "2021-11-17 19:22:41"
                    },
                    {
                        "value": "68027e5ff468bc84f3c1939bd03e135cff6d0f2860359fd60fdb4b36b2523952",
                        "timestamp": "2021-11-17 18:22:51"
                    },
                    {
                        "value": "48667ddc42d9eadc23dddc65f60f0de6e58afb6857953f282f7b02c115e9eed4",
                        "timestamp": "2021-11-17 18:22:51"
                    },
                    {
                        "value": "821e7caf1ca221251d0599c7f745f0d64f9c51e01b31c45f11628fa8ac934355",
                        "timestamp": "2021-11-17 18:22:50"
                    },
                    {
                        "value": "448a408819b963c2616651e6e5a394351f6dd938277f2c44421429e5e4fb1b92",
                        "timestamp": "2021-11-17 18:22:50"
                    },
                    {
                        "value": "59e99c6699d6d38be74cd22c6a3df45e97f50709fe3f42deb8e37fea43131e98",
                        "timestamp": "2021-11-17 18:22:49"
                    },
                    {
                        "value": "6315729f81fe55e4121e212fe2fb769e9cfbfba2178df45be066d5921817e371",
                        "timestamp": "2021-11-17 18:22:48"
                    },
                    {
                        "value": "290ccb8fdc55f0148a168eee8fb4e8ae7797e74e85fe07dfb7b0f12f3aceceba",
                        "timestamp": "2021-11-17 18:22:48"
                    },
                    {
                        "value": "8ba771d4533d5178358bca7c6460eef2046ad010957e49010d059419560ec52e",
                        "timestamp": "2021-11-17 18:22:47"
                    },
                    {
                        "value": "acf2c9a3bbe8cd6d95783b1d4ee9d16543c0e5869917873042a3de4cd8692b6e",
                        "timestamp": "2021-11-17 18:22:46"
                    },
                    {
                        "value": "0a39f67e2cd38bb8c0b1b24e1cbe4930f3cae972bba5cbc000f4fad4bd6e39b3",
                        "timestamp": "2021-11-17 18:22:45"
                    },
                    {
                        "value": "19b12317be5dc5a9d7b6a42f759a1bd85e3493b5ff31f64a16909eb700af95ad",
                        "timestamp": "2021-11-17 18:22:45"
                    },
                    {
                        "value": "4d88b7c45db03545e9efd2f6e07d838849a43594f6a425c05189ca93317a667b",
                        "timestamp": "2021-11-17 18:22:44"
                    },
                    {
                        "value": "01fca6d030abc8f0732cc2a23acc478cca71cb33c2882e1cd296108f06cd0f6b",
                        "timestamp": "2021-11-17 16:22:45"
                    },
                    {
                        "value": "a902bd81cbae75aa3c126e1b58c4555847d7ffdb4d6a264d6deb049a794b8a7b",
                        "timestamp": "2021-11-17 16:22:45"
                    },
                    {
                        "value": "1aa6eb491caf7ec34865e6fb62f8afc2b2b8c3cceba350e0c182b970e4bf81e8",
                        "timestamp": "2021-11-17 16:22:43"
                    },
                    {
                        "value": "945e623b814b647326ed96bc5be37010053fdc50f9dce11d96e408c22a8afd4a",
                        "timestamp": "2021-11-17 16:22:42"
                    },
                    {
                        "value": "047e21680f83e46119f35656cda0731ca1faf062d817206f39507d10ef4571b8",
                        "timestamp": "2021-11-17 15:02:46"
                    },
                    {
                        "value": "ece961a4e49709bd6483ef6fd35722e8efdce2e848ad2388fa993eb8cb9019b4",
                        "timestamp": "2021-11-17 15:02:46"
                    },
                    {
                        "value": "ca02dceee9aba6e888c48330d63ff24d8ab45b65ea9fadb20cc135046dc68392",
                        "timestamp": "2021-11-17 15:02:45"
                    },
                    {
                        "value": "f9eaded7e2a9b80530a8b06cd2e517e23b713386e055f35b40564018cc77b8e7",
                        "timestamp": "2021-11-17 15:02:45"
                    },
                    {
                        "value": "2d60d1344390233afcd141a2c6153a41aea4e7cd0d3373452d8163ab1f08d09a",
                        "timestamp": "2021-11-17 11:42:47"
                    },
                    {
                        "value": "43590c8ee62325d035e61489a7004335690975bc22b37aaa773391560ec4620e",
                        "timestamp": "2021-11-17 11:42:46"
                    },
                    {
                        "value": "96eb36242589b7a64977eea92e0c0834e5321b605f9a306110398d4da428f3d3",
                        "timestamp": "2021-11-17 11:42:45"
                    },
                    {
                        "value": "fad3fefa2042bd0d6f5bd86ca759a10599a160572f29096c1e3549bde0538311",
                        "timestamp": "2021-11-17 11:42:43"
                    },
                    {
                        "value": "2a2ed868de7659c4ab333a44c6e55d69fa73edb4399997efeb48e39abfedc0a2",
                        "timestamp": "2021-11-17 09:22:47"
                    },
                    {
                        "value": "c2f63253bee536d52a39aa067e5981f3f901366e92e1a4dc449819713f83d6b0",
                        "timestamp": "2021-11-17 09:22:46"
                    },
                    {
                        "value": "f28537022d7c23da3e4fa69c6f31c591ca8dfd5271d1b997971eca2d9c2a317e",
                        "timestamp": "2021-11-17 09:22:46"
                    },
                    {
                        "value": "e7f1ace8723e30320b9e8bc3dc8a079c2d82d8c58b6ef7e0810ee4f661f5f141",
                        "timestamp": "2021-11-17 09:22:45"
                    },
                    {
                        "value": "bf38e62cd7aa78245e12b09d2c55a959cb59148805f1a60accefda56abab4760",
                        "timestamp": "2021-11-17 07:42:52"
                    },
                    {
                        "value": "1301d283131415be83cf752a2b7969e9530bdd4e1ee43cb561717ab6040618c7",
                        "timestamp": "2021-11-17 07:42:50"
                    },
                    {
                        "value": "8f375adb5452c2bf7a04fd082035ab810625186fa2a3bb0b9b76c4d69cd8f780",
                        "timestamp": "2021-11-17 07:42:48"
                    },
                    {
                        "value": "6491b46ad3c881136f74696da35cf5ac9b74897a6f97285af09d2b0abc5a69db",
                        "timestamp": "2021-11-17 07:42:47"
                    },
                    {
                        "value": "1c289ddd1c015211c108f053f7571986ecc88f766fa431e86e115d89451e23e3",
                        "timestamp": "2021-11-16 17:02:50"
                    },
                    {
                        "value": "a75c86c3baabf9dea3dd33fde9e53eb91608ba0466d947ac6f9506de45d099ea",
                        "timestamp": "2021-11-16 17:02:50"
                    },
                    {
                        "value": "827773c04a967b9dd6a8746e9c7c0feb7931342f8c97c863c9722a83fd68ab4d",
                        "timestamp": "2021-11-16 17:02:49"
                    },
                    {
                        "value": "ac445b21d1ec91f9c1a80e24c43f86dc5c5eec7d1a142bc19ac715019c712aab",
                        "timestamp": "2021-11-16 17:02:49"
                    },
                    {
                        "value": "ca99de0e83b8226e73b9d1984934c6815d7ff97236747ca04a1fd2ffc7b9f8ba",
                        "timestamp": "2021-11-16 16:02:54"
                    },
                    {
                        "value": "a81f4b0d0e1d5cc93e06323610f8500c2f0a0b5c15c890c104e3234bfee7fa68",
                        "timestamp": "2021-11-16 16:02:53"
                    },
                    {
                        "value": "71d93edf8e5a5f7128dc660fa599a41c96059fee16983769adb91b3b8353294f",
                        "timestamp": "2021-11-16 16:02:53"
                    },
                    {
                        "value": "52a9b85b11571eb30f71176887b660207971f8dca60b63bea87a61186458c32e",
                        "timestamp": "2021-11-16 16:02:52"
                    },
                    {
                        "value": "bd3460456b20a00e991c4b6b1f5ef10a2fac18976aacba7e7038c0015fe76f0b",
                        "timestamp": "2021-11-15 23:06:14"
                    },
                    {
                        "value": "ab6a807d4829fe823bbb8a198a688c820d4c2c33a51fb08a42938cb28a246b14",
                        "timestamp": "2021-11-15 23:06:14"
                    },
                    {
                        "value": "955e25e69ec794dcd2a45b79f3eeecf71c734eb675e8a3e14691bbc8fbca5f52",
                        "timestamp": "2021-11-15 23:06:14"
                    },
                    {
                        "value": "776a5c20a347e729fd9fa02388673f3769a4a5aa7d4e44f579c581c9a928e097",
                        "timestamp": "2021-11-15 23:06:13"
                    },
                    {
                        "value": "799c93830f4403e85a535397dbda2c95785fb18f0b9ba37cf7a8bfe34deb9925",
                        "timestamp": "2021-11-15 13:43:05"
                    },
                    {
                        "value": "b08d103ca391e1023d2b40ac31d0940124e81914eeea79b86c01b7566be546e2",
                        "timestamp": "2021-11-15 13:43:02"
                    },
                    {
                        "value": "efd9628ddfec9790011562bfb1220b98d435934d4edf09357816a6b5cac3ec57",
                        "timestamp": "2021-11-15 13:42:59"
                    },
                    {
                        "value": "46f4b9b055e37f1ed4a9d1ee0e19ef93ff4d439b42697f6a7ade5f27d24f76ea",
                        "timestamp": "2021-11-15 13:42:57"
                    },
                    {
                        "value": "afa8139ef1e6cbc28ac8aa89dbd9fc2d2922724eb5749e1eed1a80c4f9813ea8",
                        "timestamp": "2021-11-15 13:23:02"
                    },
                    {
                        "value": "61eebe3242f6aa541a11fa1f2da7c319572586c640cf4d62b52392ba335b54ac",
                        "timestamp": "2021-11-15 13:23:02"
                    },
                    {
                        "value": "01d29a8a8940360545ccc6af7b8d90777eae0f1f107531fdd931b9a7550cd139",
                        "timestamp": "2021-11-15 13:23:01"
                    },
                    {
                        "value": "258c2425df43e072ea341829eef20ba1767a6e89dcd35ac3b98734376d259f41",
                        "timestamp": "2021-11-15 13:23:00"
                    },
                    {
                        "value": "784bda4a84b989a88dce02b01a186c713a3a6474454985930d19977577e83413",
                        "timestamp": "2021-11-15 13:22:59"
                    },
                    {
                        "value": "557260d94ea20dcd980632dbc467735f881adf78037f64198931427a2d3a4347",
                        "timestamp": "2021-11-15 13:22:59"
                    },
                    {
                        "value": "17edeef06fcbe9901e1247e477464908b77b8ab664fa81d80ac6723eb234da36",
                        "timestamp": "2021-11-15 13:22:58"
                    },
                    {
                        "value": "45fc46b2e77072b0051ff6a135b1df838bc97c7f81c26501270d3d5182ad0ec3",
                        "timestamp": "2021-11-15 13:22:57"
                    },
                    {
                        "value": "10cb1836c9ad0c738ca0c95b748075b4c035f6edd8c07f41735a1ebc9c352eff",
                        "timestamp": "2021-11-15 10:42:57"
                    },
                    {
                        "value": "b88385613d90ebbd240b11a3847fc2117c0d832fdf7a3c45f1ed68692ed68038",
                        "timestamp": "2021-11-15 10:42:56"
                    },
                    {
                        "value": "3a2d618bd6ae6b7075cc9c09d4778e1023159cd6f8d467c53e7b5c6aab7bf9a3",
                        "timestamp": "2021-11-15 10:42:55"
                    },
                    {
                        "value": "70aeddefd3b9c95213d4ae02504e4bd8088427f484adf227aef602800288a384",
                        "timestamp": "2021-11-15 10:42:54"
                    },
                    {
                        "value": "2e4effde03b5e8283726bbe08fabcfc2b41c062480060fcaba0b2ac489c2a364",
                        "timestamp": "2021-11-15 09:03:00"
                    },
                    {
                        "value": "77a46930ca579ee197db74bbbb30bd77c0ad71323836b5790c09f491d9147d23",
                        "timestamp": "2021-11-15 09:02:59"
                    },
                    {
                        "value": "a6cb7e19c7ce757f8b8fe0f8ae854b2505b761000c28a479cff520877b9ee90e",
                        "timestamp": "2021-11-15 09:02:59"
                    },
                    {
                        "value": "80fff1f7984d037e22b3fd60b12c9aaeb5e270a739338dfa0987336997661868",
                        "timestamp": "2021-11-15 09:02:58"
                    },
                    {
                        "value": "2021c1d6e9983c17fea9c773618a95407628b9c7b58071edea71c8525cd17d7e",
                        "timestamp": "2021-11-15 08:42:59"
                    },
                    {
                        "value": "86df15ac78abc1d224a4249db72d29dcb2979fd0669a15c0d291e47648dc0c1c",
                        "timestamp": "2021-11-15 08:42:58"
                    },
                    {
                        "value": "3491c6c489b9c8a4d1b97cdc835aa73aabf135ebcb2078090e4879bde7fd5161",
                        "timestamp": "2021-11-15 08:42:58"
                    },
                    {
                        "value": "ba1dc7d4d7eb9f21c8be72fbc9f0bb247806cbcebe96a4c00a68ebf071471ad2",
                        "timestamp": "2021-11-15 08:42:57"
                    },
                    {
                        "value": "5bc1379669e9a64e8615241baec65de16d74e54b2b6d81574cdab46e89ce602b",
                        "timestamp": "2021-11-15 07:23:07"
                    },
                    {
                        "value": "c0328083ae1578d8ee626b7e0814e0cf2a321b0b909361c91215b1ad02e24811",
                        "timestamp": "2021-11-15 07:23:06"
                    },
                    {
                        "value": "111320c04f814082a336182d3f80fe4c7853aa56dffbc97f8a3f6d1e7404f6e4",
                        "timestamp": "2021-11-15 07:23:06"
                    },
                    {
                        "value": "2bee14cbe1953b3a702d00e40417ff1d6b090f46116d62abaf2e255468d93bbe",
                        "timestamp": "2021-11-15 07:23:05"
                    },
                    {
                        "value": "05c36634ef7b938c2494ed619644b03acf1add4bf7802238e7290af9185d3f78",
                        "timestamp": "2021-11-12 12:43:01"
                    },
                    {
                        "value": "8fd4cb7b07bdb7b57f310832aa93c1974ccfec2edd53b5a165bdac986eb49504",
                        "timestamp": "2021-11-12 12:43:00"
                    },
                    {
                        "value": "63f0c502966cf3f84194a4513a116fc7958f7478589ef9080f3093e9537c2907",
                        "timestamp": "2021-11-12 12:43:00"
                    },
                    {
                        "value": "1944e435e026a10b93c7370d42924fca446e54cac65bdf5771f49aacf1fff86f",
                        "timestamp": "2021-11-12 12:42:59"
                    },
                    {
                        "value": "fe6892b3bb68851fab4ed732d6855f9c6ec6aa7d870bbcd309f52c3d54fc9fd1",
                        "timestamp": "2021-11-12 11:22:59"
                    },
                    {
                        "value": "4bde2d0abed748c6fb8620ab890cbb09fa5749c4ef749e8cd5c6c7dd40cfd37b",
                        "timestamp": "2021-11-12 11:22:58"
                    },
                    {
                        "value": "eda1254c9ce42dc330eedcbab389823cf733d96b91336f76653b1b855fb0d054",
                        "timestamp": "2021-11-12 11:22:58"
                    },
                    {
                        "value": "e44419db3c7053d27cfe777eab3511f4861095e416875bcf1a52909d782cb453",
                        "timestamp": "2021-11-12 11:22:57"
                    },
                    {
                        "value": "1284e8cc9304428c8d2d105f7b4dc2f94069019a0008882aac0c2057568f6918",
                        "timestamp": "2021-11-12 09:02:57"
                    },
                    {
                        "value": "306fd398bac280ee72ffa65e68b0025dca7c0b82c538156f3f580f8fdab71f98",
                        "timestamp": "2021-11-12 09:02:56"
                    },
                    {
                        "value": "5f5195f363ef21135a5b5298c2a3576bd03125eec094d769b25296eb0a2605b9",
                        "timestamp": "2021-11-12 09:02:56"
                    },
                    {
                        "value": "645bd5abf9168a358134646406eb9494a370713af1b0b529a46bfe862e4ac42c",
                        "timestamp": "2021-11-12 09:02:55"
                    },
                    {
                        "value": "5934b53c06d3c943f4cef7e383eabbea1587591a41a92280c0bf55e169927f13",
                        "timestamp": "2021-11-12 07:02:54"
                    },
                    {
                        "value": "c349ed39e4c047742bd9cebf8ad1d9d8a1977335f7cba162b36e4dcc336d1e4a",
                        "timestamp": "2021-11-12 07:02:53"
                    },
                    {
                        "value": "30aa63fa9e6cbac6fe61cdf492028445ec786403a7a7aaf9d296d68bf0e4abcd",
                        "timestamp": "2021-11-12 07:02:53"
                    },
                    {
                        "value": "50abe4b5adf6dde7d586d3be6f33a7b2207aca37ae45c795fa3589aafb8b374f",
                        "timestamp": "2021-11-12 07:02:52"
                    },
                    {
                        "value": "0233e917210aae9e6f5fbde3f94fd7b00107fdbfa20e2596647776443a892a15",
                        "timestamp": "2021-11-11 18:23:02"
                    },
                    {
                        "value": "f082986c206eccdaa79f0db369bc2826cc56e5071b371946c7fb96666684c4db",
                        "timestamp": "2021-11-11 18:23:02"
                    },
                    {
                        "value": "cb0c238ca3a905c66b681f2b7e2658a6d361385068f5a4aa396dcd22c0ed46af",
                        "timestamp": "2021-11-11 18:23:01"
                    },
                    {
                        "value": "cf8ab312ec2e263777fd777cdc2f714c18d259241bfeec9dbe6eb4ac62708f7f",
                        "timestamp": "2021-11-11 18:23:01"
                    },
                    {
                        "value": "0ddd61bdd07e204bd025fe9d86c203147d4f79fb85172dfbf8f166dbc3d54675",
                        "timestamp": "2021-11-11 17:23:06"
                    },
                    {
                        "value": "64581057af5c71fe6ef82679e8fdd81565d4e76895cfb8f3ee6cafcc663f5edf",
                        "timestamp": "2021-11-11 17:23:06"
                    },
                    {
                        "value": "0789b4aec138cf9c5bc3b01774fc8ed075dadf40c8ecf97058c201c9de22160e",
                        "timestamp": "2021-11-11 17:23:05"
                    },
                    {
                        "value": "10fabe251cb838c8bd1adbd50b559e0e6c7823c168c897af3a7f316d4b87d116",
                        "timestamp": "2021-11-11 17:23:05"
                    },
                    {
                        "value": "72a40bfbf2f3d65b1cbe70f875e8201a815319805f28ead76819c56f27c3e9b4",
                        "timestamp": "2021-11-11 17:03:03"
                    },
                    {
                        "value": "d3d8ab2d49b0e893933192b1dbc35e4d58e67efc8e09621d28acccc75a48b29b",
                        "timestamp": "2021-11-11 17:03:03"
                    },
                    {
                        "value": "61591ac877c329a2b715066f957ea19c164bc78c1ffaf59c769462a689f3b139",
                        "timestamp": "2021-11-11 17:03:02"
                    },
                    {
                        "value": "0ae85a394c6b92d40e1bebf04798d14a09c6da319f026619652b2b1e7e618f8b",
                        "timestamp": "2021-11-11 17:03:02"
                    },
                    {
                        "value": "0e613c9c77e7af9ad491fddca362c14ccb689053886b2ec57ebd8c39b17ee6b9",
                        "timestamp": "2021-11-11 16:40:15"
                    },
                    {
                        "value": "16d7f2f2395ad76af5f6b6c5dadc70bcd40d203c5efc5bd15cde47a78d9f1044",
                        "timestamp": "2021-11-11 16:40:13"
                    },
                    {
                        "value": "433494d21eabe777d1947da83d6281e5ac35bf98eea4791fcebf5e1561723384",
                        "timestamp": "2021-11-11 16:40:10"
                    },
                    {
                        "value": "5c21a6a94c313d6d3602e813bc10a5985bcf7cd5f603451fd79aed5142bcd23a",
                        "timestamp": "2021-11-11 16:40:08"
                    },
                    {
                        "value": "9f1a46f25ff46ddc69bb64b4bffbf628e41eb6c4820c617bfb06fd287e8cd08a",
                        "timestamp": "2021-11-11 08:03:03"
                    },
                    {
                        "value": "6f0fbee68be5da94a5eb3f45705680efa612c75f0a38b135f5ec6587af9f9953",
                        "timestamp": "2021-11-11 08:03:03"
                    },
                    {
                        "value": "ecd6ab3b25dc9c97acc79562b3cc73628a07fb4f8dfbab571441e2eb57b20252",
                        "timestamp": "2021-11-11 08:03:03"
                    },
                    {
                        "value": "5d5cd3bd60e148bcfc1b78e13836f43c684b21babdeff5f036cda174ca122f82",
                        "timestamp": "2021-11-11 08:03:02"
                    },
                    {
                        "value": "5473059c722dff128f5761c44d5a9fae4ad4ddfbffefdb5e21f898f3979ec511",
                        "timestamp": "2021-11-10 17:43:10"
                    },
                    {
                        "value": "85c25c523bf8a24c2d4eda60e343729175635dfd590cb3e42732ecc27e55b0d3",
                        "timestamp": "2021-11-10 17:43:10"
                    },
                    {
                        "value": "1c7190343deb537619d4f4682646acfb0c3734b3f322fdce0a1e2a0676c9c292",
                        "timestamp": "2021-11-10 17:43:09"
                    },
                    {
                        "value": "d4492af655693b3cedc40105b308072db3a299f241f029422275652055c3c984",
                        "timestamp": "2021-11-10 17:43:07"
                    },
                    {
                        "value": "2295e42d3be4002bd172b63bc5188c197c63795ceafde11506753c435ff7f39b",
                        "timestamp": "2021-11-10 15:23:10"
                    },
                    {
                        "value": "ec3e94ac2dc2db38da4325dc7cfb03053619cca9d56bbb7405bb4457e8437e86",
                        "timestamp": "2021-11-10 15:23:10"
                    },
                    {
                        "value": "f3701908c09289bbef3b6d8019687b95df2d02120e36f749067afa46a6d90b4d",
                        "timestamp": "2021-11-10 15:23:09"
                    },
                    {
                        "value": "115fdd9db07792553ba34b41feba95b19991c1c0509b5bdfb956979b96fe4047",
                        "timestamp": "2021-11-10 15:23:09"
                    },
                    {
                        "value": "d9eac565c15e1ebb04f1470737155fdbad92e27d070375ad478e3a946b6d84e9",
                        "timestamp": "2021-11-10 15:03:06"
                    },
                    {
                        "value": "8a786e9275e14d040739db2874459aeb3193aff4ed21272cb0c8a49e89b165d9",
                        "timestamp": "2021-11-10 15:03:06"
                    },
                    {
                        "value": "7920c7f55130ef08c8bf5755a1b4c357093ba418a506839277c20ab86325ac50",
                        "timestamp": "2021-11-10 15:03:05"
                    },
                    {
                        "value": "5c1d67ea5a814f5c50c9adbeb7d130c92e2f502caa8fe866cf1ed208b0435d85",
                        "timestamp": "2021-11-10 15:03:05"
                    },
                    {
                        "value": "e0ca69bd0c1cde0b3a3e5bbae618c3edc82314f323ff4f062edb2d429d394548",
                        "timestamp": "2021-11-10 14:43:08"
                    },
                    {
                        "value": "4461591c65cd4e32c75ece28af45fa02370d8b31404d4a8b73303208b7fa6dea",
                        "timestamp": "2021-11-10 14:43:07"
                    },
                    {
                        "value": "f61d2b79ec9c52c2d4f27b259e2181ac36c51a72f7e2006939368d4254119bc1",
                        "timestamp": "2021-11-10 14:43:07"
                    },
                    {
                        "value": "6ca16f1922f3a7c2e4aab0407cd6f06a8b9a6a60f1e77861c945db563c265c5d",
                        "timestamp": "2021-11-10 14:43:07"
                    },
                    {
                        "value": "01343cf4aabf8e5c9defede4bd77c2885f52cd14886d9aacf2ea9b9f7b2faf28",
                        "timestamp": "2021-11-10 13:43:13"
                    },
                    {
                        "value": "d87618f7840361408c1bd318a1977714dedc8b346684986842e0f32cdc94f758",
                        "timestamp": "2021-11-10 13:43:13"
                    },
                    {
                        "value": "c66dca83ee4bc84e680347d01e9ade22672fc4da7a464409b56e25ef3609e366",
                        "timestamp": "2021-11-10 13:43:12"
                    },
                    {
                        "value": "cb9d19a9761cb59787184f680c0f164923fffdde311a5e0cc4eb9c983f16792d",
                        "timestamp": "2021-11-10 13:43:12"
                    },
                    {
                        "value": "1917771ae601e7573b6ce7bf5fa235636aba9be0fd361f8e63d9a55413ba4050",
                        "timestamp": "2021-11-10 04:23:27"
                    },
                    {
                        "value": "f2d7b5734d8a31c29825a4367006908169f6c0d08ea1745ae7f1b52858c40739",
                        "timestamp": "2021-11-10 04:23:26"
                    },
                    {
                        "value": "b5cd089107e3f14e771a3ff948ae7a6db076aa8233ba853a06c7f005472e5a08",
                        "timestamp": "2021-11-10 04:23:26"
                    },
                    {
                        "value": "af5dd65e23533ed506a34f3a98f1255fccb480c88615ed7cfd0c157fb3f21f9d",
                        "timestamp": "2021-11-10 04:23:25"
                    },
                    {
                        "value": "dbc0302e93bc96ba1b4f31b89bedd6296c2357031e4f7cab2cf92a7dbbea2c41",
                        "timestamp": "2021-11-10 04:23:25"
                    },
                    {
                        "value": "3f8b6c43ac0c4fa103b16d2c1db4f6b7bb5d6976e1f7618c7530be2f1470f193",
                        "timestamp": "2021-11-10 04:23:25"
                    },
                    {
                        "value": "7e55bdeff8cc2a3cb72cf193e3dac16cfaef2a3019f43bed1f115472b2b44849",
                        "timestamp": "2021-11-10 04:23:25"
                    },
                    {
                        "value": "541d6e3dab114a17e7325562461a52950c78851208317d47ba1aafe4794b86e2",
                        "timestamp": "2021-11-10 04:23:24"
                    },
                    {
                        "value": "7de6cc5165d196109bf0e863aaba721b20d01d968b4f70c167c1582ae9fe6f85",
                        "timestamp": "2021-11-10 04:23:24"
                    },
                    {
                        "value": "e7ea471d02218191b90911b15cc9991eab28a1047a914c784966ecd182bd499c",
                        "timestamp": "2021-11-10 04:23:24"
                    },
                    {
                        "value": "9a02a83701abcffaa5fae1d05111f99ffb5f9ba5bd3f4c050039ac36fadbd069",
                        "timestamp": "2021-11-10 04:23:24"
                    },
                    {
                        "value": "b0e3e4a26889d72213c8bbfeb3a497cd08ace12b15746e72c973c1b3ed91f4e5",
                        "timestamp": "2021-11-10 04:23:24"
                    },
                    {
                        "value": "5207c76c2e29a2f9951dc4697199a89fdd9516a324f4df7fa04184c3942cc185",
                        "timestamp": "2021-11-10 04:23:23"
                    },
                    {
                        "value": "bfb92e1ed06426cd90bf6f5ca21f1afa7c2e73d4edfa3edb17df484120fb3d81",
                        "timestamp": "2021-11-10 04:23:23"
                    },
                    {
                        "value": "eb246654c3bb7be5fcae7918bf2c7df84446b6763de5966c15a42ed937ffc45b",
                        "timestamp": "2021-11-10 04:23:23"
                    },
                    {
                        "value": "f80fde077a29ee4eb63732d57339bb5f6deaafdb9252d57048099f353e9c7682",
                        "timestamp": "2021-11-10 04:23:22"
                    },
                    {
                        "value": "fca5bf518c94d28893ac11b90b0d2a047420124a78b7b1b02bd8495ce601437b",
                        "timestamp": "2021-11-10 03:30:39"
                    },
                    {
                        "value": "df05f6b5c7f18e28ea9d1c48b49cc45738e46ba31fff6a0594eaf0177fd5e1a6",
                        "timestamp": "2021-11-10 03:30:38"
                    },
                    {
                        "value": "259e0d662f388c659dc3e2bfecfd3126d9c2f536068b0f4e1ba489554f227a9c",
                        "timestamp": "2021-11-10 03:30:38"
                    },
                    {
                        "value": "5eea9af63c99698d382a45114b2ec851b4da7dd5be23a1fbb80071fd2256d9da",
                        "timestamp": "2021-11-10 03:30:37"
                    },
                    {
                        "value": "d768d17958cae979e08d062b1f8784d244fbe3ab75b57edd997e30165afb265e",
                        "timestamp": "2021-11-10 03:30:37"
                    },
                    {
                        "value": "61c43e1819dd670f4c589aac171c43ff2af07a0fc07414b1af306472049152da",
                        "timestamp": "2021-11-10 03:30:36"
                    },
                    {
                        "value": "736fe87acc39d8cba499d29f2b9d93479cfec64dd7c11c82b054cbb394b9d1c4",
                        "timestamp": "2021-11-10 03:30:35"
                    },
                    {
                        "value": "687a0bd5f11adb96be04de5755cbcd67e1f9bdd15169eca9fc28e80581739184",
                        "timestamp": "2021-11-10 03:30:35"
                    },
                    {
                        "value": "919a27a5ed2587a7c3b054cfb57c7a818811c36eaacefc243399eb2c4c61569a",
                        "timestamp": "2021-11-10 03:30:34"
                    },
                    {
                        "value": "de5349e197834f848854fb7d11cb2cf812a515943777f1efdf00510e1a515a85",
                        "timestamp": "2021-11-10 03:30:33"
                    },
                    {
                        "value": "5ef9aca104ebff2e8795bf742e4893f18a8327b58daae3a06333bce771bf35cc",
                        "timestamp": "2021-11-10 03:30:33"
                    },
                    {
                        "value": "e460aa351f328bd4baa7631ee73cca0dc22cca3e8d24e06ac78c47b2318f90f8",
                        "timestamp": "2021-11-10 03:30:32"
                    },
                    {
                        "value": "bdd0f9e15933eedff5301832e6e42b2844a9a555fff2fab8129872402d2247a9",
                        "timestamp": "2021-11-09 21:22:58"
                    },
                    {
                        "value": "3cdd039befe7f488833076ebc929b277696f95fdbb4b91506771f536d7c22687",
                        "timestamp": "2021-11-09 21:22:58"
                    },
                    {
                        "value": "4c20ccd98499abc6164a1b4f0dbfc1e16afef3e439fd6539bc25a012489ea121",
                        "timestamp": "2021-11-09 21:22:58"
                    },
                    {
                        "value": "bf28fead8ec14ec9e464574a4dd67fec82af54f203787632e55e7899293666df",
                        "timestamp": "2021-11-09 21:22:57"
                    },
                    {
                        "value": "e71d7ec48419fb7730807f1d69b882e2d3377576fa300909b5a1c1e20931d995",
                        "timestamp": "2021-11-09 14:02:57"
                    },
                    {
                        "value": "3ff7d80610028a3a199362071429f3675d92f1d22af606f26ba3750b68b5486e",
                        "timestamp": "2021-11-09 14:02:57"
                    },
                    {
                        "value": "0a7fa3088a86286910529e3055e246ed9be79be0c5f0f6ebb6a6c66ae4c163fd",
                        "timestamp": "2021-11-09 14:02:56"
                    },
                    {
                        "value": "3e1440a1b46c4ffc05088356578a64a9a7a34bf1a243e295c552501076a568e9",
                        "timestamp": "2021-11-09 14:02:56"
                    },
                    {
                        "value": "ee0599aac9b529fbea655faa2934cdf47f9b3e3612c497578f65b58dbc33ebe0",
                        "timestamp": "2021-11-09 12:43:06"
                    },
                    {
                        "value": "728b23f75c1140a1763dd7c75083f2ae57afeb6ffa3d7b33a9ba1b4904c4566d",
                        "timestamp": "2021-11-09 12:43:04"
                    },
                    {
                        "value": "241672a3bac2f63f1bd79b1f48b7c1f5b4f2d471652efa5d367549db7e85e084",
                        "timestamp": "2021-11-09 12:43:03"
                    },
                    {
                        "value": "10a069e7bdbfac1dee67fbebf39c29f4c69ce0b7600c6a3aeb74b47411be8087",
                        "timestamp": "2021-11-09 12:43:02"
                    },
                    {
                        "value": "b50151c00c13a5692bdfe3a91f9e82790954c1090806f073084b42d916ab0a2d",
                        "timestamp": "2021-11-09 11:43:16"
                    },
                    {
                        "value": "1f70e76eb3ff6c94d97405e67a5b4e32f2df775d664a515432e64289b95b8437",
                        "timestamp": "2021-11-09 11:43:14"
                    },
                    {
                        "value": "9cdcead8307543617d9faf8e1d3ff09b54dffdd840eaf7ab90b29ee3d08f19a0",
                        "timestamp": "2021-11-09 11:43:13"
                    },
                    {
                        "value": "af93111eda140e79ca1a54ec57ae822c692f63c6da3c6fe942d63effb078a206",
                        "timestamp": "2021-11-09 11:43:10"
                    },
                    {
                        "value": "b894d7a0e5ed4b82571a1c6fa4b9393566ae6b0ed4bed087515626f2668cf80a",
                        "timestamp": "2021-11-09 11:43:10"
                    },
                    {
                        "value": "69cdb138c2ec7cacad842c9c58d09a33f51903bec9aa247a90a180647df7d744",
                        "timestamp": "2021-11-09 11:43:06"
                    },
                    {
                        "value": "239fdc7e6904064d84ebc2d321e7add9a1469ee3c37785e4f752f005de4d5c4f",
                        "timestamp": "2021-11-09 11:43:06"
                    },
                    {
                        "value": "9c42fcdcd8bfe4c41f22cc186219a0f2879fa0d53e556106e8842a5efabcf5a5",
                        "timestamp": "2021-11-09 11:43:03"
                    },
                    {
                        "value": "702456c9fe5769f0ce56ccc6899072a8862a8a7ab7361991c86ea33d1ddc38d9",
                        "timestamp": "2021-11-09 11:23:19"
                    },
                    {
                        "value": "918f98e66f1aae5bebe260cd5ddb4336318dc9a4193f130ac680ce3847bdfa9f",
                        "timestamp": "2021-11-09 11:23:17"
                    },
                    {
                        "value": "ee2706bc2dcedaf802a943ae5e94af62e28b004f39059f8c9a2fffd88de49aeb",
                        "timestamp": "2021-11-09 11:23:15"
                    },
                    {
                        "value": "c8d54eac34afd28839ae109f0813ed54f21ee9d17a8ae54e5b12a11ec9250999",
                        "timestamp": "2021-11-09 11:23:13"
                    },
                    {
                        "value": "79bd7c56b3d9375b1b510aa97f5dbc58625239e65703959d23f12c8063320dc8",
                        "timestamp": "2021-11-09 07:02:58"
                    },
                    {
                        "value": "ad0722e66c156e4eb2abc9cb4b737cce266f4b1592e69d02c34b13a0d459882e",
                        "timestamp": "2021-11-09 07:02:57"
                    },
                    {
                        "value": "c819930da948bb9ffc34deec4aaa5e6eb7c0608233954e58bdcd98b7e5068a96",
                        "timestamp": "2021-11-09 07:02:57"
                    },
                    {
                        "value": "632ef368af47bedba7af9cf7ab05e6a99aa914c6290123b1c1a74cc432b6e312",
                        "timestamp": "2021-11-09 07:02:56"
                    },
                    {
                        "value": "fe16ab9f79f4ce7176a001fb78902d9f8f20080975e311c05d27b7ebc34f7619",
                        "timestamp": "2021-11-08 17:23:04"
                    },
                    {
                        "value": "98ec703a8bc0cb51b4ca2ceeff650dac09fb55e8cef13b128ae2092afe233111",
                        "timestamp": "2021-11-08 17:23:04"
                    },
                    {
                        "value": "e19f3d1c2b01fa0e194adcf0563f47b6e2dc92c5d74646f6f10c38739ea20df3",
                        "timestamp": "2021-11-08 17:23:04"
                    },
                    {
                        "value": "38e2c35d761118a272ad1778ec838cf6ac0577aa915a7a529c0fc28284c68f42",
                        "timestamp": "2021-11-08 17:23:03"
                    },
                    {
                        "value": "7f03b4050a54b95eba904a8e8882b55389bd20f591e9828b40cd9da3b93a1e36",
                        "timestamp": "2021-11-08 17:23:03"
                    },
                    {
                        "value": "6529c1eb48d6a4ffe24e91bb65cab349436408048d403edf9fcfa38ac617d38b",
                        "timestamp": "2021-11-08 17:23:02"
                    },
                    {
                        "value": "9d7e314361860f13fbc4e7c226aa9e8191d916dde45802597a7bb6e794a2f218",
                        "timestamp": "2021-11-08 17:23:02"
                    },
                    {
                        "value": "7e4cd781e7ae7f3e3ca575c2b99c110ac01b678b259f5070b1806ac10b153c9e",
                        "timestamp": "2021-11-08 17:23:02"
                    },
                    {
                        "value": "35c64f0d2028c3fb7d1c0abd23f7dc61695ea5d2e4aa7fcb8aa6b595615cadd6",
                        "timestamp": "2021-11-08 13:43:04"
                    },
                    {
                        "value": "5ac0af8b1335c2e828a5f09438fa8418fc165066ee1c86200be38c12ecf07390",
                        "timestamp": "2021-11-08 13:43:03"
                    },
                    {
                        "value": "afe099098ee7624336e48a44a03dc7174b1aeb640c8669bdfd06a3a2361cfa4a",
                        "timestamp": "2021-11-08 13:43:02"
                    },
                    {
                        "value": "488ccd00b73b74a7fbedefe7d2270c0370c520d16d1a81fc1afe4879d8d53a36",
                        "timestamp": "2021-11-08 13:43:02"
                    },
                    {
                        "value": "fa029024c0db8f599eba3b14583a1032d6efd6627834053b8201947f850c9621",
                        "timestamp": "2021-11-08 13:43:01"
                    },
                    {
                        "value": "c8cc2f6e3350e4aa90d85c299446a6b391583eb681eadc1db52aa1d99ce0557e",
                        "timestamp": "2021-11-08 13:43:01"
                    },
                    {
                        "value": "c0e64417c789ea3bb62e752e3186fd674bdf73f128c695944928ec95e4b71c4b",
                        "timestamp": "2021-11-08 13:43:00"
                    },
                    {
                        "value": "3bf5e55fc9479c1d3f5f90952d9a29fe9ca4279374da2295d9643bf98578641f",
                        "timestamp": "2021-11-08 13:42:59"
                    },
                    {
                        "value": "e73ab5b026aaeffc50c96289762fc9e0d4f5354d2c976b7e5ac7c37865a307ad",
                        "timestamp": "2021-11-08 13:42:59"
                    },
                    {
                        "value": "57bf22214983cc412362a57c7ca30ed588a27fee52c205e7d46b72a28019cb4d",
                        "timestamp": "2021-11-08 13:42:58"
                    },
                    {
                        "value": "39a03fd00b79a775cc5e10e7f232665e670ad3c8337f8ad509a65828d3747d28",
                        "timestamp": "2021-11-08 13:42:57"
                    },
                    {
                        "value": "25e5c1bba7e90a8fb32feef0f46b80eef859b4224dad980143dbfa8f1bd19764",
                        "timestamp": "2021-11-08 13:42:57"
                    },
                    {
                        "value": "78e7401ff95f4267f226bd32e633f6000dcd202d3611717508b1d7752ea21c55",
                        "timestamp": "2021-11-08 11:42:57"
                    },
                    {
                        "value": "ef2754157037c661f6acf043f9af565be640a4bf7cc569fd38ae605c919e60e3",
                        "timestamp": "2021-11-08 11:42:55"
                    },
                    {
                        "value": "a0f19c958334dda86d968b7d489936c7d7c36835d294c30c044143d70fd43ffb",
                        "timestamp": "2021-11-08 11:42:55"
                    },
                    {
                        "value": "fc7fc9a9e53d9485bbb46619779ff8d205e187755ec50a265414a2608c2f7a87",
                        "timestamp": "2021-11-08 11:42:54"
                    },
                    {
                        "value": "4cb186ac29beb232ae21a243cf845b44b04ef29e071ab9af5075dc8b4b6d2b10",
                        "timestamp": "2021-11-08 07:23:00"
                    },
                    {
                        "value": "fdf62703c7a23c9d79ecfbcfd7215f541d45393b42a352676fb6294d115486c4",
                        "timestamp": "2021-11-08 07:23:00"
                    },
                    {
                        "value": "067d637a242e08f080d530b21e77a9a9f4b3c36dbbb58f484568edadee609522",
                        "timestamp": "2021-11-08 07:23:00"
                    },
                    {
                        "value": "26ff4accc67ad7086b4120f91ccfa9a83d99ecbf66cedcd95b81c261d2d38d38",
                        "timestamp": "2021-11-08 07:22:59"
                    },
                    {
                        "value": "79187da9596d8ca101e3f91a0637dd5f26c1016bfc2f593b754d49721a964412",
                        "timestamp": "2021-11-08 07:22:59"
                    },
                    {
                        "value": "e20245e3a5fb8f9119c3ca78105615d5d2ba69e9406a64d7b024c1371d43cb07",
                        "timestamp": "2021-11-08 07:22:59"
                    },
                    {
                        "value": "063a7958ffe4b0ff1507e737894a29bb5d2a202eaa3b2b4315a4d5e20349584c",
                        "timestamp": "2021-11-08 07:22:58"
                    },
                    {
                        "value": "8890d74ce4d1e62ad35e600ad8db65a7ff77f7116470f11703a7b140107d3344",
                        "timestamp": "2021-11-08 07:22:58"
                    },
                    {
                        "value": "48ccb853e664d59aa6503c795a1f9964003bebfa5fe43bc4c4dabab4e5a7018a",
                        "timestamp": "2021-11-08 07:22:58"
                    },
                    {
                        "value": "7a7e3d038c442002bad7c53ac7724f411993773d1657d1623928a20639b741d9",
                        "timestamp": "2021-11-08 07:22:58"
                    },
                    {
                        "value": "472772ed28161f82f180d925a6dd510914b18c8c1782cceb1ebe9781c73dec3a",
                        "timestamp": "2021-11-08 07:22:57"
                    },
                    {
                        "value": "9a946d27ce8a262467a899b462d224f4cba6ed1083f8f3937a03aeca423d3b83",
                        "timestamp": "2021-11-08 07:22:57"
                    },
                    {
                        "value": "a07217c9cbd414ae5c671b0ed4844427ab99ef2274c32a63d75d2cc6f9f31dc2",
                        "timestamp": "2021-11-07 21:43:06"
                    },
                    {
                        "value": "9e3e68340103d0748a59ab2be72ec5a93e023235a67d79459c9aee5f2d08b397",
                        "timestamp": "2021-11-07 21:43:06"
                    },
                    {
                        "value": "c541639479378750559eb199eec4120c0cf816a364c6b4aef7cface3895b3c86",
                        "timestamp": "2021-11-07 21:43:05"
                    },
                    {
                        "value": "9fa836c4cbb8e161258341c3d40d518643951702a3826338a5cdac18b9818ffd",
                        "timestamp": "2021-11-07 21:43:04"
                    },
                    {
                        "value": "1ca4666ba6070d481180ecc872b96aca110b687a5e2263cc02c000948ff25f23",
                        "timestamp": "2021-11-07 21:43:04"
                    },
                    {
                        "value": "271a9794d6709add5cdbd9fe1edd13a1d286c0fca70751401a38ff06b3254ff4",
                        "timestamp": "2021-11-07 21:43:04"
                    },
                    {
                        "value": "489c8be7126a5b724ad696451d925fe177b2ab7242b2c81d353af05c0f91dc93",
                        "timestamp": "2021-11-07 21:43:03"
                    },
                    {
                        "value": "8abe4bc33112ce5bc9ce4ef8b33187c33a537cf540a63eb9562b4a0622f634aa",
                        "timestamp": "2021-11-07 21:43:03"
                    },
                    {
                        "value": "17936941c27a3a1e4b81f90e702826481a8f1a558f47e48feb25ae1267a2ab55",
                        "timestamp": "2021-11-07 21:43:02"
                    },
                    {
                        "value": "f87dc06616cd6ccd1addd025e2ae92b45911aee6b0a6a7e9ced42d6a0d77457a",
                        "timestamp": "2021-11-07 21:43:01"
                    },
                    {
                        "value": "7a1a96acb6fbf74b821d7cad25b8912cbb97ea2eb4b847289cc0486705984fda",
                        "timestamp": "2021-11-07 21:43:01"
                    },
                    {
                        "value": "35dc125eef0f4bbe00a018a058e90e79541489c0f0feb7cb7e920f7fb2a01c6c",
                        "timestamp": "2021-11-07 21:43:01"
                    },
                    {
                        "value": "1d7800d50de8019f5f30a281730f4a77a39b14bff8bc385a302508eed2cfa5be",
                        "timestamp": "2021-11-05 16:03:02"
                    },
                    {
                        "value": "3b805b38280aaf40aa4728b5d2a563e6c8e35fd71ed376b4fb4197e2e70f2df2",
                        "timestamp": "2021-11-05 16:03:02"
                    },
                    {
                        "value": "52280ee210b55f76f182504adf1b60263e6456dd345b053c2ca5a67076450f60",
                        "timestamp": "2021-11-05 16:03:01"
                    },
                    {
                        "value": "8e73b929d92f3399a4c8106c7f54172cf2ef74fad213683f6d7d40ad292825cd",
                        "timestamp": "2021-11-05 16:03:01"
                    },
                    {
                        "value": "1b7f83939364b115ff9ac2244146f2b3b631e4dcdb7560c7fe326b5876cdc2f4",
                        "timestamp": "2021-11-05 11:02:54"
                    },
                    {
                        "value": "4ba5dbbc576012bb273bd055e665fa5e58fbd262da57d9211b1bbccb8bc462af",
                        "timestamp": "2021-11-05 11:02:54"
                    },
                    {
                        "value": "5f16dc9d03fc218e2ec3bbe921603f5aab9377747f6bb7440435e56f6dbde816",
                        "timestamp": "2021-11-05 11:02:53"
                    },
                    {
                        "value": "8d691f626071b18768949c51d64e415cf97ef4fa69eb16a124b2eb6771b42af8",
                        "timestamp": "2021-11-05 11:02:53"
                    },
                    {
                        "value": "8961eafe8e136e299046820cd363da1f0e0b03fda556451d274a30b09b023566",
                        "timestamp": "2021-11-05 09:22:56"
                    },
                    {
                        "value": "5763cac3dffd5fc59d460212b0590afe8b96c254927e2e9f28114e9ab0c3ed6a",
                        "timestamp": "2021-11-05 09:22:56"
                    },
                    {
                        "value": "fb9d1713121ee4c0f1770c243cdec8a3b22bc2e32eb24fa07c0084f461cc64fb",
                        "timestamp": "2021-11-05 09:22:55"
                    },
                    {
                        "value": "1135dc255eb986c3191809568ea5162d738664f9b014309e73874f68806c63d5",
                        "timestamp": "2021-11-05 09:22:55"
                    },
                    {
                        "value": "c01c7ea8ec4fc73883cbd9c1cb9963f68ceebac4d5f0051d55e7064dd1d1ee5c",
                        "timestamp": "2021-11-05 06:22:55"
                    },
                    {
                        "value": "9e6fe495fbc2d93d6bb59fc2a3a72f6bf580ba4e199e441f09b2ff86db981ec0",
                        "timestamp": "2021-11-05 06:22:55"
                    },
                    {
                        "value": "cf192dd84c8cb64401c1cb0625fb1b6fd051f13ca2a719db51ffd51d87de00c1",
                        "timestamp": "2021-11-05 06:22:54"
                    },
                    {
                        "value": "29114713644983753592ff7bcb0a0464d61afddc6fe14df1cb5bd47a64e7bacc",
                        "timestamp": "2021-11-05 06:22:54"
                    },
                    {
                        "value": "2962a9994563245472632439a57d5781fb3bde1cf525cfa806a23b85bee2ea5b",
                        "timestamp": "2021-11-04 11:02:54"
                    },
                    {
                        "value": "5b60cfc8f25334c672bc7e440c2b5a53aeec2e0fd016b5f46bf55e59ed93fa68",
                        "timestamp": "2021-11-04 11:02:53"
                    },
                    {
                        "value": "6e7dc09d3a59cc7391c009bd8f8a70360cebafe87e817e44cd359a935dbf2617",
                        "timestamp": "2021-11-04 11:02:53"
                    },
                    {
                        "value": "67953d1639c3283dc06cd608af290dbd245dd76fa4be553ea9d7333f07f560f8",
                        "timestamp": "2021-11-04 11:02:52"
                    },
                    {
                        "value": "5217348409dd94a05c09528914b59d0fc665053bdc180df055bc6bc557c0ebdc",
                        "timestamp": "2021-11-04 07:02:49"
                    },
                    {
                        "value": "3de3aa789a595ea8e8840a87a286c1532b4e1c847f0c9e527b66f4759d06dbac",
                        "timestamp": "2021-11-04 07:02:48"
                    },
                    {
                        "value": "8f06ef3fb5b077f1d8c9b9ff9ac36a5d019c8c829fc7374dbf03a407793ca29f",
                        "timestamp": "2021-11-04 07:02:48"
                    },
                    {
                        "value": "844c28b75abdaabc8ce72a113d46dfc8d3cace21bec3fbb4116a09fda12cba35",
                        "timestamp": "2021-11-04 07:02:48"
                    },
                    {
                        "value": "1c97757e86ff5962b55decf616e81cff201ecb2350717cd923269be17b0c1ed9",
                        "timestamp": "2021-11-04 06:23:01"
                    },
                    {
                        "value": "f4097221e19342e5b91103161eb7aaec277ff47ea694a86b92f7574be7959cc7",
                        "timestamp": "2021-11-04 06:23:01"
                    },
                    {
                        "value": "2ffc8007f1404b17c935d64b67607871014adcc5d8128012ff8257f3891fab54",
                        "timestamp": "2021-11-04 06:23:00"
                    },
                    {
                        "value": "77582ba5bb0a7e0894a64d832ead70cd8572cb49f21fcdc10d8904d68343798d",
                        "timestamp": "2021-11-04 06:23:00"
                    },
                    {
                        "value": "4e5614a01040742772ac9806f791100390d125bcbce0132caab4150b8f1cbdc0",
                        "timestamp": "2021-11-04 00:11:37"
                    },
                    {
                        "value": "ae93792ae0fafa49a16625b66cc161c006f9be24b946eda18b5e02aad2f9f6b8",
                        "timestamp": "2021-11-04 00:11:36"
                    },
                    {
                        "value": "27b73d13a548e7501e9e2de62382122adacf550f464c1139994cabf7265b8ee4",
                        "timestamp": "2021-11-04 00:11:36"
                    },
                    {
                        "value": "2e1dd4b7b29ab0e8fd9b9b7236dc1d9620639e44a1c14a0853ce1d25dc1d6967",
                        "timestamp": "2021-11-04 00:11:35"
                    },
                    {
                        "value": "1aeb38db4aa9f7758a8e63680f8c71f4f61df56c2045a8f029009a6c15f06722",
                        "timestamp": "2021-11-03 23:43:09"
                    },
                    {
                        "value": "6d0b984ece08859ea83487c26ce84a1f78b173b6293cb4c2f1ede0dc20a5f28c",
                        "timestamp": "2021-11-03 23:43:09"
                    },
                    {
                        "value": "80c714071d9c6fd83d914f1971a6ae049cc202607b00eeea32be4be6cf904723",
                        "timestamp": "2021-11-03 23:43:08"
                    },
                    {
                        "value": "4f6b5b315abc56f667bd87004c6d9f60db94b0bf3a0acd7a5819bdb2a48eb487",
                        "timestamp": "2021-11-03 23:43:07"
                    },
                    {
                        "value": "115a084d9aa48d9bb0f37d760c8997e3ec905a5b4adad3eeba9c8b18e44e9408",
                        "timestamp": "2021-11-03 23:08:25"
                    },
                    {
                        "value": "83bf1f1ee99660d422bf55133874b8951b4a3c3c7b437eca9e79b2b83c2f2dfc",
                        "timestamp": "2021-11-03 23:08:25"
                    },
                    {
                        "value": "602c4326ca0aa0a007b10241d7dae3fdbef7705e14231ba85e8635578cfdb0d4",
                        "timestamp": "2021-11-03 23:08:25"
                    },
                    {
                        "value": "9e295a5af304a00dcd38851b11984976c24405b540bdbe32360758a056a0a4cf",
                        "timestamp": "2021-11-03 23:08:24"
                    },
                    {
                        "value": "b0c36992400415852a6493ca2bede09e38b8fe1d2d6fc1a70ee73ceae480c291",
                        "timestamp": "2021-11-03 17:42:57"
                    },
                    {
                        "value": "fdff59fdac2c9c31f7767dc3bb807483d9b6b90ee00388fb5c6714bcdee1f4e8",
                        "timestamp": "2021-11-03 17:42:56"
                    },
                    {
                        "value": "c332538b5c08796be7e69620de1350d48be353a3fccfebaffef5ec5421a85fae",
                        "timestamp": "2021-11-03 17:42:55"
                    },
                    {
                        "value": "f67c007ed8bab9a0ff95656600eaf2aadc85928a974a21af5a4a2b85b202dadf",
                        "timestamp": "2021-11-03 17:42:55"
                    },
                    {
                        "value": "c76bd95b49f9b0ad3ce5f69cc62d056ac3717ab5ccccc655737a391078870f77",
                        "timestamp": "2021-11-03 17:42:54"
                    },
                    {
                        "value": "1302853433339ce925811a3d9ba1a31d7c7afd7fe53beef51d26c826e071a24b",
                        "timestamp": "2021-11-03 17:42:53"
                    },
                    {
                        "value": "52836d88551d50011a21be0cd6a09c8bfe72884e88a2e30bf069d2f0f1c7f331",
                        "timestamp": "2021-11-03 17:42:52"
                    },
                    {
                        "value": "a1b4dea9d6071440360be1df85bdc4667df85fcea3f9126aa5ff13180c882af9",
                        "timestamp": "2021-11-03 17:42:51"
                    },
                    {
                        "value": "b4ab4fb943a460764b2a04299d286279a23475a0cf91b01a5baaf31fae207b7c",
                        "timestamp": "2021-11-03 17:42:50"
                    },
                    {
                        "value": "3eac2c3eba6ed7739596c40223674fd1e65183884c03a09ad169dcf21990ec12",
                        "timestamp": "2021-11-03 17:42:50"
                    },
                    {
                        "value": "eaf11cea9f18183f7136f75ac7d10673a332bf8ea838bdcbe7aad7de74e7dfdd",
                        "timestamp": "2021-11-03 17:42:49"
                    },
                    {
                        "value": "a2f6f4c34dec0c5f06c8f0e36d8ae4abeea25b4ad5b18dbe5a3528e06f18341d",
                        "timestamp": "2021-11-03 17:42:47"
                    },
                    {
                        "value": "5ec234daa7394cab00a0f22f2e5cb19af804b686f78ae52b479f4f25b7aa4d4d",
                        "timestamp": "2021-11-03 10:42:51"
                    },
                    {
                        "value": "30191d460ae42d2ed454fc5b005f01b28de09448fa4169521e2540356d49d9f2",
                        "timestamp": "2021-11-03 10:42:50"
                    },
                    {
                        "value": "96816acd0abd28461e4c67cc569fbb5546caae7a0756668f0031109a8725b9a1",
                        "timestamp": "2021-11-03 10:42:49"
                    },
                    {
                        "value": "9018bee717a4913f8d9367f5f6c59bb14419ed6a84c4ee9f5332f9e5a55841df",
                        "timestamp": "2021-11-03 10:42:48"
                    },
                    {
                        "value": "3ab04214c6cb6d8063e8fda978d0c964b8ab2b4a693a42eeb2bae145863d67a5",
                        "timestamp": "2021-11-03 01:25:44"
                    },
                    {
                        "value": "34b23796eb2b9628bd024d02fe5c5bf9853c16cc92bf4b5d26c86b15605b2f60",
                        "timestamp": "2021-11-03 01:25:43"
                    },
                    {
                        "value": "4c8c47cca539b9d2b0cf3202ff102fa23140271cba9ddebdab27d8b4fc9ab796",
                        "timestamp": "2021-11-03 01:25:43"
                    },
                    {
                        "value": "c75527ad5c7e67558249156011ee04990a692df494649bac7f1b09dad7a7591c",
                        "timestamp": "2021-11-03 01:25:42"
                    },
                    {
                        "value": "1829ccc560d151a25f5ef963f70874926b10d790fcb05d99964c466162890d2f",
                        "timestamp": "2021-11-02 16:23:11"
                    },
                    {
                        "value": "973489958412d5278a51536aac60517969126519f59677ec9b2917c727ac832a",
                        "timestamp": "2021-11-02 16:23:11"
                    },
                    {
                        "value": "0b23950ec78fa197f32c27eadd14c88496f0f46ea5dc89a57aedc0fbcd6de096",
                        "timestamp": "2021-11-02 16:23:10"
                    },
                    {
                        "value": "dfe5b41bc1bd88c37ab8be5285c34f0f5dc2e168e94a9c4d8231879d5e8338f2",
                        "timestamp": "2021-11-02 16:23:09"
                    },
                    {
                        "value": "7a2c677533d0dfa9104ae8ff221f1933651349669fef6f26c957cb28199a96d6",
                        "timestamp": "2021-11-02 15:03:21"
                    },
                    {
                        "value": "9f32e72b1695726ee2c6d97c59fde0253f9193ae389efa65ce98869198419702",
                        "timestamp": "2021-11-02 15:03:20"
                    },
                    {
                        "value": "b3c87a2e3865d7b0e8006050283b2b9f6cfe4ce4be81ee6fd51f79f349119e0f",
                        "timestamp": "2021-11-02 15:03:20"
                    },
                    {
                        "value": "eba0646c0aee0c2c1e1800a9bb0bb3cfe8bcc9988eb0bc401d6e72194df42532",
                        "timestamp": "2021-11-02 15:03:19"
                    },
                    {
                        "value": "5f02d1a61e6c20966ccf55ab8e028ec839283e114e94556fd5ac8689d1b64754",
                        "timestamp": "2021-11-02 14:43:12"
                    },
                    {
                        "value": "2ac5713bf99289481bee006b046f12f5e8282ed52e0edf2db2a00caa82721d7c",
                        "timestamp": "2021-11-02 14:43:12"
                    },
                    {
                        "value": "62678459c076b6993bbe9cc617bde236afe8a87906f5de98adc375665ba0a84f",
                        "timestamp": "2021-11-02 14:43:11"
                    },
                    {
                        "value": "50b3824cc9a93e8775b864cd93fb40986c989eb32c1a514179576a2992137aa5",
                        "timestamp": "2021-11-02 14:43:10"
                    },
                    {
                        "value": "d683d5589f03c99505cacac2262e1f4a636e31adc0e6d732a90936ca9d947a1a",
                        "timestamp": "2021-11-02 13:03:09"
                    },
                    {
                        "value": "9611957db07f36a13d7e43f5c32c08c0e3c44c689e7d88c832490e3d259cfb48",
                        "timestamp": "2021-11-02 13:03:09"
                    },
                    {
                        "value": "a01324f48f34d207076f3e61435d99b3ed446012e1b6bed664480cf1b7a3b835",
                        "timestamp": "2021-11-02 13:03:08"
                    },
                    {
                        "value": "fc791a24b4250988196f8c8b174d778e0ed1f4ea2a3c8601b25ab4431df56f08",
                        "timestamp": "2021-11-02 13:03:08"
                    },
                    {
                        "value": "cc0a217f761a9216eac62d8d10baaea85ce3bf576032a2fbfa23538246179e6f",
                        "timestamp": "2021-11-02 11:43:20"
                    },
                    {
                        "value": "5e39768c8fd6bb7644322000828b9bd1c34d25c3be1a9a712761ba834910fcf0",
                        "timestamp": "2021-11-02 11:43:19"
                    },
                    {
                        "value": "5e7b928b5c0d88553f69aeabc8483a2bafb9f99fe0b22cc6e46d8a578d5fb791",
                        "timestamp": "2021-11-02 11:43:18"
                    },
                    {
                        "value": "8db032a108bfbc9b5d4d2be6f466add20a81685196253867b99e6456e02adadf",
                        "timestamp": "2021-11-02 11:43:17"
                    },
                    {
                        "value": "1aa28435e63887b1ee372f54ce2e926888d19f5d3d3ab4d35d39da4b5272d721",
                        "timestamp": "2021-11-02 02:46:22"
                    },
                    {
                        "value": "df7583bdd967818800bf1040175498b8f3312271d6eda618b181c6ff8b6809a2",
                        "timestamp": "2021-11-02 02:46:21"
                    },
                    {
                        "value": "28abbfa5905f8bb99ff6f2847ffc8bb6ac19253a5e774eab2bb7607995fd5b7e",
                        "timestamp": "2021-11-02 02:46:21"
                    },
                    {
                        "value": "9171c65fca47c17fffac4840eb89d4f21a2abc313666597f0f2425b65a6dcd67",
                        "timestamp": "2021-11-02 02:46:20"
                    },
                    {
                        "value": "c37e330f97f7a2b2ec7c3ad76f1770dc75198b384dd6be64b6c5c8aa336c50da",
                        "timestamp": "2021-11-02 00:13:51"
                    },
                    {
                        "value": "834a64f4b7beb9585b266fa3ca49da4d882693923d12620a7d13bb8e891999cf",
                        "timestamp": "2021-11-02 00:13:51"
                    },
                    {
                        "value": "f136428d1ef6f6913170852e841bbdf89c178f7ac5eaa675363db42c80c1620e",
                        "timestamp": "2021-11-02 00:13:50"
                    },
                    {
                        "value": "19104fc4be7e31e36c9602a861b28f2b6ed4ba28eb03b9bd01069ffbd6eff470",
                        "timestamp": "2021-11-02 00:13:49"
                    },
                    {
                        "value": "8a6b5ff11c2262fe557e43a8a818d22d01a82b6aceed9f1d6a189c8b25b4843b",
                        "timestamp": "2021-10-30 13:42:51"
                    },
                    {
                        "value": "029ff7d4d142789943df3d3642ca8194938b2e8a204362babfe8ad8e09026255",
                        "timestamp": "2021-10-30 13:42:51"
                    },
                    {
                        "value": "2ec690879452f894a54c3f8350e0a935ff5b95c592dd41c61c073fd1ddc0521c",
                        "timestamp": "2021-10-30 13:42:50"
                    },
                    {
                        "value": "46e130de5d270cbb370fa222a1b3819bb5413d19aabb2d576dcdab524972bf0d",
                        "timestamp": "2021-10-30 13:42:49"
                    },
                    {
                        "value": "47bd7dd9cee39fd25ece6a21333e64aeeea1cc209083abd669db78b650c9cba7",
                        "timestamp": "2021-10-30 11:42:52"
                    },
                    {
                        "value": "76f001dc122be5639669d3fb9a71dad04cbb8bb73fdad0939da286fd5dc6038f",
                        "timestamp": "2021-10-30 11:42:50"
                    },
                    {
                        "value": "e9dde7f0a688d44249e093aff3f70556dd654ca03bab8f46755be046c1be112a",
                        "timestamp": "2021-10-30 11:42:49"
                    },
                    {
                        "value": "46845f7c914a0084996142ed6da24841684b228cf616566478132f4a2479823f",
                        "timestamp": "2021-10-30 11:42:48"
                    },
                    {
                        "value": "7b0b576f43dd39b3cd3913fb649d078a1e1f5809df3879ac9bdc06e668221fa4",
                        "timestamp": "2021-10-30 09:42:54"
                    },
                    {
                        "value": "366fd1b85db7bccfb5884996d3ed5542a733fade1d927d48ba88972f50d3baec",
                        "timestamp": "2021-10-30 09:42:53"
                    },
                    {
                        "value": "87281b5b33aa80c31a7719633e97e58132909decd57f39bc123bb49fec3c77e6",
                        "timestamp": "2021-10-30 09:42:52"
                    },
                    {
                        "value": "97c0c04ae83b9599b78f61d809cfb2428984b25a79d2d986dfdbad6858101af9",
                        "timestamp": "2021-10-30 09:42:51"
                    },
                    {
                        "value": "b88c2d30a921dea8d1f0f8339874cb0798edf36a471a2ab5bbc87cc3a1ec3f19",
                        "timestamp": "2021-10-30 01:00:00"
                    },
                    {
                        "value": "309c25c2dcf0cb7aed5b5258f21db087196e76f491e831bd0cb122e22639a251",
                        "timestamp": "2021-10-30 01:00:00"
                    },
                    {
                        "value": "d883da922360a751ea8b780ac7b3a5aedc4b09258fdd2c156bfa60593885071c",
                        "timestamp": "2021-10-30 01:00:00"
                    },
                    {
                        "value": "c744e5e7df1570fd63b6fc530deeface33808c476a14152daae1b0a1d2ea1f05",
                        "timestamp": "2021-10-30 00:59:59"
                    },
                    {
                        "value": "9c251a1b5123431ed7929466550cbe150e6c3150201fd562ef82e4bcbb5a541c",
                        "timestamp": "2021-10-30 00:59:59"
                    },
                    {
                        "value": "97f751d8e067a8ff661e6f4cb0eb7cd3033abdb89d5e87e50581e011ff4f4144",
                        "timestamp": "2021-10-30 00:59:59"
                    },
                    {
                        "value": "84ebf07d71d5f5111748cf9824c0a61bad5e515d26d8d319624b203b231e05c2",
                        "timestamp": "2021-10-30 00:59:58"
                    },
                    {
                        "value": "06a78bf46131ddd6ef5f5f11b3975991ece5606d0f42af4238f1b57a0fe2cba5",
                        "timestamp": "2021-10-30 00:59:58"
                    },
                    {
                        "value": "e3b13ed3cf46c24d57994c789ddfe5c438772c413d20e062d8fa2d9e7b755cd3",
                        "timestamp": "2021-10-30 00:59:58"
                    },
                    {
                        "value": "49ec22bd27ec2e69336b514078b9c89cea64f2466aa30975513b3ca523cd6e9f",
                        "timestamp": "2021-10-30 00:59:57"
                    },
                    {
                        "value": "c21fffcd5a43b2ae69691ee82a7483cf68bb37ac17c4365f110e8b9a72105c3f",
                        "timestamp": "2021-10-30 00:59:57"
                    },
                    {
                        "value": "28a91d3523f9182070d3a1504c4e79348698d45bbc57eff839007ee12ca79f75",
                        "timestamp": "2021-10-30 00:59:57"
                    },
                    {
                        "value": "43654fc6462f66c771098e75cc5430900c6b31475cce6aaad996e8b2a47c389a",
                        "timestamp": "2021-10-30 00:59:57"
                    },
                    {
                        "value": "b9e72680886195541208fa5c0177008947a9eac81c28880aeb3e8ae2343db72b",
                        "timestamp": "2021-10-30 00:59:56"
                    },
                    {
                        "value": "cabc6346c99a2f74c7cac1d4c1f83538cce9b0047c8437e240af03338b73f192",
                        "timestamp": "2021-10-30 00:59:56"
                    },
                    {
                        "value": "60b7ee7c678553708c9ef357f9922acea8736a66ba9109eed68a7b2680bc8c68",
                        "timestamp": "2021-10-30 00:59:55"
                    },
                    {
                        "value": "eed781a42769761d30787cecd662c5b6ba70589724a456d09ae008e1bd68835f",
                        "timestamp": "2021-10-29 19:23:00"
                    },
                    {
                        "value": "344e30291a03a208638015f82b2dcc084cfb618abf34914f937bd3e38a2af4f9",
                        "timestamp": "2021-10-29 19:23:00"
                    },
                    {
                        "value": "5080e84442d836915e15b83a5f640c25ec43a0d78bd1bd83aff2829a05067c97",
                        "timestamp": "2021-10-29 19:22:59"
                    },
                    {
                        "value": "bd554a47604731efbccd085793c50bca47b0b8336447a1ed660007b2d48a0b6b",
                        "timestamp": "2021-10-29 19:22:59"
                    },
                    {
                        "value": "0ba6dfe7339f888b2ee416124f9f7e863a69c7032de017e8f5adb04615d19d75",
                        "timestamp": "2021-10-29 18:02:48"
                    },
                    {
                        "value": "e83ce530468ceacafc364791ce8de4cdc2b456cb0df25b93ac4055a99b031702",
                        "timestamp": "2021-10-29 18:02:48"
                    },
                    {
                        "value": "9b4ca94ec5ec101754d54a2d73aa5f84fdfe97bc1021d166f07ddcaf5482c059",
                        "timestamp": "2021-10-29 18:02:46"
                    },
                    {
                        "value": "ac794a77a23b2dc0b1d84efae12b14b7941b8ae468fc64443ea6c2819383cce7",
                        "timestamp": "2021-10-29 18:02:45"
                    },
                    {
                        "value": "afbae06f0ec7939e039a47b7579a98f269eca1be5625e7343267cf4bbb0d5709",
                        "timestamp": "2021-10-29 17:22:46"
                    },
                    {
                        "value": "07976cf0ef4b784bb88ab543f7784d0dcd53537881bb4de45d1675c428f010b9",
                        "timestamp": "2021-10-29 17:22:45"
                    },
                    {
                        "value": "7ba579db4b2485e75dbeff653199f592e4067706225975038ad011b73562c3fb",
                        "timestamp": "2021-10-29 17:22:44"
                    },
                    {
                        "value": "f4f54999d620694ab06ae2a129e40fc7e916e398f7e96f27b6cd86e05c92a21c",
                        "timestamp": "2021-10-29 17:22:43"
                    },
                    {
                        "value": "eed56f690667f0bcdfb715db2583982f3c3c97e358fcb86d3788604f07ba3966",
                        "timestamp": "2021-10-29 11:22:51"
                    },
                    {
                        "value": "c1331b89e53012ba8c4631c7a9bfe207dd65aa4fcefd063da72b86236e86e372",
                        "timestamp": "2021-10-29 11:22:50"
                    },
                    {
                        "value": "9508c04b4c1dd578c8c3b8597a68bb73548b107edcbb37f13909a18d85f78b3a",
                        "timestamp": "2021-10-29 11:22:50"
                    },
                    {
                        "value": "1d4a85c5c35b352c317f11d620ffdd1d2c300f927f6c7fa0e0f63694c55bb5f7",
                        "timestamp": "2021-10-29 11:22:49"
                    },
                    {
                        "value": "5264dba5e023d5b63d57197b4efc1d105083c9b4d84d754ea5a4d1f5823c9cb6",
                        "timestamp": "2021-10-28 12:02:45"
                    },
                    {
                        "value": "7b8ee689f94022b7879696e16ebb2b6bff5b9343f0c14a29af72beaf5fe81a61",
                        "timestamp": "2021-10-28 12:02:45"
                    },
                    {
                        "value": "63ff4d686692c112bd815c4b1d6c61c397909ad53f160981af6f3fb0e97bebc2",
                        "timestamp": "2021-10-28 12:02:44"
                    },
                    {
                        "value": "a407fda0d29d6380259f8200560f8dcfde00c0bcd819be3a4b2fcb25e4f473b5",
                        "timestamp": "2021-10-28 12:02:44"
                    },
                    {
                        "value": "6b825df3b30b5c4f7afaa51221d6bd322badeeacb23c239c1068668fbaba3165",
                        "timestamp": "2021-10-28 11:22:48"
                    },
                    {
                        "value": "d775c6d741334fb6024fbfbd9e9f3873d9a12e950f9d957ba647f47ed2f2959b",
                        "timestamp": "2021-10-28 11:22:48"
                    },
                    {
                        "value": "6c1f7a98beb9f25a517955266ebba5bf9a0675816a101940cb97029d09093bb5",
                        "timestamp": "2021-10-28 11:22:47"
                    },
                    {
                        "value": "289317d820441eea1d86347d68680898d2314b737669d4b01d09fdbfe30ae9b4",
                        "timestamp": "2021-10-28 11:22:47"
                    },
                    {
                        "value": "8208898cce55f4072e8455754190b1ffbec5a8bce300b8060a7ffbc8b12d8f7b",
                        "timestamp": "2021-10-28 11:22:46"
                    },
                    {
                        "value": "177cbc7420470c1ee8497286f517a0d52e7d71bdcf86a331db4928ca8b1ce6ac",
                        "timestamp": "2021-10-28 11:22:45"
                    },
                    {
                        "value": "9d185a3e5184065f1628af9d8325e53b8503a0f7705e54b0d7afb8223eeff208",
                        "timestamp": "2021-10-28 11:22:45"
                    },
                    {
                        "value": "08c2207b023f1d2e65be57b75a4395908b2474b1f244d8f53d43914f94b7be8d",
                        "timestamp": "2021-10-28 11:22:44"
                    },
                    {
                        "value": "1faa2dfcc04c2001e9c0bde9bbd8d391ae96cdae382cc7328b0cb0932b7aae9d",
                        "timestamp": "2021-10-28 11:22:44"
                    },
                    {
                        "value": "8a958a0beb0a6106e0451e2acbe0e99ae591c77b67ced8ec7e2a09c378e8fedd",
                        "timestamp": "2021-10-28 11:22:43"
                    },
                    {
                        "value": "060c2f164a53cf74817b9b2f176d770dbde8b1ef71fe5322abf9ae8197232b7d",
                        "timestamp": "2021-10-28 11:22:43"
                    },
                    {
                        "value": "45a07013cacf4e12d60021ff5094e8053c0cdfd0aa08a1f974f234aa490a35bd",
                        "timestamp": "2021-10-28 11:22:43"
                    },
                    {
                        "value": "92206b9fa1251b589ab6d14b4828cafe0ec9d9b44df469602b7d3d1ed16ae0e8",
                        "timestamp": "2021-10-28 11:02:42"
                    },
                    {
                        "value": "cba09e49236bb8457567fc0bc118e603a6803dd3e04b3635e1d656920f89646a",
                        "timestamp": "2021-10-28 11:02:42"
                    },
                    {
                        "value": "8a13ce3da212f3557c8d3f43a375fa6e030b400c2da2ca9701bed88f839863fc",
                        "timestamp": "2021-10-28 11:02:41"
                    },
                    {
                        "value": "c88cead6389aa1e052336ca6acd0231b2346aa57fd3cbc53094784ef3256a3a5",
                        "timestamp": "2021-10-28 11:02:41"
                    },
                    {
                        "value": "e58d5730458adae5d62d1438958b3ee887b36f94160f5452cd81665ab4913d7a",
                        "timestamp": "2021-10-28 10:53:14"
                    },
                    {
                        "value": "342bac531d9b15d642629e91af8944289af752dd5d70c687e39cefe9a14dc81d",
                        "timestamp": "2021-10-27 15:02:45"
                    },
                    {
                        "value": "99a897c5b8f53e1d04e51107c748a4f385b754a852ca6b605559f5b50820a64f",
                        "timestamp": "2021-10-27 15:02:44"
                    },
                    {
                        "value": "5e529cbb901aced8a6af49250afd3d67e059d717d7ecf3edc32e18a9d549361c",
                        "timestamp": "2021-10-27 15:02:44"
                    },
                    {
                        "value": "6f64549b2d015cca2e0ccdbaafe166640c004367d2f75b316d7620eeb597083c",
                        "timestamp": "2021-10-27 15:02:44"
                    },
                    {
                        "value": "9205523ee331f11fbe9fb30fa72a45ed45ed2eb5f92b26f01b9e26774264e9d5",
                        "timestamp": "2021-10-27 13:22:44"
                    },
                    {
                        "value": "a104d6d98afd1eca774c2b8b12aee19bbc52216a358d9bf00ebfb503ef8e553d",
                        "timestamp": "2021-10-27 13:22:44"
                    },
                    {
                        "value": "c5d3fb8cc4b1be9b9aabeeb14b7f4c12f3fce5c8dfb0c1968c82d8b5c19b9245",
                        "timestamp": "2021-10-27 13:22:44"
                    },
                    {
                        "value": "f4a8ab435ddb122d1fce056bdfa8a861d8648050dce36451742256c83e41404e",
                        "timestamp": "2021-10-27 13:22:43"
                    },
                    {
                        "value": "9b93db321e9fb6d02f23d99c6bac2bf0706902ea0bea9e13ba388edeeb4102dc",
                        "timestamp": "2021-10-26 13:43:00"
                    },
                    {
                        "value": "78670e73101801526b59bf2bdead06d95cad399ff72abadfc0e00ba557643c80",
                        "timestamp": "2021-10-26 13:43:00"
                    },
                    {
                        "value": "a878d42aeac5eccc6919996e3c771cd813ea3ff30aac7e8561123df0d2a960dc",
                        "timestamp": "2021-10-26 13:42:59"
                    },
                    {
                        "value": "fafcee9b031f24dbd150b43afbb5cac24bbdccfa4125f4f3017bdd8e94926e9e",
                        "timestamp": "2021-10-26 13:42:58"
                    },
                    {
                        "value": "b16670d7ab7fc43029ef6033d5bf6b8a3ad78f09fefed66ec6351c7eac0a53f8",
                        "timestamp": "2021-10-26 13:02:58"
                    },
                    {
                        "value": "3045902d7104e67ca88ca54360d9ef5bfe5bec8b575580bc28205ca67eeba96d",
                        "timestamp": "2021-10-26 13:02:57"
                    },
                    {
                        "value": "f8b6860b5f79411ce377df615b3e72745e773c9e89347fdf00adea4f8200e51d",
                        "timestamp": "2021-10-26 13:02:57"
                    },
                    {
                        "value": "17ed64707506c917be6329e1cbe94548d761d218dc8e2d624eab99565acc055d",
                        "timestamp": "2021-10-26 13:02:56"
                    },
                    {
                        "value": "5a9a3c1a7abfcf03bc270126a2a438713a1927cdfa92e6c8c72d7443ceee2eb8",
                        "timestamp": "2021-10-25 15:43:10"
                    },
                    {
                        "value": "1eeba0022aabfde029387b14ee7604186c8fcca857f6cd67d130df4248fe996d",
                        "timestamp": "2021-10-25 15:43:09"
                    },
                    {
                        "value": "455a5f61669029076d9cb7f128e53740721d3606ce8297bd050235186062d288",
                        "timestamp": "2021-10-25 15:43:09"
                    },
                    {
                        "value": "637370f5d3dca4b539ead2885fdc9737070fc2a2536745f8604afcb806209885",
                        "timestamp": "2021-10-25 15:43:09"
                    },
                    {
                        "value": "ae27e0f8ff24b83ef53a810b15605079a0793117c19ddb3a8d4b060dfb8d1e94",
                        "timestamp": "2021-10-25 15:03:14"
                    },
                    {
                        "value": "c0a81a720c258b90b08b2861d1bd4bcf77f012e5fc06ec1342c5c59811617f08",
                        "timestamp": "2021-10-25 15:03:13"
                    },
                    {
                        "value": "713e81360c3ff494b0f8068ddb66a1024350bda8f9e2deb9773791f45ea5e7c9",
                        "timestamp": "2021-10-25 15:03:13"
                    },
                    {
                        "value": "95b4d4eb63dece7034b4289280ca77a7c1368acc7ca43b5275afc127bb651509",
                        "timestamp": "2021-10-25 15:03:12"
                    },
                    {
                        "value": "dd4af1effdd1081fccbd05d035c4dfac3b992a358e2a6a6140095d0385ca7f5e",
                        "timestamp": "2021-10-23 16:02:44"
                    },
                    {
                        "value": "3c49925f16564b984c0b0f76cff0d581bf770958f0dd5686aff2c6ce747eef2a",
                        "timestamp": "2021-10-23 16:02:44"
                    },
                    {
                        "value": "f166b48ddb72b3aab3a5f1ee4a147b6315969b934711d94c9b6208c74a8277b5",
                        "timestamp": "2021-10-23 16:02:43"
                    },
                    {
                        "value": "371a7fde3d56ab06c051efdd78f55fa6a142360de778646d24f713b9097048e1",
                        "timestamp": "2021-10-23 16:02:43"
                    },
                    {
                        "value": "a8ea6b5e7721a2d508d362f9e75fc38fe3b845375c358829ef0604cc2345aa13",
                        "timestamp": "2021-10-23 07:42:49"
                    },
                    {
                        "value": "0366673a2a85919a9419b85f9f552a2c9713edda8319dc9046f271ee024816ad",
                        "timestamp": "2021-10-23 07:42:48"
                    },
                    {
                        "value": "ca08a2e70dac67086919a22c1b4bdf3f0f2578cb446ca74c8e599f71d0849e55",
                        "timestamp": "2021-10-23 07:42:47"
                    },
                    {
                        "value": "cbf031a1dbedd7a1e8f5b158cd6f9af3995fb4e815caee4723fc3ab03b900b19",
                        "timestamp": "2021-10-23 07:42:46"
                    },
                    {
                        "value": "85b62ba75dea24f12197287696f411a12293fabae1c907bb22a4a565787ecc7b",
                        "timestamp": "2021-10-22 20:42:48"
                    },
                    {
                        "value": "309823f6a6820db5d24443327e3b566f8d2aa16b3a9052086f521488a46e1532",
                        "timestamp": "2021-10-22 20:42:47"
                    },
                    {
                        "value": "05b548daedde9f51bb1717f05a9a1925c8d0c867dc6a2801cd16a19caf2d7320",
                        "timestamp": "2021-10-22 20:42:46"
                    },
                    {
                        "value": "ca8b8880222f1ebd8b4840c22b429a680fe93957effc1bc02817322229713f68",
                        "timestamp": "2021-10-22 20:42:45"
                    },
                    {
                        "value": "f7b81ffa37653a50c8869ac69c6c0031ffe1c689e0b55c19aaa982fc9628f4af",
                        "timestamp": "2021-10-22 11:42:42"
                    },
                    {
                        "value": "94debd7b7845e025a4a5023f393910a9ec55b37f23bc8b4c64add128ac82d4bc",
                        "timestamp": "2021-10-22 11:42:41"
                    },
                    {
                        "value": "936b41f8bcf1d1fef4e71b000e2e37c4cc2baf58b34ca848759d2a8de5b9b9aa",
                        "timestamp": "2021-10-22 11:42:40"
                    },
                    {
                        "value": "2486c4ebc2834ad7e9517107e7d7813fa1b84d5b2df4f928a0144b81d1273e8c",
                        "timestamp": "2021-10-22 11:42:39"
                    },
                    {
                        "value": "cca6bc6518ffdc127f2ab0aebd42dac011204346a4857f9324ea211662b7aa1b",
                        "timestamp": "2021-10-22 10:02:47"
                    },
                    {
                        "value": "511f5c0a9946188ad3dbbb58c2e2e5564402d83dd77379a39c8a17c660a737da",
                        "timestamp": "2021-10-22 10:02:46"
                    },
                    {
                        "value": "8477871a37fc72bdc5eaec5d690e67421209e6fbeb3b6d278044de3686df650c",
                        "timestamp": "2021-10-22 10:02:46"
                    },
                    {
                        "value": "98243559f39a8e5c9e6df692e7fe2911635bf4a8d6afbd555d5f5c8119f7e49e",
                        "timestamp": "2021-10-22 10:02:46"
                    },
                    {
                        "value": "c87415b188828e354d7f87edc4184c94adb757258e79ab5e1e6e200a8c8df52c",
                        "timestamp": "2021-10-22 09:22:37"
                    },
                    {
                        "value": "5e074e10a889e3790c6fe2bd7131f3e990e234dd64e30feb812ef32441351e48",
                        "timestamp": "2021-10-22 09:22:36"
                    },
                    {
                        "value": "d3827d83d541e98cff0bb89a27c2db75e59b62ed57a934cc8c9e6a9623864716",
                        "timestamp": "2021-10-22 09:22:36"
                    },
                    {
                        "value": "19b95be1b0c890804845c8c6e19cef972c89bfc8156201c3490f047ebfc42ed4",
                        "timestamp": "2021-10-22 09:22:36"
                    },
                    {
                        "value": "39724fa50de7a8937dec84a3f00fe23c9dea895d312bdce8133db18f15ee1a81",
                        "timestamp": "2021-10-21 14:02:56"
                    },
                    {
                        "value": "a192572433f8f1a41f0035e040f0f455608b6eb9695cbb87c9734f3a4bf7d4cc",
                        "timestamp": "2021-10-21 14:02:55"
                    },
                    {
                        "value": "ddcee2fa36f568c004181f3d91b4b75eeb935a28e9b5a3d32d1c0fd78be4fa70",
                        "timestamp": "2021-10-21 14:02:55"
                    },
                    {
                        "value": "d90b2ee420fc51d84a0c3c3fe2ae4e13b6313cd030be264440538a396dfe7956",
                        "timestamp": "2021-10-21 14:02:54"
                    },
                    {
                        "value": "1b9e93635817ea7ffa4ad07e0df3e3543b4674d0101e4f130ec5c6c66812b53e",
                        "timestamp": "2021-10-21 07:02:43"
                    },
                    {
                        "value": "0997b2cc23e6aa9743c78ccaba88fb036bc03937011a12bbb367e6b457461c0b",
                        "timestamp": "2021-10-21 07:02:43"
                    },
                    {
                        "value": "7d1119a09c3f150ab964941c3a539fa3d1257cdb980df7e1535012378ae3974e",
                        "timestamp": "2021-10-21 07:02:42"
                    },
                    {
                        "value": "cc86b72fe9369a197c80b38555433c296e0e46808b74d75ad719799087642be0",
                        "timestamp": "2021-10-21 07:02:42"
                    },
                    {
                        "value": "d3a9a3edb7bf2c1c0bee319acb384b4ea0d27a72c09ee0781996ecc4b6637fef",
                        "timestamp": "2021-10-21 06:42:43"
                    },
                    {
                        "value": "602b818b816dd421212e56f00c0f6ac807e1f01497601fcd49e1e081b8fdcb24",
                        "timestamp": "2021-10-21 06:42:42"
                    },
                    {
                        "value": "f08ca756c36edc6ed2a59075dd924b66dc07025cd9e5320b93eee0a148a5fba0",
                        "timestamp": "2021-10-21 06:42:41"
                    },
                    {
                        "value": "efd1897cf1232815bb1f1fbe8496804186d7c48c6bfa05b2dea6bd3bb0b67ed0",
                        "timestamp": "2021-10-21 06:42:40"
                    },
                    {
                        "value": "c66278e7c7a5ccb279d55d3dc1b3ef42188e47f276f09d5a8f686a5ba2ab3dd7",
                        "timestamp": "2021-10-20 21:02:45"
                    },
                    {
                        "value": "bcea8c1577cec0246c9a1b9d3cd4a7cfc5363b414f7a30fd258cf4c5c62c63e4",
                        "timestamp": "2021-10-20 21:02:44"
                    },
                    {
                        "value": "a2067ce6f40be6dee1fa10c0155582a43e4b4d5b4bfe1fcf7f239332534b7109",
                        "timestamp": "2021-10-20 21:02:44"
                    },
                    {
                        "value": "6402f4385282298774063f11374e0162643b5d2eaa42b5a5878755b7f97e9e24",
                        "timestamp": "2021-10-20 21:02:43"
                    },
                    {
                        "value": "aa486b35bed54d5574bb3aa10cfb43f124fe23e950eb0572f6e5037f54079025",
                        "timestamp": "2021-10-20 16:42:37"
                    },
                    {
                        "value": "567ef74c599b649cd4fdb508e165d60f7795f91a997a99899d9d56e010d6da6b",
                        "timestamp": "2021-10-20 16:42:36"
                    },
                    {
                        "value": "e58cbeae75cd089ace69ee94c85ab8976200d420bb139b0c5a24d8464c01be0b",
                        "timestamp": "2021-10-20 16:42:36"
                    },
                    {
                        "value": "d35a71f368c19198231fecd832079f4f450389a84ecae7d91c260e701c739b0d",
                        "timestamp": "2021-10-20 16:42:35"
                    },
                    {
                        "value": "838a4922f935bfe7908f6d5ecf315d90d40dd2f4efc8e35067b960574bc89043",
                        "timestamp": "2021-10-20 13:22:41"
                    },
                    {
                        "value": "e5b37e22db2aab4db04417c4b30be841686e2300687d5b3abd8a0456cd144d31",
                        "timestamp": "2021-10-20 13:22:41"
                    },
                    {
                        "value": "429add11efba80f4e7d037b428d2dfc76e2c6904b5ff94ab0ccaa1fb4d665348",
                        "timestamp": "2021-10-20 13:22:40"
                    },
                    {
                        "value": "886fc4e00f1039056dc1cef5b6e118eadb3ee324c25e46e66ed03b7de48ecad6",
                        "timestamp": "2021-10-20 13:22:40"
                    },
                    {
                        "value": "a62639b271e480d9aa28d50945051ae35577711d95702f270060d809b062bb56",
                        "timestamp": "2021-10-20 12:42:50"
                    },
                    {
                        "value": "fd1e3db80099afb4fad792e226d1055b350ee96286633a356926b7ac180932b0",
                        "timestamp": "2021-10-20 12:42:50"
                    },
                    {
                        "value": "432e8ed3f3e3eb801bf1ff45f6186fa76297f4aaedfc85cc1451479d0338eb73",
                        "timestamp": "2021-10-20 12:42:50"
                    },
                    {
                        "value": "6623c86614f32885765a529c796fbe3e3b476dc58782a813e622d0d0873eaafb",
                        "timestamp": "2021-10-20 12:42:49"
                    },
                    {
                        "value": "832c65a202ec1c69a8297af3d2fc3d233ac65b7c2c670f30d0694089601c9cfe",
                        "timestamp": "2021-10-19 19:02:50"
                    },
                    {
                        "value": "1e83eab755128ae8f4bcdade071b08cc6fae1ad62ff9fe29aae62b3e30ea28bb",
                        "timestamp": "2021-10-19 19:02:49"
                    },
                    {
                        "value": "bbd19853959f6a7e000b9bd1880416753f9129294efc7b5eba835891b4034459",
                        "timestamp": "2021-10-19 19:02:49"
                    },
                    {
                        "value": "7fde1d9b48ef577fd75446e8c404fe228158026f72a7fd3c3c26790d7b52f55d",
                        "timestamp": "2021-10-19 19:02:49"
                    },
                    {
                        "value": "58d9e17790007b8b9f5360694488701fbd17a57d63b658a5e1e99ababc54eb20",
                        "timestamp": "2021-10-19 18:22:41"
                    },
                    {
                        "value": "45e8fd9c2d454cbd2012f8cb1a3799fd70a470e5e82485c0df4f8b330e0c8ac5",
                        "timestamp": "2021-10-19 18:22:40"
                    },
                    {
                        "value": "ad1a7132112ed0a17f526989f2f50b61a43c71180de093582866b4541c24adc7",
                        "timestamp": "2021-10-19 18:22:40"
                    },
                    {
                        "value": "c087c993cf9bcae977e19fdfecf6e18346b76f73273c956044a9ad743dc94929",
                        "timestamp": "2021-10-19 18:22:39"
                    },
                    {
                        "value": "2edace61496d3b81bd40c8e8e9a8017acc863657f8f92aa5fdd71916ec270081",
                        "timestamp": "2021-10-19 13:42:43"
                    },
                    {
                        "value": "6e0a0802525044ec0502d3382e80da3a49a98cc5f42197d9313fca6b695f3f92",
                        "timestamp": "2021-10-19 13:42:42"
                    },
                    {
                        "value": "92c8a785494eefeab1c3be777a60bfa3bb5f952ccf9345230e201c0c057b342d",
                        "timestamp": "2021-10-19 13:42:42"
                    },
                    {
                        "value": "85ee6fb97c2010a9360ee393b6f8515260e312de96ca3afbde06d5aaed699d3d",
                        "timestamp": "2021-10-19 13:42:41"
                    },
                    {
                        "value": "f358d592a02990a899bc4ca7c35804529237cbffac5dcabb3e7e3916a79afbb4",
                        "timestamp": "2021-10-19 09:22:49"
                    },
                    {
                        "value": "f9bd74fdfb667569270dfaa42017873aed84149a633cf3fa97e8db1142bd5edd",
                        "timestamp": "2021-10-19 09:22:48"
                    },
                    {
                        "value": "f13197aff6f530d9883aa1787cd57f4580c4c92bcaa5100f2641924c3e6867a5",
                        "timestamp": "2021-10-19 09:22:48"
                    },
                    {
                        "value": "dc8cca3d161634ae9b4c8e5e7e0fc053baf8014e0e8cf8ec4222dc1a6f6a8816",
                        "timestamp": "2021-10-19 09:22:48"
                    },
                    {
                        "value": "2a2187ae775f286c2400957b71aac1c550779fc6652a710d126546d4d4879f0f",
                        "timestamp": "2021-10-19 08:42:52"
                    },
                    {
                        "value": "ee0d275c50b493cc73f73d19665d9b126e038a7ea1307043eb71442280f6bd7d",
                        "timestamp": "2021-10-19 08:42:52"
                    },
                    {
                        "value": "10a96288de8785786b009b94ee858093999c9b690991474b95455192b7622e0b",
                        "timestamp": "2021-10-19 08:42:51"
                    },
                    {
                        "value": "939d7cb63f9612237c4143d68f2ef0691f693c70b481c6c175601e5ae1801bfe",
                        "timestamp": "2021-10-19 08:42:51"
                    },
                    {
                        "value": "b9a949ff1886b07e1cc021946c00cd7d4c7051ac24c7969ee4d3789b8b304ffc",
                        "timestamp": "2021-10-18 17:42:48"
                    },
                    {
                        "value": "3f95e7795f8c0b70983561a48425e735ef7832603543980f460b1356403ec622",
                        "timestamp": "2021-10-18 17:42:47"
                    },
                    {
                        "value": "d17dc5760a94c6a8d85b462dfe3cfdf40917e670513dadd5fd5eeaa9941106af",
                        "timestamp": "2021-10-18 17:42:46"
                    },
                    {
                        "value": "a3a48ca3514477ee7b7fe40d3a9ff697a77b0367a2ca0d055656dea5eb86a5fa",
                        "timestamp": "2021-10-18 17:42:45"
                    },
                    {
                        "value": "0dfb17fc59cf0a026c3185341c73ba25d6cb5ef0d886ce8dd00db39c1740c2f1",
                        "timestamp": "2021-10-18 13:02:51"
                    },
                    {
                        "value": "5778cdd1c6eaa80a0661a5d7d2ad87cdc7a238ed313481174c74e41119686c92",
                        "timestamp": "2021-10-18 13:02:51"
                    },
                    {
                        "value": "28481e2ae569e56e8fe6929a0c7c59add8850c3b49e8cf6d6873af03b16e884e",
                        "timestamp": "2021-10-18 13:02:50"
                    },
                    {
                        "value": "f70b1ff393e0aaf8c737ec09a41598d9e51fbdde8bb19a7051aecc8d0752c965",
                        "timestamp": "2021-10-18 13:02:50"
                    },
                    {
                        "value": "0d9ccd92343d9b69de723724ad095a2a031b208634470dc55e099b07325f11a2",
                        "timestamp": "2021-10-18 02:42:55"
                    },
                    {
                        "value": "bf09b8827fc8691350337c97b6936b48667fa41cdd9177de73e8c2808720a873",
                        "timestamp": "2021-10-18 02:42:54"
                    },
                    {
                        "value": "8d0f3056715cf96af14714339ef1bc6fef37da86983bd0ba175e098eb0c2be8b",
                        "timestamp": "2021-10-18 02:42:54"
                    },
                    {
                        "value": "1e24e03e9ffdbe39ca8d357d0130aff5c50f2ddd7b2f613ab9dc01f02d0527d3",
                        "timestamp": "2021-10-18 02:42:54"
                    },
                    {
                        "value": "9f59a9c7a38d8031c5b0829da6c4c10951b1de67adada4f567449d4b6ea8d83c",
                        "timestamp": "2021-10-15 09:22:42"
                    },
                    {
                        "value": "0e379293c9b084834bbc33561278ec9c8df126ba38e99f79640d5e76a7838745",
                        "timestamp": "2021-10-15 09:22:42"
                    },
                    {
                        "value": "a2539269c2b9200d7baed9f0dfc25b59fd4713a641d79fd9bd13272c7e1296ca",
                        "timestamp": "2021-10-15 09:22:41"
                    },
                    {
                        "value": "d269cccd0c2237680d95cef81cf4a4091944738ad29c3063c7e8c53900218543",
                        "timestamp": "2021-10-15 09:22:41"
                    },
                    {
                        "value": "5e4bf71710738a4f7f90457c76546979b65716b42125f2fe81153ed9fe2b96e1",
                        "timestamp": "2021-10-15 07:42:51"
                    },
                    {
                        "value": "c6bd41deb507046a69d680f7ce7c06ec255fc0ca19223d57788bca61cc14beb9",
                        "timestamp": "2021-10-15 07:42:51"
                    },
                    {
                        "value": "89dd90006d6cd58559565a7ccebc2147780e2a3ae084b5d114b2077c2ae341d7",
                        "timestamp": "2021-10-15 07:42:50"
                    },
                    {
                        "value": "4b3af4ebfe94ecb1730c15620080935f619b6592fad681921968f986c030c0c3",
                        "timestamp": "2021-10-15 07:42:48"
                    },
                    {
                        "value": "c20a680f2dec0f5d917ecb0f72e8609bb30b3632afd719969a86347c06d048a2",
                        "timestamp": "2021-10-14 13:02:59"
                    },
                    {
                        "value": "3c665dab78b5f613d40a620957d493b2d133c3f37af6d7acbad1f05ce6ef91fd",
                        "timestamp": "2021-10-14 13:02:58"
                    },
                    {
                        "value": "fecd867eb0e79f6810f4e0748ac35ba0c0c8c605000a5284fa7f6d98f3e38eaf",
                        "timestamp": "2021-10-14 13:02:58"
                    },
                    {
                        "value": "a63e0773595f36b7ada59361abb3b0df6bf684188170da64325f7224265ecc62",
                        "timestamp": "2021-10-14 13:02:57"
                    },
                    {
                        "value": "7d9a7c06ad6bdf4b58d325900a940f3bf830862d108c8cf58d3d77982b87f8c2",
                        "timestamp": "2021-10-14 12:22:50"
                    },
                    {
                        "value": "04e45804dd7765bd09431d387f55773f2a07002438927dbc2bf24facf7e404d6",
                        "timestamp": "2021-10-14 12:22:49"
                    },
                    {
                        "value": "ab229761fc0a6fd1982284b0031da6971ac429374578bc0bc1e69453127b855b",
                        "timestamp": "2021-10-14 12:22:49"
                    },
                    {
                        "value": "78e085875002746cbc6f4af5dc7d15157409fe94b23d89fc1bd58e9e1242302b",
                        "timestamp": "2021-10-14 12:22:49"
                    },
                    {
                        "value": "96c57ae661562e958e01bb0b490c09a0a51bb367931620223174963de88bdfcb",
                        "timestamp": "2021-10-14 12:22:47"
                    },
                    {
                        "value": "55cbe776a65a94d258cc0ea3911132969aed0f6979be24a24be4c4fb9f44e20a",
                        "timestamp": "2021-10-14 12:22:47"
                    },
                    {
                        "value": "3e598c1ce82cb5a66e95e90536cd88fb36f9beab5a9db155b4c04d88e595db62",
                        "timestamp": "2021-10-14 12:22:47"
                    },
                    {
                        "value": "43fcb442b80665d42271689310ebd569e84f74287063a62e14beba808178e098",
                        "timestamp": "2021-10-14 12:22:46"
                    },
                    {
                        "value": "087ed293380602e60c32df98be8412bd73d32beba232bc255a6fb3edf46134ff",
                        "timestamp": "2021-10-12 20:02:51"
                    },
                    {
                        "value": "19cf4c5548c7c4e9a0e70831b3fba397c98baa6beaad27914fca844bff13b9d9",
                        "timestamp": "2021-10-12 20:02:50"
                    },
                    {
                        "value": "bcd532d039a55b7a477012c8f35c93c848d34d691c9dd3e1d33bb77ef79b8386",
                        "timestamp": "2021-10-12 20:02:50"
                    },
                    {
                        "value": "51d534b716e35b643ac2a4aa73effe9607abfc61a36b7b4a423c9383002b755e",
                        "timestamp": "2021-10-12 20:02:50"
                    },
                    {
                        "value": "6eee4427f95eee176f7b71c9af116801d55fd7c3057f57320d1dab15369fecd4",
                        "timestamp": "2021-10-12 15:42:58"
                    },
                    {
                        "value": "8f828e35d1d7b9ca3c590f37b6f3c5598384d37404722cdf6dcb0173b62e4483",
                        "timestamp": "2021-10-12 15:42:57"
                    },
                    {
                        "value": "5389af7b3d0f5a3496cd2aa538a6ee01fd5a9bd1a8fcf3b9411f4112313d43af",
                        "timestamp": "2021-10-12 15:42:56"
                    },
                    {
                        "value": "082c9b72407d063bb96c2830bcaf5f285d2d616e8a8d729a52b39ccbd30b8211",
                        "timestamp": "2021-10-12 15:42:56"
                    },
                    {
                        "value": "b31b5199366598aa7e035d334e1f045b79902aedb13186f8ba178f9cc8d7b49a",
                        "timestamp": "2021-10-12 13:02:54"
                    },
                    {
                        "value": "cdf04db4f38a3af95ce0441810eaa0919ec5b5f61d53976a8dcd2469d134de79",
                        "timestamp": "2021-10-12 13:02:54"
                    },
                    {
                        "value": "fa73563a8ccbea57411fb4b9a5c713c1be3771e7c765a0b8e1100d0f4584c634",
                        "timestamp": "2021-10-12 13:02:53"
                    },
                    {
                        "value": "612a346d3e2412113c53343b67419bc7a13bcf1bfe890137b68b3b5553a20096",
                        "timestamp": "2021-10-12 13:02:53"
                    },
                    {
                        "value": "32b793817b07a78490aa882218fb2880723c7ba23381545a2d7facfe0cacf4c1",
                        "timestamp": "2021-10-12 12:02:59"
                    },
                    {
                        "value": "8a9ecca5ac83e44eccb453ffcbd702e712793888141f6f7313c0722f702fc5a9",
                        "timestamp": "2021-10-12 12:02:59"
                    },
                    {
                        "value": "d4d741eed6175c2c27cad4ef53d1413c9722b37411e82f30334a611bcbe856b2",
                        "timestamp": "2021-10-12 12:02:58"
                    },
                    {
                        "value": "8b050924d254d3e082c8a355f7506d6763bec67bd7ed6aa30074d742f854cf55",
                        "timestamp": "2021-10-12 12:02:58"
                    },
                    {
                        "value": "70041878b785eb731b5c6769320c07712b41ece41b0297a87c2a34fd892cd2be",
                        "timestamp": "2021-10-12 11:03:24"
                    },
                    {
                        "value": "8a6442971a1c7f3ed896d6feebcdc009d71570a6a144ad70178c6123cc1d90ce",
                        "timestamp": "2021-10-12 11:03:23"
                    },
                    {
                        "value": "e480cca2233292ee9418deb3ae92160168f74b136f44136db217c5e541ee554c",
                        "timestamp": "2021-10-12 11:03:23"
                    },
                    {
                        "value": "eb107daa1a87d192430ab9abefbf715b0ac5dd8e3c1aa78d088b049c8359a372",
                        "timestamp": "2021-10-12 11:03:22"
                    },
                    {
                        "value": "0476138fbcff609f17840fc691a990908bda11f81e13372d26d541a8cf47b0c3",
                        "timestamp": "2021-10-12 10:02:57"
                    },
                    {
                        "value": "9c4fd005c2766bdf8556cc3797d63f2d6ece2ec87d45d880ea3bd8c1342ef696",
                        "timestamp": "2021-10-12 10:02:57"
                    },
                    {
                        "value": "8154494ad395ee4638b8990a47a3d163452514f6b45ee71919445ba1cff60099",
                        "timestamp": "2021-10-12 10:02:57"
                    },
                    {
                        "value": "0c33fe39195569a868cf9f87d3aff16e72f5a54c4e52a852b8f986d121fa47e8",
                        "timestamp": "2021-10-12 10:02:56"
                    },
                    {
                        "value": "9964a814b379e4cdbf3769d940e00162e7310ec8bd7a4072474c47d6634811f4",
                        "timestamp": "2021-10-12 09:56:16"
                    },
                    {
                        "value": "db9570073755f75ffb658849371782d3701e6969db9b2724c4929b877720e434",
                        "timestamp": "2021-10-11 21:22:51"
                    },
                    {
                        "value": "a26563b8bb82e71f54068820dd88b7de84199111b66e33af94c09e2344d9db74",
                        "timestamp": "2021-10-11 21:22:51"
                    },
                    {
                        "value": "ea53ec87c892ab89f7fcf1e579004dc14cd94cf686b737279ebdd508ae81af22",
                        "timestamp": "2021-10-11 21:22:50"
                    },
                    {
                        "value": "12133ef575799710fd71f97d200f449ba861020afe56688ca2886f3a45896109",
                        "timestamp": "2021-10-11 21:22:50"
                    },
                    {
                        "value": "f083c960cd2083e99fce5c4546a4732b63500fac38c201fd90d73d6d762204ab",
                        "timestamp": "2021-10-11 20:22:53"
                    },
                    {
                        "value": "b991ef808850412202401222d649f0c5438fa46f65f7c0c9ce055e3c1a52197c",
                        "timestamp": "2021-10-11 20:22:52"
                    },
                    {
                        "value": "1618a682392591c00a2ee82b7eb7f4f082ec34350ad30dbe619b57198688b1e8",
                        "timestamp": "2021-10-11 20:22:51"
                    },
                    {
                        "value": "824fda5608b540d3bda797751450c40649565f2bf49afdc81ebfd9faa8995aa2",
                        "timestamp": "2021-10-11 20:22:51"
                    },
                    {
                        "value": "0fb3c7511c6494252676592eea6db4da4bc89977c066a5e4f7ea599c3c9ad8d5",
                        "timestamp": "2021-10-11 19:22:56"
                    },
                    {
                        "value": "c89efe1ae53a529d666004eb550269a397b1af81503cba538ec878431790e487",
                        "timestamp": "2021-10-11 19:22:55"
                    },
                    {
                        "value": "4800f46fd9412bceed147d683a6f3bdcebe317a1487c1026889e6861e774d467",
                        "timestamp": "2021-10-11 19:22:55"
                    },
                    {
                        "value": "36a9dc0624758f9a151f4050b5963c43806edb07d8dcf17eb0aaef6b7603a805",
                        "timestamp": "2021-10-11 19:22:54"
                    },
                    {
                        "value": "3c5d2a990e487ad59a140909b2e6047494467b163f6696be5e247f644e4c3210",
                        "timestamp": "2021-10-11 19:03:03"
                    },
                    {
                        "value": "8eaefb2e2b222c22d234f23ae4dfcac8afa0ca6cc8a66ef2e5fdfa5895ebbe00",
                        "timestamp": "2021-10-11 19:03:02"
                    },
                    {
                        "value": "b9b0ce10496a723998fd40bd2662d231e6135c465000d319b708736570d0bd09",
                        "timestamp": "2021-10-11 19:03:02"
                    },
                    {
                        "value": "afa62df6a2905e93ab1f59b5bd24856a88f735cd3930e7701a22a1988d3d475c",
                        "timestamp": "2021-10-11 19:03:02"
                    },
                    {
                        "value": "4dc95a3bcf000bee17c567dcb6047c2e523641ad704f6e677421e817440c51f4",
                        "timestamp": "2021-10-11 18:22:56"
                    },
                    {
                        "value": "c66e7fd83fc8da1911ba9763669d9eb370f8b2813ae4057adbee9f2239bc88bf",
                        "timestamp": "2021-10-11 18:22:56"
                    },
                    {
                        "value": "451886c1a00889a00ab33f6648f457939c2eed36e9e80bec61504ba90c463dc7",
                        "timestamp": "2021-10-11 18:22:56"
                    },
                    {
                        "value": "4f46b2449a7bd7a664b9328f240fc3bfa522e36918a0b672bec3015761d0b67d",
                        "timestamp": "2021-10-11 18:22:56"
                    },
                    {
                        "value": "c5bf60fe50896fc79ac25b76f70f2308ff992e783da412ef880f4b6d2faa3b43",
                        "timestamp": "2021-10-08 22:29:14"
                    },
                    {
                        "value": "f29cc959e064fc26cfb8be22f3801c532fae971380eecd4b9754e543dc0d8c30",
                        "timestamp": "2021-10-08 22:29:13"
                    },
                    {
                        "value": "1fcc50813abb7385e0655f566a7def176171060614e8d691c1394776156f19a5",
                        "timestamp": "2021-10-08 22:29:13"
                    },
                    {
                        "value": "f40e2eb315e7b80a03bf062eac98af2703912650d04a8ec77c56e51cc38d8171",
                        "timestamp": "2021-10-08 22:29:12"
                    },
                    {
                        "value": "ff857d96912ad08f9b78c9c37bf518affaf112572d8e1372f6b33cea27cf25dc",
                        "timestamp": "2021-10-08 13:03:12"
                    },
                    {
                        "value": "0b2d1bf2ca75ec2f3db69659158e685cec6efb71e4be9e277af99b3ad0508c11",
                        "timestamp": "2021-10-08 13:03:12"
                    },
                    {
                        "value": "b8dc1db94b5752524bd51980516ac00c095ef291ca89d8096db6cb4b4dab91b6",
                        "timestamp": "2021-10-08 13:03:11"
                    },
                    {
                        "value": "10017468aa97dd252b9b60edfb93220abaeb66ffa3c4bff2975d2cbf1dbfd2c2",
                        "timestamp": "2021-10-08 13:03:11"
                    },
                    {
                        "value": "08527f8c3243bef71794390dfdc5c897ef93fcce83d6c0ab3de8bcba158f9c20",
                        "timestamp": "2021-10-08 09:03:05"
                    },
                    {
                        "value": "df0bbf827fc6e2bdb82ae25400717641b7b011ce09de56642a2e36c7b73a116c",
                        "timestamp": "2021-10-08 09:03:04"
                    },
                    {
                        "value": "03d0c8e11fad73b08f4a31274b7d1f390f35a4264232ab6ddb9264e63ee266e9",
                        "timestamp": "2021-10-08 09:03:04"
                    },
                    {
                        "value": "d33e494bb41ddd3b69680d7095328c597bf30c1b968261c6201448ac0efb07b2",
                        "timestamp": "2021-10-08 09:03:03"
                    },
                    {
                        "value": "42b3efec41088a0afd2cc17e038169dd572baa116aa734a427012d39917f4107",
                        "timestamp": "2021-10-08 08:22:51"
                    },
                    {
                        "value": "291ccb8d73f49ee5567185339f10165ac63d91dbf13cf0885644debe7057fc0f",
                        "timestamp": "2021-10-08 08:22:51"
                    },
                    {
                        "value": "86aab91018b32a9ee913459090b66fe44f00e625f05560483547ad39d542a61b",
                        "timestamp": "2021-10-08 08:22:51"
                    },
                    {
                        "value": "4af9b76f905b5066c0d3ffee07b950329fbe0cdc7bd9bbf45c7119b7d58b0b8d",
                        "timestamp": "2021-10-08 08:22:50"
                    },
                    {
                        "value": "31bfd2d5c6056a1e7893054b3b027570d24aea2fef838d08dfb57476d55b7653",
                        "timestamp": "2021-10-07 20:02:51"
                    },
                    {
                        "value": "4e7de7114cb5947cee9d0f5fa60f4ad2be8db68364a4f8f4b1a6ca4f5fe1a4ee",
                        "timestamp": "2021-10-07 20:02:51"
                    },
                    {
                        "value": "dfbb8dc13848a4763fddee0be94415ef938755656c54e3f151995e2d50f251dc",
                        "timestamp": "2021-10-07 20:02:51"
                    },
                    {
                        "value": "887a7405aa28eae62dfe6992f37e091a734909c687e03b15d9ab5198f9b92913",
                        "timestamp": "2021-10-07 20:02:50"
                    },
                    {
                        "value": "5fd22c8bf1e7e06ccaa6ebc23410086fe0e3bc30b1613cd6ee734f280c0d6979",
                        "timestamp": "2021-10-07 09:22:50"
                    },
                    {
                        "value": "28e99722aa0c7bdfd81f89a2123cd8c743d5b7dd079131955ca8d3b81626fd42",
                        "timestamp": "2021-10-07 09:22:50"
                    },
                    {
                        "value": "8cf06d175295c0b589ed1aba53190374137c38bef216f04e469a484b25932581",
                        "timestamp": "2021-10-07 09:22:49"
                    },
                    {
                        "value": "fd137acb0bda1d576079078b74fe610d16031da47a801440c7ba955f4504a6e5",
                        "timestamp": "2021-10-07 09:22:49"
                    },
                    {
                        "value": "f5447c22561c0692e385ef3c0ef0ed84d4ce35042f0839bddd7de9aeaa1f777a",
                        "timestamp": "2021-10-07 08:42:53"
                    },
                    {
                        "value": "f0537b93c3ac221e4efe9d5835845b4930529890472272b0b0f8db2bf1d4ca5b",
                        "timestamp": "2021-10-07 08:42:52"
                    },
                    {
                        "value": "3bb61eb3906fb62e1170ec1a2678514af9371e75ec54a6aff5d9e00b143cea06",
                        "timestamp": "2021-10-07 08:42:52"
                    },
                    {
                        "value": "700c8d2a1ebc0994ccd09f93acadb4806ed3554cdef24c8e9ef0b3801646bbde",
                        "timestamp": "2021-10-07 08:42:52"
                    },
                    {
                        "value": "6b7e957b8eb7c3312c1ab3f3b77e21447f80cc271dd574f94e197fae1627ae95",
                        "timestamp": "2021-10-07 08:03:04"
                    },
                    {
                        "value": "c88dc9e354c0e35cdbdf33d5f1cf7f1d122294f116daf2cfddf3659dd55a1169",
                        "timestamp": "2021-10-07 08:03:04"
                    },
                    {
                        "value": "1d079c68ad564569df3511b987ae52344d5ba8e9f84680eb52f3fe63fe2336ad",
                        "timestamp": "2021-10-07 08:03:03"
                    },
                    {
                        "value": "cd2eaa79448009041ecc926c273b4d483bccaf7c2cd39624082c3e13d55408a1",
                        "timestamp": "2021-10-07 08:03:03"
                    },
                    {
                        "value": "ff372ccb50e04457a314f2a27f09805d8d7e9e04b4f39299e5a5c04cb6610d89",
                        "timestamp": "2021-10-05 17:02:47"
                    },
                    {
                        "value": "d733031bac48ebb66a6a12347c3fa50852da1023486f591679043ef07c9cad7c",
                        "timestamp": "2021-10-05 17:02:46"
                    },
                    {
                        "value": "eb39b7952714c4a7c7fbfc68a077ef0a2dd31c24da35078da08bcfc0b1e2ff32",
                        "timestamp": "2021-10-05 17:02:46"
                    },
                    {
                        "value": "62af9a93d17b868d0d7e276be6c79ccb23501ceb3ccc9ee1ae70af92481a9e25",
                        "timestamp": "2021-10-05 17:02:45"
                    },
                    {
                        "value": "5104be7947c77bac37177839daabb70f7a1287eccbee54ada21d9cf1cf326c1e",
                        "timestamp": "2021-10-05 15:42:47"
                    },
                    {
                        "value": "591f1f8b00c0eb6b24da2646904aabaf9ee6e6dcc735cf533bb4c1ccdf9e1f60",
                        "timestamp": "2021-10-05 15:42:47"
                    },
                    {
                        "value": "98257df783e840e80743c3482da475c0a8b0505b1eef573c4f7c968a9e53cdfb",
                        "timestamp": "2021-10-05 15:42:46"
                    },
                    {
                        "value": "49d4c6854d290ec44c33b93088b94106f8b0687455a64cb133c7e2cb2de2d658",
                        "timestamp": "2021-10-05 15:42:46"
                    },
                    {
                        "value": "6b766decd906f6450f1b5812428aa61c602e0f179fe59f837fb45d5da59a30a9",
                        "timestamp": "2021-10-05 13:22:54"
                    },
                    {
                        "value": "6b63ec46676c5907973403b1dde8476aba820788e7aadf87e3eed70d30a33b59",
                        "timestamp": "2021-10-05 13:22:54"
                    },
                    {
                        "value": "21350c749a15b06efda33cae533086eab02ef83685d539556407633676de94bb",
                        "timestamp": "2021-10-05 13:22:53"
                    },
                    {
                        "value": "036a350ce38ae0a3c83955bae112688671db19837d009ee3a0b077b4bac2daba",
                        "timestamp": "2021-10-05 13:22:53"
                    },
                    {
                        "value": "8f7fa187226287ba3a8858e75b00b021022fbfbc8f1f7ae01557cf692510fe00",
                        "timestamp": "2021-10-04 19:22:53"
                    },
                    {
                        "value": "f36144c1f50d385009541352868b0544feac1f1c138c848baa1512165d7bbe1c",
                        "timestamp": "2021-10-04 19:22:53"
                    },
                    {
                        "value": "d519f718eca42250c87657b679a8a9d1766d331e6ee242d18bd739998bf44350",
                        "timestamp": "2021-10-04 19:22:52"
                    },
                    {
                        "value": "ec328eebe9546d453b8a1f7628c42648420626e8f299bde4213e93c338439018",
                        "timestamp": "2021-10-04 19:22:52"
                    },
                    {
                        "value": "50d2bcd4477dc52e7c5dd1d2ee59a78133cb4ae3dd367aadc22053de8137a977",
                        "timestamp": "2021-10-04 13:42:48"
                    },
                    {
                        "value": "d153e8b542963a9c9ae3fa96421f2ec2c5779759d0a086f3545b7e9c91074476",
                        "timestamp": "2021-10-04 13:42:47"
                    },
                    {
                        "value": "9bb3eb78b4952fed721a5b70acaa8e0a3aa097c67cb6e8f3af573e7f96b441fa",
                        "timestamp": "2021-10-04 13:42:46"
                    },
                    {
                        "value": "84b02f2f8532b9fa9b6308836b414a34c6edf07dc0ba5a563dacb38ea4e16ce6",
                        "timestamp": "2021-10-04 13:42:45"
                    },
                    {
                        "value": "e131a19c2e136922085c687e301aa468e9b6a8ab94cb84ebb5c8ea4194051fe1",
                        "timestamp": "2021-10-04 12:22:47"
                    },
                    {
                        "value": "0c68bedf273c54fb11df082f5ba6db85fd819cf12f9d40a0a6a683d859315548",
                        "timestamp": "2021-10-04 12:22:47"
                    },
                    {
                        "value": "8c25e6add26bc8ff4c545ced91b02663a2ba8222f1b5e5208910705186c12c9b",
                        "timestamp": "2021-10-04 12:22:46"
                    },
                    {
                        "value": "7ae5225917f9eb18e030e2aad1c0b9f7a3fc5789986e9222281cb3663d5f0775",
                        "timestamp": "2021-10-04 12:22:46"
                    },
                    {
                        "value": "2152a980e864940db36cde90c649f66e7c2da15790e97703a28cb378fb7b5ca6",
                        "timestamp": "2021-10-04 11:02:54"
                    },
                    {
                        "value": "f5db176e54d46bec4fe01e52b8f5798b154ce202f47c0cbefe111b569544a707",
                        "timestamp": "2021-10-04 11:02:54"
                    },
                    {
                        "value": "036b95a372919625c9b7555e0ebe70d53408e904a31aaeed6b38c7bc741db323",
                        "timestamp": "2021-10-04 11:02:53"
                    },
                    {
                        "value": "99f5eb1561909e70043036787eddebd7827e74ad217cacc9d50749b8518665e5",
                        "timestamp": "2021-10-04 11:02:52"
                    },
                    {
                        "value": "7417778071586aac382bb6d2f65a28f9104b632f0f6d05fedd2c8f7ecb07c11e",
                        "timestamp": "2021-10-04 07:02:48"
                    },
                    {
                        "value": "e203779a905288614ca814693eaf5841c2213ca6c9f2e6d127accbaf69e84c32",
                        "timestamp": "2021-10-04 07:02:48"
                    },
                    {
                        "value": "500e8204e8284a6dbba99d308907c69f9fc5f0135ebd8d41a60d9f02c1076d0b",
                        "timestamp": "2021-10-04 07:02:47"
                    },
                    {
                        "value": "ccbc3a8753af66e3e7aa928494658098f2c5e138b9b6fd3d3738118dfc74f0fd",
                        "timestamp": "2021-10-04 07:02:47"
                    },
                    {
                        "value": "5f3ccb49e66ef3bf10ec0a226360f55238063c739154cb131407ff02d0706e67",
                        "timestamp": "2021-10-01 09:42:34"
                    },
                    {
                        "value": "98ab2262a42319322b879771eb37153cb7dae5105ad1d7396c643758d1e448e2",
                        "timestamp": "2021-10-01 09:42:33"
                    },
                    {
                        "value": "ebb308302e2e9b13ab40c44a7e2694346f2d550f060fe4e0564010dc522eff34",
                        "timestamp": "2021-10-01 09:42:33"
                    },
                    {
                        "value": "a2e1a84f7b05ee55302f0f9f6180a121dd14997183ca137c00fcc7e816bb6cb1",
                        "timestamp": "2021-10-01 09:42:32"
                    },
                    {
                        "value": "bb5cacda43fb28c636d1f0e628bd730cb7364305c8e91210c23a69ebbbf1e3a7",
                        "timestamp": "2021-09-30 17:03:03"
                    },
                    {
                        "value": "82dd9580861c59ad38ea896496392c38d84dd09c02d45c0f16d97325849da98b",
                        "timestamp": "2021-09-30 17:03:02"
                    },
                    {
                        "value": "638394ba0aa51689488ddd944d4b358f02fde988c65842110bdc089e04e9f138",
                        "timestamp": "2021-09-30 17:03:02"
                    },
                    {
                        "value": "807ddfd4b164d8e8bb8e0fdc0976db33ae55b021aa7917848a35963c6a4846aa",
                        "timestamp": "2021-09-30 17:03:01"
                    },
                    {
                        "value": "ff5a2d36df6823205baa733941ceef0c58d710615be594895abc8e3a65cfafde",
                        "timestamp": "2021-09-30 13:42:53"
                    },
                    {
                        "value": "b05b77c57fd3fef88f05f5a7d0013f80885e148217c3f38f56aedd342464a86c",
                        "timestamp": "2021-09-30 13:42:52"
                    },
                    {
                        "value": "eacd09517ce90d34ba562171d15ac40d302f0e691b439f91be1b6406e25f5913",
                        "timestamp": "2021-09-30 13:42:51"
                    },
                    {
                        "value": "5af10fe97d1162cea394c3c6c890af00016d79ec385b7ab662163130cbe9ff21",
                        "timestamp": "2021-09-30 13:42:50"
                    },
                    {
                        "value": "7399f23f90e2c8dab3b7a0b5acfe441c22678286e4d517ad4feb9386eeff6add",
                        "timestamp": "2021-09-29 12:44:36"
                    },
                    {
                        "value": "61a1c5cc8c673be8e2dc4a45ff9d3b1c2269f5cbcdaacbe1f5bb57474472a4d6",
                        "timestamp": "2021-09-29 12:44:35"
                    },
                    {
                        "value": "c6f3b9901ead534a75aec6bd7f28f50535af887db5857e43848a0268a2e7b9d4",
                        "timestamp": "2021-09-29 12:44:35"
                    },
                    {
                        "value": "a9f72389f209e74e5e0ccc368a81866e59f873869e17e9e03572e3419f20d14f",
                        "timestamp": "2021-09-29 12:44:35"
                    },
                    {
                        "value": "63dd01d18ebb883df1bdf8aa686e65ee49c99e6323f233a95ec7f907889f9269",
                        "timestamp": "2021-09-29 09:42:53"
                    },
                    {
                        "value": "46172625d47ca69be70167bc786fc8589f518ce9809967d0e2f1218b1e32c4cb",
                        "timestamp": "2021-09-29 09:42:53"
                    },
                    {
                        "value": "4f1143a928dcf99f7c630dd3cc8073bb791440c24d4c648ef54adce026742c01",
                        "timestamp": "2021-09-29 09:42:52"
                    },
                    {
                        "value": "e55a6e9d04d90fe3e41ce6b936bc7642dee3e7a804abfc7527ff74ee3062a1ea",
                        "timestamp": "2021-09-29 09:42:51"
                    },
                    {
                        "value": "0c22acaa973cbb781aea92dc1fb5a8c7cc1fd2abd403f2a6b9703f8f1e1c8657",
                        "timestamp": "2021-09-29 04:22:43"
                    },
                    {
                        "value": "e341bd3ad55d9b834d84b9e4f995d46e8b95476666d4c8a01517aa7a9cc9addd",
                        "timestamp": "2021-09-29 04:22:43"
                    },
                    {
                        "value": "12ac218ee670fa3d4d6194acffa068945ee838848252758922e41c34bfbd5a1d",
                        "timestamp": "2021-09-29 04:22:43"
                    },
                    {
                        "value": "44a710027a23b51fcb6e319fb1fa71417761c348062080004583680d2de5cd78",
                        "timestamp": "2021-09-29 04:22:42"
                    },
                    {
                        "value": "fae6a3048e91247206a42ee5f9261b9602afc2bd7fd8665f5a08b82c517a1789",
                        "timestamp": "2021-09-29 03:02:47"
                    },
                    {
                        "value": "62ee412123d6e8832cebbf33d84d5695adc4fc2d66f0ec7222d9ccd5f21d4866",
                        "timestamp": "2021-09-29 03:02:46"
                    },
                    {
                        "value": "eca9be257354d26e49e1b03d1b8d42228cf66b5ee1b1236afad3c348da43c48b",
                        "timestamp": "2021-09-29 03:02:46"
                    },
                    {
                        "value": "680993e1220c8d918f192ae23c5c01b6357c58ad68b7cc59fa122c09b7b85cdd",
                        "timestamp": "2021-09-29 03:02:45"
                    },
                    {
                        "value": "41dca50a93e75e133a04b71bc3b274e68eff1e6355e0ccfd6b41388011144666",
                        "timestamp": "2021-09-28 18:42:47"
                    },
                    {
                        "value": "90587fc2297572ec1e65b36e9beb55db0f961ab1b2c634ca33f7e01e545a6949",
                        "timestamp": "2021-09-28 18:42:46"
                    },
                    {
                        "value": "0489360967a0f389ad49b0ff153e376c77e19821d2bf9bf0383188c7859dd9dd",
                        "timestamp": "2021-09-28 18:42:44"
                    },
                    {
                        "value": "9d503fba930fcf9724778a17659948875302b2fc7148c82779c29dfc18fb8cc3",
                        "timestamp": "2021-09-28 18:42:43"
                    },
                    {
                        "value": "101f369f56a480e285e20c7e736fef549b960f755209bb7bc6ad10e8a28d1d75",
                        "timestamp": "2021-09-28 18:02:45"
                    },
                    {
                        "value": "e65f76cdbdf3b36f1d31d57c9a301051a76ac7c5dffe0ac892ab08149aa34a47",
                        "timestamp": "2021-09-28 18:02:44"
                    },
                    {
                        "value": "e14df53adff2889344d4502133a00a389e06039715c26a7724ed3f046fc683a1",
                        "timestamp": "2021-09-28 18:02:44"
                    },
                    {
                        "value": "d20e166e4598916c40fddea237915a65f482c7a7456466a89f7fa19ddf695d2d",
                        "timestamp": "2021-09-28 18:02:44"
                    },
                    {
                        "value": "e16cb828cc6368d7e7a1312eded1e218c31ebc325f37b13bd612c464b84afb79",
                        "timestamp": "2021-09-28 12:45:35"
                    },
                    {
                        "value": "5bf2cb1e36454321595cf5a7304254e5968690b92a7e27e5b519db0c2dc04e5f",
                        "timestamp": "2021-09-28 12:45:35"
                    },
                    {
                        "value": "33cdae9287842487631b4911dd7a1ca5cb106cdb6c83934ecca189356dbcb8dc",
                        "timestamp": "2021-09-28 12:45:34"
                    },
                    {
                        "value": "c7ea020c54d4ce9a629d57feb15e38fac8457b14221386111ef022735e375d13",
                        "timestamp": "2021-09-28 12:45:33"
                    },
                    {
                        "value": "6caf3e91a0bb501d8e7d08d8463407315debb31757137e5362795d91c161e6d6",
                        "timestamp": "2021-09-27 19:02:45"
                    },
                    {
                        "value": "cc556d6c6369ac18884578c1b9cd1a7ff2e0cb2aa7fcd81d18332a1557643e81",
                        "timestamp": "2021-09-27 19:02:44"
                    },
                    {
                        "value": "144fc8c1a922dbb8162d72a94780f8559bbd9e6b1faa9e037fd33e809126b080",
                        "timestamp": "2021-09-27 19:02:44"
                    },
                    {
                        "value": "de4a8877dfeb875e5ebb0bff8f0e969c7b799b843f6c6e89c888ef49705b05c4",
                        "timestamp": "2021-09-27 19:02:43"
                    },
                    {
                        "value": "166559731ad15341f955bf8a16708f93542bef868c33f02f70e9b27f57b991a3",
                        "timestamp": "2021-09-27 14:02:47"
                    },
                    {
                        "value": "ef0067940c6dc3971d1971768f6be91584f2f95b50754c5c1facdf92fb1e1cb4",
                        "timestamp": "2021-09-27 14:02:46"
                    },
                    {
                        "value": "972f5e016ffc306524d7083a5a5058ba8b5fc60f3db9f3c0915db59c0523a487",
                        "timestamp": "2021-09-27 14:02:46"
                    },
                    {
                        "value": "230b56b1d072725eff3a0e100515ba924377c9f0a79308bbfa3123269ee23d56",
                        "timestamp": "2021-09-27 14:02:45"
                    },
                    {
                        "value": "1758a9b18032ce82f4e95249413ee1a8cbade1ef2cb773bc958502801f3af738",
                        "timestamp": "2021-09-27 12:43:00"
                    },
                    {
                        "value": "2b1a98add215568bb5e1c333321cf0ffe98d9128fa149c4f5a07ce2922750b3e",
                        "timestamp": "2021-09-27 12:42:58"
                    },
                    {
                        "value": "c5ccdeea44050d8be9cf04b42ba6336dfd81e4a930ec6cd916f5f4e3a5f713bb",
                        "timestamp": "2021-09-27 12:42:57"
                    },
                    {
                        "value": "a49f86eec317545dc57a9700d9b3168abaf8b9a471739ea594fc8bfd551aa4ce",
                        "timestamp": "2021-09-27 12:42:55"
                    },
                    {
                        "value": "eed96b31d0af300135ddd50ba8274b31d7902564bcb5c84224e5d1b2e357aaae",
                        "timestamp": "2021-09-27 12:03:03"
                    },
                    {
                        "value": "b25ef1151578640a5bb9e01fada60a8792fc4d3e92f3ddabf19ba4cd6d630f57",
                        "timestamp": "2021-09-27 12:03:03"
                    },
                    {
                        "value": "83c49019ef9b9520235af445b484a3b3f275729cd92bb960a9264d6704190329",
                        "timestamp": "2021-09-27 12:03:02"
                    },
                    {
                        "value": "1826d0e604d68f81001dfd38e3bc475d036fe6eaef08d7b74c3af7e2683170ca",
                        "timestamp": "2021-09-27 12:03:01"
                    },
                    {
                        "value": "1576e741674fb57e8788c4a95615b73946cca56bf18e117c5dbe5ea412fdfa82",
                        "timestamp": "2021-09-25 07:03:32"
                    },
                    {
                        "value": "edeb1265a622490cd903c51dabea13cd94d2ec30e11ad98247ad6fb20aadf13e",
                        "timestamp": "2021-09-25 07:03:31"
                    },
                    {
                        "value": "ba01aa9cb72e74474273788a5c1d83693c3a504e1aad67bed7515afb40a34101",
                        "timestamp": "2021-09-25 07:03:31"
                    },
                    {
                        "value": "2ac830fd4c5c4c3522b5cb9983edc13f2580b932875bc9daeb02633b8829fb3b",
                        "timestamp": "2021-09-25 07:03:30"
                    },
                    {
                        "value": "54507294252cb270a6b1944f838eb0428d87fbcfaf05e887126d5754af3ec1fa",
                        "timestamp": "2021-09-24 18:42:48"
                    },
                    {
                        "value": "3fee841d37b1d765888c03ff08c2c6f68ce3a6192106d7f71bd33324501a42ba",
                        "timestamp": "2021-09-24 18:42:46"
                    },
                    {
                        "value": "14f0db931a3190b4e1cc5b960cea71a1298d87ef7466bb6c24631542a2b38eed",
                        "timestamp": "2021-09-24 18:42:45"
                    },
                    {
                        "value": "d84f2a05198d85dd6f2bf606fe6e24f7ca929cff9796d6b7f269bb8e7cf8b2a7",
                        "timestamp": "2021-09-24 18:42:44"
                    },
                    {
                        "value": "353f40d3359d8fcdf9b0ffe8bb95556a60df3d6c2ec02d844c4557d326ce68a8",
                        "timestamp": "2021-09-24 10:02:48"
                    },
                    {
                        "value": "d0e7564b77139d48cd4a4a89fc18bf2ec9842d73bc653ceb004849ed3c49f216",
                        "timestamp": "2021-09-24 10:02:47"
                    },
                    {
                        "value": "2381aa0f71e347c5804177ddda7c98ff556d4dfe4154a5d78f09d082b5f95781",
                        "timestamp": "2021-09-24 10:02:47"
                    },
                    {
                        "value": "c1c72ce4552e1355fa76736643a4df3b9a70c6e1042670845fa6024de0665889",
                        "timestamp": "2021-09-24 10:02:46"
                    },
                    {
                        "value": "6724b4abaf05bc011ee266d499d2eecadd61a305cd0a8e3c099193a3b9323a3c",
                        "timestamp": "2021-09-24 09:42:57"
                    },
                    {
                        "value": "e2bd42815d0ad61ad0f55056b9e78939a025f8b63c204afbf1ea1abf64adb71c",
                        "timestamp": "2021-09-24 09:42:56"
                    },
                    {
                        "value": "7318f7a1bb662ba2d27530ec87866144ac7a0532a642a27e1924987e498af153",
                        "timestamp": "2021-09-24 09:42:55"
                    },
                    {
                        "value": "08600fcd6bb8259774dd483410e84c72d02e2e632fd80ac20d73f8b0b6e8c0d1",
                        "timestamp": "2021-09-24 09:42:54"
                    },
                    {
                        "value": "00aec573ca70cc76175d8b369c00fc311e7ecfaafc916b8d86143163d489f827",
                        "timestamp": "2021-09-23 22:03:57"
                    },
                    {
                        "value": "c34a55e787dcc0081f387f68d32c1774bf43a0f03af9cfabe972517bfbdd89ef",
                        "timestamp": "2021-09-23 22:03:57"
                    },
                    {
                        "value": "e8c0e30cbdae38708411725bbe703e401f6086d078c00230c6f719572fcb59ac",
                        "timestamp": "2021-09-23 22:03:56"
                    },
                    {
                        "value": "a7d8dcc3d6ca2a179cf762487d258e40a75bb8e52a10c57a1282c36c97a9176d",
                        "timestamp": "2021-09-23 22:03:56"
                    },
                    {
                        "value": "995c349e77a02cf1d77af852797437f2cd89914f41f493fa7f352549f374d7d3",
                        "timestamp": "2021-09-23 14:23:07"
                    },
                    {
                        "value": "59aaeb22618c772877612d56e850fadbe0f8e929aa14b7922de7afef3eb7be96",
                        "timestamp": "2021-09-23 14:23:07"
                    },
                    {
                        "value": "c896738867f3bfa2aa832853b7248803f89ec36e7fb59881ef61a7a155c5826e",
                        "timestamp": "2021-09-23 14:23:06"
                    },
                    {
                        "value": "2d0bddbcdb78a0fed7250784feb4238aa9ad086fb4c9ab8d7c877a6ff503d309",
                        "timestamp": "2021-09-23 14:23:06"
                    },
                    {
                        "value": "856362062f444906aa7cce79dab2727d9fbcdfc3d6ac5241819c1586d3693f8b",
                        "timestamp": "2021-09-23 06:42:52"
                    },
                    {
                        "value": "990a8fa7e96d2cd90b09ab39794df984bc153d0dcd390afbca19a42b689d4e7d",
                        "timestamp": "2021-09-23 06:42:51"
                    },
                    {
                        "value": "a281822b88e49dd2abe9b320b9c6c75d5d8b2a4faf38160b373f9f65a2554a73",
                        "timestamp": "2021-09-23 06:42:50"
                    },
                    {
                        "value": "605238028647463189064790a297044a24de4e810caffe83b2a4e74bfb2f526d",
                        "timestamp": "2021-09-23 06:42:49"
                    },
                    {
                        "value": "da641202fb53638f3aad2bda8a87d215855cf03aa658637e3dd70dbe5c3c47fd",
                        "timestamp": "2021-09-22 22:04:24"
                    },
                    {
                        "value": "834d1020a44882573e5ce696cfea885b8866b53d76e2ecb1b75f22be33d05f38",
                        "timestamp": "2021-09-22 22:04:23"
                    },
                    {
                        "value": "7024147e75938acd54b804df172c63b57c794e1980632c5f8190ae1e9d0da82a",
                        "timestamp": "2021-09-22 22:04:23"
                    },
                    {
                        "value": "06ba06eae5d4762725f06a0ef13c80b251c98098b59c10e56e0f584da48727ce",
                        "timestamp": "2021-09-22 22:04:23"
                    },
                    {
                        "value": "b438197380888791997705ce5dfb8eadc354f559f9ec8f00629c9ef56b7589d1",
                        "timestamp": "2021-09-22 12:43:00"
                    },
                    {
                        "value": "99b495e7c6df7f7bf887cd2d7f143e4103dfaf57990a0712bac7d33a2c6d6f0c",
                        "timestamp": "2021-09-22 12:42:59"
                    },
                    {
                        "value": "ce7c61720e96d0377de028d65f275d47dacfaed3cd1eb15f5080b065bde8b591",
                        "timestamp": "2021-09-22 12:42:59"
                    },
                    {
                        "value": "ba8dc1fbfac80564485d83433578839c4ffe432e4ec3e81182fb7eadcc54c6b8",
                        "timestamp": "2021-09-22 12:42:58"
                    },
                    {
                        "value": "091230bdb21752192badda687f5def8c29d988ddab761901ed5c6594062c1e9d",
                        "timestamp": "2021-09-22 08:22:45"
                    },
                    {
                        "value": "84236953e6059c7733ecd777604a225ee85dc96740a46aac1379d13b3d57630d",
                        "timestamp": "2021-09-22 08:22:44"
                    },
                    {
                        "value": "1cab3a395f0da98681e97fe13c2d17415d49be182f5eb8719a5f260afbd150b8",
                        "timestamp": "2021-09-22 08:22:44"
                    },
                    {
                        "value": "8eb9b800f3098a7b92dcdf0393f69f8b9e03c27eb893e50a2abef8f6c308f1f9",
                        "timestamp": "2021-09-22 08:22:44"
                    },
                    {
                        "value": "816b319b12795c8135c2ce7d89c469580e3b8874f1033d077ecc91442a453ebc",
                        "timestamp": "2021-09-21 21:02:32"
                    },
                    {
                        "value": "6bb272687077dd72fd43ff97e4883a202c4a041cccf94b6df1876820d69418f3",
                        "timestamp": "2021-09-21 21:02:32"
                    },
                    {
                        "value": "d40a2b9afeea750b13595b40267238bd811fab0caeca139c97c4ae96bde0cc9f",
                        "timestamp": "2021-09-21 21:02:31"
                    },
                    {
                        "value": "d20e31d19e86b959e53ba3921fa966a7781aad0e50335611fac86beb26fd3dff",
                        "timestamp": "2021-09-21 21:02:31"
                    },
                    {
                        "value": "c7f1df37ab674d73314739b5970a4a26213b5eccb0ee89ff740d6b84d6d8020a",
                        "timestamp": "2021-09-21 13:42:48"
                    },
                    {
                        "value": "774c08451198a951fa73f9859b5e48c12c5df9214759e4717e56d92fb4c09d1e",
                        "timestamp": "2021-09-21 13:42:47"
                    },
                    {
                        "value": "d402f46882a05b2103e5c6d0d11052caa79fbb60c6293e1f50c8d8970c527869",
                        "timestamp": "2021-09-21 13:42:46"
                    },
                    {
                        "value": "d9cc0ba64d20a3a60f1580c74ff1269f5b545a0abf23362cbc678b12057a6cf3",
                        "timestamp": "2021-09-21 13:42:45"
                    },
                    {
                        "value": "06e50291961f8a0fb668b6dd03e2b448dfd76dd7fdf8167e93da4ac2cc12bd79",
                        "timestamp": "2021-09-21 12:22:48"
                    },
                    {
                        "value": "1771bccdd4c4fdc7d50d97ac10e5b1e0f980a4ff31233c59e9cfa17e9cd36a24",
                        "timestamp": "2021-09-21 12:22:47"
                    },
                    {
                        "value": "6c0e85b84f2b1dfdb580a168386ad91efe7f734066ff3a12a0d359fcb4711dca",
                        "timestamp": "2021-09-21 12:22:46"
                    },
                    {
                        "value": "8a95ac711537aeb1c93c61e541077005f5226e4150c2669742d1b612cfc25788",
                        "timestamp": "2021-09-21 12:22:46"
                    },
                    {
                        "value": "9affb4bd53f1e885ea819d2e2c0592478045287711989949225f5576951b8155",
                        "timestamp": "2021-09-21 07:02:38"
                    },
                    {
                        "value": "035384fd343cd402b110baf54a0d0581bbbb0227d68966091a1da5171a7db73e",
                        "timestamp": "2021-09-21 07:02:37"
                    },
                    {
                        "value": "ab4676fc90e455da2127126bfbd1fd167328c79eda83f686ef71dd89266825f5",
                        "timestamp": "2021-09-21 07:02:36"
                    },
                    {
                        "value": "24a91dcd8b1e2ea7f10678abfc39ad899bff946a3c4b0a88f47eda73a055b49b",
                        "timestamp": "2021-09-21 07:02:36"
                    },
                    {
                        "value": "0a8f7cfe0ed600627fa78f139f9e2bde405d911274baf4ee50dba3687575a9e4",
                        "timestamp": "2021-09-21 00:42:41"
                    },
                    {
                        "value": "4986d174676a19e6d6f15409bf470e825f322195b88e695adb8f0f503e91a6e1",
                        "timestamp": "2021-09-21 00:42:40"
                    },
                    {
                        "value": "b5552492886576b448ff426818ee13eec06835ddd3b3c40f07d2f0e6026fe5aa",
                        "timestamp": "2021-09-21 00:42:40"
                    },
                    {
                        "value": "a99b696e8ac16303843b26c95c982d5be9b9fd657d843937cc586c9a8dc29b83",
                        "timestamp": "2021-09-21 00:42:39"
                    },
                    {
                        "value": "7f1324fc421a2bb629fdea79e5fe95cd8aa31ef96b816894a546cf2e7ab4a8cc",
                        "timestamp": "2021-09-20 19:02:54"
                    },
                    {
                        "value": "d2d6a8c31acdd92eb9a005e2fac8838a382ab0425fc01bc88616bda185ab7b4c",
                        "timestamp": "2021-09-20 19:02:53"
                    },
                    {
                        "value": "2519d3c81b62ad689a15a96d31d15c353558f78b4b64af3eff67c93c22a86df6",
                        "timestamp": "2021-09-20 19:02:53"
                    },
                    {
                        "value": "b32448dbeec13e1eb23e55a57ffc06f9dfc8fd44687e19fc0be1c4fbabc10abb",
                        "timestamp": "2021-09-20 19:02:52"
                    },
                    {
                        "value": "b1e9060288c5c28d0fb5ba1c91b5c507e15011a063009da3e382ad6b90b09790",
                        "timestamp": "2021-09-20 16:22:48"
                    },
                    {
                        "value": "7ed2e1a088d8af23bee0d7b23fe435a181f597991cebfffbcc1ed43f31198f87",
                        "timestamp": "2021-09-20 16:22:47"
                    },
                    {
                        "value": "f35e37b873cb4bee71eab9a5caa6bc7bcb592d84b7924e83ec00a5c9058eb03b",
                        "timestamp": "2021-09-20 16:22:46"
                    },
                    {
                        "value": "fa9bd0ededa6a35bd948c884848855568c1efd4e77bd2ca7786144f81d3f64c5",
                        "timestamp": "2021-09-20 16:22:45"
                    },
                    {
                        "value": "8c566d11d58568f77b4792ba9e01aa980e0d6e64ce1dd0df3a8a5b08f779e95f",
                        "timestamp": "2021-09-20 10:43:09"
                    },
                    {
                        "value": "79bde7270537edb381b7a20940e59591daa84cbc2856fa9244fc0c7a668e2489",
                        "timestamp": "2021-09-20 10:43:08"
                    },
                    {
                        "value": "a0d1e3fbe11fcbbea9dcad1880e23ea531c01c20fbbf383174cd420349657a01",
                        "timestamp": "2021-09-20 10:43:08"
                    },
                    {
                        "value": "3884e83634368ece061a97583d17bfdfe4247af9f8d507f4b594eaabf499e1c9",
                        "timestamp": "2021-09-20 10:43:07"
                    },
                    {
                        "value": "4dec69f31c55cf28bb74dc237a3880ef1f1543c34f9a4fd9643b6ea9866eeb29",
                        "timestamp": "2021-09-18 06:42:41"
                    },
                    {
                        "value": "5c67a145de0424fdb8360b2db1122e10a0b66ab843494e5a841c6518cb1f9a51",
                        "timestamp": "2021-09-18 06:42:40"
                    },
                    {
                        "value": "4ae8ced743cdb0b0e128dc0f10659ea6a95afa35028eb3190911a4be5fcfa28d",
                        "timestamp": "2021-09-18 06:42:40"
                    },
                    {
                        "value": "4e18d364c4fa2db105557cf8105e5e3d77c9d7a06590b4f897051f99014da5be",
                        "timestamp": "2021-09-18 06:42:39"
                    },
                    {
                        "value": "264de686a45da08d2a7061c948a3fd59619a218eafb26788639d8442981fe4d2",
                        "timestamp": "2021-09-17 04:22:30"
                    },
                    {
                        "value": "c83f6916b9e38f13b1d43a22d26109c58202cf83e772e9cb1517be3ec1e2cc43",
                        "timestamp": "2021-09-17 04:22:30"
                    },
                    {
                        "value": "cddc5dc4113497e2236713b0ad558b89e194a5fd5f68a827872f698caf830374",
                        "timestamp": "2021-09-17 04:22:29"
                    },
                    {
                        "value": "3b6636d54d3798272a9b5dfff832e7686f8fc9f83ccf9298c7f30ba1fc91ddd6",
                        "timestamp": "2021-09-17 04:22:29"
                    },
                    {
                        "value": "4f8799e5441c553ebbda342b6b06356a70dc432e5ac0434f4158146520b57ab7",
                        "timestamp": "2021-09-15 18:42:53"
                    },
                    {
                        "value": "4611b180e4173882dba3e08aaa44ae28ce14d2f2709b2017082d57bcdecfb352",
                        "timestamp": "2021-09-15 18:42:52"
                    },
                    {
                        "value": "47949d697545bcc464dbb115dd5245ec29b81566529303fe32e3ab1afed84160",
                        "timestamp": "2021-09-15 18:42:52"
                    },
                    {
                        "value": "4e6e32e1482837038836b2c714b5af5290695f9264202a82e8a75e43848cd4fb",
                        "timestamp": "2021-09-15 18:42:51"
                    },
                    {
                        "value": "97ea895e92f76192010e02f12aca8ec4ffa1b667e84c9958332d280ced624402",
                        "timestamp": "2021-09-15 14:23:20"
                    },
                    {
                        "value": "b82fd9a707dc635429af599a1d1a8e656e1d3ec5668324f4961c17752935e6a7",
                        "timestamp": "2021-09-15 14:23:20"
                    },
                    {
                        "value": "93f74a2e739775d04bfc58579c1de9b19d8b355a592161911daa715f78574d6e",
                        "timestamp": "2021-09-15 14:23:19"
                    },
                    {
                        "value": "32258a09ddcb62ea68d47261889d0e888723afbab1bc4a3f137ec2e3c0dc01d4",
                        "timestamp": "2021-09-15 14:23:18"
                    },
                    {
                        "value": "34a89eda5dd4aef3efb096011f27bba7354b4c624d5dc01f4b43a18ac42d6af4",
                        "timestamp": "2021-09-15 10:03:18"
                    },
                    {
                        "value": "bd6ecbc27de051fab2f753669d77611d137486537358ee6b3c46ed3950d21ceb",
                        "timestamp": "2021-09-15 10:03:18"
                    },
                    {
                        "value": "bef7f97dcb40fd71e9a9fca6f43389749245f17e7a3092219d20217b8ad8e36a",
                        "timestamp": "2021-09-15 10:03:18"
                    },
                    {
                        "value": "7fd87c43fb93fdecdab5de1a532b259a4193ef217658c43b0f2bcc0332d92cdf",
                        "timestamp": "2021-09-15 10:03:17"
                    },
                    {
                        "value": "207dff33f6f91f114deae60a6cb3a404a5f40bc607fb6015f680c8980af7ac16",
                        "timestamp": "2021-09-15 08:23:09"
                    },
                    {
                        "value": "4056571bcd25053290d7350f6a47757771fed7f84f5c1a5b0efab382fbd56217",
                        "timestamp": "2021-09-15 08:23:09"
                    },
                    {
                        "value": "3611c1a2e9d1897825d5e7100a1c01d807f62a9c75d5f12602c168b0726d56ca",
                        "timestamp": "2021-09-15 08:23:09"
                    },
                    {
                        "value": "9375a54d20e08591a84bdcb2ea6eb292fcd7b392bd88664e95d0bc611ac286b3",
                        "timestamp": "2021-09-15 08:23:08"
                    },
                    {
                        "value": "e1fdbef3d95c9440a2402e484aa4a57d9447318d78ab0f1cb91fb56fa6104f89",
                        "timestamp": "2021-09-15 07:23:04"
                    },
                    {
                        "value": "1b39d6bf218028dfe7bc8254a3b1682804e9bf05b8298c708c318236f64ad986",
                        "timestamp": "2021-09-15 07:23:04"
                    },
                    {
                        "value": "505e2fbc1f0ef39f5019a28db1e74cd700afe64f095ae3df7b61e22722ad86e3",
                        "timestamp": "2021-09-15 07:23:03"
                    },
                    {
                        "value": "5a9be6ab91b206446ee357cb8cad8c2ec9fb0727e895b679886fd35bddc4ae9b",
                        "timestamp": "2021-09-15 07:23:03"
                    },
                    {
                        "value": "cedf917e41c2f8b4510aea5f1f54123851f4686c88763aa165c9d3d89bdefa9c",
                        "timestamp": "2021-09-14 23:04:18"
                    },
                    {
                        "value": "8bb73f9a4b2694819eaa9849a38ff31368f805ee67731554e26e9a90138558b1",
                        "timestamp": "2021-09-14 23:04:17"
                    },
                    {
                        "value": "730455b356fe27cddb15b8396a6a23b18437c8c2f2d71715e3e43cbb43e9f3df",
                        "timestamp": "2021-09-14 23:04:17"
                    },
                    {
                        "value": "c32e7fab7c0e4d5aed13b94b07fcbf1f46106000bb2388301a0a2bcbc920c757",
                        "timestamp": "2021-09-14 23:04:16"
                    },
                    {
                        "value": "b8e5f3dbfd789f93436cbc3d446df5447ab6f370e8b9bded3e035540ed6a36df",
                        "timestamp": "2021-09-14 13:42:58"
                    },
                    {
                        "value": "d509181f7a11464694fc9e27c3fa4f2eea63fe5e85875c318689e5d14d53e799",
                        "timestamp": "2021-09-14 13:42:57"
                    },
                    {
                        "value": "543729a7f72081c00b50ebfb1ec6365925756857937766652489076767e330e0",
                        "timestamp": "2021-09-14 13:42:57"
                    },
                    {
                        "value": "5e9079e99088b9b63728165a8a32ee73f1cf7303143add330469c0b9c83c41ac",
                        "timestamp": "2021-09-14 13:42:56"
                    },
                    {
                        "value": "a4c1a6ef8096c0daa6a02938b54ed1ccdac1252377a50820703e0c49a535e354",
                        "timestamp": "2021-09-14 11:23:25"
                    },
                    {
                        "value": "539e70f04353ff7e975aa5917fd9ceb9a1638d006fa27d619bad123264c90188",
                        "timestamp": "2021-09-14 11:23:24"
                    },
                    {
                        "value": "684c1789d8d0a6fa2c5b2e0e3d408007f972533b853f4cd7420689c61209bbcc",
                        "timestamp": "2021-09-14 11:23:23"
                    },
                    {
                        "value": "d60731d36e81f16b4c44c7fc1b3d04586a17fac18cd8e1b25aa3b159193b1a07",
                        "timestamp": "2021-09-14 11:23:22"
                    },
                    {
                        "value": "a41ba93183d03c4cf6b138170fab1d15c306918bb4acd1c2cbc3ee53765e5564",
                        "timestamp": "2021-09-14 10:02:53"
                    },
                    {
                        "value": "04e98a900ca361b68ebcfbad6453ddc626d93c8afb13916c18dd0e9648187566",
                        "timestamp": "2021-09-14 10:02:53"
                    },
                    {
                        "value": "14b32e7f567bd5f3eb34694fa959f376936241692579453e854e11da888d83e2",
                        "timestamp": "2021-09-14 10:02:52"
                    },
                    {
                        "value": "9bd0e2f3db2198a11805aedadf2ef3e75aba1c02f1bbe0fe880eb71bb6a2651b",
                        "timestamp": "2021-09-14 10:02:52"
                    },
                    {
                        "value": "a5fb671ff149d2c1c97fcd000703037ca35298d3d45d4797ab20a190aea0ff10",
                        "timestamp": "2021-09-14 08:43:21"
                    },
                    {
                        "value": "41ccdbadf39761cec4dbc443233ea9335670e55ce570152f9b7a22f485177da7",
                        "timestamp": "2021-09-14 08:43:21"
                    },
                    {
                        "value": "c59fb552a4c2580944ae5b2e5a0a85cfcc5702a1f03d9a22ea22baa6d8777cc9",
                        "timestamp": "2021-09-14 08:43:20"
                    },
                    {
                        "value": "cd2d08b8a0427385d5cb82844bfed4d7f058fb0f50817bd491e6c3511f7a90e6",
                        "timestamp": "2021-09-14 08:43:20"
                    },
                    {
                        "value": "532ba22b2b3f29bce4f7a72c4d8da9c3e512840e91adb1688af8e6941107b742",
                        "timestamp": "2021-09-14 02:43:05"
                    },
                    {
                        "value": "776a321e4964df206fe9806f605a8bbf1a340671a10d2446402bc00cb0629d66",
                        "timestamp": "2021-09-14 02:43:05"
                    },
                    {
                        "value": "4614e1f3b012729665ebcc0c1775ae515b1d5d193811e4fe36e551d03f69f3da",
                        "timestamp": "2021-09-14 02:43:04"
                    },
                    {
                        "value": "db2a76da1ad83542b367043776fe2d62942250aee57aae235317e0723d5254a4",
                        "timestamp": "2021-09-14 02:43:03"
                    },
                    {
                        "value": "df344fc259f24af81530c6233e884b92803d190095a6809ab7db0a7609df4f08",
                        "timestamp": "2021-09-13 19:22:58"
                    },
                    {
                        "value": "1b01413586143bbda3c07de7ff72c76fb2ee57c9afea3fc298aee338f01afd93",
                        "timestamp": "2021-09-13 19:22:57"
                    },
                    {
                        "value": "1c71ba318c6d0def295e19ba4731130e4e508eb70b6857c8e8da1d676fbb3234",
                        "timestamp": "2021-09-13 19:22:57"
                    },
                    {
                        "value": "23e479f761843a3c742ceb5437e43db1468915212c1ba3931f68389bd7672fef",
                        "timestamp": "2021-09-13 19:22:56"
                    },
                    {
                        "value": "10f0d0b45866f7c5e7cddb7a4b9303ba1bedde9533e3fe69b7e855fca0d51b7a",
                        "timestamp": "2021-09-13 18:22:56"
                    },
                    {
                        "value": "60f926a135f50af70e3f3230afb957d00630489a9e65a274235193a834a8236c",
                        "timestamp": "2021-09-13 18:22:56"
                    },
                    {
                        "value": "ea9994b2d9543049c1bbd710592146c621673693508f6674190613625e68d9f2",
                        "timestamp": "2021-09-13 18:22:55"
                    },
                    {
                        "value": "6ebad46cae496546ff8000fb27f0b9140b216276453290f96f6e9d15d110a6ca",
                        "timestamp": "2021-09-13 18:22:55"
                    },
                    {
                        "value": "cdc5b973f918a8a79957fb714ed1a06f69786ae399fd6bd56f3fc2356841a31d",
                        "timestamp": "2021-09-13 14:04:12"
                    },
                    {
                        "value": "0c199edaa472ef7576c771a810f96694b7d6674e91b9e0463ba95913dd354075",
                        "timestamp": "2021-09-13 14:04:11"
                    },
                    {
                        "value": "3fd3f37912e5aa23fceb3877d6ee43c8b102410d4fc90b147aab266972939b07",
                        "timestamp": "2021-09-13 14:04:11"
                    },
                    {
                        "value": "0562bb5cd1a74596a0900d3df786db3371e247dcb1150d86889dbc1187b7c04e",
                        "timestamp": "2021-09-13 14:04:11"
                    },
                    {
                        "value": "138798179e1bc1405999c5cb003d755319bc15e7cbcf94edbd682faca1f612eb",
                        "timestamp": "2021-09-13 14:04:10"
                    },
                    {
                        "value": "cc51c27286726b20b187d09bb003345481dfebd695ef7ff57cf416e170e5da73",
                        "timestamp": "2021-09-13 14:04:10"
                    },
                    {
                        "value": "ab5bcbc90be7aac95bcfb0c4e0f44fbbbf8aedc653cbb1da1d1f58b2fdf6b21b",
                        "timestamp": "2021-09-13 14:04:10"
                    },
                    {
                        "value": "2cacbf5edb0feaee79523ed3d17bd8ad53528244142244ca40626626baaec46b",
                        "timestamp": "2021-09-13 14:04:09"
                    },
                    {
                        "value": "57ab1d8424d2bacd66efc298b3444cd4af9d80781eea805f1cdffa903ca51389",
                        "timestamp": "2021-09-13 14:04:09"
                    },
                    {
                        "value": "d801a6776d65cd1692b99c49d4e5c6b6556b13d972aa3841cc6e68ff266210f0",
                        "timestamp": "2021-09-13 14:04:09"
                    },
                    {
                        "value": "f59cb961946e00097dcbec552eebd9b897321ef4dd19697ce95a7d66d9609cf1",
                        "timestamp": "2021-09-13 14:04:09"
                    },
                    {
                        "value": "c2156cff89f8a8d7c21326afe3f22b6a152bdf92f1a04475da3488236d12698e",
                        "timestamp": "2021-09-13 14:04:08"
                    },
                    {
                        "value": "03807b05efe27fb5cd257981734bd449ccb40176d5ec329d9eeeb5432953ef05",
                        "timestamp": "2021-09-10 15:43:22"
                    },
                    {
                        "value": "4e574ffdb3aba06f7e3aaebd9293eaf171289304e7fdd8ecfbf8275a149eba1d",
                        "timestamp": "2021-09-10 15:43:21"
                    },
                    {
                        "value": "5a454b35977d698d9016e8166c195b311578b98e5d541014bf6d41abf527d1bd",
                        "timestamp": "2021-09-10 15:43:21"
                    },
                    {
                        "value": "08ab0772922343044ef4200f262c6a99d69276d5e15e8a55b190fc23a901d926",
                        "timestamp": "2021-09-10 15:43:21"
                    },
                    {
                        "value": "6dd417f4970574ce9f788dc4054b76253aa8dc326d1262ee24e35eab6f8e9771",
                        "timestamp": "2021-09-10 13:43:18"
                    },
                    {
                        "value": "895ac6ed45076477649b8b8fd01976b9753ae33cfa350b7dbdf27a6f1bb154a7",
                        "timestamp": "2021-09-10 13:43:18"
                    },
                    {
                        "value": "aaf2b02cdbafb276cdb56f4ba4eda97c1a4b1bfd8dd62cdb0374206075187219",
                        "timestamp": "2021-09-10 13:43:17"
                    },
                    {
                        "value": "7a4cfc787cad065accd76c813759a9086aa5e1cfafa1e1fed0f9ca7c6d9e6499",
                        "timestamp": "2021-09-10 13:43:17"
                    },
                    {
                        "value": "6df73577c25cc76f19b536e44f6e4ad5e65b98599c8ff95f31dab97c3d0b0514",
                        "timestamp": "2021-09-09 07:23:22"
                    },
                    {
                        "value": "3519498d9ed3200dd82c549d3413bf81df1e3670f34a70e4aeed4e2b170bad28",
                        "timestamp": "2021-09-09 07:23:22"
                    },
                    {
                        "value": "1fd6624177dda187c2462dce333d623b4a1e3decb2cfe0045c382e9cdc1312f7",
                        "timestamp": "2021-09-09 07:23:22"
                    },
                    {
                        "value": "88714530301981f0bd18b9a48850ae30574ac70f6eaae0bc9586a357cf9d163e",
                        "timestamp": "2021-09-09 07:23:21"
                    },
                    {
                        "value": "70fe6c8b975cd9267f1e2cdae99fcd9caa025c21a64e8146cda00de71766410a",
                        "timestamp": "2021-09-08 12:22:50"
                    },
                    {
                        "value": "d1c70df22038081a4df1b8e2b8c7ced5c32410eff33b91afceb7b70cb6c9cbe3",
                        "timestamp": "2021-09-08 12:22:49"
                    },
                    {
                        "value": "dc834da85957fc6e744fd513b95ec46e6cdd2ddff9ac6e5a60cfe34121b1f6be",
                        "timestamp": "2021-09-08 12:22:49"
                    },
                    {
                        "value": "759cc43ff9429a9b6e48c20708461b7af39a106efbcb98d541c01d6c44ea9b3f",
                        "timestamp": "2021-09-08 12:22:49"
                    },
                    {
                        "value": "fc24f060e9ffd04558497c27d9694182ab650ef2f985e29017ea63a7b7d3d5a6",
                        "timestamp": "2021-09-07 14:43:32"
                    },
                    {
                        "value": "bd7323675e66df34d833d17897c6f98e9848dd062be6f299f482c09a90de4255",
                        "timestamp": "2021-09-07 14:43:32"
                    },
                    {
                        "value": "ec6ee5937a5bf35fda23604425a63d39c3c710d8608a174ea5e7fc3dbdc94a2c",
                        "timestamp": "2021-09-07 14:43:20"
                    },
                    {
                        "value": "9ae46b285122eac62352c724e7d838c9ef7c60b53ca4146956e20b911974a3a8",
                        "timestamp": "2021-09-07 14:43:16"
                    },
                    {
                        "value": "31a06c8d10ff489460190d4ff7a81d62be80348f6c47a99984a8defe3bb9e333",
                        "timestamp": "2021-09-07 11:03:26"
                    },
                    {
                        "value": "1e6b5d62edf242fc7f24dbfa6294f9bf7e34ae7b1222a274b8c5b68ce79cc895",
                        "timestamp": "2021-09-07 11:03:26"
                    },
                    {
                        "value": "938bf878a5a507a424718a7302d55d36c1ae58fcf571c5da0a6a4a136ee0f736",
                        "timestamp": "2021-09-07 11:03:26"
                    },
                    {
                        "value": "d086293c2e4016f3e47c108439e356a556436d4d2e4d98e036e55f2b146b66b7",
                        "timestamp": "2021-09-07 11:03:25"
                    },
                    {
                        "value": "c8754a0701ed69c237eb6e69f2dd6e026ab385a949940506d64fb4872c1f308f",
                        "timestamp": "2021-09-07 08:43:23"
                    },
                    {
                        "value": "ca172ed7c6469c5b7e89bda152d8c1c7c608f36ac2a3678e59d21cbfeed34316",
                        "timestamp": "2021-09-07 08:43:23"
                    },
                    {
                        "value": "2da03a9564c290809929171b65ee75ec8c35b7c4a2147f2ba6e24072c1a520e6",
                        "timestamp": "2021-09-07 08:43:22"
                    },
                    {
                        "value": "4bd5c83d0ec09eb7019537466d0c3c1469986dce8c358041f65be1a60a6b6fe4",
                        "timestamp": "2021-09-07 08:43:22"
                    },
                    {
                        "value": "70ad515254ae50ce83dfd276273ef3005d9c9a3f73d799458b6396704822a74b",
                        "timestamp": "2021-09-07 07:22:56"
                    },
                    {
                        "value": "01459f26c9c160284fbb5d73fe3e2c05634295c07c78b9667107950526af179c",
                        "timestamp": "2021-09-07 07:22:55"
                    },
                    {
                        "value": "307a10a4c5d5aaef2f00513fd461d9ed21c81cdc589269d27590e25c4e475e49",
                        "timestamp": "2021-09-07 07:22:55"
                    },
                    {
                        "value": "5693b238c29b2894b4bc466f57b135f9201f664cbf8b5695fe632eeb602bb3be",
                        "timestamp": "2021-09-07 07:22:55"
                    },
                    {
                        "value": "4f27ac7bae522367c6536f7b66b7c1ff7d8ec0797b45694228b62a0b07c6626f",
                        "timestamp": "2021-09-06 09:23:02"
                    },
                    {
                        "value": "1e447b92ca9481097e066983fe3f78b1d33304c054ccfdfbe60b4633e23283d3",
                        "timestamp": "2021-09-06 09:23:02"
                    },
                    {
                        "value": "8b3535f44d1b9df9297fb95f8071f8488ca55c7511472b597942c779b400dbb9",
                        "timestamp": "2021-09-06 09:23:01"
                    },
                    {
                        "value": "687b91a38a011ab52837bde98b31b5b2efb06151a8ae940c03096cd9fe87e9da",
                        "timestamp": "2021-09-06 09:23:01"
                    },
                    {
                        "value": "30b816fffff4cd244c0331294690b9722c018bfc6e598e9c0f98da1d571589eb",
                        "timestamp": "2021-09-05 06:22:54"
                    },
                    {
                        "value": "d708388f4d635af15744fc75f6dfba0d4bf187f05c3e9a2220ea76531ff927c6",
                        "timestamp": "2021-09-05 06:22:54"
                    },
                    {
                        "value": "7ea35bc5cdf67eaabcce3fcd75f571a64af9c0b5d739f6fc466db66c79a4aaf5",
                        "timestamp": "2021-09-05 06:22:54"
                    },
                    {
                        "value": "fb3d959898083e1cccc4e905b59121f9aa46519668bacf0ecaa2aab92eabdb20",
                        "timestamp": "2021-09-05 06:22:53"
                    },
                    {
                        "value": "66e9a440c0e4719ed9c472be00302f7a1176f48b5e0153284abc0c8060d70306",
                        "timestamp": "2021-09-04 14:02:59"
                    },
                    {
                        "value": "5de91041d903239cec4eb91f5ca0905beffc2fe8e768ba47fb1e7d40d72cbfe5",
                        "timestamp": "2021-09-04 14:02:59"
                    },
                    {
                        "value": "1c1e9749b10cb690a842b63b1932b3bbec1608855646d3bbfa0c0ed868feea39",
                        "timestamp": "2021-09-04 14:02:59"
                    },
                    {
                        "value": "5cb7087f62b9292c89c0418f21b76471adb12ab8ca47ea3a8d37f222f3b1381c",
                        "timestamp": "2021-09-04 14:02:58"
                    },
                    {
                        "value": "4c5fd4ed6d7eda044f08d5369dd3ac130ae1e7d2f8415a77ebbc8010e2fe7c11",
                        "timestamp": "2021-09-03 17:02:58"
                    },
                    {
                        "value": "e21ce56cbc1ef0b7ba03040187b29fd9aa0833eb1eee5b9ab2daa6d10d845d1c",
                        "timestamp": "2021-09-03 17:02:57"
                    },
                    {
                        "value": "51de8cb0363625d27202a6187ec6fc9b5c80704d293a834bbaab942abd0e5088",
                        "timestamp": "2021-09-03 17:02:57"
                    },
                    {
                        "value": "ecbd46c265b67d75964db9233ccd1f26710d56ab7f649845e44f59d55db4251b",
                        "timestamp": "2021-09-03 17:02:57"
                    },
                    {
                        "value": "c474dc9d81e08842f527487d032551b0d86e95a0f32fa2ebc7375fdb740c7e42",
                        "timestamp": "2021-09-03 16:02:52"
                    },
                    {
                        "value": "0f83f86907255eadae1caec99da48bd60689e359e40938f12453dcb3093851ad",
                        "timestamp": "2021-09-03 16:02:52"
                    },
                    {
                        "value": "172c6a711b4f2786b271ee27082f8f1cce19742b873fbef6568450d1ea774c9e",
                        "timestamp": "2021-09-03 16:02:51"
                    },
                    {
                        "value": "800d4dbab9f6afcf068ffb21d693bdd725c4963778e0cc0e4208b6d587b51830",
                        "timestamp": "2021-09-03 16:02:51"
                    },
                    {
                        "value": "95fe71eb4e30e1751181bcb5bb265f87bbcb3af252358d9fe919b9e82929e1d7",
                        "timestamp": "2021-09-03 11:42:55"
                    },
                    {
                        "value": "ca9d13706dad307a2021d1fa1683e46b5b9670b92ad0ee5e474cbea0620d6299",
                        "timestamp": "2021-09-03 11:42:54"
                    },
                    {
                        "value": "64991e96eeca7d4409b44fb3906d1eb30c4245a7c7cc0184ecd34fea581e3ec6",
                        "timestamp": "2021-09-03 11:42:54"
                    },
                    {
                        "value": "3864b3a157ece572eabb6d56e50d577d0993fc7150bb5046e26e4fdc6bdf3c76",
                        "timestamp": "2021-09-03 11:42:53"
                    },
                    {
                        "value": "da7eff90633f82c14d128a573e55c95694fa567bd983438f6e4080db739ab55d",
                        "timestamp": "2021-09-03 07:43:06"
                    },
                    {
                        "value": "d0c59964531548d9e1ad2711863288280bcb09b936cae8a87e666fff82ee198b",
                        "timestamp": "2021-09-03 07:43:05"
                    },
                    {
                        "value": "2ad430df48ef7060c1fa6c6c89698c95724291b314155288d5c13b5735d3837d",
                        "timestamp": "2021-09-03 07:43:05"
                    },
                    {
                        "value": "0f39e91c9cd245272ecaac532b78020e834a4183357ca822984d9303c18288d1",
                        "timestamp": "2021-09-03 07:43:04"
                    },
                    {
                        "value": "7d6cb8f7f367c80349027eada7707f57f758aa3ba31fc4889f6f8bec5ff47cab",
                        "timestamp": "2021-09-02 18:23:09"
                    },
                    {
                        "value": "0f9b5aec4138fe2a2ee2ae9f2a5283d531eae6e9d7946e3fe43a339a5b8d687b",
                        "timestamp": "2021-09-02 18:23:09"
                    },
                    {
                        "value": "a49278e32de8c758012e44c3519591a7997b261e453827ff7b11158786563430",
                        "timestamp": "2021-09-02 18:23:08"
                    },
                    {
                        "value": "2e607b4e0cec9f7569023816f39f2822e4363c9b67ca3bf8eb128932e42a0535",
                        "timestamp": "2021-09-02 18:23:08"
                    },
                    {
                        "value": "dcf146508f6c3d0fabdc2f73dbc0b5ab344d72d83c93c7e01259e9c5379b7c4b",
                        "timestamp": "2021-09-02 14:43:04"
                    },
                    {
                        "value": "5c9a6aca5e4cc643a1c9d8f846bf0444577bf45ef94f5a2ac5012c810d277248",
                        "timestamp": "2021-09-02 14:43:03"
                    },
                    {
                        "value": "bf31b12fa0ba232eb07eed27f004f9c34695ecc3eb4a5270b89f8abb519a059b",
                        "timestamp": "2021-09-02 14:43:03"
                    },
                    {
                        "value": "977576652c35a9f68bd5e609bc4628b521ee75dfa0b0d9d82deb6de35ad0d080",
                        "timestamp": "2021-09-02 14:43:02"
                    },
                    {
                        "value": "7eff4789baabfaa503b944bf286a9a201718eabd53633b70ddc310f75f819400",
                        "timestamp": "2021-09-02 14:23:12"
                    },
                    {
                        "value": "ab2f8c8398a0233c6d9b0308b3499e7cababf65a1ec913c4a88c895edaa822c7",
                        "timestamp": "2021-09-02 14:23:12"
                    },
                    {
                        "value": "25e127ac4ecb539d88a0186a8354b3c4c0f864d74a2dd8729a43bdf9157813c7",
                        "timestamp": "2021-09-02 14:23:12"
                    },
                    {
                        "value": "17ca7eec8e12f2ef93e345b31b0af8672034ba270a01ed29f72f2bd57904f2f6",
                        "timestamp": "2021-09-02 14:23:11"
                    },
                    {
                        "value": "7c9ea1b88941ffbbb77974421669ab974a5e2b6d7860a8fe79a2cafd637d53df",
                        "timestamp": "2021-09-02 11:23:12"
                    },
                    {
                        "value": "87946dcd976eb13af37e24ff68e36a03d2f46a9ae474f336207cf03cbbb0b508",
                        "timestamp": "2021-09-02 11:23:12"
                    },
                    {
                        "value": "4105711ebff133af5304052a1f66966be4115636d707ff6b20e784af2bddda23",
                        "timestamp": "2021-09-02 11:23:11"
                    },
                    {
                        "value": "3b49fb8bc04b8446394c1fd905fa6ee17155a5d34284a509765bca640cbbd37a",
                        "timestamp": "2021-09-02 11:23:11"
                    },
                    {
                        "value": "3ecf3d1df831abf769bbb4121101d9c2ed9c736dd19f8c8f2ce361443b018a96",
                        "timestamp": "2021-09-02 07:03:10"
                    },
                    {
                        "value": "d235f83c9dbd7f54c8fd205574e3510820809bcc2ac3ee582d74c3b0dd57c92a",
                        "timestamp": "2021-09-02 07:03:10"
                    },
                    {
                        "value": "53e32c11a3f1a95befce8f45a224c75314202ef4734e078f43582433e16f3a5e",
                        "timestamp": "2021-09-02 07:03:09"
                    },
                    {
                        "value": "009dfa3df95137d1899c498acd356d3ddcfa3e5d2bc939db46b1f9a9584cf652",
                        "timestamp": "2021-09-02 07:03:08"
                    },
                    {
                        "value": "b83afeb8225d897dcac8a075bfda8659a64ac5b6c7db788e6913bf7e168caacf",
                        "timestamp": "2021-09-02 06:03:35"
                    },
                    {
                        "value": "007c4b4acf35a5157592aa19840d3a4412af5a8e4bb5a15f6a7d1f793322d095",
                        "timestamp": "2021-09-02 06:03:34"
                    },
                    {
                        "value": "b9c7b6e3537f8278ce7338f46ec1b658bb0ed0d9cf5b4c04e8d6427ded11f7b2",
                        "timestamp": "2021-09-02 06:03:34"
                    },
                    {
                        "value": "15500244e3dc1de0b63b0b8342380ae569510f3b932ae3c3ce8096bc7c1161ee",
                        "timestamp": "2021-09-02 06:03:34"
                    },
                    {
                        "value": "2e368a4169d8a0264fc83bb864b78e12e9a1784f99bc2f89c8619b8a0e3fd46b",
                        "timestamp": "2021-09-01 14:43:21"
                    },
                    {
                        "value": "e8f823009307729db9544970e799732c87524447ba6589f27971e857db13bb3e",
                        "timestamp": "2021-09-01 14:43:20"
                    },
                    {
                        "value": "146f7ac50cae060ada30e45ae6e4b74259425f58fc98c527bc9142e9b87226b8",
                        "timestamp": "2021-09-01 14:43:20"
                    },
                    {
                        "value": "41747df22b65966e54d0a78b87b8255fe0fbc5fe6f9bacbc4d523c38f006fea5",
                        "timestamp": "2021-09-01 14:43:19"
                    },
                    {
                        "value": "05ab796f4f160aefb1a2b116be34d60e7c84a1fb6745dce0167c0b54679e4643",
                        "timestamp": "2021-09-01 12:43:10"
                    },
                    {
                        "value": "64c961fa1b24bad0cedc4e69c95177414154a6f4ec05b4028169ff30b5a25234",
                        "timestamp": "2021-09-01 12:43:10"
                    },
                    {
                        "value": "72362ee916d9697bac201fb3de3c8c736725e4c35c0cab9adb7fd5f184e9b2e1",
                        "timestamp": "2021-09-01 12:43:09"
                    },
                    {
                        "value": "5087ede548f089a3785b63560c4f4ee91162a220af293fc637491986bd812e25",
                        "timestamp": "2021-09-01 12:43:09"
                    },
                    {
                        "value": "4474153b57e54b4c94dc0c4e063dde0a7f296bc8f20a7a5d41d99d91c4239cc0",
                        "timestamp": "2021-09-01 06:23:23"
                    },
                    {
                        "value": "cd35549a11171779065907c9ff9f35fa56d3241cad7051c026fd03d8ff9ef0b8",
                        "timestamp": "2021-09-01 06:23:23"
                    },
                    {
                        "value": "b4358955e92a51d90d3abfaa7a7e6e80c2779e7d9349990de4b3c5b655e0dfa8",
                        "timestamp": "2021-09-01 06:23:22"
                    },
                    {
                        "value": "3f3c53a643260b21d81b37581469b76fd19edc2740ee31aa983f81b2c65e74a5",
                        "timestamp": "2021-09-01 06:23:22"
                    },
                    {
                        "value": "abaca5741431ff5f4d04ac153e6d06514d1a7d92154d9ae994d253297f582930",
                        "timestamp": "2021-08-31 16:43:19"
                    },
                    {
                        "value": "9b2ccbdf764922ff44a99056461539087a21d4ace577956e8659ca65eb5015d1",
                        "timestamp": "2021-08-31 16:43:18"
                    },
                    {
                        "value": "e5db5812de45f60419f817ff11f356c032aaff03123cd48022fd893731c98cf6",
                        "timestamp": "2021-08-31 16:43:18"
                    },
                    {
                        "value": "f1943befafa73351b7dad586f7ff686f2c099a5ebbbdb63bc4f16d67024fb17f",
                        "timestamp": "2021-08-31 16:43:18"
                    },
                    {
                        "value": "a78a8509da77e11047cbdd44be40e4ab2d3fac540237424d2f22fef8f1f77159",
                        "timestamp": "2021-08-31 14:23:20"
                    },
                    {
                        "value": "86833b23996b987125c3a5f5a5f8f818f8ac95cb19ac830f6a56094bda5ce8d6",
                        "timestamp": "2021-08-31 14:23:20"
                    },
                    {
                        "value": "d3b4237f0cd35cec5e3575957defb1545d420b94590c62603ee000caf2f95656",
                        "timestamp": "2021-08-31 14:23:19"
                    },
                    {
                        "value": "6a225a12b7ecf5facd61704c888df3512eb21dea6ba11f2d52a05a5199d19771",
                        "timestamp": "2021-08-31 14:23:19"
                    },
                    {
                        "value": "d5a7586f6a1a178492ba5fdcde2f901aa2c9b51a3740368e6bec77fa9476ab00",
                        "timestamp": "2021-08-31 09:43:40"
                    },
                    {
                        "value": "44fbe3e681b0298ad218c311c799a31aca40509fc6da64d5be24074043404572",
                        "timestamp": "2021-08-31 09:43:40"
                    },
                    {
                        "value": "9cfa475c96ac59c23665bfde73703be0ad6f5cfdd6632637f0bc355e1291ed88",
                        "timestamp": "2021-08-31 09:43:40"
                    },
                    {
                        "value": "ae0ac982f4f70afcbbcffe130163b0d07f53eb4850001dc3e40cdc8921ef05f6",
                        "timestamp": "2021-08-31 09:43:40"
                    },
                    {
                        "value": "240019ea98334f48c709ea183edd768fa3cc11ef81688c35d32c01e7b49c279a",
                        "timestamp": "2021-08-31 09:23:27"
                    },
                    {
                        "value": "919b29f06fa0ff7c2360e02f7cb40f6723db44e3753c9fa8b126e12fc925fba9",
                        "timestamp": "2021-08-31 09:23:27"
                    },
                    {
                        "value": "3c30562fe4d02debdc7ff0d3a101e4807010b779166bbafd25ae0fd068b7255a",
                        "timestamp": "2021-08-31 09:23:26"
                    },
                    {
                        "value": "8b5810ee2da1dcec5e8f06f1b56bbdeee77cdc6628289218789fc185e1ecfcf6",
                        "timestamp": "2021-08-31 09:23:26"
                    },
                    {
                        "value": "ad4bb72b8e2dfc1d1e4423c9a0983aa98dafff2ea460d1fabe666b6daaafb585",
                        "timestamp": "2021-08-31 07:03:34"
                    },
                    {
                        "value": "dff245691767266516b9f220ccdc527af707ea404f530da18d96d79da6238c2b",
                        "timestamp": "2021-08-31 07:03:33"
                    },
                    {
                        "value": "ca1ba83a91746c98e90af975da1dddcf8f4200dbc058f59d4caacaae0037cc83",
                        "timestamp": "2021-08-31 07:03:33"
                    },
                    {
                        "value": "764021e155f748af2cff69ebda18b8210a39ed11e1ba3562e58983dd57f343f8",
                        "timestamp": "2021-08-31 07:03:33"
                    },
                    {
                        "value": "8e3f34bcbcdf3fbdfda09eeb573867c7a92c97f1995db678a8d67945ea3ebe5f",
                        "timestamp": "2021-08-30 13:03:58"
                    },
                    {
                        "value": "6575fefaef5564a290a1fd996e759f8d1b8f740256ae8a066170daf3accf69de",
                        "timestamp": "2021-08-30 13:03:57"
                    },
                    {
                        "value": "4841307c8072c7aa013a5b090f7b3ee0ad2af6ad9212781edd02806b4894239e",
                        "timestamp": "2021-08-30 13:03:57"
                    },
                    {
                        "value": "15944df93dda59645c01b5b50bb3725c0312d9cd55ed9d590fb77455455eee9f",
                        "timestamp": "2021-08-30 13:03:56"
                    },
                    {
                        "value": "0c5e61b415a6ebd50f07b9a3eab5bb7fd6b501715e9f3968c4ea2dbc7323f189",
                        "timestamp": "2021-08-30 10:44:15"
                    },
                    {
                        "value": "6df3b30d3bc00007ec38b069ba73d91dba116e7bcfa86b40446fea7873966d3d",
                        "timestamp": "2021-08-30 10:44:15"
                    },
                    {
                        "value": "7848cb63f7b7e8775a542e0a4a17971211cb13c0da0cb9d23ae4b6b1468cf9c0",
                        "timestamp": "2021-08-30 10:44:14"
                    },
                    {
                        "value": "36e114cd7559d89da5e4834c66ef9ff6e753d3b2a6f1d0f5fbe354db5ae78bc5",
                        "timestamp": "2021-08-30 10:44:14"
                    },
                    {
                        "value": "f355684fc0f780ce8b741671afd1edf554b85d72ec9a82e5b2031a6e64910bcd",
                        "timestamp": "2021-08-30 08:43:48"
                    },
                    {
                        "value": "96d01352b8291a658a602d403e2133d469945ab385d9746db535aba474fc04d0",
                        "timestamp": "2021-08-30 08:43:48"
                    },
                    {
                        "value": "b7645d8903647226e9271ca3bbad5a8bd73c622c0de9b9305f97d0fc65904134",
                        "timestamp": "2021-08-30 08:43:47"
                    },
                    {
                        "value": "84fe246796952c9de41a5c2355bfbcb0dbea52f3e107395c8f40d3eec500cacf",
                        "timestamp": "2021-08-30 08:43:47"
                    },
                    {
                        "value": "e52f0865b10acfd125fb19472ed8b18047967460ee57a26403e4be70a6bdbea7",
                        "timestamp": "2021-08-30 06:23:28"
                    },
                    {
                        "value": "d6fa87fb59dbf4de1d1d0af1062a41e6a9620b682ecdfc0eb91856e28b9ea1de",
                        "timestamp": "2021-08-30 06:23:27"
                    },
                    {
                        "value": "d07dcdf05ff20a2596f795af5fb57e9c599ab0dc6dfb8d536b22dcfe502d6cf3",
                        "timestamp": "2021-08-30 06:23:27"
                    },
                    {
                        "value": "0aa5f7b6bd957c09de8b82a7e986b39ddcff158b7386fdfec3ffea0ff9483bdf",
                        "timestamp": "2021-08-30 06:23:26"
                    },
                    {
                        "value": "8e4ba96c55cbf411e1d0eef80fb8c6eb58935f7ff22874d169a8f4520b858eb8",
                        "timestamp": "2021-08-30 02:28:05"
                    },
                    {
                        "value": "c8e7193944ede931e488cd5e85554447e4da772455bad4a8e8b40840d9a5f8e9",
                        "timestamp": "2021-08-30 02:28:05"
                    },
                    {
                        "value": "e09598d63a57fbcf0aad89c31fc129aa82fe382a6c881d571b5abc0674cb0ebd",
                        "timestamp": "2021-08-30 02:28:04"
                    },
                    {
                        "value": "7da12f9f66e5a7ee4f9a6a025c6c3a1464ea85d0d805d2f7e85537c24a4ad6c0",
                        "timestamp": "2021-08-30 02:28:04"
                    },
                    {
                        "value": "e4c51cfe125602ab5cd33e751d121395c59599055a8294a5234c37a399ddf582",
                        "timestamp": "2021-08-28 15:23:38"
                    },
                    {
                        "value": "c4899fe686ad956d9d41aec5c785296dcb9de572ba6b0d20d2ffda8665f7c48f",
                        "timestamp": "2021-08-28 15:23:38"
                    },
                    {
                        "value": "361b0f41c92e2156b12838e48d3180831f211f605dc68d46532ee49eaa4a0638",
                        "timestamp": "2021-08-28 15:23:38"
                    },
                    {
                        "value": "f9832a7034b15de8befc5b496288180e62b8c369ac3e1ea8f66682798fe1da27",
                        "timestamp": "2021-08-28 15:23:37"
                    },
                    {
                        "value": "05cf54914054528c08b7afef9744e5457f00692e2cf76cacbcd20917af96e533",
                        "timestamp": "2021-08-27 11:42:58"
                    },
                    {
                        "value": "35042592e4abe63a3a51543f2cf419f83dee5e2b44bc2d7fe33173fccd10d93a",
                        "timestamp": "2021-08-27 11:42:57"
                    },
                    {
                        "value": "45533ea08133a1fbc0ebe03f8ca1fe3f4151dff20df364e783ff913901253a18",
                        "timestamp": "2021-08-27 11:42:57"
                    },
                    {
                        "value": "9f7fd1dce816527266c587dd42767f0c39266055d10c36b50b08a2b8e3126211",
                        "timestamp": "2021-08-27 11:42:57"
                    },
                    {
                        "value": "82c2665acbd0ef5ca6373ee4a48db80ed672588aa189e8be124dffb7b82a536a",
                        "timestamp": "2021-08-27 09:03:26"
                    },
                    {
                        "value": "c71e73a5006f03bf63ad6099f034a3d19a130a6893979c43318eca2cb6bfd224",
                        "timestamp": "2021-08-27 09:03:26"
                    },
                    {
                        "value": "99714288e33f3da9fd0bffa08767fc02aa0d014dba4352aa5ce5ecbe8f94f0f1",
                        "timestamp": "2021-08-27 09:03:26"
                    },
                    {
                        "value": "a19e28fbf5a1105bc176142dfc0026b411a1af01b229473995739f2fbf8e9880",
                        "timestamp": "2021-08-27 09:03:25"
                    },
                    {
                        "value": "40739089c306d43c48a74bfc2435191af963e1e68c531f02d97fe52593347539",
                        "timestamp": "2021-08-26 20:43:08"
                    },
                    {
                        "value": "b8f37a83adea026a74b7db972f0d0a4f4016209df483c0336c66182b63cea472",
                        "timestamp": "2021-08-26 20:43:08"
                    },
                    {
                        "value": "6940e6d318509c36063d31a3748ff9614813d429c824b6221ba9762dbd774b9a",
                        "timestamp": "2021-08-26 20:43:07"
                    },
                    {
                        "value": "ad2b91ad0e691fd32833926b09af43bcd97a3a231fc53b1effe9b8351da0978f",
                        "timestamp": "2021-08-26 20:43:07"
                    },
                    {
                        "value": "21a0baceaf79b52181f86dc1e8ab27cec192c3d2267d23a53b7ed8c6c441c9c4",
                        "timestamp": "2021-08-26 16:43:40"
                    },
                    {
                        "value": "434837e7ca89c0c7a55c3b1611dbc172440b8808e938e3a192f65405dd9cafa3",
                        "timestamp": "2021-08-26 16:43:40"
                    },
                    {
                        "value": "a9010421ea97c10ab6147e6c5077fab296030b13c26b6645502b6165e2e9d4db",
                        "timestamp": "2021-08-26 16:43:39"
                    },
                    {
                        "value": "a0ea397910d3974f5002c286e7b087bba16b008ff641bd0993bdf2ad1670fb5e",
                        "timestamp": "2021-08-26 16:43:38"
                    },
                    {
                        "value": "11dde0ea97b2f63edbd9d6b42af105bff7fad9225396219a6de96cb8d51125d7",
                        "timestamp": "2021-08-26 09:43:16"
                    },
                    {
                        "value": "57c2e3a931790f65bc4e39d259674b40a6fe2eb74d31b84f75ec34ca3ba5866e",
                        "timestamp": "2021-08-26 09:43:16"
                    },
                    {
                        "value": "76ce7cb1da0368a4464b54727fbc7cfe46e41cf28b3d6b8ef24012946813ef59",
                        "timestamp": "2021-08-26 09:43:15"
                    },
                    {
                        "value": "7f154233d294875a0de861dee3b0da3f01986db8463a3516b5f6fc4e3683e50d",
                        "timestamp": "2021-08-26 09:43:15"
                    },
                    {
                        "value": "2406c9e475a29ab92fa4c1c467f6b0f2764c995b319d16dff3993a7ca07c5a48",
                        "timestamp": "2021-08-26 01:14:24"
                    },
                    {
                        "value": "fad98552d249a4698a471b40ac4d2fa34ebb1a7c49c87c93fb66414fa9dd79ff",
                        "timestamp": "2021-08-26 01:14:23"
                    },
                    {
                        "value": "d5855e6292d04c6ab247c1b550168cde3d4a73831ed792cf15c1d0c650137e3d",
                        "timestamp": "2021-08-26 01:14:23"
                    },
                    {
                        "value": "a8f7c2292149194db102b1445f299e7c4cefa860980e45d049d07d4480c96d2f",
                        "timestamp": "2021-08-26 01:14:23"
                    },
                    {
                        "value": "6b2e2875b8bd4b970e8c8ba6e2692f6c92bacefbbc3e9f0c4f0941189099b384",
                        "timestamp": "2021-08-26 01:14:23"
                    },
                    {
                        "value": "77262b9ab169a1e60ebb208371baf2df28d416d4d13eccdaee78750a34aaede3",
                        "timestamp": "2021-08-26 01:14:23"
                    },
                    {
                        "value": "9fa8735c5ff1197f8601f530ef3c1c55e03d33a879f717f6de94c214fb67b67f",
                        "timestamp": "2021-08-26 01:14:23"
                    },
                    {
                        "value": "464b4eb5126f50367fb77e759d01eecf7c0856b581d2ac441640f7377807c879",
                        "timestamp": "2021-08-26 01:14:22"
                    },
                    {
                        "value": "42c9e28df69f62bad6f53903760f636f3bd30fc513a7e0e491f9c7732547332e",
                        "timestamp": "2021-08-26 01:14:22"
                    },
                    {
                        "value": "5811a0a54b1f33f02feae8c0af473d6955d58a1980c58750ce65a02f7c8c3329",
                        "timestamp": "2021-08-26 01:14:22"
                    },
                    {
                        "value": "62f716d99538e84b8ce94b368d64500d2b0a98f84e714635fd40aba1d4807745",
                        "timestamp": "2021-08-26 01:14:22"
                    },
                    {
                        "value": "4b70d62a8c177b2678f90b4c49cca1d9ed855bf0718cc09ce10b36ecb095134b",
                        "timestamp": "2021-08-26 01:14:21"
                    },
                    {
                        "value": "70bfeef9ba299cd8298309e1cfc1610792bb28903b5b303ade5b12075959fd81",
                        "timestamp": "2021-08-26 01:14:18"
                    },
                    {
                        "value": "ea8e3b0f4f9e0cfcc715a9d984cb406dde36f29e0fd229da070b851dc717495a",
                        "timestamp": "2021-08-26 01:14:17"
                    },
                    {
                        "value": "8d35902fd4f9662d6582dcfc96c8235fd94160620b414ad803cd7a7d7d5a1766",
                        "timestamp": "2021-08-26 01:14:17"
                    },
                    {
                        "value": "864b3ce0254a9ce953c79d9a78f9c83852d3d57c12b98619ad445d0607b94184",
                        "timestamp": "2021-08-26 01:14:17"
                    },
                    {
                        "value": "c419a8e5882119f1c113b821bc92140cac38cf7ab7f9ba2216def8da6947f970",
                        "timestamp": "2021-08-25 18:23:42"
                    },
                    {
                        "value": "45278d169fd9dfd30355570aec0c04c274d71eec2543d0b33e7e2a641ea93eb7",
                        "timestamp": "2021-08-25 18:23:41"
                    },
                    {
                        "value": "cab907df419f9a95b889719e1c302c9693f711ea74e2f73e60ce14f3284704a6",
                        "timestamp": "2021-08-25 18:23:41"
                    },
                    {
                        "value": "3ddec527324618443bb0757594a057aa33322d3fe8c7c5a38655c43b45a05c55",
                        "timestamp": "2021-08-25 18:23:40"
                    },
                    {
                        "value": "273f8137fbe63ffef8f64fa9efad27fac451ffec71edaf1a4a7769a277a2379f",
                        "timestamp": "2021-08-24 18:03:13"
                    },
                    {
                        "value": "67fc3d0293ce2f29dfeb19964c48e01da72332051bd5a9f48aa8844ca0c39770",
                        "timestamp": "2021-08-24 18:03:12"
                    },
                    {
                        "value": "ffb1f0ac81c2b55e6c5bbcf695b12b85dbef6a72f9d32e6fbc16f611ada393f2",
                        "timestamp": "2021-08-24 18:03:11"
                    },
                    {
                        "value": "e4456a8c084a7141121f960f272fd92e592e89382307860043b780b73f89e3f6",
                        "timestamp": "2021-08-24 18:03:11"
                    },
                    {
                        "value": "fe1f35c815222d77527faddd4b99c9a697b2fb8fe27cd45c50b5f6ca499cce63",
                        "timestamp": "2021-08-24 14:03:20"
                    },
                    {
                        "value": "87a4289aad76e6f62834fea405af943939f86ef28523f0e3fa71a012850aaa0f",
                        "timestamp": "2021-08-24 14:03:19"
                    },
                    {
                        "value": "bd015a47e8e376d7cfb70b5ebc81328a9c3a3cdc45d03635b107c106555d55a4",
                        "timestamp": "2021-08-24 14:03:19"
                    },
                    {
                        "value": "8e2098f566177904903e9b219a595af6cd948b7d00fe12aed8545ea1cc4ebd59",
                        "timestamp": "2021-08-24 14:03:19"
                    },
                    {
                        "value": "4f611f4466203533e8cd92ac4c802d90ab056c928bcec7c470b8d61570dfc967",
                        "timestamp": "2021-08-24 13:23:21"
                    },
                    {
                        "value": "b3c6d0c770672bedf29c6ac778faa72296b2a36bbd4d4f861d8da286247d01a5",
                        "timestamp": "2021-08-24 13:23:21"
                    },
                    {
                        "value": "f5572f8b1de7c0c418f9acf1d30896bea3ca9dfa369b0f27df851ea69e36cb4b",
                        "timestamp": "2021-08-24 13:23:21"
                    },
                    {
                        "value": "3888d2af93c2ee76694591d1f5edd24f312a56262f9e0f9f64bb973eaf5c0c59",
                        "timestamp": "2021-08-24 13:23:20"
                    },
                    {
                        "value": "34e32621d9d21c70cf705d5306ea55c636b4561f48a32abb91abe9c8ecf77f82",
                        "timestamp": "2021-08-24 12:23:29"
                    },
                    {
                        "value": "5823174ff78f251ac5b1b8cd1e1727aaa72f8523aa1aace4b59c9ef549d22148",
                        "timestamp": "2021-08-24 12:23:28"
                    },
                    {
                        "value": "8d6843a7f3cf4ffef14d352860728eba74509878e32a29fb52fa398218a68f57",
                        "timestamp": "2021-08-24 12:23:28"
                    },
                    {
                        "value": "b85610db8fcaf7b2ae9b6c09e1f4dbf80fdf022e79eff8b792b1fe6a732e8c07",
                        "timestamp": "2021-08-24 12:23:27"
                    },
                    {
                        "value": "3d0641c790b73bb91c424b58ee901ede64e525431c9c8d0f14742764aa8b8e18",
                        "timestamp": "2021-08-23 21:43:19"
                    },
                    {
                        "value": "95b3023fd7001f4a2fea8bedb4de67775257f6e4fbf911168c6bf011fb93c056",
                        "timestamp": "2021-08-23 21:43:19"
                    },
                    {
                        "value": "52aaa20eef4d75bb209ef1d632a3e5a894358ebbd5ae9e18262868209fa30b7c",
                        "timestamp": "2021-08-23 21:43:19"
                    },
                    {
                        "value": "c788d595c8952558670f3420d11677f9455803c953e6614546013efdc4967725",
                        "timestamp": "2021-08-23 21:43:18"
                    },
                    {
                        "value": "f42c602e520046860cd2e8c0eabe8adfaa7693d9e218901dec743b8d02d1db80",
                        "timestamp": "2021-08-23 16:03:27"
                    },
                    {
                        "value": "0ea373a09883cb6339962ddab7b1ad826710111758ffb711fb7f126cc7d33ea5",
                        "timestamp": "2021-08-23 16:03:27"
                    },
                    {
                        "value": "38fd98d3b367b51419ffd7c80bac9156a3479e6e20fc7a6b4aebd3f722d0ea28",
                        "timestamp": "2021-08-23 16:03:27"
                    },
                    {
                        "value": "95fa5bac570a78d55bc2494fbacdbf3d38402df53894c5c321db7f3d33639e1c",
                        "timestamp": "2021-08-23 16:03:26"
                    },
                    {
                        "value": "f8b0b072a061719895c7fba405b3ff7483d4fe796e3fbb402de371d9cbdd3fcf",
                        "timestamp": "2021-08-23 15:23:24"
                    },
                    {
                        "value": "0a0ffbef2363fe12a342379cc7a9eb6d88d92b397bbb7c4da5562b22dcd7e7a3",
                        "timestamp": "2021-08-23 15:23:23"
                    },
                    {
                        "value": "7854503f3fc57a985d64d1b24fe2517497f6ec23338156a25a77dc5c0e7c6e17",
                        "timestamp": "2021-08-23 15:23:23"
                    },
                    {
                        "value": "9e69e22a336f4e2b17aa52eaa7183bdd92f17f577657c227f37419d38f42f920",
                        "timestamp": "2021-08-23 15:23:23"
                    },
                    {
                        "value": "501242ffaabd951fbd62a6b12cfe8955915f65acc7d6c99effd41366054ccdca",
                        "timestamp": "2021-08-23 15:03:38"
                    },
                    {
                        "value": "4307780f4d8e29477a0c018fe3a769fbc545bb54e14129319592271601599147",
                        "timestamp": "2021-08-23 15:03:37"
                    },
                    {
                        "value": "c1026abdeb3f090ee196397027381b48a5be9b539c520479ee72360ae575214f",
                        "timestamp": "2021-08-23 15:03:36"
                    },
                    {
                        "value": "d835bb8d896d0a858feecf968258bc9d5d53e8013e01463db68ae2b5bae8fedf",
                        "timestamp": "2021-08-23 15:03:30"
                    },
                    {
                        "value": "9a4be533628add3357b47de5396217203cdd14ce8d56c9d956a3d6d6e50935f8",
                        "timestamp": "2021-08-23 09:23:43"
                    },
                    {
                        "value": "3cfae345a9a28554d85611d4e13bc90e95998eab6cd9c7b8b70b90f782ba16b1",
                        "timestamp": "2021-08-23 09:23:42"
                    },
                    {
                        "value": "f3883b25c2c34ee15f38c81d263146dc94229cfb13f828907f63bf65e017319a",
                        "timestamp": "2021-08-23 09:23:42"
                    },
                    {
                        "value": "ede9de4a258fe5c1a2f34ad066b59c10925d87ae2ce0f7242af952060975c47d",
                        "timestamp": "2021-08-23 09:23:42"
                    },
                    {
                        "value": "2d83785c49496884c1f05a3f2efacd45d6c0f87a71a155ca5a01f10041343beb",
                        "timestamp": "2021-08-20 16:03:44"
                    },
                    {
                        "value": "c1e5fc5566effa086a708323b0819f7f007df582615d109af646d74afd189691",
                        "timestamp": "2021-08-20 16:03:43"
                    },
                    {
                        "value": "3c75184f86f6231ed38be583a300e5af220f5d68654ea1fd56c833f333d0a589",
                        "timestamp": "2021-08-20 16:03:43"
                    },
                    {
                        "value": "9ff8797cc0af7792eb3777eaa15c5458110c3f2bdb51bb61e3c6f256c44277f4",
                        "timestamp": "2021-08-20 16:03:42"
                    },
                    {
                        "value": "b91bc68553ee8ce92c9ab04875b8e21703aeb7c63d9f2fe67a73a940c8150d8d",
                        "timestamp": "2021-08-20 11:33:33"
                    },
                    {
                        "value": "d441b6262d1915e1c32e85775622b2f2e3b755279f1b536d5b10eb2f14678e10",
                        "timestamp": "2021-08-20 11:33:33"
                    },
                    {
                        "value": "405c8fe1d7614acdd87052997f7aafaa2f81b6eabb1f163ff337f614a90eafde",
                        "timestamp": "2021-08-20 11:33:33"
                    },
                    {
                        "value": "5c6fbba6c71e8f32179d03a591f729e7ee5dbdaf9f89b1c476f01586625035ab",
                        "timestamp": "2021-08-20 11:33:32"
                    },
                    {
                        "value": "a589a306d9d181d95a51675287529dfa389824d40832742fbaf6d9f6db5998a3",
                        "timestamp": "2021-08-19 14:03:49"
                    },
                    {
                        "value": "69747996584aba2690d04958b5e2d6446107ae702a0053fd28c8073b4d7c8ad5",
                        "timestamp": "2021-08-19 14:03:48"
                    },
                    {
                        "value": "fb46d9b3de7581c551486adc2ae8c0d2b8fc2dcf049462e7a892981aa265227d",
                        "timestamp": "2021-08-19 14:03:48"
                    },
                    {
                        "value": "6e9ddd1d83e526efb6a597d46f95bfa07d09f2de7b4a71f2b99573cd45c924dd",
                        "timestamp": "2021-08-19 14:03:48"
                    },
                    {
                        "value": "b40312b973ddb1ec411375991f52c6d19204e650d90507445782aaa05bc02e46",
                        "timestamp": "2021-08-19 13:34:23"
                    },
                    {
                        "value": "937618b9f0559b09566c4f2f86275b04dc9de0978e0fa08b25869e246d87a9f9",
                        "timestamp": "2021-08-19 13:34:23"
                    },
                    {
                        "value": "300dd45e5b41e94c62a67a53d6ba458816711b5168e91d7a5b04493bd36c5f0d",
                        "timestamp": "2021-08-19 13:34:22"
                    },
                    {
                        "value": "6cbc8098614c094caf34a0eae5242f77ae55e6ff77184f6a5b708703698ccc1a",
                        "timestamp": "2021-08-19 13:34:22"
                    },
                    {
                        "value": "fbe3eac8deb8b145ad8ac555e27cef7d1fad66d2472f2a36a7d944cb11702520",
                        "timestamp": "2021-08-19 13:02:35"
                    },
                    {
                        "value": "a74c3058125eb148c1defd1fdd00b581cf662c4a564e515836a8445b0b8c6ee3",
                        "timestamp": "2021-08-19 13:02:35"
                    },
                    {
                        "value": "eef7bfbe59617838031db137e1c71c315dd465500fcebca0aef1d252422b4b7a",
                        "timestamp": "2021-08-19 13:02:34"
                    },
                    {
                        "value": "39e1002eaf485405155f98f77b331263ab1e6fea26623dd83029f9bcc58d3c9f",
                        "timestamp": "2021-08-19 13:02:34"
                    },
                    {
                        "value": "8bc80b212b0e625722edb58fa22d6a8e56ad344ecddc9e8ba18e740af7f20db9",
                        "timestamp": "2021-08-19 09:18:41"
                    },
                    {
                        "value": "42c87021e56190f67716d25a66a6542bd352a66c6c352d74c60af681a187d336",
                        "timestamp": "2021-08-19 09:18:40"
                    },
                    {
                        "value": "6c372b6fc3c5cb8c77ca010e9f3447cf663a1af8c5849783d5c7f9806182fc06",
                        "timestamp": "2021-08-19 09:18:40"
                    },
                    {
                        "value": "72a5e8f896e2a7586c854d068b07f6b5f8684a09aeefaece1bab8e78fe582766",
                        "timestamp": "2021-08-19 09:18:39"
                    },
                    {
                        "value": "cff2b230a7ac1b41f748b4ea56bc46657f57665790f0de9813786a8d2fe893b6",
                        "timestamp": "2021-08-19 09:18:39"
                    },
                    {
                        "value": "d67511eb78bcfb200fde21a96b6d57711cb4ff0ae8dc3526c8d159454c251cba",
                        "timestamp": "2021-08-19 09:18:38"
                    },
                    {
                        "value": "3cb62c9b4ec92c70df9795f481ccb5b50fd4f260441c23edcaf97c23396bf502",
                        "timestamp": "2021-08-19 09:18:38"
                    },
                    {
                        "value": "e2c11a82ce76ab32b7033c6d47081c6c44fe2288211fe0af6202f3333196cbe6",
                        "timestamp": "2021-08-19 09:18:37"
                    },
                    {
                        "value": "3c6a114257b10769398edfe3efa86e54dd3a60430372d5f845f1a60c7afb2acf",
                        "timestamp": "2021-08-17 18:04:05"
                    },
                    {
                        "value": "26563dccfc02bb19e03b7c0ed406bf1a8b55dabdd44148fe04e35ea00bd6f138",
                        "timestamp": "2021-08-17 18:04:04"
                    },
                    {
                        "value": "bb91ed3bec20b30d80263b48316773528103d23830b0cbe3a2fe29f85229399c",
                        "timestamp": "2021-08-17 18:04:04"
                    },
                    {
                        "value": "5112987fe0ee10f6d6fc846f009810a221c6bb4a3c38babab0f176af89c48a1a",
                        "timestamp": "2021-08-17 18:04:04"
                    },
                    {
                        "value": "b9c410e6c86baf7f355d2045a0fd5e3080f3a2ca9afbd319bd1c42485c22b9a8",
                        "timestamp": "2021-08-17 17:03:56"
                    },
                    {
                        "value": "5f8e21c31aeab93a045e2d72d3218f26698bd2aea6e4f6b9dd9e7cab4115b0ec",
                        "timestamp": "2021-08-17 17:03:56"
                    },
                    {
                        "value": "c1ce0e9e07a4a53c272931269c7a817fe292cc2fbaab0f14404631e323e1093d",
                        "timestamp": "2021-08-17 17:03:56"
                    },
                    {
                        "value": "c7779ddf9204c4f2ee97e301cfa35ed4c22222bd09299fd95f1eb999384009e0",
                        "timestamp": "2021-08-17 17:03:55"
                    },
                    {
                        "value": "22a3ccdeb9ae4b196461cdb81c895ae891e2149af03e44b6ce86c2a1bf062947",
                        "timestamp": "2021-08-17 14:03:57"
                    },
                    {
                        "value": "b46520a47de8b5916c8f3a7b708b50bca0c38e9d6905a2f62836fa2d2938d6e4",
                        "timestamp": "2021-08-17 14:03:56"
                    },
                    {
                        "value": "dfe96798a6065c99050d1cb964200874b40e3916f90e3caed35df9ace3dc3198",
                        "timestamp": "2021-08-17 14:03:56"
                    },
                    {
                        "value": "5c8d039da52a39b80531b80b28e53060c2bfefb747ef5477d100bb3c819c089b",
                        "timestamp": "2021-08-17 14:03:56"
                    },
                    {
                        "value": "88965fe324fadc62b6a3d21b17180c65ddd2fb8b4fb0d021f358979a3a393e68",
                        "timestamp": "2021-08-16 18:03:53"
                    },
                    {
                        "value": "fed35f5b22e1996801b5e03e435a48891c1bb6c15485dc6b7dd1aeb1479a1fa3",
                        "timestamp": "2021-08-16 18:03:53"
                    },
                    {
                        "value": "a5c90d291346a79872bcf63889a3db7fb0508dafe84ff01d6799d1ca3967f38f",
                        "timestamp": "2021-08-16 18:03:52"
                    },
                    {
                        "value": "741e54e8d4c95d3a939bea610b4805e417a0662e17e5811aa72466d74f0fe9b4",
                        "timestamp": "2021-08-16 18:03:52"
                    },
                    {
                        "value": "2289ed4365f6de6fbfc6b2faa52cc0e0e4f898468ba079b3f58e29d9a73e49c7",
                        "timestamp": "2021-08-16 13:03:35"
                    },
                    {
                        "value": "35a776da3e6d2d8bcd69a7427ab25846c233403372bf3ecb6055c252ae696766",
                        "timestamp": "2021-08-16 13:03:35"
                    },
                    {
                        "value": "f747bd198e4da88062447ad06fe45c9ebc14c17f5fbf332531a8bc489909e3c9",
                        "timestamp": "2021-08-16 13:03:34"
                    },
                    {
                        "value": "855dd7cf56397cb61245d06f6ed38576c71826737101275f66167986e602036f",
                        "timestamp": "2021-08-16 13:03:34"
                    },
                    {
                        "value": "bde6b61aba6c2b84c193ec7162f7c5349c33b9ac83834140910eea597b62fb47",
                        "timestamp": "2021-08-16 12:03:46"
                    },
                    {
                        "value": "984ad48db84dccbf4d978f50b0cad2c0f2eb4a256cc5f3b470facf3e411283ae",
                        "timestamp": "2021-08-16 12:03:46"
                    },
                    {
                        "value": "259e3b91615c56477ea088113187b3d4699ccc3b32b0ae31c5ea49e895d67366",
                        "timestamp": "2021-08-16 12:03:46"
                    },
                    {
                        "value": "5fe669ecbc820aa52d3fb572b96b7c1cadad169da50cf1a67d4268cd917b041e",
                        "timestamp": "2021-08-16 12:03:46"
                    },
                    {
                        "value": "7280419b73c5bd75551013c2abe327e15f90cb0f5d4de854bfa7bef5f8f92ad6",
                        "timestamp": "2021-08-16 12:03:45"
                    },
                    {
                        "value": "f238cfcb8b7c6943adc5c53239d427be96cfc96ba86716fcc208db4f5d724443",
                        "timestamp": "2021-08-16 12:03:45"
                    },
                    {
                        "value": "69c2d45dbc1fd0242d9a3770f0e52e0485c26feeae327e146ae92a5a9b5580aa",
                        "timestamp": "2021-08-16 12:03:45"
                    },
                    {
                        "value": "ea14c60647e0f94012f15bd4928092efb5c8bea83a8838a1ced94bfacee2a82c",
                        "timestamp": "2021-08-16 12:03:44"
                    },
                    {
                        "value": "cf21d2a6d20f50a7b6a04a4757c46b899a0c5d6ac2800f68c1ab410b49267569",
                        "timestamp": "2021-08-16 12:03:44"
                    },
                    {
                        "value": "f236d3c17eddd7b270030bd19051b43c8827af7925336611d0569e73c9b058b9",
                        "timestamp": "2021-08-16 12:03:44"
                    },
                    {
                        "value": "5131b99eca49a0694073f43f58543781fd6adecc63a0cd643a50686b4d3e001a",
                        "timestamp": "2021-08-16 12:03:44"
                    },
                    {
                        "value": "257a36fdd79cbf165caeda4a1efe458034d670b71060693fdb0d2a1bf0489aa5",
                        "timestamp": "2021-08-16 12:03:43"
                    },
                    {
                        "value": "cfd9bbcf27f8feb7ca69dcbed194dc6e09daf9cfd9cd691be85a250ecbd170f9",
                        "timestamp": "2021-08-16 12:03:40"
                    },
                    {
                        "value": "cf22ce4f2db96effa84c70504160296e478ab07442b2c1f9ebcff92783c681a8",
                        "timestamp": "2021-08-16 12:03:40"
                    },
                    {
                        "value": "44bfd2cf5a6b5d9a223ec46cd1527d3084226da59b309f213b0eeaab677129ad",
                        "timestamp": "2021-08-16 12:03:40"
                    },
                    {
                        "value": "3a30a00f6eab6a14476db7139c5512302b5fff48a3111ccb6ae8e0964213f8ff",
                        "timestamp": "2021-08-16 12:03:39"
                    },
                    {
                        "value": "04e127c5bdf94f075639d7f44badd25223f3ebeede44258367413d8463505020",
                        "timestamp": "2021-08-05 18:18:51"
                    },
                    {
                        "value": "57bcc23142e7398ee53fd5e374851444f18857c4d9f7e23daf4435692b6ba2dd",
                        "timestamp": "2021-07-29 19:03:44"
                    },
                    {
                        "value": "def021666e187281ebe68cdde170775c13c84472199f77ee0d62a1e3ee95f4fe",
                        "timestamp": "2021-07-29 19:03:44"
                    },
                    {
                        "value": "84679ca59603f405a5096114188af75d5dcc3680ef795e446bd358f48cf12046",
                        "timestamp": "2021-07-29 19:03:44"
                    },
                    {
                        "value": "f381ccf3a00a9282bc105c673587d4875282225bf18a70b8888383a9380ec285",
                        "timestamp": "2021-07-29 19:03:44"
                    },
                    {
                        "value": "f3272e7d0612d36b532d6a99a15fea8fb9c453188847a12b69d539719c0c8c16",
                        "timestamp": "2021-07-28 22:04:29"
                    },
                    {
                        "value": "925d0c4c1be3ff3e6157f61ddbdfd7eca48c25157c219b9fa33286e75251efe2",
                        "timestamp": "2021-07-28 22:04:29"
                    },
                    {
                        "value": "1086e2faa19287c271b669be3118a0509f3547cbe638e7f783d0c691be084be8",
                        "timestamp": "2021-07-28 22:04:28"
                    },
                    {
                        "value": "51c9e29ebe25067c055b664cacc4c4d46b8d19bddd488936c3bab19906311806",
                        "timestamp": "2021-07-28 22:04:28"
                    },
                    {
                        "value": "27572043b01a99f3901af4bd40faf03cd04e722e3fb7ba866ccdb3b2d3fabb11",
                        "timestamp": "2021-07-28 15:04:40"
                    },
                    {
                        "value": "a23aec0e70e6f6ebd027db61cafcf5f545b6b3ffb8a6e6fdb5cd157130c7dec3",
                        "timestamp": "2021-07-28 15:04:40"
                    },
                    {
                        "value": "ad3394481e48568f7e614cd62c8ebd4882e909ad021ebec237eed15217428db3",
                        "timestamp": "2021-07-28 15:04:39"
                    },
                    {
                        "value": "0cc7962edb5360efdaefae56eeee07f8c70aa2107663f92442df041509e82e93",
                        "timestamp": "2021-07-28 15:04:39"
                    },
                    {
                        "value": "f51f764b6ee4051c097c29478b9fe1bea52df1be495c236bfc622477533e5ccf",
                        "timestamp": "2021-07-28 10:04:10"
                    },
                    {
                        "value": "8c988a622b822f0fc226b928ab317dc7a6130b395f74a3e39c3443b275c93771",
                        "timestamp": "2021-07-28 10:04:10"
                    },
                    {
                        "value": "3fcc79e4c2132fb4b81bf5e6b3767200f5b73d26e115f6c239645d7b1a8301a2",
                        "timestamp": "2021-07-28 10:04:09"
                    },
                    {
                        "value": "e1f620a49978341460d102aefd71b13a0f3d36aaf8dfa042844984ad6dcfaa7c",
                        "timestamp": "2021-07-28 10:04:09"
                    },
                    {
                        "value": "7d65154a5dc05da45ebfe7b8a5bdb4858bf80812060257a5bde5d90ab12b23a6",
                        "timestamp": "2021-07-27 20:04:13"
                    },
                    {
                        "value": "1ea32ffb0d84a4c157e12e6a3bd153a3cf3bb878ec2ef474fb547ee6fc7e9cc4",
                        "timestamp": "2021-07-27 20:04:13"
                    },
                    {
                        "value": "38ba862149962bc5a10825a2b818391624cda439fcb3f6212b75d84eeeb4f70c",
                        "timestamp": "2021-07-27 20:04:12"
                    },
                    {
                        "value": "46241be04eb48d9eed1aeb8a809f8baeff44cc73c5e533ab1d266f5f1fcf275a",
                        "timestamp": "2021-07-27 20:04:12"
                    },
                    {
                        "value": "537a1b1e9a633875a74664967b2e62803f01b619fb26df9b4762b6795ee1b0ec",
                        "timestamp": "2021-07-27 09:04:53"
                    },
                    {
                        "value": "ed97e9802edd407c13fe0fa214582d2c4623797bb0c38b0b583a1d919d078284",
                        "timestamp": "2021-07-27 09:04:53"
                    },
                    {
                        "value": "56d324b70dec3c259864216d918929470e10dc5582ae70f238aaad4887358d7b",
                        "timestamp": "2021-07-27 09:04:53"
                    },
                    {
                        "value": "b9b1a3245f7aa2f9fadc4cff8343866030a63f297167df00ca0aa4284f453be1",
                        "timestamp": "2021-07-27 09:04:52"
                    },
                    {
                        "value": "fcc78fe76328bf058fd0c46b7ed049a254cd20449a756d325cac3119a68fcbec",
                        "timestamp": "2021-07-26 14:05:05"
                    },
                    {
                        "value": "a195d9091ef3b62929cd8637728a190bd54a80c1d4fa89680e9b452677dcb934",
                        "timestamp": "2021-07-26 14:05:04"
                    },
                    {
                        "value": "a65f11cebbe8a9a410691796e387ddb4a507e5d4638f15d0df0145313ac6dcbd",
                        "timestamp": "2021-07-26 14:05:03"
                    },
                    {
                        "value": "ac4d23b56b2aac65756dafc7d6ff505ba986f40410370ca4c094f0530e399d79",
                        "timestamp": "2021-07-26 14:05:03"
                    },
                    {
                        "value": "296103d2acf1d73c22a5d65a93bb18d9a3e41f256dcc9e5a372dc545fbf6c4db",
                        "timestamp": "2021-07-26 12:04:35"
                    },
                    {
                        "value": "b7bf3bc59d731b95a02ef69a8b25e494e756917eff9f1f9fdaa9204badf79408",
                        "timestamp": "2021-07-26 12:04:35"
                    },
                    {
                        "value": "d2ebab1807dd44bad7b61ac4b53e5d4e8dcdd1daa20d521c778400610fc1a252",
                        "timestamp": "2021-07-26 12:04:34"
                    },
                    {
                        "value": "e72c5f33563f617ea0d884d744229f428722f8710ea138d2beba01cbae8dfd8b",
                        "timestamp": "2021-07-26 12:04:34"
                    },
                    {
                        "value": "777099a02f34b28dc78e4f5aebe54f19ee391449b8648f611c6cf3c0352f9ee8",
                        "timestamp": "2021-07-23 18:03:59"
                    },
                    {
                        "value": "84667bfe0d58de6a56f1448d888df63d0594c60b8d62a75352374c19549b52ce",
                        "timestamp": "2021-07-23 18:03:59"
                    },
                    {
                        "value": "51c392870e9f21df2154b4e68a901ca1b5d9fccdcf00a4e6fa60ef07b4dfc541",
                        "timestamp": "2021-07-23 18:03:59"
                    },
                    {
                        "value": "1e9612e163c6f128af6c57cc01e7f8871fa702bd70a02d9593361be87c052114",
                        "timestamp": "2021-07-23 18:03:58"
                    },
                    {
                        "value": "90e7c97ea4917a6efb5c0a69bd6f481b1a5023d6f8ad0f22d123c417edff8a68",
                        "timestamp": "2021-07-23 14:04:14"
                    },
                    {
                        "value": "9ae702c9e46c101c73bf7914b4862026d5faffba8fab559fa03e03d2015749e2",
                        "timestamp": "2021-07-23 14:04:13"
                    },
                    {
                        "value": "ed1a7345c9e845ed31646e774cf4205e24b4a6bced4f3231929b49d857ecdf85",
                        "timestamp": "2021-07-23 14:04:13"
                    },
                    {
                        "value": "5041d57d5dd80e9f9385988497c91f8162b003980a4bc5eec30e35a8d6eccb1e",
                        "timestamp": "2021-07-23 14:04:13"
                    },
                    {
                        "value": "cb014bd3f7b9e7813000afddfe00a41e94780ee6489d93e8449cce8c9ed91c5a",
                        "timestamp": "2021-07-23 11:04:11"
                    },
                    {
                        "value": "9bf839cfc48616a6ad5e68ea81bbfc77c5993a06bb72972d56780df023f57cd9",
                        "timestamp": "2021-07-23 11:04:10"
                    },
                    {
                        "value": "b5c47964271578c767ebb7c3bfee10cda45464043d6e2879408f138da8031cf4",
                        "timestamp": "2021-07-23 11:04:10"
                    },
                    {
                        "value": "d6fd7e7680becb5cd6c7d55947ffcb292df39e7f070367a81577700997c16779",
                        "timestamp": "2021-07-23 11:04:09"
                    },
                    {
                        "value": "b506bb786b2b45d252f9886ad94e63cb60b60544dade0680b096f80c84cada7a",
                        "timestamp": "2021-07-23 11:04:09"
                    },
                    {
                        "value": "7712bd8e688370cdf586d604192cff97076b02f7eb676fa3ead70f5e55dff20f",
                        "timestamp": "2021-07-23 11:04:09"
                    },
                    {
                        "value": "c6fe9904fb31dff2b1dd5c7c949ce450c8468f9c2eadddee5101fec2b0e39635",
                        "timestamp": "2021-07-23 11:04:09"
                    },
                    {
                        "value": "af58db12288c548478a81e91b4e288ede34671f2404da89f8250b14e221bb12f",
                        "timestamp": "2021-07-23 11:04:08"
                    },
                    {
                        "value": "6e1bb0f00895ae58fc797cc5c55ac7a2cc465f8f604a5d9aa646ddc27806420e",
                        "timestamp": "2021-07-23 04:04:14"
                    },
                    {
                        "value": "d0f6f28c586b78dfbc7d4e6c277c20761c9db38e0cd059807be5252b52d10660",
                        "timestamp": "2021-07-23 04:04:13"
                    },
                    {
                        "value": "994f99037072fbea77a376832818fec2bdaf577a09b1936a7285e38ace5d8e4f",
                        "timestamp": "2021-07-23 04:04:13"
                    },
                    {
                        "value": "7ff8da221f76a27a09d3cf6be17e7f40cf74c98fc8513ec8dc5d72ee34e75a5e",
                        "timestamp": "2021-07-23 04:04:13"
                    },
                    {
                        "value": "b1ea67aa792591a3a7fe1e0666c1d156e33a225742e9af401d92cbc46e24ec3f",
                        "timestamp": "2021-07-22 16:04:33"
                    },
                    {
                        "value": "4dc8cb12314311a3bf1b1afa5cc5483284fda573f18c15ab0fef18b7b9ef9f98",
                        "timestamp": "2021-07-22 16:04:33"
                    },
                    {
                        "value": "a0c7b3d44a5cfcda917fc80c099da5ab3de582ff7c24f1373b4bd25f88d61e52",
                        "timestamp": "2021-07-22 16:04:33"
                    },
                    {
                        "value": "a07969163d924c0ad2c484a4c78678ac5f8c518a7e4bbeda9487f81185770cf2",
                        "timestamp": "2021-07-22 16:04:32"
                    },
                    {
                        "value": "e5e247ec942e77762120486c7c5b3dd2f4c600f9ca70037ddf4e5d99d5126806",
                        "timestamp": "2021-07-07 15:24:59"
                    },
                    {
                        "value": "2b6528357eb3d0c128764a255be25b3a6ccafe75047cbb925de4c1dd0289bdb8",
                        "timestamp": "2021-07-07 15:22:41"
                    },
                    {
                        "value": "14e50f20e1ade011dc7a2bb7dff021e709f5c8b9cd231b443375be8f73dd855d",
                        "timestamp": "2021-07-07 14:03:34"
                    },
                    {
                        "value": "959c3edc9436a6637806ae12bda821201479141d7da43cea0a47d25b9a6f1aba",
                        "timestamp": "2021-07-07 14:03:33"
                    },
                    {
                        "value": "fa5314d7ed599d8ff5bd77f3e0d7ac0988ba1352757bd7715c375ae8009f8107",
                        "timestamp": "2021-07-07 17:13:10"
                    },
                    {
                        "value": "6897103cb308a216378f44599cf7f6aa885d904a41136a0143ec40d05a3edc66",
                        "timestamp": "2021-07-07 14:03:31"
                    },
                    {
                        "value": "2525c088e209b631257492bce0c65ebc62f399d87a7dc408a40df0dbc973cd2b",
                        "timestamp": "2021-07-07 10:03:55"
                    },
                    {
                        "value": "7c07fbd06c9c5f6cd9f124641c2ec7af04e69e7b94ec9a4fc4c1c9ff3e058ddf",
                        "timestamp": "2021-07-07 10:03:55"
                    },
                    {
                        "value": "936070bebeecb98fa897dd9b673c2e3e566d3a4d1a975e6bf819582e9f4d0bbe",
                        "timestamp": "2021-07-07 10:03:55"
                    },
                    {
                        "value": "b11604e13fd54cde810f2dae614c334b6c1315cfa22e8e196934e375360ce7dc",
                        "timestamp": "2021-07-07 10:03:55"
                    },
                    {
                        "value": "f365c491faaba01943e7ab894d34fccacbb9d2e8b9bcbe9f6eaf0e47aa420329",
                        "timestamp": "2021-07-06 16:03:35"
                    },
                    {
                        "value": "f51577caa562fa4ddbe0882cdc469c1d701515af25662bc66797d79032d0d3ee",
                        "timestamp": "2021-07-06 16:03:35"
                    },
                    {
                        "value": "e6240df97fbd4caf6de8daf69465e70b2eeba604738b9b2ae6a978494a614dec",
                        "timestamp": "2021-07-06 16:03:35"
                    },
                    {
                        "value": "78358ad26994c0034891837f86b1b80355e396878e875b393e76a3780a992fad",
                        "timestamp": "2021-07-06 16:03:34"
                    },
                    {
                        "value": "b120686883591f5a09157eb0fbfb502d4ee834ca717f9b77ab6bd9d0f85eb353",
                        "timestamp": "2021-07-06 07:03:44"
                    },
                    {
                        "value": "85357994a91c91c084eee5b52997631a7fd879f5fd0523bb2b01c9e1c7beb531",
                        "timestamp": "2021-07-06 07:03:43"
                    },
                    {
                        "value": "58ed70243fe9fb36f2a8b83311a5f22e6ba8a0b5f2635512ea2d6946736bbd67",
                        "timestamp": "2021-07-06 07:03:43"
                    },
                    {
                        "value": "72793e11a36bb3d0e87f0f50359f96647d738014a1bd282968fe6ed41102070a",
                        "timestamp": "2021-07-06 07:03:43"
                    },
                    {
                        "value": "3ebbcf6eaa2d6463241bea296bbf5f445dc430d105018e4738c25d59fb992b17",
                        "timestamp": "2021-07-05 16:03:30"
                    },
                    {
                        "value": "da805e8b0f86bcc67aeeb038fc69ef5551b4de2b22105aef39d534e051f57d4a",
                        "timestamp": "2021-07-05 16:03:30"
                    },
                    {
                        "value": "9c05cf210478ac94384b732c4390557d95d7f20db77805384538bb5735d27fb8",
                        "timestamp": "2021-07-05 16:03:29"
                    },
                    {
                        "value": "0ad43fd8a30f20f600092744496b9008b6293f1c845a567d8b9ad9b9537e16cf",
                        "timestamp": "2021-07-05 16:03:29"
                    },
                    {
                        "value": "1119f9ef8b8482993f088fdfb5426da688d8e41149c6a6f9e84387accb72440c",
                        "timestamp": "2021-07-05 06:03:47"
                    },
                    {
                        "value": "c2874fa8a593d805c31340651b9ebf7308e6db8e2c33baca8a33188d91ef8605",
                        "timestamp": "2021-07-05 06:03:47"
                    },
                    {
                        "value": "5bc32935da5278ae6df27806a14cd8e9771fc9f9615fc49cc5e01fc46c40f6f1",
                        "timestamp": "2021-07-05 06:03:47"
                    },
                    {
                        "value": "c139bf9002e3b5d1db06d8af94d3a19621858c8b88d0f1dc4634a8f5b3b22086",
                        "timestamp": "2021-07-05 06:03:46"
                    },
                    {
                        "value": "3979a76f278cc417a50932f048516b0168237b6b4ca108ef779fec69b1bc0c0d",
                        "timestamp": "2021-07-02 20:03:31"
                    },
                    {
                        "value": "e6d69ce9f74d56db214999c63a55b0259c72f03f5bf93abc23af12c4b1b3c66b",
                        "timestamp": "2021-07-02 20:03:31"
                    },
                    {
                        "value": "43481b45e1d5385e08cdf204e0ffa35d7c0c25d254de88f868508220066eccac",
                        "timestamp": "2021-07-02 20:03:31"
                    },
                    {
                        "value": "e353357d1b27fe4845d04d1927ad24b4c2963908f7e942d502cb1c5067677934",
                        "timestamp": "2021-07-02 20:03:30"
                    },
                    {
                        "value": "d6f156a84a5c0da444494267e09a109f164e38f20c82a3cd630ea25a46460b33",
                        "timestamp": "2021-07-01 16:03:30"
                    },
                    {
                        "value": "660b2eb5749963f118e49c2f7f3b253b1563a9f99063ba29122f2b6bb72cb6fc",
                        "timestamp": "2021-07-01 16:03:29"
                    },
                    {
                        "value": "47ef818469048011bdb7b569f7d81d2c7c2a0c371ce01441b7072a0ed15fd477",
                        "timestamp": "2021-07-01 16:03:29"
                    },
                    {
                        "value": "ce193b541af315ade3f71fccac1af027c2f6bd288ddec3b3cb4fcb49d4a24d13",
                        "timestamp": "2021-07-01 16:03:29"
                    },
                    {
                        "value": "9835b2b9c7394504010b9737e8350845102feb9f69b9b56e7bdc9f5add98d590",
                        "timestamp": "2021-07-01 11:03:22"
                    },
                    {
                        "value": "aadd085a8b6cb80d3cf5375619ec3a498673707bd9ae3f5cf53eeb7c089c3c65",
                        "timestamp": "2021-07-01 11:03:22"
                    },
                    {
                        "value": "e2ee9ae1c0a60cde24b23313927a75e890b3cba57115ebcc9ac886e4eae48945",
                        "timestamp": "2021-07-01 17:47:35"
                    },
                    {
                        "value": "450047405e1508fda3cc27042f05ec5337e69dca04e00e976f490d4bd353e158",
                        "timestamp": "2021-07-01 11:03:21"
                    },
                    {
                        "value": "6ab74dac52fc7a4c6e1f89ae04dcfd4d82f7aef0d96926d691905378ddbceb68",
                        "timestamp": "2021-07-01 07:03:12"
                    },
                    {
                        "value": "93eb2094dae2d9f36e52bc880594818e203973d1e62e2b2db76cd39804ff0323",
                        "timestamp": "2021-07-01 07:03:11"
                    },
                    {
                        "value": "2c70f3d17534a1dc3b6028dbb806ce505464bc9178777b455a5c22170db52b5d",
                        "timestamp": "2021-07-01 07:03:11"
                    },
                    {
                        "value": "d38491c76eda29b3135557f28eb4e2fa15ee55d54c15452f9221e82a5b489c5e",
                        "timestamp": "2021-07-01 07:03:11"
                    },
                    {
                        "value": "38539e1921abdc55da699d06a32fb043610cfe8c13eb1004dc8aa508427c6809",
                        "timestamp": "2021-07-01 07:03:11"
                    },
                    {
                        "value": "005cdcb32ac1705413e9dd2049e791a6eb2fb22274ce4fece226f9010b6cff02",
                        "timestamp": "2021-07-01 07:03:10"
                    },
                    {
                        "value": "b48c9a485817a4bc1dad97df8032cb5dd8e9becc5820f96bc761e77073ea430f",
                        "timestamp": "2021-07-01 07:03:10"
                    },
                    {
                        "value": "a3fba593fd284298c6c432d6c913a6011a031a5d020bbcc2e41bcca6e7173c98",
                        "timestamp": "2021-07-01 07:03:10"
                    },
                    {
                        "value": "60d3a6a96815b235c93bb340cd338fbdf8a80a3dee023a37503550eb953f5e78",
                        "timestamp": "2021-06-30 20:29:56"
                    },
                    {
                        "value": "9015a3d36c6f378e870487b60ae7854376f55d0959444303691fb4f51d7b7420",
                        "timestamp": "2021-06-30 14:03:41"
                    },
                    {
                        "value": "52f12a925f53adafd752c33413413ea3928a53f124e9530909107b57527d75fd",
                        "timestamp": "2021-06-30 14:03:40"
                    },
                    {
                        "value": "f365e35721195c232b896252d26c44ec2d2fee83ded28406c453d97c6d3f4734",
                        "timestamp": "2021-06-30 14:03:40"
                    },
                    {
                        "value": "87affc8fa7f664a9846d6b094983be931abd8c612cc528266e00428dadc17ae4",
                        "timestamp": "2021-06-30 14:03:39"
                    },
                    {
                        "value": "5fb06313c4e48b534bb28f7de1ec57d84440bc327c58fe7db49d8232485a19e6",
                        "timestamp": "2021-06-30 13:03:21"
                    },
                    {
                        "value": "d933001638f194baed0596efe53af5dc534ad6f5177aa8aacf2c25188fbdd2f4",
                        "timestamp": "2021-06-30 13:03:20"
                    },
                    {
                        "value": "8574413d2c5f964fd6887ca5e0e190bccf4d55982cde9d72d376cba621a02719",
                        "timestamp": "2021-06-30 13:03:20"
                    },
                    {
                        "value": "900009eb072aa1eb5377fdd09e5a4d5dda9e2755a8934fc998cc1243ab7c8765",
                        "timestamp": "2021-06-30 13:03:20"
                    },
                    {
                        "value": "1bcb33eed3dc2a21fba05a84a06d63d2313c4b69e0eb6db6e781ffa7a7732b03",
                        "timestamp": "2021-06-30 11:20:42"
                    },
                    {
                        "value": "25839ba93d33dda960d99110ae98f42e89056233264f11d18b65727a79e4bd62",
                        "timestamp": "2021-06-30 11:20:41"
                    },
                    {
                        "value": "74fde8074cd3435ffd7c24532d01feec52bb351eb07aa9849b864070c81de6ec",
                        "timestamp": "2021-06-30 11:20:41"
                    },
                    {
                        "value": "94ad76a6e3bf3b13f3703814b4eb47bdf0c64a8aac9cf74d585d1b1bc84962e3",
                        "timestamp": "2021-06-30 20:29:56"
                    },
                    {
                        "value": "41c204299b933164363a2d1df065acab700bb13cf5065b6b000d9783fea0e73f",
                        "timestamp": "2021-06-30 10:03:21"
                    },
                    {
                        "value": "33ed2fa9862dde15492077b05f4bb61c462c1d30e9a5e76c2ca76479c01f8049",
                        "timestamp": "2021-06-30 10:03:21"
                    },
                    {
                        "value": "1273a548df057bfaafa975b34de3551362e91faaaa78b0bcf764c67f225b423d",
                        "timestamp": "2021-06-30 10:03:20"
                    },
                    {
                        "value": "e3f49f0b8d0d27770f262483e2931ab3c5d7683d2d2e086e97e99b1100269589",
                        "timestamp": "2021-06-30 10:03:20"
                    },
                    {
                        "value": "2218c2781b84ca81463dd54cc809c41ae2b7fc811ea54d6109623b73b03cddf2",
                        "timestamp": "2021-06-29 09:03:14"
                    },
                    {
                        "value": "c90d8ecc0b488407ecb9555db2427952fe2533155fae8c2c5568145100c7bf5d",
                        "timestamp": "2021-06-29 09:03:14"
                    },
                    {
                        "value": "43e566121edcc03c90a83a05e472cd037c201e6565c1e5607f5a112e0adb13fc",
                        "timestamp": "2021-06-29 09:03:14"
                    },
                    {
                        "value": "45b4767221a7acd960ed92deb7195b4c5196f1ca500ccd7220d3f1f89c2f55c0",
                        "timestamp": "2021-06-29 09:03:13"
                    },
                    {
                        "value": "940049a73f4604611186b3fe1f93bec8328d4ca2c486499d5be25df5b5d51ca9",
                        "timestamp": "2021-06-29 08:03:09"
                    },
                    {
                        "value": "2ac400e585ea2efac44e3a2b52f10928e851f568d3f3dda0f7ba679642cabbda",
                        "timestamp": "2021-06-29 08:03:09"
                    },
                    {
                        "value": "3fc1fa698d3bd51eebdd706d4fd8c20ee03a0edb0266a27abac9787b9fdb6b2c",
                        "timestamp": "2021-06-29 08:03:09"
                    },
                    {
                        "value": "e780eec0d603f5a419530a5d2c6fd85c664ac0cac7f97ba1136263fe57ea5a64",
                        "timestamp": "2021-06-29 08:03:09"
                    },
                    {
                        "value": "d2cef7101e963e511b8440b092c44360be0fc6086aa838ce278cee732464b5ee",
                        "timestamp": "2021-06-28 13:03:14"
                    },
                    {
                        "value": "67faee2d642c9080510736d7ca294f611ec10c5dbfab5693ec03b779685e6531",
                        "timestamp": "2021-06-28 13:03:13"
                    },
                    {
                        "value": "2f5e94a70ff11f8d1a1475f0bba698c794da6e5ab1475f7bdce515720509f3f4",
                        "timestamp": "2021-06-28 13:03:13"
                    },
                    {
                        "value": "fdd0267b7a2fc993e613cd13de583f4c257467338134d5323ce49c0ad0f02fb6",
                        "timestamp": "2021-06-28 13:03:13"
                    },
                    {
                        "value": "62f6894989c25c4cd7f0705aae389bb3a0abaf579afdbde36a3a47c8acc5e9fc",
                        "timestamp": "2021-06-26 10:04:43"
                    },
                    {
                        "value": "432b598b280c8d89802ab7b26e239e9a779048e48704087f3a347962554ec144",
                        "timestamp": "2021-06-26 10:04:42"
                    },
                    {
                        "value": "23022e88812cff7f0b615fd48b58f0d971f0559d0275380f87eaa3bf195e7e22",
                        "timestamp": "2021-06-26 10:04:42"
                    },
                    {
                        "value": "e2c0e25768a1b24398536bf921e5e86f9137ecc08e9eba2101fd5213b3ec0fcf",
                        "timestamp": "2021-06-26 10:04:42"
                    },
                    {
                        "value": "afe2f14aefa056096d2c66789e0d7f304d64f7d4599cacc2f1c6170b3cbd70ea",
                        "timestamp": "2021-06-24 16:03:00"
                    },
                    {
                        "value": "799e54b28318ff884e20beae8e0fb5b7290b9c136f4b4e0e38765fb8792bb3e9",
                        "timestamp": "2021-06-24 16:03:00"
                    },
                    {
                        "value": "f6c873080547760ab6e3e7d4b59c74cbfb9151275e7aa6f888d251f4549c7e69",
                        "timestamp": "2021-06-24 16:02:59"
                    },
                    {
                        "value": "d26002db103997db131096ea22189a0f4f2a5a17fea7d100796d5148f1815447",
                        "timestamp": "2021-06-24 16:02:59"
                    },
                    {
                        "value": "4ffb11d057d5b6454841beb29b6f50021b0d794ddbde0a062f367b812c04267e",
                        "timestamp": "2021-06-24 04:03:36"
                    },
                    {
                        "value": "e6a0f307c9bec6b31f0002726d75ae3d5ced8ffe3b6fce869fe12b8061f642d8",
                        "timestamp": "2021-06-24 04:03:36"
                    },
                    {
                        "value": "331571607fd6c804a68007c042a7140ca240b7b0613c57ca62a618d4f47a7f86",
                        "timestamp": "2021-06-24 04:03:36"
                    },
                    {
                        "value": "38ceb9e9a091184391f1776166ab18830b6e889f407984707dfac13fd91c643f",
                        "timestamp": "2021-06-24 04:03:36"
                    },
                    {
                        "value": "491656b0591781dd2ba2a8a872a635c2da42bcdcc35df76f43910e6a2bb65635",
                        "timestamp": "2021-06-24 03:00:24"
                    },
                    {
                        "value": "baaea18671569e4053bee96d4982cc76f5721a9626ce914e774451dac4ee79af",
                        "timestamp": "2021-06-24 03:00:24"
                    },
                    {
                        "value": "e84413bb452e635af3d03acc8075a5689cb631bdec7c2090a80bb3f8c56d8ded",
                        "timestamp": "2021-06-24 03:00:23"
                    },
                    {
                        "value": "b28aa93713d1cbaf0f39a2ad23a08c0adcfb615b590c94dcaa751a3a11e7c455",
                        "timestamp": "2021-06-24 03:00:23"
                    },
                    {
                        "value": "047ca53bf616a52ba6946c0a6cf6676a3030b0baf6d987b6268203caebd87b74",
                        "timestamp": "2021-06-23 14:03:21"
                    },
                    {
                        "value": "f727a901cd659b9350614fcb971e984bf15a28f3362e0918ddd45182391e3804",
                        "timestamp": "2021-06-23 14:03:21"
                    },
                    {
                        "value": "ebf3a8928d8bbaabfec8b7e93eb0f48469a665bc0b15d9261218012378ffb9c1",
                        "timestamp": "2021-06-23 14:03:21"
                    },
                    {
                        "value": "d871dbfcb91b7ae2e96e229dbe989a635a4a62e40c0a236e5d322169ee2e35ad",
                        "timestamp": "2021-06-23 14:03:20"
                    },
                    {
                        "value": "ea366fcdd980dc469282d3948c893225b7b72895253d48a62726a11577831dac",
                        "timestamp": "2021-06-23 06:03:00"
                    },
                    {
                        "value": "9645c2e0c0a563352b00d51fdc77bd8bd37d5ab37bb4ae56fc667d48e2a7f1c3",
                        "timestamp": "2021-06-23 06:02:59"
                    },
                    {
                        "value": "46971829178d9367270b59a8f0a033f4a73623b6313416a8d2c54cc8f6a762fb",
                        "timestamp": "2021-06-23 06:02:59"
                    },
                    {
                        "value": "b9b6a49f239e763796dbd664bf343284d5edd47c581c31e0240cf046dea0b585",
                        "timestamp": "2021-06-23 06:02:58"
                    },
                    {
                        "value": "c5a037db1eb94cd7d2c7c6e5b12c172b0273a6ce0327679c54636eb126583cdd",
                        "timestamp": "2021-06-22 14:03:01"
                    },
                    {
                        "value": "57c4a7a4fb7a49a46f76ac7b6129cb364464e3312eb1111cf84ee4d254b553cf",
                        "timestamp": "2021-06-22 14:03:00"
                    },
                    {
                        "value": "12fbb133afa686a29a8f474db034e61bb14b54146694a8993c61d28990cb634f",
                        "timestamp": "2021-06-22 14:03:00"
                    },
                    {
                        "value": "09668ab48f99635ce9f0daa0c0e15994c2404cbb22ca2c3e23e56c5c0e45215b",
                        "timestamp": "2021-06-22 14:03:00"
                    },
                    {
                        "value": "9aa8252b937135e3a3cb5abe2e13043cecb52f6d1d54024a7a7fa68df9dee3c6",
                        "timestamp": "2021-06-22 07:03:06"
                    },
                    {
                        "value": "630a0c92c595d66a3ff4118f63f841bdb3c6c4a83b9daeb384b76c3d3b225e09",
                        "timestamp": "2021-06-22 07:03:06"
                    },
                    {
                        "value": "473ec4f2b7a198ff36e66b86cbc05848883b4dffeaacb8b9c97e67e88e977986",
                        "timestamp": "2021-06-22 07:03:06"
                    },
                    {
                        "value": "45887dd4a26f6b80612ab2a6cff987cdc97a9aa900b4858910f8d67ff6ad1551",
                        "timestamp": "2021-06-22 07:03:06"
                    },
                    {
                        "value": "6748f41ab67125021bd34e44c6bd2e1e968564f779a429bedd5ce49c106a3b9a",
                        "timestamp": "2021-06-22 07:03:05"
                    },
                    {
                        "value": "5ae912c556f676264f800d3ab31aa932564b2dde8fae76f6dbeb8d568f92aee5",
                        "timestamp": "2021-06-22 07:03:05"
                    },
                    {
                        "value": "1fc7c86df7aa45224f6c8f4a94513663dfe77dc79603a0c1325736c376aa68e2",
                        "timestamp": "2021-06-22 07:03:05"
                    },
                    {
                        "value": "dd53a2baa54b7a0e0bb27810182013103b594b59bfd35367baf2d3d0a8e22ce7",
                        "timestamp": "2021-06-22 07:03:04"
                    },
                    {
                        "value": "0785fec692130b60eb979790a9cee8fc850af93ec85f31e6674d4e5c7e93a02e",
                        "timestamp": "2021-06-21 20:08:48"
                    },
                    {
                        "value": "fb7d5227b9da50f48de7734b75e1445bcb9c6606906addf5169c4c962c393298",
                        "timestamp": "2021-06-21 20:08:47"
                    },
                    {
                        "value": "13bc5cba59d14de0d3de000f0938c273ab3a447af28e4f33aa5e1ce90275ccd0",
                        "timestamp": "2021-06-21 20:08:47"
                    },
                    {
                        "value": "772da2952a628f5dc13843ad2330107ee63ce6b73811473d6fa30284dcf12c65",
                        "timestamp": "2021-06-21 20:08:47"
                    },
                    {
                        "value": "31e003a71876d261fd597e44ec871a6d4de654059a6dca3bd669c6dfa36a6767",
                        "timestamp": "2021-06-21 15:03:09"
                    },
                    {
                        "value": "3026185f9dd7b26700a92b8d5d2eb94b8f7f246b944fcb49c8e8bdc41c2c6094",
                        "timestamp": "2021-06-21 15:03:09"
                    },
                    {
                        "value": "66ddc22758b3f4f0099baf9a76189c69dca751b5076d60554a350065fc998ea0",
                        "timestamp": "2021-06-21 15:03:08"
                    },
                    {
                        "value": "2bd188fe68bcdc1bb9a5294dc6e3f598f61167233f23842addf17cc7f711db3b",
                        "timestamp": "2021-06-21 15:03:07"
                    },
                    {
                        "value": "17dddb2e6db0aa7d67c0e63f1129dde91f471fb6c5ce41d1e1574d8403ecd1ad",
                        "timestamp": "2021-06-21 09:03:26"
                    },
                    {
                        "value": "556900b033c6969b8c33c7fd00a36e94561acc33357e845876abf791ede3ba27",
                        "timestamp": "2021-06-21 09:03:26"
                    },
                    {
                        "value": "1b7b0ee9811587f5a4402008e994f9da8eecca2d61c2818c2747662b88697928",
                        "timestamp": "2021-06-21 09:03:25"
                    },
                    {
                        "value": "42bea834ef3a9940c9a488f2d7d10b692ed8e30358a0ac3ea681c4a5e2960be4",
                        "timestamp": "2021-06-21 09:03:12"
                    },
                    {
                        "value": "6b52dc3f5c69cbf8918c30a681f4c3db44cc33e1a56081ee0947b8414a5f7218",
                        "timestamp": "2021-06-18 13:03:36"
                    },
                    {
                        "value": "6bb51f60644e3c9ffe0cf3bbc14d1c2bce55963640ee72631479485d6d0f7fc3",
                        "timestamp": "2021-06-18 13:03:35"
                    },
                    {
                        "value": "ae894e1cebb5dcb29c64c8be3157beb1bf096e9720efb6cb976c77aaf406bace",
                        "timestamp": "2021-06-18 13:03:29"
                    },
                    {
                        "value": "f17d319801c6a4877cb0076e5dcfd25fdef7c8b093a9751d93a2e13bf14c0330",
                        "timestamp": "2021-06-18 13:03:11"
                    },
                    {
                        "value": "2c9627ff5eec8b6a6f651091fa3bc3f44a32baf882e8c8ce89e089648af53481",
                        "timestamp": "2021-06-18 07:03:10"
                    },
                    {
                        "value": "b9cf4ce7fc7e9291433169038a63f0f4e3d36fb1826cda150ea52b2257ac7c12",
                        "timestamp": "2021-06-18 07:03:09"
                    },
                    {
                        "value": "c308169a026be95a659f89ea08e71093a5376b00b2e9a444d0659b1c4a2c2432",
                        "timestamp": "2021-06-18 07:03:08"
                    },
                    {
                        "value": "9c40045e4cbcdbb4e471da75ebfb077b0d12408a88aa1e925c6ba19fac1c8165",
                        "timestamp": "2021-06-18 07:03:07"
                    },
                    {
                        "value": "cbd8d7c3cf92798b8306074a078a94b84cb49a0db60eafc22d277231a23d7fda",
                        "timestamp": "2021-06-17 13:03:19"
                    },
                    {
                        "value": "f1a93c670e9820435a8ab736e57531a15833b625173adae64674e121be93d386",
                        "timestamp": "2021-06-17 13:03:19"
                    },
                    {
                        "value": "a168ed4d6b93dabe7293f6138dc609c6acaf57b2533e722b7035fada9b01c783",
                        "timestamp": "2021-06-17 13:03:19"
                    },
                    {
                        "value": "df12fcfd78ebdce5120e542266b69d533bc8d7e899558bdd7274f89820e818a7",
                        "timestamp": "2021-06-17 13:03:19"
                    },
                    {
                        "value": "2cc8b68aff95a623ec9c5b66e691346a4de00145f28a31125ae68442cee44201",
                        "timestamp": "2021-06-16 12:03:08"
                    },
                    {
                        "value": "82c32dd8462adfec60639b321066c7f9a9e5377dfd442bcf2537a036e8ce7218",
                        "timestamp": "2021-06-16 12:03:07"
                    },
                    {
                        "value": "1bb79d3f58130c38c2d1c54737aaa69bfdf5693cf6177efaac78377020b86ad6",
                        "timestamp": "2021-06-16 12:03:07"
                    },
                    {
                        "value": "49cda865e2b759eae231f9b72cf551b2977fdfa3e0b8762883235915929d318a",
                        "timestamp": "2021-06-16 12:03:06"
                    },
                    {
                        "value": "7999c101e45e36cce5ee7c2f99954290504f1f989c60498b82c63a7e30dfabb1",
                        "timestamp": "2021-06-15 13:03:16"
                    },
                    {
                        "value": "c1ae2d24ab8b20108a9880102f1581e2e02ae6305119ef0bdf3141a0330f0808",
                        "timestamp": "2021-06-15 13:03:16"
                    },
                    {
                        "value": "fe688e4ea10286585515b497ff637cddfb0525f802afe8d1ddfcdcd1d6f0ee7e",
                        "timestamp": "2021-06-15 13:03:15"
                    },
                    {
                        "value": "a7d608238504263bc730a5744ff6808c78d3003c658db1eec8a30ffd5152f257",
                        "timestamp": "2021-06-15 13:03:15"
                    },
                    {
                        "value": "529185435a5f507c6ee6c2479d4d49b44ceff51ef0a7e0fed9306da8ce0a601a",
                        "timestamp": "2021-06-15 09:03:13"
                    },
                    {
                        "value": "0da92ee5ab7eeb708288a5738697bf61857dfdc9ab3115dbb9e94392ea786696",
                        "timestamp": "2021-06-15 09:03:13"
                    },
                    {
                        "value": "f5adc03501985371e10c415d5687e04bcc51d887e2bd6c52f10aa89fd488f479",
                        "timestamp": "2021-06-15 09:03:13"
                    },
                    {
                        "value": "94827e12d128626a8d64286432a73293f76cb45c1f523ff0ad7e67b90802a123",
                        "timestamp": "2021-06-15 09:03:13"
                    },
                    {
                        "value": "40a2c949e7545544f4eea971311400c1aa7ea20524a9b2036346ea475407f95c",
                        "timestamp": "2021-06-15 07:03:14"
                    },
                    {
                        "value": "a27f16e998de4089e6b263faca4025cd8271b35fe16cc97019140d09dd928463",
                        "timestamp": "2021-06-15 07:03:14"
                    },
                    {
                        "value": "b8ede92590d43efb1edb31a19e4c28dc4fe4ecaf52be4bdd4ceae0a6caf26368",
                        "timestamp": "2021-06-15 07:03:14"
                    },
                    {
                        "value": "634466056f4a9fc0952561871ed744d45ae535644f1a10252aeff5850d7048b7",
                        "timestamp": "2021-06-15 07:03:13"
                    },
                    {
                        "value": "e6ee5b04ebf048d04e5e3c987a953b6f95a8eac0d741645796a3ee0aa948bd2c",
                        "timestamp": "2021-06-14 16:03:24"
                    },
                    {
                        "value": "7fe8fc25255d0fbe221579b985327bb67bb1226f39dfc71b8b59e6a2b15fff11",
                        "timestamp": "2021-06-14 16:03:24"
                    },
                    {
                        "value": "36f34d118ee0769d818d0cdb9b7562262e23233f97fd78c9280e8d5a7c390636",
                        "timestamp": "2021-06-14 16:03:24"
                    },
                    {
                        "value": "d2a0fa2a17083c7a4f744218d0394f88610c34245bf1532efbf2153de97d1c62",
                        "timestamp": "2021-06-14 16:03:23"
                    },
                    {
                        "value": "b55b184002cdb01c862afc89068fc910f58f0919f3c8e38f50fb9df89cc0ba19",
                        "timestamp": "2021-06-14 08:02:15"
                    },
                    {
                        "value": "120ff2a109c01e38da86b9ce61c33906f6ddcea90a2fdf7ea3a67b08a271029c",
                        "timestamp": "2021-06-14 08:02:15"
                    },
                    {
                        "value": "e30c6a975f21d4c00c52bcf0e794e17222632ae55ea1c0ac9a7986f639638a94",
                        "timestamp": "2021-06-14 08:02:15"
                    },
                    {
                        "value": "34e0fc5b0b161819a322ae04d5696080b15819e7801809221a6e0f809da3e4d4",
                        "timestamp": "2021-06-14 08:02:15"
                    },
                    {
                        "value": "9530a966f88a89a4be58f326612e20b58c3234cc2976f2b114fb621c59e906ff",
                        "timestamp": "2021-06-14 07:03:23"
                    },
                    {
                        "value": "e1556b66ceb9d2f4d30e944a1e2f0abbb6bc112783d1ba6573c4d75713e61970",
                        "timestamp": "2021-06-14 07:03:23"
                    },
                    {
                        "value": "aab01704c3cce6d9a75418e3ba4a905ebe215eed1d8d010096638b7f849a4f87",
                        "timestamp": "2021-06-14 07:03:23"
                    },
                    {
                        "value": "06a1c5e88cebab0737f64cc311b0eb0e1ea159e98216743737f4683fef66849f",
                        "timestamp": "2021-06-14 07:03:23"
                    },
                    {
                        "value": "6e556200dba57fdce36308bbd34c19398ecf627828627b380244aeede2f90176",
                        "timestamp": "2021-06-11 12:03:22"
                    },
                    {
                        "value": "096ca35528ef4f702e93f5f17d7954f26fb48acd4526794ce1ee99d27cf1a4c3",
                        "timestamp": "2021-06-11 12:03:21"
                    },
                    {
                        "value": "931959c2c56185581ab2639948e3e207c5cb3c1e1c0225567c31f03a5b39e65d",
                        "timestamp": "2021-06-11 12:03:21"
                    },
                    {
                        "value": "6bde14e7796411e51aef9bbaabaa4bfdcd1682bb8024b85f82174bc036967a9e",
                        "timestamp": "2021-06-11 12:03:21"
                    },
                    {
                        "value": "02230fb80db0fe0055730a0af8b3a0c66a578b2c315206053b80bae250c5561d",
                        "timestamp": "2021-06-11 07:03:24"
                    },
                    {
                        "value": "1754283e0b6bbbbeb69f165e54e3795d3e34ca14aa7bd8bd3b7dcdd97f7dfca8",
                        "timestamp": "2021-06-11 07:03:24"
                    },
                    {
                        "value": "61ecc0b69ccf39c58ee724609e4e94fd51718265da3b325a37eda0f89babaf3f",
                        "timestamp": "2021-06-11 07:03:24"
                    },
                    {
                        "value": "1a08fc838c4ebab6b986b6010e2074a05c29916cd38096e7f7d26a6455917508",
                        "timestamp": "2021-06-11 07:03:24"
                    },
                    {
                        "value": "08da4e7de40f2eec9cd1670e3db354d49d3101fd9ace7aaa5f99b235d2ce46ff",
                        "timestamp": "2021-06-10 15:03:32"
                    },
                    {
                        "value": "d08bef7fab8dc358c5554f625743c776fe8bcf2d7711e53dc5bc734d0957b8aa",
                        "timestamp": "2021-06-10 15:03:31"
                    },
                    {
                        "value": "c75e11dfabf8fca2984c6e40081430ff80df8af2ad1c0a1d3dcbaaca2db5f6f8",
                        "timestamp": "2021-06-10 15:03:31"
                    },
                    {
                        "value": "771e4f69520f71afe6a6e9a4eb4de7dcd8d7521d90db290ca6c27b1a95c532af",
                        "timestamp": "2021-06-10 15:03:31"
                    },
                    {
                        "value": "9e12fe8bd56a6dafcf0a9f4ccd5e6f797cbf4aadd5a158b965f61e6e3598911c",
                        "timestamp": "2021-06-09 16:03:24"
                    },
                    {
                        "value": "f02de42f922f8de10d150f823d2b90d89052fcbe4e04754d1c07335a5afd47d0",
                        "timestamp": "2021-06-09 16:03:24"
                    },
                    {
                        "value": "f10508b4bd982e597771e6128fede0b532c42cb799ac495c922940c27a942dbe",
                        "timestamp": "2021-06-09 16:03:24"
                    },
                    {
                        "value": "fd7cab09f2ce1dce0b17b95a29900bf701c15a544ca08d5ef846df9871cfac7a",
                        "timestamp": "2021-06-09 16:03:24"
                    },
                    {
                        "value": "af09c06e63477104e7b474b2fca391e790c05e8c8a3125653efb57776608568e",
                        "timestamp": "2021-06-08 12:03:09"
                    },
                    {
                        "value": "351c2086364ebdecd5c62f8b4b58ec5059a6ef7c70e617e40cc847658b4a2aa2",
                        "timestamp": "2021-06-08 12:03:09"
                    },
                    {
                        "value": "47b82dd6df481e68e8937299f9023cbabb84ee94c3091a2a89b8be00abeb6b90",
                        "timestamp": "2021-06-08 12:03:08"
                    },
                    {
                        "value": "1ff80cfa807700323750e18e0027ac5bff1c4f34080e27850856bedaceb13311",
                        "timestamp": "2021-06-08 12:03:08"
                    },
                    {
                        "value": "1efdd696929926e4abc7360ab81f5b0c29a846dc505521055502ca2de9afd89c",
                        "timestamp": "2021-06-08 07:02:04"
                    },
                    {
                        "value": "3ad2457e52eb03fd7b204b2ec2ab648f26cbbc064d8893842c131382921d32d8",
                        "timestamp": "2021-06-08 07:02:04"
                    },
                    {
                        "value": "d2d80fb82c8b5d7315eacc3109c9a108c67a2961402941fdb996094a68e4a21c",
                        "timestamp": "2021-06-08 07:02:04"
                    },
                    {
                        "value": "b0a8947c77c4680ac551784e057538a37db493009778d8c258f1688c18f904d1",
                        "timestamp": "2021-06-08 07:02:04"
                    },
                    {
                        "value": "cd86cea47a0d0f6e75738d7376d6cbc4b195e3640641665274552ae290149b3a",
                        "timestamp": "2021-06-07 10:03:27"
                    },
                    {
                        "value": "d577e04ebfc027c3a85976bbcb8b08b02d9c7e293299a35795f573f1675d7a35",
                        "timestamp": "2021-06-07 10:03:27"
                    },
                    {
                        "value": "33af2b745b27ae79559ac323d88199f92aa9fe8bb4ffec0963d6f622ec17f24a",
                        "timestamp": "2021-06-07 10:03:27"
                    },
                    {
                        "value": "d3cd6590c46fe61bf0858cf52a4aab0e2f5389df2fcb55908151df0434f6c0a7",
                        "timestamp": "2021-06-07 10:03:25"
                    },
                    {
                        "value": "ffc0a6de50b36608c24dc3aaa90e1813d443200ee0ec6c1470bab77397d26cfd",
                        "timestamp": "2021-06-05 17:03:14"
                    },
                    {
                        "value": "c3a4a7b85967caf4cfbe39250ab621b738cbe24829b7f7215b9ea2d6a0b54950",
                        "timestamp": "2021-06-05 17:03:14"
                    },
                    {
                        "value": "8700797586a744fd3e998733ed63ab6f721bacd87c6796ea7f5c1a8f2c17a3f4",
                        "timestamp": "2021-06-05 17:03:14"
                    },
                    {
                        "value": "58d44b3ab059852da871283c0643f360f050858ed72646ea4fd4186ecbb98617",
                        "timestamp": "2021-06-05 17:03:14"
                    },
                    {
                        "value": "98acba30e1beae1f5b26942e308d3e34e776abf297925b373bfe1e39ed6d5dc2",
                        "timestamp": "2021-06-04 14:03:20"
                    },
                    {
                        "value": "1e9081ddd63d896b25d66ea3df1910d2f109efb35025f5dd13bc13ee23d2ccec",
                        "timestamp": "2021-06-04 14:03:20"
                    },
                    {
                        "value": "58875ba3ce61509ab2a613c3a01c458183352f5d9824f0eebffd8ad90806ae4d",
                        "timestamp": "2021-06-04 14:03:20"
                    },
                    {
                        "value": "98da1ec96fd2444a4aa095d87c1346482389eabd517e70ab74577171ffda6937",
                        "timestamp": "2021-06-04 14:03:19"
                    },
                    {
                        "value": "2bc313b25d9cabf26747b98eedc7bf0e2ed264375a5951cd2a16c671b7eb0df8",
                        "timestamp": "2021-06-03 22:19:48"
                    },
                    {
                        "value": "67ac52a653d895f47806945a2d84d0450ddc245a9191cf7eec37297649d5b3a6",
                        "timestamp": "2021-06-03 22:19:48"
                    },
                    {
                        "value": "266321f3918aa86a1b7915453a294ca5c36bf2072647b549cdd35f526b3375a3",
                        "timestamp": "2021-06-03 22:19:48"
                    },
                    {
                        "value": "04745022109b280c8c102e89bdf2e147b5c4022cd550702b5d7572647375bb11",
                        "timestamp": "2021-06-03 22:19:47"
                    },
                    {
                        "value": "abe3945460e661e29e3e235bda3144691f263414e49e0976b67d752166274565",
                        "timestamp": "2021-06-02 22:03:34"
                    },
                    {
                        "value": "b6cb4e92b976f01c65024b5544ed83062439bcffbb15fb623d1804c57a711c07",
                        "timestamp": "2021-06-02 22:03:34"
                    },
                    {
                        "value": "0ff85b220fdab9657864741c6bac92d9a5eb1255d647451d8dd7b2178bfa4ccc",
                        "timestamp": "2021-06-02 22:03:34"
                    },
                    {
                        "value": "7c4fd4e833beff39abdb4dac3d1da7ba1c89afb62934b43ad98c59c4aaf38e3d",
                        "timestamp": "2021-06-02 22:03:34"
                    },
                    {
                        "value": "79b6f03fe6643a033daf6391396acd18b2e5818af18cc9b954722a152a557d20",
                        "timestamp": "2021-06-02 13:32:53"
                    },
                    {
                        "value": "cd6d3c992633caf027990050b5b94054d7e9148294f0297901abcb1a44b35a54",
                        "timestamp": "2021-06-02 13:32:53"
                    },
                    {
                        "value": "12afc4ae77a04bd359162284e418636d15db98680501a82cd045f323ccf8992d",
                        "timestamp": "2021-06-02 13:32:53"
                    },
                    {
                        "value": "4b85059a842a33fa87f53b3b5238db0386a84b87941f5cafc9f6b14e2642f575",
                        "timestamp": "2021-06-02 13:32:53"
                    },
                    {
                        "value": "d1505cf24e8f34b892bf2feeaa5e2d898f3e3814263f058147f78893242fd770",
                        "timestamp": "2021-06-02 12:03:01"
                    },
                    {
                        "value": "236c925a0c8672b39a8fcd9c952cef4971d4f54695520193d0e7b8cd04c99b75",
                        "timestamp": "2021-06-02 12:03:01"
                    },
                    {
                        "value": "78573a75d3be88064b4749e34788727c071ee6e9026d422df71ebefb09cc9177",
                        "timestamp": "2021-06-02 12:03:01"
                    },
                    {
                        "value": "849db034f2d5d54098663f6a04c1fa5ab49ee139857058c589cd1ea5405aa744",
                        "timestamp": "2021-06-02 12:03:01"
                    },
                    {
                        "value": "2e5709f12673cffcf4d3f5109303de822626c3a2a608f9c78a853c0c6d58edd1",
                        "timestamp": "2021-06-02 08:03:01"
                    },
                    {
                        "value": "8879a72d9d399df95e0ccc03b3524174c2bcf803397465a2b95b9e92ca1fb9bf",
                        "timestamp": "2021-06-02 08:03:01"
                    },
                    {
                        "value": "3a3c9386c12ded47cc0ee24c6f915de9ca5744e68573638aa4c533704bcfee31",
                        "timestamp": "2021-06-02 08:03:01"
                    },
                    {
                        "value": "f00e3d72d61f4ced5ea2619bdcc864639f79d38993020d2de354cd39f5886db6",
                        "timestamp": "2021-06-02 08:03:00"
                    },
                    {
                        "value": "07a269c606f53893597246d7ea6d736b425b115bac34dd4054758cf6b0a23078",
                        "timestamp": "2021-06-02 07:03:03"
                    },
                    {
                        "value": "60ad7da83b985659ccd61ef0a44e33c4ae4184d76a9dd9f1045548831520819f",
                        "timestamp": "2021-06-02 07:03:03"
                    },
                    {
                        "value": "7c648ea31c48d4faf29224f2dda39d32e411ff12fd860193ce43cdcb6a49ce29",
                        "timestamp": "2021-06-02 07:03:03"
                    },
                    {
                        "value": "3b0f87fef1becdab5c25249c230a189c1aa9c9f0468938f645b671ee6c4555b0",
                        "timestamp": "2021-06-02 07:03:03"
                    },
                    {
                        "value": "f29bce0ec02e6941dcbdacc1ab387e0201d0c1899a71f00bb6669e96fa27de18",
                        "timestamp": "2021-06-01 14:03:03"
                    },
                    {
                        "value": "74428711c3d5519b6f2777614e1fe8e7908a306e1f3b00983bb9e2ed968474ad",
                        "timestamp": "2021-06-01 14:03:03"
                    },
                    {
                        "value": "146f5b2544e98818cbe9813068d6f08037df0e29a3b83d4d2fce3e1bfc444f2a",
                        "timestamp": "2021-06-01 14:03:03"
                    },
                    {
                        "value": "672795699cca5d2353cd8a39ea7d1c0f2a779b3c943a7c3630884b2141a82214",
                        "timestamp": "2021-06-01 14:03:03"
                    },
                    {
                        "value": "c0a85e3d2a434a3d0fde56c52dc8bd8b2989e803e24250661762946f807a7fc2",
                        "timestamp": "2021-06-01 13:03:24"
                    },
                    {
                        "value": "71d0d01b1edf738cf138ff3765fe99cc31e29362495af51b1ab93e3f2bfcc23c",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "3b6e62365888c8d8085e7d77db698a300c7fd1d59ed2222a14c83c8925733698",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "d857d2ffbdaab5c6866d6e50027dba89644d703b9081218a0e943db3c9cae310",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "683b35dd7a3a4dfd71d4fca0a081ce305cbfb482a17104df0ece33c0504c093a",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "7e764e53424c41b68593b184364b18e22eeb77199532e6dd9b7d968cc7f4014d",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "fbe41efa430c99c63425453056a54b2942d007d2691f5049f7dc16fe16b0a2f3",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "a3bd048ef9380fada8db051e46d9ef46c8fb8d5c4780474f1667962dd682147a",
                        "timestamp": "2021-06-01 13:03:23"
                    },
                    {
                        "value": "a1c1d21612ffebba96e36e91a6329e7da6705d7f72964cd57ffde2459088f841",
                        "timestamp": "2021-05-31 13:02:53"
                    },
                    {
                        "value": "19e9bb35a3686a6b354c0998d53bd3755a4a722e111f4a82243c1e84c5d6900d",
                        "timestamp": "2021-05-31 13:02:52"
                    },
                    {
                        "value": "b8b841d90fe179b235744659d1bf9cd9860ff6d081b25ef0d485beefcf59e28a",
                        "timestamp": "2021-05-31 13:02:52"
                    },
                    {
                        "value": "aeb7157fdebd411f1da35df8c025837a6fc89592ba0a0f3604a506360b480d2d",
                        "timestamp": "2021-05-31 13:02:52"
                    },
                    {
                        "value": "2c367ce7b2764b388702eaa2018310abd2e266024fc007ede1bad13846be13f7",
                        "timestamp": "2021-05-31 12:02:56"
                    },
                    {
                        "value": "b7b4042a3f847e1b62165f032b80830eb2e840bd3c5f3cffbd92dc7d0e196de1",
                        "timestamp": "2021-05-31 12:02:56"
                    },
                    {
                        "value": "3a6ec75b656e165939ee0d1f985678cb1799151e33449bba28c6a830ead01e3a",
                        "timestamp": "2021-05-31 12:02:56"
                    },
                    {
                        "value": "1e525140da60335e99fde397ea096ec5491349a516b9522d2bf9c3ec99dcc7cc",
                        "timestamp": "2021-05-31 12:02:56"
                    },
                    {
                        "value": "5b1a6710e3018d5fd2d122f3c3c8a02787cc4dbcc0517bcfaf39b4fa9e2d77c6",
                        "timestamp": "2021-05-29 23:03:33"
                    },
                    {
                        "value": "7664e0ecf75ceab92dee8e07c7de96d43a136a6cff674895162625b66e0ffe15",
                        "timestamp": "2021-05-29 23:03:33"
                    },
                    {
                        "value": "c05bf234f0a814069b3cd844d38944e8e704bff80981657d549041b84c905da0",
                        "timestamp": "2021-05-29 23:03:33"
                    },
                    {
                        "value": "84006d739cdc4755a67d0c0d166cd6ca4c51c81436dc7c91867a50b9dcadcee5",
                        "timestamp": "2021-05-29 23:03:33"
                    },
                    {
                        "value": "8684fe2f2f8d25033f5ae427841e10e8e83f369d4b880b0822fd3c440e641120",
                        "timestamp": "2021-05-28 08:02:51"
                    },
                    {
                        "value": "b8ba8c1187c841020a42eb861b630e46e3d7e7e3dd39258f85804c35da2b79fa",
                        "timestamp": "2021-05-28 08:02:51"
                    },
                    {
                        "value": "392e14e40cc92c4ad074559b359c6ce39388ce89a2fa8c158f63b7baedda2339",
                        "timestamp": "2021-05-28 08:02:50"
                    },
                    {
                        "value": "b5f1b590d8e2bee4a9d12258d19269baddb3caacc63a2ce68a38394f91798760",
                        "timestamp": "2021-05-28 08:02:49"
                    },
                    {
                        "value": "09d7088f3bdb7e5072dbd3698b2453ba3915b046709596a30819ada7b701c7e3",
                        "timestamp": "2021-05-27 22:03:04"
                    },
                    {
                        "value": "bb4f765e15bcb462f50e69c42c125d12df9dd5a05797527f58c7ba78719a6cd0",
                        "timestamp": "2021-05-27 22:03:04"
                    },
                    {
                        "value": "14854d1ce96dcc9795941ec7248f8d2481d5649cdeecaccbfe840f259bc50bde",
                        "timestamp": "2021-05-27 22:03:03"
                    },
                    {
                        "value": "caf2bffd321d8e814e851d076a709fdeefa6d510eb6fbedf4fa211027263ffa2",
                        "timestamp": "2021-05-27 22:03:03"
                    },
                    {
                        "value": "0af6e2a5d9059ad47cd9ca10092a7fcb7c019d4e4618a9542d4a283cda1b5924",
                        "timestamp": "2021-05-27 14:03:06"
                    },
                    {
                        "value": "d7d2e1f3971983ade2d3d7728651354827c37b565eca280a72f1649bddbcdf41",
                        "timestamp": "2021-05-27 14:03:06"
                    },
                    {
                        "value": "108cc18c30a306c9fcd29d6d587cee73e18ccabbda0cb669b513a22b300d3a1d",
                        "timestamp": "2021-05-27 14:03:06"
                    },
                    {
                        "value": "86e37fd811f42a28cf578b826f8dd93096783bc5f8502434fa2c3da66ff747a6",
                        "timestamp": "2021-05-27 14:03:05"
                    },
                    {
                        "value": "8cc22a659256ad859f4b6e61428ae98cf1f48940027aab0f6be1ad42effcc90c",
                        "timestamp": "2021-05-26 19:03:03"
                    },
                    {
                        "value": "a0346d4bb0364fd5888907f43a6d40e5bb65a3900c9c2824a233faeecb28727d",
                        "timestamp": "2021-05-26 19:03:03"
                    },
                    {
                        "value": "a7cede0ec4793609f52cab848b018bd9f3facf34404d385f7bda9e95b9939189",
                        "timestamp": "2021-05-26 19:03:03"
                    },
                    {
                        "value": "f73dcca2952ca3a15b309f8064bcaeb48c3213c9ac318c5a741f9805363f8e72",
                        "timestamp": "2021-05-26 19:03:03"
                    },
                    {
                        "value": "156d7c33d2e44f2475d446a9d2d195cbba6fdcbc8d75fb7aa61a8f5233e33aa0",
                        "timestamp": "2021-05-26 19:03:03"
                    },
                    {
                        "value": "55522981e98c492c10d434365655c7343b18cca96b01be266f78f82ea435856a",
                        "timestamp": "2021-05-26 19:03:03"
                    },
                    {
                        "value": "8c8aa4a557e5c3d0d16bf6064bbe144c4e5319a8ea4897d52f6bcb7d89fc45e9",
                        "timestamp": "2021-05-26 19:03:02"
                    },
                    {
                        "value": "29579f8372f95ea79bff6b28fd59625b3acb14797216742d93a110b3fa950d40",
                        "timestamp": "2021-05-26 19:03:02"
                    },
                    {
                        "value": "718c39e3856531aa6e7a97e805911b001e035e773661129f6877deb00e732201",
                        "timestamp": "2021-05-26 13:03:02"
                    },
                    {
                        "value": "d166c2a91c5178ce00b91061c2242b79527b7327210a9ff1053c1202362d93d7",
                        "timestamp": "2021-05-26 13:03:02"
                    },
                    {
                        "value": "89c01edaf3c1a273cb379afb191b307536223adeff9a4d2e3089d0758714a791",
                        "timestamp": "2021-05-26 13:03:02"
                    },
                    {
                        "value": "d2e54e78588cd3f11e85ff5244847181e55860a92ef312090fe7c1204b63877a",
                        "timestamp": "2021-05-26 13:03:01"
                    },
                    {
                        "value": "73dfd3e7ecc3bc2035a46ad8a92be5666708550fd0a181b1e5209f7537f2f6d1",
                        "timestamp": "2021-05-26 10:02:58"
                    },
                    {
                        "value": "e6e768c20d3c0e9976b587853ca3e540955587e229b0795ea858cfe6257c476a",
                        "timestamp": "2021-05-26 10:02:58"
                    },
                    {
                        "value": "b27efb944c0ae010e37802100d54b4087e24d26edab13468f88add30a6586e5b",
                        "timestamp": "2021-05-26 10:02:58"
                    },
                    {
                        "value": "741f9105ccce33836379cb54f055ca79cfd1f4039539556dcc7d6ee35aa1cfbf",
                        "timestamp": "2021-05-26 10:02:58"
                    },
                    {
                        "value": "379cebf1e2fe9dea47d58281b97bcf23e73b5149e3944e936b91207d16993d85",
                        "timestamp": "2021-05-26 07:02:59"
                    },
                    {
                        "value": "06590d709bb90096480fb153f62efa1b0738a561014afac367907fa47478079c",
                        "timestamp": "2021-05-26 07:02:59"
                    },
                    {
                        "value": "808047b68368a5053de5c3d07c134bb1fc9fc370ae89d955cc049888cac4c139",
                        "timestamp": "2021-05-26 07:02:59"
                    },
                    {
                        "value": "f559645f8b05d3c7499f23fd4f6f8f74dad45c3b2501266db7c36b67c8e80e7a",
                        "timestamp": "2021-05-26 07:02:59"
                    },
                    {
                        "value": "f1459e5286b1606eb56e383ebd80202d60265dfb03772b39d08291349facdb72",
                        "timestamp": "2021-05-25 22:03:09"
                    },
                    {
                        "value": "7ea1e27f72119308eda06cb9711031c0b6469f869e4fc2aed72341aef61928cd",
                        "timestamp": "2021-05-25 22:03:09"
                    },
                    {
                        "value": "21437b52392e511f561988e79287444a65d5c78a251d2e54a92703be7fa5cf2f",
                        "timestamp": "2021-05-25 22:03:09"
                    },
                    {
                        "value": "ef4cb9aea5d837610a28160c179ef3c4f381f84a8cbdd3464563800c53a95f15",
                        "timestamp": "2021-05-25 22:03:09"
                    },
                    {
                        "value": "ffeb538e279b53ac314ec71da8a83ffd3693cf31cd3705e23579c7f20d182de6",
                        "timestamp": "2021-05-25 20:02:59"
                    },
                    {
                        "value": "101ccf90bed4acab87a390589a3405e5a2168b67d0dadcd052820c5de6e54804",
                        "timestamp": "2021-05-25 20:02:59"
                    },
                    {
                        "value": "049bac0b1d81e35e8d4e8cd535f76b06152efb6f4dfc057a2dab5578842453e4",
                        "timestamp": "2021-05-25 20:02:59"
                    },
                    {
                        "value": "38577a7e5c30bb0d853ae213ebdfb7d0bfda353dec677706f1f233bd16b3ef10",
                        "timestamp": "2021-05-25 20:02:59"
                    },
                    {
                        "value": "b27bbb114bd3dc436bbc07747778d10e9a4e5a5ee82cb068dfcc7242d49c445d",
                        "timestamp": "2021-05-25 18:04:50"
                    },
                    {
                        "value": "3878be96fdc417dfa7726775e212e3a2f957c737b779b39f55fbbc8faca45352",
                        "timestamp": "2021-05-25 18:04:50"
                    },
                    {
                        "value": "9571b0af637d5836d942c71a2bc18663e8c78ababfc7e26d17b43158d4c7d005",
                        "timestamp": "2021-05-25 18:04:50"
                    },
                    {
                        "value": "d7650abf3c2d1c856f50a28c3d863893909689181f195d70277f7f1d568a6ef3",
                        "timestamp": "2021-05-25 18:04:50"
                    },
                    {
                        "value": "ef2de62cab1f816455452f7bcd0279f6f9f411b49b774259fda5cbd0a14f9d65",
                        "timestamp": "2021-05-25 07:02:56"
                    },
                    {
                        "value": "aec3b98a4e9dd660b5516bf59063cc6bb7f1434ec5d1c69b6831552d68b59eb1",
                        "timestamp": "2021-05-25 07:02:56"
                    },
                    {
                        "value": "43e9194904503eb5a508cf89297b8dbfc73f79600ff6bf13c5d8e717941e2652",
                        "timestamp": "2021-05-25 07:02:55"
                    },
                    {
                        "value": "a3e892943495b532423c7c717f955741fc373c21daa58c55deb706d9d20dfb55",
                        "timestamp": "2021-05-25 07:02:55"
                    },
                    {
                        "value": "fc19eafdcfe6ae03a37ac61ee6fc5fb2c1cf57172c2754dce4aefc3c8a35c976",
                        "timestamp": "2021-05-25 00:03:18"
                    },
                    {
                        "value": "a9e4f43d19fc2a9a954a7c1dbd832332758423233bac02d98c6afc0fc13d33db",
                        "timestamp": "2021-05-25 00:03:18"
                    },
                    {
                        "value": "6d53b16faa7d57ada4a5c9a6db40d57bc992b1525f35e87dded4d9c80dc1c5d0",
                        "timestamp": "2021-05-25 00:03:17"
                    },
                    {
                        "value": "f70e7c01c8fdb87b80b5575cda68779e2b829aae3cc5cdcf0207530e7ee804c2",
                        "timestamp": "2021-05-25 00:03:17"
                    },
                    {
                        "value": "e3bee5a93e861869521bc7cc72dbc5f08fe64a1eb1c547d51af200393ea48ea9",
                        "timestamp": "2021-05-24 19:03:09"
                    },
                    {
                        "value": "5262a050ca1cede9440b3f04a365aabd24cbec39b4c37dce8ffc42a583501c91",
                        "timestamp": "2021-05-24 19:03:09"
                    },
                    {
                        "value": "851ea2ababe948eb029f322efc971479e3695a75158c9bb0169412d3ba189727",
                        "timestamp": "2021-05-24 19:03:09"
                    },
                    {
                        "value": "3b3b884a2949bf048b0959aa00b018b22c26133d8901bed33bc3a53ca533c4e9",
                        "timestamp": "2021-05-24 19:03:09"
                    },
                    {
                        "value": "e3ccade6f4b9accc6cffa813b88862d68f78f0f1c601a57d0573e60deea6a370",
                        "timestamp": "2021-05-24 18:03:01"
                    },
                    {
                        "value": "d04efc1f583b9d7a2f2e600a43eeb8fb8359432c591a4f8cc583caf881097421",
                        "timestamp": "2021-05-24 18:03:01"
                    },
                    {
                        "value": "1cb0c85a07569475b00ff82ad4b7f651c3fafaa1beaef1d4c7a86cfa56bfdb5e",
                        "timestamp": "2021-05-24 18:03:01"
                    },
                    {
                        "value": "e414e4f1e2780177e9b520ea122eac11cc00a1db63b009344227002e5a2fbcf0",
                        "timestamp": "2021-05-24 18:03:01"
                    },
                    {
                        "value": "f3685a744940da41b0244d007646f33463c59774e8489e7d3f7cf3abc9c8e662",
                        "timestamp": "2021-05-24 15:01:21"
                    },
                    {
                        "value": "3605672b7318d4eac6c39060f05e9c915c04aff66c2c8f23cb8792a66890a70a",
                        "timestamp": "2021-05-24 15:01:21"
                    },
                    {
                        "value": "53375d2bd7972afd614f5a9eedee4bfb329885c7968e36082277066fba94fb07",
                        "timestamp": "2021-05-24 15:01:20"
                    },
                    {
                        "value": "adc50d637d48a25c809ee9e8ee791830d978d45f6cf781b917b8d88788363311",
                        "timestamp": "2021-05-24 15:01:20"
                    },
                    {
                        "value": "4da679e366dc987277f7850f71d5343e7c9b8cff4b2df89dd2f335f512de62c1",
                        "timestamp": "2021-05-24 12:02:56"
                    },
                    {
                        "value": "eac1040b314720201575482327a0649d08889b4dcb8781b4cda495419f0ee10d",
                        "timestamp": "2021-05-24 12:02:56"
                    },
                    {
                        "value": "c288fba4b7716faf5562f4608d8ad0c1755ae059ba3d69569b60cf38a5f6f695",
                        "timestamp": "2021-05-24 12:02:55"
                    },
                    {
                        "value": "36b5ddc5914b203b4213ad5cc15cc498ad16691d84fb239220331fc83503e76d",
                        "timestamp": "2021-05-24 12:02:55"
                    },
                    {
                        "value": "eee32d1778f94a8026448137312d49fb9d2f0a94713e7ad7bc9a05a0bc5faf9b",
                        "timestamp": "2021-05-24 07:02:39"
                    },
                    {
                        "value": "a84fdf2c7dbfe8009f998273a7ff9e51c440ea3daa1b93d5b29b3a8e71b35a25",
                        "timestamp": "2021-05-24 07:02:39"
                    },
                    {
                        "value": "fe65dd2f612f1b5b18be751d6c0ec438fb249ad26dea53fa5f1ff89c79dce7ba",
                        "timestamp": "2021-05-24 07:02:39"
                    },
                    {
                        "value": "ce794bbe8b53cb0cb4d6964b761d1449695fb19371b0d260f4576c1c7c5f73fc",
                        "timestamp": "2021-05-24 07:02:39"
                    },
                    {
                        "value": "fd805b222cd4089974af4a5cc69602dcb1201049a3d69ad4fcb99b2b6dff96df",
                        "timestamp": "2021-05-21 14:03:14"
                    },
                    {
                        "value": "993062780284d866c72f85069edee0bd933fbe3e18eae1f39f6cbf3898278ab5",
                        "timestamp": "2021-05-21 14:03:14"
                    },
                    {
                        "value": "02d0cedd40573bcfa7e60ede0f6c0b8c462b7e43380e197c78ea032483754311",
                        "timestamp": "2021-05-21 14:03:14"
                    },
                    {
                        "value": "8a11ccfba0869519eb222de54db2f768c6de3d57045490c7d49b87679f80b4c1",
                        "timestamp": "2021-05-21 14:03:14"
                    },
                    {
                        "value": "2f84371988dec992042ea9faed11d01323d7806341352eb1165da41318547f37",
                        "timestamp": "2021-05-21 10:03:08"
                    },
                    {
                        "value": "4d87066f39a416985103161325b54efdccb1248efc1537aeea9f5dfa0f1e7ca7",
                        "timestamp": "2021-05-21 10:03:08"
                    },
                    {
                        "value": "4634683041f3a17fd3e66e086f2730d0f130bcbb0cd55594a697f140a43f87be",
                        "timestamp": "2021-05-21 10:03:08"
                    },
                    {
                        "value": "c6e3758af9817c19a3c8a5e0c0b19bcd59971d1b2b4c813862bbeb716d87931c",
                        "timestamp": "2021-05-21 10:03:08"
                    },
                    {
                        "value": "f8280045a04ed953e7a35ed0531685c56db1554847e6c12ffdfcc04f887426d1",
                        "timestamp": "2021-05-20 07:03:10"
                    },
                    {
                        "value": "e9a4a4d52dd0fa4d9536ef486a5a9e2213ca76c0edeb7be6a118e9c65571d37a",
                        "timestamp": "2021-05-20 07:03:10"
                    },
                    {
                        "value": "4090f165f60570b073f072f321ef6b6fbee8de617d6cb7e72b2aa26ba048f216",
                        "timestamp": "2021-05-20 07:03:10"
                    },
                    {
                        "value": "f8a54661c5cd0e682c3943e098640ff1e847e753c6c62316e0ac4b0da5f410e6",
                        "timestamp": "2021-05-20 07:03:10"
                    },
                    {
                        "value": "0a44385f0d3e7f14639faae7607971f9ad9b60b89dd591bc6208cc1bbc0e68fc",
                        "timestamp": "2021-05-19 15:03:01"
                    },
                    {
                        "value": "91bfb7385ccd7bc50a50153907c16441fbfa7febb6987efcdef2e266948596e0",
                        "timestamp": "2021-05-19 15:03:00"
                    },
                    {
                        "value": "1d4caa0b975ecf0bcb2cc854e5704a7a47d97aac648e0b3634143354c98aacb9",
                        "timestamp": "2021-05-19 15:03:00"
                    },
                    {
                        "value": "4de4598c669cd88a2cff2f27dca3e3dad24ac2420abc5122e67babe46a8a5544",
                        "timestamp": "2021-05-19 15:03:00"
                    },
                    {
                        "value": "e742eb01d8fe1e07706d0289703bf5c92954e7d0bd857bb1a9500b4a131ef187",
                        "timestamp": "2021-05-18 13:02:53"
                    },
                    {
                        "value": "33f0d367ae282d4c9b9a6acbfefd3e86999eb84fc65c43d99f1de1b95c1f80af",
                        "timestamp": "2021-05-18 13:02:53"
                    },
                    {
                        "value": "57a97978f3441b51d33ac5d8683e7ccf19f4e8afd15da4b36998eff36a0ea489",
                        "timestamp": "2021-05-18 13:02:53"
                    },
                    {
                        "value": "ed39c47e5cb5e04b551d4c86dbbb96c66528188e30f282dd7c94caa5611903b3",
                        "timestamp": "2021-05-18 13:02:53"
                    },
                    {
                        "value": "34cf80b2fb31175641e5054251ee2ab4b1e52beec0fce387634d59747d246594",
                        "timestamp": "2021-05-14 07:02:56"
                    },
                    {
                        "value": "0460e65f20e3584220739c0bead859c3583d36be6f0ebf7e1fd22cdc322801e8",
                        "timestamp": "2021-05-14 07:02:56"
                    },
                    {
                        "value": "fad8f6a07c20b0594611901f079ab4ad87c3c0a3ff5e776eee1f86b4b56abd4c",
                        "timestamp": "2021-05-14 07:02:56"
                    },
                    {
                        "value": "87ad57ffa31e9b3481663bd81249ec1e563dc2931bb4bb2045b06ea7917f1593",
                        "timestamp": "2021-05-14 07:02:56"
                    },
                    {
                        "value": "8dc4c1a88f19df4a3731991e632688147b6132bcb6cffa2dfbef8ee081c6ddae",
                        "timestamp": "2021-05-12 19:03:14"
                    },
                    {
                        "value": "c9040b5f852f4e1682d2aff0cb878d8624c5d75ea95c6ffcb601555b1ef60541",
                        "timestamp": "2021-05-12 19:03:14"
                    },
                    {
                        "value": "fb8c95c0c083ded0655f4dd46a9d3bda1da8d64f55b9e49042335e65f6bd4479",
                        "timestamp": "2021-05-12 19:03:14"
                    },
                    {
                        "value": "b24d4c68e856b6417fc51285e654ab86a4a0c92ecc6f639c71b6ac6dd7edf61d",
                        "timestamp": "2021-05-12 19:03:14"
                    },
                    {
                        "value": "3eaf562f8434b81494c817bb90000cd612c6be3cad116c59c2f9608326435144",
                        "timestamp": "2021-05-12 06:03:16"
                    },
                    {
                        "value": "3f4dc309be69548972299cb0517c884bcb5a472fbf9693ff3d07776c9464af1c",
                        "timestamp": "2021-05-12 06:03:16"
                    },
                    {
                        "value": "575c27017b612c76736d0b43645a8c942477b37bfd5ca34d6d82c004885283c4",
                        "timestamp": "2021-05-12 06:03:16"
                    },
                    {
                        "value": "771ee9c8d394253d6ec722eaaedbd6ae2c5f551f3f515897b3423abad7deeb62",
                        "timestamp": "2021-05-12 06:03:15"
                    },
                    {
                        "value": "efe0ae3210b13df738be79a1e1da5f3696fd4144f21b3de6d6f54356bc50d050",
                        "timestamp": "2021-05-12 05:03:48"
                    },
                    {
                        "value": "aace20e28e61cb328da74ff938231b1ce9a07498d477efe3efc5c5d3d04b9dc1",
                        "timestamp": "2021-05-12 05:03:48"
                    },
                    {
                        "value": "fe179c45d6115d5d7238857c0dfa7d48e24182cf4ac2c9365925dc4eb4bcda4e",
                        "timestamp": "2021-05-12 05:03:48"
                    },
                    {
                        "value": "0424ad400e6f4656cebaf214768014c9747c48e3c9b7e975667ce62df74d5908",
                        "timestamp": "2021-05-12 05:03:48"
                    },
                    {
                        "value": "062d47df222cb880fab0357f36e3dd5000964bd8d2c79b57b084e630afdbaa62",
                        "timestamp": "2021-05-11 21:03:21"
                    },
                    {
                        "value": "3638ac885ef63f3b5bfadd95b0f43c34c3854e2483adde873b3d5fca7a831632",
                        "timestamp": "2021-05-11 21:03:21"
                    },
                    {
                        "value": "ac7d4f8b16c7032c8f494f831c0d9a83a9ca70ccc91506223e627d09ff35a710",
                        "timestamp": "2021-05-11 21:03:21"
                    },
                    {
                        "value": "503660af16b89ea2dcb7afa3537cfff0df5cbc3a3f036e4aa7bbd39783cd8df9",
                        "timestamp": "2021-05-11 21:03:21"
                    },
                    {
                        "value": "754093fbbefe0aa73899f2585ecf31597a40b28611fad870de4c071caaa08685",
                        "timestamp": "2021-05-11 17:03:57"
                    },
                    {
                        "value": "cb0386454b283917d742dc6833ef4d7f5aaeeb5cd92acf9d54bb495752cdcda6",
                        "timestamp": "2021-05-11 17:03:56"
                    },
                    {
                        "value": "a5c0d3697381d8bb2ea2bb78185398fcc343b7f59816b4d990641178f31fc551",
                        "timestamp": "2021-05-11 17:03:56"
                    },
                    {
                        "value": "7738922aac52ae186a123dc3787ed22bbcc0d0e2eb9c095a6523e3bbd6a66310",
                        "timestamp": "2021-05-11 17:03:56"
                    },
                    {
                        "value": "df22601db1675ce639bc8efe21534f7371050ae9637f6cdf38bc23ae6c18efdf",
                        "timestamp": "2021-05-11 16:03:37"
                    },
                    {
                        "value": "ba9ee3f9ec73aaf2d27e1d4905dfa122bd6547b1434ba6b3598b4e540229ebf2",
                        "timestamp": "2021-05-11 16:03:37"
                    },
                    {
                        "value": "f7a8482c24350a252b39cede7b770cefcc3edbcf24f2b8b85f5796fefb26bf57",
                        "timestamp": "2021-05-11 16:03:37"
                    },
                    {
                        "value": "16441f09c8b5ce5bd0ae8acfa168d0c0d36b682e79e453425d7f09fbda2aec90",
                        "timestamp": "2021-05-11 16:03:37"
                    },
                    {
                        "value": "41a4cdf4c40f9490522313d96ffa123381666f6268fdafa2dd558bde6f3b871c",
                        "timestamp": "2021-05-11 13:03:41"
                    },
                    {
                        "value": "6716f9ca37043f0684164a12c5971f67c738cefb8b8322556d970f60333d72b0",
                        "timestamp": "2021-05-11 13:03:41"
                    },
                    {
                        "value": "5f86d395ae9875ca4dcb80923e34758d92ef92ebe2454311acd2f10521ce3b27",
                        "timestamp": "2021-05-11 13:03:41"
                    },
                    {
                        "value": "4917a12fce46a55c99e102daf9b78b0a121dfad821abfe6a43d60e6dfde4c488",
                        "timestamp": "2021-05-11 13:03:41"
                    },
                    {
                        "value": "b825093ff0b31f95484f6741daf71fefc164497b871e01e534ab619696f99aed",
                        "timestamp": "2021-05-11 12:03:40"
                    },
                    {
                        "value": "f9066e31398e722f92ddc2e7c58a51509b1963405358e1be714454c144644c2f",
                        "timestamp": "2021-05-11 12:03:39"
                    },
                    {
                        "value": "04a9dc35e014dfe81c02597b04603081676e60e48c323e337303dc3ea17d43fa",
                        "timestamp": "2021-05-11 12:03:39"
                    },
                    {
                        "value": "fd255d8ad67bf130b8e81f8ef3e09b6f89628232eb0d3b4eebf04138da1f9c8b",
                        "timestamp": "2021-05-11 12:03:39"
                    },
                    {
                        "value": "a4511d9e20b7f712507c864053da23a7b1801765b18d021792db5a2d55d64bc1",
                        "timestamp": "2021-05-11 07:03:42"
                    },
                    {
                        "value": "24ff716798f665067f2e9d1f99316f57090eb36ea09d559fd2d63cb9960fdb23",
                        "timestamp": "2021-05-11 07:03:42"
                    },
                    {
                        "value": "9171cd06885b2fba3cd37d0b3651c90dc787d6f2e432e4a1b13defb0efb36df6",
                        "timestamp": "2021-05-11 07:03:42"
                    },
                    {
                        "value": "8314f7404a3445ef06a1d2d18ea5d4ea438e1c5dab4273577a71cadaff2271ef",
                        "timestamp": "2021-05-11 07:03:42"
                    },
                    {
                        "value": "bc231782e1a8f05974a3dc8f824d8c58ecb6ac9ec756c39d00499da006e203ca",
                        "timestamp": "2021-05-11 04:03:26"
                    },
                    {
                        "value": "fb26622663fddd47e8c7c560ae2535fd72948f2dee3182459740ceedcb83e1a6",
                        "timestamp": "2021-05-11 04:03:26"
                    },
                    {
                        "value": "e682e8d344d5c4b85d9854cf53d15f18eef8bc80375e62c359430a5a94b0cda2",
                        "timestamp": "2021-05-11 04:03:26"
                    },
                    {
                        "value": "7515beb02e1280d143b4716f8919e34fadfc7c806e5a354dc3dcd1dd3318882c",
                        "timestamp": "2021-05-11 04:03:25"
                    },
                    {
                        "value": "f3e064207237e7b2b5cb35ffd6882f8528433e0b93ef50d3b9b4ad7b1f9c7de6",
                        "timestamp": "2021-05-10 15:03:59"
                    },
                    {
                        "value": "6f30586ae0f10f48d85d4c59c351756df1754de806b4aa52078bde8d792437ea",
                        "timestamp": "2021-05-10 15:03:59"
                    },
                    {
                        "value": "f32937f9c4ff52c483e510a8ce9d4774733aeea2524dba49c4695abe30c383fa",
                        "timestamp": "2021-05-10 15:03:59"
                    },
                    {
                        "value": "320dab87aef07c03720923504dd0506f7d3e67de57b0067ebf0694966982db89",
                        "timestamp": "2021-05-10 15:03:59"
                    },
                    {
                        "value": "726a3798f80c7e482b512dc777bc692965136190990a5fed138934a546944121",
                        "timestamp": "2021-05-10 10:03:54"
                    },
                    {
                        "value": "240353935f7cfc588b1d42d262041b9e9dc2f753d8eb27c22853257d32dd0be3",
                        "timestamp": "2021-05-10 10:03:54"
                    },
                    {
                        "value": "f57c78e8fd1cc1c39a0251ea8046e6fd099b898c541b5afb20d2f52b4d185d64",
                        "timestamp": "2021-05-10 10:03:53"
                    },
                    {
                        "value": "0bb5c3d128d7c78eca860ad07e610fa54fd238907bb09ee21783e15d35874fb5",
                        "timestamp": "2021-05-10 10:03:53"
                    },
                    {
                        "value": "d91c6941790f363546482c6dd71f70a1c54cf1e9f4666f4aaca5931d3395593b",
                        "timestamp": "2021-05-10 07:03:25"
                    },
                    {
                        "value": "39ea098dc37c12477cdfde92cb07cf2840d907c262c582a2320ade782e01bbcf",
                        "timestamp": "2021-05-10 07:03:25"
                    },
                    {
                        "value": "29ec50798c53eef38949cdbce84cff059b916154ed60fd748a983379e246e67d",
                        "timestamp": "2021-05-10 07:03:24"
                    },
                    {
                        "value": "cbe4e77e20787640eee002493b244ce2979c238117b247909eb0e065d47a0c6b",
                        "timestamp": "2021-05-10 07:03:24"
                    },
                    {
                        "value": "89430cdca33183e7453b9b445be744b158f121fb9c074a2b30325d8668862fe9",
                        "timestamp": "2021-05-09 08:03:31"
                    },
                    {
                        "value": "7faeba7a3e10c3eccd92d119327a0d7e8b0aa99c7ca956326bff1c83ce011440",
                        "timestamp": "2021-05-09 08:03:31"
                    },
                    {
                        "value": "90b0a96d4deeda5483ae98dc19486925e205c8c304237a59fd88ccfb2ff43fde",
                        "timestamp": "2021-05-09 08:03:31"
                    },
                    {
                        "value": "b96f6d8fb3daf46f60ef2b284edffdbdbbfcf87ee8631b652993c8afae86b53b",
                        "timestamp": "2021-05-09 08:03:31"
                    },
                    {
                        "value": "5e4c6ac84b748a87ad634ae0b05095487272d08e47ca62538e07e83e3e9ca7cd",
                        "timestamp": "2021-05-08 08:03:42"
                    },
                    {
                        "value": "8be3fbc8b2a2136ac4d7b35d721a5ec6847161a8e6b4137a0c11a8594603c0df",
                        "timestamp": "2021-05-08 08:03:42"
                    },
                    {
                        "value": "857d06ea32e6156371392551315ae85a5bebf6096e200f4ce68a1e0588ae1cb5",
                        "timestamp": "2021-05-08 08:03:42"
                    },
                    {
                        "value": "7a87934d117e5f192b6268a29e6cf220155849dbed4148bd0b0c38c81892b132",
                        "timestamp": "2021-05-08 08:03:42"
                    },
                    {
                        "value": "f5706588a7904db84355bd99792765e174a216a0479daa9d44a7d49f56c516fa",
                        "timestamp": "2021-05-07 02:05:07"
                    },
                    {
                        "value": "8855c73a66320b1d62c22f7af62feb301d13e4b68f4edfba64bf47473ad58c4a",
                        "timestamp": "2021-05-07 02:05:07"
                    },
                    {
                        "value": "86926685c52fc0eb80f8d256eff2fd0e34b1d4580c5861ec230b90370d68b9fa",
                        "timestamp": "2021-05-07 02:05:07"
                    },
                    {
                        "value": "7653e46e3326fbabf9e534cbd02600f87ad38b5c9e4e175a60e27a6d90c5e6fe",
                        "timestamp": "2021-05-07 02:05:07"
                    },
                    {
                        "value": "6c6dd45a923d7eb6fa1f114a5a4c20fab27bc03e44a5c8cb8627d43da93dfe48",
                        "timestamp": "2021-05-06 18:03:36"
                    },
                    {
                        "value": "a8a69bbf0a0cc80deb9b1230c31d0353eb7cbb793ed2a3ecb3dd71ad0d3ea723",
                        "timestamp": "2021-05-06 18:03:36"
                    },
                    {
                        "value": "c8fe66bc3721291033dc6ed7b7c4d245986d1adebb6414e1348ef867c6f57cbe",
                        "timestamp": "2021-05-06 18:03:36"
                    },
                    {
                        "value": "4bd83d6b82767ff08aaade6bee60bdb5717b1462dac53997adf2ae831ae0f462",
                        "timestamp": "2021-05-06 18:03:36"
                    },
                    {
                        "value": "4fb3bfa3afd4fd027aff55a6cbbc8c3d92fb5dd84bca9d88ff893928a41b9a0a",
                        "timestamp": "2021-05-06 11:03:55"
                    },
                    {
                        "value": "89ebf4bc4ff11cfd8af9a08df7cf7e529ed8fccc16ba75dc544db7a4412bc75f",
                        "timestamp": "2021-05-06 11:03:55"
                    },
                    {
                        "value": "979a3e20b43d1aad57018b9c867e4bde7606d0515c9c71b2050b02c0b5e5fd10",
                        "timestamp": "2021-05-06 11:03:55"
                    },
                    {
                        "value": "f441faf04a7ee611eb0869150ff775a3406de2c4c7484ea433ca5846ee960de8",
                        "timestamp": "2021-05-06 11:03:55"
                    },
                    {
                        "value": "d3375ecab817adb23a2a7daeba89b30be852ae5575ee18b24db3c5fe79fb4bf8",
                        "timestamp": "2021-05-05 17:03:53"
                    },
                    {
                        "value": "6f6aa9aea231c8d01eddd78fa14d447202bb71c77512265ce9cc195c62ca1c65",
                        "timestamp": "2021-05-05 17:03:53"
                    },
                    {
                        "value": "e59cfc7619e0f202c0bd6f132ca988f2f7f6dc302d885d1ab2d66b04e356ff0a",
                        "timestamp": "2021-05-05 17:03:53"
                    },
                    {
                        "value": "ece3f18788154b249625d589c5e1101ed54a07f4ed09c8b8b9076c6fddf34922",
                        "timestamp": "2021-05-05 17:03:53"
                    },
                    {
                        "value": "5299a5c9ba1296db0a9f804741b58ec7a0fedaef8937e3cdc21d3523e0449ee3",
                        "timestamp": "2021-05-04 19:03:45"
                    },
                    {
                        "value": "8f1062ba8f06b04a3bfd494b93bc1be307b7ebf64855965e8ba6c39ba2071da4",
                        "timestamp": "2021-05-04 19:03:44"
                    },
                    {
                        "value": "82cb1c94a5aab94f0c51581e1439829d277617146448553e9b23a736a2d7bd73",
                        "timestamp": "2021-05-04 19:03:44"
                    },
                    {
                        "value": "5930cfa7dd5664e104c299fce83451021349922b6b02774235eae6bd14fad464",
                        "timestamp": "2021-05-04 19:03:44"
                    },
                    {
                        "value": "c9acd6833aea14bf802ae636b5d47020b51104689bd18c29897d48a142322467",
                        "timestamp": "2021-05-04 17:03:40"
                    },
                    {
                        "value": "612d1888d98714893e69c4649a46a990c9c26367834d5be5afc05df15e913572",
                        "timestamp": "2021-05-04 17:03:40"
                    },
                    {
                        "value": "9e189d8d48a66d2f53c972275642da7cbc8ad51b20f04cf1d592bef360db50cf",
                        "timestamp": "2021-05-04 17:03:39"
                    },
                    {
                        "value": "7a2d3e8a1bc3c7ba4684a4d4952e48ba1b862fb593ae52deec715889f9f6a300",
                        "timestamp": "2021-05-04 17:03:39"
                    },
                    {
                        "value": "db14f4534f1f9989bc745ac68bc0b60aa7662b539795e224354b02b20f616dea",
                        "timestamp": "2021-05-04 15:05:20"
                    },
                    {
                        "value": "173797a7a7a881f3d6230015620bae28d21b4b41b7e568c2a881b3c0829dd67e",
                        "timestamp": "2021-05-04 15:05:20"
                    },
                    {
                        "value": "8353e30c6566795da3e5aa38a22b4707ee895cfa115ffa399cfbe7d57d00f91d",
                        "timestamp": "2021-05-04 15:05:20"
                    },
                    {
                        "value": "4e1409b1e80cfe5a5bda6bc58175d8e580d4e289f06ddd441135f3f06d97a6d4",
                        "timestamp": "2021-05-04 15:05:20"
                    },
                    {
                        "value": "97229e624c1d7c42a3c9996f539a74f461add77145f3eaef9a4a8f81b56d4d8b",
                        "timestamp": "2021-05-04 11:03:55"
                    },
                    {
                        "value": "0013853950647289e952326b93ce46aa3e73db654367ef3c005e29257db31fba",
                        "timestamp": "2021-05-04 11:03:55"
                    },
                    {
                        "value": "974e158ea37951d137839d4189279330aa2e85f5bafa4f273f7007673cd4d3fc",
                        "timestamp": "2021-05-04 11:03:55"
                    },
                    {
                        "value": "7cae99052e0a7ffa7781324d30152ee6383f79564d9b0627b2c2b5401f291281",
                        "timestamp": "2021-05-04 11:03:55"
                    },
                    {
                        "value": "658e0ac49c51ab8eefe51a1790f9b0a43e9cf7495e66334411f53a5c7200734b",
                        "timestamp": "2021-05-03 14:03:42"
                    },
                    {
                        "value": "7c6393b4e86ea5cec49c0f814b17e4bb85aa447c19896037252a94ff6416ce1b",
                        "timestamp": "2021-05-03 14:03:42"
                    },
                    {
                        "value": "ea7625aef7c946221703a7714b8353e6af13ea601afdcc9dca2410df46af1b12",
                        "timestamp": "2021-05-03 14:03:42"
                    },
                    {
                        "value": "2138325dd5e2825ee4086187a944af336476b0327e1ddae7563bb24523836e08",
                        "timestamp": "2021-05-03 14:03:42"
                    },
                    {
                        "value": "da47c7020957b0ae83f39f2e575fc0470ea64fd32bef8e57ea08451dc23a67ed",
                        "timestamp": "2021-05-03 10:03:33"
                    },
                    {
                        "value": "1b13d9405595e1e542ca11a278ac15a16d28b30752eeade3259c8dae30b53d40",
                        "timestamp": "2021-05-03 10:03:33"
                    },
                    {
                        "value": "45ba6a8266131def534de0343789c5280522bf88582384487af7bcd0548b75d4",
                        "timestamp": "2021-05-03 10:03:33"
                    },
                    {
                        "value": "15e60d9e5fa792cd5cc27efc82d3f678cb4b75e28db4ae0161674f48f91977ab",
                        "timestamp": "2021-05-03 10:03:33"
                    },
                    {
                        "value": "f3c279e61de77236f3390c91dee09f02aa01974e14e429426fa174e0ff8a7512",
                        "timestamp": "2021-05-03 09:06:55"
                    },
                    {
                        "value": "7449a16fc696e45fa2c1b96c9d2c785b9f54cca48c453f764fcaed0031943bac",
                        "timestamp": "2021-05-03 09:06:55"
                    },
                    {
                        "value": "b55552391ee123f26e577b412c0df78bd0a59644ec510d1e7e708feff12a2abb",
                        "timestamp": "2021-05-03 09:06:55"
                    },
                    {
                        "value": "2819d5d4fb071a9960f59c260bb1c8ee66ccdb3cf0fa86d71cf57b7f2b8ce082",
                        "timestamp": "2021-05-03 09:06:55"
                    },
                    {
                        "value": "3d0947f988743a495c85b5041d7fe4b8753b7539a4d87e068eeeaddabbf16d1f",
                        "timestamp": "2021-05-01 13:03:10"
                    },
                    {
                        "value": "0dec7f6c951a3281159d164b5bb06b2de106fa2b51942d8d5b662f49bbed881b",
                        "timestamp": "2021-05-01 13:03:09"
                    },
                    {
                        "value": "bdf5a3da02b58bfb46d332219100fe70c836312f754834298cc8deaf7774ead4",
                        "timestamp": "2021-05-01 13:03:09"
                    },
                    {
                        "value": "48d7ee8524b6c594ee30967ffa0b0c651ff0ea54162aa142e13fcd9c9a577125",
                        "timestamp": "2021-05-01 13:03:09"
                    },
                    {
                        "value": "7d9ade4c88f228a4bbedf573db66dcb0c64878c0c5179d5dcf014480c0dc38d1",
                        "timestamp": "2021-04-30 15:03:18"
                    },
                    {
                        "value": "c1213a12b0b441fb0eb8b74740b243a3ac24b3685c02a62897761e78381f6141",
                        "timestamp": "2021-04-30 15:03:18"
                    },
                    {
                        "value": "00b12204f9f4d1f3079dfdcb17ea31aa4c975ee452a6688e168ba37a623114f4",
                        "timestamp": "2021-04-30 15:03:18"
                    },
                    {
                        "value": "572e6066888624b7fa82b7bc17bbe0dc05440b4031cc71fc38f4d67a0571799e",
                        "timestamp": "2021-04-30 15:03:18"
                    },
                    {
                        "value": "d89644bac9a208dd08f8a48a91e0e62be92c654135ff2efe4ff419efb1bef572",
                        "timestamp": "2021-04-30 11:03:06"
                    },
                    {
                        "value": "fd7d59d19a68768e98c0f1b849c0f2a9f3dda204fb711ff2905641583bdc8938",
                        "timestamp": "2021-04-30 11:03:05"
                    },
                    {
                        "value": "ea55c997bae5ff028521b962c3077a56c962cf44b82686e549641ef7057d5852",
                        "timestamp": "2021-04-30 11:03:05"
                    },
                    {
                        "value": "7e4a209db66b5f10b6a9df6915c9dd693f3f091a4ac8af94c6d16df0f3d9f095",
                        "timestamp": "2021-04-30 11:03:05"
                    },
                    {
                        "value": "a9ac95067ca60281f298514048fd07edcb0c01005d7b2f3ba608709dc330fa5a",
                        "timestamp": "2021-04-30 07:03:14"
                    },
                    {
                        "value": "5f3183841935acebeb35c860dfacf744737174c6728c810d1a00ff5bdf9957f8",
                        "timestamp": "2021-04-30 07:03:14"
                    },
                    {
                        "value": "686a52a491b7e31fb584231e38ed6ac4c1821a5843464ffd537c6288ef8427a1",
                        "timestamp": "2021-04-30 07:03:14"
                    },
                    {
                        "value": "28e0affe70d48a6c6fe89b76dc56c59f93521a4b606dbb6fff60a84d382e9ceb",
                        "timestamp": "2021-04-30 07:03:14"
                    },
                    {
                        "value": "c9023147ae6c924b482ce1a2ee4377659c07a75836b91754834db9e8327efe35",
                        "timestamp": "2021-04-29 15:03:21"
                    },
                    {
                        "value": "bc88f7ce08e0f3cd87267fff8188fbdfa3fc9e733db9775d5f06eff82a39a3d6",
                        "timestamp": "2021-04-29 15:03:21"
                    },
                    {
                        "value": "68fa5c7578986b14dab2861f5c887f387ded73c6a3129091743a8f1751a4c518",
                        "timestamp": "2021-04-29 15:03:21"
                    },
                    {
                        "value": "cbfeed24522f6092b5e422d81dfece95bd919cc6cbb7cf673a764fd911f559f7",
                        "timestamp": "2021-04-29 15:03:20"
                    },
                    {
                        "value": "92bec04ef1adc9dae4084b2c26a5dcd07618af6d6efbf6241050ed7da5cdc37f",
                        "timestamp": "2021-04-28 14:03:16"
                    },
                    {
                        "value": "46359d208e338599a211c0d505c3d3537887c0fe112dde239399dc74f1e78ed8",
                        "timestamp": "2021-04-28 14:03:16"
                    },
                    {
                        "value": "99d92829843f6fcf0237bfd4b7ade6c259187ee8d0435dc3be346d92ba3368ce",
                        "timestamp": "2021-04-28 14:03:16"
                    },
                    {
                        "value": "ac4ecd3653dbaa7da06c6c6f6aa0b228ad6ac938db5e6dca6007b916f68e2fe4",
                        "timestamp": "2021-04-28 14:03:16"
                    },
                    {
                        "value": "1e046f6dcd3265264a9a6891cdc1814f382c7ae887b57ae23ceff53c7e1a53ff",
                        "timestamp": "2021-04-28 12:03:09"
                    },
                    {
                        "value": "270c5573646393ab13ca51a6cffaeaf9f57b1be9ea584014be35c3c3fb1676a8",
                        "timestamp": "2021-04-28 12:03:09"
                    },
                    {
                        "value": "554853af78e123ea4831b732cafddd36d29441188bb9c825ad662eae0d2d215a",
                        "timestamp": "2021-04-28 12:03:09"
                    },
                    {
                        "value": "9221c6b15c5b6bf7cbf601696a7b8a4efc2057b4f1478d0bfdc31ee7e55f9178",
                        "timestamp": "2021-04-28 12:03:09"
                    },
                    {
                        "value": "68a509a01131db8f97ffc6d199261402b36b3733f3c7f280cf5bf2787302e7b1",
                        "timestamp": "2021-04-27 14:04:21"
                    },
                    {
                        "value": "b7be1e431fc547efa86830c120f4d0d7927340cac3646332d1a8ed1581a193df",
                        "timestamp": "2021-04-27 14:04:21"
                    },
                    {
                        "value": "bdbb646d046af6858b33edba94be642db7765902372f07f50b649dd72f4d0774",
                        "timestamp": "2021-04-27 14:04:21"
                    },
                    {
                        "value": "91fa1797421a3393289ae3892d128158ca3a16efd453be49e0c38d5891deefba",
                        "timestamp": "2021-04-27 14:04:21"
                    },
                    {
                        "value": "8aabfb2b5aeee025f4a6d963c8761011efb74797e37ee89fd37ae5c23f7f2945",
                        "timestamp": "2021-04-27 08:03:41"
                    },
                    {
                        "value": "725afbc2222db24d11b6c4cee6b5222eb753d30f0a1ea5d1c52e408891106b1e",
                        "timestamp": "2021-04-27 08:03:41"
                    },
                    {
                        "value": "7674797e4ea2aec479188631375c204130040b0eea45bef48d0f0c0bac541a11",
                        "timestamp": "2021-04-27 08:03:40"
                    },
                    {
                        "value": "ec265177529ab61116c59e3361436b6c4f9e48bbef4488d2d3a97ebdb2f9837a",
                        "timestamp": "2021-04-27 08:03:40"
                    },
                    {
                        "value": "b01beabfc8bdf02d74c08f431ffb70f607a67074ccdaadfd4da8d5614879dbbf",
                        "timestamp": "2021-04-26 15:04:13"
                    },
                    {
                        "value": "00f2c3d90acc43620ca49351cea48c603955c50032ee5b6705c69bed68921570",
                        "timestamp": "2021-04-26 15:04:13"
                    },
                    {
                        "value": "8b93fc6fdb36c8c87b44684e4c6a88d8df5f6cd815942bf7ce63b0f688444aef",
                        "timestamp": "2021-04-26 15:04:13"
                    },
                    {
                        "value": "857c41cc9ed95bb9311294967ea8eb19955f1b82f4a81c21bab1f3bd8ca7c5bc",
                        "timestamp": "2021-04-26 15:04:13"
                    },
                    {
                        "value": "852d3890ed7348734c5f18da1141075129468263b43f82cec8ac7b3e4b9145ac",
                        "timestamp": "2021-04-26 14:03:40"
                    },
                    {
                        "value": "8ad095b5f3cbe5651719b70347c94f489a4a14d72a4535c68f9829fe8d0ec738",
                        "timestamp": "2021-04-26 14:03:40"
                    },
                    {
                        "value": "9a078cc450ad8a112283812c97c397a6440275925cde819407320829c655ba62",
                        "timestamp": "2021-04-26 14:03:40"
                    },
                    {
                        "value": "f0519a2a17ee42d5c8b3a9c01a8d678aedccabf3007f119eab6e64c8338a1cfb",
                        "timestamp": "2021-04-26 14:03:40"
                    },
                    {
                        "value": "21c7276ae4972be5439c7717d24cbd68b95065aa2a528ad18992b040de163e50",
                        "timestamp": "2021-04-26 11:03:43"
                    },
                    {
                        "value": "fe4171526fa7fd1ec7cc4f0e6658874e68ba9e25dc52b99ca2f50fd0bb1ef163",
                        "timestamp": "2021-04-26 11:03:43"
                    },
                    {
                        "value": "6e55f1b8766f046bbbf753fa1c908d8d0f1805164a2822503cc2c89060affeee",
                        "timestamp": "2021-04-26 11:03:43"
                    },
                    {
                        "value": "c889674476922af3c1a1d98a9f03897710d3304dcaeae7ab8b7bc98de854f6ad",
                        "timestamp": "2021-04-26 11:03:43"
                    },
                    {
                        "value": "283b797bd03b393697cd51a3c409dd4cd7343433af591ac5a94e698b12fc10d3",
                        "timestamp": "2021-04-26 11:03:42"
                    },
                    {
                        "value": "4a3e81cad41774501120af4bc6e2779000903f0effe27a0745d68f3576f832db",
                        "timestamp": "2021-04-26 11:03:42"
                    },
                    {
                        "value": "ce54ffdc4ae52c4600b5390c6c2442bfb5d0937af4877097e6b80c14e1947d88",
                        "timestamp": "2021-04-26 11:03:42"
                    },
                    {
                        "value": "5c537892164cdcfa2d6743f9b44ef5af810954602ac86b79b72c57f7ef8e5fec",
                        "timestamp": "2021-04-26 11:03:42"
                    },
                    {
                        "value": "37a8922f49037f65771bc1e4ab9d7fbb4b1c27ce2bc79fe618705f4d90ad7615",
                        "timestamp": "2021-04-26 10:03:35"
                    },
                    {
                        "value": "e110fdb6d419cc120ccbbf2e2121f3a95c2f60f55fea70a6f6bb0c904acb1251",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "f92bdb1a09c10efb47faf38b63921c9edd0ea5e4032e77882a20dc2d3021c264",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "48a877dfbd21c959e248af2669894015cf1d2a8cc5a461cb45df7514d7afb14d",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "fb1b3d85ecb0afaebc878f4cd09ffc66004dc0dae189e8d1952ab584bf8a01d8",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "ced2db1091094e51470fd796e037ee661067fded1e86ba34215bf7013a69bc24",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "d61388184a271614ea7f5b37f5b8380fb19ad24d041c8759a6e6bf80ddbda833",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "17dd37f3bb1fa402c30c21358f492bb64a70cb56e776d41515162ccf0a4e8231",
                        "timestamp": "2021-04-26 10:03:34"
                    },
                    {
                        "value": "432dc27473a2ca5168e30969aab3359bb01f5936babc35811f336bcc3f195914",
                        "timestamp": "2021-04-26 09:03:47"
                    },
                    {
                        "value": "1cc955c6de5e73b3ec63aa51a1152f53fe6c3a417557bb98b8d173dbbbdf9736",
                        "timestamp": "2021-04-26 09:03:47"
                    },
                    {
                        "value": "6c880b78ca74b128da2c902aa09e757e299198d368ca5890e5dd6bdd04217bd3",
                        "timestamp": "2021-04-26 09:03:47"
                    },
                    {
                        "value": "dc84d0ccf3ce90a77ca7a84883738624598a6d67738e9908c58061f968dc0d39",
                        "timestamp": "2021-04-26 09:03:47"
                    },
                    {
                        "value": "a14ae718bd486d1db0ac41a00f37ce34808fd267ee1286663a00f1baea7069d5",
                        "timestamp": "2021-04-26 06:03:38"
                    },
                    {
                        "value": "f1881d929254a1477878ca9d19e8bab034394515782becaddf2645afac81d858",
                        "timestamp": "2021-04-26 06:03:38"
                    },
                    {
                        "value": "6073932264633b32185fe25ff5c6d10fb39812086c6639f67136e71023ccde14",
                        "timestamp": "2021-04-26 06:03:38"
                    },
                    {
                        "value": "05b6ee8ad090962be89b9f9d1c604541bfc1914e94c245bad6f469988eed019c",
                        "timestamp": "2021-04-26 06:03:38"
                    },
                    {
                        "value": "85283d9b0397eb08ff3bfcba97e7e15de46c3f9e5939bebcfd6c3b8c07d2011c",
                        "timestamp": "2021-04-26 00:03:03"
                    },
                    {
                        "value": "ecc540938addc1a440ef6ceb7714a0b45153c04c28df4395e3de18181439341a",
                        "timestamp": "2021-04-26 00:03:03"
                    },
                    {
                        "value": "8a0e0263bef954d8c66f9e45dc83da5cbb64390e173d0b6888fd4984acd8d295",
                        "timestamp": "2021-04-26 00:03:03"
                    },
                    {
                        "value": "b573f800210680dc25d8f743ffe7490a14b5a94a86db41a35b0749746270cdc7",
                        "timestamp": "2021-04-26 00:03:02"
                    },
                    {
                        "value": "625140ec60caaae03895c18ad400c65f5d5b15f55c7a01eb419a4215d295a6ee",
                        "timestamp": "2021-04-24 18:03:30"
                    },
                    {
                        "value": "fb5aaa39bc4cb68eda0571d9c076d23bdd5917d278c6930e71d2cccb6f980b8d",
                        "timestamp": "2021-04-24 18:03:30"
                    },
                    {
                        "value": "19fca0a06de48b9c08edc508098704c74b8f1b69f8d3374cc776ab97d780d8e1",
                        "timestamp": "2021-04-24 18:03:30"
                    },
                    {
                        "value": "03805a08ddc03ad125ae1566868e0ccde7965350d760dc212a224ab10520a2d8",
                        "timestamp": "2021-04-24 18:03:30"
                    },
                    {
                        "value": "ba06bef45227ff0ac912a66434014b848348f6be9780e8d86de0ffcc8c5c2c12",
                        "timestamp": "2021-04-24 11:03:39"
                    },
                    {
                        "value": "5f67665a37e92a5c9cd7ab2918d43873a8957723e3c99a73a8d22f568af144cd",
                        "timestamp": "2021-04-24 11:03:39"
                    },
                    {
                        "value": "55c6b2315fb17b64cd21a37daab0e6b5055e6486813908b6b0514b5109bd5972",
                        "timestamp": "2021-04-24 11:03:39"
                    },
                    {
                        "value": "b9758df053f1eabb228466ff331ca43177515660e70e5ae976a287ebd99d299f",
                        "timestamp": "2021-04-24 11:03:39"
                    },
                    {
                        "value": "856d6f415b5e5e698f55f6901104315fd35cf7bd193eb0b07e73ac75fd8b668e",
                        "timestamp": "2021-04-23 17:03:38"
                    },
                    {
                        "value": "c7f0e2210bbcc3bed44d75548571d380cb7f21e1dde09749e36a9010f2525d8a",
                        "timestamp": "2021-04-23 17:03:38"
                    },
                    {
                        "value": "edff9b174a171438f2433112957718f27abe1a825bfb7694362270d362c78911",
                        "timestamp": "2021-04-23 17:03:38"
                    },
                    {
                        "value": "4b5ce0ee5ceefd8ee91cefbc7cd8fbecec7ed6191b4c968eabf84067e2ce5451",
                        "timestamp": "2021-04-23 17:03:38"
                    },
                    {
                        "value": "aed711716c0910be90c5082fa70b827f976b39ec756c17a67c831da94bd8a93d",
                        "timestamp": "2021-04-23 08:04:24"
                    },
                    {
                        "value": "7a6c8823914ae570f1b52ce056e4a15286cce9b9abc61b2d600fa72bb28281a0",
                        "timestamp": "2021-04-23 08:04:24"
                    },
                    {
                        "value": "790dade0c179d83dbb2a41692d09ee23757087f744d6e3fcf01f4af49ca83d55",
                        "timestamp": "2021-04-23 08:04:24"
                    },
                    {
                        "value": "4bdd654f8cc8c5d81642f60033f9118368da93d07bc5a82034c990d407a07e88",
                        "timestamp": "2021-04-23 08:04:24"
                    },
                    {
                        "value": "80513ce09728ee99387db56c825b6f2ec5ad274f5c90117d25ca822deeb98419",
                        "timestamp": "2021-04-23 06:03:44"
                    },
                    {
                        "value": "cc58e505c504c770a1031d30453615f7748b0618b872655ac79a059a072c194c",
                        "timestamp": "2021-04-23 06:03:44"
                    },
                    {
                        "value": "16eb5e2a64b372f6262ab29c04a835905de88a8be71c2c17a5431dcd5a45e487",
                        "timestamp": "2021-04-23 06:03:44"
                    },
                    {
                        "value": "537799d26cd267658140824ec49b0bdd9e1a9699dfaa227a09850176127ce6d8",
                        "timestamp": "2021-04-23 06:03:43"
                    },
                    {
                        "value": "c70e9173b6db63a207eaa33e35290e0bc29684473191f7e42a09705a17b494fe",
                        "timestamp": "2021-04-22 07:04:50"
                    },
                    {
                        "value": "e0bf21ef3c1cd1546e53ba980aa33cacfdb65ab46fbe5226468e3fe0aa5e7045",
                        "timestamp": "2021-04-22 07:04:50"
                    },
                    {
                        "value": "865b0f87dcd2c10afa2cb337c7dd2dc5e50051b71cce9799b14154ca98268c32",
                        "timestamp": "2021-04-22 07:04:50"
                    },
                    {
                        "value": "2a46aec0dc21ba85743f47c534c42fc66ba13459cb24a733f85ecfa1106501da",
                        "timestamp": "2021-04-22 07:04:50"
                    },
                    {
                        "value": "494b892495fb6f002fd36477446bfc59f686fe73710d55dc782de8512452e535",
                        "timestamp": "2021-04-21 12:04:16"
                    },
                    {
                        "value": "c9a6d2c0e0615ad107a1c5a1baa281badf012008a6372ce9da6e0939bf7bd097",
                        "timestamp": "2021-04-21 12:04:16"
                    },
                    {
                        "value": "2254b38deaa995cc95d0f352bce2a59cd3a38740d7a4f1c3afa8108ee3870428",
                        "timestamp": "2021-04-21 12:04:16"
                    },
                    {
                        "value": "f5b24f949895b74aa3b6bbb47e215f55f1846bf82bf462db83eff295e72fb5f7",
                        "timestamp": "2021-04-21 12:04:16"
                    },
                    {
                        "value": "154cabf3bffdd60efaad0ad3223ff39a509068630441f4918bfaea72f45553af",
                        "timestamp": "2021-04-20 16:04:18"
                    },
                    {
                        "value": "b9ecf814b7f31a8ee1445d0256ba7a74f46d3e8f0bb588d10c54cd7f7f0fc202",
                        "timestamp": "2021-04-20 16:04:18"
                    },
                    {
                        "value": "373fc5f1322a299503608912f948327c789556a8416d8ce2226ab29eff6438ce",
                        "timestamp": "2021-04-20 16:04:18"
                    },
                    {
                        "value": "e724dfc4bd9eeeae5ba1421d1985b5bc6c773d939879dc8161674297d62c8773",
                        "timestamp": "2021-04-20 16:04:18"
                    },
                    {
                        "value": "6f4fbab85c58d588450bc856ceff3894645e0033b4c4d2684184a8430c01daa4",
                        "timestamp": "2021-04-20 09:04:44"
                    },
                    {
                        "value": "9e4eb9092ebe0889cd9660c647159a73e9414c0c6705f00cea2c175f5a3774e1",
                        "timestamp": "2021-04-20 09:04:44"
                    },
                    {
                        "value": "852cc855a1aa63d081ebeec5fd688a3c80d50a14d80c760256c4b46208d77b8d",
                        "timestamp": "2021-04-20 09:04:44"
                    },
                    {
                        "value": "48d5d5bc835c9bfa24c2f7fb0e3149190639d1d53eb99fac9b6a97df0f6d2908",
                        "timestamp": "2021-04-20 09:04:44"
                    },
                    {
                        "value": "49f02b445bfe50dd1d2cb964c7ea3c489f22befdbeef0b3f575dc7699accb58e",
                        "timestamp": "2021-04-19 18:04:11"
                    },
                    {
                        "value": "88e4cafa9fe18c0b4f53f5e0d176d78bf9f81bb02328ec448fa644be018747a4",
                        "timestamp": "2021-04-19 18:04:11"
                    },
                    {
                        "value": "af12d9632f6c26784e21b9781ec134ff35f46f044c41768f5522807c30df10bf",
                        "timestamp": "2021-04-19 18:04:11"
                    },
                    {
                        "value": "9c2725c92b6d2ab8d0a3d786358751d8a449fd8bfd02adce7e80bd5e07714d93",
                        "timestamp": "2021-04-19 18:04:11"
                    },
                    {
                        "value": "5fb565b3d2e1edd29393612828fad798d317dd3f7f0d988659d79a8a70209ad5",
                        "timestamp": "2021-04-19 17:03:45"
                    },
                    {
                        "value": "c9933f662621bcd9114d34887587e51d6a9e31d525381b68783f865472426a44",
                        "timestamp": "2021-04-19 17:03:45"
                    },
                    {
                        "value": "fcde2e5b8322c7ecd6e0a0787e0ed35ce2a6c77da7c31b882c39613b1bfa7b36",
                        "timestamp": "2021-04-19 17:03:44"
                    },
                    {
                        "value": "61b1619f5d3f4708cb0da8b1fc6b148d7e5352516c3e16fae6faffb503fa413b",
                        "timestamp": "2021-04-19 17:03:44"
                    },
                    {
                        "value": "e2d6a847ab91cf1c87324759a6ba14ec18adc6569ffc92a3ae1f5ed891f9064a",
                        "timestamp": "2021-04-19 13:03:41"
                    },
                    {
                        "value": "a43c9fb6ba3c066fc3c90c98240ac661d7458c08e9caeab886a88e80f4b70ba3",
                        "timestamp": "2021-04-19 13:03:41"
                    },
                    {
                        "value": "c0565af2331df2f4c2b1dd0d96200c21dadb9add0a3e1debaba3b241c38bb3da",
                        "timestamp": "2021-04-19 13:03:41"
                    },
                    {
                        "value": "3027df855cd3207c99dbd2dc1d4534f728046202c16277c24c39855632089e76",
                        "timestamp": "2021-04-19 13:03:40"
                    },
                    {
                        "value": "0ea50e48dd6124b6515f770b643592a3c2a9f6f0be212dd022151adbb26889d4",
                        "timestamp": "2021-04-17 18:03:41"
                    },
                    {
                        "value": "a50d0e71d83c1acbeca3a01750f9d22be694cec84c34f5448d51ec6d69c740e9",
                        "timestamp": "2021-04-17 18:03:41"
                    },
                    {
                        "value": "ab77ccf41d38665285cbc2d460172cc15f9376fc3160da1f3d62e4b4368f439d",
                        "timestamp": "2021-04-17 18:03:41"
                    },
                    {
                        "value": "71d2d9c3f5293bb5180e233d1e91a1cdf177e9aa29fa0a48f083da6902ea9b48",
                        "timestamp": "2021-04-17 18:03:41"
                    },
                    {
                        "value": "50e9a3c031ed5bddf126854c2cb91430fff29ba5461baddc79642876a2ecb812",
                        "timestamp": "2021-04-16 18:03:43"
                    },
                    {
                        "value": "b2efcd70bc0cf54b0fcbbbab8550488be86b3a99a0bae8cabd8e61c215b4d1fb",
                        "timestamp": "2021-04-16 18:03:43"
                    },
                    {
                        "value": "9fb0059e56b2fbf7fa046cbaa260bae85720f7d9462e9654786d5ffb1e5c8b12",
                        "timestamp": "2021-04-16 18:03:43"
                    },
                    {
                        "value": "8ae581c89d4ac844bd340c06f3f33831e23377cddb84dd08a548479cae9df126",
                        "timestamp": "2021-04-16 18:03:43"
                    },
                    {
                        "value": "a78d223069f5857f119ad1919a9c9248922a450c2f648736c8ab9f067c667df4",
                        "timestamp": "2021-04-16 14:03:39"
                    },
                    {
                        "value": "a64fb325fa611518c20644dfbe5728eb7767caeb63df08c4935dec5fc4ffe988",
                        "timestamp": "2021-04-16 14:03:39"
                    },
                    {
                        "value": "68c031117ef14dc9531b03de2e2e7ade8bc1df1f42b7f7c64f1ab1e64f74e831",
                        "timestamp": "2021-04-16 14:03:39"
                    },
                    {
                        "value": "96fef4646ef03d6ed22a71ad5e260b8dd82cd0c5007ae45701ba2bbde1b3dfc9",
                        "timestamp": "2021-04-16 14:03:39"
                    },
                    {
                        "value": "98b9dc9f5b4f3497ac183ceb6697849616df8f3988aea363a41948eabd5ccaac",
                        "timestamp": "2021-04-16 13:03:37"
                    },
                    {
                        "value": "7b309f5521adf12425f1283d64aff52b9b22cd645dbc2de357a851af9388093f",
                        "timestamp": "2021-04-16 13:03:37"
                    },
                    {
                        "value": "652b5c7ad654e8c936f09779685a9184f14180b73f86f489a7075fad45c568ad",
                        "timestamp": "2021-04-16 13:03:37"
                    },
                    {
                        "value": "5fb8b22a773eb50d70b1f58a72dd7903aa7162b40b64326c0a9985027943e083",
                        "timestamp": "2021-04-16 13:03:37"
                    },
                    {
                        "value": "f822c42644dd6b8b18f5799e7d40a5f4de0460e47d26b124d9e9d71c0d105b3c",
                        "timestamp": "2021-04-16 07:03:40"
                    },
                    {
                        "value": "a446bdd365d112ece62cea53fe68bf0204c3137766108f5c247a7a83314b067c",
                        "timestamp": "2021-04-16 07:03:40"
                    },
                    {
                        "value": "70def7c02d96cb8aab6702e0d6f32c72d7fafbd2b883e09007de9fe204cd3f59",
                        "timestamp": "2021-04-16 07:03:40"
                    },
                    {
                        "value": "c533f242daa02392339d538399371ffe73b504d707bb3ac57d9bf5fe2b76229c",
                        "timestamp": "2021-04-16 07:03:40"
                    },
                    {
                        "value": "4750b53054697c5ff9a8b607efb24934d65e3ef64f53f8dd2035e3077b4b5aa8",
                        "timestamp": "2021-04-16 04:03:38"
                    },
                    {
                        "value": "47754a503507a45c3a21c14985260eaee119c82ee09283d2d8043400ec87be5a",
                        "timestamp": "2021-04-16 04:03:37"
                    },
                    {
                        "value": "12521239ad94fb0cc1af14e9e3a87e7d56bd46e687edfd53b9aa2533eaedc3d2",
                        "timestamp": "2021-04-16 04:03:37"
                    },
                    {
                        "value": "02b07b8086d052cca5b1f10089f93da604dfdf71d09f0370750f371e50bb0221",
                        "timestamp": "2021-04-16 04:03:37"
                    },
                    {
                        "value": "be7a4fb3ed179c2483130cd6bb808039ae004eb6b68c7082b3a8291f802facc7",
                        "timestamp": "2021-04-15 14:03:37"
                    },
                    {
                        "value": "5ab7a75740cc2ca45d2277e4d6348319077615b95e2fb28968d64bc4644adac9",
                        "timestamp": "2021-04-15 14:03:37"
                    },
                    {
                        "value": "c9afe6904407e9b60e73edf93efbd932b6725f0f4f33306117ffc9854c21cae2",
                        "timestamp": "2021-04-15 14:03:37"
                    },
                    {
                        "value": "26f671465cfa5650a49cbbe4da70dfec6e03993ca7114b5e4151a9bc0cd3e5ad",
                        "timestamp": "2021-04-15 14:03:37"
                    },
                    {
                        "value": "41284ca214a3e71117be6cc7023d7b3fe45f46651b4025b2c11c8125eab216c4",
                        "timestamp": "2021-04-15 11:05:41"
                    },
                    {
                        "value": "0c46fa7ceeccf95135124fcdc560ff3874a97f17f032bfa23201abeeb7084e40",
                        "timestamp": "2021-04-15 11:05:41"
                    },
                    {
                        "value": "1621fca6a68cd980333bd159e508595b0d5a6397f6eae002f7f4183927133f76",
                        "timestamp": "2021-04-15 11:05:41"
                    },
                    {
                        "value": "0e4387b063b758f6918ed46cf1fd4f571c0a77f26a60e3806f2f4d4a625f0f2a",
                        "timestamp": "2021-04-15 11:05:41"
                    },
                    {
                        "value": "ced71a7ebe79a146d3a15b2b3c53550d6f3004d2aa0c030d2a945761758caa6d",
                        "timestamp": "2021-04-15 08:05:51"
                    },
                    {
                        "value": "fb17b85aa2aeaa59cb6db3e1c6eb68f83a570b5de3f10d3b09dd47a4aebdedea",
                        "timestamp": "2021-04-15 08:05:51"
                    },
                    {
                        "value": "8ce1ced58004b91fdfe144fd256baf0cfb8b0f83f6ec3018580b57df3bba4aa3",
                        "timestamp": "2021-04-15 08:05:51"
                    },
                    {
                        "value": "a163fb0fc84e6bcfec686b9b39c1ca29a95849371c0e4e057b4862464033d4e7",
                        "timestamp": "2021-04-15 08:05:51"
                    },
                    {
                        "value": "b3ea4e157f7722523ec5e1d805d44d4d6b08147d28a7276b56597b81bf8e6c53",
                        "timestamp": "2021-04-14 21:03:49"
                    },
                    {
                        "value": "39845ed843d294b766d7160c7b6bb765fc1b948efb60fd15e94cdf5f9e0e1382",
                        "timestamp": "2021-04-14 21:03:49"
                    },
                    {
                        "value": "b2cba55143c23a1a0530cfddcaac25071cd343b565e192a3fb9023aa1e8d9ccc",
                        "timestamp": "2021-04-14 21:03:48"
                    },
                    {
                        "value": "4b19000b7e3d4b103fcb2c7be4fe4ca0a18f810a67b1f290e0416e0ebc8ae1b2",
                        "timestamp": "2021-04-14 21:03:48"
                    },
                    {
                        "value": "1dee59cf62b44cd513ab3ddf71998d6593fe955bb39839aa169d7838a36fa68e",
                        "timestamp": "2021-04-14 14:05:52"
                    },
                    {
                        "value": "0f86d37e745368f3cd3c337b106228df4f0c48157ee44f8c836c34e985a3d51d",
                        "timestamp": "2021-04-14 14:05:52"
                    },
                    {
                        "value": "82283c1650cab1beb9be275611497f64362929c707f90f0649cbe986d2d5aac5",
                        "timestamp": "2021-04-14 14:05:52"
                    },
                    {
                        "value": "b5d8a24e97905a0333243481930777008b654c43dd04bbf995d75334183c8070",
                        "timestamp": "2021-04-14 14:05:52"
                    },
                    {
                        "value": "779472f7e90f21867f49b117bc1317eb85ec0e1d54b85d4734883d7ee58d421b",
                        "timestamp": "2021-04-14 07:03:14"
                    },
                    {
                        "value": "75207a57f52f13f7147cef28385e857e910efde97558694525f636622fad8fbd",
                        "timestamp": "2021-04-14 07:03:14"
                    },
                    {
                        "value": "0d08b54442ca31c8e6efd08954f3e1ad3a0246ce4d4dcff6a41e3e87e25b1029",
                        "timestamp": "2021-04-14 07:03:14"
                    },
                    {
                        "value": "3a7994df6e69118ca5778366f7dbf26e37430d3b9d20a163ace830e5a1971ce9",
                        "timestamp": "2021-04-14 07:03:14"
                    },
                    {
                        "value": "5af6eb871665b3bc59aea7a8bd187c80fecf392b7f5bc4e4bfdf54e15d9c15e9",
                        "timestamp": "2021-04-14 02:06:13"
                    },
                    {
                        "value": "1f5992fbc69275585f817e70e7c8766e6b7a03e1b17386de9b65de6d48ee852c",
                        "timestamp": "2021-04-14 02:06:13"
                    },
                    {
                        "value": "82be061b2bfe48ee3a9f76ee99cf6f3ed712c0c1393ad4a9f064cfc4d11cb53d",
                        "timestamp": "2021-04-14 02:06:13"
                    },
                    {
                        "value": "a8f1fa1b80fda001331fc4cc87470e189c55653ac5d486e6bf3de72720187022",
                        "timestamp": "2021-04-14 02:06:13"
                    },
                    {
                        "value": "607ef21350a9483bd2570d356cf8016cfde0c50b58d18ea53f0f26cd6060fc76",
                        "timestamp": "2021-04-13 09:03:29"
                    },
                    {
                        "value": "0b29230d55e89c425c2d9d707a09a6de31ccf4b093f51f6ba1027f0edd313584",
                        "timestamp": "2021-04-13 09:03:28"
                    },
                    {
                        "value": "6a3dbe59e320ddf283fdf1177f3345bba999e7b55e5c2fdb1eab9e2247b97eb3",
                        "timestamp": "2021-04-13 09:03:28"
                    },
                    {
                        "value": "e07b53897e282a020b5f62e4ae4b78b0517e7cf5797ceb7ecf8ef90a52fff6e2",
                        "timestamp": "2021-04-13 09:03:28"
                    },
                    {
                        "value": "b0fd3147d72cf3cbe23587740ca4a718671194b47aa5a4d030e689b4e8e1fd28",
                        "timestamp": "2021-04-13 08:47:30"
                    },
                    {
                        "value": "b4b400cdfdd91983378500f8961b7e02b9a4e1047deb9ef0093603f5ae4f25cc",
                        "timestamp": "2021-04-12 18:03:38"
                    },
                    {
                        "value": "43a2069e57baacb53de658addca8950b570ce19334cd6c617c4c1060f9296fb7",
                        "timestamp": "2021-04-12 18:03:38"
                    },
                    {
                        "value": "5e9926cf6d5841018d89e870ed02a52104b2db104bad0450ec4e47303262ef76",
                        "timestamp": "2021-04-12 18:03:38"
                    },
                    {
                        "value": "2083ab1a1176b41ed9264ea35b404b5c99737919e29d318653588ae75cbb0e6f",
                        "timestamp": "2021-04-12 18:03:38"
                    },
                    {
                        "value": "8ce7c9f67ba5ec254bbfcf5f45e8ee2822baf2b36313c69b51e887ad93b6044a",
                        "timestamp": "2021-04-12 15:03:38"
                    },
                    {
                        "value": "dd987f07d4e8f3d29758757aea5ff5fee6fca9927d79e18f429b513e42491a09",
                        "timestamp": "2021-04-12 15:03:38"
                    },
                    {
                        "value": "17e9ecebbff7320f12b691cd4c6e6ff4250ad1536a3b95089bc6ad7ed46356a8",
                        "timestamp": "2021-04-12 15:03:38"
                    },
                    {
                        "value": "d7e71646c9427067e810e1b278beb6ad1f07e6b0c5003d9be2611178e4f5470c",
                        "timestamp": "2021-04-12 15:03:37"
                    },
                    {
                        "value": "6e110b6474993b690f1bf6f2edc01446010ce9bef5375991693e2bffa81d14fd",
                        "timestamp": "2021-04-12 13:03:36"
                    },
                    {
                        "value": "058e9a5e9aafe081bdc3f6bb5410e351bb3fa5ea749a997cce3db7a6d1647cfb",
                        "timestamp": "2021-04-12 13:03:36"
                    },
                    {
                        "value": "ef885d515b4d6e1bcbd650edf17a089b6c7d5f36fcadfe65491cea49f0f53b91",
                        "timestamp": "2021-04-12 13:03:36"
                    },
                    {
                        "value": "bde02a4b70a0070b28f0e812f6f7a857f2d57e2c8b6f3d0f11c9bb6a66cdc05a",
                        "timestamp": "2021-04-12 13:03:36"
                    },
                    {
                        "value": "50fd1dac868b22f3c0fc0a1fbb9c8ca7c4180750d2382c4e444fef8749ee13ae",
                        "timestamp": "2021-04-12 08:03:43"
                    },
                    {
                        "value": "3da0ff15c077f76e57bd5c116e8c85599fc420a4433b19c705f0d437f7368cec",
                        "timestamp": "2021-04-12 08:03:43"
                    },
                    {
                        "value": "087a6bf8cd6b666d0cc664adee23ecc105b4aa50e852075c7b6a6c1504d4ffb1",
                        "timestamp": "2021-04-12 08:03:43"
                    },
                    {
                        "value": "9dbdef7d88f84edb9e7e45115e8186915f6c37b0fd7b29b5db64689b14f28b9c",
                        "timestamp": "2021-04-12 08:03:42"
                    },
                    {
                        "value": "d80f61a18e120cee699b859e4d84e518e5102357fcad156a000d439590750162",
                        "timestamp": "2021-04-12 08:03:42"
                    },
                    {
                        "value": "fb23a007cf696e3c6b119c61b62824abc56b47a7e2f82337e890acc9024bd88c",
                        "timestamp": "2021-04-12 08:03:42"
                    },
                    {
                        "value": "513357be2837bb1211c3fe2a32d7e6cdecf75f6cf0da1c2f0d198a38e3cdb759",
                        "timestamp": "2021-04-12 08:03:42"
                    },
                    {
                        "value": "1744396f535974d7df009a067fdcb0d34c03b44a10bd8ff3c3877f2d1ac74ef5",
                        "timestamp": "2021-04-12 08:03:42"
                    },
                    {
                        "value": "5b578a81fa5276232529484ff00db9fca64a7879ab4a7abc652c9d0d3e1461ba",
                        "timestamp": "2021-04-12 07:03:49"
                    },
                    {
                        "value": "f2a1b48f82208d3d1bf4e613fd7c6a16f63c96ebb2c31ed502ec67cb6768b2f6",
                        "timestamp": "2021-04-12 07:03:49"
                    },
                    {
                        "value": "588692919a751e9852cf32e0b1da42c347f2ff99a2afd2378c6a7573d7a532fc",
                        "timestamp": "2021-04-12 07:03:49"
                    },
                    {
                        "value": "a431a853ede615d41f914ccccc84d6a9767de73d92b991b4446b256874b46979",
                        "timestamp": "2021-04-12 07:03:49"
                    },
                    {
                        "value": "30da807f99b8a8d041325afbb56b731afb0b8728f523608e3ed4f351e717465a",
                        "timestamp": "2021-04-12 06:03:41"
                    },
                    {
                        "value": "47ec60c36874b3618bf7ec1eea15e49dd9c3cc1ed87304c10f682de0a0e3e2f8",
                        "timestamp": "2021-04-12 06:03:41"
                    },
                    {
                        "value": "9914c8ad9ea0318f57214c6eb2f2e3f891b71ba054a9de071432ec92eb6bfe0d",
                        "timestamp": "2021-04-12 06:03:41"
                    },
                    {
                        "value": "29943f203f544cd1f2b51396e1b371b017b705a3d43ff16e3a8fcc7350e629d9",
                        "timestamp": "2021-04-12 06:03:41"
                    },
                    {
                        "value": "6ff1aab59b65185696552624ee65603a77126246b4b5aea95e465f472914247b",
                        "timestamp": "2021-04-12 06:03:40"
                    },
                    {
                        "value": "a48a4f0d917d131353d46e23144550e83a39b26ab311287e4cdff30c009d5f66",
                        "timestamp": "2021-04-12 06:03:40"
                    },
                    {
                        "value": "bcaac39113bd17158fe86a77328f97e9c3fa14860c9c4449a8ae0768c85243f4",
                        "timestamp": "2021-04-12 06:03:40"
                    },
                    {
                        "value": "f6b230f7a36830e443aeaf69c1826f3188c8c2247c6711d0148e12ec5a29dbb1",
                        "timestamp": "2021-04-12 06:03:40"
                    },
                    {
                        "value": "da03fa70ab89de07cf3dad3547c45f576c29b8e783cf895465db3fd5d7f72d3c",
                        "timestamp": "2021-04-11 08:03:47"
                    },
                    {
                        "value": "680d5f98cd089a73e5902b3ff4e91511430c2a2c07cde11b44882fbcde670395",
                        "timestamp": "2021-04-11 08:03:47"
                    },
                    {
                        "value": "48b3081dc157057d29e291b0023fcf613fb5bea2ab1639b966e26b3dd3312ef5",
                        "timestamp": "2021-04-11 08:03:47"
                    },
                    {
                        "value": "d50a30d5f860bf7e0baa13c83bf55bfdf827291f6e3913af99f8339d0d26996e",
                        "timestamp": "2021-04-11 08:03:47"
                    },
                    {
                        "value": "5439dd568ebf1441865be383a5dd3103a6734b1c36a892d8a13da11042bf5365",
                        "timestamp": "2021-04-10 12:03:31"
                    },
                    {
                        "value": "8273b37fea1e9aea7214a317a956112732db2fcf3d9b72d7cb285a2018961653",
                        "timestamp": "2021-04-10 12:03:31"
                    },
                    {
                        "value": "1877f63f7f04593751e4a821dcdfc4b40cfc0760b34f91d698c65d316c4cb26e",
                        "timestamp": "2021-04-10 12:03:31"
                    },
                    {
                        "value": "975e038f237c10747eb8d19128620e71587d47400a6874fe327499df8aa386d7",
                        "timestamp": "2021-04-10 12:03:31"
                    },
                    {
                        "value": "6dacc16e217792d7190c601fc43f351fa2b5ecbaacf98207571d73bdf7b2f235",
                        "timestamp": "2021-04-09 14:49:41"
                    },
                    {
                        "value": "a85099311261ee57e6a52d3bf41f332fd23989b1521c5557400a93d3f96b98dc",
                        "timestamp": "2021-04-09 14:49:41"
                    },
                    {
                        "value": "b2aea6928b9a98b580bbe69acee4a2416acad0e22abace0a0145c54f568b7cc8",
                        "timestamp": "2021-04-09 14:49:41"
                    },
                    {
                        "value": "b119474f47acd27e867c1296e09f8aaebe1d40e93b2103126a2a2784c0bab954",
                        "timestamp": "2021-04-09 14:49:41"
                    },
                    {
                        "value": "84e98f3890f5726bce09f463487b93b93de8edff0ba96fb07e06631422ab71d0",
                        "timestamp": "2021-04-09 14:03:41"
                    },
                    {
                        "value": "a086821049463b0bfc414cb3763c4f82688182d2d018ae5c9cd472f59f9e36ff",
                        "timestamp": "2021-04-09 14:03:41"
                    },
                    {
                        "value": "038be70d00970bdeed90434c6f0281c9bb765909ce3c88c20e98c98e3b567d5d",
                        "timestamp": "2021-04-09 14:03:41"
                    },
                    {
                        "value": "b8d236f33e07d1671fc004dda253afc134068a09a65c5933b460030d35d8c21e",
                        "timestamp": "2021-04-09 14:03:41"
                    },
                    {
                        "value": "42d8f043d7c1d38fed2466455300b2cb1f26b8dcafefa53ba12cbc1415f3f47b",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "5dcc3b4b82362f7d7a7ba4f485ecb1382e4b8d8dd9434dc5226564f5830d4d15",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "2bf1f784b019210a10eef61e5af8abfbb9e02748cf9d6718f4bf6b3f72661779",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "d4859be18ee8df3a4f73c3ccad40cbd8c9edade5d1e8ce775b9d60bc6acf1695",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "f9bf29d26adf148da379ff2fbb9b7a8381911a9f4b3fe5761483857dbb101f07",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "6ccab6ead2b6f29b654c3ee88d499a01021aa2fe7cb9135c6f6e0bc47b0671d9",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "a78e2922a71640ceaab1d98b56e1e6807f4b9c9f303383d9ed5b677aa5b5675e",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "48b73d4859f483fd899164664707f48490feab53e63582729c8320cbf47802fd",
                        "timestamp": "2021-04-09 10:03:34"
                    },
                    {
                        "value": "e86666a44ef75bc7d014aae08a20304ad12be061a3e318c6639ce3886f918857",
                        "timestamp": "2021-04-09 06:03:31"
                    },
                    {
                        "value": "83238525ac7665d9b4119a287e45aa95a04bc971dd46fde4cebffe92d337f425",
                        "timestamp": "2021-04-09 06:03:31"
                    },
                    {
                        "value": "82a4d8eb8b002755e42621fe0a3370f7356c1116c4e6d977e4b853bcff32898b",
                        "timestamp": "2021-04-09 06:03:31"
                    },
                    {
                        "value": "779eeda6d0720fba8df941954d1bd4c04d4b60e1488b562ec2a77c37c72796c4",
                        "timestamp": "2021-04-09 06:03:30"
                    },
                    {
                        "value": "c902ee96e1452a3d04cc4714bc9907a0434ec3d3a6865ef61f4f9fda15ccff26",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "35297a2ddcaf33081fdb735d67d75f046965b8667372ece76507288db5a53218",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "84f28d28b63ae57104a5840373d8debeec9be6886be4051e0bd965b1250dda90",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "1b589caad0c61fe9f2c69389be4ddaf1a09ecfec9ab2fbb2315588838a382119",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "890b8392c6add902841f3da3e66d6d82eb571b41c5abbc7df0685935e0d9d730",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "c11fa4ba2d6916dbc731f4104aeb4fde09d55a569daa308c3f71aab86c970c03",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "91a4088de46853519f714462e98f3f8abd09ca5c71903639083cc3e1036a8406",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "121cc359bae5f5b0e1c0100b76bdb755a40e7c06f2f1f73ea83b0d9a15b76536",
                        "timestamp": "2021-04-08 17:03:51"
                    },
                    {
                        "value": "93fae9b54c0f1960139aa4007a0b8f695d61cdc5219fbfbe885c850a4f43a92d",
                        "timestamp": "2021-04-08 15:03:32"
                    },
                    {
                        "value": "98bf20a283219c4cc786234b7d389766fddbe3b095d13c9109f5406128e83103",
                        "timestamp": "2021-04-08 15:03:31"
                    },
                    {
                        "value": "3e39c71277fd492f9e995a5913176bebd8f78b9cff306a9ce6e5c8dba7600015",
                        "timestamp": "2021-04-08 15:03:31"
                    },
                    {
                        "value": "b3a558ce1afb23e3e6672c43512e7dfd7ddb2048af3180031bd581969a2c96cd",
                        "timestamp": "2021-04-08 15:03:31"
                    },
                    {
                        "value": "b0511bd682e5d539f05be2c97d5e8e23dddc48cc32aaa6c25b6a6ecea4dee475",
                        "timestamp": "2021-04-08 12:03:44"
                    },
                    {
                        "value": "5eb2ca7ef67e0748b9ed095660f89b0fe7972c30cb06f56d05e75c0899305831",
                        "timestamp": "2021-04-08 12:03:44"
                    },
                    {
                        "value": "53ce83c8b03890f5037d9b9ca3ef2b1438760ad61c5bd90020c82ee7c02aa6ea",
                        "timestamp": "2021-04-08 12:03:44"
                    },
                    {
                        "value": "64f1791681e261b0e652130f8f7fca8e1098a4c03fee49652a14d682681f85cf",
                        "timestamp": "2021-04-08 12:03:44"
                    },
                    {
                        "value": "6c4628d2a5d9fe67953d21a7ab0ff49bac94b69fb32b5a1fa94ae8cb71a4d693",
                        "timestamp": "2021-04-08 11:03:41"
                    },
                    {
                        "value": "7463dd50c8d2a39c5b1cf06d63bc391fd99a842bcc3c3a9cad7972a4acc24dfd",
                        "timestamp": "2021-04-08 11:03:41"
                    },
                    {
                        "value": "56e676fae09b69a9eae221e0590776815f7fa38e7cc90822cd3060ea289d7547",
                        "timestamp": "2021-04-08 11:03:41"
                    },
                    {
                        "value": "d68bf256d203eb2b6630f8d9d5ff63ae674adb94d0be58bdd2ce9e6c9269ca30",
                        "timestamp": "2021-04-08 11:03:41"
                    },
                    {
                        "value": "9f578e7bf0375c366223406cd1504c79feb2f2408f88ffbccc22cd1bc3237389",
                        "timestamp": "2021-04-08 09:03:37"
                    },
                    {
                        "value": "ca146513d9ec6ec60b81b20fd9aa2f262c54d447e8361417c3c4b7678e51e6a5",
                        "timestamp": "2021-04-08 09:03:37"
                    },
                    {
                        "value": "2fa1b077d0c0a2f292e166dd47f72ca444ceac3c43a1936b4f9a03d7c34d032a",
                        "timestamp": "2021-04-08 09:03:37"
                    },
                    {
                        "value": "4f450fcf02d7006fd4fbea8c2cad999397672d44864f1e8c504633ce53c3d53d",
                        "timestamp": "2021-04-08 09:03:37"
                    },
                    {
                        "value": "bdbb0129fd9d6760cb29d06b764a239a2e21de7792cf0415211fbdf5551519fe",
                        "timestamp": "2021-04-08 08:04:06"
                    },
                    {
                        "value": "2e10edfbe7c4a7c9220db55d3c6f921262366908277a5483ff0faf5579e194f4",
                        "timestamp": "2021-04-08 08:04:06"
                    },
                    {
                        "value": "9c6abdf1e5ff719e261ea153555b981cd907ba5f79f50943d679d59967eba445",
                        "timestamp": "2021-04-08 08:04:06"
                    },
                    {
                        "value": "2ff8f753993c41f78211d7b4c869de2d182410042e74d6b0296d732795b0c0fa",
                        "timestamp": "2021-04-08 08:04:06"
                    },
                    {
                        "value": "18d465a5867ee069480bb9be8eb259be41cc008e487b7b6a3cad14e3559963a9",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "64c5f02d627f750a5b60a196ddd53fc03f6bf632e7643cf996effaed8981e05d",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "f7e96b7c6612b709e413bbc8c72796cadbb7ce91ed17ec77d5ba4d4422e729cb",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "b49f6a646a9c6cdc0456310e02695f338b0a9fe352a7b8edbdd3ed8e1ffc069d",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "6a708470ee13d86b51352b69e755a9bcbd2730ecef34133dd1b5ed10b95f56a3",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "94b77677478f890b5f9e0561aebc0f66b1b2fc4494d016e9b5a70ed0ba20980b",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "6bb8fa14bf9c650a67541ffedff2e3f1c055454b90489653c95aa39284d7eb92",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "7b1f7ca6d7203473484a7f221f68c56eff50d196db18a18e9fcf0142dd60a02d",
                        "timestamp": "2021-04-08 07:03:57"
                    },
                    {
                        "value": "228d3b8dea2bd47cf98d69b89b5acdfa3a1425e201217882edc93de72fe0e37e",
                        "timestamp": "2021-04-07 16:03:49"
                    },
                    {
                        "value": "c1a50d572dbc98c644df6d3799f7fa293b9d1740df688d6d76377ad7b70c3f23",
                        "timestamp": "2021-04-07 16:03:49"
                    },
                    {
                        "value": "029626fb22c7446fc6f2abd2551252a08507c68fd035d41694e2c77b6e868698",
                        "timestamp": "2021-04-07 16:03:49"
                    },
                    {
                        "value": "27196fefe461d39e458c548125432f44b8e3df931bc68b7a0f3edb04dd2459c0",
                        "timestamp": "2021-04-07 16:03:49"
                    },
                    {
                        "value": "520bb96a10b5e5be76d5c17f94ec05581d1e8c12a3a2731afb7624c309bd05a4",
                        "timestamp": "2021-04-07 12:03:45"
                    },
                    {
                        "value": "17c1d72767fb09f83c78e95a4e3f0bc7ed2db219774cc1e55b0391e2604a8362",
                        "timestamp": "2021-04-07 12:03:45"
                    },
                    {
                        "value": "da1fba1d66a44b77440ec136dec09f921d932d5ece0d35030e7c22d50f73bc8a",
                        "timestamp": "2021-04-07 12:03:45"
                    },
                    {
                        "value": "0aaa10495fff6567ec8ecb5fa1ea118ad1b1230c77db540c0dd7cb6f1d26f6fb",
                        "timestamp": "2021-04-07 12:03:45"
                    },
                    {
                        "value": "04f043544447ba5dcec7013eb80fd59dc3897983a167b12842d3ae356ffa0d6b",
                        "timestamp": "2021-04-07 08:03:34"
                    },
                    {
                        "value": "002ec09931d23f0e66d86eda11ce72113d3e29a1cd0bd296b83ee567981610d8",
                        "timestamp": "2021-04-07 08:03:34"
                    },
                    {
                        "value": "269579c8b588a69dc793b876d76ff758e499b68ef340a4bca8f964bdae2b6f9b",
                        "timestamp": "2021-04-07 08:03:34"
                    },
                    {
                        "value": "2c90962ff3434dccf2d1fe450ec108d408ea5984ba1377bebb57a0f350277164",
                        "timestamp": "2021-04-07 08:03:34"
                    },
                    {
                        "value": "bff29cc578387bdc252728fc6c82a852225f1f26fa25cfbf8e351a11af4851c3",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "172d9c7b8fe51e525721d8d05c79640f49161bb5a19ac37b1aaa83fcfbbb35bb",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "f73bd79fa45052bdee47d286e58107be584dd64d6cafb38362d494d9b388356f",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "c2d671c974504ef3431c0ffab2bcbe763131064cccd78ec7ab2be645b9300078",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "4a40e4090b9c4a761c172ccf2332846d959788d027c97898e51700f170cd5b2a",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "ea1dfb8b4d49ed0725305093b1a5466d5ab339ba2a5b125db5f3b87c42b874ea",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "da64c6999e61d1322a5ed3e977cb356cd63373c58a455813e462a1274f649058",
                        "timestamp": "2021-04-07 07:03:47"
                    },
                    {
                        "value": "20fa2c3cd731fe5cc8958eb38c658bc0548e143ac48cdc5fe11340fed18327dd",
                        "timestamp": "2021-04-07 07:03:46"
                    },
                    {
                        "value": "ca89626a3cb611658b05772ceff6f452db005f4d032fb81343d6ddb5d686b41f",
                        "timestamp": "2021-04-06 09:03:49"
                    },
                    {
                        "value": "969c0792237787c0e8e3b20f989ade0b26c82346c53ae6d8b7c6a28557a1dc33",
                        "timestamp": "2021-04-06 09:03:49"
                    },
                    {
                        "value": "ab1c3fc399941e62ffaa144312315ee37c36ad099c25fe5d2271c71b2dedc13c",
                        "timestamp": "2021-04-06 09:03:49"
                    },
                    {
                        "value": "751b3fa113056b20cd9b3c6a2f2c06d0b8fa0ecd23696feb27adeb0f53d73b36",
                        "timestamp": "2021-04-06 09:03:49"
                    },
                    {
                        "value": "baaffa86bc9709895ea809bbfb35013a15b8fdb769604d70f780b632bd64060e",
                        "timestamp": "2021-04-06 06:03:41"
                    },
                    {
                        "value": "25bc61f120e240f26653f0f5c804f9b1590ba66d7f8ae6eea5c21ee4bfeb3689",
                        "timestamp": "2021-04-06 06:03:41"
                    },
                    {
                        "value": "defa7a163721a798851fb016beb4080379d63aab1941ee27b78d10b714ddc01a",
                        "timestamp": "2021-04-06 06:03:41"
                    },
                    {
                        "value": "3bb5008fd149c0f0bcf0aa973905386f49b672316a04a9c5ac6b374a8e77cd73",
                        "timestamp": "2021-04-06 06:03:41"
                    },
                    {
                        "value": "00bd76eda980573f03e9ed0adcc18cc313c2fff5a3b12fd46b6335e5bd5db0ba",
                        "timestamp": "2021-04-05 15:31:22"
                    },
                    {
                        "value": "0fce851d001cb1a92a7939eb6a9fac428f5fd9750caa9a1981e27fd659c32c03",
                        "timestamp": "2021-04-05 15:31:22"
                    },
                    {
                        "value": "b85b4bf366abb7c42ba5e8bdbc13e18ba6abe11b0c864901071430c53bc78893",
                        "timestamp": "2021-04-05 15:31:22"
                    },
                    {
                        "value": "4ba92cc71806c3ddf026dd148c99f09e51f1eaa3f7657a38a88bc4b842885be7",
                        "timestamp": "2021-04-05 15:31:21"
                    },
                    {
                        "value": "5656c5dce215288ebd25a4265dc290f8b7076164578ba136179c8cb297871925",
                        "timestamp": "2021-04-04 18:03:46"
                    },
                    {
                        "value": "573c4931034879b882593c0ea918852e5d62be5631937b78f462f4efcd7c6833",
                        "timestamp": "2021-04-04 18:03:46"
                    },
                    {
                        "value": "5b12912c85569be759549eb66cf3cb0be12ce41521ddaa581267a3bffc64fb1c",
                        "timestamp": "2021-04-04 18:03:46"
                    },
                    {
                        "value": "87cff75cb9c14763d12379d4f990b5c852756d0ccfb6cfb279c7eb60a63c5e69",
                        "timestamp": "2021-04-04 18:03:46"
                    },
                    {
                        "value": "f60d5b380f31ad6c4083b2d7bb4c6188695f50ec2e95f8c2678777d02fdbfee9",
                        "timestamp": "2021-04-04 14:03:43"
                    },
                    {
                        "value": "46f4b1575dda5fdac399b8e3ff95ca2fa76a9a8c696a9a907937aca3f609037c",
                        "timestamp": "2021-04-04 14:03:43"
                    },
                    {
                        "value": "3966c05d11e9cd2f058e0ce0364f8133c651686d70cb2cedf5ab1c633fd87a02",
                        "timestamp": "2021-04-04 14:03:43"
                    },
                    {
                        "value": "d640ef45d9dbf2c81ccea3217f1a98a1726602cd8e8b825c9bd4417456fbf112",
                        "timestamp": "2021-04-04 14:03:43"
                    },
                    {
                        "value": "2dfb8eec68a9b0730567d2e18c9f4fdd2343238c6a2f4ca41750b229d3e3ad38",
                        "timestamp": "2021-04-04 02:04:05"
                    },
                    {
                        "value": "59ba969dc69d82f3980cb18aa1184f56654ed4fe6a40c4234c6bb7221b0bb2bb",
                        "timestamp": "2021-04-04 02:04:05"
                    },
                    {
                        "value": "c874b1d437e2745e0a1d9d20f9d7c1a84deb1a99ba7552f6bc51bc350a0f11fd",
                        "timestamp": "2021-04-04 02:04:05"
                    },
                    {
                        "value": "e1622c22652985746a1bcb494d8e73efb6d56273f704401b33624ef6062f9a54",
                        "timestamp": "2021-04-04 02:04:05"
                    },
                    {
                        "value": "49642544d350cea8e84602a699e1d5e2a068152c18bfa0ca63dd7679f64bbce1",
                        "timestamp": "2021-04-03 18:03:46"
                    },
                    {
                        "value": "4b3f8cc7c1bde9fed3851b6053cdf916caa18f6dcef369fea128f8a7c3eba4b6",
                        "timestamp": "2021-04-03 18:03:46"
                    },
                    {
                        "value": "9a5208e4b5e1a7a6d5e6f02a252d2fd79baff28b66bc4ade72a421486df554c1",
                        "timestamp": "2021-04-03 18:03:46"
                    },
                    {
                        "value": "5853cb32f021dc17c29bfc1cad8fcd53d0fded25525a8a86bd3d1b2b50ccd394",
                        "timestamp": "2021-04-03 18:03:46"
                    },
                    {
                        "value": "ac552a0297579cdda26c79d41c88717ef94880a46162dae366b3229e5024b25d",
                        "timestamp": "2021-04-02 08:04:00"
                    },
                    {
                        "value": "eebef5aad2280ce80ffad0159556a6812b0c5ed8eacb4930aeab59621bf9f176",
                        "timestamp": "2021-04-02 08:04:00"
                    },
                    {
                        "value": "e1bd2c6c40bb7f29fc0f7d164f0d8061ec4cd33edac6db75c0810b10b19aeb3e",
                        "timestamp": "2021-04-02 08:04:00"
                    },
                    {
                        "value": "a15d8b99cef52ac6fd1dfd76f4e544e187b23129a034a1603e3a6614bd3b85b6",
                        "timestamp": "2021-04-02 08:04:00"
                    },
                    {
                        "value": "41860ea0ff0c04a9d64e345d828efd8a0fa309f6eae8de6bde843e448db072b9",
                        "timestamp": "2021-04-01 09:04:02"
                    },
                    {
                        "value": "afd293de8f839881e5818ebd7f53662ff00e967599d813db6a7279d4d8e14e0f",
                        "timestamp": "2021-04-01 09:04:02"
                    },
                    {
                        "value": "afda04938481bd5010dd4a7a43908897550ba75426f52a8ac8404c9915b03af0",
                        "timestamp": "2021-04-01 09:04:02"
                    },
                    {
                        "value": "3b70e4fc486e35f388db065ff8f187f55a820ccf8ce90f0e656ff55aaa0d5fdb",
                        "timestamp": "2021-04-01 09:04:02"
                    },
                    {
                        "value": "bb21e5cc104a482d8d806a79b75f20781bde73dfb3ac59d6cd58fed12e9757e5",
                        "timestamp": "2021-04-01 08:04:06"
                    },
                    {
                        "value": "9135cf654328e04997dc92c375d6bbf216dcfbd4465eee503f9cc8925887517f",
                        "timestamp": "2021-04-01 08:04:06"
                    },
                    {
                        "value": "b7b60cdc8b19e55d3977250a9b64c254afd7e78bb1ffd8ec44dca4000b7da52b",
                        "timestamp": "2021-04-01 08:04:06"
                    },
                    {
                        "value": "47820e1772d4e55a2e2949162c8df5f691ae8a72f8a641ddeabebb401f5d6f88",
                        "timestamp": "2021-04-01 08:04:06"
                    },
                    {
                        "value": "5b7a19549c692c5dfec51bc6ddc8826132706ab03336321ccec6e02182d9d35e",
                        "timestamp": "2021-04-01 07:04:07"
                    },
                    {
                        "value": "99b5548eae9edbf2270ef67161a563b431a65133c68645eba6bef7dce1ec2534",
                        "timestamp": "2021-04-01 07:04:07"
                    },
                    {
                        "value": "0e1fa2edec029827b5485f00a0027d7b83bcc505a9b421d4824d7e747da8099f",
                        "timestamp": "2021-04-01 07:04:07"
                    },
                    {
                        "value": "3b56acb27c737bf8063e923076ccaf820668d08f5d52dea75dc28284b483fbfb",
                        "timestamp": "2021-04-01 07:04:07"
                    },
                    {
                        "value": "f439527d555802b3169379943bd7ad8cbbc17b7985601a5c1642621ca6900914",
                        "timestamp": "2021-04-01 06:03:55"
                    },
                    {
                        "value": "4e5290b59d085d2d8492782191609fb2847e2f4a554b2ca48d1e7d7c86f6fb92",
                        "timestamp": "2021-04-01 06:03:55"
                    },
                    {
                        "value": "8b35d3587100b90fedc80c6e154fac65b98e8552a0901ffeab8ed203e54956f1",
                        "timestamp": "2021-04-01 06:03:55"
                    },
                    {
                        "value": "75380ad2941ecd6295f6f738e573bdd4f1d0b4785679cb8b18636bb3aff42b81",
                        "timestamp": "2021-04-01 06:03:55"
                    },
                    {
                        "value": "c2afdab894c7be89b545d86d7a8dfd8c9dc00391358e8ed291aa2c3134a0db7c",
                        "timestamp": "2021-03-31 12:03:49"
                    },
                    {
                        "value": "5eac809378565e3128dd2c1b170658e35448b66abb2304ad556f43e41c571917",
                        "timestamp": "2021-03-31 12:03:49"
                    },
                    {
                        "value": "6071e97eb6bbb48aea3c96d06190166daf16ecff8dcbc0481cf44e2c8ef84a30",
                        "timestamp": "2021-03-31 12:03:49"
                    },
                    {
                        "value": "9f3198dfc3821ea9290502f8a0fce13e943eaab3f11e9885c57fb7319d90530c",
                        "timestamp": "2021-03-31 12:03:49"
                    },
                    {
                        "value": "41d1baa905b28a22e738f7379125e26301e240815e85ef0492b6061432cfe139",
                        "timestamp": "2021-03-31 10:04:10"
                    },
                    {
                        "value": "914b088bf445be69ee904a6146ca5bbc5de503d517abffc21376079bbd5ecffe",
                        "timestamp": "2021-03-31 10:04:10"
                    },
                    {
                        "value": "14c2d36805b3bed4c59a11beee2bcbab8bc457f260bd7ad76c1e9984f3e00ea7",
                        "timestamp": "2021-03-31 10:04:10"
                    },
                    {
                        "value": "5e86dd4929bf97a1a8058fd76ed8d6afdee458cc261801701318b673ff985478",
                        "timestamp": "2021-03-31 10:04:10"
                    },
                    {
                        "value": "e34be75606db6f49c047d0bc135767860fecfa853ff3ab61ed8d57a9325ec749",
                        "timestamp": "2021-03-31 08:04:54"
                    },
                    {
                        "value": "63bcef1d1be804fe10fea2a119e30d9d887667ab45f325c2e1bdd6a3def7bf16",
                        "timestamp": "2021-03-31 08:04:54"
                    },
                    {
                        "value": "3df2cc414d6cef0d973d0f47141a13be183a9da46e0455940affe5d24b9c2f9f",
                        "timestamp": "2021-03-31 08:04:54"
                    },
                    {
                        "value": "40628d32ef0746f397d0d41b839530eae24d249dd2f414450a8d9dda03741d10",
                        "timestamp": "2021-03-31 08:04:54"
                    },
                    {
                        "value": "f7dc24b214db050895707a8e89d730f2230d3b235eb5d19b65807139a82c49b1",
                        "timestamp": "2021-03-31 07:03:46"
                    },
                    {
                        "value": "db1a8d7d27c500facb7e8e5c30ff3c9d901c51a550ebdad36e741d518b628c30",
                        "timestamp": "2021-03-31 07:03:46"
                    },
                    {
                        "value": "f63a329e990f04b85bee2832acdc884392b61ac130c1d107b958265088cace6f",
                        "timestamp": "2021-03-31 07:03:46"
                    },
                    {
                        "value": "bc4637b443be8c942e64fbdeb38d8b10afed00b655a631c2811cd10399b56698",
                        "timestamp": "2021-03-31 07:03:45"
                    },
                    {
                        "value": "6838e750e4d6b197819aedaeb8e0a183d5fb790da0d6d5e426d99f09bae758d9",
                        "timestamp": "2021-03-30 22:03:47"
                    },
                    {
                        "value": "501d4cf13f1e91b23dbc5b82ce88e655e14180097c685968d0de26608d973455",
                        "timestamp": "2021-03-30 22:03:47"
                    },
                    {
                        "value": "c9295ec0366020bd9d9c53659c207909c92fa49c1699f0edeac21ce6c21da300",
                        "timestamp": "2021-03-30 22:03:47"
                    },
                    {
                        "value": "8a79757beaf2ff4bf07fd6410a16358874d8e6725810c8141d47ff2365321a2e",
                        "timestamp": "2021-03-30 22:03:47"
                    },
                    {
                        "value": "9eb105eb5a36975161a2d1926b6f8c099b57ee400c05d00df98335f4371bb28a",
                        "timestamp": "2021-03-30 14:03:50"
                    },
                    {
                        "value": "c8bfdcba9c06b1aeb3ad3174a6d078ea2583e28a6bf20a0d77aed6a8bc1409b9",
                        "timestamp": "2021-03-30 14:03:50"
                    },
                    {
                        "value": "66347224549debcf297e7590c42e01299cd1c9334d85eb378a943c979efcd99e",
                        "timestamp": "2021-03-30 14:03:50"
                    },
                    {
                        "value": "87700c24494ffb33b263effb8511f74043659df1f13863f7c2b55a197f3f8d8a",
                        "timestamp": "2021-03-30 14:03:50"
                    },
                    {
                        "value": "235af1b9bb3baf63c3c77fa1630e4f22cbeeee1a97d11944dfbd8d4441b23e57",
                        "timestamp": "2021-03-30 14:03:46"
                    },
                    {
                        "value": "2361f2a0e93f95a1019650c9b77f55014f9355b5b85ac8dbbd5bafb6b0cc967e",
                        "timestamp": "2021-03-30 14:03:46"
                    },
                    {
                        "value": "6e391a2b893bb735129c2ef5e3b8eeb98338bb7b0e49e28c6058f9306ba70161",
                        "timestamp": "2021-03-30 14:03:46"
                    },
                    {
                        "value": "b1d0dd6e4ba8cea03e1300e4cc724807a6932c583a551e4a6593fc6dfb064616",
                        "timestamp": "2021-03-30 14:03:46"
                    },
                    {
                        "value": "518cecc9fe5b328d790f4dee8aa290794c119243a41d341841cba3f35fad908f",
                        "timestamp": "2021-03-30 13:03:46"
                    },
                    {
                        "value": "eef10f94e647c687dbb1205499c574757752fe9b8fb8310fa733a9a270bc42cf",
                        "timestamp": "2021-03-30 13:03:46"
                    },
                    {
                        "value": "0757111159ca0d2941db3a8f59af8256faef71379b5af72457c8ec861c2ebaf0",
                        "timestamp": "2021-03-30 13:03:46"
                    },
                    {
                        "value": "2512a93aaba2eccaae508908b09c9d3c2a77fccbdf7a68c347a4745e83ec6f94",
                        "timestamp": "2021-03-30 13:03:46"
                    },
                    {
                        "value": "e20288dc26c17220a5eb0e97d7c8125eed88c2c69ca71d629ceb3c031dff6751",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "a37b17ddc0a193831f44f57888850e1406c01a2f4a545209902e299fdedc21e4",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "6420b56a9e68d143e250532229a3f477af9fa12a7029236dc69ac98d8c115c3c",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "e9f37a053f32c4f4732ba0ff24dba4d0a57a4e2dc8e8f1698e5601385371ce8e",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "f4a478746d940a50fdbb7a2713de218925dfed8c870cb2ef536b6b525c598e56",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "cf993c713cfe3b22bd4978530f420e2dc54c38d106ad5fc5a9aacb1e377b81e2",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "1e0d36af46fa590a9b3974582ad8f760e1724b2ac2ca8ef16f57cdb87b3a4ff3",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "98a634da7b379b6369d5b7445c7aeb5a58aa195c8f088bf11c84c77ba2c972fd",
                        "timestamp": "2021-03-30 07:03:28"
                    },
                    {
                        "value": "4ccaae8b9537fdfe8cf527d851571fb30a18f8cb2743294d0d8568979eadcf46",
                        "timestamp": "2021-03-30 00:03:12"
                    },
                    {
                        "value": "3c41ff03a938a092f702ca63c53ae0ff21323026e3bf2ad60fea3944a8f42be6",
                        "timestamp": "2021-03-30 00:03:12"
                    },
                    {
                        "value": "30a292327e2f65edf2c2cfbd07b60435b1845dbd504b15ad47116ad9d5fb1084",
                        "timestamp": "2021-03-30 00:03:12"
                    },
                    {
                        "value": "ab95bc3c40647b2b700cdb9aba76b6de220fd528fd194e6071c1747df6cb78ce",
                        "timestamp": "2021-03-30 00:03:12"
                    },
                    {
                        "value": "f86b0f3ec06d574080bd86e2980c7d04c29d4093d025fe592a567b5767031d2b",
                        "timestamp": "2021-03-29 17:03:40"
                    },
                    {
                        "value": "69d26f321fd22df3012fe36e562ff1bbba9e5ee0efbe722e2874e76bb20a8cc6",
                        "timestamp": "2021-03-29 17:03:40"
                    },
                    {
                        "value": "a2b1b0aba59071aa802b9e9c0010a0d1b9ecf1a61d04a4337db89dbccfb4f2b0",
                        "timestamp": "2021-03-29 17:03:40"
                    },
                    {
                        "value": "49c27b2307d605ea8ca133ad3022017c70883da9e3996f21a1c2cc4add610fc9",
                        "timestamp": "2021-03-29 17:03:40"
                    },
                    {
                        "value": "1c13ac6991e35e6948e4c926f79bac0a0c669f8c2709eb1e5fcea146e5a4d3ea",
                        "timestamp": "2021-03-29 09:03:06"
                    },
                    {
                        "value": "2d7e6876be1d444dd509a45ea6bcbf3423a2ec432ce508a44a1490ff37dc931a",
                        "timestamp": "2021-03-29 09:03:06"
                    },
                    {
                        "value": "462ede8a2b37164863953764e75ccb25c0224396475dbaf96f6dbb6b51484257",
                        "timestamp": "2021-03-29 09:03:06"
                    },
                    {
                        "value": "56e1850935f8115e3de49915b867a9b8609caca066dd2d808fbd8f96f13381c0",
                        "timestamp": "2021-03-29 09:03:06"
                    },
                    {
                        "value": "02c3598e5f583ac0f0aa5d5c666095d1ab1cd02ebf8d23ad7db61f00da7b793a",
                        "timestamp": "2021-03-29 07:03:05"
                    },
                    {
                        "value": "f50534f631cc72f4113ee4ae8a8a0ff76f88c2a450722752add943216a7dae6b",
                        "timestamp": "2021-03-29 07:03:05"
                    },
                    {
                        "value": "a3d951fa76fbb0f24540b97767e2d327b9bdb2e6e93721cb3da4ac5370118dbc",
                        "timestamp": "2021-03-29 07:03:05"
                    },
                    {
                        "value": "92ef23abd16d74efae5c6caecc22ba497bb9ac73fdeae37fa377f2cd9e27eb94",
                        "timestamp": "2021-03-29 07:03:04"
                    },
                    {
                        "value": "a4d1a06721c3b1932f4e76a4b4a38382d7a07c44bb5732512818ff155283980b",
                        "timestamp": "2021-03-26 16:04:22"
                    },
                    {
                        "value": "a35f472fb65a7a63bd7fe571c7c31651773e0da5908e2673e9994316cd545d3f",
                        "timestamp": "2021-03-26 16:04:22"
                    },
                    {
                        "value": "cc1e8ad1a7582b091d8fb87eccd07c5f356ddce91064af045dc21230a35062fc",
                        "timestamp": "2021-03-26 16:04:22"
                    },
                    {
                        "value": "9d884ca3e397fca84151c0502a53280d6212f3e4c2c5aac3d93530b7ad100648",
                        "timestamp": "2021-03-26 16:04:22"
                    },
                    {
                        "value": "7a4ba1490929b93045c34af15d046532334741ef1ff3d5907a54bfc7110c1126",
                        "timestamp": "2021-03-26 08:04:09"
                    },
                    {
                        "value": "52690c7636360e992167853a0f96c3c0622c65218d60274a21f02e7d07add66d",
                        "timestamp": "2021-03-26 08:04:09"
                    },
                    {
                        "value": "14f42edbf19d11d2fadaa10586ccecbfa285f53ad10e494fb94f03091f93e261",
                        "timestamp": "2021-03-26 08:04:09"
                    },
                    {
                        "value": "64b6a90cbf3ccb496c9ea63b374ed1eecfaa8c131175cd94c1b25cda8825ce87",
                        "timestamp": "2021-03-26 08:04:09"
                    },
                    {
                        "value": "a46ae8264e5f9bfa7edd80062cfd04169b19468ca308d6ffd1da00b6ea374ea3",
                        "timestamp": "2021-03-25 16:04:02"
                    },
                    {
                        "value": "a9e5ea46d5b0dbd4b480b3002c9fe74bfe1b83e9297d4ecef3a9cd514124addb",
                        "timestamp": "2021-03-25 16:04:02"
                    },
                    {
                        "value": "7cbc1d9601c932a14c4bbf2fba67b5c417087cb5dacf0eb2dff743e77af2d380",
                        "timestamp": "2021-03-25 16:04:02"
                    },
                    {
                        "value": "8fb2a899e6622a2ddc7989121174bea2b7756f3f56f64f42dc6ef875d19ce919",
                        "timestamp": "2021-03-25 16:04:02"
                    },
                    {
                        "value": "8261a249101f3cfc530438360523c7e544747d38d1c18313d9703afef20341be",
                        "timestamp": "2021-03-25 14:03:38"
                    },
                    {
                        "value": "9b438cfef66666b1c6513dab7cefd8f984621eaa1206272998215e9b445090fe",
                        "timestamp": "2021-03-25 14:03:38"
                    },
                    {
                        "value": "a96fef841de9e7178b9c0ab7db37aa853f7a9fd84624d2a6e0f439a5f5632ddc",
                        "timestamp": "2021-03-25 14:03:38"
                    },
                    {
                        "value": "4d1ca04d04f5d34e63dfd57b2dfb8dbbd7224afaa83baf91529828de275af203",
                        "timestamp": "2021-03-25 14:03:38"
                    },
                    {
                        "value": "17e606baa0797fd83464d43902b1705226c1d03522dbf5aa9077fe6ef1ca55c6",
                        "timestamp": "2021-03-25 11:03:23"
                    },
                    {
                        "value": "7ea0fdbc06262768e2ead0613ef5df8370035d0137209699f12057a54b27bd2e",
                        "timestamp": "2021-03-25 11:03:23"
                    },
                    {
                        "value": "949cc432eed5b528c6306fc86ae31daf617615b404a7b0647146df0b38fc65ba",
                        "timestamp": "2021-03-25 11:03:23"
                    },
                    {
                        "value": "46ed80bd788670928f5d04217c0fda40c661a5a211f07ef6319188625303e646",
                        "timestamp": "2021-03-25 11:03:22"
                    },
                    {
                        "value": "bde11e5f0bd0e97d5fec3572de59518b300d0a27602c25d9699d8fc030022cb1",
                        "timestamp": "2021-03-25 07:03:40"
                    },
                    {
                        "value": "414d612f1134c580046095e37ead026b1c2fbfa31432e1ee662276286983fa24",
                        "timestamp": "2021-03-25 07:03:40"
                    },
                    {
                        "value": "6682de57608d5aa3a9d08cc776c0fde40eac48ac8898a06ca35cf7449673098e",
                        "timestamp": "2021-03-25 07:03:40"
                    },
                    {
                        "value": "760d24ae5e53825def7fee3baf4392c819f79f94d0dfa24f39a6cb21552dfaf7",
                        "timestamp": "2021-03-25 07:03:40"
                    },
                    {
                        "value": "e6a148be4604b24e27dd84e6586c73ab1139ddca79b12c0298e5ee6cffc832ed",
                        "timestamp": "2021-03-24 12:03:32"
                    },
                    {
                        "value": "0fa8114ac4b5c4ff6727117699cb2f702be6cf0a6c54ad147fefc1620f32f6aa",
                        "timestamp": "2021-03-24 12:03:32"
                    },
                    {
                        "value": "2e9911570d065f1b176b0a1ac59638a026f5122fa639c703786d8d1cfe7aaf70",
                        "timestamp": "2021-03-24 12:03:32"
                    },
                    {
                        "value": "f5d3699a1db6323bd7fc22f91bded10d8f806b1abd7085a0c919338336eb1853",
                        "timestamp": "2021-03-24 12:03:32"
                    },
                    {
                        "value": "9e523865c6d13612ccfa2ea41e9c8e92ec680115c83ab5194b399078851f2cec",
                        "timestamp": "2021-03-24 08:03:50"
                    },
                    {
                        "value": "f446df12ea45a61e62c6d83580ff4cd9291b004e30cd721ca3c196182c1de635",
                        "timestamp": "2021-03-24 08:03:50"
                    },
                    {
                        "value": "26d86609838feaa6357a71b0801ad4b9cb8efb31aaf76f6a7a8bf012ab60b262",
                        "timestamp": "2021-03-24 08:03:50"
                    },
                    {
                        "value": "0132bc0987f049d7527b99c657edefbf62eefcc9bdb4766e6066160ca0bdf4e2",
                        "timestamp": "2021-03-24 08:03:50"
                    },
                    {
                        "value": "e93a3705834cefd962e4dc4c2062e37e9ea42b9819cf11017857f5e36225d413",
                        "timestamp": "2021-03-24 08:03:48"
                    },
                    {
                        "value": "25dc4fda0158dd3cd6a21ce2b0738af372c236bbded00a44d48dab8681e5b331",
                        "timestamp": "2021-03-24 08:03:48"
                    },
                    {
                        "value": "de3e343e660debfdf89ad0aab94df819cab86203f78f777f74071f56092462db",
                        "timestamp": "2021-03-24 08:03:47"
                    },
                    {
                        "value": "cb012c84952a5fc0e2bb4ad873f37678bbd3d971efb57b99851657642cc4a303",
                        "timestamp": "2021-03-24 08:03:47"
                    },
                    {
                        "value": "bcaad98c564973baa097c5b501b641d921d80791333d40794649d944f502e840",
                        "timestamp": "2021-03-24 03:03:50"
                    },
                    {
                        "value": "87fb0ca5b0ebcc0dc80aeca8065b2e2bf1ec14cade124316227646bc59ad237c",
                        "timestamp": "2021-03-24 03:03:50"
                    },
                    {
                        "value": "02e980fcb45e475b70dd9bed1a8d2ac331a091a16422105cfcea41faeec2e3cb",
                        "timestamp": "2021-03-24 03:03:50"
                    },
                    {
                        "value": "40ddc6e9b819c561390ce448740722fa9977b108621fd762ed5d8e92bc2997e9",
                        "timestamp": "2021-03-24 03:03:50"
                    },
                    {
                        "value": "db90d1fe63365a04c923db09409888673ec7b882bbb5c6799ec3ab25b0e3b689",
                        "timestamp": "2021-03-23 17:03:51"
                    },
                    {
                        "value": "3755206dc18df104854e076d74799c1d83d6cb6acb22a7aa22ec595c56e31abc",
                        "timestamp": "2021-03-23 17:03:51"
                    },
                    {
                        "value": "43d9f22a3c4b9e5678702df027b99aaf891e04cd09478605c527d0235c78f713",
                        "timestamp": "2021-03-23 17:03:51"
                    },
                    {
                        "value": "aedca7bd1a9f16f64b28ff4469f9d7af372e12603b75b35198d3bce20c3c8747",
                        "timestamp": "2021-03-23 17:03:51"
                    },
                    {
                        "value": "766047d46a24f9cfe31b3f08db0abbee3c9be1f736f0f5d7cc1223be6dd77d38",
                        "timestamp": "2021-03-23 10:03:55"
                    },
                    {
                        "value": "fbf1b5ba265d315146604aa4393ff3e031a9946ad3b1f955ebbb2aa0a854e875",
                        "timestamp": "2021-03-23 10:03:55"
                    },
                    {
                        "value": "583761ed1bc4b3fa1dba7d496c6d910cc7ca59278455cbcb10b67b747b44f217",
                        "timestamp": "2021-03-23 10:03:55"
                    },
                    {
                        "value": "91e13d173fb96f025e17161b61686fa06272a048eececeb7d4e95ecdcb3de4b8",
                        "timestamp": "2021-03-23 10:03:55"
                    },
                    {
                        "value": "bed459cab6ef1dbf859773b2ff8f27fdcc80dced0aacbfe6d1f79c3c840c188a",
                        "timestamp": "2021-03-23 08:03:33"
                    },
                    {
                        "value": "f5cc56bb5b4b548825bb9e322d5ff3aab8efd6e43c8ded9dcb09b67b580514a8",
                        "timestamp": "2021-03-23 08:03:32"
                    },
                    {
                        "value": "90fb73d5f9558c727ad8f03b9a818084fa5dfd47c3c1d848b153c1d60636845d",
                        "timestamp": "2021-03-23 08:03:32"
                    },
                    {
                        "value": "f61ea12383c210bd9db6f0148321bfbc36b24c7b55197cbafef0ae23cadd9b9c",
                        "timestamp": "2021-03-23 08:03:32"
                    },
                    {
                        "value": "06fec711d6d4cc7d3446fdad1245c0cf7fee3bfb755039cfc3dad9bd25777bb1",
                        "timestamp": "2021-03-22 22:03:52"
                    },
                    {
                        "value": "3a5b1985cf04964dad2e3dbe52f0e742d39b51a7e18a08a253761c3d5ce8977b",
                        "timestamp": "2021-03-22 22:03:52"
                    },
                    {
                        "value": "92e01cf56625e95b0d5c7f0706403ddcb068bdcd82e82a45ed9c296f0df394d4",
                        "timestamp": "2021-03-22 22:03:52"
                    },
                    {
                        "value": "5d5a3d47e627789966320b0a6b6f73950cd93947ccede180964c0838c9cb4af5",
                        "timestamp": "2021-03-22 22:03:52"
                    },
                    {
                        "value": "2dc07e970dd5581d1bd22d69e454dceda70d8f87cc84757f86c094b2fdb7f985",
                        "timestamp": "2021-03-22 14:03:43"
                    },
                    {
                        "value": "0fc53546d5bbb5d134e1ee3e7f8ad81f58b00f31a9da9f8b2ff82ea2931137f5",
                        "timestamp": "2021-03-22 14:03:43"
                    },
                    {
                        "value": "101c588be39f38d878c9ef627951074744975fa01391f0a78d2e3ee7eadacbf9",
                        "timestamp": "2021-03-22 14:03:43"
                    },
                    {
                        "value": "eb1acfe9969b26f571e664ce5c46eb9973582fa9d3a5935a12af8b9797ebb320",
                        "timestamp": "2021-03-22 14:03:43"
                    },
                    {
                        "value": "fbd84cb8e6af7a001f186ce8bde8bd4cb163a77113b6cee0342b148fbaf2b386",
                        "timestamp": "2021-03-22 08:03:27"
                    },
                    {
                        "value": "e51f74334991db50b298e677cde8bb7d6bf85870f9285fdf8e9513aef5169984",
                        "timestamp": "2021-03-22 08:03:27"
                    },
                    {
                        "value": "c062a826e467a5e607d373ab12fcae11d0eec7ff4fdfe04d4e5de4250d7f8f88",
                        "timestamp": "2021-03-22 10:47:24"
                    },
                    {
                        "value": "95858affddfd1a8be9d34e24b2eff3658a1e84911839b30d4406ede63e7593e7",
                        "timestamp": "2021-03-22 08:03:26"
                    },
                    {
                        "value": "b063c6c0eda820bf0ccd1039147bfbc92e0698dfa23e17daab8c11b0dc1e0320",
                        "timestamp": "2021-03-19 19:04:15"
                    },
                    {
                        "value": "3462dbe2da5d88864ce06d221eb425c23b6a3c70f976e9fcde8f838dc5915f64",
                        "timestamp": "2021-03-19 19:04:15"
                    },
                    {
                        "value": "cf0232773e4f3724de88c88b25d97e3f634a2276334e00d2cb37f062c7dc8cc6",
                        "timestamp": "2021-03-19 19:04:15"
                    },
                    {
                        "value": "a35ec797f4f06ba97fc23faded8388e68d7a27c1929e3e8eab5b5f75fa408279",
                        "timestamp": "2021-03-19 19:04:15"
                    },
                    {
                        "value": "a2a17c9009ccab88bdfc20c958b900a5f1fdb2cd67d54ea265e902e9c3e0383e",
                        "timestamp": "2021-03-19 08:03:26"
                    },
                    {
                        "value": "2b8c7e1fd94c1cbb024493f569dd13cf9dad1854d23866fb63b75a41836d845a",
                        "timestamp": "2021-03-19 08:03:26"
                    },
                    {
                        "value": "7748f204ff121013eed27db34f51177e44c653962e5e88558c03a92317ac239e",
                        "timestamp": "2021-03-19 08:03:26"
                    },
                    {
                        "value": "798524d52b39b5cad248864468cb9c6a192a7c5b69ca8c9f45d32dda61dff8ca",
                        "timestamp": "2021-03-19 08:03:26"
                    },
                    {
                        "value": "d0db433b95841cb50ef6bf15ce50eedcce6e0a426920b03f0ed69b796c98fb02",
                        "timestamp": "2021-03-18 19:04:40"
                    },
                    {
                        "value": "37e681ea463cd67a1f3ba2af374e15ba0d0a143160f0e6c3af44086b31a68896",
                        "timestamp": "2021-03-18 19:04:40"
                    },
                    {
                        "value": "8cc5be3b8edc2ff8d28ffed6ed331c5fee755336927610b17921394fc5783ca6",
                        "timestamp": "2021-03-18 19:04:40"
                    },
                    {
                        "value": "bd2e5895c592ac5c6072d1108172fc759b17b5094fcfc125fb88d3b7b3432bba",
                        "timestamp": "2021-03-18 19:04:40"
                    },
                    {
                        "value": "56f6ae8977212fbc76c8395b969260cbb6daa8e73a6118b0e1493ab71722ddc8",
                        "timestamp": "2021-03-16 11:04:31"
                    },
                    {
                        "value": "999813d0bce8eb3dd4057bb0535d1ce571c272a3ac60264d4a4ecc28f7644875",
                        "timestamp": "2021-03-16 11:04:31"
                    },
                    {
                        "value": "72856ea557c3d9d138adcbe263d3bb078d3269742480e5b3b2564d48615bc65d",
                        "timestamp": "2021-03-16 11:04:31"
                    },
                    {
                        "value": "74ea40ac4033754f4f3d285ffae192625fef37722ab6158bcace8e922197c32e",
                        "timestamp": "2021-03-16 11:04:31"
                    },
                    {
                        "value": "8c12d46d8842e4aea5c000fdea92abc49a86019f74a4a3d37e039a05c0b17c23",
                        "timestamp": "2021-03-16 08:03:09"
                    },
                    {
                        "value": "9466f3846172d1b612f8611367dbb0ce146863a58d6ddd2742dc6b35589513a2",
                        "timestamp": "2021-03-16 08:03:09"
                    },
                    {
                        "value": "161464a54fb29e8c1f46bd11a514f26c10edccc258af5a38a1e6ae10db859ac7",
                        "timestamp": "2021-03-16 08:03:09"
                    },
                    {
                        "value": "69655236b88a62cb21324cedd59e76cca489d0ebde851859ccab5ad9f82a81fc",
                        "timestamp": "2021-03-16 08:03:09"
                    },
                    {
                        "value": "930b3d3459b4a391f7a1d3e220146a1e2a1f0b2659f17bd7251ee00a4d5696ed",
                        "timestamp": "2021-03-16 07:03:52"
                    },
                    {
                        "value": "a24fd3aa6733914ccaab078a37a0cb4cf79c2768660de11411662a656507022b",
                        "timestamp": "2021-03-16 07:03:52"
                    },
                    {
                        "value": "6c8d9b097832fec5088306fabfeb26cf5aa0c67153134f4c5e356cee935f871e",
                        "timestamp": "2021-03-16 07:03:52"
                    },
                    {
                        "value": "1e7b2b30f3ed650664a63573e61a6e586cb573649055b6627e8f520ba9be230a",
                        "timestamp": "2021-03-16 07:03:52"
                    },
                    {
                        "value": "66f95fa3d4fb8e27a1beca62098133d93bf58ca36b83f58fced7f808ba1f282a",
                        "timestamp": "2021-03-15 21:03:53"
                    },
                    {
                        "value": "3529d42ff603873587cd40acbd21d9a61a6ea146633e345d8792b82a77096094",
                        "timestamp": "2021-03-15 21:03:53"
                    },
                    {
                        "value": "d86c6c3141bd3e7d4e6868247f8a9627e6263245bc1d9a5148f3091d0d699c75",
                        "timestamp": "2021-03-15 21:03:53"
                    },
                    {
                        "value": "83789bd9583cbaa64136f8d83d673be2aa33b6046a48e05a6edb864dfa9f6d70",
                        "timestamp": "2021-03-15 21:03:53"
                    },
                    {
                        "value": "1b1837b1504714c306a023b8488d15e81b939b6394ff511fb619fa38f264622a",
                        "timestamp": "2021-03-15 10:04:47"
                    },
                    {
                        "value": "172126490c7349785a47cb7bb858639efc19a0fd10f256dd35ba7af2ae14440f",
                        "timestamp": "2021-03-15 10:04:47"
                    },
                    {
                        "value": "46ebcdf811aaae805fd148984b358a0036746f78a9248a2b3671ee73a9b8e147",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "09f19a43e9a0b736e9fcd33359267340b91a2ccc376c8cda72fac9754c1493c0",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "6da50c6b31b4125631987f40d7bd3dacab22c961ca9ba60dfdfa45120d5ec17a",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "a26d22c6eed6211c52358ef2f0dcce5d3b17736330d81abad55101f5581c9f0a",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "5dabf489b06eead96a677f4fb2823f86d3b09215d0b5e67da83730c487962ec5",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "7c48cc2067df2dcf60bf4922311e2da6b85bd7b1982b98a257d5a2fa7d00cf2b",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "c2c13eb1d9e256514cced254d3816ef62d939bf937f73dfb973705cf001e484a",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "723fc2a02ff16459dad6943d5f8de485253aec7d7fcc0f43cc095edef3876200",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "d707d5f6e5ce74d40a170c81dbe7b298341110a3bd22b573945fa5073504e226",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "3e66c0c204b0917e4031d3de27b59bcae06b0c4ca97fba1d8bd3ec27296aaa84",
                        "timestamp": "2021-03-15 10:04:46"
                    },
                    {
                        "value": "229e96e1a3477d1153de8104751eca8b433669d7e80713530a9668909c07918b",
                        "timestamp": "2021-03-15 07:04:13"
                    },
                    {
                        "value": "2c17af6f60a1ef7416caae22fd19507a6cfafde81b939fe7ee732e405aad73dd",
                        "timestamp": "2021-03-15 07:04:13"
                    },
                    {
                        "value": "9e94cd431342b468037a305ac5616910b07b14b0ff143a82a45d1832b7bdf429",
                        "timestamp": "2021-03-15 07:04:13"
                    },
                    {
                        "value": "67b662f28ef6c6a148443ebece272e63e7eeb9d366032b4366fe459b7c5c41f8",
                        "timestamp": "2021-03-15 07:04:13"
                    },
                    {
                        "value": "5d6cfa5d539cd2939e6946d486c0b4e9a45319f9c295cbb7896574dfba0a8782",
                        "timestamp": "2021-03-14 12:03:47"
                    },
                    {
                        "value": "05af8df8b3b2e1329faae9c24b702779cd50b07ec33b438f62305e0dea7b2662",
                        "timestamp": "2021-03-14 12:03:47"
                    },
                    {
                        "value": "7e0c1f10cfd225b16e83ecf7bc37a782441b8a96225fff827572bc3a81421bb9",
                        "timestamp": "2021-03-14 12:03:47"
                    },
                    {
                        "value": "6a25825ee4b2dda91ad7a175f73116ec9565a77a74b4ab192bb6a41a5cc65595",
                        "timestamp": "2021-03-14 12:03:47"
                    },
                    {
                        "value": "59dfc7b23638bdecf18820f02997f0065b139d6e1b0ac0628b51ad4aef0a57d5",
                        "timestamp": "2021-03-14 03:33:54"
                    },
                    {
                        "value": "86f6619e90fe5a196c4bb565358ff57f7fec283d66003f19687c08221ab5cb2e",
                        "timestamp": "2021-03-14 03:33:54"
                    },
                    {
                        "value": "0bdee80f64e7943d99ae1b78179e6fcafe4d8ad8695530f9830fa4de3f6dac90",
                        "timestamp": "2021-03-14 03:33:54"
                    },
                    {
                        "value": "2f73bbde2c52a71a867fe057bee19256ed1cf0f2bcffb84a316e1412f7451e6d",
                        "timestamp": "2021-03-14 03:33:54"
                    },
                    {
                        "value": "a71e4f6a75343dfa77c56279ce51325aa67f7158278c77270521111bbd5a787a",
                        "timestamp": "2021-03-12 17:03:55"
                    },
                    {
                        "value": "4c3272971804e0b6ddde2f04428fb6f72fbadd3744157d0bc42dd274eb59ef49",
                        "timestamp": "2021-03-12 17:03:55"
                    },
                    {
                        "value": "bff2044c8918a627b0d8f6743c0c0aa847d26902ddce396c54613ac5679d27a6",
                        "timestamp": "2021-03-12 17:03:55"
                    },
                    {
                        "value": "ef90c994c4a829b7ab1bff70b2a6f0f51951293722c7dcdfcdbfb6a33116f75e",
                        "timestamp": "2021-03-12 17:03:55"
                    },
                    {
                        "value": "ea21266a205e49103835b9805049b9f35c1f27a987019491675ec44549c739a9",
                        "timestamp": "2021-03-12 07:04:00"
                    },
                    {
                        "value": "a35bef3b2a8e665c4535fc9b011c46ff11246cf1d28eff8bb4ad80896ffc2287",
                        "timestamp": "2021-03-12 07:04:00"
                    },
                    {
                        "value": "bba7662277de2d3b05c49fe4c183f307aa73478d30f1b7256755a1cc23f1511a",
                        "timestamp": "2021-03-12 07:04:00"
                    },
                    {
                        "value": "9f6b8c676adc36c9425bc86561b8276111a68036f1a8c21c38b8cab6438663be",
                        "timestamp": "2021-03-12 07:04:00"
                    },
                    {
                        "value": "05ed4be5227650b1c91d50af351b415d338349960152edb1e2dadf97c9df8d9e",
                        "timestamp": "2021-03-11 11:03:47"
                    },
                    {
                        "value": "786e3c1055098c8dcc272efaf056e46ed2ca269e9715cedf38f768427b080ae3",
                        "timestamp": "2021-03-11 11:03:47"
                    },
                    {
                        "value": "1ed998332afc95e5830817b9f215468c55e67cd134c920b497521042bd6d4c38",
                        "timestamp": "2021-03-11 11:03:47"
                    },
                    {
                        "value": "d55303a4502e2643856305845a80e43237b22fa58bb221167387c727b26f9551",
                        "timestamp": "2021-03-11 11:03:46"
                    },
                    {
                        "value": "a01cc1fb91c9f7d7490e45a84b861e7188a0f3d97769710af895ee843a19699c",
                        "timestamp": "2021-03-11 08:04:06"
                    },
                    {
                        "value": "4820f8a8e641c8be76a35375e61525f60c857c13f747c739084f573ceb39b9e5",
                        "timestamp": "2021-03-11 08:04:06"
                    },
                    {
                        "value": "cccbd0b2d46adeb6d99413af4d5a4492cd530922a09724f04c8fb1e0c47d8326",
                        "timestamp": "2021-03-11 08:04:06"
                    },
                    {
                        "value": "e0ebbe170a937d4c2a9578350de5b427e65244bebc2941f67d9889f8fc8f9faf",
                        "timestamp": "2021-03-11 08:04:06"
                    },
                    {
                        "value": "e1a797493829470b1f05a63f94a72b676fa6dbc11dffe3237fca8cb5873bd66a",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "ed9da3370c531a9cefe0afc26465b2dbac56c360ac99a3548b3c4c34280b39bd",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "30930dffd26757824df2f60ef5ca902e8a622a8780449b631ec32d63375a2c0e",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "12b87430e8783e795916408fb46ca8b21fd30dd2a6342aac3f2ffaac5dea7f93",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "988d84650b91424e291cb84ef84433cbd4214622365b226d925d71ffda0bccb8",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "85c3061712d39d8f6605267663495724d314cd131db20cc9fcbb3027ddf7b628",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "a05d5d4f0cf420025179f348be1ff0fed291c472d06209e3adc78c763ebdc6ba",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "bd93887067efa132f3f8790fb54163170a9cd15c12afdef57ad77ee4407f8fb8",
                        "timestamp": "2021-03-10 23:00:38"
                    },
                    {
                        "value": "5871233123e14f335d3024653c3595d8fbc3196c99eb8b77a691cb3cd0c56250",
                        "timestamp": "2021-03-08 17:29:14"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "0f3e7b2c7877d2e8c4a36cd08699c8de",
                        "timestamp": "2022-04-05 11:04:46"
                    },
                    {
                        "value": "0944744c31d37852031093e490a79450",
                        "timestamp": "2022-04-05 11:04:46"
                    },
                    {
                        "value": "C8639FBF5154FA95384457CCD4767079",
                        "timestamp": "2022-02-23 15:48:24"
                    },
                    {
                        "value": "16177c9f47154ecd038609efd949018b",
                        "timestamp": "2021-09-21 19:45:55"
                    },
                    {
                        "value": "8ffb5b1aba6759d623f20a9744de4dd0",
                        "timestamp": "2021-10-13 14:24:27"
                    },
                    {
                        "value": "028bf5bc572cf06e10c315334c397649",
                        "timestamp": "2021-07-30 16:32:47"
                    },
                    {
                        "value": "a3336f2a85c572aab40243c347ebfe59",
                        "timestamp": "2021-07-26 12:54:50"
                    },
                    {
                        "value": "6ddefaa934f93d73167d08364a040b40",
                        "timestamp": "2021-07-07 17:12:28"
                    },
                    {
                        "value": "154ef9852577be314e65263e0f11c46e",
                        "timestamp": "2021-07-07 15:24:13"
                    },
                    {
                        "value": "841bd6fddf15eab6973ee491100aacfe",
                        "timestamp": "2021-07-07 15:21:56"
                    },
                    {
                        "value": "7e06d1bcadf14d1a21c3a137c133fb6f",
                        "timestamp": "2021-07-01 17:46:31"
                    },
                    {
                        "value": "ea9dac7924879bf7102464b3095e81bc",
                        "timestamp": "2021-06-30 11:11:28"
                    },
                    {
                        "value": "0bb756be5b6f3772d6c2cbdae2d6ce6f",
                        "timestamp": "2021-06-30 03:21:03"
                    },
                    {
                        "value": "25ccd506d7e92553a448ec5b8d9f250a",
                        "timestamp": "2021-06-30 03:21:03"
                    },
                    {
                        "value": "3b512ebe6403a75297f37f73eb3fd81b",
                        "timestamp": "2021-06-29 14:21:22"
                    },
                    {
                        "value": "9e7d4a4f299fd4138c25c3c26c85016e",
                        "timestamp": "2021-06-28 16:04:32"
                    },
                    {
                        "value": "ff9ae326c3bba3881e9874cb92e08433",
                        "timestamp": "2021-06-28 16:04:32"
                    },
                    {
                        "value": "da283f39df7a4399184f1882695048bc",
                        "timestamp": "2021-06-22 06:42:18"
                    },
                    {
                        "value": "752e33013becf59e32c926823f0919f2",
                        "timestamp": "2021-06-22 06:42:18"
                    },
                    {
                        "value": "5dcdf6c934870b13c42b3548f8747d0a",
                        "timestamp": "2021-06-22 06:42:18"
                    },
                    {
                        "value": "5d2abf9eb3310e498f8510a4966f9ab0",
                        "timestamp": "2021-06-22 06:42:18"
                    },
                    {
                        "value": "75835dd5ce974af3a4d73e8ed4ca8632",
                        "timestamp": "2021-05-01 09:55:04"
                    },
                    {
                        "value": "292a365f27f0f77a74095d3f742556ad",
                        "timestamp": "2021-03-10 20:26:46"
                    },
                    {
                        "value": "744d8acae260acdb4986f9159e4d3c4c",
                        "timestamp": "2021-03-08 17:26:13"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "1204fc2995241f1306c2c0060f50f241a5f74fd4",
                        "timestamp": "2021-07-07 17:12:50"
                    },
                    {
                        "value": "138e10a308608dfb8c75e3749afb3d9e1defc2f5",
                        "timestamp": "2021-07-07 15:24:39"
                    },
                    {
                        "value": "41015f7a944241f861f00c988286f0028c2321b1",
                        "timestamp": "2021-07-07 15:22:20"
                    },
                    {
                        "value": "bfbce7685ee2f5b88ca2342127e5a461f2759421",
                        "timestamp": "2021-07-01 17:47:10"
                    },
                    {
                        "value": "f22073cb3a889efbe7412802885f64778c6a0139",
                        "timestamp": "2021-05-01 09:55:59"
                    },
                    {
                        "value": "f1d0b93b523bade2da3869090c81ec626a39a54c",
                        "timestamp": "2021-03-08 17:27:06"
                    }
                ],
                "sha3_384_hash": [
                    {
                        "value": "621209a2d22c3b057980e3083d49afc192c8daa84777aade28914abb7027056c67338121adc9a7fc61a2c1b72171b059",
                        "timestamp": "2021-05-01 09:55:32"
                    }
                ]
            }
        },
        {
            "malware_printable": "Xloader",
            "malware_alias": "Formbook",
            "malware": "osx.xloader",
            "last_update": "2023-01-20 07:05:19",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "413136d09f62e7a0e650e5d67b342f0540407971c7f284e93d9611459d6e14e3",
                        "timestamp": "2023-01-20 07:05:19"
                    },
                    {
                        "value": "c504d67f26c12a8ba3c795793642d6d370b134cbdca0101bdc740e58bd9df6cd",
                        "timestamp": "2022-12-10 08:42:46"
                    },
                    {
                        "value": "f24844ae60ec044f13365541b3e5f0cb41f9645ff7bc461820da7236518e2330",
                        "timestamp": "2022-12-09 13:29:22"
                    },
                    {
                        "value": "7fc92c4ae5d4d9047a70459054694e6c94e86b979463564f8fb7da9bc34b279b",
                        "timestamp": "2022-10-04 10:12:29"
                    },
                    {
                        "value": "317af501cb3f40775e821990fbbb2018ca7b652cd7c2cb2c3db10a5020f6e568",
                        "timestamp": "2022-09-20 10:11:48"
                    },
                    {
                        "value": "e9efc70902ce62e382550ff4d57ead16860cf743a6275fa65a489b3c485e517f",
                        "timestamp": "2022-09-20 10:11:47"
                    },
                    {
                        "value": "4f8105ba43ad52ffeb0e14fdb0ebce3e902c6386d9e60b72e6bb3c260e407a54",
                        "timestamp": "2022-09-13 18:04:14"
                    },
                    {
                        "value": "58f47e140bbeec74408b56a511b9c4dedb04016f941a1035effa43998d5f9074",
                        "timestamp": "2022-09-13 18:04:11"
                    },
                    {
                        "value": "5ccb2f316eb3c51f0b6fb23fa481b3d3bc11076335ba8e4a1bffbec3e00e2b1a",
                        "timestamp": "2022-08-23 12:18:12"
                    },
                    {
                        "value": "c31b17eb7e69da771f0ee2230922622a94e1d27cfea1ff556615e4f27104340a",
                        "timestamp": "2022-08-05 07:04:11"
                    },
                    {
                        "value": "1c2b899d9f5da1af436027471761a9d7f126493f378fcb478af45872c3d828f2",
                        "timestamp": "2022-08-04 14:54:09"
                    },
                    {
                        "value": "3edeaa5874990888a0f040d802246355a59d617b0ddf1aa58f478b57660201b1",
                        "timestamp": "2022-07-28 23:04:02"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "69c8f26359a2f91a60c66023180491f7",
                        "timestamp": "2023-01-11 12:17:11"
                    },
                    {
                        "value": "b8cdf3b37df53dd3390572a3b1a41f12",
                        "timestamp": "2022-10-13 05:38:56"
                    },
                    {
                        "value": "357a7a3b587cb6b545e69e2552ad498b",
                        "timestamp": "2022-10-13 05:37:53"
                    },
                    {
                        "value": "9d9d44a47c0a8e26b887e773f9098ab0",
                        "timestamp": "2022-10-13 05:37:42"
                    },
                    {
                        "value": "5310aacecbee677addd56a09e4429e45",
                        "timestamp": "2022-10-10 14:54:53"
                    },
                    {
                        "value": "7386130081891f676fa62358e408fdad",
                        "timestamp": "2022-10-10 14:54:27"
                    },
                    {
                        "value": "69d37dee463862114783876992cfa151",
                        "timestamp": "2022-10-06 15:39:03"
                    },
                    {
                        "value": "40764c7d15232349e4b538585dcadf9b",
                        "timestamp": "2022-10-03 14:22:51"
                    },
                    {
                        "value": "9e6c148a7d0f04287935df6908c449f8",
                        "timestamp": "2022-10-03 14:22:43"
                    },
                    {
                        "value": "f1a51d89d108784d9fd93ac66df7fc18",
                        "timestamp": "2022-09-27 13:28:01"
                    },
                    {
                        "value": "99128801351b81b164690fb32ddfe74f",
                        "timestamp": "2022-09-27 13:28:01"
                    },
                    {
                        "value": "ca266adea4aafb311d97bed9eec90ac4",
                        "timestamp": "2022-09-27 13:28:01"
                    },
                    {
                        "value": "d9b7a393c95ae97707d02e75b4868004",
                        "timestamp": "2022-09-27 13:28:01"
                    },
                    {
                        "value": "dd5e073ffac4a782f687e2d5c5f498eb",
                        "timestamp": "2022-09-27 13:28:01"
                    },
                    {
                        "value": "0ceac0981328007380508694cfe6a447",
                        "timestamp": "2022-09-26 16:03:15"
                    },
                    {
                        "value": "59d24bcc44a883d21a48b2d368a1ff45",
                        "timestamp": "2022-09-26 16:03:15"
                    },
                    {
                        "value": "e73751f55731c2840cc0781c59ba32cc",
                        "timestamp": "2022-09-26 16:03:15"
                    },
                    {
                        "value": "68e691b4ae0c4da9131e6bd536afc65d",
                        "timestamp": "2022-09-26 16:03:15"
                    },
                    {
                        "value": "9841ea840eb4c5c2e761b161fa0b7ecc",
                        "timestamp": "2022-09-26 16:03:14"
                    },
                    {
                        "value": "780958d2d7daf79013ab0ca478a96900",
                        "timestamp": "2022-09-26 16:03:14"
                    },
                    {
                        "value": "3584af4c7ff3061dc605bfc0de9d478d",
                        "timestamp": "2022-09-22 18:24:27"
                    },
                    {
                        "value": "4c241b465dca3cdb136375d91df76180",
                        "timestamp": "2022-09-22 18:24:27"
                    },
                    {
                        "value": "a3699c28f0868421d041f295534a8b87",
                        "timestamp": "2022-09-22 18:24:27"
                    },
                    {
                        "value": "9a864a23da20a972ac73fd9bb7fa02a3",
                        "timestamp": "2022-09-22 18:24:27"
                    },
                    {
                        "value": "70cfa5167777582bdeeadb50e056a9a6",
                        "timestamp": "2022-09-22 18:24:27"
                    },
                    {
                        "value": "ed2d2389bedce5b1292b4bc0d38a099c",
                        "timestamp": "2022-09-22 18:24:27"
                    },
                    {
                        "value": "9097e04148166d95241c7a4187066e55",
                        "timestamp": "2022-09-21 16:44:55"
                    },
                    {
                        "value": "cd3cfa9918a2e273a9a7b0118955c4b3",
                        "timestamp": "2022-09-21 14:24:14"
                    },
                    {
                        "value": "36a27b3829ee10c9e62d95f9e2179636",
                        "timestamp": "2022-09-21 14:24:14"
                    },
                    {
                        "value": "eeef1bb50b50ea56de000b58d5d1af23",
                        "timestamp": "2022-09-21 14:24:14"
                    },
                    {
                        "value": "aff4718c13ecbd9dd97bf0add9756cb0",
                        "timestamp": "2022-09-21 14:24:14"
                    },
                    {
                        "value": "7031136086e47209ab9e39197c71e1e2",
                        "timestamp": "2022-09-21 14:24:14"
                    },
                    {
                        "value": "e71535cc373c139f90be1b6b2b2faac9",
                        "timestamp": "2022-09-21 14:24:14"
                    },
                    {
                        "value": "5ef0396427ff796a37b983f3baf84d5f",
                        "timestamp": "2022-09-20 13:47:25"
                    },
                    {
                        "value": "833b9bedbd4049765c46eb9b0c96d2f2",
                        "timestamp": "2022-09-20 13:47:25"
                    },
                    {
                        "value": "6ea1245e5c065feb06591dc8a4caebd9",
                        "timestamp": "2022-09-20 13:47:25"
                    },
                    {
                        "value": "a386ddb0c3c659ef1134fa4551c38515",
                        "timestamp": "2022-09-20 13:47:25"
                    },
                    {
                        "value": "6ed11fa261ad9e5d1f750c8e7adf875b",
                        "timestamp": "2022-09-20 13:47:25"
                    },
                    {
                        "value": "139a75923471b1582d0e79add5039f23",
                        "timestamp": "2022-09-20 13:47:25"
                    },
                    {
                        "value": "d7083e27249fdaa95fd898dd6711518e",
                        "timestamp": "2022-09-19 16:25:38"
                    },
                    {
                        "value": "06bacb8b46925876cd0e118fcf8fbe2d",
                        "timestamp": "2022-09-19 16:25:38"
                    },
                    {
                        "value": "9b2cabb78ef070c73f2e4eada3ee315f",
                        "timestamp": "2022-09-13 13:48:54"
                    },
                    {
                        "value": "7e280d38a788f23394b590eb00457e69",
                        "timestamp": "2022-09-13 13:48:54"
                    },
                    {
                        "value": "b4b04316b42102d08a6dc0fdeeef497f",
                        "timestamp": "2022-09-13 13:48:38"
                    },
                    {
                        "value": "8206d7a8aa135ffedf71b72fe7d68f57",
                        "timestamp": "2022-09-13 13:48:38"
                    },
                    {
                        "value": "247517a98af0dff4e6b435fea755a514",
                        "timestamp": "2022-09-13 13:29:48"
                    },
                    {
                        "value": "72e88de1efc3b17b6b59a635bad25294",
                        "timestamp": "2022-09-13 13:29:47"
                    },
                    {
                        "value": "14686942cac846a19e4c1e80888620b2",
                        "timestamp": "2022-09-09 18:48:59"
                    },
                    {
                        "value": "eda0500ddb09822622eee531bc4cb4e6",
                        "timestamp": "2022-09-09 18:48:59"
                    },
                    {
                        "value": "b640e0e9281c54e0766cbc2d511a4679",
                        "timestamp": "2022-09-09 18:48:59"
                    },
                    {
                        "value": "5b745ca643b21b018294cde51dd2e2e4",
                        "timestamp": "2022-09-09 18:48:35"
                    },
                    {
                        "value": "911b41caf07e1358460415fe7ddc9ba5",
                        "timestamp": "2022-09-09 18:48:35"
                    },
                    {
                        "value": "84b1c1f7785ab476a460ec4ec24662c6",
                        "timestamp": "2022-08-31 07:11:51"
                    },
                    {
                        "value": "8ce6bf6376b4fe0f37504a5f0cfdfdbf",
                        "timestamp": "2022-08-31 07:11:51"
                    },
                    {
                        "value": "e5790b2745ceca88b9f1a715986a7f65",
                        "timestamp": "2022-08-30 13:52:39"
                    },
                    {
                        "value": "afea2f5df77aba1d1bea6ac96c4afb0c",
                        "timestamp": "2022-08-27 22:39:39"
                    },
                    {
                        "value": "c79d3e6bf5496a475c8ca347f672bdbf",
                        "timestamp": "2022-08-27 22:39:39"
                    },
                    {
                        "value": "ab018042894c383144662d45093e5a0a",
                        "timestamp": "2022-08-26 06:49:29"
                    },
                    {
                        "value": "eed9ec7f662df0c4df9cc6516ba95102",
                        "timestamp": "2022-08-26 06:49:29"
                    },
                    {
                        "value": "4e26985b20bf25d3761135ce7883952a",
                        "timestamp": "2022-08-26 06:49:29"
                    },
                    {
                        "value": "37d2d87f110760705ea13cb03412c3b4",
                        "timestamp": "2022-08-24 03:07:59"
                    },
                    {
                        "value": "25e47c7ea96eee0cf6da5ddb55859662",
                        "timestamp": "2022-08-20 03:15:38"
                    },
                    {
                        "value": "49a6954859ca2e9e248fc7717ff8fc8b",
                        "timestamp": "2022-08-16 15:03:10"
                    },
                    {
                        "value": "0572225a16c1d53cf164d03eccea663f",
                        "timestamp": "2022-08-16 15:03:10"
                    },
                    {
                        "value": "d8cf47258be03b3aa6bc817e27204447",
                        "timestamp": "2022-08-16 15:03:10"
                    },
                    {
                        "value": "00fa04b52c6f65d109bb7a37f9dd3ca9",
                        "timestamp": "2022-08-16 15:03:10"
                    },
                    {
                        "value": "89e1f35f087b00af26bf7645bc4aea23",
                        "timestamp": "2022-08-16 15:03:10"
                    },
                    {
                        "value": "80c0e20bcbc0a9a1fe14fd381cbf2d18",
                        "timestamp": "2022-08-16 15:03:10"
                    },
                    {
                        "value": "7665F5B25D6B1728BD122F439FB3A5B0",
                        "timestamp": "2022-06-13 20:33:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-08 16:17:01",
    "file_name": "formbook",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://kienmanowar.wordpress.com/2023/07/06/quicknote-examining-formbook-campaign-via-phishing-emails/",
            "date": "2023-07-06",
            "organization": "kienmanowar Blog",
            "author": "Tran Trung Kien",
            "title": "[QuickNote] Examining Formbook Campaign via Phishing Emails",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://github.com/itaymigdal/malware-analysis-writeups/blob/main/FormBook/FormBook.md",
            "date": "2023-06-30",
            "organization": "Github (itaymigdal)",
            "author": "Itay Migdal",
            "title": "Formbook unpacking",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.malware-traffic-analysis.net/2023/06/05/index.html",
            "date": "2023-06-05",
            "organization": "Malware Traffic Analysis",
            "author": "Brad Duncan",
            "title": "30 DAYS OF FORMBOOK: DAY 1, MONDAY 2023-06-05",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://blog.checkpoint.com/security/march-2023s-most-wanted-malware-new-emotet-campaign-bypasses-microsoft-blocks-to-distribute-malicious-onenote-files/",
            "date": "2023-04-10",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "March 2023\u2019s Most Wanted Malware: New Emotet Campaign Bypasses Microsoft Blocks to Distribute Malicious OneNote Files",
            "categories": [
                "Agent Tesla",
                "CloudEyE",
                "Emotet",
                "Formbook",
                "Nanocore RAT",
                "NjRAT",
                "QakBot",
                "Remcos",
                "Tofsee"
            ]
        },
        {
            "data_url": "https://research.loginsoft.com/threat-research/from-innocence-to-malice-the-onenote-malware-campaign-uncovered/",
            "date": "2023-03-30",
            "organization": "loginsoft",
            "author": "Saharsh Agrawal",
            "title": "From Innocence to Malice: The OneNote Malware Campaign Uncovered",
            "categories": [
                "Agent Tesla",
                "AsyncRAT",
                "DOUBLEBACK",
                "Emotet",
                "Formbook",
                "IcedID",
                "NetWire RC",
                "QakBot",
                "Quasar RAT",
                "RedLine Stealer",
                "XWorm"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/technical-analysis-xloaders-code-obfuscation-version-43",
            "date": "2023-03-30",
            "organization": "Zscaler",
            "author": "Javier Vicente",
            "title": "Technical Analysis of Xloader\u2019s Code Obfuscation in Version 4.3",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ipfs-a-new-data-frontier-or-a-new-cybercriminal-hideout",
            "date": "2023-03-16",
            "organization": "Trend Micro",
            "author": "Cedric Pernet",
            "title": "IPFS: A New Data Frontier or a New Cybercriminal Hideout?",
            "categories": [
                "Agent Tesla",
                "Formbook",
                "RedLine Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://any.run/cybersecurity-blog/xloader-formbook-encryption-analysis-and-malware-decryption/",
            "date": "2023-02-28",
            "organization": "ANY.RUN",
            "author": "ANY.RUN",
            "title": "XLoader/FormBook: Encryption Analysis and Malware Decryption",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/following-the-scent-of-trickgate-6-year-old-packer-used-to-deploy-the-most-wanted-malware/",
            "date": "2023-01-30",
            "organization": "Checkpoint",
            "author": "Arie Olshtein",
            "title": "Following the Scent of TrickGate: 6-Year-Old Packer Used to Deploy the Most Wanted Malware",
            "categories": [
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cerber",
                "Cobalt Strike",
                "Emotet",
                "Formbook",
                "HawkEye Keylogger",
                "Loki Password Stealer (PWS)",
                "Maze",
                "NetWire RC",
                "Remcos",
                "REvil",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/research/cyberattacks-targeting-ukraine-increase.html",
            "date": "2023-01-24",
            "organization": "Trellix",
            "author": "Daksh Kapur",
            "title": "Cyberattacks Targeting Ukraine Increase 20-fold at End of 2022 Fueled by Russia-linked Gamaredon Activity",
            "categories": [
                "Andromeda",
                "Formbook",
                "Houdini",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/trojanized-onenote-document-leads-to-formbook-malware/",
            "date": "2022-12-08",
            "organization": "Trustwave",
            "author": "Rodel Mendrez",
            "title": "Trojanized OneNote Document Leads to Formbook Malware",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2022/20221121-threat-intel-report-final.pdf",
            "date": "2022-11-21",
            "organization": "Malwarebytes",
            "author": "Malwarebytes",
            "title": "2022-11-21 Threat Intel Report",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "Formbook",
                "Hive",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/excel-document-delivers-multiple-malware-exploiting-cve-2017-11882-part-two",
            "date": "2022-10-05",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Excel Document Delivers Multiple Malware by Exploiting CVE-2017-11882 \u2013 Part II",
            "categories": [
                "Formbook",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/excel-document-delivers-malware-by-exploiting-cve-2017-11882",
            "date": "2022-09-19",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Excel Document Delivers Multiple Malware By Exploiting CVE-2017-11882 \u2013 Part I",
            "categories": [
                "Formbook",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://blog.netlab.360.com/purecrypter",
            "date": "2022-08-29",
            "organization": "360 netlab",
            "author": "wanghao",
            "title": "PureCrypter Loader continues to be active and has spread to more than 10 other families",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "AsyncRAT",
                "Formbook",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://www.connectwise.com/resources/formbook-remcos-rat",
            "date": "2022-08-04",
            "organization": "ConnectWise",
            "author": "Stu Gonzalez",
            "title": "Formbook and Remcos Backdoor RAT by ConnectWise CRU",
            "categories": [
                "Formbook",
                "Remcos"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/955924",
            "date": "2022-07-25",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Mass distribution of desktops (Formbook, Snake Keylogger) and use of Malware RelicRace/RelicSource as a means of delivery (CERT-UA#5056)",
            "categories": [
                "404 Keylogger",
                "Formbook",
                "RelicRace"
            ]
        },
        {
            "data_url": "https://www.cyren.com/blog/articles/example-analysis-of-multi-component-malware",
            "date": "2022-07-12",
            "organization": "Cyren",
            "author": "Kervin Alintanahin",
            "title": "Example Analysis of Multi-Component Malware",
            "categories": [
                "Emotet",
                "Formbook"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2022/07/01/xloader-returns-with-new-infection-technique/",
            "date": "2022-07-01",
            "organization": "cyble",
            "author": "Cyble",
            "title": "Xloader Returns With New Infection Technique",
            "categories": [
                "Formbook"
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
            "data_url": "https://www.netskope.com/blog/new-formbook-campaign-delivered-through-phishing-emails",
            "date": "2022-03-11",
            "organization": "Netskope",
            "author": "Gustavo Palazolo",
            "title": "New Formbook Campaign Delivered Through Phishing Emails",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.lac.co.jp/lacwatch/report/20220307_002893.html",
            "date": "2022-03-07",
            "organization": "LAC WATCH",
            "author": "Cyber \u200b\u200bEmergency Center",
            "title": "I CAN'T HEAR YOU NOW! INTERNAL BEHAVIOR OF INFORMATION-STEALING MALWARE AND JSOC DETECTION TRENDS",
            "categories": [
                "Xloader",
                "Agent Tesla",
                "Formbook",
                "Loki Password Stealer (PWS)"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/32149/",
            "date": "2022-02-28",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "Change in Distribution Method of Malware Disguised as Estimate (VBS Script)",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://forensicitguy.github.io/xloader-formbook-velvetsweatshop-spreadsheet/",
            "date": "2022-02-11",
            "organization": "forensicitguy",
            "author": "Tony Lambert",
            "title": "XLoader/Formbook Distributed by Encrypted VelvetSweatshop Spreadsheets",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/analysis-xloaders-c2-network-encryption",
            "date": "2022-01-21",
            "organization": "Zscaler",
            "author": "Javier Vicente",
            "title": "Analysis of Xloader\u2019s C2 Network Encryption",
            "categories": [
                "Xloader",
                "Formbook"
            ]
        },
        {
            "data_url": "https://elastic.github.io/security-research/intelligence/2022/01/01.formbook-adopts-cabless-approach/article/",
            "date": "2022-01-18",
            "organization": "Elastic",
            "author": "Derek Ditch",
            "title": "FORMBOOK Adopts CAB-less Approach",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/javascript-malware-dispensing-rats-into-the-wild/",
            "date": "2021-11-23",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "RATDispenser: Stealthy JavaScript Loader Dispensing RATs into the Wild",
            "categories": [
                "AdWind",
                "Ratty",
                "STRRAT",
                "CloudEyE",
                "Formbook",
                "Houdini",
                "Panda Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://yoroi.company/research/office-documents-may-the-xll-technique-change-the-threat-landscape-in-2022/",
            "date": "2021-11-16",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Office Documents: May the XLL technique change the threat Landscape in 2022?",
            "categories": [
                "Agent Tesla",
                "Dridex",
                "Formbook"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2021/09/threat-thursday-xloader-infostealer",
            "date": "2021-09-30",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: xLoader Infostealer",
            "categories": [
                "Xloader",
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/i/formbook-adds-latest-office-365-0-day-vulnerability-cve-2021-404.html",
            "date": "2021-09-29",
            "organization": "Trend Micro",
            "author": "Aliakbar Zahravi",
            "title": "FormBook Adds Latest Office 365 0-Day Vulnerability (CVE-2021-40444) to Its Arsenal",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://blogs.quickheal.com/formbook-malware-returns-new-variant-uses-steganography-and-in-memory-loading-of-multiple-stages-to-steal-data/",
            "date": "2021-07-21",
            "organization": "Quick Heal",
            "author": "Rumana Siddiqui",
            "title": "FormBook Malware Returns: New Variant Uses Steganography and In-Memory Loading of multiple stages to steal data",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/roboski-global-recovery-automation/",
            "date": "2021-07-12",
            "organization": "IBM",
            "author": "Melissa Frydrych",
            "title": "RoboSki and Global Recovery: Automation to Combat Evolving Obfuscation",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "BitRAT",
                "Formbook",
                "HawkEye Keylogger",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.ciphertechsolutions.com/roboski-global-recovery-automation/",
            "date": "2021-07-12",
            "organization": "Cipher Tech Solutions",
            "author": "Melissa Frydrych",
            "title": "RoboSki and Global Recovery: Automation to Combat Evolving Obfuscation",
            "categories": [
                "404 Keylogger",
                "Agent Tesla",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "BitRAT",
                "Formbook",
                "HawkEye Keylogger",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Quasar RAT",
                "RedLine Stealer",
                "Remcos"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/deep-analysis-formbook-new-variant-delivered-phishing-campaign-part-ii",
            "date": "2021-04-22",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Deep Analysis: FormBook New Variant Delivered in Phishing Campaign \u2013 Part II",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/deep-analysis-new-formbook-variant-delivered-phishing-campaign-part-I",
            "date": "2021-04-12",
            "organization": "Fortinet",
            "author": "Xiaopeng Zhang",
            "title": "Deep Analysis: New FormBook Variant Delivered in Phishing Campaign \u2013 Part I",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/wp-content/uploads/2021/03/HP_Bromium_Threat_Insights_Report_Q4_2020.pdf",
            "date": "2021-03-17",
            "organization": "HP",
            "author": "HP Bromium",
            "title": "Threat Insights Report Q4-2020",
            "categories": [
                "Agent Tesla",
                "BitRAT",
                "ComodoSec",
                "Dridex",
                "Emotet",
                "Ficker Stealer",
                "Formbook",
                "Zloader"
            ]
        },
        {
            "data_url": "https://youtu.be/aQwnHIlGSBM",
            "date": "2021-03-11",
            "organization": "YouTube ( Malware_Analyzing_&_RE_Tips_Tricks)",
            "author": "Ji\u0159\u00ed Vinopal",
            "title": "Formbook Reversing - Part1 [Formbook .NET loader/injector analyzing, decrypting, unpacking, patching]",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/",
            "date": "2021-01-09",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Command and Control Traffic Patterns",
            "categories": [
                "ostap",
                "LaZagne",
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cobalt Strike",
                "DanaBot",
                "DarkComet",
                "Dridex",
                "Emotet",
                "Formbook",
                "IcedID",
                "ISFB",
                "NetWire RC",
                "PlugX",
                "Quasar RAT",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/26806",
            "date": "2020-11-19",
            "organization": "SANS ISC InfoSec Forums",
            "author": "Xavier Mertens",
            "title": "PowerShell Dropper Delivering Formbook",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://tccontre.blogspot.com/2020/11/interesting-formbook-crypter.html",
            "date": "2020-11-05",
            "organization": "tccontre Blog",
            "author": "tcontre",
            "title": "Interesting FormBook Crypter - unconventional way to store encrypted data",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/threat-research/vba-purging-malspam-campaigns/",
            "date": "2020-10-16",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "VBA Purging Malspam Campaigns",
            "categories": [
                "Agent Tesla",
                "Formbook"
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
            "data_url": "https://drive.google.com/file/d/1oxINyIJfMtv_upJqRK9vLSchIBaU8wiU/view",
            "date": "2020-07-22",
            "organization": "S2W LAB Inc.",
            "author": "S2W LAB INTELLIGENCE TEAM",
            "title": "'FormBook Tracker' unveiled on the Dark Web",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2021/05/revisiting-the-nsis-based-crypter/",
            "date": "2020-05-31",
            "organization": "Malwarebytes",
            "author": "hasherezade",
            "title": "Revisiting the NSIS-based crypter",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/05/14/raticate/",
            "date": "2020-05-14",
            "organization": "SophosLabs",
            "author": "Markel Picado",
            "title": "RATicate: an attacker\u2019s waves of information-stealing malware",
            "categories": [
                "Agent Tesla",
                "BetaBot",
                "BlackRemote",
                "Formbook",
                "Loki Password Stealer (PWS)",
                "NetWire RC",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://umbrella.cisco.com/blog/navigating-cybersecurity-during-a-pandemic-latest-malware-and-threat-actors",
            "date": "2020-04-01",
            "organization": "Cisco",
            "author": "Shyam Sundar Ramaswami",
            "title": "Navigating Cybersecurity During a Pandemic: Latest Malware and Threat Actors",
            "categories": [
                "Azorult",
                "CloudEyE",
                "Formbook",
                "KPOT Stealer",
                "Metamorfo",
                "Nanocore RAT",
                "NetWire RC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://insights.oem.avira.com/a-new-technique-to-analyze-formbook-malware-infections/",
            "date": "2020-03-24",
            "organization": "Avira",
            "author": "Avira Protection Labs",
            "title": "A new technique to analyze FormBook malware infections",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://blog.360totalsecurity.com/en/bayworld-event-cyber-attack-against-foreign-trade-industry/",
            "date": "2020-01-19",
            "organization": "360",
            "author": "kate",
            "title": "BayWorld event, Cyber Attack Against Foreign Trade Industry",
            "categories": [
                "Azorult",
                "Formbook",
                "Nanocore RAT",
                "Revenge RAT"
            ]
        },
        {
            "data_url": "https://www.slideshare.net/codeblue_jp/cb19-cyber-threat-landscape-in-japan-revealing-threat-in-the-shadow-by-chi-en-shen-ashley-oleg-bondarenko",
            "date": "2019-12-12",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Cyber Threat Landscape in Japan \u2013 Revealing Threat in the Shadow",
            "categories": [
                "Cerberus",
                "TSCookie",
                "Cobalt Strike",
                "Dtrack",
                "Emotet",
                "Formbook",
                "IcedID",
                "Icefog",
                "IRONHALO",
                "Loki Password Stealer (PWS)",
                "PandaBanker",
                "PLEAD",
                "poisonplug",
                "TrickBot",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/new-whiteshadow-downloader-uses-microsoft-sql-retrieve-malware",
            "date": "2019-09-26",
            "organization": "Proofpoint",
            "author": "Bryan Campbell",
            "title": "New WhiteShadow downloader uses Microsoft SQL to retrieve malware",
            "categories": [
                "WhiteShadow",
                "Agent Tesla",
                "Azorult",
                "Crimson RAT",
                "Formbook",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Remcos"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/07/sweed-agent-tesla.html",
            "date": "2019-07-15",
            "organization": "Cisco Talos",
            "author": "Edmund Brumaghin",
            "title": "SWEED: Exposing years of Agent Tesla campaigns",
            "categories": [
                "Agent Tesla",
                "Formbook",
                "Loki Password Stealer (PWS)",
                "SWEED"
            ]
        },
        {
            "data_url": "https://www.cyberbit.com/formbook-research-hints-large-data-theft-attack-brewing/",
            "date": "2019-06-12",
            "organization": "Cyberbit",
            "author": "Hod Gavriel",
            "title": "Formbook Research Hints Large Data Theft Attack Brewing",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://usualsuspect.re/article/formbook-hiding-in-plain-sight",
            "date": "2019-05-02",
            "organization": "Usual Suspect RE",
            "author": "Johann Aydinbas",
            "title": "FormBook - Hiding in plain sight",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2019/01/vb2018-paper-inside-formbook-infostealer/",
            "date": "2019-01",
            "organization": "Virus Bulletin",
            "author": "Gabriela Nicolao",
            "title": "Inside Formbook infostealer",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.botconf.eu/wp-content/uploads/2018/12/2018-R-Jullian-In-depth-Formbook-Malware-Analysis.pdf",
            "date": "2018-12-05",
            "organization": "Botconf",
            "author": "R\u00e9mi Jullian",
            "title": "FORMBOOK In-depth malware analysis",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.peerlyst.com/posts/how-to-analyse-formbook-a-new-malware-as-a-service-sudhendu?trk=explore_page_resources_recent",
            "date": "2018-11-01",
            "organization": "Peerlyst",
            "author": "Sudhendu",
            "title": "How to Analyse FormBook - A New Malware-as-a-Service",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.peerlyst.com/posts/how-to-understand-formbook-a-new-malware-as-a-service-sudhendu?",
            "date": "2018-10-16",
            "organization": "Peerlyst",
            "author": "Sudhendu",
            "title": "How to understand FormBook - A New Malware-as-a-Service",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "http://blog.inquest.net/blog/2018/06/22/a-look-at-formbook-stealer/",
            "date": "2018-06-22",
            "organization": "InQuest",
            "author": "Aswanda",
            "title": "FormBook stealer: Data theft made easy",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/06/my-little-formbook.html",
            "date": "2018-06-20",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "My Little FormBook",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://thisissecurity.stormshield.com/2018/03/29/in-depth-formbook-malware-analysis-obfuscation-and-process-injection/",
            "date": "2018-03-29",
            "organization": "Stormshield",
            "author": "R\u00e9mi Jullian",
            "title": "In-depth Formbook malware analysis \u2013 Obfuscation and process injection",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "http://www.vkremez.com/2018/01/lets-learn-dissecting-formbook.html",
            "date": "2018-01-29",
            "organization": "Vitali Kremez Blog",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Dissecting FormBook Infostealer Malware: Crypter & \"RunLib.dll\"",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/10/formbook-malware-distribution-campaigns.html",
            "date": "2017-10-05",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "Significant FormBook Distribution Campaigns Impacting the U.S. and South Korea",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "https://www.arbornetworks.com/blog/asert/formidable-formbook-form-grabber/",
            "date": "2017-09-20",
            "organization": "NetScout",
            "author": "Dennis Schwarz",
            "title": "The Formidable FormBook Form Grabber",
            "categories": [
                "Formbook"
            ]
        },
        {
            "data_url": "http://cambuz.blogspot.de/2016/06/form-grabber-2016-cromeffoperathunderbi.html",
            "date": "2016-06",
            "organization": "Safety First Blog",
            "author": "SL4ID3R",
            "title": "Form Grabber 2016 [Crome,FF,Opera,Thunderbird, Outlook IE Safari] Hack the world",
            "categories": [
                "Formbook"
            ]
        }
    ],
    "mitre": []
};