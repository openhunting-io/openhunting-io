var threatdata = {
    "name": "Earth Lusca",
    "alias": "Earth Lusca, Bronze University, Charcoal Typhoon, Red Scylla",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Earth Lusca",
        "names": [
            {
                "name": "Earth Lusca",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Bronze University",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Charcoal Typhoon",
                "name-giver": "Microsoft"
            },
            {
                "name": "Red Scylla",
                "name-giver": "PWC"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage",
            "Financial gain"
        ],
        "first-seen": "2019",
        "description": "(Trend Micro) In this tech brief, we are going to expose a threat actor originating from China. Since the malware being used by the group, such as ShadowPad and Winnti, overlapped with other threat actors, its activities were attributed to other groups such as {{APT 41}}, Earth Baku, Sparkling Goblin, and the \u201cWinnti\u201d cluster in different reports. Our research reveals the different TTPs and the independent set of infrastructure that made us consider it a separate threat actor from the other known actors mentioned. Some reports named this threat actor \u201c{{RedHotel, TAG-22}}\u201d or \u201cFishmonger.\u201d We decided to separate it from the Winnti umbrella and track this threat actor under the name \u201cEarth Lusca.\u201d\nOur investigation of Earth Lusca started in mid-2021, when we discovered a campaign targeting customer service companies in China via a watering hole attack. Eventually, our monitoring and research lead to the publication of a blog post on a previously-unreported malware known as BIOPASS RAT. We continued monitoring the threat actor, eventually discovering a few more targeted operations against various targets worldwide. In this research, we will expose all of the groups TTPs and its current operations.\nDuring our investigation, we also managed to reach some of the victims and gather interesting information from compromised servers that were used as watering holes. We were able to learn Earth Lusca\u2019s reconnaissance and lateral movement techniques while working with our local incident response service team via our XDR system.",
        "observed-sectors": [
            "Casinos and Gambling",
            "Education",
            "Government",
            "Media",
            "Telecommunications",
            "Covid-19 research organizations, religious movements that are banned in Mainland China, pro-democracy and human rights political organizations and various cryptocurrency trading platforms"
        ],
        "observed-countries": [
            "Australia",
            "China",
            "France",
            "Germany",
            "Hong Kong",
            "Japan",
            "Mongolia",
            "Nepal",
            "Nigeria",
            "Philippines",
            "Taiwan",
            "Thailand",
            "UAE",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "AntSword",
            "BadPotato",
            "Behinder",
            "BIOPASS RAT",
            "Cobalt Strike",
            "Doraemon",
            "EarthWorm",
            "FRP",
            "fscan",
            "FunnySwitch",
            "HUC Port Banner Scanner",
            "lcx",
            "Mimikatz",
            "nbtscan",
            "PipeMon",
            "ShadowPad Winnti",
            "Winnti",
            "WinRAR"
        ],
        "information": [
            "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/earth-lusca-employs-sophisticated-infrastructure-varied-tools-and-techniques/technical-brief-delving-deep-an-analysis-of-earth-lusca-operations.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G1006/"
        ],
        "uuid": "fd9f43c9-80bf-4abc-9345-f5332e26eeaa",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "earth_lusca",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/a/earth-lusca-employs-sophisticated-infrastructure-varied-tools-and-techniques/technical-brief-delving-deep-an-analysis-of-earth-lusca-operations.pdf",
            "date": "2022-01-17",
            "organization": "Trend Micro",
            "author": "Joseph Chen",
            "title": "Delving Deep: An Analysis of Earth Lusca\u2019s Operations",
            "categories": [
                "BIOPASS",
                "Cobalt Strike",
                "FunnySwitch",
                "JuicyPotato",
                "ShadowPad",
                "Winnti",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/overwatch-exposes-aquatic-panda-in-possession-of-log-4-shell-exploit-tools",
            "date": "2021-12-29",
            "organization": "CrowdStrike",
            "author": "Benjamin Wiley",
            "title": "OverWatch Exposes AQUATIC PANDA in Possession of Log4Shell Exploit Tools During Hands-on Intrusion Attempt",
            "categories": [
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://media-exp1.licdn.com/dms/document/C561FAQHhWFRcWmdCPw/feedshare-document-pdf-analyzed/0/1639591145314?e=1658966400&v=beta&t=_uCcyEVg6b_VDiBTvWQIXtBOdQ1GQAAydqGyq62KA3E",
            "date": "2021-12-15",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Jolly Jellyfish",
            "categories": [
                "FishMaster",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/research/chasing-shadows.html",
            "date": "2021-12-08",
            "organization": "PWC UK",
            "author": "Adam Prescott",
            "title": "Chasing Shadows: A deep dive into the latest obfuscation methods being used by ShadowPad",
            "categories": [
                "ShadowPad",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWMFIi",
            "date": "2021-10-07",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Microsoft Digital Defense Report - October 2021",
            "categories": [
                "APT15",
                "APT31",
                "APT40",
                "APT5",
                "Earth Lusca",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/wp-content/uploads/2021/08/SentinelOne_-SentinelLabs_ShadowPad_WP_V2.pdf",
            "date": "2021-08-12",
            "organization": "Sentinel LABS",
            "author": "SentinelLabs",
            "title": "ShadowPad: A Masterpiece of Privately Sold Malware in Chinese Espionage",
            "categories": [
                "ShadowPad",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-group-tag-22-targets-nepal-philippines-taiwan",
            "date": "2021-07-08",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Chinese State-Sponsored Activity Group TAG-22 Targets Nepal, the Philippines, and Taiwan Using Winnti and Other Tooling",
            "categories": [
                "Cobalt Strike",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/backdoored-client-from-mongolian-ca-monpass",
            "date": "2021-07-01",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "Backdoored Client from Mongolian CA MonPass",
            "categories": [
                "Cobalt Strike",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://hello.global.ntt/-/media/ntt/global/insights/white-papers/the-operations-of-winnti-group.pdf",
            "date": "2021-04-29",
            "organization": "NTT",
            "author": "Threat Detection NTT Ltd.",
            "title": "The Operations of Winnti group",
            "categories": [
                "Cobalt Strike",
                "ShadowPad",
                "Spyder",
                "Winnti",
                "Earth Lusca"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "earth lusca",
            "procedure_code": "g1006",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G1006",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1595.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1595/002",
                    "technique_name": "active scanning : vulnerability scanning",
                    "technique_description": "adversaries may scan victims for vulnerabilities that can be used during targeting. vulnerability scans typically check if the configuration of a target host/application (ex: software and version) potentially aligns with the target of a specific exploit the adversary may seek to use.",
                    "procedure_description": "earth lusca has scanned for vulnerabilities in the public-facing servers of their targets.[6]"
                },
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
                    "procedure_description": "earth lusca has registered domains, intended to look like legitimate target domains, that have been used in watering hole attacks.[23]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/004",
                    "technique_name": "acquire infrastructure : server",
                    "technique_description": "adversaries may buy, lease, or rent physical servers\u00a0that can be used during targeting. use of servers allows an adversary to stage, launch, and execute an operation. during post-compromise activity, adversaries may utilize servers for various tasks, including for command and control. adversaries may use web servers to support support watering hole operations, as in drive-by compromise, or email servers to support phishing operations. instead of compromising a third-party server or renting a virtual private server, adversaries may opt to configure and run their own servers in support of operations.",
                    "procedure_description": "earth lusca has acquired multiple servers for some of their operations, using each server for a different role.[2]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/006",
                    "technique_name": "acquire infrastructure : web services",
                    "technique_description": "adversaries may register for web services\u00a0that can be used during targeting. a variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, adversaries can make it difficult to physically tie back operations to them.",
                    "procedure_description": "earth lusca has established github accounts to host their malware.[7]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/004",
                    "technique_name": "compromise infrastructure : server",
                    "technique_description": "adversaries may compromise third-party servers that can be used during targeting. use of servers allows an adversary to stage, launch, and execute an operation. during post-compromise activity, adversaries may utilize servers for various tasks, including for command and control. instead of purchasing a server or virtual private server, adversaries may compromise third-party servers in support of operations.",
                    "procedure_description": "earth lusca has used compromised web servers as part of their operational infrastructure.[3]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/006",
                    "technique_name": "compromise infrastructure : web services",
                    "technique_description": "adversaries may compromise access to third-party web services\u00a0that can be used during targeting. a variety of popular websites exist for legitimate users to register for web-based services, such as github, twitter, dropbox, google, sendgrid, etc. adversaries may try to take ownership of a legitimate user's access to a web service and use that web service as infrastructure in support of cyber operations. such web services can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, particularly when access is stolen from legitimate users, adversaries can make it difficult to physically tie back operations to them. additionally, leveraging compromised web-based email services may allow adversaries to leverage the trust associated with legitimate domains.",
                    "procedure_description": "earth lusca has compromised google drive repositories.[2]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/001",
                    "technique_name": "obtain capabilities : malware",
                    "technique_description": "adversaries may buy, steal, or download malware that can be used during targeting. malicious software can include payloads, droppers, post-compromise tools, backdoors, packers, and c2 protocols. adversaries may acquire malware to support their operations, obtaining a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "earth lusca has acquired and used a variety of malware, including cobalt strike.[6]"
                },
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
                    "procedure_description": "earth lusca has acquired and used a variety of open source tools.[44]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1608.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1608/001",
                    "technique_name": "stage capabilities : upload malware",
                    "technique_description": "adversaries may upload malware to third-party or adversary controlled infrastructure to make it accessible during targeting. malicious software can include payloads, droppers, post-compromise tools, backdoors, and a variety of other malicious content. adversaries may upload malware to support their operations, such as making a payload available to a victim network to enable ingress tool transfer by placing it on an internet accessible web server.",
                    "procedure_description": "earth lusca has staged malware and malicious files on compromised web servers, github, and google drive.[8]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "earth lusca has performed watering hole attacks.[25]"
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
                    "procedure_description": "earth lusca has compromised victims by directly exploiting vulnerabilities of public-facing servers, including those associated with microsoft exchange and oracle glassfish.[24]"
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
                    "procedure_description": "earth lusca has sent spearphishing emails to potential targets that contained a malicious link.[36]"
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
                    "procedure_description": "earth lusca has used powershell to execute commands.[79]"
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
                    "procedure_description": "earth lusca used vba scripts.[40]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/006",
                    "technique_name": "command and scripting interpreter : python",
                    "technique_description": "adversaries may abuse python commands and scripts for execution. python is a very popular scripting/programming language, with capabilities to perform many functions. python can be executed interactively from the command-line (via the python.exe interpreter) or via scripts (.py) that can be written and distributed to different systems. python code can also be compiled into binary executables.",
                    "procedure_description": "earth lusca used python scripts for port scanning or building reverse shells.[18]"
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
                    "procedure_description": "earth lusca has manipulated legitimate websites to inject malicious javascript code as part of their watering hole operations.[30]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "earth lusca used the command schtasks /create /sc onlogon /tn windowsupdatecheck /tr \"[file path]\" /ru system for persistence.[4]"
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
                    "procedure_description": "earth lusca  has sent spearphishing emails that required the user to click on a malicious link and subsequently open a decoy document with a malicious loader.[27]"
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
                    "procedure_description": "earth lusca required users to click on a malicious file for the loader to activate.[76]"
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
                    "procedure_description": "earth lusca used a vba script to execute wmi.[37]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1098/004",
                    "technique_name": "account manipulation : ssh authorized keys",
                    "technique_description": "adversaries may modify the ssh authorized_keys file to maintain persistence on a victim host. linux distributions and macos commonly use key-based authentication to secure the authentication process of ssh sessions for remote management. the authorized_keys file in ssh specifies the ssh keys that can be used for logging into the user account for which the file is configured. this file is usually found in the user's home directory under <user-home>/.ssh/authorized_keys. users may edit the system\u2019s ssh config file to modify the directives pubkeyauthentication and rsaauthentication to the value \"yes\" to ensure public key and rsa authentication are enabled. the ssh config file is usually located under /etc/ssh/sshd_config.",
                    "procedure_description": "earth lusca has dropped an ssh-authorized key in the /root/.ssh folder in order to access a compromised server with ssh.[9]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/012",
                    "technique_name": "boot or logon autostart execution : print processors",
                    "technique_description": "adversaries may abuse print processors to run malicious dlls during system boot for persistence and/or privilege escalation. print processors are dlls that are loaded by the print spooler service, spoolsv.exe, during boot.",
                    "procedure_description": "earth lusca has added the registry key hklm\\system\\controlset001\\control\\print\\environments\\windows x64\\print processors\\udprint\" /v driver /d \"spool.dll /f to load malware as a print processor.[3]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "earth lusca created a service using the command sc create \"sysupdate\" binpath= \"cmd /c start \"[file path]\"\"&&sc config \"sysupdate\" start= auto&&netstart sysupdate for persistence.[45]"
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
                    "procedure_description": "earth lusca has placed a malicious payload in %windir%\\system32\\oci.dll so it would be sideloaded by the msdtc service.[19]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "earth lusca used the command schtasks /create /sc onlogon /tn windowsupdatecheck /tr \"[file path]\" /ru system for persistence.[4]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "earth lusca has used the fodhelper uac bypass technique to gain elevated privileges.[28]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/012",
                    "technique_name": "boot or logon autostart execution : print processors",
                    "technique_description": "adversaries may abuse print processors to run malicious dlls during system boot for persistence and/or privilege escalation. print processors are dlls that are loaded by the print spooler service, spoolsv.exe, during boot.",
                    "procedure_description": "earth lusca has added the registry key hklm\\system\\controlset001\\control\\print\\environments\\windows x64\\print processors\\udprint\" /v driver /d \"spool.dll /f to load malware as a print processor.[3]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "earth lusca created a service using the command sc create \"sysupdate\" binpath= \"cmd /c start \"[file path]\"\"&&sc config \"sysupdate\" start= auto&&netstart sysupdate for persistence.[45]"
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
                    "procedure_description": "earth lusca has placed a malicious payload in %windir%\\system32\\oci.dll so it would be sideloaded by the msdtc service.[19]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053",
                    "technique_link": "https://attack.mitre.org/techniques/T1053",
                    "technique_name": "scheduled task/job",
                    "technique_description": "adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time. a task can also be scheduled on a remote system, provided the proper authentication is met (ex: rpc and file and printer sharing in windows environments). scheduling a task on a remote system typically may require being a member of an admin or otherwise privileged group on the remote system.",
                    "procedure_description": "earth lusca used the command schtasks /create /sc onlogon /tn windowsupdatecheck /tr \"[file path]\" /ru system for persistence.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "earth lusca has used the fodhelper uac bypass technique to gain elevated privileges.[28]"
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
                    "procedure_description": "earth lusca has used certutil to decode a string into a cabinet file.[79]"
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
                    "procedure_description": "earth lusca has placed a malicious payload in %windir%\\system32\\oci.dll so it would be sideloaded by the msdtc service.[19]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "earth lusca used the command move [file path] c:\\windows\\system32\\spool\\prtprocs\\x64\\spool.dll to move and register a malicious dll name as a windows print processor, which eventually was loaded by the print spooler service.[51]"
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
                    "procedure_description": "earth lusca modified the registry using the command reg add \"hkey_current_user\\environment\" /v userinitmprlogonscript /t reg_sz /d \"[file path]\" for persistence.[52]"
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
                    "procedure_description": "earth lusca used base64 to encode strings.[107]"
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
                    "procedure_description": "earth lusca has used steganography to hide shellcode in a bmp image file.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "earth lusca has used mshta.exe to load an hta script within a malicious .lnk file.[15]"
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
                    "procedure_description": "earth lusca has used procdump to obtain the hashes of credentials by dumping the memory of the lsass process.[26]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/006",
                    "technique_name": "os credential dumping : dcsync",
                    "technique_description": "adversaries may attempt to access credentials and other sensitive information by abusing a windows domain controller's application programming interface (api)    to simulate the replication process from a remote domain controller using a technique called dcsync.",
                    "procedure_description": "earth lusca has used a dcsync command with mimikatz to retrieve credentials from an exploited controller.[10]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1482",
                    "technique_link": "https://attack.mitre.org/techniques/T1482",
                    "technique_name": "domain trust discovery",
                    "technique_description": "adversaries may attempt to gather information on domain trust relationships that may be used to identify lateral movement opportunities in windows multi-domain/forest environments. domain trusts provide a mechanism for a domain to allow access to resources based on the authentication procedures of another domain. domain trusts allow the users of the trusted domain to access resources in the trusting domain. the information discovered may help the adversary conduct sid-history injection, pass the ticket, and kerberoasting. domain trusts can be enumerated using the dsenumeratedomaintrusts() win32 api call, .net methods, and ldap. the windows utility nltest is known to be used by adversaries to enumerate domain trusts.",
                    "procedure_description": "earth lusca has used nltest to obtain information about domain controllers.[16]"
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
                    "procedure_description": "earth lusca has used tasklist to obtain information from a compromised host.[87]"
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
                    "procedure_description": "earth lusca used the command powershell \"get-eventlog -logname security -newest 500 | where {$_.eventid -eq 4624} | format-list -property * | findstr \"address\"\" to find the network information of successfully logged-in accounts to discovery addresses of other machines. earth lusca has also used multiple scanning tools to discover other machines within the same compromised network.[35]"
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
                    "procedure_description": "earth lusca used the command ipconfig to obtain information about network configurations.[76]"
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
                    "procedure_description": "earth lusca employed a powershell script called rdpconnectionparser to read and filter the windows event log \"microsoft-windows-terminalservices-rdpclient/operational\"(event id 1024) to obtain network information from rdp connections. earth lusca has also used netstat from a compromised system to obtain network connection information.[30]"
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
                    "procedure_description": "earth lusca collected information on user accounts via the whoami command.[55]"
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
                    "procedure_description": "earth lusca has used tasklist to obtain information from a compromised host.[16]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1210",
                    "technique_link": "https://attack.mitre.org/techniques/T1210",
                    "technique_name": "exploitation of remote services",
                    "technique_description": "adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code.\u00a0a common goal for post-compromise exploitation of remote services is for lateral movement to enable access to a remote system.",
                    "procedure_description": "earth lusca has used mimikatz to exploit a domain controller via the zerologon exploit (cve-2020-1472).[11]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "earth lusca has used winrar to compress stolen files into an archive prior to exfiltration.[27]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "earth lusca adopted cloudflare as a proxy for compromised servers.[13]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1567/002",
                    "technique_name": "exfiltration over web service : exfiltration to cloud storage",
                    "technique_description": "adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the internet.",
                    "procedure_description": "earth lusca has used the megacmd tool to upload stolen files from a victim network to mega.[10]"
                }
            ]
        }
    ]
};