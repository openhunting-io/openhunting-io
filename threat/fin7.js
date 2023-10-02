var threatdata = {
    "name": "FIN7",
    "alias": "FIN7, Gold Niagara, Calcium, Navigator, ATK 32, APT-C-11, ITG14, TAG-CR1",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "FIN7",
        "names": [
            {
                "name": "FIN7",
                "name-giver": "FireEye"
            },
            {
                "name": "Gold Niagara",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Calcium",
                "name-giver": "Symantec"
            },
            {
                "name": "Navigator",
                "name-giver": "Fox-IT"
            },
            {
                "name": "ATK 32",
                "name-giver": "Thales"
            },
            {
                "name": "APT-C-11",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "ITG14",
                "name-giver": "IBM"
            },
            {
                "name": "TAG-CR1",
                "name-giver": "Recorded Future"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2013",
        "description": "FIN7 is a financially-motivated threat group that has primarily targeted the U.S. retail, restaurant, and hospitality sectors since mid-2015. They often use point-of-sale malware. A portion of FIN7 was run out of a front company called Combi Security. FIN7 is sometimes referred to as {{Carbanak, Anunak}}, but these appear to be two groups using the same Carbanak malware and are therefore tracked separately.\n\nThe reports about arrests made of the mastermind of Carbanak instead of FIN7. However, security research teams keep referring to this arrest for all FIN7 activities since.",
        "observed-sectors": [
            "Casinos and Gambling",
            "Construction",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "High-Tech",
            "Hospitality",
            "Retail",
            "Technology",
            "Telecommunications",
            "Transportation"
        ],
        "observed-countries": [
            "Australia",
            "France",
            "Malta",
            "UK",
            "USA"
        ],
        "tools": [
            "7Logger",
            "Astra",
            "Bateleur",
            "BIOLOAD",
            "BIRDWATCH",
            "Boostwrite",
            "Carbanak",
            "Cobalt Strike",
            "CROWVIEW",
            "DNSMessenger",
            "Griffon",
            "HALFBAKED",
            "JSSLoader",
            "Lizar",
            "LOADOUT",
            "Meterpreter",
            "Mimikatz",
            "POWERPLANT",
            "POWERSOURCE",
            "RDFSNIFFER",
            "SQLRAT"
        ],
        "operations": [
            {
                "date": "2017-02",
                "activity": "In late February 2017, FireEye as a Service (FaaS) identified a spear phishing campaign that appeared to be targeting personnel involved with United States Securities and Exchange Commission (SEC) filings at various organizations.\nAll of the observed intended recipients of the spear phishing campaign appeared to be involved with SEC filings for their respective organizations.\nhttps://www.fireeye.com/blog/threat-research/2017/03/fin7_spear_phishing.html"
            },
            {
                "date": "2017-03",
                "activity": "Two recent fileless malware campaigns targeting financial institutions, government agencies and other enterprises have been linked to the same attack group.\nThe campaigns, disclosed by Kaspersky Lab and Cisco\u2019s Talos research outfit in the last five weeks, made extensive use of fileless malware and known penetration testing tools and utilities to spy on organizations and move data and money off of networks.\nhttps://threatpost.com/fileless-malware-campaigns-tied-to-same-attacker/124369/"
            },
            {
                "date": "2017-04",
                "activity": "In a newly-identified campaign, FIN7 modified their phishing techniques to implement unique infection and persistence mechanisms. FIN7 has moved away from weaponized Microsoft Office macros in order to evade detection. This round of FIN7 phishing lures implements hidden shortcut files (LNK files) to initiate the infection and VBScript functionality launched by mshta.exe to infect the victim.\nhttps://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html"
            },
            {
                "date": "2017-07",
                "activity": "Proofpoint researchers have uncovered that the threat actor commonly referred to as FIN7 has added a new Jscript backdoor called Bateleur and updated macros to its toolkit.\nhttps://www.proofpoint.com/us/threat-insight/post/fin7carbanak-threat-actor-unleashes-bateleur-jscript-backdoor"
            },
            {
                "date": "2017",
                "activity": "Leveraging Shim Databases for Persistence\nA unique aspect of the incidents was how the group installed the CARBANAK backdoor for persistent access. Mandiant identified that the group leveraged an application shim database to achieve persistence on systems in multiple environments. The shim injected a malicious in-memory patch into the Services Control Manager (\u201cservices.exe\u201d) process, and then spawned a CARBANAK backdoor process.\nhttps://www.fireeye.com/blog/threat-research/2017/05/fin7-shim-databases-persistence.html"
            },
            {
                "date": "2017-06",
                "activity": "Highly sophisticated fileless attack targeting restaurants across the US\nOn June 7, 2017, Morphisec Lab identified a new, highly sophisticated fileless attack targeting restaurants across the US. The ongoing campaign allows hackers to seize system control and install a backdoor to steal financial information at will. It incorporates some never before seen evasive techniques that allow it to bypass most security solutions \u2013 signature and behavior based.\nhttp://blog.morphisec.com/fin7-attacks-restaurant-industry"
            },
            {
                "date": "2017-10",
                "activity": "Attack to target banks and the enterprise\nLike clockwork, FIN7 again unleashed a new attack able to bypass almost every security solution. The attack, which took place between October 8 to 10, 2017, is yet another demonstration of the high-paced innovation by threat actors.\nhttp://blog.morphisec.com/fin7-attack-modifications-revealed"
            },
            {
                "date": "2018-05",
                "activity": "New Attack Panel and Malware Samples\nFlashpoint analysts recently uncovered a new attack panel used by this group in campaigns they have called Astra. The panel, written in PHP, functions as a script-management system, pushing attack scripts down to compromised computers.\nhttps://www.flashpoint-intel.com/blog/fin7-revisited-inside-astra-panel-and-sqlrat-malware/"
            },
            {
                "date": "2018",
                "activity": "High-profile breaches including Red Robin, Chili\u2019s, Arby\u2019s, Burgerville, Omni Hotels and Saks Fifth Avenue, among many others.\nFifth Avenue, Saks Off 5th, and Lord & Taylor department stores\u2014all owned by The Hudson\u2019s Bay Company\u2014acknowledged a data breach impacting more than five million credit and debit card numbers. The culprits? The same group that\u2019s spent the last few years pulling off data heists from Omni Hotels & Resorts, Trump Hotels, Jason\u2019s Deli, Whole Foods, Chipotle: A mysterious group known as Fin7.\nhttp://blog.morphisec.com/fin7-not-finished-morphisec-spots-new-campaign"
            },
            {
                "date": "2018-11",
                "activity": "In this blog post, we present our findings on two campaigns, which occurred in the first and second weeks of November. These campaigns follow patterns similar to those presented by FireEye in August but with just enough variations to bypass many security vendors.\nhttp://blog.morphisec.com/fin7-not-finished-morphisec-spots-new-campaign"
            },
            {
                "date": "2018/2019",
                "activity": "In 2018-2019, researchers of Kaspersky Lab\u2019s Global Research and Analysis Team analyzed various campaigns that used the same Tactics Tools and Procedures (TTPs) as the historic FIN7, leading the researchers to believe that this threat actor had remained active despite the 2018 arrests. In addition, during the investigation, we discovered certain similarities to other attacker groups that seemed to share or copy the FIN7 TTPs in their own operations.\nhttps://securelist.com/fin7-5-the-infamous-cybercrime-rig-fin7-continues-its-activities/90703/"
            },
            {
                "date": "2019-01",
                "activity": "The shared codebase with recent tools attributed to FIN7, together with the same techniques and backdoor, allows to attribute this new loader to the cybercrime group. The timestamps, together with simpler functionality, suggest BIOLOAD is a preceding iteration of BOOSTWRITE.\nSince the loader is specifically built for each targeted machine and requires administrative permissions to deploy, it suggests the group gathers information about its targets\u2019 networks.\nhttps://www.fortinet.com/blog/threat-research/bioload-fin7-boostwrite-lost-twin.html"
            },
            {
                "date": "2019-10",
                "activity": "In this blog, we reveal two of FIN7\u2019s new tools that we have called BOOSTWRITE and RDFSNIFFER.\nhttps://www.fireeye.com/blog/threat-research/2019/10/mahalo-fin7-responding-to-new-tools-and-techniques.html"
            },
            {
                "date": "2020-03",
                "activity": "A US hospitality provider has recently been the target of an incredibly rare BadUSB attack, ZDNet has learned from cyber-security firm Trustwave.\nThe attack happened after the company received an envelope containing a fake BestBuy gift card, along with a USB thumb drive.\nhttps://www.zdnet.com/article/rare-badusb-attack-detected-in-the-wild-against-us-hospitality-provider/"
            },
            {
                "date": "2020-07",
                "activity": "Collaboration between FIN7 and the RYUK group\nhttps://blog.truesec.com/2020/12/22/collaboration-between-fin7-and-the-ryuk-group-a-truesec-investigation/"
            },
            {
                "date": "2020-12",
                "activity": "This report presents an attack chain that was intercepted and prevented within a customer\u2019s network in December 2020, then will focus on a component from a typical FIN7 attack chain - JSSLoader.\nhttps://blog.morphisec.com/the-evolution-of-the-fin7-jssloader"
            },
            {
                "date": "2021-06",
                "activity": "Cybercrime Group FIN7 Using Windows 11 Alpha-Themed Docs to Drop Javascript Backdoor\nhttps://www.anomali.com/blog/cybercrime-group-fin7-using-windows-11-alpha-themed-docs-to-drop-javascript-backdoor"
            },
            {
                "date": "2021-10",
                "activity": "FIN7 Recruits Talent For Push Into Ransomware\nhttps://geminiadvisory.io/fin7-ransomware-bastion-secure/"
            },
            {
                "date": "2022-01",
                "activity": "FIN7 Power Hour: Adversary Archaeology and the Evolution of FIN7\nhttps://www.mandiant.com/resources/evolution-of-fin7"
            },
            {
                "date": "2023-03",
                "activity": "FIN7 tradecraft seen in attacks against Veeam backup servers\nhttps://labs.withsecure.com/publications/fin7-target-veeam-servers"
            }
        ],
        "counter-operations": [
            {
                "date": "2018-08",
                "activity": "Three Members of Notorious International Cybercrime Group \u201cFin7\u201d In Custody for Role in Attacking Over 100 U.S. companies\nhttps://www.justice.gov/opa/pr/three-members-notorious-international-cybercrime-group-fin7-custody-role-attacking-over-100"
            },
            {
                "date": "2020-05",
                "activity": "Another Alleged FIN7 Cybercrime Gang Member Arrested\nhttps://www.bankinfosecurity.com/another-alleged-fin7-cybercrime-gang-member-arrested-a-14345"
            },
            {
                "date": "2021-04",
                "activity": "FIN7 sysadmin behind \u201cbillions in damage\u201d gets 10 years\nhttps://blog.malwarebytes.com/reports/2021/04/fin7-sysadmin-behind-billions-in-damage-gets-10-years/"
            },
            {
                "date": "2021-06",
                "activity": "FIN7 manager sentenced to 7 years for role in global hacking scheme\nhttps://therecord.media/fin7-manager-sentenced-to-7-years-for-role-in-global-hacking-scheme/"
            }
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
            "https://atr-blog.gigamon.com/2017/07/25/footprints-of-fin7-tracking-actor-patterns-part-1",
            "https://atr-blog.gigamon.com/2017/07/26/footprints-of-fin7-tracking-actor-patterns-part-2",
            "https://exchange.xforce.ibmcloud.com/threat-group/guid:5b8c11d520f9e15fcb51ed77c3cae246",
            "https://www.prodaft.com/m/reports/FIN7_TLPCLEAR.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0046/"
        ],
        "uuid": "c3f1f1ff-7d79-4385-bb5b-340c252c5a77",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fin7",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.computerweekly.com/news/252525240/ALPHV-BlackCat-ransomware-family-becoming-more-dangerous",
            "date": "2022-09-22",
            "organization": "ComputerWeekly",
            "author": "Alex Scroxton",
            "title": "ALPHV/BlackCat ransomware family becoming more dangerous",
            "categories": [
                "BlackCat",
                "BlackCat",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.deepinstinct.com/blog/understanding-the-windows-javascript-threat-landscape",
            "date": "2021-11-04",
            "organization": "Deep instinct",
            "author": "Shaul Vilkomir-Preisman",
            "title": "Understanding the Windows JavaScript Threat Landscape",
            "categories": [
                "STRRAT",
                "Griffon",
                "BlackByte",
                "Houdini",
                "Vjw0rm",
                "FIN7"
            ]
        },
        {
            "data_url": "https://threatintel.blog/OPBlueRaven-Part2/",
            "date": "2020-09-01",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "OpBlueRaven: Unveiling Fin7/Carbanak - Part II : BadUSB Attacks",
            "categories": [
                "Bella",
                "Carbanak",
                "FIN7"
            ]
        },
        {
            "data_url": "https://threatintel.blog/OPBlueRaven-Part1/",
            "date": "2020-07-31",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "OpBlueRaven: Unveiling Fin7/Carbanak - Part 1 : Tirion",
            "categories": [
                "Carbanak",
                "REvil",
                "FIN7"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-niagara",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD NIAGARA",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DRIFTPIN",
                "TinyMet",
                "FIN7"
            ]
        },
        {
            "data_url": "https://securelist.com/fin7-5-the-infamous-cybercrime-rig-fin7-continues-its-activities/90703/",
            "date": "2019-05-08",
            "organization": "Kaspersky Labs",
            "author": "Yury Namestnikov",
            "title": "FIN7.5: the infamous cybercrime rig \u201cFIN7\u201d continues its activities",
            "categories": [
                "Griffon",
                "Ave Maria",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/fin7-revisited-inside-astra-panel-and-sqlrat-malware/",
            "date": "2019-03-20",
            "organization": "Flashpoint",
            "author": "Joshua Platt",
            "title": "FIN7 Revisited: Inside Astra Panel and SQLRat Malware",
            "categories": [
                "SQLRat",
                "FIN7"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0008/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Carbanak",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0046/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: FIN7",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/fin7-not-finished-morphisec-spots-new-campaign",
            "date": "2018-12-21",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "FIN7 Not Finished - Morphisec Spots New Campaign",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.computerweekly.com/news/252446153/Three-Carbanak-cyber-heist-gang-members-arrested",
            "date": "2018-08-02",
            "organization": "ComputerWeekly",
            "author": "Warwick Ashford",
            "title": "Three Carbanak cyber heist gang members arrested",
            "categories": [
                "Cobalt",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/arrests-put-new-focus-on-carbon-spider-adversary-group/",
            "date": "2018-08-01",
            "organization": "CrowdStrike",
            "author": "Paul Moon",
            "title": "Arrests Put New Focus on CARBON SPIDER Adversary Group",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
            "date": "2018-08-01",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "On the Hunt for FIN7: Pursuing an Enigmatic and Evasive Global Criminal Operation",
            "categories": [
                "BELLHOP",
                "POWERPIPE",
                "BABYMETAL",
                "SocksBot",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/resources/threat-research/Anunak_APT_against_financial_institutions.pdf",
            "date": "2018-05-22",
            "organization": "Group-IB",
            "author": "Group-IB",
            "title": "Anunak: APT against financial institutions",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/fin7-attack-modifications-revealed",
            "date": "2017-10-13",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "FIN7 Dissected: Hackers Accelerate Pace of Innovation",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/fin7carbanak-threat-actor-unleashes-bateleur-jscript-backdoor",
            "date": "2017-07-31",
            "organization": "Proofpoint",
            "author": "Matthew Mesa",
            "title": "FIN7/Carbanak threat actor unleashes Bateleur JScript backdoor",
            "categories": [
                "Bateleur",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.icebrg.io/blog/footprints-of-fin7-tracking-actor-patterns",
            "date": "2017-07-25",
            "organization": "Gigamon",
            "author": "Applied Threat Research Team",
            "title": "Footprints of Fin7: Tracking Actor Patterns (Part 1)",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/fin7-attacks-restaurant-industry",
            "date": "2017-06-09",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "FIN7 Takes Another Bite at the Restaurant Industry",
            "categories": [
                "Meterpreter",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/05/fin7-shim-databases-persistence.html",
            "date": "2017-05-03",
            "organization": "FireEye",
            "author": "Matthew McWhirt",
            "title": "To SDB, Or Not To SDB: FIN7 Leveraging Shim Databases for Persistence",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html",
            "date": "2017-04-24",
            "organization": "FireEye",
            "author": "Saravanan Mohankumar",
            "title": "FIN7 Evolution and the Phishing LNK",
            "categories": [
                "HALFBAKED",
                "FIN7"
            ]
        },
        {
            "data_url": "https://threatpost.com/fileless-malware-campaigns-tied-to-same-attacker/124369/",
            "date": "2017-03-16",
            "organization": "Threatpost",
            "author": "Michael Mimoso",
            "title": "Fileless Malware Campaigns Tied to Same Attacker",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/03/fin7_spear_phishing.html",
            "date": "2017-03-07",
            "organization": "FireEye",
            "author": "Jordan Nuce",
            "title": "FIN7 Spear Phishing Campaign Targets Personnel Involved in SEC Filings",
            "categories": [
                "POWERSOURCE",
                "FIN7"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20161223002016/https://www.symantec.com/connect/blogs/odinaff-new-trojan-used-high-level-financial-attacks",
            "date": "2016-10-11",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Odinaff: New Trojan used in high level financial attacks",
            "categories": [
                "Batel",
                "FlawedAmmyy",
                "Odinaff",
                "RMS",
                "FIN7"
            ]
        },
        {
            "data_url": "https://www.europol.europa.eu/newsroom/news/mastermind-behind-eur-1-billion-cyber-bank-robbery-arrested-in-spain",
            "date": "2016-06",
            "organization": "clearskysec",
            "author": "ClearSky Cybersecurity",
            "title": "Operation DustySky Part 2",
            "categories": [
                "Cobalt",
                "FIN7"
            ]
        },
        {
            "data_url": "https://en.wikipedia.org/wiki/Carbanak",
            "date": "2015-02-15",
            "organization": "Wikipedia",
            "author": "Various",
            "title": "Carbanak",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064518/Carbanak_APT_eng.pdf",
            "date": "2015-02",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "CARBANAK APTTHE GREAT BANK ROBBERY",
            "categories": [
                "FIN7"
            ]
        },
        {
            "data_url": "https://app.box.com/s/p7qzcury97tuwk26694uutujwqmwqyhe",
            "date": "2015-02",
            "organization": "Kaspersky SAS",
            "author": "GReAT",
            "title": "Carbanak APT: The Great Bank Robbery",
            "categories": [
                "Carbanak",
                "FIN7"
            ]
        },
        {
            "data_url": "http://2014.zeronights.ru/assets/files/slides/ivanovb-zeronights.pdf",
            "date": "2014-11-13",
            "organization": "ZeroNights",
            "author": "Ivanov Boris",
            "title": "Computer Forensic Investigation of mobile Banking Trojan",
            "categories": [
                "FIN7"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "fin7",
            "procedure_code": "g0046",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0046",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "fin7 has registered look-alike domains for use in phishing campaigns.[26]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1587.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1587/001",
                    "technique_name": "develop capabilities : malware",
                    "technique_description": "adversaries may develop malware and malware components that can be used during targeting. building malicious software can include the development of payloads, droppers, post-compromise tools, backdoors (including backdoored images), packers, c2 protocols, and the creation of infected removable media. adversaries may develop malware to support their operations, creating a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "fin7 has developed malware for use in operations, including the creation of infected removable media.[4][13]"
                },
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
                    "procedure_description": "fin7 sent spearphishing emails with either malicious microsoft documents or rtf files attached.[94][95][96][97][98]"
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
                    "procedure_description": "fin7 has conducted broad phishing campaigns using malicious links.[52]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "fin7 actors have mailed usb drives to potential victims containing malware that downloads and installs various backdoors, including in some cases for ransomware operations.[14]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "fin7 has harvested valid administrative credentials for lateral movement.[32]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "fin7 used sql scripts to help perform tasks on the victim's machine.[20][21][20]"
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
                    "procedure_description": "fin7 used a powershell script to launch shellcode that retrieved an additional payload.[95][96][97]"
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
                    "procedure_description": "fin7 used the command prompt to launch commands on the victim\u2019s machine.[124][125]"
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
                    "procedure_description": "fin7 used vbs scripts to help perform tasks on the victim's machine.[50][51][52]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "fin7 used javascript scripts to help perform tasks on the victim's machine.[35][36][35]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/002",
                    "technique_name": "inter-process communication : dynamic data exchange",
                    "technique_description": "adversaries may use windows dynamic data exchange (dde) to execute arbitrary commands. dde is a client-server protocol for one-time and/or continuous inter-process communication (ipc) between applications. once a link is established, applications can autonomously exchange transactions consisting of strings, warm data links (notifications when a data item changes), hot data links (duplications of changes to a data item), and requests for command execution.",
                    "procedure_description": "fin7 spear phishing campaigns have included malicious word documents with dde execution.[17]"
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
                    "procedure_description": "fin7 malware has created scheduled tasks to establish persistence.[59][60][61][62]"
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
                    "procedure_description": "fin7 has used malicious links to lure victims into downloading malware.[37]"
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
                    "procedure_description": "fin7 lured victims to double-click on images in the attachments they sent which would then execute the hidden lnk file.[88][89][90]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "fin7 has used wmi to install malware on targeted systems.[45]"
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
                    "procedure_description": "fin7 malware has created registry run and runonce keys to establish persistence, and has also added items to the startup folder.[92][93]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "fin7 created new windows services and added them to the startup directories for persistence.[52]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/011",
                    "technique_name": "event triggered execution : application shimming",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims. the microsoft windows application compatibility infrastructure/framework (application shim) was created to allow for backward compatibility of software as the operating system codebase changes over time. for example, the application shimming feature allows developers to apply fixes to applications (without rewriting code) that were created for windows xp so that it will work with windows 10.",
                    "procedure_description": "fin7 has used application shim databases for persistence.[3]"
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
                    "procedure_description": "fin7 malware has created scheduled tasks to establish persistence.[59][60][61][62]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "fin7 has harvested valid administrative credentials for lateral movement.[32]"
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
                    "procedure_description": "fin7 malware has created registry run and runonce keys to establish persistence, and has also added items to the startup folder.[92][93]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "fin7 created new windows services and added them to the startup directories for persistence.[52]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/011",
                    "technique_name": "event triggered execution : application shimming",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims. the microsoft windows application compatibility infrastructure/framework (application shim) was created to allow for backward compatibility of software as the operating system codebase changes over time. for example, the application shimming feature allows developers to apply fixes to applications (without rewriting code) that were created for windows xp so that it will work with windows 10.",
                    "procedure_description": "fin7 has used application shim databases for persistence.[3]"
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
                    "procedure_description": "fin7 malware has created scheduled tasks to establish persistence.[59][60][61][62]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "fin7 has harvested valid administrative credentials for lateral movement.[32]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "fin7 has created a scheduled task named \"adobeflashsync\" to establish persistence.[26]"
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
                    "procedure_description": "fin7 has attempted to run darkside ransomware with the filename sleep.exe.[56]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "fin7 has used fragmented strings, environment variables, standard input (stdin), and native character-replacement functionalities to obfuscate commands.[6][36][37]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "fin7 has signed carbanak payloads with legally purchased code signing certificates. fin7 has also digitally signed their phishing documents, backdoors and other staging tools to bypass security controls.[32][33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "fin7 has used mshta.exe to execute vbscript to execute malicious code on victim systems.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "fin7 has harvested valid administrative credentials for lateral movement.[32]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "fin7 used images embedded into document lures that only activate the payload when a user double clicks to avoid sandboxes.[4]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1558.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1558/003",
                    "technique_name": "steal or forge kerberos tickets : kerberoasting",
                    "technique_description": "adversaries may abuse a valid kerberos ticket-granting ticket (tgt) or sniff network traffic to obtain a ticket-granting service (tgs) ticket that may be vulnerable to brute force.",
                    "procedure_description": "fin7 has used kerberoasting for credential access and to enable lateral movement.[10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "fin7 used images embedded into document lures that only activate the payload when a user double clicks to avoid sandboxes.[4]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1210",
                    "technique_link": "https://attack.mitre.org/techniques/T1210",
                    "technique_name": "exploitation of remote services",
                    "technique_description": "adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code.\u00a0a common goal for post-compromise exploitation of remote services is for lateral movement to enable access to a remote system.",
                    "procedure_description": "fin7 has exploited zerologon (cve-2020-1472) against vulnerable domain controllers.[17]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "fin7 has used rdp to move laterally in victim environments.[24]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/004",
                    "technique_name": "remote services : ssh",
                    "technique_description": "adversaries may use valid accounts to log into remote machines using secure shell (ssh). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "fin7 has used ssh to move laterally through victim environments.[6]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/005",
                    "technique_name": "remote services : vnc",
                    "technique_description": "adversaries may use valid accounts to remotely control machines using virtual network computing (vnc).  vnc is a platform-independent desktop sharing system that uses the rfb (\"remote framebuffer\") protocol to enable users to remotely control another computer\u2019s display by relaying the screen, mouse, and keyboard inputs over the network.",
                    "procedure_description": "fin7 has used tightvnc to control compromised hosts.[12]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "fin7 actors have mailed usb drives to potential victims containing malware that downloads and installs various backdoors, including in some cases for ransomware operations.[14]"
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
                    "procedure_description": "fin7 has collected files and other sensitive information from a compromised network.[70]"
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
                    "procedure_description": "fin7 captured screenshots and desktop video recordings.[60]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1125",
                    "technique_link": "https://attack.mitre.org/techniques/T1125",
                    "technique_name": "video capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., integrated cameras or webcams) or applications (e.g., video call services) to capture video recordings for the purpose of gathering information. images may also be captured from devices or applications, potentially in specified intervals, in lieu of video files.",
                    "procedure_description": "fin7 created a custom video recording capability that could be used to monitor operations in the victim's environment.[16][17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "fin7 has performed c2 using dns via a, opt, and txt records.[26]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "fin7's harpy backdoor malware can use dns as a backup channel for c2 if http fails.[18]"
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
                    "procedure_description": "fin7 has downloaded additional malware to execute on the victim's machine, including by using a powershell script to launch shellcode that retrieves an additional payload.[177][178]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "fin7 has used port-protocol mismatches on ports such as 53, 80, 443, and 8080 during c2.[14]"
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
                    "procedure_description": "fin7 used legitimate services like google docs, google scripts, and pastebin for c2.[27]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1567/002",
                    "technique_name": "exfiltration over web service : exfiltration to cloud storage",
                    "technique_description": "adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the internet.",
                    "procedure_description": "fin7 has exfiltrated stolen data to the mega file sharing site.[12]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "fin7 has encrypted virtual disk volumes on esxi servers using a version of darkside ransomware.[46]"
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
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
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};