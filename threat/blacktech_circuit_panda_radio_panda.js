var threatdata = {
    "name": "BlackTech, Circuit Panda, Radio Panda",
    "alias": "BlackTech, Circuit Panda, Radio Panda, Palmerworm, TEMP.Overboard, T-APT-03",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "BlackTech, Circuit Panda, Radio Panda",
        "names": [
            {
                "name": "BlackTech",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Circuit Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Radio Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Palmerworm",
                "name-giver": "Symantec"
            },
            {
                "name": "TEMP.Overboard",
                "name-giver": "FireEye"
            },
            {
                "name": "T-APT-03",
                "name-giver": "Tencent"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2010",
        "description": "(Trend Micro) BlackTech is a cyber espionage group operating against targets in East Asia, particularly Taiwan, and occasionally, Japan and Hong Kong. Based on the mutexes and domain names of some of their C&C servers, BlackTech\u2019s campaigns are likely designed to steal their target\u2019s technology.\n\nFollowing their activities and evolving tactics and techniques helped us uncover the proverbial red string of fate that connected three seemingly disparate campaigns: PLEAD, Shrouded Crossbow, and of late, Waterbear.",
        "observed-sectors": [
            "Construction",
            "Financial",
            "Government",
            "Healthcare",
            "Media",
            "Technology"
        ],
        "observed-countries": [
            "China",
            "Hong Kong",
            "Japan",
            "Taiwan",
            "USA"
        ],
        "tools": [
            "BendyBear",
            "BIFROST",
            "Bluether",
            "DRIGO",
            "Flagpro",
            "Gh0stTimes",
            "IconDown",
            "KIVARS",
            "PLEAD",
            "XBOW",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2010",
                "activity": "Operation \u201cShrouded Crossbow\u201d\nThis campaign, first observed in 2010, is believed to be operated by a well-funded group given how it appeared to have purchased the source code of the BIFROST backdoor, which the operators enhanced and created other tools from. Shrouded Crossbow targeted privatized agencies and government contractors as well as enterprises in the consumer electronics, computer, healthcare, and financial industries.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/"
            },
            {
                "date": "2012",
                "activity": "Operation \u201cPLEAD\u201d\nPLEAD is an information theft campaign with a penchant for confidential documents. Active since 2012, it has so far targeted Taiwanese government agencies and private organizations."
            },
            {
                "date": "2014",
                "activity": "Operation \u201cWaterbear\u201d\nWaterbear has actually been operating for a long time. The campaign\u2019s name is based on its malware\u2019s capability to equip additional functions remotely."
            },
            {
                "date": "2018-07",
                "activity": "ESET researchers have discovered a new malware campaign misusing stolen digital certificates.\nWe spotted this malware campaign when our systems marked several files as suspicious. Interestingly, the flagged files were digitally signed using a valid D-Link Corporation code-signing certificate. The exact same certificate had been used to sign non-malicious D-Link software; therefore, the certificate was likely stolen.\nhttps://www.welivesecurity.com/2018/07/09/certificates-stolen-taiwanese-tech-companies-plead-malware-campaign/"
            },
            {
                "date": "2019-04",
                "activity": "At the end of April 2019, ESET researchers utilizing ESET telemetry observed multiple attempts to deploy Plead malware in an unusual way. Specifically, the Plead backdoor was created and executed by a legitimate process named AsusWSPanel.exe. This process belongs to the Windows client for a cloud storage service called ASUS WebStorage.\nhttps://www.welivesecurity.com/2019/05/14/plead-malware-mitm-asus-webstorage/"
            },
            {
                "date": "2019-12",
                "activity": "[\u2026] in one of its recent campaigns, we\u2019ve discovered a piece of Waterbear payload with a brand-new purpose: hiding its network behaviors from a specific security product by API hooking techniques. In our analysis, we have discovered that the security vendor is APAC-based, which is consistent with BlackTech\u2019s targeted countries.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/waterbear-is-back-uses-api-hooking-to-evade-security-product-detection/"
            },
            {
                "date": "2020",
                "activity": "The addition of a US target to this campaign suggests the group is expanding campaigns to embrace a wider, more geographically diverse set of targets in their quest to steal information \u2013 although the full motivations remain unclear.\nhttps://www.zdnet.com/article/these-hackers-have-spent-months-hiding-out-in-company-networks-undetected/"
            },
            {
                "date": "2020-08",
                "activity": "BendyBear: Novel Chinese Shellcode Linked With Cyber Espionage Group BlackTech\nhttps://unit42.paloaltonetworks.com/bendybear-shellcode-blacktech/"
            },
            {
                "date": "2020-10",
                "activity": "Flagpro: The new malware used by BlackTech\nhttps://insight-jp.nttsecurity.com/post/102hf3q/flagpro-the-new-malware-used-by-blacktech"
            }
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0098/"
        ],
        "uuid": "8914b19b-9d8a-469f-8b95-37db9894e070",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blacktech_circuit_panda_radio_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/mangataurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Manga Taurus",
            "categories": [
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-report-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect",
            "categories": [
                "BPFDoor",
                "APT15",
                "APT31",
                "APT41",
                "APT9",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "DAGGER PANDA",
                "Earth Lusca",
                "HAFNIUM",
                "HAZY TIGER",
                "Inception Framework",
                "LOTUS PANDA",
                "QUILTED TIGER",
                "RedAlpha",
                "Red Dev 17",
                "Red Menshen",
                "Red Nue",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/palmerworm-blacktech-espionage-apt",
            "date": "2020-09-29",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Palmerworm: Espionage Gang Targets the Media, Finance, and Other Sectors",
            "categories": [
                "KIVARS",
                "PLEAD",
                "BlackTech"
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
            "data_url": "https://www.welivesecurity.com/2019/05/14/plead-malware-mitm-asus-webstorage/",
            "date": "2019-05-14",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "Plead malware distributed via MitM attacks at router level, misusing ASUS WebStorage",
            "categories": [
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/07/09/certificates-stolen-taiwanese-tech-companies-plead-malware-campaign/",
            "date": "2018-07-09",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "Certificates stolen from Taiwanese tech\u2011companies misused in Plead malware campaign",
            "categories": [
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/",
            "date": "2017-06-22",
            "organization": "Trend Micro",
            "author": "Lenart Bermejo",
            "title": "Following the Trail of BlackTech\u2019s Cyber Espionage Campaigns",
            "categories": [
                "PLEAD",
                "BlackTech"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "blacktech",
            "procedure_code": "g0098",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0098",
            "techniques": [
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
                    "procedure_description": "blacktech has obtained and used tools such as putty, snscan, and psexec for its operations.[23]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/003",
                    "technique_name": "obtain capabilities : code signing certificates",
                    "technique_description": "adversaries may buy and/or steal code signing certificates that can be used during targeting. code signing is the process of digitally signing executables and scripts to confirm the software author and guarantee that the code has not been altered or corrupted. code signing provides a level of authenticity for a program from the developer and a guarantee that the program has not been tampered with. users and/or security tools may trust a signed piece of code more than an unsigned piece of code even if they don't know who issued the certificate or who the author is.",
                    "procedure_description": "blacktech has used stolen code-signing certificates for its malicious payloads.[2]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/004",
                    "technique_name": "obtain capabilities : digital certificates",
                    "technique_description": "adversaries may buy and/or steal ssl/tls certificates that can be used during targeting. ssl/tls certificates are designed to instill trust. they include information about the key, information about its owner's identity, and the digital signature of an entity that has verified the certificate's contents are correct. if the signature is valid, and the person examining the certificate trusts the signer, then they know they can use that key to communicate with its owner.",
                    "procedure_description": "blacktech has used valid, stolen digital certificates for some of their malware and tools.[3]"
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
                    "procedure_description": "blacktech has exploited a buffer overflow vulnerability in microsoft internet information services (iis) 6.0, cve-2017-7269, in order to establish a new http or command and control (c2) server.[19]"
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
                    "procedure_description": "blacktech has used spearphishing e-mails with malicious password-protected archived files (zip or rar) to deliver malware.[45][46]"
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
                    "procedure_description": "blacktech has used spearphishing e-mails with links to cloud services to deliver malware.[27]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "blacktech has exploited multiple vulnerabilities for execution, including microsoft office vulnerabilities cve-2012-0158, cve-2014-6352, cve-2017-0199, and adobe flash cve-2015-5119.[27]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "blacktech has used built-in api functions.[42]"
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
                    "procedure_description": "blacktech has used e-mails with malicious links to lure victims into installing malware.[18]"
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
                    "procedure_description": "blacktech has used e-mails with malicious documents to lure victims into installing malware.[42][43]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "blacktech has used dll side loading by giving dlls hardcoded names and placing them in searched directories.[12]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "blacktech has used dll side loading by giving dlls hardcoded names and placing them in searched directories.[12]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "blacktech has used dll side loading by giving dlls hardcoded names and placing them in searched directories.[12]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/002",
                    "technique_name": "masquerading : right-to-left override",
                    "technique_description": "adversaries may abuse the right-to-left override (rtlo or rlo) character (u+202e) to disguise a string and/or file name to make it appear benign. rtlo is a non-printing unicode character that causes the text that follows it to be displayed in reverse. for example, a windows screensaver executable named march 25 \\u202excod.scr will display as march 25 rcs.docx. a javascript file named photo_high_re\\u202egnp.js will be displayed as photo_high_resj.png.",
                    "procedure_description": "blacktech has used right-to-left-override to obfuscate the filenames of malicious e-mail attachments.[4]"
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
                    "procedure_description": "blacktech has used the snscan tool to find other potential targets on victim networks.[11]"
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
                    "procedure_description": "blacktech has used putty for remote access.[2]"
                }
            ]
        }
    ]
};