var threatdata = {
    "name": "Sofacy, APT 28, Fancy Bear, Sednit",
    "alias": "Sofacy, APT 28, Fancy Bear, Sednit, Group 74, TG-4127, Pawn Storm, Tsar Team, Strontium, Swallowtail, SIG40, Snakemackerel, Iron Twilight, ATK 5, T-APT-12, ITG05, TAG-0700, UAC-0028, FROZENLAKE, Grey-Cloud, Grizzly Steppe, Forest Blizzard, BlueDelta",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Sofacy, APT 28, Fancy Bear, Sednit",
        "names": [
            {
                "name": "Sofacy",
                "name-giver": "Kaspersky"
            },
            {
                "name": "APT 28",
                "name-giver": "Mandiant"
            },
            {
                "name": "Fancy Bear",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Sednit",
                "name-giver": "ESET"
            },
            {
                "name": "Group 74",
                "name-giver": "Talos"
            },
            {
                "name": "TG-4127",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Pawn Storm",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Tsar Team",
                "name-giver": "iSight"
            },
            {
                "name": "Strontium",
                "name-giver": "Microsoft"
            },
            {
                "name": "Swallowtail",
                "name-giver": "Symantec"
            },
            {
                "name": "SIG40",
                "name-giver": "NSA"
            },
            {
                "name": "Snakemackerel",
                "name-giver": "iDefense"
            },
            {
                "name": "Iron Twilight",
                "name-giver": "SecureWorks"
            },
            {
                "name": "ATK 5",
                "name-giver": "Thales"
            },
            {
                "name": "T-APT-12",
                "name-giver": "Tencent"
            },
            {
                "name": "ITG05",
                "name-giver": "IBM"
            },
            {
                "name": "TAG-0700",
                "name-giver": "Recorded Future"
            },
            {
                "name": "UAC-0028",
                "name-giver": "CERT-UA"
            },
            {
                "name": "FROZENLAKE",
                "name-giver": "Google"
            },
            {
                "name": "Grey-Cloud",
                "name-giver": "?"
            },
            {
                "name": "Grizzly Steppe",
                "name-giver": "US Government"
            },
            {
                "name": "Forest Blizzard",
                "name-giver": "Microsoft"
            },
            {
                "name": "BlueDelta",
                "name-giver": "Recorded Future"
            }
        ],
        "country": [
            "Russia"
        ],
        "sponsor": "State-sponsored, two GRU units known as Unit 26165 and Unit 74455",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2004",
        "description": "APT 28 is a threat group that has been attributed to Russia\u2019s Main Intelligence Directorate of the Russian General Staff by a July 2018 U.S. Department of Justice indictment. This group reportedly compromised the Hillary Clinton campaign, the Democratic National Committee, and the Democratic Congressional Campaign Committee in 2016 in an attempt to interfere with the U.S. presidential election. APT 28 has been active since at least January 2007.\n\n(FireEye) APT28 likely seeks to collect intelligence about Georgia\u2019s security and political dynamics by targeting officials working for the Ministry of Internal Affairs and the Ministry of Defense.\n\nAPT28 has demonstrated interest in Eastern European governments and security organizations. These victims would provide the Russian government with an ability to predict policymaker intentions and gauge its ability to influence public opinion.\n\nAPT28 appeared to target individuals affiliated with European security organizations and global multilateral institutions. The Russian government has long cited European security organizations like NATO and the OSCE as existential threats, particularly during periods of increased tension in Europe.\n\nSofacy may be related to {{Hades}}, but it could be a false flag as well.",
        "observed-sectors": [
            "Automotive",
            "Aviation",
            "Chemical",
            "Construction",
            "Defense",
            "Education",
            "Embassies",
            "Energy",
            "Engineering",
            "Financial",
            "Government",
            "Healthcare",
            "Industrial",
            "IT",
            "Media",
            "NGOs",
            "Oil and gas",
            "Think Tanks",
            "Intelligence organizations"
        ],
        "observed-countries": [
            "Afghanistan",
            "Armenia",
            "Australia",
            "Azerbaijan",
            "Belarus",
            "Belgium",
            "Brazil",
            "Bulgaria",
            "Canada",
            "Chile",
            "China",
            "Croatia",
            "Cyprus",
            "France",
            "Georgia",
            "Germany",
            "Hungary",
            "India",
            "Iran",
            "Iraq",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Latvia",
            "Malaysia",
            "Mexico",
            "Mongolia",
            "Montenegro",
            "Netherlands",
            "Norway",
            "Pakistan",
            "Poland",
            "Romania",
            "Slovakia",
            "South Africa",
            "South Korea",
            "Spain",
            "Sweden",
            "Switzerland",
            "Tajikistan",
            "Thailand",
            "Turkey",
            "Uganda",
            "UAE",
            "UK",
            "Ukraine",
            "USA",
            "Uzbekistan",
            "NATO",
            "APEC and OSCE"
        ],
        "tools": [
            "Cannon",
            "certutil",
            "Computrace",
            "CORESHELL",
            "DealersChoice",
            "Downdelph",
            "Drovorub",
            "Foozer",
            "Graphite",
            "HIDEDRV",
            "JHUHUGIT",
            "Koadic",
            "Komplex",
            "LoJax",
            "Mimikatz",
            "Nimcy",
            "OLDBAIT",
            "PocoDown",
            "ProcDump",
            "PythocyDbg",
            "Responder",
            "Sedkit",
            "Sedreco",
            "SkinnyBoy",
            "USBStealer",
            "VPNFilter",
            "Winexe",
            "WinIDS",
            "X-Agent",
            "X-Tunnel",
            "Zebrocy",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2011/2012",
                "activity": "Back in 2011-2012, the group used a relatively tiny implant (known as \u201cSofacy\u201d or SOURFACE) as its first stage malware. The implant shared certain similarities with the old Miniduke implants. This led us to believe the two groups were connected, at least to begin with, although it appears they parted ways in 2014, with the original Miniduke group switching to the CosmicDuke implant."
            },
            {
                "date": "2013",
                "activity": "At some point during 2013, the Sofacy group expanded its arsenal and added more backdoors and tools, including CORESHELL, SPLM (aka Xagent, aka CHOPSTICK), JHUHUGIT (which is built with code from the Carberp sources), AZZY (aka ADVSTORESHELL, NETUI, EVILTOSS, and spans across four to five generations) and a few others. We\u2019ve seen quite a few versions of these implants and they were relatively widespread for a time."
            },
            {
                "date": "2014-10",
                "activity": "Operation \u201cPawn Storm\u201d\nTarget: Several foreign affairs ministries from around the globe.\nMethod:  Spear-phishing e-mails with links leading to an Adobe Flash exploit.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/new-adobe-flash-zero-day-used-in-pawn-storm-campaign/"
            },
            {
                "date": "2014-12",
                "activity": "Six-month-long cyberattack on the German parliament\nhttp://www.lse.co.uk/AllNews.asp?code=kwdwehme&headline=Russian_Hackers_Suspected_In_Cyberattack_On_German_Parliament"
            },
            {
                "date": "2015-02",
                "activity": "U.S. military wives\u2019 death threats\nFive military wives received death threats from a hacker group calling itself \u201c{{Cyber Caliphate Army (CCA), United Cyber Caliphate (UCC)}}\u201d, claiming to be an Islamic State affiliate, on February 10, 2015. This was later discovered to have been a false flag attack by Fancy Bear, when the victims\u2019 email addresses were found to have been in the Fancy Bear phishing target list.\nhttps://www.apnews.com/4d174e45ef5843a0ba82e804f080988f"
            },
            {
                "date": "2015-04",
                "activity": "Compromise of TV5Monde in France\n\u201cA group calling itself the {{Cyber Caliphate Army (CCA), United Cyber Caliphate (UCC)}}, linked to so-called Islamic State, first claimed responsibility. But an investigation now suggests the attack was in fact carried out by a group of Russian hackers.\u201d\nhttps://www.bbc.com/news/technology-37590375"
            },
            {
                "date": "2015-04",
                "activity": "Operation \u201cRussian Doll\u201d\nMethod: Adobe Flash 0-day\nhttps://www.fireeye.com/blog/threat-research/2015/04/probable_apt28_useo.html"
            },
            {
                "date": "2015-04",
                "activity": "Compromise of the German Parliament (Bundestag) network\nhttps://netzpolitik.org/2015/digital-attack-on-german-parliament-investigative-report-on-the-hack-of-the-left-party-infrastructure-in-bundestag/"
            },
            {
                "date": "2015-07",
                "activity": "Pawn Storm Update: Trend Micro Discovers New Java Zero-Day Exploit\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/pawn-storm-update-trend-micro-discovers-new-java-zero-day-exploit/"
            },
            {
                "date": "2015-08",
                "activity": "EFF spoof, White House and NATO attack\nMethod: zero-day exploit of Java, spoofing the Electronic Frontier Foundation and launching attacks on the White House and NATO. The hackers used a spear-phishing attack, directing emails to the false url electronicfrontierfoundation.org.\nhttps://www.eff.org/deeplinks/2015/08/new-spear-phishing-campaign-pretends-be-eff"
            },
            {
                "date": "2015-09",
                "activity": "Bootstrapped Firefox Add-on\nhttps://labsblog.f-secure.com/2015/09/08/sofacy-recycles-carberp-and-metasploit-code/"
            },
            {
                "date": "2015-10",
                "activity": "Attack on Bellingcat\nEliot Higgins and other journalists associated with Bellingcat, a group researching the shoot down of Malaysia Airlines Flight 17 over Ukraine, were targeted by numerous spear-phishing emails. The messages were fake Gmail security notices with Bit.ly and TinyCC shortened URLs.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/pawn-storm-targets-mh17-investigation-team/"
            },
            {
                "date": "2015-10",
                "activity": "Attack on Dutch Safety Board\nThe group targeted the Dutch Safety Board, the body conducting the official investigation into the crash, before and after the release of the board\u2019s final report. They set up fake SFTP and VPN servers to mimic the board\u2019s own servers, likely for the purpose of spear-phishing usernames and passwords.\nhttps://www.msn.com/en-au/news/world/russia-tried-to-hack-mh17-inquiry-system/ar-BBmmuuT"
            },
            {
                "date": "2015-10",
                "activity": "New Adobe Flash Zero-Day Used in Pawn Storm Campaign Targeting Foreign Affairs Ministries\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/new-adobe-flash-zero-day-used-in-pawn-storm-campaign/"
            },
            {
                "date": "2016-01",
                "activity": "Pawn Storm Campaign Adds Turkey To Its List of Targets\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/pawn-storm-adds-turkey-list-targets/"
            },
            {
                "date": "2016-05",
                "activity": "Pawn Storm Targets German Christian Democratic Union\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/pawn-storm-targets-german-christian-democratic-union/"
            },
            {
                "date": "2016-05",
                "activity": "Russian cyber-espionage group hits Sanoma\nhttps://yle.fi/uutiset/osasto/news/russian_cyber-espionage_group_hits_sanoma/8919118"
            },
            {
                "date": "2016-06",
                "activity": "Breach of Democratic National Committee\nFancy Bear carried out spear-phishing attacks on email addresses associated with the Democratic National Committee in the first quarter of 2016. On March 10, phishing emails that were mainly directed at old email addresses of 2008 Democratic campaign staffers began to arrive. One of these accounts may have yielded up to date contact lists. The next day, phishing attacks expanded to the non-public email addresses of high level Democratic Party officials. Hillaryclinton.com addresses were attacked, but required two factor authentication for access. The attack redirected towards Gmail accounts on March 19th. Podesta\u2019s Gmail account was breached the same day, with 50,000 emails stolen.\nAnother sophisticated hacking group attributed to the Russian Federation, nicknamed {{APT 29, Cozy Bear, The Dukes}} appears to be a different agency, one more interested in traditional long-term espionage.\nhttps://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/\nhttps://www.secureworks.com/research/threat-group-4127-targets-google-accounts"
            },
            {
                "date": "2016-06",
                "activity": "\u201cExercise Noble Partner 2016\u201d spear-phishing e-mail\nMethod: Spear-phishing e-mail\nTarget: USA government\nhttps://unit42.paloaltonetworks.com/unit42-new-sofacy-attacks-against-us-government-agency/"
            },
            {
                "date": "2016-08",
                "activity": "Spear-phishing attack members of the Bundestag and multiple political parties such as Linken-faction leader Sahra Wagenknecht, Junge Union and the CDU of Saarland. Authorities feared that sensitive information could be gathered by hackers to later manipulate the public ahead of elections such as Germany\u2019s next federal election which was due in September 2017.\nhttp://www.dw.com/en/hackers-lurking-parliamentarians-told/a-19564630"
            },
            {
                "date": "2016-08",
                "activity": "World Anti-Doping Agency\nMethod: Phishing emails sent to users of its database claiming to be official WADA communications requesting their login details.\nhttp://www.ibtimes.co.uk/russian-hackers-fancy-bear-likely-breached-olympic-drug-testing-agency-dnc-experts-say-1577508"
            },
            {
                "date": "2016-09",
                "activity": "Operation \u201cKomplex\u201d\nhttps://unit42.paloaltonetworks.com/unit42-sofacys-komplex-os-x-trojan/"
            },
            {
                "date": "2016-10",
                "activity": "Operation \u201cDealersChoice\u201d\nhttps://unit42.paloaltonetworks.com/unit42-dealerschoice-sofacys-flash-player-exploit-platform/\nhttps://unit42.paloaltonetworks.com/unit42-let-ride-sofacy-groups-dealerschoice-attacks-continue/\nThe global reach that coincided with this focus on NATO and the Ukraine couldn\u2019t be overstated. Our KSN data showed spear-phishing targets geo-located across the globe into 2017.\nAM, AZ, FR, DE, IQ, IT, KG, MA, CH, UA, US, VN\nDealersChoice emails, like the one above, that we were able to recover from third party sources provided additional targeting insight, and confirmed some of the targeting within our KSN data:\nTR, PL, BA, AZ, KR, LV, GE, LV, AU, SE, BE"
            },
            {
                "date": "2017 Early",
                "activity": "GAMEFISH backdoor\nTarget: Europe.\nMethod: They took advantage of the Syrian military conflict for thematic content and file naming \u201cTrump\u2019s_Attack_on_Syria_English.docx\u201d. Again, this deployment was likely a part of their focus on NATO targets."
            },
            {
                "date": "2017 Early",
                "activity": "LoJax: First UEFI rootkit found in the wild\nhttps://www.welivesecurity.com/2018/09/27/lojax-first-uefi-rootkit-found-wild-courtesy-sednit-group/"
            },
            {
                "date": "2017-02",
                "activity": "Attack on Dutch ministries\nIn February 2017, the General Intelligence and Security Service (AIVD) of the Netherlands revealed that Fancy Bear and Cozy Bear had made several attempts to hack into Dutch ministries, including the Ministry of General Affairs, over the previous six months. Rob Bertholee, head of the AIVD, said on EenVandaag that the hackers were Russian and had tried to gain access to secret government documents.\nhttps://www.volkskrant.nl/cultuur-media/russen-faalden-bij-hackpogingen-ambtenaren-op-nederlandse-ministeries~b77ff391/"
            },
            {
                "date": "2017-02",
                "activity": "Russian Hackers \u2018Fancy Bear\u2019 Targeted French Presidential Candidate Macron\nhttps://www.vice.com/en_us/article/ez35p7/russian-hackers-fancy-bear-targeted-french-presidential-candidate-macron"
            },
            {
                "date": "2017-02",
                "activity": "IAAF Hack\nThe officials of International Association of Athletics Federations (IAAF) stated in April 2017 that its servers had been hacked by the \u201cFancy Bear\u201d group. The attack was detected by cybersecurity firm Context Information Security which identified that an unauthorized remote access to IAAF\u2019s servers had taken place on February 21. IAAF stated that the hackers had accessed the Therapeutic Use Exemption applications, needed to use medications prohibited by WADA.\nhttps://www.voanews.com/a/iaaf-hack-fancy-bears/3793874.html"
            },
            {
                "date": "2017-04",
                "activity": "German elections\nThey targeted the German Konrad Adenauer Foundation and Friedrich Ebert Foundation, groups that are associated with Angela Merkel\u2019s Christian Democratic Union and opposition Social Democratic Party, respectively. Fancy Bear set up fake email servers in late 2016 to send phishing emails with links to malware.\nhttps://www.handelsblatt.com/today/politics/election-risks-russia-linked-hackers-target-german-political-foundations/23569188.html?ticket=ST-2696734-GRHgtQukDIEXeSOwksXO-ap1"
            },
            {
                "date": "2017 Early",
                "activity": "SPLM backdoor\nTarget: included defense related commercial and military organizations, and telecommunications.\nTargeting included TR, KZ, AM, KG, JO, UK, UZ\nMethod: SPLM/CHOPSTICK/Xagent"
            },
            {
                "date": "2017-06",
                "activity": "Heavy Zebrocy deployments\nTargeting profiles, spear-phish filenames, and lures carry thematic content related to visa applications and scanned images, border control administration, and various administrative notes. Targeting appears to be widely spread across the Middle East, Europe, and Asia:\n- Business accounting practices and standards\n- Science and engineering centers\n- Industrial and hydro chemical engineering and standards/certification\n- Ministry of foreign affairs\n- Embassies and consulates\n- National security and intelligence agencies\n- Press services\n- Translation services\n- NGO \u2013 family and social service\n- Ministry of energy and industry\nMethod: the Zebrocy chain follows a pattern: spear-phish attachment -> compiled Autoit script (downloader) -> Zebrocy payload. In some deployments, we observed Sofacy actively developing and deploying a new package to a much smaller, specific subset of targets within the broader set."
            },
            {
                "date": "2017-07",
                "activity": "APT28 Targets Hospitality Sector, Presents Threat to Travelers\nhttps://www.fireeye.com/blog/threat-research/2017/08/apt28-targets-hospitality-sector.html"
            },
            {
                "date": "2017-10",
                "activity": "In this case it capitalized on the recent terrorist attack in New York City. The document itself is blank. Once opened, the document contacts a control server to drop the first stage of the malware, Seduploader, onto a victim\u2019s system.\nhttps://securingtomorrow.mcafee.com/mcafee-labs/apt28-threat-group-adopts-dde-technique-nyc-attack-theme-in-latest-campaign/#sf151634298"
            },
            {
                "date": "2017-10",
                "activity": "Russische hackers vallen vredesbeweging Pax aan\nhttps://www.human.nl/schimmenspel/russische-hackers-vallen-Nederlandse-vredesbeweging-aan.html"
            },
            {
                "date": "2018-01",
                "activity": "Breach of the International Olympic Committee\nOn January 10, 2018, the \u201cFancy Bears Hack Team\u201d online persona leaked what appeared to be stolen International Olympic Committee (IOC) and U.S. Olympic Committee emails, dated from late 2016 to early 2017, were leaked in apparent retaliation for the IOC\u2019s banning of Russian athletes from the 2018 Winter Olympics as a sanction for Russia\u2019s systematic doping program. The attack resembles the earlier World Anti-Doping Agency (WADA) leaks. It is not known whether the emails are fully authentic, because of Fancy Bear\u2019s history of salting stolen emails with disinformation. The mode of attack was also not known, but was probably phishing.\nhttps://www.wired.com/story/russian-fancy-bears-hackers-release-apparent-ioc-emails/"
            },
            {
                "date": "2018-02",
                "activity": "Attacks on Multiple Government Entities\nTarget: Ministries of Foreign Affairs of the USA and Romania.\nMethod: Spear-phishing using the subject line of Upcoming Defense events February 2018 and a sender address claiming to be from Jane\u2019s 360 defense events.\nhttps://unit42.paloaltonetworks.com/unit42-sofacy-attacks-multiple-government-entities/"
            },
            {
                "date": "2018-03",
                "activity": "On March 12 and March 14, we observed the Sofacy group carrying out an attack on a European government agency involving an updated variant of DealersChoice. The updated DealersChoice documents used a similar process to obtain a malicious Flash object from a C2 server, but the inner mechanics of the Flash object contained significant differences in comparison to the original samples we analyzed.\nhttps://unit42.paloaltonetworks.com/unit42-sofacy-uses-dealerschoice-target-european-government-agency/"
            },
            {
                "date": "2018-05",
                "activity": "Breach of the Swedish Sports Confederation\nThe Swedish Sports Confederation reported Fancy Bear was responsible for an attack on its computers, targeting records of athletes\u2019 doping tests.\nhttps://www.reuters.com/article/us-sweden-doping/swedish-sports-body-says-anti-doping-unit-hit-by-hacking-attack-idUSKCN1IG2GN"
            },
            {
                "date": "2018-05",
                "activity": "VPNFilter IoT botnet\nThaiCERT's whitepaper:\nhttps://www.dropbox.com/s/9lkeenhveb3xbkq/Whitepaper VPNFilter IoT botnet seized by the FBI.pdf?dl=0"
            },
            {
                "date": "2018-06",
                "activity": "This third campaign is consistent with two previously reported attack campaigns in terms of targeting: the targets were government organizations dealing with foreign affairs. In this case however the targets were in different geopolitical regions.\nhttps://unit42.paloaltonetworks.com/unit42-sofacy-groups-parallel-attacks/"
            },
            {
                "date": "2018-08",
                "activity": "Attacks on United States Conservative Groups\nThe software company Microsoft reported in August 2018 that the group had attempted to steal data from political organizations such as the International Republican Institute and the Hudson Institute think tanks. The attacks were thwarted when Microsoft security staff won control of six net domains. In its announcement Microsoft advised that \u201cwe currently have no evidence these domains were used in any successful attacks before the DCU transferred control of them, nor do we have evidence to indicate the identity of the ultimate targets of any planned attack involving these domains\u201d.\nhttps://www.bbc.co.uk/news/technology-45257081"
            },
            {
                "date": "2018-10",
                "activity": "Operation \u201cDear Joohn\u201d\nTarget: The weaponized documents targeted several government entities around the globe, including North America, Europe, and a former USSR state.\nMethod: new \u2018Cannon\u2019 Trojan\nhttps://unit42.paloaltonetworks.com/dear-joohn-sofacy-groups-global-campaign/\nhttps://unit42.paloaltonetworks.com/unit42-sofacy-continues-global-attacks-wheels-new-cannon-trojan/"
            },
            {
                "date": "2018",
                "activity": "BREXIT-themed lure document\nBrexit-themed bait documents to deliver the Zekapab (also known as Zebrocy) first-stage malware, sent on the same day the UK Prime Minister Theresa May announced the initial BREXIT draft agreement with the European Union (EU). \u201cAs the United Kingdom (UK) Prime Minister Theresa May announced the initial BREXIT draft agreement with the European Union (EU).\nhttps://www.accenture.com/t20181129T203820Z__w__/us-en/_acnmedia/PDF-90/Accenture-snakemackerel-delivers-zekapab-malware.pdf"
            },
            {
                "date": "2019-02",
                "activity": "2019 Think Tank Attacks\nIn February 2019, Microsoft announced that it had detected spear-phishing attacks from APT28, aimed at employees of the German Marshall Fund, Aspen Institute Germany, and the German Council on Foreign Relations. Hackers from the group purportedly sent phishing e-mails to 104 email addresses across Europe in an attempt to gain access to employer credentials and infect sites with malware.\nhttps://www.washingtonpost.com/technology/2019/02/20/microsoft-says-it-has-found-another-russian-operation-targeting-prominent-think-tanks/?utm_term=.870ff11468ae"
            },
            {
                "date": "2019-02",
                "activity": "Threat Campaign Likely Targeting NATO Members, Defense and Military Outlets\niDefense assesses with moderate confidence that the actors may be targeting attendees and sponsors of the upcoming Underwater Defense & Security 2019 event occurring March 5-7, 2019, in Southampton, United Kingdom. This event draws attendees from government, military and private sector entities across the globe.\nhttps://www.accenture.com/t20190213T141124Z__w__/us-en/_acnmedia/PDF-94/Accenture-SNAKEMACKEREL-Threat-Campaign-Likely-Targeting-NATO-Members-Defense-and-Military-Outlets.pdf"
            },
            {
                "date": "2019-04",
                "activity": "In April, security researchers in the Microsoft Threat Intelligence Center discovered infrastructure of a known adversary communicating to several external devices. Further research uncovered attempts by the actor to compromise popular IoT devices (a VOIP phone, an office printer, and a video decoder) across multiple customer locations.\nhttps://msrc-blog.microsoft.com/2019/08/05/corporate-iot-a-path-to-intrusion/"
            },
            {
                "date": "2019-05",
                "activity": "Since May 2019, Pawn Storm has been abusing compromised email addresses to send credential phishing spam. The majority of the compromised systems were from defense companies in the Middle East. Other targets included organizations in the transportation, utilities, and government sectors.\nhttps://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/probing-pawn-storm-cyberespionage-campaign-through-scanning-credential-phishing-and-more"
            },
            {
                "date": "2019-08",
                "activity": "On August 20th, 2019, a new campaign was launched by the group targeting their usual victims \u2013 embassies of, and Ministries of Foreign Affairs in, Eastern European and Central Asian countries.\nhttps://www.welivesecurity.com/2019/09/24/no-summer-vacations-zebrocy/"
            },
            {
                "date": "2019-08",
                "activity": "APT28, one of Russia's military hacking units, was most likely responsible for hacking the email accounts of the Norwegian Parliament, the Norwegian police secret service (PST) said today.\nhttps://www.zdnet.com/article/norway-says-russian-hacking-group-apt28-is-behind-august-2020-parliament-hack/"
            },
            {
                "date": "2019-09",
                "activity": "At least 16 national and international sporting and anti-doping organizations across three continents were targeted in these attacks which began September 16th, just before news reports about new potential action being taken by the World Anti-Doping Agency. Some of these attacks were successful, but the majority were not.\nhttps://blogs.microsoft.com/on-the-issues/2019/10/28/cyberattacks-sporting-anti-doping/"
            },
            {
                "date": "2019-11",
                "activity": "Beginning in early November of 2019, the Main Intelligence Directorate of the General Staff of the Russian Army (GRU) launched a phishing campaign targeting Burisma Holdings, a holding company of energy exploration and production companies based in Kiev, Ukraine.\nhttps://cdn.area1security.com/reports/Area-1-Security-PhishingBarismaHoldings.pdf"
            },
            {
                "date": "2020-04",
                "activity": "Microsoft has tied STRONTIUM to a newly uncovered pattern of Office365 credential harvesting activity aimed at US and UK organizations directly involved in political elections.\nhttps://www.microsoft.com/security/blog/2020/09/10/strontium-detecting-new-patters-credential-harvesting/"
            },
            {
                "date": "2020-05",
                "activity": "Pawn Storm scanned IP addresses worldwide, including IP addresses from the defense industry in Europe, on TCP port 445 and 1433, likely in an attempt to find vulnerable SMB and SQL servers or brute force credentials.\nhttps://www.trendmicro.com/en_us/research/20/l/pawn-storm-lack-of-sophistication-as-a-strategy.html"
            },
            {
                "date": "2020-08",
                "activity": "New cyberattacks targeting U.S. elections\nhttps://blogs.microsoft.com/on-the-issues/2020/09/10/cyberattacks-us-elections-trump-biden/"
            },
            {
                "date": "2020-08",
                "activity": "APT28 Delivers Zebrocy Malware Campaign using NATO Theme as Lure\nhttps://quointelligence.eu/2020/09/apt28-zebrocy-malware-campaign-nato-theme/"
            },
            {
                "date": "2020-11",
                "activity": "A Zebra in Gopher's Clothing: Russian APT Uses COVID-19 Lures to Deliver Zebrocy\nhttps://www.intezer.com/blog/research/russian-apt-uses-covid-19-lures-to-deliver-zebrocy/"
            },
            {
                "date": "2021-06",
                "activity": "A not so Fancy game. Exploring the new \u201cSkinnyBoy\u201d Bear\u2019s backdoor\nhttps://cluster25.io/wp-content/uploads/2021/05/2021-05_FancyBear.pdf"
            },
            {
                "date": "2021-06",
                "activity": "Hackers Exploited MSHTML Flaw to Spy on Government and Defense Targets\nhttps://thehackernews.com/2022/01/hackers-exploited-mshtml-flaw-to-spy-on.html"
            },
            {
                "date": "2021-09",
                "activity": "Google notifies 14,000 Gmail users of targeted APT28 attacks\nhttps://therecord.media/google-notifies-14000-gmail-users-of-targeted-apt28-attacks/"
            },
            {
                "date": "2022-02",
                "activity": "FancyBear/APT28, a threat actor attributed to Russia GRU, has conducted several large credential phishing campaigns targeting ukr.net users, UkrNet is a Ukrainian media company.\nhttps://blog.google/threat-analysis-group/update-threat-landscape-ukraine/"
            },
            {
                "date": "2022-02",
                "activity": "BlueDelta Exploits Ukrainian Government Roundcube Mail Servers to Support Espionage Activities\nhttps://go.recordedfuture.com/hubfs/reports/cta-2023-0620.pdf"
            },
            {
                "date": "2022-04",
                "activity": "APT28 or Fancy Bear, a threat actor attributed to Russia GRU, was observed targeting users in Ukraine with a new variant of malware.\nhttps://blog.google/threat-analysis-group/update-on-cyber-activity-in-eastern-europe/"
            },
            {
                "date": "2022-06",
                "activity": "The Ukrainian Computer Emergency Response Team (CERT) is warning that Russian hacking groups are exploiting the Follina code execution vulnerability in new phishing campaigns to install the CredoMap malware and Cobalt Strike beacons.\nhttps://www.bleepingcomputer.com/news/security/russian-govt-hackers-hit-ukraine-with-cobalt-strike-credomap-malware/"
            },
            {
                "date": "2022-09",
                "activity": "In the footsteps of the Fancy Bear: PowerPoint mouse-over event abused to deliver Graphite implants\nhttps://blog.cluster25.duskrise.com/2022/09/23/in-the-footsteps-of-the-fancy-bear-powerpoint-graphite/"
            },
            {
                "date": "2023-04",
                "activity": "Hackers use fake \u2018Windows Update\u2019 guides to target Ukrainian govt\nhttps://www.bleepingcomputer.com/news/security/hackers-use-fake-windows-update-guides-to-target-ukrainian-govt/"
            },
            {
                "date": "2023-09",
                "activity": "Ukraine says an energy facility disrupted a Fancy Bear intrusion\nhttps://therecord.media/ukraine-energy-facility-cyberattack-fancy-bear-email"
            }
        ],
        "counter-operations": [
            {
                "date": "2018-05",
                "activity": "Justice Department Announces Actions to Disrupt Advanced Persistent Threat 28 Botnet of Infected Routers and Network Storage Devices\nhttps://www.justice.gov/opa/pr/justice-department-announces-actions-disrupt-advanced-persistent-threat-28-botnet-infected"
            },
            {
                "date": "2018-07",
                "activity": "Mueller indicts 12 Russians for DNC hacking as Trump-Putin summit looms\nhttps://www.politico.com/story/2018/07/13/mueller-indicts-12-russians-for-hacking-into-dnc-718805"
            },
            {
                "date": "2018-08",
                "activity": "Microsoft\u2019s Digital Crimes Unit (DCU) successfully executed a court order to disrupt and transfer control of six internet domains\nhttps://blogs.microsoft.com/on-the-issues/2018/08/20/we-are-taking-new-steps-against-broadening-threats-to-democracy/"
            },
            {
                "date": "2018-10",
                "activity": "US charges Russian military officers over international hacking and disinformation campaigns\nhttps://www.zdnet.com/article/us-charges-russian-military-officers-over-international-hacking-and-disinformation-campaigns/"
            },
            {
                "date": "2020-05",
                "activity": "German authorities charge Russian hacker for 2015 Bundestag hack\nhttps://www.zdnet.com/article/german-authorities-charge-russian-hacker-for-2015-bundestag-hack/"
            },
            {
                "date": "2022-04",
                "activity": "Disrupting cyberattacks targeting Ukraine\nhttps://blogs.microsoft.com/on-the-issues/2022/04/07/cyberattacks-ukraine-strontium-russia/"
            },
            {
                "date": "2023-04",
                "activity": "Hacked: Russian GRU officer wanted by the FBI, leader of the hacker group APT 28\nhttps://informnapalm.org/en/hacked-russian-gru-officer/"
            }
        ],
        "information": [
            "https://securelist.com/sofacy-apt-hits-high-profile-targets-with-updated-toolset/72924/",
            "http://download.bitdefender.com/resources/media/materials/white-papers/en/Bitdefender_In-depth_analysis_of_APT28%E2%80%93The_Political_Cyber-Espionage.pdf",
            "https://securelist.com/a-slice-of-2017-sofacy-activity/83930/",
            "https://www.symantec.com/blogs/election-security/apt28-espionage-military-government",
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf",
            "https://threatvector.cylance.com/en_us/home/flirting-with-ida-and-apt28.html",
            "https://threatvector.cylance.com/en_us/home/inside-the-apt28-dll-backdoor-blitz.html",
            "https://securelist.com/zebrocys-multilanguage-malware-salad/90680/",
            "https://marcoramilli.com/2019/12/05/apt28-attacks-evolution/",
            "https://www.us-cert.gov/sites/default/files/publications/AR-17-20045_Enhanced_Analysis_of_GRIZZLY_STEPPE_Activity.pdf",
            "https://exchange.xforce.ibmcloud.com/threat-group/guid:f7b33aa456eb38053abd85968f78833a",
            "https://en.wikipedia.org/wiki/Fancy_Bear",
            "https://services.google.com/fh/files/blogs/google_fog_of_war_research_report.pdf",
            "https://blog.google/threat-analysis-group/ukraine-remains-russias-biggest-cyber-focus-in-2023/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0007/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=sofacy"
        ],
        "uuid": "e6037735-ed1b-4ae3-a45b-45d66e2c80f1",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sofacy_apt_28_fancy_bear_sednit",
    "analysis": null,
    "articles": [],
    "mitre": [
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