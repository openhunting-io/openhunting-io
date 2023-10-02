var threatdata = {
    "name": "SaintBear, Lorec53",
    "alias": "SaintBear, Ember Bear, TA471, UNC2589, Lorec53, UAC-0056, Nodaria, FROZENVISTA, Storm-0587",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "SaintBear, Lorec53",
        "names": [
            {
                "name": "SaintBear",
                "name-giver": "ThreatBook"
            },
            {
                "name": "Ember Bear",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TA471",
                "name-giver": "Proofpoint"
            },
            {
                "name": "UNC2589",
                "name-giver": "FireEye"
            },
            {
                "name": "Lorec53",
                "name-giver": "NSFOCUS"
            },
            {
                "name": "UAC-0056",
                "name-giver": "CERT-UA"
            },
            {
                "name": "Nodaria",
                "name-giver": "Symantec"
            },
            {
                "name": "FROZENVISTA",
                "name-giver": "Google"
            },
            {
                "name": "Storm-0587",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(NSFOCUS) In July 2021, several phishing documents created in Georgian were discovered by NSFOCUS Security Labs. In these phishing documents, the attackers used current political hotspots in Georgia to create bait and deliver a secret stealing Trojan to specifically targeted victims aiming to steal various documents from their computers. Correlation analysis shows that this phishing campaign and an earlier phishing attack against the Ukrainian government came from the same unknown threat entity, most likely composed of Russian hackers. From April to July of 2021, the group launched several phishing attacks applying a large number of network resources located in Russia. In order to facilitate ongoing tracking, NSFOCUS Security Labs has tentatively dubbed the hacker group Lorec53 by extracting special names from related Trojans.",
        "observed-sectors": [
            "Energy",
            "Financial",
            "Government",
            "Media",
            "Transportation"
        ],
        "observed-countries": [
            "Georgia",
            "Ukraine",
            "USA"
        ],
        "tools": [
            "Cobalt Strike",
            "Graphiron",
            "GraphSteel",
            "GrimPlant",
            "OutSteel",
            "SaintBot"
        ],
        "operations": [
            {
                "date": "2022-02",
                "activity": "Spear Phishing Attacks Target Organizations in Ukraine, Payloads Include the Document Stealer OutSteel and the Downloader SaintBot\nhttps://unit42.paloaltonetworks.com/ukraine-targeted-outsteel-saintbot/"
            },
            {
                "date": "2022-03",
                "activity": "Ukraine\u2019s CERT Warns Threat Actors For Fake AV Updates\nhttps://www.socinvestigation.com/ukraines-cert-warns-russian-threat-actors-for-fake-av-updates/"
            },
            {
                "date": "2022-03",
                "activity": "Cobalt Strikes again: UAC-0056 continues to target Ukraine in its latest campaign\nhttps://blog.malwarebytes.com/threat-intelligence/2022/07/cobalt-strikes-again-uac-0056-continues-to-target-ukraine-in-its-latest-campaign/"
            },
            {
                "date": "2022-10",
                "activity": "Graphiron: New Russian Information Stealing Malware Deployed Against Ukraine\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/nodaria-ukraine-infostealer"
            }
        ],
        "information": [
            "https://nsfocusglobal.com/apt-retrospection-lorec53-an-active-russian-hack-group-launched-phishing-attacks-against-georgian-government/",
            "https://www.crowdstrike.com/blog/who-is-ember-bear/",
            "https://services.google.com/fh/files/blogs/google_fog_of_war_research_report.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G1003/"
        ],
        "uuid": "8f37f59a-226c-4059-9222-c5ad769f31ef",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "saintbear_lorec53",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.google/threat-analysis-group/fog-of-war-how-the-ukraine-conflict-transformed-the-cyber-threat-landscape/",
            "date": "2023-02-16",
            "organization": "Google",
            "author": "Shane Huntley",
            "title": "Fog of war: how the Ukraine conflict transformed the cyber threat landscape",
            "categories": [
                "APT28",
                "Ghostwriter",
                "SaintBear",
                "Sandworm",
                "Turla"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/nodaria-ukraine-infostealer",
            "date": "2023-02-08",
            "organization": "Broadcom",
            "author": "Threat Hunter Team",
            "title": "Graphiron: New Russian Information Stealing Malware Deployed Against Ukraine",
            "categories": [
                "Graphiron",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/nascentursa/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Nascent Ursa",
            "categories": [
                "Saint Bot",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://malpedia.caad.fkie.fraunhofer.de/details/win.graphsteel",
            "date": "2022-04-07",
            "organization": "Malpedia",
            "author": "Malpedia",
            "title": "Malpedia Page for GraphSteel",
            "categories": [
                "GraphSteel",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/research/elephant-malware-targeting-ukrainian-orgs/",
            "date": "2022-04-04",
            "organization": "Intezer",
            "author": "Joakim Kennedy",
            "title": "Elephant Framework Delivered in Phishing Attacks Against Ukrainian Organizations",
            "categories": [
                "GraphSteel",
                "GrimPlant",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2022/04/new-uac-0056-activity-theres-a-go-elephant-in-the-room/",
            "date": "2022-04-01",
            "organization": "Malwarebytes",
            "author": "Ankur Saini",
            "title": "New UAC-0056 activity: There\u2019s a Go Elephant in the room",
            "categories": [
                "GrimPlant",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/38374",
            "date": "2022-03-28",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "UAC-0056 cyberattack on Ukrainian state authorities using GraphSteel and GrimPlant malware (CERT-UA#4293)",
            "categories": [
                "GraphSteel",
                "GrimPlant",
                "SaintBear"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/blog/threat-actor-uac-0056-targeting-ukraine-with-fake-translation-software/",
            "date": "2022-03-15",
            "organization": "SentinelOne",
            "author": "Amitai Ben Shushan Ehrlich",
            "title": "Threat Actor UAC-0056 Targeting Ukraine with Fake Translation Software",
            "categories": [
                "Cobalt Strike",
                "GraphSteel",
                "GrimPlant",
                "SaintBear"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ember bear",
            "procedure_code": "g1003",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G1003",
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
                    "procedure_description": "ember bear has obtained and used open source scripts from github.[45]"
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
                    "procedure_description": "ember bear has stolen legitimate certificates to sign malicious payloads.[3]"
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
                    "procedure_description": "ember bear has sent spearphishing emails containing malicious attachments in the form of pdfs, word documents, javascript files, and control panel file (cpl) executables.[78]"
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
                    "procedure_description": "ember bear has sent spearphishing emails containing malicious links.[39]"
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
                    "procedure_description": "ember bear has used powershell to download and execute malicious code.[81]"
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
                    "procedure_description": "ember bear had used cmd.exe and windows script host (wscript) to execute malicious code.[112]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "ember bear has used javascript to execute malicious code on a victim's machine.[31]"
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
                    "procedure_description": "ember bear has exploited microsoft office vulnerability cve-2017-11882.[46]"
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
                    "procedure_description": "ember bear has attempted to lure users to click on a malicious link within a spearphishing email.[30]"
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
                    "procedure_description": "ember bear has attempted to lure victims into executing malicious files.[79]"
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
                    "procedure_description": "ember bear has executed a batch script designed to disable windows defender on a compromised host.[34]"
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
                    "procedure_description": "ember bear has used an open source batch script to modify windows defender registry keys.[53]"
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
                    "procedure_description": "ember bear has obfuscated malware to help avoid detection.[114]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "ember bear has added extra spaces between javascript code characters to increase the overall file size.[13]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "ember bear has packed malware to help avoid detection.[38]"
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
                    "procedure_description": "ember bear has obfuscated malicious scripts to help avoid detection.[29]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "ember bear has used stolen certificates from electrum technologies gmbh to sign payloads.[29]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/002",
                    "technique_name": "system binary proxy execution : control panel",
                    "technique_description": "adversaries may abuse control.exe to proxy execution of malicious payloads. the windows control panel process binary (control.exe) handles execution of control panel items, which are utilities that allow users to view and adjust computer settings.",
                    "procedure_description": "ember bear has used control panel files (cpl), delivered via e-mail, for execution.[6]"
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
                    "procedure_description": "ember bear has used tools to download malicious code.[164]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102",
                    "technique_link": "https://attack.mitre.org/techniques/T1102",
                    "technique_name": "web service",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for relaying data to/from a compromised system. popular websites and social media acting as a mechanism for c2 may give a significant amount of cover due to the likelihood that hosts within a network are already communicating with them prior to a compromise. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. web service providers commonly use ssl/tls encryption, giving adversaries an added level of protection.",
                    "procedure_description": "ember bear has used discord's content delivery network (cdn) to deliver malware and malicious scripts to a compromised host.[14]"
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