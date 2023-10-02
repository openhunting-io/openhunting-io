var threatdata = {
    "name": "OilRig, APT 34, Helix Kitten, Chrysene",
    "alias": "OilRig, APT 34, Helix Kitten, Twisted Kitten, Crambus, Chrysene, Cobalt Gypsy, TA452, IRN2, ATK 40, ITG13, EUROPIUM, Hazel Sandstorm",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "OilRig, APT 34, Helix Kitten, Chrysene",
        "names": [
            {
                "name": "OilRig",
                "name-giver": "Palo Alto"
            },
            {
                "name": "APT 34",
                "name-giver": "FireEye"
            },
            {
                "name": "Helix Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Twisted Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Crambus",
                "name-giver": "Symantec"
            },
            {
                "name": "Chrysene",
                "name-giver": "Dragos"
            },
            {
                "name": "Cobalt Gypsy",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TA452",
                "name-giver": "Proofpoint"
            },
            {
                "name": "IRN2",
                "name-giver": "Area 1"
            },
            {
                "name": "ATK 40",
                "name-giver": "Thales"
            },
            {
                "name": "ITG13",
                "name-giver": "IBM"
            },
            {
                "name": "EUROPIUM",
                "name-giver": "Microsoft"
            },
            {
                "name": "Hazel Sandstorm",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "OilRig is a threat group with suspected Iranian origins that has targeted Middle Eastern and international victims since at least 2014. The group has targeted a variety of industries, including financial, government, energy, chemical, and telecommunications, and has largely focused its operations within the Middle East. It appears the group carries out supply chain attacks, leveraging the trust relationship between organizations to attack their primary targets. FireEye assesses that the group works on behalf of the Iranian government based on infrastructure details that contain references to Iran, use of Iranian infrastructure, and targeting that aligns with nation-state interests. This group was previously tracked under two distinct groups, APT 34 and OilRig, but was combined due to additional reporting giving higher confidence about the overlap of the activity.\n\nOilRig has 1 subgroup:\n1. {{Subgroup: Greenbug, Volatile Kitten}}\n\nOilRig seems to be closely related to {{APT 33, Elfin, Magnallium}} since at least 2017 and perhaps {{DNSpionage}}. They also seem to overlap with {{Hexane}}.\n\nAlso see {{Orangeworm}}.",
        "observed-sectors": [
            "Aviation",
            "Chemical",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "High-Tech",
            "Hospitality",
            "Oil and gas",
            "Telecommunications"
        ],
        "observed-countries": [
            "Azerbaijan",
            "Bahrain",
            "China",
            "Egypt",
            "Iraq",
            "Israel",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Mauritius",
            "Oman",
            "Pakistan",
            "Qatar",
            "Saudi Arabia",
            "Turkey",
            "UAE",
            "UK",
            "USA"
        ],
        "tools": [
            "Alma Communicator",
            "BONDUPDATER",
            "certutil",
            "Clayslide",
            "DistTrack",
            "DNSExfitrator",
            "DNSpionage",
            "Dustman",
            "Fox Panel",
            "GoogleDrive RAT",
            "Helminth",
            "ISMAgent",
            "ISMDoor",
            "ISMInjector",
            "Jason",
            "Karkoff",
            "LaZagne",
            "LONGWATCH",
            "Mimikatz",
            "MrPerfectInstaller",
            "Nautilus",
            "Neuron",
            "OilRig",
            "OopsIE",
            "PICKPOCKET",
            "POWBAT",
            "POWRUNER",
            "PsList",
            "QUADAGENT",
            "RDAT",
            "RGDoor",
            "Saitama",
            "SideTwist",
            "SpyNote RAT",
            "StoneDrill",
            "ThreeDollars",
            "TONEDEAF",
            "TONEDEAF 2.0",
            "TwoFace",
            "VALUEVAULT",
            "Webmask",
            "WinRAR",
            "ZeroCleare",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2012-08",
                "activity": "Shamoon Attacks\nW32.Disttrack is a new threat that is being used in specific targeted attacks against at least one organization in the energy sector.  It is a destructive malware that corrupts files on a compromised computer and overwrites the MBR (Master Boot Record) in an effort to render a computer unusable.\nTarget: Saudi Aramco and Rasgas.\nhttps://www.symantec.com/connect/blogs/shamoon-attacks"
            },
            {
                "date": "2016-05",
                "activity": "Targeted Attacks against Banks in the Middle East\nIn the first week of May 2016, FireEye\u2019s DTI identified a wave of emails containing malicious attachments being sent to multiple banks in the Middle East region. The threat actors appear to be performing initial reconnaissance against would-be targets, and the attacks caught our attention since they were using unique scripts not commonly seen in crimeware campaigns.\nhttps://www.fireeye.com/blog/threat-research/2016/05/targeted_attacksaga.html\nhttps://unit42.paloaltonetworks.com/the-oilrig-campaign-attacks-on-saudi-arabian-organizations-deliver-helminth-backdoor/"
            },
            {
                "date": "2016-06",
                "activity": "We have identified two separate testing efforts carried out by the OilRig actors, one occurring in June and one in November of 2016. The sample set associated with each of these testing activities is rather small, but the changes made to each of the files give us a chance to understand what modifications the actor performs in an attempt to evade detection. This testing activity also suggests that the threat group responsible for the OilRig attack campaign have an organized, professional operations model that includes a testing component to the development of their tools.\nhttps://unit42.paloaltonetworks.com/unit42-oilrig-actors-provide-glimpse-development-testing-efforts/"
            },
            {
                "date": "2016-10",
                "activity": "In recent weeks we\u2019ve discovered that the group have been actively updating their Clayslide delivery documents, as well as the Helminth backdoor used against victims. Additionally, the scope of organizations targeted by this group has expanded to not only include organizations within Saudi Arabia, but also a company in Qatar and government organizations in Turkey, Israel and the United States.\nhttps://unit42.paloaltonetworks.com/unit42-oilrig-malware-campaign-updates-toolset-and-expands-targets/"
            },
            {
                "date": "2016-11",
                "activity": "Shamoon v2\nThe malware used in the recent attacks (W32.Disttrack.B) is largely unchanged from the variant used four years ago. In the 2012 attacks, infected computers had their master boot records wiped and replaced with an image of a burning US flag. The latest attacks instead used a photo of the body of Alan Kurdi, the three year-old Syrian refugee who drowned in the Mediterranean last year.\nhttps://www.symantec.com/connect/blogs/shamoon-back-dead-and-destructive-ever\nhttps://unit42.paloaltonetworks.com/unit42-shamoon-2-return-disttrack-wiper/\nhttps://unit42.paloaltonetworks.com/unit42-second-wave-shamoon-2-attacks-identified/"
            },
            {
                "date": "2017-01",
                "activity": "Delivers Digitally Signed Malware, Impersonates University of Oxford\nIn recent attacks they set up a fake VPN Web Portal and targeted at least five Israeli IT vendors, several financial institutes, and the Israeli Post Office.\nLater, the attackers set up two fake websites pretending to be a University of Oxford conference sign-up page and a job application website. In these websites they hosted malware that was digitally signed with a valid, likely stolen code signing certificate.\nhttps://www.clearskysec.com/oilrig/"
            },
            {
                "date": "2017-06",
                "activity": "In July 2017, we observed the OilRig group using a tool they developed called ISMAgent in a new set of targeted attacks. The OilRig group developed ISMAgent as a variant of the ISMDoor Trojan. In August 2017, we found this threat group has developed yet another Trojan that they call \u2018Agent Injector\u2019 with the specific purpose of installing the ISMAgent backdoor. We are tracking this tool as ISMInjector.\nhttps://unit42.paloaltonetworks.com/unit42-oilrig-group-steps-attacks-new-delivery-documents-new-injector-trojan/"
            },
            {
                "date": "2017-07",
                "activity": "The web server logs on the system we examined that was compromised with the TwoFace shell gave us a glimpse into the commands the actor executed through their malware. These commands also enabled us to create a profile of the actor, specifically their intentions and the tools and techniques used to carry out their operation.\nhttps://unit42.paloaltonetworks.com/unit42-twoface-webshell-persistent-access-point-lateral-movement/"
            },
            {
                "date": "2017-09",
                "activity": "While expanding our research into the TwoFace webshell from this past July, we were able to uncover several IP addresses that logged in and directly interfaced with the shell we discovered and wrote about. Investigating deeper into these potential adversary Ips revealed a much larger infrastructure used to execute the attacks.\nhttps://unit42.paloaltonetworks.com/unit42-striking-oil-closer-look-adversary-infrastructure/"
            },
            {
                "date": "2017-11",
                "activity": "New Targeted Attack in the Middle East\nIn this latest campaign, APT34 leveraged the recent Microsoft Office vulnerability CVE-2017-11882 to deploy POWRUNER and BONDUPDATER.\nhttps://www.fireeye.com/blog/threat-research/2017/12/targeted-attack-in-middle-east-by-apt34.html"
            },
            {
                "date": "2018-01",
                "activity": "On January 8, 2018, Unit 42 observed the OilRig threat group carry out an attack on an insurance agency based in the Middle East. Just over a week later, on January 16, 2018, we observed an attack on a Middle Eastern financial institution. In both attacks, the OilRig group attempted to deliver a new Trojan that we are tracking as OopsIE.\nThe January 8 attack used a variant of the ThreeDollars delivery document, which we identified as part of the OilRig toolset based on attacks that occurred in August 2017.\nhttps://unit42.paloaltonetworks.com/unit42-oopsie-oilrig-uses-threedollars-deliver-new-trojan/"
            },
            {
                "date": "2018-01",
                "activity": "While investigating files uploaded to a TwoFace webshell, Unit 42 discovered actors installing an Internet Information Services (IIS) backdoor that we call RGDoor. Our data suggests that actors have deployed the RGDoor backdoor on webservers belonging to eight Middle Eastern government organizations, as well as one financial and one educational institution.\nhttps://unit42.paloaltonetworks.com/unit42-oilrig-uses-rgdoor-iis-backdoor-targets-middle-east/"
            },
            {
                "date": "2018-05",
                "activity": "Technology Service Provider and Government Agency\nBetween May and June 2018, Unit 42 observed multiple attacks by the OilRig group appearing to originate from a government agency in the Middle East. Based on previously observed tactics, it is highly likely the OilRig group leveraged credential harvesting and compromised accounts to use the government agency as a launching platform for their true attacks.\nhttps://unit42.paloaltonetworks.com/unit42-oilrig-targets-technology-service-provider-government-agency-quadagent/"
            },
            {
                "date": "2018-12",
                "activity": "Shamoon v3\nAfter a two-year absence, the destructive malware Shamoon (W32.Disttrack.B) re-emerged on December 10 in a new wave of attacks against targets in the Middle East. These latest Shamoon attacks are doubly destructive, since they involve a new wiper (Trojan.Filerase) that deletes files from infected computers before the Shamoon malware wipes the master boot record.\nhttps://www.symantec.com/blogs/threat-intelligence/shamoon-destructive-threat-re-emerges-new-sting-its-tail\nhttps://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/shamoon-attackers-employ-new-tool-kit-to-wipe-infected-systems/"
            },
            {
                "date": "2019-06",
                "activity": "[W]e identified three new malware families and a reappearance of PICKPOCKET, malware exclusively observed in use by APT34. The new malware families, which we will examine later in this post, show APT34 relying on their PowerShell development capabilities, as well as trying their hand at Golang.\nhttps://www.fireeye.com/blog/threat-research/2019/07/hard-pass-declining-apt34-invite-to-join-their-professional-network.html"
            },
            {
                "date": "2019-12",
                "activity": "New Destructive Wiper ZeroCleare Targets Energy Sector in the Middle East\nhttps://securityintelligence.com/posts/new-destructive-wiper-zerocleare-targets-energy-sector-in-the-middle-east/"
            },
            {
                "date": "2020-01",
                "activity": "Our researchers Paul Litvak and Michael Kajilolti have discovered a new campaign conducted by APT34 employing an updated toolset. Based on uncovered phishing documents, we believe this Iranian actor is targeting Westat employees, or United States organizations hiring Westat services.\nhttps://intezer.com/blog-new-iranian-campaign-tailored-to-us-companies-uses-updated-toolset/"
            },
            {
                "date": "2020-03",
                "activity": "Karkoff 2020: a new APT34 espionage operation involves Lebanon Government\nhttps://blog.yoroi.company/research/karkoff-2020-a-new-apt34-espionage-operation-involves-lebanon-government/"
            },
            {
                "date": "2020-04",
                "activity": "While analyzing an attack against a Middle Eastern telecommunications organization, we discovered a variant of an OilRig-associated tool we call RDAT using a novel email-based command and control (C2) channel that relied on a technique known as steganography to hide commands and data within bitmap images attached to emails.\nhttps://unit42.paloaltonetworks.com/oilrig-novel-c2-channel-steganography/"
            },
            {
                "date": "2021-01",
                "activity": "Iran\u2019s APT34 Returns with an Updated Arsenal\nhttps://research.checkpoint.com/2021/irans-apt34-returns-with-an-updated-arsenal/"
            },
            {
                "date": "2022-04",
                "activity": "APT34 targets Jordan Government using new Saitama backdoor\nhttps://blog.malwarebytes.com/threat-intelligence/2022/05/apt34-targets-jordan-government-using-new-saitama-backdoor/"
            },
            {
                "date": "2022-05",
                "activity": "It began with a spearphishing email to a diplomat in Jordan.\nhttps://www.fortinet.com/blog/threat-research/please-confirm-you-received-our-apt"
            },
            {
                "date": "2022-12",
                "activity": "New APT34 Malware Targets The Middle East\nhttps://www.trendmicro.com/en_us/research/23/b/new-apt34-malware-targets-the-middle-east.html"
            }
        ],
        "counter-operations": [
            {
                "date": "2019-03",
                "activity": "In an incident reminiscent of the {{Shadow Brokers}} leak that exposed the NSA\u2019s hacking tools, someone has now published similar hacking tools belonging to one of Iran\u2019s elite cyber-espionage units, known as APT34, Oilrig, or HelixKitten.\nhttps://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/\nUpdate: this leak may have been the work of the {{CIA}}."
            },
            {
                "date": "2019-06",
                "activity": "A new hacking tool believed to have been in the arsenal of Iranian state hackers has been published today online, in a Telegram channel.\nThis new tool is named Jason and was published online earlier today in the same Telegram channel where the leaker \u2013 going by the name of Lab Dookhtegan \u2013 dumped the six other previous hacking tools.\nhttps://www.zdnet.com/article/new-iranian-hacking-tool-leaked-on-telegram/\nUpdate: this leak may have been the work of the {{CIA}}."
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-striking-oil-closer-look-adversary-infrastructure/",
            "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-november-helix-kitten/",
            "https://marcoramilli.com/2019/08/07/oilrig-the-techniques-evolution-over-time/",
            "https://en.wikipedia.org/wiki/Helix_Kitten"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0049/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=oilrig"
        ],
        "uuid": "eeb31f97-edcf-4836-b621-a1865305b91e",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "oilrig_apt_34_helix_kitten_chrysene",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/evasive-serpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Evasive Serpens",
            "categories": [
                "TwoFace",
                "ISMAgent",
                "ISMDoor",
                "OopsIE",
                "RDAT",
                "OilRig"
            ]
        },
        {
            "data_url": "https://threatpost.com/oilrig-apt-unique-backdoor/157646/",
            "date": "2020-07-22",
            "organization": "Threatpost",
            "author": "Tara Seals",
            "title": "OilRig APT Drills into Malware Innovation with Unique Backdoor",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/oilrig-novel-c2-channel-steganography/",
            "date": "2020-07-22",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig Targets Middle Eastern Telecommunications Organization and Adds Novel C2 Channel with Steganography to Its Inventory",
            "categories": [
                "RDAT",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-gypsy",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT GYPSY",
            "categories": [
                "TwoFace",
                "MacDownloader",
                "BONDUPDATER",
                "pupy",
                "Helminth",
                "jason",
                "RGDoor",
                "TinyZbot",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/apt-34",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "APT 34",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0049/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: OilRig",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/oilrig",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "OilRig",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/shamoon-attackers-employ-new-tool-kit-to-wipe-infected-systems/",
            "date": "2018-12-19",
            "organization": "",
            "author": "Thomas Roccia",
            "title": "Shamoon Attackers Employ New Tool Kit to Wipe Infected Systems",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://twitter.com/MJDutch/status/1074820959784321026?s=19",
            "date": "2018-12-17",
            "organization": "Twitter (@MJDutch)",
            "author": "Justin",
            "title": "Tweet on APT39",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/shamoon-destructive-threat-re-emerges-new-sting-its-tail",
            "date": "2018-12-14",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Shamoon: Destructive Threat Re-Emerges with New Sting in its Tail",
            "categories": [
                "DistTrack",
                "Filerase",
                "StoneDrill",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/shamoon-destructive-threat-re-emerges-new-sting-its-tail",
            "date": "2018-12-14",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Shamoon: Destructive Threat Re-Emerges with New Sting in its Tail",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-november-helix-kitten/",
            "date": "2018-11-27",
            "organization": "CrowdStrike",
            "author": "Adam Meyers",
            "title": "Meet CrowdStrike\u2019s Adversary of the Month for November: HELIX KITTEN",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-analyzing-oilrigs-ops-tempo-testing-weaponization-delivery/",
            "date": "2018-11-16",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Analyzing OilRig\u2019s Ops Tempo from Testing to Weaponization to Delivery",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-updated-bondupdater-target-middle-eastern-government/",
            "date": "2018-09-12",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kyle Wilhoit",
            "title": "OilRig Uses Updated BONDUPDATER to Target Middle Eastern Government",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/pan-unit42/playbook_viewer/master/playbook_json/oilrig.json",
            "date": "2018-08-03",
            "organization": "Github (Unit42)",
            "author": "Unit42",
            "title": "OilRig Playbook",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-targets-technology-service-provider-government-agency-quadagent/",
            "date": "2018-07-25",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "OilRig Targets Technology Service Provider and Government Agency with QUADAGENT",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2018/03/investigating-iranian-threat-group.html",
            "date": "2018-03-25",
            "organization": "Vitali Kremez Blog",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Internals of Iranian-Based Threat Group \"Chafer\" Malware: Autoit and PowerShell Persistence",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oopsie-oilrig-uses-threedollars-deliver-new-trojan/",
            "date": "2018-02-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "OopsIE! OilRig Uses ThreeDollars to Deliver New Trojan",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-rgdoor-iis-backdoor-targets-middle-east/",
            "date": "2018-01-25",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig uses RGDoor IIS Backdoor on Targets in the Middle East",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/content/dam/collateral/en/mtrends-2018.pdf",
            "date": "2018",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "M-TRENDS2018",
            "categories": [
                "APT35",
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-introducing-the-adversary-playbook-first-up-oilrig/",
            "date": "2017-12-15",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ryan Olson",
            "title": "Introducing the Adversary Playbook: First up, OilRig",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/12/targeted-attack-in-middle-east-by-apt34.html",
            "date": "2017-12-07",
            "organization": "FireEye",
            "author": "Vincent Cannon",
            "title": "New Targeted Attack in the Middle East by APT34, a Suspected Iranian Threat Group, Using CVE-2017-11882 Exploit",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-group-steps-attacks-new-delivery-documents-new-injector-trojan/",
            "date": "2017-10-09",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig Group Steps Up Attacks with New Delivery Documents and New Injector Trojan",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-striking-oil-closer-look-adversary-infrastructure/",
            "date": "2017-09-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Striking Oil: A Closer Look at Adversary Infrastructure",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-twoface-webshell-persistent-access-point-lateral-movement/",
            "date": "2017-07-31",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "TwoFace Webshell: Persistent Access Point for Lateral Movement",
            "categories": [
                "TwoFace",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/apt-34-iranian-hackers-critical-infrastructure-companies/",
            "date": "2017-07-12",
            "organization": "Wired",
            "author": "Lily Hay Newman",
            "title": "Iranian Hackers Have Been Infiltrating Critical Infrastructure Companies",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/iranian-fileless-cyberattack-on-israel-word-vulnerability",
            "date": "2017-04-27",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "Iranian Fileless Attack Infiltrates Israeli Organizations",
            "categories": [
                "Helminth",
                "OilRig"
            ]
        },
        {
            "data_url": "http://blog.morphisec.com/iranian-fileless-cyberattack-on-israel-word-vulnerability",
            "date": "2017-04-27",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "Iranian Fileless Attack Infiltrates Israeli Organizations",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-actors-provide-glimpse-development-testing-efforts/",
            "date": "2017-04-27",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig Actors Provide a Glimpse into Development and Testing Efforts",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.gov.il/BlobFolder/reports/attack_il/he/CERT-IL-ALERT-W-120.pdf",
            "date": "2017-04-24",
            "organization": "CERT-IL",
            "author": "CERT-IL",
            "title": "Wave attacks against government agencies, academia and business entities in Israel",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.forbes.com/sites/thomasbrewster/2017/02/15/oilrig-iran-hackers-cyberespionage-us-turkey-saudi-arabia/#56749aa2468a",
            "date": "2017-02-15",
            "organization": "Forbes",
            "author": "Thomas Brewster",
            "title": "Inside OilRig -- Tracking Iran's Busiest Hacker Crew On Its Global Rampage",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/oilrig/",
            "date": "2017-01-05",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Iranian Threat Agent OilRig Delivers Digitally Signed Malware, Impersonates University of Oxford",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "http://www.clearskysec.com/oilrig/",
            "date": "2017-01-05",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Iranian Threat Agent OilRig Delivers Digitally Signed Malware, Impersonates University of Oxford",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/shamoon-back-dead-and-destructive-ever",
            "date": "2016-11-30",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Shamoon: Back from the dead and destructive as ever",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=ad6f8259-2bb4-4f7f-b8e1-710b35a4cbed&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-11-30",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Shamoon: Back from the dead and destructive as ever",
            "categories": [
                "DistTrack",
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-malware-campaign-updates-toolset-and-expands-targets/",
            "date": "2016-10-04",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "OilRig Malware Campaign Updates Toolset and Expands Targets",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/the-oilrig-campaign-attacks-on-saudi-arabian-organizations-deliver-helminth-backdoor/",
            "date": "2016-05-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "The OilRig Campaign: Attacks on Saudi Arabian Organizations Deliver Helminth Backdoor",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2016/05/targeted_attacksaga.html",
            "date": "2016-05-22",
            "organization": "FireEye",
            "author": "Sudeep Singh",
            "title": "Targeted Attacks against Banks in the Middle East",
            "categories": [
                "Helminth",
                "OilRig"
            ]
        },
        {
            "data_url": "https://pan-unit42.github.io/playbook_viewer/",
            "date": "2016",
            "organization": "Palo Alto Networks Unit 42",
            "author": "paloalto Networks: Unit42",
            "title": "Unit 42 Playbook Viewer",
            "categories": [
                "OilRig"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20120818235442/https://www.symantec.com/connect/blogs/shamoon-attacks",
            "date": "2012-08-16",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "The Shamoon Attacks",
            "categories": [
                "DistTrack",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/shamoon-attacks",
            "date": "2012-08-16",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "The Shamoon Attacks",
            "categories": [
                "OilRig"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "oilrig",
            "procedure_code": "g0049",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0049",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "oilrig uses remote services such as vpn, citrix, or owa to persist in an environment.[31]"
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
                    "procedure_description": "oilrig has sent spearphising emails with malicious attachments to potential victims using compromised and/or spoofed email accounts.[167][168][169]"
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
                    "procedure_description": "oilrig has sent spearphising emails with malicious links to potential victims.[79]"
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
                    "procedure_description": "oilrig has used linkedin to send spearphishing links.[11]"
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
                    "procedure_description": "oilrig has used compromised credentials to access other systems on a victim network.[49][50][14]"
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
                    "procedure_description": "oilrig has used various types of scripting for execution.[33][34][35][36][37]"
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
                    "procedure_description": "oilrig has used powershell scripts for execution, including use of a macro to run a powershell command to decode file contents.[38][169][170]"
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
                    "procedure_description": "oilrig has used macros to deliver malware such as quadagent and oopsie.[241][242][243][244][245] oilrig has used batch scripts.[241][242][243][244][245]"
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
                    "procedure_description": "oilrig has used vbsscipt macros for execution on compromised hosts.[105]"
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
                    "procedure_description": "oilrig has created scheduled tasks that run a vbscript to execute a payload on victim machines.[119][120][121][122]"
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
                    "procedure_description": "oilrig has delivered malicious links to achieve execution on the target system.[68][69][70]"
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
                    "procedure_description": "oilrig has delivered macro-enabled documents that required targets to click the \"enable content\" button to execute the payload on the system.[171][172][173][174]"
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
                    "procedure_description": "oilrig has used wmi for execution.[94]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "oilrig uses remote services such as vpn, citrix, or owa to persist in an environment.[31]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/004",
                    "technique_name": "office application startup : outlook home page",
                    "technique_description": "adversaries may abuse microsoft outlook's home page feature to obtain persistence on a compromised system. outlook home page is a legacy feature used to customize the presentation of outlook folders. this feature allows for an internal or external url to be loaded and presented whenever a folder is opened. a malicious html page can be crafted that will execute code when loaded by outlook home page.",
                    "procedure_description": "oilrig has abused the outlook home page feature for persistence. oilrig has also used cve-2017-11774 to roll back the initial patch designed to protect against home page abuse.[2]"
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
                    "procedure_description": "oilrig has created scheduled tasks that run a vbscript to execute a payload on victim machines.[119][120][121][122]"
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
                    "procedure_description": "oilrig has used web shells, often to maintain access to a victim network.[28][29][30]"
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
                    "procedure_description": "oilrig has used compromised credentials to access other systems on a victim network.[49][50][14]"
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
                    "procedure_description": "oilrig has created scheduled tasks that run a vbscript to execute a payload on victim machines.[119][120][121][122]"
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
                    "procedure_description": "oilrig has used compromised credentials to access other systems on a victim network.[49][50][14]"
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
                    "procedure_description": "a oilrig macro has run a powershell command to decode file contents. oilrig has also used certutil to decode base64-encoded files on victims.[159][120][160][161]"
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
                    "procedure_description": "oilrig has deleted files associated with their payload after execution.[162][163]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "oilrig has used .doc file extensions to mask malicious executables.[24]"
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
                    "procedure_description": "oilrig has encrypted and encoded data in its malware, including by using base64.[232][233][234][235][236]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/005",
                    "technique_name": "obfuscated files or information : indicator removal from tools",
                    "technique_description": "adversaries may remove indicators from tools if they believe their malicious tool was detected, quarantined, or otherwise curtailed. they can modify the tool by removing the indicator and using the updated version that is no longer detected by the target's defensive systems or subsequent targets that may use similar systems.",
                    "procedure_description": "oilrig has tested malware samples to determine av detection and subsequently modified the samples to ensure av evasion.[9][10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/001",
                    "technique_name": "system binary proxy execution : compiled html file",
                    "technique_description": "adversaries may abuse compiled html files (.chm) to conceal malicious code. chm files are commonly distributed as part of the microsoft html help system. chm files are compressed compilations of various content such as html documents, images, and scripting/web related programming languages such vba, jscript, java, and activex.  chm content is displayed using underlying components of the internet explorer browser  loaded by the html help executable program (hh.exe).",
                    "procedure_description": "oilrig has used a chm payload to load and execute another malicious file once delivered to a victim.[10]"
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
                    "procedure_description": "oilrig has used compromised credentials to access other systems on a victim network.[49][50][14]"
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
                    "procedure_description": "oilrig has used macros to verify if a mouse is connected to a compromised machine.[34]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110",
                    "technique_link": "https://attack.mitre.org/techniques/T1110",
                    "technique_name": "brute force",
                    "technique_description": "adversaries may use brute force techniques to gain access to accounts when passwords are unknown or when password hashes are obtained. without knowledge of the password for an account or set of accounts, an adversary may systematically guess the password using a repetitive or iterative mechanism. brute forcing passwords can take place via interaction with a service that will check the validity of those credentials or offline against previously acquired credential data, such as password hashes.",
                    "procedure_description": "oilrig has used brute force techniques to obtain credentials.[17]"
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
                    "procedure_description": "oilrig has used credential dumping tools such as lazagne to steal credentials to accounts logged into the compromised system and to outlook web access.[26][27][28][29]"
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
                    "procedure_description": "oilrig has used credential dumping tools such as lazagne to steal credentials to accounts logged into the compromised system and to outlook web access.[62][63][64][65] oilrig has also used tool named pickpocket to dump passwords from web browsers.[65]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/004",
                    "technique_name": "credentials from password stores : windows credential manager",
                    "technique_description": "adversaries may acquire credentials from the windows credential manager. the credential manager stores credentials for signing into websites, applications, and/or devices that request authentication through ntlm or kerberos in credential lockers (previously known as windows vaults).",
                    "procedure_description": "oilrig has used credential dumping tool named valuevault to steal credentials from the windows credential manager.[10]"
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
                    "procedure_description": "oilrig has used keylogging tools called keypunch and longwatch.[129][130]"
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
                    "procedure_description": "oilrig has used credential dumping tools such as mimikatz to steal credentials to accounts logged into the compromised system and to outlook web access.[65][66][52][67]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "oilrig has used credential dumping tools such as lazagne to steal credentials to accounts logged into the compromised system and to outlook web access.[27][28][29][30]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/005",
                    "technique_name": "os credential dumping : cached domain credentials",
                    "technique_description": "adversaries may attempt to access cached domain credentials used to allow authentication to occur in the event a domain controller is unavailable.",
                    "procedure_description": "oilrig has used credential dumping tools such as lazagne to steal credentials to accounts logged into the compromised system and to outlook web access.[11][12][13][14]"
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
                    "procedure_description": "oilrig has used credential dumping tools such as lazagne to steal credentials to accounts logged into the compromised system and to outlook web access.[23][24][25][26]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "oilrig has run net user, net user /domain, net group \"domain admins\" /domain, and net group \"exchange trusted subsystem\" /domain to get account listings on a victim.[28]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "oilrig has run net user, net user /domain, net group \"domain admins\" /domain, and net group \"exchange trusted subsystem\" /domain to get account listings on a victim.[33]"
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
                    "procedure_description": "oilrig has used the publicly available tool softperfect network scanner as well as a custom tool called goldirony to conduct network scanning.[44]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1201",
                    "technique_link": "https://attack.mitre.org/techniques/T1201",
                    "technique_name": "password policy discovery",
                    "technique_description": "adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. password policies are a way to enforce complex passwords that are difficult to guess or crack through brute force. this information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).",
                    "procedure_description": "oilrig has used net.exe in a script with net accounts /domain to find the password policy of a domain.[10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "oilrig has used tools to identify if a mouse is connected to a targeted system.[31]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/001",
                    "technique_name": "permission groups discovery : local groups",
                    "technique_description": "adversaries may attempt to find local system groups and permission settings. the knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.",
                    "procedure_description": "oilrig has used net localgroup administrators to find local administrators on compromised systems.[18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "oilrig has used net group /domain, net group \"domain admins\" /domain, and net group \"exchange trusted subsystem\" /domain to find domain group permission settings.[22]"
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
                    "procedure_description": "oilrig has run tasklist on a victim's machine.[185]"
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
                    "procedure_description": "oilrig has used reg query \"hkey_current_user\\software\\microsoft\\terminal server client\\default\" on a victim to query the registry.[63]"
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
                    "procedure_description": "oilrig has run hostname and systeminfo on a victim.[257][258][259][260]"
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
                    "procedure_description": "oilrig has run ipconfig /all on a victim.[162][163]"
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
                    "procedure_description": "oilrig has used netstat -an on a victim to get a listing of network connections.[59]"
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
                    "procedure_description": "oilrig has run whoami on a victim.[133][134][135]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "oilrig has used sc query on a victim to gather information about services.[38]"
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
                    "procedure_description": "oilrig has used macros to verify if a mouse is connected to a compromised machine.[34]"
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
                    "procedure_description": "oilrig has used remote desktop protocol for lateral movement. the group has also used tunneling tools to tunnel rdp into the environment.[41][42][9]"
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
                    "procedure_description": "oilrig has used putty to access compromised systems.[13]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "oilrig has used automated collection.[30]"
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
                    "procedure_description": "oilrig has used keylogging tools called keypunch and longwatch.[129][130]"
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
                    "procedure_description": "oilrig has a tool called candyking to capture a screenshot of user's desktop.[119]"
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
                    "procedure_description": "oilrig has used http for c2.[230][231][232]"
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
                    "procedure_description": "oilrig has used dns for c2 including the publicly available requestbin.net tunneling service.[46][47][48][49]"
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
                    "procedure_description": "oilrig used the plink utility and other tools to create tunnels to c2 servers.[37]"
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
                    "procedure_description": "oilrig malware ismagent falls back to its dns tunneling mechanism if it is unable to reach the c2 server over http.[36]"
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
                    "procedure_description": "oilrig can download remote files onto victims.[324]"
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
                    "procedure_description": "oilrig has used the plink utility and other tools to create tunnels to c2 servers.[30][31][32]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "oilrig has exfiltrated data over ftp separately from its primary c2 channel over dns.[26]"
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