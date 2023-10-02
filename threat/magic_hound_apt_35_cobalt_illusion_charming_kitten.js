var threatdata = {
    "name": "Magic Hound, APT 35, Cobalt Illusion, Charming Kitten",
    "alias": "Magic Hound, APT 35, Cobalt Illusion, Cobalt Mirage, Charming Kitten, TEMP.Beanie, Timberworm, Tarh Andishan, TA453, Phosphorus, TunnelVision, UNC788, Yellow Garuda, Educated Manticore, Mint Sandstorm",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Magic Hound, APT 35, Cobalt Illusion, Charming Kitten",
        "names": [
            {
                "name": "Magic Hound",
                "name-giver": "Palo Alto"
            },
            {
                "name": "APT 35",
                "name-giver": "Mandiant"
            },
            {
                "name": "Cobalt Illusion",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Cobalt Mirage",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Charming Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TEMP.Beanie",
                "name-giver": "FireEye"
            },
            {
                "name": "Timberworm",
                "name-giver": "Symantec"
            },
            {
                "name": "Tarh Andishan",
                "name-giver": "Cylance"
            },
            {
                "name": "TA453",
                "name-giver": "Proofpoint"
            },
            {
                "name": "Phosphorus",
                "name-giver": "Microsoft"
            },
            {
                "name": "TunnelVision",
                "name-giver": "SentinelOne"
            },
            {
                "name": "UNC788",
                "name-giver": "FireEye"
            },
            {
                "name": "Yellow Garuda",
                "name-giver": "PWC"
            },
            {
                "name": "Educated Manticore",
                "name-giver": "Check Point"
            },
            {
                "name": "Mint Sandstorm",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored, Islamic Revolutionary Guard Corps (IRGC)",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "Magic Hound is an Iranian-sponsored threat group operating primarily in the Middle East that dates back as early as 2014. The group behind the campaign has primarily targeted organizations in the energy, government, and technology sectors that are either based or have business interests in Saudi Arabia.\n\nMagic Hound has 1 subgroup:\n1. {{Subgroup: DEV-0270, Nemesis Kitten}}\n\nThis group appears to be the evolvement of {{Cutting Kitten, TG-2889}}.\n\nThere is some infrastructure overlap with {{Rocket Kitten, Newscaster, NewsBeef}}, {{ITG18}} and {{APT 42}}.",
        "observed-sectors": [
            "Defense",
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "IT",
            "Oil and gas",
            "Technology",
            "Telecommunications",
            "that are either based or have business interests in Saudi Arabia, and ClearSky, HBO, civil and human rights activists and journalists"
        ],
        "observed-countries": [
            "Afghanistan",
            "Canada",
            "Egypt",
            "Iran",
            "Iraq",
            "Israel",
            "Jordan",
            "Kuwait",
            "Morocco",
            "Pakistan",
            "Saudi Arabia",
            "Spain",
            "Syria",
            "Turkey",
            "UAE",
            "UK",
            "USA",
            "Venezuela",
            "Yemen"
        ],
        "tools": [
            "CWoolger",
            "DistTrack",
            "DownPaper",
            "FireMalv",
            "FRP",
            "Ghambar",
            "Havij",
            "HYPERSCRAPE",
            "Leash",
            "Matryoshka RAT",
            "Mimikatz",
            "MPKBot",
            "NETWoolger",
            "PINEFLOWER",
            "PowerLess Backdoor",
            "POWERSTAR",
            "PsList",
            "PupyRAT",
            "sqlmap",
            "TDTESS"
        ],
        "operations": [
            {
                "date": "2014 Mid",
                "activity": "Operation \u201cThamar Reservoir\u201d\nThis report reviews an ongoing cyber-attack campaign dating back to mid-2014. Additional sources indicate it may date as far back as 2011. We call this campaign Thamar Reservoir, named after one of the targets, Thamar E. Gindin, who exposed new information about the attack and is currently assisting with the investigation.\nhttps://www.clearskysec.com/thamar-reservoir/"
            },
            {
                "date": "2016",
                "activity": "Unit 42 has discovered a persistent attack campaign operating primarily in the Middle East dating back to at least mid-2016 which we have named Magic Hound. This appears to be an attack campaign focused on espionage. Based upon our visibility it has primarily targeted organizations in the energy, government, and technology sectors that are either based or have business interests in Saudi Arabia. The adversaries appear to have evolved their tactics and techniques throughout the tracked time-period, iterating through a diverse toolset across different waves of attacks.\nhttps://unit42.paloaltonetworks.com/unit42-magic-hound-campaign-attacks-saudi-targets/"
            },
            {
                "date": "2017-01",
                "activity": "PupyRAT campaign\nSecureWorks Counter Threat Unit (CTU) researchers analyzed a phishing campaign that targeted a Middle Eastern organization in early January 2017. Some of messages were sent from legitimate email addresses belonging to several Middle Eastern organizations.\nhttps://www.secureworks.com/blog/iranian-pupyrat-bites-middle-eastern-organizations"
            },
            {
                "date": "2017",
                "activity": "In early 2017, SecureWorks Counter Threat Unit (CTU) researchers observed phishing campaigns targeting several entities in the Middle East and North Africa (MENA), with a focus on Saudi Arabian organizations. The campaigns delivered PupyRAT, an open-source cross-platform remote access Trojan.\nhttps://www.secureworks.com/research/the-curious-case-of-mia-ash"
            },
            {
                "date": "2018-06",
                "activity": "Impersonating ClearSky, the security firm that uncovered its campaigns\nIranian cyberespionage group Charming Kitten, which has been operating since 2014, has impersonated the cybersecurity firm that exposed its operations and campaigns. Israeli firm ClearSky Security said the group managed to copy its official website hosted on a similar-looking domain \u2013 clearskysecurity[.]net.\nClearSky\u2019s actual website is Clearskysec.com.\nhttps://cyware.com/news/iranian-apt-charming-kitten-impersonates-clearsky-the-security-firm-that-uncovered-its-campaigns-7fea0b4f"
            },
            {
                "date": "2017-08",
                "activity": "Breach of HBO\nOn August 7 a small treasure trove of HBO content was posted publicly to the web by a hacker who is now demanding a $6 million payment to stop any further release of data. The hacker who goes by Mr. Smith posted five scripts for Game of Thrones and a month\u2019s worth of email from HBO Vice President for Film Programming Leslie Cohen along with some other corporate information, according to the Associated Press.\nhttps://www.scmagazine.com/home/security-news/cybercrime/hbo-breach-accomplished-with-hard-work-by-hacker-poor-security-practices-by-victim/"
            },
            {
                "date": "2018-10",
                "activity": "The Return of The Charming Kitten\nIn this campaign, hackers have targeted individuals who are involved in economic and military sanctions against the Islamic Republic of Iran as well as politicians, civil and human rights activists and journalists around the world.\nOur review in Certfa demonstrates that the hackers \u2013 knowing that their victims use two-step verification \u2013 target verification codes and also their email accounts such as Yahoo! And Gmail.\nhttps://blog.certfa.com/posts/the-return-of-the-charming-kitten/"
            },
            {
                "date": "2019-07",
                "activity": "In August, the campaign has progressed, and unlike July, it seems like the APT group is now expanding its activities toward influential public figures around the world, rather than academic researchers state organizations.\nhttps://www.clearskysec.com/the-kittens-are-back-in-town/"
            },
            {
                "date": "2019-08",
                "activity": "In a 30-day period between August and September, the Microsoft Threat Intelligence Center (MSTIC) observed Phosphorus making more than 2,700 attempts to identify consumer email accounts belonging to specific Microsoft customers and then attack 241 of those accounts.\nhttps://blogs.microsoft.com/on-the-issues/2019/10/04/recent-cyberattacks-require-us-all-to-be-vigilant/\nhttps://www.clearskysec.com/wp-content/uploads/2019/10/The-Kittens-Are-Back-in-Town-2.pdf"
            },
            {
                "date": "2020-01",
                "activity": "Fake Interview: The New Activity of Charming Kitten\nhttps://blog.certfa.com/posts/fake-interview-the-new-activity-of-charming-kitten/"
            },
            {
                "date": "2020-06",
                "activity": "APT35 \u2018Charming Kitten' discovered in a pre-infected environment\nhttps://www.darktrace.com/en/blog/apt-35-charming-kitten-discovered-in-a-pre-infected-environment/"
            },
            {
                "date": "2020-07",
                "activity": "Starting July 2020, we have identified a new TTP of the group, impersonating \u201cDeutscheWelle\u201d and the \u201cJewish Journal\u201d using emails alongside WhatsApp messages as their main platform to approach the target and convince them to open a malicious link.\nhttps://www.clearskysec.com/wp-content/uploads/2020/08/The-Kittens-are-Back-in-Town-3.pdf"
            },
            {
                "date": "2020-08",
                "activity": "New cyberattacks targeting U.S. elections\nhttps://blogs.microsoft.com/on-the-issues/2020/09/10/cyberattacks-us-elections-trump-biden/"
            },
            {
                "date": "2020 Late",
                "activity": "Operation \u201cBadBlood\u201d\nBadBlood: TA453 Targets US and Israeli Medical Research Personnel in Credential Phishing Campaigns\nhttps://www.proofpoint.com/us/blog/threat-insight/badblood-ta453-targets-us-and-israeli-medical-research-personnel-credential"
            },
            {
                "date": "2020 Late",
                "activity": "Would\u2019ve, Could\u2019ve, Should\u2019ve\u2026Did: TA453 Refuses to be Bound by Expectations\nhttps://www.proofpoint.com/us/blog/threat-insight/ta453-refuses-be-bound-expectations"
            },
            {
                "date": "2020-12",
                "activity": "During the Christmas holidays and the beginning of the new year, the Charming Kitten group, the Iranian state-backed hackers, have begun a targeted phishing campaign of espionage against different individuals to collect information.\nhttps://blog.certfa.com/posts/charming-kitten-christmas-gift/"
            },
            {
                "date": "2021-01",
                "activity": "Operation \u201cSpoofedScholars\u201d\nTA453, an Iranian-state aligned actor, masqueraded as British scholars to covertly target individuals of intelligence interest to the Iranian government in what Proofpoint has dubbed Operation SpoofedScholars.\nhttps://www.proofpoint.com/us/blog/threat-insight/operation-spoofedscholars-conversation-ta453"
            },
            {
                "date": "2021 Late",
                "activity": "PowerLess Trojan: Iranian APT Phosphorus Adds New PowerShell Backdoor for Espionage\nhttps://www.cybereason.com/blog/powerless-trojan-iranian-apt-phosphorus-adds-new-powershell-backdoor-for-espionage"
            },
            {
                "date": "2021-12",
                "activity": "Iranian Spear Phishing Operation Targets Former Israeli Foreign Minister, Former US Ambassador to Israel, Former Israeli Army General and Three other High-Profile Executives\nhttps://blog.checkpoint.com/2022/06/14/iranian-spear-phishing-operation-targets-former-israeli-foreign-minister-former-us-ambassador-to-israel-former-israeli-army-general-and-three-other-high-profile-executives/"
            },
            {
                "date": "2021-12",
                "activity": "Log4Shell attacks expand to nation-state groups from China, Iran, North Korea, and Turkey\nhttps://therecord.media/log4shell-attacks-expand-to-nation-state-groups-from-china-iran-north-korea-and-turkey/"
            },
            {
                "date": "2021-12",
                "activity": "New Iranian APT data extraction tool\nhttps://blog.google/threat-analysis-group/new-iranian-apt-data-extraction-tool/"
            },
            {
                "date": "2022-01",
                "activity": "APT35 exploits Log4j vulnerability to distribute new modular PowerShell toolkit\nhttps://research.checkpoint.com/2022/apt35-exploits-log4j-vulnerability-to-distribute-new-modular-powershell-toolkit/"
            },
            {
                "date": "2022-01",
                "activity": "COBALT MIRAGE Conducts Ransomware Operations in U.S.\nhttps://www.secureworks.com/blog/cobalt-mirage-conducts-ransomware-operations-in-us"
            },
            {
                "date": "2022-02",
                "activity": "Iranian-Aligned Threat Actor \u201cTunnelVision\u201d Actively Exploiting VMware Horizon\nhttps://www.sentinelone.com/labs/log4j2-in-the-wild-iranian-aligned-threat-actor-tunnelvision-actively-exploiting-vmware-horizon/"
            },
            {
                "date": "2022 Early",
                "activity": "Tracing State-Aligned Activity Targeting Journalists, Media\nhttps://www.proofpoint.com/us/blog/threat-insight/above-fold-and-your-inbox-tracing-state-aligned-activity-targeting-journalists"
            },
            {
                "date": "2022-05",
                "activity": "Iranian Threat Actor Continues to Develop Mass Exploitation Tools\nhttps://www.deepinstinct.com/blog/iranian-threat-actor-continues-to-develop-mass-exploitation-tools"
            },
            {
                "date": "2022-06",
                "activity": "Opsec Mistakes Reveal COBALT MIRAGE Threat Actors\nhttps://www.secureworks.com/blog/opsec-mistakes-reveal-cobalt-mirage-threat-actors"
            },
            {
                "date": "2022 Mid",
                "activity": "TA453 Uses Multi-Persona Impersonation to Capitalize on FOMO\nhttps://www.proofpoint.com/us/blog/threat-insight/ta453-uses-multi-persona-impersonation-capitalize-fomo"
            },
            {
                "date": "2023",
                "activity": "Nation-state threat actor Mint Sandstorm refines tradecraft to attack high-value targets\nhttps://www.microsoft.com/en-us/security/blog/2023/04/18/nation-state-threat-actor-mint-sandstorm-refines-tradecraft-to-attack-high-value-targets/"
            },
            {
                "date": "2023-03",
                "activity": "Iranian Hackers Target Women Involved in Human Rights and Middle East Politics\nhttps://thehackernews.com/2023/03/iranian-hackers-target-women-involved.html"
            },
            {
                "date": "2023-03",
                "activity": "Educated Manticore \u2013 Iran Aligned Threat Actor Targeting Israel via Improved Arsenal of Tools\nhttps://research.checkpoint.com/2023/educated-manticore-iran-aligned-threat-actor-targeting-israel-via-improved-arsenal-of-tools/"
            },
            {
                "date": "2023-05",
                "activity": "Microsoft: Iranian hacking groups join Papercut attack spree\nhttps://www.bleepingcomputer.com/news/security/microsoft-iranian-hacking-groups-join-papercut-attack-spree/"
            },
            {
                "date": "2023-05",
                "activity": "Charming Kitten Updates POWERSTAR with an InterPlanetary Twist\nhttps://www.volexity.com/blog/2023/06/28/charming-kitten-updates-powerstar-with-an-interplanetary-twist/"
            },
            {
                "date": "2023-08",
                "activity": "Iranian cyber spies are targeting dissidents in Germany, warns intelligence service\nhttps://therecord.media/charming-kitten-iran-targets-dissidents-in-germany"
            }
        ],
        "counter-operations": [
            {
                "date": "2019-02",
                "activity": "Former U.S. Counterintelligence Agent Charged With Espionage on Behalf of Iran; Four Iranians Charged With a Cyber Campaign Targeting Her Former Colleagues\nhttps://www.justice.gov/opa/pr/former-us-counterintelligence-agent-charged-espionage-behalf-iran-four-iranians-charged-cyber"
            },
            {
                "date": "2019-03",
                "activity": "Microsoft slaps down 99 APT35/Charming Kitten domains\nhttps://blogs.microsoft.com/on-the-issues/2019/03/27/new-steps-to-protect-customers-from-hacking/"
            },
            {
                "date": "2021-10",
                "activity": "Countering threats from Iran\nhttps://blog.google/threat-analysis-group/countering-threats-iran/"
            },
            {
                "date": "2022 Early",
                "activity": "We took action against a group of hackers from Iran, known in the security industry as UNC788.\nhttps://about.fb.com/wp-content/uploads/2022/04/Meta-Quarterly-Adversarial-Threat-Report_Q1-2022.pdf"
            },
            {
                "date": "2022-09",
                "activity": "Treasury Sanctions IRGC-Affiliated Cyber Actors for Roles in Ransomware Activity\nhttps://home.treasury.gov/news/press-releases/jy0948>"
            }
        ],
        "information": [
            "https://www.clearskysec.com/wp-content/uploads/2017/12/Charming_Kitten_2017.pdf",
            "https://en.wikipedia.org/wiki/Charming_Kitten",
            "https://vblocalhost.com/uploads/VB2021-Haeghebaert.pdf",
            "https://therecord.media/the-not-so-charming-kitten-working-for-iran/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0058/",
            "https://attack.mitre.org/groups/G0059/"
        ],
        "uuid": "bb9b25ed-9ddc-4f65-bd01-ab8d6efc34ac",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "magic_hound_apt_35_cobalt_illusion_charming_kitten",
    "analysis": null,
    "articles": [
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
            "data_url": "https://en.wikipedia.org/wiki/Operation_Newscaster",
            "date": "2019-07-09",
            "organization": "Wikipedia",
            "author": "Various",
            "title": "Operation Newscaster",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://blogs.microsoft.com/on-the-issues/2019/03/27/new-steps-to-protect-customers-from-hacking/",
            "date": "2019-03-27",
            "organization": "Microsoft",
            "author": "Tom Burt",
            "title": "New steps to protect customers from hacking",
            "categories": [
                "APT35",
                "Charming Kitten",
                "Cleaver"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/former-us-counterintelligence-agent-charged-espionage-behalf-iran-four-iranians-charged-cyber",
            "date": "2019-02-13",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Former U.S. Counterintelligence Agent Charged With Espionage on Behalf of Iran; Four Iranians Charged With a Cyber Campaign Targeting Her Former Colleagues",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/newscaster",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Newscaster",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0058/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: Charming Kitten",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://blog.certfa.com/posts/the-return-of-the-charming-kitten/",
            "date": "2018-12-13",
            "organization": "Certfa",
            "author": "Certfa Lab",
            "title": "The Return of The Charming Kitten",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://cyware.com/news/iranian-apt-charming-kitten-impersonates-clearsky-the-security-firm-that-uncovered-its-campaigns-7fea0b4f",
            "date": "2018-07-03",
            "organization": "Cyware",
            "author": "Samantha Black",
            "title": "Iranian APT Charming Kitten impersonates ClearSky, the security firm that uncovered its campaigns",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2017/12/Charming_Kitten_2017.pdf",
            "date": "2017-12",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Charming Kitten",
            "categories": [
                "DownPaper",
                "Charming Kitten"
            ]
        },
        {
            "data_url": "http://www.arabnews.com/node/1195681/media",
            "date": "2017-11-19",
            "organization": "Arab News",
            "author": "ELISE KNUTSEN",
            "title": "Iranian agents blackmailed BBC reporter with \u2018naked photo\u2019 threats",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://www.scmagazine.com/home/security-news/cybercrime/hbo-breach-accomplished-with-hard-work-by-hacker-poor-security-practices-by-victim/",
            "date": "2017-08-08",
            "organization": "SC Magazine",
            "author": "Doug Olenick",
            "title": "HBO breach accomplished with hard work by hacker, poor security practices by victim",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://www.forbes.com/sites/thomasbrewster/2017/07/27/iran-hackers-oilrig-use-fake-personas-on-facebook-linkedin-for-cyberespionage/",
            "date": "2017-07-27",
            "organization": "Forbes",
            "author": "Thomas Brewster",
            "title": "With Fake News And Femmes Fatales, Iran's Spies Learn To Love Facebook",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://securelist.com/files/2017/03/Report_Shamoon_StoneDrill_final.pdf",
            "date": "2017-03-07",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky",
            "title": "From Shamoon to Stonedrill",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://iranthreats.github.io/resources/macdownloader-macos-malware/",
            "date": "2017-02-06",
            "organization": "Iran Threats",
            "author": "Claudio Guarnieri",
            "title": "iKittens: Iranian Actor Resurfaces with Malware for Mac (MacDownloader)",
            "categories": [
                "MacDownloader",
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://securelist.com/freezer-paper-around-free-meat/74503/",
            "date": "2016-04-27",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Freezer Paper around Free Meat",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://securelist.com/blog/software/74503/freezer-paper-around-free-meat/",
            "date": "2016-04-27",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Freezer Paper around Free Meat (Repackaging Open Source BeEF for Tracking and More)",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://www.verfassungsschutz.de/download/broschuere-2016-10-bfv-cyber-brief-2016-04.pdf",
            "date": "2016-04",
            "organization": "Bundesamt f\u00fcr Verfassungsschutz",
            "author": "Various",
            "title": "BfV Cyber-Brief: Hinweis auf aktuelle Angriffskampagne",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://www.washingtontimes.com/news/2014/may/29/iranian-hackers-sucker-punch-us-defense-heads-crea/",
            "date": "2014-05-29",
            "organization": "The Washington Times",
            "author": "Cheryl K. Chumley",
            "title": "Iranian hackers sucker punch U.S. defense officials with creative social-media scam",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2014/2014.05.28.NewsCaster_An_Iranian_Threat_Within_Social_Networks/file-2581720763-pdf.pdf",
            "date": "2014-05-28",
            "organization": "iSIGHT Partners (FireEye)",
            "author": "iSIGHT Partners",
            "title": "NEWSCASTER: An Iranian Threat Within Social Networks",
            "categories": [
                "Charming Kitten"
            ]
        },
        {
            "data_url": "https://cryptome.org/2012/11/parastoo-hacks-iaea.htm",
            "date": "2012-11-25",
            "organization": "Cryptome",
            "author": "Cryptome",
            "title": "Parastoo Hacks IAEA",
            "categories": [
                "Charming Kitten"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "magic hound",
            "procedure_code": "g0059",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0059",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1595.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1595/002",
                    "technique_name": "active scanning : vulnerability scanning",
                    "technique_description": "adversaries may scan victims for vulnerabilities that can be used during targeting. vulnerability scans typically check if the configuration of a target host/application (ex: software and version) potentially aligns with the target of a specific exploit the adversary may seek to use.",
                    "procedure_description": "magic hound has conducted widespread scanning to identify public-facing systems vulnerable to cve-2021-44228 in log4j and proxyshell vulnerabilities; cve-2021-26855, cve-2021-26857, cve-2021-26858, and cve-2021-27065 in on-premises ms exchange servers; and cve-2018-13379 in fortinet fortios ssl vpns.[7][8]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1592.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1592/002",
                    "technique_name": "gather victim host information : software",
                    "technique_description": "adversaries may gather information about the victim's host software that can be used during targeting. information about installed software may include a variety of details such as types and versions on specific hosts, as well as the presence of additional components that might be indicative of added defensive protections (ex: antivirus, siems, etc.).",
                    "procedure_description": "magic hound has captured the user-agent strings from visitors to their phishing sites.[3]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1589",
                    "technique_link": "https://attack.mitre.org/techniques/T1589",
                    "technique_name": "gather victim identity information",
                    "technique_description": "adversaries may gather information about the victim's identity that can be used during targeting. information about identities may include a variety of details, including personal data (ex: employee names, email addresses, etc.) as well as sensitive details such as credentials.",
                    "procedure_description": "magic hound has acquired mobile phone numbers of potential targets, possibly for mobile malware or additional phishing operations.[13]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1589.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1589/001",
                    "technique_name": "gather victim identity information : credentials",
                    "technique_description": "adversaries may gather credentials that can be used during targeting. account credentials gathered by adversaries may be those directly associated with the target victim organization or attempt to take advantage of the tendency for users to use the same passwords across personal and business accounts.",
                    "procedure_description": "magic hound gathered credentials from two victims that they then attempted to validate across 75 different websites. magic hound has also collected credentials from over 900 fortinet vpn servers in the us, europe, and israel.[14][15]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1589.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1589/002",
                    "technique_name": "gather victim identity information : email addresses",
                    "technique_description": "adversaries may gather email addresses that can be used during targeting. even if internal instances exist, organizations may have public-facing email infrastructure and addresses for employees.",
                    "procedure_description": "magic hound has identified high-value email accounts in academia, journalism, ngo's, foreign policy, and national security for targeting.[16][17]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1590.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1590/005",
                    "technique_name": "gather victim network information : ip addresses",
                    "technique_description": "adversaries may gather the victim's ip addresses that can be used during targeting. public ip addresses may be allocated to organizations by block, or a range of sequential addresses. information about assigned ip addresses may include a variety of details, such as which ip addresses are in use. ip addresses may also enable an adversary to derive other details about a victim, such as organizational size, physical location(s), internet service provider, and or where/how their publicly-facing infrastructure is hosted.",
                    "procedure_description": "magic hound has captured the ip addresses of visitors to their phishing sites.[6]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1591.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1591/001",
                    "technique_name": "gather victim org information : determine physical locations",
                    "technique_description": "adversaries may gather the victim's physical location(s) that can be used during targeting. information about physical locations of a target organization may include a variety of details, including where key resources and infrastructure are housed. physical locations may also indicate what legal jurisdiction and/or authorities the victim operates within.",
                    "procedure_description": "magic hound has collected location information from visitors to their phishing sites.[3]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1598.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1598/003",
                    "technique_name": "phishing for information : spearphishing link",
                    "technique_description": "adversaries may send spearphishing messages with a malicious link to elicit sensitive information that can be used during targeting. spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: establish accounts or compromise accounts) and/or sending multiple, seemingly urgent messages.",
                    "procedure_description": "magic hound has used sms and email messages with links designed to steal credentials or track victims.[13][14][15][16][17][18]"
                },
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
                    "procedure_description": "magic hound has registered fraudulent domains such as \"mail-newyorker.com\" and \"news12.com.recover-session-service.site\" to target specific victims with phishing attacks.[45]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/006",
                    "technique_name": "acquire infrastructure : web services",
                    "technique_description": "adversaries may register for web services\u00a0that can be used during targeting. a variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, adversaries can make it difficult to physically tie back operations to them.",
                    "procedure_description": "magic hound has acquired amazon s3 buckets to use in c2.[14]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1586.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1586/002",
                    "technique_name": "compromise accounts : email accounts",
                    "technique_description": "adversaries may compromise email accounts that can be used during targeting. adversaries can use compromised email accounts to further their operations, such as leveraging them to conduct phishing for information, phishing, or large-scale spam email campaigns. utilizing an existing persona with a compromised email account may engender a level of trust in a potential victim if they have a relationship with, or knowledge of, the compromised persona. compromised email accounts can also be used in the acquisition of infrastructure (ex: domains).",
                    "procedure_description": "magic hound has compromised personal email accounts through the use of legitimate credentials and gathered additional victim information.[12]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/001",
                    "technique_name": "compromise infrastructure : domains",
                    "technique_description": "adversaries may hijack domains and/or subdomains that can be used during targeting. domain registration hijacking is the act of changing the registration of a domain name without the permission of the original registrant. adversaries may gain access to an email account for the person listed as the owner of the domain. the adversary can then claim that they forgot their password in order to make changes to the domain registration. other possibilities include social engineering a domain registration help desk to gain access to an account or taking advantage of renewal process gaps.",
                    "procedure_description": "magic hound has used compromised domains to host links targeted to specific phishing victims.[9][10][11][12]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1585.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1585/001",
                    "technique_name": "establish accounts : social media accounts",
                    "technique_description": "adversaries may create and cultivate social media accounts that can be used during targeting. adversaries can create social media accounts that can be used to build a persona to further operations. persona development consists of the development of public information, presence, history and appropriate affiliations.",
                    "procedure_description": "magic hound has created fake linkedin and other social media accounts to contact targets and convince them--through messages and voice communications--to open malicious links.[12]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1585.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1585/002",
                    "technique_name": "establish accounts : email accounts",
                    "technique_description": "adversaries may create email accounts that can be used during targeting. adversaries can use accounts created with email providers to further their operations, such as leveraging them to conduct phishing for information or phishing. adversaries may also take steps to cultivate a persona around the email account, such as through use of social media accounts, to increase the chance of success of follow-on behaviors. created email accounts can also be used in the acquisition of infrastructure (ex: domains).",
                    "procedure_description": "magic hound has established email accounts using fake personas for spearphishing operations.[9][10]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "magic hound has obtained and used tools like havij, sqlmap, metasploit, mimikatz, and plink.[68][69][70][71][72]"
                },
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
                    "procedure_description": "magic hound has conducted watering-hole attacks through media and magazine websites.[37]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "magic hound has exploited the log4j utility (cve-2021-44228), on-premises ms exchange servers via \"proxyshell\" (cve-2021-34473, cve-2021-34523, cve-2021-31207), and fortios ssl vpns (cve-2018-13379).[40][41][42][43][44]"
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
                    "procedure_description": "magic hound has sent malicious url links through email to victims. in some cases the urls were shortened or linked to word documents with malicious macros that executed powershells scripts to download pupy.[69][70][71][72]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/003",
                    "technique_name": "phishing : spearphishing via service",
                    "technique_description": "adversaries may send spearphishing messages via third-party services in an attempt to gain access to victim systems. spearphishing via service is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of third party services rather than directly via enterprise email channels.",
                    "procedure_description": "magic hound used various social media channels (such as linkedin) as well as messaging services (such as whatsapp) to spearphish victims.[8][9][10]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/001",
                    "technique_name": "valid accounts : default accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a default account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. default accounts are those that are built-into an os, such as the guest or administrator accounts on windows systems. default accounts also include default factory/provider set accounts on other types of systems, software, or devices, including the root user account in aws and the default service account in kubernetes.",
                    "procedure_description": "magic hound enabled and used the default system managed account, defaultaccount, via \"powershell.exe\" /c net user defaultaccount /active:yes to connect to a targeted exchange server over rdp.[6]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "magic hound has used domain administrator accounts after dumping lsass process memory.[10]"
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
                    "procedure_description": "magic hound has used powershell for execution and privilege escalation.[141][142][143][144][145]"
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
                    "procedure_description": "magic hound has used the command-line interface for code execution.[202][203][204]"
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
                    "procedure_description": "magic hound malware has used vbs scripts for execution.[85]"
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
                    "procedure_description": "magic hound has used scheduled tasks to establish persistence and execution.[101][102]"
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
                    "procedure_description": "magic hound has attempted to lure victims into opening malicious links embedded in emails.[54][55]"
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
                    "procedure_description": "magic hound has attempted to lure victims into opening malicious email attachments.[138]"
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
                    "procedure_description": "magic hound has used a tool to run cmd /c wmic computersystem get domain for discovery.[72]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098",
                    "technique_link": "https://attack.mitre.org/techniques/T1098",
                    "technique_name": "account manipulation",
                    "technique_description": "adversaries may manipulate accounts to maintain access to victim systems. account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups. these actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials.",
                    "procedure_description": "magic hound has added a user named defaultaccount to the administrators and remote desktop users groups.[10]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1098/002",
                    "technique_name": "account manipulation : additional email delegate permissions",
                    "technique_description": "adversaries may grant additional permission levels to maintain persistent access to an adversary-controlled email account.",
                    "procedure_description": "magic hound granted compromised email accounts read access to the email boxes of additional targeted accounts. the group then was able to authenticate to the intended victim's owa (outlook web access) portal and read hundreds of email communications for information on middle east organizations.[2]"
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
                    "procedure_description": "magic hound malware has used registry run keys to establish persistence.[151][152][153]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "magic hound has created local accounts named help and defaultaccount on compromised machines.[17][18]"
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
                    "procedure_description": "magic hound has used scheduled tasks to establish persistence and execution.[101][102]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/003",
                    "technique_name": "server software component : web shell",
                    "technique_description": "adversaries may backdoor web servers with web shells to establish persistent access to systems. a web shell is a web script that is placed on an openly accessible web server to allow an adversary to use the web server as a gateway into a network. a web shell may provide a set of functions to execute or a command-line interface on the system that hosts the web server.",
                    "procedure_description": "magic hound has used multiple web shells to gain execution.[25][26]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/001",
                    "technique_name": "valid accounts : default accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a default account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. default accounts are those that are built-into an os, such as the guest or administrator accounts on windows systems. default accounts also include default factory/provider set accounts on other types of systems, software, or devices, including the root user account in aws and the default service account in kubernetes.",
                    "procedure_description": "magic hound enabled and used the default system managed account, defaultaccount, via \"powershell.exe\" /c net user defaultaccount /active:yes to connect to a targeted exchange server over rdp.[6]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "magic hound has used domain administrator accounts after dumping lsass process memory.[10]"
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
                    "procedure_description": "magic hound malware has used registry run keys to establish persistence.[151][152][153]"
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
                    "procedure_description": "magic hound has used scheduled tasks to establish persistence and execution.[101][102]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/001",
                    "technique_name": "valid accounts : default accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a default account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. default accounts are those that are built-into an os, such as the guest or administrator accounts on windows systems. default accounts also include default factory/provider set accounts on other types of systems, software, or devices, including the root user account in aws and the default service account in kubernetes.",
                    "procedure_description": "magic hound enabled and used the default system managed account, defaultaccount, via \"powershell.exe\" /c net user defaultaccount /active:yes to connect to a targeted exchange server over rdp.[6]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "magic hound has used domain administrator accounts after dumping lsass process memory.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/003",
                    "technique_name": "hide artifacts : hidden window",
                    "technique_description": "adversaries may use hidden windows to conceal malicious activity from the plain sight of users. in some cases, windows that would typically be displayed when an application carries out an operation can be hidden. this may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks.",
                    "procedure_description": "magic hound malware has a function to determine whether the c2 server wishes to execute the newly dropped file in a hidden window.[28]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562",
                    "technique_link": "https://attack.mitre.org/techniques/T1562",
                    "technique_name": "impair defenses",
                    "technique_description": "adversaries may maliciously modify components of a victim environment in order to hinder or disable defensive mechanisms. this not only involves impairing preventative defenses, such as firewalls and anti-virus, but also detection capabilities that defenders can use to audit activity and identify malicious behavior. this may also span both native defenses as well as supplemental capabilities installed by users and administrators.",
                    "procedure_description": "magic hound has disabled lsa protection on compromised hosts using \"reg\" add hklm\\system\\currentcontrolset\\control\\lsa /v runasppl /t reg_dword /d 0 /f.[2]"
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
                    "procedure_description": "magic hound has disabled antivirus services on targeted systems in order to upload malicious payloads.[55]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/002",
                    "technique_name": "impair defenses : disable windows event logging",
                    "technique_description": "adversaries may disable windows event logging to limit data that can be leveraged for detections and audits. windows event logs record user and system activity such as login attempts, process creation, and much more. this data is used by security tools and analysts to generate detections.",
                    "procedure_description": "magic hound has executed scripts to disable the event log service.[12]"
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
                    "procedure_description": "magic hound has added the following rule to a victim's windows firewall to allow rdp traffic - \"netsh\" advfirewall firewall add rule name=\"terminal server\" dir=in action=allow protocol=tcp localport=3389.[22][23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/003",
                    "technique_name": "indicator removal : clear command history",
                    "technique_description": "in addition to clearing system logs, an adversary may clear the command history of a compromised account to conceal the actions undertaken during an intrusion. various command interpreters keep track of the commands users type in their terminal so that users can retrace what they've done.",
                    "procedure_description": "magic hound has removed mailbox export requests from compromised exchange servers.[9]"
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
                    "procedure_description": "magic hound has deleted and overwrote files to cover tracks.[139][140][141]"
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
                    "procedure_description": "magic hound has named a malicious script cachetask.bat to mimic a legitimate task.[46]"
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
                    "procedure_description": "magic hound has used dllhost.exe to mask fast reverse proxy (frp) and microsoftoutlookupdater.exe for plink.[92][93][94]"
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
                    "procedure_description": "magic hound has modified registry settings for security tools.[89]"
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
                    "procedure_description": "magic hound malware has used base64-encoded files and has also encrypted embedded strings with aes.[202][203]"
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
                    "procedure_description": "magic hound has used base64-encoded commands.[53][54]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "magic hound has used rundll32.exe to execute minidump from comsvcs.dll when dumping lsass memory.[64]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/001",
                    "technique_name": "valid accounts : default accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a default account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. default accounts are those that are built-into an os, such as the guest or administrator accounts on windows systems. default accounts also include default factory/provider set accounts on other types of systems, software, or devices, including the root user account in aws and the default service account in kubernetes.",
                    "procedure_description": "magic hound enabled and used the default system managed account, defaultaccount, via \"powershell.exe\" /c net user defaultaccount /active:yes to connect to a targeted exchange server over rdp.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "magic hound has used domain administrator accounts after dumping lsass process memory.[10]"
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
                    "procedure_description": "magic hound malware is capable of keylogging.[108]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "magic hound has stolen domain credentials by dumping lsass process memory using task manager, comsvcs.dll, and from a microsoft active directory domain controller using mimikatz.[52][53][54][55]"
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
                    "procedure_description": "magic hound has used powershell to discover email accounts.[11]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1482",
                    "technique_link": "https://attack.mitre.org/techniques/T1482",
                    "technique_name": "domain trust discovery",
                    "technique_description": "adversaries may attempt to gather information on domain trust relationships that may be used to identify lateral movement opportunities in windows multi-domain/forest environments. domain trusts provide a mechanism for a domain to allow access to resources based on the authentication procedures of another domain. domain trusts allow the users of the trusted domain to access resources in the trusting domain. the information discovered may help the adversary conduct sid-history injection, pass the ticket, and kerberoasting. domain trusts can be enumerated using the dsenumeratedomaintrusts() win32 api call, .net methods, and ldap. the windows utility nltest is known to be used by adversaries to enumerate domain trusts.",
                    "procedure_description": "magic hound has used a web shell to execute nltest /trusted_domains to identify trust relationships.[19]"
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
                    "procedure_description": "magic hound malware can list a victim's logical drives and the type, as well the total/free space of the fixed devices. other malware can list a directory's contents.[189]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "magic hound has used kportscan 3.0 to perform smb, rdp, and ldap scanning.[39]"
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
                    "procedure_description": "magic hound malware can list running processes.[167]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "magic hound has used ping for discovery on targeted networks.[55]"
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
                    "procedure_description": "magic hound malware has used a powershell command to check the victim system architecture to determine if it is an x64 machine. other malware has obtained the os version, uuid, and computer/host name to send to the c2 server.[218][219][220]"
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
                    "procedure_description": "magic hound malware gathers the victim's local ip address, mac address, and external ip address.[138][139][140]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1016/001",
                    "technique_name": "system network configuration discovery : internet connection discovery",
                    "technique_description": "adversaries may check for internet connectivity on compromised systems. this may be performed during automated discovery and can be accomplished in numerous ways such as using ping, tracert, and get requests to websites.",
                    "procedure_description": "magic hound has conducted a network call out to a specific website as part of their initial discovery activity.[6]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "magic hound has used quser.exe to identify existing rdp connections.[50]"
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
                    "procedure_description": "magic hound malware has obtained the victim username and sent it to the c2 server.[108][109][110]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "magic hound has copied tools within a compromised network using rdp.[21]"
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
                    "procedure_description": "magic hound has used remote desktop services to copy tools on targeted systems.[36][37]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "magic hound has used gzip to archive dumped lsass process memory and rar to stage and compress local folders.[41][42][43]"
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
                    "procedure_description": "magic hound has used a web shell to exfiltrate a zip file containing a dump of lsass memory on a compromised machine.[113][114]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114",
                    "technique_link": "https://attack.mitre.org/techniques/T1114",
                    "technique_name": "email collection",
                    "technique_description": "adversaries may target user email to collect sensitive information. emails may contain sensitive data, including trade secrets or personal information, that can prove valuable to adversaries. adversaries can collect or forward email from mail servers or clients.",
                    "procedure_description": "magic hound has compromised email credentials in order to steal sensitive data.[1]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/001",
                    "technique_name": "email collection : local email collection",
                    "technique_description": "adversaries may target user email on local systems to collect sensitive information. files containing email data can be acquired from a user\u2019s local system, such as outlook storage or cache files.",
                    "procedure_description": "magic hound has collected .pst archives.[11]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/002",
                    "technique_name": "email collection : remote email collection",
                    "technique_description": "adversaries may target an exchange server, office 365, or google workspace to collect sensitive information. adversaries may leverage a user's credentials and interact directly with the exchange server to acquire information from within a network. adversaries may also access externally facing exchange services, office 365, or google workspace to access email using credentials or access tokens. tools such as mailsniper can be used to automate searches for specific keywords.",
                    "procedure_description": "magic hound has exported emails from compromised exchange servers including through use of the cmdlet new-mailboxexportrequest.[16][17]"
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
                    "procedure_description": "magic hound malware is capable of keylogging.[108]"
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
                    "procedure_description": "magic hound malware can take a screenshot and upload the file to its c2 server.[101]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071",
                    "technique_link": "https://attack.mitre.org/techniques/T1071",
                    "technique_name": "application layer protocol",
                    "technique_description": "adversaries may communicate using osi application layer protocols to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "magic hound malware has used irc for c2.[8][9]"
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
                    "procedure_description": "magic hound has used http for c2.[198][199][200]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573",
                    "technique_link": "https://attack.mitre.org/techniques/T1573",
                    "technique_name": "encrypted channel",
                    "technique_description": "adversaries may employ a known encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. despite the use of a secure algorithm, these implementations may be vulnerable to reverse engineering if secret keys are encoded and/or generated within malware samples/configuration files.",
                    "procedure_description": "magic hound has used an encrypted http proxy in c2 communications.[9]"
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
                    "procedure_description": "magic hound has downloaded additional code and files from servers onto victims.[276][277][278][279]"
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
                    "procedure_description": "magic hound malware has communicated with its c2 server over tcp ports 4443 and 10151 using http.[22][23]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "magic hound has used plink to tunnel rdp over ssh.[24]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "magic hound has used fast reverse proxy (frp) for rdp traffic.[28]"
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
                    "procedure_description": "magic hound malware can use a soap web service to communicate with its c2 server.[35]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567",
                    "technique_link": "https://attack.mitre.org/techniques/T1567",
                    "technique_name": "exfiltration over web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service to exfiltrate data rather than their primary command and control channel. popular web services acting as an exfiltration mechanism may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to compromise. firewall rules may also already exist to permit traffic to these services.",
                    "procedure_description": "magic hound has used the telegram api sendmessage to relay data on compromised devices.[5]"
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
                    "procedure_description": "magic hound has used bitlocker and diskcryptor to encrypt targeted workstations. [54][55]"
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