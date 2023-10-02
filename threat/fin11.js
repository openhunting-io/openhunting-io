var threatdata = {
    "name": "FIN11",
    "alias": "FIN11, DEV-0950, Lace Tempest",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-07",
    "all_data": {
        "actor": "FIN11",
        "names": [
            {
                "name": "FIN11",
                "name-giver": "FireEye"
            },
            {
                "name": "DEV-0950",
                "name-giver": "Microsoft"
            },
            {
                "name": "Lace Tempest",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2016",
        "description": "(FireEye) Mandiant has also responded to numerous FIN11 intrusions, but we\u2019ve only observed the group successfully monetize access in few instances. This could suggest that the actors cast a wide net during their phishing operations, then choose which victims to further exploit based on characteristics such as sector, geolocation or perceived security posture. Recently, FIN11 has deployed CLOP ransomware and threatened to publish exfiltrated data to pressure victims into paying ransom demands. The group\u2019s shifting monetization methods\u2014from point-of-sale (POS) malware in 2018, to ransomware in 2019, and hybrid extortion in 2020\u2014is part of a larger trend in which criminal actors have increasingly focused on post-compromise ransomware deployment and data theft extortion.\n\nNotably, FIN11 includes a subset of the activity security researchers call {{TA505, Graceful Spider, Gold Evergreen}}, but we do not attribute TA505\u2019s early operations to FIN11 and caution against using the names interchangeably. Attribution of both historic TA505 activity and more recent FIN11 activity is complicated by the actors\u2019 use of criminal service providers. Like most financially motivated actors, FIN11 doesn\u2019t operate in a vacuum. We believe that the group has used services that provide anonymous domain registration, bulletproof hosting, code signing certificates, and private or semi-private malware. Outsourcing work to these criminal service providers likely enables FIN11 to increase the scale and sophistication of their operations.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Hospitality",
            "Retail",
            "Telecommunications",
            "Technology",
            "Transportation"
        ],
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Amadey",
            "AndroMut",
            "AZORult",
            "BLUESTEAL",
            "Clop",
            "EMASTEAL",
            "FlawedAmmyy",
            "FLOWERPIPE",
            "FORKBEARD",
            "Get2",
            "JESTBOT",
            "Meterpreter",
            "MINEBRIDGE",
            "MINEDOOR",
            "MIXLABEL",
            "NAILGUN",
            "POPFLASH",
            "SALTLICK",
            "SCRAPMINT",
            "SHORTBENCH",
            "SLOWROLL",
            "SPOONBEARD",
            "TinyMet",
            "VIDAR"
        ],
        "operations": [
            {
                "date": "2019-12",
                "activity": "Ransomware attack on Maastricht University\nhttps://www.bleepingcomputer.com/news/security/ta505-hackers-behind-maastricht-university-ransomware-attack/"
            },
            {
                "date": "2020-03",
                "activity": "U.S. pharmaceutical giant ExecuPharm has become the latest victim of data-stealing ransomware.\nExecuPharm said in a letter to the Vermont attorney general\u2019s office that it was hit by a ransomware attack on March 13, and warned that Social Security numbers, financial information, driver licenses, passport numbers and other sensitive data may have been accessed.\nBut TechCrunch has now learned that the ransomware group behind the attack has published the data stolen from the company\u2019s servers.\nhttps://techcrunch.com/2020/04/27/execupharm-clop-ransomware/"
            },
            {
                "date": "2020-10",
                "activity": "Software AG IT giant hit with $23 million ransom by Clop ransomware\nhttps://www.bleepingcomputer.com/news/security/software-ag-it-giant-hit-with-23-million-ransom-by-clop-ransomware/"
            },
            {
                "date": "2020-12",
                "activity": "Global Accellion data breaches linked to Clop ransomware gang\nhttps://www.bleepingcomputer.com/news/security/global-accellion-data-breaches-linked-to-clop-ransomware-gang/"
            },
            {
                "date": "2020-12",
                "activity": "Singtel, QIMR Berghofer report Accellion-related data breaches\nhttps://www.bleepingcomputer.com/news/security/singtel-qimr-berghofer-report-accellion-related-data-breaches/"
            },
            {
                "date": "2020-12",
                "activity": "New Zealand Reserve Bank breached using bug patched on Xmas Eve\nhttps://www.bleepingcomputer.com/news/security/new-zealand-reserve-bank-breached-using-bug-patched-on-xmas-eve/"
            },
            {
                "date": "2021-01",
                "activity": "Australian securities regulator discloses security breach\nhttps://www.bleepingcomputer.com/news/security/australian-securities-regulator-discloses-security-breach/"
            },
            {
                "date": "2021-01",
                "activity": "Data breach exposes 1.6 million Washington unemployment claims\nhttps://www.bleepingcomputer.com/news/security/data-breach-exposes-16-million-washington-unemployment-claims/"
            },
            {
                "date": "2021-02",
                "activity": "Hacker Claims to Have Stolen Files Belonging to Prominent Law Firm Jones Day\nhttps://www.wsj.com/articles/hacker-claims-to-have-stolen-files-belonging-to-prominent-law-firm-jones-day-11613514532"
            },
            {
                "date": "2021-02",
                "activity": "Clop ransomware gang leaks online what looks like stolen Bombardier blueprints of GlobalEye radar snoop jet\nhttps://www.theregister.com/2021/02/23/bombardier_clop_ransomware_leaks/"
            },
            {
                "date": "2021-02",
                "activity": "Kroger data breach exposes pharmacy and employee data\nhttps://www.bleepingcomputer.com/news/security/kroger-data-breach-exposes-pharmacy-and-employee-data/"
            },
            {
                "date": "2021-03",
                "activity": "Cybersecurity firm Qualys is the latest victim of Accellion hacks\nhttps://www.bleepingcomputer.com/news/security/cybersecurity-firm-qualys-is-the-latest-victim-of-accellion-hacks/"
            },
            {
                "date": "2021-03",
                "activity": "Ransomware gang leaks data stolen from Colorado, Miami universities\nhttps://www.bleepingcomputer.com/news/security/ransomware-gang-leaks-data-stolen-from-colorado-miami-universities/"
            },
            {
                "date": "2021-03",
                "activity": "Energy giant Shell discloses data breach after Accellion hack\nhttps://www.bleepingcomputer.com/news/security/energy-giant-shell-discloses-data-breach-after-accellion-hack/"
            },
            {
                "date": "2021-03",
                "activity": "Ransomware gang urges victims\u2019 customers to demand a ransom payment\nhttps://www.bleepingcomputer.com/news/security/ransomware-gang-urges-victims-customers-to-demand-a-ransom-payment/"
            },
            {
                "date": "2021-03",
                "activity": "Ransomware group targets universities in Maryland, California in new data leaks\nhttps://www.zdnet.com/article/ransomware-group-targets-universities-of-maryland-california-in-new-data-leaks/"
            },
            {
                "date": "2021-03",
                "activity": "Ransomware gang leaks data from Stanford, Maryland universities\nhttps://www.bleepingcomputer.com/news/security/ransomware-gang-leaks-data-from-stanford-maryland-universities/"
            },
            {
                "date": "2021-04",
                "activity": "More Accellion Health Data Breaches Revealed\nhttps://www.healthcareinfosecurity.com/more-accellion-health-data-breaches-revealed-a-16350"
            },
            {
                "date": "2021-06",
                "activity": "Clop ransomware is back in business after recent arrests\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-is-back-in-business-after-recent-arrests/"
            },
            {
                "date": "2021-10",
                "activity": "Clop ransomware gang is leaking confidential data from the UK police\nhttps://securityaffairs.co/wordpress/125792/cyber-crime/clop-ransomware-uk-police.html"
            },
            {
                "date": "2021-11",
                "activity": "Marine services provider Swire Pacific Offshore hit by ransomware\nhttps://www.bleepingcomputer.com/news/security/marine-services-provider-swire-pacific-offshore-hit-by-ransomware/"
            },
            {
                "date": "2022-04",
                "activity": "Clop ransomware gang is back, hits 21 victims in a single month\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-gang-is-back-hits-21-victims-in-a-single-month/"
            },
            {
                "date": "2022-08",
                "activity": "Hackers attack UK water supplier but extort wrong company\nhttps://www.bleepingcomputer.com/news/security/hackers-attack-uk-water-supplier-but-extort-wrong-company/\nhttps://therecord.media/ransomware-group-may-have-stolen-customer-bank-details-from-british-water-company/"
            },
            {
                "date": "2022-09",
                "activity": "FIN11 is Back : Impersonates Popular Video Conference Application\nhttps://www.cyfirma.com/outofband/fin11-is-back-impersonates-popular-video-conference-application/"
            },
            {
                "date": "2022-12",
                "activity": "Cl0p Ransomware Targets Linux Systems with Flawed Encryption\nhttps://www.sentinelone.com/labs/cl0p-ransomware-targets-linux-systems-with-flawed-encryption-decryptor-available/"
            },
            {
                "date": "2023-02",
                "activity": "Clop ransomware claims it breached 130 orgs using GoAnywhere zero-day\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-claims-it-breached-130-orgs-using-goanywhere-zero-day/"
            },
            {
                "date": "2023-03",
                "activity": "Clop ransomware gang begins extorting GoAnywhere zero-day victims\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-gang-begins-extorting-goanywhere-zero-day-victims/"
            },
            {
                "date": "2023-03",
                "activity": "Clop ransomware claims Saks Fifth Avenue, retailer says mock data stolen\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-claims-saks-fifth-avenue-retailer-says-mock-data-stolen/"
            },
            {
                "date": "2023-03",
                "activity": "City of Toronto confirms data theft, Clop claims responsibility\nhttps://www.bleepingcomputer.com/news/security/city-of-toronto-confirms-data-theft-clop-claims-responsibility/"
            },
            {
                "date": "2023-03",
                "activity": "Procter & Gamble confirms data theft via GoAnywhere zero-day\nhttps://www.bleepingcomputer.com/news/security/procter-and-gamble-confirms-data-theft-via-goanywhere-zero-day/"
            },
            {
                "date": "2023-03",
                "activity": "UK Pension Protection Fund latest victim of GoAnywhere hack\nhttps://therecord.media/uk-pension-protection-fund-clop-goanywhere-fortra"
            },
            {
                "date": "2023-03",
                "activity": "Crown Resorts confirms ransom demand after GoAnywhere breach\nhttps://www.bleepingcomputer.com/news/security/crown-resorts-confirms-ransom-demand-after-goanywhere-breach/"
            },
            {
                "date": "2023-03",
                "activity": "Tasmania officials: 16,000 student documents leaked by Clop ransomware group\nhttps://therecord.media/tasmania-government-ransomware-clop-student-documents"
            },
            {
                "date": "2023-04",
                "activity": "Microsoft: Clop and LockBit ransomware behind PaperCut server hacks\nhttps://www.bleepingcomputer.com/news/security/microsoft-clop-and-lockbit-ransomware-behind-papercut-server-hacks/"
            },
            {
                "date": "2023-05",
                "activity": "Microsoft links Clop ransomware gang to MOVEit data-theft attacks\nhttps://www.bleepingcomputer.com/news/security/microsoft-links-clop-ransomware-gang-to-moveit-data-theft-attacks/\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-gang-starts-extorting-moveit-data-theft-victims/"
            },
            {
                "date": "2023-05",
                "activity": "Missouri warns that health info was stolen in IBM MOVEit data breach\nhttps://www.bleepingcomputer.com/news/security/missouri-warns-that-health-info-was-stolen-in-ibm-moveit-data-breach/"
            },
            {
                "date": "2023-05",
                "activity": "US govt contractor Serco discloses data breach after MoveIT attacks\nhttps://www.bleepingcomputer.com/news/security/us-govt-contractor-serco-discloses-data-breach-after-moveit-attacks/"
            },
            {
                "date": "2023-05",
                "activity": "Colorado warns 4 million of data stolen in IBM MOVEit breach\nhttps://www.bleepingcomputer.com/news/security/colorado-warns-4-million-of-data-stolen-in-ibm-moveit-breach/"
            },
            {
                "date": "2023-06",
                "activity": "MOVEIt breach impacts GenWorth, CalPERS as data for 3.2 million exposed\nhttps://www.bleepingcomputer.com/news/security/moveit-breach-impacts-genworth-calpers-as-data-for-32-million-exposed/"
            },
            {
                "date": "2023-06",
                "activity": "Hackers steal data of 45,000 New York City students in MOVEit breach\nhttps://www.bleepingcomputer.com/news/security/hackers-steal-data-of-45-000-new-york-city-students-in-moveit-breach/"
            },
            {
                "date": "2023-06",
                "activity": "Siemens Energy confirms data breach after MOVEit data-theft attack\nhttps://www.bleepingcomputer.com/news/security/siemens-energy-confirms-data-breach-after-moveit-data-theft-attack/"
            },
            {
                "date": "2023-07",
                "activity": "Shell Becomes Latest Cl0p MOVEit Victim\nhttps://www.darkreading.com/attacks-breaches/shell-latest-cl0p-moveit-victim"
            },
            {
                "date": "2023-07",
                "activity": "Radisson Hotels, major insurance firms become latest MOVEit victims to disclose breaches\nhttps://therecord.media/radisson-hotels-major-insurance-firms-disclose-moveit-incidents"
            },
            {
                "date": "2023-07",
                "activity": "Shutterfly says Clop ransomware attack did not impact customer data\nhttps://www.bleepingcomputer.com/news/security/shutterfly-says-clop-ransomware-attack-did-not-impact-customer-data/"
            },
            {
                "date": "2023-07",
                "activity": "BlackCat, Clop claim ransomware attack on cosmetics maker Est\u00e9e Lauder\nhttps://therecord.media/blackcat-clop-claim-cyberattack-on-estee-lauder"
            },
            {
                "date": "2023-07",
                "activity": "Clop now leaks data stolen in MOVEit attacks on clearweb sites\nhttps://www.bleepingcomputer.com/news/security/clop-now-leaks-data-stolen-in-moveit-attacks-on-clearweb-sites/"
            },
            {
                "date": "2023-07",
                "activity": "Medical files of 8M-plus people fall into hands of Clop via MOVEit mega-bug\nhttps://www.theregister.com/2023/07/27/maximus_deloitte_moveit_hack/"
            },
            {
                "date": "2023-08",
                "activity": "Clop ransomware now uses torrents to leak data and evade takedowns\nhttps://www.bleepingcomputer.com/news/security/clop-ransomware-now-uses-torrents-to-leak-data-and-evade-takedowns/"
            }
        ],
        "counter-operations": [
            {
                "date": "2021-06",
                "activity": "Operation \u201cCyclone\u201d\nUkraine arrests Clop ransomware gang members, seizes servers\nhttps://www.bleepingcomputer.com/news/security/ukraine-arrests-clop-ransomware-gang-members-seizes-servers/\nhttps://www.interpol.int/News-and-Events/News/2021/INTERPOL-led-operation-takes-down-prolific-cybercrime-ring"
            },
            {
                "date": "2023-06",
                "activity": "US govt offers $10 million bounty for info on Clop ransomware\nhttps://www.bleepingcomputer.com/news/security/us-govt-offers-10-million-bounty-for-info-on-clop-ransomware/"
            }
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2020/10/fin11-email-campaigns-precursor-for-ransomware-data-theft.html",
            "https://cybernews.com/security/cl0p-hacker-hides-in-ukraine/",
            "https://therecord.media/clop-moveit-zero-day-dustin-childs-interview",
            "https://konbriefing.com/en-topics/cyber-attacks-moveit-victim-list.html"
        ],
        "uuid": "d6613f53-5694-4aa4-a5d9-c51c6cd9426e",
        "last-card-change": "2023-09-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fin11",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.brighttalk.com/webcast/7451/447347",
            "date": "2020-10-29",
            "organization": "Mandiant",
            "author": "Genevieve Stark",
            "title": "FIN11: A Widespread Ransomware and Extortion Operation (Webinar)",
            "categories": [
                "FIN11"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/10/fin11-email-campaigns-precursor-for-ransomware-data-theft.html",
            "date": "2020-10-14",
            "organization": "FireEye",
            "author": "Genevieve Stark",
            "title": "FIN11: Widespread Email Campaigns as Precursor for Ransomware and Data Theft",
            "categories": [
                "FIN11"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/10/shikata-ga-nai-encoder-still-going-strong.html",
            "date": "2019-10-21",
            "organization": "FireEye",
            "author": "Steve Miller",
            "title": "Shikata Ga Nai Encoder Still Going Strong",
            "categories": [
                "FIN11"
            ]
        }
    ],
    "mitre": []
};