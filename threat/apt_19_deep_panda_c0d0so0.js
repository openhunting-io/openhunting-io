var threatdata = {
    "name": "APT 19, Deep Panda, C0d0so0",
    "alias": "APT 19, Deep Panda, Codoso, Sunshop Group, TG-3551, Bronze Firestone, Pupa",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-04",
    "all_data": {
        "actor": "APT 19, Deep Panda, C0d0so0",
        "names": [
            {
                "name": "APT 19",
                "name-giver": "Mandiant"
            },
            {
                "name": "Deep Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Codoso",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Sunshop Group",
                "name-giver": "FireEye"
            },
            {
                "name": "TG-3551",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Firestone",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Pupa",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "A group likely composed of freelancers, with some degree of sponsorship by the Chinese government. (FireEye)",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "APT 19 is a Chinese-based threat group that has targeted a variety of industries, including defense, finance, energy, pharmaceutical, telecommunications, high tech, education, manufacturing, and legal services. In 2017, a phishing campaign was used to target seven law and investment firms.\n\nSome analysts track APT19, {{DarkHydrus, LazyMeerkat}}, {{Turbine Panda, APT 26, Shell Crew, WebMasters, KungFu Kittens}} as the same group, but it is unclear from open source information if the groups are the same.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "High-Tech",
            "Manufacturing",
            "Pharmaceutical",
            "Telecommunications",
            "Think Tanks",
            "political dissidents and Forbes"
        ],
        "observed-countries": [
            "Australia",
            "USA"
        ],
        "tools": [
            "C0d0so0",
            "Cobalt Strike",
            "Derusbi",
            "EmpireProject",
            "Fire Chili",
            "a 0-day for Flash"
        ],
        "operations": [
            {
                "date": "2013-03",
                "activity": "Breach of the US Department of Labor website\nOn April 30, 2013, CrowdStrike was alerted to a strategic web compromise on a US Department of Labor website that was redirecting visitors to an attacker\u2019s infrastructure. Eight other compromised sites were also reported to be similarly compromised with the data suggesting that this campaign began in mid-March.\nhttps://www.crowdstrike.com/blog/department-labor-strategic-web-compromise/"
            },
            {
                "date": "2014 Early",
                "activity": "Breaches of National Security Think Tanks\nThis actor, who was engaged in targeting and collection of Southeast Asia policy information, suddenly began targeting individuals with a tie to Iraq/Middle East issues. This is undoubtedly related to the recent Islamic State of Iraq and the Levant (ISIS) takeover of major parts of Iraq and the potential disruption for major Chinese oil interests in that country. In fact, Iraq happens to be the fifth-largest source of crude oil imports for China and the country is the largest foreign investor in Iraq\u2019s oil sector.\nhttps://www.crowdstrike.com/blog/deep-thought-chinese-targeting-national-security-think-tanks/"
            },
            {
                "date": "2014-03",
                "activity": "Breach of the US Office of Personnel Management\nOPM investigates a breach of its computer networks dating back to March 2014. Authorities trace the intrusion to China. OPM offers employees free credit monitoring and assures employees that no personal data appears to have been stolen.\nhttps://krebsonsecurity.com/2015/06/catching-up-on-the-opm-breach/"
            },
            {
                "date": "2014-03",
                "activity": "Breach of USIS\nIt emerges that USIS, a background check provider for the U.S. Department of Homeland Security, was hacked. USIS offers 27,000 DHS employees credit monitoring through AllClearID (full disclosure: AllClear is an advertiser on this blog). Investigators say Chinese are hackers responsible, and that the attackers broke in by exploiting a vulnerability in an enterprise management software product from SAP.\nhttps://www.nextgov.com/cybersecurity/2015/05/third-party-software-was-entry-point-background-check-system-hack/112354/"
            },
            {
                "date": "2014-04",
                "activity": "Breach of health insurance company Anthem\nhttps://krebsonsecurity.com/2015/02/anthem-breach-may-have-started-in-april-2014/"
            },
            {
                "date": "2014-07",
                "activity": "Sakula Malware to Target Organizations in Multiple Sectors\nOver the last few months, the CrowdStrike Intelligence team has been tracking a campaign of highly targeted events focused on entities in the U.S. Defense Industrial Base (DIB), healthcare, government, and technology sectors. This campaign infected victims with Sakula malware variants that were signed with stolen certificates.\nhttps://www.crowdstrike.com/blog/ironman-deep-panda-uses-sakula-malware-target-organizations-multiple-sectors/"
            },
            {
                "date": "2014-11",
                "activity": "Breaches of Australian media organizations ahead of G20\n\u201cWe started to see activity over the last couple of weeks targeting Australian media organizations and we believe that\u2019s related to the G20,\u201d Dmitri Alperovitch, co-founder of US computer security company CrowdStrike, told the ABC\u2019s 7.30 program.\nhttps://www.abc.net.au/news/2014-11-13/g20-china-affliliated-hackers-breaches-australian-media/5889442"
            },
            {
                "date": "2014-12",
                "activity": "Breach of KeyPoint Government Solutions\nKeyPoint Government Solutions, which took over the bulk of federal background checks after one of its competitors was hacked, also recently suffered a computer network breach, officials said Thursday.\nhttps://www.washingtonpost.com/business/economy/keypoint-suffers-network-breach-thousands-of-fed-workers-could-be-affected/2014/12/18/e6c7146c-86e1-11e4-a702-fa31ff4ae98e_story.html"
            },
            {
                "date": "2015-02",
                "activity": "Attack using Forbes.com as Watering Hole\nMethod: Compromise of Forbes.com, in which the site was used to compromise selected targets via a watering hole to a zero-day Adobe Flash exploit.\nhttps://www.darkreading.com/attacks-breaches/chinese-hacking-group-codoso-team-uses-forbescom-as-watering-hole-/d/d-id/1319059"
            },
            {
                "date": "2015-04",
                "activity": "Operation \u201cKingslayer\u201d\nRSA Research investigated the source of suspicious, observed beaconing thought to be associated with targeted malware. In the course of this tac-tical hunt for unidentified code, RSA discovered a sophisticated attack on a software supply-chain involving a Trojan inserted in otherwise legitimate software; software that is typically used by enterprise system administrators.\nhttps://www.rsa.com/content/dam/premium/en/white-paper/kingslayer-a-supply-chain-attack.pdf"
            },
            {
                "date": "2015-05",
                "activity": "Breach of health insurance company Premera Blue Cross\nPremera Blue Cross, one of the insurance carriers that participates in the Federal Employees Health Benefits Program, discloses a breach affecting 11 million customers. Federal auditors at OPM warned Premera three weeks prior to the breach that its network security procedures were inadequate.\nhttps://www.seattletimes.com/business/local-business/feds-warned-premera-about-security-flaws-before-breach/"
            },
            {
                "date": "2015-05",
                "activity": "Breach of health insurance company Carefirst Blue Cross\nCareFirst BlueCross BlueShield on Wednesday said it had been hit with a data breach that compromised the personal information on approximately 1.1 million customers. There are indications that the same attack methods may have been used in this intrusion as with breaches at Anthem and Premera, incidents that collectively involved data on more than 90 million Americans.\nhttps://krebsonsecurity.com/2015/05/carefirst-blue-cross-breach-hits-1-1m/"
            },
            {
                "date": "2016-01",
                "activity": "Several Watering Hole Attacks\nhttps://unit42.paloaltonetworks.com/new-attacks-linked-to-c0d0s0-group/"
            },
            {
                "date": "2017-05",
                "activity": "Phishing campaign targeting at least seven global law and investment firms.\nMethod: In early May, the phishing lures leveraged RTF attachments that exploited the Microsoft Windows vulnerability described in CVE 2017-0199. Toward the end of May, APT19 switched to using macro-enabled Microsoft Excel (XLSM) documents. In the most recent versions, APT19 added an application whitelisting bypass to the XLSM documents. At least one observed phishing lure delivered a Cobalt Strike payload.\nhttps://www.fireeye.com/blog/threat-research/2017/06/phished-at-the-request-of-counsel.html"
            },
            {
                "date": "2017-06",
                "activity": "Attacks on Australian law firms and research body\nhttps://www.abc.net.au/news/2017-12-01/chinese-hackers-targeting-australian-law-firms/9213520"
            },
            {
                "date": "2022-03",
                "activity": "Chinese hacking group uses new 'Fire Chili' Windows rootkit\nhttps://www.bleepingcomputer.com/news/security/chinese-hacking-group-uses-new-fire-chili-windows-rootkit/"
            }
        ],
        "counter-operations": [
            {
                "date": "2017-08",
                "activity": "US Arrests Chinese Man Involved With Sakula Malware Used in OPM and Anthem Hacks\nhttps://www.bleepingcomputer.com/news/security/us-arrests-chinese-man-involved-with-sakula-malware-used-in-opm-and-anthem-hacks/"
            },
            {
                "date": "2018-10",
                "activity": "U.S. Indicts Chinese Hacker-Spies in Conspiracy to Steal Aerospace Secrets\nhttps://gizmodo.com/u-s-indicts-chinese-hacker-spies-in-conspiracy-to-stea-1830111695"
            },
            {
                "date": "2019-05",
                "activity": "Chinese national indicted for 2015 Anthem breach\nhttps://www.cyberscoop.com/anthem-breach-indictment-chinese-national/"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0009/",
            "https://attack.mitre.org/groups/G0073/"
        ],
        "uuid": "58c7e347-341c-4446-bf03-81fc1f7d9254",
        "last-card-change": "2022-04-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_19_deep_panda_c0d0so0",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "deep panda",
            "procedure_code": "g0009",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0009",
            "techniques": [
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
                    "procedure_description": "deep panda has used powershell scripts to download and execute programs in memory, without writing to disk.[74]"
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
                    "procedure_description": "the deep panda group is known to utilize wmi for lateral movement.[35]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.008",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/008",
                    "technique_name": "event triggered execution : accessibility features",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features. windows contains accessibility features that may be launched with a key combination before a user has logged in (ex: when the user is on the windows logon screen). an adversary can modify the way these programs are launched to get a command prompt or backdoor without logging in to the system.",
                    "procedure_description": "deep panda has used the sticky-keys technique to bypass the rdp login screen on remote systems during intrusions.[10]"
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
                    "procedure_description": "deep panda uses web shells on publicly accessible web servers to access victim networks.[11]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.008",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/008",
                    "technique_name": "event triggered execution : accessibility features",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features. windows contains accessibility features that may be launched with a key combination before a user has logged in (ex: when the user is on the windows logon screen). an adversary can modify the way these programs are launched to get a command prompt or backdoor without logging in to the system.",
                    "procedure_description": "deep panda has used the sticky-keys technique to bypass the rdp login screen on remote systems during intrusions.[10]"
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
                    "procedure_description": "deep panda has used -w hidden to conceal powershell windows by setting the windowstyle parameter to hidden. [16]"
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
                    "procedure_description": "deep panda has updated and modified its malware, resulting in different hash values that evade detection.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "deep panda has used regsvr32.exe to execute a server variant of derusbi in victim networks.[16]"
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
                    "procedure_description": "deep panda uses the microsoft tasklist utility to list processes running on systems.[75]"
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
                    "procedure_description": "deep panda has used ping to identify other machines of interest.[31]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "deep panda uses net.exe to connect to network shares using net use commands with compromised credentials.[23]"
                }
            ]
        }
    ]
};