var threatdata = {
    "name": "Desert Falcons",
    "alias": "Desert Falcons, APT-C-23, Two-tailed Scorpion, Arid Viper, ATK 66, TAG-CT1, Mantis",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Desert Falcons",
        "names": [
            {
                "name": "Desert Falcons",
                "name-giver": "Kaspersky"
            },
            {
                "name": "APT-C-23",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "Two-tailed Scorpion",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "Arid Viper",
                "name-giver": "Palo Alto"
            },
            {
                "name": "ATK 66",
                "name-giver": "Thales"
            },
            {
                "name": "TAG-CT1",
                "name-giver": "Recorded Future"
            },
            {
                "name": "Mantis",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "[Gaza]"
        ],
        "sponsor": "Hamas",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Kaspersky) The Global Research and Analysis Team (GReAT) at Kaspersky Lab has uncovered new targeted attacks in the Middle East. Native Arabic-speaking cybercriminals have built advanced methods and tools to deliver, hide and operate malware that they have also developed themselves. This malware was originally discovered during an investigation of one of the attacks in the Middle East.\n\nPolitical activities and news are being actively used by the cybercriminals to entice victims into opening files and attachments. Content has been created with professionalism, with well-designed visuals and interesting, familiar details for the victims, as if the information were long awaited.\n\nThe victims of the attacks to date have been carefully chosen; they are active and influential in their respective cultures, but also attractive to the cybercriminals as a source of intelligence and a target for extortion.\n\nThe attackers have been operating for more than two years now, running different campaigns, targeting different types of victims and different types of devices (including Windows- and Android-based). We suspect that at least 30 people distributed across different countries are operating the campaigns.",
        "observed-sectors": [
            "Critical infrastructure",
            "Defense",
            "Education",
            "Government",
            "Media",
            "Transportation"
        ],
        "observed-countries": [
            "Albania",
            "Algeria",
            "Australia",
            "Belgium",
            "Bosnia and Herzegovina",
            "Canada",
            "China",
            "Cyprus",
            "Denmark",
            "Egypt",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "India",
            "Iran",
            "Iraq",
            "Israel",
            "Italy",
            "Japan",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Libya",
            "Mali",
            "Mauritania",
            "Mexico",
            "Morocco",
            "Netherlands",
            "Norway",
            "Pakistan",
            "Palestine",
            "Portugal",
            "Qatar",
            "Romania",
            "Russia",
            "Saudi Arabia",
            "South Korea",
            "Sudan",
            "Sweden",
            "Syria",
            "Taiwan",
            "Turkey",
            "UAE",
            "Ukraine",
            "USA",
            "Uzbekistan",
            "Yemen",
            "Zimbabwe"
        ],
        "tools": [
            "Barb(ie) Downloader",
            "BarbWire",
            "Desert Scorpion",
            "FrozenCell",
            "GlanceLove",
            "GnatSpy",
            "KasperAgent",
            "Micropsia",
            "PyMICROPSIA",
            "VAMP",
            "ViperRAT",
            "VolatileVenom"
        ],
        "operations": [
            {
                "date": "2015-01",
                "activity": "Operation \u201cArid Viper\u201d\nOperation Arid Viper attacked five Israeli-based organizations in the government, transport, infrastructure, military, and academic industries, and one organization in Kuwait using spear-phishing emails that dropped a pornographic video on a victim\u2019s computer.\nhttps://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/sexually-explicit-material-used-as-lures-in-cyber-attacks?linkId=12425812\nhttps://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-operation-arid-viper.pdf"
            },
            {
                "date": "2015-09",
                "activity": "Proofpoint researchers recently intercepted and analyzed phishing emails distributing Arid Viper malware payloads with some noteworthy updates.\nAs with the originally documented examples, these messages were part of narrow campaigns targeting specific industry verticals: telecoms, high tech, and business services, primarily in Israel.\nhttps://www.proofpoint.com/us/threat-insight/post/Operation-Arid-Viper-Slithers-Back-Into-View"
            },
            {
                "date": "2016-07",
                "activity": "Around July last year, more than a 100 Israeli servicemen were hit by a cunning threat actor. The attack compromised their devices and exfiltrated data to the attackers\u2019 command and control server. In addition, the compromised devices were pushed Trojan updates, which allowed the attackers to extend their capabilities. The operation remains active at the time of writing this post, with attacks reported as recently as February 2017.\nhttps://securelist.com/breaking-the-weakest-link-of-the-strongest-chain/77562/"
            },
            {
                "date": "2017-04",
                "activity": "ThreatConnect has identified a KASPERAGENT malware campaign leveraging decoy Palestinian Authority documents. The samples date from April \u2013 May 2017, coinciding with the run up to the May 2017 Palestinian Authority elections.\nhttps://threatconnect.com/kasperagent-malware-campaign/"
            },
            {
                "date": "2017-04",
                "activity": "We identified one specific spear phishing campaign launched against targets within Palestine, and specifically against Palestinian law enforcement agencies. This campaign started in April 2017, using a spear phishing campaign to deliver the MICROPSIA payload in order to remotely control infected systems.\nhttps://blog.talosintelligence.com/2017/06/palestine-delphi.html"
            },
            {
                "date": "2017-09",
                "activity": "FrozenCell is the mobile component of a multi-platform attack we\u2019ve seen a threat actor known as \u201cTwo-tailed Scorpion/APT-C-23,\u201d use to spy on victims through compromised mobile devices and desktops.\nhttps://blog.lookout.com/frozencell-mobile-threat"
            },
            {
                "date": "2017-12",
                "activity": "Recently, Trend Micro researchers came across a new mobile malware family which we have called GnatSpy. We believe that this is a new variant of VAMP, indicating that the threat actors behind APT-C-23 are still active and continuously improving their product. Some C&C domains from VAMP were reused in newer GnatSpy variants, indicating that these attacks are connected. We detect this new family as ANDROIDOS_GNATSPY.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/new-gnatspy-mobile-malware-family-discovered/"
            },
            {
                "date": "2018 Early",
                "activity": "Lookout researchers have identified a new, highly targeted surveillanceware family known as Desert Scorpion in the Google Play Store. Lookout notified Google of the finding and Google removed the app immediately while also taking action on it in Google Play Protect.\nhttps://blog.lookout.com/desert-scorpion-google-play"
            },
            {
                "date": "2020-04",
                "activity": "We have discovered a previously unreported version of Android spyware used by APT-C-23, a threat group also known as Two-tailed Scorpion and mainly targeting the Middle East. ESET products detect the malware as Android/SpyC23.A.\nhttps://www.welivesecurity.com/2020/09/30/aptc23-group-evolves-its-android-spyware/"
            },
            {
                "date": "2020-04",
                "activity": "Operation \u201cBearded Barbie\u201d\nAPT-C-23 Campaign Targeting Israeli Officials\nhttps://www.cybereason.com/blog/operation-bearded-barbie-apt-c-23-campaign-targeting-israeli-officials"
            },
            {
                "date": "2020-12",
                "activity": "PyMICROPSIA: New Information-Stealing Trojan from AridViper\nhttps://unit42.paloaltonetworks.com/pymicropsia/"
            },
            {
                "date": "2021-09",
                "activity": "Arid Viper APT targets Palestine with new wave of politically themed phishing attacks, malware\nhttps://blog.talosintelligence.com/2022/02/arid-viper-targets-palestine.html"
            },
            {
                "date": "2021-11",
                "activity": "New Variants of Android Spyware Linked to APT C-23 Enhanced for Stealth and Persistence, Sophos Research Reveals\nhttps://www.sophos.com/en-us/press-office/press-releases/2021/11/new-variants-of-android-spyware-linked-to-apt-c-23-enhanced-for-stealth-and-persistence.aspx"
            },
            {
                "date": "2022-09",
                "activity": "Mantis: New Tooling Used in Attacks Against Palestinian Targets\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/mantis-palestinian-attacks"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-02",
                "activity": "Operation \u201cRebound\u201d\nIDF (Israel Defense Force) and ISA (Israel Security Agency AKA \u201cShin Bet\u201d) conducted a joint operation to take down a Hamas operation targeting IDF soldiers.\nhttps://research.checkpoint.com/2020/hamas-android-malware-on-idf-soldiers-this-is-how-it-happened/"
            },
            {
                "date": "2021-04",
                "activity": "Taking Action Against Hackers in Palestine\nhttps://about.fb.com/news/2021/04/taking-action-against-hackers-in-palestine/"
            }
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064309/The-Desert-Falcons-targeted-attacks.pdf",
            "https://team-cymru.com/blog/2020/12/16/mapping-out-aridviper-infrastructure-using-augurys-malware-addon/",
            "https://about.fb.com/wp-content/uploads/2021/04/Technical-threat-report-Arid-Viper-April-2021.pdf"
        ],
        "uuid": "d337940e-7ef9-4b4e-8c04-c6472d6b8972",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "desert_falcons",
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
        }
    ]
};