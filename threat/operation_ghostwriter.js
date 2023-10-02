var threatdata = {
    "name": "Operation Ghostwriter",
    "alias": "Operation Ghostwriter, UNC1151, TA445, UAC-0051, PUSHCHA, DEV-0257, Storm-0257",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-05",
    "all_data": {
        "actor": "Operation Ghostwriter",
        "names": [
            {
                "name": "Operation Ghostwriter",
                "name-giver": "FireEye"
            },
            {
                "name": "UNC1151",
                "name-giver": "FireEye"
            },
            {
                "name": "TA445",
                "name-giver": "Proofpoint"
            },
            {
                "name": "UAC-0051",
                "name-giver": "CERT-UA"
            },
            {
                "name": "PUSHCHA",
                "name-giver": "Google"
            },
            {
                "name": "DEV-0257",
                "name-giver": "Microsoft"
            },
            {
                "name": "Storm-0257",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Belarus"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage",
            "Sabotage and destruction"
        ],
        "first-seen": "2017",
        "description": "(FireEye) Mandiant Threat Intelligence has tied together several information operations that we assess with moderate confidence comprise part of a broader influence campaign\u2014ongoing since at least March 2017\u2014aligned with Russian security interests. The operations have primarily targeted audiences in Lithuania, Latvia, and Poland with narratives critical of the North Atlantic Treaty Organization\u2019s (NATO) presence in Eastern Europe, occasionally leveraging other themes such as anti-U.S. and COVID-19-related narratives as part of this broader anti-NATO agenda. We have dubbed this campaign \u201cGhostwriter.\u201d\n\nMany, though not all of the incidents we suspect to be part of the Ghostwriter campaign, appear to have leveraged website compromises or spoofed email accounts to disseminate fabricated content, including falsified news articles, quotes, correspondence and other documents designed to appear as coming from military officials and political figures in the target countries.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Government",
            "Media"
        ],
        "observed-countries": [
            "Colombia",
            "Estonia",
            "France",
            "Germany",
            "Ireland",
            "Kuwait",
            "Latvia",
            "Lithuania",
            "Poland",
            "Switzerland",
            "Ukraine"
        ],
        "tools": [
            "Cobalt Strike",
            "HALFSHELL",
            "Impacket",
            "RADIOSTAR",
            "VIDEOKILLER"
        ],
        "operations": [
            {
                "date": "2021",
                "activity": "Ghostwriter Update: Cyber Espionage Group UNC1151 Likely Conducts Ghostwriter Influence Activity\nhttps://content.fireeye.com/web-assets/rpt-unc1151-ghostwriter-update"
            },
            {
                "date": "2021-03",
                "activity": "German Parliament targeted again by Russian state hackers\nhttps://www.bleepingcomputer.com/news/security/german-parliament-targeted-again-by-russian-state-hackers/"
            },
            {
                "date": "2022-01",
                "activity": "Ukraine suspects group linked to Belarus intelligence over cyberattack\nhttps://www.reuters.com/world/europe/exclusive-ukraine-suspects-group-linked-belarus-intelligence-over-cyberattack-2022-01-15/"
            },
            {
                "date": "2022-02",
                "activity": "Ukraine links Belarusian hackers to phishing targeting its military\nhttps://www.bleepingcomputer.com/news/security/ukraine-links-belarusian-hackers-to-phishing-targeting-its-military/"
            },
            {
                "date": "2022-02",
                "activity": "In the past several days, we\u2019ve seen increased targeting of people in Ukraine, including Ukrainian military and public figures\nhttps://about.fb.com/news/2022/02/security-updates-ukraine/"
            },
            {
                "date": "2022-02",
                "activity": "Operation \u201cAsylum Ambuscade\u201d\nState Actor Uses Compromised Private Ukrainian Military Emails to Target European Governments and Refugee Movement\nhttps://www.proofpoint.com/us/blog/threat-insight/asylum-ambuscade-state-actor-uses-compromised-private-ukrainian-military-emails\nhttps://www.welivesecurity.com/2023/06/08/asylum-ambuscade-crimeware-or-cyberespionage/"
            },
            {
                "date": "2022-02",
                "activity": "Ghostwriter/UNC1151, a Belarusian threat actor, has conducted credential phishing campaigns over the past week against Polish and Ukrainian government and military organizations.\nhttps://blog.google/threat-analysis-group/update-threat-landscape-ukraine/"
            },
            {
                "date": "2022-03",
                "activity": "GhostWriter APT targets state entities of Ukraine with Cobalt Strike Beacon\nhttps://securityaffairs.co/wordpress/129527/apt/ghostwriter-apt-targets-state-entities-of-ukraine-with-cobalt-strike-beacon.html"
            },
            {
                "date": "2022-03",
                "activity": "Ghostwriter, a Belarusian threat actor, recently introduced a new capability into their credential phishing campaigns. In mid-March, a security researcher released a blog post detailing a 'Browser in the Browser' phishing technique.\nhttps://blog.google/threat-analysis-group/tracking-cyber-activity-eastern-europe/"
            },
            {
                "date": "2022-04",
                "activity": "Ghostwriter, a Belarusian threat actor, has remained active during the course of the war and recently resumed targeting of Gmail accounts via credential phishing.\nhttps://blog.google/threat-analysis-group/update-on-cyber-activity-in-eastern-europe/"
            },
            {
                "date": "2022-04",
                "activity": "Malicious campaigns target government, military and civilian entities in Ukraine, Poland\nhttps://blog.talosintelligence.com/malicious-campaigns-target-entities-in-ukraine-poland/"
            }
        ],
        "counter-operations": [
            {
                "date": "2022 Early",
                "activity": "We\u2019ve seen a further spike in compromise attempts aimed at members of the Ukrainian military by Ghostwriter, a threat actor tracked by the security community.\nhttps://about.fb.com/wp-content/uploads/2022/04/Meta-Quarterly-Adversarial-Threat-Report_Q1-2022.pdf"
            }
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/blog/pdfs/Ghostwriter-Influence-Campaign.pdf",
            "https://www.prevailion.com/diving-deep-into-unc1151s-infrastructure-ghostwriter-and-beyond/",
            "https://www.mandiant.com/resources/unc1151-linked-to-belarus-government",
            "https://services.google.com/fh/files/blogs/google_fog_of_war_research_report.pdf",
            "https://blog.google/threat-analysis-group/ukraine-remains-russias-biggest-cyber-focus-in-2023/"
        ],
        "uuid": "163127e3-2716-4f45-b24e-49dc8987d9e2",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_ghostwriter",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "operation ghost",
            "procedure_code": "c0023",
            "procedure_type": "campaign",
            "procedure_link": "https://attack.mitre.org/campaigns/C0023",
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
                    "procedure_description": "for operation ghost, apt29 registered domains for use in c2 including some crafted to appear as existing legitimate domains.[53]"
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
                    "procedure_description": "for operation ghost, apt29 used new strains of malware including fatduke, miniduke, regduke, and polyglotduke.[26]"
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
                    "procedure_description": "for operation ghost, apt29 registered twitter accounts to host c2 nodes.[15]"
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
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/003",
                    "technique_name": "event triggered execution : windows management instrumentation event subscription",
                    "technique_description": "adversaries may establish persistence and elevate privileges by executing malicious content triggered by a windows management instrumentation (wmi) event subscription. wmi can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. examples of events that may be subscribed to are the wall clock time, user loging, or the computer's uptime.",
                    "procedure_description": "during operation ghost, apt29 used wmi event subscriptions to establish persistence for malware.[14]"
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
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/003",
                    "technique_name": "event triggered execution : windows management instrumentation event subscription",
                    "technique_description": "adversaries may establish persistence and elevate privileges by executing malicious content triggered by a windows management instrumentation (wmi) event subscription. wmi can be used to install event filters, providers, consumers, and bindings that execute code when a defined event occurs. examples of events that may be subscribed to are the wall clock time, user loging, or the computer's uptime.",
                    "procedure_description": "during operation ghost, apt29 used wmi event subscriptions to establish persistence for malware.[14]"
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
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/003",
                    "technique_name": "obfuscated files or information : steganography",
                    "technique_description": "adversaries may use steganography techniques in order to prevent the detection of hidden information. steganographic techniques can be used to hide data in digital media such as images, audio tracks, video clips, or text files.",
                    "procedure_description": "during operation ghost, apt29 used steganography to hide payloads inside valid images.[14]"
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
                    "procedure_description": "for operation ghost, apt29 used stolen administrator credentials for lateral movement on compromised networks.[14]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/002",
                    "technique_name": "data obfuscation : steganography",
                    "technique_description": "adversaries may use steganographic techniques to hide command and control traffic to make detection efforts more difficult. steganographic techniques can be used to hide data in digital messages that are transferred between systems. this hidden information can be used for command and control of compromised systems. in some cases, the passing of files embedded using steganography, such as image or document files, can be used for command and control.",
                    "procedure_description": "during operation ghost, apt29 used steganography to hide the communications between the implants and their c&c servers.[6]"
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
                    "procedure_description": "for operation ghost, apt29 used social media platforms to hide communications to c2 servers.[37]"
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