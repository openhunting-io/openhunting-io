var threatdata = {
    "name": "Energetic Bear, Dragonfly",
    "alias": "Energetic Bear, Dragonfly, Crouching Yeti, Group 24, Koala Team, Iron Liberty, TG-4192, Electrum, ATK 6, ITG15, Bromine, Ghost Blizzard",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "Energetic Bear, Dragonfly",
        "names": [
            {
                "name": "Energetic Bear",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Dragonfly",
                "name-giver": "Symantec"
            },
            {
                "name": "Crouching Yeti",
                "name-giver": "Kaspersky"
            },
            {
                "name": "Group 24",
                "name-giver": "Talos"
            },
            {
                "name": "Koala Team",
                "name-giver": "iSight"
            },
            {
                "name": "Iron Liberty",
                "name-giver": "SecureWorks"
            },
            {
                "name": "TG-4192",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Electrum",
                "name-giver": "Dragos"
            },
            {
                "name": "ATK 6",
                "name-giver": "Thales"
            },
            {
                "name": "ITG15",
                "name-giver": "IBM"
            },
            {
                "name": "Bromine",
                "name-giver": "Microsoft"
            },
            {
                "name": "Ghost Blizzard",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "sponsor": "State-sponsored, GRU",
        "motivation": [
            "Sabotage and destruction"
        ],
        "first-seen": "2010",
        "description": "Dragonfly is a cyberespionage group that has been active since at least 2011. They initially targeted defense and aviation companies but shifted to focus on the energy sector in early 2013. They have also targeted companies related to industrial control systems.\n\nAccording to Kaspersky, Crouching Yeti has been operating since at least 2010 and has infected roughly 2,800 targets in 38 countries, and in industries as diverse as education and pharmaceuticals.\n\nA similar group emerged in 2015 and was identified by Symantec as {{Berserk Bear, Dragonfly 2.0}}. There is debate over the extent of the overlap between Dragonfly and Dragonfly 2.0, but there is sufficient evidence to lead to these being tracked as two separate groups.",
        "observed-sectors": [
            "Aviation",
            "Construction",
            "Defense",
            "Education",
            "Energy",
            "Industrial",
            "IT",
            "Manufacturing",
            "Oil and gas",
            "Pharmaceutical"
        ],
        "observed-countries": [
            "Canada",
            "France",
            "Germany",
            "Greece",
            "Italy",
            "Norway",
            "Poland",
            "Romania",
            "Russia",
            "Serbia",
            "Spain",
            "Turkey",
            "UK",
            "Ukraine",
            "USA"
        ],
        "tools": [
            "Commix",
            "CrackMapExec",
            "Dirsearch",
            "Dorshel",
            "Goodor",
            "Havex RAT",
            "Hello EK",
            "Heriplor",
            "Impacket",
            "Industroyer",
            "Inveigh",
            "Karagany",
            "LightsOut EK",
            "Listrix",
            "nmap",
            "PHPMailer",
            "PsExec",
            "SMBTrap",
            "sqlmap",
            "Subbrute",
            "Sublist3r",
            "Sysmain",
            "Wpscan",
            "WSO"
        ],
        "operations": [
            {
                "date": "2013-02",
                "activity": "Spam campaign\nThe Dragonfly group has used at least three infection tactics against targets in the energy sector. The earliest method was an email spear phishing campaign, which saw selected executives and senior employees in target companies receive emails containing a malicious PDF attachment. Infected emails had one of two subject lines: \u201cThe account\u201d or \u201cSettlement of delivery problem\u201d.\nhttps://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf"
            },
            {
                "date": "2013-06",
                "activity": "Watering Hole Attacks using Lightsout\nIn June 2013, the attackers shifted their focus to watering hole attacks. They compromised a number of energy-related websites and injected an iframe into each of them. This iframe then redirected visitors to another compromised legitimate website hosting the Lightsout exploit kit. This in turn exploited either Java or Internet Explorer in order to drop Oldrea or Karagany on the victim\u2019s computer."
            },
            {
                "date": "2013-09",
                "activity": "Watering Hole Attacks using Hello\nIn September 2013, Dragonfly began using a new version of this exploit kit, known as the Hello exploit kit. The landing page for this kit contains JavaScript which fingerprints the system, identifying installed browser plugins. The victim is then redirected to a URL which in turn determines the best exploit to use based on the information collected."
            },
            {
                "date": "2013",
                "activity": "Trojanized software\nThe most ambitious attack vector used by Dragonfly was the compromise of a number of legitimate software packages. Three different ICS equipment providers were targeted and malware was inserted into the software bundles they had made available for download on their websites."
            },
            {
                "date": "2014-02",
                "activity": "LightsOut EK Targets Energy Sector\nLate last year, the story broke that threat actors were targeting the energy sector with Remote Access Tools and Intelligence gathering malware.  It would seem that the attackers responsible for this threat are back for more.  This particular APT struck late February between 2/24-2/26.\nhttps://www.zscaler.com/blogs/research/lightsout-ek-targets-energy-sector"
            },
            {
                "date": "2015-12",
                "activity": "Attack on Energy Companies in the Ukraine\nAccording to a statement posted this week on the official website of the Ukrainian security service SBU, Russian special services allegedly planted malware on the networks of several regional power companies. The malicious software is said to have been discovered by employees of the SBU.\nThe SBU said the attackers also flooded the targeted companies\u2019 technical support phone lines. The agency removed the malware and launched an investigation.\nJust before Christmas, power outages were reported in the Ivano-Frankivsk Oblast region of Ukraine. The outages were blamed on outsiders who remotely tampered with automatic control systems. The power company responsible for the region also reported that its call center suffered a technical failure caused by a barrage of calls.\nhttps://ssu.gov.ua/sbu/control/uk/publish/article?art_id=170951&cat_id=39574"
            },
            {
                "date": "2016",
                "activity": "This report by Kaspersky Lab ICS CERT presents information on identified servers that have been infected and used by the group. The report also includes the findings of an analysis of several webservers compromised by the Energetic Bear group during 2016 and in early 2017.\nhttps://securelist.com/energetic-bear-crouching-yeti/85345/"
            },
            {
                "date": "2016-12",
                "activity": "Power outage at Ukrenergo in the Ukraine\nPreliminary findings indicate that workstations and Supervisory Control and Data Acquisition (SCADA) systems, linked to the 330 kilowatt sub-station \u201cNorth\u201d, were influenced by external sources outside normal parameters, Ukrenergo said in comments emailed to Reuters.\nhttps://www.reuters.com/article/us-ukraine-cyber-attack-energy-idUSKBN1521BA\nhttps://dragos.com/wp-content/uploads/CrashOverride-01.pdf\nhttps://dragos.com/wp-content/uploads/CRASHOVERRIDE.pdf"
            },
            {
                "date": "2017-04",
                "activity": "Breach of EirGrid in the UK\nThe breach of the Vodafone network allowed the hackers to create a type of wiretap known as Generic Routing Encapsulation (GRE) to tunnel into EirGrid\u2019s Vodafone router located in Shotton.\nhttps://www.independent.ie/irish-news/statesponsored-hackers-targeted-eirgrid-electricity-network-in-devious-attack-36005921.html"
            },
            {
                "date": "2017-05",
                "activity": "Watering Hole Attack on Turkish critical infrastructure\nThrough our web crawling network, we were able to determine that a website belonging to a Turkish energy company was being used in a watering hole attack targeting people associated with Turkish critical infrastructure. Compromised via a supply chain attack, the site was injected with SMB credential-harvesting malware.\nhttps://www.riskiq.com/blog/labs/energetic-bear/"
            },
            {
                "date": "2020-03",
                "activity": "Breach of San Francisco airport\nhttps://www.zdnet.com/article/russian-state-hackers-behind-san-francisco-airport-hack/"
            },
            {
                "date": "2020-09",
                "activity": "The Russian state-sponsored APT actor has targeted dozens of SLTT government and aviation networks, attempted intrusions at several SLTT organizations, successfully compromised network infrastructure, and as of October 1, 2020, exfiltrated data from at least two victim servers.\nhttps://us-cert.cisa.gov/ncas/alerts/aa20-296a"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-10",
                "activity": "Six Russian GRU Officers Charged in Connection with Worldwide Deployment of Destructive Malware and Other Disruptive Actions in Cyberspace\nhttps://www.justice.gov/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and"
            }
        ],
        "information": [
            "https://www.symantec.com/blogs/threat-intelligence/dragonfly-energy-sector-cyber-attacks",
            "https://www.kaspersky.com/resource-center/threats/crouching-yeti-energetic-bear-malware-threat",
            "https://www.sans.org/reading-room/whitepapers/ICS/impact-dragonfly-malware-industrial-control-systems-36672",
            "https://exchange.xforce.ibmcloud.com/threat-group/388909715625410bd48078d0ddbc29c4"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0035/"
        ],
        "uuid": "a1492ea6-162c-46a9-a2d5-9618641b5ab2",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "energetic_bear_dragonfly",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "dragonfly",
            "procedure_code": "g0035",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0035",
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
                    "procedure_description": "dragonfly has scanned targeted systems for vulnerable citrix and microsoft exchange services.[5]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1591.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1591/002",
                    "technique_name": "gather victim org information : business relationships",
                    "technique_description": "adversaries may gather information about the victim's business relationships that can be used during targeting. information about an organization\u2019s business relationships may include a variety of details, including second or third-party organizations/domains (ex: managed service providers, contractors, etc.) that have connected (and potentially elevated) network access. this information may also reveal supply chains and shipment paths for the victim\u2019s hardware and software resources.",
                    "procedure_description": "dragonfly has collected open source information to identify relationships between organizations for targeting purposes.[2]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1598.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1598/002",
                    "technique_name": "phishing for information : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing messages with a malicious attachment to elicit sensitive information that can be used during targeting. spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: establish accounts or compromise accounts) and/or sending multiple, seemingly urgent messages.",
                    "procedure_description": "dragonfly has used spearphishing with microsoft office attachments to enable harvesting of user credentials.[4]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1598.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1598/003",
                    "technique_name": "phishing for information : spearphishing link",
                    "technique_description": "adversaries may send spearphishing messages with a malicious link to elicit sensitive information that can be used during targeting. spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: establish accounts or compromise accounts) and/or sending multiple, seemingly urgent messages.",
                    "procedure_description": "dragonfly has used spearphishing with pdf attachments containing malicious links that redirected to credential harvesting websites.[9]"
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
                    "procedure_description": "dragonfly has registered domains for targeting intended victims.[22]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/003",
                    "technique_name": "acquire infrastructure : virtual private server",
                    "technique_description": "adversaries may rent virtual private servers (vpss)\u00a0that can be used during targeting. there exist a variety of cloud service providers that will sell virtual machines/containers as a service. by utilizing a vps, adversaries can make it difficult to physically tie back operations to them. the use of cloud infrastructure can also make it easier for adversaries to rapidly provision, modify, and shut down their infrastructure.",
                    "procedure_description": "dragonfly has acquired vps infrastructure for use in malicious campaigns.[3]"
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
                    "procedure_description": "dragonfly has compromised legitimate websites to host c2 and malware modules.[2]"
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
                    "procedure_description": "dragonfly has obtained and used tools such as mimikatz, crackmapexec, and psexec.[43]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1608.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1608/004",
                    "technique_name": "stage capabilities : drive-by target",
                    "technique_description": "adversaries may prepare an operational environment to infect systems that visit a website over the normal course of browsing. endpoint systems may be compromised through browsing to adversary controlled sites, as in drive-by compromise. in such cases, the user's web browser is typically targeted for exploitation (often not requiring any extra user interaction once landing on the site), but adversaries may also set up websites for non-exploitation behavior such as application access token. prior to drive-by compromise, adversaries must stage resources needed to deliver that exploit to users who browse to an adversary controlled site. drive-by content can be staged on adversary controlled infrastructure that has been acquired (acquire infrastructure) or previously compromised (compromise infrastructure).",
                    "procedure_description": "dragonfly has compromised websites to redirect traffic and to host exploit kits.[6]"
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
                    "procedure_description": "dragonfly has compromised targets via strategic web compromise (swc) utilizing a custom exploit kit.[22][23][24]"
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
                    "procedure_description": "dragonfly has conducted sql injection attacks, exploited vulnerabilities cve-2019-19781 and cve-2020-0688 for citrix and ms exchange, and cve-2018-13379 for fortinet vpns.[23]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "dragonfly has used vpns and outlook web access (owa) to maintain access to victim networks.[14][15]"
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
                    "procedure_description": "dragonfly has sent emails with malicious attachments to gain initial access.[75]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1195.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1195/002",
                    "technique_name": "supply chain compromise : compromise software supply chain",
                    "technique_description": "adversaries may manipulate application software prior to receipt by a final consumer for the purpose of data or system compromise. supply chain compromise of software can take place in a number of ways, including manipulation of the application source code, manipulation of the update/distribution mechanism for that software, or replacing compiled releases with a modified version.",
                    "procedure_description": "dragonfly has placed trojanized installers for control system software on legitimate vendor app stores.[7][8]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "dragonfly has compromised user credentials and used valid accounts for operations.[18][19][20]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "dragonfly has used the command line for execution.[15]"
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
                    "procedure_description": "dragonfly has used powershell scripts for execution.[77][78]"
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
                    "procedure_description": "dragonfly has used various types of scripting to perform operations, including batch scripts.[105]"
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
                    "procedure_description": "dragonfly has used various types of scripting to perform operations, including python scripts. the group was observed installing python 2.7 on a victim.[16]"
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
                    "procedure_description": "dragonfly has exploited cve-2011-0611 in adobe flash player to gain execution on a targeted system.[44]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "dragonfly has used scheduled tasks to automatically log out of created accounts every 8 hours as well as to execute malicious files.[51]"
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
                    "procedure_description": "dragonfly has used various forms of spearphishing in attempts to get users to open malicious attachments.[74]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1098",
                    "technique_link": "https://attack.mitre.org/techniques/T1098",
                    "technique_name": "account manipulation",
                    "technique_description": "adversaries may manipulate accounts to maintain access to victim systems. account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups. these actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials.",
                    "procedure_description": "dragonfly has added newly created accounts to the administrators group to maintain elevated access.[5]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "dragonfly has added the registry value ntdll to the registry run key to establish persistence.[76]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "dragonfly has created accounts on victims, including administrator accounts, some of which appeared to be tailored to each individual staging target.[7]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1133",
                    "technique_link": "https://attack.mitre.org/techniques/T1133",
                    "technique_name": "external remote services",
                    "technique_description": "adversaries may leverage external-facing remote services to initially access and/or persist within a network. remote services such as vpns, citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. there are often remote service gateways that manage connections and credential authentication for these services. services such as windows remote management and vnc can also be used externally.",
                    "procedure_description": "dragonfly has used vpns and outlook web access (owa) to maintain access to victim networks.[14][15]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "dragonfly has used scheduled tasks to automatically log out of created accounts every 8 hours as well as to execute malicious files.[51]"
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
                    "procedure_description": "dragonfly has commonly created web shells on victims' publicly accessible email and web servers, which they used to maintain access to a victim network and download additional malicious files.[12]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "dragonfly has compromised user credentials and used valid accounts for operations.[18][19][20]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "dragonfly has added the registry value ntdll to the registry run key to establish persistence.[76]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "dragonfly has used scheduled tasks to automatically log out of created accounts every 8 hours as well as to execute malicious files.[51]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "dragonfly has compromised user credentials and used valid accounts for operations.[18][19][20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/002",
                    "technique_name": "hide artifacts : hidden users",
                    "technique_description": "adversaries may use hidden users to hide the presence of user accounts they create or modify. administrators may want to hide users when there are many user accounts on a given system or if they want to hide their administrative or other management accounts from other users.",
                    "procedure_description": "dragonfly has modified the registry to hide created user accounts.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "dragonfly has disabled host-based firewalls. the group has also globally opened port 3389.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "dragonfly has cleared windows event logs and other logs produced by tools they used, including system, security, terminal services, remote services, and audit logs. the actors also deleted specific registry keys.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "dragonfly has deleted many of its files used during operations as part of cleanup, including removing applications and deleting screenshots.[57]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "dragonfly has created accounts disguised as legitimate backup and service accounts as well as an email administration account.[13]"
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
                    "procedure_description": "dragonfly has modified the registry to perform multiple techniques through the use of reg.[51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1221",
                    "technique_link": "https://attack.mitre.org/techniques/T1221",
                    "technique_name": "template injection",
                    "technique_description": "adversaries may create or modify references in user document templates to conceal malicious code or force authentication attempts. for example, microsoft\u2019s office open xml (ooxml) specification defines an xml-based format for office documents (.docx, xlsx, .pptx) to replace older binary formats (.doc, .xls, .ppt). ooxml files are packed together zip archives compromised of various xml files, referred to as parts, containing properties that collectively define how a document is rendered.",
                    "procedure_description": "dragonfly has injected smb urls into malicious word spearphishing attachments to initiate forced authentication.[14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078",
                    "technique_link": "https://attack.mitre.org/techniques/T1078",
                    "technique_name": "valid accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of existing accounts as a means of gaining initial access, persistence, privilege escalation, or defense evasion. compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as vpns, outlook web access, network devices, and remote desktop. compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.",
                    "procedure_description": "dragonfly has compromised user credentials and used valid accounts for operations.[18][19][20]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110",
                    "technique_link": "https://attack.mitre.org/techniques/T1110",
                    "technique_name": "brute force",
                    "technique_description": "adversaries may use brute force techniques to gain access to accounts when passwords are unknown or when password hashes are obtained. without knowledge of the password for an account or set of accounts, an adversary may systematically guess the password using a repetitive or iterative mechanism. brute forcing passwords can take place via interaction with a service that will check the validity of those credentials or offline against previously acquired credential data, such as password hashes.",
                    "procedure_description": "dragonfly has attempted to brute force credentials to gain access.[11]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/002",
                    "technique_name": "brute force : password cracking",
                    "technique_description": "adversaries may use password cracking to attempt to recover usable credentials, such as plaintext passwords, when credential material such as password hashes are obtained. os credential dumping can be used to obtain password hashes, this may only get an adversary so far when pass the hash is not an option. further,  adversaries may leverage data from configuration repository in order to obtain hashed credentials for network devices.",
                    "procedure_description": "dragonfly has dropped and executed tools used for password cracking, including hydra and crackmapexec.[5][6]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1187",
                    "technique_link": "https://attack.mitre.org/techniques/T1187",
                    "technique_name": "forced authentication",
                    "technique_description": "adversaries may gather credential material by invoking or forcing a user to automatically provide authentication information through a mechanism in which they can intercept.",
                    "procedure_description": "dragonfly has gathered hashed user credentials over smb using spearphishing attachments with external resource links and by modifying .lnk file icon resources to collect credentials from virtualized systems.[9][10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "dragonfly has dropped and executed secretsdump to dump password hashes.[7]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/003",
                    "technique_name": "os credential dumping : ntds",
                    "technique_description": "adversaries may attempt to access or create a copy of the active directory domain database in order to steal credential information, as well as obtain other information about domain members such as devices, users, and access rights. by default, the ntds file (ntds.dit) is located in %systemroot%\\ntds\\ntds.dit of a domain controller.",
                    "procedure_description": "dragonfly has dropped and executed secretsdump to dump password hashes. they also obtained ntds.dit from domain controllers.[7][8]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "dragonfly has dropped and executed secretsdump to dump password hashes.[10][11]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "dragonfly has used batch scripts to enumerate users on a victim domain controller.[19]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "dragonfly has used a batch script to gather folder and file names from victim hosts.[106][107][108]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "dragonfly has identified and browsed file servers in the victim network, sometimes , viewing files pertaining to ics or supervisory control and data acquisition (scada) systems.[30]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "dragonfly has used batch scripts to enumerate administrators and users in the domain.[11]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "dragonfly has queried the registry to identify victim information.[35]"
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
                    "procedure_description": "dragonfly has likely obtained a list of hosts in the victim environment.[33]"
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
                    "procedure_description": "dragonfly has used batch scripts to enumerate network information, including information about trusts, zones, and the domain.[71]"
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
                    "procedure_description": "dragonfly used the command query user on victim hosts.[52]"
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
                    "procedure_description": "dragonfly has exploited a windows netlogon vulnerability (cve-2020-1472) to obtain access to windows active directory servers.[10]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/001",
                    "technique_name": "remote services : remote desktop protocol",
                    "technique_description": "adversaries may use valid accounts to log into a computer using the remote desktop protocol (rdp). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "dragonfly has moved laterally via rdp.[20]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "dragonfly has compressed data into .zip files prior to exfiltration.[16]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "dragonfly has collected data from local victim systems.[60]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "dragonfly has created a directory named \"out\" in the user's %appdata% folder and copied files to it.[25]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1114.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1114/002",
                    "technique_name": "email collection : remote email collection",
                    "technique_description": "adversaries may target an exchange server, office 365, or google workspace to collect sensitive information. adversaries may leverage a user's credentials and interact directly with the exchange server to acquire information from within a network. adversaries may also access externally facing exchange services, office 365, or google workspace to access email using credentials or access tokens. tools such as mailsniper can be used to automate searches for specific keywords.",
                    "procedure_description": "dragonfly has accessed email accounts using outlook web access.[6]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "dragonfly has performed screen captures of victims, including by using a tool, scr.exe (which matched the hash of screenutil).[53][54][55]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071",
                    "technique_link": "https://attack.mitre.org/techniques/T1071",
                    "technique_name": "application layer protocol",
                    "technique_description": "adversaries may communicate using osi application layer protocols to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "dragonfly has used smb for c2.[4]"
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
                    "procedure_description": "dragonfly has copied and installed tools for operations once in the victim environment.[151]"
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
        }
    ]
};