var threatdata = {
    "name": "Reaper, APT 37, Ricochet Chollima, ScarCruft",
    "alias": "Reaper, TEMP.Reaper, APT 37, Ricochet Chollima, ScarCruft, Cerium, Group 123, Red Eyes, Geumseong121, Venus 121, Hermit, InkySquid, ATK 4, ITG10, Ruby Sleet",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Reaper, APT 37, Ricochet Chollima, ScarCruft",
        "names": [
            {
                "name": "Reaper",
                "name-giver": "FireEye"
            },
            {
                "name": "TEMP.Reaper",
                "name-giver": "FireEye"
            },
            {
                "name": "APT 37",
                "name-giver": "Mandiant"
            },
            {
                "name": "Ricochet Chollima",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "ScarCruft",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Cerium",
                "name-giver": "Microsoft"
            },
            {
                "name": "Group 123",
                "name-giver": "Talos"
            },
            {
                "name": "Red Eyes",
                "name-giver": "AhnLab"
            },
            {
                "name": "Geumseong121",
                "name-giver": "ESRC"
            },
            {
                "name": "Venus 121",
                "name-giver": "ESRC"
            },
            {
                "name": "Hermit",
                "name-giver": "Tencent"
            },
            {
                "name": "InkySquid",
                "name-giver": "Volexity"
            },
            {
                "name": "ATK 4",
                "name-giver": "Thales"
            },
            {
                "name": "ITG10",
                "name-giver": "IBM"
            },
            {
                "name": "Ruby Sleet",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "North Korea"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "Some research organizations link this group to {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}}.\n\n(FireEye) Read our report, APT37 (Reaper): The Overlooked North Korean Actor, to learn more about our assessment that this threat actor is working on behalf of the North Korean government, as well as various other details about their operations:\n\u2022 Targeting: Primarily South Korea \u2013 though also Japan, Vietnam and the Middle East \u2013 in various industry verticals, including chemicals, electronics, manufacturing, aerospace, automotive, and healthcare.\n\u2022 Initial Infection Tactics: Social engineering tactics tailored specifically to desired targets, strategic web compromises typical of targeted cyberespionage operations, and the use of torrent file-sharing sites to distribute malware more indiscriminately.\n\u2022 Exploited Vulnerabilities: Frequent exploitation of vulnerabilities in Hangul Word Processor (HWP), as well as Adobe Flash. The group has demonstrated access to zero-day vulnerabilities (CVE-2018-0802), and the ability to incorporate them into operations.\n\u2022 Command and Control Infrastructure: Compromised servers, messaging platforms, and cloud service providers to avoid detection. The group has shown increasing sophistication by improving their operational security over time.\n\u2022 Malware: A diverse suite of malware for initial intrusion and exfiltration. Along with custom malware used for espionage purposes, APT37 also has access to destructive malware.",
        "observed-sectors": [
            "Aerospace",
            "Automotive",
            "Chemical",
            "Financial",
            "Government",
            "Healthcare",
            "High-Tech",
            "Manufacturing",
            "Technology",
            "Transportation"
        ],
        "observed-countries": [
            "China",
            "Czech",
            "Hong Kong",
            "India",
            "Japan",
            "Kuwait",
            "Nepal",
            "Poland",
            "Romania",
            "Russia",
            "South Korea",
            "UK",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "BLUELIGHT",
            "CARROTBALL",
            "CARROTBAT",
            "Cobalt Strike",
            "CORALDECK",
            "DOGCALL",
            "Dolphin",
            "Erebus",
            "Final1stSpy",
            "Freenki Loader",
            "GELCAPSULE",
            "GOLDBACKDOOR",
            "GreezeBackdoor",
            "HAPPYWORK",
            "KARAE",
            "KevDroid",
            "Konni",
            "MILKDROP",
            "N1stAgent",
            "NavRAT",
            "Nokki",
            "Oceansalt",
            "PoohMilk Loader",
            "POORAIM",
            "RokRAT",
            "RICECURRY",
            "RUHAPPY",
            "ScarCruft",
            "SHUTTERSPEED",
            "SLOWDRIFT",
            "SOUNDWAVE",
            "Syscon",
            "WINERACK",
            "ZUMKONG",
            "several 0-day Flash and MS Office exploits"
        ],
        "operations": [
            {
                "date": "2012",
                "activity": "Spying on South Korean users."
            },
            {
                "date": "2016",
                "activity": "Operation \u201cErebus\u201d\nhttps://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/erebus-linux-ransomware-impact-to-servers-and-countermeasures"
            },
            {
                "date": "2016-03",
                "activity": "Operation \u201cDaybreak\u201d\nTarget: High profile victims.\nMethod: Previously unknown (0-day) Adobe Flash Player exploit. It is also possible that the group deployed another zero day exploit, CVE-2016-0147, which was patched in April.\nhttps://securelist.com/operation-daybreak/75100/\nNote: not the same operation as {{DarkHotel}}\u2019s Operation \u201cDaybreak\u201d."
            },
            {
                "date": "2016-08",
                "activity": "Operation \u201cGolden Time\u201d\nTarget: South Korean users.\nMethod: spear-phishing emails combined with malicious HWP documents created using Hancom Hangul Office Suite"
            },
            {
                "date": "2016-11",
                "activity": "Operation \u201cEvil New Year\u201d\nTarget: South Korean users.\nMethod: spear-phishing emails combined with malicious HWP documents created using Hancom Hangul Office Suite."
            },
            {
                "date": "2017-03",
                "activity": "Operation \u201cAre You Happy?\u201d\nTarget: South Korean users.\nMethod: Not only to gain access to the remote infected systems but to also wipe the first sectors of the device."
            },
            {
                "date": "2017-05",
                "activity": "Operation \u201cFreeMilk\u201d\nTarget: Several non-Korean financial institutions.\nMethod: A malicious Microsoft Office document, a deviation from their normal use of Hancom documents.\nhttps://unit42.paloaltonetworks.com/unit42-freemilk-highly-targeted-spear-phishing-campaign/"
            },
            {
                "date": "2017-11",
                "activity": "Operation \u201cNorth Korean Human Right\u201d\nTarget: South Korean users.\nMethod: Spear-phishing emails combined with malicious HWP documents created using Hancom Hangul Office Suite."
            },
            {
                "date": "2017-12",
                "activity": "Operation \u201cFractured Block\u201d\nhttps://unit42.paloaltonetworks.com/unit42-the-fractured-block-campaign-carrotbat-malware-used-to-deliver-malware-targeting-southeast-asia/"
            },
            {
                "date": "2018-01",
                "activity": "Operation \u201cEvil New Year 2018\u201d\nTarget: South Korean users.\nMethod: Spear-phishing emails combined with malicious HWP documents created using Hancom Hangul Office Suite."
            },
            {
                "date": "2018-03",
                "activity": "Operation \u201cBattle Cruiser\u201d\nhttps://blog.alyac.co.kr/1625"
            },
            {
                "date": "2018-04",
                "activity": "Operation \u201cStar Cruiser\u201d\nhttp://blog.alyac.co.kr/1653"
            },
            {
                "date": "2018-05",
                "activity": "Operation \u201cOnezero\u201d\nhttps://brica.de/alerts/alert/public/1215993/analysis-of-apt-attack-on-operation-onezero-conducted-as-a-document-on-panmunjom-declaration/"
            },
            {
                "date": "2018-08",
                "activity": "Operation \u201cRocket Man\u201d\nhttps://brica.de/alerts/alert/public/1226363/the-latest-apt-campaign-of-venus-121-group-operation-rocket-man/"
            },
            {
                "date": "2018-11",
                "activity": "Operation \u201cKorean Sword\u201d\nhttps://brica.de/alerts/alert/public/1252896/venus-121-apt-organization-operation-high-expert/"
            },
            {
                "date": "2019-01",
                "activity": "Operation \u201cHoliday Wiper\u201d\nhttps://brica.de/alerts/alert/public/1252896/venus-121-apt-organization-operation-high-expert/"
            },
            {
                "date": "2019-03",
                "activity": "Operation \u201cGolden Bird\u201d\nhttps://brica.de/alerts/alert/public/1252896/venus-121-apt-organization-operation-high-expert/"
            },
            {
                "date": "2019-03",
                "activity": "Operation \u201cHigh Expert\u201d\nhttps://brica.de/alerts/alert/public/1252896/venus-121-apt-organization-operation-high-expert/"
            },
            {
                "date": "2019-04",
                "activity": "Operation \u201cBlack Banner\u201d\nhttps://brica.de/alerts/alert/public/1257351/venus-121-rocketman-campaign-operation-black-banner-apt-attack/"
            },
            {
                "date": "2019-05",
                "activity": "We recently discovered some interesting telemetry on this actor, and decided to dig deeper into ScarCruft\u2019s recent activity. This shows that the actor is still very active and constantly trying to elaborate its attack tools. Based on our telemetry, we can reassemble ScarCruft\u2019s binary infection procedure. It used a multi-stage binary infection to update each module effectively and evade detection.\nhttps://securelist.com/scarcruft-continues-to-evolve-introduces-bluetooth-harvester/90729/"
            },
            {
                "date": "2019-07",
                "activity": "Operation \u201cFractured Statue\u201d\nhttps://unit42.paloaltonetworks.com/the-fractured-statue-campaign-u-s-government-targeted-in-spear-phishing-attacks/"
            },
            {
                "date": "2019-09",
                "activity": "Operation \u201cDragon messenger\u201d\nhttps://blog.alyac.co.kr/attachment/cfile1.uf@99A46A405DC8E3031C9E2A.pdf"
            },
            {
                "date": "2020-01",
                "activity": "North Korean APT used VBA self decode technique to inject RokRat\nhttps://blog.malwarebytes.com/threat-analysis/2021/01/retrohunting-apt37-north-korean-apt-used-vba-self-decode-technique-to-inject-rokrat/"
            },
            {
                "date": "2020-03",
                "activity": "Operation \u201cSpy Cloud\u201d\nhttps://blog.alyac.co.kr/attachment/cfile8.uf@9977CF405E81A09B1C4CE2.pdf"
            },
            {
                "date": "2020-12",
                "activity": "North Korean software supply chain attack targets stock investors\nhttps://www.bleepingcomputer.com/news/security/north-korean-software-supply-chain-attack-targets-stock-investors/\nhttps://blog.alyac.co.kr/3489"
            },
            {
                "date": "2021-03",
                "activity": "ScarCruft surveilling North Korean defectors and human rights activists\nhttps://securelist.com/scarcruft-surveilling-north-korean-defectors-and-human-rights-activists/105074/"
            },
            {
                "date": "2021-04",
                "activity": "North Korean APT InkySquid Infects Victims Using Browser Exploits\nhttps://www.volexity.com/blog/2021/08/17/north-korean-apt-inkysquid-infects-victims-using-browser-exploits/\nhttps://www.volexity.com/blog/2021/08/24/north-korean-bluelight-special-inkysquid-deploys-rokrat/"
            },
            {
                "date": "2021-04",
                "activity": "Who\u2019s swimming in South Korean waters? Meet ScarCruft\u2019s Dolphin\nhttps://www.welivesecurity.com/2022/11/30/whos-swimming-south-korean-waters-meet-scarcrufts-dolphin/"
            },
            {
                "date": "2021-07",
                "activity": "New variant of Konni malware used in campaign targetting Russia\nhttps://blog.malwarebytes.com/threat-intelligence/2021/08/new-variant-of-konni-malware-used-in-campaign-targetting-russia/"
            },
            {
                "date": "2021-12",
                "activity": "North Korean hackers target Russian diplomats using New Year greetings\nhttps://therecord.media/north-korean-hackers-attack-russian-diplomats-using-new-year-greetings/\nhttps://blog.lumen.com/new-konni-campaign-targeting-russian-ministry-of-foreign-affairs/"
            },
            {
                "date": "2022-01",
                "activity": "KONNI evolves into stealthier RAT\nhttps://blog.malwarebytes.com/threat-intelligence/2022/01/konni-evolves-into-stealthier-rat/"
            },
            {
                "date": "2022-03",
                "activity": "The ink-stained trail of GOLDBACKDOOR\nhttps://stairwell.com/news/threat-research-the-ink-stained-trail-of-goldbackdoor/"
            },
            {
                "date": "2022-05",
                "activity": "Comrades in Arms? | North Korea Compromises Sanctioned Russian Missile Engineering Company\nhttps://www.sentinelone.com/labs/comrades-in-arms-north-korea-compromises-sanctioned-russian-missile-engineering-company/"
            },
            {
                "date": "2022-07",
                "activity": "Operation \u201cSTIFF#BIZON\u201d\nThe Securonix Threat Research (STR) team has been observing and investigating a new attack campaign exploiting high-value targets, including Czech Republic, Poland, and other countries.\nhttps://www.securonix.com/blog/stiffbizon-detection-new-attack-campaign-observed/"
            },
            {
                "date": "2022-09",
                "activity": "Meeting the \u201cMinistrer\u201d\nhttps://www.fortinet.com/blog/threat-research/konni-rat-phishing-email-deploying-malware"
            },
            {
                "date": "2022-10",
                "activity": "Internet Explorer 0-day exploited by North Korean actor APT37\nhttps://blog.google/threat-analysis-group/internet-explorer-0-day-exploited-by-north-korean-actor-apt37/"
            },
            {
                "date": "2023-01",
                "activity": "RedEyes hackers use new malware to steal data from Windows, phones\nhttps://www.bleepingcomputer.com/news/security/redeyes-hackers-use-new-malware-to-steal-data-from-windows-phones/"
            },
            {
                "date": "2023-02",
                "activity": "HWP Malware Using the Steganography Technique: RedEyes (ScarCruft)\nhttps://asec.ahnlab.com/en/48063/"
            },
            {
                "date": "2023-03",
                "activity": "CHM Malware Disguised as Security Email from a Korean Financial Company: Redeyes (Scarcruft)\nhttps://asec.ahnlab.com/en/49089/"
            },
            {
                "date": "2023-04",
                "activity": "RokRAT Malware Distributed Through LNK Files (*.lnk): RedEyes (ScarCruft)\nhttps://asec.ahnlab.com/en/51751/"
            },
            {
                "date": "2023-04",
                "activity": "ITG10 Likely Targeting South Korean Entities of Interest to the Democratic People\u2019s Republic of Korea (DPRK)\nhttps://securityintelligence.com/posts/itg10-targeting-south-korean-entities/"
            },
            {
                "date": "2023-05",
                "activity": "Tracking Traces of Malware Disguised as Hancom Office Document File and Being Distributed (RedEyes)\nhttps://asec.ahnlab.com/en/53377/"
            },
            {
                "date": "2023-05",
                "activity": "RedEyes Group Wiretapping Individuals (APT37)\nhttps://asec.ahnlab.com/en/54349/"
            },
            {
                "date": "2023-07",
                "activity": "Operation \u201cSTARK#MULE\u201d\nDetecting Ongoing STARK#MULE Attack Campaign Targeting Victims Using US Military Document Lures\nhttps://www.securonix.com/blog/detecting-ongoing-starkmule-attack-campaign-targeting-victims-using-us-military-document-lures/"
            },
            {
                "date": "2023-09",
                "activity": "Distribution of Backdoor via Malicious LNK: RedEyes (ScarCruft)\nhttps://asec.ahnlab.com/en/56756/"
            }
        ],
        "counter-operations": [
            {
                "date": "2019-12",
                "activity": "On December 27, a U.S. district court unsealed documents detailing work Microsoft has performed to disrupt cyberattacks from a threat group we call Thallium, which is believed to operate from North Korea. Our court case against Thallium, filed in the U.S. District Court for the Eastern District of Virginia, resulted in a court order enabling Microsoft to take control of 50 domains that the group uses to conduct its operations.\nhttps://blogs.microsoft.com/on-the-issues/2019/12/30/microsoft-court-action-against-nation-state-cybercrime/"
            },
            {
                "date": "2023-03",
                "activity": "The Unintentional Leak: A glimpse into the attack vectors of APT37\nhttps://www.zscaler.com/blogs/security-research/unintentional-leak-glimpse-attack-vectors-apt37"
            }
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf",
            "https://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "https://threatpost.com/scarcruft-apt-group-used-latest-flash-zero-day-in-two-dozen-attacks/118642/",
            "https://global.ahnlab.com/global/upload/download/techreport/%5BAhnLab%5D%20Red_Eyes_Hacking_Group_Report%20(1).pdf",
            "https://exchange.xforce.ibmcloud.com/threat-group/guid:ebf490b366269368dda52acaf34e7d38",
            "https://thorcert.notion.site/TTPs-ScarCruft-Tracking-Note-67acee42e4ba47398183db9fc7792aff"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0067/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=reaper"
        ],
        "uuid": "be6e7cee-7c2c-4298-941d-01b2106284e6",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "reaper_apt_37_ricochet_chollima_scarcruft",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.lighthousereports.nl/investigation/revealing-europes-nso",
            "date": "2022-08-28",
            "organization": "Lighthouse Reports",
            "author": "Lighthouse Reports",
            "title": "Revealing Europe's NSO",
            "categories": [
                "Hermit"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/italian-spyware-vendor-targets-users-in-italy-and-kazakhstan/",
            "date": "2022-06-23",
            "organization": "Google",
            "author": "Benoit Sevens",
            "title": "Spyware vendor targets users in Italy and Kazakhstan",
            "categories": [
                "Hermit"
            ]
        },
        {
            "data_url": "https://de.lookout.com/blog/hermit-spyware-discovery",
            "date": "2022-06-16",
            "organization": "",
            "author": "Justin Albrecht",
            "title": "Lookout Uncovers Android Spyware Deployed in Kazakhstan",
            "categories": [
                "Hermit"
            ]
        }
    ],
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
        }
    ]
};