var threatdata = {
    "name": "Donot Team",
    "alias": "Donot Team, APT-C-35, SectorE02",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "Donot Team",
        "names": [
            {
                "name": "Donot Team",
                "name-giver": "ASERT"
            },
            {
                "name": "APT-C-35",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "SectorE02",
                "name-giver": "ThreatRecon"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(ASERT) In late January 2018, ASERT discovered a new modular malware framework we call \u201cyty\u201d. The framework shares a striking resemblance to the EHDevel framework. We believe with medium confidence that a team we call internally as \u201cDonot Team\u201d is responsible for the new malware and will resume targeting of South Asia.\n\nIn a likely effort to disguise the malware and its operations, the authors coded several references into the malware for football\u2014it is unclear whether they mean American football or soccer. The theme may allow the network traffic to fly under the radar.\n\nThe actors use false personas to register their domains instead of opting for privacy protection services.  Depending on the registrar service chosen, this could be seen as another cost control measure.  The actors often used typo-squatting to slightly alter a legitimate domain name. In contrast, the registration information used accurate spelling, possibly indicating the domain naming was intentional, typos included. Each unique registrant usually registered only a few domains, but mistakenly reused phone numbers or the registration data portrayed a similar pattern across domains.",
        "observed-sectors": [
            "Embassies",
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "Argentina",
            "Bangladesh",
            "India",
            "Nepal",
            "Pakistan",
            "Philippines",
            "Sri Lanka",
            "Thailand",
            "Togo",
            "UAE",
            "UK"
        ],
        "tools": [
            "BackConfig",
            "EHDevel",
            "yty"
        ],
        "operations": [
            {
                "date": "2019-03",
                "activity": "From March to July this year, the ThreatRecon team noticed a spear phishing campaign by the SectorE02 group going on against the Government of Pakistan and organizations there related to defense and intelligence.\nhttps://threatrecon.nshc.net/2019/08/02/sectore02-updates-yty-framework-in-new-targeted-campaign-against-pakistan-government/"
            },
            {
                "date": "2019-04",
                "activity": "StealJob: New Android Malware\nRecently, we have observed a large-scale upgrade of its malicious Android APK framework to make it more stable and practical. Since the new APK framework is quite different from the one used in the past, we named it as StealJob since \u201cjob\u201d is frequently used in the code.\nhttps://ti.360.net/blog/articles/stealjob-new-android-malware-used-by-donot-apt-group-en/"
            },
            {
                "date": "2019-12",
                "activity": "Togo: Prominent activist targeted with Indian-made spyware linked to notorious hacker group\nhttps://www.amnesty.org/en/latest/news/2021/10/togo-activist-targeted-with-spyware-by-notorious-hacker-group/"
            },
            {
                "date": "2020-05",
                "activity": "An Indicator From Twitter Brings The Donot Android Espionage Group Back Into Focus\nhttps://www.riskiq.com/blog/external-threat-management/donot-mobile-malware-espionage/"
            },
            {
                "date": "2020",
                "activity": "ESET researchers take a deep look into recent attacks carried out by Donot Team throughout 2020 and 2021, targeting government and military entities in several South Asian countries\nhttps://www.welivesecurity.com/2022/01/18/donot-go-do-not-respawn/"
            },
            {
                "date": "2022-08",
                "activity": "APT-C-35 Gets a New Upgrade\nhttps://blog.morphisec.com/apt-c-35-new-windows-framework-revealed"
            },
            {
                "date": "2023-06",
                "activity": "DoNot APT Elevates its Tactics by Deploying Malicious Android Apps on Google Play Store\nhttps://www.cyfirma.com/outofband/donot-apt-elevates-its-tactics-by-deploying-malicious-android-apps-on-google-play-store/"
            }
        ],
        "information": [
            "https://ti.360.net/blog/articles/donot-group-is-targeting-pakistani-businessman-working-in-china-en/",
            "https://www.netscout.com/blog/asert/donot-team-leverages-new-modular-malware-framework-south-asia",
            "http://blog.ptsecurity.com/2019/11/studying-donot-team.html"
        ],
        "uuid": "15dd32b1-f4c1-4a96-bf89-02ff532b1540",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "donot_team",
    "analysis": null,
    "articles": [],
    "mitre": [
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